if(!self.define){let e,d={};const c=(c,a)=>(c=new URL(c+".js",a).href,d[c]||new Promise((d=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=d,document.head.appendChild(e)}else e=c,importScripts(c),d()})).then((()=>{let e=d[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,f)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(d[i])return;let b={};const s=e=>c(e,i),r={module:{uri:i},exports:b,require:s};d[i]=Promise.all(a.map((e=>r[e]||s(e)))).then((e=>(f(...e),b)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"aac98fc71633497522238c1732bd24dbf031457d/binaries/stremio_core_web_bg.wasm",revision:"d29fe8209a0e47b3242e548046028247"},{url:"aac98fc71633497522238c1732bd24dbf031457d/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"aac98fc71633497522238c1732bd24dbf031457d/favicons/icon-96.png",revision:"38e4435de414019b7180d9118f2195ac"},{url:"aac98fc71633497522238c1732bd24dbf031457d/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/icon_x192.png",revision:"f0c07b7925b6b484e918fcb80d3be171"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/icon_x512.png",revision:"5232e0a400b4684441ee5843b6d6b926"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/maskable_icon_x192.png",revision:"2be489f0d46f54cf82ed6d3f2a46700d"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/maskable_icon_x512.png",revision:"b244fd1fd0b5dc7eeb9eeedcbc99273b"},{url:"aac98fc71633497522238c1732bd24dbf031457d/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"aac98fc71633497522238c1732bd24dbf031457d/manifest.json",revision:"a7ed92120e19487972f930d7da2e70b7"},{url:"aac98fc71633497522238c1732bd24dbf031457d/scripts/main.js",revision:"6d2350319b4833e271271e411361e87f"},{url:"aac98fc71633497522238c1732bd24dbf031457d/scripts/worker.js",revision:"fd7d77cd6c0a32f1f8875e60dd6c318e"},{url:"aac98fc71633497522238c1732bd24dbf031457d/styles/main.css",revision:"ef1ebcb4109019a1863051ba02da4b40"},{url:"index.html",revision:"afc04c906ed953c0c09a5608c8547668"}],{})}));
//# sourceMappingURL=service-worker.js.map