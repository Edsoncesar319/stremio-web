if(!self.define){let e,f={};const a=(a,i)=>(a=new URL(a+".js",i).href,f[a]||new Promise((f=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=f,document.head.appendChild(e)}else e=a,importScripts(a),f()})).then((()=>{let e=f[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,d)=>{const s=e||("document"in self?document.currentScript.src:"")||location.href;if(f[s])return;let r={};const c=e=>a(e,s),b={module:{uri:s},exports:r,require:c};f[s]=Promise.all(i.map((e=>b[e]||c(e)))).then((e=>(d(...e),r)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"3e92d99f92206fc760b287377a948632410f3445/binaries/stremio_core_web_bg.wasm",revision:"ef377cb1e36571687145b70d2b30a735"},{url:"3e92d99f92206fc760b287377a948632410f3445/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"3e92d99f92206fc760b287377a948632410f3445/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"3e92d99f92206fc760b287377a948632410f3445/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"3e92d99f92206fc760b287377a948632410f3445/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"3e92d99f92206fc760b287377a948632410f3445/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"3e92d99f92206fc760b287377a948632410f3445/scripts/main.js",revision:"c18f536d52ab6d3050792a1548de483b"},{url:"3e92d99f92206fc760b287377a948632410f3445/scripts/worker.js",revision:"716a919fedd9b66e2d20598790178871"},{url:"3e92d99f92206fc760b287377a948632410f3445/styles/main.css",revision:"8a3f7f59f6e39927f5ad10e6869b0ffe"},{url:"index.html",revision:"a2877084f37fb919e407305238f21261"}],{})}));
//# sourceMappingURL=service-worker.js.map