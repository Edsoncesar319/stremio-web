if(!self.define){let d,c={};const e=(e,i)=>(e=new URL(e+".js",i).href,c[e]||new Promise((c=>{if("document"in self){const d=document.createElement("script");d.src=e,d.onload=c,document.head.appendChild(d)}else d=e,importScripts(e),c()})).then((()=>{let d=c[e];if(!d)throw new Error(`Module ${e} didn’t register its module`);return d})));self.define=(i,a)=>{const s=d||("document"in self?document.currentScript.src:"")||location.href;if(c[s])return;let f={};const r=d=>e(d,s),n={module:{uri:s},exports:f,require:r};c[s]=Promise.all(i.map((d=>n[d]||r(d)))).then((d=>(a(...d),f)))}}define(["./workbox-ad8011fb"],(function(d){"use strict";self.skipWaiting(),d.clientsClaim(),d.precacheAndRoute([{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/binaries/stremio_core_web_bg.wasm",revision:"20f49a282872fda47122c2c2d033d47c"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/favicons/icon-96.png",revision:"38e4435de414019b7180d9118f2195ac"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/icon_x192.png",revision:"f0c07b7925b6b484e918fcb80d3be171"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/icon_x512.png",revision:"5232e0a400b4684441ee5843b6d6b926"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/maskable_icon_x192.png",revision:"2be489f0d46f54cf82ed6d3f2a46700d"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/maskable_icon_x512.png",revision:"b244fd1fd0b5dc7eeb9eeedcbc99273b"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/scripts/main.js",revision:"613ec7d60460f30c65294e4bf86d37b5"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/scripts/worker.js",revision:"fc453b2582c26f45328c48dd44b9a665"},{url:"9768b8cd34108e72dac06353343935c69dc8d3f7/styles/main.css",revision:"9ba1469e64bd92431bf6e9d369d6c410"},{url:"index.html",revision:"4f0d16cced3bcc7642aec33f25138dd1"}],{})}));
//# sourceMappingURL=service-worker.js.map