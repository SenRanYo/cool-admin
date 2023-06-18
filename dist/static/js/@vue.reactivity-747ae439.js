import{i as A,h as F,a as _,e as Y,t as Mt,d as Tt,b as xt,N as yt,c as C,f as q,g as L,j as O,m as Kt}from"./@vue.shared-9aa0355e.js";let f;class Pt{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=f,!e&&f&&(this.index=(f.scopes||(f.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const s=f;try{return f=this,e()}finally{f=s}}}on(){f=this}off(){f=this.parent}stop(e){if(this._active){let s,n;for(s=0,n=this.effects.length;s<n;s++)this.effects[s].stop();for(s=0,n=this.cleanups.length;s<n;s++)this.cleanups[s]();if(this.scopes)for(s=0,n=this.scopes.length;s<n;s++)this.scopes[s].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function pe(t){return new Pt(t)}function ct(t,e=f){e&&e.active&&e.effects.push(t)}function ge(){return f}function we(t){f&&f.cleanups.push(t)}const U=t=>{const e=new Set(t);return e.w=0,e.n=0,e},at=t=>(t.w&v)>0,ot=t=>(t.n&v)>0,Ot=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=v},zt=t=>{const{deps:e}=t;if(e.length){let s=0;for(let n=0;n<e.length;n++){const r=e[n];at(r)&&!ot(r)?r.delete(t):e[s++]=r,r.w&=~v,r.n&=~v}e.length=s}},z=new WeakMap;let S=0,v=1;const V=30;let h;const E=Symbol(""),$=Symbol("");class ft{constructor(e,s=null,n){this.fn=e,this.scheduler=s,this.active=!0,this.deps=[],this.parent=void 0,ct(this,n)}run(){if(!this.active)return this.fn();let e=h,s=R;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=h,h=this,R=!0,v=1<<++S,S<=V?Ot(this):k(this),this.fn()}finally{S<=V&&zt(this),v=1<<--S,h=this.parent,R=s,this.parent=void 0,this.deferStop&&this.stop()}}stop(){h===this?this.deferStop=!0:this.active&&(k(this),this.onStop&&this.onStop(),this.active=!1)}}function k(t){const{deps:e}=t;if(e.length){for(let s=0;s<e.length;s++)e[s].delete(t);e.length=0}}function Re(t,e){t.effect&&(t=t.effect.fn);const s=new ft(t);e&&(Y(s,e),e.scope&&ct(s,e.scope)),(!e||!e.lazy)&&s.run();const n=s.run.bind(s);return n.effect=s,n}function ve(t){t.effect.stop()}let R=!0;const ut=[];function At(){ut.push(R),R=!1}function Ct(){const t=ut.pop();R=t===void 0?!0:t}function u(t,e,s){if(R&&h){let n=z.get(t);n||z.set(t,n=new Map);let r=n.get(s);r||n.set(s,r=U()),lt(r)}}function lt(t,e){let s=!1;S<=V?ot(t)||(t.n|=v,s=!at(t)):s=!t.has(h),s&&(t.add(h),h.deps.push(t))}function m(t,e,s,n,r,i){const c=z.get(t);if(!c)return;let a=[];if(e==="clear")a=[...c.values()];else if(s==="length"&&_(t)){const l=Number(n);c.forEach((p,g)=>{(g==="length"||g>=l)&&a.push(p)})}else switch(s!==void 0&&a.push(c.get(s)),e){case"add":_(t)?L(s)&&a.push(c.get("length")):(a.push(c.get(E)),O(t)&&a.push(c.get($)));break;case"delete":_(t)||(a.push(c.get(E)),O(t)&&a.push(c.get($)));break;case"set":O(t)&&a.push(c.get(E));break}if(a.length===1)a[0]&&B(a[0]);else{const l=[];for(const p of a)p&&l.push(...p);B(U(l))}}function B(t,e){const s=_(t)?t:[...t];for(const n of s)n.computed&&tt(n);for(const n of s)n.computed||tt(n)}function tt(t,e){(t!==h||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}function Ht(t,e){var s;return(s=z.get(t))===null||s===void 0?void 0:s.get(e)}const jt=Kt("__proto__,__v_isRef,__isVue"),ht=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(q)),Dt=H(),Gt=H(!1,!0),Nt=H(!0),Wt=H(!0,!0),et=Vt();function Vt(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...s){const n=o(this);for(let i=0,c=this.length;i<c;i++)u(n,"get",i+"");const r=n[e](...s);return r===-1||r===!1?n[e](...s.map(o)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...s){At();const n=o(this)[e].apply(this,s);return Ct(),n}}),t}function $t(t){const e=o(this);return u(e,"has",t),e.hasOwnProperty(t)}function H(t=!1,e=!1){return function(n,r,i){if(r==="__v_isReactive")return!t;if(r==="__v_isReadonly")return t;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&i===(t?e?vt:Rt:e?wt:gt).get(n))return n;const c=_(n);if(!t){if(c&&C(et,r))return Reflect.get(et,r,i);if(r==="hasOwnProperty")return $t}const a=Reflect.get(n,r,i);return(q(r)?ht.has(r):jt(r))||(t||u(n,"get",r),e)?a:d(a)?c&&L(r)?a:a.value:A(a)?t?Et(a):mt(a):a}}const Bt=dt(),Ft=dt(!0);function dt(t=!1){return function(s,n,r,i){let c=s[n];if(b(c)&&d(c)&&!d(r))return!1;if(!t&&(!bt(r)&&!b(r)&&(c=o(c),r=o(r)),!_(s)&&d(c)&&!d(r)))return c.value=r,!0;const a=_(s)&&L(n)?Number(n)<s.length:C(s,n),l=Reflect.set(s,n,r,i);return s===o(i)&&(a?F(r,c)&&m(s,"set",n,r):m(s,"add",n,r)),l}}function Yt(t,e){const s=C(t,e);t[e];const n=Reflect.deleteProperty(t,e);return n&&s&&m(t,"delete",e,void 0),n}function qt(t,e){const s=Reflect.has(t,e);return(!q(e)||!ht.has(e))&&u(t,"has",e),s}function Lt(t){return u(t,"iterate",_(t)?"length":E),Reflect.ownKeys(t)}const _t={get:Dt,set:Bt,deleteProperty:Yt,has:qt,ownKeys:Lt},pt={get:Nt,set(t,e){return!0},deleteProperty(t,e){return!0}},Ut=Y({},_t,{get:Gt,set:Ft}),Jt=Y({},pt,{get:Wt}),J=t=>t,j=t=>Reflect.getPrototypeOf(t);function T(t,e,s=!1,n=!1){t=t.__v_raw;const r=o(t),i=o(e);s||(e!==i&&u(r,"get",e),u(r,"get",i));const{has:c}=j(r),a=n?J:s?X:I;if(c.call(r,e))return a(t.get(e));if(c.call(r,i))return a(t.get(i));t!==r&&t.get(e)}function x(t,e=!1){const s=this.__v_raw,n=o(s),r=o(t);return e||(t!==r&&u(n,"has",t),u(n,"has",r)),t===r?s.has(t):s.has(t)||s.has(r)}function y(t,e=!1){return t=t.__v_raw,!e&&u(o(t),"iterate",E),Reflect.get(t,"size",t)}function st(t){t=o(t);const e=o(this);return j(e).has.call(e,t)||(e.add(t),m(e,"add",t,t)),this}function nt(t,e){e=o(e);const s=o(this),{has:n,get:r}=j(s);let i=n.call(s,t);i||(t=o(t),i=n.call(s,t));const c=r.call(s,t);return s.set(t,e),i?F(e,c)&&m(s,"set",t,e):m(s,"add",t,e),this}function rt(t){const e=o(this),{has:s,get:n}=j(e);let r=s.call(e,t);r||(t=o(t),r=s.call(e,t)),n&&n.call(e,t);const i=e.delete(t);return r&&m(e,"delete",t,void 0),i}function it(){const t=o(this),e=t.size!==0,s=t.clear();return e&&m(t,"clear",void 0,void 0),s}function K(t,e){return function(n,r){const i=this,c=i.__v_raw,a=o(c),l=e?J:t?X:I;return!t&&u(a,"iterate",E),c.forEach((p,g)=>n.call(r,l(p),l(g),i))}}function P(t,e,s){return function(...n){const r=this.__v_raw,i=o(r),c=O(i),a=t==="entries"||t===Symbol.iterator&&c,l=t==="keys"&&c,p=r[t](...n),g=s?J:e?X:I;return!e&&u(i,"iterate",l?$:E),{next(){const{value:M,done:W}=p.next();return W?{value:M,done:W}:{value:a?[g(M[0]),g(M[1])]:g(M),done:W}},[Symbol.iterator](){return this}}}}function w(t){return function(...e){return t==="delete"?!1:this}}function Qt(){const t={get(i){return T(this,i)},get size(){return y(this)},has:x,add:st,set:nt,delete:rt,clear:it,forEach:K(!1,!1)},e={get(i){return T(this,i,!1,!0)},get size(){return y(this)},has:x,add:st,set:nt,delete:rt,clear:it,forEach:K(!1,!0)},s={get(i){return T(this,i,!0)},get size(){return y(this,!0)},has(i){return x.call(this,i,!0)},add:w("add"),set:w("set"),delete:w("delete"),clear:w("clear"),forEach:K(!0,!1)},n={get(i){return T(this,i,!0,!0)},get size(){return y(this,!0)},has(i){return x.call(this,i,!0)},add:w("add"),set:w("set"),delete:w("delete"),clear:w("clear"),forEach:K(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=P(i,!1,!1),s[i]=P(i,!0,!1),e[i]=P(i,!1,!0),n[i]=P(i,!0,!0)}),[t,s,e,n]}const[Xt,Zt,kt,te]=Qt();function D(t,e){const s=e?t?te:kt:t?Zt:Xt;return(n,r,i)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?n:Reflect.get(C(s,r)&&r in n?s:n,r,i)}const ee={get:D(!1,!1)},se={get:D(!1,!0)},ne={get:D(!0,!1)},re={get:D(!0,!0)},gt=new WeakMap,wt=new WeakMap,Rt=new WeakMap,vt=new WeakMap;function ie(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ce(t){return t.__v_skip||!Object.isExtensible(t)?0:ie(Mt(t))}function mt(t){return b(t)?t:G(t,!1,_t,ee,gt)}function me(t){return G(t,!1,Ut,se,wt)}function Et(t){return G(t,!0,pt,ne,Rt)}function Ee(t){return G(t,!0,Jt,re,vt)}function G(t,e,s,n,r){if(!A(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=r.get(t);if(i)return i;const c=ce(t);if(c===0)return t;const a=new Proxy(t,c===2?n:s);return r.set(t,a),a}function Q(t){return b(t)?Q(t.__v_raw):!!(t&&t.__v_isReactive)}function b(t){return!!(t&&t.__v_isReadonly)}function bt(t){return!!(t&&t.__v_isShallow)}function be(t){return Q(t)||b(t)}function o(t){const e=t&&t.__v_raw;return e?o(e):t}function Se(t){return Tt(t,"__v_skip",!0),t}const I=t=>A(t)?mt(t):t,X=t=>A(t)?Et(t):t;function Z(t){R&&h&&(t=o(t),lt(t.dep||(t.dep=U())))}function N(t,e){t=o(t);const s=t.dep;s&&B(s)}function d(t){return!!(t&&t.__v_isRef===!0)}function Ie(t){return St(t,!1)}function Me(t){return St(t,!0)}function St(t,e){return d(t)?t:new ae(t,e)}class ae{constructor(e,s){this.__v_isShallow=s,this.dep=void 0,this.__v_isRef=!0,this._rawValue=s?e:o(e),this._value=s?e:I(e)}get value(){return Z(this),this._value}set value(e){const s=this.__v_isShallow||bt(e)||b(e);e=s?e:o(e),F(e,this._rawValue)&&(this._rawValue=e,this._value=s?e:I(e),N(this))}}function Te(t){N(t)}function oe(t){return d(t)?t.value:t}const fe={get:(t,e,s)=>oe(Reflect.get(t,e,s)),set:(t,e,s,n)=>{const r=t[e];return d(r)&&!d(s)?(r.value=s,!0):Reflect.set(t,e,s,n)}};function xe(t){return Q(t)?t:new Proxy(t,fe)}class ue{constructor(e){this.dep=void 0,this.__v_isRef=!0;const{get:s,set:n}=e(()=>Z(this),()=>N(this));this._get=s,this._set=n}get value(){return this._get()}set value(e){this._set(e)}}function ye(t){return new ue(t)}function Ke(t){const e=_(t)?new Array(t.length):{};for(const s in t)e[s]=he(t,s);return e}class le{constructor(e,s,n){this._object=e,this._key=s,this._defaultValue=n,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return Ht(o(this._object),this._key)}}function he(t,e,s){const n=t[e];return d(n)?n:new le(t,e,s)}var It;class de{constructor(e,s,n,r){this._setter=s,this.dep=void 0,this.__v_isRef=!0,this[It]=!1,this._dirty=!0,this.effect=new ft(e,()=>{this._dirty||(this._dirty=!0,N(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=n}get value(){const e=o(this);return Z(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}It="__v_isReadonly";function Pe(t,e,s=!1){let n,r;const i=xt(t);return i?(n=t,r=yt):(n=t.get,r=t.set),new de(n,r,i||!r,s)}export{b as A,Ee as B,ve as C,Pt as E,ft as R,bt as a,Q as b,be as c,Pe as d,Ct as e,xe as f,ge as g,u as h,d as i,mt as j,m as k,Me as l,Se as m,Et as n,we as o,At as p,he as q,Ie as r,me as s,o as t,oe as u,Ke as v,pe as w,Te as x,ye as y,Re as z};
