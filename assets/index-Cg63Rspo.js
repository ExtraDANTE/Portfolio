var wi=Object.defineProperty;var ja=e=>{throw TypeError(e)};var ki=(e,t,n)=>t in e?wi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var rt=(e,t,n)=>ki(e,typeof t!="symbol"?t+"":t,n),Us=(e,t,n)=>t.has(e)||ja("Cannot "+n);var f=(e,t,n)=>(Us(e,t,"read from private field"),n?n.call(e):t.get(e)),G=(e,t,n)=>t.has(e)?ja("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n),H=(e,t,n,r)=>(Us(e,t,"write to private field"),r?r.call(e,n):t.set(e,n),n),re=(e,t,n)=>(Us(e,t,"access private method"),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();const co=!0;var _a=Array.isArray,$i=Array.prototype.indexOf,ts=Array.prototype.includes,js=Array.from,wn=Object.defineProperty,sn=Object.getOwnPropertyDescriptor,uo=Object.getOwnPropertyDescriptors,Ti=Object.prototype,Si=Array.prototype,ya=Object.getPrototypeOf,La=Object.isExtensible;function yr(e){return typeof e=="function"}const Ei=()=>{};function Ai(e){return e()}function ta(e){for(var t=0;t<e.length;t++)e[t]()}function fo(){var e,t,n=new Promise((r,s)=>{e=r,t=s});return{promise:n,resolve:e,reject:t}}function Ci(e,t){if(Array.isArray(e))return e;if(!(Symbol.iterator in e))return Array.from(e);const n=[];for(const r of e)if(n.push(r),n.length===t)break;return n}const Re=2,lr=4,us=8,wa=1<<24,Mt=16,Dt=32,kn=64,na=128,gt=512,Ne=1024,Pe=2048,Wt=4096,Ge=8192,bt=16384,hr=32768,Ra=1<<25,Vn=65536,ns=1<<17,Ni=1<<18,mr=1<<19,vo=1<<20,Gt=1<<25,Un=65536,rs=1<<21,Rn=1<<22,xn=1<<23,an=Symbol("$state"),po=Symbol("legacy props"),Mi=Symbol(""),ho=Symbol("proxy path"),xs=Symbol("attributes"),ra=Symbol("class"),sa=Symbol("style"),Tr=Symbol("text"),_s=Symbol("form reset"),Ii=Symbol("hmr anchor"),Ls=new class extends Error{constructor(){super(...arguments);rt(this,"name","StaleReactionError");rt(this,"message","The reaction that called `getAbortSignal()` was re-run or destroyed")}};var oo;const ka=!!((oo=globalThis.document)!=null&&oo.contentType)&&globalThis.document.contentType.includes("xml"),Pi=1,Di=11;function Oi(e){{const t=new Error(`invariant_violation
An invariant violation occurred, meaning Svelte's internal assumptions were flawed. This is a bug in Svelte, not your app — please open an issue at https://github.com/sveltejs/svelte, citing the following message: "${e}"
https://svelte.dev/e/invariant_violation`);throw t.name="Svelte error",t}}function ji(e){{const t=new Error(`lifecycle_outside_component
\`${e}(...)\` can only be used during component initialisation
https://svelte.dev/e/lifecycle_outside_component`);throw t.name="Svelte error",t}}function Li(){{const e=new Error("snippet_without_render_tag\nAttempted to render a snippet without a `{@render}` block. This would cause the snippet code to be stringified instead of its content being rendered to the DOM. To fix this, change `{snippet}` to `{@render snippet()}`.\nhttps://svelte.dev/e/snippet_without_render_tag");throw e.name="Svelte error",e}}function Ri(){{const e=new Error("svelte_element_invalid_this_value\nThe `this` prop on `<svelte:element>` must be a string, if defined\nhttps://svelte.dev/e/svelte_element_invalid_this_value");throw e.name="Svelte error",e}}function zi(){{const e=new Error("async_derived_orphan\nCannot create a `$derived(...)` with an `await` expression outside of an effect tree\nhttps://svelte.dev/e/async_derived_orphan");throw e.name="Svelte error",e}}function za(){{const e=new Error("bind_invalid_checkbox_value\nUsing `bind:value` together with a checkbox input is not allowed. Use `bind:checked` instead\nhttps://svelte.dev/e/bind_invalid_checkbox_value");throw e.name="Svelte error",e}}function Fi(e,t){{const n=new Error(`component_api_changed
Calling \`${e}\` on a component instance (of ${t}) is no longer valid in Svelte 5
https://svelte.dev/e/component_api_changed`);throw n.name="Svelte error",n}}function Bi(e,t){{const n=new Error(`component_api_invalid_new
Attempted to instantiate ${e} with \`new ${t}\`, which is no longer valid in Svelte 5. If this component is not under your control, set the \`compatibility.componentApi\` compiler option to \`4\` to keep it working.
https://svelte.dev/e/component_api_invalid_new`);throw n.name="Svelte error",n}}function Hi(){{const e=new Error(`derived_references_self
A derived value cannot reference itself recursively
https://svelte.dev/e/derived_references_self`);throw e.name="Svelte error",e}}function Gi(e,t,n){{const r=new Error(`each_key_duplicate
${n?`Keyed each block has duplicate key \`${n}\` at indexes ${e} and ${t}`:`Keyed each block has duplicate key at indexes ${e} and ${t}`}
https://svelte.dev/e/each_key_duplicate`);throw r.name="Svelte error",r}}function Vi(e,t,n){{const r=new Error(`each_key_volatile
Keyed each block has key that is not idempotent — the key for item at index ${e} was \`${t}\` but is now \`${n}\`. Keys must be the same each time for a given item
https://svelte.dev/e/each_key_volatile`);throw r.name="Svelte error",r}}function Ui(e){{const t=new Error(`effect_in_teardown
\`${e}\` cannot be used inside an effect cleanup function
https://svelte.dev/e/effect_in_teardown`);throw t.name="Svelte error",t}}function Wi(){{const e=new Error("effect_in_unowned_derived\nEffect cannot be created inside a `$derived` value that was not itself created inside an effect\nhttps://svelte.dev/e/effect_in_unowned_derived");throw e.name="Svelte error",e}}function Ki(e){{const t=new Error(`effect_orphan
\`${e}\` can only be used inside an effect (e.g. during component initialisation)
https://svelte.dev/e/effect_orphan`);throw t.name="Svelte error",t}}function qi(){{const e=new Error(`effect_update_depth_exceeded
Maximum update depth exceeded. This typically indicates that an effect reads and writes the same piece of state
https://svelte.dev/e/effect_update_depth_exceeded`);throw e.name="Svelte error",e}}function Yi(e){{const t=new Error(`props_invalid_value
Cannot do \`bind:${e}={undefined}\` when \`${e}\` has a fallback value
https://svelte.dev/e/props_invalid_value`);throw t.name="Svelte error",t}}function Zi(e){{const t=new Error(`rune_outside_svelte
The \`${e}\` rune is only available inside \`.svelte\` and \`.svelte.js/ts\` files
https://svelte.dev/e/rune_outside_svelte`);throw t.name="Svelte error",t}}function Xi(){{const e=new Error("state_descriptors_fixed\nProperty descriptors defined on `$state` objects must contain `value` and always be `enumerable`, `configurable` and `writable`.\nhttps://svelte.dev/e/state_descriptors_fixed");throw e.name="Svelte error",e}}function Qi(){{const e=new Error("state_prototype_fixed\nCannot set prototype of `$state` object\nhttps://svelte.dev/e/state_prototype_fixed");throw e.name="Svelte error",e}}function Ji(){{const e=new Error("state_unsafe_mutation\nUpdating state inside `$derived(...)`, `$inspect(...)` or a template expression is forbidden. If the value should not be reactive, declare it without `$state`\nhttps://svelte.dev/e/state_unsafe_mutation");throw e.name="Svelte error",e}}function el(){{const e=new Error("svelte_boundary_reset_onerror\nA `<svelte:boundary>` `reset` function cannot be called while an error is still being handled\nhttps://svelte.dev/e/svelte_boundary_reset_onerror");throw e.name="Svelte error",e}}const tl=1,nl=2,mo=4,rl=8,sl=16,al=1,ol=2,go=4,il=8,ll=16,cl=2,Ee=Symbol("uninitialized"),k=Symbol("filename"),bo="http://www.w3.org/1999/xhtml",dl="http://www.w3.org/2000/svg",ul="@attach";var gr="font-weight: bold",br="font-weight: normal";function fl(e){console.warn(`%c[svelte] await_reactivity_loss
%cDetected reactivity loss when reading \`${e}\`. This happens when state is read in an async function after an earlier \`await\`
https://svelte.dev/e/await_reactivity_loss`,gr,br)}function vl(e,t){console.warn(`%c[svelte] binding_property_non_reactive
%c${t?`\`${e}\` (${t}) is binding to a non-reactive property`:`\`${e}\` is binding to a non-reactive property`}
https://svelte.dev/e/binding_property_non_reactive`,gr,br)}function pl(){console.warn(`%c[svelte] derived_inert
%cReading a derived belonging to a now-destroyed effect may result in stale values
https://svelte.dev/e/derived_inert`,gr,br)}function hl(){console.warn("%c[svelte] select_multiple_invalid_value\n%cThe `value` property of a `<select multiple>` element should be an array, but it received a non-array value. The selection will be kept as is.\nhttps://svelte.dev/e/select_multiple_invalid_value",gr,br)}function ys(e){console.warn(`%c[svelte] state_proxy_equality_mismatch
%cReactive \`$state(...)\` proxies and the values they proxy have different identities. Because of this, comparisons with \`${e}\` will produce unexpected results
https://svelte.dev/e/state_proxy_equality_mismatch`,gr,br)}function ml(){console.warn("%c[svelte] svelte_boundary_reset_noop\n%cA `<svelte:boundary>` `reset` function only resets the boundary the first time it is called\nhttps://svelte.dev/e/svelte_boundary_reset_noop",gr,br)}function xo(e){return e===this.v}function gl(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function _o(e){return!gl(e,this.v)}let xr=!1,bl=!1;function xl(){xr=!0}function Y(e,t){return e.label=t,yo(e.v,t),e}function yo(e,t){var n;return(n=e==null?void 0:e[ho])==null||n.call(e,t),e}function wo(e){const t=new Error,n=_l();return n.length===0?null:(n.unshift(`
`),wn(t,"stack",{value:n.join(`
`)}),wn(t,"name",{value:e}),t)}function _l(){const e=Error.stackTraceLimit;Error.stackTraceLimit=1/0;const t=new Error().stack;if(Error.stackTraceLimit=e,!t)return[];const n=t.split(`
`),r=[];for(let s=0;s<n.length;s++){const a=n[s],i=a.replaceAll("\\","/");if(a.trim()!=="Error"){if(a.includes("validate_each_keys"))return[];i.includes("svelte/src/internal")||i.includes("node_modules/.vite")||r.push(a)}}return r}function yl(e,t){e||Oi(t)}let ne=null;function cr(e){ne=e}let Pt=null;function Ss(e){Pt=e}function y(e,t,n,r,s,a){const i=Pt;Pt={type:t,file:n[k],line:r,column:s,parent:i,...a};try{return e()}finally{Pt=i}}let on=null;function Es(e){on=e}function U(e,t=!1,n){ne={p:ne,i:!1,c:null,e:null,s:e,x:null,r:V,l:xr&&!t?{s:null,u:null,$:[]}:null},ne.function=n,on=n}function W(e){var t=ne,n=t.e;if(n!==null){t.e=null;for(var r of n)Uo(r)}return e!==void 0&&(t.x=e),t.i=!0,ne=t.p,on=(ne==null?void 0:ne.function)??null,e??{}}function fs(){return!xr||ne!==null&&ne.l===null}let Nn=[];function ko(){var e=Nn;Nn=[],ta(e)}function ln(e){if(Nn.length===0&&!Nr){var t=Nn;queueMicrotask(()=>{t===Nn&&ko()})}Nn.push(e)}function wl(){for(;Nn.length>0;)ko()}const aa=new WeakMap;function $o(e){var t=V;if(t===null)return Q.f|=xn,e;if(e instanceof Error&&!aa.has(e)&&aa.set(e,kl(e,t)),(t.f&hr)===0&&(t.f&lr)===0)throw!t.parent&&e instanceof Error&&To(e),e;bn(e,t)}function bn(e,t){for(;t!==null;){if((t.f&na)!==0){if((t.f&hr)===0)throw e;try{t.b.error(e);return}catch(n){e=n}}t=t.parent}throw e instanceof Error&&To(e),e}function kl(e,t){var i,o,l;const n=sn(e,"message");if(!(n&&!n.configurable)){for(var r=Na?"  ":"	",s=`
${r}in ${((i=t.fn)==null?void 0:i.name)||"<unknown>"}`,a=t.ctx;a!==null;)s+=`
${r}in ${(o=a.function)==null?void 0:o[k].split("/").pop()}`,a=a.p;return{message:e.message+`
${s}
`,stack:(l=e.stack)==null?void 0:l.split(`
`).filter(v=>!v.includes("svelte/src/internal")).join(`
`)}}}function To(e){const t=aa.get(e);t&&(wn(e,"message",{value:t.message}),wn(e,"stack",{value:t.stack}))}const $l=-7169;function Se(e,t){e.f=e.f&$l|t}function $a(e){(e.f&gt)!==0||e.deps===null?Se(e,Ne):Se(e,Wt)}function So(e){if(e!==null)for(const t of e)(t.f&Re)===0||(t.f&Un)===0||(t.f^=Un,So(t.deps))}function Eo(e,t,n){(e.f&Pe)!==0?t.add(e):(e.f&Wt)!==0&&n.add(e),So(e.deps),Se(e,Ne)}let ms=!1;function Ao(e){var t=ms;try{return ms=!1,[e(),ms]}finally{ms=t}}let Ws=null,Yn=null,j=null,Cr=null,je=null,oa=null,Nr=!1,Ks=!1,Xn=null,ws=null;var Fa=0,qs=new Set;let Tl=1;var tr,hn,Dn,nr,rr,sr,en,ar,Fe,os,tn,Ct,zt,or,mn,de,ia,Sr,la,Co,No,Zn,Sl,Er;const Ps=class Ps{constructor(){G(this,de);rt(this,"id",Tl++);G(this,tr,!1);rt(this,"linked",!0);G(this,hn,null);G(this,Dn,null);rt(this,"async_deriveds",new Map);rt(this,"current",new Map);rt(this,"previous",new Map);G(this,nr,new Set);G(this,rr,new Set);G(this,sr,0);G(this,en,new Map);G(this,ar,null);G(this,Fe,[]);G(this,os,[]);G(this,tn,new Set);G(this,Ct,new Set);G(this,zt,new Map);G(this,or,new Set);rt(this,"is_fork",!1);G(this,mn,!1);Yn===null?Ws=Yn=this:(H(Yn,Dn,this),H(this,hn,Yn)),Yn=this}skip_effect(t){f(this,zt).has(t)||f(this,zt).set(t,{d:[],m:[]}),f(this,or).delete(t)}unskip_effect(t,n=r=>this.schedule(r)){var r=f(this,zt).get(t);if(r){f(this,zt).delete(t);for(var s of r.d)Se(s,Pe),n(s);for(s of r.m)Se(s,Wt),n(s)}f(this,or).add(t)}capture(t,n,r=!1){t.v!==Ee&&!this.previous.has(t)&&this.previous.set(t,t.v),(t.f&xn)===0&&(this.current.set(t,[n,r]),je==null||je.set(t,n)),this.is_fork||(t.v=n)}activate(){j=this}deactivate(){j=null,je=null}flush(){try{co&&qs.clear(),Ks=!0,j=this,re(this,de,Sr).call(this)}finally{Fa=0,oa=null,Xn=null,ws=null,Ks=!1,j=null,je=null,zn.clear();for(const t of qs)t.updated=null}}discard(){var t;for(const n of f(this,rr))n(this);f(this,rr).clear(),re(this,de,Er).call(this),(t=f(this,ar))==null||t.resolve()}register_created_effect(t){f(this,os).push(t)}increment(t,n){if(H(this,sr,f(this,sr)+1),t){let r=f(this,en).get(n)??0;f(this,en).set(n,r+1)}}decrement(t,n){if(H(this,sr,f(this,sr)-1),t){let r=f(this,en).get(n)??0;r===1?f(this,en).delete(n):f(this,en).set(n,r-1)}f(this,mn)||(H(this,mn,!0),ln(()=>{H(this,mn,!1),this.linked&&this.flush()}))}transfer_effects(t,n){for(const r of t)f(this,tn).add(r);for(const r of n)f(this,Ct).add(r);t.clear(),n.clear()}oncommit(t){f(this,nr).add(t)}ondiscard(t){f(this,rr).add(t)}settled(){return(f(this,ar)??H(this,ar,fo())).promise}static ensure(){if(j===null){const t=j=new Ps;!Ks&&!Nr&&ln(()=>{f(t,tr)||t.flush()})}return j}apply(){{je=null;return}}schedule(t){var s;if(oa=t,(s=t.b)!=null&&s.is_pending&&(t.f&(lr|us|wa))!==0&&(t.f&hr)===0){t.b.defer_effect(t);return}for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(Xn!==null&&n===V&&(Q===null||(Q.f&Re)===0))return;if((r&(kn|Dt))!==0){if((r&Ne)===0)return;n.f^=Ne}}f(this,Fe).push(n)}};tr=new WeakMap,hn=new WeakMap,Dn=new WeakMap,nr=new WeakMap,rr=new WeakMap,sr=new WeakMap,en=new WeakMap,ar=new WeakMap,Fe=new WeakMap,os=new WeakMap,tn=new WeakMap,Ct=new WeakMap,zt=new WeakMap,or=new WeakMap,mn=new WeakMap,de=new WeakSet,ia=function(){if(this.is_fork)return!0;for(const r of f(this,en).keys()){for(var t=r,n=!1;t.parent!==null;){if(f(this,zt).has(t)){n=!0;break}t=t.parent}if(!n)return!0}return!1},Sr=function(){var l,v,m,u;H(this,tr,!0),Fa++>1e3&&(re(this,de,Er).call(this),Al());for(const d of this.current.keys())qs.add(d);for(const d of f(this,tn))f(this,Ct).delete(d),Se(d,Pe),this.schedule(d);for(const d of f(this,Ct))Se(d,Wt),this.schedule(d);const t=f(this,Fe);H(this,Fe,[]),this.apply();var n=Xn=[],r=[],s=ws=[];for(const d of t)try{re(this,de,la).call(this,d,n,r)}catch(g){throw Po(d),re(this,de,ia).call(this)||this.discard(),g}if(j=null,s.length>0){var a=Ps.ensure();for(const d of s)a.schedule(d)}if(Xn=null,ws=null,re(this,de,ia).call(this)){re(this,de,Zn).call(this,r),re(this,de,Zn).call(this,n);for(const[d,g]of f(this,zt))Io(d,g);s.length>0&&re(l=j,de,Sr).call(l);return}const i=re(this,de,Co).call(this);if(i){re(this,de,Zn).call(this,r),re(this,de,Zn).call(this,n),re(v=i,de,No).call(v,this);return}f(this,tn).clear(),f(this,Ct).clear();for(const d of f(this,nr))d(this);f(this,nr).clear(),Cr=this,Ba(r),Ba(n),Cr=null,(m=f(this,ar))==null||m.resolve();var o=j;if(f(this,sr)===0&&(f(this,Fe).length===0||o!==null)&&re(this,de,Er).call(this),f(this,Fe).length>0)if(o!==null){const d=o;f(d,Fe).push(...f(this,Fe).filter(g=>!f(d,Fe).includes(g)))}else o=this;o!==null&&re(u=o,de,Sr).call(u)},la=function(t,n,r){t.f^=Ne;for(var s=t.first;s!==null;){var a=s.f,i=(a&(Dt|kn))!==0,o=i&&(a&Ne)!==0,l=o||(a&Ge)!==0||f(this,zt).has(s);if(!l&&s.fn!==null){i?s.f^=Ne:(a&lr)!==0?n.push(s):ps(s)&&((a&Mt)!==0&&f(this,Ct).add(s),pr(s));var v=s.first;if(v!==null){s=v;continue}}for(;s!==null;){var m=s.next;if(m!==null){s=m;break}s=s.parent}}},Co=function(){for(var t=f(this,hn);t!==null;){if(!t.is_fork){for(const[n,[,r]]of this.current)if(t.current.has(n)&&!r)return t}t=f(t,hn)}return null},No=function(t){var r;for(const[s,a]of t.current)!this.previous.has(s)&&t.previous.has(s)&&this.previous.set(s,t.previous.get(s)),this.current.set(s,a);for(const[s,a]of t.async_deriveds){const i=this.async_deriveds.get(s);i&&a.promise.then(i.resolve).catch(i.reject)}this.transfer_effects(f(t,tn),f(t,Ct));const n=s=>{var a=s.reactions;if(a!==null)for(const l of a){var i=l.f;if((i&Re)!==0)n(l);else{var o=l;i&(Rn|Mt)&&!this.async_deriveds.has(o)&&(f(this,Ct).delete(o),Se(o,Pe),this.schedule(o))}}};for(const s of this.current.keys())n(s);this.oncommit(()=>t.discard()),re(r=t,de,Er).call(r),j=this,re(this,de,Sr).call(this)},Zn=function(t){for(var n=0;n<t.length;n+=1)Eo(t[n],f(this,tn),f(this,Ct))},Sl=function(){var m;for(let u=Ws;u!==null;u=f(u,Dn)){var t=u.id<this.id,n=[];for(const[d,[g,b]]of this.current){if(u.current.has(d)){var r=u.current.get(d)[0];if(t&&g!==r)u.current.set(d,[g,b]);else continue}n.push(d)}if(t)for(const[d,g]of this.async_deriveds){const b=u.async_deriveds.get(d);b&&g.promise.then(b.resolve).catch(b.reject)}if(f(u,tr)){var s=[...u.current.keys()].filter(d=>!u.current.get(d)[1]&&!this.current.has(d));if(s.length===0)t&&u.discard();else if(n.length>0){if(f(u,mn)||yl(f(u,Fe).length===0,"Batch has scheduled roots"),t)for(const d of f(this,or))u.unskip_effect(d,g=>{var b;(g.f&(Mt|Rn))!==0?u.schedule(g):re(b=u,de,Zn).call(b,[g])});u.activate();var a=new Set,i=new Map;for(var o of n)Mo(o,s,a,i);i=new Map;var l=[...u.current].filter(([d,g])=>{const b=this.current.get(d);return b?b[0]!==g[0]||b[1]!==g[1]:!0}).map(([d])=>d);if(l.length>0)for(const d of f(this,os))(d.f&(bt|Ge|ns))===0&&Ta(d,l,i)&&((d.f&(Rn|Mt))!==0?(Se(d,Pe),u.schedule(d)):f(u,tn).add(d));if(f(u,Fe).length>0&&!f(u,mn)){u.apply();for(var v of f(u,Fe))re(m=u,de,la).call(m,v,[],[]);H(u,Fe,[])}u.deactivate()}}}},Er=function(){if(this.linked){var t=f(this,hn),n=f(this,Dn);t===null?Ws=n:H(t,Dn,n),n===null?Yn=t:H(n,hn,t),this.linked=!1}};let Wn=Ps;function El(e){var t=Nr;Nr=!0;try{for(var n;;){if(wl(),j===null)return n;j.flush()}}finally{Nr=t}}function Al(){{var e=new Map;for(const n of j.current.keys())for(const[r,s]of n.updated??[]){var t=e.get(r);t||(t={error:s.error,count:0},e.set(r,t)),t.count+=s.count}for(const n of e.values())n.error&&console.error(n.error)}try{qi()}catch(n){wn(n,"stack",{value:""}),bn(n,oa)}}let At=null;function Ba(e){var t=e.length;if(t!==0){for(var n=0;n<t;){var r=e[n++];if((r.f&(bt|Ge))===0&&ps(r)&&(At=new Set,pr(r),r.deps===null&&r.first===null&&r.nodes===null&&r.teardown===null&&r.ac===null&&Yo(r),(At==null?void 0:At.size)>0)){zn.clear();for(const s of At){if((s.f&(bt|Ge))!==0)continue;const a=[s];let i=s.parent;for(;i!==null;)At.has(i)&&(At.delete(i),a.push(i)),i=i.parent;for(let o=a.length-1;o>=0;o--){const l=a[o];(l.f&(bt|Ge))===0&&pr(l)}}At.clear()}}At=null}}function Mo(e,t,n,r){if(!n.has(e)&&(n.add(e),e.reactions!==null))for(const s of e.reactions){const a=s.f;(a&Re)!==0?Mo(s,t,n,r):(a&(Rn|Mt))!==0&&(a&Pe)===0&&Ta(s,t,r)&&(Se(s,Pe),Sa(s))}}function Ta(e,t,n){const r=n.get(e);if(r!==void 0)return r;if(e.deps!==null)for(const s of e.deps){if(ts.call(t,s))return!0;if((s.f&Re)!==0&&Ta(s,t,n))return n.set(s,!0),!0}return n.set(e,!1),!1}function Sa(e){j.schedule(e)}function Io(e,t){if(!((e.f&Dt)!==0&&(e.f&Ne)!==0)){(e.f&Pe)!==0?t.d.push(e):(e.f&Wt)!==0&&t.m.push(e),Se(e,Ne);for(var n=e.first;n!==null;)Io(n,t),n=n.next}}function Po(e){Se(e,Ne);for(var t=e.first;t!==null;)Po(t),t=t.next}function Cl(e){let t=0,n=$n(0),r;return Y(n,"createSubscriber version"),()=>{Ma()&&(p(n),Ns(()=>(t===0&&(r=Kn(()=>e(()=>Ir(n)))),t+=1,()=>{ln(()=>{t-=1,t===0&&(r==null||r(),r=void 0,Ir(n))})})))}}var Nl=Vn|mr;function Ml(e,t,n,r){new Il(e,t,n,r)}var vt,xa,pt,On,Ye,ht,Be,st,nn,jn,gn,ir,is,ls,Ft,Ds,$e,Pl,Dl,Ol,ca,ks,$s,da,ua;class Il{constructor(t,n,r,s){G(this,$e);rt(this,"parent");rt(this,"is_pending",!1);rt(this,"transform_error");G(this,vt);G(this,xa,null);G(this,pt);G(this,On);G(this,Ye);G(this,ht,null);G(this,Be,null);G(this,st,null);G(this,nn,null);G(this,jn,0);G(this,gn,0);G(this,ir,!1);G(this,is,new Set);G(this,ls,new Set);G(this,Ft,null);G(this,Ds,Cl(()=>(H(this,Ft,$n(f(this,jn))),Y(f(this,Ft),"$effect.pending()"),()=>{H(this,Ft,null)})));var a;H(this,vt,t),H(this,pt,n),H(this,On,i=>{var o=V;o.b=this,o.f|=na,r(i)}),this.parent=V.b,this.transform_error=s??((a=this.parent)==null?void 0:a.transform_error)??(i=>i),H(this,Ye,Fs(()=>{re(this,$e,ca).call(this)},Nl))}defer_effect(t){Eo(t,f(this,is),f(this,ls))}is_rendered(){return!this.is_pending&&(!this.parent||this.parent.is_rendered())}has_pending_snippet(){return!!f(this,pt).pending}update_pending_count(t,n){re(this,$e,da).call(this,t,n),H(this,jn,f(this,jn)+t),!(!f(this,Ft)||f(this,ir))&&(H(this,ir,!0),ln(()=>{H(this,ir,!1),f(this,Ft)&&vr(f(this,Ft),f(this,jn))}))}get_effect_pending(){return f(this,Ds).call(this),p(f(this,Ft))}error(t){if(!f(this,pt).onerror&&!f(this,pt).failed)throw t;j!=null&&j.is_fork?(f(this,ht)&&j.skip_effect(f(this,ht)),f(this,Be)&&j.skip_effect(f(this,Be)),f(this,st)&&j.skip_effect(f(this,st)),j.oncommit(()=>{re(this,$e,ua).call(this,t)})):re(this,$e,ua).call(this,t)}}vt=new WeakMap,xa=new WeakMap,pt=new WeakMap,On=new WeakMap,Ye=new WeakMap,ht=new WeakMap,Be=new WeakMap,st=new WeakMap,nn=new WeakMap,jn=new WeakMap,gn=new WeakMap,ir=new WeakMap,is=new WeakMap,ls=new WeakMap,Ft=new WeakMap,Ds=new WeakMap,$e=new WeakSet,Pl=function(){try{H(this,ht,Xe(()=>f(this,On).call(this,f(this,vt))))}catch(t){this.error(t)}},Dl=function(t){const n=f(this,pt).failed;n&&H(this,st,Xe(()=>{n(f(this,vt),()=>t,()=>()=>{})}))},Ol=function(){const t=f(this,pt).pending;t&&(this.is_pending=!0,H(this,Be,Xe(()=>t(f(this,vt)))),ln(()=>{var n=H(this,nn,document.createDocumentFragment()),r=cn();n.append(r),H(this,ht,re(this,$e,$s).call(this,()=>Xe(()=>f(this,On).call(this,r)))),f(this,gn)===0&&(f(this,vt).before(n),H(this,nn,null),Bn(f(this,Be),()=>{H(this,Be,null)}),re(this,$e,ks).call(this,j))}))},ca=function(){try{if(this.is_pending=this.has_pending_snippet(),H(this,gn,0),H(this,jn,0),H(this,ht,Xe(()=>{f(this,On).call(this,f(this,vt))})),f(this,gn)>0){var t=H(this,nn,document.createDocumentFragment());Pa(f(this,ht),t);const n=f(this,pt).pending;H(this,Be,Xe(()=>n(f(this,vt))))}else re(this,$e,ks).call(this,j)}catch(n){this.error(n)}},ks=function(t){this.is_pending=!1,t.transfer_effects(f(this,is),f(this,ls))},$s=function(t){var n=V,r=Q,s=ne;_t(f(this,Ye)),xt(f(this,Ye)),cr(f(this,Ye).ctx);try{return Wn.ensure(),t()}catch(a){return $o(a),null}finally{_t(n),xt(r),cr(s)}},da=function(t,n){var r;if(!this.has_pending_snippet()){this.parent&&re(r=this.parent,$e,da).call(r,t,n);return}H(this,gn,f(this,gn)+t),f(this,gn)===0&&(re(this,$e,ks).call(this,n),f(this,Be)&&Bn(f(this,Be),()=>{H(this,Be,null)}),f(this,nn)&&(f(this,vt).before(f(this,nn)),H(this,nn,null)))},ua=function(t){f(this,ht)&&(Le(f(this,ht)),H(this,ht,null)),f(this,Be)&&(Le(f(this,Be)),H(this,Be,null)),f(this,st)&&(Le(f(this,st)),H(this,st,null));var n=f(this,pt).onerror;let r=f(this,pt).failed;var s=!1,a=!1;const i=()=>{if(s){ml();return}s=!0,a&&el(),f(this,st)!==null&&Bn(f(this,st),()=>{H(this,st,null)}),re(this,$e,$s).call(this,()=>{re(this,$e,ca).call(this)})},o=l=>{try{a=!0,n==null||n(l,i),a=!1}catch(v){bn(v,f(this,Ye)&&f(this,Ye).parent)}r&&H(this,st,re(this,$e,$s).call(this,()=>{try{return Xe(()=>{var v=V;v.b=this,v.f|=na,r(f(this,vt),()=>l,()=>i)})}catch(v){return bn(v,f(this,Ye).parent),null}}))};ln(()=>{var l;try{l=this.transform_error(t)}catch(v){bn(v,f(this,Ye)&&f(this,Ye).parent);return}l!==null&&typeof l=="object"&&typeof l.then=="function"?l.then(o,v=>bn(v,f(this,Ye)&&f(this,Ye).parent)):o(l)})};function Ea(e,t,n,r){const s=fs()?dr:ur;var a=e.filter(g=>!g.settled),i=t.map(s);if(i.forEach((g,b)=>{g.label=t[b].toString().replace("() => ","").replaceAll("$.eager(() => ","$state.eager(").replace(/\$\.get\((.+?)\)/g,(_,x)=>x)}),n.length===0&&a.length===0){r(i);return}var o=V,l=Ll(),v=a.length===1?a[0].promise:a.length>1?Promise.all(a.map(g=>g.promise)):null;function m(g){if((o.f&bt)===0){l();try{r([...i,...g])}catch(b){bn(b,o)}As()}}var u=Do();if(n.length===0){v.then(()=>m([])).finally(u);return}function d(){Promise.all(n.map(g=>zl(g))).then(m).catch(g=>bn(g,o)).finally(u)}v?v.then(()=>{l(),d(),As()}):d()}function jl(e,t){Ea(e,[],[],t)}function Ll(){var e=V,t=Q,n=ne,r=j,s=Pt;return function(i=!0){_t(e),xt(t),cr(n),i&&(e.f&bt)===0&&(r==null||r.activate(),r==null||r.apply()),Mr(null),Ss(s)}}async function Ha(e){var t=He;queueMicrotask(()=>{He===t&&Mr(null)});var n=await e;return()=>(Mr(t),queueMicrotask(()=>{He===t&&Mr(null)}),n)}function As(e=!0){_t(null),xt(null),cr(null),e&&(j==null||j.deactivate()),Mr(null),Ss(null)}function Do(){var e=V,t=e.b,n=j,r=!!(t!=null&&t.is_rendered());return t==null||t.update_pending_count(1,n),n.increment(r,e),()=>{t==null||t.update_pending_count(-1,n),n.decrement(r,e)}}let He=null;function Mr(e){He=e}const Rl=new Set;function dr(e){var t=Re|Pe;return V!==null&&(V.f|=mr),{ctx:ne,deps:null,effects:null,equals:xo,f:t,fn:e,reactions:null,rv:0,v:Ee,wv:0,parent:V,ac:null}}const gs=Symbol("obsolete");function zl(e,t,n){let r=V;r===null&&zi();var s=void 0,a=$n(Ee);a.label=e.toString();var i=!Q,o=new Set;return rc(()=>{var g,b;var l=V;He={effect:l,effect_deps:new Set,warned:!1};var v=fo();s=v.promise;try{Promise.resolve(e()).then(v.resolve,_=>{_!==Ls&&v.reject(_)}).finally(As)}catch(_){v.reject(_),As()}{if(He){if(l.deps!==null)for(let _=0;_<Ke;_+=1)He.effect_deps.add(l.deps[_]);if(Oe!==null)for(let _=0;_<Oe.length;_+=1)He.effect_deps.add(Oe[_])}He=null}var m=j;if(i){if((l.f&hr)!==0)var u=Do();if((g=r.b)!=null&&g.is_rendered())(b=m.async_deriveds.get(l))==null||b.reject(gs);else for(const _ of o.values())_.reject(gs);o.add(v),m.async_deriveds.set(l,v)}const d=(_,x=void 0)=>{He=null,u==null||u(),o.delete(v),x!==gs&&(m.activate(),x?(a.f|=xn,vr(a,x)):((a.f&xn)!==0&&(a.f^=xn),vr(a,_)),m.deactivate())};v.promise.then(d,_=>d(null,_||"unknown"))}),zs(()=>{for(const l of o)l.reject(gs)}),a.f|=Rn,new Promise(l=>{function v(m){function u(){m===s?l(a):v(s)}m.then(u,u)}v(s)})}function Oo(e){const t=dr(e);return Qo(t),t}function ur(e){const t=dr(e);return t.equals=_o,t}function Fl(e){var t=e.effects;if(t!==null){e.effects=null;for(var n=0;n<t.length;n+=1)Le(t[n])}}let Ys=[];function Aa(e){var t,n=V,r=e.parent;if(!dn&&r!==null&&e.v!==Ee&&(r.f&(bt|Ge))!==0)return pl(),e.v;_t(r);{let s=fr;Ga(new Set);try{ts.call(Ys,e)&&Hi(),Ys.push(e),e.f&=~Un,Fl(e),t=ni(e)}finally{_t(n),Ga(s),Ys.pop()}}return t}function jo(e){var t=Aa(e);if(!e.equals(t)&&(e.wv=ei(),(!(j!=null&&j.is_fork)||e.deps===null)&&(j!==null?(j.capture(e,t,!0),Cr==null||Cr.capture(e,t,!0)):e.v=t,e.deps===null))){Se(e,Ne);return}dn||(je!==null?(Ma()||j!=null&&j.is_fork)&&je.set(e,t):$a(e))}function Bl(e){var t,n;if(e.effects!==null)for(const r of e.effects)(r.teardown||r.ac)&&((t=r.teardown)==null||t.call(r),(n=r.ac)==null||n.abort(Ls),r.fn!==null&&(r.teardown=Ei),r.ac=null,as(r,0),Ia(r))}function Lo(e){if(e.effects!==null)for(const t of e.effects)t.teardown&&t.fn!==null&&pr(t)}let fr=new Set;const zn=new Map;function Ga(e){fr=e}let Ca=!1;function Hl(){Ca=!0}function $n(e,t){var n={f:0,v:e,reactions:null,equals:xo,rv:0,wv:0};return n}function oe(e,t){const n=$n(e);return Qo(n),n}function Gl(e,t=!1,n=!0){var s;const r=$n(e);return t||(r.equals=_o),xr&&n&&ne!==null&&ne.l!==null&&((s=ne.l).s??(s.s=[])).push(r),r}function P(e,t,n=!1){Q!==null&&(!mt||(Q.f&ns)!==0)&&fs()&&(Q.f&(Re|Mt|Rn|ns))!==0&&(Vt===null||!Vt.has(e))&&Ji();let r=n?It(t):t;return yo(r,e.label),vr(e,r,ws)}function vr(e,t,n=null){var s;if(!e.equals(t)){zn.set(e,dn?t:e.v);var r=Wn.ensure();r.capture(e,t);{if(V!==null){e.updated??(e.updated=new Map);const a=(((s=e.updated.get(""))==null?void 0:s.count)??0)+1;if(e.updated.set("",{error:null,count:a}),a>5){const i=wo("updated at");if(i!==null){let o=e.updated.get(i.stack);o||(o={error:i,count:0},e.updated.set(i.stack,o)),o.count++}}}V!==null&&(e.set_during_effect=!0)}if((e.f&Re)!==0){const a=e;(e.f&Pe)!==0&&Aa(a),je===null&&$a(a)}e.wv=ei(),zo(e,Pe,n),fs()&&V!==null&&(V.f&Ne)!==0&&(V.f&(Dt|kn))===0&&(ft===null?oc([e]):ft.push(e)),!r.is_fork&&fr.size>0&&!Ca&&Ro()}return t}function Ro(){Ca=!1;for(const e of fr){(e.f&Ne)!==0&&Se(e,Wt);let t;try{t=ps(e)}catch{t=!0}t&&pr(e)}fr.clear()}function Va(e,t=1){var n=p(e),r=t===1?n++:n--;return P(e,n),r}function Ir(e){P(e,e.v+1)}function zo(e,t,n){var r=e.reactions;if(r!==null)for(var s=fs(),a=r.length,i=0;i<a;i++){var o=r[i],l=o.f;if(!(!s&&o===V)){var v=(l&Pe)===0;if(v&&Se(o,t),(l&ns)!==0)fr.add(o);else if((l&Re)!==0){var m=o;je==null||je.delete(m),(l&Un)===0&&(l&gt&&(V===null||(V.f&rs)===0)&&(o.f|=Un),zo(m,Wt,n))}else if(v){var u=o;(l&Mt)!==0&&At!==null&&At.add(u),n!==null?n.push(u):Sa(u)}}}}const Vl=/^[a-zA-Z_$][a-zA-Z_$0-9]*$/;function It(e){if(typeof e!="object"||e===null||an in e)return e;const t=ya(e);if(t!==Ti&&t!==Si)return e;var n=new Map,r=_a(e),s=oe(0),a=Hn,i=m=>{if(Hn===a)return m();var u=Q,d=Hn;xt(null),qa(a);var g=m();return xt(u),qa(d),g};r&&(n.set("length",oe(e.length)),e=Kl(e));var o="";let l=!1;function v(m){if(!l){l=!0,o=m,Y(s,`${o} version`);for(const[u,d]of n)Y(d,An(o,u));l=!1}}return new Proxy(e,{defineProperty(m,u,d){(!("value"in d)||d.configurable===!1||d.enumerable===!1||d.writable===!1)&&Xi();var g=n.get(u);return g===void 0?i(()=>{var b=oe(d.value);return n.set(u,b),typeof u=="string"&&Y(b,An(o,u)),b}):P(g,d.value,!0),!0},deleteProperty(m,u){var d=n.get(u);if(d===void 0){if(u in m){const g=i(()=>oe(Ee));n.set(u,g),Ir(s),Y(g,An(o,u))}}else P(d,Ee),Ir(s);return!0},get(m,u,d){var x;if(u===an)return e;if(u===ho)return v;var g=n.get(u),b=u in m;if(g===void 0&&(!b||(x=sn(m,u))!=null&&x.writable)&&(g=i(()=>{var w=It(b?m[u]:Ee),A=oe(w);return Y(A,An(o,u)),A}),n.set(u,g)),g!==void 0){var _=p(g);return _===Ee?void 0:_}return Reflect.get(m,u,d)},getOwnPropertyDescriptor(m,u){var d=Reflect.getOwnPropertyDescriptor(m,u);if(d&&"value"in d){var g=n.get(u);g&&(d.value=p(g))}else if(d===void 0){var b=n.get(u),_=b==null?void 0:b.v;if(b!==void 0&&_!==Ee)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return d},has(m,u){var _;if(u===an)return!0;var d=n.get(u),g=d!==void 0&&d.v!==Ee||Reflect.has(m,u);if(d!==void 0||V!==null&&(!g||(_=sn(m,u))!=null&&_.writable)){d===void 0&&(d=i(()=>{var x=g?It(m[u]):Ee,w=oe(x);return Y(w,An(o,u)),w}),n.set(u,d));var b=p(d);if(b===Ee)return!1}return g},set(m,u,d,g){var M;var b=n.get(u),_=u in m;if(r&&u==="length")for(var x=d;x<b.v;x+=1){var w=n.get(x+"");w!==void 0?P(w,Ee):x in m&&(w=i(()=>oe(Ee)),n.set(x+"",w),Y(w,An(o,x)))}if(b===void 0)(!_||(M=sn(m,u))!=null&&M.writable)&&(b=i(()=>oe(void 0)),Y(b,An(o,u)),P(b,It(d)),n.set(u,b));else{_=b.v!==Ee;var A=i(()=>It(d));P(b,A)}var C=Reflect.getOwnPropertyDescriptor(m,u);if(C!=null&&C.set&&C.set.call(g,d),!_){if(r&&typeof u=="string"){var R=n.get("length"),$=Number(u);Number.isInteger($)&&$>=R.v&&P(R,$+1)}Ir(s)}return!0},ownKeys(m){p(s);var u=Reflect.ownKeys(m).filter(b=>{var _=n.get(b);return _===void 0||_.v!==Ee});for(var[d,g]of n)g.v!==Ee&&!(d in m)&&u.push(d);return u},setPrototypeOf(){Qi()}})}function An(e,t){return typeof t=="symbol"?`${e}[Symbol(${t.description??""})]`:Vl.test(t)?`${e}.${t}`:/^\d+$/.test(t)?`${e}[${t}]`:`${e}['${t}']`}function Fn(e){try{if(e!==null&&typeof e=="object"&&an in e)return e[an]}catch{}return e}function Ul(e,t){return Object.is(Fn(e),Fn(t))}const Wl=new Set(["copyWithin","fill","pop","push","reverse","shift","sort","splice","unshift"]);function Kl(e){return new Proxy(e,{get(t,n,r){var s=Reflect.get(t,n,r);return Wl.has(n)?function(...a){Hl();var i=s.apply(this,a);return Ro(),i}:s}})}function ql(){const e=Array.prototype,t=Array.__svelte_cleanup;t&&t();const{indexOf:n,lastIndexOf:r,includes:s}=e;e.indexOf=function(a,i){const o=n.call(this,a,i);if(o===-1){for(let l=i??0;l<this.length;l+=1)if(Fn(this[l])===a){ys("array.indexOf(...)");break}}return o},e.lastIndexOf=function(a,i){const o=r.call(this,a,i??this.length-1);if(o===-1){for(let l=0;l<=(i??this.length-1);l+=1)if(Fn(this[l])===a){ys("array.lastIndexOf(...)");break}}return o},e.includes=function(a,i){const o=s.call(this,a,i);if(!o){for(let l=0;l<this.length;l+=1)if(Fn(this[l])===a){ys("array.includes(...)");break}}return o},Array.__svelte_cleanup=()=>{e.indexOf=n,e.lastIndexOf=r,e.includes=s}}function T(e,t,n=!0){try{e===t!=(Fn(e)===Fn(t))&&ys(n?"===":"!==")}catch{}return e===t===n}var Ua,Na,Fo,Bo;function Yl(){if(Ua===void 0){Ua=window,Na=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,n=Text.prototype;Fo=sn(t,"firstChild").get,Bo=sn(t,"nextSibling").get,La(e)&&(e[ra]=void 0,e[xs]=null,e[sa]=void 0,e.__e=void 0),La(n)&&(n[Tr]=void 0),e.__svelte_meta=null,ql()}}function cn(e=""){return document.createTextNode(e)}function ss(e){return Fo.call(e)}function vs(e){return Bo.call(e)}function c(e,t){return ss(e)}function ue(e,t=!1){{var n=ss(e);return n instanceof Comment&&n.data===""?vs(n):n}}function h(e,t=1,n=!1){let r=e;for(;t--;)r=vs(r);return r}function Zl(e){e.textContent=""}function Ho(){return!1}function Go(e,t,n){return t==null||t===bo?n?document.createElement(e,{is:n}):document.createElement(e):n?document.createElementNS(t,e,{is:n}):document.createElementNS(t,e)}function Xl(e,t){if(t){const n=document.body;e.autofocus=!0,ln(()=>{document.activeElement===n&&e.focus()})}}let Wa=!1;function Ql(){Wa||(Wa=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n[_s])==null||t.call(n)})},{capture:!0}))}function Rs(e){var t=Q,n=V;xt(null),_t(null);try{return e()}finally{xt(t),_t(n)}}function Jl(e,t,n,r=n){e.addEventListener(t,()=>Rs(n));const s=e[_s];s?e[_s]=()=>{s(),r(!0)}:e[_s]=()=>r(!0),Ql()}function Vo(e){V===null&&(Q===null&&Ki(e),Wi()),dn&&Ui(e)}function ec(e,t){var n=t.last;n===null?t.last=t.first=e:(n.next=e,e.prev=n,t.last=e)}function Ot(e,t){for(var n=V;n!==null&&(n.f&ns)!==0;)n=n.parent;n!==null&&(n.f&Ge)!==0&&(e|=Ge);var r={ctx:ne,deps:null,nodes:null,f:e|Pe|gt,first:null,fn:t,last:null,next:null,parent:n,b:n&&n.b,prev:null,teardown:null,wv:0,ac:null};r.component_function=on,j==null||j.register_created_effect(r);var s=r;if((e&lr)!==0)Xn!==null?Xn.push(r):Wn.ensure().schedule(r);else if(t!==null){try{pr(r)}catch(i){throw Le(r),i}s.deps===null&&s.teardown===null&&s.nodes===null&&s.first===s.last&&(s.f&mr)===0&&(s=s.first,(e&Mt)!==0&&(e&Vn)!==0&&s!==null&&(s.f|=Vn))}if(s!==null&&(s.parent=n,n!==null&&ec(s,n),Q!==null&&(Q.f&Re)!==0&&(e&kn)===0)){var a=Q;(a.effects??(a.effects=[])).push(s)}return r}function Ma(){return Q!==null&&!mt}function zs(e){const t=Ot(us,null);return Se(t,Ne),t.teardown=e,t}function Cs(e){Vo("$effect"),wn(e,"name",{value:"$effect"});var t=V.f,n=!Q&&(t&Dt)!==0&&ne!==null&&!ne.i;if(n){var r=ne;(r.e??(r.e=[])).push(e)}else return Uo(e)}function Uo(e){return Ot(lr|vo,e)}function tc(e){return Vo("$effect.pre"),wn(e,"name",{value:"$effect.pre"}),Ot(us|vo,e)}function nc(e){Wn.ensure();const t=Ot(kn|mr,e);return(n={})=>new Promise(r=>{n.outro?Bn(t,()=>{Le(t),r(void 0)}):(Le(t),r(void 0))})}function Wo(e){return Ot(lr,e)}function rc(e){return Ot(Rn|mr,e)}function Ns(e,t=0){return Ot(us|t,e)}function me(e,t=[],n=[],r=[]){Ea(r,t,n,s=>{Ot(us,()=>{e(...s.map(p))})})}function Fs(e,t=0){var n=Ot(Mt|t,e);return n.dev_stack=Pt,n}function Ko(e,t=0){var n=Ot(wa|t,e);return n.dev_stack=Pt,n}function Xe(e){return Ot(Dt|mr,e)}function qo(e){var t=e.teardown;if(t!==null){const n=dn,r=Q;Ka(!0),xt(null);try{t.call(null)}finally{Ka(n),xt(r)}}}function Ia(e,t=!1){var n=e.first;for(e.first=e.last=null;n!==null;){const s=n.ac;s!==null&&Rs(()=>{s.abort(Ls)});var r=n.next;(n.f&kn)!==0?n.parent=null:Le(n,t),n=r}}function sc(e){for(var t=e.first;t!==null;){var n=t.next;(t.f&Dt)===0&&Le(t),t=n}}function Le(e,t=!0){var n=!1;(t||(e.f&Ni)!==0)&&e.nodes!==null&&e.nodes.end!==null&&(ac(e.nodes.start,e.nodes.end),n=!0),e.f|=Ra,Ia(e,t&&!n),as(e,0);var r=e.nodes&&e.nodes.t;if(r!==null)for(const a of r)a.stop();qo(e),e.f^=Ra,e.f|=bt;var s=e.parent;s!==null&&s.first!==null&&Yo(e),e.component_function=null,e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes=e.ac=e.b=null}function ac(e,t){for(;e!==null;){var n=e===t?null:vs(e);e.remove(),e=n}}function Yo(e){var t=e.parent,n=e.prev,r=e.next;n!==null&&(n.next=r),r!==null&&(r.prev=n),t!==null&&(t.first===e&&(t.first=r),t.last===e&&(t.last=n))}function Bn(e,t,n=!0){var r=[];Zo(e,r,!0);var s=()=>{n&&Le(e),t&&t()},a=r.length;if(a>0){var i=()=>--a||s();for(var o of r)o.out(i)}else s()}function Zo(e,t,n){if((e.f&Ge)===0){e.f^=Ge;var r=e.nodes&&e.nodes.t;if(r!==null)for(const o of r)(o.is_global||n)&&t.push(o);for(var s=e.first;s!==null;){var a=s.next;if((s.f&kn)===0){var i=(s.f&Vn)!==0||(s.f&Dt)!==0&&(e.f&Mt)!==0;Zo(s,t,i?n:!1)}s=a}}}function Ms(e){Xo(e,!0)}function Xo(e,t){if((e.f&Ge)!==0){e.f^=Ge,(e.f&Ne)===0&&(Se(e,Pe),Wn.ensure().schedule(e));for(var n=e.first;n!==null;){var r=n.next,s=(n.f&Vn)!==0||(n.f&Dt)!==0;Xo(n,s?t:!1),n=r}var a=e.nodes&&e.nodes.t;if(a!==null)for(const i of a)(i.is_global||t)&&i.in()}}function Pa(e,t){if(e.nodes)for(var n=e.nodes.start,r=e.nodes.end;n!==null;){var s=n===r?null:vs(n);t.append(n),n=s}}let Ts=!1,dn=!1;function Ka(e){dn=e}let Q=null,mt=!1;function xt(e){Q=e}let V=null;function _t(e){V=e}let Vt=null;function Qo(e){Q!==null&&(Vt??(Vt=new Set)).add(e)}let Oe=null,Ke=0,ft=null;function oc(e){ft=e}let Jo=1,Mn=0,Hn=Mn;function qa(e){Hn=e}function ei(){return++Jo}function ps(e){var t=e.f;if((t&Pe)!==0)return!0;if(t&Re&&(e.f&=~Un),(t&Wt)!==0){for(var n=e.deps,r=n.length,s=0;s<r;s++){var a=n[s];if(ps(a)&&jo(a),a.wv>e.wv)return!0}(t&gt)!==0&&je===null&&Se(e,Ne)}return!1}function ti(e,t,n=!0){var r=e.reactions;if(r!==null&&!(Vt!==null&&Vt.has(e)))for(var s=0;s<r.length;s++){var a=r[s];(a.f&Re)!==0?ti(a,t,!1):t===a&&(n?Se(a,Pe):(a.f&Ne)!==0&&Se(a,Wt),Sa(a))}}function ni(e){var _;var t=Oe,n=Ke,r=ft,s=Q,a=Vt,i=ne,o=mt,l=Hn,v=e.f;Oe=null,Ke=0,ft=null,Q=(v&(Dt|kn))===0?e:null,Vt=null,cr(e.ctx),mt=!1,Hn=++Mn,e.ac!==null&&(Rs(()=>{e.ac.abort(Ls)}),e.ac=null);try{e.f|=rs;var m=e.fn,u=m();e.f|=hr;var d=e.deps,g=j==null?void 0:j.is_fork;if(Oe!==null){var b;if(g||as(e,Ke),d!==null&&Ke>0)for(d.length=Ke+Oe.length,b=0;b<Oe.length;b++)d[Ke+b]=Oe[b];else e.deps=d=Oe;if(Ma()&&(e.f&gt)!==0)for(b=Ke;b<d.length;b++)((_=d[b]).reactions??(_.reactions=[])).push(e)}else!g&&d!==null&&Ke<d.length&&(as(e,Ke),d.length=Ke);if(fs()&&ft!==null&&!mt&&d!==null&&(e.f&(Re|Wt|Pe))===0)for(b=0;b<ft.length;b++)ti(ft[b],e);if(s!==null&&s!==e){if(Mn++,s.deps!==null)for(let x=0;x<n;x+=1)s.deps[x].rv=Mn;if(t!==null)for(const x of t)x.rv=Mn;ft!==null&&(r===null?r=ft:r.push(...ft))}return(e.f&xn)!==0&&(e.f^=xn),u}catch(x){return $o(x)}finally{e.f^=rs,Oe=t,Ke=n,ft=r,Q=s,Vt=a,cr(i),mt=o,Hn=l}}function ic(e,t){let n=t.reactions;if(n!==null){var r=$i.call(n,e);if(r!==-1){var s=n.length-1;s===0?n=t.reactions=null:(n[r]=n[s],n.pop())}}if(n===null&&(t.f&Re)!==0&&(Oe===null||!ts.call(Oe,t))){var a=t;(a.f&gt)!==0&&(a.f^=gt,a.f&=~Un),a.v!==Ee&&$a(a),Bl(a),as(a,0)}}function as(e,t){var n=e.deps;if(n!==null)for(var r=t;r<n.length;r++)ic(e,n[r])}function pr(e){var t=e.f;if((t&bt)===0){Se(e,Ne);var n=V,r=Ts;V=e,Ts=!0;{var s=on;Es(e.component_function);var a=Pt;Ss(e.dev_stack??Pt)}try{(t&(Mt|wa))!==0?sc(e):Ia(e),qo(e);var i=ni(e);e.teardown=typeof i=="function"?i:null,e.wv=Jo;var o;co&&bl&&(e.f&Pe)!==0&&e.deps}finally{Ts=r,V=n,Es(s),Ss(a)}}}async function lc(){await Promise.resolve(),El()}function p(e){var t=e.f,n=(t&Re)!==0;if(Q!==null&&!mt){var r=V!==null&&(V.f&bt)!==0;if(!r&&(Vt===null||!Vt.has(e))){var s=Q.deps;if((Q.f&rs)!==0)e.rv<Mn&&(e.rv=Mn,Oe===null&&s!==null&&s[Ke]===e?Ke++:Oe===null?Oe=[e]:Oe.push(e));else{Q.deps??(Q.deps=[]),ts.call(Q.deps,e)||Q.deps.push(e);var a=e.reactions;a===null?e.reactions=[Q]:ts.call(a,Q)||a.push(Q)}}}{if(!mt&&He&&!He.warned&&(He.effect.f&rs)===0&&!He.effect_deps.has(e)){He.warned=!0,fl(e.label);var i=wo("traced at");i&&console.warn(i)}Rl.delete(e)}if(dn&&zn.has(e))return zn.get(e);if(n){var o=e;if(dn){var l=o.v;return((o.f&Ne)===0&&o.reactions!==null||si(o))&&(l=Aa(o)),zn.set(o,l),l}var v=(o.f&gt)===0&&!mt&&Q!==null&&(Ts||(Q.f&gt)!==0),m=(o.f&hr)===0;ps(o)&&(v&&(o.f|=gt),jo(o)),v&&!m&&(Lo(o),ri(o))}if(je!=null&&je.has(e))return je.get(e);if((e.f&xn)!==0)throw e.v;return e.v}function ri(e){if(e.f|=gt,e.deps!==null)for(const t of e.deps)(t.reactions??(t.reactions=[])).push(e),(t.f&Re)!==0&&(t.f&gt)===0&&(Lo(t),ri(t))}function si(e){if(e.v===Ee)return!0;if(e.deps===null)return!1;for(const t of e.deps)if(zn.has(t)||(t.f&Re)!==0&&si(t))return!0;return!1}function Kn(e){var t=mt;try{return mt=!0,e()}finally{mt=t}}function Cn(e){if(!(typeof e!="object"||!e||e instanceof EventTarget)){if(an in e)fa(e);else if(!Array.isArray(e))for(let t in e){const n=e[t];typeof n=="object"&&n&&an in n&&fa(n)}}}function fa(e,t=new Set){if(typeof e=="object"&&e!==null&&!(e instanceof EventTarget)&&!t.has(e)){t.add(e),e instanceof Date&&e.getTime();for(let r in e)try{fa(e[r],t)}catch{}const n=ya(e);if(n!==Object.prototype&&n!==Array.prototype&&n!==Map.prototype&&n!==Set.prototype&&n!==Date.prototype){const r=uo(n);for(let s in r){const a=r[s].get;if(a)try{a.call(e)}catch{}}}}}function cc(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const dc=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function uc(e){return dc.includes(e)}const fc={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject",novalidate:"noValidate",allowfullscreen:"allowFullscreen",disablepictureinpicture:"disablePictureInPicture",disableremoteplayback:"disableRemotePlayback"};function vc(e){return e=e.toLowerCase(),fc[e]??e}const pc=["touchstart","touchmove"];function hc(e){return pc.includes(e)}function F(e,t,n){return(...r)=>{const s=e(...r);var a=s.nodeType===Di?s.firstChild:s;return ai(a,t,n),s}}function mc(e,t,n){e.__svelte_meta={parent:Pt,loc:{file:t,line:n[0],column:n[1]}},n[2]&&ai(e.firstChild,t,n[2])}function ai(e,t,n){for(var r=0;e&&r<n.length;)e.nodeType===Pi&&mc(e,t,n[r++]),e=e.nextSibling}const In=Symbol("events"),oi=new Set,va=new Set;function ii(e,t,n,r={}){function s(a){if(r.capture||pa.call(t,a),!a.cancelBubble)return Rs(()=>n==null?void 0:n.call(this,a))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?ln(()=>{t.addEventListener(e,s,r)}):t.addEventListener(e,s,r),s}function li(e,t,n,r,s){var a={capture:r,passive:s},i=ii(e,t,n,a);(t===document.body||t===window||t===document||t instanceof HTMLMediaElement)&&zs(()=>{t.removeEventListener(e,i,a)})}function ke(e,t,n){(t[In]??(t[In]={}))[e]=n}function Bs(e){for(var t=0;t<e.length;t++)oi.add(e[t]);for(var n of va)n(e)}let Ya=null;function pa(e){var _,x;var t=this,n=t.ownerDocument,r=e.type,s=((_=e.composedPath)==null?void 0:_.call(e))||[],a=s[0]||e.target;Ya=e;var i=0,o=Ya===e&&e[In];if(o){var l=s.indexOf(o);if(l!==-1&&(t===document||t===window)){e[In]=t;return}var v=s.indexOf(t);if(v===-1)return;l<=v&&(i=l)}if(a=s[i]||e.target,a!==t){wn(e,"currentTarget",{configurable:!0,get(){return a||n}});var m=Q,u=V;xt(null),_t(null);try{for(var d,g=[];a!==null&&a!==t;){try{var b=(x=a[In])==null?void 0:x[r];b!=null&&(!a.disabled||e.target===a)&&b.call(a,e)}catch(w){d?g.push(w):d=w}if(e.cancelBubble)break;i++,a=i<s.length?s[i]:null}if(d){for(let w of g)queueMicrotask(()=>{throw w});throw d}}finally{e[In]=t,delete e.currentTarget,xt(m),_t(u)}}}var io;const Zs=((io=globalThis==null?void 0:globalThis.window)==null?void 0:io.trustedTypes)&&globalThis.window.trustedTypes.createPolicy("svelte-trusted-html",{createHTML:e=>e});function gc(e){return(Zs==null?void 0:Zs.createHTML(e))??e}function ci(e){var t=Go("template");return t.innerHTML=gc(e.replaceAll("<!>","<!---->")),t.content}function Hs(e,t){var n=V;n.nodes===null&&(n.nodes={start:e,end:t,a:null,t:null})}function B(e,t){var n=(t&cl)!==0,r,s=!e.startsWith("<!>");return()=>{r===void 0&&(r=ci(s?e:"<!>"+e),r=ss(r));var a=n||Na?document.importNode(r,!0):r.cloneNode(!0);return Hs(a,a),a}}function bc(e,t,n="svg"){var r=!e.startsWith("<!>"),s=`<${n}>${r?e:"<!>"+e}</${n}>`,a;return()=>{if(!a){var i=ci(s),o=ss(i);a=ss(o)}var l=a.cloneNode(!0);return Hs(l,l),l}}function xc(e,t){return bc(e,t,"svg")}function fe(){var e=document.createDocumentFragment(),t=document.createComment(""),n=cn();return e.append(t,n),Hs(t,n),e}function S(e,t){e!==null&&e.before(t)}function I(e,t){var n=t==null?"":typeof t=="object"?`${t}`:t;n!==(e[Tr]??(e[Tr]=e.nodeValue))&&(e[Tr]=n,e.nodeValue=`${n}`)}function _c(e,t){return yc(e,t)}const bs=new Map;function yc(e,{target:t,anchor:n,props:r={},events:s,context:a,intro:i=!0,transformError:o}){Yl();var l=void 0,v=nc(()=>{var m=n??t.appendChild(cn());Ml(m,{pending:()=>{}},g=>{U({});var b=ne;a&&(b.c=a),s&&(r.$$events=s),l=e(g,r)||{},W()},o);var u=new Set,d=g=>{for(var b=0;b<g.length;b++){var _=g[b];if(!u.has(_)){u.add(_);var x=hc(_);for(const C of[t,document]){var w=bs.get(C);w===void 0&&(w=new Map,bs.set(C,w));var A=w.get(_);A===void 0?(C.addEventListener(_,pa,{passive:x}),w.set(_,1)):w.set(_,A+1)}}}};return d(js(oi)),va.add(d),()=>{var x;for(var g of u)for(const w of[t,document]){var b=bs.get(w),_=b.get(g);--_==0?(w.removeEventListener(g,pa),b.delete(g),b.size===0&&bs.delete(w)):b.set(g,_)}va.delete(d),m!==n&&((x=m.parentNode)==null||x.removeChild(m))}});return wc.set(l,v),l}let wc=new WeakMap;function K(e){e&&Bi(e[k]??"a component",e.name)}function q(){const e=ne==null?void 0:ne.function;function t(n){Fi(n,e[k])}return{$destroy:()=>t("$destroy()"),$on:()=>t("$on(...)"),$set:()=>t("$set(...)")}}var Nt,Bt,at,Ln,cs,ds,Os;class di{constructor(t,n=!0){rt(this,"anchor");G(this,Nt,new Map);G(this,Bt,new Map);G(this,at,new Map);G(this,Ln,new Set);G(this,cs,!0);G(this,ds,t=>{if(f(this,Nt).has(t)){var n=f(this,Nt).get(t),r=f(this,Bt).get(n);if(r)Ms(r),f(this,Ln).delete(n);else{var s=f(this,at).get(n);s&&(Ms(s.effect),f(this,Bt).set(n,s.effect),f(this,at).delete(n),s.fragment.lastChild[Ii]=this.anchor,s.fragment.lastChild.remove(),this.anchor.before(s.fragment),r=s.effect)}for(const[a,i]of f(this,Nt)){if(f(this,Nt).delete(a),a===t)break;const o=f(this,at).get(i);o&&(Le(o.effect),f(this,at).delete(i))}for(const[a,i]of f(this,Bt)){if(a===n||f(this,Ln).has(a))continue;const o=()=>{if(Array.from(f(this,Nt).values()).includes(a)){var v=document.createDocumentFragment();Pa(i,v),v.append(cn()),f(this,at).set(a,{effect:i,fragment:v})}else Le(i);f(this,Ln).delete(a),f(this,Bt).delete(a)};f(this,cs)||!r?(f(this,Ln).add(a),Bn(i,o,!1)):o()}}});G(this,Os,t=>{f(this,Nt).delete(t);const n=Array.from(f(this,Nt).values());for(const[r,s]of f(this,at))n.includes(r)||(Le(s.effect),f(this,at).delete(r))});this.anchor=t,H(this,cs,n)}ensure(t,n){var r=j,s=Ho();if(n&&!f(this,Bt).has(t)&&!f(this,at).has(t))if(s){var a=document.createDocumentFragment(),i=cn();a.append(i),f(this,at).set(t,{effect:Xe(()=>n(i)),fragment:a})}else f(this,Bt).set(t,Xe(()=>n(this.anchor)));if(f(this,Nt).set(r,t),s){for(const[o,l]of f(this,Bt))o===t?r.unskip_effect(l):r.skip_effect(l);for(const[o,l]of f(this,at))o===t?r.unskip_effect(l.effect):r.skip_effect(l.effect);r.oncommit(f(this,ds)),r.ondiscard(f(this,Os))}else f(this,ds).call(this,r)}}Nt=new WeakMap,Bt=new WeakMap,at=new WeakMap,Ln=new WeakMap,cs=new WeakMap,ds=new WeakMap,Os=new WeakMap;function Te(e,t,n=!1){var r=new di(e),s=n?Vn:0;function a(i,o){r.ensure(i,o)}Fs(()=>{var i=!1;t((o,l=0)=>{i=!0,a(l,o)}),i||a(-1,null)},s)}function lt(e,t){return t}function kc(e,t,n){for(var r=[],s=t.length,a,i=t.length,o=0;o<s;o++){let u=t[o];Bn(u,()=>{if(a){if(a.pending.delete(u),a.done.add(u),a.pending.size===0){var d=e.outrogroups;ha(e,js(a.done)),d.delete(a),d.size===0&&(e.outrogroups=null)}}else i-=1},!1)}if(i===0){var l=r.length===0&&n!==null;if(l){var v=n,m=v.parentNode;Zl(m),m.append(v),e.items.clear()}ha(e,t,!l)}else a={pending:new Set(t),done:new Set},(e.outrogroups??(e.outrogroups=new Set)).add(a)}function ha(e,t,n=!0){var r;if(e.pending.size>0){r=new Set;for(const i of e.pending.values())for(const o of i)r.add(e.items.get(o).e)}for(var s=0;s<t.length;s++){var a=t[s];if(r!=null&&r.has(a)){a.f|=Gt;const i=document.createDocumentFragment();Pa(a,i)}else Le(t[s],n)}}var Za;function ct(e,t,n,r,s,a=null){var i=e,o=new Map,l=(t&mo)!==0;if(l){var v=e;i=v.appendChild(cn())}var m=null,u=ur(()=>{var C=n();return _a(C)?C:C==null?[]:js(C)});Y(u,"{#each ...}");var d,g=new Map,b=!0;function _(C){(A.effect.f&bt)===0&&(A.pending.delete(C),A.fallback=m,$c(A,d,i,t,r),m!==null&&(d.length===0?(m.f&Gt)===0?Ms(m):(m.f^=Gt,Ar(m,null,i)):Bn(m,()=>{m=null})))}function x(C){A.pending.delete(C)}var w=Fs(()=>{d=p(u);for(var C=d.length,R=new Set,$=j,M=Ho(),N=0;N<C;N+=1){var Z=d[N],O=r(Z,N);{var te=r(Z,N);O!==te&&Vi(String(N),String(O),String(te))}var z=b?null:o.get(O);z?(z.v&&vr(z.v,Z),z.i&&vr(z.i,N),M&&$.unskip_effect(z.e)):(z=Tc(o,b?i:Za??(Za=cn()),Z,O,N,s,t,n),b||(z.e.f|=Gt),o.set(O,z)),R.add(O)}if(C===0&&a&&!m&&(b?m=Xe(()=>a(i)):(m=Xe(()=>a(Za??(Za=cn()))),m.f|=Gt)),C>R.size&&Sc(d,r),!b)if(g.set($,R),M){for(const[we,le]of o)R.has(we)||$.skip_effect(le.e);$.oncommit(_),$.ondiscard(x)}else _($);p(u)}),A={effect:w,items:o,pending:g,outrogroups:null,fallback:m};b=!1}function wr(e){for(;e!==null&&(e.f&Dt)===0;)e=e.next;return e}function $c(e,t,n,r,s){var te,z,we,le,Ae,Je,yt,wt,ae;var a=(r&rl)!==0,i=t.length,o=e.items,l=wr(e.effect.first),v,m=null,u,d=[],g=[],b,_,x,w;if(a)for(w=0;w<i;w+=1)b=t[w],_=s(b,w),x=o.get(_).e,(x.f&Gt)===0&&((z=(te=x.nodes)==null?void 0:te.a)==null||z.measure(),(u??(u=new Set)).add(x));for(w=0;w<i;w+=1){if(b=t[w],_=s(b,w),x=o.get(_).e,e.outrogroups!==null)for(const E of e.outrogroups)E.pending.delete(x),E.done.delete(x);if((x.f&Ge)!==0&&(Ms(x),a&&((le=(we=x.nodes)==null?void 0:we.a)==null||le.unfix(),(u??(u=new Set)).delete(x))),(x.f&Gt)!==0)if(x.f^=Gt,x===l)Ar(x,null,n);else{var A=m?m.next:l;x===e.effect.last&&(e.effect.last=x.prev),x.prev&&(x.prev.next=x.next),x.next&&(x.next.prev=x.prev),pn(e,m,x),pn(e,x,A),Ar(x,A,n),m=x,d=[],g=[],l=wr(m.next);continue}if(x!==l){if(v!==void 0&&v.has(x)){if(d.length<g.length){var C=g[0],R;m=C.prev;var $=d[0],M=d[d.length-1];for(R=0;R<d.length;R+=1)Ar(d[R],C,n);for(R=0;R<g.length;R+=1)v.delete(g[R]);pn(e,$.prev,M.next),pn(e,m,$),pn(e,M,C),l=C,m=M,w-=1,d=[],g=[]}else v.delete(x),Ar(x,l,n),pn(e,x.prev,x.next),pn(e,x,m===null?e.effect.first:m.next),pn(e,m,x),m=x;continue}for(d=[],g=[];l!==null&&l!==x;)(v??(v=new Set)).add(l),g.push(l),l=wr(l.next);if(l===null)continue}(x.f&Gt)===0&&d.push(x),m=x,l=wr(x.next)}if(e.outrogroups!==null){for(const E of e.outrogroups)E.pending.size===0&&(ha(e,js(E.done)),(Ae=e.outrogroups)==null||Ae.delete(E));e.outrogroups.size===0&&(e.outrogroups=null)}if(l!==null||v!==void 0){var N=[];if(v!==void 0)for(x of v)(x.f&Ge)===0&&N.push(x);for(;l!==null;)(l.f&Ge)===0&&l!==e.fallback&&N.push(l),l=wr(l.next);var Z=N.length;if(Z>0){var O=(r&mo)!==0&&i===0?n:null;if(a){for(w=0;w<Z;w+=1)(yt=(Je=N[w].nodes)==null?void 0:Je.a)==null||yt.measure();for(w=0;w<Z;w+=1)(ae=(wt=N[w].nodes)==null?void 0:wt.a)==null||ae.fix()}kc(e,N,O)}}a&&ln(()=>{var E,J;if(u!==void 0)for(x of u)(J=(E=x.nodes)==null?void 0:E.a)==null||J.apply()})}function Tc(e,t,n,r,s,a,i,o){var l=(i&tl)!==0?(i&sl)===0?Gl(n,!1,!1):$n(n):null,v=(i&nl)!==0?$n(s):null;return l&&(l.trace=()=>{o()[(v==null?void 0:v.v)??s]}),{v:l,i:v,e:Xe(()=>(a(t,l??n,v??s,o),()=>{e.delete(r)}))}}function Ar(e,t,n){if(e.nodes)for(var r=e.nodes.start,s=e.nodes.end,a=t&&(t.f&Gt)===0?t.nodes.start:n;r!==null;){var i=vs(r);if(a.before(r),r===s)return;r=i}}function pn(e,t,n){t===null?e.effect.first=n:t.next=n,n===null?e.effect.last=t:n.prev=t}function Sc(e,t){const n=new Map,r=e.length;for(let s=0;s<r;s++){const a=t(e[s],s);if(n.has(a)){const i=String(n.get(a)),o=String(s);let l=String(a);l.startsWith("[object ")&&(l=null),Gi(i,o,l)}n.set(a,s)}}function ve(e,t,n,r,s){var o;var a=(o=t.$$slots)==null?void 0:o[n],i=!1;a===!0&&(a=t.children,i=!0),a===void 0||a(e,i?()=>r:r)}function Ec(e){const t=e();t&&!(typeof t=="string")&&Ri()}function Ac(e){return e.toString=()=>(Li(),""),e}function pe(e,t){const n=(r,...s)=>{var a=on;Es(e);try{return t(r,...s)}finally{Es(a)}};return Ac(n),n}function Cc(e,t,n,r,s,a){var i=a&&(ne==null?void 0:ne.function[k]),o=null,l=e,v=new di(l,!1);Fs(()=>{const m=t()||null;var u=dl;if(m===null){v.ensure(null,null);return}return v.ensure(m,d=>{if(m){if(o=Go(m,u),a&&(o.__svelte_meta={parent:Pt,loc:{file:i,line:a[0],column:a[1]}}),Hs(o,o),r){var g=null,b=o.appendChild(cn());r(o,b),g==null||g.remove()}V.nodes.end=o,d.before(o)}}),()=>{}},Vn),zs(()=>{})}function Nc(e,t){var n=void 0,r;Ko(()=>{n!==(n=t())&&(r&&(Le(r),r=null),n&&(r=Xe(()=>{Wo(()=>n(e))})))})}function ui(e){var t,n,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e)){var s=e.length;for(t=0;t<s;t++)e[t]&&(n=ui(e[t]))&&(r&&(r+=" "),r+=n)}else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function Mc(){for(var e,t,n=0,r="",s=arguments.length;n<s;n++)(e=arguments[n])&&(t=ui(e))&&(r&&(r+=" "),r+=t);return r}function ma(e){return typeof e=="object"?Mc(e):e??""}const Xa=[...` 	
\r\f \v\uFEFF`];function Ic(e,t,n){var r=e==null?"":""+e;if(n){for(var s of Object.keys(n))if(n[s])r=r?r+" "+s:s;else if(r.length)for(var a=s.length,i=0;(i=r.indexOf(s,i))>=0;){var o=i+a;(i===0||Xa.includes(r[i-1]))&&(o===r.length||Xa.includes(r[o]))?r=(i===0?"":r.substring(0,i))+r.substring(o+1):i=o}}return r===""?null:r}function Qa(e,t=!1){var n=t?" !important;":";",r="";for(var s of Object.keys(e)){var a=e[s];a!=null&&a!==""&&(r+=" "+s+": "+a+n)}return r}function Xs(e){return e[0]!=="-"||e[1]!=="-"?e.toLowerCase():e}function Pc(e,t){if(t){var n="",r,s;if(Array.isArray(t)?(r=t[0],s=t[1]):r=t,e){e=String(e).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var a=!1,i=0,o=!1,l=[];r&&l.push(...Object.keys(r).map(Xs)),s&&l.push(...Object.keys(s).map(Xs));var v=0,m=-1;const _=e.length;for(var u=0;u<_;u++){var d=e[u];if(o?d==="/"&&e[u-1]==="*"&&(o=!1):a?a===d&&(a=!1):d==="/"&&e[u+1]==="*"?o=!0:d==='"'||d==="'"?a=d:d==="("?i++:d===")"&&i--,!o&&a===!1&&i===0){if(d===":"&&m===-1)m=u;else if(d===";"||u===_-1){if(m!==-1){var g=Xs(e.substring(v,m).trim());if(!l.includes(g)){d!==";"&&u++;var b=e.substring(v,u).trim();n+=" "+b+";"}}v=u+1,m=-1}}}}return r&&(n+=Qa(r)),s&&(n+=Qa(s,!0)),n=n.trim(),n===""?null:n}return e==null?null:String(e)}function Ze(e,t,n,r,s,a){var i=e[ra];if(i!==n||i===void 0){var o=Ic(n,r,a);o==null?e.removeAttribute("class"):t?e.className=o:e.setAttribute("class",o),e[ra]=n}else if(a&&s!==a)for(var l in a){var v=!!a[l];(s==null||v!==!!s[l])&&e.classList.toggle(l,v)}return a}function Qs(e,t={},n,r){for(var s in n){var a=n[s];t[s]!==a&&(n[s]==null?e.style.removeProperty(s):e.style.setProperty(s,a,r))}}function ga(e,t,n,r){var s=e[sa];if(s!==t){var a=Pc(t,r);a==null?e.removeAttribute("style"):e.style.cssText=a,e[sa]=t}else r&&(Array.isArray(r)?(Qs(e,n==null?void 0:n[0],r[0]),Qs(e,n==null?void 0:n[1],r[1],"important")):Qs(e,n,r));return r}function ba(e,t,n=!1){if(e.multiple){if(t==null)return;if(!_a(t))return hl();for(var r of e.options)r.selected=t.includes(Ja(r));return}for(r of e.options){var s=Ja(r);if(Ul(s,t)){r.selected=!0;return}}(!n||t!==void 0)&&(e.selectedIndex=-1)}function Dc(e){var t=new MutationObserver(()=>{ba(e,e.__value)});t.observe(e,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["value"]}),zs(()=>{t.disconnect()})}function Ja(e){return"__value"in e?e.__value:e.value}const kr=Symbol("class"),$r=Symbol("style"),fi=Symbol("is custom element"),vi=Symbol("is html"),Oc=ka?"input":"INPUT",jc=ka?"option":"OPTION",Lc=ka?"select":"SELECT";function Rc(e,t){t?e.hasAttribute("selected")||e.setAttribute("selected",""):e.removeAttribute("selected")}function Ut(e,t,n,r){var s=pi(e);s[t]!==(s[t]=n)&&(t==="loading"&&(e[Mi]=n),n==null?e.removeAttribute(t):typeof n!="string"&&hi(e).includes(t)?e[t]=n:e.setAttribute(t,n))}function zc(e,t,n,r,s=!1,a=!1){var i=pi(e),o=i[fi],l=!i[vi],v=t||{},m=e.nodeName===jc;for(var u in t)u in n||(n[u]=null);n.class?n.class=ma(n.class):n[kr]&&(n.class=null),n[$r]&&(n.style??(n.style=null));var d=hi(e);if(e.nodeName===Oc&&"type"in n&&("value"in n||"__value"in n)){var g=n.type;(g!==v.type||g===void 0&&e.hasAttribute("type"))&&(v.type=g,Ut(e,"type",g))}for(const $ in n){let M=n[$];if(m&&$==="value"&&M==null){e.value=e.__value="",v[$]=M;continue}if($==="class"){var b=e.namespaceURI==="http://www.w3.org/1999/xhtml";Ze(e,b,M,r,t==null?void 0:t[kr],n[kr]),v[$]=M,v[kr]=n[kr];continue}if($==="style"){ga(e,M,t==null?void 0:t[$r],n[$r]),v[$]=M,v[$r]=n[$r];continue}var _=v[$];if(!(M===_&&!(M===void 0&&e.hasAttribute($)))){v[$]=M;var x=$[0]+$[1];if(x!=="$$")if(x==="on"){const N={},Z="$$"+$;let O=$.slice(2);var w=uc(O);if(cc(O)&&(O=O.slice(0,-7),N.capture=!0),!w&&_){if(M!=null)continue;e.removeEventListener(O,v[Z],N),v[Z]=null}if(w)ke(O,e,M),Bs([O]);else if(M!=null){let te=function(z){v[$].call(this,z)};var R=te;v[Z]=ii(O,e,te,N)}}else if($==="style")Ut(e,$,M);else if($==="autofocus")Xl(e,!!M);else if(!o&&($==="__value"||$==="value"&&M!=null))e.value=e.__value=M;else if($==="selected"&&m)Rc(e,M);else{var A=$;l||(A=vc(A));var C=A==="defaultValue"||A==="defaultChecked";if(M==null&&!o&&!C)if(i[$]=null,A==="value"||A==="checked"){let N=e;const Z=t===void 0;if(A==="value"){let O=N.defaultValue;N.removeAttribute(A),N.defaultValue=O,N.value=N.__value=Z?O:null}else{let O=N.defaultChecked;N.removeAttribute(A),N.defaultChecked=O,N.checked=Z?O:!1}}else e.removeAttribute($);else C||d.includes(A)&&(o||typeof M!="string")?(e[A]=M,A in i&&(i[A]=Ee)):typeof M!="function"&&Ut(e,A,M)}}}return v}function eo(e,t,n=[],r=[],s=[],a,i=!1,o=!1){Ea(s,n,r,l=>{var v=void 0,m={},u=e.nodeName===Lc,d=!1;if(Ko(()=>{var b=t(...l.map(p)),_=zc(e,v,b,a,i,o);d&&u&&"value"in b&&ba(e,b.value);for(let w of Object.getOwnPropertySymbols(m))b[w]||Le(m[w]);for(let w of Object.getOwnPropertySymbols(b)){var x=b[w];w.description===ul&&(!v||x!==v[w])&&(m[w]&&Le(m[w]),m[w]=Xe(()=>Nc(e,()=>x))),_[w]=x}v=_}),u){var g=e;Wo(()=>{ba(g,v.value,!0),Dc(g)})}d=!0})}function pi(e){return e[xs]??(e[xs]={[fi]:e.nodeName.includes("-"),[vi]:e.namespaceURI===bo})}var to=new Map;function hi(e){var t=e.getAttribute("is")||e.nodeName,n=to.get(t);if(n)return n;to.set(t,n=[]);for(var r,s=e,a=Element.prototype;a!==s;){r=uo(s);for(var i in r)r[i].set&&i!=="innerHTML"&&i!=="textContent"&&i!=="innerText"&&n.push(i);s=ya(s)}return n}function Is(e,t,n=t){var r=new WeakSet;Jl(e,"input",async s=>{e.type==="checkbox"&&za();var a=s?e.defaultValue:e.value;if(a=Js(e)?ea(a):a,n(a),j!==null&&r.add(j),await lc(),a!==(a=t())){var i=e.selectionStart,o=e.selectionEnd,l=e.value.length;if(e.value=a??"",o!==null){var v=e.value.length;i===o&&o===l&&v>l?(e.selectionStart=v,e.selectionEnd=v):(e.selectionStart=i,e.selectionEnd=Math.min(o,v))}}}),Kn(t)==null&&e.value&&(n(Js(e)?ea(e.value):e.value),j!==null&&r.add(j)),Ns(()=>{e.type==="checkbox"&&za();var s=t();if(e===document.activeElement){var a=j;if(r.has(a))return}Js(e)&&s===ea(e.value)||e.type==="date"&&!s&&!e.value||s!==e.value&&(e.value=s??"")})}function Js(e){var t=e.type;return t==="number"||t==="range"}function ea(e){return e===""?null:+e}function Da(e=!1){const t=ne,n=t.l.u;if(!n)return;let r=()=>Cn(t.s);if(e){let s=0,a={};const i=dr(()=>{let o=!1;const l=t.s;for(const v in l)l[v]!==a[v]&&(a[v]=l[v],o=!0);return o&&s++,s});r=()=>p(i)}n.b.length&&tc(()=>{no(t,r),ta(n.b)}),Cs(()=>{const s=Kn(()=>n.m.map(Ai));return()=>{for(const a of s)typeof a=="function"&&a()}}),n.a.length&&Cs(()=>{no(t,r),ta(n.a)})}function no(e,t){if(e.l.s)for(const n of e.l.s)p(n);t()}const Fc={get(e,t){if(!e.exclude.includes(t))return p(e.version),t in e.special?e.special[t]():e.props[t]},set(e,t,n){if(!(t in e.special)){var r=V;try{_t(e.parent_effect),e.special[t]=it({get[t](){return e.props[t]}},t,go)}finally{_t(r)}}return e.special[t](n),Va(e.version),!0},getOwnPropertyDescriptor(e,t){if(!e.exclude.includes(t)&&t in e.props)return{enumerable:!0,configurable:!0,value:e.props[t]}},deleteProperty(e,t){return e.exclude.includes(t)||(e.exclude.push(t),Va(e.version)),!0},has(e,t){return e.exclude.includes(t)?!1:t in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(t=>!e.exclude.includes(t))}};function ie(e,t){return new Proxy({props:e,exclude:t,special:{},version:$n(0),parent_effect:V},Fc)}const Bc={get(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(yr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r)return r[t]}},set(e,t,n){let r=e.props.length;for(;r--;){let s=e.props[r];yr(s)&&(s=s());const a=sn(s,t);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,t){let n=e.props.length;for(;n--;){let r=e.props[n];if(yr(r)&&(r=r()),typeof r=="object"&&r!==null&&t in r){const s=sn(r,t);return s&&!s.configurable&&(s.configurable=!0),s}}},has(e,t){if(t===an||t===po)return!1;for(let n of e.props)if(yr(n)&&(n=n()),n!=null&&t in n)return!0;return!1},ownKeys(e){const t=[];for(let n of e.props)if(yr(n)&&(n=n()),!!n){for(const r in n)t.includes(r)||t.push(r);for(const r of Object.getOwnPropertySymbols(n))t.includes(r)||t.push(r)}return t}};function he(...e){return new Proxy({props:e},Bc)}function it(e,t,n,r){var R;var s=!xr||(n&ol)!==0,a=(n&il)!==0,i=(n&ll)!==0,o=r,l=!0,v=void 0,m=()=>i&&s?(v??(v=dr(r)),p(v)):(l&&(l=!1,o=i?Kn(r):r),o);let u;if(a){var d=an in e||po in e;u=((R=sn(e,t))==null?void 0:R.set)??(d&&t in e?$=>e[t]=$:void 0)}var g,b=!1;a?[g,b]=Ao(()=>e[t]):g=e[t],g===void 0&&r!==void 0&&(g=m(),u&&(s&&Yi(t),u(g)));var _;if(s?_=()=>{var $=e[t];return $===void 0?m():(l=!0,$)}:_=()=>{var $=e[t];return $!==void 0&&(o=void 0),$===void 0?o:$},s&&(n&go)===0)return _;if(u){var x=e.$$legacy;return(function($,M){return arguments.length>0?((!s||!M||x||b)&&u(M?_():$),$):_()})}var w=!1,A=((n&al)!==0?dr:ur)(()=>(w=!1,_()));A.label=t,a&&p(A);var C=V;return(function($,M){if(arguments.length>0){const N=M?p(A):s&&a?It($):$;return P(A,N),w=!0,o!==void 0&&(o=N),$}return dn&&w||(C.f&bt)!==0?A.v:p(A)})}function ro(e,t,n,r,s,a){jl(t,()=>{var i=!1,o=on==null?void 0:on[k];Ns(()=>{if(!i){var[l,v]=Ao(n);if(!v){var m=r(),u=!1,d=Ns(()=>{u||l[m]});if(u=!0,d.deps===null){var g=`${o}:${s}:${a}`;vl(e,g),i=!0}}}})})}{let e=function(t){if(!(t in globalThis)){let n;Object.defineProperty(globalThis,t,{configurable:!0,get:()=>{if(n!==void 0)return n;Zi(t)},set:r=>{n=r}})}};var Ud=e;e("$state"),e("$effect"),e("$derived"),e("$inspect"),e("$props"),e("$bindable")}function Oa(e){ne===null&&ji("onMount"),xr&&ne.l!==null?Hc(ne).m.push(e):Cs(()=>{const t=Kn(e);if(typeof t=="function")return t})}function Hc(e){var t=e.l;return t.u??(t.u={a:[],b:[],m:[]})}const Gc="5";var lo;typeof window<"u"&&((lo=window.__svelte??(window.__svelte={})).v??(lo.v=new Set)).add(Gc);xl();/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Vc={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const Uc=e=>{for(const t in e)if(t.startsWith("aria-")||t==="role"||t==="title")return!0;return!1};/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 * 
 * Copyright (c) 2026 Lucide Icons and Contributors
 * 
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 * 
 * ---
 * 
 * The following Lucide icons are derived from the Feather project:
 * 
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 * 
 * The MIT License (MIT) (for the icons listed above)
 * 
 * Copyright (c) 2013-present Cole Bemis
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 * 
 */const so=(...e)=>e.filter((t,n,r)=>!!t&&t.trim()!==""&&r.indexOf(t)===n).join(" ").trim();se[k]="node_modules/lucide-svelte/dist/Icon.svelte";var Wc=F(xc("<svg><!><!></svg>"),se[k],[[12,0]]);function se(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]),r=ie(n,["name","color","size","strokeWidth","absoluteStrokeWidth","iconNode"]);U(t,!1,se);let s=it(t,"name",8,void 0),a=it(t,"color",8,"currentColor"),i=it(t,"size",8,24),o=it(t,"strokeWidth",8,2),l=it(t,"absoluteStrokeWidth",8,!1),v=it(t,"iconNode",24,()=>[]);var m={...q()};Da();var u=Wc();eo(u,(b,_,x)=>({...Vc,...b,...r,width:i(),height:i(),stroke:a(),"stroke-width":_,class:x}),[()=>Uc(r)?void 0:{"aria-hidden":"true"},()=>(Cn(l()),Cn(o()),Cn(i()),Kn(()=>l()?Number(o())*24/Number(i()):o())),()=>(Cn(so),Cn(s()),Cn(n),Kn(()=>so("lucide-icon","lucide",s()?`lucide-${s()}`:"",n.class)))]);var d=c(u);y(()=>ct(d,1,v,lt,(b,_)=>{var x=Oo(()=>Ci(p(_),2));let w=()=>p(x)[0];w();let A=()=>p(x)[1];A();var C=fe(),R=ue(C);Ec(w),Cc(R,w,!0,($,M)=>{eo($,()=>({...A()}))},void 0,[34,4]),S(b,C)}),"each",se,33,2);var g=h(d);return ve(g,t,"default",{}),S(e,u),W(m)}Pr[k]="node_modules/lucide-svelte/dist/icons/arrow-right.svelte";function Pr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Pr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M5 12h14"}],["path",{d:"m12 5 7 7-7 7"}]];var s={...q()};return y(()=>se(e,he({name:"arrow-right"},()=>n,{get iconNode(){return r},children:pe(Pr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Pr,64,0,{componentTag:"Icon"}),W(s)}Dr[k]="node_modules/lucide-svelte/dist/icons/arrow-up-right.svelte";function Dr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Dr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]];var s={...q()};return y(()=>se(e,he({name:"arrow-up-right"},()=>n,{get iconNode(){return r},children:pe(Dr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Dr,64,0,{componentTag:"Icon"}),W(s)}Or[k]="node_modules/lucide-svelte/dist/icons/brain.svelte";function Or(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Or);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 18V5"}],["path",{d:"M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"}],["path",{d:"M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"}],["path",{d:"M17.997 5.125a4 4 0 0 1 2.526 5.77"}],["path",{d:"M18 18a4 4 0 0 0 2-7.464"}],["path",{d:"M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"}],["path",{d:"M6 18a4 4 0 0 1-2-7.464"}],["path",{d:"M6.003 5.125a4 4 0 0 0-2.526 5.77"}]];var s={...q()};return y(()=>se(e,he({name:"brain"},()=>n,{get iconNode(){return r},children:pe(Or,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Or,64,0,{componentTag:"Icon"}),W(s)}jr[k]="node_modules/lucide-svelte/dist/icons/building.svelte";function jr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,jr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 10h.01"}],["path",{d:"M12 14h.01"}],["path",{d:"M12 6h.01"}],["path",{d:"M16 10h.01"}],["path",{d:"M16 14h.01"}],["path",{d:"M16 6h.01"}],["path",{d:"M8 10h.01"}],["path",{d:"M8 14h.01"}],["path",{d:"M8 6h.01"}],["path",{d:"M9 22v-3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2"}]];var s={...q()};return y(()=>se(e,he({name:"building"},()=>n,{get iconNode(){return r},children:pe(jr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",jr,64,0,{componentTag:"Icon"}),W(s)}Lr[k]="node_modules/lucide-svelte/dist/icons/calendar.svelte";function Lr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Lr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M8 2v4"}],["path",{d:"M16 2v4"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2"}],["path",{d:"M3 10h18"}]];var s={...q()};return y(()=>se(e,he({name:"calendar"},()=>n,{get iconNode(){return r},children:pe(Lr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Lr,64,0,{componentTag:"Icon"}),W(s)}Rr[k]="node_modules/lucide-svelte/dist/icons/chevron-left.svelte";function Rr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Rr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m15 18-6-6 6-6"}]];var s={...q()};return y(()=>se(e,he({name:"chevron-left"},()=>n,{get iconNode(){return r},children:pe(Rr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Rr,64,0,{componentTag:"Icon"}),W(s)}zr[k]="node_modules/lucide-svelte/dist/icons/chevron-right.svelte";function zr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,zr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m9 18 6-6-6-6"}]];var s={...q()};return y(()=>se(e,he({name:"chevron-right"},()=>n,{get iconNode(){return r},children:pe(zr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",zr,64,0,{componentTag:"Icon"}),W(s)}Fr[k]="node_modules/lucide-svelte/dist/icons/circle-check.svelte";function Fr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Fr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m9 12 2 2 4-4"}]];var s={...q()};return y(()=>se(e,he({name:"circle-check"},()=>n,{get iconNode(){return r},children:pe(Fr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Fr,64,0,{componentTag:"Icon"}),W(s)}Qn[k]="node_modules/lucide-svelte/dist/icons/clock.svelte";function Qn(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Qn);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 6v6l4 2"}]];var s={...q()};return y(()=>se(e,he({name:"clock"},()=>n,{get iconNode(){return r},children:pe(Qn,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Qn,64,0,{componentTag:"Icon"}),W(s)}Br[k]="node_modules/lucide-svelte/dist/icons/cloud.svelte";function Br(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Br);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"}]];var s={...q()};return y(()=>se(e,he({name:"cloud"},()=>n,{get iconNode(){return r},children:pe(Br,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Br,64,0,{componentTag:"Icon"}),W(s)}Hr[k]="node_modules/lucide-svelte/dist/icons/code.svelte";function Hr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Hr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m16 18 6-6-6-6"}],["path",{d:"m8 6-6 6 6 6"}]];var s={...q()};return y(()=>se(e,he({name:"code"},()=>n,{get iconNode(){return r},children:pe(Hr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Hr,64,0,{componentTag:"Icon"}),W(s)}Gr[k]="node_modules/lucide-svelte/dist/icons/compass.svelte";function Gr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Gr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}]];var s={...q()};return y(()=>se(e,he({name:"compass"},()=>n,{get iconNode(){return r},children:pe(Gr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Gr,64,0,{componentTag:"Icon"}),W(s)}_n[k]="node_modules/lucide-svelte/dist/icons/cpu.svelte";function _n(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,_n);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 20v2"}],["path",{d:"M12 2v2"}],["path",{d:"M17 20v2"}],["path",{d:"M17 2v2"}],["path",{d:"M2 12h2"}],["path",{d:"M2 17h2"}],["path",{d:"M2 7h2"}],["path",{d:"M20 12h2"}],["path",{d:"M20 17h2"}],["path",{d:"M20 7h2"}],["path",{d:"M7 20v2"}],["path",{d:"M7 2v2"}],["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2"}],["rect",{x:"8",y:"8",width:"8",height:"8",rx:"1"}]];var s={...q()};return y(()=>se(e,he({name:"cpu"},()=>n,{get iconNode(){return r},children:pe(_n,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",_n,64,0,{componentTag:"Icon"}),W(s)}Vr[k]="node_modules/lucide-svelte/dist/icons/external-link.svelte";function Vr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Vr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 3h6v6"}],["path",{d:"M10 14 21 3"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"}]];var s={...q()};return y(()=>se(e,he({name:"external-link"},()=>n,{get iconNode(){return r},children:pe(Vr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Vr,64,0,{componentTag:"Icon"}),W(s)}Ur[k]="node_modules/lucide-svelte/dist/icons/file-code.svelte";function Ur(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Ur);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5"}],["path",{d:"M10 12.5 8 15l2 2.5"}],["path",{d:"m14 12.5 2 2.5-2 2.5"}]];var s={...q()};return y(()=>se(e,he({name:"file-code"},()=>n,{get iconNode(){return r},children:pe(Ur,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Ur,64,0,{componentTag:"Icon"}),W(s)}Wr[k]="node_modules/lucide-svelte/dist/icons/folder.svelte";function Wr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Wr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"}]];var s={...q()};return y(()=>se(e,he({name:"folder"},()=>n,{get iconNode(){return r},children:pe(Wr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Wr,64,0,{componentTag:"Icon"}),W(s)}Kr[k]="node_modules/lucide-svelte/dist/icons/git-branch.svelte";function Kr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Kr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M15 6a9 9 0 0 0-9 9V3"}],["circle",{cx:"18",cy:"6",r:"3"}],["circle",{cx:"6",cy:"18",r:"3"}]];var s={...q()};return y(()=>se(e,he({name:"git-branch"},()=>n,{get iconNode(){return r},children:pe(Kr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Kr,64,0,{componentTag:"Icon"}),W(s)}Jn[k]="node_modules/lucide-svelte/dist/icons/layers.svelte";function Jn(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Jn);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"}]];var s={...q()};return y(()=>se(e,he({name:"layers"},()=>n,{get iconNode(){return r},children:pe(Jn,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Jn,64,0,{componentTag:"Icon"}),W(s)}qr[k]="node_modules/lucide-svelte/dist/icons/mail.svelte";function qr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,qr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2"}]];var s={...q()};return y(()=>se(e,he({name:"mail"},()=>n,{get iconNode(){return r},children:pe(qr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",qr,64,0,{componentTag:"Icon"}),W(s)}Yr[k]="node_modules/lucide-svelte/dist/icons/map-pin.svelte";function Yr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Yr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"}],["circle",{cx:"12",cy:"10",r:"3"}]];var s={...q()};return y(()=>se(e,he({name:"map-pin"},()=>n,{get iconNode(){return r},children:pe(Yr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Yr,64,0,{componentTag:"Icon"}),W(s)}Zr[k]="node_modules/lucide-svelte/dist/icons/pointer.svelte";function Zr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Zr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M22 14a8 8 0 0 1-8 8"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2a2 2 0 0 0-2 2"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v10"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"}]];var s={...q()};return y(()=>se(e,he({name:"pointer"},()=>n,{get iconNode(){return r},children:pe(Zr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Zr,64,0,{componentTag:"Icon"}),W(s)}Xr[k]="node_modules/lucide-svelte/dist/icons/search.svelte";function Xr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Xr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"m21 21-4.34-4.34"}],["circle",{cx:"11",cy:"11",r:"8"}]];var s={...q()};return y(()=>se(e,he({name:"search"},()=>n,{get iconNode(){return r},children:pe(Xr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Xr,64,0,{componentTag:"Icon"}),W(s)}Gn[k]="node_modules/lucide-svelte/dist/icons/send.svelte";function Gn(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Gn);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"}],["path",{d:"m21.854 2.147-10.94 10.939"}]];var s={...q()};return y(()=>se(e,he({name:"send"},()=>n,{get iconNode(){return r},children:pe(Gn,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Gn,64,0,{componentTag:"Icon"}),W(s)}Qr[k]="node_modules/lucide-svelte/dist/icons/server.svelte";function Qr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Qr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18"}]];var s={...q()};return y(()=>se(e,he({name:"server"},()=>n,{get iconNode(){return r},children:pe(Qr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Qr,64,0,{componentTag:"Icon"}),W(s)}Jr[k]="node_modules/lucide-svelte/dist/icons/shield.svelte";function Jr(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,Jr);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"}]];var s={...q()};return y(()=>se(e,he({name:"shield"},()=>n,{get iconNode(){return r},children:pe(Jr,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",Jr,64,0,{componentTag:"Icon"}),W(s)}er[k]="node_modules/lucide-svelte/dist/icons/sparkles.svelte";function er(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,er);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"}],["path",{d:"M20 2v4"}],["path",{d:"M22 4h-4"}],["circle",{cx:"4",cy:"20",r:"2"}]];var s={...q()};return y(()=>se(e,he({name:"sparkles"},()=>n,{get iconNode(){return r},children:pe(er,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",er,64,0,{componentTag:"Icon"}),W(s)}yn[k]="node_modules/lucide-svelte/dist/icons/terminal.svelte";function yn(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,yn);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M12 19h8"}],["path",{d:"m4 17 6-6-6-6"}]];var s={...q()};return y(()=>se(e,he({name:"terminal"},()=>n,{get iconNode(){return r},children:pe(yn,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",yn,64,0,{componentTag:"Icon"}),W(s)}es[k]="node_modules/lucide-svelte/dist/icons/zap.svelte";function es(e,t){K(new.target);const n=ie(t,["children","$$slots","$$events","$$legacy"]);U(t,!1,es);/**
 * @license lucide-svelte v1.0.1 - ISC
 *
 * ISC License
 *
 * Copyright (c) 2026 Lucide Icons and Contributors
 *
 * Permission to use, copy, modify, and/or distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 *
 * ---
 *
 * The following Lucide icons are derived from the Feather project:
 *
 * airplay, alert-circle, alert-octagon, alert-triangle, aperture, arrow-down-circle, arrow-down-left, arrow-down-right, arrow-down, arrow-left-circle, arrow-left, arrow-right-circle, arrow-right, arrow-up-circle, arrow-up-left, arrow-up-right, arrow-up, at-sign, calendar, cast, check, chevron-down, chevron-left, chevron-right, chevron-up, chevrons-down, chevrons-left, chevrons-right, chevrons-up, circle, clipboard, clock, code, columns, command, compass, corner-down-left, corner-down-right, corner-left-down, corner-left-up, corner-right-down, corner-right-up, corner-up-left, corner-up-right, crosshair, database, divide-circle, divide-square, dollar-sign, download, external-link, feather, frown, hash, headphones, help-circle, info, italic, key, layout, life-buoy, link-2, link, loader, lock, log-in, log-out, maximize, meh, minimize, minimize-2, minus-circle, minus-square, minus, monitor, moon, more-horizontal, more-vertical, move, music, navigation-2, navigation, octagon, pause-circle, percent, plus-circle, plus-square, plus, power, radio, rss, search, server, share, shopping-bag, sidebar, smartphone, smile, square, table-2, tablet, target, terminal, trash-2, trash, triangle, tv, type, upload, x-circle, x-octagon, x-square, x, zoom-in, zoom-out
 *
 * The MIT License (MIT) (for the icons listed above)
 *
 * Copyright (c) 2013-present Cole Bemis
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 */const r=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"}]];var s={...q()};return y(()=>se(e,he({name:"zap"},()=>n,{get iconNode(){return r},children:pe(es,(a,i)=>{var o=fe(),l=ue(o);ve(l,t,"default",{},null),S(a,o)}),$$slots:{default:!0}})),"component",es,64,0,{componentTag:"Icon"}),W(s)}const Ie={name:"DANTE",role:"Full-Stack & Mobile Developer",location:"Babil, Hilla, Iraq",bio:"Ahmed Ali (DANTE) — A versatile developer focused on modern web applications, native/cross-platform mobile apps, and refined bot automation.",email:"ssdcv608@gmail.com",github:"https://github.com/ExtraDANTE",telegram:"https://t.me/ExtraDANTE",linkedin:"https://www.linkedin.com/in/extradante"},Kc=`
I'm a versatile developer focused on building high-performance, polished web and mobile solutions.
My capabilities span responsive frontend architectures in React, Next.js, and Vue, feature-rich cross-platform applications in Flutter, and robust server automations.

I prioritize visual feedback, clean component architectures, and shipping apps with smooth native feelings.
`.trim(),mi=[{category:"Front-End Developer (UI/UX Clients)",description:"What is it? The Front-End is the user-facing side of software — everything users see, touch, and interact with in their browser or mobile screen. I specialize in building fully responsive, interactive, and visually polished interfaces. For core JavaScript/TypeScript frameworks, I utilize React, Next.js, Svelte, and Vue.js to construct high-speed web architectures. I also build premium cross-platform and native mobile apps with Flutter (Dart) and native Android (Kotlin, Java).",items:["React","Next.js","Svelte","Vue.js","Flutter","TypeScript","JavaScript","Dart","Kotlin","Java","HTML5","CSS3","SASS"],type:"frontend"},{category:"Back-End Developer (Core APIs & Automations)",description:"What is it? The Back-End is the powerhouse and brain operating behind the scenes — it processes application logic, manages user authentication, queries databases, handles structured performance caching, and hosts custom background automations like automated Telegram bots. I design rapid, highly scalable server modules and secure REST/GraphQL API nodes.",items:["Node.js","Bun","Python","MySQL","PostgreSQL","MongoDB","SQLite","Redis","Shell","zsh"],type:"backend"},{category:"DevOps & Cloud Infrastructure",description:"What is it? DevOps secures, deploys, and maintains live servers and databases so your apps stay online and run smoothly under load. I provision isolated virtualization processes, manage standard container actions, and coordinate robust web deployments.",items:["Docker","Kubernetes","Firebase","Heroku","Linux"],type:"devops"},{category:"Developer Toolkits",description:"What is it? Tools and environments that optimize developer velocity and enable transparent code tracking. I coordinate source code version controls, test integration payloads, and maintain polished development systems.",items:["Git","GitHub","GitLab","Bitbucket","VSCode","Android Studio","Postman"],type:"tools"}],qc=[{role:"Full-Stack & App Developer",company:"Independent",period:"2023 - Present",description:"Developing modern web applications, custom automated bot systems, cross-platform Android & iOS apps (Flutter), and clean developer utilities."}],gi=[{title:"Portfolio",description:"A highly interactive, beautiful personal developer portfolio website showcasing responsive layouts, terminal-like sandboxes, and modern frontend designs.",link:"https://github.com/ExtraDANTE/Portfolio/",tags:["Svelte","Vite","Tailwind CSS","TypeScript"],featured:!0}],Yc="Available for remote full-stack web, mobile app development (Flutter/Native), and automation solutions.",ao=[{name:"package.json",path:"package.json",type:"file",size:"1.4 KB",language:"json",lastCommitMessage:"chore: update dependencies for React, Next.js, and Vue frameworks",lastCommitDate:"5 mins ago",content:`{
  "name": "dante-workspace",
  "version": "1.0.0",
  "private": true,
  "scripts": {
    "dev:next": "next dev",
    "dev:vue": "vite",
    "build": "next build"
  },
  "dependencies": {
    "react": "^18.3.1",
    "next": "^14.2.4",
    "vue": "^3.4.29"
  }
}`},{name:"App.vue",path:"App.vue",type:"file",size:"1.2 KB",language:"html",lastCommitMessage:"feat: design highly reactive front-end dashboard core viewport",lastCommitDate:"Yesterday",content:`<script setup lang="ts">
import { ref } from 'vue';

const activeTab = ref('dashboard');
const message = ref('DANTE Web Workspace');
<\/script>

<template>
  <main class="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6">
    <div class="space-y-4 max-w-md text-center">
      <h1 class="text-3xl font-black tracking-tight text-sky-400">{{ message }}</h1>
      <p class="text-xs text-slate-400 font-semibold leading-relaxed">
        Engineered cleanly under refined client layouts. Highly optimized.
      </p>
    </div>
  </main>
</template>`},{name:"about_me.md",path:"about_me.md",type:"file",size:"1.9 KB",language:"markdown",lastCommitMessage:"docs: refine infrastructure development bio",lastCommitDate:"Just now",content:`# Hello! I'm DANTE

A Software Developer based in Hillah, Babil, Iraq. I specialize in building robust full-stack web applications, custom automated bot architectures, cross-platform Android & iOS apps (Flutter), and clean development utilities.

## Core Philosophy
I focus on user interfaces, developer ergonomics, and clean modular solutions that scale elegantly.

## Developer Toolkit
- **Frontend & App Engineering (React/Vue/Flutter)**
- **Backend Rest Core APIs (Node.js/Express/Next.js)**
- **Database Engineering & Caching (Postgres/MySQL/Redis)**
- **DevOps & Automations (Docker/Linux/zsh)**`}];Rt[k]="src/lib/Navbar.svelte";var Zc=F(B('<header id="navbar-main" class="sticky top-0 z-50 bg-[#1b1c22]/85 backdrop-blur-md border-b border-white/[0.04] transition-all duration-300"><div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between gap-4"><div id="brand-logo" class="flex items-center gap-3"><div class="w-9 h-9 rounded-lg bg-[#14233c] border border-sky-500/20 flex items-center justify-center font-mono font-black text-sky-400 text-sm tracking-widest leading-none">D</div> <div class="text-left"><div class="flex items-center gap-1.5"><span id="brand-name" class="font-bold text-sm text-slate-100 tracking-tight"> </span> <span class="bg-sky-500/10 text-sky-300 border border-sky-400/15 text-[8px] font-mono px-1.5 py-0.5 rounded font-black tracking-wider uppercase">SYSTEMS</span></div> <span class="text-[10px] text-slate-400 font-mono block leading-none mt-1"> </span></div></div> <nav id="nav-element-list" class="hidden md:flex items-center gap-6 text-[11px] font-mono text-slate-400 tracking-wider uppercase font-bold"><a href="#about-philosophy" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> About</a> <a href="#projects" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Work</a> <a href="#interactive-workbench" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Sandbox</a> <a href="#skills-toolkit" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Tech Matrix</a> <a href="#contact-gate" class="hover:text-sky-400 transition-colors flex items-center gap-1"><!> Gateway</a></nav> <div class="flex items-center gap-3 text-[10px] font-mono"><div class="flex items-center gap-2 text-slate-400 bg-slate-950/70 px-3 py-1.5 rounded-md border border-white/[0.04]"><!> <span class="text-slate-500 uppercase tracking-widest text-[9px]">Sys_Time:</span> <span id="nav-pipeline-clock" class="text-sky-400 font-black tracking-wider"> </span></div></div></div></header>'),Rt[k],[[15,0,[[19,4,[[22,8,[[23,12],[28,12,[[29,16,[[30,20],[35,20]]],[41,16]]]]],[48,8,[[52,12],[58,12],[64,12],[70,12],[76,12]]],[84,8,[[85,12,[[89,16],[93,16]]]]]]]]]]);function Rt(e,t){K(new.target),U(t,!0,Rt);let n=it(t,"currentTime",3,"--:--:--");var r={...q()},s=Zc(),a=c(s),i=c(a),o=h(c(i),2),l=c(o),v=c(l),m=c(v),u=h(l,2),d=c(u),g=h(i,2),b=c(g),_=c(b);y(()=>Gr(_,{class:"w-3.5 h-3.5 text-sky-500/80"}),"component",Rt,56,16,{componentTag:"Compass"});var x=h(b,2),w=c(x);y(()=>Jn(w,{class:"w-3.5 h-3.5 text-sky-500/80"}),"component",Rt,62,16,{componentTag:"Layers"});var A=h(x,2),C=c(A);y(()=>yn(C,{class:"w-3.5 h-3.5 text-sky-500/80"}),"component",Rt,68,16,{componentTag:"Terminal"});var R=h(A,2),$=c(R);y(()=>Hr($,{class:"w-3.5 h-3.5 text-sky-500/80"}),"component",Rt,74,16,{componentTag:"Code"});var M=h(R,2),N=c(M);y(()=>qr(N,{class:"w-3.5 h-3.5 text-sky-500/80"}),"component",Rt,80,16,{componentTag:"Mail"});var Z=h(g,2),O=c(Z),te=c(O);y(()=>Qn(te,{class:"w-3.5 h-3.5 text-sky-400"}),"component",Rt,88,16,{componentTag:"Clock"});var z=h(te,4),we=c(z);return me(()=>{I(m,Ie.name),I(d,Ie.location),I(we,n()||"--:--:--")}),S(e,s),W(r)}Jt[k]="src/lib/Hero.svelte";var Xc=F(B('<section id="about-philosophy" class="relative py-24 sm:py-32 border-b border-white/[0.03] overflow-hidden bg-dot"><div class="absolute inset-0 bg-gradient-to-b from-transparent via-[#1b1c22]/40 to-[#1b1c22] pointer-events-none"></div> <div class="relative max-w-6xl mx-auto px-6 z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"><div class="lg:col-span-12 xl:col-span-8 space-y-6 text-left"><div class="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-800 border border-sky-500/20 text-sky-400 rounded-md text-[10px] font-bold font-mono uppercase tracking-wider"><!> <span> </span></div> <h1 class="text-4xl sm:text-6xl font-black text-white tracking-tight leading-[1.05] max-w-4xl">Architecting clean <span class="font-serif italic text-sky-400 font-normal">Web Architectures</span>, custom bots & native mobile systems</h1> <p class="text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl font-medium"> </p> <div class="flex flex-wrap gap-4 pt-4"><a href="#projects" class="bg-sky-500 text-slate-950 font-bold hover:bg-sky-400 text-xs px-6 py-3 rounded-md transition-all shadow-md shadow-sky-500/10 duration-150 cursor-pointer flex items-center gap-1.5 font-mono uppercase tracking-wider"><span>Explore Workspace</span> <!></a> <a href="#contact-gate" class="bg-slate-900 border border-white/10 hover:border-sky-500/40 text-slate-200 font-mono text-xs px-6 py-3 rounded-md transition duration-150 flex items-center gap-1.5 cursor-pointer uppercase tracking-wider font-bold"><span>Transmit Envelope</span> <!></a></div></div> <div class="lg:col-span-12 xl:col-span-4 space-y-4"><div class="bg-slate-900/85 border border-slate-800 rounded-xl p-6 text-left space-y-5 shadow-2xl relative group hover:border-[#17213d] transition-all duration-300"><div class="absolute top-0 right-0 w-32 h-32 bg-sky-500/5 blur-2xl rounded-full pointer-events-none"></div> <div class="flex justify-between items-center text-[10px] font-mono text-slate-500 border-b border-white/[0.04] pb-2.5"><span class="flex items-center gap-1.5 font-bold tracking-widest uppercase"><!> Operator Credentials</span> <span class="text-sky-400 font-bold flex items-center gap-1 font-mono"><span class="w-1.5 h-1.5 rounded-full bg-sky-500 animate-ping"></span> ACTIVE_NODE</span></div> <div class="space-y-3.5 font-mono text-xs"><div class="flex justify-between items-baseline"><span class="text-slate-500 font-bold uppercase text-[10px]">Developer:</span> <span class="text-slate-200 font-black text-sm tracking-tight"> </span></div> <div class="flex justify-between items-baseline"><span class="text-slate-500 font-bold uppercase text-[10px]">Sectors:</span> <span class="text-sky-400 font-black"> </span></div> <div class="flex justify-between items-center pt-2 border-t border-white/[0.02]"><span class="text-slate-500 font-bold uppercase text-[10px]">Source Hub:</span> <a target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"><svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg> <span> </span></a></div> <div class="flex justify-between items-center"><span class="text-slate-500 font-bold uppercase text-[10px]">T-Client:</span> <a target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"><!> <span> </span></a></div> <div class="flex justify-between items-center"><span class="text-slate-500 font-bold uppercase text-[10px]">Linkedin:</span> <a target="_blank" rel="noopener noreferrer" class="text-slate-200 hover:text-sky-400 font-bold flex items-center gap-1.5 transition-colors"><svg class="w-4 h-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> <span> </span></a></div></div></div></div></div></section>'),Jt[k],[[12,0,[[16,4],[20,4,[[23,8,[[24,12,[[28,16]]],[31,12,[[34,35]]],[40,12],[49,12,[[50,16,[[54,20]]],[57,16,[[61,20]]]]]]],[67,8,[[68,12,[[71,16],[75,16,[[78,20],[83,20,[[86,24]]]]],[93,16,[[94,20,[[95,24],[99,24]]],[104,20,[[105,24],[109,24]]],[113,20,[[116,24],[120,24,[[126,28,[[135,32],[138,32]]],[140,28]]]]],[143,20,[[144,24],[148,24,[[155,28]]]]],[158,20,[[159,24],[163,24,[[169,28,[[178,32],[181,32],[182,32]]],[184,28]]]]]]]]]]]]]]]]);function Jt(e,t){K(new.target),U(t,!1,Jt);var n={...q()};Da();var r=Xc(),s=h(c(r),2),a=c(s),i=c(a),o=c(i);y(()=>er(o,{class:"w-3.5 h-3.5 text-sky-400"}),"component",Jt,27,16,{componentTag:"Sparkles"});var l=h(o,2),v=c(l),m=h(i,4),u=c(m),d=h(m,2),g=c(d),b=h(c(g),2);y(()=>Pr(b,{class:"w-4 h-4"}),"component",Jt,55,20,{componentTag:"ArrowRight"});var _=h(g,2),x=h(c(_),2);y(()=>Dr(x,{class:"w-4 h-4 text-sky-400"}),"component",Jt,62,20,{componentTag:"ArrowUpRight"});var w=h(a,2),A=c(w),C=h(c(A),2),R=c(C),$=c(R);y(()=>_n($,{class:"w-3.5 h-3.5 text-sky-500/80"}),"component",Jt,81,24,{componentTag:"Cpu"});var M=h(C,2),N=c(M),Z=h(c(N),2),O=c(Z),te=h(N,2),z=h(c(te),2),we=c(z),le=h(te,2),Ae=h(c(le),2),Je=h(c(Ae),2),yt=c(Je),wt=h(le,2),ae=h(c(wt),2),E=c(ae);y(()=>Gn(E,{class:"w-4 h-4 text-slate-400"}),"component",Jt,154,28,{componentTag:"Send"});var J=h(E,2),_e=c(J),xe=h(wt,2),ee=h(c(xe),2),L=h(c(ee),2),X=c(L);return me((ge,ye)=>{I(v,Yc),I(u,`${Ie.bio} I specialize in shipping visually polished front-ends
                using React, Next.js, and Vue, crafting feature-rich cross-platform
                apps in Flutter, and spinning up highly automated custom servers and
                Telegram bot systems.`),I(O,Ie.name),I(we,Ie.role),Ut(Ae,"href",Ie.github),I(yt,`@${ge??""}`),Ut(ae,"href",Ie.telegram),I(_e,`@${ye??""}`),Ut(ee,"href",Ie.linkedin),I(X,Ie.name)},[()=>Ie.github.split("/").pop(),()=>Ie.telegram.split("/").pop()]),S(e,r),W(n)}Ht[k]="src/lib/About.svelte";var Qc=F(B('<p class="font-semibold"> </p>'),Ht[k],[[40,20]]),Jc=F(B(`<section id="about-creed" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03] text-left relative"><div class="absolute top-1/2 left-1/2 w-[300px] h-[300px] bg-sky-500/5 blur-3xl rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div> <div class="flex items-center gap-4 mb-16"><span class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">Development Creed // Core Philosophy</span> <div class="flex-1 h-[1px] bg-white/[0.05]"></div></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10"><div class="lg:col-span-6 space-y-6"><h2 class="text-2xl sm:text-3.5xl font-extrabold text-white tracking-tight leading-tight">How I architect <span class="font-serif italic text-sky-400 font-normal">resilient applications</span></h2> <div class="text-slate-300 text-sm sm:text-base leading-relaxed space-y-4"></div> <p class="text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">By opting for optimized code, clean state stores, and
                lightweight bundle architectures, my web systems, bot engines,
                and native mobile layouts boot instantaneously and operate
                seamlessly.</p></div> <div class="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6"><div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Optimized Code</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Strict control over component re-renders. Clean React/Vue
                    tree hierarchies and modular Flutter styles.</p></div> <div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-sky-950/40 border border-sky-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Stable Automation</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Resilient custom servers, automated process tasks, and
                    reliable, secure runtime configurations.</p></div> <div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-amber-950/40 border border-amber-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Responsive UX</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Sleek transitions, reactive client models, and
                    high-performance server integrations.</p></div> <div class="p-6 border border-[#111626] rounded-xl bg-slate-900/50 space-y-3 hover:border-sky-500/20 transition-all duration-300"><div class="w-10 h-10 rounded-lg bg-indigo-950/40 border border-indigo-500/10 flex items-center justify-center"><!></div> <h4 class="text-xs font-mono font-bold text-slate-200 uppercase tracking-widest">Keyboard-Driven Tooling</h4> <p class="text-[11px] text-slate-400 leading-relaxed font-bold">Custom terminal simulators and zsh integrations built to
                    streamline modern development workflows.</p></div></div></div></section>`),Ht[k],[[8,0,[[12,4],[16,4,[[17,8],[21,8]]],[24,4,[[27,8,[[28,12,[[31,32]]],[36,12],[43,12]]],[53,8,[[54,12,[[57,16],[62,16],[67,16]]],[73,12,[[76,16],[81,16],[86,16]]],[92,12,[[95,16],[100,16],[105,16]]],[111,12,[[114,16],[119,16],[124,16]]]]]]]]]]);function Ht(e,t){K(new.target),U(t,!1,Ht);const n=Kc.split(`

`);var r={...q()};Da();var s=Jc(),a=h(c(s),4),i=c(a),o=h(c(i),2);y(()=>ct(o,5,()=>n,lt,($,M)=>{var N=Qc(),Z=c(N,!0);me(()=>I(Z,p(M))),S($,N)}),"each",Ht,39,16);var l=h(i,2),v=c(l),m=c(v),u=c(m);y(()=>_n(u,{class:"w-5 h-5 text-sky-400"}),"component",Ht,60,20,{componentTag:"Cpu"});var d=h(v,2),g=c(d),b=c(g);y(()=>Jr(b,{class:"w-5 h-5 text-sky-400"}),"component",Ht,79,20,{componentTag:"Shield"});var _=h(d,2),x=c(_),w=c(x);y(()=>es(w,{class:"w-5 h-5 text-amber-400"}),"component",Ht,98,20,{componentTag:"Zap"});var A=h(_,2),C=c(A),R=c(C);return y(()=>yn(R,{class:"w-5 h-5 text-indigo-400"}),"component",Ht,117,20,{componentTag:"Terminal"}),S(e,s),W(r)}rn[k]="src/lib/Experience.svelte";var ed=F(B(`<div class="relative pl-8 border-l border-white/[0.05] space-y-4 group"><div class="absolute -left-[5.5px] top-[6px] w-2.5 h-2.5 rounded-full bg-slate-950 border border-sky-500/35 group-hover:bg-sky-400 group-hover:border-sky-500/80 transition-all duration-300 shadow-[0_0_10px_rgba(56,189,248,0.1)]"></div> <div class="flex flex-col sm:flex-row justify-between sm:items-baseline gap-2"><div class="space-y-1"><h3 class="text-lg font-black text-white group-hover:text-sky-400 transition-colors duration-300"> </h3> <div class="flex items-center gap-2 text-xs text-sky-400/85 font-mono"><!> <span class="font-bold tracking-wider uppercase"> </span></div></div> <div class="flex items-center gap-1.5 text-[11px] font-mono text-slate-500 font-bold shrink-0 bg-slate-950/60 px-2.5 py-1 rounded border border-white/[0.03]"><!> <span> </span></div></div> <div class="bg-slate-900/40 rounded-xl p-5 border border-white/[0.03] space-y-4"><p class="text-xs sm:text-sm text-slate-300 leading-relaxed font-semibold"> </p> <div class="space-y-2 pt-2 border-t border-white/[0.02]"><div class="flex items-center gap-1.5 text-[10px] font-mono text-slate-400 uppercase tracking-widest font-black"><!> <span>Key Systems Operations Deliverables</span></div> <ul class="space-y-2 pl-4 list-disc text-xs text-slate-400 font-medium leading-relaxed"><li>Formulating the core synchronous MTProto client
                                layers utilizing SQLite sessions persistence.</li> <li>Designing decoupled polyglot child process
                                controller hooks executing securely in CLI/TUI
                                modes.</li> <li>Configuring persistent reproducible nix flasks
                                minimizing server dependencies down to locked
                                hashes.</li></ul></div></div></div>`),rn[k],[[20,12,[[23,16],[27,16,[[30,20,[[31,24],[36,24,[[40,28]]]]],[45,20,[[49,24]]]]],[53,16,[[56,20],[62,20,[[63,24,[[67,28]]],[69,24,[[72,28],[76,28],[81,28]]]]]]]]]]),td=F(B('<section id="experience-timeline" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03] text-left"><div class="flex items-center gap-4 mb-16"><span class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">Chronology of Work</span> <div class="flex-1 h-[1px] bg-white/[0.05]"></div></div> <div class="max-w-4xl space-y-12"></div></section>'),rn[k],[[6,0,[[10,4,[[11,8],[15,8]]],[18,4]]]]);function rn(e,t){K(new.target),U(t,!1,rn);var n={...q()},r=td(),s=h(c(r),2);return y(()=>ct(s,5,()=>qc,lt,(a,i)=>{var o=ed(),l=h(c(o),2),v=c(l),m=c(v),u=c(m,!0);var d=h(m,2),g=c(d);y(()=>jr(g,{class:"w-3.5 h-3.5 shrink-0"}),"component",rn,39,28,{componentTag:"Building"});var b=h(g,2),_=c(b,!0);var x=h(v,2),w=c(x);y(()=>Lr(w,{class:"w-3.5 h-3.5 text-slate-500"}),"component",rn,48,24,{componentTag:"Calendar"});var A=h(w,2),C=c(A,!0);var R=h(l,2),$=c(R),M=c($,!0);var N=h($,2),Z=c(N),O=c(Z);y(()=>_n(O,{class:"w-3.5 h-3.5 text-sky-500"}),"component",rn,66,28,{componentTag:"Cpu"}),me(()=>{I(u,p(i).role),I(_,p(i).company),I(C,p(i).period),I(M,p(i).description)}),S(a,o)}),"each",rn,19,8),S(e,r),W(n)}Qe[k]="src/lib/Projects.svelte";var nd=F(B('<div class="absolute top-4 right-4 flex items-center gap-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-[8px] font-mono px-2 py-0.5 rounded font-black uppercase tracking-wider"><!> <span>Featured</span></div>'),Qe[k],[[41,20,[[45,24]]]]),rd=F(B('<span class="px-2 py-0.5 bg-slate-950 border border-sky-500/10 text-sky-300 rounded text-[9px] font-mono font-bold uppercase tracking-wider"> </span>'),Qe[k],[[74,32]]),sd=F(B('<div class="flex flex-wrap gap-1.5"></div>'),Qe[k],[[72,24]]),ad=F(B('<div class="bg-slate-900/50 border border-slate-800 rounded-xl p-6 flex flex-col justify-between hover:border-sky-500/20 transition-all duration-300 group hover:bg-slate-850/50 relative text-left"><!> <div class="space-y-4"><div class="flex items-center gap-2.5"><div class="w-8 h-8 rounded bg-slate-850 border border-sky-500/15 flex items-center justify-center font-mono font-bold text-xs text-sky-400 uppercase"> </div> <h3 class="font-mono font-black text-lg text-slate-100 group-hover:text-sky-400 transition-colors duration-200"> </h3></div> <p class="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-semibold"> </p></div> <div class="pt-6 border-t border-white/[0.03] mt-6 space-y-4"><!> <div class="flex items-center justify-between text-[11px] font-mono pt-1"><span class="text-slate-500 font-bold">Scope: Open Source</span> <a target="_blank" rel="noopener noreferrer" class="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 font-bold transition-all"><span>Inspect Hub</span> <!></a></div></div></div>'),Qe[k],[[37,12,[[49,16,[[50,20,[[51,24],[56,24]]],[63,20]]],[70,16,[[83,20,[[86,24],[89,24,[[95,28]]]]]]]]]]),od=F(B(`<section id="projects" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03]"><div class="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 text-left"><div class="space-y-2"><span class="text-xs font-mono font-bold tracking-widest text-sky-400 uppercase">Featured Projects &amp; Creations</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">Interactive Web &amp; Mobile Portfolios</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">I design and build responsive web applications, interactive
                layouts, beautiful front-ends, and robust automations.</p></div></div> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div></section>`),Qe[k],[[6,0,[[10,4,[[13,8,[[14,12],[19,12],[24,12]]]]],[33,4]]]]);function Qe(e,t){K(new.target),U(t,!1,Qe);var n={...q()},r=od(),s=h(c(r),2);return y(()=>ct(s,5,()=>gi,lt,(a,i)=>{const o=Y(ur(()=>p(i).featured),"isFeatured");p(o);var l=ad(),v=c(l);{var m=O=>{var te=nd(),z=c(te);y(()=>er(z,{class:"w-2.5 h-2.5"}),"component",Qe,44,24,{componentTag:"Sparkles"}),S(O,te)};y(()=>Te(v,O=>{p(o)&&O(m)}),"if",Qe,40,16)}var u=h(v,2),d=c(u),g=c(d),b=c(g,!0);var _=h(g,2),x=c(_,!0);var w=h(d,2),A=c(w,!0);var C=h(u,2),R=c(C);{var $=O=>{var te=sd();y(()=>ct(te,5,()=>p(i).tags,lt,(z,we)=>{var le=rd(),Ae=c(le,!0);me(()=>I(Ae,p(we))),S(z,le)}),"each",Qe,73,28),S(O,te)};y(()=>Te(R,O=>{p(i).tags&&O($)}),"if",Qe,71,20)}var M=h(R,2),N=h(c(M),2),Z=h(c(N),2);y(()=>Vr(Z,{class:"w-3.5 h-3.5"}),"component",Qe,96,28,{componentTag:"ExternalLink"}),me(O=>{I(b,O),I(x,p(i).title),I(A,p(i).description),Ut(N,"href",p(i).link)},[()=>p(i).title.slice(0,2)]),S(a,l)}),"each",Qe,34,8),S(e,r),W(n)}ot[k]="src/lib/Skills.svelte";var id=F(B("<span> </span>"),ot[k],[[95,28]]),ld=F(B('<div><div class="space-y-4"><div class="flex items-center gap-3.5 border-b border-white/[0.03] pb-4"><div class="p-2.5 bg-slate-950/50 rounded-xl border border-white/[0.02]"><!></div> <div><h4 class="text-sm font-mono font-black text-slate-100 uppercase tracking-widest leading-none mb-1"> </h4> <span class="text-[9px] font-mono text-slate-500 uppercase font-black"> </span></div></div> <p class="text-xs sm:text-sm text-slate-350 leading-relaxed font-semibold"> </p></div> <div class="pt-4 border-t border-white/[0.02]"><span class="text-[9px] font-mono text-slate-500 uppercase font-black block mb-3">Core Stack:</span> <div class="flex flex-wrap gap-2"></div></div></div>'),ot[k],[[47,12,[[50,16,[[51,20,[[54,24],[67,24,[[68,28],[73,28]]]]],[81,20]]],[88,16,[[89,20],[93,20]]]]]]),cd=F(B(`<section id="skills-toolkit" class="py-24 max-w-6xl mx-auto px-6 border-b border-white/[0.03]"><div class="space-y-2 mb-16 text-left"><span class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block">Toolchain Matrix</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">Development Technologies &amp; Capabilities</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">A clear breakdown of my core sectors, showcasing exactly what
            technologies I work with and how I apply them to real-world
            applications.</p></div> <div class="grid grid-cols-1 lg:grid-cols-2 gap-8"></div></section>`),ot[k],[[6,0,[[10,4,[[11,8],[15,8],[18,8]]],[27,4]]]]);function ot(e,t){K(new.target),U(t,!1,ot);var n={...q()},r=cd(),s=h(c(r),2);return y(()=>ct(s,5,()=>mi,lt,(a,i)=>{const o=Y(ur(()=>T(p(i).type,"frontend")?"hover:border-sky-500/25":T(p(i).type,"backend")?"hover:border-emerald-500/25":T(p(i).type,"devops")?"hover:border-purple-500/25":"hover:border-amber-500/25"),"hoverBorder");p(o);const l=Y(ur(()=>T(p(i).type,"frontend")?"bg-[#14233c]/60 border-sky-500/10 text-sky-300 hover:border-sky-400/35":T(p(i).type,"backend")?"bg-[#0e2d20]/60 border-emerald-500/10 text-emerald-300 hover:border-emerald-400/35":T(p(i).type,"devops")?"bg-[#24143a]/60 border-purple-500/10 text-purple-300 hover:border-purple-400/35":"bg-[#2b2114]/60 border-amber-500/10 text-amber-300 hover:border-amber-400/35"),"badgeClass");p(l);var v=ld(),m=c(v),u=c(m),d=c(u),g=c(d);{var b=z=>{y(()=>_n(z,{class:"w-5.5 h-5.5 text-sky-400"}),"component",ot,58,32,{componentTag:"Cpu"})},_=z=>{y(()=>Qr(z,{class:"w-5.5 h-5.5 text-emerald-400"}),"component",ot,60,32,{componentTag:"Server"})},x=z=>{y(()=>Br(z,{class:"w-5.5 h-5.5 text-purple-400"}),"component",ot,62,32,{componentTag:"Cloud"})},w=z=>{y(()=>yn(z,{class:"w-5.5 h-5.5 text-amber-400"}),"component",ot,64,32,{componentTag:"Terminal"})};y(()=>Te(g,z=>{T(p(i).type,"frontend")?z(b):T(p(i).type,"backend")?z(_,1):T(p(i).type,"devops")?z(x,2):z(w,-1)}),"if",ot,57,28)}var A=h(d,2),C=c(A),R=c(C,!0);var $=h(C,2),M=c($);var N=h(u,2),Z=c(N,!0);var O=h(m,2),te=h(c(O),2);y(()=>ct(te,5,()=>p(i).items,lt,(z,we)=>{var le=id(),Ae=c(le,!0);me(()=>{Ze(le,1,`text-[10px] font-mono font-bold border px-2.5 py-1.5 rounded-lg transition-colors duration-200 ${p(l)??""}`),I(Ae,p(we))}),S(z,le)}),"each",ot,94,24),me(()=>{Ze(v,1,`bg-slate-900/55 border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 transition-all duration-300 hover:bg-slate-850/50 ${p(o)??""} text-left flex flex-col justify-between`),I(R,p(i).category),I(M,`${p(i).type??""} layer`),I(Z,p(i).description)}),S(a,v)}),"each",ot,28,8),S(e,r),W(n)}Pn[k]="src/lib/Contact.svelte";var dd=F(B(`<section id="contact-gate" class="py-24 max-w-4xl mx-auto px-6"><div class="bg-slate-900/70 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl p-8 sm:p-10 relative z-10 text-left"><div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"><div class="space-y-5"><div class="flex justify-between items-center bg-slate-950 p-2.5 rounded border border-[#101625]"><span class="text-[10px] font-mono font-bold text-sky-400 uppercase tracking-widest block">Gateway Telemetry</span> <span class="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span></div> <div class="space-y-2"><h3 class="text-xl font-bold text-white tracking-tight leading-snug">Begin an Integration</h3> <p class="text-xs sm:text-[13px] text-slate-300 leading-relaxed font-semibold">Submit an inquiry to transmit a raw message envelope
                        directly to my inbound mail interface routing terminal.</p></div> <div class="space-y-3 pt-3 border-t border-white/[0.03] text-[11px] font-mono"><div class="flex items-center gap-2.5 text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-white/[0.02]"><!> <div><span class="text-slate-500 block text-[8px] uppercase font-bold leading-tight">Location Server</span> <span class="text-white text-[11px] font-sans font-black"> </span></div></div> <div class="flex items-center gap-2.5 text-slate-300 bg-slate-950/40 p-3 rounded-xl border border-white/[0.02]"><!> <div><span class="text-slate-500 block text-[8px] uppercase font-bold leading-tight">Babil Orbit Time</span> <span class="text-white text-[11px] font-mono font-black"> </span></div></div></div></div> <div class="space-y-4 bg-slate-950/50 p-6 rounded-xl border border-slate-800/60 flex flex-col justify-center"><div class="text-[10px] tracking-wide text-slate-500 font-mono text-center">Direct Endpoint: <span class="block font-mono text-sky-400 bg-slate-950 px-3 py-3 rounded border border-slate-800 mt-2 select-all text-center font-bold text-xs"> </span></div> <div class="space-y-2 pt-2"><button class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono font-bold text-xs px-5 py-3 rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer w-full uppercase tracking-wider"><!> <span>Transmit Payload</span></button> <button class="bg-slate-950 border border-white/10 text-sky-400 px-3 py-2.5 rounded-lg text-[10px] cursor-pointer hover:bg-slate-900 hover:text-sky-300 transition-all w-full font-bold uppercase tracking-widest font-mono"> </button></div></div></div></div></section>`),Pn[k],[[22,0,[[23,4,[[26,8,[[27,12,[[28,16,[[31,20],[36,20]]],[40,16,[[41,20],[46,20]]],[54,16,[[57,20,[[61,24,[[62,28],[66,28]]]]],[73,20,[[77,24,[[78,28],[82,28]]]]]]]]],[96,12,[[99,16,[[103,20]]],[110,16,[[111,20,[[116,24]]],[119,20]]]]]]]]]]]]);function Pn(e,t){K(new.target),U(t,!0,Pn);let n=it(t,"currentTime",3,""),r=Y(oe(!1),"copied");const s=()=>{navigator.clipboard.writeText(Ie.email),P(r,!0),setTimeout(()=>P(r,!1),2e3)},a=()=>{window.location.href="mailto:ssdcv608@gmail.com"};var i={...q()},o=dd(),l=c(o),v=c(l),m=c(v),u=h(c(m),4),d=c(u),g=c(d);y(()=>Yr(g,{class:"w-4 h-4 text-sky-400 shrink-0"}),"component",Pn,60,24,{componentTag:"MapPin"});var b=h(g,2),_=h(c(b),2),x=c(_),w=h(d,2),A=c(w);y(()=>Qn(A,{class:"w-4 h-4 text-sky-400 shrink-0"}),"component",Pn,76,24,{componentTag:"Clock"});var C=h(A,2),R=h(c(C),2),$=c(R),M=h(m,2),N=c(M),Z=h(c(N)),O=c(Z),te=h(N,2),z=c(te),we=c(z);y(()=>Gn(we,{class:"w-4 h-4 text-slate-900"}),"component",Pn,115,24,{componentTag:"Send"});var le=h(z,2),Ae=c(le);return me(Je=>{I(x,Ie.location),I($,Je),I(O,Ie.email),I(Ae,p(r)?"Endpoint Copied!":"Copy Endpoint Address")},[()=>n()?n().split(" ")[0]+" "+n().split(" ")[1]:"Babil Local"]),ke("click",z,a),ke("click",le,s),S(e,o),W(i)}Bs(["click"]);ze[k]="src/components/TerminalWorkbench.svelte";var ud=F(B('<span class="text-[9px] text-slate-600"> </span>'),ze[k],[[199,28]]),fd=F(B('<button><span class="flex items-center gap-1.5"><!> <span> </span></span> <!></button>'),ze[k],[[179,20,[[190,24,[[196,28]]]]]]),vd=F(B('<div class="space-y-1"><div class="flex items-center gap-1 text-slate-400"><span class="text-sky-400 font-bold">&gt;</span> <span> </span></div> <div class="text-slate-300 bg-slate-950/60 p-1.5 rounded border border-slate-900/50 whitespace-pre-wrap text-[9px] leading-relaxed font-mono"> </div></div>'),ze[k],[[239,24,[[240,28,[[241,32],[242,32]]],[244,28]]]]),pd=F(B(`<div class="bg-[#03060f] rounded-2xl border border-slate-800 shadow-2xl overflow-hidden font-mono text-xs text-left"><div class="bg-[#080d1a] px-4 py-3 border-b border-slate-800/80 flex justify-between items-center text-xs"><div class="flex items-center gap-2"><div class="w-3 h-3 bg-rose-500 rounded-full"></div> <div class="w-3 h-3 bg-amber-500 rounded-full"></div> <div class="w-3 h-3 bg-sky-500 rounded-full"></div> <span class="text-slate-400 ml-2">ssh guest@dante.dev -p 3000</span></div> <div class="flex items-center gap-3 text-slate-500 font-mono"><div class="flex items-center gap-1"><!> <span>nixos-flake</span></div></div></div> <div class="grid grid-cols-1 sm:grid-cols-12 min-h-[340px]"><div class="sm:col-span-4 bg-[#050811] p-3 border-r border-slate-800/60 flex flex-col gap-3"><div class="flex justify-between items-center font-bold text-slate-400 uppercase tracking-wider text-[10px] pb-1 border-b border-slate-900"><span>Systems Inventory</span> <!></div> <div class="relative"><!> <input type="text" placeholder="Search cache logs..." class="w-full bg-[#03060d] border border-slate-800 rounded-md p-1.5 pl-6 text-[10px] text-white focus:outline-none focus:border-sky-400/50"/></div> <div class="space-y-1 overflow-y-auto max-h-48 pt-1"></div></div> <div class="sm:col-span-8 bg-slate-950 p-4 flex flex-col justify-between min-h-[340px]"><div class="space-y-2 flex-grow"><div class="flex justify-between items-center text-[10px] text-slate-500 uppercase tracking-widest pb-1 border-b border-slate-900"><span> </span> <span class="text-sky-500"> </span></div> <pre class="text-[11px] text-slate-300 overflow-x-auto whitespace-pre-wrap max-h-48 scrollbar-thin select-text leading-relaxed font-mono"> </pre></div> <div class="space-y-2 border-t border-slate-900 pt-3"><span class="text-[10px] font-bold text-slate-500 tracking-wider">SHELL WORKBENCH METRICS</span> <div class="bg-[#050811] p-3 rounded-lg border border-slate-900 text-[10px] text-slate-400 space-y-2.5 max-h-32 overflow-y-auto font-mono scrollbar-thin"></div> <form class="flex gap-2"><div class="text-sky-400 font-bold self-center">&gt;</div> <input type="text" placeholder="Type 'help' for available calls..." class="flex-1 bg-[#050811] border border-slate-800 rounded-lg px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-sky-400 font-mono"/></form></div></div></div></div>`),ze[k],[[134,0,[[137,4,[[140,8,[[141,12],[142,12],[143,12],[144,12]]],[146,8,[[147,12,[[149,16]]]]]]],[154,4,[[155,8,[[158,12,[[161,16]]],[165,12,[[169,16]]],[177,12]]],[208,8,[[211,12,[[212,16,[[215,20],[216,20]]],[221,16]]],[229,12,[[230,16],[235,16],[253,16,[[254,20],[255,20]]]]]]]]]]]]);function ze(e,t){K(new.target),U(t,!0,ze);let n=it(t,"repoFiles",19,()=>[]),r=it(t,"skillsData",19,()=>[]),s=it(t,"projectsData",19,()=>[]),a=it(t,"selectedFile",15),i=Y(oe(""),"terminalSearch"),o=Y(oe(""),"commandInput");const l=`OS: NixOS 26.05 (Yarara) x86_64
Host: GF63 Thin 11SC (REV:1.0)
Kernel: Linux 6.18.22
Packages: 2369 (nix-system), 3526 (nix-user)
Shell: zsh 5.9
Display (CMN1521): 1920x1080 in 15", 144 Hz
WM: niri (Wayland)
Theme: Base16Kvantum [Qt], adw-gtk3 [GTK2/3]
Icons: Gruvbox-Plus-Dark [Qt]
Font: Source Sans 3 (13pt) [Qt]
Cursor: Bibata-Modern-Ice (24px)
Terminal: alacritty 0.17.0
Terminal Font: JetBrainsMono Nerd Font (13pt)
CPU: 11th Gen Intel(R) Core(TM) i7-11800H
GPU 1: NVIDIA GeForce GTX 1650 Mobile
GPU 2: Intel UHD Graphics @ 1.45 GHz
Memory: 2.95 GiB / 15.33 GiB (19%)`;let v=Y(oe(It([])),"commandsHistory");Oa(()=>{P(v,[{cmd:"neofetch",output:l}],!0)});let m=Y(Oo(()=>n().filter(ee=>ee.name.toLowerCase().includes(p(i).toLowerCase()))),"filteredFiles");const u=ee=>{if(ee.preventDefault(),!p(o).trim())return;const L=p(o).trim().toLowerCase();let X="";if(T(L,"help"))X="Available commands: neofetch, whoami, skills, projects, sysinfo, git log, cat <filename>, clear";else if(T(L,"neofetch"))X=l;else if(T(L,"whoami"))X="DANTE (@ExtraDANTE) - Software Developer from Hillah, Babil, Iraq. I build custom bot systems, full-stack applications, mobile apps, and robust server automation.";else if(T(L,"skills"))X=r().map(ge=>`[${ge.category}] ${ge.items.join(", ")}`).join(`
`);else if(T(L,"projects"))X=s().map(ge=>`• ${ge.title} - ${ge.description}`).join(`
`);else if(T(L,"sysinfo"))X=l;else if(T(L,"git log")||T(L,"git")||T(L,"git status"))X=`Commit d4n7e231 [branch: main] - 3 days ago
Author: Dante <@ExtraDANTE>
    fix: rebuilt secure static front-end assets from updated local codebases

Commit a9f123c8 [branch: main] - 3 days ago
Author: Dante <@ExtraDANTE>
    feat: transition portfolio build process to optimal serverless target for exitinger.github.io

Commit b8c302fa [branch: main] - 1 week ago
Author: Dante <@ExtraDANTE>
    fix: update responsive margins and mobile layouts in sandbox terminal workbench view

Commit c10dcf89 [branch: main] - 1 week ago
Author: Dante <@ExtraDANTE>
    refactor: restructure project inventory and optimize dynamic api configurations

Commit f5e1281e [branch: main] - 2 weeks ago
Author: Dante <@ExtraDANTE>
    style: redesign profile layout into a beautiful high-rigidity dark theme with purpose animations`;else if(L.startsWith("cat ")){const ge=L.substring(4).trim(),ye=n().find(et=>T(et.name.toLowerCase(),ge));ye&&ye.content?(X=ye.content,a(ye)):X=`Error: Live file "${ge}" not cached in sandbox environment. Try: "cat about_me.md"`}else if(T(L,"clear")){P(v,[],!0),P(o,"");return}else X=`zsh: command not found: ${L}. Type "help" to list available system calls.`;P(v,[...p(v),{cmd:p(o),output:X}],!0),P(o,"")};var d={...q()},g=pd(),b=c(g),_=h(c(b),2),x=c(_),w=c(x);y(()=>Kr(w,{class:"w-3.5 h-3.5 text-sky-500"}),"component",ze,148,16,{componentTag:"GitBranch"});var A=h(b,2),C=c(A),R=c(C),$=h(c(R),2);y(()=>yn($,{class:"w-3.5 h-3.5"}),"component",ze,162,16,{componentTag:"Terminal"});var M=h(R,2),N=c(M);y(()=>Xr(N,{class:"absolute left-2 top-2.5 w-3 h-3 text-slate-500"}),"component",ze,166,16,{componentTag:"Search"});var Z=h(N,2),O=h(M,2);y(()=>ct(O,21,()=>p(m),lt,(ee,L)=>{var X=fd(),ge=c(X),ye=c(ge);{var et=De=>{y(()=>Wr(De,{class:"w-3.5 h-3.5 text-amber-500"}),"component",ze,192,32,{componentTag:"Folder"})},kt=De=>{y(()=>Ur(De,{class:"w-3.5 h-3.5 text-indigo-400"}),"component",ze,194,32,{componentTag:"FileCode"})};y(()=>Te(ye,De=>{T(p(L).type,"folder")?De(et):De(kt,-1)}),"if",ze,191,28)}var $t=h(ye,2),Kt=c($t,!0);var Tn=h(ge,2);{var un=De=>{var qt=ud(),Ve=c(qt,!0);me(()=>I(Ve,p(L).size)),S(De,qt)};y(()=>Te(Tn,De=>{p(L).size&&De(un)}),"if",ze,198,24)}me(()=>{Ze(X,1,`w-full flex items-center justify-between text-left p-1.5 rounded-lg text-[11px] transition-colors cursor-pointer ${T(a().name,p(L).name)?"bg-sky-500/10 text-sky-400 border border-sky-500/20":"hover:bg-slate-900 text-slate-400 hover:text-white"}`),I(Kt,p(L).name)}),ke("click",X,function(){p(L).content&&a(p(L))}),S(ee,X)}),"each",ze,178,16);var te=h(C,2),z=c(te),we=c(z),le=c(we),Ae=c(le),Je=h(le,2),yt=c(Je),wt=h(we,2),ae=c(wt),E=h(z,2),J=h(c(E),2);y(()=>ct(J,21,()=>p(v),lt,(ee,L)=>{var X=vd(),ge=c(X),ye=h(c(ge),2),et=c(ye,!0);var kt=h(ge,2),$t=c(kt,!0);me(()=>{I(et,p(L).cmd),I($t,p(L).output)}),S(ee,X)}),"each",ze,238,20);var _e=h(J,2),xe=h(c(_e),2);return me(()=>{I(Ae,`ACTIVE BUFFER: ${a().name??""}`),I(yt,a().language||"text"),I(ae,`
          ${(a().content?a().content:`Inspecting filesystem node: ${a().lastCommitMessage}`)??""}
        `)}),Is(Z,function(){return p(i)},function(L){P(i,L)}),li("submit",_e,u),Is(xe,function(){return p(o)},function(L){P(o,L)}),S(e,g),W(d)}Bs(["click"]);D[k]="src/components/UXLawsSimulator.svelte";var hd=F(B('<button><div class="font-bold text-xs sm:text-sm"> </div> <div class="text-[10px] text-slate-500 font-sans font-medium mt-0.5"> </div></button>'),D[k],[[131,12,[[138,16],[139,16]]]]),md=F(B('<button class="absolute w-3.5 h-3.5 bg-rose-500 rounded-full hover:bg-rose-450 animate-pulse border border-rose-300 cursor-pointer" aria-label="Target point"></button>'),D[k],[[210,32]]),gd=F(B(`<div class="absolute inset-x-0 bottom-4 px-6"><button class="w-full bg-sky-450 hover:bg-sky-400 text-slate-950 font-sans font-black text-xs py-3 rounded-xl shadow-lg transition-transform hover:scale-[1.01] cursor-pointer flex items-center justify-center gap-2 uppercase tracking-wider"><!> <span>Confirm Savings Deposit (After
                                            Layout)</span></button></div>`),D[k],[[217,32,[[218,36,[[225,40]]]]]]),bd=F(B('<div class="absolute inset-0 bg-slate-950/95 flex flex-col items-center justify-center text-center p-4"><span class="text-3xl text-sky-450 font-mono font-black animate-bounce"> </span> <span class="text-xs text-slate-300 font-medium mt-2 max-w-md leading-relaxed font-semibold"> </span></div>'),D[k],[[234,32,[[237,36],[244,36]]]]),xd=F(B(`<div class="space-y-6"><div class="space-y-2"><h3 class="text-xl font-bold font-mono text-white flex items-center gap-2"><!> <span>Fitts's Law Simulator: Touch Target Proximity Arena</span></h3> <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold">Equation: <span class="font-mono text-sky-300">Movement Time = a + b * log2(Distance / Size + 1)</span>. Larger triggers located in natural, comfortable
                        thumbs-reach zones minimize target acquisition failure.
                        Try clicking both configurations to witness speed logs.</p></div> <div class="flex flex-wrap gap-2 font-mono"><button>Cluttered Tiny Corner (Before)</button> <button>Natural Sweep Area (After)</button></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-xl p-4 min-h-[300px] relative overflow-hidden flex flex-col justify-between"><span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-2"> </span> <div class="h-48 relative w-full border border-slate-900 bg-slate-900/10 rounded-lg flex items-center justify-center"><!> <!></div> <div class="flex justify-between items-center text-xs font-mono text-slate-400 pt-2 border-t border-slate-900 mt-2"><span>Registered attempts: <strong class="text-sky-450"> </strong></span> <button class="text-slate-300 hover:text-white underline cursor-pointer text-[11px]">Reset Simulator</button></div></div> <div class="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-4"><div class="space-y-1"><span class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">DIAGNOSTIC TELEMETRY</span> <h4 class="font-extrabold text-white text-base">Anatomical Sweeping Log</h4></div> <div class="space-y-3 font-mono text-xs"><div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Avg completion speed:</span> <span> </span></div> <div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Cognitive fatigue:</span> <span> </span></div></div> <p class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold"> </p></div></div></div>`),D[k],[[152,12,[[153,16,[[154,20,[[158,24]]],[162,20,[[165,34]]]]],[173,16,[[174,20],[183,20]]],[194,16,[[195,20,[[198,24],[206,24],[255,24,[[258,28,[[259,54]]],[263,28]]]]],[272,20,[[275,24,[[276,28],[280,28]]],[285,24,[[286,28,[[289,32],[292,32]]],[300,28,[[303,32],[306,32]]]]],[318,24]]]]]]]]),_d=F(B('<div class="h-44 flex flex-col items-center justify-center text-center"><button class="bg-slate-900 hover:bg-slate-850 border border-slate-800 px-5 py-2.5 rounded-xl text-sky-400 font-mono text-xs font-bold cursor-pointer transition-transform hover:scale-105">Launch Latency Choice Evaluation</button></div>'),D[k],[[388,32,[[391,36]]]]),yd=F(B('<button class="p-2 bg-slate-900 hover:bg-slate-800 border border-slate-850 text-[10px] font-mono rounded-md text-slate-350 cursor-pointer"> </button>'),D[k],[[417,48]]),wd=F(B('<div class="grid grid-cols-2 sm:grid-cols-4 gap-2"></div>'),D[k],[[413,40]]),kd=F(B('<button class="p-3 bg-slate-900 hover:bg-slate-800 border border-slate-800 hover:border-sky-500/50 text-left rounded-xl cursor-pointer"><span class="block text-xs font-bold text-white"> </span> <span class="block text-[10px] text-slate-400 mt-1 leading-snug font-semibold"> </span></button>'),D[k],[[431,48,[[438,52],[442,52]]]]),$d=F(B('<div class="grid grid-cols-1 sm:grid-cols-3 gap-3"></div>'),D[k],[[427,40]]),Td=F(B(`<div class="p-4 bg-slate-900/10 rounded-lg min-h-[176px] flex flex-col justify-center"><p class="text-[11px] font-mono text-amber-400 font-bold mb-4 text-center animate-pulse">CHOOSE ONE TARGET TO LOG RETRIEVAL
                                        TIMES:</p> <!></div>`),D[k],[[402,32,[[405,36]]]]),Sd=F(B('<div class="h-44 flex flex-col items-center justify-center text-center p-4"><span class="text-3xl text-sky-400 font-mono font-black"> </span> <span class="text-xs text-slate-300 mt-2 font-semibold">Selection registered: <span class="text-sky-400"> </span></span> <button class="mt-3 text-xs text-sky-400 underline hover:text-sky-355 cursor-pointer font-bold font-mono">Perform another trial</button></div>'),D[k],[[454,32,[[457,36],[464,36,[[467,62]]],[472,36]]]]),Ed=F(B(`<div class="space-y-6"><div class="space-y-2"><h3 class="text-xl font-bold font-mono text-white flex items-center gap-2"><!> <span>Hick's Law Simulator: Choice Simplification Arena</span></h3> <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold">Every competing menu link added increases selection
                        latency exponentially. Grouping features into discrete
                        paths reduces mental friction. Try choosing options in
                        both layouts.</p></div> <div class="flex flex-wrap gap-2 font-mono"><button>Cluttered 12-Choice Grid (Before)</button> <button>3-Category Pillars (After)</button></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full lg:col-span-8"><div class="col-span-1 lg:col-span-12 bg-slate-950 border border-slate-850 rounded-xl p-4 min-h-[300px] flex flex-col justify-between w-full"><span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-2"> </span> <!> <!> <!> <span class="text-[10px] text-slate-500 font-mono text-center block pt-2 border-t border-slate-905 mt-2">Formula: Choice Latency (T) = b * log2(n + 1)
                                where n is total options.</span></div></div> <div class="lg:col-span-4 bg-slate-900/50 border border-slate-850 border-slate-800 rounded-xl p-5 space-y-4"><div class="space-y-1"><span class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">COGNITIVE REDUCTION LOG</span> <h4 class="font-extrabold text-white text-base">Select Complexity Index</h4></div> <div class="space-y-3 font-mono text-xs"><div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Unfiltered Choices:</span> <span class="text-rose-445 font-bold text-rose-400">3.80s</span></div> <div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Pillar Structures:</span> <span class="text-sky-400 font-bold">0.80s</span></div></div> <p class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold font-sans"> </p></div></div></div>`),D[k],[[331,12,[[332,16,[[333,20,[[337,24]]],[341,20]]],[351,16,[[352,20],[361,20]]],[372,16,[[373,20,[[376,24,[[379,28],[482,28]]]]],[491,20,[[494,24,[[495,28],[499,28]]],[504,24,[[505,28,[[508,32],[511,32]]],[516,28,[[519,32],[522,32]]]]],[527,24]]]]]]]]),Ad=F(B('<form class="space-y-3 text-left"><div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label class="block text-slate-400 mb-1 font-mono">Full Name * <input type="text" placeholder="Arthur Pendragon" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div> <div><label class="block text-slate-400 mb-1 font-mono">Target Email * <input type="email" placeholder="arthur@example.com" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div></div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs"><div><label class="block text-slate-400 mb-1 font-mono">Enterprise Node * <input type="text" placeholder="Aviation Hub Setup" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div> <div><label class="block text-slate-400 mb-1 font-mono">Deployment Budget (USD) * <input type="number" placeholder="100000" class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""/></label></div></div> <div><label class="block text-slate-400 text-xs mb-1 font-mono">Security Requirements * <textarea rows="2" placeholder="Explain systems configurations..." class="w-full bg-slate-900 border border-slate-800 rounded-md p-2 text-white text-xs text-left mt-1 block" required=""></textarea></label></div> <div class="flex justify-end pt-2"><button type="submit" class="bg-rose-600 hover:bg-rose-700 text-white font-mono text-xs px-5 py-2 rounded-lg cursor-pointer">Submit Monolithic Sheet</button></div></form>'),D[k],[[601,28,[[608,32,[[611,36,[[612,40,[[616,44]]]]],[624,36,[[625,40,[[629,44]]]]]]],[638,32,[[641,36,[[642,40,[[646,44]]]]],[654,36,[[655,40,[[659,44]]]]]]],[668,32,[[669,36,[[673,40]]]]],[681,32,[[682,36]]]]]]),Cd=F(B('<div class="space-y-3"><span class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold">Phase 1: Human Persona Setup</span> <div><label class="block text-slate-400 text-xs font-mono mb-1">Your Full Name: <input type="text" placeholder="Arthur Pendragon" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-400 mt-1 block"/></label></div></div>'),D[k],[[722,40,[[723,44],[727,44,[[728,48,[[732,52]]]]]]]]),Nd=F(B('<div class="space-y-3"><span class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold">Phase 2: Contact Gateway</span> <div><label class="block text-slate-400 text-xs font-mono mb-1">Secure Contact Email: <input type="email" placeholder="arthur@example.com" class="w-full bg-slate-950 border border-slate-800 rounded-lg p-2.5 text-xs text-white focus:outline-none focus:border-sky-400 mt-1 block"/></label></div></div>'),D[k],[[746,40,[[747,44],[751,44,[[752,48,[[756,52]]]]]]]]),Md=F(B('<button type="button"> </button>'),D[k],[[780,52]]),Id=F(B(`<div class="space-y-3"><span class="text-[10px] uppercase font-mono text-slate-450 tracking-wider block font-bold">Phase 3: Service Track
                                                Selection</span> <div class="grid grid-cols-2 gap-2 text-xs"></div></div>`),D[k],[[770,40,[[771,44],[776,44]]]]),Pd=F(B(`<div class="space-y-3 text-center"><span class="text-[10px] uppercase font-mono text-sky-400 tracking-wider block">Phase 4: Setup Verified</span> <p class="text-xs text-slate-200">Onboarding credentials completed
                                                cleanly without cognitive
                                                fatigue!</p> <div class="inline-block p-2 bg-slate-950 rounded border border-slate-800 text-[10px] font-mono text-slate-400 text-center font-bold"> </div></div>`),D[k],[[798,40,[[799,44],[803,44],[808,44]]]]),Dd=F(B('<button class="text-slate-500 hover:text-white font-mono text-xs cursor-pointer flex items-center gap-1 font-bold"><!> <span>Back</span></button>'),D[k],[[822,44,[[828,48]]]]),Od=F(B("<div></div>"),D[k],[[831,44]]),jd=F(B('<button class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-all flex items-center gap-1 font-mono uppercase"><span>Next</span> <!></button>'),D[k],[[835,44,[[839,48]]]]),Ld=F(B('<button class="bg-sky-500 hover:bg-sky-400 text-slate-950 font-extrabold text-xs px-5 py-2.5 rounded-xl cursor-pointer transition-all shadow-lg uppercase tracking-wider disabled:opacity-50"> </button>'),D[k],[[843,44]]),Rd=F(B('<div class="space-y-6 w-full"><div class="space-y-2"><div class="flex justify-between text-xs font-mono"><span class="text-sky-450 font-bold text-sky-400"> </span> <span class="text-slate-500"> </span></div> <div class="h-2 w-full bg-slate-900 rounded-full overflow-hidden"><div class="h-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300"></div></div></div> <div class="p-5 bg-slate-900/40 rounded-xl border border-slate-850 min-h-[140px] flex flex-col justify-between"><!> <!> <!> <!> <div class="flex justify-between items-center pt-4 border-t border-slate-900 mt-4"><!> <!></div></div></div>'),D[k],[[691,28,[[692,32,[[693,36,[[696,40],[702,40]]],[706,36,[[709,40]]]]],[718,32,[[818,36]]]]]]),zd=F(B(`<div class="space-y-6"><div class="space-y-2"><h3 class="text-xl font-bold font-mono text-white flex items-center gap-2"><!> <span>Zeigarnik Effect Simulator: Progress-Aware Wizard
                            Onboarding</span></h3> <p class="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-4xl font-semibold">Long, tedious monolithic layout forms trigger instant
                        fatigue. Chunking long processes into progress-tracked
                        wizard steps leverages human completion bias to increase
                        onboarding.</p></div> <div class="flex flex-wrap gap-2 font-mono"><button>Monolithic Form (Before)</button> <button>4-Step Visual Wizard (After)</button></div> <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"><div class="lg:col-span-8 bg-slate-950 border border-slate-850 rounded-xl p-6 min-h-[300px] flex flex-col justify-between"><span class="text-[10px] font-mono text-slate-500 uppercase tracking-widest block border-b border-slate-900 pb-1.5 mb-4"> </span> <!></div> <div class="lg:col-span-4 bg-slate-900/50 border border-slate-800 rounded-xl p-5 space-y-4 w-full"><div class="space-y-1"><span class="text-[10px] font-mono text-sky-400 font-bold uppercase tracking-widest">ONBOARDING RETRO</span> <h4 class="font-extrabold text-white text-base">Progress Drivers</h4></div> <div class="space-y-3 font-mono text-xs font-semibold"><div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Visitor Identity:</span> <span class="text-sky-400 font-bold font-mono">Local Client</span></div> <div class="flex justify-between items-center pb-2 border-b border-slate-800"><span class="text-slate-500">Resolved Node:</span> <span class="text-sky-400 font-bold font-mono text-right max-w-[150px] truncate">Hillah, IQ</span></div></div> <p class="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-850 font-semibold font-sans"> </p></div></div></div>`),D[k],[[540,12,[[541,16,[[542,20,[[546,24]]],[551,20]]],[561,16,[[562,20],[574,20]]],[588,16,[[589,20,[[592,24]]],[859,20,[[862,24,[[863,28],[867,28]]],[872,24,[[873,28,[[876,32],[879,32]]],[883,28,[[886,32],[889,32]]]]],[896,24]]]]]]]]),Fd=F(B('<div id="workbench-container" class="space-y-10 text-left"><div class="flex border-b border-slate-800 overflow-x-auto gap-2"></div> <div class="bg-[#050811] border border-slate-800/80 rounded-2xl overflow-hidden p-6 sm:p-10"><!> <!> <!></div></div>'),D[k],[[128,0,[[129,4],[148,4]]]]);function D(e,t){K(new.target),U(t,!0,D);let n=Y(oe("fitts"),"activePlaygroundTab"),r=Y(oe("before"),"fittsMode"),s=Y(oe(0),"fittsClicks"),a=Y(oe(!1),"fittsSuccess"),i=Y(oe(null),"fittsStartTime"),o=Y(oe(null),"fittsScore"),l=Y(oe(It({x:50,y:50})),"fittsTargetPos"),v=Y(oe("before"),"hicksMode"),m=Y(oe("idle"),"hicksState"),u=Y(oe(null),"hicksSelectedOption"),d=Y(oe(null),"hicksTimer"),g=Y(oe(null),"hicksTimeElapsed"),b=Y(oe("after"),"zeigarnikMode"),_=Y(oe(1),"zeigarnikStep"),x=Y(oe(It({name:"",email:"",choice:""})),"formData"),w=Y(oe(!1),"isTransmitting");Oa(async()=>{T(p(n),"fitts")&&P(i,Date.now(),!0)}),Cs(()=>{T(p(n),"fitts")&&P(i,Date.now(),!0)});const A=()=>{p(a)||(T(p(r),"before")?p(s)<4?(P(s,p(s)+1),P(l,{x:Math.floor(Math.random()*80)+10,y:Math.floor(Math.random()*80)+10},!0)):(P(s,5),P(a,!0),p(i)&&P(o,Date.now()-p(i))):(P(s,1),P(a,!0),p(i)&&P(o,Date.now()-p(i))))},C=ae=>{P(r,ae,!0),P(s,0),P(a,!1),P(i,Date.now(),!0),P(o,null),P(l,{x:50,y:50},!0)},R=ae=>{P(v,ae,!0),P(m,"counting"),P(u,null),P(d,Date.now(),!0),P(g,null)},$=ae=>{T(p(m),"counting",!1)||(P(u,ae,!0),P(m,"success"),p(d)&&P(g,Date.now()-p(d)))},M=()=>{p(_)<4&&P(_,p(_)+1)},N=()=>{if(p(w))return;P(w,!0);const ae=encodeURIComponent("Portfolio Inquiry Gate - Onboarding"),E=encodeURIComponent(`Name: ${p(x).name||"N/A"}
Client Email: ${p(x).email||"N/A"}
Track Selected: ${p(x).choice||"N/A"}`);window.location.href=`mailto:ssdcv608@gmail.com?subject=${ae}&body=${E}`,P(_,1),P(x,{name:"",email:"",choice:""},!0),P(w,!1)};var Z={...q()},O=Fd(),te=c(O);y(()=>ct(te,20,()=>[{id:"fitts",label:"Fitts's Proximity",desc:"Target Sizes & Distances"},{id:"hick",label:"Hick's Choice Reduction",desc:"Clutter-Elimination Trials"},{id:"zeigarnik",label:"Zeigarnik Milestone",desc:"Progress-Aware Wizard"}],lt,(ae,E)=>{var J=hd(),_e=c(J),xe=c(_e,!0);var ee=h(_e,2),L=c(ee,!0);me(()=>{Ze(J,1,`py-3 px-4 font-mono text-left transition border-b-2 shrink-0 cursor-pointer ${T(p(n),E.id)?"border-sky-400 text-sky-400 bg-slate-900/60":"border-transparent text-slate-400 hover:text-white"}`),I(xe,E.label),I(L,E.desc)}),ke("click",J,function(){return P(n,E.id,!0)}),S(ae,J)}),"each",D,130,8);var z=h(te,2),we=c(z);{var le=ae=>{var E=xd(),J=c(E),_e=c(J),xe=c(_e);y(()=>Zr(xe,{class:"w-5 h-5 text-sky-400"}),"component",D,157,24,{componentTag:"Pointer"});var ee=h(J,2),L=c(ee),X=h(L,2),ge=h(ee,2),ye=c(ge),et=c(ye),kt=c(et),$t=h(et,2),Kt=c($t);{var Tn=Ce=>{var We=md();me(()=>ga(We,`left: ${p(l).x??""}%; top: ${p(l).y??""}%; transform: translate(-50%, -50%);`)),ke("click",We,A),S(Ce,We)},un=Ce=>{var We=gd(),Lt=c(We),qn=c(Lt);y(()=>Fr(qn,{class:"w-5 h-5 text-slate-950"}),"component",D,222,40,{componentTag:"CheckCircle2"}),ke("click",Lt,A),S(Ce,We)};y(()=>Te(Kt,Ce=>{T(p(r),"before")?Ce(Tn):Ce(un,-1)}),"if",D,209,28)}var De=h(Kt,2);{var qt=Ce=>{var We=bd(),Lt=c(We),qn=c(Lt),Gs=h(Lt,2),hs=c(Gs);me(Vs=>{I(qn,Vs),I(hs,T(p(r),"before")?"Friction detected! Requires highly artificial movement to strike isolated targets.":"Instant completion achieved! Native sweep region maximizes kinetic optimization.")},[()=>p(o)?`${(p(o)/1e3).toFixed(2)}s`:"0.42s"]),S(Ce,We)};y(()=>Te(De,Ce=>{p(a)&&Ce(qt)}),"if",D,233,28)}var Ve=h($t,2),jt=c(Ve),Sn=h(c(jt)),fn=c(Sn),Me=h(jt,2),dt=h(ye,2),Tt=h(c(dt),2),Yt=c(Tt),Zt=h(c(Yt),2),ut=c(Zt),St=h(Yt,2),Et=h(c(St),2),tt=c(Et),Ue=h(Tt,2),Xt=c(Ue);me(()=>{Ze(L,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${T(p(r),"before")?"bg-rose-600 text-white":"bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"}`),Ze(X,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${T(p(r),"after")?"bg-sky-500 text-slate-950 font-extrabold":"bg-slate-900 hover:bg-slate-800 text-slate-300 border border-slate-800"}`),I(kt,T(p(r),"before")?"STAGE VIEW: MINISCULE TARGET IN THE OFF-SET LIMITS":"STAGE VIEW: FLUID THUMB REACH COGNITIVE ZONE"),I(fn,p(s)),Ze(Zt,1,ma(T(p(r),"before")?"text-rose-400 font-bold":"text-sky-400 font-bold")),I(ut,T(p(r),"before")?"8.50s":"1.20s"),Ze(Et,1,ma(T(p(r),"before")?"text-rose-400 font-bold":"text-sky-400 font-bold")),I(tt,T(p(r),"before")?"Strenuous Drag":"Zero Kinetic Drag"),I(Xt,T(p(r),"before")?"Sub-44px isolated targets require stressful coordination, forcing user drop-offs especially on mobile panels.":"Wide reach triggers structured closely inside physiological sweeps trigger immediate conversions up to 42%.")}),ke("click",L,function(){return C("before")}),ke("click",X,function(){return C("after")}),ke("click",Me,function(){return C(p(r))}),S(ae,E)};y(()=>Te(we,ae=>{T(p(n),"fitts")&&ae(le)}),"if",D,151,8)}var Ae=h(we,2);{var Je=ae=>{var E=Ed(),J=c(E),_e=c(J),xe=c(_e);y(()=>Jn(xe,{class:"w-5 h-5 text-sky-400"}),"component",D,336,24,{componentTag:"Layers"});var ee=h(J,2),L=c(ee),X=h(L,2),ge=h(ee,2),ye=c(ge),et=c(ye),kt=c(et),$t=c(kt),Kt=h(kt,2);{var Tn=Me=>{var dt=_d(),Tt=c(dt);ke("click",Tt,function(){return R(p(v))}),S(Me,dt)};y(()=>Te(Kt,Me=>{T(p(m),"idle")&&Me(Tn)}),"if",D,387,28)}var un=h(Kt,2);{var De=Me=>{var dt=Td(),Tt=h(c(dt),2);{var Yt=ut=>{var St=wd();y(()=>ct(St,20,()=>["Ceramic Cup v1","Copper Jug B90","Nomad Wool Carpet","Glayed Pottery Cl","Arabic Dallah S1","Vase Terracotta","Woven basket craft","Silver craft plate","Traditional incense","Palm leaves box","Clay vessel historical","Handicraft pack"],lt,(Et,tt)=>{var Ue=yd(),Xt=c(Ue,!0);me(()=>I(Xt,tt)),ke("click",Ue,function(){return $(tt)}),S(Et,Ue)}),"each",D,416,44),S(ut,St)},Zt=ut=>{var St=$d();y(()=>ct(St,20,()=>[{label:"Ceramics & Clays",desc:"Clays, stones & historical pots"},{label:"Hand-Hammered Coppers",desc:"Dallahs & silver craft works"},{label:"Traditional Nomad Sadu",desc:"Vibrant woven carpets & mats"}],lt,(Et,tt)=>{var Ue=kd(),Xt=c(Ue),Ce=c(Xt,!0);var We=h(Xt,2),Lt=c(We,!0);me(()=>{I(Ce,tt.label),I(Lt,tt.desc)}),ke("click",Ue,function(){return $(tt.label)}),S(Et,Ue)}),"each",D,430,44),S(ut,St)};y(()=>Te(Tt,ut=>{T(p(v),"before")?ut(Yt):ut(Zt,-1)}),"if",D,412,36)}S(Me,dt)};y(()=>Te(un,Me=>{T(p(m),"counting")&&Me(De)}),"if",D,401,28)}var qt=h(un,2);{var Ve=Me=>{var dt=Sd(),Tt=c(dt),Yt=c(Tt),Zt=h(Tt,2),ut=h(c(Zt)),St=c(ut),Et=h(Zt,2);me(tt=>{I(Yt,tt),I(St,`"${p(u)??""}"`)},[()=>p(g)?`${(p(g)/1e3).toFixed(2)}s`:"0.62s"]),ke("click",Et,function(){return R(p(v))}),S(Me,dt)};y(()=>Te(qt,Me=>{T(p(m),"success")&&Me(Ve)}),"if",D,453,28)}var jt=h(ye,2),Sn=h(c(jt),4),fn=c(Sn);me(()=>{Ze(L,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${T(p(v),"before")?"bg-rose-600 text-white":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),Ze(X,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${T(p(v),"after")?"bg-sky-500 text-slate-950 font-extrabold":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),I($t,T(p(v),"before")?"STAGE VIEW: OVERWHELMING OPTIONS MATRIX":"STAGE VIEW: ARCHITECTURAL FILTERED PILLARS"),I(fn,T(p(v),"before")?"Overwhelming users with infinite parallel options stalls active conversions. They spend visual energy finding coordinates.":"Chunking structures into simple parent segments speeds user paths, converting complex matrices into effortless decisions.")}),ke("click",L,function(){return R("before")}),ke("click",X,function(){return R("after")}),S(ae,E)};y(()=>Te(Ae,ae=>{T(p(n),"hick")&&ae(Je)}),"if",D,330,8)}var yt=h(Ae,2);{var wt=ae=>{var E=zd(),J=c(E),_e=c(J),xe=c(_e);y(()=>Or(xe,{class:"w-5 h-5 text-sky-400"}),"component",D,545,24,{componentTag:"Brain"});var ee=h(J,2),L=c(ee),X=h(L,2),ge=h(ee,2),ye=c(ge),et=c(ye),kt=c(et),$t=h(et,2);{var Kt=Ve=>{var jt=Ad();li("submit",jt,function(fn){fn.preventDefault(),alert("High-friction dispatch complete.")}),S(Ve,jt)},Tn=Ve=>{var jt=Rd(),Sn=c(jt),fn=c(Sn),Me=c(fn),dt=c(Me),Tt=h(Me,2),Yt=c(Tt),Zt=h(fn,2),ut=c(Zt),St=h(Sn,2),Et=c(St);{var tt=ce=>{var be=Cd(),nt=h(c(be),2),vn=c(nt),En=h(c(vn));ro(`bind:value={
                                                            formData.name
                                                        }`,[],()=>p(x),()=>"name",734,56),Is(En,function(){return p(x).name},function(_r){p(x).name=_r}),S(ce,be)};y(()=>Te(Et,ce=>{T(p(_),1)&&ce(tt)}),"if",D,721,36)}var Ue=h(Et,2);{var Xt=ce=>{var be=Nd(),nt=h(c(be),2),vn=c(nt),En=h(c(vn));ro(`bind:value={
                                                            formData.email
                                                        }`,[],()=>p(x),()=>"email",758,56),Is(En,function(){return p(x).email},function(_r){p(x).email=_r}),S(ce,be)};y(()=>Te(Ue,ce=>{T(p(_),2)&&ce(Xt)}),"if",D,745,36)}var Ce=h(Ue,2);{var We=ce=>{var be=Id(),nt=h(c(be),2);y(()=>ct(nt,20,()=>["Full-Stack Architect Hire","Behavioral UX Research","Custom Software Engineering","Secure Server Integration"],lt,(vn,En)=>{var Qt=Md(),_r=c(Qt,!0);me(()=>{Ze(Qt,1,`p-2.5 border rounded-lg text-left text-[11px] font-sans cursor-pointer ${T(p(x).choice,En)?"bg-sky-500/15 border-sky-400/80 text-sky-300":"bg-slate-950 border-slate-850 text-slate-400 hover:border-slate-800"}`),I(_r,En)}),ke("click",Qt,function(){return p(x).choice=En}),S(vn,Qt)}),"each",D,779,48),S(ce,be)};y(()=>Te(Ce,ce=>{T(p(_),3)&&ce(We)}),"if",D,769,36)}var Lt=h(Ce,2);{var qn=ce=>{var be=Pd(),nt=h(c(be),4),vn=c(nt);me(()=>I(vn,`${(p(x).name||"----")??""} • ${(p(x).email||"----")??""} • ${(p(x).choice||"----")??""}`)),S(ce,be)};y(()=>Te(Lt,ce=>{T(p(_),4)&&ce(qn)}),"if",D,797,36)}var Gs=h(Lt,2),hs=c(Gs);{var Vs=ce=>{var be=Dd(),nt=c(be);y(()=>Rr(nt,{class:"w-4 h-4"}),"component",D,827,48,{componentTag:"ChevronLeft"}),ke("click",be,function(){return P(_,p(_)-1)}),S(ce,be)},bi=ce=>{var be=Od();S(ce,be)};y(()=>Te(hs,ce=>{p(_)>1?ce(Vs):ce(bi,-1)}),"if",D,821,40)}var xi=h(hs,2);{var _i=ce=>{var be=jd(),nt=h(c(be),2);y(()=>zr(nt,{class:"w-4 h-4"}),"component",D,840,48,{componentTag:"ChevronRight"}),ke("click",be,M),S(ce,be)},yi=ce=>{var be=Ld(),nt=c(be);me(()=>{be.disabled=p(w),I(nt,p(w)?"Transmitting...":"Submit Onboarding")}),ke("click",be,N),S(ce,be)};y(()=>Te(xi,ce=>{p(_)<4?ce(_i):ce(yi,-1)}),"if",D,834,40)}me(()=>{I(dt,T(p(_),4)?"100% Resolved":`${(p(_)-1)*33}% Completed`),I(Yt,`Step: ${p(_)??""} of 4`),ga(ut,`width: ${(p(_)-1)*33+1}%;`)}),S(Ve,jt)};y(()=>Te($t,Ve=>{T(p(b),"before")?Ve(Kt):Ve(Tn,-1)}),"if",D,600,24)}var un=h(ye,2),De=h(c(un),4),qt=c(De);me(()=>{Ze(L,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${T(p(b),"before")?"bg-rose-600 text-white":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),Ze(X,1,`px-4 py-2 text-xs font-bold rounded-lg cursor-pointer transition-all duration-150 ${T(p(b),"after")?"bg-sky-500 text-slate-950 font-extrabold":"bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300"}`),I(kt,T(p(b),"before")?"STAGE VIEW: DAUNTING MONOLITHIC INVENTORY FORM":"STAGE VIEW: STEP REVEAL COGNITIVE PROGRESS WIZARD"),I(qt,T(p(b),"before")?"Presenting massive inputs simultaneously leads to visual panic. Users immediately abandon forms rather than execute them.":"Revealing progress lines triggers the natural human compulsion to satisfy incomplete milestones, multiplying form completion.")}),ke("click",L,function(){P(b,"before"),P(_,1)}),ke("click",X,function(){P(b,"after"),P(_,1)}),S(ae,E)};y(()=>Te(yt,ae=>{T(p(n),"zeigarnik")&&ae(wt)}),"if",D,539,8)}return S(e,O),W(Z)}Bs(["click"]);qe[k]="src/App.svelte";var Bd=F(B(`<div id="full-portfolio-body" class="min-h-screen bg-[#1b1c22] text-slate-100 font-sans antialiased selection:bg-slate-700 selection:text-white overflow-x-hidden max-w-full relative"><div class="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-3xl pointer-events-none"></div> <div class="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-sky-550/5 rounded-full blur-3xl pointer-events-none"></div> <!> <main class="relative z-10 w-full max-w-full overflow-x-hidden"><!> <!> <!> <!> <section id="interactive-workbench" class="py-24 border-b border-white/[0.03] max-w-6xl mx-auto px-6 overflow-x-hidden"><div class="space-y-2 mb-10 text-left"><span class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block">Operational Telemetry</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">Interactive Systems Shell Sandbox</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">Review cache logs, inspect direct Go config snippets, and
                    execute custom shell parameters inside an active Unix
                    terminal mockup environment.</p></div> <!></section> <section id="ux-playground" class="border-b border-white/[0.03] py-24 bg-dot overflow-x-hidden"><div class="max-w-6xl mx-auto px-6"><div class="space-y-1.5 mb-14 text-left"><span class="text-sky-400 font-bold text-[10px] font-mono uppercase tracking-widest block">Usability Models &amp; Schedulers</span> <h2 class="text-2xl sm:text-3.5xl font-black text-white tracking-tight">System Cognitive &amp; Interactive Simulator</h2> <p class="text-xs sm:text-sm text-slate-400 max-w-xl font-semibold leading-relaxed">Interact with cognitive design laws that prove why clean
                        structures, responsive feedback loops, and reduced
                        choice grids convert users flawlessly.</p></div> <!></div></section> <!> <!></main> <footer class="bg-[#12131a] text-slate-500 text-[10px] sm:text-xs py-12 border-t border-white/[0.02] text-center space-y-3.5 font-mono overflow-x-hidden"><div class="flex justify-center gap-5 text-slate-400 border-b border-white/[0.02] pb-5 max-w-xs mx-auto text-base"><a target="_blank" rel="noopener noreferrer" class="hover:text-sky-400 transition-colors"><svg class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg></a> <a target="_blank" rel="noopener noreferrer" class="hover:text-sky-400 transition-colors"><svg class="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a> <a target="_blank" rel="noopener noreferrer" class="hover:text-sky-450 transition-colors"><!></a></div> <p> </p> <p class="text-[10px] text-slate-650 max-w-2xl mx-auto px-4 font-semibold leading-relaxed">Fast, high-contrast, secure developer presentation hub running
            programmatically under the Babil/Hilla layer. Built cleanly with
            Svelte 5, TypeScript, and Tailwind CSS.</p></footer></div>`),qe[k],[[147,0,[[151,4],[154,4],[160,4,[[169,8,[[173,12,[[174,16],[178,16],[183,16]]]]],[200,8,[[204,12,[[205,16,[[206,20],[210,20],[215,20]]]]]]]]],[233,4,[[236,8,[[239,12,[[245,16,[[254,20],[257,20]]]]],[260,12,[[266,16,[[275,20],[278,20],[279,20]]]]],[282,12]]],[291,8],[295,8]]]]]]);function qe(e,t){K(new.target),U(t,!0,qe);let n=Y(oe(It(gi)),"projectsList"),r=Y(oe(It(ao[2])),"selectedFile"),s=Y(oe(""),"currentTime"),a="idle";Oa(()=>{const le=E=>{const J=E.target;J&&(T(J.tagName,"INPUT")||T(J.tagName,"TEXTAREA"))||E.preventDefault()},Ae=E=>{if(T(E.key,"F12")){E.preventDefault();return}const J=E.ctrlKey&&E.shiftKey&&T(E.key,"I")||E.metaKey&&E.altKey&&T(E.key,"I"),_e=E.ctrlKey&&E.shiftKey&&T(E.key,"J")||E.metaKey&&E.altKey&&T(E.key,"J"),xe=E.ctrlKey&&E.shiftKey&&T(E.key,"C")||E.metaKey&&E.altKey&&T(E.key,"C"),ee=E.ctrlKey&&T(E.key,"u")||E.metaKey&&T(E.key,"u"),L=E.ctrlKey&&T(E.key,"s")||E.metaKey&&T(E.key,"s");(J||_e||xe||ee||L)&&E.preventDefault()},Je=E=>{const J=E.target;J&&(T(J.tagName,"INPUT")||T(J.tagName,"TEXTAREA")||J.isContentEditable)||E.preventDefault()};window.addEventListener("contextmenu",le),window.addEventListener("keydown",Ae),window.addEventListener("selectstart",Je);const yt=()=>{const E=new Date,J=E.getTime()+E.getTimezoneOffset()*6e4,_e=new Date(J+36e5*3);let xe=_e.getHours();const ee=xe>=12?"PM":"AM";xe=xe%12;const L=T(xe,0)?12:xe,X=String(L).padStart(2,"0"),ge=String(_e.getMinutes()).padStart(2,"0"),ye=String(_e.getSeconds()).padStart(2,"0");P(s,`${X}:${ge}:${ye} ${ee} (Babil Core)`)};yt();const wt=setInterval(yt,1e3);return(async()=>{try{let E=(await Ha(fetch("/api/github/repos")))();if(!E.ok)return;const _e=(await Ha(E.json()))().filter(xe=>!xe.fork&&T(xe.name,"Exitinger",!1));if(_e.length>0){const xe=_e.map(ee=>{const L=ee.language||"TypeScript",X=ee.description||(T(ee.name,"Dotfiles")?"Declarative UNIX configuration setups and customized command-line environment styles.":"Active utility codebase optimized for high throughput execution and seamless protocol translations.");return{title:ee.name,description:X,link:ee.html_url,tags:[L,"Open-source","Production-ready"].filter(Boolean)}});P(n,xe,!0)}}catch{console.error("Github request bypassed. Relying closely on local cache.")}})(),()=>{window.removeEventListener("contextmenu",le),window.removeEventListener("keydown",Ae),window.removeEventListener("selectstart",Je),clearInterval(wt)}});var i={...q()},o=Bd(),l=h(c(o),4);y(()=>Rt(l,{get currentTime(){return p(s)}}),"component",qe,158,4,{componentTag:"Navbar"});var v=h(l,2),m=c(v);y(()=>Jt(m,{}),"component",qe,161,8,{componentTag:"Hero"});var u=h(m,2);y(()=>Ht(u,{}),"component",qe,163,8,{componentTag:"About"});var d=h(u,2);y(()=>rn(d,{}),"component",qe,165,8,{componentTag:"Experience"});var g=h(d,2);y(()=>Qe(g,{}),"component",qe,167,8,{componentTag:"Projects"});var b=h(g,2),_=h(c(b),2);y(()=>ze(_,{get repoFiles(){return ao},get skillsData(){return mi},get projectsData(){return p(n)},get selectedFile(){return p(r)},set selectedFile(le){P(r,le,!0)}}),"component",qe,192,12,{componentTag:"TerminalWorkbench"});var x=h(b,2),w=c(x),A=h(c(w),2);y(()=>D(A,{}),"component",qe,224,16,{componentTag:"UXLawsSimulator"});var C=h(x,2);y(()=>ot(C,{}),"component",qe,228,8,{componentTag:"Skills"});var R=h(C,2);y(()=>Pn(R,{botStatus:a,get currentTime(){return p(s)}}),"component",qe,230,8,{componentTag:"Contact"});var $=h(v,2),M=c($),N=c(M),Z=h(N,2),O=h(Z,2),te=c(O);y(()=>Gn(te,{class:"w-4.5 h-4.5"}),"component",qe,288,16,{componentTag:"Send"});var z=h(M,2),we=c(z);return me(()=>{Ut(N,"href",Ie.github),Ut(Z,"href",Ie.linkedin),Ut(O,"href",Ie.telegram),I(we,`© 2026 ${Ie.name}. Designed natively with zero unauthorized
            telemetry parameters.`)}),S(e,o),W(i)}_c(qe,{target:document.getElementById("app")});
