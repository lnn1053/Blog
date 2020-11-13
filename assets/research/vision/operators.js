var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var VRange = /** @class */ (function () {
    function VRange(min, max, step) {
        this.min = min;
        this.max = max;
        this.step = step;
    }
    VRange.prototype.inRange = function (val) {
        return (val >= this.min && val <= this.max);
    };
    return VRange;
}());
var OperatorType;
(function (OperatorType) {
    OperatorType[OperatorType["Point"] = 0] = "Point";
    OperatorType[OperatorType["Global"] = 1] = "Global";
    OperatorType[OperatorType["Local"] = 2] = "Local";
})(OperatorType || (OperatorType = {}));
var OperatorManager = /** @class */ (function () {
    function OperatorManager() {
        this.operators = [];
    }
    OperatorManager.getInstance = function () {
        if (!OperatorManager.instance) {
            OperatorManager.instance = new OperatorManager();
        }
        return OperatorManager.instance;
    };
    OperatorManager.prototype.register = function (operator) {
        this.operators.push(operator);
    };
    OperatorManager.prototype.getOperators = function () {
        return this.operators;
    };
    return OperatorManager;
}());
//#region Global functions
var clamp = function (val, min, max) {
    if (val < min)
        return min;
    if (val > max)
        return max;
    return val;
};
var blendValue = function (modified, original, alpha) {
    return modified * alpha + original * (1 - alpha);
};
//#endregion
//#region GlobalArguments
var ArgumentBase = /** @class */ (function () {
    function ArgumentBase(name, defaultValue, range) {
        this.name = name;
        this.defaultValue = defaultValue;
        this.range = range;
        this.value = defaultValue;
    }
    ArgumentBase.prototype.update = function (val) {
        if (!this.range.inRange(val)) {
            throw "Invalid value of argument";
        }
        this.value = val;
    };
    ;
    ArgumentBase.prototype.getValue = function () {
        return this.value;
    };
    return ArgumentBase;
}());
var BrightnessArgument = /** @class */ (function (_super) {
    __extends(BrightnessArgument, _super);
    function BrightnessArgument() {
        return _super.call(this, "Brightness (b)", 
        /* defaultValue= */ 0, new VRange(-100, 100, 1)) || this;
    }
    return BrightnessArgument;
}(ArgumentBase));
var LinearBlendArgument = /** @class */ (function (_super) {
    __extends(LinearBlendArgument, _super);
    function LinearBlendArgument(defaultValue) {
        return _super.call(this, "Blend (Α)", defaultValue === undefined ? 1 : defaultValue, new VRange(0, 1, 0.05)) || this;
    }
    return LinearBlendArgument;
}(ArgumentBase));
var ContrastArgument = /** @class */ (function (_super) {
    __extends(ContrastArgument, _super);
    function ContrastArgument() {
        return _super.call(this, "Contrast (a)", 
        /* defaultValue= */ 1, new VRange(0, 5, 0.1)) || this;
    }
    return ContrastArgument;
}(ArgumentBase));
var GammaArgument = /** @class */ (function (_super) {
    __extends(GammaArgument, _super);
    function GammaArgument() {
        return _super.call(this, "Tonemap Gamma (Γ)", 
        /* defaultValue= */ 1, new VRange(0, 3, 0.1)) || this;
    }
    return GammaArgument;
}(ArgumentBase));
var KernelSize = /** @class */ (function (_super) {
    __extends(KernelSize, _super);
    function KernelSize() {
        return _super.call(this, "Kernel Size (MxM)", 
        /* defaultValue= */ 1, new VRange(1, 9, 2)) || this;
    }
    return KernelSize;
}(ArgumentBase));
var BinaryArgument = /** @class */ (function (_super) {
    __extends(BinaryArgument, _super);
    function BinaryArgument() {
        return _super.call(this, "Binary Argument", 
        /* defaultValue= */ 0, new VRange(0, 1, 0)) || this;
    }
    return BinaryArgument;
}(ArgumentBase));
//#endregion
//#region Point Operators
//#region BrightningOperator
var BrightningOperator = /** @class */ (function () {
    function BrightningOperator() {
        this.type = OperatorType.Point;
        this.name = "Brightness";
        this.description = "Change the brightness of the image";
        this.arguments = [];
        this.arguments.push(new BrightnessArgument());
        this.arguments.push(new ContrastArgument());
        this.arguments.push(new LinearBlendArgument());
    }
    BrightningOperator.prototype.fn = function () {
        var brightness = parseInt(this.arguments[0].getValue());
        var contrast = parseFloat(this.arguments[1].getValue());
        var alpha = parseFloat(this.arguments[2].getValue());
        return function (_, __, ___, intensity) {
            var val = blendValue(
            /* modified= */ intensity * contrast + brightness, 
            /* original= */ intensity, 
            /* alpha= */ alpha);
            return clamp(val, 0, 255);
        };
    };
    return BrightningOperator;
}());
OperatorManager.getInstance().register(new BrightningOperator());
//#endregion
//#region GammaOperator
var GammaOperator = /** @class */ (function () {
    function GammaOperator() {
        this.type = OperatorType.Point;
        this.name = "Gamma Correction";
        this.description = "Change the linearity of the image";
        this.arguments = [];
        this.arguments.push(new GammaArgument());
        this.arguments.push(new LinearBlendArgument());
    }
    GammaOperator.prototype.fn = function () {
        var gamma = parseFloat(this.arguments[0].getValue());
        var alpha = parseFloat(this.arguments[1].getValue());
        var maxWhiteLevel = 255;
        var inverseGamma = 1 / gamma;
        // Create look up table for optimised tone mapping.
        var gammaLut = [];
        for (var i = 0; i < 256; ++i) {
            gammaLut[i] = Math.floor(Math.pow(i / maxWhiteLevel, inverseGamma) * maxWhiteLevel);
            if (gammaLut[i] > maxWhiteLevel)
                gammaLut[i] = maxWhiteLevel;
        }
        return function (_, __, ___, intensity) {
            return blendValue(
            /* modified= */ gammaLut[intensity], 
            /* original= */ intensity, 
            /* alpha= */ alpha);
        };
    };
    return GammaOperator;
}());
OperatorManager.getInstance().register(new GammaOperator());
//#endregion
//#endregion
//#endregion
//#region Global Operators
//#region HistorgramEqualization
var HistogramEqOperator = /** @class */ (function () {
    function HistogramEqOperator() {
        this.type = OperatorType.Global;
        this.name = "Histogram Equalization";
        this.description = "Balance the histogram of the image";
        this.arguments = [];
        this.arguments.push(new LinearBlendArgument(0));
    }
    HistogramEqOperator.prototype.fn = function () {
        var blend = parseFloat(this.arguments[0].getValue());
        return function (image) {
            var histograms = new Histograms(image, 256);
            var cdfs = new CDFs(histograms);
            // let lumaCdf: CDF = cdfs.getLumaCdf();
            var normalizedCdfs = [];
            for (var c = 0; c < image.channels; ++c) {
                normalizedCdfs[c] = createEmptyCdfLike(cdfs.getColorCdfs(c));
            }
            var binSize = histograms.binSize;
            var maxWhiteLevel = 255;
            for (var c = 0; c < image.channels; ++c) {
                var cdf = cdfs.getColorCdfs(c);
                var N = cdf[binSize - 1] - cdf[0];
                for (var i = 0; i < binSize; ++i) {
                    var nj = (cdf[i] - cdf[0]) * maxWhiteLevel;
                    normalizedCdfs[c][i] = Math.floor(nj / N);
                }
                for (var y = 0; y < image.height; ++y) {
                    for (var x = 0; x < image.width; ++x) {
                        var intensity = image.at(x, y, c);
                        intensity = blend * normalizedCdfs[c][intensity] + (1 - blend) * intensity;
                        image.update(x, y, c, intensity);
                    }
                }
            }
        };
    };
    return HistogramEqOperator;
}());
OperatorManager.getInstance().register(new HistogramEqOperator());
//#endregion
//#endregion
//#region Local Operators
//#region GaussianBlurring
var GaussianBlurringOperator = /** @class */ (function () {
    function GaussianBlurringOperator() {
        this.type = OperatorType.Local;
        this.name = "Gaussian Blurring";
        this.description = "Blurs the image";
        this.arguments = [];
        this.arguments.push(new KernelSize());
    }
    GaussianBlurringOperator.prototype.fn = function () {
        var kernelSize = parseInt(this.arguments[0].getValue());
        return function (image) {
            if (kernelSize == 1) {
                return;
            }
            var k1 = Math.floor(kernelSize / 2);
            var k2 = Math.ceil(kernelSize / 2) - 1;
            for (var c = 0; c < image.channels; ++c) {
                for (var y = 0; y < image.height; ++y) {
                    for (var x = 0; x < image.width; ++x) {
                        var sum = 0;
                        var count = 0;
                        for (var y1 = y - k1; y1 <= y + k2; ++y1) {
                            for (var x1 = x - k1; x1 <= x + k2; ++x1) {
                                if (y1 >= 0 && y1 < image.height && x1 >= 0 && x1 < image.width) {
                                    sum += image.at(x1, y1, c);
                                    count++;
                                }
                            }
                        }
                        image.update(x, y, c, Math.floor(sum / count));
                    }
                }
            }
        };
    };
    return GaussianBlurringOperator;
}());
OperatorManager.getInstance().register(new GaussianBlurringOperator());
//#endregion
//#region DerivativeOperator
var DerivativeOperator = /** @class */ (function () {
    function DerivativeOperator() {
        this.type = OperatorType.Local;
        this.name = "Derivative";
        this.description = "Converts to first order derivative of image";
        this.arguments = [];
        this.arguments.push(new BinaryArgument());
    }
    DerivativeOperator.prototype.fn = function () {
        var isEnabled = parseInt(this.arguments[0].getValue()) === 1;
        return function (image) {
            if (!isEnabled) {
                return;
            }
            var computeGray = function (x, y) {
                // return Math.floor((image.at(x, y, 0)
                //     + image.at(x, y, 1)
                //     + image.at(x, y, 2)) / 3);
                return image.at(x, y, 0);
            };
            for (var y = 0; y < image.height; ++y) {
                for (var x = 0; x < image.width; ++x) {
                    if (x == 0 || y == 0) {
                        image.update(x, y, 0, 0);
                        image.update(x, y, 1, 0);
                        image.update(x, y, 2, 0);
                    }
                    else {
                        var derivativeXR = Math.abs(image.at(x, y, 0) - image.at(x - 1, y, 0));
                        var derivativeXG = Math.abs(image.at(x, y, 1) - image.at(x - 1, y, 1));
                        var derivativeXB = Math.abs(image.at(x, y, 2) - image.at(x - 1, y, 2));
                        // let derivativeY = Math.abs(
                        //     computeGray(x, y) - computeGray(x, y - 1));
                        image.update(x, y, 0, clamp(derivativeXR, 0, 255));
                        image.update(x, y, 1, clamp(derivativeXG, 0, 255));
                        image.update(x, y, 2, clamp(derivativeXB, 0, 255));
                    }
                }
            }
        };
    };
    return DerivativeOperator;
}());
// OperatorManager.getInstance().register(new DerivativeOperator());
//#endregion
//#region Sharpening
var SharpeningOperator = /** @class */ (function () {
    function SharpeningOperator() {
        this.type = OperatorType.Local;
        this.name = "Sharpening";
        this.description = "Sharpens the image";
        this.arguments = [];
        this.arguments.push(new LinearBlendArgument(0));
    }
    SharpeningOperator.prototype.fn = function () {
        var blend = parseFloat(this.arguments[0].getValue());
        return function (image) {
            // TODO(mebjas): implement this.
        };
    };
    return SharpeningOperator;
}());
// OperatorManager.getInstance().register(new SharpeningOperator());
//#endregion
//#endregion
//# sourceMappingURL=operators.js.map