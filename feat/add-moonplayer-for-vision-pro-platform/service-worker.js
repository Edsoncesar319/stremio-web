if(!self.define){let a,e={};const c=(c,b)=>(c=new URL(c+".js",b).href,e[c]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=c,a.onload=e,document.head.appendChild(a)}else a=c,importScripts(c),e()})).then((()=>{let a=e[c];if(!a)throw new Error(`Module ${c} didn’t register its module`);return a})));self.define=(b,d)=>{const i=a||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const r=a=>c(a,i),n={module:{uri:i},exports:s,require:r};e[i]=Promise.all(b.map((a=>n[a]||r(a)))).then((a=>(d(...a),s)))}}define(["./workbox-ad8011fb"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"c59b019973734207daac70ba0565c852e3a7b18a/binaries/stremio_core_web_bg.wasm",revision:"ef377cb1e36571687145b70d2b30a735"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/scripts/main.js",revision:"5dcd4c8ddf779d77776b51b63b28a4de"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/scripts/worker.js",revision:"c84e7db8db1148e79424b05a6dac78a7"},{url:"c59b019973734207daac70ba0565c852e3a7b18a/styles/main.css",revision:"3a2cedad513e7c09d8d1ea5212f942a9"},{url:"index.html",revision:"949f1209a8330a5f68c504bb61e26c12"}],{})}));
//# sourceMappingURL=service-worker.js.map