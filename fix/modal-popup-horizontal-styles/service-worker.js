if(!self.define){let a,b={};const e=(e,c)=>(e=new URL(e+".js",c).href,b[e]||new Promise((b=>{if("document"in self){const a=document.createElement("script");a.src=e,a.onload=b,document.head.appendChild(a)}else a=e,importScripts(e),b()})).then((()=>{let a=b[e];if(!a)throw new Error(`Module ${e} didn’t register its module`);return a})));self.define=(c,d)=>{const f=a||("document"in self?document.currentScript.src:"")||location.href;if(b[f])return;let i={};const r=a=>e(a,f),s={module:{uri:f},exports:i,require:r};b[f]=Promise.all(c.map((a=>s[a]||r(a)))).then((a=>(d(...a),i)))}}define(["./workbox-1f84e78b"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/binaries/stremio_core_web_bg.wasm",revision:"ff9d290511b6632b6d98a5d5badb419e"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/calendar_placeholder.png",revision:"420d4c30fb60f24bfc0b292e0ec6f8db"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/scripts/main.js",revision:"2ba8697974f6c138a97f8a3707ca9565"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/scripts/worker.js",revision:"427c2d5d962cb003b9928117ab1ebf84"},{url:"6d8db8b3c5ba4cfcafa80e97a9abb60aa335b2b3/styles/main.css",revision:"7bf9e3e8e804f9f47d659f3d7f0146e9"},{url:"index.html",revision:"b9944461d9d29990cab7e7950c0b22c6"}],{})}));
//# sourceMappingURL=service-worker.js.map
