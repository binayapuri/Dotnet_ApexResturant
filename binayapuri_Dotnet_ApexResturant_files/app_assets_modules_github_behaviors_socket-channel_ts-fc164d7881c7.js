"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["app_assets_modules_github_behaviors_socket-channel_ts"],{3207:(e,t,r)=>{let n;r.d(t,{G:()=>x});var s=r(21461),o=r(76932);let AliveSession=class AliveSession extends s.a2{getUrlFromRefreshUrl(){return i(this.refreshUrl)}constructor(e,t,r,n){super(e,()=>this.getUrlFromRefreshUrl(),r,n),this.refreshUrl=t}};async function i(e){let t=await a(e);return t&&t.url&&t.token?c(t.url,t.token):null}async function a(e){let t=await fetch(e,{headers:{Accept:"application/json"}});if(t.ok)return t.json();if(404===t.status)return null;throw Error("fetch error")}async function c(e,t){let r=await fetch(e,{method:"POST",mode:"same-origin",headers:{"Scoped-CSRF-Token":t}});if(r.ok)return r.text();throw Error("fetch error")}var u=r(86283);let l=[],d=u.n4?.hidden||!1;function h(e){return e(d),l.push(e),new o.w0(()=>{let t=l.indexOf(e);-1!==t&&l.splice(t,1)})}u.n4?.addEventListener("visibilitychange",()=>{let e=u.n4?.hidden||!1;void 0!==n&&clearTimeout(n);let t=e?3e4:0;n=setTimeout(()=>{if(e!==d)for(let t of(d=e,n=void 0,l))t(d)},t)});var f=r(36071),p=r(46263),b=r(80721),w=r(86702),y=r(14873),m=r(22490);let SourceRelNotFoundError=class SourceRelNotFoundError extends Error{};let g=m.Z.createPolicy("worker-src-rel",{createScriptURL:e=>{if(!e.match(/[A-Za-z0-9-]+/))throw Error("Invalid rel");let t=document.head.querySelector(`link[rel=${e}]`)?.href;if(!t)throw new SourceRelNotFoundError("No href found for rel");return t}});function k(){return"SharedWorker"in window&&"true"!==(0,w.Z)("localStorage").getItem("bypassSharedWorker")}function v(){try{return g.createScriptURL("shared-web-socket-src")}catch(e){if(e instanceof SourceRelNotFoundError)return null;throw e}}function S(){return document.head.querySelector("link[rel=shared-web-socket]")?.href??null}function M(){return document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-refresh-url")??null}function E(){return document.head.querySelector("link[rel=shared-web-socket]")?.getAttribute("data-session-id")??null}function P(e){return T(e).map(t=>({subscriber:e,topic:t}))}function T(e){let t=(e.getAttribute("data-channel")||"").trim().split(/\s+/);return t.map(s.Zf.parse).filter(A)}function A(e){return null!=e}function C(e,{channel:t,type:r,data:n}){for(let s of e)s.dispatchEvent(new CustomEvent(`socket:${r}`,{bubbles:!1,cancelable:!1,detail:{name:t,data:n}}))}let L=class AliveSessionProxy{subscribe(e){let t=this.subscriptions.add(...e);t.length&&this.worker.port.postMessage({subscribe:t});let r=new Set(t.map(e=>e.name)),n=e.reduce((e,t)=>{let n=t.topic.name;return(0,s.A)(n)&&!r.has(n)&&e.add(n),e},new Set);n.size&&this.worker.port.postMessage({requestPresence:Array.from(n)})}unsubscribeAll(...e){let t=this.subscriptions.drain(...e);t.length&&this.worker.port.postMessage({unsubscribe:t});let r=this.presenceMetadata.removeSubscribers(e);this.sendPresenceMetadataUpdate(r)}updatePresenceMetadata(e){let t=new Set;for(let r of e)this.presenceMetadata.setMetadata(r),t.add(r.channelName);this.sendPresenceMetadataUpdate(t)}sendPresenceMetadataUpdate(e){if(!e.size)return;let t=[];for(let r of e)t.push({channelName:r,metadata:this.presenceMetadata.getChannelMetadata(r)});this.worker.port.postMessage({updatePresenceMetadata:t})}online(){this.worker.port.postMessage({online:!0})}offline(){this.worker.port.postMessage({online:!1})}hangup(){this.worker.port.postMessage({hangup:!0})}receive(e){let{channel:t}=e;if("presence"===e.type){let r=this.notifyPresenceDebouncedByChannel.get(t);r||(r=(0,p.D)((e,r)=>{this.notify(e,r),this.notifyPresenceDebouncedByChannel.delete(t)},100),this.notifyPresenceDebouncedByChannel.set(t,r)),r(this.subscriptions.subscribers(t),e);return}this.notify(this.subscriptions.subscribers(t),e)}constructor(e,t,r,n,o){this.subscriptions=new s.vk,this.presenceMetadata=new s.ah,this.notifyPresenceDebouncedByChannel=new Map,this.notify=o,this.worker=new SharedWorker(e,`github-socket-worker-v2-${n}`),this.worker.port.onmessage=({data:e})=>this.receive(e),this.worker.port.postMessage({connect:{url:t,refreshUrl:r}})}};async function U(){let e=v();if(!e)return;let t=S();if(!t)return;let r=M();if(!r)return;let n=E();if(!n)return;let i=(()=>{if(k())try{return new L(e,t,r,n,C)}catch(e){}return new AliveSession(t,r,!1,C)})(),a=(0,y.g)(e=>i.subscribe(e.flat())),c=(0,y.g)(e=>i.unsubscribeAll(...e)),u=(0,y.g)(e=>i.updatePresenceMetadata(e));return(0,f.N7)(".js-socket-channel[data-channel]",{subscribe:e=>{let t=P(e),r=t.map(e=>e.topic.name).filter(e=>(0,s.A)(e)),n={unsubscribe(){}};if(r.length){let t,i;let a=()=>{let n=[];for(let o of(i&&n.push(i),void 0!==t&&n.push({[s.ZE]:t?1:0}),r))u({subscriber:e,channelName:o,metadata:n})};n=(0,o.qC)((0,o.RB)(e,"socket:set-presence-metadata",e=>{let{detail:t}=e;i=t,a()}),h(e=>{t=e,a()}))}return a(t),n},remove:e=>c(e)}),window.addEventListener("online",()=>i.online()),window.addEventListener("offline",()=>i.offline()),window.addEventListener("pagehide",()=>{"hangup"in i&&i.hangup()}),i}async function R(){return await b.x,U()}let q=R();function x(){return q}},80721:(e,t,r)=>{r.d(t,{C:()=>n.C,x:()=>n.x});var n=r(4412)},76932:(e,t,r)=>{r.d(t,{RB:()=>n,qC:()=>s,w0:()=>Subscription});let Subscription=class Subscription{constructor(e){this.closed=!1,this.unsubscribe=()=>{e(),this.closed=!0}}};function n(e,t,r,n={capture:!1}){return e.addEventListener(t,r,n),new Subscription(()=>{e.removeEventListener(t,r,n)})}function s(...e){return new Subscription(()=>{for(let t of e)t.unsubscribe()})}},14873:(e,t,r)=>{function n(){return Promise.resolve()}function s(){return new Promise(window.requestAnimationFrame)}async function o(e,t){let r;let n=new Promise(t=>{r=self.setTimeout(t,e)});if(!t)return n;try{await Promise.race([n,i(t)])}catch(e){throw self.clearTimeout(r),e}}function i(e){return new Promise((t,r)=>{let n=Error("aborted");n.name="AbortError",e.aborted?r(n):e.addEventListener("abort",()=>r(n))})}function a(e){let t=[];return function(r){t.push(r),1===t.length&&queueMicrotask(()=>{let r=t.slice(0);t.length=0,e(r)})}}r.d(t,{Dc:()=>o,g:()=>a,gJ:()=>n,rs:()=>s})},22490:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(86283);function s(e){return()=>{throw TypeError(`The policy does not implement the function ${e}`)}}let o={createHTML:s("createHTML"),createScript:s("createScript"),createScriptURL:s("createScriptURL")},i={createPolicy:(e,t)=>({name:e,...o,...t})},a=globalThis.trustedTypes??i,c=!1;n.n4?.addEventListener("securitypolicyviolation",e=>{"require-trusted-types-for"!==e.violatedDirective||c||(console.warn(`Hi fellow Hubber!
    You're probably seeing a Report Only Trusted Types error near this message. This is intended behaviour, staff-only,
    does not impact application control flow, and is used solely for statistic collection. Unfortunately we
    can't gather these statistics without adding the above warnings to your console. Sorry about that!
    Feel free to drop by #pse-architecture if you have any additional questions about Trusted Types or CSP.`),c=!0)})}}]);
//# sourceMappingURL=app_assets_modules_github_behaviors_socket-channel_ts-8c87992a9ea8.js.map