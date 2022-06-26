const es=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};es();function Fr(t,e){const n=Object.create(null),r=t.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return e?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const ns="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",rs=Fr(ns);function ki(t){return!!t||t===""}function Rr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],a=G(r)?os(r):Rr(r);if(a)for(const i in a)e[i]=a[i]}return e}else{if(G(t))return t;if(J(t))return t}}const as=/;(?![^(]*\))/g,is=/:(.+)/;function os(t){const e={};return t.split(as).forEach(n=>{if(n){const r=n.split(is);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function En(t){let e="";if(G(t))e=t;else if(F(t))for(let n=0;n<t.length;n++){const r=En(t[n]);r&&(e+=r+" ")}else if(J(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const qn=t=>G(t)?t:t==null?"":F(t)||J(t)&&(t.toString===Ci||!z(t.toString))?JSON.stringify(t,Ai,2):String(t),Ai=(t,e)=>e&&e.__v_isRef?Ai(t,e.value):ve(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ei(e)?{[`Set(${e.size})`]:[...e.values()]}:J(e)&&!F(e)&&!Ii(e)?String(e):e,W={},be=[],wt=()=>{},ss=()=>!1,ls=/^on[^a-z]/,On=t=>ls.test(t),zr=t=>t.startsWith("onUpdate:"),nt=Object.assign,Lr=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},fs=Object.prototype.hasOwnProperty,D=(t,e)=>fs.call(t,e),F=Array.isArray,ve=t=>Cn(t)==="[object Map]",Ei=t=>Cn(t)==="[object Set]",z=t=>typeof t=="function",G=t=>typeof t=="string",jr=t=>typeof t=="symbol",J=t=>t!==null&&typeof t=="object",Oi=t=>J(t)&&z(t.then)&&z(t.catch),Ci=Object.prototype.toString,Cn=t=>Ci.call(t),cs=t=>Cn(t).slice(8,-1),Ii=t=>Cn(t)==="[object Object]",Dr=t=>G(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,sn=Fr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),In=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},us=/-(\w)/g,St=In(t=>t.replace(us,(e,n)=>n?n.toUpperCase():"")),ds=/\B([A-Z])/g,Ae=In(t=>t.replace(ds,"-$1").toLowerCase()),Sn=In(t=>t.charAt(0).toUpperCase()+t.slice(1)),Xn=In(t=>t?`on${Sn(t)}`:""),He=(t,e)=>!Object.is(t,e),Vn=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},pn=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ms=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let ka;const ps=()=>ka||(ka=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});let Et;class hs{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&Et&&(this.parent=Et,this.index=(Et.scopes||(Et.scopes=[])).push(this)-1)}run(e){if(this.active){const n=Et;try{return Et=this,e()}finally{Et=n}}}on(){Et=this}off(){Et=this.parent}stop(e){if(this.active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(this.parent&&!e){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.active=!1}}}function gs(t,e=Et){e&&e.active&&e.effects.push(t)}const $r=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Si=t=>(t.w&qt)>0,Pi=t=>(t.n&qt)>0,bs=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=qt},vs=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const a=e[r];Si(a)&&!Pi(a)?a.delete(t):e[n++]=a,a.w&=~qt,a.n&=~qt}e.length=n}},ir=new WeakMap;let Fe=0,qt=1;const or=30;let gt;const ee=Symbol(""),sr=Symbol("");class Ur{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,gs(this,r)}run(){if(!this.active)return this.fn();let e=gt,n=Wt;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=gt,gt=this,Wt=!0,qt=1<<++Fe,Fe<=or?bs(this):Aa(this),this.fn()}finally{Fe<=or&&vs(this),qt=1<<--Fe,gt=this.parent,Wt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){gt===this?this.deferStop=!0:this.active&&(Aa(this),this.onStop&&this.onStop(),this.active=!1)}}function Aa(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Wt=!0;const Ti=[];function Ee(){Ti.push(Wt),Wt=!1}function Oe(){const t=Ti.pop();Wt=t===void 0?!0:t}function ut(t,e,n){if(Wt&&gt){let r=ir.get(t);r||ir.set(t,r=new Map);let a=r.get(n);a||r.set(n,a=$r()),Ni(a)}}function Ni(t,e){let n=!1;Fe<=or?Pi(t)||(t.n|=qt,n=!Si(t)):n=!t.has(gt),n&&(t.add(gt),gt.deps.push(t))}function Ft(t,e,n,r,a,i){const o=ir.get(t);if(!o)return;let s=[];if(e==="clear")s=[...o.values()];else if(n==="length"&&F(t))o.forEach((l,u)=>{(u==="length"||u>=r)&&s.push(l)});else switch(n!==void 0&&s.push(o.get(n)),e){case"add":F(t)?Dr(n)&&s.push(o.get("length")):(s.push(o.get(ee)),ve(t)&&s.push(o.get(sr)));break;case"delete":F(t)||(s.push(o.get(ee)),ve(t)&&s.push(o.get(sr)));break;case"set":ve(t)&&s.push(o.get(ee));break}if(s.length===1)s[0]&&lr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);lr($r(l))}}function lr(t,e){const n=F(t)?t:[...t];for(const r of n)r.computed&&Ea(r);for(const r of n)r.computed||Ea(r)}function Ea(t,e){(t!==gt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const ys=Fr("__proto__,__v_isRef,__isVue"),Mi=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(jr)),ws=Br(),xs=Br(!1,!0),_s=Br(!0),Oa=ks();function ks(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=U(this);for(let i=0,o=this.length;i<o;i++)ut(r,"get",i+"");const a=r[e](...n);return a===-1||a===!1?r[e](...n.map(U)):a}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Ee();const r=U(this)[e].apply(this,n);return Oe(),r}}),t}function Br(t=!1,e=!1){return function(r,a,i){if(a==="__v_isReactive")return!t;if(a==="__v_isReadonly")return t;if(a==="__v_isShallow")return e;if(a==="__v_raw"&&i===(t?e?Ds:ji:e?Li:zi).get(r))return r;const o=F(r);if(!t&&o&&D(Oa,a))return Reflect.get(Oa,a,i);const s=Reflect.get(r,a,i);return(jr(a)?Mi.has(a):ys(a))||(t||ut(r,"get",a),e)?s:Q(s)?o&&Dr(a)?s:s.value:J(s)?t?Di(s):Wr(s):s}}const As=Fi(),Es=Fi(!0);function Fi(t=!1){return function(n,r,a,i){let o=n[r];if(Ye(o)&&Q(o)&&!Q(a))return!1;if(!t&&!Ye(a)&&(fr(a)||(a=U(a),o=U(o)),!F(n)&&Q(o)&&!Q(a)))return o.value=a,!0;const s=F(n)&&Dr(r)?Number(r)<n.length:D(n,r),l=Reflect.set(n,r,a,i);return n===U(i)&&(s?He(a,o)&&Ft(n,"set",r,a):Ft(n,"add",r,a)),l}}function Os(t,e){const n=D(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ft(t,"delete",e,void 0),r}function Cs(t,e){const n=Reflect.has(t,e);return(!jr(e)||!Mi.has(e))&&ut(t,"has",e),n}function Is(t){return ut(t,"iterate",F(t)?"length":ee),Reflect.ownKeys(t)}const Ri={get:ws,set:As,deleteProperty:Os,has:Cs,ownKeys:Is},Ss={get:_s,set(t,e){return!0},deleteProperty(t,e){return!0}},Ps=nt({},Ri,{get:xs,set:Es}),Hr=t=>t,Pn=t=>Reflect.getPrototypeOf(t);function tn(t,e,n=!1,r=!1){t=t.__v_raw;const a=U(t),i=U(e);n||(e!==i&&ut(a,"get",e),ut(a,"get",i));const{has:o}=Pn(a),s=r?Hr:n?qr:We;if(o.call(a,e))return s(t.get(e));if(o.call(a,i))return s(t.get(i));t!==a&&t.get(e)}function en(t,e=!1){const n=this.__v_raw,r=U(n),a=U(t);return e||(t!==a&&ut(r,"has",t),ut(r,"has",a)),t===a?n.has(t):n.has(t)||n.has(a)}function nn(t,e=!1){return t=t.__v_raw,!e&&ut(U(t),"iterate",ee),Reflect.get(t,"size",t)}function Ca(t){t=U(t);const e=U(this);return Pn(e).has.call(e,t)||(e.add(t),Ft(e,"add",t,t)),this}function Ia(t,e){e=U(e);const n=U(this),{has:r,get:a}=Pn(n);let i=r.call(n,t);i||(t=U(t),i=r.call(n,t));const o=a.call(n,t);return n.set(t,e),i?He(e,o)&&Ft(n,"set",t,e):Ft(n,"add",t,e),this}function Sa(t){const e=U(this),{has:n,get:r}=Pn(e);let a=n.call(e,t);a||(t=U(t),a=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return a&&Ft(e,"delete",t,void 0),i}function Pa(){const t=U(this),e=t.size!==0,n=t.clear();return e&&Ft(t,"clear",void 0,void 0),n}function rn(t,e){return function(r,a){const i=this,o=i.__v_raw,s=U(o),l=e?Hr:t?qr:We;return!t&&ut(s,"iterate",ee),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function an(t,e,n){return function(...r){const a=this.__v_raw,i=U(a),o=ve(i),s=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,u=a[t](...r),d=n?Hr:e?qr:We;return!e&&ut(i,"iterate",l?sr:ee),{next(){const{value:m,done:v}=u.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ut(t){return function(...e){return t==="delete"?!1:this}}function Ts(){const t={get(i){return tn(this,i)},get size(){return nn(this)},has:en,add:Ca,set:Ia,delete:Sa,clear:Pa,forEach:rn(!1,!1)},e={get(i){return tn(this,i,!1,!0)},get size(){return nn(this)},has:en,add:Ca,set:Ia,delete:Sa,clear:Pa,forEach:rn(!1,!0)},n={get(i){return tn(this,i,!0)},get size(){return nn(this,!0)},has(i){return en.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:rn(!0,!1)},r={get(i){return tn(this,i,!0,!0)},get size(){return nn(this,!0)},has(i){return en.call(this,i,!0)},add:Ut("add"),set:Ut("set"),delete:Ut("delete"),clear:Ut("clear"),forEach:rn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=an(i,!1,!1),n[i]=an(i,!0,!1),e[i]=an(i,!1,!0),r[i]=an(i,!0,!0)}),[t,n,e,r]}const[Ns,Ms,Fs,Rs]=Ts();function Yr(t,e){const n=e?t?Rs:Fs:t?Ms:Ns;return(r,a,i)=>a==="__v_isReactive"?!t:a==="__v_isReadonly"?t:a==="__v_raw"?r:Reflect.get(D(n,a)&&a in r?n:r,a,i)}const zs={get:Yr(!1,!1)},Ls={get:Yr(!1,!0)},js={get:Yr(!0,!1)},zi=new WeakMap,Li=new WeakMap,ji=new WeakMap,Ds=new WeakMap;function $s(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Us(t){return t.__v_skip||!Object.isExtensible(t)?0:$s(cs(t))}function Wr(t){return Ye(t)?t:Kr(t,!1,Ri,zs,zi)}function Bs(t){return Kr(t,!1,Ps,Ls,Li)}function Di(t){return Kr(t,!0,Ss,js,ji)}function Kr(t,e,n,r,a){if(!J(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=a.get(t);if(i)return i;const o=Us(t);if(o===0)return t;const s=new Proxy(t,o===2?r:n);return a.set(t,s),s}function ye(t){return Ye(t)?ye(t.__v_raw):!!(t&&t.__v_isReactive)}function Ye(t){return!!(t&&t.__v_isReadonly)}function fr(t){return!!(t&&t.__v_isShallow)}function $i(t){return ye(t)||Ye(t)}function U(t){const e=t&&t.__v_raw;return e?U(e):t}function Ui(t){return pn(t,"__v_skip",!0),t}const We=t=>J(t)?Wr(t):t,qr=t=>J(t)?Di(t):t;function Bi(t){Wt&&gt&&(t=U(t),Ni(t.dep||(t.dep=$r())))}function Hi(t,e){t=U(t),t.dep&&lr(t.dep)}function Q(t){return!!(t&&t.__v_isRef===!0)}function ne(t){return Hs(t,!1)}function Hs(t,e){return Q(t)?t:new Ys(t,e)}class Ys{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:U(e),this._value=n?e:We(e)}get value(){return Bi(this),this._value}set value(e){e=this.__v_isShallow?e:U(e),He(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:We(e),Hi(this))}}function Yi(t){return Q(t)?t.value:t}const Ws={get:(t,e,n)=>Yi(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const a=t[e];return Q(a)&&!Q(n)?(a.value=n,!0):Reflect.set(t,e,n,r)}};function Wi(t){return ye(t)?t:new Proxy(t,Ws)}class Ks{constructor(e,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new Ur(e,()=>{this._dirty||(this._dirty=!0,Hi(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const e=U(this);return Bi(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function qs(t,e,n=!1){let r,a;const i=z(t);return i?(r=t,a=wt):(r=t.get,a=t.set),new Ks(r,a,i||!a,n)}function Kt(t,e,n,r){let a;try{a=r?t(...r):t()}catch(i){Tn(i,e,n)}return a}function xt(t,e,n,r){if(z(t)){const i=Kt(t,e,n,r);return i&&Oi(i)&&i.catch(o=>{Tn(o,e,n)}),i}const a=[];for(let i=0;i<t.length;i++)a.push(xt(t[i],e,n,r));return a}function Tn(t,e,n,r=!0){const a=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,o,s)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){Kt(l,null,10,[t,o,s]);return}}Xs(t,n,a,r)}function Xs(t,e,n,r=!0){console.error(t)}let hn=!1,cr=!1;const ct=[];let Nt=0;const Le=[];let Re=null,de=0;const je=[];let Ht=null,me=0;const Ki=Promise.resolve();let Xr=null,ur=null;function Vs(t){const e=Xr||Ki;return t?e.then(this?t.bind(this):t):e}function Js(t){let e=Nt+1,n=ct.length;for(;e<n;){const r=e+n>>>1;Ke(ct[r])<t?e=r+1:n=r}return e}function qi(t){(!ct.length||!ct.includes(t,hn&&t.allowRecurse?Nt+1:Nt))&&t!==ur&&(t.id==null?ct.push(t):ct.splice(Js(t.id),0,t),Xi())}function Xi(){!hn&&!cr&&(cr=!0,Xr=Ki.then(Gi))}function Gs(t){const e=ct.indexOf(t);e>Nt&&ct.splice(e,1)}function Vi(t,e,n,r){F(t)?n.push(...t):(!e||!e.includes(t,t.allowRecurse?r+1:r))&&n.push(t),Xi()}function Zs(t){Vi(t,Re,Le,de)}function Qs(t){Vi(t,Ht,je,me)}function Nn(t,e=null){if(Le.length){for(ur=e,Re=[...new Set(Le)],Le.length=0,de=0;de<Re.length;de++)Re[de]();Re=null,de=0,ur=null,Nn(t,e)}}function Ji(t){if(Nn(),je.length){const e=[...new Set(je)];if(je.length=0,Ht){Ht.push(...e);return}for(Ht=e,Ht.sort((n,r)=>Ke(n)-Ke(r)),me=0;me<Ht.length;me++)Ht[me]();Ht=null,me=0}}const Ke=t=>t.id==null?1/0:t.id;function Gi(t){cr=!1,hn=!0,Nn(t),ct.sort((n,r)=>Ke(n)-Ke(r));const e=wt;try{for(Nt=0;Nt<ct.length;Nt++){const n=ct[Nt];n&&n.active!==!1&&Kt(n,null,14)}}finally{Nt=0,ct.length=0,Ji(),hn=!1,Xr=null,(ct.length||Le.length||je.length)&&Gi(t)}}function tl(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||W;let a=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||W;v&&(a=n.map(E=>E.trim())),m&&(a=n.map(ms))}let s,l=r[s=Xn(e)]||r[s=Xn(St(e))];!l&&i&&(l=r[s=Xn(Ae(e))]),l&&xt(l,t,6,a);const u=r[s+"Once"];if(u){if(!t.emitted)t.emitted={};else if(t.emitted[s])return;t.emitted[s]=!0,xt(u,t,6,a)}}function Zi(t,e,n=!1){const r=e.emitsCache,a=r.get(t);if(a!==void 0)return a;const i=t.emits;let o={},s=!1;if(!z(t)){const l=u=>{const d=Zi(u,e,!0);d&&(s=!0,nt(o,d))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!s?(r.set(t,null),null):(F(i)?i.forEach(l=>o[l]=null):nt(o,i),r.set(t,o),o)}function Mn(t,e){return!t||!On(e)?!1:(e=e.slice(2).replace(/Once$/,""),D(t,e[0].toLowerCase()+e.slice(1))||D(t,Ae(e))||D(t,e))}let Ct=null,Fn=null;function gn(t){const e=Ct;return Ct=t,Fn=t&&t.type.__scopeId||null,e}function el(t){Fn=t}function nl(){Fn=null}function rl(t,e=Ct,n){if(!e||t._n)return t;const r=(...a)=>{r._d&&$a(-1);const i=gn(e),o=t(...a);return gn(i),r._d&&$a(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function Jn(t){const{type:e,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:v,setupState:E,ctx:R,inheritAttrs:L}=t;let T,y;const O=gn(t);try{if(n.shapeFlag&4){const j=a||r;T=Ot(d.call(j,j,m,i,E,v,R)),y=l}else{const j=e;T=Ot(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),y=e.props?l:al(l)}}catch(j){De.length=0,Tn(j,t,1),T=st(qe)}let N=T;if(y&&L!==!1){const j=Object.keys(y),{shapeFlag:Y}=N;j.length&&Y&7&&(o&&j.some(zr)&&(y=il(y,o)),N=xe(N,y))}return n.dirs&&(N=xe(N),N.dirs=N.dirs?N.dirs.concat(n.dirs):n.dirs),n.transition&&(N.transition=n.transition),T=N,gn(O),T}const al=t=>{let e;for(const n in t)(n==="class"||n==="style"||On(n))&&((e||(e={}))[n]=t[n]);return e},il=(t,e)=>{const n={};for(const r in t)(!zr(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function ol(t,e,n){const{props:r,children:a,component:i}=t,{props:o,children:s,patchFlag:l}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ta(r,o,u):!!o;if(l&8){const d=e.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Mn(u,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ta(r,o,u):!0:!!o;return!1}function Ta(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(e[i]!==t[i]&&!Mn(n,i))return!0}return!1}function sl({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const ll=t=>t.__isSuspense;function fl(t,e){e&&e.pendingBranch?F(t)?e.effects.push(...t):e.effects.push(t):Qs(t)}function cl(t,e){if(Z){let n=Z.provides;const r=Z.parent&&Z.parent.provides;r===n&&(n=Z.provides=Object.create(r)),n[t]=e}}function Gn(t,e,n=!1){const r=Z||Ct;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&t in a)return a[t];if(arguments.length>1)return n&&z(e)?e.call(r.proxy):e}}function ul(t,e){return Vr(t,null,e)}const Na={};function ln(t,e,n){return Vr(t,e,n)}function Vr(t,e,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=W){const s=Z;let l,u=!1,d=!1;if(Q(t)?(l=()=>t.value,u=fr(t)):ye(t)?(l=()=>t,r=!0):F(t)?(d=!0,u=t.some(y=>ye(y)||fr(y)),l=()=>t.map(y=>{if(Q(y))return y.value;if(ye(y))return pe(y);if(z(y))return Kt(y,s,2)})):z(t)?e?l=()=>Kt(t,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),xt(t,s,3,[v])}:l=wt,e&&r){const y=l;l=()=>pe(y())}let m,v=y=>{m=T.onStop=()=>{Kt(y,s,4)}};if(Ve)return v=wt,e?n&&xt(e,s,3,[l(),d?[]:void 0,v]):l(),wt;let E=d?[]:Na;const R=()=>{if(!!T.active)if(e){const y=T.run();(r||u||(d?y.some((O,N)=>He(O,E[N])):He(y,E)))&&(m&&m(),xt(e,s,3,[y,E===Na?void 0:E,v]),E=y)}else T.run()};R.allowRecurse=!!e;let L;a==="sync"?L=R:a==="post"?L=()=>ot(R,s&&s.suspense):L=()=>Zs(R);const T=new Ur(l,L);return e?n?R():E=T.run():a==="post"?ot(T.run.bind(T),s&&s.suspense):T.run(),()=>{T.stop(),s&&s.scope&&Lr(s.scope.effects,T)}}function dl(t,e,n){const r=this.proxy,a=G(t)?t.includes(".")?Qi(r,t):()=>r[t]:t.bind(r,r);let i;z(e)?i=e:(i=e.handler,n=e);const o=Z;_e(this);const s=Vr(a,i.bind(r),n);return o?_e(o):ie(),s}function Qi(t,e){const n=e.split(".");return()=>{let r=t;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function pe(t,e){if(!J(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Q(t))pe(t.value,e);else if(F(t))for(let n=0;n<t.length;n++)pe(t[n],e);else if(Ei(t)||ve(t))t.forEach(n=>{pe(n,e)});else if(Ii(t))for(const n in t)pe(t[n],e);return t}function Ce(t){return z(t)?{setup:t,name:t.name}:t}const fn=t=>!!t.type.__asyncLoader,to=t=>t.type.__isKeepAlive;function ml(t,e){eo(t,"a",e)}function pl(t,e){eo(t,"da",e)}function eo(t,e,n=Z){const r=t.__wdc||(t.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return t()});if(Rn(e,r,n),n){let a=n.parent;for(;a&&a.parent;)to(a.parent.vnode)&&hl(r,e,n,a),a=a.parent}}function hl(t,e,n,r){const a=Rn(e,t,r,!0);zn(()=>{Lr(r[e],a)},n)}function Rn(t,e,n=Z,r=!1){if(n){const a=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Ee(),_e(n);const s=xt(e,n,t,o);return ie(),Oe(),s});return r?a.unshift(i):a.push(i),i}}const jt=t=>(e,n=Z)=>(!Ve||t==="sp")&&Rn(t,e,n),gl=jt("bm"),no=jt("m"),bl=jt("bu"),vl=jt("u"),yl=jt("bum"),zn=jt("um"),wl=jt("sp"),xl=jt("rtg"),_l=jt("rtc");function kl(t,e=Z){Rn("ec",t,e)}function Jt(t,e,n,r){const a=t.dirs,i=e&&e.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Ee(),xt(l,n,8,[t.el,s,t,e]),Oe())}}const ro="components";function Al(t,e){return Ol(ro,t,!0,e)||t}const El=Symbol();function Ol(t,e,n=!0,r=!1){const a=Ct||Z;if(a){const i=a.type;if(t===ro){const s=nf(i,!1);if(s&&(s===e||s===St(e)||s===Sn(St(e))))return i}const o=Ma(a[t]||i[t],e)||Ma(a.appContext[t],e);return!o&&r?i:o}}function Ma(t,e){return t&&(t[e]||t[St(e)]||t[Sn(St(e))])}function ao(t,e,n,r){let a;const i=n&&n[r];if(F(t)||G(t)){a=new Array(t.length);for(let o=0,s=t.length;o<s;o++)a[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){a=new Array(t);for(let o=0;o<t;o++)a[o]=e(o+1,o,void 0,i&&i[o])}else if(J(t))if(t[Symbol.iterator])a=Array.from(t,(o,s)=>e(o,s,void 0,i&&i[s]));else{const o=Object.keys(t);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const u=o[s];a[s]=e(t[u],u,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const dr=t=>t?go(t)?ta(t)||t.proxy:dr(t.parent):null,bn=nt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>dr(t.parent),$root:t=>dr(t.root),$emit:t=>t.emit,$options:t=>oo(t),$forceUpdate:t=>t.f||(t.f=()=>qi(t.update)),$nextTick:t=>t.n||(t.n=Vs.bind(t.proxy)),$watch:t=>dl.bind(t)}),Cl={get({_:t},e){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=t;let u;if(e[0]!=="$"){const E=o[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return a[e];case 4:return n[e];case 3:return i[e]}else{if(r!==W&&D(r,e))return o[e]=1,r[e];if(a!==W&&D(a,e))return o[e]=2,a[e];if((u=t.propsOptions[0])&&D(u,e))return o[e]=3,i[e];if(n!==W&&D(n,e))return o[e]=4,n[e];mr&&(o[e]=0)}}const d=bn[e];let m,v;if(d)return e==="$attrs"&&ut(t,"get",e),d(t);if((m=s.__cssModules)&&(m=m[e]))return m;if(n!==W&&D(n,e))return o[e]=4,n[e];if(v=l.config.globalProperties,D(v,e))return v[e]},set({_:t},e,n){const{data:r,setupState:a,ctx:i}=t;return a!==W&&D(a,e)?(a[e]=n,!0):r!==W&&D(r,e)?(r[e]=n,!0):D(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||t!==W&&D(t,o)||e!==W&&D(e,o)||(s=i[0])&&D(s,o)||D(r,o)||D(bn,o)||D(a.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:D(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let mr=!0;function Il(t){const e=oo(t),n=t.proxy,r=t.ctx;mr=!1,e.beforeCreate&&Fa(e.beforeCreate,t,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:v,beforeUpdate:E,updated:R,activated:L,deactivated:T,beforeDestroy:y,beforeUnmount:O,destroyed:N,unmounted:j,render:Y,renderTracked:tt,renderTriggered:lt,errorCaptured:_t,serverPrefetch:rt,expose:Se,inheritAttrs:le,components:Pe,directives:Ze,filters:ba}=e;if(u&&Sl(u,r,null,t.appContext.config.unwrapInjectedRef),o)for(const V in o){const K=o[V];z(K)&&(r[V]=K.bind(n))}if(a){const V=a.call(n,n);J(V)&&(t.data=Wr(V))}if(mr=!0,i)for(const V in i){const K=i[V],Pt=z(K)?K.bind(n,n):z(K.get)?K.get.bind(n,n):wt,Yn=!z(K)&&z(K.set)?K.set.bind(n):wt,Te=pt({get:Pt,set:Yn});Object.defineProperty(r,V,{enumerable:!0,configurable:!0,get:()=>Te.value,set:fe=>Te.value=fe})}if(s)for(const V in s)io(s[V],r,n,V);if(l){const V=z(l)?l.call(n):l;Reflect.ownKeys(V).forEach(K=>{cl(K,V[K])})}d&&Fa(d,t,"c");function at(V,K){F(K)?K.forEach(Pt=>V(Pt.bind(n))):K&&V(K.bind(n))}if(at(gl,m),at(no,v),at(bl,E),at(vl,R),at(ml,L),at(pl,T),at(kl,_t),at(_l,tt),at(xl,lt),at(yl,O),at(zn,j),at(wl,rt),F(Se))if(Se.length){const V=t.exposed||(t.exposed={});Se.forEach(K=>{Object.defineProperty(V,K,{get:()=>n[K],set:Pt=>n[K]=Pt})})}else t.exposed||(t.exposed={});Y&&t.render===wt&&(t.render=Y),le!=null&&(t.inheritAttrs=le),Pe&&(t.components=Pe),Ze&&(t.directives=Ze)}function Sl(t,e,n=wt,r=!1){F(t)&&(t=pr(t));for(const a in t){const i=t[a];let o;J(i)?"default"in i?o=Gn(i.from||a,i.default,!0):o=Gn(i.from||a):o=Gn(i),Q(o)&&r?Object.defineProperty(e,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):e[a]=o}}function Fa(t,e,n){xt(F(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function io(t,e,n,r){const a=r.includes(".")?Qi(n,r):()=>n[r];if(G(t)){const i=e[t];z(i)&&ln(a,i)}else if(z(t))ln(a,t.bind(n));else if(J(t))if(F(t))t.forEach(i=>io(i,e,n,r));else{const i=z(t.handler)?t.handler.bind(n):e[t.handler];z(i)&&ln(a,i,t)}}function oo(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,s=i.get(e);let l;return s?l=s:!a.length&&!n&&!r?l=e:(l={},a.length&&a.forEach(u=>vn(l,u,o,!0)),vn(l,e,o)),i.set(e,l),l}function vn(t,e,n,r=!1){const{mixins:a,extends:i}=e;i&&vn(t,i,n,!0),a&&a.forEach(o=>vn(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const s=Pl[o]||n&&n[o];t[o]=s?s(t[o],e[o]):e[o]}return t}const Pl={data:Ra,props:Zt,emits:Zt,methods:Zt,computed:Zt,beforeCreate:et,created:et,beforeMount:et,mounted:et,beforeUpdate:et,updated:et,beforeDestroy:et,beforeUnmount:et,destroyed:et,unmounted:et,activated:et,deactivated:et,errorCaptured:et,serverPrefetch:et,components:Zt,directives:Zt,watch:Nl,provide:Ra,inject:Tl};function Ra(t,e){return e?t?function(){return nt(z(t)?t.call(this,this):t,z(e)?e.call(this,this):e)}:e:t}function Tl(t,e){return Zt(pr(t),pr(e))}function pr(t){if(F(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function et(t,e){return t?[...new Set([].concat(t,e))]:e}function Zt(t,e){return t?nt(nt(Object.create(null),t),e):e}function Nl(t,e){if(!t)return e;if(!e)return t;const n=nt(Object.create(null),t);for(const r in e)n[r]=et(t[r],e[r]);return n}function Ml(t,e,n,r=!1){const a={},i={};pn(i,Ln,1),t.propsDefaults=Object.create(null),so(t,e,a,i);for(const o in t.propsOptions[0])o in a||(a[o]=void 0);n?t.props=r?a:Bs(a):t.type.props?t.props=a:t.props=i,t.attrs=i}function Fl(t,e,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=t,s=U(a),[l]=t.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=t.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Mn(t.emitsOptions,v))continue;const E=e[v];if(l)if(D(i,v))E!==i[v]&&(i[v]=E,u=!0);else{const R=St(v);a[R]=hr(l,s,R,E,t,!1)}else E!==i[v]&&(i[v]=E,u=!0)}}}else{so(t,e,a,i)&&(u=!0);let d;for(const m in s)(!e||!D(e,m)&&((d=Ae(m))===m||!D(e,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=hr(l,s,m,void 0,t,!0)):delete a[m]);if(i!==s)for(const m in i)(!e||!D(e,m)&&!0)&&(delete i[m],u=!0)}u&&Ft(t,"set","$attrs")}function so(t,e,n,r){const[a,i]=t.propsOptions;let o=!1,s;if(e)for(let l in e){if(sn(l))continue;const u=e[l];let d;a&&D(a,d=St(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Mn(t.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=U(n),u=s||W;for(let d=0;d<i.length;d++){const m=i[d];n[m]=hr(a,l,m,u[m],t,!D(u,m))}}return o}function hr(t,e,n,r,a,i){const o=t[n];if(o!=null){const s=D(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&z(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(_e(a),r=u[n]=l.call(null,e),ie())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ae(n))&&(r=!0))}return r}function lo(t,e,n=!1){const r=e.propsCache,a=r.get(t);if(a)return a;const i=t.props,o={},s=[];let l=!1;if(!z(t)){const d=m=>{l=!0;const[v,E]=lo(m,e,!0);nt(o,v),E&&s.push(...E)};!n&&e.mixins.length&&e.mixins.forEach(d),t.extends&&d(t.extends),t.mixins&&t.mixins.forEach(d)}if(!i&&!l)return r.set(t,be),be;if(F(i))for(let d=0;d<i.length;d++){const m=St(i[d]);za(m)&&(o[m]=W)}else if(i)for(const d in i){const m=St(d);if(za(m)){const v=i[d],E=o[m]=F(v)||z(v)?{type:v}:v;if(E){const R=Da(Boolean,E.type),L=Da(String,E.type);E[0]=R>-1,E[1]=L<0||R<L,(R>-1||D(E,"default"))&&s.push(m)}}}const u=[o,s];return r.set(t,u),u}function za(t){return t[0]!=="$"}function La(t){const e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:t===null?"null":""}function ja(t,e){return La(t)===La(e)}function Da(t,e){return F(e)?e.findIndex(n=>ja(n,t)):z(e)&&ja(e,t)?0:-1}const fo=t=>t[0]==="_"||t==="$stable",Jr=t=>F(t)?t.map(Ot):[Ot(t)],Rl=(t,e,n)=>{if(e._n)return e;const r=rl((...a)=>Jr(e(...a)),n);return r._c=!1,r},co=(t,e,n)=>{const r=t._ctx;for(const a in t){if(fo(a))continue;const i=t[a];if(z(i))e[a]=Rl(a,i,r);else if(i!=null){const o=Jr(i);e[a]=()=>o}}},uo=(t,e)=>{const n=Jr(e);t.slots.default=()=>n},zl=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=U(e),pn(e,"_",n)):co(e,t.slots={})}else t.slots={},e&&uo(t,e);pn(t.slots,Ln,1)},Ll=(t,e,n)=>{const{vnode:r,slots:a}=t;let i=!0,o=W;if(r.shapeFlag&32){const s=e._;s?n&&s===1?i=!1:(nt(a,e),!n&&s===1&&delete a._):(i=!e.$stable,co(e,a)),o=e}else e&&(uo(t,e),o={default:1});if(i)for(const s in a)!fo(s)&&!(s in o)&&delete a[s]};function mo(){return{app:null,config:{isNativeTag:ss,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let jl=0;function Dl(t,e){return function(r,a=null){z(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=mo(),o=new Set;let s=!1;const l=i.app={_uid:jl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:af,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&z(u.install)?(o.add(u),u.install(l,...d)):z(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const v=st(r,a);return v.appContext=i,d&&e?e(v,u):t(v,u,m),s=!0,l._container=u,u.__vue_app__=l,ta(v.component)||v.component.proxy}},unmount(){s&&(t(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function gr(t,e,n,r,a=!1){if(F(t)){t.forEach((v,E)=>gr(v,e&&(F(e)?e[E]:e),n,r,a));return}if(fn(r)&&!a)return;const i=r.shapeFlag&4?ta(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=t,u=e&&e.r,d=s.refs===W?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(G(u)?(d[u]=null,D(m,u)&&(m[u]=null)):Q(u)&&(u.value=null)),z(l))Kt(l,s,12,[o,d]);else{const v=G(l),E=Q(l);if(v||E){const R=()=>{if(t.f){const L=v?d[l]:l.value;a?F(L)&&Lr(L,i):F(L)?L.includes(i)||L.push(i):v?(d[l]=[i],D(m,l)&&(m[l]=d[l])):(l.value=[i],t.k&&(d[t.k]=l.value))}else v?(d[l]=o,D(m,l)&&(m[l]=o)):E&&(l.value=o,t.k&&(d[t.k]=o))};o?(R.id=-1,ot(R,n)):R()}}}const ot=fl;function $l(t){return Ul(t)}function Ul(t,e){const n=ps();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:v,setScopeId:E=wt,cloneNode:R,insertStaticContent:L}=t,T=(f,c,p,g=null,h=null,x=null,k=!1,w=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Me(f,c)&&(g=Qe(f),$t(f,h,x,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:I,shapeFlag:C}=c;switch(b){case Gr:y(f,c,p,g);break;case qe:O(f,c,p,g);break;case Zn:f==null&&N(c,p,g,k);break;case mt:Ze(f,c,p,g,h,x,k,w,_);break;default:C&1?tt(f,c,p,g,h,x,k,w,_):C&6?ba(f,c,p,g,h,x,k,w,_):(C&64||C&128)&&b.process(f,c,p,g,h,x,k,w,_,ce)}I!=null&&h&&gr(I,f&&f.ref,x,c||f,!c)},y=(f,c,p,g)=>{if(f==null)r(c.el=s(c.children),p,g);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},O=(f,c,p,g)=>{f==null?r(c.el=l(c.children||""),p,g):c.el=f.el},N=(f,c,p,g)=>{[f.el,f.anchor]=L(f.children,c,p,g,f.el,f.anchor)},j=({el:f,anchor:c},p,g)=>{let h;for(;f&&f!==c;)h=v(f),r(f,p,g),f=h;r(c,p,g)},Y=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=v(f),a(f),f=p;a(c)},tt=(f,c,p,g,h,x,k,w,_)=>{k=k||c.type==="svg",f==null?lt(c,p,g,h,x,k,w,_):Se(f,c,h,x,k,w,_)},lt=(f,c,p,g,h,x,k,w)=>{let _,b;const{type:I,props:C,shapeFlag:S,transition:M,patchFlag:$,dirs:B}=f;if(f.el&&R!==void 0&&$===-1)_=f.el=R(f.el);else{if(_=f.el=o(f.type,x,C&&C.is,C),S&8?d(_,f.children):S&16&&rt(f.children,_,null,g,h,x&&I!=="foreignObject",k,w),B&&Jt(f,null,g,"created"),C){for(const q in C)q!=="value"&&!sn(q)&&i(_,q,null,C[q],x,f.children,g,h,Tt);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&At(b,g,f)}_t(_,f,f.scopeId,k,g)}B&&Jt(f,null,g,"beforeMount");const H=(!h||h&&!h.pendingBranch)&&M&&!M.persisted;H&&M.beforeEnter(_),r(_,c,p),((b=C&&C.onVnodeMounted)||H||B)&&ot(()=>{b&&At(b,g,f),H&&M.enter(_),B&&Jt(f,null,g,"mounted")},h)},_t=(f,c,p,g,h)=>{if(p&&E(f,p),g)for(let x=0;x<g.length;x++)E(f,g[x]);if(h){let x=h.subTree;if(c===x){const k=h.vnode;_t(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},rt=(f,c,p,g,h,x,k,w,_=0)=>{for(let b=_;b<f.length;b++){const I=f[b]=w?Yt(f[b]):Ot(f[b]);T(null,I,c,p,g,h,x,k,w)}},Se=(f,c,p,g,h,x,k)=>{const w=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:I}=c;_|=f.patchFlag&16;const C=f.props||W,S=c.props||W;let M;p&&Gt(p,!1),(M=S.onVnodeBeforeUpdate)&&At(M,p,c,f),I&&Jt(c,f,p,"beforeUpdate"),p&&Gt(p,!0);const $=h&&c.type!=="foreignObject";if(b?le(f.dynamicChildren,b,w,p,g,$,x):k||Pt(f,c,w,null,p,g,$,x,!1),_>0){if(_&16)Pe(w,c,C,S,p,g,h);else if(_&2&&C.class!==S.class&&i(w,"class",null,S.class,h),_&4&&i(w,"style",C.style,S.style,h),_&8){const B=c.dynamicProps;for(let H=0;H<B.length;H++){const q=B[H],ht=C[q],ue=S[q];(ue!==ht||q==="value")&&i(w,q,ht,ue,h,f.children,p,g,Tt)}}_&1&&f.children!==c.children&&d(w,c.children)}else!k&&b==null&&Pe(w,c,C,S,p,g,h);((M=S.onVnodeUpdated)||I)&&ot(()=>{M&&At(M,p,c,f),I&&Jt(c,f,p,"updated")},g)},le=(f,c,p,g,h,x,k)=>{for(let w=0;w<c.length;w++){const _=f[w],b=c[w],I=_.el&&(_.type===mt||!Me(_,b)||_.shapeFlag&70)?m(_.el):p;T(_,b,I,null,g,h,x,k,!0)}},Pe=(f,c,p,g,h,x,k)=>{if(p!==g){for(const w in g){if(sn(w))continue;const _=g[w],b=p[w];_!==b&&w!=="value"&&i(f,w,b,_,k,c.children,h,x,Tt)}if(p!==W)for(const w in p)!sn(w)&&!(w in g)&&i(f,w,p[w],null,k,c.children,h,x,Tt);"value"in g&&i(f,"value",p.value,g.value)}},Ze=(f,c,p,g,h,x,k,w,_)=>{const b=c.el=f?f.el:s(""),I=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:S,slotScopeIds:M}=c;M&&(w=w?w.concat(M):M),f==null?(r(b,p,g),r(I,p,g),rt(c.children,p,I,h,x,k,w,_)):C>0&&C&64&&S&&f.dynamicChildren?(le(f.dynamicChildren,S,p,h,x,k,w),(c.key!=null||h&&c===h.subTree)&&po(f,c,!0)):Pt(f,c,p,I,h,x,k,w,_)},ba=(f,c,p,g,h,x,k,w,_)=>{c.slotScopeIds=w,f==null?c.shapeFlag&512?h.ctx.activate(c,p,g,k,_):Hn(c,p,g,h,x,k,_):at(f,c,_)},Hn=(f,c,p,g,h,x,k)=>{const w=f.component=Gl(f,g,h);if(to(f)&&(w.ctx.renderer=ce),Zl(w),w.asyncDep){if(h&&h.registerDep(w,V),!f.el){const _=w.subTree=st(qe);O(null,_,c,p)}return}V(w,f,c,p,h,x,k)},at=(f,c,p)=>{const g=c.component=f.component;if(ol(f,c,p))if(g.asyncDep&&!g.asyncResolved){K(g,c,p);return}else g.next=c,Gs(g.update),g.update();else c.el=f.el,g.vnode=c},V=(f,c,p,g,h,x,k)=>{const w=()=>{if(f.isMounted){let{next:I,bu:C,u:S,parent:M,vnode:$}=f,B=I,H;Gt(f,!1),I?(I.el=$.el,K(f,I,k)):I=$,C&&Vn(C),(H=I.props&&I.props.onVnodeBeforeUpdate)&&At(H,M,I,$),Gt(f,!0);const q=Jn(f),ht=f.subTree;f.subTree=q,T(ht,q,m(ht.el),Qe(ht),f,h,x),I.el=q.el,B===null&&sl(f,q.el),S&&ot(S,h),(H=I.props&&I.props.onVnodeUpdated)&&ot(()=>At(H,M,I,$),h)}else{let I;const{el:C,props:S}=c,{bm:M,m:$,parent:B}=f,H=fn(c);if(Gt(f,!1),M&&Vn(M),!H&&(I=S&&S.onVnodeBeforeMount)&&At(I,B,c),Gt(f,!0),C&&Kn){const q=()=>{f.subTree=Jn(f),Kn(C,f.subTree,f,h,null)};H?c.type.__asyncLoader().then(()=>!f.isUnmounted&&q()):q()}else{const q=f.subTree=Jn(f);T(null,q,p,g,f,h,x),c.el=q.el}if($&&ot($,h),!H&&(I=S&&S.onVnodeMounted)){const q=c;ot(()=>At(I,B,q),h)}(c.shapeFlag&256||B&&fn(B.vnode)&&B.vnode.shapeFlag&256)&&f.a&&ot(f.a,h),f.isMounted=!0,c=p=g=null}},_=f.effect=new Ur(w,()=>qi(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,Gt(f,!0),b()},K=(f,c,p)=>{c.component=f;const g=f.vnode.props;f.vnode=c,f.next=null,Fl(f,c.props,g,p),Ll(f,c.children,p),Ee(),Nn(void 0,f.update),Oe()},Pt=(f,c,p,g,h,x,k,w,_=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,C=c.children,{patchFlag:S,shapeFlag:M}=c;if(S>0){if(S&128){Te(b,C,p,g,h,x,k,w,_);return}else if(S&256){Yn(b,C,p,g,h,x,k,w,_);return}}M&8?(I&16&&Tt(b,h,x),C!==b&&d(p,C)):I&16?M&16?Te(b,C,p,g,h,x,k,w,_):Tt(b,h,x,!0):(I&8&&d(p,""),M&16&&rt(C,p,g,h,x,k,w,_))},Yn=(f,c,p,g,h,x,k,w,_)=>{f=f||be,c=c||be;const b=f.length,I=c.length,C=Math.min(b,I);let S;for(S=0;S<C;S++){const M=c[S]=_?Yt(c[S]):Ot(c[S]);T(f[S],M,p,null,h,x,k,w,_)}b>I?Tt(f,h,x,!0,!1,C):rt(c,p,g,h,x,k,w,_,C)},Te=(f,c,p,g,h,x,k,w,_)=>{let b=0;const I=c.length;let C=f.length-1,S=I-1;for(;b<=C&&b<=S;){const M=f[b],$=c[b]=_?Yt(c[b]):Ot(c[b]);if(Me(M,$))T(M,$,p,null,h,x,k,w,_);else break;b++}for(;b<=C&&b<=S;){const M=f[C],$=c[S]=_?Yt(c[S]):Ot(c[S]);if(Me(M,$))T(M,$,p,null,h,x,k,w,_);else break;C--,S--}if(b>C){if(b<=S){const M=S+1,$=M<I?c[M].el:g;for(;b<=S;)T(null,c[b]=_?Yt(c[b]):Ot(c[b]),p,$,h,x,k,w,_),b++}}else if(b>S)for(;b<=C;)$t(f[b],h,x,!0),b++;else{const M=b,$=b,B=new Map;for(b=$;b<=S;b++){const ft=c[b]=_?Yt(c[b]):Ot(c[b]);ft.key!=null&&B.set(ft.key,b)}let H,q=0;const ht=S-$+1;let ue=!1,wa=0;const Ne=new Array(ht);for(b=0;b<ht;b++)Ne[b]=0;for(b=M;b<=C;b++){const ft=f[b];if(q>=ht){$t(ft,h,x,!0);continue}let kt;if(ft.key!=null)kt=B.get(ft.key);else for(H=$;H<=S;H++)if(Ne[H-$]===0&&Me(ft,c[H])){kt=H;break}kt===void 0?$t(ft,h,x,!0):(Ne[kt-$]=b+1,kt>=wa?wa=kt:ue=!0,T(ft,c[kt],p,null,h,x,k,w,_),q++)}const xa=ue?Bl(Ne):be;for(H=xa.length-1,b=ht-1;b>=0;b--){const ft=$+b,kt=c[ft],_a=ft+1<I?c[ft+1].el:g;Ne[b]===0?T(null,kt,p,_a,h,x,k,w,_):ue&&(H<0||b!==xa[H]?fe(kt,p,_a,2):H--)}}},fe=(f,c,p,g,h=null)=>{const{el:x,type:k,transition:w,children:_,shapeFlag:b}=f;if(b&6){fe(f.component.subTree,c,p,g);return}if(b&128){f.suspense.move(c,p,g);return}if(b&64){k.move(f,c,p,ce);return}if(k===mt){r(x,c,p);for(let C=0;C<_.length;C++)fe(_[C],c,p,g);r(f.anchor,c,p);return}if(k===Zn){j(f,c,p);return}if(g!==2&&b&1&&w)if(g===0)w.beforeEnter(x),r(x,c,p),ot(()=>w.enter(x),h);else{const{leave:C,delayLeave:S,afterLeave:M}=w,$=()=>r(x,c,p),B=()=>{C(x,()=>{$(),M&&M()})};S?S(x,$,B):B()}else r(x,c,p)},$t=(f,c,p,g=!1,h=!1)=>{const{type:x,props:k,ref:w,children:_,dynamicChildren:b,shapeFlag:I,patchFlag:C,dirs:S}=f;if(w!=null&&gr(w,null,p,f,!0),I&256){c.ctx.deactivate(f);return}const M=I&1&&S,$=!fn(f);let B;if($&&(B=k&&k.onVnodeBeforeUnmount)&&At(B,c,f),I&6)ts(f.component,p,g);else{if(I&128){f.suspense.unmount(p,g);return}M&&Jt(f,null,c,"beforeUnmount"),I&64?f.type.remove(f,c,p,h,ce,g):b&&(x!==mt||C>0&&C&64)?Tt(b,c,p,!1,!0):(x===mt&&C&384||!h&&I&16)&&Tt(_,c,p),g&&va(f)}($&&(B=k&&k.onVnodeUnmounted)||M)&&ot(()=>{B&&At(B,c,f),M&&Jt(f,null,c,"unmounted")},p)},va=f=>{const{type:c,el:p,anchor:g,transition:h}=f;if(c===mt){Qo(p,g);return}if(c===Zn){Y(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:w}=h,_=()=>k(p,x);w?w(f.el,x,_):_()}else x()},Qo=(f,c)=>{let p;for(;f!==c;)p=v(f),a(f),f=p;a(c)},ts=(f,c,p)=>{const{bum:g,scope:h,update:x,subTree:k,um:w}=f;g&&Vn(g),h.stop(),x&&(x.active=!1,$t(k,f,c,p)),w&&ot(w,c),ot(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},Tt=(f,c,p,g=!1,h=!1,x=0)=>{for(let k=x;k<f.length;k++)$t(f[k],c,p,g,h)},Qe=f=>f.shapeFlag&6?Qe(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),ya=(f,c,p)=>{f==null?c._vnode&&$t(c._vnode,null,null,!0):T(c._vnode||null,f,c,null,null,null,p),Ji(),c._vnode=f},ce={p:T,um:$t,m:fe,r:va,mt:Hn,mc:rt,pc:Pt,pbc:le,n:Qe,o:t};let Wn,Kn;return e&&([Wn,Kn]=e(ce)),{render:ya,hydrate:Wn,createApp:Dl(ya,Wn)}}function Gt({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function po(t,e,n=!1){const r=t.children,a=e.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=Yt(a[i]),s.el=o.el),n||po(o,s))}}function Bl(t){const e=t.slice(),n=[0];let r,a,i,o,s;const l=t.length;for(r=0;r<l;r++){const u=t[r];if(u!==0){if(a=n[n.length-1],t[a]<u){e[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,t[n[s]]<u?i=s+1:o=s;u<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}const Hl=t=>t.__isTeleport,mt=Symbol(void 0),Gr=Symbol(void 0),qe=Symbol(void 0),Zn=Symbol(void 0),De=[];let vt=null;function re(t=!1){De.push(vt=t?null:[])}function Yl(){De.pop(),vt=De[De.length-1]||null}let Xe=1;function $a(t){Xe+=t}function Wl(t){return t.dynamicChildren=Xe>0?vt||be:null,Yl(),Xe>0&&vt&&vt.push(t),t}function ae(t,e,n,r,a,i){return Wl(Mt(t,e,n,r,a,i,!0))}function br(t){return t?t.__v_isVNode===!0:!1}function Me(t,e){return t.type===e.type&&t.key===e.key}const Ln="__vInternal",ho=({key:t})=>t!=null?t:null,cn=({ref:t,ref_key:e,ref_for:n})=>t!=null?G(t)||Q(t)||z(t)?{i:Ct,r:t,k:e,f:!!n}:t:null;function Mt(t,e=null,n=null,r=0,a=null,i=t===mt?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&ho(e),ref:e&&cn(e),scopeId:Fn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null};return s?(Qr(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=G(n)?8:16),Xe>0&&!o&&vt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&vt.push(l),l}const st=Kl;function Kl(t,e=null,n=null,r=0,a=null,i=!1){if((!t||t===El)&&(t=qe),br(t)){const s=xe(t,e,!0);return n&&Qr(s,n),Xe>0&&!i&&vt&&(s.shapeFlag&6?vt[vt.indexOf(t)]=s:vt.push(s)),s.patchFlag|=-2,s}if(rf(t)&&(t=t.__vccOpts),e){e=ql(e);let{class:s,style:l}=e;s&&!G(s)&&(e.class=En(s)),J(l)&&($i(l)&&!F(l)&&(l=nt({},l)),e.style=Rr(l))}const o=G(t)?1:ll(t)?128:Hl(t)?64:J(t)?4:z(t)?2:0;return Mt(t,e,n,r,a,o,i,!0)}function ql(t){return t?$i(t)||Ln in t?nt({},t):t:null}function xe(t,e,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=t,s=e?Xl(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:s,key:s&&ho(s),ref:e&&e.ref?n&&a?F(a)?a.concat(cn(e)):[a,cn(e)]:cn(e):a,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==mt?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&xe(t.ssContent),ssFallback:t.ssFallback&&xe(t.ssFallback),el:t.el,anchor:t.anchor}}function Zr(t=" ",e=0){return st(Gr,null,t,e)}function Ot(t){return t==null||typeof t=="boolean"?st(qe):F(t)?st(mt,null,t.slice()):typeof t=="object"?Yt(t):st(Gr,null,String(t))}function Yt(t){return t.el===null||t.memo?t:xe(t)}function Qr(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(F(e))n=16;else if(typeof e=="object")if(r&65){const a=e.default;a&&(a._c&&(a._d=!1),Qr(t,a()),a._c&&(a._d=!0));return}else{n=32;const a=e._;!a&&!(Ln in e)?e._ctx=Ct:a===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else z(e)?(e={default:e,_ctx:Ct},n=32):(e=String(e),r&64?(n=16,e=[Zr(e)]):n=8);t.children=e,t.shapeFlag|=n}function Xl(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const a in r)if(a==="class")e.class!==r.class&&(e.class=En([e.class,r.class]));else if(a==="style")e.style=Rr([e.style,r.style]);else if(On(a)){const i=e[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(e[a]=i?[].concat(i,o):o)}else a!==""&&(e[a]=r[a])}return e}function At(t,e,n,r=null){xt(t,e,7,[n,r])}const Vl=mo();let Jl=0;function Gl(t,e,n){const r=t.type,a=(e?e.appContext:t.appContext)||Vl,i={uid:Jl++,vnode:t,type:r,parent:e,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new hs(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:lo(r,a),emitsOptions:Zi(r,a),emit:null,emitted:null,propsDefaults:W,inheritAttrs:r.inheritAttrs,ctx:W,data:W,props:W,attrs:W,slots:W,refs:W,setupState:W,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=tl.bind(null,i),t.ce&&t.ce(i),i}let Z=null;const _e=t=>{Z=t,t.scope.on()},ie=()=>{Z&&Z.scope.off(),Z=null};function go(t){return t.vnode.shapeFlag&4}let Ve=!1;function Zl(t,e=!1){Ve=e;const{props:n,children:r}=t.vnode,a=go(t);Ml(t,n,a,e),zl(t,r);const i=a?Ql(t,e):void 0;return Ve=!1,i}function Ql(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ui(new Proxy(t.ctx,Cl));const{setup:r}=n;if(r){const a=t.setupContext=r.length>1?ef(t):null;_e(t),Ee();const i=Kt(r,t,0,[t.props,a]);if(Oe(),ie(),Oi(i)){if(i.then(ie,ie),e)return i.then(o=>{Ua(t,o,e)}).catch(o=>{Tn(o,t,0)});t.asyncDep=i}else Ua(t,i,e)}else bo(t,e)}function Ua(t,e,n){z(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:J(e)&&(t.setupState=Wi(e)),bo(t,n)}let Ba;function bo(t,e,n){const r=t.type;if(!t.render){if(!e&&Ba&&!r.render){const a=r.template;if(a){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:s,compilerOptions:l}=r,u=nt(nt({isCustomElement:i,delimiters:s},o),l);r.render=Ba(a,u)}}t.render=r.render||wt}_e(t),Ee(),Il(t),Oe(),ie()}function tf(t){return new Proxy(t.attrs,{get(e,n){return ut(t,"get","$attrs"),e[n]}})}function ef(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=tf(t))},slots:t.slots,emit:t.emit,expose:e}}function ta(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Wi(Ui(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bn)return bn[n](t)}}))}function nf(t,e=!0){return z(t)?t.displayName||t.name:t.name||e&&t.__name}function rf(t){return z(t)&&"__vccOpts"in t}const pt=(t,e)=>qs(t,e,Ve);function vo(t,e,n){const r=arguments.length;return r===2?J(e)&&!F(e)?br(e)?st(t,null,[e]):st(t,e):st(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&br(n)&&(n=[n]),st(t,e,n))}const af="3.2.37",of="http://www.w3.org/2000/svg",Qt=typeof document!="undefined"?document:null,Ha=Qt&&Qt.createElement("template"),sf={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const a=e?Qt.createElementNS(of,t):Qt.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:t=>Qt.createTextNode(t),createComment:t=>Qt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Qt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},cloneNode(t){const e=t.cloneNode(!0);return"_value"in t&&(e._value=t._value),e},insertStaticContent(t,e,n,r,a,i){const o=n?n.previousSibling:e.lastChild;if(a&&(a===i||a.nextSibling))for(;e.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{Ha.innerHTML=r?`<svg>${t}</svg>`:t;const s=Ha.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}e.insertBefore(s,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function lf(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function ff(t,e,n){const r=t.style,a=G(n);if(n&&!a){for(const i in n)vr(r,i,n[i]);if(e&&!G(e))for(const i in e)n[i]==null&&vr(r,i,"")}else{const i=r.display;a?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=i)}}const Ya=/\s*!important$/;function vr(t,e,n){if(F(n))n.forEach(r=>vr(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=cf(t,e);Ya.test(n)?t.setProperty(Ae(r),n.replace(Ya,""),"important"):t[r]=n}}const Wa=["Webkit","Moz","ms"],Qn={};function cf(t,e){const n=Qn[e];if(n)return n;let r=St(e);if(r!=="filter"&&r in t)return Qn[e]=r;r=Sn(r);for(let a=0;a<Wa.length;a++){const i=Wa[a]+r;if(i in t)return Qn[e]=i}return e}const Ka="http://www.w3.org/1999/xlink";function uf(t,e,n,r,a){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Ka,e.slice(6,e.length)):t.setAttributeNS(Ka,e,n);else{const i=rs(e);n==null||i&&!ki(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function df(t,e,n,r,a,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,a,i),t[e]=n==null?"":n;return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const l=n==null?"":n;(t.value!==l||t.tagName==="OPTION")&&(t.value=l),n==null&&t.removeAttribute(e);return}let s=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=ki(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{t[e]=n}catch{}s&&t.removeAttribute(e)}const[yo,mf]=(()=>{let t=Date.now,e=!1;if(typeof window!="undefined"){Date.now()>document.createEvent("Event").timeStamp&&(t=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);e=!!(n&&Number(n[1])<=53)}return[t,e]})();let yr=0;const pf=Promise.resolve(),hf=()=>{yr=0},gf=()=>yr||(pf.then(hf),yr=yo());function bf(t,e,n,r){t.addEventListener(e,n,r)}function vf(t,e,n,r){t.removeEventListener(e,n,r)}function yf(t,e,n,r,a=null){const i=t._vei||(t._vei={}),o=i[e];if(r&&o)o.value=r;else{const[s,l]=wf(e);if(r){const u=i[e]=xf(r,a);bf(t,s,u,l)}else o&&(vf(t,s,o,l),i[e]=void 0)}}const qa=/(?:Once|Passive|Capture)$/;function wf(t){let e;if(qa.test(t)){e={};let n;for(;n=t.match(qa);)t=t.slice(0,t.length-n[0].length),e[n[0].toLowerCase()]=!0}return[Ae(t.slice(2)),e]}function xf(t,e){const n=r=>{const a=r.timeStamp||yo();(mf||a>=n.attached-1)&&xt(_f(r,n.value),e,5,[r])};return n.value=t,n.attached=gf(),n}function _f(t,e){if(F(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>a=>!a._stopped&&r&&r(a))}else return e}const Xa=/^on[a-z]/,kf=(t,e,n,r,a=!1,i,o,s,l)=>{e==="class"?lf(t,r,a):e==="style"?ff(t,n,r):On(e)?zr(e)||yf(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Af(t,e,r,a))?df(t,e,r,i,o,s,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),uf(t,e,r,a))};function Af(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&Xa.test(e)&&z(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||Xa.test(e)&&G(n)?!1:e in t}const Ef=nt({patchProp:kf},sf);let Va;function Of(){return Va||(Va=$l(Ef))}const Cf=(...t)=>{const e=Of().createApp(...t),{mount:n}=e;return e.mount=r=>{const a=If(r);if(!a)return;const i=e._component;!z(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},e};function If(t){return G(t)?document.querySelector(t):t}var Ja;const Sf=typeof window!="undefined";Sf&&((Ja=window==null?void 0:window.navigator)==null?void 0:Ja.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function Pf(t,e){function n(...r){t(()=>e.apply(this,r),{fn:e,thisArg:this,args:r})}return n}function Tf(t,e=!0,n=!0){let r=0,a,i=!0;const o=()=>{a&&(clearTimeout(a),a=void 0)};return l=>{const u=Yi(t),d=Date.now()-r;if(o(),u<=0)return r=Date.now(),l();d>u&&(n||!i)?(r=Date.now(),l()):e&&(a=setTimeout(()=>{r=Date.now(),i=!0,o(),l()},u)),!n&&!a&&(a=setTimeout(()=>i=!0,u)),i=!1}}function Nf(t,e=200,n=!0,r=!0){return Pf(Tf(e,n,r),t)}const Mf=()=>{const t=ne(window.innerHeight),e=ne(window.innerWidth),r=Nf(()=>{t.value=window.innerHeight,e.value=window.innerWidth},13);return no(()=>window.addEventListener("resize",r)),zn(()=>window.removeEventListener("resize",r)),{height:t,width:e}},tr={lemon:"#FFF002",avocado:"#B0DE02",watermelon:"#00AF3F",blueberry:"#2F4858"},ke=(t,e)=>Math.round(Math.random()*(e-t)+t),Ff=()=>({x:ke(-1,1),y:ke(-1,1)}),Rf=(t,e)=>({x:ke(0,t),y:ke(0,e)}),zf=()=>{const t=[tr.lemon,tr.avocado,tr.watermelon],e=ke(0,t.length-1);return t[e]},Lf=t=>Math.round(t/ke(1,2)),jf=(t,e)=>({coordinates:Rf(t,e),radius:Lf(60),direction:Ff(),color:zf()}),Df=(t,e,n)=>Array.from({length:n}).map(()=>jf(t,e)),wo=(t,e)=>({x:t.x+e.x,y:t.y+e.y}),ea=(t,e)=>({x:t.x-e.x,y:t.y-e.y}),$f=(t,e)=>({x:t.x*e.x,y:t.y*e.y}),wr=t=>({x:t.x?t.x/Math.abs(t.x):0,y:t.y?t.y/Math.abs(t.y):0}),Uf=()=>({x:0,y:0}),Bf=(t,e)=>{const{x:n,y:r}=ea(e,t);return Math.round(Math.sqrt(n*n+r*r))},Hf=t=>t.map((e,n)=>t.slice(n+1).map(r=>[e,r])).flat(),Yf=(t,e)=>!(e.coordinates.x+e.radius<0||e.coordinates.y+e.radius<0||e.coordinates.x-e.radius>t.size.width||e.coordinates.y-e.radius>t.size.height),xo=t=>{const[e,n]=t;return Bf(e.coordinates,n.coordinates)<=e.radius+n.radius},Wf=t=>{const[e,n]=t;return xo(t)?ea(n.coordinates,e.coordinates):Uf()},Kf=t=>Hf(t.shapes).filter(e=>xo(e)),qf=t=>t.shapes.filter(e=>!Yf(t,e)),Xf=t=>t.coordinates=wo(t.coordinates,t.direction),Vf=t=>{const e={x:-1,y:-1};t.direction=$f(e,t.direction),t.direction=wr(t.direction)},Jf=t=>{const[e,n]=t,r=Wf(t);e.direction=ea(e.direction,r),n.direction=wo(n.direction,r),e.direction=wr(e.direction),n.direction=wr(n.direction)},Gf=t=>{const e=Kf(t),n=qf(t);e.forEach(r=>Jf(r)),n.forEach(r=>Vf(r)),t.shapes.forEach(r=>Xf(r))},Zf=(t,e,n)=>{const a=n-e,i=t/1e3,o=Math.ceil(a*i);return Math.min(5,o)},Qf=(t,e=60)=>({start(n=performance.now()){const r=Zf(e,this.updated,n);r&&(this.updated=n,this.update(r)),this.frame=window.requestAnimationFrame(this.start.bind(this))},stop(){window.cancelAnimationFrame(this.frame)},update(n=1){Array.from({length:n}).forEach(()=>Gf(t))},updated:performance.now(),frame:0}),tc=["width","height"],ec=["cx","cy","r","fill"],nc=Ce({__name:"AnimatedBoard",props:{height:null,width:null,shapes:null,fps:null},setup(t){const e=t;let n;const r=()=>({size:{height:e.height,width:e.width},shapes:e.shapes}),a=()=>{n&&n.stop(),n=Qf(r(),e.fps),n.start()};return zn(()=>n.stop()),ul(()=>a()),(i,o)=>(re(),ae("svg",{width:e.width,height:e.height},[(re(!0),ae(mt,null,ao(e.shapes,(s,l)=>(re(),ae("circle",{key:l,cx:s.coordinates.x,cy:s.coordinates.y,r:s.radius,fill:s.color},null,8,ec))),128))],8,tc))}});var rc=(t,e)=>{const n=t.__vccOpts||t;for(const[r,a]of e)n[r]=a;return n};const na=t=>(el("data-v-b7889c2c"),t=t(),nl(),t),ac={class:"mb-10"},ic=["href"],oc=Zr(". "),sc=na(()=>Mt("p",{class:"mb-5"}," I like to bring my experiences, ideas, patterns and processes to build better systems. I also spend some time coding but I mostly be helping others code and grow. ",-1)),lc=na(()=>Mt("p",{class:"mb-5"}," I enjoy taking part in architectural decisions and help solve complex problems with scalable solutions. I'm used to daily interact with Developers, Managers and Directors to coordinate and keep everyone aligned. ",-1)),fc={class:"flex gap-2 items-center justify-end mt-10"},cc=na(()=>Mt("p",{class:"inline-block"}," Feel free to get in touch with me on ",-1)),uc=["href"],dc=Ce({__name:"ResumeBio",setup(t){const e=ne({name:"Mag-Stellon Nadarajah",role:"Software Engineer"}),n=ne({name:"Dassault Syst\xE8mes",link:"https://www.3ds.com/"}),r=ne([{link:"https://www.linkedin.com/in/mag-stellon-nadarajah-2456388b/",class:"finger-friendly text-[#0a66c2]",icon:["fab","linkedin"]},{link:"https://github.com/magstellon",class:"finger-friendly",icon:["fab","github-square"]}]);return(a,i)=>{const o=Al("font-awesome-icon");return re(),ae(mt,null,[Mt("p",ac,[Zr(" Hello there, I'm "+qn(e.value.name)+" and I grow up as a "+qn(e.value.role)+" at ",1),Mt("a",{class:"underline",href:n.value.link,target:"_blank"},qn(n.value.name),9,ic),oc]),sc,lc,Mt("div",fc,[cc,(re(!0),ae(mt,null,ao(r.value,s=>(re(),ae("a",{key:s.link,href:s.link,target:"_blank",class:"finger-friendly inline-block"},[st(o,{class:En(s.class),icon:s.icon},null,8,["class","icon"])],8,uc))),128))])],64)}}});var mc=rc(dc,[["__scopeId","data-v-b7889c2c"]]);const pc={class:"font-sans h-full relative relative w-full"},hc={class:"center lg:w-auto md:w-[80%] modal w-[90%]"},gc=Ce({__name:"App",setup(t){const r=ne(Mf()),a=r.value.height*r.value.width,i=Math.round(a/4e4),o=ne(Df(r.value.width,r.value.height,i));return(s,l)=>(re(),ae("div",pc,[st(nc,{height:r.value.height,width:r.value.width,shapes:o.value,fps:30},null,8,["height","width","shapes"]),Mt("main",hc,[st(mc)])]))}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */function Ga(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function A(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ga(Object(n),!0).forEach(function(r){yc(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ga(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yn(t){return yn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},yn(t)}function bc(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Za(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function vc(t,e,n){return e&&Za(t.prototype,e),n&&Za(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function yc(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ra(t,e){return xc(t)||kc(t,e)||_o(t,e)||Ec()}function jn(t){return wc(t)||_c(t)||_o(t)||Ac()}function wc(t){if(Array.isArray(t))return xr(t)}function xc(t){if(Array.isArray(t))return t}function _c(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function kc(t,e){var n=t==null?null:typeof Symbol!="undefined"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(t);!(a=(o=n.next()).done)&&(r.push(o.value),!(e&&r.length===e));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function _o(t,e){if(!!t){if(typeof t=="string")return xr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return xr(t,e)}}function xr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Ac(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ec(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Qa=function(){},aa={},ko={},Ao=null,Eo={mark:Qa,measure:Qa};try{typeof window!="undefined"&&(aa=window),typeof document!="undefined"&&(ko=document),typeof MutationObserver!="undefined"&&(Ao=MutationObserver),typeof performance!="undefined"&&(Eo=performance)}catch{}var Oc=aa.navigator||{},ti=Oc.userAgent,ei=ti===void 0?"":ti,Xt=aa,X=ko,ni=Ao,on=Eo;Xt.document;var Dt=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",Oo=~ei.indexOf("MSIE")||~ei.indexOf("Trident/"),Rt="___FONT_AWESOME___",_r=16,Co="fa",Io="svg-inline--fa",oe="data-fa-i2svg",kr="data-fa-pseudo-element",Cc="data-fa-pseudo-element-pending",ia="data-prefix",oa="data-icon",ri="fontawesome-i2svg",Ic="async",Sc=["HTML","HEAD","STYLE","SCRIPT"],So=function(){try{return!0}catch{return!1}}(),sa={fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit",fa:"solid"},wn={solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"},Po={fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},Pc={"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},Tc=/fa[srltdbk\-\ ]/,To="fa-layers-text",Nc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Kit)?.*/i,Mc={900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},No=[1,2,3,4,5,6,7,8,9,10],Fc=No.concat([11,12,13,14,15,16,17,18,19,20]),Rc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],te={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},zc=[].concat(jn(Object.keys(wn)),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",te.GROUP,te.SWAP_OPACITY,te.PRIMARY,te.SECONDARY]).concat(No.map(function(t){return"".concat(t,"x")})).concat(Fc.map(function(t){return"w-".concat(t)})),Mo=Xt.FontAwesomeConfig||{};function Lc(t){var e=X.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function jc(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(X&&typeof X.querySelector=="function"){var Dc=[["data-family-prefix","familyPrefix"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Dc.forEach(function(t){var e=ra(t,2),n=e[0],r=e[1],a=jc(Lc(n));a!=null&&(Mo[r]=a)})}var $c={familyPrefix:Co,styleDefault:"solid",replacementClass:Io,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},$e=A(A({},$c),Mo);$e.autoReplaceSvg||($e.observeMutations=!1);var P={};Object.keys($e).forEach(function(t){Object.defineProperty(P,t,{enumerable:!0,set:function(n){$e[t]=n,un.forEach(function(r){return r(P)})},get:function(){return $e[t]}})});Xt.FontAwesomeConfig=P;var un=[];function Uc(t){return un.push(t),function(){un.splice(un.indexOf(t),1)}}var Bt=_r,It={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Bc(t){if(!(!t||!Dt)){var e=X.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(e,r),t}}var Hc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Je(){for(var t=12,e="";t-- >0;)e+=Hc[Math.random()*62|0];return e}function Ie(t){for(var e=[],n=(t||[]).length>>>0;n--;)e[n]=t[n];return e}function la(t){return t.classList?Ie(t.classList):(t.getAttribute("class")||"").split(" ").filter(function(e){return e})}function Fo(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Yc(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,'="').concat(Fo(t[n]),'" ')},"").trim()}function Dn(t){return Object.keys(t||{}).reduce(function(e,n){return e+"".concat(n,": ").concat(t[n].trim(),";")},"")}function fa(t){return t.size!==It.size||t.x!==It.x||t.y!==It.y||t.rotate!==It.rotate||t.flipX||t.flipY}function Wc(t){var e=t.transform,n=t.containerWidth,r=t.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function Kc(t){var e=t.transform,n=t.width,r=n===void 0?_r:n,a=t.height,i=a===void 0?_r:a,o=t.startCentered,s=o===void 0?!1:o,l="";return s&&Oo?l+="translate(".concat(e.x/Bt-r/2,"em, ").concat(e.y/Bt-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/Bt,"em), calc(-50% + ").concat(e.y/Bt,"em)) "):l+="translate(".concat(e.x/Bt,"em, ").concat(e.y/Bt,"em) "),l+="scale(".concat(e.size/Bt*(e.flipX?-1:1),", ").concat(e.size/Bt*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var qc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0);
          animation-delay: var(--fa-animation-delay, 0);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Ro(){var t=Co,e=Io,n=P.familyPrefix,r=P.replacementClass,a=qc;if(n!==t||r!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var ai=!1;function er(){P.autoAddCss&&!ai&&(Bc(Ro()),ai=!0)}var Xc={mixout:function(){return{dom:{css:Ro,insertCss:er}}},hooks:function(){return{beforeDOMElementCreation:function(){er()},beforeI2svg:function(){er()}}}},zt=Xt||{};zt[Rt]||(zt[Rt]={});zt[Rt].styles||(zt[Rt].styles={});zt[Rt].hooks||(zt[Rt].hooks={});zt[Rt].shims||(zt[Rt].shims=[]);var yt=zt[Rt],zo=[],Vc=function t(){X.removeEventListener("DOMContentLoaded",t),xn=1,zo.map(function(e){return e()})},xn=!1;Dt&&(xn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),xn||X.addEventListener("DOMContentLoaded",Vc));function Jc(t){!Dt||(xn?setTimeout(t,0):zo.push(t))}function Ge(t){var e=t.tag,n=t.attributes,r=n===void 0?{}:n,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Fo(t):"<".concat(e," ").concat(Yc(r),">").concat(i.map(Ge).join(""),"</").concat(e,">")}function ii(t,e,n){if(t&&t[e]&&t[e][n])return{prefix:e,iconName:n,icon:t[e][n]}}var Gc=function(e,n){return function(r,a,i,o){return e.call(n,r,a,i,o)}},nr=function(e,n,r,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Gc(n,a):n,l,u,d;for(r===void 0?(l=1,d=e[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,e[u],u,e);return d};function Zc(t){for(var e=[],n=0,r=t.length;n<r;){var a=t.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=t.charCodeAt(n++);(i&64512)==56320?e.push(((a&1023)<<10)+(i&1023)+65536):(e.push(a),n--)}else e.push(a)}return e}function Ar(t){var e=Zc(t);return e.length===1?e[0].toString(16):null}function Qc(t,e){var n=t.length,r=t.charCodeAt(e),a;return r>=55296&&r<=56319&&n>e+1&&(a=t.charCodeAt(e+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function oi(t){return Object.keys(t).reduce(function(e,n){var r=t[n],a=!!r.icon;return a?e[r.iconName]=r.icon:e[n]=r,e},{})}function Er(t,e){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=oi(e);typeof yt.hooks.addPack=="function"&&!a?yt.hooks.addPack(t,oi(e)):yt.styles[t]=A(A({},yt.styles[t]||{}),i),t==="fas"&&Er("fa",e)}var Ue=yt.styles,tu=yt.shims,eu=Object.values(Po),ca=null,Lo={},jo={},Do={},$o={},Uo={},nu=Object.keys(sa);function ru(t){return~zc.indexOf(t)}function au(t,e){var n=e.split("-"),r=n[0],a=n.slice(1).join("-");return r===t&&a!==""&&!ru(a)?a:null}var Bo=function(){var e=function(i){return nr(Ue,function(o,s,l){return o[l]=nr(s,i,{}),o},{})};Lo=e(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),jo=e(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Uo=e(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in Ue||P.autoFetchSvg,r=nr(tu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});Do=r.names,$o=r.unicodes,ca=$n(P.styleDefault)};Uc(function(t){ca=$n(t.styleDefault)});Bo();function ua(t,e){return(Lo[t]||{})[e]}function iu(t,e){return(jo[t]||{})[e]}function he(t,e){return(Uo[t]||{})[e]}function Ho(t){return Do[t]||{prefix:null,iconName:null}}function ou(t){var e=$o[t],n=ua("fas",t);return e||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Vt(){return ca}var da=function(){return{prefix:null,iconName:null,rest:[]}};function $n(t){var e=sa[t],n=wn[t]||wn[e],r=t in yt.styles?t:null;return n||r||null}function Un(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.skipLookups,r=n===void 0?!1:n,a=null,i=t.reduce(function(o,s){var l=au(P.familyPrefix,s);if(Ue[s]?(s=eu.includes(s)?Pc[s]:s,a=s,o.prefix=s):nu.indexOf(s)>-1?(a=s,o.prefix=$n(s)):l?o.iconName=l:s!==P.replacementClass&&o.rest.push(s),!r&&o.prefix&&o.iconName){var u=a==="fa"?Ho(o.iconName):{},d=he(o.prefix,o.iconName);u.prefix&&(a=null),o.iconName=u.iconName||d||o.iconName,o.prefix=u.prefix||o.prefix,o.prefix==="far"&&!Ue.far&&Ue.fas&&!P.autoFetchSvg&&(o.prefix="fas")}return o},da());return(i.prefix==="fa"||a==="fa")&&(i.prefix=Vt()||"fas"),i}var su=function(){function t(){bc(this,t),this.definitions={}}return vc(t,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=A(A({},n.definitions[s]||{}),o[s]),Er(s,o[s]);var l=Po[s];l&&Er(l,o[s]),Bo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),t}(),si=[],ge={},we={},lu=Object.keys(we);function fu(t,e){var n=e.mixoutsTo;return si=t,ge={},Object.keys(we).forEach(function(r){lu.indexOf(r)===-1&&delete we[r]}),si.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),yn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){ge[o]||(ge[o]=[]),ge[o].push(i[o])})}r.provides&&r.provides(we)}),n}function Or(t,e){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=ge[t]||[];return i.forEach(function(o){e=o.apply(null,[e].concat(r))}),e}function se(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var a=ge[t]||[];a.forEach(function(i){i.apply(null,n)})}function Lt(){var t=arguments[0],e=Array.prototype.slice.call(arguments,1);return we[t]?we[t].apply(null,e):void 0}function Cr(t){t.prefix==="fa"&&(t.prefix="fas");var e=t.iconName,n=t.prefix||Vt();if(!!e)return e=he(n,e)||e,ii(Yo.definitions,n,e)||ii(yt.styles,n,e)}var Yo=new su,cu=function(){P.autoReplaceSvg=!1,P.observeMutations=!1,se("noAuto")},uu={i2svg:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Dt?(se("beforeI2svg",e),Lt("pseudoElements2svg",e),Lt("i2svg",e)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot;P.autoReplaceSvg===!1&&(P.autoReplaceSvg=!0),P.observeMutations=!0,Jc(function(){mu({autoReplaceSvgRoot:n}),se("watch",e)})}},du={icon:function(e){if(e===null)return null;if(yn(e)==="object"&&e.prefix&&e.iconName)return{prefix:e.prefix,iconName:he(e.prefix,e.iconName)||e.iconName};if(Array.isArray(e)&&e.length===2){var n=e[1].indexOf("fa-")===0?e[1].slice(3):e[1],r=$n(e[0]);return{prefix:r,iconName:he(r,n)||n}}if(typeof e=="string"&&(e.indexOf("".concat(P.familyPrefix,"-"))>-1||e.match(Tc))){var a=Un(e.split(" "),{skipLookups:!0});return{prefix:a.prefix||Vt(),iconName:he(a.prefix,a.iconName)||a.iconName}}if(typeof e=="string"){var i=Vt();return{prefix:i,iconName:he(i,e)||e}}}},dt={noAuto:cu,config:P,dom:uu,parse:du,library:Yo,findIconDefinition:Cr,toHtml:Ge},mu=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(yt.styles).length>0||P.autoFetchSvg)&&Dt&&P.autoReplaceSvg&&dt.dom.i2svg({node:r})};function Bn(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(r){return Ge(r)})}}),Object.defineProperty(t,"node",{get:function(){if(!!Dt){var r=X.createElement("div");return r.innerHTML=t.html,r.children}}}),t}function pu(t){var e=t.children,n=t.main,r=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(fa(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Dn(A(A({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function hu(t){var e=t.prefix,n=t.iconName,r=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(P.familyPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:A(A({},a),{},{id:o}),children:r}]}]}function ma(t){var e=t.icons,n=e.main,r=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,l=t.title,u=t.maskId,d=t.titleId,m=t.extra,v=t.watchable,E=v===void 0?!1:v,R=r.found?r:n,L=R.width,T=R.height,y=a==="fak",O=[P.replacementClass,i?"".concat(P.familyPrefix,"-").concat(i):""].filter(function(rt){return m.classes.indexOf(rt)===-1}).filter(function(rt){return rt!==""||!!rt}).concat(m.classes).join(" "),N={children:[],attributes:A(A({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(L," ").concat(T)})},j=y&&!~m.classes.indexOf("fa-fw")?{width:"".concat(L/T*16*.0625,"em")}:{};E&&(N.attributes[oe]=""),l&&(N.children.push({tag:"title",attributes:{id:N.attributes["aria-labelledby"]||"title-".concat(d||Je())},children:[l]}),delete N.attributes.title);var Y=A(A({},N),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:A(A({},j),m.styles)}),tt=r.found&&n.found?Lt("generateAbstractMask",Y)||{children:[],attributes:{}}:Lt("generateAbstractIcon",Y)||{children:[],attributes:{}},lt=tt.children,_t=tt.attributes;return Y.children=lt,Y.attributes=_t,s?hu(Y):pu(Y)}function li(t){var e=t.content,n=t.width,r=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,l=s===void 0?!1:s,u=A(A(A({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[oe]="");var d=A({},o.styles);fa(a)&&(d.transform=Kc({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Dn(d);m.length>0&&(u.style=m);var v=[];return v.push({tag:"span",attributes:u,children:[e]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function gu(t){var e=t.content,n=t.title,r=t.extra,a=A(A(A({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Dn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[e]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var rr=yt.styles;function Ir(t){var e=t[0],n=t[1],r=t.slice(4),a=ra(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(P.familyPrefix,"-").concat(te.GROUP)},children:[{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(te.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(P.familyPrefix,"-").concat(te.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:n,icon:o}}var bu={found:!1,width:512,height:512};function vu(t,e){!So&&!P.showMissingIcons&&t&&console.error('Icon with name "'.concat(t,'" and prefix "').concat(e,'" is missing.'))}function Sr(t,e){var n=e;return e==="fa"&&P.styleDefault!==null&&(e=Vt()),new Promise(function(r,a){if(Lt("missingIconAbstract"),n==="fa"){var i=Ho(t)||{};t=i.iconName||t,e=i.prefix||e}if(t&&e&&rr[e]&&rr[e][t]){var o=rr[e][t];return r(Ir(o))}vu(t,e),r(A(A({},bu),{},{icon:P.showMissingIcons&&t?Lt("missingIconAbstract")||{}:{}}))})}var fi=function(){},Pr=P.measurePerformance&&on&&on.mark&&on.measure?on:{mark:fi,measure:fi},ze='FA "6.1.1"',yu=function(e){return Pr.mark("".concat(ze," ").concat(e," begins")),function(){return Wo(e)}},Wo=function(e){Pr.mark("".concat(ze," ").concat(e," ends")),Pr.measure("".concat(ze," ").concat(e),"".concat(ze," ").concat(e," begins"),"".concat(ze," ").concat(e," ends"))},pa={begin:yu,end:Wo},dn=function(){};function ci(t){var e=t.getAttribute?t.getAttribute(oe):null;return typeof e=="string"}function wu(t){var e=t.getAttribute?t.getAttribute(ia):null,n=t.getAttribute?t.getAttribute(oa):null;return e&&n}function xu(t){return t&&t.classList&&t.classList.contains&&t.classList.contains(P.replacementClass)}function _u(){if(P.autoReplaceSvg===!0)return mn.replace;var t=mn[P.autoReplaceSvg];return t||mn.replace}function ku(t){return X.createElementNS("http://www.w3.org/2000/svg",t)}function Au(t){return X.createElement(t)}function Ko(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=e.ceFn,r=n===void 0?t.tag==="svg"?ku:Au:n;if(typeof t=="string")return X.createTextNode(t);var a=r(t.tag);Object.keys(t.attributes||[]).forEach(function(o){a.setAttribute(o,t.attributes[o])});var i=t.children||[];return i.forEach(function(o){a.appendChild(Ko(o,{ceFn:r}))}),a}function Eu(t){var e=" ".concat(t.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}var mn={replace:function(e){var n=e[0];if(n.parentNode)if(e[1].forEach(function(a){n.parentNode.insertBefore(Ko(a),n)}),n.getAttribute(oe)===null&&P.keepOriginalSource){var r=X.createComment(Eu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(e){var n=e[0],r=e[1];if(~la(n).indexOf(P.replacementClass))return mn.replace(e);var a=new RegExp("".concat(P.familyPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===P.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return Ge(s)}).join(`
`);n.setAttribute(oe,""),n.innerHTML=o}};function ui(t){t()}function qo(t,e){var n=typeof e=="function"?e:dn;if(t.length===0)n();else{var r=ui;P.mutateApproach===Ic&&(r=Xt.requestAnimationFrame||ui),r(function(){var a=_u(),i=pa.begin("mutate");t.map(a),i(),n()})}}var ha=!1;function Xo(){ha=!0}function Tr(){ha=!1}var _n=null;function di(t){if(!!ni&&!!P.observeMutations){var e=t.treeCallback,n=e===void 0?dn:e,r=t.nodeCallback,a=r===void 0?dn:r,i=t.pseudoElementsCallback,o=i===void 0?dn:i,s=t.observeMutationsRoot,l=s===void 0?X:s;_n=new ni(function(u){if(!ha){var d=Vt();Ie(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!ci(m.addedNodes[0])&&(P.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&P.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&ci(m.target)&&~Rc.indexOf(m.attributeName))if(m.attributeName==="class"&&wu(m.target)){var v=Un(la(m.target)),E=v.prefix,R=v.iconName;m.target.setAttribute(ia,E||d),R&&m.target.setAttribute(oa,R)}else xu(m.target)&&a(m.target)})}}),Dt&&_n.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Ou(){!_n||_n.disconnect()}function Cu(t){var e=t.getAttribute("style"),n=[];return e&&(n=e.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Iu(t){var e=t.getAttribute("data-prefix"),n=t.getAttribute("data-icon"),r=t.innerText!==void 0?t.innerText.trim():"",a=Un(la(t));return a.prefix||(a.prefix=Vt()),e&&n&&(a.prefix=e,a.iconName=n),a.iconName&&a.prefix||a.prefix&&r.length>0&&(a.iconName=iu(a.prefix,t.innerText)||ua(a.prefix,Ar(t.innerText))),a}function Su(t){var e=Ie(t.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=t.getAttribute("title"),r=t.getAttribute("data-fa-title-id");return P.autoA11y&&(n?e["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(r||Je()):(e["aria-hidden"]="true",e.focusable="false")),e}function Pu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:It,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function mi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Iu(t),r=n.iconName,a=n.prefix,i=n.rest,o=Su(t),s=Or("parseNodeAttributes",{},t),l=e.styleParser?Cu(t):[];return A({iconName:r,title:t.getAttribute("title"),titleId:t.getAttribute("data-fa-title-id"),prefix:a,transform:It,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Tu=yt.styles;function Vo(t){var e=P.autoReplaceSvg==="nest"?mi(t,{styleParser:!1}):mi(t);return~e.extra.classes.indexOf(To)?Lt("generateLayersText",t,e):Lt("generateSvgReplacementMutation",t,e)}function pi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Dt)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(ri,"-").concat(m))},a=function(m){return n.remove("".concat(ri,"-").concat(m))},i=P.autoFetchSvg?Object.keys(sa):Object.keys(Tu),o=[".".concat(To,":not([").concat(oe,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(oe,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Ie(t.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=pa.begin("onTree"),u=s.reduce(function(d,m){try{var v=Vo(m);v&&d.push(v)}catch(E){So||E.name==="MissingIcon"&&console.error(E)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(v){qo(v,function(){r("active"),r("complete"),a("pending"),typeof e=="function"&&e(),l(),d()})}).catch(function(v){l(),m(v)})})}function Nu(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Vo(t).then(function(n){n&&qo([n],e)})}function Mu(t){return function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(e||{}).icon?e:Cr(e||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Cr(a||{})),t(r,A(A({},n),{},{mask:a}))}}var Fu=function(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?It:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,v=m===void 0?null:m,E=n.titleId,R=E===void 0?null:E,L=n.classes,T=L===void 0?[]:L,y=n.attributes,O=y===void 0?{}:y,N=n.styles,j=N===void 0?{}:N;if(!!e){var Y=e.prefix,tt=e.iconName,lt=e.icon;return Bn(A({type:"icon"},e),function(){return se("beforeDOMElementCreation",{iconDefinition:e,params:n}),P.autoA11y&&(v?O["aria-labelledby"]="".concat(P.replacementClass,"-title-").concat(R||Je()):(O["aria-hidden"]="true",O.focusable="false")),ma({icons:{main:Ir(lt),mask:l?Ir(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:tt,transform:A(A({},It),a),symbol:o,title:v,maskId:d,titleId:R,extra:{attributes:O,styles:j,classes:T}})})}},Ru={mixout:function(){return{icon:Mu(Fu)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=pi,n.nodeCallback=Nu,n}}},provides:function(e){e.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return pi(a,o)},e.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(E,R){Promise.all([Sr(a,s),d.iconName?Sr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(L){var T=ra(L,2),y=T[0],O=T[1];E([n,ma({icons:{main:y,mask:O},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(R)})},e.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Dn(s);l.length>0&&(a.style=l);var u;return fa(o)&&(u=Lt("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},zu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return Bn({type:"layer"},function(){se("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(P.familyPrefix,"-layers")].concat(jn(i)).join(" ")},children:o}]})}}}},Lu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return Bn({type:"counter",content:n},function(){return se("beforeDOMElementCreation",{content:n,params:r}),gu({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(P.familyPrefix,"-layers-counter")].concat(jn(s))}})})}}}},ju={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?It:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,E=v===void 0?{}:v;return Bn({type:"text",content:n},function(){return se("beforeDOMElementCreation",{content:n,params:r}),li({content:n,transform:A(A({},It),i),title:s,extra:{attributes:m,styles:E,classes:["".concat(P.familyPrefix,"-layers-text")].concat(jn(u))}})})}}},provides:function(e){e.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Oo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return P.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,li({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Du=new RegExp('"',"ug"),hi=[1105920,1112319];function $u(t){var e=t.replace(Du,""),n=Qc(e,0),r=n>=hi[0]&&n<=hi[1],a=e.length===2?e[0]===e[1]:!1;return{value:Ar(a?e[0]:e),isSecondary:r||a}}function gi(t,e){var n="".concat(Cc).concat(e.replace(":","-"));return new Promise(function(r,a){if(t.getAttribute(n)!==null)return r();var i=Ie(t.children),o=i.filter(function(tt){return tt.getAttribute(kr)===e})[0],s=Xt.getComputedStyle(t,e),l=s.getPropertyValue("font-family").match(Nc),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return t.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?wn[l[2].toLowerCase()]:Mc[u],E=$u(m),R=E.value,L=E.isSecondary,T=l[0].startsWith("FontAwesome"),y=ua(v,R),O=y;if(T){var N=ou(R);N.iconName&&N.prefix&&(y=N.iconName,v=N.prefix)}if(y&&!L&&(!o||o.getAttribute(ia)!==v||o.getAttribute(oa)!==O)){t.setAttribute(n,O),o&&t.removeChild(o);var j=Pu(),Y=j.extra;Y.attributes[kr]=e,Sr(y,v).then(function(tt){var lt=ma(A(A({},j),{},{icons:{main:tt,mask:da()},prefix:v,iconName:O,extra:Y,watchable:!0})),_t=X.createElement("svg");e==="::before"?t.insertBefore(_t,t.firstChild):t.appendChild(_t),_t.outerHTML=lt.map(function(rt){return Ge(rt)}).join(`
`),t.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Uu(t){return Promise.all([gi(t,"::before"),gi(t,"::after")])}function Bu(t){return t.parentNode!==document.head&&!~Sc.indexOf(t.tagName.toUpperCase())&&!t.getAttribute(kr)&&(!t.parentNode||t.parentNode.tagName!=="svg")}function bi(t){if(!!Dt)return new Promise(function(e,n){var r=Ie(t.querySelectorAll("*")).filter(Bu).map(Uu),a=pa.begin("searchPseudoElements");Xo(),Promise.all(r).then(function(){a(),Tr(),e()}).catch(function(){a(),Tr(),n()})})}var Hu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=bi,n}}},provides:function(e){e.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;P.searchPseudoElements&&bi(a)}}},vi=!1,Yu={mixout:function(){return{dom:{unwatch:function(){Xo(),vi=!0}}}},hooks:function(){return{bootstrap:function(){di(Or("mutationObserverCallbacks",{}))},noAuto:function(){Ou()},watch:function(n){var r=n.observeMutationsRoot;vi?Tr():di(Or("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},yi=function(e){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},Wu={mixout:function(){return{parse:{transform:function(n){return yi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=yi(a)),n}}},provides:function(e){e.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},E={outer:s,inner:m,path:v};return{tag:"g",attributes:A({},E.outer),children:[{tag:"g",attributes:A({},E.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:A(A({},r.icon.attributes),E.path)}]}]}}}},ar={x:0,y:0,width:"100%",height:"100%"};function wi(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ku(t){return t.tag==="g"?t.children:[t]}var qu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Un(a.split(" ").map(function(o){return o.trim()})):da();return i.prefix||(i.prefix=Vt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(e){e.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,v=o.icon,E=Wc({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:A(A({},ar),{},{fill:"white"})},L=d.children?{children:d.children.map(wi)}:{},T={tag:"g",attributes:A({},E.inner),children:[wi(A({tag:d.tag,attributes:A(A({},d.attributes),E.path)},L))]},y={tag:"g",attributes:A({},E.outer),children:[T]},O="mask-".concat(s||Je()),N="clip-".concat(s||Je()),j={tag:"mask",attributes:A(A({},ar),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,y]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:N},children:Ku(v)},j]};return r.push(Y,{tag:"rect",attributes:A({fill:"currentColor","clip-path":"url(#".concat(N,")"),mask:"url(#".concat(O,")")},ar)}),{children:r,attributes:a}}}},Xu={provides:function(e){var n=!1;Xt.matchMedia&&(n=Xt.matchMedia("(prefers-reduced-motion: reduce)").matches),e.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:A(A({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=A(A({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:A(A({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:A(A({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:A(A({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:A(A({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:A(A({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:A(A({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:A(A({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Vu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Ju=[Xc,Ru,zu,Lu,ju,Hu,Yu,Wu,qu,Xu,Vu];fu(Ju,{mixoutsTo:dt});dt.noAuto;var Jo=dt.config,Gu=dt.library;dt.dom;var kn=dt.parse;dt.findIconDefinition;dt.toHtml;var Zu=dt.icon;dt.layer;var Qu=dt.text;dt.counter;function xi(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),n.push.apply(n,r)}return n}function bt(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?xi(Object(n),!0).forEach(function(r){it(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):xi(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function An(t){return An=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},An(t)}function it(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function td(t,e){if(t==null)return{};var n={},r=Object.keys(t),a,i;for(i=0;i<r.length;i++)a=r[i],!(e.indexOf(a)>=0)&&(n[a]=t[a]);return n}function ed(t,e){if(t==null)return{};var n=td(t,e),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function Nr(t){return nd(t)||rd(t)||ad(t)||id()}function nd(t){if(Array.isArray(t))return Mr(t)}function rd(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ad(t,e){if(!!t){if(typeof t=="string")return Mr(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Mr(t,e)}}function Mr(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function id(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var od=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},Go={exports:{}};(function(t){(function(e){var n=function(y,O,N){if(!u(O)||m(O)||v(O)||E(O)||l(O))return O;var j,Y=0,tt=0;if(d(O))for(j=[],tt=O.length;Y<tt;Y++)j.push(n(y,O[Y],N));else{j={};for(var lt in O)Object.prototype.hasOwnProperty.call(O,lt)&&(j[y(lt,N)]=n(y,O[lt],N))}return j},r=function(y,O){O=O||{};var N=O.separator||"_",j=O.split||/(?=[A-Z])/;return y.split(j).join(N)},a=function(y){return R(y)?y:(y=y.replace(/[\-_\s]+(.)?/g,function(O,N){return N?N.toUpperCase():""}),y.substr(0,1).toLowerCase()+y.substr(1))},i=function(y){var O=a(y);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(y,O){return r(y,O).toLowerCase()},s=Object.prototype.toString,l=function(y){return typeof y=="function"},u=function(y){return y===Object(y)},d=function(y){return s.call(y)=="[object Array]"},m=function(y){return s.call(y)=="[object Date]"},v=function(y){return s.call(y)=="[object RegExp]"},E=function(y){return s.call(y)=="[object Boolean]"},R=function(y){return y=y-0,y===y},L=function(y,O){var N=O&&"process"in O?O.process:O;return typeof N!="function"?y:function(j,Y){return N(j,y,Y)}},T={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(y,O){return n(L(a,O),y)},decamelizeKeys:function(y,O){return n(L(o,O),y,O)},pascalizeKeys:function(y,O){return n(L(i,O),y)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=T:e.humps=T})(od)})(Go);var sd=Go.exports,ld=["class","style"];function fd(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,n){var r=n.indexOf(":"),a=sd.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return e[a]=i,e},{})}function cd(t){return t.split(/\s+/).reduce(function(e,n){return e[n]=!0,e},{})}function ga(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var r=(t.children||[]).map(function(l){return ga(l)}),a=Object.keys(t.attributes||{}).reduce(function(l,u){var d=t.attributes[u];switch(u){case"class":l.class=cd(d);break;case"style":l.style=fd(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=ed(n,ld);return vo(t.tag,bt(bt(bt({},e),{},{class:a.class,style:bt(bt({},a.style),o)},a.attrs),s),r)}var Zo=!1;try{Zo=!0}catch{}function ud(){if(!Zo&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function Be(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?it({},t,e):{}}function dd(t){var e,n=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},it(e,"fa-".concat(t.size),t.size!==null),it(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),it(e,"fa-pull-".concat(t.pull),t.pull!==null),it(e,"fa-swap-opacity",t.swapOpacity),it(e,"fa-bounce",t.bounce),it(e,"fa-shake",t.shake),it(e,"fa-beat",t.beat),it(e,"fa-fade",t.fade),it(e,"fa-beat-fade",t.beatFade),it(e,"fa-flash",t.flash),it(e,"fa-spin-pulse",t.spinPulse),it(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function _i(t){if(t&&An(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(kn.icon)return kn.icon(t);if(t===null)return null;if(An(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var md=Ce({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,n){var r=n.attrs,a=pt(function(){return _i(e.icon)}),i=pt(function(){return Be("classes",dd(e))}),o=pt(function(){return Be("transform",typeof e.transform=="string"?kn.transform(e.transform):e.transform)}),s=pt(function(){return Be("mask",_i(e.mask))}),l=pt(function(){return Zu(a.value,bt(bt(bt(bt({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});ln(l,function(d){if(!d)return ud("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=pt(function(){return l.value?ga(l.value.abstract[0],{},r):null});return function(){return u.value}}});Ce({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,n){var r=n.slots,a=Jo.familyPrefix,i=pt(function(){return["".concat(a,"-layers")].concat(Nr(e.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return vo("div",{class:i.value},r.default?r.default():[])}}});Ce({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,n){var r=n.attrs,a=Jo.familyPrefix,i=pt(function(){return Be("classes",[].concat(Nr(e.counter?["".concat(a,"-layers-counter")]:[]),Nr(e.position?["".concat(a,"-layers-").concat(e.position)]:[])))}),o=pt(function(){return Be("transform",typeof e.transform=="string"?kn.transform(e.transform):e.transform)}),s=pt(function(){var u=Qu(e.value.toString(),bt(bt({},o.value),i.value)),d=u.abstract;return e.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=pt(function(){return ga(s.value,{},r)});return function(){return l.value}}});/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var pd={prefix:"fas",iconName:"b",icon:[320,512,[98],"42","M257.1 242.4C276.1 220.1 288 191.6 288 160c0-70.58-57.42-128-128-128H32c-17.67 0-32 14.33-32 32v384c0 17.67 14.33 32 32 32l160-.0049c70.58 0 128-57.42 128-128C320 305.3 294.6 264.8 257.1 242.4zM64 96.01h96c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V96.01zM192 416H64v-128h128c35.3 0 64 28.7 64 64S227.3 416 192 416z"]};/*!
 * Font Awesome Free 6.1.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2022 Fonticons, Inc.
 */var hd={prefix:"fab",iconName:"github-square",icon:[448,512,[],"f092","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4 .2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9 .2 36.5 .2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9 .4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7 .6 3.9 1.9 .3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2 .2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7 .9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2 .4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8 .9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1 .9-1.1 2.8-.9 4.3 .6 1.3 1.3 1.8 3.3 .9 4.1zm-9.1-9.1c-.9 .6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9 .9-2.4 .4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5 .9-.9 2.4-.4 3.5 .6 1.1 1.3 1.3 2.8 .4 3.5zm-6.7-7.4c-.4 .9-1.7 1.1-2.8 .4-1.3-.6-1.9-1.7-1.5-2.6 .4-.6 1.5-.9 2.8-.4 1.3 .7 1.9 1.8 1.5 2.6z"]},gd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};Gu.add(pd,gd,hd);Cf(gc).component("font-awesome-icon",md).mount("#app");
