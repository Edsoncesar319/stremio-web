if(!self.define){let a,e={};const c=(c,d)=>(c=new URL(c+".js",d).href,e[c]||new Promise((e=>{if("document"in self){const a=document.createElement("script");a.src=c,a.onload=e,document.head.appendChild(a)}else a=c,importScripts(c),e()})).then((()=>{let a=e[c];if(!a)throw new Error(`Module ${c} didn’t register its module`);return a})));self.define=(d,f)=>{const i=a||("document"in self?document.currentScript.src:"")||location.href;if(e[i])return;let s={};const r=a=>c(a,i),n={module:{uri:i},exports:s,require:r};e[i]=Promise.all(d.map((a=>n[a]||r(a)))).then((a=>(f(...a),s)))}}define(["./workbox-ad8011fb"],(function(a){"use strict";self.skipWaiting(),a.clientsClaim(),a.precacheAndRoute([{url:"fd1972a819c874488c5bc8e64675502af3d772aa/binaries/stremio_core_web_bg.wasm",revision:"263846e5e9b8a675f78ee4ca49922369"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/favicons/icon-96.png",revision:"38e4435de414019b7180d9118f2195ac"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/icon_x192.png",revision:"578fa590753f146727be316951b6f0ee"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/icon_x512.png",revision:"a554627dddf7043012a9ae3c41789a18"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/maskable_icon_x192.png",revision:"2be489f0d46f54cf82ed6d3f2a46700d"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/maskable_icon_x512.png",revision:"b244fd1fd0b5dc7eeb9eeedcbc99273b"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/manifest.json",revision:"1577e844d5f40d9886332544c3e3a684"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/scripts/main.js",revision:"5be2cf086e547d2f1b145188c3e8abd7"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/scripts/worker.js",revision:"4dad136c62f9091264d89930be0dcf7f"},{url:"fd1972a819c874488c5bc8e64675502af3d772aa/styles/main.css",revision:"0b95676142240c01c7b947f7fa52379e"},{url:"index.html",revision:"1af70752a651dc7a5446edd03183f37b"}],{})}));
//# sourceMappingURL=service-worker.js.map