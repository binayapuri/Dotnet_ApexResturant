"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["environment"],{68836:(e,t,n)=>{var r=n(25019);window.addEventListener("error",e=>{e.error&&(0,r.eK)(e.error)}),window.addEventListener("unhandledrejection",async e=>{if(e.promise)try{await e.promise}catch(e){(0,r.eK)(e)}}),"#b00m"===window.location.hash&&setTimeout(()=>{throw Error("b00m")});var o=n(30523),a=n(22490);(0,n(45341).nn)()},82664:(e,t,n)=>{function r(e){let t=document.querySelectorAll(e);if(t.length>0)return t[t.length-1]}function o(){let e=r("meta[name=analytics-location]");return e?e.content:window.location.pathname}function a(){let e=r("meta[name=analytics-location-query-strip]"),t="";e||(t=window.location.search);let n=r("meta[name=analytics-location-params]");for(let e of(n&&(t+=(t?"&":"?")+n.content),document.querySelectorAll("meta[name=analytics-param-rename]"))){let n=e.content.split(":",2);t=t.replace(RegExp(`(^|[?&])${n[0]}($|=)`,"g"),`$1${n[1]}$2`)}return t}function i(){return`${window.location.protocol}//${window.location.host}${o()+a()}`}n.d(t,{S:()=>i})},86975:(e,t,n)=>{n.d(t,{AU:()=>l,Ap:()=>g,DT:()=>h,HN:()=>u,Lq:()=>i,T2:()=>w,Yg:()=>y,ag:()=>E,ck:()=>s,po:()=>S,q3:()=>d,uL:()=>b,wz:()=>m,xc:()=>c,xk:()=>p,zH:()=>a});var r=n(64707);let o="data-turbo-loaded";function a(){document.documentElement.setAttribute(o,"")}function i(){return document.documentElement.hasAttribute(o)}let c=()=>!(0,r.c)("PJAX_ENABLED"),u=e=>e?.tagName==="TURBO-FRAME";function l(e,t){let n=e.split("/",3).join("/"),r=t.split("/",3).join("/");return n===r}function s(e,t){let n=e.split("/",2).join("/"),r=t.split("/",2).join("/");return n===r}async function d(){let e=document.head.querySelectorAll("link[rel=stylesheet]"),t=new Set([...document.styleSheets].map(e=>e.href)),n=[];for(let r of e)""===r.href||t.has(r.href)||n.push(f(r));await Promise.all(n)}let f=(e,t=2e3)=>new Promise(n=>{let r=()=>{e.removeEventListener("error",r),e.removeEventListener("load",r),n()};e.addEventListener("load",r,{once:!0}),e.addEventListener("error",r,{once:!0}),setTimeout(r,t)}),m=(e,t)=>{let n=t||e.querySelectorAll("[data-turbo-replace]"),r=[...document.querySelectorAll("[data-turbo-replace]")];for(let e of n){let t=r.find(t=>t.id===e.id);t&&t.replaceWith(e)}},h=e=>{for(let t of e.querySelectorAll("link[rel=stylesheet]"))document.head.querySelector(`link[href="${t.getAttribute("href")}"],
           link[data-href="${t.getAttribute("data-href")}"]`)||document.head.append(t)},p=e=>{for(let t of e.querySelectorAll("script"))document.head.querySelector(`script[src="${t.getAttribute("src")}"]`)||v(t)},v=e=>{let{src:t}=e;if(!t)return;let n=document.createElement("script"),r=e.getAttribute("type");r&&(n.type=r),n.src=t,document.head&&document.head.appendChild(n)},S=e=>{let t=[];for(let n of e.querySelectorAll('meta[data-turbo-track="reload"]'))document.querySelector(`meta[http-equiv="${n.getAttribute("http-equiv")}"]`)?.content!==n.content&&t.push(w(n.getAttribute("http-equiv")));return t},E=e=>{let t=e.querySelector("[data-turbo-head]")||e.head;return{title:t.querySelector("title")?.textContent,transients:[...t.querySelectorAll("[data-turbo-transient]")].map(e=>e.cloneNode(!0)),bodyClasses:e.querySelector("meta[name=turbo-body-classes]")?.content,replacedElements:[...e.querySelectorAll("[data-turbo-replace]")].map(e=>e.cloneNode(!0))}},y=()=>[...document.documentElement.attributes],w=e=>e.replace(/^x-/,"").replaceAll("-","_"),b=e=>document.dispatchEvent(new CustomEvent("turbo:reload",{detail:{reason:e}})),g=(e,t)=>{for(let n of e.attributes)t.hasAttribute(n.nodeName)||"aria-busy"===n.nodeName||e.removeAttribute(n.nodeName);for(let n of t.attributes)e.getAttribute(n.nodeName)!==n.nodeValue&&e.setAttribute(n.nodeName,n.nodeValue)}},25019:(e,t,n)=>{n.d(t,{aJ:()=>b,cI:()=>E,eK:()=>h});var r=n(82918),o=n(45341),a=n(28382),i=n(82664),c=n(86975),u=n(58843),l=n(8704);let s=!1,d=0,f=Date.now();function m(e){return"AbortError"===e.name||"TypeError"===e.name&&"Failed to fetch"===e.message}function h(e,t={}){m(e)||p(S(v(e),t))}async function p(e){if(!A())return;let t=document.head?.querySelector('meta[name="browser-errors-url"]')?.content;if(t){if(w(e.error.stacktrace)){s=!0;return}d++;try{await fetch(t,{method:"post",body:JSON.stringify(e)})}catch{}}}function v(e){return{type:e.name,value:e.message,stacktrace:E(e)}}function S(e,t={}){return Object.assign({error:e,sanitizedUrl:(0,i.S)()||window.location.href,readyState:document.readyState,referrer:(0,u.wP)(),timeSinceLoad:Math.round(Date.now()-f),user:b()||void 0,turbo:(0,c.xc)(),bundler:l.A7,ui:Boolean(document.querySelector('meta[name="ui"]'))},t)}function E(e){return(0,a.Q)(e.stack||"").map(e=>({filename:e.file||"",function:String(e.methodName),lineno:(e.lineNumber||0).toString(),colno:(e.column||0).toString()}))}let y=/(chrome|moz|safari)-extension:\/\//;function w(e){return e.some(e=>y.test(e.filename)||y.test(e.function))}function b(){let e=document.head?.querySelector('meta[name="user-login"]')?.content;if(e)return e;let t=(0,r.b)();return`anonymous-${t}`}let g=!1;function A(){return!g&&!s&&d<10&&(0,o.Gb)()}if(window.addEventListener("pageshow",()=>g=!1),window.addEventListener("pagehide",()=>g=!0),"function"==typeof BroadcastChannel){let e=new BroadcastChannel("shared-worker-error");e.addEventListener("message",e=>{h(e.data.error)})}},64707:(e,t,n)=>{n.d(t,{$:()=>u,c:()=>i});var r=n(15205);let o=(0,r.Z)(a);function a(){return(document.head?.querySelector('meta[name="enabled-features"]')?.content||"").split(",")}let i=(0,r.Z)(c);function c(e){return -1!==o().indexOf(e)}let u={isFeatureEnabled:i}},8704:(e,t,n)=>{n.d(t,{A7:()=>r.A7,ko:()=>r.ko,q1:()=>r.q1});var r=n(53729)},51536:(e,t,n)=>{n.d(t,{rV:()=>o,cl:()=>i,LS:()=>a});var r=n(44544);let{getItem:o,setItem:a,removeItem:i}=(0,r.Z)("sessionStorage")},55065:(e,t,n)=>{n.d(t,{$g:()=>SoftNavSuccessEvent,OV:()=>SoftNavStartEvent,QW:()=>SoftNavErrorEvent,Xr:()=>SoftNavEndEvent});var r=n(31167);let o=class SoftNavEvent extends Event{constructor(e,t){super(t),this.mechanism=e}};let SoftNavStartEvent=class SoftNavStartEvent extends o{constructor(e){super(e,r.QE.START)}};let SoftNavSuccessEvent=class SoftNavSuccessEvent extends o{constructor(e,t){super(e,r.QE.SUCCESS),this.visitCount=t}};let SoftNavErrorEvent=class SoftNavErrorEvent extends o{constructor(e,t){super(e,r.QE.ERROR),this.error=t}};let SoftNavEndEvent=class SoftNavEndEvent extends o{constructor(e){super(e,r.QE.END)}}},31167:(e,t,n)=>{n.d(t,{BT:()=>d,FP:()=>m,LD:()=>s,QE:()=>i,TL:()=>h,Yl:()=>l,jN:()=>c,r_:()=>f,u5:()=>p});var r=n(55065),o=n(29573),a=n(58843);let i=Object.freeze({INITIAL:"soft-nav:initial",START:"soft-nav:start",SUCCESS:"soft-nav:success",ERROR:"soft-nav:error",FRAME_UPDATE:"soft-nav:frame-update",END:"soft-nav:end",RENDER:"soft-nav:render",PROGRESS_BAR:{START:"soft-nav:progress-bar:start",END:"soft-nav:progress-bar:end"}}),c="reload",u=0;function l(){u=0,document.dispatchEvent(new Event(i.INITIAL)),(0,a.XL)()}function s(e){(0,a.sj)()||(v(),document.dispatchEvent(new r.OV(e)),(0,a.U6)(e),(0,a.J$)(),(0,a.Nt)(),(0,o.hY)())}function d(e={}){E(e)&&(u+=1,document.dispatchEvent(new r.$g((0,a.Gj)(),u)),m(e))}function f(e={}){if(!E(e))return;u=0;let t=(0,a.Wl)()||c;document.dispatchEvent(new r.QW((0,a.Gj)(),t)),S(),(0,o.t3)(t),(0,a.XL)()}function m(e={}){E(e)&&(S(),document.dispatchEvent(new r.Xr((0,a.Gj)())),(0,a.pS)())}function h(e={}){E(e)&&((0,o.mr)(),document.dispatchEvent(new Event(i.RENDER)))}function p(){document.dispatchEvent(new Event(i.FRAME_UPDATE))}function v(){document.dispatchEvent(new Event(i.PROGRESS_BAR.START))}function S(){document.dispatchEvent(new Event(i.PROGRESS_BAR.END))}function E({skipIfGoingToReactApp:e,allowedMechanisms:t=[]}={}){return(0,a.sj)()&&(0===t.length||t.includes((0,a.Gj)()))&&(!e||!(0,a.Nb)())}},29573:(e,t,n)=>{n.d(t,{CF:()=>i,hY:()=>c,mr:()=>s,t3:()=>l});var r=n(34855),o=n(58843);let a="stats:soft-nav-duration",i={turbo:"TURBO",react:"REACT","turbo.frame":"FRAME",ui:"UI",hard:"HARD"};function c(){performance.mark(a)}function u(){if(0===performance.getEntriesByName(a).length)return null;performance.measure(a,a);let e=performance.getEntriesByName(a),t=e.pop();return t?t.duration:null}function l(e){(0,r.b)({turboFailureReason:e,turboStartUrl:(0,o.wP)(),turboEndUrl:window.location.href})}function s(){let e=u();if(!e)return;let t=i[(0,o.Gj)()],n=Math.round(e);t===i.react&&document.dispatchEvent(new CustomEvent("staffbar-update",{detail:{duration:n}})),(0,r.b)({requestUrl:window.location.href,softNavigationTiming:{mechanism:t,destination:(0,o.Nb)()||"rails",duration:n,initiator:(0,o.CI)()||"rails"}})}},58843:(e,t,n)=>{n.d(t,{Ak:()=>S,CI:()=>b,Gj:()=>h,J$:()=>w,Nb:()=>g,Nt:()=>E,OE:()=>p,U6:()=>d,Wl:()=>v,XL:()=>s,pS:()=>f,sj:()=>m,wP:()=>y});var r=n(51536),o=n(31167);let a="soft-nav:fail",i="soft-nav:fail-referrer",c="soft-nav:referrer",u="soft-nav:marker",l="soft-nav:react-app-name";function s(){(0,r.LS)(u,"0"),(0,r.cl)(c),(0,r.cl)(a),(0,r.cl)(i),(0,r.cl)(l)}function d(e){(0,r.LS)(u,e)}function f(){(0,r.LS)(u,"0")}function m(){let e=(0,r.rV)(u);return e&&"0"!==e}function h(){return(0,r.rV)(u)}function p(){return Boolean(v())}function v(){return(0,r.rV)(a)}function S(e){(0,r.LS)(a,e||o.jN),(0,r.LS)(i,window.location.href)}function E(){(0,r.LS)(c,window.location.href)}function y(){return(0,r.rV)(c)||document.referrer}function w(){let e=g();e?(0,r.LS)(l,e):(0,r.cl)(l)}function b(){return(0,r.rV)(l)}function g(){return document.querySelector('meta[name="ui"]')?"ui":document.querySelector("react-app")?.getAttribute("app-name")}},34855:(e,t,n)=>{n.d(t,{B:()=>r.B,b:()=>r.b});var r=n(71643)},4412:(e,t,n)=>{n.d(t,{C:()=>a,x:()=>o});var r=n(86283);let o=r.n4?.readyState==="interactive"||r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.n4?.addEventListener("DOMContentLoaded",()=>{e()})}),a=r.n4?.readyState==="complete"?Promise.resolve():new Promise(e=>{r.iG?.addEventListener("load",e)})},53729:(e,t,n)=>{n.d(t,{A7:()=>d,ko:()=>l,q1:()=>c});var r=n(15205),o=n(86283);let a=(0,r.Z)(i);function i(){return o.n4?.head?.querySelector('meta[name="runtime-environment"]')?.content||""}let c=(0,r.Z)(u);function u(){return o.n4?.head?.querySelector('meta[name="is-private-instance"]')?.content==="true"}let l=(0,r.Z)(s);function s(){return"enterprise"===a()}let d="webpack"},44544:(e,t,n)=>{n.d(t,{Z:()=>i,_:()=>c});var r=n(86283),o=n(71643);let a=class NoOpStorage{getItem(){return null}setItem(){}removeItem(){}clear(){}key(){return null}get length(){return 0}};function i(e,t={throwQuotaErrorsOnSet:!1},n=r.iG,i=e=>e,c=e=>e){let u;try{if(!n)throw Error();u=n[e]||new a}catch{u=new a}let{throwQuotaErrorsOnSet:l}=t;function s(e){t.sendCacheStats&&(0,o.b)({incrementKey:e})}function d(e){try{if(u.removeItem(e),t.ttl){let t=`${e}:expiry`;u.removeItem(t)}}catch(e){}}return{getItem:function(e,t=new Date().getTime()){try{let n=u.getItem(e);if(!n)return null;let r=`${e}:expiry`,o=Number(u.getItem(r));if(o&&t>o)return d(e),d(r),s("SAFE_STORAGE_VALUE_EXPIRED"),null;return s("SAFE_STORAGE_VALUE_WITHIN_TTL"),i(n)}catch(e){return null}},setItem:function(e,n,r=new Date().getTime()){try{if(u.setItem(e,c(n)),t.ttl){let n=`${e}:expiry`,o=r+t.ttl;u.setItem(n,o.toString())}}catch(e){if(l&&e.message.toLowerCase().includes("quota"))throw e}},removeItem:d,clear:u.clear,key:u.key,get length(){return u.length}}}function c(e){return i(e,{throwQuotaErrorsOnSet:!1},window,JSON.parse,JSON.stringify)}},86283:(e,t,n)=>{n.d(t,{Qg:()=>r.Qg,W6:()=>r.W6,cF:()=>r.cF,iG:()=>o.iG,jX:()=>o.jX,n4:()=>o.n4});var r=n(35647),o=n(73614)},73614:(e,t,n)=>{n.d(t,{iG:()=>o,jX:()=>a,n4:()=>r});let r="undefined"==typeof document?void 0:document,o="undefined"==typeof window?void 0:window,a="undefined"==typeof location?{pathname:"",origin:"",search:""}:location},35647:(e,t,n)=>{n.d(t,{Qg:()=>a,W6:()=>o,cF:()=>i});var r=n(73614);let o=void 0===r.n4,a=!o;function i(){return!!o||Boolean(r.n4.querySelector('react-app[data-ssr="true"]'))}},71643:(e,t,n)=>{n.d(t,{B:()=>p,b:()=>c});var r=n(86283),o=n(4412),a=n(53729);let i=[];function c(e,t=!1){void 0===e.timestamp&&(e.timestamp=new Date().getTime()),e.loggedIn=h(),e.staff=p(),e.bundler=a.A7,i.push(e),t?s():l()}let u=null;async function l(){await o.C,null==u&&(u=window.requestIdleCallback(s))}function s(){if(u=null,!i.length)return;let e=r.n4?.head?.querySelector('meta[name="browser-stats-url"]')?.content;if(!e)return;let t=d(i);for(let n of t)m(e,`{"stats": [${n.join(",")}] }`);i=[]}function d(e){let t=[],n=e.map(e=>JSON.stringify(e));for(;n.length>0;)t.push(f(n));return t}function f(e){let t=e.shift(),n=[t],r=t.length;for(;e.length>0&&r<=65536;){let t=e[0].length;if(r+t<=65536){let o=e.shift();n.push(o),r+=t}else break}return n}function m(e,t){try{navigator.sendBeacon&&navigator.sendBeacon(e,t)}catch{}}function h(){return!!r.n4?.head?.querySelector('meta[name="user-login"]')?.content}function p(){return!!r.n4?.head?.querySelector('meta[name="user-staff"]')?.content}r.n4?.addEventListener("pagehide",s),r.n4?.addEventListener("visibilitychange",s)},22490:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(86283);function o(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let a={createHTML:o("createHTML"),createScript:o("createScript"),createScriptURL:o("createScriptURL")},i={createPolicy:(e,t)=>({name:e,...a,...t})},c=globalThis.trustedTypes??i,u=!1;r.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||u||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),u=!0)})}},e=>{var t=t=>e(e.s=t);e.O(0,["vendors-node_modules_smoothscroll-polyfill_dist_smoothscroll_js-node_modules_stacktrace-parse-297da6"],()=>t(68836));var n=e.O()}]);
//# sourceMappingURL=environment-232e3babb0bf.js.map