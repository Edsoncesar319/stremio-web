if(!self.define){let e,b={};const c=(c,d)=>(c=new URL(c+".js",d).href,b[c]||new Promise((b=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=b,document.head.appendChild(e)}else e=c,importScripts(c),b()})).then((()=>{let e=b[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(b[i])return;let r={};const s=e=>c(e,i),f={module:{uri:i},exports:r,require:s};b[i]=Promise.all(d.map((e=>f[e]||s(e)))).then((e=>(a(...e),r)))}}define(["./workbox-1f84e78b"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/anonymous.png",revision:"14a3d1f35520016dfa7d524bc6fe00a3"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/calendar_placeholder.png",revision:"420d4c30fb60f24bfc0b292e0ec6f8db"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/scripts/main.js",revision:"df202b751c39e85785f9af3c22504c3d"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/scripts/worker.js",revision:"1ec58a71d4669518f974a1c30282ff9b"},{url:"7b3258729a9bb59de228cd1e21882e18b29fec45/styles/main.css",revision:"530cd60eecbcd3e1c1d7ecf550f9e3ff"},{url:"index.html",revision:"4c587fb754574eb3b724850144df2a12"}],{})}));
//# sourceMappingURL=service-worker.js.map
