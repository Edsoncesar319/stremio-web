if(!self.define){let c,b={};const d=(d,e)=>(d=new URL(d+".js",e).href,b[d]||new Promise((b=>{if("document"in self){const c=document.createElement("script");c.src=d,c.onload=b,document.head.appendChild(c)}else c=d,importScripts(d),b()})).then((()=>{let c=b[d];if(!c)throw new Error(`Module ${d} didn’t register its module`);return c})));self.define=(e,a)=>{const i=c||("document"in self?document.currentScript.src:"")||location.href;if(b[i])return;let s={};const r=c=>d(c,i),f={module:{uri:i},exports:s,require:r};b[i]=Promise.all(e.map((c=>f[c]||r(c)))).then((c=>(a(...c),s)))}}define(["./workbox-ad8011fb"],(function(c){"use strict";self.skipWaiting(),c.clientsClaim(),c.precacheAndRoute([{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/binaries/stremio_core_web_bg.wasm",revision:"ef377cb1e36571687145b70d2b30a735"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/scripts/main.js",revision:"1fc18dedd30d517df3c6c6f37694af66"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/scripts/worker.js",revision:"5380a28a4efc386de6046381b22fc5b0"},{url:"8bb3c297db00c0425218d78cdb2419bcf3c32a96/styles/main.css",revision:"b7088a495f3c4c32221865984ea7c704"},{url:"index.html",revision:"ecd68cc238f786f319004cf926a90bd9"}],{})}));
//# sourceMappingURL=service-worker.js.map