if(!self.define){let e,b={};const a=(a,c)=>(a=new URL(a+".js",c).href,b[a]||new Promise((b=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=b,document.head.appendChild(e)}else e=a,importScripts(a),b()})).then((()=>{let e=b[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(b[i])return;let d={};const s=e=>a(e,i),r={module:{uri:i},exports:d,require:s};b[i]=Promise.all(c.map((e=>r[e]||s(e)))).then((e=>(f(...e),d)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/binaries/stremio_core_web_bg.wasm",revision:"ef377cb1e36571687145b70d2b30a735"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/scripts/main.js",revision:"b33f8c906f5b53d6975c64b6f9d98146"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/scripts/worker.js",revision:"7191ed57e37ae841cc83b8d0225f2187"},{url:"7709be2c103be127bf308f4cdf54ebaac23438ab/styles/main.css",revision:"28daa4798c60fd147f0edf9d24ff6cef"},{url:"index.html",revision:"17d6ff2a9f5dfe3f1073a64ac9460b3a"}],{})}));
//# sourceMappingURL=service-worker.js.map