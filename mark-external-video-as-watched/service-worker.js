if(!self.define){let e,b={};const f=(f,a)=>(f=new URL(f+".js",a).href,b[f]||new Promise((b=>{if("document"in self){const e=document.createElement("script");e.src=f,e.onload=b,document.head.appendChild(e)}else e=f,importScripts(f),b()})).then((()=>{let e=b[f];if(!e)throw new Error(`Module ${f} didn’t register its module`);return e})));self.define=(a,c)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(b[i])return;let o={};const d=e=>f(e,i),r={module:{uri:i},exports:o,require:d};b[i]=Promise.all(a.map((e=>r[e]||d(e)))).then((e=>(c(...e),o)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/binaries/stremio_core_web_bg.wasm",revision:"e5dbae37554a7edb7c39361852d78b50"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/favicons/favicon.ico",revision:"73f6cce044fafd48bf447d80487f5a63"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/favicons/icon-96.png",revision:"de1c79ffc899cb64fbaf6a6d17d364a5"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-Bold.ttf",revision:"e07df86cef2e721115583d61d1fb68a6"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-BoldItalic.ttf",revision:"5b44818d2b9eda3e23cd5edd7b49b7d5"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-Light.ttf",revision:"88823c2015ffd5fa89d567e17297a137"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-LightItalic.ttf",revision:"a3ce4440f2abf76f4a1b14b83920138c"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-Medium.ttf",revision:"58aef543c97bbaf6a9896e8484456d98"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-MediumItalic.ttf",revision:"cf23e1bb619029496260760b72aebd30"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-Regular.ttf",revision:"11eabca2251325cfc5589c9c6fb57b46"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/fonts/Roboto-RegularItalic.ttf",revision:"a720f17aa773e493a7ebf8b08459e66c"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/anonymous.png",revision:"3c24e42de8822c3e2dc0c20a04cb18c2"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/default_avatar.png",revision:"e574e5a876fb07bb28b07dd60bd63429"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/empty.png",revision:"ff850d70fd43d29b6d8c7055f33d8dbb"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/icon_x192.png",revision:"f91415b051185986aedf4187c90ea6f7"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/icon_x512.png",revision:"5a446747b1843c1aac2c386b1005ab78"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/intro_background.jpg",revision:"96ccc21bab56c04153a6400842b8a9dd"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/maskable_icon_x192.png",revision:"73f3a1cb7aeabde43ba2ed935fde06b1"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/maskable_icon_x512.png",revision:"88f79bb79e6039edee6367ffa081aa06"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/images/stremio_symbol.png",revision:"9d75b8169c82b11f5399be4129e7757f"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/scripts/main.js",revision:"e40aa42e10793caa695e1203ec40251e"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/scripts/worker.js",revision:"7caf8c21e3c4e31b3715a3ffa40cfe50"},{url:"b01e8ff2bce7e016a6a4c699299906d27bb2828f/styles/main.css",revision:"2b3c3e55ceea3d58349a06917ea41c6e"},{url:"index.html",revision:"e1022434b6bd35e506cf99a066d513dd"}],{})}));
//# sourceMappingURL=service-worker.js.map
