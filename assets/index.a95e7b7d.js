const ys=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ys();function Qr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}const X={},_t=[],Ee=()=>{},xs=()=>!1,ws=/^on[^a-z]/,Yn=e=>ws.test(e),ea=e=>e.startsWith("onUpdate:"),ne=Object.assign,ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},_s=Object.prototype.hasOwnProperty,$=(e,t)=>_s.call(e,t),M=Array.isArray,kt=e=>qn(e)==="[object Map]",Ki=e=>qn(e)==="[object Set]",L=e=>typeof e=="function",Q=e=>typeof e=="string",Kn=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",qi=e=>(V(e)||L(e))&&L(e.then)&&L(e.catch),Xi=Object.prototype.toString,qn=e=>Xi.call(e),ks=e=>qn(e).slice(8,-1),Vi=e=>qn(e)==="[object Object]",na=e=>Q(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Cn=Qr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Xn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},As=/-(\w)/g,Fe=Xn(e=>e.replace(As,(t,n)=>n?n.toUpperCase():"")),Os=/\B([A-Z])/g,Nt=Xn(e=>e.replace(Os,"-$1").toLowerCase()),Vn=Xn(e=>e.charAt(0).toUpperCase()+e.slice(1)),dr=Xn(e=>e?`on${Vn(e)}`:""),mt=(e,t)=>!Object.is(e,t),mr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Es=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ha;const Or=()=>Ha||(Ha=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function ra(e){if(M(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=Q(r)?Is(r):ra(r);if(a)for(const i in a)t[i]=a[i]}return t}else if(Q(e)||V(e))return e}const Ps=/;(?![^(]*\))/g,Cs=/:([^]+)/,Ss=/\/\*[^]*?\*\//g;function Is(e){const t={};return e.replace(Ss,"").split(Ps).forEach(n=>{if(n){const r=n.split(Cs);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Jn(e){let t="";if(Q(e))t=e;else if(M(e))for(let n=0;n<e.length;n++){const r=Jn(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ts="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Ns=Qr(Ts);function Ji(e){return!!e||e===""}const hr=e=>Q(e)?e:e==null?"":M(e)||V(e)&&(e.toString===Xi||!L(e.toString))?JSON.stringify(e,Zi,2):String(e),Zi=(e,t)=>t&&t.__v_isRef?Zi(e,t.value):kt(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Ki(t)?{[`Set(${t.size})`]:[...t.values()]}:V(t)&&!M(t)&&!Vi(t)?String(t):t;let xe;class Ms{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Fs(e,t=xe){t&&t.active&&t.effects.push(e)}function Rs(){return xe}const aa=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Gi=e=>(e.w&Je)>0,Qi=e=>(e.n&Je)>0,Ls=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Je},js=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Gi(a)&&!Qi(a)?a.delete(e):t[n++]=a,a.w&=~Je,a.n&=~Je}t.length=n}},Er=new WeakMap;let $t=0,Je=1;const Pr=30;let we;const lt=Symbol(""),Cr=Symbol("");class ia{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fs(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Xe=!0,Je=1<<++$t,$t<=Pr?Ls(this):Ba(this),this.fn()}finally{$t<=Pr&&js(this),Je=1<<--$t,we=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Ba(this),this.onStop&&this.onStop(),this.active=!1)}}function Ba(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const eo=[];function Mt(){eo.push(Xe),Xe=!1}function Ft(){const e=eo.pop();Xe=e===void 0?!0:e}function de(e,t,n){if(Xe&&we){let r=Er.get(e);r||Er.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=aa()),to(a)}}function to(e,t){let n=!1;$t<=Pr?Qi(e)||(e.n|=Je,n=!Gi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function ze(e,t,n,r,a,i){const o=Er.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&M(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||!Kn(d)&&d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":M(e)?na(n)&&s.push(o.get("length")):(s.push(o.get(lt)),kt(e)&&s.push(o.get(Cr)));break;case"delete":M(e)||(s.push(o.get(lt)),kt(e)&&s.push(o.get(Cr)));break;case"set":kt(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&Sr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Sr(aa(l))}}function Sr(e,t){const n=M(e)?e:[...e];for(const r of n)r.computed&&Ua(r);for(const r of n)r.computed||Ua(r)}function Ua(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const zs=Qr("__proto__,__v_isRef,__isVue"),no=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Kn)),Wa=Ds();function Ds(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=H(this);for(let i=0,o=this.length;i<o;i++)de(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(H)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Mt();const r=H(this)[t].apply(this,n);return Ft(),r}}),e}function $s(e){const t=H(this);return de(t,"has",e),t.hasOwnProperty(e)}class ro{constructor(t=!1,n=!1){this._isReadonly=t,this._shallow=n}get(t,n,r){const a=this._isReadonly,i=this._shallow;if(n==="__v_isReactive")return!a;if(n==="__v_isReadonly")return a;if(n==="__v_isShallow")return i;if(n==="__v_raw"&&r===(a?i?Qs:so:i?oo:io).get(t))return t;const o=M(t);if(!a){if(o&&$(Wa,n))return Reflect.get(Wa,n,r);if(n==="hasOwnProperty")return $s}const s=Reflect.get(t,n,r);return(Kn(n)?no.has(n):zs(n))||(a||de(t,"get",n),i)?s:oe(s)?o&&na(n)?s:s.value:V(s)?a?lo(s):la(s):s}}class ao extends ro{constructor(t=!1){super(!1,t)}set(t,n,r,a){let i=t[n];if(Pt(i)&&oe(i)&&!oe(r))return!1;if(!this._shallow&&(!Ln(r)&&!Pt(r)&&(i=H(i),r=H(r)),!M(t)&&oe(i)&&!oe(r)))return i.value=r,!0;const o=M(t)&&na(n)?Number(n)<t.length:$(t,n),s=Reflect.set(t,n,r,a);return t===H(a)&&(o?mt(r,i)&&ze(t,"set",n,r):ze(t,"add",n,r)),s}deleteProperty(t,n){const r=$(t,n);t[n];const a=Reflect.deleteProperty(t,n);return a&&r&&ze(t,"delete",n,void 0),a}has(t,n){const r=Reflect.has(t,n);return(!Kn(n)||!no.has(n))&&de(t,"has",n),r}ownKeys(t){return de(t,"iterate",M(t)?"length":lt),Reflect.ownKeys(t)}}class Hs extends ro{constructor(t=!1){super(!0,t)}set(t,n){return!0}deleteProperty(t,n){return!0}}const Bs=new ao,Us=new Hs,Ws=new ao(!0),oa=e=>e,Zn=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,r=!1){e=e.__v_raw;const a=H(e),i=H(t);n||(mt(t,i)&&de(a,"get",t),de(a,"get",i));const{has:o}=Zn(a),s=r?oa:n?ca:Xt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function hn(e,t=!1){const n=this.__v_raw,r=H(n),a=H(e);return t||(mt(e,a)&&de(r,"has",e),de(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function pn(e,t=!1){return e=e.__v_raw,!t&&de(H(e),"iterate",lt),Reflect.get(e,"size",e)}function Ya(e){e=H(e);const t=H(this);return Zn(t).has.call(t,e)||(t.add(e),ze(t,"add",e,e)),this}function Ka(e,t){t=H(t);const n=H(this),{has:r,get:a}=Zn(n);let i=r.call(n,e);i||(e=H(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?mt(t,o)&&ze(n,"set",e,t):ze(n,"add",e,t),this}function qa(e){const t=H(this),{has:n,get:r}=Zn(t);let a=n.call(t,e);a||(e=H(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&ze(t,"delete",e,void 0),i}function Xa(){const e=H(this),t=e.size!==0,n=e.clear();return t&&ze(e,"clear",void 0,void 0),n}function gn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=H(o),l=t?oa:e?ca:Xt;return!e&&de(s,"iterate",lt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function vn(e,t,n){return function(...r){const a=this.__v_raw,i=H(a),o=kt(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?oa:t?ca:Xt;return!t&&de(i,"iterate",l?Cr:lt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ye(e){return function(...t){return e==="delete"?!1:this}}function Ys(){const e={get(i){return mn(this,i)},get size(){return pn(this)},has:hn,add:Ya,set:Ka,delete:qa,clear:Xa,forEach:gn(!1,!1)},t={get(i){return mn(this,i,!1,!0)},get size(){return pn(this)},has:hn,add:Ya,set:Ka,delete:qa,clear:Xa,forEach:gn(!1,!0)},n={get(i){return mn(this,i,!0)},get size(){return pn(this,!0)},has(i){return hn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:gn(!0,!1)},r={get(i){return mn(this,i,!0,!0)},get size(){return pn(this,!0)},has(i){return hn.call(this,i,!0)},add:Ye("add"),set:Ye("set"),delete:Ye("delete"),clear:Ye("clear"),forEach:gn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=vn(i,!1,!1),n[i]=vn(i,!0,!1),t[i]=vn(i,!1,!0),r[i]=vn(i,!0,!0)}),[e,n,t,r]}const[Ks,qs,Xs,Vs]=Ys();function sa(e,t){const n=t?e?Vs:Xs:e?qs:Ks;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get($(n,a)&&a in r?n:r,a,i)}const Js={get:sa(!1,!1)},Zs={get:sa(!1,!0)},Gs={get:sa(!0,!1)},io=new WeakMap,oo=new WeakMap,so=new WeakMap,Qs=new WeakMap;function el(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function tl(e){return e.__v_skip||!Object.isExtensible(e)?0:el(ks(e))}function la(e){return Pt(e)?e:fa(e,!1,Bs,Js,io)}function nl(e){return fa(e,!1,Ws,Zs,oo)}function lo(e){return fa(e,!0,Us,Gs,so)}function fa(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=tl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function At(e){return Pt(e)?At(e.__v_raw):!!(e&&e.__v_isReactive)}function Pt(e){return!!(e&&e.__v_isReadonly)}function Ln(e){return!!(e&&e.__v_isShallow)}function fo(e){return At(e)||Pt(e)}function H(e){const t=e&&e.__v_raw;return t?H(t):e}function co(e){return Rn(e,"__v_skip",!0),e}const Xt=e=>V(e)?la(e):e,ca=e=>V(e)?lo(e):e;function uo(e){Xe&&we&&(e=H(e),to(e.dep||(e.dep=aa())))}function mo(e,t){e=H(e);const n=e.dep;n&&Sr(n)}function oe(e){return!!(e&&e.__v_isRef===!0)}function ft(e){return rl(e,!1)}function rl(e,t){return oe(e)?e:new al(e,t)}class al{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H(t),this._value=n?t:Xt(t)}get value(){return uo(this),this._value}set value(t){const n=this.__v_isShallow||Ln(t)||Pt(t);t=n?t:H(t),mt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xt(t),mo(this))}}function ho(e){return oe(e)?e.value:e}const il={get:(e,t,n)=>ho(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return oe(a)&&!oe(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function po(e){return At(e)?e:new Proxy(e,il)}class ol{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new ia(t,()=>{this._dirty||(this._dirty=!0,mo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=H(this);return uo(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function sl(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new ol(r,a,i||!a,n)}function Ve(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){Gn(i,t,n)}return a}function Pe(e,t,n,r){if(L(e)){const i=Ve(e,t,n,r);return i&&qi(i)&&i.catch(o=>{Gn(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function Gn(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ve(l,null,10,[e,o,s]);return}}ll(e,n,a,r)}function ll(e,t,n,r=!0){console.error(e)}let Vt=!1,Ir=!1;const ie=[];let Ne=0;const Ot=[];let je=null,at=0;const go=Promise.resolve();let ua=null;function fl(e){const t=ua||go;return e?t.then(this?e.bind(this):e):t}function cl(e){let t=Ne+1,n=ie.length;for(;t<n;){const r=t+n>>>1,a=ie[r],i=Jt(a);i<e||i===e&&a.pre?t=r+1:n=r}return t}function da(e){(!ie.length||!ie.includes(e,Vt&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?ie.push(e):ie.splice(cl(e.id),0,e),vo())}function vo(){!Vt&&!Ir&&(Ir=!0,ua=go.then(yo))}function ul(e){const t=ie.indexOf(e);t>Ne&&ie.splice(t,1)}function dl(e){M(e)?Ot.push(...e):(!je||!je.includes(e,e.allowRecurse?at+1:at))&&Ot.push(e),vo()}function Va(e,t=Vt?Ne+1:0){for(;t<ie.length;t++){const n=ie[t];n&&n.pre&&(ie.splice(t,1),t--,n())}}function bo(e){if(Ot.length){const t=[...new Set(Ot)];if(Ot.length=0,je){je.push(...t);return}for(je=t,je.sort((n,r)=>Jt(n)-Jt(r)),at=0;at<je.length;at++)je[at]();je=null,at=0}}const Jt=e=>e.id==null?1/0:e.id,ml=(e,t)=>{const n=Jt(e)-Jt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function yo(e){Ir=!1,Vt=!0,ie.sort(ml);const t=Ee;try{for(Ne=0;Ne<ie.length;Ne++){const n=ie[Ne];n&&n.active!==!1&&Ve(n,null,14)}}finally{Ne=0,ie.length=0,bo(),Vt=!1,ua=null,(ie.length||Ot.length)&&yo()}}function hl(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||X;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||X;v&&(a=n.map(_=>Q(_)?_.trim():_)),m&&(a=n.map(Es))}let s,l=r[s=dr(t)]||r[s=dr(Fe(t))];!l&&i&&(l=r[s=dr(Nt(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function xo(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=c=>{const d=xo(c,t,!0);d&&(s=!0,ne(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(M(i)?i.forEach(l=>o[l]=null):ne(o,i),V(e)&&r.set(e,o),o)}function Qn(e,t){return!e||!Yn(t)?!1:(t=t.slice(2).replace(/Once$/,""),$(e,t[0].toLowerCase()+t.slice(1))||$(e,Nt(t))||$(e,t))}let ke=null,er=null;function jn(e){const t=ke;return ke=e,er=e&&e.type.__scopeId||null,t}function pl(e){er=e}function gl(){er=null}function vl(e,t=ke,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&oi(-1);const i=jn(t);let o;try{o=e(...a)}finally{jn(i),r._d&&oi(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function pr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:_,ctx:j,inheritAttrs:N}=e;let D,k;const O=jn(e);try{if(n.shapeFlag&4){const S=a||r;D=Te(d.call(S,S,m,i,_,v,j)),k=l}else{const S=t;D=Te(S.length>1?S(i,{attrs:l,slots:s,emit:c}):S(i,null)),k=t.props?l:bl(l)}}catch(S){Wt.length=0,Gn(S,e,1),D=ue(Zt)}let F=D;if(k&&N!==!1){const S=Object.keys(k),{shapeFlag:B}=F;S.length&&B&7&&(o&&S.some(ea)&&(k=yl(k,o)),F=Ct(F,k))}return n.dirs&&(F=Ct(F),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&(F.transition=n.transition),D=F,jn(O),D}const bl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Yn(n))&&((t||(t={}))[n]=e[n]);return t},yl=(e,t)=>{const n={};for(const r in e)(!ea(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function xl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ja(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!Qn(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ja(r,o,c):!0:!!o;return!1}function Ja(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Qn(n,i))return!0}return!1}function wl({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const wo="components";function _l(e,t){return Al(wo,e,!0,t)||e}const kl=Symbol.for("v-ndc");function Al(e,t,n=!0,r=!1){const a=ke||te;if(a){const i=a.type;if(e===wo){const s=bf(i,!1);if(s&&(s===t||s===Fe(t)||s===Vn(Fe(t))))return i}const o=Za(a[e]||i[e],t)||Za(a.appContext[e],t);return!o&&r?i:o}}function Za(e,t){return e&&(e[t]||e[Fe(t)]||e[Vn(Fe(t))])}const Ol=e=>e.__isSuspense;function El(e,t){t&&t.pendingBranch?M(e)?t.effects.push(...e):t.effects.push(e):dl(e)}function Pl(e,t){return ma(e,null,t)}const bn={};function Sn(e,t,n){return ma(e,t,n)}function ma(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=X){var s;const l=Rs()===((s=te)==null?void 0:s.scope)?te:null;let c,d=!1,m=!1;if(oe(e)?(c=()=>e.value,d=Ln(e)):At(e)?(c=()=>e,r=!0):M(e)?(m=!0,d=e.some(S=>At(S)||Ln(S)),c=()=>e.map(S=>{if(oe(S))return S.value;if(At(S))return yt(S);if(L(S))return Ve(S,l,2)})):L(e)?t?c=()=>Ve(e,l,2):c=()=>{if(!(l&&l.isUnmounted))return v&&v(),Pe(e,l,3,[_])}:c=Ee,t&&r){const S=c;c=()=>yt(S())}let v,_=S=>{v=O.onStop=()=>{Ve(S,l,4)}},j;if(Qt)if(_=Ee,t?n&&Pe(t,l,3,[c(),m?[]:void 0,_]):c(),a==="sync"){const S=wf();j=S.__watcherHandles||(S.__watcherHandles=[])}else return Ee;let N=m?new Array(e.length).fill(bn):bn;const D=()=>{if(!!O.active)if(t){const S=O.run();(r||d||(m?S.some((B,re)=>mt(B,N[re])):mt(S,N)))&&(v&&v(),Pe(t,l,3,[S,N===bn?void 0:m&&N[0]===bn?[]:N,_]),N=S)}else O.run()};D.allowRecurse=!!t;let k;a==="sync"?k=D:a==="post"?k=()=>ce(D,l&&l.suspense):(D.pre=!0,l&&(D.id=l.uid),k=()=>da(D));const O=new ia(c,k);t?n?D():N=O.run():a==="post"?ce(O.run.bind(O),l&&l.suspense):O.run();const F=()=>{O.stop(),l&&l.scope&&ta(l.scope.effects,O)};return j&&j.push(F),F}function Cl(e,t,n){const r=this.proxy,a=Q(e)?e.includes(".")?_o(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=te;St(this);const s=ma(a,i.bind(r),n);return o?St(o):dt(),s}function _o(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function yt(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),oe(e))yt(e.value,t);else if(M(e))for(let n=0;n<e.length;n++)yt(e[n],t);else if(Ki(e)||kt(e))e.forEach(n=>{yt(n,t)});else if(Vi(e))for(const n in e)yt(e[n],t);return e}function nt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Mt(),Pe(l,n,8,[e.el,s,e,t]),Ft())}}/*! #__NO_SIDE_EFFECTS__ */function Rt(e,t){return L(e)?(()=>ne({name:e.name},t,{setup:e}))():e}const In=e=>!!e.type.__asyncLoader,ko=e=>e.type.__isKeepAlive;function Sl(e,t){Ao(e,"a",t)}function Il(e,t){Ao(e,"da",t)}function Ao(e,t,n=te){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(tr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)ko(a.parent.vnode)&&Tl(r,t,n,a),a=a.parent}}function Tl(e,t,n,r){const a=tr(t,e,r,!0);nr(()=>{ta(r[t],a)},n)}function tr(e,t,n=te,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Mt(),St(n);const s=Pe(t,n,e,o);return dt(),Ft(),s});return r?a.unshift(i):a.push(i),i}}const Ue=e=>(t,n=te)=>(!Qt||e==="sp")&&tr(e,(...r)=>t(...r),n),Nl=Ue("bm"),Oo=Ue("m"),Ml=Ue("bu"),Fl=Ue("u"),Rl=Ue("bum"),nr=Ue("um"),Ll=Ue("sp"),jl=Ue("rtg"),zl=Ue("rtc");function Dl(e,t=te){tr("ec",e,t)}function Eo(e,t,n,r){let a;const i=n&&n[r];if(M(e)||Q(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(V(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}const Tr=e=>e?Lo(e)?ba(e)||e.proxy:Tr(e.parent):null,Ut=ne(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Tr(e.parent),$root:e=>Tr(e.root),$emit:e=>e.emit,$options:e=>ha(e),$forceUpdate:e=>e.f||(e.f=()=>da(e.update)),$nextTick:e=>e.n||(e.n=fl.bind(e.proxy)),$watch:e=>Cl.bind(e)}),gr=(e,t)=>e!==X&&!e.__isScriptSetup&&$(e,t),$l={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const _=o[t];if(_!==void 0)switch(_){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(gr(r,t))return o[t]=1,r[t];if(a!==X&&$(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&$(c,t))return o[t]=3,i[t];if(n!==X&&$(n,t))return o[t]=4,n[t];Nr&&(o[t]=0)}}const d=Ut[t];let m,v;if(d)return t==="$attrs"&&de(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==X&&$(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,$(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return gr(a,t)?(a[t]=n,!0):r!==X&&$(r,t)?(r[t]=n,!0):$(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==X&&$(e,o)||gr(t,o)||(s=i[0])&&$(s,o)||$(r,o)||$(Ut,o)||$(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:$(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ga(e){return M(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Hl(e){const t=ha(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&Qa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:_,updated:j,activated:N,deactivated:D,beforeDestroy:k,beforeUnmount:O,destroyed:F,unmounted:S,render:B,renderTracked:re,renderTriggered:ae,errorCaptured:be,serverPrefetch:pe,expose:Re,inheritAttrs:jt,components:fn,directives:cn,filters:fr}=t;if(c&&Bl(c,r,null),o)for(const J in o){const W=o[J];L(W)&&(r[J]=W.bind(n))}if(a){const J=a.call(n,n);V(J)&&(e.data=la(J))}if(Nr=!0,i)for(const J in i){const W=i[J],et=L(W)?W.bind(n,n):L(W.get)?W.get.bind(n,n):Ee,un=!L(W)&&L(W.set)?W.set.bind(n):Ee,tt=ve({get:et,set:un});Object.defineProperty(r,J,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Ce=>tt.value=Ce})}if(s)for(const J in s)Po(s[J],r,n,J);if(l){const J=L(l)?l.call(n):l;Reflect.ownKeys(J).forEach(W=>{Xl(W,J[W])})}d&&Qa(d,e,"c");function se(J,W){M(W)?W.forEach(et=>J(et.bind(n))):W&&J(W.bind(n))}if(se(Nl,m),se(Oo,v),se(Ml,_),se(Fl,j),se(Sl,N),se(Il,D),se(Dl,be),se(zl,re),se(jl,ae),se(Rl,O),se(nr,S),se(Ll,pe),M(Re))if(Re.length){const J=e.exposed||(e.exposed={});Re.forEach(W=>{Object.defineProperty(J,W,{get:()=>n[W],set:et=>n[W]=et})})}else e.exposed||(e.exposed={});B&&e.render===Ee&&(e.render=B),jt!=null&&(e.inheritAttrs=jt),fn&&(e.components=fn),cn&&(e.directives=cn)}function Bl(e,t,n=Ee){M(e)&&(e=Mr(e));for(const r in e){const a=e[r];let i;V(a)?"default"in a?i=Tn(a.from||r,a.default,!0):i=Tn(a.from||r):i=Tn(a),oe(i)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):t[r]=i}}function Qa(e,t,n){Pe(M(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Po(e,t,n,r){const a=r.includes(".")?_o(n,r):()=>n[r];if(Q(e)){const i=t[e];L(i)&&Sn(a,i)}else if(L(e))Sn(a,e.bind(n));else if(V(e))if(M(e))e.forEach(i=>Po(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&Sn(a,i,e)}}function ha(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>zn(l,c,o,!0)),zn(l,t,o)),V(t)&&i.set(t,l),l}function zn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&zn(e,i,n,!0),a&&a.forEach(o=>zn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Ul[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Ul={data:ei,props:ti,emits:ti,methods:Ht,computed:Ht,beforeCreate:le,created:le,beforeMount:le,mounted:le,beforeUpdate:le,updated:le,beforeDestroy:le,beforeUnmount:le,destroyed:le,unmounted:le,activated:le,deactivated:le,errorCaptured:le,serverPrefetch:le,components:Ht,directives:Ht,watch:Yl,provide:ei,inject:Wl};function ei(e,t){return t?e?function(){return ne(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Wl(e,t){return Ht(Mr(e),Mr(t))}function Mr(e){if(M(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function le(e,t){return e?[...new Set([].concat(e,t))]:t}function Ht(e,t){return e?ne(Object.create(null),e,t):t}function ti(e,t){return e?M(e)&&M(t)?[...new Set([...e,...t])]:ne(Object.create(null),Ga(e),Ga(t!=null?t:{})):t}function Yl(e,t){if(!e)return t;if(!t)return e;const n=ne(Object.create(null),e);for(const r in t)n[r]=le(e[r],t[r]);return n}function Co(){return{app:null,config:{isNativeTag:xs,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Kl=0;function ql(e,t){return function(r,a=null){L(r)||(r=ne({},r)),a!=null&&!V(a)&&(a=null);const i=Co(),o=new WeakSet;let s=!1;const l=i.app={_uid:Kl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:_f,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&L(c.install)?(o.add(c),c.install(l,...d)):L(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=ue(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ba(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l},runWithContext(c){Dn=l;try{return c()}finally{Dn=null}}};return l}}let Dn=null;function Xl(e,t){if(te){let n=te.provides;const r=te.parent&&te.parent.provides;r===n&&(n=te.provides=Object.create(r)),n[e]=t}}function Tn(e,t,n=!1){const r=te||ke;if(r||Dn){const a=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Dn._context.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r&&r.proxy):t}}function Vl(e,t,n,r=!1){const a={},i={};Rn(i,ar,1),e.propsDefaults=Object.create(null),So(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:nl(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=H(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(Qn(e.emitsOptions,v))continue;const _=t[v];if(l)if($(i,v))_!==i[v]&&(i[v]=_,c=!0);else{const j=Fe(v);a[j]=Fr(l,s,j,_,e,!1)}else _!==i[v]&&(i[v]=_,c=!0)}}}else{So(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!$(t,m)&&((d=Nt(m))===m||!$(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Fr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!$(t,m)&&!0)&&(delete i[m],c=!0)}c&&ze(e,"set","$attrs")}function So(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Cn(l))continue;const c=t[l];let d;a&&$(a,d=Fe(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:Qn(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=H(n),c=s||X;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Fr(a,l,m,c[m],e,!$(c,m))}}return o}function Fr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=$(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&L(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(St(a),r=c[n]=l.call(null,t),dt())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Nt(n))&&(r=!0))}return r}function Io(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[v,_]=Io(m,t,!0);ne(o,v),_&&s.push(..._)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,_t),_t;if(M(i))for(let d=0;d<i.length;d++){const m=Fe(i[d]);ni(m)&&(o[m]=X)}else if(i)for(const d in i){const m=Fe(d);if(ni(m)){const v=i[d],_=o[m]=M(v)||L(v)?{type:v}:ne({},v);if(_){const j=ii(Boolean,_.type),N=ii(String,_.type);_[0]=j>-1,_[1]=N<0||j<N,(j>-1||$(_,"default"))&&s.push(m)}}}const c=[o,s];return V(e)&&r.set(e,c),c}function ni(e){return e[0]!=="$"}function ri(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ai(e,t){return ri(e)===ri(t)}function ii(e,t){return M(t)?t.findIndex(n=>ai(n,e)):L(t)&&ai(t,e)?0:-1}const To=e=>e[0]==="_"||e==="$stable",pa=e=>M(e)?e.map(Te):[Te(e)],Zl=(e,t,n)=>{if(t._n)return t;const r=vl((...a)=>pa(t(...a)),n);return r._c=!1,r},No=(e,t,n)=>{const r=e._ctx;for(const a in e){if(To(a))continue;const i=e[a];if(L(i))t[a]=Zl(a,i,r);else if(i!=null){const o=pa(i);t[a]=()=>o}}},Mo=(e,t)=>{const n=pa(t);e.slots.default=()=>n},Gl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H(t),Rn(t,"_",n)):No(t,e.slots={})}else e.slots={},t&&Mo(e,t);Rn(e.slots,ar,1)},Ql=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=X;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(ne(a,t),!n&&s===1&&delete a._):(i=!t.$stable,No(t,a)),o=t}else t&&(Mo(e,t),o={default:1});if(i)for(const s in a)!To(s)&&o[s]==null&&delete a[s]};function Rr(e,t,n,r,a=!1){if(M(e)){e.forEach((v,_)=>Rr(v,t&&(M(t)?t[_]:t),n,r,a));return}if(In(r)&&!a)return;const i=r.shapeFlag&4?ba(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===X?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(Q(c)?(d[c]=null,$(m,c)&&(m[c]=null)):oe(c)&&(c.value=null)),L(l))Ve(l,s,12,[o,d]);else{const v=Q(l),_=oe(l);if(v||_){const j=()=>{if(e.f){const N=v?$(m,l)?m[l]:d[l]:l.value;a?M(N)&&ta(N,i):M(N)?N.includes(i)||N.push(i):v?(d[l]=[i],$(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,$(m,l)&&(m[l]=o)):_&&(l.value=o,e.k&&(d[e.k]=o))};o?(j.id=-1,ce(j,n)):j()}}}const ce=El;function ef(e){return tf(e)}function tf(e,t){const n=Or();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:_=Ee,insertStaticContent:j}=e,N=(f,u,h,p=null,g=null,x=null,A=!1,y=null,w=!!u.dynamicChildren)=>{if(f===u)return;f&&!Dt(f,u)&&(p=dn(f),Ce(f,g,x,!0),f=null),u.patchFlag===-2&&(w=!1,u.dynamicChildren=null);const{type:b,ref:I,shapeFlag:P}=u;switch(b){case rr:D(f,u,h,p);break;case Zt:k(f,u,h,p);break;case vr:f==null&&O(u,h,p,A);break;case ge:fn(f,u,h,p,g,x,A,y,w);break;default:P&1?B(f,u,h,p,g,x,A,y,w):P&6?cn(f,u,h,p,g,x,A,y,w):(P&64||P&128)&&b.process(f,u,h,p,g,x,A,y,w,gt)}I!=null&&g&&Rr(I,f&&f.ref,x,u||f,!u)},D=(f,u,h,p)=>{if(f==null)r(u.el=s(u.children),h,p);else{const g=u.el=f.el;u.children!==f.children&&c(g,u.children)}},k=(f,u,h,p)=>{f==null?r(u.el=l(u.children||""),h,p):u.el=f.el},O=(f,u,h,p)=>{[f.el,f.anchor]=j(f.children,u,h,p,f.el,f.anchor)},F=({el:f,anchor:u},h,p)=>{let g;for(;f&&f!==u;)g=v(f),r(f,h,p),f=g;r(u,h,p)},S=({el:f,anchor:u})=>{let h;for(;f&&f!==u;)h=v(f),a(f),f=h;a(u)},B=(f,u,h,p,g,x,A,y,w)=>{A=A||u.type==="svg",f==null?re(u,h,p,g,x,A,y,w):pe(f,u,g,x,A,y,w)},re=(f,u,h,p,g,x,A,y)=>{let w,b;const{type:I,props:P,shapeFlag:T,transition:R,dirs:z}=f;if(w=f.el=o(f.type,x,P&&P.is,P),T&8?d(w,f.children):T&16&&be(f.children,w,null,p,g,x&&I!=="foreignObject",A,y),z&&nt(f,null,p,"created"),ae(w,f,f.scopeId,A,p),P){for(const U in P)U!=="value"&&!Cn(U)&&i(w,U,null,P[U],x,f.children,p,g,Le);"value"in P&&i(w,"value",null,P.value),(b=P.onVnodeBeforeMount)&&Ie(b,p,f)}z&&nt(f,null,p,"beforeMount");const Y=nf(g,R);Y&&R.beforeEnter(w),r(w,u,h),((b=P&&P.onVnodeMounted)||Y||z)&&ce(()=>{b&&Ie(b,p,f),Y&&R.enter(w),z&&nt(f,null,p,"mounted")},g)},ae=(f,u,h,p,g)=>{if(h&&_(f,h),p)for(let x=0;x<p.length;x++)_(f,p[x]);if(g){let x=g.subTree;if(u===x){const A=g.vnode;ae(f,A,A.scopeId,A.slotScopeIds,g.parent)}}},be=(f,u,h,p,g,x,A,y,w=0)=>{for(let b=w;b<f.length;b++){const I=f[b]=y?qe(f[b]):Te(f[b]);N(null,I,u,h,p,g,x,A,y)}},pe=(f,u,h,p,g,x,A)=>{const y=u.el=f.el;let{patchFlag:w,dynamicChildren:b,dirs:I}=u;w|=f.patchFlag&16;const P=f.props||X,T=u.props||X;let R;h&&rt(h,!1),(R=T.onVnodeBeforeUpdate)&&Ie(R,h,u,f),I&&nt(u,f,h,"beforeUpdate"),h&&rt(h,!0);const z=g&&u.type!=="foreignObject";if(b?Re(f.dynamicChildren,b,y,h,p,z,x):A||W(f,u,y,null,h,p,z,x,!1),w>0){if(w&16)jt(y,u,P,T,h,p,g);else if(w&2&&P.class!==T.class&&i(y,"class",null,T.class,g),w&4&&i(y,"style",P.style,T.style,g),w&8){const Y=u.dynamicProps;for(let U=0;U<Y.length;U++){const G=Y[U],ye=P[G],vt=T[G];(vt!==ye||G==="value")&&i(y,G,ye,vt,g,f.children,h,p,Le)}}w&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&jt(y,u,P,T,h,p,g);((R=T.onVnodeUpdated)||I)&&ce(()=>{R&&Ie(R,h,u,f),I&&nt(u,f,h,"updated")},p)},Re=(f,u,h,p,g,x,A)=>{for(let y=0;y<u.length;y++){const w=f[y],b=u[y],I=w.el&&(w.type===ge||!Dt(w,b)||w.shapeFlag&70)?m(w.el):h;N(w,b,I,null,p,g,x,A,!0)}},jt=(f,u,h,p,g,x,A)=>{if(h!==p){if(h!==X)for(const y in h)!Cn(y)&&!(y in p)&&i(f,y,h[y],null,A,u.children,g,x,Le);for(const y in p){if(Cn(y))continue;const w=p[y],b=h[y];w!==b&&y!=="value"&&i(f,y,b,w,A,u.children,g,x,Le)}"value"in p&&i(f,"value",h.value,p.value)}},fn=(f,u,h,p,g,x,A,y,w)=>{const b=u.el=f?f.el:s(""),I=u.anchor=f?f.anchor:s("");let{patchFlag:P,dynamicChildren:T,slotScopeIds:R}=u;R&&(y=y?y.concat(R):R),f==null?(r(b,h,p),r(I,h,p),be(u.children,h,I,g,x,A,y,w)):P>0&&P&64&&T&&f.dynamicChildren?(Re(f.dynamicChildren,T,h,g,x,A,y),(u.key!=null||g&&u===g.subTree)&&Fo(f,u,!0)):W(f,u,h,I,g,x,A,y,w)},cn=(f,u,h,p,g,x,A,y,w)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?g.ctx.activate(u,h,p,A,w):fr(u,h,p,g,x,A,w):Ra(f,u,w)},fr=(f,u,h,p,g,x,A)=>{const y=f.component=mf(f,p,g);if(ko(f)&&(y.ctx.renderer=gt),hf(y),y.asyncDep){if(g&&g.registerDep(y,se),!f.el){const w=y.subTree=ue(Zt);k(null,w,u,h)}return}se(y,f,u,h,g,x,A)},Ra=(f,u,h)=>{const p=u.component=f.component;if(xl(f,u,h))if(p.asyncDep&&!p.asyncResolved){J(p,u,h);return}else p.next=u,ul(p.update),p.update();else u.el=f.el,p.vnode=u},se=(f,u,h,p,g,x,A)=>{const y=()=>{if(f.isMounted){let{next:I,bu:P,u:T,parent:R,vnode:z}=f,Y=I,U;rt(f,!1),I?(I.el=z.el,J(f,I,A)):I=z,P&&mr(P),(U=I.props&&I.props.onVnodeBeforeUpdate)&&Ie(U,R,I,z),rt(f,!0);const G=pr(f),ye=f.subTree;f.subTree=G,N(ye,G,m(ye.el),dn(ye),f,g,x),I.el=G.el,Y===null&&wl(f,G.el),T&&ce(T,g),(U=I.props&&I.props.onVnodeUpdated)&&ce(()=>Ie(U,R,I,z),g)}else{let I;const{el:P,props:T}=u,{bm:R,m:z,parent:Y}=f,U=In(u);if(rt(f,!1),R&&mr(R),!U&&(I=T&&T.onVnodeBeforeMount)&&Ie(I,Y,u),rt(f,!0),P&&ur){const G=()=>{f.subTree=pr(f),ur(P,f.subTree,f,g,null)};U?u.type.__asyncLoader().then(()=>!f.isUnmounted&&G()):G()}else{const G=f.subTree=pr(f);N(null,G,h,p,f,g,x),u.el=G.el}if(z&&ce(z,g),!U&&(I=T&&T.onVnodeMounted)){const G=u;ce(()=>Ie(I,Y,G),g)}(u.shapeFlag&256||Y&&In(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&ce(f.a,g),f.isMounted=!0,u=h=p=null}},w=f.effect=new ia(y,()=>da(b),f.scope),b=f.update=()=>w.run();b.id=f.uid,rt(f,!0),b()},J=(f,u,h)=>{u.component=f;const p=f.vnode.props;f.vnode=u,f.next=null,Jl(f,u.props,p,h),Ql(f,u.children,h),Mt(),Va(),Ft()},W=(f,u,h,p,g,x,A,y,w=!1)=>{const b=f&&f.children,I=f?f.shapeFlag:0,P=u.children,{patchFlag:T,shapeFlag:R}=u;if(T>0){if(T&128){un(b,P,h,p,g,x,A,y,w);return}else if(T&256){et(b,P,h,p,g,x,A,y,w);return}}R&8?(I&16&&Le(b,g,x),P!==b&&d(h,P)):I&16?R&16?un(b,P,h,p,g,x,A,y,w):Le(b,g,x,!0):(I&8&&d(h,""),R&16&&be(P,h,p,g,x,A,y,w))},et=(f,u,h,p,g,x,A,y,w)=>{f=f||_t,u=u||_t;const b=f.length,I=u.length,P=Math.min(b,I);let T;for(T=0;T<P;T++){const R=u[T]=w?qe(u[T]):Te(u[T]);N(f[T],R,h,null,g,x,A,y,w)}b>I?Le(f,g,x,!0,!1,P):be(u,h,p,g,x,A,y,w,P)},un=(f,u,h,p,g,x,A,y,w)=>{let b=0;const I=u.length;let P=f.length-1,T=I-1;for(;b<=P&&b<=T;){const R=f[b],z=u[b]=w?qe(u[b]):Te(u[b]);if(Dt(R,z))N(R,z,h,null,g,x,A,y,w);else break;b++}for(;b<=P&&b<=T;){const R=f[P],z=u[T]=w?qe(u[T]):Te(u[T]);if(Dt(R,z))N(R,z,h,null,g,x,A,y,w);else break;P--,T--}if(b>P){if(b<=T){const R=T+1,z=R<I?u[R].el:p;for(;b<=T;)N(null,u[b]=w?qe(u[b]):Te(u[b]),h,z,g,x,A,y,w),b++}}else if(b>T)for(;b<=P;)Ce(f[b],g,x,!0),b++;else{const R=b,z=b,Y=new Map;for(b=z;b<=T;b++){const me=u[b]=w?qe(u[b]):Te(u[b]);me.key!=null&&Y.set(me.key,b)}let U,G=0;const ye=T-z+1;let vt=!1,za=0;const zt=new Array(ye);for(b=0;b<ye;b++)zt[b]=0;for(b=R;b<=P;b++){const me=f[b];if(G>=ye){Ce(me,g,x,!0);continue}let Se;if(me.key!=null)Se=Y.get(me.key);else for(U=z;U<=T;U++)if(zt[U-z]===0&&Dt(me,u[U])){Se=U;break}Se===void 0?Ce(me,g,x,!0):(zt[Se-z]=b+1,Se>=za?za=Se:vt=!0,N(me,u[Se],h,null,g,x,A,y,w),G++)}const Da=vt?rf(zt):_t;for(U=Da.length-1,b=ye-1;b>=0;b--){const me=z+b,Se=u[me],$a=me+1<I?u[me+1].el:p;zt[b]===0?N(null,Se,h,$a,g,x,A,y,w):vt&&(U<0||b!==Da[U]?tt(Se,h,$a,2):U--)}}},tt=(f,u,h,p,g=null)=>{const{el:x,type:A,transition:y,children:w,shapeFlag:b}=f;if(b&6){tt(f.component.subTree,u,h,p);return}if(b&128){f.suspense.move(u,h,p);return}if(b&64){A.move(f,u,h,gt);return}if(A===ge){r(x,u,h);for(let P=0;P<w.length;P++)tt(w[P],u,h,p);r(f.anchor,u,h);return}if(A===vr){F(f,u,h);return}if(p!==2&&b&1&&y)if(p===0)y.beforeEnter(x),r(x,u,h),ce(()=>y.enter(x),g);else{const{leave:P,delayLeave:T,afterLeave:R}=y,z=()=>r(x,u,h),Y=()=>{P(x,()=>{z(),R&&R()})};T?T(x,z,Y):Y()}else r(x,u,h)},Ce=(f,u,h,p=!1,g=!1)=>{const{type:x,props:A,ref:y,children:w,dynamicChildren:b,shapeFlag:I,patchFlag:P,dirs:T}=f;if(y!=null&&Rr(y,null,h,f,!0),I&256){u.ctx.deactivate(f);return}const R=I&1&&T,z=!In(f);let Y;if(z&&(Y=A&&A.onVnodeBeforeUnmount)&&Ie(Y,u,f),I&6)bs(f.component,h,p);else{if(I&128){f.suspense.unmount(h,p);return}R&&nt(f,null,u,"beforeUnmount"),I&64?f.type.remove(f,u,h,g,gt,p):b&&(x!==ge||P>0&&P&64)?Le(b,u,h,!1,!0):(x===ge&&P&384||!g&&I&16)&&Le(w,u,h),p&&La(f)}(z&&(Y=A&&A.onVnodeUnmounted)||R)&&ce(()=>{Y&&Ie(Y,u,f),R&&nt(f,null,u,"unmounted")},h)},La=f=>{const{type:u,el:h,anchor:p,transition:g}=f;if(u===ge){vs(h,p);return}if(u===vr){S(f);return}const x=()=>{a(h),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(f.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:y}=g,w=()=>A(h,x);y?y(f.el,x,w):w()}else x()},vs=(f,u)=>{let h;for(;f!==u;)h=v(f),a(f),f=h;a(u)},bs=(f,u,h)=>{const{bum:p,scope:g,update:x,subTree:A,um:y}=f;p&&mr(p),g.stop(),x&&(x.active=!1,Ce(A,f,u,h)),y&&ce(y,u),ce(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},Le=(f,u,h,p=!1,g=!1,x=0)=>{for(let A=x;A<f.length;A++)Ce(f[A],u,h,p,g)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),ja=(f,u,h)=>{f==null?u._vnode&&Ce(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,h),Va(),bo(),u._vnode=f},gt={p:N,um:Ce,m:tt,r:La,mt:fr,mc:be,pc:W,pbc:Re,n:dn,o:e};let cr,ur;return t&&([cr,ur]=t(gt)),{render:ja,hydrate:cr,createApp:ql(ja,cr)}}function rt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function nf(e,t){return(!e||e&&!e.pendingBranch)&&t&&!t.persisted}function Fo(e,t,n=!1){const r=e.children,a=t.children;if(M(r)&&M(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||Fo(o,s)),s.type===rr&&(s.el=o.el)}}function rf(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const af=e=>e.__isTeleport,ge=Symbol.for("v-fgt"),rr=Symbol.for("v-txt"),Zt=Symbol.for("v-cmt"),vr=Symbol.for("v-stc"),Wt=[];let Ae=null;function ct(e=!1){Wt.push(Ae=e?null:[])}function of(){Wt.pop(),Ae=Wt[Wt.length-1]||null}let Gt=1;function oi(e){Gt+=e}function sf(e){return e.dynamicChildren=Gt>0?Ae||_t:null,of(),Gt>0&&Ae&&Ae.push(e),e}function ut(e,t,n,r,a,i){return sf(De(e,t,n,r,a,i,!0))}function Lr(e){return e?e.__v_isVNode===!0:!1}function Dt(e,t){return e.type===t.type&&e.key===t.key}const ar="__vInternal",Ro=({key:e})=>e!=null?e:null,Nn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?Q(e)||oe(e)||L(e)?{i:ke,r:e,k:t,f:!!n}:e:null);function De(e,t=null,n=null,r=0,a=null,i=e===ge?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Ro(t),ref:t&&Nn(t),scopeId:er,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ke};return s?(ga(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=Q(n)?8:16),Gt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const ue=lf;function lf(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===kl)&&(e=Zt),Lr(e)){const s=Ct(e,t,!0);return n&&ga(s,n),Gt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(yf(e)&&(e=e.__vccOpts),t){t=ff(t);let{class:s,style:l}=t;s&&!Q(s)&&(t.class=Jn(s)),V(l)&&(fo(l)&&!M(l)&&(l=ne({},l)),t.style=ra(l))}const o=Q(e)?1:Ol(e)?128:af(e)?64:V(e)?4:L(e)?2:0;return De(e,t,n,r,a,o,i,!0)}function ff(e){return e?fo(e)||ar in e?ne({},e):e:null}function Ct(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?cf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Ro(s),ref:t&&t.ref?n&&a?M(a)?a.concat(Nn(t)):[a,Nn(t)]:Nn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ge?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Ct(e.ssContent),ssFallback:e.ssFallback&&Ct(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function jr(e=" ",t=0){return ue(rr,null,e,t)}function Te(e){return e==null||typeof e=="boolean"?ue(Zt):M(e)?ue(ge,null,e.slice()):typeof e=="object"?qe(e):ue(rr,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Ct(e)}function ga(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(M(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),ga(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ar in t)?t._ctx=ke:a===3&&ke&&(ke.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:ke},n=32):(t=String(t),r&64?(n=16,t=[jr(t)]):n=8);e.children=t,e.shapeFlag|=n}function cf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Jn([t.class,r.class]));else if(a==="style")t.style=ra([t.style,r.style]);else if(Yn(a)){const i=t[a],o=r[a];o&&i!==o&&!(M(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Pe(e,t,7,[n,r])}const uf=Co();let df=0;function mf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||uf,i={uid:df++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Io(r,a),emitsOptions:xo(r,a),emit:null,emitted:null,propsDefaults:X,inheritAttrs:r.inheritAttrs,ctx:X,data:X,props:X,attrs:X,slots:X,refs:X,setupState:X,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=hl.bind(null,i),e.ce&&e.ce(i),i}let te=null,va,bt,si="__VUE_INSTANCE_SETTERS__";(bt=Or()[si])||(bt=Or()[si]=[]),bt.push(e=>te=e),va=e=>{bt.length>1?bt.forEach(t=>t(e)):bt[0](e)};const St=e=>{va(e),e.scope.on()},dt=()=>{te&&te.scope.off(),va(null)};function Lo(e){return e.vnode.shapeFlag&4}let Qt=!1;function hf(e,t=!1){Qt=t;const{props:n,children:r}=e.vnode,a=Lo(e);Vl(e,n,a,t),Gl(e,r);const i=a?pf(e,t):void 0;return Qt=!1,i}function pf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=co(new Proxy(e.ctx,$l));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?vf(e):null;St(e),Mt();const i=Ve(r,e,0,[e.props,a]);if(Ft(),dt(),qi(i)){if(i.then(dt,dt),t)return i.then(o=>{li(e,o,t)}).catch(o=>{Gn(o,e,0)});e.asyncDep=i}else li(e,i,t)}else jo(e,t)}function li(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=po(t)),jo(e,n)}let fi;function jo(e,t,n){const r=e.type;if(!e.render){if(!t&&fi&&!r.render){const a=r.template||ha(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=ne(ne({isCustomElement:i,delimiters:s},o),l);r.render=fi(a,c)}}e.render=r.render||Ee}{St(e),Mt();try{Hl(e)}finally{Ft(),dt()}}}function gf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return de(e,"get","$attrs"),t[n]}}))}function vf(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return gf(e)},slots:e.slots,emit:e.emit,expose:t}}function ba(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(po(co(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Ut)return Ut[n](e)},has(t,n){return n in t||n in Ut}}))}function bf(e,t=!0){return L(e)?e.displayName||e.name:e.name||t&&e.__name}function yf(e){return L(e)&&"__vccOpts"in e}const ve=(e,t)=>sl(e,t,Qt);function zo(e,t,n){const r=arguments.length;return r===2?V(t)&&!M(t)?Lr(t)?ue(e,null,[t]):ue(e,t):ue(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Lr(n)&&(n=[n]),ue(e,t,n))}const xf=Symbol.for("v-scx"),wf=()=>Tn(xf),_f="3.3.8",kf="http://www.w3.org/2000/svg",it=typeof document!="undefined"?document:null,ci=it&&it.createElement("template"),Af={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(kf,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ci.innerHTML=r?`<svg>${e}</svg>`:e;const s=ci.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},Of=Symbol("_vtc");function Ef(e,t,n){const r=e[Of];r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}const Pf=Symbol("_vod");function Cf(e,t,n){const r=e.style,a=Q(n);if(n&&!a){if(t&&!Q(t))for(const i in t)n[i]==null&&zr(r,i,"");for(const i in n)zr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),Pf in e&&(r.display=i)}}const ui=/\s*!important$/;function zr(e,t,n){if(M(n))n.forEach(r=>zr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Sf(e,t);ui.test(n)?e.setProperty(Nt(r),n.replace(ui,""),"important"):e[r]=n}}const di=["Webkit","Moz","ms"],br={};function Sf(e,t){const n=br[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return br[t]=r;r=Vn(r);for(let a=0;a<di.length;a++){const i=di[a]+r;if(i in e)return br[t]=i}return t}const mi="http://www.w3.org/1999/xlink";function If(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(mi,t.slice(6,t.length)):e.setAttributeNS(mi,t,n);else{const i=Ns(t);n==null||i&&!Ji(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Tf(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n==null?"":n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const c=s==="OPTION"?e.getAttribute("value"):e.value,d=n==null?"":n;c!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let l=!1;if(n===""||n==null){const c=typeof e[t];c==="boolean"?n=Ji(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{e[t]=n}catch{}l&&e.removeAttribute(t)}function Nf(e,t,n,r){e.addEventListener(t,n,r)}function Mf(e,t,n,r){e.removeEventListener(t,n,r)}const hi=Symbol("_vei");function Ff(e,t,n,r,a=null){const i=e[hi]||(e[hi]={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=Rf(t);if(r){const c=i[t]=zf(r,a);Nf(e,s,c,l)}else o&&(Mf(e,s,o,l),i[t]=void 0)}}const pi=/(?:Once|Passive|Capture)$/;function Rf(e){let t;if(pi.test(e)){t={};let r;for(;r=e.match(pi);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Nt(e.slice(2)),t]}let yr=0;const Lf=Promise.resolve(),jf=()=>yr||(Lf.then(()=>yr=0),yr=Date.now());function zf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe(Df(r,n.value),t,5,[r])};return n.value=e,n.attached=jf(),n}function Df(e,t){if(M(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const gi=/^on[a-z]/,$f=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Ef(e,r,a):t==="style"?Cf(e,n,r):Yn(t)?ea(t)||Ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hf(e,t,r,a))?Tf(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),If(e,t,r,a))};function Hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&gi.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||gi.test(t)&&Q(n)?!1:t in e}const Bf=ne({patchProp:$f},Af);let vi;function Uf(){return vi||(vi=ef(Bf))}const Wf=(...e)=>{const t=Uf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Yf(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Yf(e){return Q(e)?document.querySelector(e):e}var bi;const Kf=typeof window!="undefined";Kf&&((bi=window==null?void 0:window.navigator)==null?void 0:bi.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function qf(e,t){function n(...r){e(()=>t.apply(this,r),{fn:t,thisArg:this,args:r})}return n}function Xf(e,t=!0,n=!0){let r=0,a,i=!0;const o=()=>{a&&(clearTimeout(a),a=void 0)};return l=>{const c=ho(e),d=Date.now()-r;if(o(),c<=0)return r=Date.now(),l();d>c&&(n||!i)?(r=Date.now(),l()):t&&(a=setTimeout(()=>{r=Date.now(),i=!0,o(),l()},c)),!n&&!a&&(a=setTimeout(()=>i=!0,c)),i=!1}}function Vf(e,t=200,n=!0,r=!0){return qf(Xf(t,n,r),e)}const Jf=()=>{const e=ft(window.innerHeight),t=ft(window.innerWidth),r=Vf(()=>{e.value=window.innerHeight,t.value=window.innerWidth},13);return Oo(()=>window.addEventListener("resize",r)),nr(()=>window.removeEventListener("resize",r)),{height:e,width:t}},xr={lemon:"#FFF002",avocado:"#B0DE02",watermelon:"#00AF3F",blueberry:"#2F4858"},It=(e,t)=>Math.round(Math.random()*(t-e)+e),Zf=()=>({x:It(-1,1),y:It(-1,1)}),Gf=(e,t)=>({x:It(0,e),y:It(0,t)}),Qf=()=>{const e=[xr.lemon,xr.avocado,xr.watermelon],t=It(0,e.length-1);return e[t]},ec=e=>Math.round(e/It(1,2)),tc=(e,t)=>({coordinates:Gf(e,t),radius:ec(60),direction:Zf(),color:Qf()}),nc=(e,t,n)=>Array.from({length:n}).map(()=>tc(e,t)),Do=(e,t)=>({x:e.x+t.x,y:e.y+t.y}),ya=(e,t)=>({x:e.x-t.x,y:e.y-t.y}),rc=(e,t)=>({x:e.x*t.x,y:e.y*t.y}),Dr=e=>({x:e.x?e.x/Math.abs(e.x):0,y:e.y?e.y/Math.abs(e.y):0}),ac=()=>({x:0,y:0}),ic=(e,t)=>{const{x:n,y:r}=ya(t,e);return Math.round(Math.sqrt(n*n+r*r))},oc=e=>e.map((t,n)=>e.slice(n+1).map(r=>[t,r])).flat(),sc=(e,t)=>!(t.coordinates.x+t.radius<0||t.coordinates.y+t.radius<0||t.coordinates.x-t.radius>e.size.width||t.coordinates.y-t.radius>e.size.height),$o=e=>{const[t,n]=e;return ic(t.coordinates,n.coordinates)<=t.radius+n.radius},lc=e=>{const[t,n]=e;return $o(e)?ya(n.coordinates,t.coordinates):ac()},fc=e=>oc(e.shapes).filter(t=>$o(t)),cc=e=>e.shapes.filter(t=>!sc(e,t)),uc=e=>e.coordinates=Do(e.coordinates,e.direction),dc=e=>{const t={x:-1,y:-1};e.direction=rc(t,e.direction),e.direction=Dr(e.direction)},mc=e=>{const[t,n]=e,r=lc(e);t.direction=ya(t.direction,r),n.direction=Do(n.direction,r),t.direction=Dr(t.direction),n.direction=Dr(n.direction)},hc=e=>{const t=fc(e),n=cc(e);t.forEach(r=>mc(r)),n.forEach(r=>dc(r)),e.shapes.forEach(r=>uc(r))},pc=(e,t,n)=>{const a=n-t,i=e/1e3,o=Math.ceil(a*i);return Math.min(5,o)},gc=(e,t=60)=>({start(n=performance.now()){const r=pc(t,this.updated,n);r&&(this.updated=n,this.update(r)),this.frame=window.requestAnimationFrame(this.start.bind(this))},stop(){window.cancelAnimationFrame(this.frame)},update(n=1){Array.from({length:n}).forEach(()=>hc(e))},updated:performance.now(),frame:0}),vc=["width","height"],bc=["cx","cy","r","fill"],yc=Rt({__name:"AnimatedBoard",props:{height:{},width:{},shapes:{},fps:{}},setup(e){const t=e;let n;const r=()=>({size:{height:t.height,width:t.width},shapes:t.shapes}),a=()=>{n&&n.stop(),n=gc(r(),t.fps),n.start()};return nr(()=>n.stop()),Pl(()=>a()),(i,o)=>(ct(),ut("svg",{width:t.width,height:t.height},[(ct(!0),ut(ge,null,Eo(t.shapes,(s,l)=>(ct(),ut("circle",{key:l,cx:s.coordinates.x,cy:s.coordinates.y,r:s.radius,fill:s.color},null,8,bc))),128))],8,vc))}});var xc=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n};const xa=e=>(pl("data-v-6ad13185"),e=e(),gl(),e),wc={class:"mb-10"},_c=["href"],kc=xa(()=>De("p",{class:"mb-5"}," I like to bring my experiences, ideas, patterns and processes to build better systems. I also spend some time coding but I mostly be helping others code and grow. ",-1)),Ac=xa(()=>De("p",{class:"mb-5"}," I enjoy taking part in architectural decisions and help solve complex problems with scalable solutions. I'm used to daily interact with Developers, Managers and Directors to coordinate and keep everyone aligned. ",-1)),Oc={class:"flex gap-2 items-center justify-end mt-10"},Ec=xa(()=>De("p",{class:"inline-block"}," Feel free to get in touch with me on ",-1)),Pc=["href"],Cc=Rt({__name:"ResumeBio",setup(e){const t=ft({name:"Mag-Stellon Nadarajah",role:"Software Engineer Manager"}),n=ft({name:"Herm\xE8s",link:"https://www.hermes.com/"}),r=ft([{link:"https://www.linkedin.com/in/mag-stellon-nadarajah-2456388b/",class:"finger-friendly text-[#0a66c2]",icon:["fab","linkedin"]},{link:"https://github.com/magstellon",class:"finger-friendly",icon:["fab","github-square"]}]);return(a,i)=>{const o=_l("font-awesome-icon");return ct(),ut(ge,null,[De("p",wc,[jr(" Hello there, I'm "+hr(t.value.name)+" and I grow up as a "+hr(t.value.role)+" at ",1),De("a",{class:"underline",href:n.value.link,target:"_blank"},hr(n.value.name),9,_c),jr(". ")]),kc,Ac,De("div",Oc,[Ec,(ct(!0),ut(ge,null,Eo(r.value,s=>(ct(),ut("a",{key:s.link,href:s.link,target:"_blank",class:"finger-friendly inline-block"},[ue(o,{class:Jn(s.class),icon:s.icon},null,8,["class","icon"])],8,Pc))),128))])],64)}}});var Sc=xc(Cc,[["__scopeId","data-v-6ad13185"]]);const Ic={class:"font-sans h-full relative relative w-full"},Tc={class:"center lg:w-auto md:w-[80%] modal w-[90%]"},Nc=4e4,Mc=30,Fc=Rt({__name:"App",setup(e){const t=ft(Jf()),n=t.value.height*t.value.width,r=Math.round(n/Nc),a=ft(nc(t.value.width,t.value.height,r));return(i,o)=>(ct(),ut("div",Ic,[ue(yc,{height:t.value.height,width:t.value.width,shapes:a.value,fps:Mc},null,8,["height","width","shapes"]),De("main",Tc,[ue(Sc)])]))}});function yi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?yi(Object(n),!0).forEach(function(r){ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):yi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function $n(e){return $n=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},$n(e)}function Rc(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function xi(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Lc(e,t,n){return t&&xi(e.prototype,t),n&&xi(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wa(e,t){return zc(e)||$c(e,t)||Ho(e,t)||Bc()}function on(e){return jc(e)||Dc(e)||Ho(e)||Hc()}function jc(e){if(Array.isArray(e))return $r(e)}function zc(e){if(Array.isArray(e))return e}function Dc(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $c(e,t){var n=e==null?null:typeof Symbol!="undefined"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function Ho(e,t){if(!!e){if(typeof e=="string")return $r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return $r(e,t)}}function $r(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bc(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var wi=function(){},_a={},Bo={},Uo=null,Wo={mark:wi,measure:wi};try{typeof window!="undefined"&&(_a=window),typeof document!="undefined"&&(Bo=document),typeof MutationObserver!="undefined"&&(Uo=MutationObserver),typeof performance!="undefined"&&(Wo=performance)}catch{}var Uc=_a.navigator||{},_i=Uc.userAgent,ki=_i===void 0?"":_i,Ze=_a,q=Bo,Ai=Uo,yn=Wo;Ze.document;var We=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Yo=~ki.indexOf("MSIE")||~ki.indexOf("Trident/"),xn,wn,_n,kn,An,$e="___FONT_AWESOME___",Hr=16,Ko="fa",qo="svg-inline--fa",ht="data-fa-i2svg",Br="data-fa-pseudo-element",Wc="data-fa-pseudo-element-pending",ka="data-prefix",Aa="data-icon",Oi="fontawesome-i2svg",Yc="async",Kc=["HTML","HEAD","STYLE","SCRIPT"],Xo=function(){try{return!0}catch{return!1}}(),K="classic",Z="sharp",Oa=[K,Z];function sn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[K]}})}var en=sn((xn={},ee(xn,K,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ee(xn,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),xn)),tn=sn((wn={},ee(wn,K,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ee(wn,Z,{solid:"fass",regular:"fasr",light:"fasl"}),wn)),nn=sn((_n={},ee(_n,K,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ee(_n,Z,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),_n)),qc=sn((kn={},ee(kn,K,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ee(kn,Z,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),kn)),Xc=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Vo="fa-layers-text",Vc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,Jc=sn((An={},ee(An,K,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ee(An,Z,{900:"fass",400:"fasr",300:"fasl"}),An)),Jo=[1,2,3,4,5,6,7,8,9,10],Zc=Jo.concat([11,12,13,14,15,16,17,18,19,20]),Gc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},rn=new Set;Object.keys(tn[K]).map(rn.add.bind(rn));Object.keys(tn[Z]).map(rn.add.bind(rn));var Qc=[].concat(Oa,on(rn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Jo.map(function(e){return"".concat(e,"x")})).concat(Zc.map(function(e){return"w-".concat(e)})),Yt=Ze.FontAwesomeConfig||{};function eu(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function tu(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var nu=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];nu.forEach(function(e){var t=wa(e,2),n=t[0],r=t[1],a=tu(eu(n));a!=null&&(Yt[r]=a)})}var Zo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Ko,replacementClass:qo,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Yt.familyPrefix&&(Yt.cssPrefix=Yt.familyPrefix);var Tt=E(E({},Zo),Yt);Tt.autoReplaceSvg||(Tt.observeMutations=!1);var C={};Object.keys(Zo).forEach(function(e){Object.defineProperty(C,e,{enumerable:!0,set:function(n){Tt[e]=n,Kt.forEach(function(r){return r(C)})},get:function(){return Tt[e]}})});Object.defineProperty(C,"familyPrefix",{enumerable:!0,set:function(t){Tt.cssPrefix=t,Kt.forEach(function(n){return n(C)})},get:function(){return Tt.cssPrefix}});Ze.FontAwesomeConfig=C;var Kt=[];function ru(e){return Kt.push(e),function(){Kt.splice(Kt.indexOf(e),1)}}var Ke=Hr,Me={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function au(e){if(!(!e||!We)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var iu="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function an(){for(var e=12,t="";e-- >0;)t+=iu[Math.random()*62|0];return t}function Lt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function Ea(e){return e.classList?Lt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Go(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ou(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Go(e[n]),'" ')},"").trim()}function ir(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function Pa(e){return e.size!==Me.size||e.x!==Me.x||e.y!==Me.y||e.rotate!==Me.rotate||e.flipX||e.flipY}function su(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function lu(e){var t=e.transform,n=e.width,r=n===void 0?Hr:n,a=e.height,i=a===void 0?Hr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Yo?l+="translate(".concat(t.x/Ke-r/2,"em, ").concat(t.y/Ke-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ke,"em), calc(-50% + ").concat(t.y/Ke,"em)) "):l+="translate(".concat(t.x/Ke,"em, ").concat(t.y/Ke,"em) "),l+="scale(".concat(t.size/Ke*(t.flipX?-1:1),", ").concat(t.size/Ke*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var fu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
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
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
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
}`;function Qo(){var e=Ko,t=qo,n=C.cssPrefix,r=C.replacementClass,a=fu;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var Ei=!1;function wr(){C.autoAddCss&&!Ei&&(au(Qo()),Ei=!0)}var cu={mixout:function(){return{dom:{css:Qo,insertCss:wr}}},hooks:function(){return{beforeDOMElementCreation:function(){wr()},beforeI2svg:function(){wr()}}}},He=Ze||{};He[$e]||(He[$e]={});He[$e].styles||(He[$e].styles={});He[$e].hooks||(He[$e].hooks={});He[$e].shims||(He[$e].shims=[]);var Oe=He[$e],es=[],uu=function e(){q.removeEventListener("DOMContentLoaded",e),Hn=1,es.map(function(t){return t()})},Hn=!1;We&&(Hn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Hn||q.addEventListener("DOMContentLoaded",uu));function du(e){!We||(Hn?setTimeout(e,0):es.push(e))}function ln(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Go(e):"<".concat(t," ").concat(ou(r),">").concat(i.map(ln).join(""),"</").concat(t,">")}function Pi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var mu=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},_r=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?mu(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function hu(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Ur(e){var t=hu(e);return t.length===1?t[0].toString(16):null}function pu(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function Ci(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Wr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=Ci(t);typeof Oe.hooks.addPack=="function"&&!a?Oe.hooks.addPack(e,Ci(t)):Oe.styles[e]=E(E({},Oe.styles[e]||{}),i),e==="fas"&&Wr("fa",t)}var On,En,Pn,xt=Oe.styles,gu=Oe.shims,vu=(On={},ee(On,K,Object.values(nn[K])),ee(On,Z,Object.values(nn[Z])),On),Ca=null,ts={},ns={},rs={},as={},is={},bu=(En={},ee(En,K,Object.keys(en[K])),ee(En,Z,Object.keys(en[Z])),En);function yu(e){return~Qc.indexOf(e)}function xu(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!yu(a)?a:null}var os=function(){var t=function(i){return _r(xt,function(o,s,l){return o[l]=_r(s,i,{}),o},{})};ts=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ns=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),is=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in xt||C.autoFetchSvg,r=_r(gu,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});rs=r.names,as=r.unicodes,Ca=or(C.styleDefault,{family:C.familyDefault})};ru(function(e){Ca=or(e.styleDefault,{family:C.familyDefault})});os();function Sa(e,t){return(ts[e]||{})[t]}function wu(e,t){return(ns[e]||{})[t]}function st(e,t){return(is[e]||{})[t]}function ss(e){return rs[e]||{prefix:null,iconName:null}}function _u(e){var t=as[e],n=Sa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ge(){return Ca}var Ia=function(){return{prefix:null,iconName:null,rest:[]}};function or(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?K:n,a=en[r][e],i=tn[r][e]||tn[r][a],o=e in Oe.styles?e:null;return i||o||null}var Si=(Pn={},ee(Pn,K,Object.keys(nn[K])),ee(Pn,Z,Object.keys(nn[Z])),Pn);function sr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ee(t,K,"".concat(C.cssPrefix,"-").concat(K)),ee(t,Z,"".concat(C.cssPrefix,"-").concat(Z)),t),o=null,s=K;(e.includes(i[K])||e.some(function(c){return Si[K].includes(c)}))&&(s=K),(e.includes(i[Z])||e.some(function(c){return Si[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=xu(C.cssPrefix,d);if(xt[d]?(d=vu[s].includes(d)?qc[s][d]:d,o=d,c.prefix=d):bu[s].indexOf(d)>-1?(o=d,c.prefix=or(d,{family:s})):m?c.iconName=m:d!==C.replacementClass&&d!==i[K]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?ss(c.iconName):{},_=st(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||_||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!xt.far&&xt.fas&&!C.autoFetchSvg&&(c.prefix="fas")}return c},Ia());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(xt.fass||C.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ge()||"fas"),l}var ku=function(){function e(){Rc(this,e),this.definitions={}}return Lc(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=E(E({},n.definitions[s]||{}),o[s]),Wr(s,o[s]);var l=nn[K][s];l&&Wr(l,o[s]),os()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),Ii=[],wt={},Et={},Au=Object.keys(Et);function Ou(e,t){var n=t.mixoutsTo;return Ii=e,wt={},Object.keys(Et).forEach(function(r){Au.indexOf(r)===-1&&delete Et[r]}),Ii.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),$n(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){wt[o]||(wt[o]=[]),wt[o].push(i[o])})}r.provides&&r.provides(Et)}),n}function Yr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=wt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function pt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Et[e]?Et[e].apply(null,t):void 0}function Kr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ge();if(!!t)return t=st(n,t)||t,Pi(ls.definitions,n,t)||Pi(Oe.styles,n,t)}var ls=new ku,Eu=function(){C.autoReplaceSvg=!1,C.observeMutations=!1,pt("noAuto")},Pu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(pt("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;C.autoReplaceSvg===!1&&(C.autoReplaceSvg=!0),C.observeMutations=!0,du(function(){Su({autoReplaceSvgRoot:n}),pt("watch",t)})}},Cu={icon:function(t){if(t===null)return null;if($n(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=or(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(C.cssPrefix,"-"))>-1||t.match(Xc))){var a=sr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ge(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ge();return{prefix:i,iconName:st(i,t)||t}}}},he={noAuto:Eu,config:C,dom:Pu,parse:Cu,library:ls,findIconDefinition:Kr,toHtml:ln},Su=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Oe.styles).length>0||C.autoFetchSvg)&&We&&C.autoReplaceSvg&&he.dom.i2svg({node:r})};function lr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return ln(r)})}}),Object.defineProperty(e,"node",{get:function(){if(!!We){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Iu(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(Pa(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=ir(E(E({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Tu(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(C.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:E(E({},a),{},{id:o}),children:r}]}]}function Ta(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,_=v===void 0?!1:v,j=r.found?r:n,N=j.width,D=j.height,k=a==="fak",O=[C.replacementClass,i?"".concat(C.cssPrefix,"-").concat(i):""].filter(function(pe){return m.classes.indexOf(pe)===-1}).filter(function(pe){return pe!==""||!!pe}).concat(m.classes).join(" "),F={children:[],attributes:E(E({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:O,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(D)})},S=k&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/D*16*.0625,"em")}:{};_&&(F.attributes[ht]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(d||an())},children:[l]}),delete F.attributes.title);var B=E(E({},F),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:E(E({},S),m.styles)}),re=r.found&&n.found?Be("generateAbstractMask",B)||{children:[],attributes:{}}:Be("generateAbstractIcon",B)||{children:[],attributes:{}},ae=re.children,be=re.attributes;return B.children=ae,B.attributes=be,s?Tu(B):Iu(B)}function Ti(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=E(E(E({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[ht]="");var d=E({},o.styles);Pa(a)&&(d.transform=lu({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=ir(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Nu(e){var t=e.content,n=e.title,r=e.extra,a=E(E(E({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=ir(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kr=Oe.styles;function qr(e){var t=e[0],n=e[1],r=e.slice(4),a=wa(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(C.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Mu={found:!1,width:512,height:512};function Fu(e,t){!Xo&&!C.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Xr(e,t){var n=t;return t==="fa"&&C.styleDefault!==null&&(t=Ge()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=ss(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kr[t]&&kr[t][e]){var o=kr[t][e];return r(qr(o))}Fu(e,t),r(E(E({},Mu),{},{icon:C.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var Ni=function(){},Vr=C.measurePerformance&&yn&&yn.mark&&yn.measure?yn:{mark:Ni,measure:Ni},Bt='FA "6.4.2"',Ru=function(t){return Vr.mark("".concat(Bt," ").concat(t," begins")),function(){return fs(t)}},fs=function(t){Vr.mark("".concat(Bt," ").concat(t," ends")),Vr.measure("".concat(Bt," ").concat(t),"".concat(Bt," ").concat(t," begins"),"".concat(Bt," ").concat(t," ends"))},Na={begin:Ru,end:fs},Mn=function(){};function Mi(e){var t=e.getAttribute?e.getAttribute(ht):null;return typeof t=="string"}function Lu(e){var t=e.getAttribute?e.getAttribute(ka):null,n=e.getAttribute?e.getAttribute(Aa):null;return t&&n}function ju(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(C.replacementClass)}function zu(){if(C.autoReplaceSvg===!0)return Fn.replace;var e=Fn[C.autoReplaceSvg];return e||Fn.replace}function Du(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function $u(e){return q.createElement(e)}function cs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Du:$u:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(cs(o,{ceFn:r}))}),a}function Hu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Fn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(cs(a),n)}),n.getAttribute(ht)===null&&C.keepOriginalSource){var r=q.createComment(Hu(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~Ea(n).indexOf(C.replacementClass))return Fn.replace(t);var a=new RegExp("".concat(C.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===C.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return ln(s)}).join(`
`);n.setAttribute(ht,""),n.innerHTML=o}};function Fi(e){e()}function us(e,t){var n=typeof t=="function"?t:Mn;if(e.length===0)n();else{var r=Fi;C.mutateApproach===Yc&&(r=Ze.requestAnimationFrame||Fi),r(function(){var a=zu(),i=Na.begin("mutate");e.map(a),i(),n()})}}var Ma=!1;function ds(){Ma=!0}function Jr(){Ma=!1}var Bn=null;function Ri(e){if(!!Ai&&!!C.observeMutations){var t=e.treeCallback,n=t===void 0?Mn:t,r=e.nodeCallback,a=r===void 0?Mn:r,i=e.pseudoElementsCallback,o=i===void 0?Mn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Bn=new Ai(function(c){if(!Ma){var d=Ge();Lt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Mi(m.addedNodes[0])&&(C.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&C.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Mi(m.target)&&~Gc.indexOf(m.attributeName))if(m.attributeName==="class"&&Lu(m.target)){var v=sr(Ea(m.target)),_=v.prefix,j=v.iconName;m.target.setAttribute(ka,_||d),j&&m.target.setAttribute(Aa,j)}else ju(m.target)&&a(m.target)})}}),We&&Bn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Bu(){!Bn||Bn.disconnect()}function Uu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Wu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=sr(Ea(e));return a.prefix||(a.prefix=Ge()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=wu(a.prefix,e.innerText)||Sa(a.prefix,Ur(e.innerText))),!a.iconName&&C.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Yu(e){var t=Lt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return C.autoA11y&&(n?t["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(r||an()):(t["aria-hidden"]="true",t.focusable="false")),t}function Ku(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Me,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Li(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Wu(e),r=n.iconName,a=n.prefix,i=n.rest,o=Yu(e),s=Yr("parseNodeAttributes",{},e),l=t.styleParser?Uu(e):[];return E({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Me,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var qu=Oe.styles;function ms(e){var t=C.autoReplaceSvg==="nest"?Li(e,{styleParser:!1}):Li(e);return~t.extra.classes.indexOf(Vo)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var Qe=new Set;Oa.map(function(e){Qe.add("fa-".concat(e))});Object.keys(en[K]).map(Qe.add.bind(Qe));Object.keys(en[Z]).map(Qe.add.bind(Qe));Qe=on(Qe);function ji(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(Oi,"-").concat(m))},a=function(m){return n.remove("".concat(Oi,"-").concat(m))},i=C.autoFetchSvg?Qe:Oa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(qu));i.includes("fa")||i.push("fa");var o=[".".concat(Vo,":not([").concat(ht,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ht,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Lt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Na.begin("onTree"),c=s.reduce(function(d,m){try{var v=ms(m);v&&d.push(v)}catch(_){Xo||_.name==="MissingIcon"&&console.error(_)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){us(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function Xu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ms(e).then(function(n){n&&us([n],t)})}function Vu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Kr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Kr(a||{})),e(r,E(E({},n),{},{mask:a}))}}var Ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Me:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,_=n.titleId,j=_===void 0?null:_,N=n.classes,D=N===void 0?[]:N,k=n.attributes,O=k===void 0?{}:k,F=n.styles,S=F===void 0?{}:F;if(!!t){var B=t.prefix,re=t.iconName,ae=t.icon;return lr(E({type:"icon"},t),function(){return pt("beforeDOMElementCreation",{iconDefinition:t,params:n}),C.autoA11y&&(v?O["aria-labelledby"]="".concat(C.replacementClass,"-title-").concat(j||an()):(O["aria-hidden"]="true",O.focusable="false")),Ta({icons:{main:qr(ae),mask:l?qr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:B,iconName:re,transform:E(E({},Me),a),symbol:o,title:v,maskId:d,titleId:j,extra:{attributes:O,styles:S,classes:D}})})}},Zu={mixout:function(){return{icon:Vu(Ju)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=ji,n.nodeCallback=Xu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return ji(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(_,j){Promise.all([Xr(a,s),d.iconName?Xr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var D=wa(N,2),k=D[0],O=D[1];_([n,Ta({icons:{main:k,mask:O},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(j)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=ir(s);l.length>0&&(a.style=l);var c;return Pa(o)&&(c=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},Gu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return lr({type:"layer"},function(){pt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(C.cssPrefix,"-layers")].concat(on(i)).join(" ")},children:o}]})}}}},Qu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return lr({type:"counter",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),Nu({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(C.cssPrefix,"-layers-counter")].concat(on(s))}})})}}}},ed={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Me:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,_=v===void 0?{}:v;return lr({type:"text",content:n},function(){return pt("beforeDOMElementCreation",{content:n,params:r}),Ti({content:n,transform:E(E({},Me),i),title:s,extra:{attributes:m,styles:_,classes:["".concat(C.cssPrefix,"-layers-text")].concat(on(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Yo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return C.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,Ti({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},td=new RegExp('"',"ug"),zi=[1105920,1112319];function nd(e){var t=e.replace(td,""),n=pu(t,0),r=n>=zi[0]&&n<=zi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Ur(a?t[0]:t),isSecondary:r||a}}function Di(e,t){var n="".concat(Wc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Lt(e.children),o=i.filter(function(ae){return ae.getAttribute(Br)===t})[0],s=Ze.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Vc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:K,_=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?tn[v][l[2].toLowerCase()]:Jc[v][c],j=nd(m),N=j.value,D=j.isSecondary,k=l[0].startsWith("FontAwesome"),O=Sa(_,N),F=O;if(k){var S=_u(N);S.iconName&&S.prefix&&(O=S.iconName,_=S.prefix)}if(O&&!D&&(!o||o.getAttribute(ka)!==_||o.getAttribute(Aa)!==F)){e.setAttribute(n,F),o&&e.removeChild(o);var B=Ku(),re=B.extra;re.attributes[Br]=t,Xr(O,_).then(function(ae){var be=Ta(E(E({},B),{},{icons:{main:ae,mask:Ia()},prefix:_,iconName:F,extra:re,watchable:!0})),pe=q.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(pe,e.firstChild):e.appendChild(pe),pe.outerHTML=be.map(function(Re){return ln(Re)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function rd(e){return Promise.all([Di(e,"::before"),Di(e,"::after")])}function ad(e){return e.parentNode!==document.head&&!~Kc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Br)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function $i(e){if(!!We)return new Promise(function(t,n){var r=Lt(e.querySelectorAll("*")).filter(ad).map(rd),a=Na.begin("searchPseudoElements");ds(),Promise.all(r).then(function(){a(),Jr(),t()}).catch(function(){a(),Jr(),n()})})}var id={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=$i,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;C.searchPseudoElements&&$i(a)}}},Hi=!1,od={mixout:function(){return{dom:{unwatch:function(){ds(),Hi=!0}}}},hooks:function(){return{bootstrap:function(){Ri(Yr("mutationObserverCallbacks",{}))},noAuto:function(){Bu()},watch:function(n){var r=n.observeMutationsRoot;Hi?Jr():Ri(Yr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Bi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},sd={mixout:function(){return{parse:{transform:function(n){return Bi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Bi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},_={outer:s,inner:m,path:v};return{tag:"g",attributes:E({},_.outer),children:[{tag:"g",attributes:E({},_.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:E(E({},r.icon.attributes),_.path)}]}]}}}},Ar={x:0,y:0,width:"100%",height:"100%"};function Ui(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function ld(e){return e.tag==="g"?e.children:[e]}var fd={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?sr(a.split(" ").map(function(o){return o.trim()})):Ia();return i.prefix||(i.prefix=Ge()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,_=su({transform:l,containerWidth:m,iconWidth:c}),j={tag:"rect",attributes:E(E({},Ar),{},{fill:"white"})},N=d.children?{children:d.children.map(Ui)}:{},D={tag:"g",attributes:E({},_.inner),children:[Ui(E({tag:d.tag,attributes:E(E({},d.attributes),_.path)},N))]},k={tag:"g",attributes:E({},_.outer),children:[D]},O="mask-".concat(s||an()),F="clip-".concat(s||an()),S={tag:"mask",attributes:E(E({},Ar),{},{id:O,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[j,k]},B={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:ld(v)},S]};return r.push(B,{tag:"rect",attributes:E({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(O,")")},Ar)}),{children:r,attributes:a}}}},cd={provides:function(t){var n=!1;Ze.matchMedia&&(n=Ze.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:E(E({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=E(E({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:E(E({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:E(E({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:E(E({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:E(E({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:E(E({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:E(E({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:E(E({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},ud={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},dd=[cu,Zu,Gu,Qu,ed,id,od,sd,fd,cd,ud];Ou(dd,{mixoutsTo:he});he.noAuto;var hs=he.config,md=he.library;he.dom;var Un=he.parse;he.findIconDefinition;he.toHtml;var hd=he.icon;he.layer;var pd=he.text;he.counter;function Wi(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Wi(Object(n),!0).forEach(function(r){fe(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wi(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function fe(e,t,n){return t=kd(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function gd(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function vd(e,t){if(e==null)return{};var n=gd(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(e,r)||(n[r]=e[r]))}return n}function Zr(e){return bd(e)||yd(e)||xd(e)||wd()}function bd(e){if(Array.isArray(e))return Gr(e)}function yd(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function xd(e,t){if(!!e){if(typeof e=="string")return Gr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Gr(e,t)}}function Gr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function wd(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function _d(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t||"default");if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function kd(e){var t=_d(e,"string");return typeof t=="symbol"?t:String(t)}var Ad=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},ps={exports:{}};(function(e){(function(t){var n=function(k,O,F){if(!c(O)||m(O)||v(O)||_(O)||l(O))return O;var S,B=0,re=0;if(d(O))for(S=[],re=O.length;B<re;B++)S.push(n(k,O[B],F));else{S={};for(var ae in O)Object.prototype.hasOwnProperty.call(O,ae)&&(S[k(ae,F)]=n(k,O[ae],F))}return S},r=function(k,O){O=O||{};var F=O.separator||"_",S=O.split||/(?=[A-Z])/;return k.split(S).join(F)},a=function(k){return j(k)?k:(k=k.replace(/[\-_\s]+(.)?/g,function(O,F){return F?F.toUpperCase():""}),k.substr(0,1).toLowerCase()+k.substr(1))},i=function(k){var O=a(k);return O.substr(0,1).toUpperCase()+O.substr(1)},o=function(k,O){return r(k,O).toLowerCase()},s=Object.prototype.toString,l=function(k){return typeof k=="function"},c=function(k){return k===Object(k)},d=function(k){return s.call(k)=="[object Array]"},m=function(k){return s.call(k)=="[object Date]"},v=function(k){return s.call(k)=="[object RegExp]"},_=function(k){return s.call(k)=="[object Boolean]"},j=function(k){return k=k-0,k===k},N=function(k,O){var F=O&&"process"in O?O.process:O;return typeof F!="function"?k:function(S,B){return F(S,k,B)}},D={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(k,O){return n(N(a,O),k)},decamelizeKeys:function(k,O){return n(N(o,O),k,O)},pascalizeKeys:function(k,O){return n(N(i,O),k)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=D:t.humps=D})(Ad)})(ps);var Od=ps.exports,Ed=["class","style"];function Pd(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=Od.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Cd(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Fa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Fa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Cd(d);break;case"style":l.style=Pd(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=vd(n,Ed);return zo(e.tag,_e(_e(_e({},t),{},{class:a.class,style:_e(_e({},a.style),o)},a.attrs),s),r)}var gs=!1;try{gs=!0}catch{}function Sd(){if(!gs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?fe({},e,t):{}}function Id(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},fe(t,"fa-".concat(e.size),e.size!==null),fe(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),fe(t,"fa-pull-".concat(e.pull),e.pull!==null),fe(t,"fa-swap-opacity",e.swapOpacity),fe(t,"fa-bounce",e.bounce),fe(t,"fa-shake",e.shake),fe(t,"fa-beat",e.beat),fe(t,"fa-fade",e.fade),fe(t,"fa-beat-fade",e.beatFade),fe(t,"fa-flash",e.flash),fe(t,"fa-spin-pulse",e.spinPulse),fe(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Yi(e){if(e&&Wn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Un.icon)return Un.icon(e);if(e===null)return null;if(Wn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Td=Rt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},maskId:{type:String,default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},titleId:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ve(function(){return Yi(t.icon)}),i=ve(function(){return qt("classes",Id(t))}),o=ve(function(){return qt("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ve(function(){return qt("mask",Yi(t.mask))}),l=ve(function(){return hd(a.value,_e(_e(_e(_e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title,titleId:t.titleId,maskId:t.maskId}))});Sn(l,function(d){if(!d)return Sd("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=ve(function(){return l.value?Fa(l.value.abstract[0],{},r):null});return function(){return c.value}}});Rt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=hs.familyPrefix,i=ve(function(){return["".concat(a,"-layers")].concat(Zr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return zo("div",{class:i.value},r.default?r.default():[])}}});Rt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=hs.familyPrefix,i=ve(function(){return qt("classes",[].concat(Zr(t.counter?["".concat(a,"-layers-counter")]:[]),Zr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ve(function(){return qt("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ve(function(){var c=pd(t.value.toString(),_e(_e({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ve(function(){return Fa(s.value,{},r)});return function(){return l.value}}});var Nd={prefix:"fas",iconName:"b",icon:[320,512,[98],"42","M64 32C28.7 32 0 60.7 0 96V256 416c0 35.3 28.7 64 64 64H192c70.7 0 128-57.3 128-128c0-46.5-24.8-87.3-62-109.7c18.7-22.3 30-51 30-82.3c0-70.7-57.3-128-128-128H64zm96 192H64V96h96c35.3 0 64 28.7 64 64s-28.7 64-64 64zM64 288h96 32c35.3 0 64 28.7 64 64s-28.7 64-64 64H64V288z"]},Md={prefix:"fab",iconName:"square-github",icon:[448,512,["github-square"],"f092","M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"]},Fd=Md,Rd={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"]};md.add(Nd,Rd,Fd);Wf(Fc).component("font-awesome-icon",Td).mount("#app");
