if(!self.define){let a,d={};const e=(e,c)=>(e=new URL(e+".js",c).href,d[e]||new Promise((d=>{if("document"in self){const a=document.createElement("script");a.src=e,a.onload=d,document.head.appendChild(a)}else a=e,importScripts(e),d()})).then((()=>{let a=d[e];if(!a)throw new Error(`Module ${e} didn’t register its module`);return a})));self.define=(c,f)=>{const i=a||("document"in self?document.currentScript.src:"")||location.href;if(d[i])return;let r={};const s=a=>e(a,i),b={module:{uri:i},exports:r,require:s};d[i]=Promise.all(c.map((a=>b[a]||s(a)))).then((a=>(f(...a),r)))}}define(["./workbox-ad8011fb"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/binaries/stremio_core_web_bg.wasm",revision:"c1d2779904c52632ebb3f0305869e13b"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/calendar_placeholder.png",revision:"420d4c30fb60f24bfc0b292e0ec6f8db"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/scripts/main.js",revision:"1181672f6c73d3163719937c8430954c"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/scripts/worker.js",revision:"6e25eb6b7a99358ef3d19ed9780d144d"},{url:"91d766dadf3a14005860b5969a92d71cc3f1a6a5/styles/main.css",revision:"a7915be93d6ed9fd750ddcf0f5a63b87"},{url:"index.html",revision:"28bbb99f7021dfdc8212f6c2e1849c1a"}],{})}));
//# sourceMappingURL=service-worker.js.map
