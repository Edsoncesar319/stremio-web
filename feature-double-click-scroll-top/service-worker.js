if(!self.define){let e,d={};const c=(c,f)=>(c=new URL(c+".js",f).href,d[c]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=d,document.head.appendChild(e)}else e=c,importScripts(c),d()})).then((()=>{let e=d[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(f,b)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(d[a])return;let i={};const s=e=>c(e,a),r={module:{uri:a},exports:i,require:s};d[a]=Promise.all(f.map((e=>r[e]||s(e)))).then((e=>(b(...e),i)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/binaries/stremio_core_web_bg.wasm",revision:"bca86abcbcbe7b4bc89b1c151b8a34c4"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/scripts/main.js",revision:"0024f44450693f2610af63dcdd736035"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/scripts/worker.js",revision:"a1c26c425bafe2c438d8f6ed3a501edf"},{url:"07bf18d24c42b2e26421c250d2681fdd6ac727f2/styles/main.css",revision:"65b5b7c8784e11d700246f97507027b6"},{url:"index.html",revision:"64c97064b818630eaf39741e6076c8bb"}],{})}));
//# sourceMappingURL=service-worker.js.map