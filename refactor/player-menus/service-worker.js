if(!self.define){let e,a={};const c=(c,d)=>(c=new URL(c+".js",d).href,a[c]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=a,document.head.appendChild(e)}else e=c,importScripts(c),a()})).then((()=>{let e=a[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(d,b)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(a[i])return;let f={};const s=e=>c(e,i),r={module:{uri:i},exports:f,require:s};a[i]=Promise.all(d.map((e=>r[e]||s(e)))).then((e=>(b(...e),f)))}}define(["./workbox-ad8011fb"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"3264cc045b033274914f36661b39ead8d2ef80a2/binaries/stremio_core_web_bg.wasm",revision:"24041b0c451dacea6fa13eacdd9e21f6"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/favicons/favicon.ico",revision:"4c07b4cdba0741908240aaf0f0996231"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/fonts/PlusJakartaSans.ttf",revision:"d42d5252438e0617f4fafe9c9b1eaa36"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/anonymous.png",revision:"193f37ff3cffb5847b4ba4d19277dea7"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/background_1.svg",revision:"e13e8149bc3a081ae4b19a94339d0929"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/background_2.svg",revision:"7400a2bd6bd3a5b6ddf4d4cd12e6e1c8"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/default_avatar.png",revision:"71b1172926723433c6e5f94a1e570993"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/empty.png",revision:"3508ea0d8cd8dd84906ff960a356b6c9"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/icon.png",revision:"b23a3a2bbe761ce6029c564879702ad5"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/logo.png",revision:"a747ada078440d543890a24ea9105e6d"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/maskable_icon.png",revision:"941c7d6c4af30fd50d631032e31bbd42"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/images/stremio_symbol.png",revision:"c64dbb21f02e31bc644512327ed6fe80"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/screenshots/board_narrow.webp",revision:"8329eb909f925e3658dbb7d7e6611bd1"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/screenshots/board_wide.webp",revision:"506ccb23f4d5eced25b11331a10abacb"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/scripts/main.js",revision:"e0fc98bca1a37361842839c2518ad5ea"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/scripts/worker.js",revision:"133ec09576dc1b97e1f6c6c2893eb143"},{url:"3264cc045b033274914f36661b39ead8d2ef80a2/styles/main.css",revision:"41ba692439a7039906528f3fe2c86c6c"},{url:"index.html",revision:"3fec8bf30066b78ce175aeded0382b04"}],{})}));
//# sourceMappingURL=service-worker.js.map
