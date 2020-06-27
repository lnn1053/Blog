---
layout: post
title: Html5QrcodeScanner - End to end QR Code scanner for web, not just a library
categories: [html, javascript, jquery, qrcode, camera, e2e]
description: "When I started the project <a href='https://github.com/mebjas/html5-qrcode'>html5-qrcode</a>, my goal was to make it easier to implement QR code scanning in web applications. I wanted to abstract the inner details of how the camera is accessed in HTML5 and how it's connected with a scanning library. Some developers started to adopt the library and use it, in general the trend seemed to be trying to replicate the demo code. The library was stateful in nature and required a series of steps to connect it with UI. In the latest version I have implemented another wrapper called Html5QrcodeScanner which will enable developers to integrate QR Code scanning with less than 10 lines of code. No more statefulness!"
post-no: 20
toc: true
image: 'https://github.com/mebjas/html5-qrcode/raw/master/assets/screen.gif'
---

When I started the project <a href='https://github.com/mebjas/html5-qrcode'>html5-qrcode</a>, my goal was to make it easier to implement QR code scanning in web applications. I wanted to abstract the inner details of how the camera is accessed in HTML5 and how it's connected with a scanning library. Some developers started to adopt the library and use it, in general the trend seemed to be trying to replicate the demo code. The library was stateful in nature and required a series of steps to connect it with UI. In the latest version I have implemented another wrapper called Html5QrcodeScanner which will enable developers to integrate QR Code scanning with less than 10 lines of code. No more statefulness!

Another key reason I implemented this end to end wrapper was, I started getting requests on how the library could be used with popular frameworks like `VueJs` or `Webpack`. Having an end to end layer makes it much easier to modularize this as a stand-alone component and plug it in with the application. In the future I plan to extend examples for other frameworks like `React` and `Angular`.

## What's new?
`Html5QrcodeScanner` class for an end to end scanning with UI. It comes along with the existing `Html5Qrcode` class, which anyone can continue to use with their own user interface. `Html5QrcodeScanner` supports all features of `Html5Qrcode` like
 - Inline scanning using a video feed from Camera or webcam
 - Local Image scanning
 - Scanning media captured from the camera on mobile devices

<div id="qr-reader" style="width:450px;"></div>
<i>Demo: embedded qr code scanner.</i>
<script src="https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js"></script>
<script>
function onScanSuccess(qrCodeMessage) { /** decoded message */ }
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
</script>

I'll start with how to use `Html5QrcodeScanner`.

## How to use `Html5QrcodeScanner`
Checkout the full example at - [mebjas/html5-qrcode/examples/html5](https://github.com/mebjas/html5-qrcode/tree/master/examples/html5)

### Include library and placeholder HTML element
```html
<div id="qr-reader" style="width:400px"></div>

<!-- include the library -->
<script src="https://unpkg.com/html5-qrcode/minified/html5-qrcode.min.js"></script>
```

### Initialize in javascript
Now you can setup the scanner with these `4 lines of code`.
```js
function onScanSuccess(qrCodeMessage) { /** decoded message */ }
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 250 });
html5QrcodeScanner.render(onScanSuccess);
```

If you wonder what has changed, check out [this article](https://blog.minhazav.dev/HTML5-QR-Code-scanning-launched-v1.0.1/) on how to use `Html5Qrcode`

## Integration with other frameworks
I am not a VueJs expert but I tried implementing the library as a Vue component. Check [mebjas/html5-qrcode/examples/vuejs](https://github.com/mebjas/html5-qrcode/tree/master/examples/vuejs) for full reference.

Essentially the idea is to wrap the library's behavior in a component and use it in the app.
```js
Vue.component('qrcode-scanner', {
    props: {
        qrbox: Number,
        fps: Number,
    },
    template: `<div id="qr-code-full-region"></div>`,
    mounted: function () {
        var $this = this;
        var config = { fps: this.fps ? this.fps : 10 };
        if (this.qrbox) {
            config['qrbox'] = this.qrbox;
        }

        function onScanSuccess(qrCodeMessage) {
            $this.$root.$emit('decodedQrCode', qrCodeMessage);
        }
        
        var html5QrcodeScanner = new Html5QrcodeScanner(
            "qr-code-full-region", config);
        html5QrcodeScanner.render(onScanSuccess);
    }
});
```
This component can then be added to HTML as
```html
<qrcode-scanner
    v-bind:qrbox="250" 
    v-bind:fps="10" 
    style="width: 500px;">
</qrcode-scanner>
```

## Future plans
 - Add example for React integration
 - Add exmaple for Angular integration
 - Add example for using with webpack - [issues/54](https://github.com/mebjas/html5-qrcode/issues/54)
 - Add details on how to use with Android Webview - [issues/58](https://github.com/mebjas/html5-qrcode/issues/58), [issues/57](https://github.com/mebjas/html5-qrcode/issues/57)
 - Fix most of open issues at - mebjas/html5-qrcode/issues](https://github.com/mebjas/html5-qrcode/issues)

## How to contribute
If you are excited or interested you can contribute to this project by:

 - If you find compatibility issues with certain browser, [create an issue here](https://github.com/mebjas/html5-qrcode/issues/new?assignees=&labels=compatibility&template=compatibility-issue.md&title=Compatibility+-+%5BOS%5D+%5BBrowser%5D+-+%5BWhat+is+not+working%5D).
 - Raising issues for bugs faced, at [Github issue page for the project](https://github.com/mebjas/html5-qrcode/issues). Feel free to add some related interesting discussions which could be taken up as work-item.
 - Sending a Pull Request for bugs fixed by you.
 - Rating the project with stars and shares.

## Related articles
 - [Demo: HTML5 QR Code scanner](https://blog.minhazav.dev/research/html5-qrcode)
 - [HTML5 QR Code scanning with javascript - launched v1.0.1](https://blog.minhazav.dev/HTML5-QR-Code-scanning-launched-v1.0.1)
 - [Support for scanning the local file and using default camera added (v1.0.5)](https://blog.minhazav.dev/HTML5-QR-Code-scanning-support-for-local-file-and-default-camera/)