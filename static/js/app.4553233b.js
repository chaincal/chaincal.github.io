(function(e){function t(t){for(var r,o,u=t[0],i=t[1],l=t[2],s=0,f=[];s<u.length;s++)o=u[s],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);p&&p(t);while(f.length)f.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},a={app:0},c=[];function u(e){return i.p+"static/js/"+({}[e]||e)+"."+{"chunk-17ed4fe4":"14821dc7"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-17ed4fe4":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="static/css/"+({}[e]||e)+"."+{"chunk-17ed4fe4":"6841822e"}[e]+".css",a=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===r||s===a))return t()}var f=document.getElementsByTagName("style");for(u=0;u<f.length;u++){l=f[u],s=l.getAttribute("data-href");if(s===r||s===a)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||a,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete o[e],p.parentNode.removeChild(p),n(c)},p.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(p)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=c);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=u(e);var f=new Error;l=function(t){s.onerror=s.onload=null,clearTimeout(p);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",f.name="ChunkLoadError",f.type=r,f.request=o,n[1](f)}a[e]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var p=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1:function(e,t){},10:function(e,t){},11:function(e,t){},12:function(e,t){},13:function(e,t){},14:function(e,t){},2:function(e,t){},3:function(e,t){},4:function(e,t){},4360:function(e,t,n){"use strict";var r=n("5502"),o=n("98b3");t["a"]=Object(r["a"])({state:{account:"",provider:null,currentBalance:"",locale:o["b"].get()||"en"},mutations:{updateAccount:function(e,t){e.account=t},updateProvider:function(e,t){e.provider=t},updateCurrentBalance:function(e,t){e.currentBalance=t},updateLocale:function(e,t){e.locale=t}},actions:{},modules:{}})},5:function(e,t){},"56d7":function(e,t,n){"use strict";n.r(t);n("e792");var r=n("1368"),o=n.n(r),a=n("7a23"),c=Object(a["S"])("data-v-da5fd684");Object(a["D"])("data-v-da5fd684");var u={class:"app-content"};Object(a["B"])();var i=c((function(e,t,n,r,o,i){var l=Object(a["G"])("router-view");return Object(a["A"])(),Object(a["h"])("div",u,[Object(a["k"])(l,null,{default:c((function(t){var n=t.Component;return[(Object(a["A"])(),Object(a["h"])(a["b"],null,[e.$route.meta.keepAlive?(Object(a["A"])(),Object(a["h"])(Object(a["I"])(n),{key:0})):Object(a["i"])("",!0)],1024)),e.$route.meta.keepAlive?Object(a["i"])("",!0):(Object(a["A"])(),Object(a["h"])(Object(a["I"])(n),{key:0}))]})),_:1})])})),l=n("a34a"),s=n.n(l),f=n("99e5"),p=n.n(f),d=n("4360"),b=n("626a"),h=n("47e2");function v(e,t,n,r,o,a,c){try{var u=e[a](c),i=u.value}catch(l){return void n(l)}u.done?t(i):Promise.resolve(i).then(r,o)}function m(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function c(e){v(a,r,o,c,u,"next",e)}function u(e){v(a,r,o,c,u,"throw",e)}c(void 0)}))}}var g={web3:{},t:null,factoryContract:{},web3Provider:{},getBlance:function(e){g.web3.eth.getBalance(e).then((function(e){d["a"].commit("updateCurrentBalance",g.web3.utils.fromWei(e,"ether"))}))},getNetId:function(){var e=m(s.a.mark((function e(){var t;return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,g.web3.eth.net.getId();case 2:t=e.sent,d["a"].commit("updateNetId",t);case 4:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),initWeb3:function(){var e=Object(h["b"])(),t=e.t;window.ethereum?(g.web3Provider=window.ethereum,window.ethereum.on("accountsChanged",function(){var e=m(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:d["a"].commit("updateAccount",t[0]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),g.web3=new p.a(g.web3Provider),window.ethereum.enable().then((function(e){d["a"].commit("updateAccount",e[0])}))):window.web3?(g.web3Provider=window.web3.currentProvider,g.web3=new p.a(g.web3Provider)):Object(b["a"])(t("No wallet plugin has been detected yet, please install the MetaMask wallet, or open it in the wallet DAPP browser")),d["a"].commit("updateProvider",g.web3),g.web3.eth.getAccounts().then(function(){var e=m(s.a.mark((function e(t){return s.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return d["a"].commit("updateAccount",t[0]),e.abrupt("return",g.getBlance(t[0]));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}},w=g;function O(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?O(Object(n),!0).forEach((function(t){j(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):O(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P={name:"App",setup:function(){var e=Object(a["E"])({isShow:!0});w.initWeb3(),document.documentElement.addEventListener("touchstart",(function(e){e.touches.length>1&&e.preventDefault()}),!1);var t=0;document.addEventListener("touchend",(function(e){var n=Date.now();n-t<=300&&e.preventDefault(),t=n}),!1),document.addEventListener("gesturestart",(function(e){e.preventDefault()})),Object(a["x"])((function(){}));var n=Object(a["L"])(e);return y({},n)}};n("7be0"),n("ea7c");P.render=i,P.__scopeId="data-v-da5fd684";var k=P,S=n("6c02"),A=[{path:"/",name:"Index",component:function(){return n.e("chunk-17ed4fe4").then(n.bind(null,"37f9"))},meta:{title:""}}],D=Object(S["a"])({history:Object(S["b"])(),routes:A});D.beforeEach((function(e){e.meta.title&&(document.title=e.meta.title)}));var E=D,x=n("b970"),I=(n("157a"),n("98b3")),B=n("79fa"),C=n("b9b9"),N=n.n(C),M=n("9278"),T=n.n(M);n("1368").polyfill(),o.a.polyfill();var _=I["b"].get()||"en";Object(B["c"])(_);var L=function(){history.length>0?E.go(-1):E.push({name:"Welcome"})},U=function(e){if(!e||"0"===e)return{};var t=decodeURIComponent(e).split("&"),n={};return t.forEach((function(e){var t=e.split("=");1===t.length?n.id=t[0]:n[t[0]]=t[1]})),n},W=window.location.href.replace(/#/g,"").replace(/\?utm_source=tokenpocket/g,"");if(W.includes("?")){var J=W.slice(W.indexOf("?")+1,W.length),$=U(J);$.intro&&I["a"].set($.intro)}var q=Object(a["g"])(k);q.config.globalProperties.$goBack=L,q.config.globalProperties.$dateformat=N.a,q.use(E).use(d["a"]).use(B["b"]).use(x["a"]).use(T.a).mount("#app")},6:function(e,t){},7:function(e,t){},"79fa":function(e,t,n){"use strict";n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return w})),n.d(t,"a",(function(){return O}));var r=n("47e2"),o=n("98b3"),a=n("4360"),c=n("cb6e"),u=n("edd4"),i=n("3c69"),l=n("c6e7"),s=n.n(l),f=n("91f4"),p=n.n(f);function d(e){switch(e){case"tw":i["a"].use("zh-CN",s.a);break;case"en":i["a"].use("en-US",p.a);break}}function b(e){d(e)}function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g=Object(r["a"])({locale:"en",messages:{tw:v({},c),en:v({},u)}}),w=function(e){g.global.locale=e,a["a"].commit("updateLocale",e),o["b"].set(e),b(e)},O=function(){return g&&g.global.locale}},"7be0":function(e,t,n){"use strict";n("7f11")},"7f11":function(e,t,n){},8:function(e,t){},9:function(e,t){},"98b3":function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=c("intro",localStorage),o=c("i18nextLng",localStorage);c("initemStorage",sessionStorage);function a(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:localStorage;try{n.setItem(e,t)}catch(r){}}function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:localStorage;return{get:function(){return t.getItem(e)},set:function(n){a(e,n,t)},remove:function(){t.removeItem(e)}}}},cb6e:function(e){e.exports=JSON.parse('{"Influence query system on the chain":"鏈上影響力查詢系統","It can realize the use of influence calculation on the chain and airdrop batch distribution":"可實現使用鏈上影響力計算、空投批量發放","Please enter the authorized address":"請輸入授權地址","Bought":"已經購買","Approving":"授權中","Approve":"授權","Buying":"購買中","Buy copyright":"購買版权","Enter the Token contract address to be calculated, please check the Token contract address carefully.":"輸入要計算的Token合約地址，請仔細核對Token合約地址。","Influential clients on the chain":"鏈上影響力客戶端","Update time:":"更新時間：","Application platform:":"應用平台：","Software language:":"軟件語言：","Download":"立即下載","not a token":"不是代幣","Please enter the token address":"請輸入代幣地址","Insufficient USDT balance":"USDT餘額不足","successful purchase":"購買成功","failed purchase":"購買失敗","connect wallet":"連接錢包","Help":"幫助說明","No wallet plugin has been detected yet, please install the MetaMask wallet, or open it in the wallet DAPP browser":"暫未檢測到錢包挿件，請安裝MetaMask錢包，或在钱包DAPP浏览器裏打開"}')},ea7c:function(e,t,n){"use strict";n("fdd8")},edd4:function(e){e.exports=JSON.parse('{"common":{"沒有更多了":"No More"},"web3":{"連接錢包":"Connect Wallet","暫未檢測到錢包挿件，請安裝MetaMask錢包，或在imtoken裏打開":"No wallet plug-in has been detected yet, please install metamask wallet or open it in imtoken"}}')},fdd8:function(e,t,n){}});
//# sourceMappingURL=app.4553233b.js.map