function ECB(e,t){this.count=e,this.dataCodewords=t,this.__defineGetter__("Count",function(){return this.count}),this.__defineGetter__("DataCodewords",function(){return this.dataCodewords})}function ECBlocks(e,t,n){this.ecCodewordsPerBlock=e,this.ecBlocks=n?[t,n]:Array(t),this.__defineGetter__("ECCodewordsPerBlock",function(){return this.ecCodewordsPerBlock}),this.__defineGetter__("TotalECCodewords",function(){return this.ecCodewordsPerBlock*this.NumBlocks}),this.__defineGetter__("NumBlocks",function(){for(var e=0,t=0;t<this.ecBlocks.length;t++)e+=this.ecBlocks[t].length;return e}),this.getECBlocks=function(){return this.ecBlocks}}function Version(e,t,n,i,r,o){for(this.versionNumber=e,this.alignmentPatternCenters=t,this.ecBlocks=[n,i,r,o],e=0,t=n.ECCodewordsPerBlock,n=n.getECBlocks(),i=0;i<n.length;i++)r=n[i],e+=r.Count*(r.DataCodewords+t);this.totalCodewords=e,this.__defineGetter__("VersionNumber",function(){return this.versionNumber}),this.__defineGetter__("AlignmentPatternCenters",function(){return this.alignmentPatternCenters}),this.__defineGetter__("TotalCodewords",function(){return this.totalCodewords}),this.__defineGetter__("DimensionForVersion",function(){return 17+4*this.versionNumber}),this.buildFunctionPattern=function(){var e=this.DimensionForVersion,t=new BitMatrix(e);t.setRegion(0,0,9,9),t.setRegion(e-8,0,8,9),t.setRegion(0,e-8,9,8);for(var n=this.alignmentPatternCenters.length,i=0;n>i;i++)for(var r=this.alignmentPatternCenters[i]-2,o=0;n>o;o++)0==i&&(0==o||o==n-1)||i==n-1&&0==o||t.setRegion(this.alignmentPatternCenters[o]-2,r,5,5);return t.setRegion(6,9,1,e-17),t.setRegion(9,6,e-17,1),6<this.versionNumber&&(t.setRegion(e-11,0,3,6),t.setRegion(0,e-11,6,3)),t},this.getECBlocksForLevel=function(e){return this.ecBlocks[e.ordinal()]}}function buildVersions(){return[new Version(1,[],new ECBlocks(7,new ECB(1,19)),new ECBlocks(10,new ECB(1,16)),new ECBlocks(13,new ECB(1,13)),new ECBlocks(17,new ECB(1,9))),new Version(2,[6,18],new ECBlocks(10,new ECB(1,34)),new ECBlocks(16,new ECB(1,28)),new ECBlocks(22,new ECB(1,22)),new ECBlocks(28,new ECB(1,16))),new Version(3,[6,22],new ECBlocks(15,new ECB(1,55)),new ECBlocks(26,new ECB(1,44)),new ECBlocks(18,new ECB(2,17)),new ECBlocks(22,new ECB(2,13))),new Version(4,[6,26],new ECBlocks(20,new ECB(1,80)),new ECBlocks(18,new ECB(2,32)),new ECBlocks(26,new ECB(2,24)),new ECBlocks(16,new ECB(4,9))),new Version(5,[6,30],new ECBlocks(26,new ECB(1,108)),new ECBlocks(24,new ECB(2,43)),new ECBlocks(18,new ECB(2,15),new ECB(2,16)),new ECBlocks(22,new ECB(2,11),new ECB(2,12))),new Version(6,[6,34],new ECBlocks(18,new ECB(2,68)),new ECBlocks(16,new ECB(4,27)),new ECBlocks(24,new ECB(4,19)),new ECBlocks(28,new ECB(4,15))),new Version(7,[6,22,38],new ECBlocks(20,new ECB(2,78)),new ECBlocks(18,new ECB(4,31)),new ECBlocks(18,new ECB(2,14),new ECB(4,15)),new ECBlocks(26,new ECB(4,13),new ECB(1,14))),new Version(8,[6,24,42],new ECBlocks(24,new ECB(2,97)),new ECBlocks(22,new ECB(2,38),new ECB(2,39)),new ECBlocks(22,new ECB(4,18),new ECB(2,19)),new ECBlocks(26,new ECB(4,14),new ECB(2,15))),new Version(9,[6,26,46],new ECBlocks(30,new ECB(2,116)),new ECBlocks(22,new ECB(3,36),new ECB(2,37)),new ECBlocks(20,new ECB(4,16),new ECB(4,17)),new ECBlocks(24,new ECB(4,12),new ECB(4,13))),new Version(10,[6,28,50],new ECBlocks(18,new ECB(2,68),new ECB(2,69)),new ECBlocks(26,new ECB(4,43),new ECB(1,44)),new ECBlocks(24,new ECB(6,19),new ECB(2,20)),new ECBlocks(28,new ECB(6,15),new ECB(2,16))),new Version(11,[6,30,54],new ECBlocks(20,new ECB(4,81)),new ECBlocks(30,new ECB(1,50),new ECB(4,51)),new ECBlocks(28,new ECB(4,22),new ECB(4,23)),new ECBlocks(24,new ECB(3,12),new ECB(8,13))),new Version(12,[6,32,58],new ECBlocks(24,new ECB(2,92),new ECB(2,93)),new ECBlocks(22,new ECB(6,36),new ECB(2,37)),new ECBlocks(26,new ECB(4,20),new ECB(6,21)),new ECBlocks(28,new ECB(7,14),new ECB(4,15))),new Version(13,[6,34,62],new ECBlocks(26,new ECB(4,107)),new ECBlocks(22,new ECB(8,37),new ECB(1,38)),new ECBlocks(24,new ECB(8,20),new ECB(4,21)),new ECBlocks(22,new ECB(12,11),new ECB(4,12))),new Version(14,[6,26,46,66],new ECBlocks(30,new ECB(3,115),new ECB(1,116)),new ECBlocks(24,new ECB(4,40),new ECB(5,41)),new ECBlocks(20,new ECB(11,16),new ECB(5,17)),new ECBlocks(24,new ECB(11,12),new ECB(5,13))),new Version(15,[6,26,48,70],new ECBlocks(22,new ECB(5,87),new ECB(1,88)),new ECBlocks(24,new ECB(5,41),new ECB(5,42)),new ECBlocks(30,new ECB(5,24),new ECB(7,25)),new ECBlocks(24,new ECB(11,12),new ECB(7,13))),new Version(16,[6,26,50,74],new ECBlocks(24,new ECB(5,98),new ECB(1,99)),new ECBlocks(28,new ECB(7,45),new ECB(3,46)),new ECBlocks(24,new ECB(15,19),new ECB(2,20)),new ECBlocks(30,new ECB(3,15),new ECB(13,16))),new Version(17,[6,30,54,78],new ECBlocks(28,new ECB(1,107),new ECB(5,108)),new ECBlocks(28,new ECB(10,46),new ECB(1,47)),new ECBlocks(28,new ECB(1,22),new ECB(15,23)),new ECBlocks(28,new ECB(2,14),new ECB(17,15))),new Version(18,[6,30,56,82],new ECBlocks(30,new ECB(5,120),new ECB(1,121)),new ECBlocks(26,new ECB(9,43),new ECB(4,44)),new ECBlocks(28,new ECB(17,22),new ECB(1,23)),new ECBlocks(28,new ECB(2,14),new ECB(19,15))),new Version(19,[6,30,58,86],new ECBlocks(28,new ECB(3,113),new ECB(4,114)),new ECBlocks(26,new ECB(3,44),new ECB(11,45)),new ECBlocks(26,new ECB(17,21),new ECB(4,22)),new ECBlocks(26,new ECB(9,13),new ECB(16,14))),new Version(20,[6,34,62,90],new ECBlocks(28,new ECB(3,107),new ECB(5,108)),new ECBlocks(26,new ECB(3,41),new ECB(13,42)),new ECBlocks(30,new ECB(15,24),new ECB(5,25)),new ECBlocks(28,new ECB(15,15),new ECB(10,16))),new Version(21,[6,28,50,72,94],new ECBlocks(28,new ECB(4,116),new ECB(4,117)),new ECBlocks(26,new ECB(17,42)),new ECBlocks(28,new ECB(17,22),new ECB(6,23)),new ECBlocks(30,new ECB(19,16),new ECB(6,17))),new Version(22,[6,26,50,74,98],new ECBlocks(28,new ECB(2,111),new ECB(7,112)),new ECBlocks(28,new ECB(17,46)),new ECBlocks(30,new ECB(7,24),new ECB(16,25)),new ECBlocks(24,new ECB(34,13))),new Version(23,[6,30,54,74,102],new ECBlocks(30,new ECB(4,121),new ECB(5,122)),new ECBlocks(28,new ECB(4,47),new ECB(14,48)),new ECBlocks(30,new ECB(11,24),new ECB(14,25)),new ECBlocks(30,new ECB(16,15),new ECB(14,16))),new Version(24,[6,28,54,80,106],new ECBlocks(30,new ECB(6,117),new ECB(4,118)),new ECBlocks(28,new ECB(6,45),new ECB(14,46)),new ECBlocks(30,new ECB(11,24),new ECB(16,25)),new ECBlocks(30,new ECB(30,16),new ECB(2,17))),new Version(25,[6,32,58,84,110],new ECBlocks(26,new ECB(8,106),new ECB(4,107)),new ECBlocks(28,new ECB(8,47),new ECB(13,48)),new ECBlocks(30,new ECB(7,24),new ECB(22,25)),new ECBlocks(30,new ECB(22,15),new ECB(13,16))),new Version(26,[6,30,58,86,114],new ECBlocks(28,new ECB(10,114),new ECB(2,115)),new ECBlocks(28,new ECB(19,46),new ECB(4,47)),new ECBlocks(28,new ECB(28,22),new ECB(6,23)),new ECBlocks(30,new ECB(33,16),new ECB(4,17))),new Version(27,[6,34,62,90,118],new ECBlocks(30,new ECB(8,122),new ECB(4,123)),new ECBlocks(28,new ECB(22,45),new ECB(3,46)),new ECBlocks(30,new ECB(8,23),new ECB(26,24)),new ECBlocks(30,new ECB(12,15),new ECB(28,16))),new Version(28,[6,26,50,74,98,122],new ECBlocks(30,new ECB(3,117),new ECB(10,118)),new ECBlocks(28,new ECB(3,45),new ECB(23,46)),new ECBlocks(30,new ECB(4,24),new ECB(31,25)),new ECBlocks(30,new ECB(11,15),new ECB(31,16))),new Version(29,[6,30,54,78,102,126],new ECBlocks(30,new ECB(7,116),new ECB(7,117)),new ECBlocks(28,new ECB(21,45),new ECB(7,46)),new ECBlocks(30,new ECB(1,23),new ECB(37,24)),new ECBlocks(30,new ECB(19,15),new ECB(26,16))),new Version(30,[6,26,52,78,104,130],new ECBlocks(30,new ECB(5,115),new ECB(10,116)),new ECBlocks(28,new ECB(19,47),new ECB(10,48)),new ECBlocks(30,new ECB(15,24),new ECB(25,25)),new ECBlocks(30,new ECB(23,15),new ECB(25,16))),new Version(31,[6,30,56,82,108,134],new ECBlocks(30,new ECB(13,115),new ECB(3,116)),new ECBlocks(28,new ECB(2,46),new ECB(29,47)),new ECBlocks(30,new ECB(42,24),new ECB(1,25)),new ECBlocks(30,new ECB(23,15),new ECB(28,16))),new Version(32,[6,34,60,86,112,138],new ECBlocks(30,new ECB(17,115)),new ECBlocks(28,new ECB(10,46),new ECB(23,47)),new ECBlocks(30,new ECB(10,24),new ECB(35,25)),new ECBlocks(30,new ECB(19,15),new ECB(35,16))),new Version(33,[6,30,58,86,114,142],new ECBlocks(30,new ECB(17,115),new ECB(1,116)),new ECBlocks(28,new ECB(14,46),new ECB(21,47)),new ECBlocks(30,new ECB(29,24),new ECB(19,25)),new ECBlocks(30,new ECB(11,15),new ECB(46,16))),new Version(34,[6,34,62,90,118,146],new ECBlocks(30,new ECB(13,115),new ECB(6,116)),new ECBlocks(28,new ECB(14,46),new ECB(23,47)),new ECBlocks(30,new ECB(44,24),new ECB(7,25)),new ECBlocks(30,new ECB(59,16),new ECB(1,17))),new Version(35,[6,30,54,78,102,126,150],new ECBlocks(30,new ECB(12,121),new ECB(7,122)),new ECBlocks(28,new ECB(12,47),new ECB(26,48)),new ECBlocks(30,new ECB(39,24),new ECB(14,25)),new ECBlocks(30,new ECB(22,15),new ECB(41,16))),new Version(36,[6,24,50,76,102,128,154],new ECBlocks(30,new ECB(6,121),new ECB(14,122)),new ECBlocks(28,new ECB(6,47),new ECB(34,48)),new ECBlocks(30,new ECB(46,24),new ECB(10,25)),new ECBlocks(30,new ECB(2,15),new ECB(64,16))),new Version(37,[6,28,54,80,106,132,158],new ECBlocks(30,new ECB(17,122),new ECB(4,123)),new ECBlocks(28,new ECB(29,46),new ECB(14,47)),new ECBlocks(30,new ECB(49,24),new ECB(10,25)),new ECBlocks(30,new ECB(24,15),new ECB(46,16))),new Version(38,[6,32,58,84,110,136,162],new ECBlocks(30,new ECB(4,122),new ECB(18,123)),new ECBlocks(28,new ECB(13,46),new ECB(32,47)),new ECBlocks(30,new ECB(48,24),new ECB(14,25)),new ECBlocks(30,new ECB(42,15),new ECB(32,16))),new Version(39,[6,26,54,82,110,138,166],new ECBlocks(30,new ECB(20,117),new ECB(4,118)),new ECBlocks(28,new ECB(40,47),new ECB(7,48)),new ECBlocks(30,new ECB(43,24),new ECB(22,25)),new ECBlocks(30,new ECB(10,15),new ECB(67,16))),new Version(40,[6,30,58,86,114,142,170],new ECBlocks(30,new ECB(19,118),new ECB(6,119)),new ECBlocks(28,new ECB(18,47),new ECB(31,48)),new ECBlocks(30,new ECB(34,24),new ECB(34,25)),new ECBlocks(30,new ECB(20,15),new ECB(61,16)))]}function PerspectiveTransform(e,t,n,i,r,o,s,a,h){this.a11=e,this.a12=i,this.a13=s,this.a21=t,this.a22=r,this.a23=a,this.a31=n,this.a32=o,this.a33=h,this.transformPoints1=function(e){for(var t=e.length,n=this.a11,i=this.a12,r=this.a13,o=this.a21,s=this.a22,a=this.a23,h=this.a31,c=this.a32,l=this.a33,f=0;t>f;f+=2){var d=e[f],w=e[f+1],u=r*d+a*w+l;e[f]=(n*d+o*w+h)/u,e[f+1]=(i*d+s*w+c)/u}},this.transformPoints2=function(e,t){for(var n=e.length,i=0;n>i;i++){var r=e[i],o=t[i],s=this.a13*r+this.a23*o+this.a33;e[i]=(this.a11*r+this.a21*o+this.a31)/s,t[i]=(this.a12*r+this.a22*o+this.a32)/s}},this.buildAdjoint=function(){return new PerspectiveTransform(this.a22*this.a33-this.a23*this.a32,this.a23*this.a31-this.a21*this.a33,this.a21*this.a32-this.a22*this.a31,this.a13*this.a32-this.a12*this.a33,this.a11*this.a33-this.a13*this.a31,this.a12*this.a31-this.a11*this.a32,this.a12*this.a23-this.a13*this.a22,this.a13*this.a21-this.a11*this.a23,this.a11*this.a22-this.a12*this.a21)},this.times=function(e){return new PerspectiveTransform(this.a11*e.a11+this.a21*e.a12+this.a31*e.a13,this.a11*e.a21+this.a21*e.a22+this.a31*e.a23,this.a11*e.a31+this.a21*e.a32+this.a31*e.a33,this.a12*e.a11+this.a22*e.a12+this.a32*e.a13,this.a12*e.a21+this.a22*e.a22+this.a32*e.a23,this.a12*e.a31+this.a22*e.a32+this.a32*e.a33,this.a13*e.a11+this.a23*e.a12+this.a33*e.a13,this.a13*e.a21+this.a23*e.a22+this.a33*e.a23,this.a13*e.a31+this.a23*e.a32+this.a33*e.a33)}}function DetectorResult(e,t){this.bits=e,this.points=t}function Detector(e){this.image=e,this.resultPointCallback=null,this.sizeOfBlackWhiteBlackRun=function(e,t,n,i){var r=Math.abs(i-t)>Math.abs(n-e);if(r){var o=e;e=t,t=o,o=n,n=i,i=o}for(var s=Math.abs(n-e),a=Math.abs(i-t),h=-s>>1,c=i>t?1:-1,l=n>e?1:-1,f=0,d=e,o=t;d!=n;d+=l){var w=r?o:d,u=r?d:o;if(1==f?this.image[w+u*qrcode.width]&&f++:this.image[w+u*qrcode.width]||f++,3==f)return i=d-e,t=o-t,Math.sqrt(i*i+t*t);if(h+=a,h>0){if(o==i)break;o+=c,h-=s}}return e=n-e,t=i-t,Math.sqrt(e*e+t*t)},this.sizeOfBlackWhiteBlackRunBothWays=function(e,t,n,i){var r=this.sizeOfBlackWhiteBlackRun(e,t,n,i),o=1;return n=e-(n-e),0>n?(o=e/(e-n),n=0):n>=qrcode.width&&(o=(qrcode.width-1-e)/(n-e),n=qrcode.width-1),i=Math.floor(t-(i-t)*o),o=1,0>i?(o=t/(t-i),i=0):i>=qrcode.height&&(o=(qrcode.height-1-t)/(i-t),i=qrcode.height-1),n=Math.floor(e+(n-e)*o),r+=this.sizeOfBlackWhiteBlackRun(e,t,n,i),r-1},this.calculateModuleSizeOneWay=function(e,t){var n=this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(e.X),Math.floor(e.Y),Math.floor(t.X),Math.floor(t.Y)),i=this.sizeOfBlackWhiteBlackRunBothWays(Math.floor(t.X),Math.floor(t.Y),Math.floor(e.X),Math.floor(e.Y));return isNaN(n)?i/7:isNaN(i)?n/7:(n+i)/14},this.calculateModuleSize=function(e,t,n){return(this.calculateModuleSizeOneWay(e,t)+this.calculateModuleSizeOneWay(e,n))/2},this.distance=function(e,t){return xDiff=e.X-t.X,yDiff=e.Y-t.Y,Math.sqrt(xDiff*xDiff+yDiff*yDiff)},this.computeDimension=function(e,t,n,i){switch(t=Math.round(this.distance(e,t)/i),e=Math.round(this.distance(e,n)/i),e=(t+e>>1)+7,3&e){case 0:e++;break;case 2:e--;break;case 3:throw"Error"}return e},this.findAlignmentInRegion=function(e,t,n,i){var r=Math.floor(i*e);if(i=Math.max(0,t-r),t=Math.min(qrcode.width-1,t+r),3*e>t-i)throw"Error";var o=Math.max(0,n-r);return n=Math.min(qrcode.height-1,n+r),new AlignmentPatternFinder(this.image,i,o,t-i,n-o,e,this.resultPointCallback).find()},this.createTransform=function(e,t,n,i,r){r-=3.5;var o,s,a;return null!=i?(o=i.X,i=i.Y,s=a=r-3):(o=t.X-e.X+n.X,i=t.Y-e.Y+n.Y,s=a=r),PerspectiveTransform.quadrilateralToQuadrilateral(3.5,3.5,r,3.5,s,a,3.5,r,e.X,e.Y,t.X,t.Y,o,i,n.X,n.Y)},this.sampleGrid=function(e,t,n){return GridSampler.sampleGrid3(e,n,t)},this.processFinderPatternInfo=function(e){var t=e.TopLeft,n=e.TopRight;e=e.BottomLeft;var i=this.calculateModuleSize(t,n,e);if(1>i)throw"Error";var r=this.computeDimension(t,n,e,i),o=Version.getProvisionalVersionForDimension(r),s=o.DimensionForVersion-7,a=null;if(0<o.AlignmentPatternCenters.length)for(s=1-3/s,o=Math.floor(t.X+s*(n.X-t.X+e.X-t.X)),s=Math.floor(t.Y+s*(n.Y-t.Y+e.Y-t.Y));;){a=this.findAlignmentInRegion(i,o,s,4);break}return i=this.createTransform(t,n,e,a,r),r=this.sampleGrid(this.image,i,r),new DetectorResult(r,null==a?[e,t,n]:[e,t,n,a])},this.detect=function(){var e=(new FinderPatternFinder).findFinderPattern(this.image);return this.processFinderPatternInfo(e)}}function FormatInformation(e){this.errorCorrectionLevel=ErrorCorrectionLevel.forBits(e>>3&3),this.dataMask=7&e,this.__defineGetter__("ErrorCorrectionLevel",function(){return this.errorCorrectionLevel}),this.__defineGetter__("DataMask",function(){return this.dataMask}),this.GetHashCode=function(){return this.errorCorrectionLevel.ordinal()<<3|dataMask},this.Equals=function(e){return this.errorCorrectionLevel==e.errorCorrectionLevel&&this.dataMask==e.dataMask}}function ErrorCorrectionLevel(e,t,n){this.ordinal_Renamed_Field=e,this.bits=t,this.name=n,this.__defineGetter__("Bits",function(){return this.bits}),this.__defineGetter__("Name",function(){return this.name}),this.ordinal=function(){return this.ordinal_Renamed_Field}}function BitMatrix(e,t){if(t||(t=e),1>e||1>t)throw"Both dimensions must be greater than 0";this.width=e,this.height=t;var n=e>>5;for(0!=(31&e)&&n++,this.rowSize=n,this.bits=Array(n*t),n=0;n<this.bits.length;n++)this.bits[n]=0;this.__defineGetter__("Width",function(){return this.width}),this.__defineGetter__("Height",function(){return this.height}),this.__defineGetter__("Dimension",function(){if(this.width!=this.height)throw"Can't call getDimension() on a non-square matrix";return this.width}),this.get_Renamed=function(e,t){return 0!=(1&URShift(this.bits[t*this.rowSize+(e>>5)],31&e))},this.set_Renamed=function(e,t){this.bits[t*this.rowSize+(e>>5)]|=1<<(31&e)},this.flip=function(e,t){this.bits[t*this.rowSize+(e>>5)]^=1<<(31&e)},this.clear=function(){for(var e=this.bits.length,t=0;e>t;t++)this.bits[t]=0},this.setRegion=function(e,t,n,i){if(0>t||0>e)throw"Left and top must be nonnegative";if(1>i||1>n)throw"Height and width must be at least 1";if(n=e+n,i=t+i,i>this.height||n>this.width)throw"The region must fit inside the matrix";for(;i>t;t++)for(var r=t*this.rowSize,o=e;n>o;o++)this.bits[r+(o>>5)]|=1<<(31&o)}}function DataBlock(e,t){this.numDataCodewords=e,this.codewords=t,this.__defineGetter__("NumDataCodewords",function(){return this.numDataCodewords}),this.__defineGetter__("Codewords",function(){return this.codewords})}function BitMatrixParser(e){var t=e.Dimension;if(21>t||1!=(3&t))throw"Error BitMatrixParser";this.bitMatrix=e,this.parsedFormatInfo=this.parsedVersion=null,this.copyBit=function(e,t,n){return this.bitMatrix.get_Renamed(e,t)?n<<1|1:n<<1},this.readFormatInformation=function(){if(null!=this.parsedFormatInfo)return this.parsedFormatInfo;for(var e=0,t=0;6>t;t++)e=this.copyBit(t,8,e);for(e=this.copyBit(7,8,e),e=this.copyBit(8,8,e),e=this.copyBit(8,7,e),t=5;t>=0;t--)e=this.copyBit(8,t,e);if(this.parsedFormatInfo=FormatInformation.decodeFormatInformation(e),null!=this.parsedFormatInfo)return this.parsedFormatInfo;for(var n=this.bitMatrix.Dimension,e=0,i=n-8,t=n-1;t>=i;t--)e=this.copyBit(t,8,e);for(t=n-7;n>t;t++)e=this.copyBit(8,t,e);if(this.parsedFormatInfo=FormatInformation.decodeFormatInformation(e),null!=this.parsedFormatInfo)return this.parsedFormatInfo;throw"Error readFormatInformation"},this.readVersion=function(){if(null!=this.parsedVersion)return this.parsedVersion;var e=this.bitMatrix.Dimension,t=e-17>>2;if(6>=t)return Version.getVersionForNumber(t);for(var t=0,n=e-11,i=5;i>=0;i--)for(var r=e-9;r>=n;r--)t=this.copyBit(r,i,t);if(this.parsedVersion=Version.decodeVersionInformation(t),null!=this.parsedVersion&&this.parsedVersion.DimensionForVersion==e)return this.parsedVersion;for(t=0,r=5;r>=0;r--)for(i=e-9;i>=n;i--)t=this.copyBit(r,i,t);if(this.parsedVersion=Version.decodeVersionInformation(t),null!=this.parsedVersion&&this.parsedVersion.DimensionForVersion==e)return this.parsedVersion;throw"Error readVersion"},this.readCodewords=function(){var e=this.readFormatInformation(),t=this.readVersion(),n=DataMask.forReference(e.DataMask),e=this.bitMatrix.Dimension;n.unmaskBitMatrix(this.bitMatrix,e);for(var n=t.buildFunctionPattern(),i=!0,r=Array(t.TotalCodewords),o=0,s=0,a=0,h=e-1;h>0;h-=2){6==h&&h--;for(var c=0;e>c;c++)for(var l=i?e-1-c:c,f=0;2>f;f++)n.get_Renamed(h-f,l)||(a++,s<<=1,this.bitMatrix.get_Renamed(h-f,l)&&(s|=1),8==a&&(r[o++]=s,s=a=0));i^=1}if(o!=t.TotalCodewords)throw"Error readCodewords";return r}}function DataMask000(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e,t){return 0==(e+t&1)}}function DataMask001(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e){return 0==(1&e)}}function DataMask010(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e,t){return 0==t%3}}function DataMask011(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e,t){return 0==(e+t)%3}}function DataMask100(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e,t){return 0==(URShift(e,1)+t/3&1)}}function DataMask101(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e,t){var n=e*t;return 0==(1&n)+n%3}}function DataMask110(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e,t){var n=e*t;return 0==((1&n)+n%3&1)}}function DataMask111(){this.unmaskBitMatrix=function(e,t){for(var n=0;t>n;n++)for(var i=0;t>i;i++)this.isMasked(n,i)&&e.flip(i,n)},this.isMasked=function(e,t){return 0==((e+t&1)+e*t%3&1)}}function ReedSolomonDecoder(e){this.field=e,this.decode=function(e,t){for(var n=new GF256Poly(this.field,e),i=Array(t),r=0;r<i.length;r++)i[r]=0;for(var o=!0,r=0;t>r;r++){var s=n.evaluateAt(this.field.exp(r));i[i.length-1-r]=s,0!=s&&(o=!1)}if(!o)for(r=new GF256Poly(this.field,i),n=this.runEuclideanAlgorithm(this.field.buildMonomial(t,1),r,t),r=n[1],n=this.findErrorLocations(n[0]),i=this.findErrorMagnitudes(r,n,!1),r=0;r<n.length;r++){if(o=e.length-1-this.field.log(n[r]),0>o)throw"ReedSolomonException Bad error location";e[o]=GF256.addOrSubtract(e[o],i[r])}},this.runEuclideanAlgorithm=function(e,t,n){if(e.Degree<t.Degree){var i=e;e=t,t=i}for(var i=this.field.One,r=this.field.Zero,o=this.field.Zero,s=this.field.One;t.Degree>=Math.floor(n/2);){var a=e,h=i,c=o;if(e=t,i=r,o=s,e.Zero)throw"r_{i-1} was zero";for(t=a,s=this.field.Zero,r=e.getCoefficient(e.Degree),r=this.field.inverse(r);t.Degree>=e.Degree&&!t.Zero;){var a=t.Degree-e.Degree,l=this.field.multiply(t.getCoefficient(t.Degree),r),s=s.addOrSubtract(this.field.buildMonomial(a,l));t=t.addOrSubtract(e.multiplyByMonomial(a,l))}r=s.multiply1(i).addOrSubtract(h),s=s.multiply1(o).addOrSubtract(c)}if(n=s.getCoefficient(0),0==n)throw"ReedSolomonException sigmaTilde(0) was zero";return n=this.field.inverse(n),e=s.multiply2(n),n=t.multiply2(n),[e,n]},this.findErrorLocations=function(e){var t=e.Degree;if(1==t)return Array(e.getCoefficient(1));for(var n=Array(t),i=0,r=1;256>r&&t>i;r++)0==e.evaluateAt(r)&&(n[i]=this.field.inverse(r),i++);if(i!=t)throw"Error locator degree does not match number of roots";return n},this.findErrorMagnitudes=function(e,t,n){for(var i=t.length,r=Array(i),o=0;i>o;o++){for(var s=this.field.inverse(t[o]),a=1,h=0;i>h;h++)o!=h&&(a=this.field.multiply(a,GF256.addOrSubtract(1,this.field.multiply(t[h],s))));r[o]=this.field.multiply(e.evaluateAt(s),this.field.inverse(a)),n&&(r[o]=this.field.multiply(r[o],s))}return r}}function GF256Poly(e,t){if(null==t||0==t.length)throw"System.ArgumentException";this.field=e;var n=t.length;if(n>1&&0==t[0]){for(var i=1;n>i&&0==t[i];)i++;if(i==n)this.coefficients=e.Zero.coefficients;else{for(this.coefficients=Array(n-i),n=0;n<this.coefficients.length;n++)this.coefficients[n]=0;for(n=0;n<this.coefficients.length;n++)this.coefficients[n]=t[i+n]}}else this.coefficients=t;this.__defineGetter__("Zero",function(){return 0==this.coefficients[0]}),this.__defineGetter__("Degree",function(){return this.coefficients.length-1}),this.__defineGetter__("Coefficients",function(){return this.coefficients}),this.getCoefficient=function(e){return this.coefficients[this.coefficients.length-1-e]},this.evaluateAt=function(e){if(0==e)return this.getCoefficient(0);var t=this.coefficients.length;if(1==e){for(var n=e=0;t>n;n++)e=GF256.addOrSubtract(e,this.coefficients[n]);return e}for(var i=this.coefficients[0],n=1;t>n;n++)i=GF256.addOrSubtract(this.field.multiply(e,i),this.coefficients[n]);return i},this.addOrSubtract=function(t){if(this.field!=t.field)throw"GF256Polys do not have same GF256 field";if(this.Zero)return t;if(t.Zero)return this;var n=this.coefficients;if(t=t.coefficients,n.length>t.length){var i=n,n=t;t=i}for(var i=Array(t.length),r=t.length-n.length,o=0;r>o;o++)i[o]=t[o];for(o=r;o<t.length;o++)i[o]=GF256.addOrSubtract(n[o-r],t[o]);return new GF256Poly(e,i)},this.multiply1=function(e){if(this.field!=e.field)throw"GF256Polys do not have same GF256 field";if(this.Zero||e.Zero)return this.field.Zero;var t=this.coefficients,n=t.length;e=e.coefficients;for(var i=e.length,r=Array(n+i-1),o=0;n>o;o++)for(var s=t[o],a=0;i>a;a++)r[o+a]=GF256.addOrSubtract(r[o+a],this.field.multiply(s,e[a]));return new GF256Poly(this.field,r)},this.multiply2=function(e){if(0==e)return this.field.Zero;if(1==e)return this;for(var t=this.coefficients.length,n=Array(t),i=0;t>i;i++)n[i]=this.field.multiply(this.coefficients[i],e);return new GF256Poly(this.field,n)},this.multiplyByMonomial=function(e,t){if(0>e)throw"System.ArgumentException";if(0==t)return this.field.Zero;for(var n=this.coefficients.length,i=Array(n+e),r=0;r<i.length;r++)i[r]=0;for(r=0;n>r;r++)i[r]=this.field.multiply(this.coefficients[r],t);return new GF256Poly(this.field,i)},this.divide=function(e){if(this.field!=e.field)throw"GF256Polys do not have same GF256 field";if(e.Zero)throw"Divide by 0";for(var t=this.field.Zero,n=this,i=e.getCoefficient(e.Degree),i=this.field.inverse(i);n.Degree>=e.Degree&&!n.Zero;)var r=n.Degree-e.Degree,o=this.field.multiply(n.getCoefficient(n.Degree),i),s=e.multiplyByMonomial(r,o),r=this.field.buildMonomial(r,o),t=t.addOrSubtract(r),n=n.addOrSubtract(s);return[t,n]}}function GF256(e){this.expTable=Array(256),this.logTable=Array(256);for(var t=1,n=0;256>n;n++)this.expTable[n]=t,t<<=1,t>=256&&(t^=e);for(n=0;255>n;n++)this.logTable[this.expTable[n]]=n;e=Array(1),e[0]=0,this.zero=new GF256Poly(this,Array(e)),e=Array(1),e[0]=1,this.one=new GF256Poly(this,Array(e)),this.__defineGetter__("Zero",function(){return this.zero}),this.__defineGetter__("One",function(){return this.one}),this.buildMonomial=function(e,t){if(0>e)throw"System.ArgumentException";if(0==t)return zero;for(var n=Array(e+1),i=0;i<n.length;i++)n[i]=0;return n[0]=t,new GF256Poly(this,n)},this.exp=function(e){return this.expTable[e]},this.log=function(e){if(0==e)throw"System.ArgumentException";return this.logTable[e]},this.inverse=function(e){if(0==e)throw"System.ArithmeticException";return this.expTable[255-this.logTable[e]]},this.multiply=function(e,t){return 0==e||0==t?0:1==e?t:1==t?e:this.expTable[(this.logTable[e]+this.logTable[t])%255]}}function URShift(e,t){return e>=0?e>>t:(e>>t)+(2<<~t)}function FinderPattern(e,t,n){this.x=e,this.y=t,this.count=1,this.estimatedModuleSize=n,this.__defineGetter__("EstimatedModuleSize",function(){return this.estimatedModuleSize}),this.__defineGetter__("Count",function(){return this.count}),this.__defineGetter__("X",function(){return this.x}),this.__defineGetter__("Y",function(){return this.y}),this.incrementCount=function(){this.count++},this.aboutEquals=function(e,t,n){return Math.abs(t-this.y)<=e&&Math.abs(n-this.x)<=e?(e=Math.abs(e-this.estimatedModuleSize),1>=e||1>=e/this.estimatedModuleSize):!1}}function FinderPatternInfo(e){this.bottomLeft=e[0],this.topLeft=e[1],this.topRight=e[2],this.__defineGetter__("BottomLeft",function(){return this.bottomLeft}),this.__defineGetter__("TopLeft",function(){return this.topLeft}),this.__defineGetter__("TopRight",function(){return this.topRight})}function FinderPatternFinder(){this.image=null,this.possibleCenters=[],this.hasSkipped=!1,this.crossCheckStateCount=[0,0,0,0,0],this.resultPointCallback=null,this.__defineGetter__("CrossCheckStateCount",function(){return this.crossCheckStateCount[0]=0,this.crossCheckStateCount[1]=0,this.crossCheckStateCount[2]=0,this.crossCheckStateCount[3]=0,this.crossCheckStateCount[4]=0,this.crossCheckStateCount}),this.foundPatternCross=function(e){for(var t=0,n=0;5>n;n++){var i=e[n];if(0==i)return!1;t+=i}return 7>t?!1:(t=Math.floor((t<<INTEGER_MATH_SHIFT)/7),n=Math.floor(t/2),Math.abs(t-(e[0]<<INTEGER_MATH_SHIFT))<n&&Math.abs(t-(e[1]<<INTEGER_MATH_SHIFT))<n&&Math.abs(3*t-(e[2]<<INTEGER_MATH_SHIFT))<3*n&&Math.abs(t-(e[3]<<INTEGER_MATH_SHIFT))<n&&Math.abs(t-(e[4]<<INTEGER_MATH_SHIFT))<n)},this.centerFromEnd=function(e,t){return t-e[4]-e[3]-e[2]/2},this.crossCheckVertical=function(e,t,n,i){for(var r=this.image,o=qrcode.height,s=this.CrossCheckStateCount,a=e;a>=0&&r[t+a*qrcode.width];)s[2]++,a--;if(0>a)return 0/0;for(;a>=0&&!r[t+a*qrcode.width]&&s[1]<=n;)s[1]++,a--;if(0>a||s[1]>n)return 0/0;for(;a>=0&&r[t+a*qrcode.width]&&s[0]<=n;)s[0]++,a--;if(s[0]>n)return 0/0;for(a=e+1;o>a&&r[t+a*qrcode.width];)s[2]++,a++;if(a==o)return 0/0;for(;o>a&&!r[t+a*qrcode.width]&&s[3]<n;)s[3]++,a++;if(a==o||s[3]>=n)return 0/0;for(;o>a&&r[t+a*qrcode.width]&&s[4]<n;)s[4]++,a++;return s[4]>=n||5*Math.abs(s[0]+s[1]+s[2]+s[3]+s[4]-i)>=2*i?0/0:this.foundPatternCross(s)?this.centerFromEnd(s,a):0/0},this.crossCheckHorizontal=function(e,t,n,i){for(var r=this.image,o=qrcode.width,s=this.CrossCheckStateCount,a=e;a>=0&&r[a+t*qrcode.width];)s[2]++,a--;if(0>a)return 0/0;for(;a>=0&&!r[a+t*qrcode.width]&&s[1]<=n;)s[1]++,a--;if(0>a||s[1]>n)return 0/0;for(;a>=0&&r[a+t*qrcode.width]&&s[0]<=n;)s[0]++,a--;if(s[0]>n)return 0/0;for(a=e+1;o>a&&r[a+t*qrcode.width];)s[2]++,a++;if(a==o)return 0/0;for(;o>a&&!r[a+t*qrcode.width]&&s[3]<n;)s[3]++,a++;if(a==o||s[3]>=n)return 0/0;for(;o>a&&r[a+t*qrcode.width]&&s[4]<n;)s[4]++,a++;return s[4]>=n||5*Math.abs(s[0]+s[1]+s[2]+s[3]+s[4]-i)>=i?0/0:this.foundPatternCross(s)?this.centerFromEnd(s,a):0/0},this.handlePossibleCenter=function(e,t,n){var i=e[0]+e[1]+e[2]+e[3]+e[4];if(n=this.centerFromEnd(e,n),t=this.crossCheckVertical(t,Math.floor(n),e[2],i),!isNaN(t)&&(n=this.crossCheckHorizontal(Math.floor(n),Math.floor(t),e[2],i),!isNaN(n))){e=i/7;for(var i=!1,r=this.possibleCenters.length,o=0;r>o;o++){var s=this.possibleCenters[o];if(s.aboutEquals(e,t,n)){s.incrementCount(),i=!0;break}}return i||(n=new FinderPattern(n,t,e),this.possibleCenters.push(n),null!=this.resultPointCallback&&this.resultPointCallback.foundPossibleResultPoint(n)),!0}return!1},this.selectBestPatterns=function(){var e=this.possibleCenters.length;if(3>e)throw"Couldn't find enough finder patterns";if(e>3){for(var t=0,n=0;e>n;n++)t+=this.possibleCenters[n].EstimatedModuleSize;for(e=t/e,n=0;n<this.possibleCenters.length&&3<this.possibleCenters.length;n++)Math.abs(this.possibleCenters[n].EstimatedModuleSize-e)>.2*e&&(this.possibleCenters.remove(n),n--)}return[this.possibleCenters[0],this.possibleCenters[1],this.possibleCenters[2]]},this.findRowSkip=function(){var e=this.possibleCenters.length;if(1>=e)return 0;for(var t=null,n=0;e>n;n++){var i=this.possibleCenters[n];if(i.Count>=CENTER_QUORUM){if(null!=t)return this.hasSkipped=!0,Math.floor((Math.abs(t.X-i.X)-Math.abs(t.Y-i.Y))/2);t=i}}return 0},this.haveMultiplyConfirmedCenters=function(){for(var e=0,t=0,n=this.possibleCenters.length,i=0;n>i;i++){var r=this.possibleCenters[i];r.Count>=CENTER_QUORUM&&(e++,t+=r.EstimatedModuleSize)}if(3>e)return!1;for(var e=t/n,o=0,i=0;n>i;i++)r=this.possibleCenters[i],o+=Math.abs(r.EstimatedModuleSize-e);return.05*t>=o},this.findFinderPattern=function(e){this.image=e;var t=qrcode.height,n=qrcode.width,i=Math.floor(3*t/(4*MAX_MODULES));MIN_SKIP>i&&(i=MIN_SKIP);for(var r=!1,o=Array(5),s=i-1;t>s&&!r;s+=i){o[0]=0,o[1]=0,o[2]=0,o[3]=0;for(var a=o[4]=0,h=0;n>h;h++)if(e[h+s*qrcode.width])1==(1&a)&&a++,o[a]++;else if(0==(1&a))if(4==a)if(this.foundPatternCross(o)){if(a=this.handlePossibleCenter(o,s,h))i=2,this.hasSkipped?r=this.haveMultiplyConfirmedCenters():(a=this.findRowSkip(),a>o[2]&&(s+=a-o[2]-i,h=n-1));else{do h++;while(n>h&&!e[h+s*qrcode.width]);h--}a=0,o[0]=0,o[1]=0,o[2]=0,o[3]=0,o[4]=0}else o[0]=o[2],o[1]=o[3],o[2]=o[4],o[3]=1,o[4]=0,a=3;else o[++a]++;else o[a]++;this.foundPatternCross(o)&&this.handlePossibleCenter(o,s,n)&&(i=o[0],this.hasSkipped&&(r=haveMultiplyConfirmedCenters()))}return e=this.selectBestPatterns(),qrcode.orderBestPatterns(e),new FinderPatternInfo(e)}}function AlignmentPattern(e,t,n){this.x=e,this.y=t,this.count=1,this.estimatedModuleSize=n,this.__defineGetter__("EstimatedModuleSize",function(){return this.estimatedModuleSize}),this.__defineGetter__("Count",function(){return this.count}),this.__defineGetter__("X",function(){return Math.floor(this.x)}),this.__defineGetter__("Y",function(){return Math.floor(this.y)}),this.incrementCount=function(){this.count++},this.aboutEquals=function(e,t,n){return Math.abs(t-this.y)<=e&&Math.abs(n-this.x)<=e?(e=Math.abs(e-this.estimatedModuleSize),1>=e||1>=e/this.estimatedModuleSize):!1}}function AlignmentPatternFinder(e,t,n,i,r,o,s){this.image=e,this.possibleCenters=[],this.startX=t,this.startY=n,this.width=i,this.height=r,this.moduleSize=o,this.crossCheckStateCount=[0,0,0],this.resultPointCallback=s,this.centerFromEnd=function(e,t){return t-e[2]-e[1]/2},this.foundPatternCross=function(e){for(var t=this.moduleSize,n=t/2,i=0;3>i;i++)if(Math.abs(t-e[i])>=n)return!1;return!0},this.crossCheckVertical=function(e,t,n,i){var r=this.image,o=qrcode.height,s=this.crossCheckStateCount;
s[0]=0,s[1]=0,s[2]=0;for(var a=e;a>=0&&r[t+a*qrcode.width]&&s[1]<=n;)s[1]++,a--;if(0>a||s[1]>n)return 0/0;for(;a>=0&&!r[t+a*qrcode.width]&&s[0]<=n;)s[0]++,a--;if(s[0]>n)return 0/0;for(a=e+1;o>a&&r[t+a*qrcode.width]&&s[1]<=n;)s[1]++,a++;if(a==o||s[1]>n)return 0/0;for(;o>a&&!r[t+a*qrcode.width]&&s[2]<=n;)s[2]++,a++;return s[2]>n||5*Math.abs(s[0]+s[1]+s[2]-i)>=2*i?0/0:this.foundPatternCross(s)?this.centerFromEnd(s,a):0/0},this.handlePossibleCenter=function(e,t,n){var i=e[0]+e[1]+e[2];if(n=this.centerFromEnd(e,n),t=this.crossCheckVertical(t,Math.floor(n),2*e[1],i),!isNaN(t)){e=(e[0]+e[1]+e[2])/3;for(var i=this.possibleCenters.length,r=0;i>r;r++)if(this.possibleCenters[r].aboutEquals(e,t,n))return new AlignmentPattern(n,t,e);n=new AlignmentPattern(n,t,e),this.possibleCenters.push(n),null!=this.resultPointCallback&&this.resultPointCallback.foundPossibleResultPoint(n)}return null},this.find=function(){for(var t=this.startX,r=this.height,o=t+i,s=n+(r>>1),a=[0,0,0],h=0;r>h;h++){var c=s+(0==(1&h)?h+1>>1:-(h+1>>1));a[0]=0,a[1]=0,a[2]=0;for(var l=t;o>l&&!e[l+qrcode.width*c];)l++;for(var f=0;o>l;){if(e[l+c*qrcode.width])if(1==f)a[f]++;else if(2==f){if(this.foundPatternCross(a)&&(f=this.handlePossibleCenter(a,c,l),null!=f))return f;a[0]=a[2],a[1]=1,a[2]=0,f=1}else a[++f]++;else 1==f&&f++,a[f]++;l++}if(this.foundPatternCross(a)&&(f=this.handlePossibleCenter(a,c,o),null!=f))return f}if(0!=this.possibleCenters.length)return this.possibleCenters[0];throw"Couldn't find enough alignment patterns"}}function QRCodeDataBlockReader(e,t,n){this.blockPointer=0,this.bitPointer=7,this.dataLength=0,this.blocks=e,this.numErrorCorrectionCode=n,9>=t?this.dataLengthMode=0:t>=10&&26>=t?this.dataLengthMode=1:t>=27&&40>=t&&(this.dataLengthMode=2),this.getNextBits=function(e){var t=0;if(e<this.bitPointer+1){for(var n=0,t=0;e>t;t++)n+=1<<t;return n<<=this.bitPointer-e+1,t=(this.blocks[this.blockPointer]&n)>>this.bitPointer-e+1,this.bitPointer-=e,t}if(e<this.bitPointer+1+8){for(var i=0,t=0;t<this.bitPointer+1;t++)i+=1<<t;return t=(this.blocks[this.blockPointer]&i)<<e-(this.bitPointer+1),this.blockPointer++,t+=this.blocks[this.blockPointer]>>8-(e-(this.bitPointer+1)),this.bitPointer-=e%8,0>this.bitPointer&&(this.bitPointer=8+this.bitPointer),t}if(e<this.bitPointer+1+16){for(t=n=i=0;t<this.bitPointer+1;t++)i+=1<<t;i=(this.blocks[this.blockPointer]&i)<<e-(this.bitPointer+1),this.blockPointer++;var r=this.blocks[this.blockPointer]<<e-(this.bitPointer+1+8);for(this.blockPointer++,t=0;t<e-(this.bitPointer+1+8);t++)n+=1<<t;return n<<=8-(e-(this.bitPointer+1+8)),t=i+r+((this.blocks[this.blockPointer]&n)>>8-(e-(this.bitPointer+1+8))),this.bitPointer-=(e-8)%8,0>this.bitPointer&&(this.bitPointer=8+this.bitPointer),t}return 0},this.NextMode=function(){return this.blockPointer>this.blocks.length-this.numErrorCorrectionCode-2?0:this.getNextBits(4)},this.getDataLength=function(e){for(var t=0;1!=e>>t;)t++;return this.getNextBits(qrcode.sizeOfDataLengthInfo[this.dataLengthMode][t])},this.getRomanAndFigureString=function(e){var t=0,n="",i="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:".split("");do if(e>1){var t=this.getNextBits(11),r=t%45,n=n+i[Math.floor(t/45)],n=n+i[r];e-=2}else 1==e&&(t=this.getNextBits(6),n+=i[t],e-=1);while(e>0);return n},this.getFigureString=function(e){var t=0,n="";do e>=3?(t=this.getNextBits(10),100>t&&(n+="0"),10>t&&(n+="0"),e-=3):2==e?(t=this.getNextBits(7),10>t&&(n+="0"),e-=2):1==e&&(t=this.getNextBits(4),e-=1),n+=t;while(e>0);return n},this.get8bitByteArray=function(e){var t=0,n=[];do t=this.getNextBits(8),n.push(t),e--;while(e>0);return n},this.getKanjiString=function(e){var t=0,n="";do{var t=getNextBits(13),t=(t/192<<8)+t%192,i=0,i=40956>=t+33088?t+33088:t+49472,n=n+String.fromCharCode(i);e--}while(e>0);return n},this.__defineGetter__("DataByte",function(){for(var e=[];;){var t=this.NextMode();if(0==t){if(0<e.length)break;throw"Empty data block"}if(1!=t&&2!=t&&4!=t&&8!=t)throw"Invalid mode: "+t+" in (block:"+this.blockPointer+" bit:"+this.bitPointer+")";if(dataLength=this.getDataLength(t),1>dataLength)throw"Invalid data length: "+dataLength;switch(t){case 1:for(var t=this.getFigureString(dataLength),n=Array(t.length),i=0;i<t.length;i++)n[i]=t.charCodeAt(i);e.push(n);break;case 2:for(t=this.getRomanAndFigureString(dataLength),n=Array(t.length),i=0;i<t.length;i++)n[i]=t.charCodeAt(i);e.push(n);break;case 4:t=this.get8bitByteArray(dataLength),e.push(t);break;case 8:t=this.getKanjiString(dataLength),e.push(t)}}return e})}GridSampler={checkAndNudgePoints:function(e,t){for(var n=qrcode.width,i=qrcode.height,r=!0,o=0;o<t.Length&&r;o+=2){var s=Math.floor(t[o]),a=Math.floor(t[o+1]);if(-1>s||s>n||-1>a||a>i)throw"Error.checkAndNudgePoints ";r=!1,-1==s?(t[o]=0,r=!0):s==n&&(t[o]=n-1,r=!0),-1==a?(t[o+1]=0,r=!0):a==i&&(t[o+1]=i-1,r=!0)}for(r=!0,o=t.Length-2;o>=0&&r;o-=2){if(s=Math.floor(t[o]),a=Math.floor(t[o+1]),-1>s||s>n||-1>a||a>i)throw"Error.checkAndNudgePoints ";r=!1,-1==s?(t[o]=0,r=!0):s==n&&(t[o]=n-1,r=!0),-1==a?(t[o+1]=0,r=!0):a==i&&(t[o+1]=i-1,r=!0)}},sampleGrid3:function(e,t,n){for(var i=new BitMatrix(t),r=Array(t<<1),o=0;t>o;o++){for(var s=r.length,a=o+.5,h=0;s>h;h+=2)r[h]=(h>>1)+.5,r[h+1]=a;n.transformPoints1(r),GridSampler.checkAndNudgePoints(e,r);try{for(h=0;s>h;h+=2){var c=4*Math.floor(r[h])+4*Math.floor(r[h+1])*qrcode.width,l=e[Math.floor(r[h])+qrcode.width*Math.floor(r[h+1])];qrcode.imagedata.data[c]=l?255:0,qrcode.imagedata.data[c+1]=l?255:0,qrcode.imagedata.data[c+2]=0,qrcode.imagedata.data[c+3]=255,l&&i.set_Renamed(h>>1,o)}}catch(f){throw"Error.checkAndNudgePoints"}}return i},sampleGridx:function(e,t,n,i,r,o,s,a,h,c,l,f,d,w,u,C,E,B){return n=PerspectiveTransform.quadrilateralToQuadrilateral(n,i,r,o,s,a,h,c,l,f,d,w,u,C,E,B),GridSampler.sampleGrid3(e,t,n)}},Version.VERSION_DECODE_INFO=[31892,34236,39577,42195,48118,51042,55367,58893,63784,68472,70749,76311,79154,84390,87683,92361,96236,102084,102881,110507,110734,117786,119615,126325,127568,133589,136944,141498,145311,150283,152622,158308,161089,167017],Version.VERSIONS=buildVersions(),Version.getVersionForNumber=function(e){if(1>e||e>40)throw"ArgumentException";return Version.VERSIONS[e-1]},Version.getProvisionalVersionForDimension=function(e){if(1!=e%4)throw"Error getProvisionalVersionForDimension";try{return Version.getVersionForNumber(e-17>>2)}catch(t){throw"Error getVersionForNumber"}},Version.decodeVersionInformation=function(e){for(var t=4294967295,n=0,i=0;i<Version.VERSION_DECODE_INFO.length;i++){var r=Version.VERSION_DECODE_INFO[i];if(r==e)return this.getVersionForNumber(i+7);r=FormatInformation.numBitsDiffering(e,r),t>r&&(n=i+7,t=r)}return 3>=t?this.getVersionForNumber(n):null},PerspectiveTransform.quadrilateralToQuadrilateral=function(e,t,n,i,r,o,s,a,h,c,l,f,d,w,u,C){return e=this.quadrilateralToSquare(e,t,n,i,r,o,s,a),this.squareToQuadrilateral(h,c,l,f,d,w,u,C).times(e)},PerspectiveTransform.squareToQuadrilateral=function(e,t,n,i,r,o,s,a){return dy2=a-o,dy3=t-i+o-a,0==dy2&&0==dy3?new PerspectiveTransform(n-e,r-n,e,i-t,o-i,t,0,0,1):(dx1=n-r,dx2=s-r,dx3=e-n+r-s,dy1=i-o,denominator=dx1*dy2-dx2*dy1,a13=(dx3*dy2-dx2*dy3)/denominator,a23=(dx1*dy3-dx3*dy1)/denominator,new PerspectiveTransform(n-e+a13*n,s-e+a23*s,e,i-t+a13*i,a-t+a23*a,t,a13,a23,1))},PerspectiveTransform.quadrilateralToSquare=function(e,t,n,i,r,o,s,a){return this.squareToQuadrilateral(e,t,n,i,r,o,s,a).buildAdjoint()};var FORMAT_INFO_MASK_QR=21522,FORMAT_INFO_DECODE_LOOKUP=[[21522,0],[20773,1],[24188,2],[23371,3],[17913,4],[16590,5],[20375,6],[19104,7],[30660,8],[29427,9],[32170,10],[30877,11],[26159,12],[25368,13],[27713,14],[26998,15],[5769,16],[5054,17],[7399,18],[6608,19],[1890,20],[597,21],[3340,22],[2107,23],[13663,24],[12392,25],[16177,26],[14854,27],[9396,28],[8579,29],[11994,30],[11245,31]],BITS_SET_IN_HALF_BYTE=[0,1,1,2,1,2,2,3,1,2,2,3,2,3,3,4];FormatInformation.numBitsDiffering=function(e,t){return e^=t,BITS_SET_IN_HALF_BYTE[15&e]+BITS_SET_IN_HALF_BYTE[15&URShift(e,4)]+BITS_SET_IN_HALF_BYTE[15&URShift(e,8)]+BITS_SET_IN_HALF_BYTE[15&URShift(e,12)]+BITS_SET_IN_HALF_BYTE[15&URShift(e,16)]+BITS_SET_IN_HALF_BYTE[15&URShift(e,20)]+BITS_SET_IN_HALF_BYTE[15&URShift(e,24)]+BITS_SET_IN_HALF_BYTE[15&URShift(e,28)]},FormatInformation.decodeFormatInformation=function(e){var t=FormatInformation.doDecodeFormatInformation(e);return null!=t?t:FormatInformation.doDecodeFormatInformation(e^FORMAT_INFO_MASK_QR)},FormatInformation.doDecodeFormatInformation=function(e){for(var t=4294967295,n=0,i=0;i<FORMAT_INFO_DECODE_LOOKUP.length;i++){var r=FORMAT_INFO_DECODE_LOOKUP[i],o=r[0];if(o==e)return new FormatInformation(r[1]);o=this.numBitsDiffering(e,o),t>o&&(n=r[1],t=o)}return 3>=t?new FormatInformation(n):null},ErrorCorrectionLevel.forBits=function(e){if(0>e||e>=FOR_BITS.Length)throw"ArgumentException";return FOR_BITS[e]};var L=new ErrorCorrectionLevel(0,1,"L"),M=new ErrorCorrectionLevel(1,0,"M"),Q=new ErrorCorrectionLevel(2,3,"Q"),H=new ErrorCorrectionLevel(3,2,"H"),FOR_BITS=[M,L,H,Q];DataBlock.getDataBlocks=function(e,t,n){if(e.length!=t.TotalCodewords)throw"ArgumentException";var i=t.getECBlocksForLevel(n);n=0;var r=i.getECBlocks();for(t=0;t<r.length;t++)n+=r[t].Count;n=Array(n);for(var o=0,s=0;s<r.length;s++){var a=r[s];for(t=0;t<a.Count;t++){var h=a.DataCodewords,c=i.ECCodewordsPerBlock+h;n[o++]=new DataBlock(h,Array(c))}}for(t=n[0].codewords.length,r=n.length-1;r>=0&&n[r].codewords.length!=t;)r--;for(r++,i=t-i.ECCodewordsPerBlock,t=a=0;i>t;t++)for(s=0;o>s;s++)n[s].codewords[t]=e[a++];for(s=r;o>s;s++)n[s].codewords[i]=e[a++];for(h=n[0].codewords.length,t=i;h>t;t++)for(s=0;o>s;s++)n[s].codewords[r>s?t:t+1]=e[a++];return n},DataMask={forReference:function(e){if(0>e||e>7)throw"System.ArgumentException";return DataMask.DATA_MASKS[e]}},DataMask.DATA_MASKS=[new DataMask000,new DataMask001,new DataMask010,new DataMask011,new DataMask100,new DataMask101,new DataMask110,new DataMask111],GF256.QR_CODE_FIELD=new GF256(285),GF256.DATA_MATRIX_FIELD=new GF256(301),GF256.addOrSubtract=function(e,t){return e^t},Decoder={},Decoder.rsDecoder=new ReedSolomonDecoder(GF256.QR_CODE_FIELD),Decoder.correctErrors=function(e,t){for(var n=e.length,i=Array(n),r=0;n>r;r++)i[r]=255&e[r];n=e.length-t;try{Decoder.rsDecoder.decode(i,n)}catch(o){throw o}for(r=0;t>r;r++)e[r]=i[r]},Decoder.decode=function(e){var t=new BitMatrixParser(e);e=t.readVersion();for(var n=t.readFormatInformation().ErrorCorrectionLevel,t=t.readCodewords(),t=DataBlock.getDataBlocks(t,e,n),i=0,r=0;r<t.Length;r++)i+=t[r].NumDataCodewords;for(var i=Array(i),o=0,s=0;s<t.length;s++){var r=t[s],a=r.Codewords,h=r.NumDataCodewords;for(Decoder.correctErrors(a,h),r=0;h>r;r++)i[o++]=a[r]}return new QRCodeDataBlockReader(i,e.VersionNumber,n.Bits)},qrcode={imagedata:null,width:0,height:0,qrCodeSymbol:null,debug:!1,sizeOfDataLengthInfo:[[10,9,8,8],[12,11,16,10],[14,13,16,12]],callback:null,decode:function(e){if(0==arguments.length){var t=document.getElementById("qr-canvas"),n=t.getContext("2d");return qrcode.width=t.width,qrcode.height=t.height,qrcode.imagedata=n.getImageData(0,0,qrcode.width,qrcode.height),qrcode.result=qrcode.process(n),null!=qrcode.callback&&qrcode.callback(qrcode.result),qrcode.result}var i=new Image;i.onload=function(){var e=document.createElement("canvas"),t=e.getContext("2d"),n=document.getElementById("out-canvas");null!=n&&(n=n.getContext("2d"),n.clearRect(0,0,320,240),n.drawImage(i,0,0,320,240)),e.width=i.width,e.height=i.height,t.drawImage(i,0,0),qrcode.width=i.width,qrcode.height=i.height;try{qrcode.imagedata=t.getImageData(0,0,i.width,i.height)}catch(r){return qrcode.result="Cross domain image reading not supported in your browser! Save it to your computer then drag and drop the file!",void(null!=qrcode.callback&&qrcode.callback(qrcode.result))}try{qrcode.result=qrcode.process(t)}catch(o){console.log(o),qrcode.result="error decoding QR Code"}null!=qrcode.callback&&qrcode.callback(qrcode.result)},i.src=e},decode_utf8:function(e){return decodeURIComponent(escape(e))},process:function(e){var t=(new Date).getTime(),n=qrcode.grayScaleToBitmap(qrcode.grayscale());if(qrcode.debug){for(var i=0;i<qrcode.height;i++)for(var r=0;r<qrcode.width;r++){var o=4*r+4*i*qrcode.width;qrcode.imagedata.data[o]=0,qrcode.imagedata.data[o+1]=0,qrcode.imagedata.data[o+2]=n[r+i*qrcode.width]?255:0}e.putImageData(qrcode.imagedata,0,0)}for(n=new Detector(n).detect(),qrcode.debug&&e.putImageData(qrcode.imagedata,0,0),n=Decoder.decode(n.bits).DataByte,e="",i=0;i<n.length;i++)for(r=0;r<n[i].length;r++)e+=String.fromCharCode(n[i][r]);return t=(new Date).getTime()-t,console.log(t),qrcode.decode_utf8(e)},getPixel:function(e,t){if(qrcode.width<e)throw"point error";if(qrcode.height<t)throw"point error";return point=4*e+4*t*qrcode.width,p=(33*qrcode.imagedata.data[point]+34*qrcode.imagedata.data[point+1]+33*qrcode.imagedata.data[point+2])/100},binarize:function(e){for(var t=Array(qrcode.width*qrcode.height),n=0;n<qrcode.height;n++)for(var i=0;i<qrcode.width;i++){var r=qrcode.getPixel(i,n);t[i+n*qrcode.width]=e>=r?!0:!1}return t},getMiddleBrightnessPerArea:function(e){for(var t=Math.floor(qrcode.width/4),n=Math.floor(qrcode.height/4),i=Array(4),r=0;4>r;r++){i[r]=Array(4);for(var o=0;4>o;o++)i[r][o]=[0,0]}for(r=0;4>r;r++)for(o=0;4>o;o++){i[o][r][0]=255;for(var s=0;n>s;s++)for(var a=0;t>a;a++){var h=e[t*o+a+(n*r+s)*qrcode.width];h<i[o][r][0]&&(i[o][r][0]=h),h>i[o][r][1]&&(i[o][r][1]=h)}}for(e=Array(4),t=0;4>t;t++)e[t]=Array(4);for(r=0;4>r;r++)for(o=0;4>o;o++)e[o][r]=Math.floor((i[o][r][0]+i[o][r][1])/2);return e},grayScaleToBitmap:function(e){for(var t=qrcode.getMiddleBrightnessPerArea(e),n=t.length,i=Math.floor(qrcode.width/n),r=Math.floor(qrcode.height/n),o=Array(qrcode.height*qrcode.width),s=0;n>s;s++)for(var a=0;n>a;a++)for(var h=0;r>h;h++)for(var c=0;i>c;c++)o[i*a+c+(r*s+h)*qrcode.width]=e[i*a+c+(r*s+h)*qrcode.width]<t[a][s]?!0:!1;return o},grayscale:function(){for(var e=Array(qrcode.width*qrcode.height),t=0;t<qrcode.height;t++)for(var n=0;n<qrcode.width;n++){var i=qrcode.getPixel(n,t);e[n+t*qrcode.width]=i}return e}},Array.prototype.remove=function(e,t){var n=this.slice((t||e)+1||this.length);return this.length=0>e?this.length+e:e,this.push.apply(this,n)};var MIN_SKIP=3,MAX_MODULES=57,INTEGER_MATH_SHIFT=8,CENTER_QUORUM=2;qrcode.orderBestPatterns=function(e){function t(e,t){return xDiff=e.X-t.X,yDiff=e.Y-t.Y,Math.sqrt(xDiff*xDiff+yDiff*yDiff)}var n=t(e[0],e[1]),i=t(e[1],e[2]),r=t(e[0],e[2]);i>=n&&i>=r?(i=e[0],n=e[1],r=e[2]):r>=i&&r>=n?(i=e[1],n=e[0],r=e[2]):(i=e[2],n=e[0],r=e[1]);var o=i.x,s=i.y;0>(r.x-o)*(n.y-s)-(r.y-s)*(n.x-o)&&(o=n,n=r,r=o),e[0]=n,e[1]=i,e[2]=r};

function _instanceof(left, right) { if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) { return !!right[Symbol.hasInstance](left); } else { return left instanceof right; } }

function _classCallCheck(instance, Constructor) { if (!_instanceof(instance, Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * HTML5 QR code scanning library.
 * 
 * Note that ECMA Script is not supported by all browsers. Use minified/html5-qrcode.min.js for better
 * browser support. The code is currently transformed using https://babeljs.io.
 * 
 * TODO(mebjas): Add support for autmated transpiling using babel.
 */
var Html5Qrcode = /*#__PURE__*/function () {
  /**
   * Initialize QR Code scanner.
   * 
   * @param {String} elementId - Id of the HTML element. 
   */
  function Html5Qrcode(elementId) {
    _classCallCheck(this, Html5Qrcode);

    this._elementId = elementId;
    this._foreverScanTimeout = null;
    this._localMediaStream = null;
    this._shouldScan = true;
    this._url = window.URL || window.webkitURL || window.mozURL || window.msURL;
    this._userMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia;
  }
  /**
   * Start scanning QR Code for given camera.
   * 
   * @param {String} cameraId Id of the camera to use.
   * @param {Object} config extra configurations to tune QR code scanner.
   *  Supported Fields:
   *      - fps: expected framerate of qr code scanning. example { fps: 2 }
   *          means the scanning would be done every 500 ms.
   *      - qrbox: width of QR scanning box, this should be smaller than
   *          the width and height of the box. This would make the scanner
   *          look like this:
   *          ----------------------
   *          |********************|
   *          |******,,,,,,,,,*****|      <--- shaded region
   *          |******|       |*****|      <--- non shaded region would be
   *          |******|       |*****|          used for QR code scanning.
   *          |******|_______|*****|
   *          |********************|
   *          |********************|
   *          ----------------------
   * @param {Function} qrCodeSuccessCallback callback on QR Code found.
   *  Example:
   *      function(qrCodeMessage) {}
   * @param {Function} qrCodeErrorCallback callback on QR Code parse error.
   *  Example:
   *      function(errorMessage) {}
   * 
   * @returns Promise for starting the scan. The Promise can fail if the user
   * doesn't grant permission or some API is not supported by the browser.
   */


  _createClass(Html5Qrcode, [{
    key: "start",
    value: function start(cameraId, configuration, qrCodeSuccessCallback, qrCodeErrorCallback) {
      if (!cameraId) {
        throw "cameraId is required";
      }

      if (!qrCodeSuccessCallback || typeof qrCodeSuccessCallback != "function") {
        throw "qrCodeSuccessCallback is required and should be a function.";
      }

      if (!qrCodeErrorCallback) {
        qrCodeErrorCallback = console.log;
      }

      var $this = this; // Create configuration by merging default and input settings.

      var config = configuration ? configuration : {};
      config.fps = config.fps ? config.fps : Html5Qrcode.SCAN_DEFAULT_FPS; // qr shaded box

      var isShadedBoxEnabled = config.qrbox != undefined;
      var element = document.getElementById(this._elementId);
      var width = element.clientWidth ? element.clientWidth : Html5Qrcode.DEFAULT_WIDTH;
      var height = element.clientHeight ? element.clientHeight : Html5Qrcode.DEFAULT_HEIGHT; // Validate before insertion

      if (isShadedBoxEnabled) {
        var qrboxSize = config.qrbox;

        if (qrboxSize < Html5Qrcode.MIN_QR_BOX_SIZE) {
          throw "minimum size of 'config.qrbox' is ".concat(Html5Qrcode.MIN_QR_BOX_SIZE, "px.");
        }

        if (qrboxSize > width || qrboxSize > height) {
          throw "'config.qrbox' should not be greater than the " + "width and height of the HTML element.";
        }
      }

      var qrRegion = isShadedBoxEnabled ? this._getShadedRegionBounds(width, height, config.qrbox) : {
        x: 0,
        y: 0,
        width: width,
        height: height
      };

      var videoElement = this._createVideoElement(width, height);

      var canvasElement = this._createCanvasElement(qrRegion.width, qrRegion.height);

      var context = canvasElement.getContext('2d');
      context.canvas.width = qrRegion.width;
      context.canvas.height = qrRegion.height;
      element.style.position = "relative";
      element.append(videoElement);
      element.append(canvasElement);

      if (isShadedBoxEnabled) {
        this._possiblyInsertShadingElement(element, height, qrRegion);
      } // save local states


      this._element = element;
      this._videoElement = videoElement;
      this._canvasElement = canvasElement; // Setup QR code.

      this._shouldScan = true;
      qrcode.callback = qrCodeSuccessCallback; // Method that scans forever.

      var foreverScan = function foreverScan() {
        if (!$this._shouldScan) {
          // Stop scanning.
          return;
        }

        if ($this._localMediaStream) {
          // Only decode the relevant area, ignore the shaded area.
          context.drawImage(videoElement,
          /* sx= */
          qrRegion.x,
          /* sy= */
          qrRegion.y,
          /* sWidth= */
          qrRegion.width,
          /* sHeight= */
          qrRegion.height,
          /* dx= */
          0,
          /* dy= */
          0,
          /* dWidth= */
          qrRegion.width,
          /* dHeight= */
          qrRegion.height);

          try {
            qrcode.decode();
          } catch (exception) {
            qrCodeErrorCallback("QR code parse error, error = ".concat(exception));
          }
        }

        $this._foreverScanTimeout = setTimeout(foreverScan, Html5Qrcode._getTimeoutFps(config.fps));
      }; // success callback when user media (Camera) is attached.


      var getUserMediaSuccessCallback = function getUserMediaSuccessCallback(stream) {
        videoElement.srcObject = stream;
        videoElement.play();
        $this._localMediaStream = stream;
        foreverScan();
      };

      return new Promise(function (resolve, reject) {
        if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({
            audio: false,
            video: {
              deviceId: {
                exact: cameraId
              }
            }
          }).then(function (stream) {
            getUserMediaSuccessCallback(stream);
            resolve();
          }).catch(function (err) {
            reject("Error getting userMedia, error = ".concat(err));
          });
        } else if (navigator.getUserMedia) {
          var getCameraConfig = {
            video: {
              optional: [{
                sourceId: cameraId
              }]
            }
          };
          navigator.getUserMedia(getCameraConfig, function (stream) {
            getUserMediaSuccessCallback(stream);
            resolve();
          }, function (err) {
            reject("Error getting userMedia, error = ".concat(err));
          });
        } else {
          reject("Web camera streaming not supported by the browser.");
        }
      });
    }
    /**
     * Stops streaming QR Code video and scanning. 
     * 
     * @returns Promise for safely closing the video stream.
     */

  }, {
    key: "stop",
    value: function stop() {
      // TODO(mebjas): fail fast if the start() wasn't called.
      this._shouldScan = false;
      clearTimeout(this._foreverScanTimeout);
      var $this = this;
      return new Promise(function (resolve,
      /* ignore */
      reject) {
        var tracksToClose = $this._localMediaStream.getVideoTracks().length;

        var tracksClosed = 0; // Removes the shaded region if exists.

        var removeQrRegion = function removeQrRegion() {
          while ($this._element.getElementsByClassName(Html5Qrcode.SHADED_REGION_CLASSNAME).length) {
            var shadedChild = $this._element.getElementsByClassName(Html5Qrcode.SHADED_REGION_CLASSNAME)[0];

            $this._element.removeChild(shadedChild);
          }
        };

        var onAllTracksClosed = function onAllTracksClosed() {
          $this._localMediaStream = null;

          $this._element.removeChild($this._videoElement);

          $this._element.removeChild($this._canvasElement);

          removeQrRegion();
          resolve(true);
        };

        $this._localMediaStream.getVideoTracks().forEach(function (videoTrack) {
          videoTrack.stop();
          ++tracksClosed;

          if (tracksClosed >= tracksToClose) {
            onAllTracksClosed();
          }
        });
      });
    }
    /**
     * Returns a Promise with list of all cameras supported by the device.
     * 
     * The returned object is a list of result object of type:
     * [{
     *      id: String;     // Id of the camera.
     *      label: String;  // Human readable name of the camera.
     * }]
     */

  }, {
    key: "_createCanvasElement",
    value: function _createCanvasElement(width, height) {
      var canvasWidth = width; // - Html5Qrcode.DEFAULT_WIDTH_OFFSET;

      var canvasHeight = height; // - Html5Qrcode.DEFAULT_HEIGHT_OFFSET;

      var canvasElement = document.createElement('canvas');
      canvasElement.style.width = "".concat(canvasWidth, "px");
      canvasElement.style.height = "".concat(canvasHeight, "px");
      canvasElement.style.display = "none"; // This id is set by lazarsoft/jsqrcode

      canvasElement.id = 'qr-canvas';
      return canvasElement;
    }
  }, {
    key: "_createVideoElement",
    value: function _createVideoElement(width, height) {
      var videoElement = document.createElement('video');
      videoElement.style.height = "".concat(height, "px");
      videoElement.style.width = "".concat(width, "px");
      // TODO(mebjas): Incorporate to the code.
      videoElement.muted = true;
      videoElement.playsInline = true;
      return videoElement;
    }
  }, {
    key: "_getShadedRegionBounds",
    value: function _getShadedRegionBounds(width, height, qrboxSize) {
      if (qrboxSize > width || qrboxSize > height) {
        throw "'config.qrbox' should not be greater than the " + "width and height of the HTML element.";
      }

      return {
        x: (width - qrboxSize) / 2,
        y: (height - qrboxSize) / 2,
        width: qrboxSize,
        height: qrboxSize
      };
    }
  }, {
    key: "_possiblyInsertShadingElement",
    value: function _possiblyInsertShadingElement(element, height, qrRegion) {
      if (qrRegion.x == 0 && qrRegion.y == 0) {
        // No shading
        return;
      }

      element.append(this._createShadedElement(height, qrRegion, Html5Qrcode.SHADED_LEFT));
      element.append(this._createShadedElement(height, qrRegion, Html5Qrcode.SHADED_RIGHT));
      element.append(this._createShadedElement(height, qrRegion, Html5Qrcode.SHADED_TOP));
      element.append(this._createShadedElement(height, qrRegion, Html5Qrcode.SHADED_BOTTOM));
    }
  }, {
    key: "_createShadedElement",
    value: function _createShadedElement(height, qrRegion, shadingPosition) {
      var elem = document.createElement('div');
      elem.style.position = "absolute";
      elem.style.height = "".concat(height, "px");
      elem.className = Html5Qrcode.SHADED_REGION_CLASSNAME;
      elem.id = "".concat(Html5Qrcode.SHADED_REGION_CLASSNAME, "_").concat(shadingPosition); // TODO(mebjas): maken this configurable

      elem.style.background = "#0000007a";

      switch (shadingPosition) {
        case Html5Qrcode.SHADED_LEFT:
          elem.style.top = "0px";
          elem.style.left = "0px";
          elem.style.width = "".concat(qrRegion.x, "px");
          elem.style.height = "".concat(height, "px");
          break;

        case Html5Qrcode.SHADED_RIGHT:
          elem.style.top = "0px";
          elem.style.right = "0px";
          elem.style.width = "".concat(qrRegion.x, "px");
          elem.style.height = "".concat(height, "px");
          break;

        case Html5Qrcode.SHADED_TOP:
          elem.style.top = "0px";
          elem.style.left = "".concat(qrRegion.x, "px");
          elem.style.width = "".concat(qrRegion.width, "px");
          elem.style.height = "".concat(qrRegion.y, "px");
          break;

        case Html5Qrcode.SHADED_BOTTOM:
          elem.style.bottom = "0px";
          elem.style.left = "".concat(qrRegion.x, "px");
          elem.style.width = "".concat(qrRegion.width, "px");
          elem.style.height = "".concat(qrRegion.y, "px");
          break;

        default:
          throw "Unsupported shadingPosition";
      }

      return elem;
    }
  }], [{
    key: "getCameras",
    value: function getCameras() {
      var _this = this;

      return new Promise(function (resolve, reject) {
        if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices && navigator.mediaDevices.getUserMedia) {
          _this._log("navigator.mediaDevices used");

          navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true
          }).then(function (ignore) {
            navigator.mediaDevices.enumerateDevices().then(function (devices) {
              var results = [];

              for (var i = 0; i < devices.length; i++) {
                var device = devices[i];

                if (device.kind == "videoinput") {
                  results.push({
                    id: device.deviceId,
                    label: device.label
                  });
                }
              }

              _this._log("".concat(results.length, " results found"));

              resolve(results);
            }).catch(function (err) {
              reject("".concat(err.name, " : ").concat(err.message));
            });
          }).catch(function (err) {
            reject("".concat(err.name, " : ").concat(err.message));
          });
        } else if (MediaStreamTrack && MediaStreamTrack.getSources) {
          _this._log("MediaStreamTrack.getSources used");

          var callback = function callback(sourceInfos) {
            var results = [];

            for (var i = 0; i !== sourceInfos.length; ++i) {
              var sourceInfo = sourceInfos[i];

              if (sourceInfo.kind === 'video') {
                results.push({
                  id: sourceInfo.id,
                  label: sourceInfo.label
                });
              }
            }

            _this._log("".concat(results.length, " results found"));

            resolve(results);
          };

          MediaStreamTrack.getSources(callback);
        } else {
          _this._log("unable to query supported devices.");

          reject("unable to query supported devices.");
        }
      });
    }
  }, {
    key: "_getTimeoutFps",
    value: function _getTimeoutFps(fps) {
      return 1000 / fps;
    }
  }, {
    key: "_log",
    value: function _log(message) {
      if (Html5Qrcode.VERBOSE) {
        console.log(message);
      }
    }
  }]);

  return Html5Qrcode;
}();

_defineProperty(Html5Qrcode, "DEFAULT_HEIGHT", 300);

_defineProperty(Html5Qrcode, "DEFAULT_HEIGHT_OFFSET", 2);

_defineProperty(Html5Qrcode, "DEFAULT_WIDTH", 300);

_defineProperty(Html5Qrcode, "DEFAULT_WIDTH_OFFSET", 2);

_defineProperty(Html5Qrcode, "SCAN_DEFAULT_FPS", 2);

_defineProperty(Html5Qrcode, "MIN_QR_BOX_SIZE", 50);

_defineProperty(Html5Qrcode, "SHADED_LEFT", 1);

_defineProperty(Html5Qrcode, "SHADED_RIGHT", 2);

_defineProperty(Html5Qrcode, "SHADED_TOP", 3);

_defineProperty(Html5Qrcode, "SHADED_BOTTOM", 4);

_defineProperty(Html5Qrcode, "SHADED_REGION_CLASSNAME", "qr-shaded-region");

_defineProperty(Html5Qrcode, "VERBOSE", false);