if(!self.define){let d,c={};const e=(e,a)=>(e=new URL(e+".js",a).href,c[e]||new Promise((c=>{if("document"in self){const d=document.createElement("script");d.src=e,d.onload=c,document.head.appendChild(d)}else d=e,importScripts(e),c()})).then((()=>{let d=c[e];if(!d)throw new Error(`Module ${e} didn’t register its module`);return d})));self.define=(a,f)=>{const b=d||("document"in self?document.currentScript.src:"")||location.href;if(c[b])return;let i={};const s=d=>e(d,b),r={module:{uri:b},exports:i,require:s};c[b]=Promise.all(a.map((d=>r[d]||s(d)))).then((d=>(f(...d),i)))}}define(["./workbox-ad8011fb"],(function(d){"use strict";self.skipWaiting(),d.clientsClaim(),d.precacheAndRoute([{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/binaries/stremio_core_web_bg.wasm",revision:"515224139394038ef70c4c79dca84ef7"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/scripts/main.js",revision:"379dba7d7f9011a0eede2f4847f4c43e"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/scripts/worker.js",revision:"ff73627843221f82fbda4af00f023d1e"},{url:"c45613317387f3d8ab23cb3fc257acddfdd8728d/styles/main.css",revision:"40571607d58270d6c44550428e9f29e1"},{url:"index.html",revision:"20afb77d7e6babe8f19b60dec60662ae"}],{})}));
//# sourceMappingURL=service-worker.js.map