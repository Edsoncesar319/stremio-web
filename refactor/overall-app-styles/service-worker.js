if(!self.define){let e,b={};const d=(d,f)=>(d=new URL(d+".js",f).href,b[d]||new Promise((b=>{if("document"in self){const e=document.createElement("script");e.src=d,e.onload=b,document.head.appendChild(e)}else e=d,importScripts(d),b()})).then((()=>{let e=b[d];if(!e)throw new Error(`Module ${d} didn’t register its module`);return e})));self.define=(f,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(b[i])return;let r={};const s=e=>d(e,i),c={module:{uri:i},exports:r,require:s};b[i]=Promise.all(f.map((e=>c[e]||s(e)))).then((e=>(a(...e),r)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/binaries/stremio_core_web_bg.wasm",revision:"ff9d290511b6632b6d98a5d5badb419e"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/calendar_placeholder.png",revision:"420d4c30fb60f24bfc0b292e0ec6f8db"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/scripts/main.js",revision:"e485e115321d4dbf721ee00845da8113"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/scripts/worker.js",revision:"e6e6e0ed22ce7be99cd7b3f09b424938"},{url:"8e21ad6b08b308d1b3fed6f5bc97e84415949ef5/styles/main.css",revision:"6e8d852d7fc308328e4e84e146fb292e"},{url:"index.html",revision:"329602e230eb9d8e47ed38465282464b"}],{})}));
//# sourceMappingURL=service-worker.js.map
