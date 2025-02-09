(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const u of l)if(u.type==="childList")for(const h of u.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const u={};return l.integrity&&(u.integrity=l.integrity),l.referrerPolicy&&(u.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?u.credentials="include":l.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function r(l){if(l.ep)return;l.ep=!0;const u=i(l);fetch(l.href,u)}})();var Of={exports:{}},So={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B_;function zx(){if(B_)return So;B_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function i(r,l,u){var h=null;if(u!==void 0&&(h=""+u),l.key!==void 0&&(h=""+l.key),"key"in l){u={};for(var d in l)d!=="key"&&(u[d]=l[d])}else u=l;return l=u.ref,{$$typeof:o,type:r,key:h,ref:l!==void 0?l:null,props:u}}return So.Fragment=t,So.jsx=i,So.jsxs=i,So}var F_;function Bx(){return F_||(F_=1,Of.exports=zx()),Of.exports}var Qt=Bx(),Pf={exports:{}},yo={},zf={exports:{}},Bf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var I_;function Fx(){return I_||(I_=1,function(o){function t(k,rt){var Y=k.length;k.push(rt);t:for(;0<Y;){var gt=Y-1>>>1,U=k[gt];if(0<l(U,rt))k[gt]=rt,k[Y]=U,Y=gt;else break t}}function i(k){return k.length===0?null:k[0]}function r(k){if(k.length===0)return null;var rt=k[0],Y=k.pop();if(Y!==rt){k[0]=Y;t:for(var gt=0,U=k.length,$=U>>>1;gt<$;){var yt=2*(gt+1)-1,At=k[yt],j=yt+1,dt=k[j];if(0>l(At,Y))j<U&&0>l(dt,At)?(k[gt]=dt,k[j]=Y,gt=j):(k[gt]=At,k[yt]=Y,gt=yt);else if(j<U&&0>l(dt,Y))k[gt]=dt,k[j]=Y,gt=j;else break t}}return rt}function l(k,rt){var Y=k.sortIndex-rt.sortIndex;return Y!==0?Y:k.id-rt.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var u=performance;o.unstable_now=function(){return u.now()}}else{var h=Date,d=h.now();o.unstable_now=function(){return h.now()-d}}var m=[],p=[],_=1,g=null,x=3,M=!1,E=!1,A=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;function O(k){for(var rt=i(p);rt!==null;){if(rt.callback===null)r(p);else if(rt.startTime<=k)r(p),rt.sortIndex=rt.expirationTime,t(m,rt);else break;rt=i(p)}}function D(k){if(A=!1,O(k),!E)if(i(m)!==null)E=!0,ft();else{var rt=i(p);rt!==null&&lt(D,rt.startTime-k)}}var H=!1,z=-1,F=5,G=-1;function R(){return!(o.unstable_now()-G<F)}function b(){if(H){var k=o.unstable_now();G=k;var rt=!0;try{t:{E=!1,A&&(A=!1,v(z),z=-1),M=!0;var Y=x;try{e:{for(O(k),g=i(m);g!==null&&!(g.expirationTime>k&&R());){var gt=g.callback;if(typeof gt=="function"){g.callback=null,x=g.priorityLevel;var U=gt(g.expirationTime<=k);if(k=o.unstable_now(),typeof U=="function"){g.callback=U,O(k),rt=!0;break e}g===i(m)&&r(m),O(k)}else r(m);g=i(m)}if(g!==null)rt=!0;else{var $=i(p);$!==null&&lt(D,$.startTime-k),rt=!1}}break t}finally{g=null,x=Y,M=!1}rt=void 0}}finally{rt?B():H=!1}}}var B;if(typeof P=="function")B=function(){P(b)};else if(typeof MessageChannel<"u"){var st=new MessageChannel,nt=st.port2;st.port1.onmessage=b,B=function(){nt.postMessage(null)}}else B=function(){y(b,0)};function ft(){H||(H=!0,B())}function lt(k,rt){z=y(function(){k(o.unstable_now())},rt)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(k){k.callback=null},o.unstable_continueExecution=function(){E||M||(E=!0,ft())},o.unstable_forceFrameRate=function(k){0>k||125<k?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<k?Math.floor(1e3/k):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_getFirstCallbackNode=function(){return i(m)},o.unstable_next=function(k){switch(x){case 1:case 2:case 3:var rt=3;break;default:rt=x}var Y=x;x=rt;try{return k()}finally{x=Y}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(k,rt){switch(k){case 1:case 2:case 3:case 4:case 5:break;default:k=3}var Y=x;x=k;try{return rt()}finally{x=Y}},o.unstable_scheduleCallback=function(k,rt,Y){var gt=o.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?gt+Y:gt):Y=gt,k){case 1:var U=-1;break;case 2:U=250;break;case 5:U=1073741823;break;case 4:U=1e4;break;default:U=5e3}return U=Y+U,k={id:_++,callback:rt,priorityLevel:k,startTime:Y,expirationTime:U,sortIndex:-1},Y>gt?(k.sortIndex=Y,t(p,k),i(m)===null&&k===i(p)&&(A?(v(z),z=-1):A=!0,lt(D,Y-gt))):(k.sortIndex=U,t(m,k),E||M||(E=!0,ft())),k},o.unstable_shouldYield=R,o.unstable_wrapCallback=function(k){var rt=x;return function(){var Y=x;x=rt;try{return k.apply(this,arguments)}finally{x=Y}}}}(Bf)),Bf}var H_;function Ix(){return H_||(H_=1,zf.exports=Fx()),zf.exports}var Ff={exports:{}},oe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var G_;function Hx(){if(G_)return oe;G_=1;var o=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),u=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.iterator;function x(U){return U===null||typeof U!="object"?null:(U=g&&U[g]||U["@@iterator"],typeof U=="function"?U:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,A={};function y(U,$,yt){this.props=U,this.context=$,this.refs=A,this.updater=yt||M}y.prototype.isReactComponent={},y.prototype.setState=function(U,$){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,$,"setState")},y.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function v(){}v.prototype=y.prototype;function P(U,$,yt){this.props=U,this.context=$,this.refs=A,this.updater=yt||M}var O=P.prototype=new v;O.constructor=P,E(O,y.prototype),O.isPureReactComponent=!0;var D=Array.isArray,H={H:null,A:null,T:null,S:null},z=Object.prototype.hasOwnProperty;function F(U,$,yt,At,j,dt){return yt=dt.ref,{$$typeof:o,type:U,key:$,ref:yt!==void 0?yt:null,props:dt}}function G(U,$){return F(U.type,$,void 0,void 0,void 0,U.props)}function R(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function b(U){var $={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(yt){return $[yt]})}var B=/\/+/g;function st(U,$){return typeof U=="object"&&U!==null&&U.key!=null?b(""+U.key):$.toString(36)}function nt(){}function ft(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(nt,nt):(U.status="pending",U.then(function($){U.status==="pending"&&(U.status="fulfilled",U.value=$)},function($){U.status==="pending"&&(U.status="rejected",U.reason=$)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function lt(U,$,yt,At,j){var dt=typeof U;(dt==="undefined"||dt==="boolean")&&(U=null);var vt=!1;if(U===null)vt=!0;else switch(dt){case"bigint":case"string":case"number":vt=!0;break;case"object":switch(U.$$typeof){case o:case t:vt=!0;break;case _:return vt=U._init,lt(vt(U._payload),$,yt,At,j)}}if(vt)return j=j(U),vt=At===""?"."+st(U,0):At,D(j)?(yt="",vt!=null&&(yt=vt.replace(B,"$&/")+"/"),lt(j,$,yt,"",function(Kt){return Kt})):j!=null&&(R(j)&&(j=G(j,yt+(j.key==null||U&&U.key===j.key?"":(""+j.key).replace(B,"$&/")+"/")+vt)),$.push(j)),1;vt=0;var Et=At===""?".":At+":";if(D(U))for(var bt=0;bt<U.length;bt++)At=U[bt],dt=Et+st(At,bt),vt+=lt(At,$,yt,dt,j);else if(bt=x(U),typeof bt=="function")for(U=bt.call(U),bt=0;!(At=U.next()).done;)At=At.value,dt=Et+st(At,bt++),vt+=lt(At,$,yt,dt,j);else if(dt==="object"){if(typeof U.then=="function")return lt(ft(U),$,yt,At,j);throw $=String(U),Error("Objects are not valid as a React child (found: "+($==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":$)+"). If you meant to render a collection of children, use an array instead.")}return vt}function k(U,$,yt){if(U==null)return U;var At=[],j=0;return lt(U,At,"","",function(dt){return $.call(yt,dt,j++)}),At}function rt(U){if(U._status===-1){var $=U._result;$=$(),$.then(function(yt){(U._status===0||U._status===-1)&&(U._status=1,U._result=yt)},function(yt){(U._status===0||U._status===-1)&&(U._status=2,U._result=yt)}),U._status===-1&&(U._status=0,U._result=$)}if(U._status===1)return U._result.default;throw U._result}var Y=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var $=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent($))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)};function gt(){}return oe.Children={map:k,forEach:function(U,$,yt){k(U,function(){$.apply(this,arguments)},yt)},count:function(U){var $=0;return k(U,function(){$++}),$},toArray:function(U){return k(U,function($){return $})||[]},only:function(U){if(!R(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},oe.Component=y,oe.Fragment=i,oe.Profiler=l,oe.PureComponent=P,oe.StrictMode=r,oe.Suspense=m,oe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=H,oe.act=function(){throw Error("act(...) is not supported in production builds of React.")},oe.cache=function(U){return function(){return U.apply(null,arguments)}},oe.cloneElement=function(U,$,yt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var At=E({},U.props),j=U.key,dt=void 0;if($!=null)for(vt in $.ref!==void 0&&(dt=void 0),$.key!==void 0&&(j=""+$.key),$)!z.call($,vt)||vt==="key"||vt==="__self"||vt==="__source"||vt==="ref"&&$.ref===void 0||(At[vt]=$[vt]);var vt=arguments.length-2;if(vt===1)At.children=yt;else if(1<vt){for(var Et=Array(vt),bt=0;bt<vt;bt++)Et[bt]=arguments[bt+2];At.children=Et}return F(U.type,j,void 0,void 0,dt,At)},oe.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:u,_context:U},U},oe.createElement=function(U,$,yt){var At,j={},dt=null;if($!=null)for(At in $.key!==void 0&&(dt=""+$.key),$)z.call($,At)&&At!=="key"&&At!=="__self"&&At!=="__source"&&(j[At]=$[At]);var vt=arguments.length-2;if(vt===1)j.children=yt;else if(1<vt){for(var Et=Array(vt),bt=0;bt<vt;bt++)Et[bt]=arguments[bt+2];j.children=Et}if(U&&U.defaultProps)for(At in vt=U.defaultProps,vt)j[At]===void 0&&(j[At]=vt[At]);return F(U,dt,void 0,void 0,null,j)},oe.createRef=function(){return{current:null}},oe.forwardRef=function(U){return{$$typeof:d,render:U}},oe.isValidElement=R,oe.lazy=function(U){return{$$typeof:_,_payload:{_status:-1,_result:U},_init:rt}},oe.memo=function(U,$){return{$$typeof:p,type:U,compare:$===void 0?null:$}},oe.startTransition=function(U){var $=H.T,yt={};H.T=yt;try{var At=U(),j=H.S;j!==null&&j(yt,At),typeof At=="object"&&At!==null&&typeof At.then=="function"&&At.then(gt,Y)}catch(dt){Y(dt)}finally{H.T=$}},oe.unstable_useCacheRefresh=function(){return H.H.useCacheRefresh()},oe.use=function(U){return H.H.use(U)},oe.useActionState=function(U,$,yt){return H.H.useActionState(U,$,yt)},oe.useCallback=function(U,$){return H.H.useCallback(U,$)},oe.useContext=function(U){return H.H.useContext(U)},oe.useDebugValue=function(){},oe.useDeferredValue=function(U,$){return H.H.useDeferredValue(U,$)},oe.useEffect=function(U,$){return H.H.useEffect(U,$)},oe.useId=function(){return H.H.useId()},oe.useImperativeHandle=function(U,$,yt){return H.H.useImperativeHandle(U,$,yt)},oe.useInsertionEffect=function(U,$){return H.H.useInsertionEffect(U,$)},oe.useLayoutEffect=function(U,$){return H.H.useLayoutEffect(U,$)},oe.useMemo=function(U,$){return H.H.useMemo(U,$)},oe.useOptimistic=function(U,$){return H.H.useOptimistic(U,$)},oe.useReducer=function(U,$,yt){return H.H.useReducer(U,$,yt)},oe.useRef=function(U){return H.H.useRef(U)},oe.useState=function(U){return H.H.useState(U)},oe.useSyncExternalStore=function(U,$,yt){return H.H.useSyncExternalStore(U,$,yt)},oe.useTransition=function(){return H.H.useTransition()},oe.version="19.0.0",oe}var V_;function ld(){return V_||(V_=1,Ff.exports=Hx()),Ff.exports}var If={exports:{}},Mn={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var k_;function Gx(){if(k_)return Mn;k_=1;var o=ld();function t(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)p+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(t(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function u(m,p,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:g==null?null:""+g,children:m,containerInfo:p,implementation:_}}var h=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return Mn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Mn.createPortal=function(m,p){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(t(299));return u(m,p,null,_)},Mn.flushSync=function(m){var p=h.T,_=r.p;try{if(h.T=null,r.p=2,m)return m()}finally{h.T=p,r.p=_,r.d.f()}},Mn.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},Mn.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},Mn.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;_==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:g,integrity:x,fetchPriority:M}):_==="script"&&r.d.X(m,{crossOrigin:g,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},Mn.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var _=d(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},Mn.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var _=p.as,g=d(_,p.crossOrigin);r.d.L(m,_,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},Mn.preloadModule=function(m,p){if(typeof m=="string")if(p){var _=d(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:_,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},Mn.requestFormReset=function(m){r.d.r(m)},Mn.unstable_batchedUpdates=function(m,p){return m(p)},Mn.useFormState=function(m,p,_){return h.H.useFormState(m,p,_)},Mn.useFormStatus=function(){return h.H.useHostTransitionStatus()},Mn.version="19.0.0",Mn}var X_;function Vx(){if(X_)return If.exports;X_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),If.exports=Gx(),If.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var W_;function kx(){if(W_)return yo;W_=1;var o=Ix(),t=ld(),i=Vx();function r(e){var n="https://react.dev/errors/"+e;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}var u=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),d=Symbol.for("react.portal"),m=Symbol.for("react.fragment"),p=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),g=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),M=Symbol.for("react.context"),E=Symbol.for("react.forward_ref"),A=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),v=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),D=Symbol.for("react.memo_cache_sentinel"),H=Symbol.iterator;function z(e){return e===null||typeof e!="object"?null:(e=H&&e[H]||e["@@iterator"],typeof e=="function"?e:null)}var F=Symbol.for("react.client.reference");function G(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===F?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case m:return"Fragment";case d:return"Portal";case _:return"Profiler";case p:return"StrictMode";case A:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case M:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case E:var n=e.render;return e=e.displayName,e||(e=n.displayName||n.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case v:return n=e.displayName||null,n!==null?n:G(e.type)||"Memo";case P:n=e._payload,e=e._init;try{return G(e(n))}catch{}}return null}var R=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,b=Object.assign,B,st;function nt(e){if(B===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);B=n&&n[1]||"",st=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+B+e+st}var ft=!1;function lt(e,n){if(!e||ft)return"";ft=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var xt=function(){throw Error()};if(Object.defineProperty(xt.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(xt,[])}catch(ct){var at=ct}Reflect.construct(e,[],xt)}else{try{xt.call()}catch(ct){at=ct}e.call(xt.prototype)}}else{try{throw Error()}catch(ct){at=ct}(xt=e())&&typeof xt.catch=="function"&&xt.catch(function(){})}}catch(ct){if(ct&&at&&typeof ct.stack=="string")return[ct.stack,at.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var c=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");c&&c.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),S=f[0],C=f[1];if(S&&C){var N=S.split(`
`),X=C.split(`
`);for(c=s=0;s<N.length&&!N[s].includes("DetermineComponentFrameRoot");)s++;for(;c<X.length&&!X[c].includes("DetermineComponentFrameRoot");)c++;if(s===N.length||c===X.length)for(s=N.length-1,c=X.length-1;1<=s&&0<=c&&N[s]!==X[c];)c--;for(;1<=s&&0<=c;s--,c--)if(N[s]!==X[c]){if(s!==1||c!==1)do if(s--,c--,0>c||N[s]!==X[c]){var ut=`
`+N[s].replace(" at new "," at ");return e.displayName&&ut.includes("<anonymous>")&&(ut=ut.replace("<anonymous>",e.displayName)),ut}while(1<=s&&0<=c);break}}}finally{ft=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?nt(a):""}function k(e){switch(e.tag){case 26:case 27:case 5:return nt(e.type);case 16:return nt("Lazy");case 13:return nt("Suspense");case 19:return nt("SuspenseList");case 0:case 15:return e=lt(e.type,!1),e;case 11:return e=lt(e.type.render,!1),e;case 1:return e=lt(e.type,!0),e;default:return""}}function rt(e){try{var n="";do n+=k(e),e=e.return;while(e);return n}catch(a){return`
Error generating stack: `+a.message+`
`+a.stack}}function Y(e){var n=e,a=e;if(e.alternate)for(;n.return;)n=n.return;else{e=n;do n=e,n.flags&4098&&(a=n.return),e=n.return;while(e)}return n.tag===3?a:null}function gt(e){if(e.tag===13){var n=e.memoizedState;if(n===null&&(e=e.alternate,e!==null&&(n=e.memoizedState)),n!==null)return n.dehydrated}return null}function U(e){if(Y(e)!==e)throw Error(r(188))}function $(e){var n=e.alternate;if(!n){if(n=Y(e),n===null)throw Error(r(188));return n!==e?null:e}for(var a=e,s=n;;){var c=a.return;if(c===null)break;var f=c.alternate;if(f===null){if(s=c.return,s!==null){a=s;continue}break}if(c.child===f.child){for(f=c.child;f;){if(f===a)return U(c),e;if(f===s)return U(c),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=c,s=f;else{for(var S=!1,C=c.child;C;){if(C===a){S=!0,a=c,s=f;break}if(C===s){S=!0,s=c,a=f;break}C=C.sibling}if(!S){for(C=f.child;C;){if(C===a){S=!0,a=f,s=c;break}if(C===s){S=!0,s=f,a=c;break}C=C.sibling}if(!S)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?e:n}function yt(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e;for(e=e.child;e!==null;){if(n=yt(e),n!==null)return n;e=e.sibling}return null}var At=Array.isArray,j=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,dt={pending:!1,data:null,method:null,action:null},vt=[],Et=-1;function bt(e){return{current:e}}function Kt(e){0>Et||(e.current=vt[Et],vt[Et]=null,Et--)}function Pt(e,n){Et++,vt[Et]=e.current,e.current=n}var Me=bt(null),Ce=bt(null),ae=bt(null),I=bt(null);function pn(e,n){switch(Pt(ae,n),Pt(Ce,e),Pt(Me,null),e=n.nodeType,e){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?h_(n):0;break;default:if(e=e===8?n.parentNode:n,n=e.tagName,e=e.namespaceURI)e=h_(e),n=d_(e,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}Kt(Me),Pt(Me,n)}function se(){Kt(Me),Kt(Ce),Kt(ae)}function he(e){e.memoizedState!==null&&Pt(I,e);var n=Me.current,a=d_(n,e.type);n!==a&&(Pt(Ce,e),Pt(Me,a))}function kt(e){Ce.current===e&&(Kt(Me),Kt(Ce)),I.current===e&&(Kt(I),mo._currentValue=dt)}var we=Object.prototype.hasOwnProperty,Xt=o.unstable_scheduleCallback,L=o.unstable_cancelCallback,T=o.unstable_shouldYield,it=o.unstable_requestPaint,ht=o.unstable_now,St=o.unstable_getCurrentPriorityLevel,pt=o.unstable_ImmediatePriority,Ht=o.unstable_UserBlockingPriority,wt=o.unstable_NormalPriority,zt=o.unstable_LowPriority,me=o.unstable_IdlePriority,Tt=o.log,Bt=o.unstable_setDisableYieldValue,qt=null,Gt=null;function Ft(e){if(Gt&&typeof Gt.onCommitFiberRoot=="function")try{Gt.onCommitFiberRoot(qt,e,void 0,(e.current.flags&128)===128)}catch{}}function re(e){if(typeof Tt=="function"&&Bt(e),Gt&&typeof Gt.setStrictMode=="function")try{Gt.setStrictMode(qt,e)}catch{}}var jt=Math.clz32?Math.clz32:Lt,De=Math.log,W=Math.LN2;function Lt(e){return e>>>=0,e===0?32:31-(De(e)/W|0)|0}var ot=128,_t=4194304;function Ct(e){var n=e&42;if(n!==0)return n;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Dt(e,n){var a=e.pendingLanes;if(a===0)return 0;var s=0,c=e.suspendedLanes,f=e.pingedLanes,S=e.warmLanes;e=e.finishedLanes!==0;var C=a&134217727;return C!==0?(a=C&~c,a!==0?s=Ct(a):(f&=C,f!==0?s=Ct(f):e||(S=C&~S,S!==0&&(s=Ct(S))))):(C=a&~c,C!==0?s=Ct(C):f!==0?s=Ct(f):e||(S=a&~S,S!==0&&(s=Ct(S)))),s===0?0:n!==0&&n!==s&&!(n&c)&&(c=s&-s,S=n&-n,c>=S||c===32&&(S&4194176)!==0)?n:s}function $t(e,n){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&n)===0}function He(e,n){switch(e){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function tn(){var e=ot;return ot<<=1,!(ot&4194176)&&(ot=128),e}function Ee(){var e=_t;return _t<<=1,!(_t&62914560)&&(_t=4194304),e}function bn(e){for(var n=[],a=0;31>a;a++)n.push(e);return n}function An(e,n){e.pendingLanes|=n,n!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Io(e,n,a,s,c,f){var S=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var C=e.entanglements,N=e.expirationTimes,X=e.hiddenUpdates;for(a=S&~a;0<a;){var ut=31-jt(a),xt=1<<ut;C[ut]=0,N[ut]=-1;var at=X[ut];if(at!==null)for(X[ut]=null,ut=0;ut<at.length;ut++){var ct=at[ut];ct!==null&&(ct.lane&=-536870913)}a&=~xt}s!==0&&bs(e,s,0),f!==0&&c===0&&e.tag!==0&&(e.suspendedLanes|=f&~(S&~n))}function bs(e,n,a){e.pendingLanes|=n,e.suspendedLanes&=~n;var s=31-jt(n);e.entangledLanes|=n,e.entanglements[s]=e.entanglements[s]|1073741824|a&4194218}function yi(e,n){var a=e.entangledLanes|=n;for(e=e.entanglements;a;){var s=31-jt(a),c=1<<s;c&n|e[s]&n&&(e[s]|=n),a&=~c}}function xr(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function As(){var e=j.p;return e!==0?e:(e=window.event,e===void 0?32:U_(e.type))}function Ho(e,n){var a=j.p;try{return j.p=e,n()}finally{j.p=a}}var Hn=Math.random().toString(36).slice(2),en="__reactFiber$"+Hn,nn="__reactProps$"+Hn,Ui="__reactContainer$"+Hn,Sr="__reactEvents$"+Hn,Uc="__reactListeners$"+Hn,Lc="__reactHandles$"+Hn,Go="__reactResources$"+Hn,Ia="__reactMarker$"+Hn;function Rs(e){delete e[en],delete e[nn],delete e[Sr],delete e[Uc],delete e[Lc]}function Li(e){var n=e[en];if(n)return n;for(var a=e.parentNode;a;){if(n=a[Ui]||a[en]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(e=__(e);e!==null;){if(a=e[en])return a;e=__(e)}return n}e=a,a=e.parentNode}return null}function w(e){if(e=e[en]||e[Ui]){var n=e.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return e}return null}function q(e){var n=e.tag;if(n===5||n===26||n===27||n===6)return e.stateNode;throw Error(r(33))}function tt(e){var n=e[Go];return n||(n=e[Go]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Q(e){e[Ia]=!0}var Z=new Set,Mt={};function Rt(e,n){Ot(e,n),Ot(e+"Capture",n)}function Ot(e,n){for(Mt[e]=n,e=0;e<n.length;e++)Z.add(n[e])}var Nt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),te=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ee={},Yt={};function _e(e){return we.call(Yt,e)?!0:we.call(ee,e)?!1:te.test(e)?Yt[e]=!0:(ee[e]=!0,!1)}function ge(e,n,a){if(_e(n))if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){e.removeAttribute(n);return}}e.setAttribute(n,""+a)}}function Ie(e,n,a){if(a===null)e.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(n);return}e.setAttribute(n,""+a)}}function Te(e,n,a,s){if(s===null)e.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(n,a,""+s)}}function ne(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zt(e){var n=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function an(e){var n=Zt(e)?"checked":"value",a=Object.getOwnPropertyDescriptor(e.constructor.prototype,n),s=""+e[n];if(!e.hasOwnProperty(n)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var c=a.get,f=a.set;return Object.defineProperty(e,n,{configurable:!0,get:function(){return c.call(this)},set:function(S){s=""+S,f.call(this,S)}}),Object.defineProperty(e,n,{enumerable:a.enumerable}),{getValue:function(){return s},setValue:function(S){s=""+S},stopTracking:function(){e._valueTracker=null,delete e[n]}}}}function ve(e){e._valueTracker||(e._valueTracker=an(e))}function On(e){if(!e)return!1;var n=e._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return e&&(s=Zt(e)?e.checked?"true":"false":e.value),e=s,e!==a?(n.setValue(e),!0):!1}function ci(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Rn=/[\n"\\]/g;function cn(e){return e.replace(Rn,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Ue(e,n,a,s,c,f,S,C){e.name="",S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"?e.type=S:e.removeAttribute("type"),n!=null?S==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+ne(n)):e.value!==""+ne(n)&&(e.value=""+ne(n)):S!=="submit"&&S!=="reset"||e.removeAttribute("value"),n!=null?Sn(e,S,ne(n)):a!=null?Sn(e,S,ne(a)):s!=null&&e.removeAttribute("value"),c==null&&f!=null&&(e.defaultChecked=!!f),c!=null&&(e.checked=c&&typeof c!="function"&&typeof c!="symbol"),C!=null&&typeof C!="function"&&typeof C!="symbol"&&typeof C!="boolean"?e.name=""+ne(C):e.removeAttribute("name")}function Cn(e,n,a,s,c,f,S,C){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(e.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null))return;a=a!=null?""+ne(a):"",n=n!=null?""+ne(n):a,C||n===e.value||(e.value=n),e.defaultValue=n}s=s??c,s=typeof s!="function"&&typeof s!="symbol"&&!!s,e.checked=C?e.checked:!!s,e.defaultChecked=!!s,S!=null&&typeof S!="function"&&typeof S!="symbol"&&typeof S!="boolean"&&(e.name=S)}function Sn(e,n,a){n==="number"&&ci(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ke(e,n,a,s){if(e=e.options,n){n={};for(var c=0;c<a.length;c++)n["$"+a[c]]=!0;for(a=0;a<e.length;a++)c=n.hasOwnProperty("$"+e[a].value),e[a].selected!==c&&(e[a].selected=c),c&&s&&(e[a].defaultSelected=!0)}else{for(a=""+ne(a),n=null,c=0;c<e.length;c++){if(e[c].value===a){e[c].selected=!0,s&&(e[c].defaultSelected=!0);return}n!==null||e[c].disabled||(n=e[c])}n!==null&&(n.selected=!0)}}function mn(e,n,a){if(n!=null&&(n=""+ne(n),n!==e.value&&(e.value=n),a==null)){e.defaultValue!==n&&(e.defaultValue=n);return}e.defaultValue=a!=null?""+ne(a):""}function yr(e,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(At(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=ne(n),e.defaultValue=a,s=e.textContent,s===a&&s!==""&&s!==null&&(e.value=s)}function Pn(e,n){if(n){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=n;return}}e.textContent=n}var Nv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Sd(e,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="":s?e.setProperty(n,a):typeof a!="number"||a===0||Nv.has(n)?n==="float"?e.cssFloat=a:e[n]=(""+a).trim():e[n]=a+"px"}function yd(e,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(e=e.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?e.setProperty(s,""):s==="float"?e.cssFloat="":e[s]="");for(var c in n)s=n[c],n.hasOwnProperty(c)&&a[c]!==s&&Sd(e,c,s)}else for(var f in n)n.hasOwnProperty(f)&&Sd(e,f,n[f])}function Nc(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ov=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Pv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Vo(e){return Pv.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var Oc=null;function Pc(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Mr=null,Er=null;function Md(e){var n=w(e);if(n&&(e=n.stateNode)){var a=e[nn]||null;t:switch(e=n.stateNode,n.type){case"input":if(Ue(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+cn(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==e&&s.form===e.form){var c=s[nn]||null;if(!c)throw Error(r(90));Ue(s,c.value,c.defaultValue,c.defaultValue,c.checked,c.defaultChecked,c.type,c.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===e.form&&On(s)}break t;case"textarea":mn(e,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&ke(e,!!a.multiple,n,!1)}}}var zc=!1;function Ed(e,n,a){if(zc)return e(n,a);zc=!0;try{var s=e(n);return s}finally{if(zc=!1,(Mr!==null||Er!==null)&&(bl(),Mr&&(n=Mr,e=Er,Er=Mr=null,Md(n),e)))for(n=0;n<e.length;n++)Md(e[n])}}function Cs(e,n){var a=e.stateNode;if(a===null)return null;var s=a[nn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(e=e.type,s=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!s;break t;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Bc=!1;if(Nt)try{var ws={};Object.defineProperty(ws,"passive",{get:function(){Bc=!0}}),window.addEventListener("test",ws,ws),window.removeEventListener("test",ws,ws)}catch{Bc=!1}var oa=null,Fc=null,ko=null;function Td(){if(ko)return ko;var e,n=Fc,a=n.length,s,c="value"in oa?oa.value:oa.textContent,f=c.length;for(e=0;e<a&&n[e]===c[e];e++);var S=a-e;for(s=1;s<=S&&n[a-s]===c[f-s];s++);return ko=c.slice(e,1<s?1-s:void 0)}function Xo(e){var n=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&n===13&&(e=13)):e=n,e===10&&(e=13),32<=e||e===13?e:0}function Wo(){return!0}function bd(){return!1}function zn(e){function n(a,s,c,f,S){this._reactName=a,this._targetInst=c,this.type=s,this.nativeEvent=f,this.target=S,this.currentTarget=null;for(var C in e)e.hasOwnProperty(C)&&(a=e[C],this[C]=a?a(f):f[C]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Wo:bd,this.isPropagationStopped=bd,this}return b(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Wo)},persist:function(){},isPersistent:Wo}),n}var Ha={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},qo=zn(Ha),Ds=b({},Ha,{view:0,detail:0}),zv=zn(Ds),Ic,Hc,Us,Yo=b({},Ds,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vc,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Us&&(Us&&e.type==="mousemove"?(Ic=e.screenX-Us.screenX,Hc=e.screenY-Us.screenY):Hc=Ic=0,Us=e),Ic)},movementY:function(e){return"movementY"in e?e.movementY:Hc}}),Ad=zn(Yo),Bv=b({},Yo,{dataTransfer:0}),Fv=zn(Bv),Iv=b({},Ds,{relatedTarget:0}),Gc=zn(Iv),Hv=b({},Ha,{animationName:0,elapsedTime:0,pseudoElement:0}),Gv=zn(Hv),Vv=b({},Ha,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),kv=zn(Vv),Xv=b({},Ha,{data:0}),Rd=zn(Xv),Wv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},qv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Yv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function jv(e){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(e):(e=Yv[e])?!!n[e]:!1}function Vc(){return jv}var Zv=b({},Ds,{key:function(e){if(e.key){var n=Wv[e.key]||e.key;if(n!=="Unidentified")return n}return e.type==="keypress"?(e=Xo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?qv[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vc,charCode:function(e){return e.type==="keypress"?Xo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Xo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Kv=zn(Zv),Qv=b({},Yo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Cd=zn(Qv),Jv=b({},Ds,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vc}),$v=zn(Jv),t0=b({},Ha,{propertyName:0,elapsedTime:0,pseudoElement:0}),e0=zn(t0),n0=b({},Yo,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),i0=zn(n0),a0=b({},Ha,{newState:0,oldState:0}),r0=zn(a0),s0=[9,13,27,32],kc=Nt&&"CompositionEvent"in window,Ls=null;Nt&&"documentMode"in document&&(Ls=document.documentMode);var o0=Nt&&"TextEvent"in window&&!Ls,wd=Nt&&(!kc||Ls&&8<Ls&&11>=Ls),Dd=" ",Ud=!1;function Ld(e,n){switch(e){case"keyup":return s0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Tr=!1;function l0(e,n){switch(e){case"compositionend":return Nd(n);case"keypress":return n.which!==32?null:(Ud=!0,Dd);case"textInput":return e=n.data,e===Dd&&Ud?null:e;default:return null}}function c0(e,n){if(Tr)return e==="compositionend"||!kc&&Ld(e,n)?(e=Td(),ko=Fc=oa=null,Tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return wd&&n.locale!=="ko"?null:n.data;default:return null}}var u0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Od(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n==="input"?!!u0[e.type]:n==="textarea"}function Pd(e,n,a,s){Mr?Er?Er.push(s):Er=[s]:Mr=s,n=Dl(n,"onChange"),0<n.length&&(a=new qo("onChange","change",null,a,s),e.push({event:a,listeners:n}))}var Ns=null,Os=null;function f0(e){o_(e,0)}function jo(e){var n=q(e);if(On(n))return e}function zd(e,n){if(e==="change")return n}var Bd=!1;if(Nt){var Xc;if(Nt){var Wc="oninput"in document;if(!Wc){var Fd=document.createElement("div");Fd.setAttribute("oninput","return;"),Wc=typeof Fd.oninput=="function"}Xc=Wc}else Xc=!1;Bd=Xc&&(!document.documentMode||9<document.documentMode)}function Id(){Ns&&(Ns.detachEvent("onpropertychange",Hd),Os=Ns=null)}function Hd(e){if(e.propertyName==="value"&&jo(Os)){var n=[];Pd(n,Os,e,Pc(e)),Ed(f0,n)}}function h0(e,n,a){e==="focusin"?(Id(),Ns=n,Os=a,Ns.attachEvent("onpropertychange",Hd)):e==="focusout"&&Id()}function d0(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return jo(Os)}function p0(e,n){if(e==="click")return jo(n)}function m0(e,n){if(e==="input"||e==="change")return jo(n)}function _0(e,n){return e===n&&(e!==0||1/e===1/n)||e!==e&&n!==n}var Gn=typeof Object.is=="function"?Object.is:_0;function Ps(e,n){if(Gn(e,n))return!0;if(typeof e!="object"||e===null||typeof n!="object"||n===null)return!1;var a=Object.keys(e),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var c=a[s];if(!we.call(n,c)||!Gn(e[c],n[c]))return!1}return!0}function Gd(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Vd(e,n){var a=Gd(e);e=0;for(var s;a;){if(a.nodeType===3){if(s=e+a.textContent.length,e<=n&&s>=n)return{node:a,offset:n-e};e=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=Gd(a)}}function kd(e,n){return e&&n?e===n?!0:e&&e.nodeType===3?!1:n&&n.nodeType===3?kd(e,n.parentNode):"contains"in e?e.contains(n):e.compareDocumentPosition?!!(e.compareDocumentPosition(n)&16):!1:!1}function Xd(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var n=ci(e.document);n instanceof e.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)e=n.contentWindow;else break;n=ci(e.document)}return n}function qc(e){var n=e&&e.nodeName&&e.nodeName.toLowerCase();return n&&(n==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||n==="textarea"||e.contentEditable==="true")}function g0(e,n){var a=Xd(n);n=e.focusedElem;var s=e.selectionRange;if(a!==n&&n&&n.ownerDocument&&kd(n.ownerDocument.documentElement,n)){if(s!==null&&qc(n)){if(e=s.start,a=s.end,a===void 0&&(a=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(a,n.value.length);else if(a=(e=n.ownerDocument||document)&&e.defaultView||window,a.getSelection){a=a.getSelection();var c=n.textContent.length,f=Math.min(s.start,c);s=s.end===void 0?f:Math.min(s.end,c),!a.extend&&f>s&&(c=s,s=f,f=c),c=Vd(n,f);var S=Vd(n,s);c&&S&&(a.rangeCount!==1||a.anchorNode!==c.node||a.anchorOffset!==c.offset||a.focusNode!==S.node||a.focusOffset!==S.offset)&&(e=e.createRange(),e.setStart(c.node,c.offset),a.removeAllRanges(),f>s?(a.addRange(e),a.extend(S.node,S.offset)):(e.setEnd(S.node,S.offset),a.addRange(e)))}}for(e=[],a=n;a=a.parentNode;)a.nodeType===1&&e.push({element:a,left:a.scrollLeft,top:a.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)a=e[n],a.element.scrollLeft=a.left,a.element.scrollTop=a.top}}var v0=Nt&&"documentMode"in document&&11>=document.documentMode,br=null,Yc=null,zs=null,jc=!1;function Wd(e,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;jc||br==null||br!==ci(s)||(s=br,"selectionStart"in s&&qc(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),zs&&Ps(zs,s)||(zs=s,s=Dl(Yc,"onSelect"),0<s.length&&(n=new qo("onSelect","select",null,n,a),e.push({event:n,listeners:s}),n.target=br)))}function Ga(e,n){var a={};return a[e.toLowerCase()]=n.toLowerCase(),a["Webkit"+e]="webkit"+n,a["Moz"+e]="moz"+n,a}var Ar={animationend:Ga("Animation","AnimationEnd"),animationiteration:Ga("Animation","AnimationIteration"),animationstart:Ga("Animation","AnimationStart"),transitionrun:Ga("Transition","TransitionRun"),transitionstart:Ga("Transition","TransitionStart"),transitioncancel:Ga("Transition","TransitionCancel"),transitionend:Ga("Transition","TransitionEnd")},Zc={},qd={};Nt&&(qd=document.createElement("div").style,"AnimationEvent"in window||(delete Ar.animationend.animation,delete Ar.animationiteration.animation,delete Ar.animationstart.animation),"TransitionEvent"in window||delete Ar.transitionend.transition);function Va(e){if(Zc[e])return Zc[e];if(!Ar[e])return e;var n=Ar[e],a;for(a in n)if(n.hasOwnProperty(a)&&a in qd)return Zc[e]=n[a];return e}var Yd=Va("animationend"),jd=Va("animationiteration"),Zd=Va("animationstart"),x0=Va("transitionrun"),S0=Va("transitionstart"),y0=Va("transitioncancel"),Kd=Va("transitionend"),Qd=new Map,Jd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function ui(e,n){Qd.set(e,n),Rt(n,[e])}var Zn=[],Rr=0,Kc=0;function Zo(){for(var e=Rr,n=Kc=Rr=0;n<e;){var a=Zn[n];Zn[n++]=null;var s=Zn[n];Zn[n++]=null;var c=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,s!==null&&c!==null){var S=s.pending;S===null?c.next=c:(c.next=S.next,S.next=c),s.pending=c}f!==0&&$d(a,c,f)}}function Ko(e,n,a,s){Zn[Rr++]=e,Zn[Rr++]=n,Zn[Rr++]=a,Zn[Rr++]=s,Kc|=s,e.lanes|=s,e=e.alternate,e!==null&&(e.lanes|=s)}function Qc(e,n,a,s){return Ko(e,n,a,s),Qo(e)}function la(e,n){return Ko(e,null,null,n),Qo(e)}function $d(e,n,a){e.lanes|=a;var s=e.alternate;s!==null&&(s.lanes|=a);for(var c=!1,f=e.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(e=f.stateNode,e===null||e._visibility&1||(c=!0)),e=f,f=f.return;c&&n!==null&&e.tag===3&&(f=e.stateNode,c=31-jt(a),f=f.hiddenUpdates,e=f[c],e===null?f[c]=[n]:e.push(n),n.lane=a|536870912)}function Qo(e){if(50<oo)throw oo=0,af=null,Error(r(185));for(var n=e.return;n!==null;)e=n,n=e.return;return e.tag===3?e.stateNode:null}var Cr={},tp=new WeakMap;function Kn(e,n){if(typeof e=="object"&&e!==null){var a=tp.get(e);return a!==void 0?a:(n={value:e,source:n,stack:rt(n)},tp.set(e,n),n)}return{value:e,source:n,stack:rt(n)}}var wr=[],Dr=0,Jo=null,$o=0,Qn=[],Jn=0,ka=null,Ni=1,Oi="";function Xa(e,n){wr[Dr++]=$o,wr[Dr++]=Jo,Jo=e,$o=n}function ep(e,n,a){Qn[Jn++]=Ni,Qn[Jn++]=Oi,Qn[Jn++]=ka,ka=e;var s=Ni;e=Oi;var c=32-jt(s)-1;s&=~(1<<c),a+=1;var f=32-jt(n)+c;if(30<f){var S=c-c%5;f=(s&(1<<S)-1).toString(32),s>>=S,c-=S,Ni=1<<32-jt(n)+c|a<<c|s,Oi=f+e}else Ni=1<<f|a<<c|s,Oi=e}function Jc(e){e.return!==null&&(Xa(e,1),ep(e,1,0))}function $c(e){for(;e===Jo;)Jo=wr[--Dr],wr[Dr]=null,$o=wr[--Dr],wr[Dr]=null;for(;e===ka;)ka=Qn[--Jn],Qn[Jn]=null,Oi=Qn[--Jn],Qn[Jn]=null,Ni=Qn[--Jn],Qn[Jn]=null}var wn=null,_n=null,be=!1,fi=null,Mi=!1,tu=Error(r(519));function Wa(e){var n=Error(r(418,""));throw Is(Kn(n,e)),tu}function np(e){var n=e.stateNode,a=e.type,s=e.memoizedProps;switch(n[en]=e,n[nn]=s,a){case"dialog":xe("cancel",n),xe("close",n);break;case"iframe":case"object":case"embed":xe("load",n);break;case"video":case"audio":for(a=0;a<co.length;a++)xe(co[a],n);break;case"source":xe("error",n);break;case"img":case"image":case"link":xe("error",n),xe("load",n);break;case"details":xe("toggle",n);break;case"input":xe("invalid",n),Cn(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0),ve(n);break;case"select":xe("invalid",n);break;case"textarea":xe("invalid",n),yr(n,s.value,s.defaultValue,s.children),ve(n)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||f_(n.textContent,a)?(s.popover!=null&&(xe("beforetoggle",n),xe("toggle",n)),s.onScroll!=null&&xe("scroll",n),s.onScrollEnd!=null&&xe("scrollend",n),s.onClick!=null&&(n.onclick=Ul),n=!0):n=!1,n||Wa(e)}function ip(e){for(wn=e.return;wn;)switch(wn.tag){case 3:case 27:Mi=!0;return;case 5:case 13:Mi=!1;return;default:wn=wn.return}}function Bs(e){if(e!==wn)return!1;if(!be)return ip(e),be=!0,!1;var n=!1,a;if((a=e.tag!==3&&e.tag!==27)&&((a=e.tag===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||yf(e.type,e.memoizedProps)),a=!a),a&&(n=!0),n&&_n&&Wa(e),ip(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(r(317));t:{for(e=e.nextSibling,n=0;e;){if(e.nodeType===8)if(a=e.data,a==="/$"){if(n===0){_n=di(e.nextSibling);break t}n--}else a!=="$"&&a!=="$!"&&a!=="$?"||n++;e=e.nextSibling}_n=null}}else _n=wn?di(e.stateNode.nextSibling):null;return!0}function Fs(){_n=wn=null,be=!1}function Is(e){fi===null?fi=[e]:fi.push(e)}var Hs=Error(r(460)),ap=Error(r(474)),eu={then:function(){}};function rp(e){return e=e.status,e==="fulfilled"||e==="rejected"}function tl(){}function sp(e,n,a){switch(a=e[a],a===void 0?e.push(n):a!==n&&(n.then(tl,tl),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Hs?Error(r(483)):e;default:if(typeof n.status=="string")n.then(tl,tl);else{if(e=Be,e!==null&&100<e.shellSuspendCounter)throw Error(r(482));e=n,e.status="pending",e.then(function(s){if(n.status==="pending"){var c=n;c.status="fulfilled",c.value=s}},function(s){if(n.status==="pending"){var c=n;c.status="rejected",c.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw e=n.reason,e===Hs?Error(r(483)):e}throw Gs=n,Hs}}var Gs=null;function op(){if(Gs===null)throw Error(r(459));var e=Gs;return Gs=null,e}var Ur=null,Vs=0;function el(e){var n=Vs;return Vs+=1,Ur===null&&(Ur=[]),sp(Ur,e,n)}function ks(e,n){n=n.props.ref,e.ref=n!==void 0?n:null}function nl(e,n){throw n.$$typeof===u?Error(r(525)):(e=Object.prototype.toString.call(n),Error(r(31,e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)))}function lp(e){var n=e._init;return n(e._payload)}function cp(e){function n(K,V){if(e){var J=K.deletions;J===null?(K.deletions=[V],K.flags|=16):J.push(V)}}function a(K,V){if(!e)return null;for(;V!==null;)n(K,V),V=V.sibling;return null}function s(K){for(var V=new Map;K!==null;)K.key!==null?V.set(K.key,K):V.set(K.index,K),K=K.sibling;return V}function c(K,V){return K=Sa(K,V),K.index=0,K.sibling=null,K}function f(K,V,J){return K.index=J,e?(J=K.alternate,J!==null?(J=J.index,J<V?(K.flags|=33554434,V):J):(K.flags|=33554434,V)):(K.flags|=1048576,V)}function S(K){return e&&K.alternate===null&&(K.flags|=33554434),K}function C(K,V,J,mt){return V===null||V.tag!==6?(V=Zu(J,K.mode,mt),V.return=K,V):(V=c(V,J),V.return=K,V)}function N(K,V,J,mt){var It=J.type;return It===m?ut(K,V,J.props.children,mt,J.key):V!==null&&(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&lp(It)===V.type)?(V=c(V,J.props),ks(V,J),V.return=K,V):(V=Sl(J.type,J.key,J.props,null,K.mode,mt),ks(V,J),V.return=K,V)}function X(K,V,J,mt){return V===null||V.tag!==4||V.stateNode.containerInfo!==J.containerInfo||V.stateNode.implementation!==J.implementation?(V=Ku(J,K.mode,mt),V.return=K,V):(V=c(V,J.children||[]),V.return=K,V)}function ut(K,V,J,mt,It){return V===null||V.tag!==7?(V=er(J,K.mode,mt,It),V.return=K,V):(V=c(V,J),V.return=K,V)}function xt(K,V,J){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Zu(""+V,K.mode,J),V.return=K,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case h:return J=Sl(V.type,V.key,V.props,null,K.mode,J),ks(J,V),J.return=K,J;case d:return V=Ku(V,K.mode,J),V.return=K,V;case P:var mt=V._init;return V=mt(V._payload),xt(K,V,J)}if(At(V)||z(V))return V=er(V,K.mode,J,null),V.return=K,V;if(typeof V.then=="function")return xt(K,el(V),J);if(V.$$typeof===M)return xt(K,gl(K,V),J);nl(K,V)}return null}function at(K,V,J,mt){var It=V!==null?V.key:null;if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return It!==null?null:C(K,V,""+J,mt);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case h:return J.key===It?N(K,V,J,mt):null;case d:return J.key===It?X(K,V,J,mt):null;case P:return It=J._init,J=It(J._payload),at(K,V,J,mt)}if(At(J)||z(J))return It!==null?null:ut(K,V,J,mt,null);if(typeof J.then=="function")return at(K,V,el(J),mt);if(J.$$typeof===M)return at(K,V,gl(K,J),mt);nl(K,J)}return null}function ct(K,V,J,mt,It){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(J)||null,C(V,K,""+mt,It);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case h:return K=K.get(mt.key===null?J:mt.key)||null,N(V,K,mt,It);case d:return K=K.get(mt.key===null?J:mt.key)||null,X(V,K,mt,It);case P:var de=mt._init;return mt=de(mt._payload),ct(K,V,J,mt,It)}if(At(mt)||z(mt))return K=K.get(J)||null,ut(V,K,mt,It,null);if(typeof mt.then=="function")return ct(K,V,J,el(mt),It);if(mt.$$typeof===M)return ct(K,V,J,gl(V,mt),It);nl(V,mt)}return null}function Vt(K,V,J,mt){for(var It=null,de=null,Wt=V,Jt=V=0,hn=null;Wt!==null&&Jt<J.length;Jt++){Wt.index>Jt?(hn=Wt,Wt=null):hn=Wt.sibling;var Ae=at(K,Wt,J[Jt],mt);if(Ae===null){Wt===null&&(Wt=hn);break}e&&Wt&&Ae.alternate===null&&n(K,Wt),V=f(Ae,V,Jt),de===null?It=Ae:de.sibling=Ae,de=Ae,Wt=hn}if(Jt===J.length)return a(K,Wt),be&&Xa(K,Jt),It;if(Wt===null){for(;Jt<J.length;Jt++)Wt=xt(K,J[Jt],mt),Wt!==null&&(V=f(Wt,V,Jt),de===null?It=Wt:de.sibling=Wt,de=Wt);return be&&Xa(K,Jt),It}for(Wt=s(Wt);Jt<J.length;Jt++)hn=ct(Wt,K,Jt,J[Jt],mt),hn!==null&&(e&&hn.alternate!==null&&Wt.delete(hn.key===null?Jt:hn.key),V=f(hn,V,Jt),de===null?It=hn:de.sibling=hn,de=hn);return e&&Wt.forEach(function(Ra){return n(K,Ra)}),be&&Xa(K,Jt),It}function ie(K,V,J,mt){if(J==null)throw Error(r(151));for(var It=null,de=null,Wt=V,Jt=V=0,hn=null,Ae=J.next();Wt!==null&&!Ae.done;Jt++,Ae=J.next()){Wt.index>Jt?(hn=Wt,Wt=null):hn=Wt.sibling;var Ra=at(K,Wt,Ae.value,mt);if(Ra===null){Wt===null&&(Wt=hn);break}e&&Wt&&Ra.alternate===null&&n(K,Wt),V=f(Ra,V,Jt),de===null?It=Ra:de.sibling=Ra,de=Ra,Wt=hn}if(Ae.done)return a(K,Wt),be&&Xa(K,Jt),It;if(Wt===null){for(;!Ae.done;Jt++,Ae=J.next())Ae=xt(K,Ae.value,mt),Ae!==null&&(V=f(Ae,V,Jt),de===null?It=Ae:de.sibling=Ae,de=Ae);return be&&Xa(K,Jt),It}for(Wt=s(Wt);!Ae.done;Jt++,Ae=J.next())Ae=ct(Wt,K,Jt,Ae.value,mt),Ae!==null&&(e&&Ae.alternate!==null&&Wt.delete(Ae.key===null?Jt:Ae.key),V=f(Ae,V,Jt),de===null?It=Ae:de.sibling=Ae,de=Ae);return e&&Wt.forEach(function(Px){return n(K,Px)}),be&&Xa(K,Jt),It}function qe(K,V,J,mt){if(typeof J=="object"&&J!==null&&J.type===m&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case h:t:{for(var It=J.key;V!==null;){if(V.key===It){if(It=J.type,It===m){if(V.tag===7){a(K,V.sibling),mt=c(V,J.props.children),mt.return=K,K=mt;break t}}else if(V.elementType===It||typeof It=="object"&&It!==null&&It.$$typeof===P&&lp(It)===V.type){a(K,V.sibling),mt=c(V,J.props),ks(mt,J),mt.return=K,K=mt;break t}a(K,V);break}else n(K,V);V=V.sibling}J.type===m?(mt=er(J.props.children,K.mode,mt,J.key),mt.return=K,K=mt):(mt=Sl(J.type,J.key,J.props,null,K.mode,mt),ks(mt,J),mt.return=K,K=mt)}return S(K);case d:t:{for(It=J.key;V!==null;){if(V.key===It)if(V.tag===4&&V.stateNode.containerInfo===J.containerInfo&&V.stateNode.implementation===J.implementation){a(K,V.sibling),mt=c(V,J.children||[]),mt.return=K,K=mt;break t}else{a(K,V);break}else n(K,V);V=V.sibling}mt=Ku(J,K.mode,mt),mt.return=K,K=mt}return S(K);case P:return It=J._init,J=It(J._payload),qe(K,V,J,mt)}if(At(J))return Vt(K,V,J,mt);if(z(J)){if(It=z(J),typeof It!="function")throw Error(r(150));return J=It.call(J),ie(K,V,J,mt)}if(typeof J.then=="function")return qe(K,V,el(J),mt);if(J.$$typeof===M)return qe(K,V,gl(K,J),mt);nl(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint"?(J=""+J,V!==null&&V.tag===6?(a(K,V.sibling),mt=c(V,J),mt.return=K,K=mt):(a(K,V),mt=Zu(J,K.mode,mt),mt.return=K,K=mt),S(K)):a(K,V)}return function(K,V,J,mt){try{Vs=0;var It=qe(K,V,J,mt);return Ur=null,It}catch(Wt){if(Wt===Hs)throw Wt;var de=ni(29,Wt,null,K.mode);return de.lanes=mt,de.return=K,de}finally{}}}var qa=cp(!0),up=cp(!1),Lr=bt(null),il=bt(0);function fp(e,n){e=Wi,Pt(il,e),Pt(Lr,n),Wi=e|n.baseLanes}function nu(){Pt(il,Wi),Pt(Lr,Lr.current)}function iu(){Wi=il.current,Kt(Lr),Kt(il)}var $n=bt(null),Ei=null;function ca(e){var n=e.alternate;Pt(rn,rn.current&1),Pt($n,e),Ei===null&&(n===null||Lr.current!==null||n.memoizedState!==null)&&(Ei=e)}function hp(e){if(e.tag===22){if(Pt(rn,rn.current),Pt($n,e),Ei===null){var n=e.alternate;n!==null&&n.memoizedState!==null&&(Ei=e)}}else ua()}function ua(){Pt(rn,rn.current),Pt($n,$n.current)}function Pi(e){Kt($n),Ei===e&&(Ei=null),Kt(rn)}var rn=bt(0);function al(e){for(var n=e;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if(n.flags&128)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var M0=typeof AbortController<"u"?AbortController:function(){var e=[],n=this.signal={aborted:!1,addEventListener:function(a,s){e.push(s)}};this.abort=function(){n.aborted=!0,e.forEach(function(a){return a()})}},E0=o.unstable_scheduleCallback,T0=o.unstable_NormalPriority,sn={$$typeof:M,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function au(){return{controller:new M0,data:new Map,refCount:0}}function Xs(e){e.refCount--,e.refCount===0&&E0(T0,function(){e.controller.abort()})}var Ws=null,ru=0,Nr=0,Or=null;function b0(e,n){if(Ws===null){var a=Ws=[];ru=0,Nr=hf(),Or={status:"pending",value:void 0,then:function(s){a.push(s)}}}return ru++,n.then(dp,dp),n}function dp(){if(--ru===0&&Ws!==null){Or!==null&&(Or.status="fulfilled");var e=Ws;Ws=null,Nr=0,Or=null;for(var n=0;n<e.length;n++)(0,e[n])()}}function A0(e,n){var a=[],s={status:"pending",value:null,reason:null,then:function(c){a.push(c)}};return e.then(function(){s.status="fulfilled",s.value=n;for(var c=0;c<a.length;c++)(0,a[c])(n)},function(c){for(s.status="rejected",s.reason=c,c=0;c<a.length;c++)(0,a[c])(void 0)}),s}var pp=R.S;R.S=function(e,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&b0(e,n),pp!==null&&pp(e,n)};var Ya=bt(null);function su(){var e=Ya.current;return e!==null?e:Be.pooledCache}function rl(e,n){n===null?Pt(Ya,Ya.current):Pt(Ya,n.pool)}function mp(){var e=su();return e===null?null:{parent:sn._currentValue,pool:e}}var fa=0,ue=null,Le=null,Ke=null,sl=!1,Pr=!1,ja=!1,ol=0,qs=0,zr=null,R0=0;function je(){throw Error(r(321))}function ou(e,n){if(n===null)return!1;for(var a=0;a<n.length&&a<e.length;a++)if(!Gn(e[a],n[a]))return!1;return!0}function lu(e,n,a,s,c,f){return fa=f,ue=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,R.H=e===null||e.memoizedState===null?Za:ha,ja=!1,f=a(s,c),ja=!1,Pr&&(f=gp(n,a,s,c)),_p(e),f}function _p(e){R.H=Ti;var n=Le!==null&&Le.next!==null;if(fa=0,Ke=Le=ue=null,sl=!1,qs=0,zr=null,n)throw Error(r(300));e===null||un||(e=e.dependencies,e!==null&&_l(e)&&(un=!0))}function gp(e,n,a,s){ue=e;var c=0;do{if(Pr&&(zr=null),qs=0,Pr=!1,25<=c)throw Error(r(301));if(c+=1,Ke=Le=null,e.updateQueue!=null){var f=e.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}R.H=Ka,f=n(a,s)}while(Pr);return f}function C0(){var e=R.H,n=e.useState()[0];return n=typeof n.then=="function"?Ys(n):n,e=e.useState()[0],(Le!==null?Le.memoizedState:null)!==e&&(ue.flags|=1024),n}function cu(){var e=ol!==0;return ol=0,e}function uu(e,n,a){n.updateQueue=e.updateQueue,n.flags&=-2053,e.lanes&=~a}function fu(e){if(sl){for(e=e.memoizedState;e!==null;){var n=e.queue;n!==null&&(n.pending=null),e=e.next}sl=!1}fa=0,Ke=Le=ue=null,Pr=!1,qs=ol=0,zr=null}function Bn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ke===null?ue.memoizedState=Ke=e:Ke=Ke.next=e,Ke}function Qe(){if(Le===null){var e=ue.alternate;e=e!==null?e.memoizedState:null}else e=Le.next;var n=Ke===null?ue.memoizedState:Ke.next;if(n!==null)Ke=n,Le=e;else{if(e===null)throw ue.alternate===null?Error(r(467)):Error(r(310));Le=e,e={memoizedState:Le.memoizedState,baseState:Le.baseState,baseQueue:Le.baseQueue,queue:Le.queue,next:null},Ke===null?ue.memoizedState=Ke=e:Ke=Ke.next=e}return Ke}var ll;ll=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function Ys(e){var n=qs;return qs+=1,zr===null&&(zr=[]),e=sp(zr,e,n),n=ue,(Ke===null?n.memoizedState:Ke.next)===null&&(n=n.alternate,R.H=n===null||n.memoizedState===null?Za:ha),e}function cl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Ys(e);if(e.$$typeof===M)return yn(e)}throw Error(r(438,String(e)))}function hu(e){var n=null,a=ue.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ue.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(c){return c.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=ll(),ue.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(e),s=0;s<e;s++)a[s]=D;return n.index++,a}function zi(e,n){return typeof n=="function"?n(e):n}function ul(e){var n=Qe();return du(n,Le,e)}function du(e,n,a){var s=e.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var c=e.baseQueue,f=s.pending;if(f!==null){if(c!==null){var S=c.next;c.next=f.next,f.next=S}n.baseQueue=c=f,s.pending=null}if(f=e.baseState,c===null)e.memoizedState=f;else{n=c.next;var C=S=null,N=null,X=n,ut=!1;do{var xt=X.lane&-536870913;if(xt!==X.lane?(ye&xt)===xt:(fa&xt)===xt){var at=X.revertLane;if(at===0)N!==null&&(N=N.next={lane:0,revertLane:0,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null}),xt===Nr&&(ut=!0);else if((fa&at)===at){X=X.next,at===Nr&&(ut=!0);continue}else xt={lane:0,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},N===null?(C=N=xt,S=f):N=N.next=xt,ue.lanes|=at,ya|=at;xt=X.action,ja&&a(f,xt),f=X.hasEagerState?X.eagerState:a(f,xt)}else at={lane:xt,revertLane:X.revertLane,action:X.action,hasEagerState:X.hasEagerState,eagerState:X.eagerState,next:null},N===null?(C=N=at,S=f):N=N.next=at,ue.lanes|=xt,ya|=xt;X=X.next}while(X!==null&&X!==n);if(N===null?S=f:N.next=C,!Gn(f,e.memoizedState)&&(un=!0,ut&&(a=Or,a!==null)))throw a;e.memoizedState=f,e.baseState=S,e.baseQueue=N,s.lastRenderedState=f}return c===null&&(s.lanes=0),[e.memoizedState,s.dispatch]}function pu(e){var n=Qe(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=e;var s=a.dispatch,c=a.pending,f=n.memoizedState;if(c!==null){a.pending=null;var S=c=c.next;do f=e(f,S.action),S=S.next;while(S!==c);Gn(f,n.memoizedState)||(un=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function vp(e,n,a){var s=ue,c=Qe(),f=be;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var S=!Gn((Le||c).memoizedState,a);if(S&&(c.memoizedState=a,un=!0),c=c.queue,gu(yp.bind(null,s,c,e),[e]),c.getSnapshot!==n||S||Ke!==null&&Ke.memoizedState.tag&1){if(s.flags|=2048,Br(9,Sp.bind(null,s,c,a,n),{destroy:void 0},null),Be===null)throw Error(r(349));f||fa&60||xp(s,n,a)}return a}function xp(e,n,a){e.flags|=16384,e={getSnapshot:n,value:a},n=ue.updateQueue,n===null?(n=ll(),ue.updateQueue=n,n.stores=[e]):(a=n.stores,a===null?n.stores=[e]:a.push(e))}function Sp(e,n,a,s){n.value=a,n.getSnapshot=s,Mp(n)&&Ep(e)}function yp(e,n,a){return a(function(){Mp(n)&&Ep(e)})}function Mp(e){var n=e.getSnapshot;e=e.value;try{var a=n();return!Gn(e,a)}catch{return!0}}function Ep(e){var n=la(e,2);n!==null&&Dn(n,e,2)}function mu(e){var n=Bn();if(typeof e=="function"){var a=e;if(e=a(),ja){re(!0);try{a()}finally{re(!1)}}}return n.memoizedState=n.baseState=e,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:e},n}function Tp(e,n,a,s){return e.baseState=a,du(e,Le,typeof s=="function"?s:zi)}function w0(e,n,a,s,c){if(dl(e))throw Error(r(485));if(e=n.action,e!==null){var f={payload:c,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(S){f.listeners.push(S)}};R.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,bp(n,f)):(f.next=a.next,n.pending=a.next=f)}}function bp(e,n){var a=n.action,s=n.payload,c=e.state;if(n.isTransition){var f=R.T,S={};R.T=S;try{var C=a(c,s),N=R.S;N!==null&&N(S,C),Ap(e,n,C)}catch(X){_u(e,n,X)}finally{R.T=f}}else try{f=a(c,s),Ap(e,n,f)}catch(X){_u(e,n,X)}}function Ap(e,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){Rp(e,n,s)},function(s){return _u(e,n,s)}):Rp(e,n,a)}function Rp(e,n,a){n.status="fulfilled",n.value=a,Cp(n),e.state=a,n=e.pending,n!==null&&(a=n.next,a===n?e.pending=null:(a=a.next,n.next=a,bp(e,a)))}function _u(e,n,a){var s=e.pending;if(e.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,Cp(n),n=n.next;while(n!==s)}e.action=null}function Cp(e){e=e.listeners;for(var n=0;n<e.length;n++)(0,e[n])()}function wp(e,n){return n}function Dp(e,n){if(be){var a=Be.formState;if(a!==null){t:{var s=ue;if(be){if(_n){e:{for(var c=_n,f=Mi;c.nodeType!==8;){if(!f){c=null;break e}if(c=di(c.nextSibling),c===null){c=null;break e}}f=c.data,c=f==="F!"||f==="F"?c:null}if(c){_n=di(c.nextSibling),s=c.data==="F!";break t}}Wa(s)}s=!1}s&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:wp,lastRenderedState:n},a.queue=s,a=jp.bind(null,ue,s),s.dispatch=a,s=mu(!1),f=Mu.bind(null,ue,!1,s.queue),s=Bn(),c={state:n,dispatch:null,action:e,pending:null},s.queue=c,a=w0.bind(null,ue,c,f,a),c.dispatch=a,s.memoizedState=e,[n,a,!1]}function Up(e){var n=Qe();return Lp(n,Le,e)}function Lp(e,n,a){n=du(e,n,wp)[0],e=ul(zi)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?Ys(n):n;var s=Qe(),c=s.queue,f=c.dispatch;return a!==s.memoizedState&&(ue.flags|=2048,Br(9,D0.bind(null,c,a),{destroy:void 0},null)),[n,f,e]}function D0(e,n){e.action=n}function Np(e){var n=Qe(),a=Le;if(a!==null)return Lp(n,a,e);Qe(),n=n.memoizedState,a=Qe();var s=a.queue.dispatch;return a.memoizedState=e,[n,s,!1]}function Br(e,n,a,s){return e={tag:e,create:n,inst:a,deps:s,next:null},n=ue.updateQueue,n===null&&(n=ll(),ue.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=e.next=e:(s=a.next,a.next=e,e.next=s,n.lastEffect=e),e}function Op(){return Qe().memoizedState}function fl(e,n,a,s){var c=Bn();ue.flags|=e,c.memoizedState=Br(1|n,a,{destroy:void 0},s===void 0?null:s)}function hl(e,n,a,s){var c=Qe();s=s===void 0?null:s;var f=c.memoizedState.inst;Le!==null&&s!==null&&ou(s,Le.memoizedState.deps)?c.memoizedState=Br(n,a,f,s):(ue.flags|=e,c.memoizedState=Br(1|n,a,f,s))}function Pp(e,n){fl(8390656,8,e,n)}function gu(e,n){hl(2048,8,e,n)}function zp(e,n){return hl(4,2,e,n)}function Bp(e,n){return hl(4,4,e,n)}function Fp(e,n){if(typeof n=="function"){e=e();var a=n(e);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return e=e(),n.current=e,function(){n.current=null}}function Ip(e,n,a){a=a!=null?a.concat([e]):null,hl(4,4,Fp.bind(null,n,e),a)}function vu(){}function Hp(e,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&ou(n,s[1])?s[0]:(a.memoizedState=[e,n],e)}function Gp(e,n){var a=Qe();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&ou(n,s[1]))return s[0];if(s=e(),ja){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[s,n],s}function xu(e,n,a){return a===void 0||fa&1073741824?e.memoizedState=n:(e.memoizedState=a,e=km(),ue.lanes|=e,ya|=e,a)}function Vp(e,n,a,s){return Gn(a,n)?a:Lr.current!==null?(e=xu(e,a,s),Gn(e,n)||(un=!0),e):fa&42?(e=km(),ue.lanes|=e,ya|=e,n):(un=!0,e.memoizedState=a)}function kp(e,n,a,s,c){var f=j.p;j.p=f!==0&&8>f?f:8;var S=R.T,C={};R.T=C,Mu(e,!1,n,a);try{var N=c(),X=R.S;if(X!==null&&X(C,N),N!==null&&typeof N=="object"&&typeof N.then=="function"){var ut=A0(N,s);js(e,n,ut,Wn(e))}else js(e,n,s,Wn(e))}catch(xt){js(e,n,{then:function(){},status:"rejected",reason:xt},Wn())}finally{j.p=f,R.T=S}}function U0(){}function Su(e,n,a,s){if(e.tag!==5)throw Error(r(476));var c=Xp(e).queue;kp(e,c,n,dt,a===null?U0:function(){return Wp(e),a(s)})}function Xp(e){var n=e.memoizedState;if(n!==null)return n;n={memoizedState:dt,baseState:dt,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:dt},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:zi,lastRenderedState:a},next:null},e.memoizedState=n,e=e.alternate,e!==null&&(e.memoizedState=n),n}function Wp(e){var n=Xp(e).next.queue;js(e,n,{},Wn())}function yu(){return yn(mo)}function qp(){return Qe().memoizedState}function Yp(){return Qe().memoizedState}function L0(e){for(var n=e.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();e=ma(a);var s=_a(n,e,a);s!==null&&(Dn(s,n,a),Qs(s,n,a)),n={cache:au()},e.payload=n;return}n=n.return}}function N0(e,n,a){var s=Wn();a={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null},dl(e)?Zp(n,a):(a=Qc(e,n,a,s),a!==null&&(Dn(a,e,s),Kp(a,n,s)))}function jp(e,n,a){var s=Wn();js(e,n,a,s)}function js(e,n,a,s){var c={lane:s,revertLane:0,action:a,hasEagerState:!1,eagerState:null,next:null};if(dl(e))Zp(n,c);else{var f=e.alternate;if(e.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var S=n.lastRenderedState,C=f(S,a);if(c.hasEagerState=!0,c.eagerState=C,Gn(C,S))return Ko(e,n,c,0),Be===null&&Zo(),!1}catch{}finally{}if(a=Qc(e,n,c,s),a!==null)return Dn(a,e,s),Kp(a,n,s),!0}return!1}function Mu(e,n,a,s){if(s={lane:2,revertLane:hf(),action:s,hasEagerState:!1,eagerState:null,next:null},dl(e)){if(n)throw Error(r(479))}else n=Qc(e,a,s,2),n!==null&&Dn(n,e,2)}function dl(e){var n=e.alternate;return e===ue||n!==null&&n===ue}function Zp(e,n){Pr=sl=!0;var a=e.pending;a===null?n.next=n:(n.next=a.next,a.next=n),e.pending=n}function Kp(e,n,a){if(a&4194176){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,yi(e,a)}}var Ti={readContext:yn,use:cl,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useLayoutEffect:je,useInsertionEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useSyncExternalStore:je,useId:je};Ti.useCacheRefresh=je,Ti.useMemoCache=je,Ti.useHostTransitionStatus=je,Ti.useFormState=je,Ti.useActionState=je,Ti.useOptimistic=je;var Za={readContext:yn,use:cl,useCallback:function(e,n){return Bn().memoizedState=[e,n===void 0?null:n],e},useContext:yn,useEffect:Pp,useImperativeHandle:function(e,n,a){a=a!=null?a.concat([e]):null,fl(4194308,4,Fp.bind(null,n,e),a)},useLayoutEffect:function(e,n){return fl(4194308,4,e,n)},useInsertionEffect:function(e,n){fl(4,2,e,n)},useMemo:function(e,n){var a=Bn();n=n===void 0?null:n;var s=e();if(ja){re(!0);try{e()}finally{re(!1)}}return a.memoizedState=[s,n],s},useReducer:function(e,n,a){var s=Bn();if(a!==void 0){var c=a(n);if(ja){re(!0);try{a(n)}finally{re(!1)}}}else c=n;return s.memoizedState=s.baseState=c,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:c},s.queue=e,e=e.dispatch=N0.bind(null,ue,e),[s.memoizedState,e]},useRef:function(e){var n=Bn();return e={current:e},n.memoizedState=e},useState:function(e){e=mu(e);var n=e.queue,a=jp.bind(null,ue,n);return n.dispatch=a,[e.memoizedState,a]},useDebugValue:vu,useDeferredValue:function(e,n){var a=Bn();return xu(a,e,n)},useTransition:function(){var e=mu(!1);return e=kp.bind(null,ue,e.queue,!0,!1),Bn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,n,a){var s=ue,c=Bn();if(be){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Be===null)throw Error(r(349));ye&60||xp(s,n,a)}c.memoizedState=a;var f={value:a,getSnapshot:n};return c.queue=f,Pp(yp.bind(null,s,f,e),[e]),s.flags|=2048,Br(9,Sp.bind(null,s,f,a,n),{destroy:void 0},null),a},useId:function(){var e=Bn(),n=Be.identifierPrefix;if(be){var a=Oi,s=Ni;a=(s&~(1<<32-jt(s)-1)).toString(32)+a,n=":"+n+"R"+a,a=ol++,0<a&&(n+="H"+a.toString(32)),n+=":"}else a=R0++,n=":"+n+"r"+a.toString(32)+":";return e.memoizedState=n},useCacheRefresh:function(){return Bn().memoizedState=L0.bind(null,ue)}};Za.useMemoCache=hu,Za.useHostTransitionStatus=yu,Za.useFormState=Dp,Za.useActionState=Dp,Za.useOptimistic=function(e){var n=Bn();n.memoizedState=n.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Mu.bind(null,ue,!0,a),a.dispatch=n,[e,n]};var ha={readContext:yn,use:cl,useCallback:Hp,useContext:yn,useEffect:gu,useImperativeHandle:Ip,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:ul,useRef:Op,useState:function(){return ul(zi)},useDebugValue:vu,useDeferredValue:function(e,n){var a=Qe();return Vp(a,Le.memoizedState,e,n)},useTransition:function(){var e=ul(zi)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:vp,useId:qp};ha.useCacheRefresh=Yp,ha.useMemoCache=hu,ha.useHostTransitionStatus=yu,ha.useFormState=Up,ha.useActionState=Up,ha.useOptimistic=function(e,n){var a=Qe();return Tp(a,Le,e,n)};var Ka={readContext:yn,use:cl,useCallback:Hp,useContext:yn,useEffect:gu,useImperativeHandle:Ip,useInsertionEffect:zp,useLayoutEffect:Bp,useMemo:Gp,useReducer:pu,useRef:Op,useState:function(){return pu(zi)},useDebugValue:vu,useDeferredValue:function(e,n){var a=Qe();return Le===null?xu(a,e,n):Vp(a,Le.memoizedState,e,n)},useTransition:function(){var e=pu(zi)[0],n=Qe().memoizedState;return[typeof e=="boolean"?e:Ys(e),n]},useSyncExternalStore:vp,useId:qp};Ka.useCacheRefresh=Yp,Ka.useMemoCache=hu,Ka.useHostTransitionStatus=yu,Ka.useFormState=Np,Ka.useActionState=Np,Ka.useOptimistic=function(e,n){var a=Qe();return Le!==null?Tp(a,Le,e,n):(a.baseState=e,[e,a.queue.dispatch])};function Eu(e,n,a,s){n=e.memoizedState,a=a(s,n),a=a==null?n:b({},n,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var Tu={isMounted:function(e){return(e=e._reactInternals)?Y(e)===e:!1},enqueueSetState:function(e,n,a){e=e._reactInternals;var s=Wn(),c=ma(s);c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(Dn(n,e,s),Qs(n,e,s))},enqueueReplaceState:function(e,n,a){e=e._reactInternals;var s=Wn(),c=ma(s);c.tag=1,c.payload=n,a!=null&&(c.callback=a),n=_a(e,c,s),n!==null&&(Dn(n,e,s),Qs(n,e,s))},enqueueForceUpdate:function(e,n){e=e._reactInternals;var a=Wn(),s=ma(a);s.tag=2,n!=null&&(s.callback=n),n=_a(e,s,a),n!==null&&(Dn(n,e,a),Qs(n,e,a))}};function Qp(e,n,a,s,c,f,S){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(s,f,S):n.prototype&&n.prototype.isPureReactComponent?!Ps(a,s)||!Ps(c,f):!0}function Jp(e,n,a,s){e=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==e&&Tu.enqueueReplaceState(n,n.state,null)}function Qa(e,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(e=e.defaultProps){a===n&&(a=b({},a));for(var c in e)a[c]===void 0&&(a[c]=e[c])}return a}var pl=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)};function $p(e){pl(e)}function tm(e){console.error(e)}function em(e){pl(e)}function ml(e,n){try{var a=e.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function nm(e,n,a){try{var s=e.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(c){setTimeout(function(){throw c})}}function bu(e,n,a){return a=ma(a),a.tag=3,a.payload={element:null},a.callback=function(){ml(e,n)},a}function im(e){return e=ma(e),e.tag=3,e}function am(e,n,a,s){var c=a.type.getDerivedStateFromError;if(typeof c=="function"){var f=s.value;e.payload=function(){return c(f)},e.callback=function(){nm(n,a,s)}}var S=a.stateNode;S!==null&&typeof S.componentDidCatch=="function"&&(e.callback=function(){nm(n,a,s),typeof c!="function"&&(Ma===null?Ma=new Set([this]):Ma.add(this));var C=s.stack;this.componentDidCatch(s.value,{componentStack:C!==null?C:""})})}function O0(e,n,a,s,c){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Ks(n,a,c,!0),a=$n.current,a!==null){switch(a.tag){case 13:return Ei===null?of():a.alternate===null&&We===0&&(We=3),a.flags&=-257,a.flags|=65536,a.lanes=c,s===eu?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),cf(e,s,c)),!1;case 22:return a.flags|=65536,s===eu?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),cf(e,s,c)),!1}throw Error(r(435,a.tag))}return cf(e,s,c),of(),!1}if(be)return n=$n.current,n!==null?(!(n.flags&65536)&&(n.flags|=256),n.flags|=65536,n.lanes=c,s!==tu&&(e=Error(r(422),{cause:s}),Is(Kn(e,a)))):(s!==tu&&(n=Error(r(423),{cause:s}),Is(Kn(n,a))),e=e.current.alternate,e.flags|=65536,c&=-c,e.lanes|=c,s=Kn(s,a),c=bu(e.stateNode,s,c),Hu(e,c),We!==4&&(We=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),ro===null?ro=[f]:ro.push(f),We!==4&&(We=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,e=c&-c,a.lanes|=e,e=bu(a.stateNode,s,e),Hu(a,e),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ma===null||!Ma.has(f))))return a.flags|=65536,c&=-c,a.lanes|=c,c=im(c),am(c,e,a,s),Hu(a,c),!1}a=a.return}while(a!==null);return!1}var rm=Error(r(461)),un=!1;function gn(e,n,a,s){n.child=e===null?up(n,null,a,s):qa(n,e.child,a,s)}function sm(e,n,a,s,c){a=a.render;var f=n.ref;if("ref"in s){var S={};for(var C in s)C!=="ref"&&(S[C]=s[C])}else S=s;return $a(n),s=lu(e,n,a,S,f,c),C=cu(),e!==null&&!un?(uu(e,n,c),Bi(e,n,c)):(be&&C&&Jc(n),n.flags|=1,gn(e,n,s,c),n.child)}function om(e,n,a,s,c){if(e===null){var f=a.type;return typeof f=="function"&&!ju(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,lm(e,n,f,s,c)):(e=Sl(a.type,null,s,n,n.mode,c),e.ref=n.ref,e.return=n,n.child=e)}if(f=e.child,!Ou(e,c)){var S=f.memoizedProps;if(a=a.compare,a=a!==null?a:Ps,a(S,s)&&e.ref===n.ref)return Bi(e,n,c)}return n.flags|=1,e=Sa(f,s),e.ref=n.ref,e.return=n,n.child=e}function lm(e,n,a,s,c){if(e!==null){var f=e.memoizedProps;if(Ps(f,s)&&e.ref===n.ref)if(un=!1,n.pendingProps=s=f,Ou(e,c))e.flags&131072&&(un=!0);else return n.lanes=e.lanes,Bi(e,n,c)}return Au(e,n,a,s,c)}function cm(e,n,a){var s=n.pendingProps,c=s.children,f=(n.stateNode._pendingVisibility&2)!==0,S=e!==null?e.memoizedState:null;if(Zs(e,n),s.mode==="hidden"||f){if(n.flags&128){if(s=S!==null?S.baseLanes|a:a,e!==null){for(c=n.child=e.child,f=0;c!==null;)f=f|c.lanes|c.childLanes,c=c.sibling;n.childLanes=f&~s}else n.childLanes=0,n.child=null;return um(e,n,s,a)}if(a&536870912)n.memoizedState={baseLanes:0,cachePool:null},e!==null&&rl(n,S!==null?S.cachePool:null),S!==null?fp(n,S):nu(),hp(n);else return n.lanes=n.childLanes=536870912,um(e,n,S!==null?S.baseLanes|a:a,a)}else S!==null?(rl(n,S.cachePool),fp(n,S),ua(),n.memoizedState=null):(e!==null&&rl(n,null),nu(),ua());return gn(e,n,c,a),n.child}function um(e,n,a,s){var c=su();return c=c===null?null:{parent:sn._currentValue,pool:c},n.memoizedState={baseLanes:a,cachePool:c},e!==null&&rl(n,null),nu(),hp(n),e!==null&&Ks(e,n,s,!0),null}function Zs(e,n){var a=n.ref;if(a===null)e!==null&&e.ref!==null&&(n.flags|=2097664);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(e===null||e.ref!==a)&&(n.flags|=2097664)}}function Au(e,n,a,s,c){return $a(n),a=lu(e,n,a,s,void 0,c),s=cu(),e!==null&&!un?(uu(e,n,c),Bi(e,n,c)):(be&&s&&Jc(n),n.flags|=1,gn(e,n,a,c),n.child)}function fm(e,n,a,s,c,f){return $a(n),n.updateQueue=null,a=gp(n,s,a,c),_p(e),s=cu(),e!==null&&!un?(uu(e,n,f),Bi(e,n,f)):(be&&s&&Jc(n),n.flags|=1,gn(e,n,a,f),n.child)}function hm(e,n,a,s,c){if($a(n),n.stateNode===null){var f=Cr,S=a.contextType;typeof S=="object"&&S!==null&&(f=yn(S)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Tu,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},Fu(n),S=a.contextType,f.context=typeof S=="object"&&S!==null?yn(S):Cr,f.state=n.memoizedState,S=a.getDerivedStateFromProps,typeof S=="function"&&(Eu(n,a,S,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(S=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),S!==f.state&&Tu.enqueueReplaceState(f,f.state,null),$s(n,s,f,c),Js(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(e===null){f=n.stateNode;var C=n.memoizedProps,N=Qa(a,C);f.props=N;var X=f.context,ut=a.contextType;S=Cr,typeof ut=="object"&&ut!==null&&(S=yn(ut));var xt=a.getDerivedStateFromProps;ut=typeof xt=="function"||typeof f.getSnapshotBeforeUpdate=="function",C=n.pendingProps!==C,ut||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(C||X!==S)&&Jp(n,f,s,S),pa=!1;var at=n.memoizedState;f.state=at,$s(n,s,f,c),Js(),X=n.memoizedState,C||at!==X||pa?(typeof xt=="function"&&(Eu(n,a,xt,s),X=n.memoizedState),(N=pa||Qp(n,a,N,s,at,X,S))?(ut||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=X),f.props=s,f.state=X,f.context=S,s=N):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,Iu(e,n),S=n.memoizedProps,ut=Qa(a,S),f.props=ut,xt=n.pendingProps,at=f.context,X=a.contextType,N=Cr,typeof X=="object"&&X!==null&&(N=yn(X)),C=a.getDerivedStateFromProps,(X=typeof C=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(S!==xt||at!==N)&&Jp(n,f,s,N),pa=!1,at=n.memoizedState,f.state=at,$s(n,s,f,c),Js();var ct=n.memoizedState;S!==xt||at!==ct||pa||e!==null&&e.dependencies!==null&&_l(e.dependencies)?(typeof C=="function"&&(Eu(n,a,C,s),ct=n.memoizedState),(ut=pa||Qp(n,a,ut,s,at,ct,N)||e!==null&&e.dependencies!==null&&_l(e.dependencies))?(X||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,ct,N),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,ct,N)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=ct),f.props=s,f.state=ct,f.context=N,s=ut):(typeof f.componentDidUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||S===e.memoizedProps&&at===e.memoizedState||(n.flags|=1024),s=!1)}return f=s,Zs(e,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,e!==null&&s?(n.child=qa(n,e.child,null,c),n.child=qa(n,null,a,c)):gn(e,n,a,c),n.memoizedState=f.state,e=n.child):e=Bi(e,n,c),e}function dm(e,n,a,s){return Fs(),n.flags|=256,gn(e,n,a,s),n.child}var Ru={dehydrated:null,treeContext:null,retryLane:0};function Cu(e){return{baseLanes:e,cachePool:mp()}}function wu(e,n,a){return e=e!==null?e.childLanes&~a:0,n&&(e|=ii),e}function pm(e,n,a){var s=n.pendingProps,c=!1,f=(n.flags&128)!==0,S;if((S=f)||(S=e!==null&&e.memoizedState===null?!1:(rn.current&2)!==0),S&&(c=!0,n.flags&=-129),S=(n.flags&32)!==0,n.flags&=-33,e===null){if(be){if(c?ca(n):ua(),be){var C=_n,N;if(N=C){t:{for(N=C,C=Mi;N.nodeType!==8;){if(!C){C=null;break t}if(N=di(N.nextSibling),N===null){C=null;break t}}C=N}C!==null?(n.memoizedState={dehydrated:C,treeContext:ka!==null?{id:Ni,overflow:Oi}:null,retryLane:536870912},N=ni(18,null,null,0),N.stateNode=C,N.return=n,n.child=N,wn=n,_n=null,N=!0):N=!1}N||Wa(n)}if(C=n.memoizedState,C!==null&&(C=C.dehydrated,C!==null))return C.data==="$!"?n.lanes=16:n.lanes=536870912,null;Pi(n)}return C=s.children,s=s.fallback,c?(ua(),c=n.mode,C=Uu({mode:"hidden",children:C},c),s=er(s,c,a,null),C.return=n,s.return=n,C.sibling=s,n.child=C,c=n.child,c.memoizedState=Cu(a),c.childLanes=wu(e,S,a),n.memoizedState=Ru,s):(ca(n),Du(n,C))}if(N=e.memoizedState,N!==null&&(C=N.dehydrated,C!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=Lu(e,n,a)):n.memoizedState!==null?(ua(),n.child=e.child,n.flags|=128,n=null):(ua(),c=s.fallback,C=n.mode,s=Uu({mode:"visible",children:s.children},C),c=er(c,C,a,null),c.flags|=2,s.return=n,c.return=n,s.sibling=c,n.child=s,qa(n,e.child,null,a),s=n.child,s.memoizedState=Cu(a),s.childLanes=wu(e,S,a),n.memoizedState=Ru,n=c);else if(ca(n),C.data==="$!"){if(S=C.nextSibling&&C.nextSibling.dataset,S)var X=S.dgst;S=X,s=Error(r(419)),s.stack="",s.digest=S,Is({value:s,source:null,stack:null}),n=Lu(e,n,a)}else if(un||Ks(e,n,a,!1),S=(a&e.childLanes)!==0,un||S){if(S=Be,S!==null){if(s=a&-a,s&42)s=1;else switch(s){case 2:s=1;break;case 8:s=4;break;case 32:s=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:s=64;break;case 268435456:s=134217728;break;default:s=0}if(s=s&(S.suspendedLanes|a)?0:s,s!==0&&s!==N.retryLane)throw N.retryLane=s,la(e,s),Dn(S,e,s),rm}C.data==="$?"||of(),n=Lu(e,n,a)}else C.data==="$?"?(n.flags|=128,n.child=e.child,n=Z0.bind(null,e),C._reactRetry=n,n=null):(e=N.treeContext,_n=di(C.nextSibling),wn=n,be=!0,fi=null,Mi=!1,e!==null&&(Qn[Jn++]=Ni,Qn[Jn++]=Oi,Qn[Jn++]=ka,Ni=e.id,Oi=e.overflow,ka=n),n=Du(n,s.children),n.flags|=4096);return n}return c?(ua(),c=s.fallback,C=n.mode,N=e.child,X=N.sibling,s=Sa(N,{mode:"hidden",children:s.children}),s.subtreeFlags=N.subtreeFlags&31457280,X!==null?c=Sa(X,c):(c=er(c,C,a,null),c.flags|=2),c.return=n,s.return=n,s.sibling=c,n.child=s,s=c,c=n.child,C=e.child.memoizedState,C===null?C=Cu(a):(N=C.cachePool,N!==null?(X=sn._currentValue,N=N.parent!==X?{parent:X,pool:X}:N):N=mp(),C={baseLanes:C.baseLanes|a,cachePool:N}),c.memoizedState=C,c.childLanes=wu(e,S,a),n.memoizedState=Ru,s):(ca(n),a=e.child,e=a.sibling,a=Sa(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,e!==null&&(S=n.deletions,S===null?(n.deletions=[e],n.flags|=16):S.push(e)),n.child=a,n.memoizedState=null,a)}function Du(e,n){return n=Uu({mode:"visible",children:n},e.mode),n.return=e,e.child=n}function Uu(e,n){return Hm(e,n,0,null)}function Lu(e,n,a){return qa(n,e.child,null,a),e=Du(n,n.pendingProps.children),e.flags|=2,n.memoizedState=null,e}function mm(e,n,a){e.lanes|=n;var s=e.alternate;s!==null&&(s.lanes|=n),zu(e.return,n,a)}function Nu(e,n,a,s,c){var f=e.memoizedState;f===null?e.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:c}:(f.isBackwards=n,f.rendering=null,f.renderingStartTime=0,f.last=s,f.tail=a,f.tailMode=c)}function _m(e,n,a){var s=n.pendingProps,c=s.revealOrder,f=s.tail;if(gn(e,n,s.children,a),s=rn.current,s&2)s=s&1|2,n.flags|=128;else{if(e!==null&&e.flags&128)t:for(e=n.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&mm(e,a,n);else if(e.tag===19)mm(e,a,n);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break t;for(;e.sibling===null;){if(e.return===null||e.return===n)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}s&=1}switch(Pt(rn,s),c){case"forwards":for(a=n.child,c=null;a!==null;)e=a.alternate,e!==null&&al(e)===null&&(c=a),a=a.sibling;a=c,a===null?(c=n.child,n.child=null):(c=a.sibling,a.sibling=null),Nu(n,!1,c,a,f);break;case"backwards":for(a=null,c=n.child,n.child=null;c!==null;){if(e=c.alternate,e!==null&&al(e)===null){n.child=c;break}e=c.sibling,c.sibling=a,a=c,c=e}Nu(n,!0,a,null,f);break;case"together":Nu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Bi(e,n,a){if(e!==null&&(n.dependencies=e.dependencies),ya|=n.lanes,!(a&n.childLanes))if(e!==null){if(Ks(e,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(e!==null&&n.child!==e.child)throw Error(r(153));if(n.child!==null){for(e=n.child,a=Sa(e,e.pendingProps),n.child=a,a.return=n;e.sibling!==null;)e=e.sibling,a=a.sibling=Sa(e,e.pendingProps),a.return=n;a.sibling=null}return n.child}function Ou(e,n){return e.lanes&n?!0:(e=e.dependencies,!!(e!==null&&_l(e)))}function P0(e,n,a){switch(n.tag){case 3:pn(n,n.stateNode.containerInfo),da(n,sn,e.memoizedState.cache),Fs();break;case 27:case 5:he(n);break;case 4:pn(n,n.stateNode.containerInfo);break;case 10:da(n,n.type,n.memoizedProps.value);break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ca(n),n.flags|=128,null):a&n.child.childLanes?pm(e,n,a):(ca(n),e=Bi(e,n,a),e!==null?e.sibling:null);ca(n);break;case 19:var c=(e.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Ks(e,n,a,!1),s=(a&n.childLanes)!==0),c){if(s)return _m(e,n,a);n.flags|=128}if(c=n.memoizedState,c!==null&&(c.rendering=null,c.tail=null,c.lastEffect=null),Pt(rn,rn.current),s)break;return null;case 22:case 23:return n.lanes=0,cm(e,n,a);case 24:da(n,sn,e.memoizedState.cache)}return Bi(e,n,a)}function gm(e,n,a){if(e!==null)if(e.memoizedProps!==n.pendingProps)un=!0;else{if(!Ou(e,a)&&!(n.flags&128))return un=!1,P0(e,n,a);un=!!(e.flags&131072)}else un=!1,be&&n.flags&1048576&&ep(n,$o,n.index);switch(n.lanes=0,n.tag){case 16:t:{e=n.pendingProps;var s=n.elementType,c=s._init;if(s=c(s._payload),n.type=s,typeof s=="function")ju(s)?(e=Qa(s,e),n.tag=1,n=hm(null,n,s,e,a)):(n.tag=0,n=Au(null,n,s,e,a));else{if(s!=null){if(c=s.$$typeof,c===E){n.tag=11,n=sm(null,n,s,e,a);break t}else if(c===v){n.tag=14,n=om(null,n,s,e,a);break t}}throw n=G(s)||s,Error(r(306,n,""))}}return n;case 0:return Au(e,n,n.type,n.pendingProps,a);case 1:return s=n.type,c=Qa(s,n.pendingProps),hm(e,n,s,c,a);case 3:t:{if(pn(n,n.stateNode.containerInfo),e===null)throw Error(r(387));var f=n.pendingProps;c=n.memoizedState,s=c.element,Iu(e,n),$s(n,f,null,a);var S=n.memoizedState;if(f=S.cache,da(n,sn,f),f!==c.cache&&Bu(n,[sn],a,!0),Js(),f=S.element,c.isDehydrated)if(c={element:f,isDehydrated:!1,cache:S.cache},n.updateQueue.baseState=c,n.memoizedState=c,n.flags&256){n=dm(e,n,f,a);break t}else if(f!==s){s=Kn(Error(r(424)),n),Is(s),n=dm(e,n,f,a);break t}else for(_n=di(n.stateNode.containerInfo.firstChild),wn=n,be=!0,fi=null,Mi=!0,a=up(n,null,f,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Fs(),f===s){n=Bi(e,n,a);break t}gn(e,n,f,a)}n=n.child}return n;case 26:return Zs(e,n),e===null?(a=S_(n.type,null,n.pendingProps,null))?n.memoizedState=a:be||(a=n.type,e=n.pendingProps,s=Ll(ae.current).createElement(a),s[en]=n,s[nn]=e,vn(s,a,e),Q(s),n.stateNode=s):n.memoizedState=S_(n.type,e.memoizedProps,n.pendingProps,e.memoizedState),null;case 27:return he(n),e===null&&be&&(s=n.stateNode=g_(n.type,n.pendingProps,ae.current),wn=n,Mi=!0,_n=di(s.firstChild)),s=n.pendingProps.children,e!==null||be?gn(e,n,s,a):n.child=qa(n,null,s,a),Zs(e,n),n.child;case 5:return e===null&&be&&((c=s=_n)&&(s=fx(s,n.type,n.pendingProps,Mi),s!==null?(n.stateNode=s,wn=n,_n=di(s.firstChild),Mi=!1,c=!0):c=!1),c||Wa(n)),he(n),c=n.type,f=n.pendingProps,S=e!==null?e.memoizedProps:null,s=f.children,yf(c,f)?s=null:S!==null&&yf(c,S)&&(n.flags|=32),n.memoizedState!==null&&(c=lu(e,n,C0,null,null,a),mo._currentValue=c),Zs(e,n),gn(e,n,s,a),n.child;case 6:return e===null&&be&&((e=a=_n)&&(a=hx(a,n.pendingProps,Mi),a!==null?(n.stateNode=a,wn=n,_n=null,e=!0):e=!1),e||Wa(n)),null;case 13:return pm(e,n,a);case 4:return pn(n,n.stateNode.containerInfo),s=n.pendingProps,e===null?n.child=qa(n,null,s,a):gn(e,n,s,a),n.child;case 11:return sm(e,n,n.type,n.pendingProps,a);case 7:return gn(e,n,n.pendingProps,a),n.child;case 8:return gn(e,n,n.pendingProps.children,a),n.child;case 12:return gn(e,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,da(n,n.type,s.value),gn(e,n,s.children,a),n.child;case 9:return c=n.type._context,s=n.pendingProps.children,$a(n),c=yn(c),s=s(c),n.flags|=1,gn(e,n,s,a),n.child;case 14:return om(e,n,n.type,n.pendingProps,a);case 15:return lm(e,n,n.type,n.pendingProps,a);case 19:return _m(e,n,a);case 22:return cm(e,n,a);case 24:return $a(n),s=yn(sn),e===null?(c=su(),c===null&&(c=Be,f=au(),c.pooledCache=f,f.refCount++,f!==null&&(c.pooledCacheLanes|=a),c=f),n.memoizedState={parent:s,cache:c},Fu(n),da(n,sn,c)):(e.lanes&a&&(Iu(e,n),$s(n,null,null,a),Js()),c=e.memoizedState,f=n.memoizedState,c.parent!==s?(c={parent:s,cache:s},n.memoizedState=c,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=c),da(n,sn,s)):(s=f.cache,da(n,sn,s),s!==c.cache&&Bu(n,[sn],a,!0))),gn(e,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}var Pu=bt(null),Ja=null,Fi=null;function da(e,n,a){Pt(Pu,n._currentValue),n._currentValue=a}function Ii(e){e._currentValue=Pu.current,Kt(Pu)}function zu(e,n,a){for(;e!==null;){var s=e.alternate;if((e.childLanes&n)!==n?(e.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),e===a)break;e=e.return}}function Bu(e,n,a,s){var c=e.child;for(c!==null&&(c.return=e);c!==null;){var f=c.dependencies;if(f!==null){var S=c.child;f=f.firstContext;t:for(;f!==null;){var C=f;f=c;for(var N=0;N<n.length;N++)if(C.context===n[N]){f.lanes|=a,C=f.alternate,C!==null&&(C.lanes|=a),zu(f.return,a,e),s||(S=null);break t}f=C.next}}else if(c.tag===18){if(S=c.return,S===null)throw Error(r(341));S.lanes|=a,f=S.alternate,f!==null&&(f.lanes|=a),zu(S,a,e),S=null}else S=c.child;if(S!==null)S.return=c;else for(S=c;S!==null;){if(S===e){S=null;break}if(c=S.sibling,c!==null){c.return=S.return,S=c;break}S=S.return}c=S}}function Ks(e,n,a,s){e=null;for(var c=n,f=!1;c!==null;){if(!f){if(c.flags&524288)f=!0;else if(c.flags&262144)break}if(c.tag===10){var S=c.alternate;if(S===null)throw Error(r(387));if(S=S.memoizedProps,S!==null){var C=c.type;Gn(c.pendingProps.value,S.value)||(e!==null?e.push(C):e=[C])}}else if(c===I.current){if(S=c.alternate,S===null)throw Error(r(387));S.memoizedState.memoizedState!==c.memoizedState.memoizedState&&(e!==null?e.push(mo):e=[mo])}c=c.return}e!==null&&Bu(n,e,a,s),n.flags|=262144}function _l(e){for(e=e.firstContext;e!==null;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function $a(e){Ja=e,Fi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function yn(e){return vm(Ja,e)}function gl(e,n){return Ja===null&&$a(e),vm(e,n)}function vm(e,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Fi===null){if(e===null)throw Error(r(308));Fi=n,e.dependencies={lanes:0,firstContext:n},e.flags|=524288}else Fi=Fi.next=n;return a}var pa=!1;function Fu(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Iu(e,n){e=e.updateQueue,n.updateQueue===e&&(n.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ma(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _a(e,n,a){var s=e.updateQueue;if(s===null)return null;if(s=s.shared,Ve&2){var c=s.pending;return c===null?n.next=n:(n.next=c.next,c.next=n),s.pending=n,n=Qo(e),$d(e,null,a),n}return Ko(e,s,n,a),Qo(e)}function Qs(e,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194176)!==0)){var s=n.lanes;s&=e.pendingLanes,a|=s,n.lanes=a,yi(e,a)}}function Hu(e,n){var a=e.updateQueue,s=e.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var c=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var S={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?c=f=S:f=f.next=S,a=a.next}while(a!==null);f===null?c=f=n:f=f.next=n}else c=f=n;a={baseState:s.baseState,firstBaseUpdate:c,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=n:e.next=n,a.lastBaseUpdate=n}var Gu=!1;function Js(){if(Gu){var e=Or;if(e!==null)throw e}}function $s(e,n,a,s){Gu=!1;var c=e.updateQueue;pa=!1;var f=c.firstBaseUpdate,S=c.lastBaseUpdate,C=c.shared.pending;if(C!==null){c.shared.pending=null;var N=C,X=N.next;N.next=null,S===null?f=X:S.next=X,S=N;var ut=e.alternate;ut!==null&&(ut=ut.updateQueue,C=ut.lastBaseUpdate,C!==S&&(C===null?ut.firstBaseUpdate=X:C.next=X,ut.lastBaseUpdate=N))}if(f!==null){var xt=c.baseState;S=0,ut=X=N=null,C=f;do{var at=C.lane&-536870913,ct=at!==C.lane;if(ct?(ye&at)===at:(s&at)===at){at!==0&&at===Nr&&(Gu=!0),ut!==null&&(ut=ut.next={lane:0,tag:C.tag,payload:C.payload,callback:null,next:null});t:{var Vt=e,ie=C;at=n;var qe=a;switch(ie.tag){case 1:if(Vt=ie.payload,typeof Vt=="function"){xt=Vt.call(qe,xt,at);break t}xt=Vt;break t;case 3:Vt.flags=Vt.flags&-65537|128;case 0:if(Vt=ie.payload,at=typeof Vt=="function"?Vt.call(qe,xt,at):Vt,at==null)break t;xt=b({},xt,at);break t;case 2:pa=!0}}at=C.callback,at!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=c.callbacks,ct===null?c.callbacks=[at]:ct.push(at))}else ct={lane:at,tag:C.tag,payload:C.payload,callback:C.callback,next:null},ut===null?(X=ut=ct,N=xt):ut=ut.next=ct,S|=at;if(C=C.next,C===null){if(C=c.shared.pending,C===null)break;ct=C,C=ct.next,ct.next=null,c.lastBaseUpdate=ct,c.shared.pending=null}}while(!0);ut===null&&(N=xt),c.baseState=N,c.firstBaseUpdate=X,c.lastBaseUpdate=ut,f===null&&(c.shared.lanes=0),ya|=S,e.lanes=S,e.memoizedState=xt}}function xm(e,n){if(typeof e!="function")throw Error(r(191,e));e.call(n)}function Sm(e,n){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)xm(a[e],n)}function to(e,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var c=s.next;a=c;do{if((a.tag&e)===e){s=void 0;var f=a.create,S=a.inst;s=f(),S.destroy=s}a=a.next}while(a!==c)}}catch(C){ze(n,n.return,C)}}function ga(e,n,a){try{var s=n.updateQueue,c=s!==null?s.lastEffect:null;if(c!==null){var f=c.next;s=f;do{if((s.tag&e)===e){var S=s.inst,C=S.destroy;if(C!==void 0){S.destroy=void 0,c=n;var N=a;try{C()}catch(X){ze(c,N,X)}}}s=s.next}while(s!==f)}}catch(X){ze(n,n.return,X)}}function ym(e){var n=e.updateQueue;if(n!==null){var a=e.stateNode;try{Sm(n,a)}catch(s){ze(e,e.return,s)}}}function Mm(e,n,a){a.props=Qa(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(s){ze(e,n,s)}}function tr(e,n){try{var a=e.ref;if(a!==null){var s=e.stateNode;switch(e.tag){case 26:case 27:case 5:var c=s;break;default:c=s}typeof a=="function"?e.refCleanup=a(c):a.current=c}}catch(f){ze(e,n,f)}}function Vn(e,n){var a=e.ref,s=e.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(c){ze(e,n,c)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(c){ze(e,n,c)}else a.current=null}function Em(e){var n=e.type,a=e.memoizedProps,s=e.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(c){ze(e,e.return,c)}}function Tm(e,n,a){try{var s=e.stateNode;sx(s,e.type,a,n),s[nn]=n}catch(c){ze(e,e.return,c)}}function bm(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27||e.tag===4}function Vu(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||bm(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==27&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function ku(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.nodeType===8?a.parentNode.insertBefore(e,n):a.insertBefore(e,n):(a.nodeType===8?(n=a.parentNode,n.insertBefore(e,a)):(n=a,n.appendChild(e)),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ul));else if(s!==4&&s!==27&&(e=e.child,e!==null))for(ku(e,n,a),e=e.sibling;e!==null;)ku(e,n,a),e=e.sibling}function vl(e,n,a){var s=e.tag;if(s===5||s===6)e=e.stateNode,n?a.insertBefore(e,n):a.appendChild(e);else if(s!==4&&s!==27&&(e=e.child,e!==null))for(vl(e,n,a),e=e.sibling;e!==null;)vl(e,n,a),e=e.sibling}var Hi=!1,Xe=!1,Xu=!1,Am=typeof WeakSet=="function"?WeakSet:Set,fn=null,Rm=!1;function z0(e,n){if(e=e.containerInfo,xf=Fl,e=Xd(e),qc(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else t:{a=(a=e.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var c=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var S=0,C=-1,N=-1,X=0,ut=0,xt=e,at=null;e:for(;;){for(var ct;xt!==a||c!==0&&xt.nodeType!==3||(C=S+c),xt!==f||s!==0&&xt.nodeType!==3||(N=S+s),xt.nodeType===3&&(S+=xt.nodeValue.length),(ct=xt.firstChild)!==null;)at=xt,xt=ct;for(;;){if(xt===e)break e;if(at===a&&++X===c&&(C=S),at===f&&++ut===s&&(N=S),(ct=xt.nextSibling)!==null)break;xt=at,at=xt.parentNode}xt=ct}a=C===-1||N===-1?null:{start:C,end:N}}else a=null}a=a||{start:0,end:0}}else a=null;for(Sf={focusedElem:e,selectionRange:a},Fl=!1,fn=n;fn!==null;)if(n=fn,e=n.child,(n.subtreeFlags&1028)!==0&&e!==null)e.return=n,fn=e;else for(;fn!==null;){switch(n=fn,f=n.alternate,e=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if(e&1024&&f!==null){e=void 0,a=n,c=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Vt=Qa(a.type,c,a.elementType===a.type);e=s.getSnapshotBeforeUpdate(Vt,f),s.__reactInternalSnapshotBeforeUpdate=e}catch(ie){ze(a,a.return,ie)}}break;case 3:if(e&1024){if(e=n.stateNode.containerInfo,a=e.nodeType,a===9)Tf(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Tf(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(r(163))}if(e=n.sibling,e!==null){e.return=n.return,fn=e;break}fn=n.return}return Vt=Rm,Rm=!1,Vt}function Cm(e,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:Vi(e,a),s&4&&to(5,a);break;case 1:if(Vi(e,a),s&4)if(e=a.stateNode,n===null)try{e.componentDidMount()}catch(C){ze(a,a.return,C)}else{var c=Qa(a.type,n.memoizedProps);n=n.memoizedState;try{e.componentDidUpdate(c,n,e.__reactInternalSnapshotBeforeUpdate)}catch(C){ze(a,a.return,C)}}s&64&&ym(a),s&512&&tr(a,a.return);break;case 3:if(Vi(e,a),s&64&&(s=a.updateQueue,s!==null)){if(e=null,a.child!==null)switch(a.child.tag){case 27:case 5:e=a.child.stateNode;break;case 1:e=a.child.stateNode}try{Sm(s,e)}catch(C){ze(a,a.return,C)}}break;case 26:Vi(e,a),s&512&&tr(a,a.return);break;case 27:case 5:Vi(e,a),n===null&&s&4&&Em(a),s&512&&tr(a,a.return);break;case 12:Vi(e,a);break;case 13:Vi(e,a),s&4&&Um(e,a);break;case 22:if(c=a.memoizedState!==null||Hi,!c){n=n!==null&&n.memoizedState!==null||Xe;var f=Hi,S=Xe;Hi=c,(Xe=n)&&!S?va(e,a,(a.subtreeFlags&8772)!==0):Vi(e,a),Hi=f,Xe=S}s&512&&(a.memoizedProps.mode==="manual"?tr(a,a.return):Vn(a,a.return));break;default:Vi(e,a)}}function wm(e){var n=e.alternate;n!==null&&(e.alternate=null,wm(n)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(n=e.stateNode,n!==null&&Rs(n)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Je=null,kn=!1;function Gi(e,n,a){for(a=a.child;a!==null;)Dm(e,n,a),a=a.sibling}function Dm(e,n,a){if(Gt&&typeof Gt.onCommitFiberUnmount=="function")try{Gt.onCommitFiberUnmount(qt,a)}catch{}switch(a.tag){case 26:Xe||Vn(a,n),Gi(e,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Xe||Vn(a,n);var s=Je,c=kn;for(Je=a.stateNode,Gi(e,n,a),a=a.stateNode,n=a.attributes;n.length;)a.removeAttributeNode(n[0]);Rs(a),Je=s,kn=c;break;case 5:Xe||Vn(a,n);case 6:c=Je;var f=kn;if(Je=null,Gi(e,n,a),Je=c,kn=f,Je!==null)if(kn)try{e=Je,s=a.stateNode,e.nodeType===8?e.parentNode.removeChild(s):e.removeChild(s)}catch(S){ze(a,n,S)}else try{Je.removeChild(a.stateNode)}catch(S){ze(a,n,S)}break;case 18:Je!==null&&(kn?(n=Je,a=a.stateNode,n.nodeType===8?Ef(n.parentNode,a):n.nodeType===1&&Ef(n,a),xo(n)):Ef(Je,a.stateNode));break;case 4:s=Je,c=kn,Je=a.stateNode.containerInfo,kn=!0,Gi(e,n,a),Je=s,kn=c;break;case 0:case 11:case 14:case 15:Xe||ga(2,a,n),Xe||ga(4,a,n),Gi(e,n,a);break;case 1:Xe||(Vn(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Mm(a,n,s)),Gi(e,n,a);break;case 21:Gi(e,n,a);break;case 22:Xe||Vn(a,n),Xe=(s=Xe)||a.memoizedState!==null,Gi(e,n,a),Xe=s;break;default:Gi(e,n,a)}}function Um(e,n){if(n.memoizedState===null&&(e=n.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{xo(e)}catch(a){ze(n,n.return,a)}}function B0(e){switch(e.tag){case 13:case 19:var n=e.stateNode;return n===null&&(n=e.stateNode=new Am),n;case 22:return e=e.stateNode,n=e._retryCache,n===null&&(n=e._retryCache=new Am),n;default:throw Error(r(435,e.tag))}}function Wu(e,n){var a=B0(e);n.forEach(function(s){var c=K0.bind(null,e,s);a.has(s)||(a.add(s),s.then(c,c))})}function ti(e,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var c=a[s],f=e,S=n,C=S;t:for(;C!==null;){switch(C.tag){case 27:case 5:Je=C.stateNode,kn=!1;break t;case 3:Je=C.stateNode.containerInfo,kn=!0;break t;case 4:Je=C.stateNode.containerInfo,kn=!0;break t}C=C.return}if(Je===null)throw Error(r(160));Dm(f,S,c),Je=null,kn=!1,f=c.alternate,f!==null&&(f.return=null),c.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)Lm(n,e),n=n.sibling}var hi=null;function Lm(e,n){var a=e.alternate,s=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ti(n,e),ei(e),s&4&&(ga(3,e,e.return),to(3,e),ga(5,e,e.return));break;case 1:ti(n,e),ei(e),s&512&&(Xe||a===null||Vn(a,a.return)),s&64&&Hi&&(e=e.updateQueue,e!==null&&(s=e.callbacks,s!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var c=hi;if(ti(n,e),ei(e),s&512&&(Xe||a===null||Vn(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=e.memoizedState,a===null)if(s===null)if(e.stateNode===null){t:{s=e.type,a=e.memoizedProps,c=c.ownerDocument||c;e:switch(s){case"title":f=c.getElementsByTagName("title")[0],(!f||f[Ia]||f[en]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=c.createElement(s),c.head.insertBefore(f,c.querySelector("head > title"))),vn(f,s,a),f[en]=e,Q(f),s=f;break t;case"link":var S=E_("link","href",c).get(s+(a.href||""));if(S){for(var C=0;C<S.length;C++)if(f=S[C],f.getAttribute("href")===(a.href==null?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){S.splice(C,1);break e}}f=c.createElement(s),vn(f,s,a),c.head.appendChild(f);break;case"meta":if(S=E_("meta","content",c).get(s+(a.content||""))){for(C=0;C<S.length;C++)if(f=S[C],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){S.splice(C,1);break e}}f=c.createElement(s),vn(f,s,a),c.head.appendChild(f);break;default:throw Error(r(468,s))}f[en]=e,Q(f),s=f}e.stateNode=s}else T_(c,e.type,e.stateNode);else e.stateNode=M_(c,s,e.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?T_(c,e.type,e.stateNode):M_(c,s,e.memoizedProps)):s===null&&e.stateNode!==null&&Tm(e,e.memoizedProps,a.memoizedProps)}break;case 27:if(s&4&&e.alternate===null){c=e.stateNode,f=e.memoizedProps;try{for(var N=c.firstChild;N;){var X=N.nextSibling,ut=N.nodeName;N[Ia]||ut==="HEAD"||ut==="BODY"||ut==="SCRIPT"||ut==="STYLE"||ut==="LINK"&&N.rel.toLowerCase()==="stylesheet"||c.removeChild(N),N=X}for(var xt=e.type,at=c.attributes;at.length;)c.removeAttributeNode(at[0]);vn(c,xt,f),c[en]=e,c[nn]=f}catch(Vt){ze(e,e.return,Vt)}}case 5:if(ti(n,e),ei(e),s&512&&(Xe||a===null||Vn(a,a.return)),e.flags&32){c=e.stateNode;try{Pn(c,"")}catch(Vt){ze(e,e.return,Vt)}}s&4&&e.stateNode!=null&&(c=e.memoizedProps,Tm(e,c,a!==null?a.memoizedProps:c)),s&1024&&(Xu=!0);break;case 6:if(ti(n,e),ei(e),s&4){if(e.stateNode===null)throw Error(r(162));s=e.memoizedProps,a=e.stateNode;try{a.nodeValue=s}catch(Vt){ze(e,e.return,Vt)}}break;case 3:if(Pl=null,c=hi,hi=Nl(n.containerInfo),ti(n,e),hi=c,ei(e),s&4&&a!==null&&a.memoizedState.isDehydrated)try{xo(n.containerInfo)}catch(Vt){ze(e,e.return,Vt)}Xu&&(Xu=!1,Nm(e));break;case 4:s=hi,hi=Nl(e.stateNode.containerInfo),ti(n,e),ei(e),hi=s;break;case 12:ti(n,e),ei(e);break;case 13:ti(n,e),ei(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(tf=ht()),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Wu(e,s)));break;case 22:if(s&512&&(Xe||a===null||Vn(a,a.return)),N=e.memoizedState!==null,X=a!==null&&a.memoizedState!==null,ut=Hi,xt=Xe,Hi=ut||N,Xe=xt||X,ti(n,e),Xe=xt,Hi=ut,ei(e),n=e.stateNode,n._current=e,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,s&8192&&(n._visibility=N?n._visibility&-2:n._visibility|1,N&&(n=Hi||Xe,a===null||X||n||Fr(e)),e.memoizedProps===null||e.memoizedProps.mode!=="manual"))t:for(a=null,n=e;;){if(n.tag===5||n.tag===26||n.tag===27){if(a===null){X=a=n;try{if(c=X.stateNode,N)f=c.style,typeof f.setProperty=="function"?f.setProperty("display","none","important"):f.display="none";else{S=X.stateNode,C=X.memoizedProps.style;var ct=C!=null&&C.hasOwnProperty("display")?C.display:null;S.style.display=ct==null||typeof ct=="boolean"?"":(""+ct).trim()}}catch(Vt){ze(X,X.return,Vt)}}}else if(n.tag===6){if(a===null){X=n;try{X.stateNode.nodeValue=N?"":X.memoizedProps}catch(Vt){ze(X,X.return,Vt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===e)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break t;for(;n.sibling===null;){if(n.return===null||n.return===e)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=e.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,Wu(e,a))));break;case 19:ti(n,e),ei(e),s&4&&(s=e.updateQueue,s!==null&&(e.updateQueue=null,Wu(e,s)));break;case 21:break;default:ti(n,e),ei(e)}}function ei(e){var n=e.flags;if(n&2){try{if(e.tag!==27){t:{for(var a=e.return;a!==null;){if(bm(a)){var s=a;break t}a=a.return}throw Error(r(160))}switch(s.tag){case 27:var c=s.stateNode,f=Vu(e);vl(e,f,c);break;case 5:var S=s.stateNode;s.flags&32&&(Pn(S,""),s.flags&=-33);var C=Vu(e);vl(e,C,S);break;case 3:case 4:var N=s.stateNode.containerInfo,X=Vu(e);ku(e,X,N);break;default:throw Error(r(161))}}}catch(ut){ze(e,e.return,ut)}e.flags&=-3}n&4096&&(e.flags&=-4097)}function Nm(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var n=e;Nm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),e=e.sibling}}function Vi(e,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Cm(e,n.alternate,n),n=n.sibling}function Fr(e){for(e=e.child;e!==null;){var n=e;switch(n.tag){case 0:case 11:case 14:case 15:ga(4,n,n.return),Fr(n);break;case 1:Vn(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Mm(n,n.return,a),Fr(n);break;case 26:case 27:case 5:Vn(n,n.return),Fr(n);break;case 22:Vn(n,n.return),n.memoizedState===null&&Fr(n);break;default:Fr(n)}e=e.sibling}}function va(e,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,c=e,f=n,S=f.flags;switch(f.tag){case 0:case 11:case 15:va(c,f,a),to(4,f);break;case 1:if(va(c,f,a),s=f,c=s.stateNode,typeof c.componentDidMount=="function")try{c.componentDidMount()}catch(X){ze(s,s.return,X)}if(s=f,c=s.updateQueue,c!==null){var C=s.stateNode;try{var N=c.shared.hiddenCallbacks;if(N!==null)for(c.shared.hiddenCallbacks=null,c=0;c<N.length;c++)xm(N[c],C)}catch(X){ze(s,s.return,X)}}a&&S&64&&ym(f),tr(f,f.return);break;case 26:case 27:case 5:va(c,f,a),a&&s===null&&S&4&&Em(f),tr(f,f.return);break;case 12:va(c,f,a);break;case 13:va(c,f,a),a&&S&4&&Um(c,f);break;case 22:f.memoizedState===null&&va(c,f,a),tr(f,f.return);break;default:va(c,f,a)}n=n.sibling}}function qu(e,n){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(e=n.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xs(a))}function Yu(e,n){e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e))}function xa(e,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Om(e,n,a,s),n=n.sibling}function Om(e,n,a,s){var c=n.flags;switch(n.tag){case 0:case 11:case 15:xa(e,n,a,s),c&2048&&to(9,n);break;case 3:xa(e,n,a,s),c&2048&&(e=null,n.alternate!==null&&(e=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==e&&(n.refCount++,e!=null&&Xs(e)));break;case 12:if(c&2048){xa(e,n,a,s),e=n.stateNode;try{var f=n.memoizedProps,S=f.id,C=f.onPostCommit;typeof C=="function"&&C(S,n.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(N){ze(n,n.return,N)}}else xa(e,n,a,s);break;case 23:break;case 22:f=n.stateNode,n.memoizedState!==null?f._visibility&4?xa(e,n,a,s):eo(e,n):f._visibility&4?xa(e,n,a,s):(f._visibility|=4,Ir(e,n,a,s,(n.subtreeFlags&10256)!==0)),c&2048&&qu(n.alternate,n);break;case 24:xa(e,n,a,s),c&2048&&Yu(n.alternate,n);break;default:xa(e,n,a,s)}}function Ir(e,n,a,s,c){for(c=c&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var f=e,S=n,C=a,N=s,X=S.flags;switch(S.tag){case 0:case 11:case 15:Ir(f,S,C,N,c),to(8,S);break;case 23:break;case 22:var ut=S.stateNode;S.memoizedState!==null?ut._visibility&4?Ir(f,S,C,N,c):eo(f,S):(ut._visibility|=4,Ir(f,S,C,N,c)),c&&X&2048&&qu(S.alternate,S);break;case 24:Ir(f,S,C,N,c),c&&X&2048&&Yu(S.alternate,S);break;default:Ir(f,S,C,N,c)}n=n.sibling}}function eo(e,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=e,s=n,c=s.flags;switch(s.tag){case 22:eo(a,s),c&2048&&qu(s.alternate,s);break;case 24:eo(a,s),c&2048&&Yu(s.alternate,s);break;default:eo(a,s)}n=n.sibling}}var no=8192;function Hr(e){if(e.subtreeFlags&no)for(e=e.child;e!==null;)Pm(e),e=e.sibling}function Pm(e){switch(e.tag){case 26:Hr(e),e.flags&no&&e.memoizedState!==null&&bx(hi,e.memoizedState,e.memoizedProps);break;case 5:Hr(e);break;case 3:case 4:var n=hi;hi=Nl(e.stateNode.containerInfo),Hr(e),hi=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=no,no=16777216,Hr(e),no=n):Hr(e));break;default:Hr(e)}}function zm(e){var n=e.alternate;if(n!==null&&(e=n.child,e!==null)){n.child=null;do n=e.sibling,e.sibling=null,e=n;while(e!==null)}}function io(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Fm(s,e)}zm(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Bm(e),e=e.sibling}function Bm(e){switch(e.tag){case 0:case 11:case 15:io(e),e.flags&2048&&ga(9,e,e.return);break;case 3:io(e);break;case 12:io(e);break;case 22:var n=e.stateNode;e.memoizedState!==null&&n._visibility&4&&(e.return===null||e.return.tag!==13)?(n._visibility&=-5,xl(e)):io(e);break;default:io(e)}}function xl(e){var n=e.deletions;if(e.flags&16){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];fn=s,Fm(s,e)}zm(e)}for(e=e.child;e!==null;){switch(n=e,n.tag){case 0:case 11:case 15:ga(8,n,n.return),xl(n);break;case 22:a=n.stateNode,a._visibility&4&&(a._visibility&=-5,xl(n));break;default:xl(n)}e=e.sibling}}function Fm(e,n){for(;fn!==null;){var a=fn;switch(a.tag){case 0:case 11:case 15:ga(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Xs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,fn=s;else t:for(a=e;fn!==null;){s=fn;var c=s.sibling,f=s.return;if(wm(s),s===a){fn=null;break t}if(c!==null){c.return=f,fn=c;break t}fn=f}}}function F0(e,n,a,s){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ni(e,n,a,s){return new F0(e,n,a,s)}function ju(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Sa(e,n){var a=e.alternate;return a===null?(a=ni(e.tag,n,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=n,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&31457280,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,n=e.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function Im(e,n){e.flags&=31457282;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=n,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,n=a.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),e}function Sl(e,n,a,s,c,f){var S=0;if(s=e,typeof e=="function")ju(e)&&(S=1);else if(typeof e=="string")S=Ex(e,a,Me.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case m:return er(a.children,c,f,n);case p:S=8,c|=24;break;case _:return e=ni(12,a,n,c|2),e.elementType=_,e.lanes=f,e;case A:return e=ni(13,a,n,c),e.elementType=A,e.lanes=f,e;case y:return e=ni(19,a,n,c),e.elementType=y,e.lanes=f,e;case O:return Hm(a,c,f,n);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case g:case M:S=10;break t;case x:S=9;break t;case E:S=11;break t;case v:S=14;break t;case P:S=16,s=null;break t}S=29,a=Error(r(130,e===null?"null":typeof e,"")),s=null}return n=ni(S,a,n,c),n.elementType=e,n.type=s,n.lanes=f,n}function er(e,n,a,s){return e=ni(7,e,s,n),e.lanes=a,e}function Hm(e,n,a,s){e=ni(22,e,s,n),e.elementType=O,e.lanes=a;var c={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var f=c._current;if(f===null)throw Error(r(456));if(!(c._pendingVisibility&2)){var S=la(f,2);S!==null&&(c._pendingVisibility|=2,Dn(S,f,2))}},attach:function(){var f=c._current;if(f===null)throw Error(r(456));if(c._pendingVisibility&2){var S=la(f,2);S!==null&&(c._pendingVisibility&=-3,Dn(S,f,2))}}};return e.stateNode=c,e}function Zu(e,n,a){return e=ni(6,e,null,n),e.lanes=a,e}function Ku(e,n,a){return n=ni(4,e.children!==null?e.children:[],e.key,n),n.lanes=a,n.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},n}function ki(e){e.flags|=4}function Gm(e,n){if(n.type!=="stylesheet"||n.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!b_(n)){if(n=$n.current,n!==null&&((ye&4194176)===ye?Ei!==null:(ye&62914560)!==ye&&!(ye&536870912)||n!==Ei))throw Gs=eu,ap;e.flags|=8192}}function yl(e,n){n!==null&&(e.flags|=4),e.flags&16384&&(n=e.tag!==22?Ee():536870912,e.lanes|=n,Vr|=n)}function ao(e,n){if(!be)switch(e.tailMode){case"hidden":n=e.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||e.tail===null?e.tail=null:e.tail.sibling=null:s.sibling=null}}function Ge(e){var n=e.alternate!==null&&e.alternate.child===e.child,a=0,s=0;if(n)for(var c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags&31457280,s|=c.flags&31457280,c.return=e,c=c.sibling;else for(c=e.child;c!==null;)a|=c.lanes|c.childLanes,s|=c.subtreeFlags,s|=c.flags,c.return=e,c=c.sibling;return e.subtreeFlags|=s,e.childLanes=a,n}function I0(e,n,a){var s=n.pendingProps;switch($c(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ge(n),null;case 1:return Ge(n),null;case 3:return a=n.stateNode,s=null,e!==null&&(s=e.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),Ii(sn),se(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(Bs(n)?ki(n):e===null||e.memoizedState.isDehydrated&&!(n.flags&256)||(n.flags|=1024,fi!==null&&(rf(fi),fi=null))),Ge(n),null;case 26:return a=n.memoizedState,e===null?(ki(n),a!==null?(Ge(n),Gm(n,a)):(Ge(n),n.flags&=-16777217)):a?a!==e.memoizedState?(ki(n),Ge(n),Gm(n,a)):(Ge(n),n.flags&=-16777217):(e.memoizedProps!==s&&ki(n),Ge(n),n.flags&=-16777217),null;case 27:kt(n),a=ae.current;var c=n.type;if(e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}e=Me.current,Bs(n)?np(n):(e=g_(c,s,a),n.stateNode=e,ki(n))}return Ge(n),null;case 5:if(kt(n),a=n.type,e!==null&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ge(n),null}if(e=Me.current,Bs(n))np(n);else{switch(c=Ll(ae.current),e){case 1:e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case 2:e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;default:switch(a){case"svg":e=c.createElementNS("http://www.w3.org/2000/svg",a);break;case"math":e=c.createElementNS("http://www.w3.org/1998/Math/MathML",a);break;case"script":e=c.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e=typeof s.is=="string"?c.createElement("select",{is:s.is}):c.createElement("select"),s.multiple?e.multiple=!0:s.size&&(e.size=s.size);break;default:e=typeof s.is=="string"?c.createElement(a,{is:s.is}):c.createElement(a)}}e[en]=n,e[nn]=s;t:for(c=n.child;c!==null;){if(c.tag===5||c.tag===6)e.appendChild(c.stateNode);else if(c.tag!==4&&c.tag!==27&&c.child!==null){c.child.return=c,c=c.child;continue}if(c===n)break t;for(;c.sibling===null;){if(c.return===null||c.return===n)break t;c=c.return}c.sibling.return=c.return,c=c.sibling}n.stateNode=e;t:switch(vn(e,a,s),a){case"button":case"input":case"select":case"textarea":e=!!s.autoFocus;break t;case"img":e=!0;break t;default:e=!1}e&&ki(n)}}return Ge(n),n.flags&=-16777217,null;case 6:if(e&&n.stateNode!=null)e.memoizedProps!==s&&ki(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(e=ae.current,Bs(n)){if(e=n.stateNode,a=n.memoizedProps,s=null,c=wn,c!==null)switch(c.tag){case 27:case 5:s=c.memoizedProps}e[en]=n,e=!!(e.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||f_(e.nodeValue,a)),e||Wa(n)}else e=Ll(e).createTextNode(s),e[en]=n,n.stateNode=e}return Ge(n),null;case 13:if(s=n.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(c=Bs(n),s!==null&&s.dehydrated!==null){if(e===null){if(!c)throw Error(r(318));if(c=n.memoizedState,c=c!==null?c.dehydrated:null,!c)throw Error(r(317));c[en]=n}else Fs(),!(n.flags&128)&&(n.memoizedState=null),n.flags|=4;Ge(n),c=!1}else fi!==null&&(rf(fi),fi=null),c=!0;if(!c)return n.flags&256?(Pi(n),n):(Pi(n),null)}if(Pi(n),n.flags&128)return n.lanes=a,n;if(a=s!==null,e=e!==null&&e.memoizedState!==null,a){s=n.child,c=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(c=s.alternate.memoizedState.cachePool.pool);var f=null;s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==c&&(s.flags|=2048)}return a!==e&&a&&(n.child.flags|=8192),yl(n,n.updateQueue),Ge(n),null;case 4:return se(),e===null&&_f(n.stateNode.containerInfo),Ge(n),null;case 10:return Ii(n.type),Ge(n),null;case 19:if(Kt(rn),c=n.memoizedState,c===null)return Ge(n),null;if(s=(n.flags&128)!==0,f=c.rendering,f===null)if(s)ao(c,!1);else{if(We!==0||e!==null&&e.flags&128)for(e=n.child;e!==null;){if(f=al(e),f!==null){for(n.flags|=128,ao(c,!1),e=f.updateQueue,n.updateQueue=e,yl(n,e),n.subtreeFlags=0,e=a,a=n.child;a!==null;)Im(a,e),a=a.sibling;return Pt(rn,rn.current&1|2),n.child}e=e.sibling}c.tail!==null&&ht()>Ml&&(n.flags|=128,s=!0,ao(c,!1),n.lanes=4194304)}else{if(!s)if(e=al(f),e!==null){if(n.flags|=128,s=!0,e=e.updateQueue,n.updateQueue=e,yl(n,e),ao(c,!0),c.tail===null&&c.tailMode==="hidden"&&!f.alternate&&!be)return Ge(n),null}else 2*ht()-c.renderingStartTime>Ml&&a!==536870912&&(n.flags|=128,s=!0,ao(c,!1),n.lanes=4194304);c.isBackwards?(f.sibling=n.child,n.child=f):(e=c.last,e!==null?e.sibling=f:n.child=f,c.last=f)}return c.tail!==null?(n=c.tail,c.rendering=n,c.tail=n.sibling,c.renderingStartTime=ht(),n.sibling=null,e=rn.current,Pt(rn,s?e&1|2:e&1),n):(Ge(n),null);case 22:case 23:return Pi(n),iu(),s=n.memoizedState!==null,e!==null?e.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?a&536870912&&!(n.flags&128)&&(Ge(n),n.subtreeFlags&6&&(n.flags|=8192)):Ge(n),a=n.updateQueue,a!==null&&yl(n,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),e!==null&&Kt(Ya),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),Ii(sn),Ge(n),null;case 25:return null}throw Error(r(156,n.tag))}function H0(e,n){switch($c(n),n.tag){case 1:return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 3:return Ii(sn),se(),e=n.flags,e&65536&&!(e&128)?(n.flags=e&-65537|128,n):null;case 26:case 27:case 5:return kt(n),null;case 13:if(Pi(n),e=n.memoizedState,e!==null&&e.dehydrated!==null){if(n.alternate===null)throw Error(r(340));Fs()}return e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 19:return Kt(rn),null;case 4:return se(),null;case 10:return Ii(n.type),null;case 22:case 23:return Pi(n),iu(),e!==null&&Kt(Ya),e=n.flags,e&65536?(n.flags=e&-65537|128,n):null;case 24:return Ii(sn),null;case 25:return null;default:return null}}function Vm(e,n){switch($c(n),n.tag){case 3:Ii(sn),se();break;case 26:case 27:case 5:kt(n);break;case 4:se();break;case 13:Pi(n);break;case 19:Kt(rn);break;case 10:Ii(n.type);break;case 22:case 23:Pi(n),iu(),e!==null&&Kt(Ya);break;case 24:Ii(sn)}}var G0={getCacheForType:function(e){var n=yn(sn),a=n.data.get(e);return a===void 0&&(a=e(),n.data.set(e,a)),a}},V0=typeof WeakMap=="function"?WeakMap:Map,Ve=0,Be=null,pe=null,ye=0,Fe=0,Xn=null,Xi=!1,Gr=!1,Qu=!1,Wi=0,We=0,ya=0,nr=0,Ju=0,ii=0,Vr=0,ro=null,bi=null,$u=!1,tf=0,Ml=1/0,El=null,Ma=null,Tl=!1,ir=null,so=0,ef=0,nf=null,oo=0,af=null;function Wn(){if(Ve&2&&ye!==0)return ye&-ye;if(R.T!==null){var e=Nr;return e!==0?e:hf()}return As()}function km(){ii===0&&(ii=!(ye&536870912)||be?tn():536870912);var e=$n.current;return e!==null&&(e.flags|=32),ii}function Dn(e,n,a){(e===Be&&Fe===2||e.cancelPendingCommit!==null)&&(kr(e,0),qi(e,ye,ii,!1)),An(e,a),(!(Ve&2)||e!==Be)&&(e===Be&&(!(Ve&2)&&(nr|=a),We===4&&qi(e,ye,ii,!1)),Ai(e))}function Xm(e,n,a){if(Ve&6)throw Error(r(327));var s=!a&&(n&60)===0&&(n&e.expiredLanes)===0||$t(e,n),c=s?W0(e,n):lf(e,n,!0),f=s;do{if(c===0){Gr&&!s&&qi(e,n,0,!1);break}else if(c===6)qi(e,n,0,!Xi);else{if(a=e.current.alternate,f&&!k0(a)){c=lf(e,n,!1),f=!1;continue}if(c===2){if(f=n,e.errorRecoveryDisabledLanes&f)var S=0;else S=e.pendingLanes&-536870913,S=S!==0?S:S&536870912?536870912:0;if(S!==0){n=S;t:{var C=e;c=ro;var N=C.current.memoizedState.isDehydrated;if(N&&(kr(C,S).flags|=256),S=lf(C,S,!1),S!==2){if(Qu&&!N){C.errorRecoveryDisabledLanes|=f,nr|=f,c=4;break t}f=bi,bi=c,f!==null&&rf(f)}c=S}if(f=!1,c!==2)continue}}if(c===1){kr(e,0),qi(e,n,0,!0);break}t:{switch(s=e,c){case 0:case 1:throw Error(r(345));case 4:if((n&4194176)===n){qi(s,n,ii,!Xi);break t}break;case 2:bi=null;break;case 3:case 5:break;default:throw Error(r(329))}if(s.finishedWork=a,s.finishedLanes=n,(n&62914560)===n&&(f=tf+300-ht(),10<f)){if(qi(s,n,ii,!Xi),Dt(s,0)!==0)break t;s.timeoutHandle=p_(Wm.bind(null,s,a,bi,El,$u,n,ii,nr,Vr,Xi,2,-0,0),f);break t}Wm(s,a,bi,El,$u,n,ii,nr,Vr,Xi,0,-0,0)}}break}while(!0);Ai(e)}function rf(e){bi===null?bi=e:bi.push.apply(bi,e)}function Wm(e,n,a,s,c,f,S,C,N,X,ut,xt,at){var ct=n.subtreeFlags;if((ct&8192||(ct&16785408)===16785408)&&(po={stylesheets:null,count:0,unsuspend:Tx},Pm(n),n=Ax(),n!==null)){e.cancelPendingCommit=n(Jm.bind(null,e,a,s,c,S,C,N,1,xt,at)),qi(e,f,S,!X);return}Jm(e,a,s,c,S,C,N,ut,xt,at)}function k0(e){for(var n=e;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var c=a[s],f=c.getSnapshot;c=c.value;try{if(!Gn(f(),c))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function qi(e,n,a,s){n&=~Ju,n&=~nr,e.suspendedLanes|=n,e.pingedLanes&=~n,s&&(e.warmLanes|=n),s=e.expirationTimes;for(var c=n;0<c;){var f=31-jt(c),S=1<<f;s[f]=-1,c&=~S}a!==0&&bs(e,a,n)}function bl(){return Ve&6?!0:(lo(0),!1)}function sf(){if(pe!==null){if(Fe===0)var e=pe.return;else e=pe,Fi=Ja=null,fu(e),Ur=null,Vs=0,e=pe;for(;e!==null;)Vm(e.alternate,e),e=e.return;pe=null}}function kr(e,n){e.finishedWork=null,e.finishedLanes=0;var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,lx(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),sf(),Be=e,pe=a=Sa(e.current,null),ye=n,Fe=0,Xn=null,Xi=!1,Gr=$t(e,n),Qu=!1,Vr=ii=Ju=nr=ya=We=0,bi=ro=null,$u=!1,n&8&&(n|=n&32);var s=e.entangledLanes;if(s!==0)for(e=e.entanglements,s&=n;0<s;){var c=31-jt(s),f=1<<c;n|=e[c],s&=~f}return Wi=n,Zo(),a}function qm(e,n){ue=null,R.H=Ti,n===Hs?(n=op(),Fe=3):n===ap?(n=op(),Fe=4):Fe=n===rm?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,pe===null&&(We=1,ml(e,Kn(n,e.current)))}function Ym(){var e=R.H;return R.H=Ti,e===null?Ti:e}function jm(){var e=R.A;return R.A=G0,e}function of(){We=4,Xi||(ye&4194176)!==ye&&$n.current!==null||(Gr=!0),!(ya&134217727)&&!(nr&134217727)||Be===null||qi(Be,ye,ii,!1)}function lf(e,n,a){var s=Ve;Ve|=2;var c=Ym(),f=jm();(Be!==e||ye!==n)&&(El=null,kr(e,n)),n=!1;var S=We;t:do try{if(Fe!==0&&pe!==null){var C=pe,N=Xn;switch(Fe){case 8:sf(),S=6;break t;case 3:case 2:case 6:$n.current===null&&(n=!0);var X=Fe;if(Fe=0,Xn=null,Xr(e,C,N,X),a&&Gr){S=0;break t}break;default:X=Fe,Fe=0,Xn=null,Xr(e,C,N,X)}}X0(),S=We;break}catch(ut){qm(e,ut)}while(!0);return n&&e.shellSuspendCounter++,Fi=Ja=null,Ve=s,R.H=c,R.A=f,pe===null&&(Be=null,ye=0,Zo()),S}function X0(){for(;pe!==null;)Zm(pe)}function W0(e,n){var a=Ve;Ve|=2;var s=Ym(),c=jm();Be!==e||ye!==n?(El=null,Ml=ht()+500,kr(e,n)):Gr=$t(e,n);t:do try{if(Fe!==0&&pe!==null){n=pe;var f=Xn;e:switch(Fe){case 1:Fe=0,Xn=null,Xr(e,n,f,1);break;case 2:if(rp(f)){Fe=0,Xn=null,Km(n);break}n=function(){Fe===2&&Be===e&&(Fe=7),Ai(e)},f.then(n,n);break t;case 3:Fe=7;break t;case 4:Fe=5;break t;case 7:rp(f)?(Fe=0,Xn=null,Km(n)):(Fe=0,Xn=null,Xr(e,n,f,7));break;case 5:var S=null;switch(pe.tag){case 26:S=pe.memoizedState;case 5:case 27:var C=pe;if(!S||b_(S)){Fe=0,Xn=null;var N=C.sibling;if(N!==null)pe=N;else{var X=C.return;X!==null?(pe=X,Al(X)):pe=null}break e}}Fe=0,Xn=null,Xr(e,n,f,5);break;case 6:Fe=0,Xn=null,Xr(e,n,f,6);break;case 8:sf(),We=6;break t;default:throw Error(r(462))}}q0();break}catch(ut){qm(e,ut)}while(!0);return Fi=Ja=null,R.H=s,R.A=c,Ve=a,pe!==null?0:(Be=null,ye=0,Zo(),We)}function q0(){for(;pe!==null&&!T();)Zm(pe)}function Zm(e){var n=gm(e.alternate,e,Wi);e.memoizedProps=e.pendingProps,n===null?Al(e):pe=n}function Km(e){var n=e,a=n.alternate;switch(n.tag){case 15:case 0:n=fm(a,n,n.pendingProps,n.type,void 0,ye);break;case 11:n=fm(a,n,n.pendingProps,n.type.render,n.ref,ye);break;case 5:fu(n);default:Vm(a,n),n=pe=Im(n,Wi),n=gm(a,n,Wi)}e.memoizedProps=e.pendingProps,n===null?Al(e):pe=n}function Xr(e,n,a,s){Fi=Ja=null,fu(n),Ur=null,Vs=0;var c=n.return;try{if(O0(e,c,n,a,ye)){We=1,ml(e,Kn(a,e.current)),pe=null;return}}catch(f){if(c!==null)throw pe=c,f;We=1,ml(e,Kn(a,e.current)),pe=null;return}n.flags&32768?(be||s===1?e=!0:Gr||ye&536870912?e=!1:(Xi=e=!0,(s===2||s===3||s===6)&&(s=$n.current,s!==null&&s.tag===13&&(s.flags|=16384))),Qm(n,e)):Al(n)}function Al(e){var n=e;do{if(n.flags&32768){Qm(n,Xi);return}e=n.return;var a=I0(n.alternate,n,Wi);if(a!==null){pe=a;return}if(n=n.sibling,n!==null){pe=n;return}pe=n=e}while(n!==null);We===0&&(We=5)}function Qm(e,n){do{var a=H0(e.alternate,e);if(a!==null){a.flags&=32767,pe=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(e=e.sibling,e!==null)){pe=e;return}pe=e=a}while(e!==null);We=6,pe=null}function Jm(e,n,a,s,c,f,S,C,N,X){var ut=R.T,xt=j.p;try{j.p=2,R.T=null,Y0(e,n,a,s,xt,c,f,S,C,N,X)}finally{R.T=ut,j.p=xt}}function Y0(e,n,a,s,c,f,S,C){do Wr();while(ir!==null);if(Ve&6)throw Error(r(327));var N=e.finishedWork;if(s=e.finishedLanes,N===null)return null;if(e.finishedWork=null,e.finishedLanes=0,N===e.current)throw Error(r(177));e.callbackNode=null,e.callbackPriority=0,e.cancelPendingCommit=null;var X=N.lanes|N.childLanes;if(X|=Kc,Io(e,s,X,f,S,C),e===Be&&(pe=Be=null,ye=0),!(N.subtreeFlags&10256)&&!(N.flags&10256)||Tl||(Tl=!0,ef=X,nf=a,Q0(wt,function(){return Wr(),null})),a=(N.flags&15990)!==0,N.subtreeFlags&15990||a?(a=R.T,R.T=null,f=j.p,j.p=2,S=Ve,Ve|=4,z0(e,N),Lm(N,e),g0(Sf,e.containerInfo),Fl=!!xf,Sf=xf=null,e.current=N,Cm(e,N.alternate,N),it(),Ve=S,j.p=f,R.T=a):e.current=N,Tl?(Tl=!1,ir=e,so=s):$m(e,X),X=e.pendingLanes,X===0&&(Ma=null),Ft(N.stateNode),Ai(e),n!==null)for(c=e.onRecoverableError,N=0;N<n.length;N++)X=n[N],c(X.value,{componentStack:X.stack});return so&3&&Wr(),X=e.pendingLanes,s&4194218&&X&42?e===af?oo++:(oo=0,af=e):oo=0,lo(0),null}function $m(e,n){(e.pooledCacheLanes&=n)===0&&(n=e.pooledCache,n!=null&&(e.pooledCache=null,Xs(n)))}function Wr(){if(ir!==null){var e=ir,n=ef;ef=0;var a=xr(so),s=R.T,c=j.p;try{if(j.p=32>a?32:a,R.T=null,ir===null)var f=!1;else{a=nf,nf=null;var S=ir,C=so;if(ir=null,so=0,Ve&6)throw Error(r(331));var N=Ve;if(Ve|=4,Bm(S.current),Om(S,S.current,C,a),Ve=N,lo(0,!1),Gt&&typeof Gt.onPostCommitFiberRoot=="function")try{Gt.onPostCommitFiberRoot(qt,S)}catch{}f=!0}return f}finally{j.p=c,R.T=s,$m(e,n)}}return!1}function t_(e,n,a){n=Kn(a,n),n=bu(e.stateNode,n,2),e=_a(e,n,2),e!==null&&(An(e,2),Ai(e))}function ze(e,n,a){if(e.tag===3)t_(e,e,a);else for(;n!==null;){if(n.tag===3){t_(n,e,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(Ma===null||!Ma.has(s))){e=Kn(a,e),a=im(2),s=_a(n,a,2),s!==null&&(am(a,s,n,e),An(s,2),Ai(s));break}}n=n.return}}function cf(e,n,a){var s=e.pingCache;if(s===null){s=e.pingCache=new V0;var c=new Set;s.set(n,c)}else c=s.get(n),c===void 0&&(c=new Set,s.set(n,c));c.has(a)||(Qu=!0,c.add(a),e=j0.bind(null,e,n,a),n.then(e,e))}function j0(e,n,a){var s=e.pingCache;s!==null&&s.delete(n),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,Be===e&&(ye&a)===a&&(We===4||We===3&&(ye&62914560)===ye&&300>ht()-tf?!(Ve&2)&&kr(e,0):Ju|=a,Vr===ye&&(Vr=0)),Ai(e)}function e_(e,n){n===0&&(n=Ee()),e=la(e,n),e!==null&&(An(e,n),Ai(e))}function Z0(e){var n=e.memoizedState,a=0;n!==null&&(a=n.retryLane),e_(e,a)}function K0(e,n){var a=0;switch(e.tag){case 13:var s=e.stateNode,c=e.memoizedState;c!==null&&(a=c.retryLane);break;case 19:s=e.stateNode;break;case 22:s=e.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),e_(e,a)}function Q0(e,n){return Xt(e,n)}var Rl=null,qr=null,uf=!1,Cl=!1,ff=!1,ar=0;function Ai(e){e!==qr&&e.next===null&&(qr===null?Rl=qr=e:qr=qr.next=e),Cl=!0,uf||(uf=!0,$0(J0))}function lo(e,n){if(!ff&&Cl){ff=!0;do for(var a=!1,s=Rl;s!==null;){if(e!==0){var c=s.pendingLanes;if(c===0)var f=0;else{var S=s.suspendedLanes,C=s.pingedLanes;f=(1<<31-jt(42|e)+1)-1,f&=c&~(S&~C),f=f&201326677?f&201326677|1:f?f|2:0}f!==0&&(a=!0,a_(s,f))}else f=ye,f=Dt(s,s===Be?f:0),!(f&3)||$t(s,f)||(a=!0,a_(s,f));s=s.next}while(a);ff=!1}}function J0(){Cl=uf=!1;var e=0;ar!==0&&(ox()&&(e=ar),ar=0);for(var n=ht(),a=null,s=Rl;s!==null;){var c=s.next,f=n_(s,n);f===0?(s.next=null,a===null?Rl=c:a.next=c,c===null&&(qr=a)):(a=s,(e!==0||f&3)&&(Cl=!0)),s=c}lo(e)}function n_(e,n){for(var a=e.suspendedLanes,s=e.pingedLanes,c=e.expirationTimes,f=e.pendingLanes&-62914561;0<f;){var S=31-jt(f),C=1<<S,N=c[S];N===-1?(!(C&a)||C&s)&&(c[S]=He(C,n)):N<=n&&(e.expiredLanes|=C),f&=~C}if(n=Be,a=ye,a=Dt(e,e===n?a:0),s=e.callbackNode,a===0||e===n&&Fe===2||e.cancelPendingCommit!==null)return s!==null&&s!==null&&L(s),e.callbackNode=null,e.callbackPriority=0;if(!(a&3)||$t(e,a)){if(n=a&-a,n===e.callbackPriority)return n;switch(s!==null&&L(s),xr(a)){case 2:case 8:a=Ht;break;case 32:a=wt;break;case 268435456:a=me;break;default:a=wt}return s=i_.bind(null,e),a=Xt(a,s),e.callbackPriority=n,e.callbackNode=a,n}return s!==null&&s!==null&&L(s),e.callbackPriority=2,e.callbackNode=null,2}function i_(e,n){var a=e.callbackNode;if(Wr()&&e.callbackNode!==a)return null;var s=ye;return s=Dt(e,e===Be?s:0),s===0?null:(Xm(e,s,n),n_(e,ht()),e.callbackNode!=null&&e.callbackNode===a?i_.bind(null,e):null)}function a_(e,n){if(Wr())return null;Xm(e,n,!0)}function $0(e){cx(function(){Ve&6?Xt(pt,e):e()})}function hf(){return ar===0&&(ar=tn()),ar}function r_(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Vo(""+e)}function s_(e,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,e.id&&a.setAttribute("form",e.id),n.parentNode.insertBefore(a,n),e=new FormData(e),a.parentNode.removeChild(a),e}function tx(e,n,a,s,c){if(n==="submit"&&a&&a.stateNode===c){var f=r_((c[nn]||null).action),S=s.submitter;S&&(n=(n=S[nn]||null)?r_(n.formAction):S.getAttribute("formAction"),n!==null&&(f=n,S=null));var C=new qo("action","action",null,s,c);e.push({event:C,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(ar!==0){var N=S?s_(c,S):new FormData(c);Su(a,{pending:!0,data:N,method:c.method,action:f},null,N)}}else typeof f=="function"&&(C.preventDefault(),N=S?s_(c,S):new FormData(c),Su(a,{pending:!0,data:N,method:c.method,action:f},f,N))},currentTarget:c}]})}}for(var df=0;df<Jd.length;df++){var pf=Jd[df],ex=pf.toLowerCase(),nx=pf[0].toUpperCase()+pf.slice(1);ui(ex,"on"+nx)}ui(Yd,"onAnimationEnd"),ui(jd,"onAnimationIteration"),ui(Zd,"onAnimationStart"),ui("dblclick","onDoubleClick"),ui("focusin","onFocus"),ui("focusout","onBlur"),ui(x0,"onTransitionRun"),ui(S0,"onTransitionStart"),ui(y0,"onTransitionCancel"),ui(Kd,"onTransitionEnd"),Ot("onMouseEnter",["mouseout","mouseover"]),Ot("onMouseLeave",["mouseout","mouseover"]),Ot("onPointerEnter",["pointerout","pointerover"]),Ot("onPointerLeave",["pointerout","pointerover"]),Rt("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Rt("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Rt("onBeforeInput",["compositionend","keypress","textInput","paste"]),Rt("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Rt("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(co));function o_(e,n){n=(n&4)!==0;for(var a=0;a<e.length;a++){var s=e[a],c=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var S=s.length-1;0<=S;S--){var C=s[S],N=C.instance,X=C.currentTarget;if(C=C.listener,N!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=X;try{f(c)}catch(ut){pl(ut)}c.currentTarget=null,f=N}else for(S=0;S<s.length;S++){if(C=s[S],N=C.instance,X=C.currentTarget,C=C.listener,N!==f&&c.isPropagationStopped())break t;f=C,c.currentTarget=X;try{f(c)}catch(ut){pl(ut)}c.currentTarget=null,f=N}}}}function xe(e,n){var a=n[Sr];a===void 0&&(a=n[Sr]=new Set);var s=e+"__bubble";a.has(s)||(l_(n,e,2,!1),a.add(s))}function mf(e,n,a){var s=0;n&&(s|=4),l_(a,e,s,n)}var wl="_reactListening"+Math.random().toString(36).slice(2);function _f(e){if(!e[wl]){e[wl]=!0,Z.forEach(function(a){a!=="selectionchange"&&(ix.has(a)||mf(a,!1,e),mf(a,!0,e))});var n=e.nodeType===9?e:e.ownerDocument;n===null||n[wl]||(n[wl]=!0,mf("selectionchange",!1,n))}}function l_(e,n,a,s){switch(U_(n)){case 2:var c=wx;break;case 8:c=Dx;break;default:c=wf}a=c.bind(null,n,a,e),c=void 0,!Bc||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(c=!0),s?c!==void 0?e.addEventListener(n,a,{capture:!0,passive:c}):e.addEventListener(n,a,!0):c!==void 0?e.addEventListener(n,a,{passive:c}):e.addEventListener(n,a,!1)}function gf(e,n,a,s,c){var f=s;if(!(n&1)&&!(n&2)&&s!==null)t:for(;;){if(s===null)return;var S=s.tag;if(S===3||S===4){var C=s.stateNode.containerInfo;if(C===c||C.nodeType===8&&C.parentNode===c)break;if(S===4)for(S=s.return;S!==null;){var N=S.tag;if((N===3||N===4)&&(N=S.stateNode.containerInfo,N===c||N.nodeType===8&&N.parentNode===c))return;S=S.return}for(;C!==null;){if(S=Li(C),S===null)return;if(N=S.tag,N===5||N===6||N===26||N===27){s=f=S;continue t}C=C.parentNode}}s=s.return}Ed(function(){var X=f,ut=Pc(a),xt=[];t:{var at=Qd.get(e);if(at!==void 0){var ct=qo,Vt=e;switch(e){case"keypress":if(Xo(a)===0)break t;case"keydown":case"keyup":ct=Kv;break;case"focusin":Vt="focus",ct=Gc;break;case"focusout":Vt="blur",ct=Gc;break;case"beforeblur":case"afterblur":ct=Gc;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=Ad;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=Fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=$v;break;case Yd:case jd:case Zd:ct=Gv;break;case Kd:ct=e0;break;case"scroll":case"scrollend":ct=zv;break;case"wheel":ct=i0;break;case"copy":case"cut":case"paste":ct=kv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=Cd;break;case"toggle":case"beforetoggle":ct=r0}var ie=(n&4)!==0,qe=!ie&&(e==="scroll"||e==="scrollend"),K=ie?at!==null?at+"Capture":null:at;ie=[];for(var V=X,J;V!==null;){var mt=V;if(J=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||J===null||K===null||(mt=Cs(V,K),mt!=null&&ie.push(uo(V,mt,J))),qe)break;V=V.return}0<ie.length&&(at=new ct(at,Vt,null,a,ut),xt.push({event:at,listeners:ie}))}}if(!(n&7)){t:{if(at=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",at&&a!==Oc&&(Vt=a.relatedTarget||a.fromElement)&&(Li(Vt)||Vt[Ui]))break t;if((ct||at)&&(at=ut.window===ut?ut:(at=ut.ownerDocument)?at.defaultView||at.parentWindow:window,ct?(Vt=a.relatedTarget||a.toElement,ct=X,Vt=Vt?Li(Vt):null,Vt!==null&&(qe=Y(Vt),ie=Vt.tag,Vt!==qe||ie!==5&&ie!==27&&ie!==6)&&(Vt=null)):(ct=null,Vt=X),ct!==Vt)){if(ie=Ad,mt="onMouseLeave",K="onMouseEnter",V="mouse",(e==="pointerout"||e==="pointerover")&&(ie=Cd,mt="onPointerLeave",K="onPointerEnter",V="pointer"),qe=ct==null?at:q(ct),J=Vt==null?at:q(Vt),at=new ie(mt,V+"leave",ct,a,ut),at.target=qe,at.relatedTarget=J,mt=null,Li(ut)===X&&(ie=new ie(K,V+"enter",Vt,a,ut),ie.target=J,ie.relatedTarget=qe,mt=ie),qe=mt,ct&&Vt)e:{for(ie=ct,K=Vt,V=0,J=ie;J;J=Yr(J))V++;for(J=0,mt=K;mt;mt=Yr(mt))J++;for(;0<V-J;)ie=Yr(ie),V--;for(;0<J-V;)K=Yr(K),J--;for(;V--;){if(ie===K||K!==null&&ie===K.alternate)break e;ie=Yr(ie),K=Yr(K)}ie=null}else ie=null;ct!==null&&c_(xt,at,ct,ie,!1),Vt!==null&&qe!==null&&c_(xt,qe,Vt,ie,!0)}}t:{if(at=X?q(X):window,ct=at.nodeName&&at.nodeName.toLowerCase(),ct==="select"||ct==="input"&&at.type==="file")var It=zd;else if(Od(at))if(Bd)It=m0;else{It=d0;var de=h0}else ct=at.nodeName,!ct||ct.toLowerCase()!=="input"||at.type!=="checkbox"&&at.type!=="radio"?X&&Nc(X.elementType)&&(It=zd):It=p0;if(It&&(It=It(e,X))){Pd(xt,It,a,ut);break t}de&&de(e,at,X),e==="focusout"&&X&&at.type==="number"&&X.memoizedProps.value!=null&&Sn(at,"number",at.value)}switch(de=X?q(X):window,e){case"focusin":(Od(de)||de.contentEditable==="true")&&(br=de,Yc=X,zs=null);break;case"focusout":zs=Yc=br=null;break;case"mousedown":jc=!0;break;case"contextmenu":case"mouseup":case"dragend":jc=!1,Wd(xt,a,ut);break;case"selectionchange":if(v0)break;case"keydown":case"keyup":Wd(xt,a,ut)}var Wt;if(kc)t:{switch(e){case"compositionstart":var Jt="onCompositionStart";break t;case"compositionend":Jt="onCompositionEnd";break t;case"compositionupdate":Jt="onCompositionUpdate";break t}Jt=void 0}else Tr?Ld(e,a)&&(Jt="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Jt="onCompositionStart");Jt&&(wd&&a.locale!=="ko"&&(Tr||Jt!=="onCompositionStart"?Jt==="onCompositionEnd"&&Tr&&(Wt=Td()):(oa=ut,Fc="value"in oa?oa.value:oa.textContent,Tr=!0)),de=Dl(X,Jt),0<de.length&&(Jt=new Rd(Jt,e,null,a,ut),xt.push({event:Jt,listeners:de}),Wt?Jt.data=Wt:(Wt=Nd(a),Wt!==null&&(Jt.data=Wt)))),(Wt=o0?l0(e,a):c0(e,a))&&(Jt=Dl(X,"onBeforeInput"),0<Jt.length&&(de=new Rd("onBeforeInput","beforeinput",null,a,ut),xt.push({event:de,listeners:Jt}),de.data=Wt)),tx(xt,e,X,a,ut)}o_(xt,n)})}function uo(e,n,a){return{instance:e,listener:n,currentTarget:a}}function Dl(e,n){for(var a=n+"Capture",s=[];e!==null;){var c=e,f=c.stateNode;c=c.tag,c!==5&&c!==26&&c!==27||f===null||(c=Cs(e,a),c!=null&&s.unshift(uo(e,c,f)),c=Cs(e,n),c!=null&&s.push(uo(e,c,f))),e=e.return}return s}function Yr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function c_(e,n,a,s,c){for(var f=n._reactName,S=[];a!==null&&a!==s;){var C=a,N=C.alternate,X=C.stateNode;if(C=C.tag,N!==null&&N===s)break;C!==5&&C!==26&&C!==27||X===null||(N=X,c?(X=Cs(a,f),X!=null&&S.unshift(uo(a,X,N))):c||(X=Cs(a,f),X!=null&&S.push(uo(a,X,N)))),a=a.return}S.length!==0&&e.push({event:n,listeners:S})}var ax=/\r\n?/g,rx=/\u0000|\uFFFD/g;function u_(e){return(typeof e=="string"?e:""+e).replace(ax,`
`).replace(rx,"")}function f_(e,n){return n=u_(n),u_(e)===n}function Ul(){}function Ne(e,n,a,s,c,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Pn(e,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Pn(e,""+s);break;case"className":Ie(e,"class",s);break;case"tabIndex":Ie(e,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Ie(e,a,s);break;case"style":yd(e,s,f);break;case"data":if(n!=="object"){Ie(e,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){e.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Vo(""+s),e.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ne(e,n,"name",c.name,c,null),Ne(e,n,"formEncType",c.formEncType,c,null),Ne(e,n,"formMethod",c.formMethod,c,null),Ne(e,n,"formTarget",c.formTarget,c,null)):(Ne(e,n,"encType",c.encType,c,null),Ne(e,n,"method",c.method,c,null),Ne(e,n,"target",c.target,c,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){e.removeAttribute(a);break}s=Vo(""+s),e.setAttribute(a,s);break;case"onClick":s!=null&&(e.onclick=Ul);break;case"onScroll":s!=null&&xe("scroll",e);break;case"onScrollEnd":s!=null&&xe("scrollend",e);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"multiple":e.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":e.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){e.removeAttribute("xlink:href");break}a=Vo(""+s),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""+s):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":s===!0?e.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?e.setAttribute(a,s):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?e.setAttribute(a,s):e.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?e.removeAttribute(a):e.setAttribute(a,s);break;case"popover":xe("beforetoggle",e),xe("toggle",e),ge(e,"popover",s);break;case"xlinkActuate":Te(e,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":Te(e,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":Te(e,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":Te(e,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":Te(e,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":Te(e,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":Te(e,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":Te(e,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":Te(e,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":ge(e,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Ov.get(a)||a,ge(e,a,s))}}function vf(e,n,a,s,c,f){switch(a){case"style":yd(e,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(c.children!=null)throw Error(r(60));e.innerHTML=a}}break;case"children":typeof s=="string"?Pn(e,s):(typeof s=="number"||typeof s=="bigint")&&Pn(e,""+s);break;case"onScroll":s!=null&&xe("scroll",e);break;case"onScrollEnd":s!=null&&xe("scrollend",e);break;case"onClick":s!=null&&(e.onclick=Ul);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Mt.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(c=a.endsWith("Capture"),n=a.slice(2,c?a.length-7:void 0),f=e[nn]||null,f=f!=null?f[a]:null,typeof f=="function"&&e.removeEventListener(n,f,c),typeof s=="function")){typeof f!="function"&&f!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(n,s,c);break t}a in e?e[a]=s:s===!0?e.setAttribute(a,""):ge(e,a,s)}}}function vn(e,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":xe("error",e),xe("load",e);var s=!1,c=!1,f;for(f in a)if(a.hasOwnProperty(f)){var S=a[f];if(S!=null)switch(f){case"src":s=!0;break;case"srcSet":c=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,f,S,a,null)}}c&&Ne(e,n,"srcSet",a.srcSet,a,null),s&&Ne(e,n,"src",a.src,a,null);return;case"input":xe("invalid",e);var C=f=S=c=null,N=null,X=null;for(s in a)if(a.hasOwnProperty(s)){var ut=a[s];if(ut!=null)switch(s){case"name":c=ut;break;case"type":S=ut;break;case"checked":N=ut;break;case"defaultChecked":X=ut;break;case"value":f=ut;break;case"defaultValue":C=ut;break;case"children":case"dangerouslySetInnerHTML":if(ut!=null)throw Error(r(137,n));break;default:Ne(e,n,s,ut,a,null)}}Cn(e,f,C,N,X,S,c,!1),ve(e);return;case"select":xe("invalid",e),s=S=f=null;for(c in a)if(a.hasOwnProperty(c)&&(C=a[c],C!=null))switch(c){case"value":f=C;break;case"defaultValue":S=C;break;case"multiple":s=C;default:Ne(e,n,c,C,a,null)}n=f,a=S,e.multiple=!!s,n!=null?ke(e,!!s,n,!1):a!=null&&ke(e,!!s,a,!0);return;case"textarea":xe("invalid",e),f=c=s=null;for(S in a)if(a.hasOwnProperty(S)&&(C=a[S],C!=null))switch(S){case"value":s=C;break;case"defaultValue":c=C;break;case"children":f=C;break;case"dangerouslySetInnerHTML":if(C!=null)throw Error(r(91));break;default:Ne(e,n,S,C,a,null)}yr(e,s,c,f),ve(e);return;case"option":for(N in a)if(a.hasOwnProperty(N)&&(s=a[N],s!=null))switch(N){case"selected":e.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ne(e,n,N,s,a,null)}return;case"dialog":xe("cancel",e),xe("close",e);break;case"iframe":case"object":xe("load",e);break;case"video":case"audio":for(s=0;s<co.length;s++)xe(co[s],e);break;case"image":xe("error",e),xe("load",e);break;case"details":xe("toggle",e);break;case"embed":case"source":case"link":xe("error",e),xe("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(X in a)if(a.hasOwnProperty(X)&&(s=a[X],s!=null))switch(X){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ne(e,n,X,s,a,null)}return;default:if(Nc(n)){for(ut in a)a.hasOwnProperty(ut)&&(s=a[ut],s!==void 0&&vf(e,n,ut,s,a,void 0));return}}for(C in a)a.hasOwnProperty(C)&&(s=a[C],s!=null&&Ne(e,n,C,s,a,null))}function sx(e,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var c=null,f=null,S=null,C=null,N=null,X=null,ut=null;for(ct in a){var xt=a[ct];if(a.hasOwnProperty(ct)&&xt!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":N=xt;default:s.hasOwnProperty(ct)||Ne(e,n,ct,null,s,xt)}}for(var at in s){var ct=s[at];if(xt=a[at],s.hasOwnProperty(at)&&(ct!=null||xt!=null))switch(at){case"type":f=ct;break;case"name":c=ct;break;case"checked":X=ct;break;case"defaultChecked":ut=ct;break;case"value":S=ct;break;case"defaultValue":C=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(r(137,n));break;default:ct!==xt&&Ne(e,n,at,ct,s,xt)}}Ue(e,S,C,N,X,ut,f,c);return;case"select":ct=S=C=at=null;for(f in a)if(N=a[f],a.hasOwnProperty(f)&&N!=null)switch(f){case"value":break;case"multiple":ct=N;default:s.hasOwnProperty(f)||Ne(e,n,f,null,s,N)}for(c in s)if(f=s[c],N=a[c],s.hasOwnProperty(c)&&(f!=null||N!=null))switch(c){case"value":at=f;break;case"defaultValue":C=f;break;case"multiple":S=f;default:f!==N&&Ne(e,n,c,f,s,N)}n=C,a=S,s=ct,at!=null?ke(e,!!a,at,!1):!!s!=!!a&&(n!=null?ke(e,!!a,n,!0):ke(e,!!a,a?[]:"",!1));return;case"textarea":ct=at=null;for(C in a)if(c=a[C],a.hasOwnProperty(C)&&c!=null&&!s.hasOwnProperty(C))switch(C){case"value":break;case"children":break;default:Ne(e,n,C,null,s,c)}for(S in s)if(c=s[S],f=a[S],s.hasOwnProperty(S)&&(c!=null||f!=null))switch(S){case"value":at=c;break;case"defaultValue":ct=c;break;case"children":break;case"dangerouslySetInnerHTML":if(c!=null)throw Error(r(91));break;default:c!==f&&Ne(e,n,S,c,s,f)}mn(e,at,ct);return;case"option":for(var Vt in a)if(at=a[Vt],a.hasOwnProperty(Vt)&&at!=null&&!s.hasOwnProperty(Vt))switch(Vt){case"selected":e.selected=!1;break;default:Ne(e,n,Vt,null,s,at)}for(N in s)if(at=s[N],ct=a[N],s.hasOwnProperty(N)&&at!==ct&&(at!=null||ct!=null))switch(N){case"selected":e.selected=at&&typeof at!="function"&&typeof at!="symbol";break;default:Ne(e,n,N,at,s,ct)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ie in a)at=a[ie],a.hasOwnProperty(ie)&&at!=null&&!s.hasOwnProperty(ie)&&Ne(e,n,ie,null,s,at);for(X in s)if(at=s[X],ct=a[X],s.hasOwnProperty(X)&&at!==ct&&(at!=null||ct!=null))switch(X){case"children":case"dangerouslySetInnerHTML":if(at!=null)throw Error(r(137,n));break;default:Ne(e,n,X,at,s,ct)}return;default:if(Nc(n)){for(var qe in a)at=a[qe],a.hasOwnProperty(qe)&&at!==void 0&&!s.hasOwnProperty(qe)&&vf(e,n,qe,void 0,s,at);for(ut in s)at=s[ut],ct=a[ut],!s.hasOwnProperty(ut)||at===ct||at===void 0&&ct===void 0||vf(e,n,ut,at,s,ct);return}}for(var K in a)at=a[K],a.hasOwnProperty(K)&&at!=null&&!s.hasOwnProperty(K)&&Ne(e,n,K,null,s,at);for(xt in s)at=s[xt],ct=a[xt],!s.hasOwnProperty(xt)||at===ct||at==null&&ct==null||Ne(e,n,xt,at,s,ct)}var xf=null,Sf=null;function Ll(e){return e.nodeType===9?e:e.ownerDocument}function h_(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function d_(e,n){if(e===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&n==="foreignObject"?0:e}function yf(e,n){return e==="textarea"||e==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function ox(){var e=window.event;return e&&e.type==="popstate"?e===Mf?!1:(Mf=e,!0):(Mf=null,!1)}var p_=typeof setTimeout=="function"?setTimeout:void 0,lx=typeof clearTimeout=="function"?clearTimeout:void 0,m_=typeof Promise=="function"?Promise:void 0,cx=typeof queueMicrotask=="function"?queueMicrotask:typeof m_<"u"?function(e){return m_.resolve(null).then(e).catch(ux)}:p_;function ux(e){setTimeout(function(){throw e})}function Ef(e,n){var a=n,s=0;do{var c=a.nextSibling;if(e.removeChild(a),c&&c.nodeType===8)if(a=c.data,a==="/$"){if(s===0){e.removeChild(c),xo(n);return}s--}else a!=="$"&&a!=="$?"&&a!=="$!"||s++;a=c}while(a);xo(n)}function Tf(e){var n=e.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Tf(a),Rs(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function fx(e,n,a,s){for(;e.nodeType===1;){var c=a;if(e.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(s){if(!e[Ia])switch(n){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(f=e.getAttribute("rel"),f==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(f!==c.rel||e.getAttribute("href")!==(c.href==null?null:c.href)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin)||e.getAttribute("title")!==(c.title==null?null:c.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(f=e.getAttribute("src"),(f!==(c.src==null?null:c.src)||e.getAttribute("type")!==(c.type==null?null:c.type)||e.getAttribute("crossorigin")!==(c.crossOrigin==null?null:c.crossOrigin))&&f&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(n==="input"&&e.type==="hidden"){var f=c.name==null?null:""+c.name;if(c.type==="hidden"&&e.getAttribute("name")===f)return e}else return e;if(e=di(e.nextSibling),e===null)break}return null}function hx(e,n,a){if(n==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=di(e.nextSibling),e===null))return null;return e}function di(e){for(;e!=null;e=e.nextSibling){var n=e.nodeType;if(n===1||n===3)break;if(n===8){if(n=e.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return e}function __(e){e=e.previousSibling;for(var n=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"){if(n===0)return e;n--}else a==="/$"&&n++}e=e.previousSibling}return null}function g_(e,n,a){switch(n=Ll(a),e){case"html":if(e=n.documentElement,!e)throw Error(r(452));return e;case"head":if(e=n.head,!e)throw Error(r(453));return e;case"body":if(e=n.body,!e)throw Error(r(454));return e;default:throw Error(r(451))}}var ai=new Map,v_=new Set;function Nl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.ownerDocument}var Yi=j.d;j.d={f:dx,r:px,D:mx,C:_x,L:gx,m:vx,X:Sx,S:xx,M:yx};function dx(){var e=Yi.f(),n=bl();return e||n}function px(e){var n=w(e);n!==null&&n.tag===5&&n.type==="form"?Wp(n):Yi.r(e)}var jr=typeof document>"u"?null:document;function x_(e,n,a){var s=jr;if(s&&typeof n=="string"&&n){var c=cn(n);c='link[rel="'+e+'"][href="'+c+'"]',typeof a=="string"&&(c+='[crossorigin="'+a+'"]'),v_.has(c)||(v_.add(c),e={rel:e,crossOrigin:a,href:n},s.querySelector(c)===null&&(n=s.createElement("link"),vn(n,"link",e),Q(n),s.head.appendChild(n)))}}function mx(e){Yi.D(e),x_("dns-prefetch",e,null)}function _x(e,n){Yi.C(e,n),x_("preconnect",e,n)}function gx(e,n,a){Yi.L(e,n,a);var s=jr;if(s&&e&&n){var c='link[rel="preload"][as="'+cn(n)+'"]';n==="image"&&a&&a.imageSrcSet?(c+='[imagesrcset="'+cn(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(c+='[imagesizes="'+cn(a.imageSizes)+'"]')):c+='[href="'+cn(e)+'"]';var f=c;switch(n){case"style":f=Zr(e);break;case"script":f=Kr(e)}ai.has(f)||(e=b({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:e,as:n},a),ai.set(f,e),s.querySelector(c)!==null||n==="style"&&s.querySelector(fo(f))||n==="script"&&s.querySelector(ho(f))||(n=s.createElement("link"),vn(n,"link",e),Q(n),s.head.appendChild(n)))}}function vx(e,n){Yi.m(e,n);var a=jr;if(a&&e){var s=n&&typeof n.as=="string"?n.as:"script",c='link[rel="modulepreload"][as="'+cn(s)+'"][href="'+cn(e)+'"]',f=c;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Kr(e)}if(!ai.has(f)&&(e=b({rel:"modulepreload",href:e},n),ai.set(f,e),a.querySelector(c)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}s=a.createElement("link"),vn(s,"link",e),Q(s),a.head.appendChild(s)}}}function xx(e,n,a){Yi.S(e,n,a);var s=jr;if(s&&e){var c=tt(s).hoistableStyles,f=Zr(e);n=n||"default";var S=c.get(f);if(!S){var C={loading:0,preload:null};if(S=s.querySelector(fo(f)))C.loading=5;else{e=b({rel:"stylesheet",href:e,"data-precedence":n},a),(a=ai.get(f))&&bf(e,a);var N=S=s.createElement("link");Q(N),vn(N,"link",e),N._p=new Promise(function(X,ut){N.onload=X,N.onerror=ut}),N.addEventListener("load",function(){C.loading|=1}),N.addEventListener("error",function(){C.loading|=2}),C.loading|=4,Ol(S,n,s)}S={type:"stylesheet",instance:S,count:1,state:C},c.set(f,S)}}}function Sx(e,n){Yi.X(e,n);var a=jr;if(a&&e){var s=tt(a).hoistableScripts,c=Kr(e),f=s.get(c);f||(f=a.querySelector(ho(c)),f||(e=b({src:e,async:!0},n),(n=ai.get(c))&&Af(e,n),f=a.createElement("script"),Q(f),vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function yx(e,n){Yi.M(e,n);var a=jr;if(a&&e){var s=tt(a).hoistableScripts,c=Kr(e),f=s.get(c);f||(f=a.querySelector(ho(c)),f||(e=b({src:e,async:!0,type:"module"},n),(n=ai.get(c))&&Af(e,n),f=a.createElement("script"),Q(f),vn(f,"link",e),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(c,f))}}function S_(e,n,a,s){var c=(c=ae.current)?Nl(c):null;if(!c)throw Error(r(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Zr(a.href),a=tt(c).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Zr(a.href);var f=tt(c).hoistableStyles,S=f.get(e);if(S||(c=c.ownerDocument||c,S={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(e,S),(f=c.querySelector(fo(e)))&&!f._p&&(S.instance=f,S.state.loading=5),ai.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ai.set(e,a),f||Mx(c,e,a,S.state))),n&&s===null)throw Error(r(528,""));return S}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Kr(a),a=tt(c).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,e))}}function Zr(e){return'href="'+cn(e)+'"'}function fo(e){return'link[rel="stylesheet"]['+e+"]"}function y_(e){return b({},e,{"data-precedence":e.precedence,precedence:null})}function Mx(e,n,a,s){e.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=e.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),vn(n,"link",a),Q(n),e.head.appendChild(n))}function Kr(e){return'[src="'+cn(e)+'"]'}function ho(e){return"script[async]"+e}function M_(e,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=e.querySelector('style[data-href~="'+cn(a.href)+'"]');if(s)return n.instance=s,Q(s),s;var c=b({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(e.ownerDocument||e).createElement("style"),Q(s),vn(s,"style",c),Ol(s,a.precedence,e),n.instance=s;case"stylesheet":c=Zr(a.href);var f=e.querySelector(fo(c));if(f)return n.state.loading|=4,n.instance=f,Q(f),f;s=y_(a),(c=ai.get(c))&&bf(s,c),f=(e.ownerDocument||e).createElement("link"),Q(f);var S=f;return S._p=new Promise(function(C,N){S.onload=C,S.onerror=N}),vn(f,"link",s),n.state.loading|=4,Ol(f,a.precedence,e),n.instance=f;case"script":return f=Kr(a.src),(c=e.querySelector(ho(f)))?(n.instance=c,Q(c),c):(s=a,(c=ai.get(f))&&(s=b({},a),Af(s,c)),e=e.ownerDocument||e,c=e.createElement("script"),Q(c),vn(c,"link",s),e.head.appendChild(c),n.instance=c);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&!(n.state.loading&4)&&(s=n.instance,n.state.loading|=4,Ol(s,a.precedence,e));return n.instance}function Ol(e,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),c=s.length?s[s.length-1]:null,f=c,S=0;S<s.length;S++){var C=s[S];if(C.dataset.precedence===n)f=C;else if(f!==c)break}f?f.parentNode.insertBefore(e,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(e,n.firstChild))}function bf(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.title==null&&(e.title=n.title)}function Af(e,n){e.crossOrigin==null&&(e.crossOrigin=n.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=n.referrerPolicy),e.integrity==null&&(e.integrity=n.integrity)}var Pl=null;function E_(e,n,a){if(Pl===null){var s=new Map,c=Pl=new Map;c.set(a,s)}else c=Pl,s=c.get(a),s||(s=new Map,c.set(a,s));if(s.has(e))return s;for(s.set(e,null),a=a.getElementsByTagName(e),c=0;c<a.length;c++){var f=a[c];if(!(f[Ia]||f[en]||e==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var S=f.getAttribute(n)||"";S=e+S;var C=s.get(S);C?C.push(f):s.set(S,[f])}}return s}function T_(e,n,a){e=e.ownerDocument||e,e.head.insertBefore(a,n==="title"?e.querySelector("head > title"):null)}function Ex(e,n,a){if(a===1||n.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return e=n.disabled,typeof n.precedence=="string"&&e==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function b_(e){return!(e.type==="stylesheet"&&!(e.state.loading&3))}var po=null;function Tx(){}function bx(e,n,a){if(po===null)throw Error(r(475));var s=po;if(n.type==="stylesheet"&&(typeof a.media!="string"||matchMedia(a.media).matches!==!1)&&!(n.state.loading&4)){if(n.instance===null){var c=Zr(a.href),f=e.querySelector(fo(c));if(f){e=f._p,e!==null&&typeof e=="object"&&typeof e.then=="function"&&(s.count++,s=zl.bind(s),e.then(s,s)),n.state.loading|=4,n.instance=f,Q(f);return}f=e.ownerDocument||e,a=y_(a),(c=ai.get(c))&&bf(a,c),f=f.createElement("link"),Q(f);var S=f;S._p=new Promise(function(C,N){S.onload=C,S.onerror=N}),vn(f,"link",a),n.instance=f}s.stylesheets===null&&(s.stylesheets=new Map),s.stylesheets.set(n,e),(e=n.state.preload)&&!(n.state.loading&3)&&(s.count++,n=zl.bind(s),e.addEventListener("load",n),e.addEventListener("error",n))}}function Ax(){if(po===null)throw Error(r(475));var e=po;return e.stylesheets&&e.count===0&&Rf(e,e.stylesheets),0<e.count?function(n){var a=setTimeout(function(){if(e.stylesheets&&Rf(e,e.stylesheets),e.unsuspend){var s=e.unsuspend;e.unsuspend=null,s()}},6e4);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(a)}}:null}function zl(){if(this.count--,this.count===0){if(this.stylesheets)Rf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Bl=null;function Rf(e,n){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Bl=new Map,n.forEach(Rx,e),Bl=null,zl.call(e))}function Rx(e,n){if(!(n.state.loading&4)){var a=Bl.get(e);if(a)var s=a.get(null);else{a=new Map,Bl.set(e,a);for(var c=e.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<c.length;f++){var S=c[f];(S.nodeName==="LINK"||S.getAttribute("media")!=="not all")&&(a.set(S.dataset.precedence,S),s=S)}s&&a.set(null,s)}c=n.instance,S=c.getAttribute("data-precedence"),f=a.get(S)||s,f===s&&a.set(null,c),a.set(S,c),this.count++,s=zl.bind(this),c.addEventListener("load",s),c.addEventListener("error",s),f?f.parentNode.insertBefore(c,f.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(c,e.firstChild)),n.state.loading|=4}}var mo={$$typeof:M,Provider:null,Consumer:null,_currentValue:dt,_currentValue2:dt,_threadCount:0};function Cx(e,n,a,s,c,f,S,C){this.tag=1,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=bn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bn(0),this.hiddenUpdates=bn(null),this.identifierPrefix=s,this.onUncaughtError=c,this.onCaughtError=f,this.onRecoverableError=S,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=C,this.incompleteTransitions=new Map}function A_(e,n,a,s,c,f,S,C,N,X,ut,xt){return e=new Cx(e,n,a,S,C,N,X,xt),n=1,f===!0&&(n|=24),f=ni(3,null,null,n),e.current=f,f.stateNode=e,n=au(),n.refCount++,e.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},Fu(f),e}function R_(e){return e?(e=Cr,e):Cr}function C_(e,n,a,s,c,f){c=R_(c),s.context===null?s.context=c:s.pendingContext=c,s=ma(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=_a(e,s,n),a!==null&&(Dn(a,e,n),Qs(a,e,n))}function w_(e,n){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<n?a:n}}function Cf(e,n){w_(e,n),(e=e.alternate)&&w_(e,n)}function D_(e){if(e.tag===13){var n=la(e,67108864);n!==null&&Dn(n,e,67108864),Cf(e,67108864)}}var Fl=!0;function wx(e,n,a,s){var c=R.T;R.T=null;var f=j.p;try{j.p=2,wf(e,n,a,s)}finally{j.p=f,R.T=c}}function Dx(e,n,a,s){var c=R.T;R.T=null;var f=j.p;try{j.p=8,wf(e,n,a,s)}finally{j.p=f,R.T=c}}function wf(e,n,a,s){if(Fl){var c=Df(s);if(c===null)gf(e,n,s,Il,a),L_(e,s);else if(Lx(c,e,n,a,s))s.stopPropagation();else if(L_(e,s),n&4&&-1<Ux.indexOf(e)){for(;c!==null;){var f=w(c);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var S=Ct(f.pendingLanes);if(S!==0){var C=f;for(C.pendingLanes|=2,C.entangledLanes|=2;S;){var N=1<<31-jt(S);C.entanglements[1]|=N,S&=~N}Ai(f),!(Ve&6)&&(Ml=ht()+500,lo(0))}}break;case 13:C=la(f,2),C!==null&&Dn(C,f,2),bl(),Cf(f,2)}if(f=Df(s),f===null&&gf(e,n,s,Il,a),f===c)break;c=f}c!==null&&s.stopPropagation()}else gf(e,n,s,null,a)}}function Df(e){return e=Pc(e),Uf(e)}var Il=null;function Uf(e){if(Il=null,e=Li(e),e!==null){var n=Y(e);if(n===null)e=null;else{var a=n.tag;if(a===13){if(e=gt(n),e!==null)return e;e=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;e=null}else n!==e&&(e=null)}}return Il=e,null}function U_(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(St()){case pt:return 2;case Ht:return 8;case wt:case zt:return 32;case me:return 268435456;default:return 32}default:return 32}}var Lf=!1,Ea=null,Ta=null,ba=null,_o=new Map,go=new Map,Aa=[],Ux="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function L_(e,n){switch(e){case"focusin":case"focusout":Ea=null;break;case"dragenter":case"dragleave":Ta=null;break;case"mouseover":case"mouseout":ba=null;break;case"pointerover":case"pointerout":_o.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function vo(e,n,a,s,c,f){return e===null||e.nativeEvent!==f?(e={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[c]},n!==null&&(n=w(n),n!==null&&D_(n)),e):(e.eventSystemFlags|=s,n=e.targetContainers,c!==null&&n.indexOf(c)===-1&&n.push(c),e)}function Lx(e,n,a,s,c){switch(n){case"focusin":return Ea=vo(Ea,e,n,a,s,c),!0;case"dragenter":return Ta=vo(Ta,e,n,a,s,c),!0;case"mouseover":return ba=vo(ba,e,n,a,s,c),!0;case"pointerover":var f=c.pointerId;return _o.set(f,vo(_o.get(f)||null,e,n,a,s,c)),!0;case"gotpointercapture":return f=c.pointerId,go.set(f,vo(go.get(f)||null,e,n,a,s,c)),!0}return!1}function N_(e){var n=Li(e.target);if(n!==null){var a=Y(n);if(a!==null){if(n=a.tag,n===13){if(n=gt(a),n!==null){e.blockedOn=n,Ho(e.priority,function(){if(a.tag===13){var s=Wn(),c=la(a,s);c!==null&&Dn(c,a,s),Cf(a,s)}});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hl(e){if(e.blockedOn!==null)return!1;for(var n=e.targetContainers;0<n.length;){var a=Df(e.nativeEvent);if(a===null){a=e.nativeEvent;var s=new a.constructor(a.type,a);Oc=s,a.target.dispatchEvent(s),Oc=null}else return n=w(a),n!==null&&D_(n),e.blockedOn=a,!1;n.shift()}return!0}function O_(e,n,a){Hl(e)&&a.delete(n)}function Nx(){Lf=!1,Ea!==null&&Hl(Ea)&&(Ea=null),Ta!==null&&Hl(Ta)&&(Ta=null),ba!==null&&Hl(ba)&&(ba=null),_o.forEach(O_),go.forEach(O_)}function Gl(e,n){e.blockedOn===n&&(e.blockedOn=null,Lf||(Lf=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,Nx)))}var Vl=null;function P_(e){Vl!==e&&(Vl=e,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Vl===e&&(Vl=null);for(var n=0;n<e.length;n+=3){var a=e[n],s=e[n+1],c=e[n+2];if(typeof s!="function"){if(Uf(s||a)===null)continue;break}var f=w(a);f!==null&&(e.splice(n,3),n-=3,Su(f,{pending:!0,data:c,method:a.method,action:s},s,c))}}))}function xo(e){function n(N){return Gl(N,e)}Ea!==null&&Gl(Ea,e),Ta!==null&&Gl(Ta,e),ba!==null&&Gl(ba,e),_o.forEach(n),go.forEach(n);for(var a=0;a<Aa.length;a++){var s=Aa[a];s.blockedOn===e&&(s.blockedOn=null)}for(;0<Aa.length&&(a=Aa[0],a.blockedOn===null);)N_(a),a.blockedOn===null&&Aa.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var c=a[s],f=a[s+1],S=c[nn]||null;if(typeof f=="function")S||P_(a);else if(S){var C=null;if(f&&f.hasAttribute("formAction")){if(c=f,S=f[nn]||null)C=S.formAction;else if(Uf(c)!==null)continue}else C=S.action;typeof C=="function"?a[s+1]=C:(a.splice(s,3),s-=3),P_(a)}}}function Nf(e){this._internalRoot=e}kl.prototype.render=Nf.prototype.render=function(e){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();C_(a,s,e,n,null,null)},kl.prototype.unmount=Nf.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var n=e.containerInfo;e.tag===0&&Wr(),C_(e.current,2,null,e,null,null),bl(),n[Ui]=null}};function kl(e){this._internalRoot=e}kl.prototype.unstable_scheduleHydration=function(e){if(e){var n=As();e={blockedOn:null,target:e,priority:n};for(var a=0;a<Aa.length&&n!==0&&n<Aa[a].priority;a++);Aa.splice(a,0,e),a===0&&N_(e)}};var z_=t.version;if(z_!=="19.0.0")throw Error(r(527,z_,"19.0.0"));j.findDOMNode=function(e){var n=e._reactInternals;if(n===void 0)throw typeof e.render=="function"?Error(r(188)):(e=Object.keys(e).join(","),Error(r(268,e)));return e=$(n),e=e!==null?yt(e):null,e=e===null?null:e.stateNode,e};var Ox={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:R,findFiberByHostInstance:Li,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{qt=Xl.inject(Ox),Gt=Xl}catch{}}return yo.createRoot=function(e,n){if(!l(e))throw Error(r(299));var a=!1,s="",c=$p,f=tm,S=em,C=null;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(c=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(S=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(C=n.unstable_transitionCallbacks)),n=A_(e,1,!1,null,null,a,s,c,f,S,C,null),e[Ui]=n.current,_f(e.nodeType===8?e.parentNode:e),new Nf(n)},yo.hydrateRoot=function(e,n,a){if(!l(e))throw Error(r(299));var s=!1,c="",f=$p,S=tm,C=em,N=null,X=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(c=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(S=a.onCaughtError),a.onRecoverableError!==void 0&&(C=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(N=a.unstable_transitionCallbacks),a.formState!==void 0&&(X=a.formState)),n=A_(e,1,!0,n,a??null,s,c,f,S,C,N,X),n.context=R_(null),a=n.current,s=Wn(),c=ma(s),c.callback=null,_a(a,c,s),n.current.lanes=s,An(n,s),Ai(n),e[Ui]=n.current,_f(e),new kl(n)},yo.version="19.0.0",yo}var q_;function Xx(){if(q_)return Pf.exports;q_=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(t){console.error(t)}}return o(),Pf.exports=kx(),Pf.exports}var Wx=Xx(),Y_=ld();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const cd="173",qx=0,j_=1,Yx=2,ev=1,jx=2,ta=3,Ba=0,In=1,ea=2,Pa=0,ds=1,Z_=2,K_=3,Q_=4,Zx=5,dr=100,Kx=101,Qx=102,Jx=103,$x=104,tS=200,eS=201,nS=202,iS=203,xh=204,Sh=205,aS=206,rS=207,sS=208,oS=209,lS=210,cS=211,uS=212,fS=213,hS=214,yh=0,Mh=1,Eh=2,_s=3,Th=4,bh=5,Ah=6,Rh=7,ud=0,dS=1,pS=2,za=0,mS=1,_S=2,gS=3,vS=4,xS=5,SS=6,yS=7,nv=300,gs=301,vs=302,Ch=303,wh=304,Cc=306,Dh=1e3,mr=1001,Uh=1002,Si=1003,MS=1004,Wl=1005,Ci=1006,Hf=1007,_r=1008,ra=1009,iv=1010,av=1011,Lo=1012,fd=1013,gr=1014,na=1015,No=1016,hd=1017,dd=1018,xs=1020,rv=35902,sv=1021,ov=1022,vi=1023,lv=1024,cv=1025,ps=1026,Ss=1027,uv=1028,pd=1029,fv=1030,md=1031,_d=1033,gc=33776,vc=33777,xc=33778,Sc=33779,Lh=35840,Nh=35841,Oh=35842,Ph=35843,zh=36196,Bh=37492,Fh=37496,Ih=37808,Hh=37809,Gh=37810,Vh=37811,kh=37812,Xh=37813,Wh=37814,qh=37815,Yh=37816,jh=37817,Zh=37818,Kh=37819,Qh=37820,Jh=37821,yc=36492,$h=36494,td=36495,hv=36283,ed=36284,nd=36285,id=36286,ES=3200,TS=3201,dv=0,bS=1,Oa="",jn="srgb",ys="srgb-linear",Ec="linear",Oe="srgb",Qr=7680,J_=519,AS=512,RS=513,CS=514,pv=515,wS=516,DS=517,US=518,LS=519,$_=35044,tg="300 es",ia=2e3,Tc=2001;class Es{addEventListener(t,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[t]===void 0&&(r[t]=[]),r[t].indexOf(i)===-1&&r[t].push(i)}hasEventListener(t,i){const r=this._listeners;return r===void 0?!1:r[t]!==void 0&&r[t].indexOf(i)!==-1}removeEventListener(t,i){const r=this._listeners;if(r===void 0)return;const l=r[t];if(l!==void 0){const u=l.indexOf(i);u!==-1&&l.splice(u,1)}}dispatchEvent(t){const i=this._listeners;if(i===void 0)return;const r=i[t.type];if(r!==void 0){t.target=this;const l=r.slice(0);for(let u=0,h=l.length;u<h;u++)l[u].call(this,t);t.target=null}}}const En=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Gf=Math.PI/180,ad=180/Math.PI;function Oo(){const o=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(En[o&255]+En[o>>8&255]+En[o>>16&255]+En[o>>24&255]+"-"+En[t&255]+En[t>>8&255]+"-"+En[t>>16&15|64]+En[t>>24&255]+"-"+En[i&63|128]+En[i>>8&255]+"-"+En[i>>16&255]+En[i>>24&255]+En[r&255]+En[r>>8&255]+En[r>>16&255]+En[r>>24&255]).toLowerCase()}function Se(o,t,i){return Math.max(t,Math.min(i,o))}function NS(o,t){return(o%t+t)%t}function Vf(o,t,i){return(1-i)*o+i*t}function Mo(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Fn(o,t){switch(t.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(t=0,i=0){Pe.prototype.isVector2=!0,this.x=t,this.y=i}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,i){return this.x=t,this.y=i,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const i=this.x,r=this.y,l=t.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y;return i*i+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this}rotateAround(t,i){const r=Math.cos(i),l=Math.sin(i),u=this.x-t.x,h=this.y-t.y;return this.x=u*r-h*l+t.x,this.y=u*l+h*r+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class le{constructor(t,i,r,l,u,h,d,m,p){le.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p)}set(t,i,r,l,u,h,d,m,p){const _=this.elements;return _[0]=t,_[1]=l,_[2]=d,_[3]=i,_[4]=u,_[5]=m,_[6]=r,_[7]=h,_[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(t,i,r){return t.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const i=t.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[3],m=r[6],p=r[1],_=r[4],g=r[7],x=r[2],M=r[5],E=r[8],A=l[0],y=l[3],v=l[6],P=l[1],O=l[4],D=l[7],H=l[2],z=l[5],F=l[8];return u[0]=h*A+d*P+m*H,u[3]=h*y+d*O+m*z,u[6]=h*v+d*D+m*F,u[1]=p*A+_*P+g*H,u[4]=p*y+_*O+g*z,u[7]=p*v+_*D+g*F,u[2]=x*A+M*P+E*H,u[5]=x*y+M*O+E*z,u[8]=x*v+M*D+E*F,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[3]*=t,i[6]*=t,i[1]*=t,i[4]*=t,i[7]*=t,i[2]*=t,i[5]*=t,i[8]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8];return i*h*_-i*d*p-r*u*_+r*d*m+l*u*p-l*h*m}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=_*h-d*p,x=d*m-_*u,M=p*u-h*m,E=i*g+r*x+l*M;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/E;return t[0]=g*A,t[1]=(l*p-_*r)*A,t[2]=(d*r-l*h)*A,t[3]=x*A,t[4]=(_*i-l*m)*A,t[5]=(l*u-d*i)*A,t[6]=M*A,t[7]=(r*m-p*i)*A,t[8]=(h*i-r*u)*A,this}transpose(){let t;const i=this.elements;return t=i[1],i[1]=i[3],i[3]=t,t=i[2],i[2]=i[6],i[6]=t,t=i[5],i[5]=i[7],i[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const i=this.elements;return t[0]=i[0],t[1]=i[3],t[2]=i[6],t[3]=i[1],t[4]=i[4],t[5]=i[7],t[6]=i[2],t[7]=i[5],t[8]=i[8],this}setUvTransform(t,i,r,l,u,h,d){const m=Math.cos(u),p=Math.sin(u);return this.set(r*m,r*p,-r*(m*h+p*d)+h+t,-l*p,l*m,-l*(-p*h+m*d)+d+i,0,0,1),this}scale(t,i){return this.premultiply(kf.makeScale(t,i)),this}rotate(t){return this.premultiply(kf.makeRotation(-t)),this}translate(t,i){return this.premultiply(kf.makeTranslation(t,i)),this}makeTranslation(t,i){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,i,0,0,1),this}makeRotation(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(t,i){return this.set(t,0,0,0,i,0,0,0,1),this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<9;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kf=new le;function mv(o){for(let t=o.length-1;t>=0;--t)if(o[t]>=65535)return!0;return!1}function bc(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function OS(){const o=bc("canvas");return o.style.display="block",o}const eg={};function fs(o){o in eg||(eg[o]=!0,console.warn(o))}function PS(o,t,i){return new Promise(function(r,l){function u(){switch(o.clientWaitSync(t,o.SYNC_FLUSH_COMMANDS_BIT,0)){case o.WAIT_FAILED:l();break;case o.TIMEOUT_EXPIRED:setTimeout(u,i);break;default:r()}}setTimeout(u,i)})}function zS(o){const t=o.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function BS(o){const t=o.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ng=new le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ig=new le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function FS(){const o={enabled:!0,workingColorSpace:ys,spaces:{},convert:function(l,u,h){return this.enabled===!1||u===h||!u||!h||(this.spaces[u].transfer===Oe&&(l.r=aa(l.r),l.g=aa(l.g),l.b=aa(l.b)),this.spaces[u].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[u].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Oe&&(l.r=ms(l.r),l.g=ms(l.g),l.b=ms(l.b))),l},fromWorkingColorSpace:function(l,u){return this.convert(l,this.workingColorSpace,u)},toWorkingColorSpace:function(l,u){return this.convert(l,u,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Oa?Ec:this.spaces[l].transfer},getLuminanceCoefficients:function(l,u=this.workingColorSpace){return l.fromArray(this.spaces[u].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,u,h){return l.copy(this.spaces[u].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return o.define({[ys]:{primaries:t,whitePoint:r,transfer:Ec,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:jn},outputColorSpaceConfig:{drawingBufferColorSpace:jn}},[jn]:{primaries:t,whitePoint:r,transfer:Oe,toXYZ:ng,fromXYZ:ig,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:jn}}}),o}const Re=FS();function aa(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function ms(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class IS{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{Jr===void 0&&(Jr=bc("canvas")),Jr.width=t.width,Jr.height=t.height;const r=Jr.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),i=Jr}return i.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const i=bc("canvas");i.width=t.width,i.height=t.height;const r=i.getContext("2d");r.drawImage(t,0,0,t.width,t.height);const l=r.getImageData(0,0,t.width,t.height),u=l.data;for(let h=0;h<u.length;h++)u[h]=aa(u[h]/255)*255;return r.putImageData(l,0,0),i}else if(t.data){const i=t.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(aa(i[r]/255)*255):i[r]=aa(i[r]);return{data:i,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let HS=0;class _v{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=Oo(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let u;if(Array.isArray(l)){u=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?u.push(Xf(l[h].image)):u.push(Xf(l[h]))}else u=Xf(l);r.url=u}return i||(t.images[this.uuid]=r),r}}function Xf(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?IS.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let GS=0;class Ln extends Es{constructor(t=Ln.DEFAULT_IMAGE,i=Ln.DEFAULT_MAPPING,r=mr,l=mr,u=Ci,h=_r,d=vi,m=ra,p=Ln.DEFAULT_ANISOTROPY,_=Oa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Oo(),this.name="",this.source=new _v(t),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=u,this.minFilter=h,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const i=t===void 0||typeof t=="string";if(!i&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(t.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==nv)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Dh:t.x=t.x-Math.floor(t.x);break;case mr:t.x=t.x<0?0:1;break;case Uh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Dh:t.y=t.y-Math.floor(t.y);break;case mr:t.y=t.y<0?0:1;break;case Uh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ln.DEFAULT_IMAGE=null;Ln.DEFAULT_MAPPING=nv;Ln.DEFAULT_ANISOTROPY=1;class Ze{constructor(t=0,i=0,r=0,l=1){Ze.prototype.isVector4=!0,this.x=t,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,i,r,l){return this.x=t,this.y=i,this.z=r,this.w=l,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this.w=t.w+i.w,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this.w+=t.w*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this.w=t.w-i.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=this.w,h=t.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*u,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*u,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*u,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*u,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const i=Math.sqrt(1-t.w*t.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/i,this.y=t.y/i,this.z=t.z/i),this}setAxisAngleFromRotationMatrix(t){let i,r,l,u;const m=t.elements,p=m[0],_=m[4],g=m[8],x=m[1],M=m[5],E=m[9],A=m[2],y=m[6],v=m[10];if(Math.abs(_-x)<.01&&Math.abs(g-A)<.01&&Math.abs(E-y)<.01){if(Math.abs(_+x)<.1&&Math.abs(g+A)<.1&&Math.abs(E+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(p+1)/2,D=(M+1)/2,H=(v+1)/2,z=(_+x)/4,F=(g+A)/4,G=(E+y)/4;return O>D&&O>H?O<.01?(r=0,l=.707106781,u=.707106781):(r=Math.sqrt(O),l=z/r,u=F/r):D>H?D<.01?(r=.707106781,l=0,u=.707106781):(l=Math.sqrt(D),r=z/l,u=G/l):H<.01?(r=.707106781,l=.707106781,u=0):(u=Math.sqrt(H),r=F/u,l=G/u),this.set(r,l,u,i),this}let P=Math.sqrt((y-E)*(y-E)+(g-A)*(g-A)+(x-_)*(x-_));return Math.abs(P)<.001&&(P=1),this.x=(y-E)/P,this.y=(g-A)/P,this.z=(x-_)/P,this.w=Math.acos((p+M+v-1)/2),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this.w=Se(this.w,t.w,i.w),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this.w=Se(this.w,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this.w+=(t.w-this.w)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this.w=t.w+(i.w-t.w)*r,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this.w=t[i+3],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t[i+3]=this.w,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this.w=t.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class VS extends Es{constructor(t=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=t,this.height=i,this.depth=1,this.scissor=new Ze(0,0,t,i),this.scissorTest=!1,this.viewport=new Ze(0,0,t,i);const l={width:t,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const u=new Ln(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);u.flipY=!1,u.generateMipmaps=r.generateMipmaps,u.internalFormat=r.internalFormat,this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=u.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,i,r=1){if(this.width!==t||this.height!==i||this.depth!==r){this.width=t,this.height=i,this.depth=r;for(let l=0,u=this.textures.length;l<u;l++)this.textures[l].image.width=t,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,t,i),this.scissor.set(0,0,t,i)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let r=0,l=t.textures.length;r<l;r++)this.textures[r]=t.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const i=Object.assign({},t.texture.image);return this.texture.source=new _v(i),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class vr extends VS{constructor(t=1,i=1,r={}){super(t,i,r),this.isWebGLRenderTarget=!0}}class gv extends Ln{constructor(t=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kS extends Ln{constructor(t=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:i,height:r,depth:l},this.magFilter=Si,this.minFilter=Si,this.wrapR=mr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Po{constructor(t=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=t,this._y=i,this._z=r,this._w=l}static slerpFlat(t,i,r,l,u,h,d){let m=r[l+0],p=r[l+1],_=r[l+2],g=r[l+3];const x=u[h+0],M=u[h+1],E=u[h+2],A=u[h+3];if(d===0){t[i+0]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g;return}if(d===1){t[i+0]=x,t[i+1]=M,t[i+2]=E,t[i+3]=A;return}if(g!==A||m!==x||p!==M||_!==E){let y=1-d;const v=m*x+p*M+_*E+g*A,P=v>=0?1:-1,O=1-v*v;if(O>Number.EPSILON){const H=Math.sqrt(O),z=Math.atan2(H,v*P);y=Math.sin(y*z)/H,d=Math.sin(d*z)/H}const D=d*P;if(m=m*y+x*D,p=p*y+M*D,_=_*y+E*D,g=g*y+A*D,y===1-d){const H=1/Math.sqrt(m*m+p*p+_*_+g*g);m*=H,p*=H,_*=H,g*=H}}t[i]=m,t[i+1]=p,t[i+2]=_,t[i+3]=g}static multiplyQuaternionsFlat(t,i,r,l,u,h){const d=r[l],m=r[l+1],p=r[l+2],_=r[l+3],g=u[h],x=u[h+1],M=u[h+2],E=u[h+3];return t[i]=d*E+_*g+m*M-p*x,t[i+1]=m*E+_*x+p*g-d*M,t[i+2]=p*E+_*M+d*x-m*g,t[i+3]=_*E-d*g-m*x-p*M,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,i,r,l){return this._x=t,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,i=!0){const r=t._x,l=t._y,u=t._z,h=t._order,d=Math.cos,m=Math.sin,p=d(r/2),_=d(l/2),g=d(u/2),x=m(r/2),M=m(l/2),E=m(u/2);switch(h){case"XYZ":this._x=x*_*g+p*M*E,this._y=p*M*g-x*_*E,this._z=p*_*E+x*M*g,this._w=p*_*g-x*M*E;break;case"YXZ":this._x=x*_*g+p*M*E,this._y=p*M*g-x*_*E,this._z=p*_*E-x*M*g,this._w=p*_*g+x*M*E;break;case"ZXY":this._x=x*_*g-p*M*E,this._y=p*M*g+x*_*E,this._z=p*_*E+x*M*g,this._w=p*_*g-x*M*E;break;case"ZYX":this._x=x*_*g-p*M*E,this._y=p*M*g+x*_*E,this._z=p*_*E-x*M*g,this._w=p*_*g+x*M*E;break;case"YZX":this._x=x*_*g+p*M*E,this._y=p*M*g+x*_*E,this._z=p*_*E-x*M*g,this._w=p*_*g-x*M*E;break;case"XZY":this._x=x*_*g-p*M*E,this._y=p*M*g-x*_*E,this._z=p*_*E+x*M*g,this._w=p*_*g+x*M*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,i){const r=i/2,l=Math.sin(r);return this._x=t.x*l,this._y=t.y*l,this._z=t.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(t){const i=t.elements,r=i[0],l=i[4],u=i[8],h=i[1],d=i[5],m=i[9],p=i[2],_=i[6],g=i[10],x=r+d+g;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(_-m)*M,this._y=(u-p)*M,this._z=(h-l)*M}else if(r>d&&r>g){const M=2*Math.sqrt(1+r-d-g);this._w=(_-m)/M,this._x=.25*M,this._y=(l+h)/M,this._z=(u+p)/M}else if(d>g){const M=2*Math.sqrt(1+d-r-g);this._w=(u-p)/M,this._x=(l+h)/M,this._y=.25*M,this._z=(m+_)/M}else{const M=2*Math.sqrt(1+g-r-d);this._w=(h-l)/M,this._x=(u+p)/M,this._y=(m+_)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(t,i){let r=t.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=r):(this._x=0,this._y=-t.z,this._z=t.y,this._w=r)):(this._x=t.y*i.z-t.z*i.y,this._y=t.z*i.x-t.x*i.z,this._z=t.x*i.y-t.y*i.x,this._w=r),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Se(this.dot(t),-1,1)))}rotateTowards(t,i){const r=this.angleTo(t);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(t,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,i){const r=t._x,l=t._y,u=t._z,h=t._w,d=i._x,m=i._y,p=i._z,_=i._w;return this._x=r*_+h*d+l*p-u*m,this._y=l*_+h*m+u*d-r*p,this._z=u*_+h*p+r*m-l*d,this._w=h*_-r*d-l*m-u*p,this._onChangeCallback(),this}slerp(t,i){if(i===0)return this;if(i===1)return this.copy(t);const r=this._x,l=this._y,u=this._z,h=this._w;let d=h*t._w+r*t._x+l*t._y+u*t._z;if(d<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,d=-d):this.copy(t),d>=1)return this._w=h,this._x=r,this._y=l,this._z=u,this;const m=1-d*d;if(m<=Number.EPSILON){const M=1-i;return this._w=M*h+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*u+i*this._z,this.normalize(),this}const p=Math.sqrt(m),_=Math.atan2(p,d),g=Math.sin((1-i)*_)/p,x=Math.sin(i*_)/p;return this._w=h*g+this._w*x,this._x=r*g+this._x*x,this._y=l*g+this._y*x,this._z=u*g+this._z*x,this._onChangeCallback(),this}slerpQuaternions(t,i,r){return this.copy(t).slerp(i,r)}random(){const t=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),u=Math.sqrt(r);return this.set(l*Math.sin(t),l*Math.cos(t),u*Math.sin(i),u*Math.cos(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,i=0){return this._x=t[i],this._y=t[i+1],this._z=t[i+2],this._w=t[i+3],this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._w,t}fromBufferAttribute(t,i){return this._x=t.getX(i),this._y=t.getY(i),this._z=t.getZ(i),this._w=t.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class et{constructor(t=0,i=0,r=0){et.prototype.isVector3=!0,this.x=t,this.y=i,this.z=r}set(t,i,r){return r===void 0&&(r=this.z),this.x=t,this.y=i,this.z=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,i){switch(t){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,i){return this.x=t.x+i.x,this.y=t.y+i.y,this.z=t.z+i.z,this}addScaledVector(t,i){return this.x+=t.x*i,this.y+=t.y*i,this.z+=t.z*i,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,i){return this.x=t.x-i.x,this.y=t.y-i.y,this.z=t.z-i.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,i){return this.x=t.x*i.x,this.y=t.y*i.y,this.z=t.z*i.z,this}applyEuler(t){return this.applyQuaternion(ag.setFromEuler(t))}applyAxisAngle(t,i){return this.applyQuaternion(ag.setFromAxisAngle(t,i))}applyMatrix3(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[3]*r+u[6]*l,this.y=u[1]*i+u[4]*r+u[7]*l,this.z=u[2]*i+u[5]*r+u[8]*l,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const i=this.x,r=this.y,l=this.z,u=t.elements,h=1/(u[3]*i+u[7]*r+u[11]*l+u[15]);return this.x=(u[0]*i+u[4]*r+u[8]*l+u[12])*h,this.y=(u[1]*i+u[5]*r+u[9]*l+u[13])*h,this.z=(u[2]*i+u[6]*r+u[10]*l+u[14])*h,this}applyQuaternion(t){const i=this.x,r=this.y,l=this.z,u=t.x,h=t.y,d=t.z,m=t.w,p=2*(h*l-d*r),_=2*(d*i-u*l),g=2*(u*r-h*i);return this.x=i+m*p+h*g-d*_,this.y=r+m*_+d*p-u*g,this.z=l+m*g+u*_-h*p,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const i=this.x,r=this.y,l=this.z,u=t.elements;return this.x=u[0]*i+u[4]*r+u[8]*l,this.y=u[1]*i+u[5]*r+u[9]*l,this.z=u[2]*i+u[6]*r+u[10]*l,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,i){return this.x=Se(this.x,t.x,i.x),this.y=Se(this.y,t.y,i.y),this.z=Se(this.z,t.z,i.z),this}clampScalar(t,i){return this.x=Se(this.x,t,i),this.y=Se(this.y,t,i),this.z=Se(this.z,t,i),this}clampLength(t,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Se(r,t,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,i){return this.x+=(t.x-this.x)*i,this.y+=(t.y-this.y)*i,this.z+=(t.z-this.z)*i,this}lerpVectors(t,i,r){return this.x=t.x+(i.x-t.x)*r,this.y=t.y+(i.y-t.y)*r,this.z=t.z+(i.z-t.z)*r,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,i){const r=t.x,l=t.y,u=t.z,h=i.x,d=i.y,m=i.z;return this.x=l*m-u*d,this.y=u*h-r*m,this.z=r*d-l*h,this}projectOnVector(t){const i=t.lengthSq();if(i===0)return this.set(0,0,0);const r=t.dot(this)/i;return this.copy(t).multiplyScalar(r)}projectOnPlane(t){return Wf.copy(this).projectOnVector(t),this.sub(Wf)}reflect(t){return this.sub(Wf.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const i=Math.sqrt(this.lengthSq()*t.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(t)/i;return Math.acos(Se(r,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const i=this.x-t.x,r=this.y-t.y,l=this.z-t.z;return i*i+r*r+l*l}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,i,r){const l=Math.sin(i)*t;return this.x=l*Math.sin(r),this.y=Math.cos(i)*t,this.z=l*Math.cos(r),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,i,r){return this.x=t*Math.sin(i),this.y=r,this.z=t*Math.cos(i),this}setFromMatrixPosition(t){const i=t.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(t){const i=this.setFromMatrixColumn(t,0).length(),r=this.setFromMatrixColumn(t,1).length(),l=this.setFromMatrixColumn(t,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(t,i){return this.fromArray(t.elements,i*4)}setFromMatrix3Column(t,i){return this.fromArray(t.elements,i*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,i=0){return this.x=t[i],this.y=t[i+1],this.z=t[i+2],this}toArray(t=[],i=0){return t[i]=this.x,t[i+1]=this.y,t[i+2]=this.z,t}fromBufferAttribute(t,i){return this.x=t.getX(i),this.y=t.getY(i),this.z=t.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(t),this.y=i,this.z=r*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Wf=new et,ag=new Po;class zo{constructor(t=new et(1/0,1/0,1/0),i=new et(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=i}set(t,i){return this.min.copy(t),this.max.copy(i),this}setFromArray(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i+=3)this.expandByPoint(pi.fromArray(t,i));return this}setFromBufferAttribute(t){this.makeEmpty();for(let i=0,r=t.count;i<r;i++)this.expandByPoint(pi.fromBufferAttribute(t,i));return this}setFromPoints(t){this.makeEmpty();for(let i=0,r=t.length;i<r;i++)this.expandByPoint(t[i]);return this}setFromCenterAndSize(t,i){const r=pi.copy(i).multiplyScalar(.5);return this.min.copy(t).sub(r),this.max.copy(t).add(r),this}setFromObject(t,i=!1){return this.makeEmpty(),this.expandByObject(t,i)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,i=!1){t.updateWorldMatrix(!1,!1);const r=t.geometry;if(r!==void 0){const u=r.getAttribute("position");if(i===!0&&u!==void 0&&t.isInstancedMesh!==!0)for(let h=0,d=u.count;h<d;h++)t.isMesh===!0?t.getVertexPosition(h,pi):pi.fromBufferAttribute(u,h),pi.applyMatrix4(t.matrixWorld),this.expandByPoint(pi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ql.copy(t.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(t.matrixWorld),this.union(ql)}const l=t.children;for(let u=0,h=l.length;u<h;u++)this.expandByObject(l[u],i);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,i){return i.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,pi),pi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let i,r;return t.normal.x>0?(i=t.normal.x*this.min.x,r=t.normal.x*this.max.x):(i=t.normal.x*this.max.x,r=t.normal.x*this.min.x),t.normal.y>0?(i+=t.normal.y*this.min.y,r+=t.normal.y*this.max.y):(i+=t.normal.y*this.max.y,r+=t.normal.y*this.min.y),t.normal.z>0?(i+=t.normal.z*this.min.z,r+=t.normal.z*this.max.z):(i+=t.normal.z*this.max.z,r+=t.normal.z*this.min.z),i<=-t.constant&&r>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),Yl.subVectors(this.max,Eo),$r.subVectors(t.a,Eo),ts.subVectors(t.b,Eo),es.subVectors(t.c,Eo),Ca.subVectors(ts,$r),wa.subVectors(es,ts),rr.subVectors($r,es);let i=[0,-Ca.z,Ca.y,0,-wa.z,wa.y,0,-rr.z,rr.y,Ca.z,0,-Ca.x,wa.z,0,-wa.x,rr.z,0,-rr.x,-Ca.y,Ca.x,0,-wa.y,wa.x,0,-rr.y,rr.x,0];return!qf(i,$r,ts,es,Yl)||(i=[1,0,0,0,1,0,0,0,1],!qf(i,$r,ts,es,Yl))?!1:(jl.crossVectors(Ca,wa),i=[jl.x,jl.y,jl.z],qf(i,$r,ts,es,Yl))}clampPoint(t,i){return i.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,pi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(pi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ji[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ji[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ji[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ji[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ji[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ji[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ji[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ji[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ji),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ji=[new et,new et,new et,new et,new et,new et,new et,new et],pi=new et,ql=new zo,$r=new et,ts=new et,es=new et,Ca=new et,wa=new et,rr=new et,Eo=new et,Yl=new et,jl=new et,sr=new et;function qf(o,t,i,r,l){for(let u=0,h=o.length-3;u<=h;u+=3){sr.fromArray(o,u);const d=l.x*Math.abs(sr.x)+l.y*Math.abs(sr.y)+l.z*Math.abs(sr.z),m=t.dot(sr),p=i.dot(sr),_=r.dot(sr);if(Math.max(-Math.max(m,p,_),Math.min(m,p,_))>d)return!1}return!0}const XS=new zo,To=new et,Yf=new et;class Bo{constructor(t=new et,i=-1){this.isSphere=!0,this.center=t,this.radius=i}set(t,i){return this.center.copy(t),this.radius=i,this}setFromPoints(t,i){const r=this.center;i!==void 0?r.copy(i):XS.setFromPoints(t).getCenter(r);let l=0;for(let u=0,h=t.length;u<h;u++)l=Math.max(l,r.distanceToSquared(t[u]));return this.radius=Math.sqrt(l),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const i=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=i*i}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,i){const r=this.center.distanceToSquared(t);return i.copy(t),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;To.subVectors(t,this.center);const i=To.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(To,l/r),this.radius+=l}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(To.copy(t.center).add(Yf)),this.expandByPoint(To.copy(t.center).sub(Yf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Zi=new et,jf=new et,Zl=new et,Da=new et,Zf=new et,Kl=new et,Kf=new et;class gd{constructor(t=new et,i=new et(0,0,-1)){this.origin=t,this.direction=i}set(t,i){return this.origin.copy(t),this.direction.copy(i),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,i){return i.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Zi)),this}closestPointToPoint(t,i){i.subVectors(t,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const i=Zi.subVectors(t,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(t):(Zi.copy(this.origin).addScaledVector(this.direction,i),Zi.distanceToSquared(t))}distanceSqToSegment(t,i,r,l){jf.copy(t).add(i).multiplyScalar(.5),Zl.copy(i).sub(t).normalize(),Da.copy(this.origin).sub(jf);const u=t.distanceTo(i)*.5,h=-this.direction.dot(Zl),d=Da.dot(this.direction),m=-Da.dot(Zl),p=Da.lengthSq(),_=Math.abs(1-h*h);let g,x,M,E;if(_>0)if(g=h*m-d,x=h*d-m,E=u*_,g>=0)if(x>=-E)if(x<=E){const A=1/_;g*=A,x*=A,M=g*(g+h*x+2*d)+x*(h*g+x+2*m)+p}else x=u,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;else x=-u,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;else x<=-E?(g=Math.max(0,-(-h*u+d)),x=g>0?-u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p):x<=E?(g=0,x=Math.min(Math.max(-u,-m),u),M=x*(x+2*m)+p):(g=Math.max(0,-(h*u+d)),x=g>0?u:Math.min(Math.max(-u,-m),u),M=-g*g+x*(x+2*m)+p);else x=h>0?-u:u,g=Math.max(0,-(h*x+d)),M=-g*g+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),l&&l.copy(jf).addScaledVector(Zl,x),M}intersectSphere(t,i){Zi.subVectors(t.center,this.origin);const r=Zi.dot(this.direction),l=Zi.dot(Zi)-r*r,u=t.radius*t.radius;if(l>u)return null;const h=Math.sqrt(u-l),d=r-h,m=r+h;return m<0?null:d<0?this.at(m,i):this.at(d,i)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const i=t.normal.dot(this.direction);if(i===0)return t.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(t.normal)+t.constant)/i;return r>=0?r:null}intersectPlane(t,i){const r=this.distanceToPlane(t);return r===null?null:this.at(r,i)}intersectsPlane(t){const i=t.distanceToPoint(this.origin);return i===0||t.normal.dot(this.direction)*i<0}intersectBox(t,i){let r,l,u,h,d,m;const p=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,x=this.origin;return p>=0?(r=(t.min.x-x.x)*p,l=(t.max.x-x.x)*p):(r=(t.max.x-x.x)*p,l=(t.min.x-x.x)*p),_>=0?(u=(t.min.y-x.y)*_,h=(t.max.y-x.y)*_):(u=(t.max.y-x.y)*_,h=(t.min.y-x.y)*_),r>h||u>l||((u>r||isNaN(r))&&(r=u),(h<l||isNaN(l))&&(l=h),g>=0?(d=(t.min.z-x.z)*g,m=(t.max.z-x.z)*g):(d=(t.max.z-x.z)*g,m=(t.min.z-x.z)*g),r>m||d>l)||((d>r||r!==r)&&(r=d),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(t){return this.intersectBox(t,Zi)!==null}intersectTriangle(t,i,r,l,u){Zf.subVectors(i,t),Kl.subVectors(r,t),Kf.crossVectors(Zf,Kl);let h=this.direction.dot(Kf),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Da.subVectors(this.origin,t);const m=d*this.direction.dot(Kl.crossVectors(Da,Kl));if(m<0)return null;const p=d*this.direction.dot(Zf.cross(Da));if(p<0||m+p>h)return null;const _=-d*Da.dot(Kf);return _<0?null:this.at(_/h,u)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ye{constructor(t,i,r,l,u,h,d,m,p,_,g,x,M,E,A,y){Ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,i,r,l,u,h,d,m,p,_,g,x,M,E,A,y)}set(t,i,r,l,u,h,d,m,p,_,g,x,M,E,A,y){const v=this.elements;return v[0]=t,v[4]=i,v[8]=r,v[12]=l,v[1]=u,v[5]=h,v[9]=d,v[13]=m,v[2]=p,v[6]=_,v[10]=g,v[14]=x,v[3]=M,v[7]=E,v[11]=A,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ye().fromArray(this.elements)}copy(t){const i=this.elements,r=t.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(t){const i=this.elements,r=t.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(t){const i=t.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(t,i,r){return t.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(t,i,r){return this.set(t.x,i.x,r.x,0,t.y,i.y,r.y,0,t.z,i.z,r.z,0,0,0,0,1),this}extractRotation(t){const i=this.elements,r=t.elements,l=1/ns.setFromMatrixColumn(t,0).length(),u=1/ns.setFromMatrixColumn(t,1).length(),h=1/ns.setFromMatrixColumn(t,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*u,i[5]=r[5]*u,i[6]=r[6]*u,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(t){const i=this.elements,r=t.x,l=t.y,u=t.z,h=Math.cos(r),d=Math.sin(r),m=Math.cos(l),p=Math.sin(l),_=Math.cos(u),g=Math.sin(u);if(t.order==="XYZ"){const x=h*_,M=h*g,E=d*_,A=d*g;i[0]=m*_,i[4]=-m*g,i[8]=p,i[1]=M+E*p,i[5]=x-A*p,i[9]=-d*m,i[2]=A-x*p,i[6]=E+M*p,i[10]=h*m}else if(t.order==="YXZ"){const x=m*_,M=m*g,E=p*_,A=p*g;i[0]=x+A*d,i[4]=E*d-M,i[8]=h*p,i[1]=h*g,i[5]=h*_,i[9]=-d,i[2]=M*d-E,i[6]=A+x*d,i[10]=h*m}else if(t.order==="ZXY"){const x=m*_,M=m*g,E=p*_,A=p*g;i[0]=x-A*d,i[4]=-h*g,i[8]=E+M*d,i[1]=M+E*d,i[5]=h*_,i[9]=A-x*d,i[2]=-h*p,i[6]=d,i[10]=h*m}else if(t.order==="ZYX"){const x=h*_,M=h*g,E=d*_,A=d*g;i[0]=m*_,i[4]=E*p-M,i[8]=x*p+A,i[1]=m*g,i[5]=A*p+x,i[9]=M*p-E,i[2]=-p,i[6]=d*m,i[10]=h*m}else if(t.order==="YZX"){const x=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*_,i[4]=A-x*g,i[8]=E*g+M,i[1]=g,i[5]=h*_,i[9]=-d*_,i[2]=-p*_,i[6]=M*g+E,i[10]=x-A*g}else if(t.order==="XZY"){const x=h*m,M=h*p,E=d*m,A=d*p;i[0]=m*_,i[4]=-g,i[8]=p*_,i[1]=x*g+A,i[5]=h*_,i[9]=M*g-E,i[2]=E*g-M,i[6]=d*_,i[10]=A*g+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(t){return this.compose(WS,t,qS)}lookAt(t,i,r){const l=this.elements;return qn.subVectors(t,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ua.crossVectors(r,qn),Ua.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ua.crossVectors(r,qn)),Ua.normalize(),Ql.crossVectors(qn,Ua),l[0]=Ua.x,l[4]=Ql.x,l[8]=qn.x,l[1]=Ua.y,l[5]=Ql.y,l[9]=qn.y,l[2]=Ua.z,l[6]=Ql.z,l[10]=qn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,i){const r=t.elements,l=i.elements,u=this.elements,h=r[0],d=r[4],m=r[8],p=r[12],_=r[1],g=r[5],x=r[9],M=r[13],E=r[2],A=r[6],y=r[10],v=r[14],P=r[3],O=r[7],D=r[11],H=r[15],z=l[0],F=l[4],G=l[8],R=l[12],b=l[1],B=l[5],st=l[9],nt=l[13],ft=l[2],lt=l[6],k=l[10],rt=l[14],Y=l[3],gt=l[7],U=l[11],$=l[15];return u[0]=h*z+d*b+m*ft+p*Y,u[4]=h*F+d*B+m*lt+p*gt,u[8]=h*G+d*st+m*k+p*U,u[12]=h*R+d*nt+m*rt+p*$,u[1]=_*z+g*b+x*ft+M*Y,u[5]=_*F+g*B+x*lt+M*gt,u[9]=_*G+g*st+x*k+M*U,u[13]=_*R+g*nt+x*rt+M*$,u[2]=E*z+A*b+y*ft+v*Y,u[6]=E*F+A*B+y*lt+v*gt,u[10]=E*G+A*st+y*k+v*U,u[14]=E*R+A*nt+y*rt+v*$,u[3]=P*z+O*b+D*ft+H*Y,u[7]=P*F+O*B+D*lt+H*gt,u[11]=P*G+O*st+D*k+H*U,u[15]=P*R+O*nt+D*rt+H*$,this}multiplyScalar(t){const i=this.elements;return i[0]*=t,i[4]*=t,i[8]*=t,i[12]*=t,i[1]*=t,i[5]*=t,i[9]*=t,i[13]*=t,i[2]*=t,i[6]*=t,i[10]*=t,i[14]*=t,i[3]*=t,i[7]*=t,i[11]*=t,i[15]*=t,this}determinant(){const t=this.elements,i=t[0],r=t[4],l=t[8],u=t[12],h=t[1],d=t[5],m=t[9],p=t[13],_=t[2],g=t[6],x=t[10],M=t[14],E=t[3],A=t[7],y=t[11],v=t[15];return E*(+u*m*g-l*p*g-u*d*x+r*p*x+l*d*M-r*m*M)+A*(+i*m*M-i*p*x+u*h*x-l*h*M+l*p*_-u*m*_)+y*(+i*p*g-i*d*M-u*h*g+r*h*M+u*d*_-r*p*_)+v*(-l*d*_-i*m*g+i*d*x+l*h*g-r*h*x+r*m*_)}transpose(){const t=this.elements;let i;return i=t[1],t[1]=t[4],t[4]=i,i=t[2],t[2]=t[8],t[8]=i,i=t[6],t[6]=t[9],t[9]=i,i=t[3],t[3]=t[12],t[12]=i,i=t[7],t[7]=t[13],t[13]=i,i=t[11],t[11]=t[14],t[14]=i,this}setPosition(t,i,r){const l=this.elements;return t.isVector3?(l[12]=t.x,l[13]=t.y,l[14]=t.z):(l[12]=t,l[13]=i,l[14]=r),this}invert(){const t=this.elements,i=t[0],r=t[1],l=t[2],u=t[3],h=t[4],d=t[5],m=t[6],p=t[7],_=t[8],g=t[9],x=t[10],M=t[11],E=t[12],A=t[13],y=t[14],v=t[15],P=g*y*p-A*x*p+A*m*M-d*y*M-g*m*v+d*x*v,O=E*x*p-_*y*p-E*m*M+h*y*M+_*m*v-h*x*v,D=_*A*p-E*g*p+E*d*M-h*A*M-_*d*v+h*g*v,H=E*g*m-_*A*m-E*d*x+h*A*x+_*d*y-h*g*y,z=i*P+r*O+l*D+u*H;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return t[0]=P*F,t[1]=(A*x*u-g*y*u-A*l*M+r*y*M+g*l*v-r*x*v)*F,t[2]=(d*y*u-A*m*u+A*l*p-r*y*p-d*l*v+r*m*v)*F,t[3]=(g*m*u-d*x*u-g*l*p+r*x*p+d*l*M-r*m*M)*F,t[4]=O*F,t[5]=(_*y*u-E*x*u+E*l*M-i*y*M-_*l*v+i*x*v)*F,t[6]=(E*m*u-h*y*u-E*l*p+i*y*p+h*l*v-i*m*v)*F,t[7]=(h*x*u-_*m*u+_*l*p-i*x*p-h*l*M+i*m*M)*F,t[8]=D*F,t[9]=(E*g*u-_*A*u-E*r*M+i*A*M+_*r*v-i*g*v)*F,t[10]=(h*A*u-E*d*u+E*r*p-i*A*p-h*r*v+i*d*v)*F,t[11]=(_*d*u-h*g*u-_*r*p+i*g*p+h*r*M-i*d*M)*F,t[12]=H*F,t[13]=(_*A*l-E*g*l+E*r*x-i*A*x-_*r*y+i*g*y)*F,t[14]=(E*d*l-h*A*l-E*r*m+i*A*m+h*r*y-i*d*y)*F,t[15]=(h*g*l-_*d*l+_*r*m-i*g*m-h*r*x+i*d*x)*F,this}scale(t){const i=this.elements,r=t.x,l=t.y,u=t.z;return i[0]*=r,i[4]*=l,i[8]*=u,i[1]*=r,i[5]*=l,i[9]*=u,i[2]*=r,i[6]*=l,i[10]*=u,i[3]*=r,i[7]*=l,i[11]*=u,this}getMaxScaleOnAxis(){const t=this.elements,i=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],r=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],l=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(t,i,r){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(t){const i=Math.cos(t),r=Math.sin(t);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(t){const i=Math.cos(t),r=Math.sin(t);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,i){const r=Math.cos(i),l=Math.sin(i),u=1-r,h=t.x,d=t.y,m=t.z,p=u*h,_=u*d;return this.set(p*h+r,p*d-l*m,p*m+l*d,0,p*d+l*m,_*d+r,_*m-l*h,0,p*m-l*d,_*m+l*h,u*m*m+r,0,0,0,0,1),this}makeScale(t,i,r){return this.set(t,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(t,i,r,l,u,h){return this.set(1,r,u,0,t,1,h,0,i,l,1,0,0,0,0,1),this}compose(t,i,r){const l=this.elements,u=i._x,h=i._y,d=i._z,m=i._w,p=u+u,_=h+h,g=d+d,x=u*p,M=u*_,E=u*g,A=h*_,y=h*g,v=d*g,P=m*p,O=m*_,D=m*g,H=r.x,z=r.y,F=r.z;return l[0]=(1-(A+v))*H,l[1]=(M+D)*H,l[2]=(E-O)*H,l[3]=0,l[4]=(M-D)*z,l[5]=(1-(x+v))*z,l[6]=(y+P)*z,l[7]=0,l[8]=(E+O)*F,l[9]=(y-P)*F,l[10]=(1-(x+A))*F,l[11]=0,l[12]=t.x,l[13]=t.y,l[14]=t.z,l[15]=1,this}decompose(t,i,r){const l=this.elements;let u=ns.set(l[0],l[1],l[2]).length();const h=ns.set(l[4],l[5],l[6]).length(),d=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(u=-u),t.x=l[12],t.y=l[13],t.z=l[14],mi.copy(this);const p=1/u,_=1/h,g=1/d;return mi.elements[0]*=p,mi.elements[1]*=p,mi.elements[2]*=p,mi.elements[4]*=_,mi.elements[5]*=_,mi.elements[6]*=_,mi.elements[8]*=g,mi.elements[9]*=g,mi.elements[10]*=g,i.setFromRotationMatrix(mi),r.x=u,r.y=h,r.z=d,this}makePerspective(t,i,r,l,u,h,d=ia){const m=this.elements,p=2*u/(i-t),_=2*u/(r-l),g=(i+t)/(i-t),x=(r+l)/(r-l);let M,E;if(d===ia)M=-(h+u)/(h-u),E=-2*h*u/(h-u);else if(d===Tc)M=-h/(h-u),E=-h*u/(h-u);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=p,m[4]=0,m[8]=g,m[12]=0,m[1]=0,m[5]=_,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=E,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(t,i,r,l,u,h,d=ia){const m=this.elements,p=1/(i-t),_=1/(r-l),g=1/(h-u),x=(i+t)*p,M=(r+l)*_;let E,A;if(d===ia)E=(h+u)*g,A=-2*g;else if(d===Tc)E=u*g,A=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*_,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=A,m[14]=-E,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(t){const i=this.elements,r=t.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(t,i=0){for(let r=0;r<16;r++)this.elements[r]=t[r+i];return this}toArray(t=[],i=0){const r=this.elements;return t[i]=r[0],t[i+1]=r[1],t[i+2]=r[2],t[i+3]=r[3],t[i+4]=r[4],t[i+5]=r[5],t[i+6]=r[6],t[i+7]=r[7],t[i+8]=r[8],t[i+9]=r[9],t[i+10]=r[10],t[i+11]=r[11],t[i+12]=r[12],t[i+13]=r[13],t[i+14]=r[14],t[i+15]=r[15],t}}const ns=new et,mi=new Ye,WS=new et(0,0,0),qS=new et(1,1,1),Ua=new et,Ql=new et,qn=new et,rg=new Ye,sg=new Po;class Di{constructor(t=0,i=0,r=0,l=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,i,r,l=this._order){return this._x=t,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,i=this._order,r=!0){const l=t.elements,u=l[0],h=l[4],d=l[8],m=l[1],p=l[5],_=l[9],g=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(Se(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-_,M),this._z=Math.atan2(-h,u)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Se(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-g,u),this._z=0);break;case"ZXY":this._x=Math.asin(Se(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-g,M),this._z=Math.atan2(-h,p)):(this._y=0,this._z=Math.atan2(m,u));break;case"ZYX":this._y=Math.asin(-Se(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,u)):(this._x=0,this._z=Math.atan2(-h,p));break;case"YZX":this._z=Math.asin(Se(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-_,p),this._y=Math.atan2(-g,u)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Se(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(d,u)):(this._x=Math.atan2(-_,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(t,i,r){return rg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(rg,i,r)}setFromVector3(t,i=this._order){return this.set(t.x,t.y,t.z,i)}reorder(t){return sg.setFromEuler(this),this.setFromQuaternion(sg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],i=0){return t[i]=this._x,t[i+1]=this._y,t[i+2]=this._z,t[i+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class vv{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let YS=0;const og=new et,is=new Po,Ki=new Ye,Jl=new et,bo=new et,jS=new et,ZS=new Po,lg=new et(1,0,0),cg=new et(0,1,0),ug=new et(0,0,1),fg={type:"added"},KS={type:"removed"},as={type:"childadded",child:null},Qf={type:"childremoved",child:null};class Nn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=Oo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nn.DEFAULT_UP.clone();const t=new et,i=new Di,r=new Po,l=new et(1,1,1);function u(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(u),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Ye},normalMatrix:{value:new le}}),this.matrix=new Ye,this.matrixWorld=new Ye,this.matrixAutoUpdate=Nn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,i){this.quaternion.setFromAxisAngle(t,i)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(t,i){return is.setFromAxisAngle(t,i),this.quaternion.premultiply(is),this}rotateX(t){return this.rotateOnAxis(lg,t)}rotateY(t){return this.rotateOnAxis(cg,t)}rotateZ(t){return this.rotateOnAxis(ug,t)}translateOnAxis(t,i){return og.copy(t).applyQuaternion(this.quaternion),this.position.add(og.multiplyScalar(i)),this}translateX(t){return this.translateOnAxis(lg,t)}translateY(t){return this.translateOnAxis(cg,t)}translateZ(t){return this.translateOnAxis(ug,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ki.copy(this.matrixWorld).invert())}lookAt(t,i,r){t.isVector3?Jl.copy(t):Jl.set(t,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ki.lookAt(bo,Jl,this.up):Ki.lookAt(Jl,bo,this.up),this.quaternion.setFromRotationMatrix(Ki),l&&(Ki.extractRotation(l.matrixWorld),is.setFromRotationMatrix(Ki),this.quaternion.premultiply(is.invert()))}add(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(fg),as.child=t,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(t);return i!==-1&&(t.parent=null,this.children.splice(i,1),t.dispatchEvent(KS),Qf.child=t,this.dispatchEvent(Qf),Qf.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ki.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ki.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ki),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(fg),as.child=t,this.dispatchEvent(as),as.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,i){if(this[t]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(t,i);if(h!==void 0)return h}}getObjectsByProperty(t,i,r=[]){this[t]===i&&r.push(this);const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].getObjectsByProperty(t,i,r);return r}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,jS),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,ZS,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return t.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(t){t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(t)}traverseAncestors(t){const i=this.parent;i!==null&&(t(i),i.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(t)}updateWorldMatrix(t,i){const r=this.parent;if(t===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let u=0,h=l.length;u<h;u++)l[u].updateWorldMatrix(!1,!0)}}toJSON(t){const i=t===void 0||typeof t=="string",r={};i&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function u(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(t)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=u(t.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,_=m.length;p<_;p++){const g=m[p];u(t.shapes,g)}else u(t.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(u(t.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(u(t.materials,this.material[m]));l.material=d}else l.material=u(t.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(t).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];l.animations.push(u(t.animations,m))}}if(i){const d=h(t.geometries),m=h(t.materials),p=h(t.textures),_=h(t.images),g=h(t.shapes),x=h(t.skeletons),M=h(t.animations),E=h(t.nodes);d.length>0&&(r.geometries=d),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),_.length>0&&(r.images=_),g.length>0&&(r.shapes=g),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const m=[];for(const p in d){const _=d[p];delete _.metadata,m.push(_)}return m}}clone(t){return new this.constructor().copy(this,t)}copy(t,i=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),i===!0)for(let r=0;r<t.children.length;r++){const l=t.children[r];this.add(l.clone())}return this}}Nn.DEFAULT_UP=new et(0,1,0);Nn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _i=new et,Qi=new et,Jf=new et,Ji=new et,rs=new et,ss=new et,hg=new et,$f=new et,th=new et,eh=new et,nh=new Ze,ih=new Ze,ah=new Ze;class gi{constructor(t=new et,i=new et,r=new et){this.a=t,this.b=i,this.c=r}static getNormal(t,i,r,l){l.subVectors(r,i),_i.subVectors(t,i),l.cross(_i);const u=l.lengthSq();return u>0?l.multiplyScalar(1/Math.sqrt(u)):l.set(0,0,0)}static getBarycoord(t,i,r,l,u){_i.subVectors(l,i),Qi.subVectors(r,i),Jf.subVectors(t,i);const h=_i.dot(_i),d=_i.dot(Qi),m=_i.dot(Jf),p=Qi.dot(Qi),_=Qi.dot(Jf),g=h*p-d*d;if(g===0)return u.set(0,0,0),null;const x=1/g,M=(p*m-d*_)*x,E=(h*_-d*m)*x;return u.set(1-M-E,E,M)}static containsPoint(t,i,r,l){return this.getBarycoord(t,i,r,l,Ji)===null?!1:Ji.x>=0&&Ji.y>=0&&Ji.x+Ji.y<=1}static getInterpolation(t,i,r,l,u,h,d,m){return this.getBarycoord(t,i,r,l,Ji)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(u,Ji.x),m.addScaledVector(h,Ji.y),m.addScaledVector(d,Ji.z),m)}static getInterpolatedAttribute(t,i,r,l,u,h){return nh.setScalar(0),ih.setScalar(0),ah.setScalar(0),nh.fromBufferAttribute(t,i),ih.fromBufferAttribute(t,r),ah.fromBufferAttribute(t,l),h.setScalar(0),h.addScaledVector(nh,u.x),h.addScaledVector(ih,u.y),h.addScaledVector(ah,u.z),h}static isFrontFacing(t,i,r,l){return _i.subVectors(r,i),Qi.subVectors(t,i),_i.cross(Qi).dot(l)<0}set(t,i,r){return this.a.copy(t),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(t,i,r,l){return this.a.copy(t[i]),this.b.copy(t[r]),this.c.copy(t[l]),this}setFromAttributeAndIndices(t,i,r,l){return this.a.fromBufferAttribute(t,i),this.b.fromBufferAttribute(t,r),this.c.fromBufferAttribute(t,l),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return _i.subVectors(this.c,this.b),Qi.subVectors(this.a,this.b),_i.cross(Qi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,i){return gi.getBarycoord(t,this.a,this.b,this.c,i)}getInterpolation(t,i,r,l,u){return gi.getInterpolation(t,this.a,this.b,this.c,i,r,l,u)}containsPoint(t){return gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,i){const r=this.a,l=this.b,u=this.c;let h,d;rs.subVectors(l,r),ss.subVectors(u,r),$f.subVectors(t,r);const m=rs.dot($f),p=ss.dot($f);if(m<=0&&p<=0)return i.copy(r);th.subVectors(t,l);const _=rs.dot(th),g=ss.dot(th);if(_>=0&&g<=_)return i.copy(l);const x=m*g-_*p;if(x<=0&&m>=0&&_<=0)return h=m/(m-_),i.copy(r).addScaledVector(rs,h);eh.subVectors(t,u);const M=rs.dot(eh),E=ss.dot(eh);if(E>=0&&M<=E)return i.copy(u);const A=M*p-m*E;if(A<=0&&p>=0&&E<=0)return d=p/(p-E),i.copy(r).addScaledVector(ss,d);const y=_*E-M*g;if(y<=0&&g-_>=0&&M-E>=0)return hg.subVectors(u,l),d=(g-_)/(g-_+(M-E)),i.copy(l).addScaledVector(hg,d);const v=1/(y+A+x);return h=A*v,d=x*v,i.copy(r).addScaledVector(rs,h).addScaledVector(ss,d)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const xv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},La={h:0,s:0,l:0},$l={h:0,s:0,l:0};function rh(o,t,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(t-o)*6*i:i<1/2?t:i<2/3?o+(t-o)*6*(2/3-i):o}class fe{constructor(t,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,i,r)}set(t,i,r){if(i===void 0&&r===void 0){const l=t;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(t,i,r);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,i=jn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Re.toWorkingColorSpace(this,i),this}setRGB(t,i,r,l=Re.workingColorSpace){return this.r=t,this.g=i,this.b=r,Re.toWorkingColorSpace(this,l),this}setHSL(t,i,r,l=Re.workingColorSpace){if(t=NS(t,1),i=Se(i,0,1),r=Se(r,0,1),i===0)this.r=this.g=this.b=r;else{const u=r<=.5?r*(1+i):r+i-r*i,h=2*r-u;this.r=rh(h,u,t+1/3),this.g=rh(h,u,t),this.b=rh(h,u,t-1/3)}return Re.toWorkingColorSpace(this,l),this}setStyle(t,i=jn){function r(u){u!==void 0&&parseFloat(u)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(t)){let u;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(u=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(255,parseInt(u[1],10))/255,Math.min(255,parseInt(u[2],10))/255,Math.min(255,parseInt(u[3],10))/255,i);if(u=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setRGB(Math.min(100,parseInt(u[1],10))/100,Math.min(100,parseInt(u[2],10))/100,Math.min(100,parseInt(u[3],10))/100,i);break;case"hsl":case"hsla":if(u=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(u[4]),this.setHSL(parseFloat(u[1])/360,parseFloat(u[2])/100,parseFloat(u[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(t)){const u=l[1],h=u.length;if(h===3)return this.setRGB(parseInt(u.charAt(0),16)/15,parseInt(u.charAt(1),16)/15,parseInt(u.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(u,16),i);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,i);return this}setColorName(t,i=jn){const r=xv[t.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=aa(t.r),this.g=aa(t.g),this.b=aa(t.b),this}copyLinearToSRGB(t){return this.r=ms(t.r),this.g=ms(t.g),this.b=ms(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=jn){return Re.fromWorkingColorSpace(Tn.copy(this),t),Math.round(Se(Tn.r*255,0,255))*65536+Math.round(Se(Tn.g*255,0,255))*256+Math.round(Se(Tn.b*255,0,255))}getHexString(t=jn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,i=Re.workingColorSpace){Re.fromWorkingColorSpace(Tn.copy(this),i);const r=Tn.r,l=Tn.g,u=Tn.b,h=Math.max(r,l,u),d=Math.min(r,l,u);let m,p;const _=(d+h)/2;if(d===h)m=0,p=0;else{const g=h-d;switch(p=_<=.5?g/(h+d):g/(2-h-d),h){case r:m=(l-u)/g+(l<u?6:0);break;case l:m=(u-r)/g+2;break;case u:m=(r-l)/g+4;break}m/=6}return t.h=m,t.s=p,t.l=_,t}getRGB(t,i=Re.workingColorSpace){return Re.fromWorkingColorSpace(Tn.copy(this),i),t.r=Tn.r,t.g=Tn.g,t.b=Tn.b,t}getStyle(t=jn){Re.fromWorkingColorSpace(Tn.copy(this),t);const i=Tn.r,r=Tn.g,l=Tn.b;return t!==jn?`color(${t} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(t,i,r){return this.getHSL(La),this.setHSL(La.h+t,La.s+i,La.l+r)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,i){return this.r=t.r+i.r,this.g=t.g+i.g,this.b=t.b+i.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,i){return this.r+=(t.r-this.r)*i,this.g+=(t.g-this.g)*i,this.b+=(t.b-this.b)*i,this}lerpColors(t,i,r){return this.r=t.r+(i.r-t.r)*r,this.g=t.g+(i.g-t.g)*r,this.b=t.b+(i.b-t.b)*r,this}lerpHSL(t,i){this.getHSL(La),t.getHSL($l);const r=Vf(La.h,$l.h,i),l=Vf(La.s,$l.s,i),u=Vf(La.l,$l.l,i);return this.setHSL(r,l,u),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const i=this.r,r=this.g,l=this.b,u=t.elements;return this.r=u[0]*i+u[3]*r+u[6]*l,this.g=u[1]*i+u[4]*r+u[7]*l,this.b=u[2]*i+u[5]*r+u[8]*l,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,i=0){return this.r=t[i],this.g=t[i+1],this.b=t[i+2],this}toArray(t=[],i=0){return t[i]=this.r,t[i+1]=this.g,t[i+2]=this.b,t}fromBufferAttribute(t,i){return this.r=t.getX(i),this.g=t.getY(i),this.b=t.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new fe;fe.NAMES=xv;let QS=0;class sa extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=Oo(),this.name="",this.type="Material",this.blending=ds,this.side=Ba,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xh,this.blendDst=Sh,this.blendEquation=dr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new fe(0,0,0),this.blendAlpha=0,this.depthFunc=_s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const i in t){const r=t[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(t){const i=t===void 0||typeof t=="string";i&&(t={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(t).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(t).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(t).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(t).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(t).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ds&&(r.blending=this.blending),this.side!==Ba&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==xh&&(r.blendSrc=this.blendSrc),this.blendDst!==Sh&&(r.blendDst=this.blendDst),this.blendEquation!==dr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_s&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==J_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(u){const h=[];for(const d in u){const m=u[d];delete m.metadata,h.push(m)}return h}if(i){const u=l(t.textures),h=l(t.images);u.length>0&&(r.textures=u),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const i=t.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let u=0;u!==l;++u)r[u]=i[u].clone()}return this.clippingPlanes=r,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Sv extends sa{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new fe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const $e=new et,tc=new Pe;let JS=0;class wi{constructor(t,i,r=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:JS++}),this.name="",this.array=t,this.itemSize=i,this.count=t!==void 0?t.length/i:0,this.normalized=r,this.usage=$_,this.updateRanges=[],this.gpuType=na,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,i){this.updateRanges.push({start:t,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,i,r){t*=this.itemSize,r*=i.itemSize;for(let l=0,u=this.itemSize;l<u;l++)this.array[t+l]=i.array[r+l];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tc.fromBufferAttribute(this,i),tc.applyMatrix3(t),this.setXY(i,tc.x,tc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix3(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyMatrix4(t){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyMatrix4(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}applyNormalMatrix(t){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.applyNormalMatrix(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}transformDirection(t){for(let i=0,r=this.count;i<r;i++)$e.fromBufferAttribute(this,i),$e.transformDirection(t),this.setXYZ(i,$e.x,$e.y,$e.z);return this}set(t,i=0){return this.array.set(t,i),this}getComponent(t,i){let r=this.array[t*this.itemSize+i];return this.normalized&&(r=Mo(r,this.array)),r}setComponent(t,i,r){return this.normalized&&(r=Fn(r,this.array)),this.array[t*this.itemSize+i]=r,this}getX(t){let i=this.array[t*this.itemSize];return this.normalized&&(i=Mo(i,this.array)),i}setX(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize]=i,this}getY(t){let i=this.array[t*this.itemSize+1];return this.normalized&&(i=Mo(i,this.array)),i}setY(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+1]=i,this}getZ(t){let i=this.array[t*this.itemSize+2];return this.normalized&&(i=Mo(i,this.array)),i}setZ(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+2]=i,this}getW(t){let i=this.array[t*this.itemSize+3];return this.normalized&&(i=Mo(i,this.array)),i}setW(t,i){return this.normalized&&(i=Fn(i,this.array)),this.array[t*this.itemSize+3]=i,this}setXY(t,i,r){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array)),this.array[t+0]=i,this.array[t+1]=r,this}setXYZ(t,i,r,l){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this}setXYZW(t,i,r,l,u){return t*=this.itemSize,this.normalized&&(i=Fn(i,this.array),r=Fn(r,this.array),l=Fn(l,this.array),u=Fn(u,this.array)),this.array[t+0]=i,this.array[t+1]=r,this.array[t+2]=l,this.array[t+3]=u,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==$_&&(t.usage=this.usage),t}}class yv extends wi{constructor(t,i,r){super(new Uint16Array(t),i,r)}}class Mv extends wi{constructor(t,i,r){super(new Uint32Array(t),i,r)}}class xn extends wi{constructor(t,i,r){super(new Float32Array(t),i,r)}}let $S=0;const ri=new Ye,sh=new Nn,os=new et,Yn=new zo,Ao=new zo,dn=new et;class li extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$S++}),this.uuid=Oo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(mv(t)?Mv:yv)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,i){return this.attributes[t]=i,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,i,r=0){this.groups.push({start:t,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(t,i){this.drawRange.start=t,this.drawRange.count=i}applyMatrix4(t){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(t),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const u=new le().getNormalMatrix(t);r.applyNormalMatrix(u),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(t),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ri.makeRotationFromQuaternion(t),this.applyMatrix4(ri),this}rotateX(t){return ri.makeRotationX(t),this.applyMatrix4(ri),this}rotateY(t){return ri.makeRotationY(t),this.applyMatrix4(ri),this}rotateZ(t){return ri.makeRotationZ(t),this.applyMatrix4(ri),this}translate(t,i,r){return ri.makeTranslation(t,i,r),this.applyMatrix4(ri),this}scale(t,i,r){return ri.makeScale(t,i,r),this.applyMatrix4(ri),this}lookAt(t){return sh.lookAt(t),sh.updateMatrix(),this.applyMatrix4(sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(t){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,u=t.length;l<u;l++){const h=t[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xn(r,3))}else{const r=Math.min(t.length,i.count);for(let l=0;l<r;l++){const u=t[l];i.setXYZ(l,u.x,u.y,u.z||0)}t.length>i.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new zo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new et(-1/0,-1/0,-1/0),new et(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),i)for(let r=0,l=i.length;r<l;r++){const u=i[r];Yn.setFromBufferAttribute(u),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bo);const t=this.attributes.position,i=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new et,1/0);return}if(t){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(t),i)for(let u=0,h=i.length;u<h;u++){const d=i[u];Ao.setFromBufferAttribute(d),this.morphTargetsRelative?(dn.addVectors(Yn.min,Ao.min),Yn.expandByPoint(dn),dn.addVectors(Yn.max,Ao.max),Yn.expandByPoint(dn)):(Yn.expandByPoint(Ao.min),Yn.expandByPoint(Ao.max))}Yn.getCenter(r);let l=0;for(let u=0,h=t.count;u<h;u++)dn.fromBufferAttribute(t,u),l=Math.max(l,r.distanceToSquared(dn));if(i)for(let u=0,h=i.length;u<h;u++){const d=i[u],m=this.morphTargetsRelative;for(let p=0,_=d.count;p<_;p++)dn.fromBufferAttribute(d,p),m&&(os.fromBufferAttribute(t,p),dn.add(os)),l=Math.max(l,r.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,i=this.attributes;if(t===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,u=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],m=[];for(let G=0;G<r.count;G++)d[G]=new et,m[G]=new et;const p=new et,_=new et,g=new et,x=new Pe,M=new Pe,E=new Pe,A=new et,y=new et;function v(G,R,b){p.fromBufferAttribute(r,G),_.fromBufferAttribute(r,R),g.fromBufferAttribute(r,b),x.fromBufferAttribute(u,G),M.fromBufferAttribute(u,R),E.fromBufferAttribute(u,b),_.sub(p),g.sub(p),M.sub(x),E.sub(x);const B=1/(M.x*E.y-E.x*M.y);isFinite(B)&&(A.copy(_).multiplyScalar(E.y).addScaledVector(g,-M.y).multiplyScalar(B),y.copy(g).multiplyScalar(M.x).addScaledVector(_,-E.x).multiplyScalar(B),d[G].add(A),d[R].add(A),d[b].add(A),m[G].add(y),m[R].add(y),m[b].add(y))}let P=this.groups;P.length===0&&(P=[{start:0,count:t.count}]);for(let G=0,R=P.length;G<R;++G){const b=P[G],B=b.start,st=b.count;for(let nt=B,ft=B+st;nt<ft;nt+=3)v(t.getX(nt+0),t.getX(nt+1),t.getX(nt+2))}const O=new et,D=new et,H=new et,z=new et;function F(G){H.fromBufferAttribute(l,G),z.copy(H);const R=d[G];O.copy(R),O.sub(H.multiplyScalar(H.dot(R))).normalize(),D.crossVectors(z,R);const B=D.dot(m[G])<0?-1:1;h.setXYZW(G,O.x,O.y,O.z,B)}for(let G=0,R=P.length;G<R;++G){const b=P[G],B=b.start,st=b.count;for(let nt=B,ft=B+st;nt<ft;nt+=3)F(t.getX(nt+0)),F(t.getX(nt+1)),F(t.getX(nt+2))}}computeVertexNormals(){const t=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new et,u=new et,h=new et,d=new et,m=new et,p=new et,_=new et,g=new et;if(t)for(let x=0,M=t.count;x<M;x+=3){const E=t.getX(x+0),A=t.getX(x+1),y=t.getX(x+2);l.fromBufferAttribute(i,E),u.fromBufferAttribute(i,A),h.fromBufferAttribute(i,y),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),d.fromBufferAttribute(r,E),m.fromBufferAttribute(r,A),p.fromBufferAttribute(r,y),d.add(_),m.add(_),p.add(_),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(A,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),u.fromBufferAttribute(i,x+1),h.fromBufferAttribute(i,x+2),_.subVectors(h,u),g.subVectors(l,u),_.cross(g),r.setXYZ(x+0,_.x,_.y,_.z),r.setXYZ(x+1,_.x,_.y,_.z),r.setXYZ(x+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let i=0,r=t.count;i<r;i++)dn.fromBufferAttribute(t,i),dn.normalize(),t.setXYZ(i,dn.x,dn.y,dn.z)}toNonIndexed(){function t(d,m){const p=d.array,_=d.itemSize,g=d.normalized,x=new p.constructor(m.length*_);let M=0,E=0;for(let A=0,y=m.length;A<y;A++){d.isInterleavedBufferAttribute?M=m[A]*d.data.stride+d.offset:M=m[A]*_;for(let v=0;v<_;v++)x[E++]=p[M++]}return new wi(x,_,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new li,r=this.index.array,l=this.attributes;for(const d in l){const m=l[d],p=t(m,r);i.setAttribute(d,p)}const u=this.morphAttributes;for(const d in u){const m=[],p=u[d];for(let _=0,g=p.length;_<g;_++){const x=p[_],M=t(x,r);m.push(M)}i.morphAttributes[d]=m}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,m=h.length;d<m;d++){const p=h[d];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(t[p]=m[p]);return t}t.data={attributes:{}};const i=this.index;i!==null&&(t.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];t.data.attributes[m]=p.toJSON(t.data)}const l={};let u=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],_=[];for(let g=0,x=p.length;g<x;g++){const M=p[g];_.push(M.toJSON(t.data))}_.length>0&&(l[m]=_,u=!0)}u&&(t.data.morphAttributes=l,t.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(t.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(t.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=t.name;const r=t.index;r!==null&&this.setIndex(r.clone(i));const l=t.attributes;for(const p in l){const _=l[p];this.setAttribute(p,_.clone(i))}const u=t.morphAttributes;for(const p in u){const _=[],g=u[p];for(let x=0,M=g.length;x<M;x++)_.push(g[x].clone(i));this.morphAttributes[p]=_}this.morphTargetsRelative=t.morphTargetsRelative;const h=t.groups;for(let p=0,_=h.length;p<_;p++){const g=h[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=t.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=t.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dg=new Ye,or=new gd,ec=new Bo,pg=new et,nc=new et,ic=new et,ac=new et,oh=new et,rc=new et,mg=new et,sc=new et;class xi extends Nn{constructor(t=new li,i=new Sv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}getVertexPosition(t,i){const r=this.geometry,l=r.attributes.position,u=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,t);const d=this.morphTargetInfluences;if(u&&d){rc.set(0,0,0);for(let m=0,p=u.length;m<p;m++){const _=d[m],g=u[m];_!==0&&(oh.fromBufferAttribute(g,t),h?rc.addScaledVector(oh,_):rc.addScaledVector(oh.sub(i),_))}i.add(rc)}return i}raycast(t,i){const r=this.geometry,l=this.material,u=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ec.copy(r.boundingSphere),ec.applyMatrix4(u),or.copy(t.ray).recast(t.near),!(ec.containsPoint(or.origin)===!1&&(or.intersectSphere(ec,pg)===null||or.origin.distanceToSquared(pg)>(t.far-t.near)**2))&&(dg.copy(u).invert(),or.copy(t.ray).applyMatrix4(dg),!(r.boundingBox!==null&&or.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(t,i,or)))}_computeIntersections(t,i,r){let l;const u=this.geometry,h=this.material,d=u.index,m=u.attributes.position,p=u.attributes.uv,_=u.attributes.uv1,g=u.attributes.normal,x=u.groups,M=u.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const y=x[E],v=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=O;D<H;D+=3){const z=d.getX(D),F=d.getX(D+1),G=d.getX(D+2);l=oc(this,v,t,r,p,_,g,z,F,G),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(d.count,M.start+M.count);for(let y=E,v=A;y<v;y+=3){const P=d.getX(y),O=d.getX(y+1),D=d.getX(y+2);l=oc(this,h,t,r,p,_,g,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(h))for(let E=0,A=x.length;E<A;E++){const y=x[E],v=h[y.materialIndex],P=Math.max(y.start,M.start),O=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let D=P,H=O;D<H;D+=3){const z=D,F=D+1,G=D+2;l=oc(this,v,t,r,p,_,g,z,F,G),l&&(l.faceIndex=Math.floor(D/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const E=Math.max(0,M.start),A=Math.min(m.count,M.start+M.count);for(let y=E,v=A;y<v;y+=3){const P=y,O=y+1,D=y+2;l=oc(this,h,t,r,p,_,g,P,O,D),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function ty(o,t,i,r,l,u,h,d){let m;if(t.side===In?m=r.intersectTriangle(h,u,l,!0,d):m=r.intersectTriangle(l,u,h,t.side===Ba,d),m===null)return null;sc.copy(d),sc.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(sc);return p<i.near||p>i.far?null:{distance:p,point:sc.clone(),object:o}}function oc(o,t,i,r,l,u,h,d,m,p){o.getVertexPosition(d,nc),o.getVertexPosition(m,ic),o.getVertexPosition(p,ac);const _=ty(o,t,i,r,nc,ic,ac,mg);if(_){const g=new et;gi.getBarycoord(mg,nc,ic,ac,g),l&&(_.uv=gi.getInterpolatedAttribute(l,d,m,p,g,new Pe)),u&&(_.uv1=gi.getInterpolatedAttribute(u,d,m,p,g,new Pe)),h&&(_.normal=gi.getInterpolatedAttribute(h,d,m,p,g,new et),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const x={a:d,b:m,c:p,normal:new et,materialIndex:0};gi.getNormal(nc,ic,ac,x.normal),_.face=x,_.barycoord=g}return _}class Fo extends li{constructor(t=1,i=1,r=1,l=1,u=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:i,depth:r,widthSegments:l,heightSegments:u,depthSegments:h};const d=this;l=Math.floor(l),u=Math.floor(u),h=Math.floor(h);const m=[],p=[],_=[],g=[];let x=0,M=0;E("z","y","x",-1,-1,r,i,t,h,u,0),E("z","y","x",1,-1,r,i,-t,h,u,1),E("x","z","y",1,1,t,r,i,l,h,2),E("x","z","y",1,-1,t,r,-i,l,h,3),E("x","y","z",1,-1,t,i,r,l,u,4),E("x","y","z",-1,-1,t,i,-r,l,u,5),this.setIndex(m),this.setAttribute("position",new xn(p,3)),this.setAttribute("normal",new xn(_,3)),this.setAttribute("uv",new xn(g,2));function E(A,y,v,P,O,D,H,z,F,G,R){const b=D/F,B=H/G,st=D/2,nt=H/2,ft=z/2,lt=F+1,k=G+1;let rt=0,Y=0;const gt=new et;for(let U=0;U<k;U++){const $=U*B-nt;for(let yt=0;yt<lt;yt++){const At=yt*b-st;gt[A]=At*P,gt[y]=$*O,gt[v]=ft,p.push(gt.x,gt.y,gt.z),gt[A]=0,gt[y]=0,gt[v]=z>0?1:-1,_.push(gt.x,gt.y,gt.z),g.push(yt/F),g.push(1-U/G),rt+=1}}for(let U=0;U<G;U++)for(let $=0;$<F;$++){const yt=x+$+lt*U,At=x+$+lt*(U+1),j=x+($+1)+lt*(U+1),dt=x+($+1)+lt*U;m.push(yt,At,dt),m.push(At,j,dt),Y+=6}d.addGroup(M,Y,R),M+=Y,x+=rt}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Fo(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(o){const t={};for(const i in o){t[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[i][r]=null):t[i][r]=l.clone():Array.isArray(l)?t[i][r]=l.slice():t[i][r]=l}}return t}function Un(o){const t={};for(let i=0;i<o.length;i++){const r=Ms(o[i]);for(const l in r)t[l]=r[l]}return t}function ey(o){const t=[];for(let i=0;i<o.length;i++)t.push(o[i].clone());return t}function Ev(o){const t=o.getRenderTarget();return t===null?o.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Re.workingColorSpace}const ny={clone:Ms,merge:Un};var iy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ay=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Fa extends sa{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iy,this.fragmentShader=ay,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=ey(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const i=super.toJSON(t);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(t).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Tv extends Nn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ye,this.projectionMatrix=new Ye,this.projectionMatrixInverse=new Ye,this.coordinateSystem=ia}copy(t,i){return super.copy(t,i),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,i){super.updateWorldMatrix(t,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Na=new et,_g=new Pe,gg=new Pe;class oi extends Tv{constructor(t=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const i=.5*this.getFilmHeight()/t;this.fov=ad*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Gf*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ad*2*Math.atan(Math.tan(Gf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,i,r){Na.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Na.x,Na.y).multiplyScalar(-t/Na.z),Na.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Na.x,Na.y).multiplyScalar(-t/Na.z)}getViewSize(t,i){return this.getViewBounds(t,_g,gg),i.subVectors(gg,_g)}setViewOffset(t,i,r,l,u,h){this.aspect=t/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let i=t*Math.tan(Gf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,u=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const m=h.fullWidth,p=h.fullHeight;u+=h.offsetX*l/m,i-=h.offsetY*r/p,l*=h.width/m,r*=h.height/p}const d=this.filmOffset;d!==0&&(u+=t*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(u,u+l,i,i-r,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const ls=-90,cs=1;class ry extends Nn{constructor(t,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new oi(ls,cs,t,i);l.layers=this.layers,this.add(l);const u=new oi(ls,cs,t,i);u.layers=this.layers,this.add(u);const h=new oi(ls,cs,t,i);h.layers=this.layers,this.add(h);const d=new oi(ls,cs,t,i);d.layers=this.layers,this.add(d);const m=new oi(ls,cs,t,i);m.layers=this.layers,this.add(m);const p=new oi(ls,cs,t,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const t=this.coordinateSystem,i=this.children.concat(),[r,l,u,h,d,m]=i;for(const p of i)this.remove(p);if(t===ia)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),u.up.set(0,0,-1),u.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(t===Tc)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),u.up.set(0,0,1),u.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const p of i)this.add(p),p.updateMatrixWorld()}update(t,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[u,h,d,m,p,_]=this.children,g=t.getRenderTarget(),x=t.getActiveCubeFace(),M=t.getActiveMipmapLevel(),E=t.xr.enabled;t.xr.enabled=!1;const A=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,t.setRenderTarget(r,0,l),t.render(i,u),t.setRenderTarget(r,1,l),t.render(i,h),t.setRenderTarget(r,2,l),t.render(i,d),t.setRenderTarget(r,3,l),t.render(i,m),t.setRenderTarget(r,4,l),t.render(i,p),r.texture.generateMipmaps=A,t.setRenderTarget(r,5,l),t.render(i,_),t.setRenderTarget(g,x,M),t.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class bv extends Ln{constructor(t,i,r,l,u,h,d,m,p,_){t=t!==void 0?t:[],i=i!==void 0?i:gs,super(t,i,r,l,u,h,d,m,p,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sy extends vr{constructor(t=1,i={}){super(t,t,i),this.isWebGLCubeRenderTarget=!0;const r={width:t,height:t,depth:1},l=[r,r,r,r,r,r];this.texture=new bv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ci}fromEquirectangularTexture(t,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Fo(5,5,5),u=new Fa({name:"CubemapFromEquirect",uniforms:Ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:In,blending:Pa});u.uniforms.tEquirect.value=i;const h=new xi(l,u),d=i.minFilter;return i.minFilter===_r&&(i.minFilter=Ci),new ry(1,10,this).update(t,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(t,i,r,l){const u=t.getRenderTarget();for(let h=0;h<6;h++)t.setRenderTarget(this,h),t.clear(i,r,l);t.setRenderTarget(u)}}class Co extends Nn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const oy={type:"move"};class lh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Co,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Co,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new et,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new et),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Co,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new et,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new et),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const i=this._hand;if(i)for(const r of t.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,i,r){let l=null,u=null,h=null;const d=this._targetRay,m=this._grip,p=this._hand;if(t&&i.session.visibilityState!=="visible-blurred"){if(p&&t.hand){h=!0;for(const A of t.hand.values()){const y=i.getJointPose(A,r),v=this._getHandJoint(p,A);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const _=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],x=_.position.distanceTo(g.position),M=.02,E=.005;p.inputState.pinching&&x>M+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!p.inputState.pinching&&x<=M-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else m!==null&&t.gripSpace&&(u=i.getPose(t.gripSpace,r),u!==null&&(m.matrix.fromArray(u.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,u.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(u.linearVelocity)):m.hasLinearVelocity=!1,u.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(u.angularVelocity)):m.hasAngularVelocity=!1));d!==null&&(l=i.getPose(t.targetRaySpace,r),l===null&&u!==null&&(l=u),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(oy)))}return d!==null&&(d.visible=l!==null),m!==null&&(m.visible=u!==null),p!==null&&(p.visible=h!==null),this}_getHandJoint(t,i){if(t.joints[i.jointName]===void 0){const r=new Co;r.matrixAutoUpdate=!1,r.visible=!1,t.joints[i.jointName]=r,t.add(r)}return t.joints[i.jointName]}}class ly extends Nn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,i){return super.copy(t,i),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const i=super.toJSON(t);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}const ch=new et,cy=new et,uy=new le;class fr{constructor(t=new et(1,0,0),i=0){this.isPlane=!0,this.normal=t,this.constant=i}set(t,i){return this.normal.copy(t),this.constant=i,this}setComponents(t,i,r,l){return this.normal.set(t,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(t,i){return this.normal.copy(t),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(t,i,r){const l=ch.subVectors(r,i).cross(cy.subVectors(t,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,i){return i.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,i){const r=t.delta(ch),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(t.start)===0?i.copy(t.start):null;const u=-(t.start.dot(this.normal)+this.constant)/l;return u<0||u>1?null:i.copy(t.start).addScaledVector(r,u)}intersectsLine(t){const i=this.distanceToPoint(t.start),r=this.distanceToPoint(t.end);return i<0&&r>0||r<0&&i>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,i){const r=i||uy.getNormalMatrix(t),l=this.coplanarPoint(ch).applyMatrix4(t),u=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(u),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Bo,lc=new et;class Av{constructor(t=new fr,i=new fr,r=new fr,l=new fr,u=new fr,h=new fr){this.planes=[t,i,r,l,u,h]}set(t,i,r,l,u,h){const d=this.planes;return d[0].copy(t),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(u),d[5].copy(h),this}copy(t){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(t.planes[r]);return this}setFromProjectionMatrix(t,i=ia){const r=this.planes,l=t.elements,u=l[0],h=l[1],d=l[2],m=l[3],p=l[4],_=l[5],g=l[6],x=l[7],M=l[8],E=l[9],A=l[10],y=l[11],v=l[12],P=l[13],O=l[14],D=l[15];if(r[0].setComponents(m-u,x-p,y-M,D-v).normalize(),r[1].setComponents(m+u,x+p,y+M,D+v).normalize(),r[2].setComponents(m+h,x+_,y+E,D+P).normalize(),r[3].setComponents(m-h,x-_,y-E,D-P).normalize(),r[4].setComponents(m-d,x-g,y-A,D-O).normalize(),i===ia)r[5].setComponents(m+d,x+g,y+A,D+O).normalize();else if(i===Tc)r[5].setComponents(d,g,A,O).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const i=t.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),lr.copy(i.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(t){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(t.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(t){const i=this.planes,r=t.center,l=-t.radius;for(let u=0;u<6;u++)if(i[u].distanceToPoint(r)<l)return!1;return!0}intersectsBox(t){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(lc.x=l.normal.x>0?t.max.x:t.min.x,lc.y=l.normal.y>0?t.max.y:t.min.y,lc.z=l.normal.z>0?t.max.z:t.min.z,l.distanceToPoint(lc)<0)return!1}return!0}containsPoint(t){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Uo extends sa{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new fe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ac=new et,Rc=new et,vg=new Ye,Ro=new gd,cc=new Bo,uh=new et,xg=new et;class fy extends Nn{constructor(t=new li,i=new Uo){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[0];for(let l=1,u=i.count;l<u;l++)Ac.fromBufferAttribute(i,l-1),Rc.fromBufferAttribute(i,l),r[l]=r[l-1],r[l]+=Ac.distanceTo(Rc);t.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Line.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),cc.copy(r.boundingSphere),cc.applyMatrix4(l),cc.radius+=u,t.ray.intersectsSphere(cc)===!1)return;vg.copy(l).invert(),Ro.copy(t.ray).applyMatrix4(vg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=this.isLineSegments?2:1,_=r.index,x=r.attributes.position;if(_!==null){const M=Math.max(0,h.start),E=Math.min(_.count,h.start+h.count);for(let A=M,y=E-1;A<y;A+=p){const v=_.getX(A),P=_.getX(A+1),O=uc(this,t,Ro,m,v,P,A);O&&i.push(O)}if(this.isLineLoop){const A=_.getX(E-1),y=_.getX(M),v=uc(this,t,Ro,m,A,y,E-1);v&&i.push(v)}}else{const M=Math.max(0,h.start),E=Math.min(x.count,h.start+h.count);for(let A=M,y=E-1;A<y;A+=p){const v=uc(this,t,Ro,m,A,A+1,A);v&&i.push(v)}if(this.isLineLoop){const A=uc(this,t,Ro,m,E-1,M,E-1);A&&i.push(A)}}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function uc(o,t,i,r,l,u,h){const d=o.geometry.attributes.position;if(Ac.fromBufferAttribute(d,l),Rc.fromBufferAttribute(d,u),i.distanceSqToSegment(Ac,Rc,uh,xg)>r)return;uh.applyMatrix4(o.matrixWorld);const p=t.ray.origin.distanceTo(uh);if(!(p<t.near||p>t.far))return{distance:p,point:xg.clone().applyMatrix4(o.matrixWorld),index:h,face:null,faceIndex:null,barycoord:null,object:o}}const Sg=new et,yg=new et;class rd extends fy{constructor(t,i){super(t,i),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const i=t.attributes.position,r=[];for(let l=0,u=i.count;l<u;l+=2)Sg.fromBufferAttribute(i,l),yg.fromBufferAttribute(i,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+Sg.distanceTo(yg);t.setAttribute("lineDistance",new xn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class wo extends sa{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new fe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Mg=new Ye,sd=new gd,fc=new Bo,hc=new et;class fh extends Nn{constructor(t=new li,i=new wo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=i,this.updateMorphTargets()}copy(t,i){return super.copy(t,i),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,i){const r=this.geometry,l=this.matrixWorld,u=t.params.Points.threshold,h=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),fc.copy(r.boundingSphere),fc.applyMatrix4(l),fc.radius+=u,t.ray.intersectsSphere(fc)===!1)return;Mg.copy(l).invert(),sd.copy(t.ray).applyMatrix4(Mg);const d=u/((this.scale.x+this.scale.y+this.scale.z)/3),m=d*d,p=r.index,g=r.attributes.position;if(p!==null){const x=Math.max(0,h.start),M=Math.min(p.count,h.start+h.count);for(let E=x,A=M;E<A;E++){const y=p.getX(E);hc.fromBufferAttribute(g,y),Eg(hc,y,m,l,t,i,this)}}else{const x=Math.max(0,h.start),M=Math.min(g.count,h.start+h.count);for(let E=x,A=M;E<A;E++)hc.fromBufferAttribute(g,E),Eg(hc,E,m,l,t,i,this)}}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let u=0,h=l.length;u<h;u++){const d=l[u].name||String(u);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=u}}}}}function Eg(o,t,i,r,l,u,h){const d=sd.distanceSqToPoint(o);if(d<i){const m=new et;sd.closestPointToPoint(o,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;u.push({distance:p,distanceToRay:Math.sqrt(d),point:m,index:t,face:null,faceIndex:null,barycoord:null,object:h})}}class hy extends Ln{constructor(t,i,r,l,u,h,d,m,p){super(t,i,r,l,u,h,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Rv extends Ln{constructor(t,i,r,l,u,h,d,m,p,_=ps){if(_!==ps&&_!==Ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&_===ps&&(r=gr),r===void 0&&_===Ss&&(r=xs),super(null,l,u,h,d,m,_,r,p),this.isDepthTexture=!0,this.image={width:t,height:i},this.magFilter=d!==void 0?d:Si,this.minFilter=m!==void 0?m:Si,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const i=super.toJSON(t);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class wc extends li{constructor(t=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:i,widthSegments:r,heightSegments:l};const u=t/2,h=i/2,d=Math.floor(r),m=Math.floor(l),p=d+1,_=m+1,g=t/d,x=i/m,M=[],E=[],A=[],y=[];for(let v=0;v<_;v++){const P=v*x-h;for(let O=0;O<p;O++){const D=O*g-u;E.push(D,-P,0),A.push(0,0,1),y.push(O/d),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let P=0;P<d;P++){const O=P+p*v,D=P+p*(v+1),H=P+1+p*(v+1),z=P+1+p*v;M.push(O,D,z),M.push(D,H,z)}this.setIndex(M),this.setAttribute("position",new xn(E,3)),this.setAttribute("normal",new xn(A,3)),this.setAttribute("uv",new xn(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new wc(t.width,t.height,t.widthSegments,t.heightSegments)}}class dy extends li{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){const i=[],r=new Set,l=new et,u=new et;if(t.index!==null){const h=t.attributes.position,d=t.index;let m=t.groups;m.length===0&&(m=[{start:0,count:d.count,materialIndex:0}]);for(let p=0,_=m.length;p<_;++p){const g=m[p],x=g.start,M=g.count;for(let E=x,A=x+M;E<A;E+=3)for(let y=0;y<3;y++){const v=d.getX(E+y),P=d.getX(E+(y+1)%3);l.fromBufferAttribute(h,v),u.fromBufferAttribute(h,P),Tg(l,u,r)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}}else{const h=t.attributes.position;for(let d=0,m=h.count/3;d<m;d++)for(let p=0;p<3;p++){const _=3*d+p,g=3*d+(p+1)%3;l.fromBufferAttribute(h,_),u.fromBufferAttribute(h,g),Tg(l,u,r)===!0&&(i.push(l.x,l.y,l.z),i.push(u.x,u.y,u.z))}}this.setAttribute("position",new xn(i,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}function Tg(o,t,i){const r=`${o.x},${o.y},${o.z}-${t.x},${t.y},${t.z}`,l=`${t.x},${t.y},${t.z}-${o.x},${o.y},${o.z}`;return i.has(r)===!0||i.has(l)===!0?!1:(i.add(r),i.add(l),!0)}class py extends sa{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new fe(16777215),this.specular=new fe(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new fe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=dv,this.normalScale=new Pe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class my extends sa{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ES,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class _y extends sa{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const bg={enabled:!1,files:{},add:function(o,t){this.enabled!==!1&&(this.files[o]=t)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class gy{constructor(t,i,r){const l=this;let u=!1,h=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=t,this.onProgress=i,this.onError=r,this.itemStart=function(_){d++,u===!1&&l.onStart!==void 0&&l.onStart(_,h,d),u=!0},this.itemEnd=function(_){h++,l.onProgress!==void 0&&l.onProgress(_,h,d),h===d&&(u=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return m?m(_):_},this.setURLModifier=function(_){return m=_,this},this.addHandler=function(_,g){return p.push(_,g),this},this.removeHandler=function(_){const g=p.indexOf(_);return g!==-1&&p.splice(g,2),this},this.getHandler=function(_){for(let g=0,x=p.length;g<x;g+=2){const M=p[g],E=p[g+1];if(M.global&&(M.lastIndex=0),M.test(_))return E}return null}}}const vy=new gy;class vd{constructor(t){this.manager=t!==void 0?t:vy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,i){const r=this;return new Promise(function(l,u){r.load(t,l,i,u)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}vd.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class xy extends Error{constructor(t,i){super(t),this.response=i}}class Sy extends vd{constructor(t){super(t)}load(t,i,r,l){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const u=bg.get(t);if(u!==void 0)return this.manager.itemStart(t),setTimeout(()=>{i&&i(u),this.manager.itemEnd(t)},0),u;if($i[t]!==void 0){$i[t].push({onLoad:i,onProgress:r,onError:l});return}$i[t]=[],$i[t].push({onLoad:i,onProgress:r,onError:l});const h=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),d=this.mimeType,m=this.responseType;fetch(h).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const _=$i[t],g=p.body.getReader(),x=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=x?parseInt(x):0,E=M!==0;let A=0;const y=new ReadableStream({start(v){P();function P(){g.read().then(({done:O,value:D})=>{if(O)v.close();else{A+=D.byteLength;const H=new ProgressEvent("progress",{lengthComputable:E,loaded:A,total:M});for(let z=0,F=_.length;z<F;z++){const G=_[z];G.onProgress&&G.onProgress(H)}v.enqueue(D),P()}},O=>{v.error(O)})}}});return new Response(y)}else throw new xy(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(_=>new DOMParser().parseFromString(_,d));case"json":return p.json();default:if(d===void 0)return p.text();{const g=/charset="?([^;"\s]*)"?/i.exec(d),x=g&&g[1]?g[1].toLowerCase():void 0,M=new TextDecoder(x);return p.arrayBuffer().then(E=>M.decode(E))}}}).then(p=>{bg.add(t,p);const _=$i[t];delete $i[t];for(let g=0,x=_.length;g<x;g++){const M=_[g];M.onLoad&&M.onLoad(p)}}).catch(p=>{const _=$i[t];if(_===void 0)throw this.manager.itemError(t),p;delete $i[t];for(let g=0,x=_.length;g<x;g++){const M=_[g];M.onError&&M.onError(p)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class yy extends Tv{constructor(t=-1,i=1,r=1,l=-1,u=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=i,this.top=r,this.bottom=l,this.near=u,this.far=h,this.updateProjectionMatrix()}copy(t,i){return super.copy(t,i),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,i,r,l,u,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=u,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let u=r-t,h=r+t,d=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;u+=p*this.view.offsetX,h=u+p*this.view.width,d-=_*this.view.offsetY,m=d-_*this.view.height}this.projectionMatrix.makeOrthographic(u,h,d,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const i=super.toJSON(t);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class My extends oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t,this.index=0}}function Ag(o,t,i,r){const l=Ey(r);switch(i){case sv:return o*t;case lv:return o*t;case cv:return o*t*2;case uv:return o*t/l.components*l.byteLength;case pd:return o*t/l.components*l.byteLength;case fv:return o*t*2/l.components*l.byteLength;case md:return o*t*2/l.components*l.byteLength;case ov:return o*t*3/l.components*l.byteLength;case vi:return o*t*4/l.components*l.byteLength;case _d:return o*t*4/l.components*l.byteLength;case gc:case vc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case xc:case Sc:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Nh:case Ph:return Math.max(o,16)*Math.max(t,8)/4;case Lh:case Oh:return Math.max(o,8)*Math.max(t,8)/2;case zh:case Bh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*8;case Fh:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Ih:return Math.floor((o+3)/4)*Math.floor((t+3)/4)*16;case Hh:return Math.floor((o+4)/5)*Math.floor((t+3)/4)*16;case Gh:return Math.floor((o+4)/5)*Math.floor((t+4)/5)*16;case Vh:return Math.floor((o+5)/6)*Math.floor((t+4)/5)*16;case kh:return Math.floor((o+5)/6)*Math.floor((t+5)/6)*16;case Xh:return Math.floor((o+7)/8)*Math.floor((t+4)/5)*16;case Wh:return Math.floor((o+7)/8)*Math.floor((t+5)/6)*16;case qh:return Math.floor((o+7)/8)*Math.floor((t+7)/8)*16;case Yh:return Math.floor((o+9)/10)*Math.floor((t+4)/5)*16;case jh:return Math.floor((o+9)/10)*Math.floor((t+5)/6)*16;case Zh:return Math.floor((o+9)/10)*Math.floor((t+7)/8)*16;case Kh:return Math.floor((o+9)/10)*Math.floor((t+9)/10)*16;case Qh:return Math.floor((o+11)/12)*Math.floor((t+9)/10)*16;case Jh:return Math.floor((o+11)/12)*Math.floor((t+11)/12)*16;case yc:case $h:case td:return Math.ceil(o/4)*Math.ceil(t/4)*16;case hv:case ed:return Math.ceil(o/4)*Math.ceil(t/4)*8;case nd:case id:return Math.ceil(o/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function Ey(o){switch(o){case ra:case iv:return{byteLength:1,components:1};case Lo:case av:case No:return{byteLength:2,components:1};case hd:case dd:return{byteLength:2,components:4};case gr:case fd:case na:return{byteLength:4,components:1};case rv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${o}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:cd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=cd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cv(){let o=null,t=!1,i=null,r=null;function l(u,h){i(u,h),r=o.requestAnimationFrame(l)}return{start:function(){t!==!0&&i!==null&&(r=o.requestAnimationFrame(l),t=!0)},stop:function(){o.cancelAnimationFrame(r),t=!1},setAnimationLoop:function(u){i=u},setContext:function(u){o=u}}}function Ty(o){const t=new WeakMap;function i(d,m){const p=d.array,_=d.usage,g=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,_),d.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,m,p){const _=m.array,g=m.updateRanges;if(o.bindBuffer(p,d),g.length===0)o.bufferSubData(p,0,_);else{g.sort((M,E)=>M.start-E.start);let x=0;for(let M=1;M<g.length;M++){const E=g[x],A=g[M];A.start<=E.start+E.count+1?E.count=Math.max(E.count,A.start+A.count-E.start):(++x,g[x]=A)}g.length=x+1;for(let M=0,E=g.length;M<E;M++){const A=g[M];o.bufferSubData(p,A.start*_.BYTES_PER_ELEMENT,_,A.start,A.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),t.get(d)}function u(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=t.get(d);m&&(o.deleteBuffer(m.buffer),t.delete(d))}function h(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const _=t.get(d);(!_||_.version<d.version)&&t.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=t.get(d);if(p===void 0)t.set(d,i(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,m),p.version=d.version}}return{get:l,remove:u,update:h}}var by=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Dy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ly=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ny=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Oy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Py=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Fy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Iy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ky=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Yy=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Zy=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ky=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Jy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$y=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eM="gl_FragColor = linearToOutputTexel( gl_FragColor );",nM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,aM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,rM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,sM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,_M=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,gM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,vM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,xM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,SM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,yM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,EM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,TM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,bM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,AM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,RM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,DM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,UM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,LM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,OM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,PM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,IM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,WM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ZM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$M=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,eE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,aE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,rE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,dE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_E=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,xE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,yE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,EE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,UE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,LE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,FE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,kE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,WE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,ZE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,iT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ce={alphahash_fragment:by,alphahash_pars_fragment:Ay,alphamap_fragment:Ry,alphamap_pars_fragment:Cy,alphatest_fragment:wy,alphatest_pars_fragment:Dy,aomap_fragment:Uy,aomap_pars_fragment:Ly,batching_pars_vertex:Ny,batching_vertex:Oy,begin_vertex:Py,beginnormal_vertex:zy,bsdfs:By,iridescence_fragment:Fy,bumpmap_pars_fragment:Iy,clipping_planes_fragment:Hy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:Vy,clipping_planes_vertex:ky,color_fragment:Xy,color_pars_fragment:Wy,color_pars_vertex:qy,color_vertex:Yy,common:jy,cube_uv_reflection_fragment:Zy,defaultnormal_vertex:Ky,displacementmap_pars_vertex:Qy,displacementmap_vertex:Jy,emissivemap_fragment:$y,emissivemap_pars_fragment:tM,colorspace_fragment:eM,colorspace_pars_fragment:nM,envmap_fragment:iM,envmap_common_pars_fragment:aM,envmap_pars_fragment:rM,envmap_pars_vertex:sM,envmap_physical_pars_fragment:gM,envmap_vertex:oM,fog_vertex:lM,fog_pars_vertex:cM,fog_fragment:uM,fog_pars_fragment:fM,gradientmap_pars_fragment:hM,lightmap_pars_fragment:dM,lights_lambert_fragment:pM,lights_lambert_pars_fragment:mM,lights_pars_begin:_M,lights_toon_fragment:vM,lights_toon_pars_fragment:xM,lights_phong_fragment:SM,lights_phong_pars_fragment:yM,lights_physical_fragment:MM,lights_physical_pars_fragment:EM,lights_fragment_begin:TM,lights_fragment_maps:bM,lights_fragment_end:AM,logdepthbuf_fragment:RM,logdepthbuf_pars_fragment:CM,logdepthbuf_pars_vertex:wM,logdepthbuf_vertex:DM,map_fragment:UM,map_pars_fragment:LM,map_particle_fragment:NM,map_particle_pars_fragment:OM,metalnessmap_fragment:PM,metalnessmap_pars_fragment:zM,morphinstance_vertex:BM,morphcolor_vertex:FM,morphnormal_vertex:IM,morphtarget_pars_vertex:HM,morphtarget_vertex:GM,normal_fragment_begin:VM,normal_fragment_maps:kM,normal_pars_fragment:XM,normal_pars_vertex:WM,normal_vertex:qM,normalmap_pars_fragment:YM,clearcoat_normal_fragment_begin:jM,clearcoat_normal_fragment_maps:ZM,clearcoat_pars_fragment:KM,iridescence_pars_fragment:QM,opaque_fragment:JM,packing:$M,premultiplied_alpha_fragment:tE,project_vertex:eE,dithering_fragment:nE,dithering_pars_fragment:iE,roughnessmap_fragment:aE,roughnessmap_pars_fragment:rE,shadowmap_pars_fragment:sE,shadowmap_pars_vertex:oE,shadowmap_vertex:lE,shadowmask_pars_fragment:cE,skinbase_vertex:uE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:dE,specularmap_fragment:pE,specularmap_pars_fragment:mE,tonemapping_fragment:_E,tonemapping_pars_fragment:gE,transmission_fragment:vE,transmission_pars_fragment:xE,uv_pars_fragment:SE,uv_pars_vertex:yE,uv_vertex:ME,worldpos_vertex:EE,background_vert:TE,background_frag:bE,backgroundCube_vert:AE,backgroundCube_frag:RE,cube_vert:CE,cube_frag:wE,depth_vert:DE,depth_frag:UE,distanceRGBA_vert:LE,distanceRGBA_frag:NE,equirect_vert:OE,equirect_frag:PE,linedashed_vert:zE,linedashed_frag:BE,meshbasic_vert:FE,meshbasic_frag:IE,meshlambert_vert:HE,meshlambert_frag:GE,meshmatcap_vert:VE,meshmatcap_frag:kE,meshnormal_vert:XE,meshnormal_frag:WE,meshphong_vert:qE,meshphong_frag:YE,meshphysical_vert:jE,meshphysical_frag:ZE,meshtoon_vert:KE,meshtoon_frag:QE,points_vert:JE,points_frag:$E,shadow_vert:tT,shadow_frag:eT,sprite_vert:nT,sprite_frag:iT},Ut={common:{diffuse:{value:new fe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new le}},envmap:{envMap:{value:null},envMapRotation:{value:new le},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new le},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new fe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new fe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0},uvTransform:{value:new le}},sprite:{diffuse:{value:new fe(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new le},alphaMap:{value:null},alphaMapTransform:{value:new le},alphaTest:{value:0}}},Ri={basic:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.fog]),vertexShader:ce.meshbasic_vert,fragmentShader:ce.meshbasic_frag},lambert:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshlambert_vert,fragmentShader:ce.meshlambert_frag},phong:{uniforms:Un([Ut.common,Ut.specularmap,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,Ut.lights,{emissive:{value:new fe(0)},specular:{value:new fe(1118481)},shininess:{value:30}}]),vertexShader:ce.meshphong_vert,fragmentShader:ce.meshphong_frag},standard:{uniforms:Un([Ut.common,Ut.envmap,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.roughnessmap,Ut.metalnessmap,Ut.fog,Ut.lights,{emissive:{value:new fe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag},toon:{uniforms:Un([Ut.common,Ut.aomap,Ut.lightmap,Ut.emissivemap,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.gradientmap,Ut.fog,Ut.lights,{emissive:{value:new fe(0)}}]),vertexShader:ce.meshtoon_vert,fragmentShader:ce.meshtoon_frag},matcap:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,Ut.fog,{matcap:{value:null}}]),vertexShader:ce.meshmatcap_vert,fragmentShader:ce.meshmatcap_frag},points:{uniforms:Un([Ut.points,Ut.fog]),vertexShader:ce.points_vert,fragmentShader:ce.points_frag},dashed:{uniforms:Un([Ut.common,Ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ce.linedashed_vert,fragmentShader:ce.linedashed_frag},depth:{uniforms:Un([Ut.common,Ut.displacementmap]),vertexShader:ce.depth_vert,fragmentShader:ce.depth_frag},normal:{uniforms:Un([Ut.common,Ut.bumpmap,Ut.normalmap,Ut.displacementmap,{opacity:{value:1}}]),vertexShader:ce.meshnormal_vert,fragmentShader:ce.meshnormal_frag},sprite:{uniforms:Un([Ut.sprite,Ut.fog]),vertexShader:ce.sprite_vert,fragmentShader:ce.sprite_frag},background:{uniforms:{uvTransform:{value:new le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ce.background_vert,fragmentShader:ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new le}},vertexShader:ce.backgroundCube_vert,fragmentShader:ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ce.cube_vert,fragmentShader:ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ce.equirect_vert,fragmentShader:ce.equirect_frag},distanceRGBA:{uniforms:Un([Ut.common,Ut.displacementmap,{referencePosition:{value:new et},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ce.distanceRGBA_vert,fragmentShader:ce.distanceRGBA_frag},shadow:{uniforms:Un([Ut.lights,Ut.fog,{color:{value:new fe(0)},opacity:{value:1}}]),vertexShader:ce.shadow_vert,fragmentShader:ce.shadow_frag}};Ri.physical={uniforms:Un([Ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new le},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new le},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new le},sheen:{value:0},sheenColor:{value:new fe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new le},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new le},attenuationDistance:{value:0},attenuationColor:{value:new fe(0)},specularColor:{value:new fe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new le},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new le}}]),vertexShader:ce.meshphysical_vert,fragmentShader:ce.meshphysical_frag};const dc={r:0,b:0,g:0},cr=new Di,aT=new Ye;function rT(o,t,i,r,l,u,h){const d=new fe(0);let m=u===!0?0:1,p,_,g=null,x=0,M=null;function E(O){let D=O.isScene===!0?O.background:null;return D&&D.isTexture&&(D=(O.backgroundBlurriness>0?i:t).get(D)),D}function A(O){let D=!1;const H=E(O);H===null?v(d,m):H&&H.isColor&&(v(H,1),D=!0);const z=o.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(o.autoClear||D)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil))}function y(O,D){const H=E(D);H&&(H.isCubeTexture||H.mapping===Cc)?(_===void 0&&(_=new xi(new Fo(1,1,1),new Fa({name:"BackgroundCubeMaterial",uniforms:Ms(Ri.backgroundCube.uniforms),vertexShader:Ri.backgroundCube.vertexShader,fragmentShader:Ri.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(z,F,G){this.matrixWorld.copyPosition(G.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(_)),cr.copy(D.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,H.isCubeTexture&&H.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),_.material.uniforms.envMap.value=H,_.material.uniforms.flipEnvMap.value=H.isCubeTexture&&H.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(aT.makeRotationFromEuler(cr)),_.material.toneMapped=Re.getTransfer(H.colorSpace)!==Oe,(g!==H||x!==H.version||M!==o.toneMapping)&&(_.material.needsUpdate=!0,g=H,x=H.version,M=o.toneMapping),_.layers.enableAll(),O.unshift(_,_.geometry,_.material,0,0,null)):H&&H.isTexture&&(p===void 0&&(p=new xi(new wc(2,2),new Fa({name:"BackgroundMaterial",uniforms:Ms(Ri.background.uniforms),vertexShader:Ri.background.vertexShader,fragmentShader:Ri.background.fragmentShader,side:Ba,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=H,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Re.getTransfer(H.colorSpace)!==Oe,H.matrixAutoUpdate===!0&&H.updateMatrix(),p.material.uniforms.uvTransform.value.copy(H.matrix),(g!==H||x!==H.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,g=H,x=H.version,M=o.toneMapping),p.layers.enableAll(),O.unshift(p,p.geometry,p.material,0,0,null))}function v(O,D){O.getRGB(dc,Ev(o)),r.buffers.color.setClear(dc.r,dc.g,dc.b,D,h)}function P(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,D=1){d.set(O),m=D,v(d,m)},getClearAlpha:function(){return m},setClearAlpha:function(O){m=O,v(d,m)},render:A,addToRenderList:y,dispose:P}}function sT(o,t){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let u=l,h=!1;function d(b,B,st,nt,ft){let lt=!1;const k=g(nt,st,B);u!==k&&(u=k,p(u.object)),lt=M(b,nt,st,ft),lt&&E(b,nt,st,ft),ft!==null&&t.update(ft,o.ELEMENT_ARRAY_BUFFER),(lt||h)&&(h=!1,D(b,B,st,nt),ft!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,t.get(ft).buffer))}function m(){return o.createVertexArray()}function p(b){return o.bindVertexArray(b)}function _(b){return o.deleteVertexArray(b)}function g(b,B,st){const nt=st.wireframe===!0;let ft=r[b.id];ft===void 0&&(ft={},r[b.id]=ft);let lt=ft[B.id];lt===void 0&&(lt={},ft[B.id]=lt);let k=lt[nt];return k===void 0&&(k=x(m()),lt[nt]=k),k}function x(b){const B=[],st=[],nt=[];for(let ft=0;ft<i;ft++)B[ft]=0,st[ft]=0,nt[ft]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:st,attributeDivisors:nt,object:b,attributes:{},index:null}}function M(b,B,st,nt){const ft=u.attributes,lt=B.attributes;let k=0;const rt=st.getAttributes();for(const Y in rt)if(rt[Y].location>=0){const U=ft[Y];let $=lt[Y];if($===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&($=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&($=b.instanceColor)),U===void 0||U.attribute!==$||$&&U.data!==$.data)return!0;k++}return u.attributesNum!==k||u.index!==nt}function E(b,B,st,nt){const ft={},lt=B.attributes;let k=0;const rt=st.getAttributes();for(const Y in rt)if(rt[Y].location>=0){let U=lt[Y];U===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(U=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(U=b.instanceColor));const $={};$.attribute=U,U&&U.data&&($.data=U.data),ft[Y]=$,k++}u.attributes=ft,u.attributesNum=k,u.index=nt}function A(){const b=u.newAttributes;for(let B=0,st=b.length;B<st;B++)b[B]=0}function y(b){v(b,0)}function v(b,B){const st=u.newAttributes,nt=u.enabledAttributes,ft=u.attributeDivisors;st[b]=1,nt[b]===0&&(o.enableVertexAttribArray(b),nt[b]=1),ft[b]!==B&&(o.vertexAttribDivisor(b,B),ft[b]=B)}function P(){const b=u.newAttributes,B=u.enabledAttributes;for(let st=0,nt=B.length;st<nt;st++)B[st]!==b[st]&&(o.disableVertexAttribArray(st),B[st]=0)}function O(b,B,st,nt,ft,lt,k){k===!0?o.vertexAttribIPointer(b,B,st,ft,lt):o.vertexAttribPointer(b,B,st,nt,ft,lt)}function D(b,B,st,nt){A();const ft=nt.attributes,lt=st.getAttributes(),k=B.defaultAttributeValues;for(const rt in lt){const Y=lt[rt];if(Y.location>=0){let gt=ft[rt];if(gt===void 0&&(rt==="instanceMatrix"&&b.instanceMatrix&&(gt=b.instanceMatrix),rt==="instanceColor"&&b.instanceColor&&(gt=b.instanceColor)),gt!==void 0){const U=gt.normalized,$=gt.itemSize,yt=t.get(gt);if(yt===void 0)continue;const At=yt.buffer,j=yt.type,dt=yt.bytesPerElement,vt=j===o.INT||j===o.UNSIGNED_INT||gt.gpuType===fd;if(gt.isInterleavedBufferAttribute){const Et=gt.data,bt=Et.stride,Kt=gt.offset;if(Et.isInstancedInterleavedBuffer){for(let Pt=0;Pt<Y.locationSize;Pt++)v(Y.location+Pt,Et.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=Et.meshPerAttribute*Et.count)}else for(let Pt=0;Pt<Y.locationSize;Pt++)y(Y.location+Pt);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Pt=0;Pt<Y.locationSize;Pt++)O(Y.location+Pt,$/Y.locationSize,j,U,bt*dt,(Kt+$/Y.locationSize*Pt)*dt,vt)}else{if(gt.isInstancedBufferAttribute){for(let Et=0;Et<Y.locationSize;Et++)v(Y.location+Et,gt.meshPerAttribute);b.isInstancedMesh!==!0&&nt._maxInstanceCount===void 0&&(nt._maxInstanceCount=gt.meshPerAttribute*gt.count)}else for(let Et=0;Et<Y.locationSize;Et++)y(Y.location+Et);o.bindBuffer(o.ARRAY_BUFFER,At);for(let Et=0;Et<Y.locationSize;Et++)O(Y.location+Et,$/Y.locationSize,j,U,$*dt,$/Y.locationSize*Et*dt,vt)}}else if(k!==void 0){const U=k[rt];if(U!==void 0)switch(U.length){case 2:o.vertexAttrib2fv(Y.location,U);break;case 3:o.vertexAttrib3fv(Y.location,U);break;case 4:o.vertexAttrib4fv(Y.location,U);break;default:o.vertexAttrib1fv(Y.location,U)}}}}P()}function H(){G();for(const b in r){const B=r[b];for(const st in B){const nt=B[st];for(const ft in nt)_(nt[ft].object),delete nt[ft];delete B[st]}delete r[b]}}function z(b){if(r[b.id]===void 0)return;const B=r[b.id];for(const st in B){const nt=B[st];for(const ft in nt)_(nt[ft].object),delete nt[ft];delete B[st]}delete r[b.id]}function F(b){for(const B in r){const st=r[B];if(st[b.id]===void 0)continue;const nt=st[b.id];for(const ft in nt)_(nt[ft].object),delete nt[ft];delete st[b.id]}}function G(){R(),h=!0,u!==l&&(u=l,p(u.object))}function R(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:G,resetDefaultState:R,dispose:H,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:A,enableAttribute:y,disableUnusedAttributes:P}}function oT(o,t,i){let r;function l(p){r=p}function u(p,_){o.drawArrays(r,p,_),i.update(_,r,1)}function h(p,_,g){g!==0&&(o.drawArraysInstanced(r,p,_,g),i.update(_,r,g))}function d(p,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=_[E];i.update(M,r,1)}function m(p,_,g,x){if(g===0)return;const M=t.get("WEBGL_multi_draw");if(M===null)for(let E=0;E<p.length;E++)h(p[E],_[E],x[E]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,_,0,x,0,g);let E=0;for(let A=0;A<g;A++)E+=_[A]*x[A];i.update(E,r,1)}}this.setMode=l,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=m}function lT(o,t,i,r){let l;function u(){if(l!==void 0)return l;if(t.has("EXT_texture_filter_anisotropic")===!0){const F=t.get("EXT_texture_filter_anisotropic");l=o.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==vi&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const G=F===No&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(F!==ra&&r.convert(F)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==na&&!G)}function m(F){if(F==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const _=m(p);_!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",_,"instead."),p=_);const g=i.logarithmicDepthBuffer===!0,x=i.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),M=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),E=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=o.getParameter(o.MAX_TEXTURE_SIZE),y=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),v=o.getParameter(o.MAX_VERTEX_ATTRIBS),P=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),O=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),H=E>0,z=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:u,getMaxPrecision:m,textureFormatReadable:h,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:x,maxTextures:M,maxVertexTextures:E,maxTextureSize:A,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:P,maxVaryings:O,maxFragmentUniforms:D,vertexTextures:H,maxSamples:z}}function cT(o){const t=this;let i=null,r=0,l=!1,u=!1;const h=new fr,d=new le,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(g,x){const M=g.length!==0||x||r!==0||l;return l=x,r=g.length,M},this.beginShadows=function(){u=!0,_(null)},this.endShadows=function(){u=!1},this.setGlobalState=function(g,x){i=_(g,x,0)},this.setState=function(g,x,M){const E=g.clippingPlanes,A=g.clipIntersection,y=g.clipShadows,v=o.get(g);if(!l||E===null||E.length===0||u&&!y)u?_(null):p();else{const P=u?0:r,O=P*4;let D=v.clippingState||null;m.value=D,D=_(E,x,O,M);for(let H=0;H!==O;++H)D[H]=i[H];v.clippingState=D,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=P}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),t.numPlanes=r,t.numIntersection=0}function _(g,x,M,E){const A=g!==null?g.length:0;let y=null;if(A!==0){if(y=m.value,E!==!0||y===null){const v=M+A*4,P=x.matrixWorldInverse;d.getNormalMatrix(P),(y===null||y.length<v)&&(y=new Float32Array(v));for(let O=0,D=M;O!==A;++O,D+=4)h.copy(g[O]).applyMatrix4(P,d),h.normal.toArray(y,D),y[D+3]=h.constant}m.value=y,m.needsUpdate=!0}return t.numPlanes=A,t.numIntersection=0,y}}function uT(o){let t=new WeakMap;function i(h,d){return d===Ch?h.mapping=gs:d===wh&&(h.mapping=vs),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ch||d===wh)if(t.has(h)){const m=t.get(h).texture;return i(m,h.mapping)}else{const m=h.image;if(m&&m.height>0){const p=new sy(m.height);return p.fromEquirectangularTexture(o,h),t.set(h,p),h.addEventListener("dispose",l),i(p.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function u(){t=new WeakMap}return{get:r,dispose:u}}const hs=4,Rg=[.125,.215,.35,.446,.526,.582],pr=20,hh=new yy,Cg=new fe;let dh=null,ph=0,mh=0,_h=!1;const hr=(1+Math.sqrt(5))/2,us=1/hr,wg=[new et(-hr,us,0),new et(hr,us,0),new et(-us,0,hr),new et(us,0,hr),new et(0,hr,-us),new et(0,hr,us),new et(-1,1,-1),new et(1,1,-1),new et(-1,1,1),new et(1,1,1)];class Dg{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,i=0,r=.1,l=100){dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,r,l,u),i>0&&this._blur(u,0,0,i),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,i=null){return this._fromTexture(t,i)}fromCubemap(t,i=null){return this._fromTexture(t,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(dh,ph,mh),this._renderer.xr.enabled=_h,t.scissorTest=!1,pc(t,0,0,t.width,t.height)}_fromTexture(t,i){t.mapping===gs||t.mapping===vs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),dh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),_h=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(t,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:No,format:vi,colorSpace:ys,depthBuffer:!1},l=Ug(t,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ug(t,i,r);const{_lodMax:u}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fT(u)),this._blurMaterial=hT(u,t,i)}return l}_compileMaterial(t){const i=new xi(this._lodPlanes[0],t);this._renderer.compile(i,hh)}_sceneToCubeUV(t,i,r,l){const d=new oi(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],_=this._renderer,g=_.autoClear,x=_.toneMapping;_.getClearColor(Cg),_.toneMapping=za,_.autoClear=!1;const M=new Sv({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1}),E=new xi(new Fo,M);let A=!1;const y=t.background;y?y.isColor&&(M.color.copy(y),t.background=null,A=!0):(M.color.copy(Cg),A=!0);for(let v=0;v<6;v++){const P=v%3;P===0?(d.up.set(0,m[v],0),d.lookAt(p[v],0,0)):P===1?(d.up.set(0,0,m[v]),d.lookAt(0,p[v],0)):(d.up.set(0,m[v],0),d.lookAt(0,0,p[v]));const O=this._cubeSize;pc(l,P*O,v>2?O:0,O,O),_.setRenderTarget(l),A&&_.render(E,d),_.render(t,d)}E.geometry.dispose(),E.material.dispose(),_.toneMapping=x,_.autoClear=g,t.background=y}_textureToCubeUV(t,i){const r=this._renderer,l=t.mapping===gs||t.mapping===vs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Lg());const u=l?this._cubemapMaterial:this._equirectMaterial,h=new xi(this._lodPlanes[0],u),d=u.uniforms;d.envMap.value=t;const m=this._cubeSize;pc(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(h,hh)}_applyPMREM(t){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let u=1;u<l;u++){const h=Math.sqrt(this._sigmas[u]*this._sigmas[u]-this._sigmas[u-1]*this._sigmas[u-1]),d=wg[(l-u-1)%wg.length];this._blur(t,u-1,u,h,d)}i.autoClear=r}_blur(t,i,r,l,u){const h=this._pingPongRenderTarget;this._halfBlur(t,h,i,r,l,"latitudinal",u),this._halfBlur(h,t,r,r,l,"longitudinal",u)}_halfBlur(t,i,r,l,u,h,d){const m=this._renderer,p=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const _=3,g=new xi(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,E=isFinite(u)?Math.PI/(2*M):2*Math.PI/(2*pr-1),A=u/E,y=isFinite(u)?1+Math.floor(_*A):pr;y>pr&&console.warn(`sigmaRadians, ${u}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${pr}`);const v=[];let P=0;for(let F=0;F<pr;++F){const G=F/A,R=Math.exp(-G*G/2);v.push(R),F===0?P+=R:F<y&&(P+=2*R)}for(let F=0;F<v.length;F++)v[F]=v[F]/P;x.envMap.value=t.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=h==="latitudinal",d&&(x.poleAxis.value=d);const{_lodMax:O}=this;x.dTheta.value=E,x.mipInt.value=O-r;const D=this._sizeLods[l],H=3*D*(l>O-hs?l-O+hs:0),z=4*(this._cubeSize-D);pc(i,H,z,3*D,2*D),m.setRenderTarget(i),m.render(g,hh)}}function fT(o){const t=[],i=[],r=[];let l=o;const u=o-hs+1+Rg.length;for(let h=0;h<u;h++){const d=Math.pow(2,l);i.push(d);let m=1/d;h>o-hs?m=Rg[h-o+hs-1]:h===0&&(m=0),r.push(m);const p=1/(d-2),_=-p,g=1+p,x=[_,_,g,_,g,g,_,_,g,g,_,g],M=6,E=6,A=3,y=2,v=1,P=new Float32Array(A*E*M),O=new Float32Array(y*E*M),D=new Float32Array(v*E*M);for(let z=0;z<M;z++){const F=z%3*2/3-1,G=z>2?0:-1,R=[F,G,0,F+2/3,G,0,F+2/3,G+1,0,F,G,0,F+2/3,G+1,0,F,G+1,0];P.set(R,A*E*z),O.set(x,y*E*z);const b=[z,z,z,z,z,z];D.set(b,v*E*z)}const H=new li;H.setAttribute("position",new wi(P,A)),H.setAttribute("uv",new wi(O,y)),H.setAttribute("faceIndex",new wi(D,v)),t.push(H),l>hs&&l--}return{lodPlanes:t,sizeLods:i,sigmas:r}}function Ug(o,t,i){const r=new vr(o,t,i);return r.texture.mapping=Cc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function pc(o,t,i,r,l){o.viewport.set(t,i,r,l),o.scissor.set(t,i,r,l)}function hT(o,t,i){const r=new Float32Array(pr),l=new et(0,1,0);return new Fa({name:"SphericalGaussianBlur",defines:{n:pr,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Lg(){return new Fa({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function Ng(){return new Fa({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pa,depthTest:!1,depthWrite:!1})}function xd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function dT(o){let t=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const m=d.mapping,p=m===Ch||m===wh,_=m===gs||m===vs;if(p||_){let g=t.get(d);const x=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==x)return i===null&&(i=new Dg(o)),g=p?i.fromEquirectangular(d,g):i.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{const M=d.image;return p&&M&&M.height>0||_&&M&&l(M)?(i===null&&(i=new Dg(o)),g=p?i.fromEquirectangular(d):i.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",u),g.texture):null}}}return d}function l(d){let m=0;const p=6;for(let _=0;_<p;_++)d[_]!==void 0&&m++;return m===p}function u(d){const m=d.target;m.removeEventListener("dispose",u);const p=t.get(m);p!==void 0&&(t.delete(m),p.dispose())}function h(){t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function pT(o){const t={};function i(r){if(t[r]!==void 0)return t[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return t[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&fs("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function mT(o,t,i,r){const l={},u=new WeakMap;function h(g){const x=g.target;x.index!==null&&t.remove(x.index);for(const E in x.attributes)t.remove(x.attributes[E]);x.removeEventListener("dispose",h),delete l[x.id];const M=u.get(x);M&&(t.remove(M),u.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function d(g,x){return l[x.id]===!0||(x.addEventListener("dispose",h),l[x.id]=!0,i.memory.geometries++),x}function m(g){const x=g.attributes;for(const M in x)t.update(x[M],o.ARRAY_BUFFER)}function p(g){const x=[],M=g.index,E=g.attributes.position;let A=0;if(M!==null){const P=M.array;A=M.version;for(let O=0,D=P.length;O<D;O+=3){const H=P[O+0],z=P[O+1],F=P[O+2];x.push(H,z,z,F,F,H)}}else if(E!==void 0){const P=E.array;A=E.version;for(let O=0,D=P.length/3-1;O<D;O+=3){const H=O+0,z=O+1,F=O+2;x.push(H,z,z,F,F,H)}}else return;const y=new(mv(x)?Mv:yv)(x,1);y.version=A;const v=u.get(g);v&&t.remove(v),u.set(g,y)}function _(g){const x=u.get(g);if(x){const M=g.index;M!==null&&x.version<M.version&&p(g)}else p(g);return u.get(g)}return{get:d,update:m,getWireframeAttribute:_}}function _T(o,t,i){let r;function l(x){r=x}let u,h;function d(x){u=x.type,h=x.bytesPerElement}function m(x,M){o.drawElements(r,M,u,x*h),i.update(M,r,1)}function p(x,M,E){E!==0&&(o.drawElementsInstanced(r,M,u,x*h,E),i.update(M,r,E))}function _(x,M,E){if(E===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,M,0,u,x,0,E);let y=0;for(let v=0;v<E;v++)y+=M[v];i.update(y,r,1)}function g(x,M,E,A){if(E===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/h,M[v],A[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,u,x,0,A,0,E);let v=0;for(let P=0;P<E;P++)v+=M[P]*A[P];i.update(v,r,1)}}this.setMode=l,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function gT(o){const t={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(u,h,d){switch(i.calls++,h){case o.TRIANGLES:i.triangles+=d*(u/3);break;case o.LINES:i.lines+=d*(u/2);break;case o.LINE_STRIP:i.lines+=d*(u-1);break;case o.LINE_LOOP:i.lines+=d*u;break;case o.POINTS:i.points+=d*u;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:t,render:i,programs:null,autoReset:!0,reset:l,update:r}}function vT(o,t,i){const r=new WeakMap,l=new Ze;function u(h,d,m){const p=h.morphTargetInfluences,_=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=_!==void 0?_.length:0;let x=r.get(d);if(x===void 0||x.count!==g){let b=function(){G.dispose(),r.delete(d),d.removeEventListener("dispose",b)};var M=b;x!==void 0&&x.texture.dispose();const E=d.morphAttributes.position!==void 0,A=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,v=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let D=0;E===!0&&(D=1),A===!0&&(D=2),y===!0&&(D=3);let H=d.attributes.position.count*D,z=1;H>t.maxTextureSize&&(z=Math.ceil(H/t.maxTextureSize),H=t.maxTextureSize);const F=new Float32Array(H*z*4*g),G=new gv(F,H,z,g);G.type=na,G.needsUpdate=!0;const R=D*4;for(let B=0;B<g;B++){const st=v[B],nt=P[B],ft=O[B],lt=H*z*4*B;for(let k=0;k<st.count;k++){const rt=k*R;E===!0&&(l.fromBufferAttribute(st,k),F[lt+rt+0]=l.x,F[lt+rt+1]=l.y,F[lt+rt+2]=l.z,F[lt+rt+3]=0),A===!0&&(l.fromBufferAttribute(nt,k),F[lt+rt+4]=l.x,F[lt+rt+5]=l.y,F[lt+rt+6]=l.z,F[lt+rt+7]=0),y===!0&&(l.fromBufferAttribute(ft,k),F[lt+rt+8]=l.x,F[lt+rt+9]=l.y,F[lt+rt+10]=l.z,F[lt+rt+11]=ft.itemSize===4?l.w:1)}}x={count:g,texture:G,size:new Pe(H,z)},r.set(d,x),d.addEventListener("dispose",b)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",h.morphTexture,i);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const A=d.morphTargetsRelative?1:1-E;m.getUniforms().setValue(o,"morphTargetBaseInfluence",A),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:u}}function xT(o,t,i,r){let l=new WeakMap;function u(m){const p=r.render.frame,_=m.geometry,g=t.get(m,_);if(l.get(g)!==p&&(t.update(g),l.set(g,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",d)===!1&&m.addEventListener("dispose",d),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return g}function h(){l=new WeakMap}function d(m){const p=m.target;p.removeEventListener("dispose",d),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:u,dispose:h}}const wv=new Ln,Og=new Rv(1,1),Dv=new gv,Uv=new kS,Lv=new bv,Pg=[],zg=[],Bg=new Float32Array(16),Fg=new Float32Array(9),Ig=new Float32Array(4);function Ts(o,t,i){const r=o[0];if(r<=0||r>0)return o;const l=t*i;let u=Pg[l];if(u===void 0&&(u=new Float32Array(l),Pg[l]=u),t!==0){r.toArray(u,0);for(let h=1,d=0;h!==t;++h)d+=i,o[h].toArray(u,d)}return u}function on(o,t){if(o.length!==t.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==t[i])return!1;return!0}function ln(o,t){for(let i=0,r=t.length;i<r;i++)o[i]=t[i]}function Dc(o,t){let i=zg[t];i===void 0&&(i=new Int32Array(t),zg[t]=i);for(let r=0;r!==t;++r)i[r]=o.allocateTextureUnit();return i}function ST(o,t){const i=this.cache;i[0]!==t&&(o.uniform1f(this.addr,t),i[0]=t)}function yT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2f(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2fv(this.addr,t),ln(i,t)}}function MT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3f(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else if(t.r!==void 0)(i[0]!==t.r||i[1]!==t.g||i[2]!==t.b)&&(o.uniform3f(this.addr,t.r,t.g,t.b),i[0]=t.r,i[1]=t.g,i[2]=t.b);else{if(on(i,t))return;o.uniform3fv(this.addr,t),ln(i,t)}}function ET(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4f(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4fv(this.addr,t),ln(i,t)}}function TT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(on(i,t))return;o.uniformMatrix2fv(this.addr,!1,t),ln(i,t)}else{if(on(i,r))return;Ig.set(r),o.uniformMatrix2fv(this.addr,!1,Ig),ln(i,r)}}function bT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(on(i,t))return;o.uniformMatrix3fv(this.addr,!1,t),ln(i,t)}else{if(on(i,r))return;Fg.set(r),o.uniformMatrix3fv(this.addr,!1,Fg),ln(i,r)}}function AT(o,t){const i=this.cache,r=t.elements;if(r===void 0){if(on(i,t))return;o.uniformMatrix4fv(this.addr,!1,t),ln(i,t)}else{if(on(i,r))return;Bg.set(r),o.uniformMatrix4fv(this.addr,!1,Bg),ln(i,r)}}function RT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1i(this.addr,t),i[0]=t)}function CT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2i(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2iv(this.addr,t),ln(i,t)}}function wT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3i(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3iv(this.addr,t),ln(i,t)}}function DT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4i(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4iv(this.addr,t),ln(i,t)}}function UT(o,t){const i=this.cache;i[0]!==t&&(o.uniform1ui(this.addr,t),i[0]=t)}function LT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y)&&(o.uniform2ui(this.addr,t.x,t.y),i[0]=t.x,i[1]=t.y);else{if(on(i,t))return;o.uniform2uiv(this.addr,t),ln(i,t)}}function NT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z)&&(o.uniform3ui(this.addr,t.x,t.y,t.z),i[0]=t.x,i[1]=t.y,i[2]=t.z);else{if(on(i,t))return;o.uniform3uiv(this.addr,t),ln(i,t)}}function OT(o,t){const i=this.cache;if(t.x!==void 0)(i[0]!==t.x||i[1]!==t.y||i[2]!==t.z||i[3]!==t.w)&&(o.uniform4ui(this.addr,t.x,t.y,t.z,t.w),i[0]=t.x,i[1]=t.y,i[2]=t.z,i[3]=t.w);else{if(on(i,t))return;o.uniform4uiv(this.addr,t),ln(i,t)}}function PT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);let u;this.type===o.SAMPLER_2D_SHADOW?(Og.compareFunction=pv,u=Og):u=wv,i.setTexture2D(t||u,l)}function zT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(t||Uv,l)}function BT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(t||Lv,l)}function FT(o,t,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(t||Dv,l)}function IT(o){switch(o){case 5126:return ST;case 35664:return yT;case 35665:return MT;case 35666:return ET;case 35674:return TT;case 35675:return bT;case 35676:return AT;case 5124:case 35670:return RT;case 35667:case 35671:return CT;case 35668:case 35672:return wT;case 35669:case 35673:return DT;case 5125:return UT;case 36294:return LT;case 36295:return NT;case 36296:return OT;case 35678:case 36198:case 36298:case 36306:case 35682:return PT;case 35679:case 36299:case 36307:return zT;case 35680:case 36300:case 36308:case 36293:return BT;case 36289:case 36303:case 36311:case 36292:return FT}}function HT(o,t){o.uniform1fv(this.addr,t)}function GT(o,t){const i=Ts(t,this.size,2);o.uniform2fv(this.addr,i)}function VT(o,t){const i=Ts(t,this.size,3);o.uniform3fv(this.addr,i)}function kT(o,t){const i=Ts(t,this.size,4);o.uniform4fv(this.addr,i)}function XT(o,t){const i=Ts(t,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function WT(o,t){const i=Ts(t,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function qT(o,t){const i=Ts(t,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function YT(o,t){o.uniform1iv(this.addr,t)}function jT(o,t){o.uniform2iv(this.addr,t)}function ZT(o,t){o.uniform3iv(this.addr,t)}function KT(o,t){o.uniform4iv(this.addr,t)}function QT(o,t){o.uniform1uiv(this.addr,t)}function JT(o,t){o.uniform2uiv(this.addr,t)}function $T(o,t){o.uniform3uiv(this.addr,t)}function tb(o,t){o.uniform4uiv(this.addr,t)}function eb(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2D(t[h]||wv,u[h])}function nb(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture3D(t[h]||Uv,u[h])}function ib(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTextureCube(t[h]||Lv,u[h])}function ab(o,t,i){const r=this.cache,l=t.length,u=Dc(i,l);on(r,u)||(o.uniform1iv(this.addr,u),ln(r,u));for(let h=0;h!==l;++h)i.setTexture2DArray(t[h]||Dv,u[h])}function rb(o){switch(o){case 5126:return HT;case 35664:return GT;case 35665:return VT;case 35666:return kT;case 35674:return XT;case 35675:return WT;case 35676:return qT;case 5124:case 35670:return YT;case 35667:case 35671:return jT;case 35668:case 35672:return ZT;case 35669:case 35673:return KT;case 5125:return QT;case 36294:return JT;case 36295:return $T;case 36296:return tb;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return nb;case 35680:case 36300:case 36308:case 36293:return ib;case 36289:case 36303:case 36311:case 36292:return ab}}class sb{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.setValue=IT(i.type)}}class ob{constructor(t,i,r){this.id=t,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=rb(i.type)}}class lb{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,i,r){const l=this.seq;for(let u=0,h=l.length;u!==h;++u){const d=l[u];d.setValue(t,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function Hg(o,t){o.seq.push(t),o.map[t.id]=t}function cb(o,t,i){const r=o.name,l=r.length;for(gh.lastIndex=0;;){const u=gh.exec(r),h=gh.lastIndex;let d=u[1];const m=u[2]==="]",p=u[3];if(m&&(d=d|0),p===void 0||p==="["&&h+2===l){Hg(i,p===void 0?new sb(d,o,t):new ob(d,o,t));break}else{let g=i.map[d];g===void 0&&(g=new lb(d),Hg(i,g)),i=g}}}class Mc{constructor(t,i){this.seq=[],this.map={};const r=t.getProgramParameter(i,t.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const u=t.getActiveUniform(i,l),h=t.getUniformLocation(i,u.name);cb(u,h,this)}}setValue(t,i,r,l){const u=this.map[i];u!==void 0&&u.setValue(t,r,l)}setOptional(t,i,r){const l=i[r];l!==void 0&&this.setValue(t,r,l)}static upload(t,i,r,l){for(let u=0,h=i.length;u!==h;++u){const d=i[u],m=r[d.id];m.needsUpdate!==!1&&d.setValue(t,m.value,l)}}static seqWithValue(t,i){const r=[];for(let l=0,u=t.length;l!==u;++l){const h=t[l];h.id in i&&r.push(h)}return r}}function Gg(o,t,i){const r=o.createShader(t);return o.shaderSource(r,i),o.compileShader(r),r}const ub=37297;let fb=0;function hb(o,t){const i=o.split(`
`),r=[],l=Math.max(t-6,0),u=Math.min(t+6,i.length);for(let h=l;h<u;h++){const d=h+1;r.push(`${d===t?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const Vg=new le;function db(o){Re._getMatrix(Vg,Re.workingColorSpace,o);const t=`mat3( ${Vg.elements.map(i=>i.toFixed(4))} )`;switch(Re.getTransfer(o)){case Ec:return[t,"LinearTransferOETF"];case Oe:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",o),[t,"LinearTransferOETF"]}}function kg(o,t,i){const r=o.getShaderParameter(t,o.COMPILE_STATUS),l=o.getShaderInfoLog(t).trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const h=parseInt(u[1]);return i.toUpperCase()+`

`+l+`

`+hb(o.getShaderSource(t),h)}else return l}function pb(o,t){const i=db(t);return[`vec4 ${o}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}function mb(o,t){let i;switch(t){case mS:i="Linear";break;case _S:i="Reinhard";break;case gS:i="Cineon";break;case vS:i="ACESFilmic";break;case SS:i="AgX";break;case yS:i="Neutral";break;case xS:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const mc=new et;function _b(){Re.getLuminanceCoefficients(mc);const o=mc.x.toFixed(4),t=mc.y.toFixed(4),i=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${o}, ${t}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gb(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Do).join(`
`)}function vb(o){const t=[];for(const i in o){const r=o[i];r!==!1&&t.push("#define "+i+" "+r)}return t.join(`
`)}function xb(o,t){const i={},r=o.getProgramParameter(t,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const u=o.getActiveAttrib(t,l),h=u.name;let d=1;u.type===o.FLOAT_MAT2&&(d=2),u.type===o.FLOAT_MAT3&&(d=3),u.type===o.FLOAT_MAT4&&(d=4),i[h]={type:u.type,location:o.getAttribLocation(t,h),locationSize:d}}return i}function Do(o){return o!==""}function Xg(o,t){const i=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wg(o,t){return o.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sb=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(o){return o.replace(Sb,Mb)}const yb=new Map;function Mb(o,t){let i=ce[t];if(i===void 0){const r=yb.get(t);if(r!==void 0)i=ce[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,r);else throw new Error("Can not resolve #include <"+t+">")}return od(i)}const Eb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qg(o){return o.replace(Eb,Tb)}function Tb(o,t,i,r){let l="";for(let u=parseInt(t);u<parseInt(i);u++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+u+" ]").replace(/UNROLLED_LOOP_INDEX/g,u);return l}function Yg(o){let t=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?t+=`
#define HIGH_PRECISION`:o.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function bb(o){let t="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===ev?t="SHADOWMAP_TYPE_PCF":o.shadowMapType===jx?t="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===ta&&(t="SHADOWMAP_TYPE_VSM"),t}function Ab(o){let t="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case gs:case vs:t="ENVMAP_TYPE_CUBE";break;case Cc:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rb(o){let t="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case vs:t="ENVMAP_MODE_REFRACTION";break}return t}function Cb(o){let t="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case ud:t="ENVMAP_BLENDING_MULTIPLY";break;case dS:t="ENVMAP_BLENDING_MIX";break;case pS:t="ENVMAP_BLENDING_ADD";break}return t}function wb(o){const t=o.envMapCubeUVHeight;if(t===null)return null;const i=Math.log2(t)-2,r=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,i),7*16)),texelHeight:r,maxMip:i}}function Db(o,t,i,r){const l=o.getContext(),u=i.defines;let h=i.vertexShader,d=i.fragmentShader;const m=bb(i),p=Ab(i),_=Rb(i),g=Cb(i),x=wb(i),M=gb(i),E=vb(u),A=l.createProgram();let y,v,P=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(Do).join(`
`),v.length>0&&(v+=`
`)):(y=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+_:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),v=[Yg(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+_:"",i.envMap?"#define "+g:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",i.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==za?"#define TONE_MAPPING":"",i.toneMapping!==za?ce.tonemapping_pars_fragment:"",i.toneMapping!==za?mb("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ce.colorspace_pars_fragment,pb("linearToOutputTexel",i.outputColorSpace),_b(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Do).join(`
`)),h=od(h),h=Xg(h,i),h=Wg(h,i),d=od(d),d=Xg(d,i),d=Wg(d,i),h=qg(h),d=qg(d),i.isRawShaderMaterial!==!0&&(P=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===tg?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===tg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const O=P+y+h,D=P+v+d,H=Gg(l,l.VERTEX_SHADER,O),z=Gg(l,l.FRAGMENT_SHADER,D);l.attachShader(A,H),l.attachShader(A,z),i.index0AttributeName!==void 0?l.bindAttribLocation(A,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(A,0,"position"),l.linkProgram(A);function F(B){if(o.debug.checkShaderErrors){const st=l.getProgramInfoLog(A).trim(),nt=l.getShaderInfoLog(H).trim(),ft=l.getShaderInfoLog(z).trim();let lt=!0,k=!0;if(l.getProgramParameter(A,l.LINK_STATUS)===!1)if(lt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,A,H,z);else{const rt=kg(l,H,"vertex"),Y=kg(l,z,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(A,l.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+st+`
`+rt+`
`+Y)}else st!==""?console.warn("THREE.WebGLProgram: Program Info Log:",st):(nt===""||ft==="")&&(k=!1);k&&(B.diagnostics={runnable:lt,programLog:st,vertexShader:{log:nt,prefix:y},fragmentShader:{log:ft,prefix:v}})}l.deleteShader(H),l.deleteShader(z),G=new Mc(l,A),R=xb(l,A)}let G;this.getUniforms=function(){return G===void 0&&F(this),G};let R;this.getAttributes=function(){return R===void 0&&F(this),R};let b=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=l.getProgramParameter(A,ub)),b},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(A),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=fb++,this.cacheKey=t,this.usedTimes=1,this.program=A,this.vertexShader=H,this.fragmentShader=z,this}let Ub=0;class Lb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const i=t.vertexShader,r=t.fragmentShader,l=this._getShaderStage(i),u=this._getShaderStage(r),h=this._getShaderCacheForMaterial(t);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(u)===!1&&(h.add(u),u.usedTimes++),this}remove(t){const i=this.materialCache.get(t);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const i=this.materialCache;let r=i.get(t);return r===void 0&&(r=new Set,i.set(t,r)),r}_getShaderStage(t){const i=this.shaderCache;let r=i.get(t);return r===void 0&&(r=new Nb(t),i.set(t,r)),r}}class Nb{constructor(t){this.id=Ub++,this.code=t,this.usedTimes=0}}function Ob(o,t,i,r,l,u,h){const d=new vv,m=new Lb,p=new Set,_=[],g=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function A(R){return p.add(R),R===0?"uv":`uv${R}`}function y(R,b,B,st,nt){const ft=st.fog,lt=nt.geometry,k=R.isMeshStandardMaterial?st.environment:null,rt=(R.isMeshStandardMaterial?i:t).get(R.envMap||k),Y=rt&&rt.mapping===Cc?rt.image.height:null,gt=E[R.type];R.precision!==null&&(M=l.getMaxPrecision(R.precision),M!==R.precision&&console.warn("THREE.WebGLProgram.getParameters:",R.precision,"not supported, using",M,"instead."));const U=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,$=U!==void 0?U.length:0;let yt=0;lt.morphAttributes.position!==void 0&&(yt=1),lt.morphAttributes.normal!==void 0&&(yt=2),lt.morphAttributes.color!==void 0&&(yt=3);let At,j,dt,vt;if(gt){const Ee=Ri[gt];At=Ee.vertexShader,j=Ee.fragmentShader}else At=R.vertexShader,j=R.fragmentShader,m.update(R),dt=m.getVertexShaderID(R),vt=m.getFragmentShaderID(R);const Et=o.getRenderTarget(),bt=o.state.buffers.depth.getReversed(),Kt=nt.isInstancedMesh===!0,Pt=nt.isBatchedMesh===!0,Me=!!R.map,Ce=!!R.matcap,ae=!!rt,I=!!R.aoMap,pn=!!R.lightMap,se=!!R.bumpMap,he=!!R.normalMap,kt=!!R.displacementMap,we=!!R.emissiveMap,Xt=!!R.metalnessMap,L=!!R.roughnessMap,T=R.anisotropy>0,it=R.clearcoat>0,ht=R.dispersion>0,St=R.iridescence>0,pt=R.sheen>0,Ht=R.transmission>0,wt=T&&!!R.anisotropyMap,zt=it&&!!R.clearcoatMap,me=it&&!!R.clearcoatNormalMap,Tt=it&&!!R.clearcoatRoughnessMap,Bt=St&&!!R.iridescenceMap,qt=St&&!!R.iridescenceThicknessMap,Gt=pt&&!!R.sheenColorMap,Ft=pt&&!!R.sheenRoughnessMap,re=!!R.specularMap,jt=!!R.specularColorMap,De=!!R.specularIntensityMap,W=Ht&&!!R.transmissionMap,Lt=Ht&&!!R.thicknessMap,ot=!!R.gradientMap,_t=!!R.alphaMap,Ct=R.alphaTest>0,Dt=!!R.alphaHash,$t=!!R.extensions;let He=za;R.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(He=o.toneMapping);const tn={shaderID:gt,shaderType:R.type,shaderName:R.name,vertexShader:At,fragmentShader:j,defines:R.defines,customVertexShaderID:dt,customFragmentShaderID:vt,isRawShaderMaterial:R.isRawShaderMaterial===!0,glslVersion:R.glslVersion,precision:M,batching:Pt,batchingColor:Pt&&nt._colorsTexture!==null,instancing:Kt,instancingColor:Kt&&nt.instanceColor!==null,instancingMorph:Kt&&nt.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:Et===null?o.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ys,alphaToCoverage:!!R.alphaToCoverage,map:Me,matcap:Ce,envMap:ae,envMapMode:ae&&rt.mapping,envMapCubeUVHeight:Y,aoMap:I,lightMap:pn,bumpMap:se,normalMap:he,displacementMap:x&&kt,emissiveMap:we,normalMapObjectSpace:he&&R.normalMapType===bS,normalMapTangentSpace:he&&R.normalMapType===dv,metalnessMap:Xt,roughnessMap:L,anisotropy:T,anisotropyMap:wt,clearcoat:it,clearcoatMap:zt,clearcoatNormalMap:me,clearcoatRoughnessMap:Tt,dispersion:ht,iridescence:St,iridescenceMap:Bt,iridescenceThicknessMap:qt,sheen:pt,sheenColorMap:Gt,sheenRoughnessMap:Ft,specularMap:re,specularColorMap:jt,specularIntensityMap:De,transmission:Ht,transmissionMap:W,thicknessMap:Lt,gradientMap:ot,opaque:R.transparent===!1&&R.blending===ds&&R.alphaToCoverage===!1,alphaMap:_t,alphaTest:Ct,alphaHash:Dt,combine:R.combine,mapUv:Me&&A(R.map.channel),aoMapUv:I&&A(R.aoMap.channel),lightMapUv:pn&&A(R.lightMap.channel),bumpMapUv:se&&A(R.bumpMap.channel),normalMapUv:he&&A(R.normalMap.channel),displacementMapUv:kt&&A(R.displacementMap.channel),emissiveMapUv:we&&A(R.emissiveMap.channel),metalnessMapUv:Xt&&A(R.metalnessMap.channel),roughnessMapUv:L&&A(R.roughnessMap.channel),anisotropyMapUv:wt&&A(R.anisotropyMap.channel),clearcoatMapUv:zt&&A(R.clearcoatMap.channel),clearcoatNormalMapUv:me&&A(R.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Tt&&A(R.clearcoatRoughnessMap.channel),iridescenceMapUv:Bt&&A(R.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&A(R.iridescenceThicknessMap.channel),sheenColorMapUv:Gt&&A(R.sheenColorMap.channel),sheenRoughnessMapUv:Ft&&A(R.sheenRoughnessMap.channel),specularMapUv:re&&A(R.specularMap.channel),specularColorMapUv:jt&&A(R.specularColorMap.channel),specularIntensityMapUv:De&&A(R.specularIntensityMap.channel),transmissionMapUv:W&&A(R.transmissionMap.channel),thicknessMapUv:Lt&&A(R.thicknessMap.channel),alphaMapUv:_t&&A(R.alphaMap.channel),vertexTangents:!!lt.attributes.tangent&&(he||T),vertexColors:R.vertexColors,vertexAlphas:R.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,pointsUvs:nt.isPoints===!0&&!!lt.attributes.uv&&(Me||_t),fog:!!ft,useFog:R.fog===!0,fogExp2:!!ft&&ft.isFogExp2,flatShading:R.flatShading===!0,sizeAttenuation:R.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:bt,skinning:nt.isSkinnedMesh===!0,morphTargets:lt.morphAttributes.position!==void 0,morphNormals:lt.morphAttributes.normal!==void 0,morphColors:lt.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:yt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:R.dithering,shadowMapEnabled:o.shadowMap.enabled&&B.length>0,shadowMapType:o.shadowMap.type,toneMapping:He,decodeVideoTexture:Me&&R.map.isVideoTexture===!0&&Re.getTransfer(R.map.colorSpace)===Oe,decodeVideoTextureEmissive:we&&R.emissiveMap.isVideoTexture===!0&&Re.getTransfer(R.emissiveMap.colorSpace)===Oe,premultipliedAlpha:R.premultipliedAlpha,doubleSided:R.side===ea,flipSided:R.side===In,useDepthPacking:R.depthPacking>=0,depthPacking:R.depthPacking||0,index0AttributeName:R.index0AttributeName,extensionClipCullDistance:$t&&R.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&R.extensions.multiDraw===!0||Pt)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:R.customProgramCacheKey()};return tn.vertexUv1s=p.has(1),tn.vertexUv2s=p.has(2),tn.vertexUv3s=p.has(3),p.clear(),tn}function v(R){const b=[];if(R.shaderID?b.push(R.shaderID):(b.push(R.customVertexShaderID),b.push(R.customFragmentShaderID)),R.defines!==void 0)for(const B in R.defines)b.push(B),b.push(R.defines[B]);return R.isRawShaderMaterial===!1&&(P(b,R),O(b,R),b.push(o.outputColorSpace)),b.push(R.customProgramCacheKey),b.join()}function P(R,b){R.push(b.precision),R.push(b.outputColorSpace),R.push(b.envMapMode),R.push(b.envMapCubeUVHeight),R.push(b.mapUv),R.push(b.alphaMapUv),R.push(b.lightMapUv),R.push(b.aoMapUv),R.push(b.bumpMapUv),R.push(b.normalMapUv),R.push(b.displacementMapUv),R.push(b.emissiveMapUv),R.push(b.metalnessMapUv),R.push(b.roughnessMapUv),R.push(b.anisotropyMapUv),R.push(b.clearcoatMapUv),R.push(b.clearcoatNormalMapUv),R.push(b.clearcoatRoughnessMapUv),R.push(b.iridescenceMapUv),R.push(b.iridescenceThicknessMapUv),R.push(b.sheenColorMapUv),R.push(b.sheenRoughnessMapUv),R.push(b.specularMapUv),R.push(b.specularColorMapUv),R.push(b.specularIntensityMapUv),R.push(b.transmissionMapUv),R.push(b.thicknessMapUv),R.push(b.combine),R.push(b.fogExp2),R.push(b.sizeAttenuation),R.push(b.morphTargetsCount),R.push(b.morphAttributeCount),R.push(b.numDirLights),R.push(b.numPointLights),R.push(b.numSpotLights),R.push(b.numSpotLightMaps),R.push(b.numHemiLights),R.push(b.numRectAreaLights),R.push(b.numDirLightShadows),R.push(b.numPointLightShadows),R.push(b.numSpotLightShadows),R.push(b.numSpotLightShadowsWithMaps),R.push(b.numLightProbes),R.push(b.shadowMapType),R.push(b.toneMapping),R.push(b.numClippingPlanes),R.push(b.numClipIntersection),R.push(b.depthPacking)}function O(R,b){d.disableAll(),b.supportsVertexTextures&&d.enable(0),b.instancing&&d.enable(1),b.instancingColor&&d.enable(2),b.instancingMorph&&d.enable(3),b.matcap&&d.enable(4),b.envMap&&d.enable(5),b.normalMapObjectSpace&&d.enable(6),b.normalMapTangentSpace&&d.enable(7),b.clearcoat&&d.enable(8),b.iridescence&&d.enable(9),b.alphaTest&&d.enable(10),b.vertexColors&&d.enable(11),b.vertexAlphas&&d.enable(12),b.vertexUv1s&&d.enable(13),b.vertexUv2s&&d.enable(14),b.vertexUv3s&&d.enable(15),b.vertexTangents&&d.enable(16),b.anisotropy&&d.enable(17),b.alphaHash&&d.enable(18),b.batching&&d.enable(19),b.dispersion&&d.enable(20),b.batchingColor&&d.enable(21),R.push(d.mask),d.disableAll(),b.fog&&d.enable(0),b.useFog&&d.enable(1),b.flatShading&&d.enable(2),b.logarithmicDepthBuffer&&d.enable(3),b.reverseDepthBuffer&&d.enable(4),b.skinning&&d.enable(5),b.morphTargets&&d.enable(6),b.morphNormals&&d.enable(7),b.morphColors&&d.enable(8),b.premultipliedAlpha&&d.enable(9),b.shadowMapEnabled&&d.enable(10),b.doubleSided&&d.enable(11),b.flipSided&&d.enable(12),b.useDepthPacking&&d.enable(13),b.dithering&&d.enable(14),b.transmission&&d.enable(15),b.sheen&&d.enable(16),b.opaque&&d.enable(17),b.pointsUvs&&d.enable(18),b.decodeVideoTexture&&d.enable(19),b.decodeVideoTextureEmissive&&d.enable(20),b.alphaToCoverage&&d.enable(21),R.push(d.mask)}function D(R){const b=E[R.type];let B;if(b){const st=Ri[b];B=ny.clone(st.uniforms)}else B=R.uniforms;return B}function H(R,b){let B;for(let st=0,nt=_.length;st<nt;st++){const ft=_[st];if(ft.cacheKey===b){B=ft,++B.usedTimes;break}}return B===void 0&&(B=new Db(o,b,R,u),_.push(B)),B}function z(R){if(--R.usedTimes===0){const b=_.indexOf(R);_[b]=_[_.length-1],_.pop(),R.destroy()}}function F(R){m.remove(R)}function G(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:D,acquireProgram:H,releaseProgram:z,releaseShaderCache:F,programs:_,dispose:G}}function Pb(){let o=new WeakMap;function t(h){return o.has(h)}function i(h){let d=o.get(h);return d===void 0&&(d={},o.set(h,d)),d}function r(h){o.delete(h)}function l(h,d,m){o.get(h)[d]=m}function u(){o=new WeakMap}return{has:t,get:i,remove:r,update:l,dispose:u}}function zb(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.material.id!==t.material.id?o.material.id-t.material.id:o.z!==t.z?o.z-t.z:o.id-t.id}function jg(o,t){return o.groupOrder!==t.groupOrder?o.groupOrder-t.groupOrder:o.renderOrder!==t.renderOrder?o.renderOrder-t.renderOrder:o.z!==t.z?t.z-o.z:o.id-t.id}function Zg(){const o=[];let t=0;const i=[],r=[],l=[];function u(){t=0,i.length=0,r.length=0,l.length=0}function h(g,x,M,E,A,y){let v=o[t];return v===void 0?(v={id:g.id,object:g,geometry:x,material:M,groupOrder:E,renderOrder:g.renderOrder,z:A,group:y},o[t]=v):(v.id=g.id,v.object=g,v.geometry=x,v.material=M,v.groupOrder=E,v.renderOrder=g.renderOrder,v.z=A,v.group=y),t++,v}function d(g,x,M,E,A,y){const v=h(g,x,M,E,A,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(g,x,M,E,A,y){const v=h(g,x,M,E,A,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(g,x){i.length>1&&i.sort(g||zb),r.length>1&&r.sort(x||jg),l.length>1&&l.sort(x||jg)}function _(){for(let g=t,x=o.length;g<x;g++){const M=o[g];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:u,push:d,unshift:m,finish:_,sort:p}}function Bb(){let o=new WeakMap;function t(r,l){const u=o.get(r);let h;return u===void 0?(h=new Zg,o.set(r,[h])):l>=u.length?(h=new Zg,u.push(h)):h=u[l],h}function i(){o=new WeakMap}return{get:t,dispose:i}}function Fb(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={direction:new et,color:new fe};break;case"SpotLight":i={position:new et,direction:new et,color:new fe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new et,color:new fe,distance:0,decay:0};break;case"HemisphereLight":i={direction:new et,skyColor:new fe,groundColor:new fe};break;case"RectAreaLight":i={color:new fe,position:new et,halfWidth:new et,halfHeight:new et};break}return o[t.id]=i,i}}}function Ib(){const o={};return{get:function(t){if(o[t.id]!==void 0)return o[t.id];let i;switch(t.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[t.id]=i,i}}}let Hb=0;function Gb(o,t){return(t.castShadow?2:0)-(o.castShadow?2:0)+(t.map?1:0)-(o.map?1:0)}function Vb(o){const t=new Fb,i=Ib(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new et);const l=new et,u=new Ye,h=new Ye;function d(p){let _=0,g=0,x=0;for(let R=0;R<9;R++)r.probe[R].set(0,0,0);let M=0,E=0,A=0,y=0,v=0,P=0,O=0,D=0,H=0,z=0,F=0;p.sort(Gb);for(let R=0,b=p.length;R<b;R++){const B=p[R],st=B.color,nt=B.intensity,ft=B.distance,lt=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)_+=st.r*nt,g+=st.g*nt,x+=st.b*nt;else if(B.isLightProbe){for(let k=0;k<9;k++)r.probe[k].addScaledVector(B.sh.coefficients[k],nt);F++}else if(B.isDirectionalLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const rt=B.shadow,Y=i.get(B);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,r.directionalShadow[M]=Y,r.directionalShadowMap[M]=lt,r.directionalShadowMatrix[M]=B.shadow.matrix,P++}r.directional[M]=k,M++}else if(B.isSpotLight){const k=t.get(B);k.position.setFromMatrixPosition(B.matrixWorld),k.color.copy(st).multiplyScalar(nt),k.distance=ft,k.coneCos=Math.cos(B.angle),k.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),k.decay=B.decay,r.spot[A]=k;const rt=B.shadow;if(B.map&&(r.spotLightMap[H]=B.map,H++,rt.updateMatrices(B),B.castShadow&&z++),r.spotLightMatrix[A]=rt.matrix,B.castShadow){const Y=i.get(B);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,r.spotShadow[A]=Y,r.spotShadowMap[A]=lt,D++}A++}else if(B.isRectAreaLight){const k=t.get(B);k.color.copy(st).multiplyScalar(nt),k.halfWidth.set(B.width*.5,0,0),k.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=k,y++}else if(B.isPointLight){const k=t.get(B);if(k.color.copy(B.color).multiplyScalar(B.intensity),k.distance=B.distance,k.decay=B.decay,B.castShadow){const rt=B.shadow,Y=i.get(B);Y.shadowIntensity=rt.intensity,Y.shadowBias=rt.bias,Y.shadowNormalBias=rt.normalBias,Y.shadowRadius=rt.radius,Y.shadowMapSize=rt.mapSize,Y.shadowCameraNear=rt.camera.near,Y.shadowCameraFar=rt.camera.far,r.pointShadow[E]=Y,r.pointShadowMap[E]=lt,r.pointShadowMatrix[E]=B.shadow.matrix,O++}r.point[E]=k,E++}else if(B.isHemisphereLight){const k=t.get(B);k.skyColor.copy(B.color).multiplyScalar(nt),k.groundColor.copy(B.groundColor).multiplyScalar(nt),r.hemi[v]=k,v++}}y>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ut.LTC_FLOAT_1,r.rectAreaLTC2=Ut.LTC_FLOAT_2):(r.rectAreaLTC1=Ut.LTC_HALF_1,r.rectAreaLTC2=Ut.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=g,r.ambient[2]=x;const G=r.hash;(G.directionalLength!==M||G.pointLength!==E||G.spotLength!==A||G.rectAreaLength!==y||G.hemiLength!==v||G.numDirectionalShadows!==P||G.numPointShadows!==O||G.numSpotShadows!==D||G.numSpotMaps!==H||G.numLightProbes!==F)&&(r.directional.length=M,r.spot.length=A,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=P,r.directionalShadowMap.length=P,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=P,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=D+H-z,r.spotLightMap.length=H,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,G.directionalLength=M,G.pointLength=E,G.spotLength=A,G.rectAreaLength=y,G.hemiLength=v,G.numDirectionalShadows=P,G.numPointShadows=O,G.numSpotShadows=D,G.numSpotMaps=H,G.numLightProbes=F,r.version=Hb++)}function m(p,_){let g=0,x=0,M=0,E=0,A=0;const y=_.matrixWorldInverse;for(let v=0,P=p.length;v<P;v++){const O=p[v];if(O.isDirectionalLight){const D=r.directional[g];D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),g++}else if(O.isSpotLight){const D=r.spot[M];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),D.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),D.direction.sub(l),D.direction.transformDirection(y),M++}else if(O.isRectAreaLight){const D=r.rectArea[E];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),h.identity(),u.copy(O.matrixWorld),u.premultiply(y),h.extractRotation(u),D.halfWidth.set(O.width*.5,0,0),D.halfHeight.set(0,O.height*.5,0),D.halfWidth.applyMatrix4(h),D.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const D=r.point[x];D.position.setFromMatrixPosition(O.matrixWorld),D.position.applyMatrix4(y),x++}else if(O.isHemisphereLight){const D=r.hemi[A];D.direction.setFromMatrixPosition(O.matrixWorld),D.direction.transformDirection(y),A++}}}return{setup:d,setupView:m,state:r}}function Kg(o){const t=new Vb(o),i=[],r=[];function l(_){p.camera=_,i.length=0,r.length=0}function u(_){i.push(_)}function h(_){r.push(_)}function d(){t.setup(i)}function m(_){t.setupView(i,_)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:t,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:d,setupLightsView:m,pushLight:u,pushShadow:h}}function kb(o){let t=new WeakMap;function i(l,u=0){const h=t.get(l);let d;return h===void 0?(d=new Kg(o),t.set(l,[d])):u>=h.length?(d=new Kg(o),h.push(d)):d=h[u],d}function r(){t=new WeakMap}return{get:i,dispose:r}}const Xb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Wb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function qb(o,t,i){let r=new Av;const l=new Pe,u=new Pe,h=new Ze,d=new my({depthPacking:TS}),m=new _y,p={},_=i.maxTextureSize,g={[Ba]:In,[In]:Ba,[ea]:ea},x=new Fa({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:Xb,fragmentShader:Wb}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const E=new li;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new xi(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ev;let v=this.type;this.render=function(z,F,G){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||z.length===0)return;const R=o.getRenderTarget(),b=o.getActiveCubeFace(),B=o.getActiveMipmapLevel(),st=o.state;st.setBlending(Pa),st.buffers.color.setClear(1,1,1,1),st.buffers.depth.setTest(!0),st.setScissorTest(!1);const nt=v!==ta&&this.type===ta,ft=v===ta&&this.type!==ta;for(let lt=0,k=z.length;lt<k;lt++){const rt=z[lt],Y=rt.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",rt,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;l.copy(Y.mapSize);const gt=Y.getFrameExtents();if(l.multiply(gt),u.copy(Y.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(u.x=Math.floor(_/gt.x),l.x=u.x*gt.x,Y.mapSize.x=u.x),l.y>_&&(u.y=Math.floor(_/gt.y),l.y=u.y*gt.y,Y.mapSize.y=u.y)),Y.map===null||nt===!0||ft===!0){const $=this.type!==ta?{minFilter:Si,magFilter:Si}:{};Y.map!==null&&Y.map.dispose(),Y.map=new vr(l.x,l.y,$),Y.map.texture.name=rt.name+".shadowMap",Y.camera.updateProjectionMatrix()}o.setRenderTarget(Y.map),o.clear();const U=Y.getViewportCount();for(let $=0;$<U;$++){const yt=Y.getViewport($);h.set(u.x*yt.x,u.y*yt.y,u.x*yt.z,u.y*yt.w),st.viewport(h),Y.updateMatrices(rt,$),r=Y.getFrustum(),D(F,G,Y.camera,rt,this.type)}Y.isPointLightShadow!==!0&&this.type===ta&&P(Y,G),Y.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(R,b,B)};function P(z,F){const G=t.update(A);x.defines.VSM_SAMPLES!==z.blurSamples&&(x.defines.VSM_SAMPLES=z.blurSamples,M.defines.VSM_SAMPLES=z.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new vr(l.x,l.y)),x.uniforms.shadow_pass.value=z.map.texture,x.uniforms.resolution.value=z.mapSize,x.uniforms.radius.value=z.radius,o.setRenderTarget(z.mapPass),o.clear(),o.renderBufferDirect(F,null,G,x,A,null),M.uniforms.shadow_pass.value=z.mapPass.texture,M.uniforms.resolution.value=z.mapSize,M.uniforms.radius.value=z.radius,o.setRenderTarget(z.map),o.clear(),o.renderBufferDirect(F,null,G,M,A,null)}function O(z,F,G,R){let b=null;const B=G.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(B!==void 0)b=B;else if(b=G.isPointLight===!0?m:d,o.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0){const st=b.uuid,nt=F.uuid;let ft=p[st];ft===void 0&&(ft={},p[st]=ft);let lt=ft[nt];lt===void 0&&(lt=b.clone(),ft[nt]=lt,F.addEventListener("dispose",H)),b=lt}if(b.visible=F.visible,b.wireframe=F.wireframe,R===ta?b.side=F.shadowSide!==null?F.shadowSide:F.side:b.side=F.shadowSide!==null?F.shadowSide:g[F.side],b.alphaMap=F.alphaMap,b.alphaTest=F.alphaTest,b.map=F.map,b.clipShadows=F.clipShadows,b.clippingPlanes=F.clippingPlanes,b.clipIntersection=F.clipIntersection,b.displacementMap=F.displacementMap,b.displacementScale=F.displacementScale,b.displacementBias=F.displacementBias,b.wireframeLinewidth=F.wireframeLinewidth,b.linewidth=F.linewidth,G.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const st=o.properties.get(b);st.light=G}return b}function D(z,F,G,R,b){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&b===ta)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,z.matrixWorld);const nt=t.update(z),ft=z.material;if(Array.isArray(ft)){const lt=nt.groups;for(let k=0,rt=lt.length;k<rt;k++){const Y=lt[k],gt=ft[Y.materialIndex];if(gt&&gt.visible){const U=O(z,gt,R,b);z.onBeforeShadow(o,z,F,G,nt,U,Y),o.renderBufferDirect(G,null,nt,U,z,Y),z.onAfterShadow(o,z,F,G,nt,U,Y)}}}else if(ft.visible){const lt=O(z,ft,R,b);z.onBeforeShadow(o,z,F,G,nt,lt,null),o.renderBufferDirect(G,null,nt,lt,z,null),z.onAfterShadow(o,z,F,G,nt,lt,null)}}const st=z.children;for(let nt=0,ft=st.length;nt<ft;nt++)D(st[nt],F,G,R,b)}function H(z){z.target.removeEventListener("dispose",H);for(const G in p){const R=p[G],b=z.target.uuid;b in R&&(R[b].dispose(),delete R[b])}}}const Yb={[yh]:Mh,[Eh]:Ah,[Th]:Rh,[_s]:bh,[Mh]:yh,[Ah]:Eh,[Rh]:Th,[bh]:_s};function jb(o,t){function i(){let W=!1;const Lt=new Ze;let ot=null;const _t=new Ze(0,0,0,0);return{setMask:function(Ct){ot!==Ct&&!W&&(o.colorMask(Ct,Ct,Ct,Ct),ot=Ct)},setLocked:function(Ct){W=Ct},setClear:function(Ct,Dt,$t,He,tn){tn===!0&&(Ct*=He,Dt*=He,$t*=He),Lt.set(Ct,Dt,$t,He),_t.equals(Lt)===!1&&(o.clearColor(Ct,Dt,$t,He),_t.copy(Lt))},reset:function(){W=!1,ot=null,_t.set(-1,0,0,0)}}}function r(){let W=!1,Lt=!1,ot=null,_t=null,Ct=null;return{setReversed:function(Dt){if(Lt!==Dt){const $t=t.get("EXT_clip_control");Lt?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const He=Ct;Ct=null,this.setClear(He)}Lt=Dt},getReversed:function(){return Lt},setTest:function(Dt){Dt?Et(o.DEPTH_TEST):bt(o.DEPTH_TEST)},setMask:function(Dt){ot!==Dt&&!W&&(o.depthMask(Dt),ot=Dt)},setFunc:function(Dt){if(Lt&&(Dt=Yb[Dt]),_t!==Dt){switch(Dt){case yh:o.depthFunc(o.NEVER);break;case Mh:o.depthFunc(o.ALWAYS);break;case Eh:o.depthFunc(o.LESS);break;case _s:o.depthFunc(o.LEQUAL);break;case Th:o.depthFunc(o.EQUAL);break;case bh:o.depthFunc(o.GEQUAL);break;case Ah:o.depthFunc(o.GREATER);break;case Rh:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}_t=Dt}},setLocked:function(Dt){W=Dt},setClear:function(Dt){Ct!==Dt&&(Lt&&(Dt=1-Dt),o.clearDepth(Dt),Ct=Dt)},reset:function(){W=!1,ot=null,_t=null,Ct=null,Lt=!1}}}function l(){let W=!1,Lt=null,ot=null,_t=null,Ct=null,Dt=null,$t=null,He=null,tn=null;return{setTest:function(Ee){W||(Ee?Et(o.STENCIL_TEST):bt(o.STENCIL_TEST))},setMask:function(Ee){Lt!==Ee&&!W&&(o.stencilMask(Ee),Lt=Ee)},setFunc:function(Ee,bn,An){(ot!==Ee||_t!==bn||Ct!==An)&&(o.stencilFunc(Ee,bn,An),ot=Ee,_t=bn,Ct=An)},setOp:function(Ee,bn,An){(Dt!==Ee||$t!==bn||He!==An)&&(o.stencilOp(Ee,bn,An),Dt=Ee,$t=bn,He=An)},setLocked:function(Ee){W=Ee},setClear:function(Ee){tn!==Ee&&(o.clearStencil(Ee),tn=Ee)},reset:function(){W=!1,Lt=null,ot=null,_t=null,Ct=null,Dt=null,$t=null,He=null,tn=null}}}const u=new i,h=new r,d=new l,m=new WeakMap,p=new WeakMap;let _={},g={},x=new WeakMap,M=[],E=null,A=!1,y=null,v=null,P=null,O=null,D=null,H=null,z=null,F=new fe(0,0,0),G=0,R=!1,b=null,B=null,st=null,nt=null,ft=null;const lt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,rt=0;const Y=o.getParameter(o.VERSION);Y.indexOf("WebGL")!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Y)[1]),k=rt>=1):Y.indexOf("OpenGL ES")!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),k=rt>=2);let gt=null,U={};const $=o.getParameter(o.SCISSOR_BOX),yt=o.getParameter(o.VIEWPORT),At=new Ze().fromArray($),j=new Ze().fromArray(yt);function dt(W,Lt,ot,_t){const Ct=new Uint8Array(4),Dt=o.createTexture();o.bindTexture(W,Dt),o.texParameteri(W,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(W,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let $t=0;$t<ot;$t++)W===o.TEXTURE_3D||W===o.TEXTURE_2D_ARRAY?o.texImage3D(Lt,0,o.RGBA,1,1,_t,0,o.RGBA,o.UNSIGNED_BYTE,Ct):o.texImage2D(Lt+$t,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ct);return Dt}const vt={};vt[o.TEXTURE_2D]=dt(o.TEXTURE_2D,o.TEXTURE_2D,1),vt[o.TEXTURE_CUBE_MAP]=dt(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),vt[o.TEXTURE_2D_ARRAY]=dt(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),vt[o.TEXTURE_3D]=dt(o.TEXTURE_3D,o.TEXTURE_3D,1,1),u.setClear(0,0,0,1),h.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),h.setFunc(_s),se(!1),he(j_),Et(o.CULL_FACE),I(Pa);function Et(W){_[W]!==!0&&(o.enable(W),_[W]=!0)}function bt(W){_[W]!==!1&&(o.disable(W),_[W]=!1)}function Kt(W,Lt){return g[W]!==Lt?(o.bindFramebuffer(W,Lt),g[W]=Lt,W===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Lt),W===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Pt(W,Lt){let ot=M,_t=!1;if(W){ot=x.get(Lt),ot===void 0&&(ot=[],x.set(Lt,ot));const Ct=W.textures;if(ot.length!==Ct.length||ot[0]!==o.COLOR_ATTACHMENT0){for(let Dt=0,$t=Ct.length;Dt<$t;Dt++)ot[Dt]=o.COLOR_ATTACHMENT0+Dt;ot.length=Ct.length,_t=!0}}else ot[0]!==o.BACK&&(ot[0]=o.BACK,_t=!0);_t&&o.drawBuffers(ot)}function Me(W){return E!==W?(o.useProgram(W),E=W,!0):!1}const Ce={[dr]:o.FUNC_ADD,[Kx]:o.FUNC_SUBTRACT,[Qx]:o.FUNC_REVERSE_SUBTRACT};Ce[Jx]=o.MIN,Ce[$x]=o.MAX;const ae={[tS]:o.ZERO,[eS]:o.ONE,[nS]:o.SRC_COLOR,[xh]:o.SRC_ALPHA,[lS]:o.SRC_ALPHA_SATURATE,[sS]:o.DST_COLOR,[aS]:o.DST_ALPHA,[iS]:o.ONE_MINUS_SRC_COLOR,[Sh]:o.ONE_MINUS_SRC_ALPHA,[oS]:o.ONE_MINUS_DST_COLOR,[rS]:o.ONE_MINUS_DST_ALPHA,[cS]:o.CONSTANT_COLOR,[uS]:o.ONE_MINUS_CONSTANT_COLOR,[fS]:o.CONSTANT_ALPHA,[hS]:o.ONE_MINUS_CONSTANT_ALPHA};function I(W,Lt,ot,_t,Ct,Dt,$t,He,tn,Ee){if(W===Pa){A===!0&&(bt(o.BLEND),A=!1);return}if(A===!1&&(Et(o.BLEND),A=!0),W!==Zx){if(W!==y||Ee!==R){if((v!==dr||D!==dr)&&(o.blendEquation(o.FUNC_ADD),v=dr,D=dr),Ee)switch(W){case ds:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Z_:o.blendFunc(o.ONE,o.ONE);break;case K_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Q_:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case ds:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Z_:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case K_:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case Q_:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}P=null,O=null,H=null,z=null,F.set(0,0,0),G=0,y=W,R=Ee}return}Ct=Ct||Lt,Dt=Dt||ot,$t=$t||_t,(Lt!==v||Ct!==D)&&(o.blendEquationSeparate(Ce[Lt],Ce[Ct]),v=Lt,D=Ct),(ot!==P||_t!==O||Dt!==H||$t!==z)&&(o.blendFuncSeparate(ae[ot],ae[_t],ae[Dt],ae[$t]),P=ot,O=_t,H=Dt,z=$t),(He.equals(F)===!1||tn!==G)&&(o.blendColor(He.r,He.g,He.b,tn),F.copy(He),G=tn),y=W,R=!1}function pn(W,Lt){W.side===ea?bt(o.CULL_FACE):Et(o.CULL_FACE);let ot=W.side===In;Lt&&(ot=!ot),se(ot),W.blending===ds&&W.transparent===!1?I(Pa):I(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),h.setFunc(W.depthFunc),h.setTest(W.depthTest),h.setMask(W.depthWrite),u.setMask(W.colorWrite);const _t=W.stencilWrite;d.setTest(_t),_t&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),we(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):bt(o.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){b!==W&&(W?o.frontFace(o.CW):o.frontFace(o.CCW),b=W)}function he(W){W!==qx?(Et(o.CULL_FACE),W!==B&&(W===j_?o.cullFace(o.BACK):W===Yx?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):bt(o.CULL_FACE),B=W}function kt(W){W!==st&&(k&&o.lineWidth(W),st=W)}function we(W,Lt,ot){W?(Et(o.POLYGON_OFFSET_FILL),(nt!==Lt||ft!==ot)&&(o.polygonOffset(Lt,ot),nt=Lt,ft=ot)):bt(o.POLYGON_OFFSET_FILL)}function Xt(W){W?Et(o.SCISSOR_TEST):bt(o.SCISSOR_TEST)}function L(W){W===void 0&&(W=o.TEXTURE0+lt-1),gt!==W&&(o.activeTexture(W),gt=W)}function T(W,Lt,ot){ot===void 0&&(gt===null?ot=o.TEXTURE0+lt-1:ot=gt);let _t=U[ot];_t===void 0&&(_t={type:void 0,texture:void 0},U[ot]=_t),(_t.type!==W||_t.texture!==Lt)&&(gt!==ot&&(o.activeTexture(ot),gt=ot),o.bindTexture(W,Lt||vt[W]),_t.type=W,_t.texture=Lt)}function it(){const W=U[gt];W!==void 0&&W.type!==void 0&&(o.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ht(){try{o.compressedTexImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function St(){try{o.compressedTexImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{o.texSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ht(){try{o.texSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function wt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function me(){try{o.texStorage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Tt(){try{o.texStorage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Bt(){try{o.texImage2D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Gt(W){At.equals(W)===!1&&(o.scissor(W.x,W.y,W.z,W.w),At.copy(W))}function Ft(W){j.equals(W)===!1&&(o.viewport(W.x,W.y,W.z,W.w),j.copy(W))}function re(W,Lt){let ot=p.get(Lt);ot===void 0&&(ot=new WeakMap,p.set(Lt,ot));let _t=ot.get(W);_t===void 0&&(_t=o.getUniformBlockIndex(Lt,W.name),ot.set(W,_t))}function jt(W,Lt){const _t=p.get(Lt).get(W);m.get(Lt)!==_t&&(o.uniformBlockBinding(Lt,_t,W.__bindingPointIndex),m.set(Lt,_t))}function De(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),h.setReversed(!1),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),_={},gt=null,U={},g={},x=new WeakMap,M=[],E=null,A=!1,y=null,v=null,P=null,O=null,D=null,H=null,z=null,F=new fe(0,0,0),G=0,R=!1,b=null,B=null,st=null,nt=null,ft=null,At.set(0,0,o.canvas.width,o.canvas.height),j.set(0,0,o.canvas.width,o.canvas.height),u.reset(),h.reset(),d.reset()}return{buffers:{color:u,depth:h,stencil:d},enable:Et,disable:bt,bindFramebuffer:Kt,drawBuffers:Pt,useProgram:Me,setBlending:I,setMaterial:pn,setFlipSided:se,setCullFace:he,setLineWidth:kt,setPolygonOffset:we,setScissorTest:Xt,activeTexture:L,bindTexture:T,unbindTexture:it,compressedTexImage2D:ht,compressedTexImage3D:St,texImage2D:Bt,texImage3D:qt,updateUBOMapping:re,uniformBlockBinding:jt,texStorage2D:me,texStorage3D:Tt,texSubImage2D:pt,texSubImage3D:Ht,compressedTexSubImage2D:wt,compressedTexSubImage3D:zt,scissor:Gt,viewport:Ft,reset:De}}function Zb(o,t,i,r,l,u,h){const d=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Pe,_=new WeakMap;let g;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,T){return M?new OffscreenCanvas(L,T):bc("canvas")}function A(L,T,it){let ht=1;const St=Xt(L);if((St.width>it||St.height>it)&&(ht=it/Math.max(St.width,St.height)),ht<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const pt=Math.floor(ht*St.width),Ht=Math.floor(ht*St.height);g===void 0&&(g=E(pt,Ht));const wt=T?E(pt,Ht):g;return wt.width=pt,wt.height=Ht,wt.getContext("2d").drawImage(L,0,0,pt,Ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+pt+"x"+Ht+")."),wt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){o.generateMipmap(L)}function P(L){return L.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?o.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?o.TEXTURE_2D_ARRAY:o.TEXTURE_2D}function O(L,T,it,ht,St=!1){if(L!==null){if(o[L]!==void 0)return o[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let pt=T;if(T===o.RED&&(it===o.FLOAT&&(pt=o.R32F),it===o.HALF_FLOAT&&(pt=o.R16F),it===o.UNSIGNED_BYTE&&(pt=o.R8)),T===o.RED_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.R8UI),it===o.UNSIGNED_SHORT&&(pt=o.R16UI),it===o.UNSIGNED_INT&&(pt=o.R32UI),it===o.BYTE&&(pt=o.R8I),it===o.SHORT&&(pt=o.R16I),it===o.INT&&(pt=o.R32I)),T===o.RG&&(it===o.FLOAT&&(pt=o.RG32F),it===o.HALF_FLOAT&&(pt=o.RG16F),it===o.UNSIGNED_BYTE&&(pt=o.RG8)),T===o.RG_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RG8UI),it===o.UNSIGNED_SHORT&&(pt=o.RG16UI),it===o.UNSIGNED_INT&&(pt=o.RG32UI),it===o.BYTE&&(pt=o.RG8I),it===o.SHORT&&(pt=o.RG16I),it===o.INT&&(pt=o.RG32I)),T===o.RGB_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGB8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGB16UI),it===o.UNSIGNED_INT&&(pt=o.RGB32UI),it===o.BYTE&&(pt=o.RGB8I),it===o.SHORT&&(pt=o.RGB16I),it===o.INT&&(pt=o.RGB32I)),T===o.RGBA_INTEGER&&(it===o.UNSIGNED_BYTE&&(pt=o.RGBA8UI),it===o.UNSIGNED_SHORT&&(pt=o.RGBA16UI),it===o.UNSIGNED_INT&&(pt=o.RGBA32UI),it===o.BYTE&&(pt=o.RGBA8I),it===o.SHORT&&(pt=o.RGBA16I),it===o.INT&&(pt=o.RGBA32I)),T===o.RGB&&it===o.UNSIGNED_INT_5_9_9_9_REV&&(pt=o.RGB9_E5),T===o.RGBA){const Ht=St?Ec:Re.getTransfer(ht);it===o.FLOAT&&(pt=o.RGBA32F),it===o.HALF_FLOAT&&(pt=o.RGBA16F),it===o.UNSIGNED_BYTE&&(pt=Ht===Oe?o.SRGB8_ALPHA8:o.RGBA8),it===o.UNSIGNED_SHORT_4_4_4_4&&(pt=o.RGBA4),it===o.UNSIGNED_SHORT_5_5_5_1&&(pt=o.RGB5_A1)}return(pt===o.R16F||pt===o.R32F||pt===o.RG16F||pt===o.RG32F||pt===o.RGBA16F||pt===o.RGBA32F)&&t.get("EXT_color_buffer_float"),pt}function D(L,T){let it;return L?T===null||T===gr||T===xs?it=o.DEPTH24_STENCIL8:T===na?it=o.DEPTH32F_STENCIL8:T===Lo&&(it=o.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===gr||T===xs?it=o.DEPTH_COMPONENT24:T===na?it=o.DEPTH_COMPONENT32F:T===Lo&&(it=o.DEPTH_COMPONENT16),it}function H(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==Si&&L.minFilter!==Ci?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function z(L){const T=L.target;T.removeEventListener("dispose",z),G(T),T.isVideoTexture&&_.delete(T)}function F(L){const T=L.target;T.removeEventListener("dispose",F),b(T)}function G(L){const T=r.get(L);if(T.__webglInit===void 0)return;const it=L.source,ht=x.get(it);if(ht){const St=ht[T.__cacheKey];St.usedTimes--,St.usedTimes===0&&R(L),Object.keys(ht).length===0&&x.delete(it)}r.remove(L)}function R(L){const T=r.get(L);o.deleteTexture(T.__webglTexture);const it=L.source,ht=x.get(it);delete ht[T.__cacheKey],h.memory.textures--}function b(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let ht=0;ht<6;ht++){if(Array.isArray(T.__webglFramebuffer[ht]))for(let St=0;St<T.__webglFramebuffer[ht].length;St++)o.deleteFramebuffer(T.__webglFramebuffer[ht][St]);else o.deleteFramebuffer(T.__webglFramebuffer[ht]);T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer[ht])}else{if(Array.isArray(T.__webglFramebuffer))for(let ht=0;ht<T.__webglFramebuffer.length;ht++)o.deleteFramebuffer(T.__webglFramebuffer[ht]);else o.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&o.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&o.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ht=0;ht<T.__webglColorRenderbuffer.length;ht++)T.__webglColorRenderbuffer[ht]&&o.deleteRenderbuffer(T.__webglColorRenderbuffer[ht]);T.__webglDepthRenderbuffer&&o.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const it=L.textures;for(let ht=0,St=it.length;ht<St;ht++){const pt=r.get(it[ht]);pt.__webglTexture&&(o.deleteTexture(pt.__webglTexture),h.memory.textures--),r.remove(it[ht])}r.remove(L)}let B=0;function st(){B=0}function nt(){const L=B;return L>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+l.maxTextures),B+=1,L}function ft(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function lt(L,T){const it=r.get(L);if(L.isVideoTexture&&kt(L),L.isRenderTargetTexture===!1&&L.version>0&&it.__version!==L.version){const ht=L.image;if(ht===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ht.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(it,L,T);return}}i.bindTexture(o.TEXTURE_2D,it.__webglTexture,o.TEXTURE0+T)}function k(L,T){const it=r.get(L);if(L.version>0&&it.__version!==L.version){j(it,L,T);return}i.bindTexture(o.TEXTURE_2D_ARRAY,it.__webglTexture,o.TEXTURE0+T)}function rt(L,T){const it=r.get(L);if(L.version>0&&it.__version!==L.version){j(it,L,T);return}i.bindTexture(o.TEXTURE_3D,it.__webglTexture,o.TEXTURE0+T)}function Y(L,T){const it=r.get(L);if(L.version>0&&it.__version!==L.version){dt(it,L,T);return}i.bindTexture(o.TEXTURE_CUBE_MAP,it.__webglTexture,o.TEXTURE0+T)}const gt={[Dh]:o.REPEAT,[mr]:o.CLAMP_TO_EDGE,[Uh]:o.MIRRORED_REPEAT},U={[Si]:o.NEAREST,[MS]:o.NEAREST_MIPMAP_NEAREST,[Wl]:o.NEAREST_MIPMAP_LINEAR,[Ci]:o.LINEAR,[Hf]:o.LINEAR_MIPMAP_NEAREST,[_r]:o.LINEAR_MIPMAP_LINEAR},$={[AS]:o.NEVER,[LS]:o.ALWAYS,[RS]:o.LESS,[pv]:o.LEQUAL,[CS]:o.EQUAL,[US]:o.GEQUAL,[wS]:o.GREATER,[DS]:o.NOTEQUAL};function yt(L,T){if(T.type===na&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===Ci||T.magFilter===Hf||T.magFilter===Wl||T.magFilter===_r||T.minFilter===Ci||T.minFilter===Hf||T.minFilter===Wl||T.minFilter===_r)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(L,o.TEXTURE_WRAP_S,gt[T.wrapS]),o.texParameteri(L,o.TEXTURE_WRAP_T,gt[T.wrapT]),(L===o.TEXTURE_3D||L===o.TEXTURE_2D_ARRAY)&&o.texParameteri(L,o.TEXTURE_WRAP_R,gt[T.wrapR]),o.texParameteri(L,o.TEXTURE_MAG_FILTER,U[T.magFilter]),o.texParameteri(L,o.TEXTURE_MIN_FILTER,U[T.minFilter]),T.compareFunction&&(o.texParameteri(L,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(L,o.TEXTURE_COMPARE_FUNC,$[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Si||T.minFilter!==Wl&&T.minFilter!==_r||T.type===na&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const it=t.get("EXT_texture_filter_anisotropic");o.texParameterf(L,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function At(L,T){let it=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",z));const ht=T.source;let St=x.get(ht);St===void 0&&(St={},x.set(ht,St));const pt=ft(T);if(pt!==L.__cacheKey){St[pt]===void 0&&(St[pt]={texture:o.createTexture(),usedTimes:0},h.memory.textures++,it=!0),St[pt].usedTimes++;const Ht=St[L.__cacheKey];Ht!==void 0&&(St[L.__cacheKey].usedTimes--,Ht.usedTimes===0&&R(T)),L.__cacheKey=pt,L.__webglTexture=St[pt].texture}return it}function j(L,T,it){let ht=o.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(ht=o.TEXTURE_2D_ARRAY),T.isData3DTexture&&(ht=o.TEXTURE_3D);const St=At(L,T),pt=T.source;i.bindTexture(ht,L.__webglTexture,o.TEXTURE0+it);const Ht=r.get(pt);if(pt.version!==Ht.__version||St===!0){i.activeTexture(o.TEXTURE0+it);const wt=Re.getPrimaries(Re.workingColorSpace),zt=T.colorSpace===Oa?null:Re.getPrimaries(T.colorSpace),me=T.colorSpace===Oa||wt===zt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);let Tt=A(T.image,!1,l.maxTextureSize);Tt=we(T,Tt);const Bt=u.convert(T.format,T.colorSpace),qt=u.convert(T.type);let Gt=O(T.internalFormat,Bt,qt,T.colorSpace,T.isVideoTexture);yt(ht,T);let Ft;const re=T.mipmaps,jt=T.isVideoTexture!==!0,De=Ht.__version===void 0||St===!0,W=pt.dataReady,Lt=H(T,Tt);if(T.isDepthTexture)Gt=D(T.format===Ss,T.type),De&&(jt?i.texStorage2D(o.TEXTURE_2D,1,Gt,Tt.width,Tt.height):i.texImage2D(o.TEXTURE_2D,0,Gt,Tt.width,Tt.height,0,Bt,qt,null));else if(T.isDataTexture)if(re.length>0){jt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let ot=0,_t=re.length;ot<_t;ot++)Ft=re[ot],jt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data);T.generateMipmaps=!1}else jt?(De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Tt.width,Tt.height),W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Tt.width,Tt.height,Bt,qt,Tt.data)):i.texImage2D(o.TEXTURE_2D,0,Gt,Tt.width,Tt.height,0,Bt,qt,Tt.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){jt&&De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,re[0].width,re[0].height,Tt.depth);for(let ot=0,_t=re.length;ot<_t;ot++)if(Ft=re[ot],T.format!==vi)if(Bt!==null)if(jt){if(W)if(T.layerUpdates.size>0){const Ct=Ag(Ft.width,Ft.height,T.format,T.type);for(const Dt of T.layerUpdates){const $t=Ft.data.subarray(Dt*Ct/Ft.data.BYTES_PER_ELEMENT,(Dt+1)*Ct/Ft.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,Dt,Ft.width,Ft.height,1,Bt,$t)}T.clearLayerUpdates()}else i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,Tt.depth,Bt,Ft.data)}else i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Ft.width,Ft.height,Tt.depth,0,Ft.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?W&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,ot,0,0,0,Ft.width,Ft.height,Tt.depth,Bt,qt,Ft.data):i.texImage3D(o.TEXTURE_2D_ARRAY,ot,Gt,Ft.width,Ft.height,Tt.depth,0,Bt,qt,Ft.data)}else{jt&&De&&i.texStorage2D(o.TEXTURE_2D,Lt,Gt,re[0].width,re[0].height);for(let ot=0,_t=re.length;ot<_t;ot++)Ft=re[ot],T.format!==vi?Bt!==null?jt?W&&i.compressedTexSubImage2D(o.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,Bt,Ft.data):i.compressedTexImage2D(o.TEXTURE_2D,ot,Gt,Ft.width,Ft.height,0,Ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Ft.width,Ft.height,Bt,qt,Ft.data):i.texImage2D(o.TEXTURE_2D,ot,Gt,Ft.width,Ft.height,0,Bt,qt,Ft.data)}else if(T.isDataArrayTexture)if(jt){if(De&&i.texStorage3D(o.TEXTURE_2D_ARRAY,Lt,Gt,Tt.width,Tt.height,Tt.depth),W)if(T.layerUpdates.size>0){const ot=Ag(Tt.width,Tt.height,T.format,T.type);for(const _t of T.layerUpdates){const Ct=Tt.data.subarray(_t*ot/Tt.data.BYTES_PER_ELEMENT,(_t+1)*ot/Tt.data.BYTES_PER_ELEMENT);i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,_t,Tt.width,Tt.height,1,Bt,qt,Ct)}T.clearLayerUpdates()}else i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,qt,Tt.data)}else i.texImage3D(o.TEXTURE_2D_ARRAY,0,Gt,Tt.width,Tt.height,Tt.depth,0,Bt,qt,Tt.data);else if(T.isData3DTexture)jt?(De&&i.texStorage3D(o.TEXTURE_3D,Lt,Gt,Tt.width,Tt.height,Tt.depth),W&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,Tt.width,Tt.height,Tt.depth,Bt,qt,Tt.data)):i.texImage3D(o.TEXTURE_3D,0,Gt,Tt.width,Tt.height,Tt.depth,0,Bt,qt,Tt.data);else if(T.isFramebufferTexture){if(De)if(jt)i.texStorage2D(o.TEXTURE_2D,Lt,Gt,Tt.width,Tt.height);else{let ot=Tt.width,_t=Tt.height;for(let Ct=0;Ct<Lt;Ct++)i.texImage2D(o.TEXTURE_2D,Ct,Gt,ot,_t,0,Bt,qt,null),ot>>=1,_t>>=1}}else if(re.length>0){if(jt&&De){const ot=Xt(re[0]);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ot.width,ot.height)}for(let ot=0,_t=re.length;ot<_t;ot++)Ft=re[ot],jt?W&&i.texSubImage2D(o.TEXTURE_2D,ot,0,0,Bt,qt,Ft):i.texImage2D(o.TEXTURE_2D,ot,Gt,Bt,qt,Ft);T.generateMipmaps=!1}else if(jt){if(De){const ot=Xt(Tt);i.texStorage2D(o.TEXTURE_2D,Lt,Gt,ot.width,ot.height)}W&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Bt,qt,Tt)}else i.texImage2D(o.TEXTURE_2D,0,Gt,Bt,qt,Tt);y(T)&&v(ht),Ht.__version=pt.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function dt(L,T,it){if(T.image.length!==6)return;const ht=At(L,T),St=T.source;i.bindTexture(o.TEXTURE_CUBE_MAP,L.__webglTexture,o.TEXTURE0+it);const pt=r.get(St);if(St.version!==pt.__version||ht===!0){i.activeTexture(o.TEXTURE0+it);const Ht=Re.getPrimaries(Re.workingColorSpace),wt=T.colorSpace===Oa?null:Re.getPrimaries(T.colorSpace),zt=T.colorSpace===Oa||Ht===wt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,T.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,T.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,zt);const me=T.isCompressedTexture||T.image[0].isCompressedTexture,Tt=T.image[0]&&T.image[0].isDataTexture,Bt=[];for(let _t=0;_t<6;_t++)!me&&!Tt?Bt[_t]=A(T.image[_t],!0,l.maxCubemapSize):Bt[_t]=Tt?T.image[_t].image:T.image[_t],Bt[_t]=we(T,Bt[_t]);const qt=Bt[0],Gt=u.convert(T.format,T.colorSpace),Ft=u.convert(T.type),re=O(T.internalFormat,Gt,Ft,T.colorSpace),jt=T.isVideoTexture!==!0,De=pt.__version===void 0||ht===!0,W=St.dataReady;let Lt=H(T,qt);yt(o.TEXTURE_CUBE_MAP,T);let ot;if(me){jt&&De&&i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,qt.width,qt.height);for(let _t=0;_t<6;_t++){ot=Bt[_t].mipmaps;for(let Ct=0;Ct<ot.length;Ct++){const Dt=ot[Ct];T.format!==vi?Gt!==null?jt?W&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Dt.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,re,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,0,0,Dt.width,Dt.height,Gt,Ft,Dt.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct,re,Dt.width,Dt.height,0,Gt,Ft,Dt.data)}}}else{if(ot=T.mipmaps,jt&&De){ot.length>0&&Lt++;const _t=Xt(Bt[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,Lt,re,_t.width,_t.height)}for(let _t=0;_t<6;_t++)if(Tt){jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Bt[_t].width,Bt[_t].height,Gt,Ft,Bt[_t].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Bt[_t].width,Bt[_t].height,0,Gt,Ft,Bt[_t].data);for(let Ct=0;Ct<ot.length;Ct++){const $t=ot[Ct].image[_t].image;jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,$t.width,$t.height,Gt,Ft,$t.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,re,$t.width,$t.height,0,Gt,Ft,$t.data)}}else{jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,0,0,Gt,Ft,Bt[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,0,re,Gt,Ft,Bt[_t]);for(let Ct=0;Ct<ot.length;Ct++){const Dt=ot[Ct];jt?W&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,0,0,Gt,Ft,Dt.image[_t]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+_t,Ct+1,re,Gt,Ft,Dt.image[_t])}}}y(T)&&v(o.TEXTURE_CUBE_MAP),pt.__version=St.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function vt(L,T,it,ht,St,pt){const Ht=u.convert(it.format,it.colorSpace),wt=u.convert(it.type),zt=O(it.internalFormat,Ht,wt,it.colorSpace),me=r.get(T),Tt=r.get(it);if(Tt.__renderTarget=T,!me.__hasExternalTextures){const Bt=Math.max(1,T.width>>pt),qt=Math.max(1,T.height>>pt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,pt,zt,Bt,qt,T.depth,0,Ht,wt,null):i.texImage2D(St,pt,zt,Bt,qt,0,Ht,wt,null)}i.bindFramebuffer(o.FRAMEBUFFER,L),he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,ht,St,Tt.__webglTexture,0,se(T)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,ht,St,Tt.__webglTexture,pt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function Et(L,T,it){if(o.bindRenderbuffer(o.RENDERBUFFER,L),T.depthBuffer){const ht=T.depthTexture,St=ht&&ht.isDepthTexture?ht.type:null,pt=D(T.stencilBuffer,St),Ht=T.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,wt=se(T);he(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,wt,pt,T.width,T.height):it?o.renderbufferStorageMultisample(o.RENDERBUFFER,wt,pt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,pt,T.width,T.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,Ht,o.RENDERBUFFER,L)}else{const ht=T.textures;for(let St=0;St<ht.length;St++){const pt=ht[St],Ht=u.convert(pt.format,pt.colorSpace),wt=u.convert(pt.type),zt=O(pt.internalFormat,Ht,wt,pt.colorSpace),me=se(T);it&&he(T)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,me,zt,T.width,T.height):he(T)?d.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,me,zt,T.width,T.height):o.renderbufferStorage(o.RENDERBUFFER,zt,T.width,T.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function bt(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ht=r.get(T.depthTexture);ht.__renderTarget=T,(!ht.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),lt(T.depthTexture,0);const St=ht.__webglTexture,pt=se(T);if(T.depthTexture.format===ps)he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,St,0);else if(T.depthTexture.format===Ss)he(T)?d.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0,pt):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,St,0);else throw new Error("Unknown depthTexture format")}function Kt(L){const T=r.get(L),it=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const ht=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),ht){const St=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,ht.removeEventListener("dispose",St)};ht.addEventListener("dispose",St),T.__depthDisposeCallback=St}T.__boundDepthTexture=ht}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(it)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,L)}else if(it){T.__webglDepthbuffer=[];for(let ht=0;ht<6;ht++)if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer[ht]),T.__webglDepthbuffer[ht]===void 0)T.__webglDepthbuffer[ht]=o.createRenderbuffer(),Et(T.__webglDepthbuffer[ht],L,!1);else{const St=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,pt=T.__webglDepthbuffer[ht];o.bindRenderbuffer(o.RENDERBUFFER,pt),o.framebufferRenderbuffer(o.FRAMEBUFFER,St,o.RENDERBUFFER,pt)}}else if(i.bindFramebuffer(o.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=o.createRenderbuffer(),Et(T.__webglDepthbuffer,L,!1);else{const ht=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,St=T.__webglDepthbuffer;o.bindRenderbuffer(o.RENDERBUFFER,St),o.framebufferRenderbuffer(o.FRAMEBUFFER,ht,o.RENDERBUFFER,St)}i.bindFramebuffer(o.FRAMEBUFFER,null)}function Pt(L,T,it){const ht=r.get(L);T!==void 0&&vt(ht.__webglFramebuffer,L,L.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),it!==void 0&&Kt(L)}function Me(L){const T=L.texture,it=r.get(L),ht=r.get(T);L.addEventListener("dispose",F);const St=L.textures,pt=L.isWebGLCubeRenderTarget===!0,Ht=St.length>1;if(Ht||(ht.__webglTexture===void 0&&(ht.__webglTexture=o.createTexture()),ht.__version=T.version,h.memory.textures++),pt){it.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer[wt]=[];for(let zt=0;zt<T.mipmaps.length;zt++)it.__webglFramebuffer[wt][zt]=o.createFramebuffer()}else it.__webglFramebuffer[wt]=o.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){it.__webglFramebuffer=[];for(let wt=0;wt<T.mipmaps.length;wt++)it.__webglFramebuffer[wt]=o.createFramebuffer()}else it.__webglFramebuffer=o.createFramebuffer();if(Ht)for(let wt=0,zt=St.length;wt<zt;wt++){const me=r.get(St[wt]);me.__webglTexture===void 0&&(me.__webglTexture=o.createTexture(),h.memory.textures++)}if(L.samples>0&&he(L)===!1){it.__webglMultisampledFramebuffer=o.createFramebuffer(),it.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,it.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const zt=St[wt];it.__webglColorRenderbuffer[wt]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,it.__webglColorRenderbuffer[wt]);const me=u.convert(zt.format,zt.colorSpace),Tt=u.convert(zt.type),Bt=O(zt.internalFormat,me,Tt,zt.colorSpace,L.isXRRenderTarget===!0),qt=se(L);o.renderbufferStorageMultisample(o.RENDERBUFFER,qt,Bt,L.width,L.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+wt,o.RENDERBUFFER,it.__webglColorRenderbuffer[wt])}o.bindRenderbuffer(o.RENDERBUFFER,null),L.depthBuffer&&(it.__webglDepthRenderbuffer=o.createRenderbuffer(),Et(it.__webglDepthRenderbuffer,L,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(pt){i.bindTexture(o.TEXTURE_CUBE_MAP,ht.__webglTexture),yt(o.TEXTURE_CUBE_MAP,T);for(let wt=0;wt<6;wt++)if(T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)vt(it.__webglFramebuffer[wt][zt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,zt);else vt(it.__webglFramebuffer[wt],L,T,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(T)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ht){for(let wt=0,zt=St.length;wt<zt;wt++){const me=St[wt],Tt=r.get(me);i.bindTexture(o.TEXTURE_2D,Tt.__webglTexture),yt(o.TEXTURE_2D,me),vt(it.__webglFramebuffer,L,me,o.COLOR_ATTACHMENT0+wt,o.TEXTURE_2D,0),y(me)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let wt=o.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(wt=L.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(wt,ht.__webglTexture),yt(wt,T),T.mipmaps&&T.mipmaps.length>0)for(let zt=0;zt<T.mipmaps.length;zt++)vt(it.__webglFramebuffer[zt],L,T,o.COLOR_ATTACHMENT0,wt,zt);else vt(it.__webglFramebuffer,L,T,o.COLOR_ATTACHMENT0,wt,0);y(T)&&v(wt),i.unbindTexture()}L.depthBuffer&&Kt(L)}function Ce(L){const T=L.textures;for(let it=0,ht=T.length;it<ht;it++){const St=T[it];if(y(St)){const pt=P(L),Ht=r.get(St).__webglTexture;i.bindTexture(pt,Ht),v(pt),i.unbindTexture()}}}const ae=[],I=[];function pn(L){if(L.samples>0){if(he(L)===!1){const T=L.textures,it=L.width,ht=L.height;let St=o.COLOR_BUFFER_BIT;const pt=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ht=r.get(L),wt=T.length>1;if(wt)for(let zt=0;zt<T.length;zt++)i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglFramebuffer);for(let zt=0;zt<T.length;zt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),wt){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=r.get(T[zt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,me,0)}o.blitFramebuffer(0,0,it,ht,0,0,it,ht,St,o.NEAREST),m===!0&&(ae.length=0,I.length=0,ae.push(o.COLOR_ATTACHMENT0+zt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(ae.push(pt),I.push(pt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,I)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,ae))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),wt)for(let zt=0;zt<T.length;zt++){i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.RENDERBUFFER,Ht.__webglColorRenderbuffer[zt]);const me=r.get(T[zt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ht.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+zt,o.TEXTURE_2D,me,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ht.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&m){const T=L.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[T])}}}function se(L){return Math.min(l.maxSamples,L.samples)}function he(L){const T=r.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function kt(L){const T=h.render.frame;_.get(L)!==T&&(_.set(L,T),L.update())}function we(L,T){const it=L.colorSpace,ht=L.format,St=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||it!==ys&&it!==Oa&&(Re.getTransfer(it)===Oe?(ht!==vi||St!==ra)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",it)),T}function Xt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=nt,this.resetTextureUnits=st,this.setTexture2D=lt,this.setTexture2DArray=k,this.setTexture3D=rt,this.setTextureCube=Y,this.rebindTextures=Pt,this.setupRenderTarget=Me,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=pn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=vt,this.useMultisampledRTT=he}function Kb(o,t){function i(r,l=Oa){let u;const h=Re.getTransfer(l);if(r===ra)return o.UNSIGNED_BYTE;if(r===hd)return o.UNSIGNED_SHORT_4_4_4_4;if(r===dd)return o.UNSIGNED_SHORT_5_5_5_1;if(r===rv)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===iv)return o.BYTE;if(r===av)return o.SHORT;if(r===Lo)return o.UNSIGNED_SHORT;if(r===fd)return o.INT;if(r===gr)return o.UNSIGNED_INT;if(r===na)return o.FLOAT;if(r===No)return o.HALF_FLOAT;if(r===sv)return o.ALPHA;if(r===ov)return o.RGB;if(r===vi)return o.RGBA;if(r===lv)return o.LUMINANCE;if(r===cv)return o.LUMINANCE_ALPHA;if(r===ps)return o.DEPTH_COMPONENT;if(r===Ss)return o.DEPTH_STENCIL;if(r===uv)return o.RED;if(r===pd)return o.RED_INTEGER;if(r===fv)return o.RG;if(r===md)return o.RG_INTEGER;if(r===_d)return o.RGBA_INTEGER;if(r===gc||r===vc||r===xc||r===Sc)if(h===Oe)if(u=t.get("WEBGL_compressed_texture_s3tc_srgb"),u!==null){if(r===gc)return u.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Sc)return u.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(u=t.get("WEBGL_compressed_texture_s3tc"),u!==null){if(r===gc)return u.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===vc)return u.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===xc)return u.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Sc)return u.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Lh||r===Nh||r===Oh||r===Ph)if(u=t.get("WEBGL_compressed_texture_pvrtc"),u!==null){if(r===Lh)return u.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Nh)return u.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Oh)return u.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ph)return u.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===zh||r===Bh||r===Fh)if(u=t.get("WEBGL_compressed_texture_etc"),u!==null){if(r===zh||r===Bh)return h===Oe?u.COMPRESSED_SRGB8_ETC2:u.COMPRESSED_RGB8_ETC2;if(r===Fh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:u.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ih||r===Hh||r===Gh||r===Vh||r===kh||r===Xh||r===Wh||r===qh||r===Yh||r===jh||r===Zh||r===Kh||r===Qh||r===Jh)if(u=t.get("WEBGL_compressed_texture_astc"),u!==null){if(r===Ih)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:u.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Hh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:u.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Gh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:u.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Vh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:u.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:u.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Xh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:u.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:u.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:u.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Yh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:u.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:u.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Zh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:u.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Kh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:u.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Qh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:u.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Jh)return h===Oe?u.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:u.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===yc||r===$h||r===td)if(u=t.get("EXT_texture_compression_bptc"),u!==null){if(r===yc)return h===Oe?u.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:u.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===$h)return u.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===td)return u.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===hv||r===ed||r===nd||r===id)if(u=t.get("EXT_texture_compression_rgtc"),u!==null){if(r===yc)return u.COMPRESSED_RED_RGTC1_EXT;if(r===ed)return u.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===nd)return u.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===id)return u.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===xs?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}const Qb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class $b{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,i,r){if(this.texture===null){const l=new Ln,u=t.properties.get(l);u.__webglTexture=i.texture,(i.depthNear!==r.depthNear||i.depthFar!==r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}getMesh(t){if(this.texture!==null&&this.mesh===null){const i=t.cameras[0].viewport,r=new Fa({vertexShader:Qb,fragmentShader:Jb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new xi(new wc(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class tA extends Es{constructor(t,i){super();const r=this;let l=null,u=1,h=null,d="local-floor",m=1,p=null,_=null,g=null,x=null,M=null,E=null;const A=new $b,y=i.getContextAttributes();let v=null,P=null;const O=[],D=[],H=new Pe;let z=null;const F=new oi;F.viewport=new Ze;const G=new oi;G.viewport=new Ze;const R=[F,G],b=new My;let B=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let dt=O[j];return dt===void 0&&(dt=new lh,O[j]=dt),dt.getTargetRaySpace()},this.getControllerGrip=function(j){let dt=O[j];return dt===void 0&&(dt=new lh,O[j]=dt),dt.getGripSpace()},this.getHand=function(j){let dt=O[j];return dt===void 0&&(dt=new lh,O[j]=dt),dt.getHandSpace()};function nt(j){const dt=D.indexOf(j.inputSource);if(dt===-1)return;const vt=O[dt];vt!==void 0&&(vt.update(j.inputSource,j.frame,p||h),vt.dispatchEvent({type:j.type,data:j.inputSource}))}function ft(){l.removeEventListener("select",nt),l.removeEventListener("selectstart",nt),l.removeEventListener("selectend",nt),l.removeEventListener("squeeze",nt),l.removeEventListener("squeezestart",nt),l.removeEventListener("squeezeend",nt),l.removeEventListener("end",ft),l.removeEventListener("inputsourceschange",lt);for(let j=0;j<O.length;j++){const dt=D[j];dt!==null&&(D[j]=null,O[j].disconnect(dt))}B=null,st=null,A.reset(),t.setRenderTarget(v),M=null,x=null,g=null,l=null,P=null,At.stop(),r.isPresenting=!1,t.setPixelRatio(z),t.setSize(H.width,H.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){u=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){d=j,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||h},this.setReferenceSpace=function(j){p=j},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return g},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(j){if(l=j,l!==null){if(v=t.getRenderTarget(),l.addEventListener("select",nt),l.addEventListener("selectstart",nt),l.addEventListener("selectend",nt),l.addEventListener("squeeze",nt),l.addEventListener("squeezestart",nt),l.addEventListener("squeezeend",nt),l.addEventListener("end",ft),l.addEventListener("inputsourceschange",lt),y.xrCompatible!==!0&&await i.makeXRCompatible(),z=t.getPixelRatio(),t.getSize(H),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let vt=null,Et=null,bt=null;y.depth&&(bt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,vt=y.stencil?Ss:ps,Et=y.stencil?xs:gr);const Kt={colorFormat:i.RGBA8,depthFormat:bt,scaleFactor:u};g=new XRWebGLBinding(l,i),x=g.createProjectionLayer(Kt),l.updateRenderState({layers:[x]}),t.setPixelRatio(1),t.setSize(x.textureWidth,x.textureHeight,!1),P=new vr(x.textureWidth,x.textureHeight,{format:vi,type:ra,depthTexture:new Rv(x.textureWidth,x.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,vt),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}else{const vt={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:u};M=new XRWebGLLayer(l,i,vt),l.updateRenderState({baseLayer:M}),t.setPixelRatio(1),t.setSize(M.framebufferWidth,M.framebufferHeight,!1),P=new vr(M.framebufferWidth,M.framebufferHeight,{format:vi,type:ra,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil})}P.isXRRenderTarget=!0,this.setFoveation(m),p=null,h=await l.requestReferenceSpace(d),At.setContext(l),At.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return A.getDepthTexture()};function lt(j){for(let dt=0;dt<j.removed.length;dt++){const vt=j.removed[dt],Et=D.indexOf(vt);Et>=0&&(D[Et]=null,O[Et].disconnect(vt))}for(let dt=0;dt<j.added.length;dt++){const vt=j.added[dt];let Et=D.indexOf(vt);if(Et===-1){for(let Kt=0;Kt<O.length;Kt++)if(Kt>=D.length){D.push(vt),Et=Kt;break}else if(D[Kt]===null){D[Kt]=vt,Et=Kt;break}if(Et===-1)break}const bt=O[Et];bt&&bt.connect(vt)}}const k=new et,rt=new et;function Y(j,dt,vt){k.setFromMatrixPosition(dt.matrixWorld),rt.setFromMatrixPosition(vt.matrixWorld);const Et=k.distanceTo(rt),bt=dt.projectionMatrix.elements,Kt=vt.projectionMatrix.elements,Pt=bt[14]/(bt[10]-1),Me=bt[14]/(bt[10]+1),Ce=(bt[9]+1)/bt[5],ae=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],pn=(Kt[8]+1)/Kt[0],se=Pt*I,he=Pt*pn,kt=Et/(-I+pn),we=kt*-I;if(dt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(we),j.translateZ(kt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse);else{const Xt=Pt+kt,L=Me+kt,T=se-we,it=he+(Et-we),ht=Ce*Me/L*Xt,St=ae*Me/L*Xt;j.projectionMatrix.makePerspective(T,it,ht,St,Xt,L),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function gt(j,dt){dt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(dt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(l===null)return;let dt=j.near,vt=j.far;A.texture!==null&&(A.depthNear>0&&(dt=A.depthNear),A.depthFar>0&&(vt=A.depthFar)),b.near=G.near=F.near=dt,b.far=G.far=F.far=vt,(B!==b.near||st!==b.far)&&(l.updateRenderState({depthNear:b.near,depthFar:b.far}),B=b.near,st=b.far),F.layers.mask=j.layers.mask|2,G.layers.mask=j.layers.mask|4,b.layers.mask=F.layers.mask|G.layers.mask;const Et=j.parent,bt=b.cameras;gt(b,Et);for(let Kt=0;Kt<bt.length;Kt++)gt(bt[Kt],Et);bt.length===2?Y(b,F,G):b.projectionMatrix.copy(F.projectionMatrix),U(j,b,Et)};function U(j,dt,vt){vt===null?j.matrix.copy(dt.matrixWorld):(j.matrix.copy(vt.matrixWorld),j.matrix.invert(),j.matrix.multiply(dt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(dt.projectionMatrix),j.projectionMatrixInverse.copy(dt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ad*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(j){m=j,x!==null&&(x.fixedFoveation=j),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=j)},this.hasDepthSensing=function(){return A.texture!==null},this.getDepthSensingMesh=function(){return A.getMesh(b)};let $=null;function yt(j,dt){if(_=dt.getViewerPose(p||h),E=dt,_!==null){const vt=_.views;M!==null&&(t.setRenderTargetFramebuffer(P,M.framebuffer),t.setRenderTarget(P));let Et=!1;vt.length!==b.cameras.length&&(b.cameras.length=0,Et=!0);for(let Pt=0;Pt<vt.length;Pt++){const Me=vt[Pt];let Ce=null;if(M!==null)Ce=M.getViewport(Me);else{const I=g.getViewSubImage(x,Me);Ce=I.viewport,Pt===0&&(t.setRenderTargetTextures(P,I.colorTexture,x.ignoreDepthValues?void 0:I.depthStencilTexture),t.setRenderTarget(P))}let ae=R[Pt];ae===void 0&&(ae=new oi,ae.layers.enable(Pt),ae.viewport=new Ze,R[Pt]=ae),ae.matrix.fromArray(Me.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(Me.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),Pt===0&&(b.matrix.copy(ae.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),Et===!0&&b.cameras.push(ae)}const bt=l.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&g){const Pt=g.getDepthInformation(vt[0]);Pt&&Pt.isValid&&Pt.texture&&A.init(t,Pt,l.renderState)}}for(let vt=0;vt<O.length;vt++){const Et=D[vt],bt=O[vt];Et!==null&&bt!==void 0&&bt.update(Et,dt,p||h)}$&&$(j,dt),dt.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:dt}),E=null}const At=new Cv;At.setAnimationLoop(yt),this.setAnimationLoop=function(j){$=j},this.dispose=function(){}}}const ur=new Di,eA=new Ye;function nA(o,t){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,Ev(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,P,O,D){v.isMeshBasicMaterial||v.isMeshLambertMaterial?u(y,v):v.isMeshToonMaterial?(u(y,v),g(y,v)):v.isMeshPhongMaterial?(u(y,v),_(y,v)):v.isMeshStandardMaterial?(u(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,D)):v.isMeshMatcapMaterial?(u(y,v),E(y,v)):v.isMeshDepthMaterial?u(y,v):v.isMeshDistanceMaterial?(u(y,v),A(y,v)):v.isMeshNormalMaterial?u(y,v):v.isLineBasicMaterial?(h(y,v),v.isLineDashedMaterial&&d(y,v)):v.isPointsMaterial?m(y,v,P,O):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function u(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===In&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===In&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const P=t.get(v),O=P.envMap,D=P.envMapRotation;O&&(y.envMap.value=O,ur.copy(D),ur.x*=-1,ur.y*=-1,ur.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(ur.y*=-1,ur.z*=-1),y.envMapRotation.value.setFromMatrix4(eA.makeRotationFromEuler(ur)),y.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,i(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function h(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function d(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,P,O){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*P,y.scale.value=O*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function _(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function g(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,P){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===In&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=P.texture,y.transmissionSamplerSize.value.set(P.width,P.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function A(y,v){const P=t.get(v).light;y.referencePosition.value.setFromMatrixPosition(P.matrixWorld),y.nearDistance.value=P.shadow.camera.near,y.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function iA(o,t,i,r){let l={},u={},h=[];const d=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(P,O){const D=O.program;r.uniformBlockBinding(P,D)}function p(P,O){let D=l[P.id];D===void 0&&(E(P),D=_(P),l[P.id]=D,P.addEventListener("dispose",y));const H=O.program;r.updateUBOMapping(P,H);const z=t.render.frame;u[P.id]!==z&&(x(P),u[P.id]=z)}function _(P){const O=g();P.__bindingPointIndex=O;const D=o.createBuffer(),H=P.__size,z=P.usage;return o.bindBuffer(o.UNIFORM_BUFFER,D),o.bufferData(o.UNIFORM_BUFFER,H,z),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,O,D),D}function g(){for(let P=0;P<d;P++)if(h.indexOf(P)===-1)return h.push(P),P;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(P){const O=l[P.id],D=P.uniforms,H=P.__cache;o.bindBuffer(o.UNIFORM_BUFFER,O);for(let z=0,F=D.length;z<F;z++){const G=Array.isArray(D[z])?D[z]:[D[z]];for(let R=0,b=G.length;R<b;R++){const B=G[R];if(M(B,z,R,H)===!0){const st=B.__offset,nt=Array.isArray(B.value)?B.value:[B.value];let ft=0;for(let lt=0;lt<nt.length;lt++){const k=nt[lt],rt=A(k);typeof k=="number"||typeof k=="boolean"?(B.__data[0]=k,o.bufferSubData(o.UNIFORM_BUFFER,st+ft,B.__data)):k.isMatrix3?(B.__data[0]=k.elements[0],B.__data[1]=k.elements[1],B.__data[2]=k.elements[2],B.__data[3]=0,B.__data[4]=k.elements[3],B.__data[5]=k.elements[4],B.__data[6]=k.elements[5],B.__data[7]=0,B.__data[8]=k.elements[6],B.__data[9]=k.elements[7],B.__data[10]=k.elements[8],B.__data[11]=0):(k.toArray(B.__data,ft),ft+=rt.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,st,B.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(P,O,D,H){const z=P.value,F=O+"_"+D;if(H[F]===void 0)return typeof z=="number"||typeof z=="boolean"?H[F]=z:H[F]=z.clone(),!0;{const G=H[F];if(typeof z=="number"||typeof z=="boolean"){if(G!==z)return H[F]=z,!0}else if(G.equals(z)===!1)return G.copy(z),!0}return!1}function E(P){const O=P.uniforms;let D=0;const H=16;for(let F=0,G=O.length;F<G;F++){const R=Array.isArray(O[F])?O[F]:[O[F]];for(let b=0,B=R.length;b<B;b++){const st=R[b],nt=Array.isArray(st.value)?st.value:[st.value];for(let ft=0,lt=nt.length;ft<lt;ft++){const k=nt[ft],rt=A(k),Y=D%H,gt=Y%rt.boundary,U=Y+gt;D+=gt,U!==0&&H-U<rt.storage&&(D+=H-U),st.__data=new Float32Array(rt.storage/Float32Array.BYTES_PER_ELEMENT),st.__offset=D,D+=rt.storage}}}const z=D%H;return z>0&&(D+=H-z),P.__size=D,P.__cache={},this}function A(P){const O={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(O.boundary=4,O.storage=4):P.isVector2?(O.boundary=8,O.storage=8):P.isVector3||P.isColor?(O.boundary=16,O.storage=12):P.isVector4?(O.boundary=16,O.storage=16):P.isMatrix3?(O.boundary=48,O.storage=48):P.isMatrix4?(O.boundary=64,O.storage=64):P.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",P),O}function y(P){const O=P.target;O.removeEventListener("dispose",y);const D=h.indexOf(O.__bindingPointIndex);h.splice(D,1),o.deleteBuffer(l[O.id]),delete l[O.id],delete u[O.id]}function v(){for(const P in l)o.deleteBuffer(l[P]);h=[],l={},u={}}return{bind:m,update:p,dispose:v}}class aA{constructor(t={}){const{canvas:i=OS(),context:r=null,depth:l=!0,stencil:u=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:x=!1}=t;this.isWebGLRenderer=!0;let M;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");M=r.getContextAttributes().alpha}else M=h;const E=new Uint32Array(4),A=new Int32Array(4);let y=null,v=null;const P=[],O=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=jn,this.toneMapping=za,this.toneMappingExposure=1;const D=this;let H=!1,z=0,F=0,G=null,R=-1,b=null;const B=new Ze,st=new Ze;let nt=null;const ft=new fe(0);let lt=0,k=i.width,rt=i.height,Y=1,gt=null,U=null;const $=new Ze(0,0,k,rt),yt=new Ze(0,0,k,rt);let At=!1;const j=new Av;let dt=!1,vt=!1;this.transmissionResolutionScale=1;const Et=new Ye,bt=new Ye,Kt=new et,Pt=new Ze,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ce=!1;function ae(){return G===null?Y:1}let I=r;function pn(w,q){return i.getContext(w,q)}try{const w={alpha:!0,depth:l,stencil:u,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${cd}`),i.addEventListener("webglcontextlost",_t,!1),i.addEventListener("webglcontextrestored",Ct,!1),i.addEventListener("webglcontextcreationerror",Dt,!1),I===null){const q="webgl2";if(I=pn(q,w),I===null)throw pn(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let se,he,kt,we,Xt,L,T,it,ht,St,pt,Ht,wt,zt,me,Tt,Bt,qt,Gt,Ft,re,jt,De,W;function Lt(){se=new pT(I),se.init(),jt=new Kb(I,se),he=new lT(I,se,t,jt),kt=new jb(I,se),he.reverseDepthBuffer&&x&&kt.buffers.depth.setReversed(!0),we=new gT(I),Xt=new Pb,L=new Zb(I,se,kt,Xt,he,jt,we),T=new uT(D),it=new dT(D),ht=new Ty(I),De=new sT(I,ht),St=new mT(I,ht,we,De),pt=new xT(I,St,ht,we),Gt=new vT(I,he,L),Tt=new cT(Xt),Ht=new Ob(D,T,it,se,he,De,Tt),wt=new nA(D,Xt),zt=new Bb,me=new kb(se),qt=new rT(D,T,it,kt,pt,M,m),Bt=new qb(D,pt,he),W=new iA(I,we,he,kt),Ft=new oT(I,se,we),re=new _T(I,se,we),we.programs=Ht.programs,D.capabilities=he,D.extensions=se,D.properties=Xt,D.renderLists=zt,D.shadowMap=Bt,D.state=kt,D.info=we}Lt();const ot=new tA(D,I);this.xr=ot,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const w=se.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=se.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(w){w!==void 0&&(Y=w,this.setSize(k,rt,!1))},this.getSize=function(w){return w.set(k,rt)},this.setSize=function(w,q,tt=!0){if(ot.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=w,rt=q,i.width=Math.floor(w*Y),i.height=Math.floor(q*Y),tt===!0&&(i.style.width=w+"px",i.style.height=q+"px"),this.setViewport(0,0,w,q)},this.getDrawingBufferSize=function(w){return w.set(k*Y,rt*Y).floor()},this.setDrawingBufferSize=function(w,q,tt){k=w,rt=q,Y=tt,i.width=Math.floor(w*tt),i.height=Math.floor(q*tt),this.setViewport(0,0,w,q)},this.getCurrentViewport=function(w){return w.copy(B)},this.getViewport=function(w){return w.copy($)},this.setViewport=function(w,q,tt,Q){w.isVector4?$.set(w.x,w.y,w.z,w.w):$.set(w,q,tt,Q),kt.viewport(B.copy($).multiplyScalar(Y).round())},this.getScissor=function(w){return w.copy(yt)},this.setScissor=function(w,q,tt,Q){w.isVector4?yt.set(w.x,w.y,w.z,w.w):yt.set(w,q,tt,Q),kt.scissor(st.copy(yt).multiplyScalar(Y).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(w){kt.setScissorTest(At=w)},this.setOpaqueSort=function(w){gt=w},this.setTransparentSort=function(w){U=w},this.getClearColor=function(w){return w.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor.apply(qt,arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha.apply(qt,arguments)},this.clear=function(w=!0,q=!0,tt=!0){let Q=0;if(w){let Z=!1;if(G!==null){const Mt=G.texture.format;Z=Mt===_d||Mt===md||Mt===pd}if(Z){const Mt=G.texture.type,Rt=Mt===ra||Mt===gr||Mt===Lo||Mt===xs||Mt===hd||Mt===dd,Ot=qt.getClearColor(),Nt=qt.getClearAlpha(),te=Ot.r,ee=Ot.g,Yt=Ot.b;Rt?(E[0]=te,E[1]=ee,E[2]=Yt,E[3]=Nt,I.clearBufferuiv(I.COLOR,0,E)):(A[0]=te,A[1]=ee,A[2]=Yt,A[3]=Nt,I.clearBufferiv(I.COLOR,0,A))}else Q|=I.COLOR_BUFFER_BIT}q&&(Q|=I.DEPTH_BUFFER_BIT),tt&&(Q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",_t,!1),i.removeEventListener("webglcontextrestored",Ct,!1),i.removeEventListener("webglcontextcreationerror",Dt,!1),qt.dispose(),zt.dispose(),me.dispose(),Xt.dispose(),T.dispose(),it.dispose(),pt.dispose(),De.dispose(),W.dispose(),Ht.dispose(),ot.dispose(),ot.removeEventListener("sessionstart",Io),ot.removeEventListener("sessionend",bs),yi.stop()};function _t(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),H=!0}function Ct(){console.log("THREE.WebGLRenderer: Context Restored."),H=!1;const w=we.autoReset,q=Bt.enabled,tt=Bt.autoUpdate,Q=Bt.needsUpdate,Z=Bt.type;Lt(),we.autoReset=w,Bt.enabled=q,Bt.autoUpdate=tt,Bt.needsUpdate=Q,Bt.type=Z}function Dt(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function $t(w){const q=w.target;q.removeEventListener("dispose",$t),He(q)}function He(w){tn(w),Xt.remove(w)}function tn(w){const q=Xt.get(w).programs;q!==void 0&&(q.forEach(function(tt){Ht.releaseProgram(tt)}),w.isShaderMaterial&&Ht.releaseShaderCache(w))}this.renderBufferDirect=function(w,q,tt,Q,Z,Mt){q===null&&(q=Me);const Rt=Z.isMesh&&Z.matrixWorld.determinant()<0,Ot=Uc(w,q,tt,Q,Z);kt.setMaterial(Q,Rt);let Nt=tt.index,te=1;if(Q.wireframe===!0){if(Nt=St.getWireframeAttribute(tt),Nt===void 0)return;te=2}const ee=tt.drawRange,Yt=tt.attributes.position;let _e=ee.start*te,ge=(ee.start+ee.count)*te;Mt!==null&&(_e=Math.max(_e,Mt.start*te),ge=Math.min(ge,(Mt.start+Mt.count)*te)),Nt!==null?(_e=Math.max(_e,0),ge=Math.min(ge,Nt.count)):Yt!=null&&(_e=Math.max(_e,0),ge=Math.min(ge,Yt.count));const Ie=ge-_e;if(Ie<0||Ie===1/0)return;De.setup(Z,Q,Ot,tt,Nt);let Te,ne=Ft;if(Nt!==null&&(Te=ht.get(Nt),ne=re,ne.setIndex(Te)),Z.isMesh)Q.wireframe===!0?(kt.setLineWidth(Q.wireframeLinewidth*ae()),ne.setMode(I.LINES)):ne.setMode(I.TRIANGLES);else if(Z.isLine){let Zt=Q.linewidth;Zt===void 0&&(Zt=1),kt.setLineWidth(Zt*ae()),Z.isLineSegments?ne.setMode(I.LINES):Z.isLineLoop?ne.setMode(I.LINE_LOOP):ne.setMode(I.LINE_STRIP)}else Z.isPoints?ne.setMode(I.POINTS):Z.isSprite&&ne.setMode(I.TRIANGLES);if(Z.isBatchedMesh)if(Z._multiDrawInstances!==null)ne.renderMultiDrawInstances(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount,Z._multiDrawInstances);else if(se.get("WEBGL_multi_draw"))ne.renderMultiDraw(Z._multiDrawStarts,Z._multiDrawCounts,Z._multiDrawCount);else{const Zt=Z._multiDrawStarts,an=Z._multiDrawCounts,ve=Z._multiDrawCount,On=Nt?ht.get(Nt).bytesPerElement:1,ci=Xt.get(Q).currentProgram.getUniforms();for(let Rn=0;Rn<ve;Rn++)ci.setValue(I,"_gl_DrawID",Rn),ne.render(Zt[Rn]/On,an[Rn])}else if(Z.isInstancedMesh)ne.renderInstances(_e,Ie,Z.count);else if(tt.isInstancedBufferGeometry){const Zt=tt._maxInstanceCount!==void 0?tt._maxInstanceCount:1/0,an=Math.min(tt.instanceCount,Zt);ne.renderInstances(_e,Ie,an)}else ne.render(_e,Ie)};function Ee(w,q,tt){w.transparent===!0&&w.side===ea&&w.forceSinglePass===!1?(w.side=In,w.needsUpdate=!0,nn(w,q,tt),w.side=Ba,w.needsUpdate=!0,nn(w,q,tt),w.side=ea):nn(w,q,tt)}this.compile=function(w,q,tt=null){tt===null&&(tt=w),v=me.get(tt),v.init(q),O.push(v),tt.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),w!==tt&&w.traverseVisible(function(Z){Z.isLight&&Z.layers.test(q.layers)&&(v.pushLight(Z),Z.castShadow&&v.pushShadow(Z))}),v.setupLights();const Q=new Set;return w.traverse(function(Z){if(!(Z.isMesh||Z.isPoints||Z.isLine||Z.isSprite))return;const Mt=Z.material;if(Mt)if(Array.isArray(Mt))for(let Rt=0;Rt<Mt.length;Rt++){const Ot=Mt[Rt];Ee(Ot,tt,Z),Q.add(Ot)}else Ee(Mt,tt,Z),Q.add(Mt)}),O.pop(),v=null,Q},this.compileAsync=function(w,q,tt=null){const Q=this.compile(w,q,tt);return new Promise(Z=>{function Mt(){if(Q.forEach(function(Rt){Xt.get(Rt).currentProgram.isReady()&&Q.delete(Rt)}),Q.size===0){Z(w);return}setTimeout(Mt,10)}se.get("KHR_parallel_shader_compile")!==null?Mt():setTimeout(Mt,10)})};let bn=null;function An(w){bn&&bn(w)}function Io(){yi.stop()}function bs(){yi.start()}const yi=new Cv;yi.setAnimationLoop(An),typeof self<"u"&&yi.setContext(self),this.setAnimationLoop=function(w){bn=w,ot.setAnimationLoop(w),w===null?yi.stop():yi.start()},ot.addEventListener("sessionstart",Io),ot.addEventListener("sessionend",bs),this.render=function(w,q){if(q!==void 0&&q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),ot.enabled===!0&&ot.isPresenting===!0&&(ot.cameraAutoUpdate===!0&&ot.updateCamera(q),q=ot.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,q,G),v=me.get(w,O.length),v.init(q),O.push(v),bt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),j.setFromProjectionMatrix(bt),vt=this.localClippingEnabled,dt=Tt.init(this.clippingPlanes,vt),y=zt.get(w,P.length),y.init(),P.push(y),ot.enabled===!0&&ot.isPresenting===!0){const Mt=D.xr.getDepthSensingMesh();Mt!==null&&xr(Mt,q,-1/0,D.sortObjects)}xr(w,q,0,D.sortObjects),y.finish(),D.sortObjects===!0&&y.sort(gt,U),Ce=ot.enabled===!1||ot.isPresenting===!1||ot.hasDepthSensing()===!1,Ce&&qt.addToRenderList(y,w),this.info.render.frame++,dt===!0&&Tt.beginShadows();const tt=v.state.shadowsArray;Bt.render(tt,w,q),dt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const Q=y.opaque,Z=y.transmissive;if(v.setupLights(),q.isArrayCamera){const Mt=q.cameras;if(Z.length>0)for(let Rt=0,Ot=Mt.length;Rt<Ot;Rt++){const Nt=Mt[Rt];Ho(Q,Z,w,Nt)}Ce&&qt.render(w);for(let Rt=0,Ot=Mt.length;Rt<Ot;Rt++){const Nt=Mt[Rt];As(y,w,Nt,Nt.viewport)}}else Z.length>0&&Ho(Q,Z,w,q),Ce&&qt.render(w),As(y,w,q);G!==null&&F===0&&(L.updateMultisampleRenderTarget(G),L.updateRenderTargetMipmap(G)),w.isScene===!0&&w.onAfterRender(D,w,q),De.resetDefaultState(),R=-1,b=null,O.pop(),O.length>0?(v=O[O.length-1],dt===!0&&Tt.setGlobalState(D.clippingPlanes,v.state.camera)):v=null,P.pop(),P.length>0?y=P[P.length-1]:y=null};function xr(w,q,tt,Q){if(w.visible===!1)return;if(w.layers.test(q.layers)){if(w.isGroup)tt=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(q);else if(w.isLight)v.pushLight(w),w.castShadow&&v.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||j.intersectsSprite(w)){Q&&Pt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(bt);const Rt=pt.update(w),Ot=w.material;Ot.visible&&y.push(w,Rt,Ot,tt,Pt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||j.intersectsObject(w))){const Rt=pt.update(w),Ot=w.material;if(Q&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Pt.copy(w.boundingSphere.center)):(Rt.boundingSphere===null&&Rt.computeBoundingSphere(),Pt.copy(Rt.boundingSphere.center)),Pt.applyMatrix4(w.matrixWorld).applyMatrix4(bt)),Array.isArray(Ot)){const Nt=Rt.groups;for(let te=0,ee=Nt.length;te<ee;te++){const Yt=Nt[te],_e=Ot[Yt.materialIndex];_e&&_e.visible&&y.push(w,Rt,_e,tt,Pt.z,Yt)}}else Ot.visible&&y.push(w,Rt,Ot,tt,Pt.z,null)}}const Mt=w.children;for(let Rt=0,Ot=Mt.length;Rt<Ot;Rt++)xr(Mt[Rt],q,tt,Q)}function As(w,q,tt,Q){const Z=w.opaque,Mt=w.transmissive,Rt=w.transparent;v.setupLightsView(tt),dt===!0&&Tt.setGlobalState(D.clippingPlanes,tt),Q&&kt.viewport(B.copy(Q)),Z.length>0&&Hn(Z,q,tt),Mt.length>0&&Hn(Mt,q,tt),Rt.length>0&&Hn(Rt,q,tt),kt.buffers.depth.setTest(!0),kt.buffers.depth.setMask(!0),kt.buffers.color.setMask(!0),kt.setPolygonOffset(!1)}function Ho(w,q,tt,Q){if((tt.isScene===!0?tt.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[Q.id]===void 0&&(v.state.transmissionRenderTarget[Q.id]=new vr(1,1,{generateMipmaps:!0,type:se.has("EXT_color_buffer_half_float")||se.has("EXT_color_buffer_float")?No:ra,minFilter:_r,samples:4,stencilBuffer:u,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Re.workingColorSpace}));const Mt=v.state.transmissionRenderTarget[Q.id],Rt=Q.viewport||B;Mt.setSize(Rt.z*D.transmissionResolutionScale,Rt.w*D.transmissionResolutionScale);const Ot=D.getRenderTarget();D.setRenderTarget(Mt),D.getClearColor(ft),lt=D.getClearAlpha(),lt<1&&D.setClearColor(16777215,.5),D.clear(),Ce&&qt.render(tt);const Nt=D.toneMapping;D.toneMapping=za;const te=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),v.setupLightsView(Q),dt===!0&&Tt.setGlobalState(D.clippingPlanes,Q),Hn(w,tt,Q),L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt),se.has("WEBGL_multisampled_render_to_texture")===!1){let ee=!1;for(let Yt=0,_e=q.length;Yt<_e;Yt++){const ge=q[Yt],Ie=ge.object,Te=ge.geometry,ne=ge.material,Zt=ge.group;if(ne.side===ea&&Ie.layers.test(Q.layers)){const an=ne.side;ne.side=In,ne.needsUpdate=!0,en(Ie,tt,Q,Te,ne,Zt),ne.side=an,ne.needsUpdate=!0,ee=!0}}ee===!0&&(L.updateMultisampleRenderTarget(Mt),L.updateRenderTargetMipmap(Mt))}D.setRenderTarget(Ot),D.setClearColor(ft,lt),te!==void 0&&(Q.viewport=te),D.toneMapping=Nt}function Hn(w,q,tt){const Q=q.isScene===!0?q.overrideMaterial:null;for(let Z=0,Mt=w.length;Z<Mt;Z++){const Rt=w[Z],Ot=Rt.object,Nt=Rt.geometry,te=Q===null?Rt.material:Q,ee=Rt.group;Ot.layers.test(tt.layers)&&en(Ot,q,tt,Nt,te,ee)}}function en(w,q,tt,Q,Z,Mt){w.onBeforeRender(D,q,tt,Q,Z,Mt),w.modelViewMatrix.multiplyMatrices(tt.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),Z.onBeforeRender(D,q,tt,Q,w,Mt),Z.transparent===!0&&Z.side===ea&&Z.forceSinglePass===!1?(Z.side=In,Z.needsUpdate=!0,D.renderBufferDirect(tt,q,Q,Z,w,Mt),Z.side=Ba,Z.needsUpdate=!0,D.renderBufferDirect(tt,q,Q,Z,w,Mt),Z.side=ea):D.renderBufferDirect(tt,q,Q,Z,w,Mt),w.onAfterRender(D,q,tt,Q,Z,Mt)}function nn(w,q,tt){q.isScene!==!0&&(q=Me);const Q=Xt.get(w),Z=v.state.lights,Mt=v.state.shadowsArray,Rt=Z.state.version,Ot=Ht.getParameters(w,Z.state,Mt,q,tt),Nt=Ht.getProgramCacheKey(Ot);let te=Q.programs;Q.environment=w.isMeshStandardMaterial?q.environment:null,Q.fog=q.fog,Q.envMap=(w.isMeshStandardMaterial?it:T).get(w.envMap||Q.environment),Q.envMapRotation=Q.environment!==null&&w.envMap===null?q.environmentRotation:w.envMapRotation,te===void 0&&(w.addEventListener("dispose",$t),te=new Map,Q.programs=te);let ee=te.get(Nt);if(ee!==void 0){if(Q.currentProgram===ee&&Q.lightsStateVersion===Rt)return Sr(w,Ot),ee}else Ot.uniforms=Ht.getUniforms(w),w.onBeforeCompile(Ot,D),ee=Ht.acquireProgram(Ot,Nt),te.set(Nt,ee),Q.uniforms=Ot.uniforms;const Yt=Q.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Yt.clippingPlanes=Tt.uniform),Sr(w,Ot),Q.needsLights=Go(w),Q.lightsStateVersion=Rt,Q.needsLights&&(Yt.ambientLightColor.value=Z.state.ambient,Yt.lightProbe.value=Z.state.probe,Yt.directionalLights.value=Z.state.directional,Yt.directionalLightShadows.value=Z.state.directionalShadow,Yt.spotLights.value=Z.state.spot,Yt.spotLightShadows.value=Z.state.spotShadow,Yt.rectAreaLights.value=Z.state.rectArea,Yt.ltc_1.value=Z.state.rectAreaLTC1,Yt.ltc_2.value=Z.state.rectAreaLTC2,Yt.pointLights.value=Z.state.point,Yt.pointLightShadows.value=Z.state.pointShadow,Yt.hemisphereLights.value=Z.state.hemi,Yt.directionalShadowMap.value=Z.state.directionalShadowMap,Yt.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Yt.spotShadowMap.value=Z.state.spotShadowMap,Yt.spotLightMatrix.value=Z.state.spotLightMatrix,Yt.spotLightMap.value=Z.state.spotLightMap,Yt.pointShadowMap.value=Z.state.pointShadowMap,Yt.pointShadowMatrix.value=Z.state.pointShadowMatrix),Q.currentProgram=ee,Q.uniformsList=null,ee}function Ui(w){if(w.uniformsList===null){const q=w.currentProgram.getUniforms();w.uniformsList=Mc.seqWithValue(q.seq,w.uniforms)}return w.uniformsList}function Sr(w,q){const tt=Xt.get(w);tt.outputColorSpace=q.outputColorSpace,tt.batching=q.batching,tt.batchingColor=q.batchingColor,tt.instancing=q.instancing,tt.instancingColor=q.instancingColor,tt.instancingMorph=q.instancingMorph,tt.skinning=q.skinning,tt.morphTargets=q.morphTargets,tt.morphNormals=q.morphNormals,tt.morphColors=q.morphColors,tt.morphTargetsCount=q.morphTargetsCount,tt.numClippingPlanes=q.numClippingPlanes,tt.numIntersection=q.numClipIntersection,tt.vertexAlphas=q.vertexAlphas,tt.vertexTangents=q.vertexTangents,tt.toneMapping=q.toneMapping}function Uc(w,q,tt,Q,Z){q.isScene!==!0&&(q=Me),L.resetTextureUnits();const Mt=q.fog,Rt=Q.isMeshStandardMaterial?q.environment:null,Ot=G===null?D.outputColorSpace:G.isXRRenderTarget===!0?G.texture.colorSpace:ys,Nt=(Q.isMeshStandardMaterial?it:T).get(Q.envMap||Rt),te=Q.vertexColors===!0&&!!tt.attributes.color&&tt.attributes.color.itemSize===4,ee=!!tt.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Yt=!!tt.morphAttributes.position,_e=!!tt.morphAttributes.normal,ge=!!tt.morphAttributes.color;let Ie=za;Q.toneMapped&&(G===null||G.isXRRenderTarget===!0)&&(Ie=D.toneMapping);const Te=tt.morphAttributes.position||tt.morphAttributes.normal||tt.morphAttributes.color,ne=Te!==void 0?Te.length:0,Zt=Xt.get(Q),an=v.state.lights;if(dt===!0&&(vt===!0||w!==b)){const ke=w===b&&Q.id===R;Tt.setState(Q,w,ke)}let ve=!1;Q.version===Zt.__version?(Zt.needsLights&&Zt.lightsStateVersion!==an.state.version||Zt.outputColorSpace!==Ot||Z.isBatchedMesh&&Zt.batching===!1||!Z.isBatchedMesh&&Zt.batching===!0||Z.isBatchedMesh&&Zt.batchingColor===!0&&Z.colorTexture===null||Z.isBatchedMesh&&Zt.batchingColor===!1&&Z.colorTexture!==null||Z.isInstancedMesh&&Zt.instancing===!1||!Z.isInstancedMesh&&Zt.instancing===!0||Z.isSkinnedMesh&&Zt.skinning===!1||!Z.isSkinnedMesh&&Zt.skinning===!0||Z.isInstancedMesh&&Zt.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Zt.instancingColor===!1&&Z.instanceColor!==null||Z.isInstancedMesh&&Zt.instancingMorph===!0&&Z.morphTexture===null||Z.isInstancedMesh&&Zt.instancingMorph===!1&&Z.morphTexture!==null||Zt.envMap!==Nt||Q.fog===!0&&Zt.fog!==Mt||Zt.numClippingPlanes!==void 0&&(Zt.numClippingPlanes!==Tt.numPlanes||Zt.numIntersection!==Tt.numIntersection)||Zt.vertexAlphas!==te||Zt.vertexTangents!==ee||Zt.morphTargets!==Yt||Zt.morphNormals!==_e||Zt.morphColors!==ge||Zt.toneMapping!==Ie||Zt.morphTargetsCount!==ne)&&(ve=!0):(ve=!0,Zt.__version=Q.version);let On=Zt.currentProgram;ve===!0&&(On=nn(Q,q,Z));let ci=!1,Rn=!1,cn=!1;const Ue=On.getUniforms(),Cn=Zt.uniforms;if(kt.useProgram(On.program)&&(ci=!0,Rn=!0,cn=!0),Q.id!==R&&(R=Q.id,Rn=!0),ci||b!==w){kt.buffers.depth.getReversed()?(Et.copy(w.projectionMatrix),zS(Et),BS(Et),Ue.setValue(I,"projectionMatrix",Et)):Ue.setValue(I,"projectionMatrix",w.projectionMatrix),Ue.setValue(I,"viewMatrix",w.matrixWorldInverse);const mn=Ue.map.cameraPosition;mn!==void 0&&mn.setValue(I,Kt.setFromMatrixPosition(w.matrixWorld)),he.logarithmicDepthBuffer&&Ue.setValue(I,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&Ue.setValue(I,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Rn=!0,cn=!0)}if(Z.isSkinnedMesh){Ue.setOptional(I,Z,"bindMatrix"),Ue.setOptional(I,Z,"bindMatrixInverse");const ke=Z.skeleton;ke&&(ke.boneTexture===null&&ke.computeBoneTexture(),Ue.setValue(I,"boneTexture",ke.boneTexture,L))}Z.isBatchedMesh&&(Ue.setOptional(I,Z,"batchingTexture"),Ue.setValue(I,"batchingTexture",Z._matricesTexture,L),Ue.setOptional(I,Z,"batchingIdTexture"),Ue.setValue(I,"batchingIdTexture",Z._indirectTexture,L),Ue.setOptional(I,Z,"batchingColorTexture"),Z._colorsTexture!==null&&Ue.setValue(I,"batchingColorTexture",Z._colorsTexture,L));const Sn=tt.morphAttributes;if((Sn.position!==void 0||Sn.normal!==void 0||Sn.color!==void 0)&&Gt.update(Z,tt,On),(Rn||Zt.receiveShadow!==Z.receiveShadow)&&(Zt.receiveShadow=Z.receiveShadow,Ue.setValue(I,"receiveShadow",Z.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Cn.envMap.value=Nt,Cn.flipEnvMap.value=Nt.isCubeTexture&&Nt.isRenderTargetTexture===!1?-1:1),Q.isMeshStandardMaterial&&Q.envMap===null&&q.environment!==null&&(Cn.envMapIntensity.value=q.environmentIntensity),Rn&&(Ue.setValue(I,"toneMappingExposure",D.toneMappingExposure),Zt.needsLights&&Lc(Cn,cn),Mt&&Q.fog===!0&&wt.refreshFogUniforms(Cn,Mt),wt.refreshMaterialUniforms(Cn,Q,Y,rt,v.state.transmissionRenderTarget[w.id]),Mc.upload(I,Ui(Zt),Cn,L)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(Mc.upload(I,Ui(Zt),Cn,L),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&Ue.setValue(I,"center",Z.center),Ue.setValue(I,"modelViewMatrix",Z.modelViewMatrix),Ue.setValue(I,"normalMatrix",Z.normalMatrix),Ue.setValue(I,"modelMatrix",Z.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const ke=Q.uniformsGroups;for(let mn=0,yr=ke.length;mn<yr;mn++){const Pn=ke[mn];W.update(Pn,On),W.bind(Pn,On)}}return On}function Lc(w,q){w.ambientLightColor.needsUpdate=q,w.lightProbe.needsUpdate=q,w.directionalLights.needsUpdate=q,w.directionalLightShadows.needsUpdate=q,w.pointLights.needsUpdate=q,w.pointLightShadows.needsUpdate=q,w.spotLights.needsUpdate=q,w.spotLightShadows.needsUpdate=q,w.rectAreaLights.needsUpdate=q,w.hemisphereLights.needsUpdate=q}function Go(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return G},this.setRenderTargetTextures=function(w,q,tt){Xt.get(w.texture).__webglTexture=q,Xt.get(w.depthTexture).__webglTexture=tt;const Q=Xt.get(w);Q.__hasExternalTextures=!0,Q.__autoAllocateDepthBuffer=tt===void 0,Q.__autoAllocateDepthBuffer||se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,q){const tt=Xt.get(w);tt.__webglFramebuffer=q,tt.__useDefaultFramebuffer=q===void 0};const Ia=I.createFramebuffer();this.setRenderTarget=function(w,q=0,tt=0){G=w,z=q,F=tt;let Q=!0,Z=null,Mt=!1,Rt=!1;if(w){const Nt=Xt.get(w);if(Nt.__useDefaultFramebuffer!==void 0)kt.bindFramebuffer(I.FRAMEBUFFER,null),Q=!1;else if(Nt.__webglFramebuffer===void 0)L.setupRenderTarget(w);else if(Nt.__hasExternalTextures)L.rebindTextures(w,Xt.get(w.texture).__webglTexture,Xt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Yt=w.depthTexture;if(Nt.__boundDepthTexture!==Yt){if(Yt!==null&&Xt.has(Yt)&&(w.width!==Yt.image.width||w.height!==Yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(w)}}const te=w.texture;(te.isData3DTexture||te.isDataArrayTexture||te.isCompressedArrayTexture)&&(Rt=!0);const ee=Xt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ee[q])?Z=ee[q][tt]:Z=ee[q],Mt=!0):w.samples>0&&L.useMultisampledRTT(w)===!1?Z=Xt.get(w).__webglMultisampledFramebuffer:Array.isArray(ee)?Z=ee[tt]:Z=ee,B.copy(w.viewport),st.copy(w.scissor),nt=w.scissorTest}else B.copy($).multiplyScalar(Y).floor(),st.copy(yt).multiplyScalar(Y).floor(),nt=At;if(tt!==0&&(Z=Ia),kt.bindFramebuffer(I.FRAMEBUFFER,Z)&&Q&&kt.drawBuffers(w,Z),kt.viewport(B),kt.scissor(st),kt.setScissorTest(nt),Mt){const Nt=Xt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+q,Nt.__webglTexture,tt)}else if(Rt){const Nt=Xt.get(w.texture),te=q;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Nt.__webglTexture,tt,te)}else if(w!==null&&tt!==0){const Nt=Xt.get(w.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Nt.__webglTexture,tt)}R=-1},this.readRenderTargetPixels=function(w,q,tt,Q,Z,Mt,Rt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ot=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ot=Ot[Rt]),Ot){kt.bindFramebuffer(I.FRAMEBUFFER,Ot);try{const Nt=w.texture,te=Nt.format,ee=Nt.type;if(!he.textureFormatReadable(te)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!he.textureTypeReadable(ee)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=w.width-Q&&tt>=0&&tt<=w.height-Z&&I.readPixels(q,tt,Q,Z,jt.convert(te),jt.convert(ee),Mt)}finally{const Nt=G!==null?Xt.get(G).__webglFramebuffer:null;kt.bindFramebuffer(I.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(w,q,tt,Q,Z,Mt,Rt){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ot=Xt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Rt!==void 0&&(Ot=Ot[Rt]),Ot){const Nt=w.texture,te=Nt.format,ee=Nt.type;if(!he.textureFormatReadable(te))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!he.textureTypeReadable(ee))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(q>=0&&q<=w.width-Q&&tt>=0&&tt<=w.height-Z){kt.bindFramebuffer(I.FRAMEBUFFER,Ot);const Yt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.bufferData(I.PIXEL_PACK_BUFFER,Mt.byteLength,I.STREAM_READ),I.readPixels(q,tt,Q,Z,jt.convert(te),jt.convert(ee),0);const _e=G!==null?Xt.get(G).__webglFramebuffer:null;kt.bindFramebuffer(I.FRAMEBUFFER,_e);const ge=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await PS(I,ge,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Yt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,Mt),I.deleteBuffer(Yt),I.deleteSync(ge),Mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,q=null,tt=0){w.isTexture!==!0&&(fs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),q=arguments[0]||null,w=arguments[1]);const Q=Math.pow(2,-tt),Z=Math.floor(w.image.width*Q),Mt=Math.floor(w.image.height*Q),Rt=q!==null?q.x:0,Ot=q!==null?q.y:0;L.setTexture2D(w,0),I.copyTexSubImage2D(I.TEXTURE_2D,tt,0,0,Rt,Ot,Z,Mt),kt.unbindTexture()};const Rs=I.createFramebuffer(),Li=I.createFramebuffer();this.copyTextureToTexture=function(w,q,tt=null,Q=null,Z=0,Mt=null){w.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture function signature has changed."),Q=arguments[0]||null,w=arguments[1],q=arguments[2],Mt=arguments[3]||0,tt=null),Mt===null&&(Z!==0?(fs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Mt=Z,Z=0):Mt=0);let Rt,Ot,Nt,te,ee,Yt,_e,ge,Ie;const Te=w.isCompressedTexture?w.mipmaps[Mt]:w.image;if(tt!==null)Rt=tt.max.x-tt.min.x,Ot=tt.max.y-tt.min.y,Nt=tt.isBox3?tt.max.z-tt.min.z:1,te=tt.min.x,ee=tt.min.y,Yt=tt.isBox3?tt.min.z:0;else{const Sn=Math.pow(2,-Z);Rt=Math.floor(Te.width*Sn),Ot=Math.floor(Te.height*Sn),w.isDataArrayTexture?Nt=Te.depth:w.isData3DTexture?Nt=Math.floor(Te.depth*Sn):Nt=1,te=0,ee=0,Yt=0}Q!==null?(_e=Q.x,ge=Q.y,Ie=Q.z):(_e=0,ge=0,Ie=0);const ne=jt.convert(q.format),Zt=jt.convert(q.type);let an;q.isData3DTexture?(L.setTexture3D(q,0),an=I.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(L.setTexture2DArray(q,0),an=I.TEXTURE_2D_ARRAY):(L.setTexture2D(q,0),an=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,q.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,q.unpackAlignment);const ve=I.getParameter(I.UNPACK_ROW_LENGTH),On=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ci=I.getParameter(I.UNPACK_SKIP_PIXELS),Rn=I.getParameter(I.UNPACK_SKIP_ROWS),cn=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,Te.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Te.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,te),I.pixelStorei(I.UNPACK_SKIP_ROWS,ee),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Yt);const Ue=w.isDataArrayTexture||w.isData3DTexture,Cn=q.isDataArrayTexture||q.isData3DTexture;if(w.isDepthTexture){const Sn=Xt.get(w),ke=Xt.get(q),mn=Xt.get(Sn.__renderTarget),yr=Xt.get(ke.__renderTarget);kt.bindFramebuffer(I.READ_FRAMEBUFFER,mn.__webglFramebuffer),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,yr.__webglFramebuffer);for(let Pn=0;Pn<Nt;Pn++)Ue&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(w).__webglTexture,Z,Yt+Pn),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Xt.get(q).__webglTexture,Mt,Ie+Pn)),I.blitFramebuffer(te,ee,Rt,Ot,_e,ge,Rt,Ot,I.DEPTH_BUFFER_BIT,I.NEAREST);kt.bindFramebuffer(I.READ_FRAMEBUFFER,null),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(Z!==0||w.isRenderTargetTexture||Xt.has(w)){const Sn=Xt.get(w),ke=Xt.get(q);kt.bindFramebuffer(I.READ_FRAMEBUFFER,Rs),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,Li);for(let mn=0;mn<Nt;mn++)Ue?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Sn.__webglTexture,Z,Yt+mn):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Sn.__webglTexture,Z),Cn?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,ke.__webglTexture,Mt,Ie+mn):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,ke.__webglTexture,Mt),Z!==0?I.blitFramebuffer(te,ee,Rt,Ot,_e,ge,Rt,Ot,I.COLOR_BUFFER_BIT,I.NEAREST):Cn?I.copyTexSubImage3D(an,Mt,_e,ge,Ie+mn,te,ee,Rt,Ot):I.copyTexSubImage2D(an,Mt,_e,ge,te,ee,Rt,Ot);kt.bindFramebuffer(I.READ_FRAMEBUFFER,null),kt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Cn?w.isDataTexture||w.isData3DTexture?I.texSubImage3D(an,Mt,_e,ge,Ie,Rt,Ot,Nt,ne,Zt,Te.data):q.isCompressedArrayTexture?I.compressedTexSubImage3D(an,Mt,_e,ge,Ie,Rt,Ot,Nt,ne,Te.data):I.texSubImage3D(an,Mt,_e,ge,Ie,Rt,Ot,Nt,ne,Zt,Te):w.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,Mt,_e,ge,Rt,Ot,ne,Zt,Te.data):w.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,Mt,_e,ge,Te.width,Te.height,ne,Te.data):I.texSubImage2D(I.TEXTURE_2D,Mt,_e,ge,Rt,Ot,ne,Zt,Te);I.pixelStorei(I.UNPACK_ROW_LENGTH,ve),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,On),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ci),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rn),I.pixelStorei(I.UNPACK_SKIP_IMAGES,cn),Mt===0&&q.generateMipmaps&&I.generateMipmap(an),kt.unbindTexture()},this.copyTextureToTexture3D=function(w,q,tt=null,Q=null,Z=0){return w.isTexture!==!0&&(fs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),tt=arguments[0]||null,Q=arguments[1]||null,w=arguments[2],q=arguments[3],Z=arguments[4]||0),fs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,q,tt,Q,Z)},this.initRenderTarget=function(w){Xt.get(w).__webglFramebuffer===void 0&&L.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?L.setTextureCube(w,0):w.isData3DTexture?L.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?L.setTexture2DArray(w,0):L.setTexture2D(w,0),kt.unbindTexture()},this.resetState=function(){z=0,F=0,G=null,kt.reset(),De.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ia}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const i=this.getContext();i.drawingBufferColorspace=Re._getDrawingBufferColorSpace(t),i.unpackColorSpace=Re._getUnpackColorSpace()}}const rA=/^[og]\s*(.+)?/,sA=/^mtllib /,oA=/^usemtl /,lA=/^usemap /,Qg=/\s+/,Jg=new et,vh=new et,$g=new et,tv=new et,si=new et,_c=new fe;function cA(){const o={objects:[],object:{},vertices:[],normals:[],colors:[],uvs:[],materials:{},materialLibraries:[],startObject:function(t,i){if(this.object&&this.object.fromDeclaration===!1){this.object.name=t,this.object.fromDeclaration=i!==!1;return}const r=this.object&&typeof this.object.currentMaterial=="function"?this.object.currentMaterial():void 0;if(this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0),this.object={name:t||"",fromDeclaration:i!==!1,geometry:{vertices:[],normals:[],colors:[],uvs:[],hasUVIndices:!1},materials:[],smooth:!0,startMaterial:function(l,u){const h=this._finalize(!1);h&&(h.inherited||h.groupCount<=0)&&this.materials.splice(h.index,1);const d={index:this.materials.length,name:l||"",mtllib:Array.isArray(u)&&u.length>0?u[u.length-1]:"",smooth:h!==void 0?h.smooth:this.smooth,groupStart:h!==void 0?h.groupEnd:0,groupEnd:-1,groupCount:-1,inherited:!1,clone:function(m){const p={index:typeof m=="number"?m:this.index,name:this.name,mtllib:this.mtllib,smooth:this.smooth,groupStart:0,groupEnd:-1,groupCount:-1,inherited:!1};return p.clone=this.clone.bind(p),p}};return this.materials.push(d),d},currentMaterial:function(){if(this.materials.length>0)return this.materials[this.materials.length-1]},_finalize:function(l){const u=this.currentMaterial();if(u&&u.groupEnd===-1&&(u.groupEnd=this.geometry.vertices.length/3,u.groupCount=u.groupEnd-u.groupStart,u.inherited=!1),l&&this.materials.length>1)for(let h=this.materials.length-1;h>=0;h--)this.materials[h].groupCount<=0&&this.materials.splice(h,1);return l&&this.materials.length===0&&this.materials.push({name:"",smooth:this.smooth}),u}},r&&r.name&&typeof r.clone=="function"){const l=r.clone(0);l.inherited=!0,this.object.materials.push(l)}this.objects.push(this.object)},finalize:function(){this.object&&typeof this.object._finalize=="function"&&this.object._finalize(!0)},parseVertexIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseNormalIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/3)*3},parseUVIndex:function(t,i){const r=parseInt(t,10);return(r>=0?r-1:r+i/2)*2},addVertex:function(t,i,r){const l=this.vertices,u=this.object.geometry.vertices;u.push(l[t+0],l[t+1],l[t+2]),u.push(l[i+0],l[i+1],l[i+2]),u.push(l[r+0],l[r+1],l[r+2])},addVertexPoint:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addVertexLine:function(t){const i=this.vertices;this.object.geometry.vertices.push(i[t+0],i[t+1],i[t+2])},addNormal:function(t,i,r){const l=this.normals,u=this.object.geometry.normals;u.push(l[t+0],l[t+1],l[t+2]),u.push(l[i+0],l[i+1],l[i+2]),u.push(l[r+0],l[r+1],l[r+2])},addFaceNormal:function(t,i,r){const l=this.vertices,u=this.object.geometry.normals;Jg.fromArray(l,t),vh.fromArray(l,i),$g.fromArray(l,r),si.subVectors($g,vh),tv.subVectors(Jg,vh),si.cross(tv),si.normalize(),u.push(si.x,si.y,si.z),u.push(si.x,si.y,si.z),u.push(si.x,si.y,si.z)},addColor:function(t,i,r){const l=this.colors,u=this.object.geometry.colors;l[t]!==void 0&&u.push(l[t+0],l[t+1],l[t+2]),l[i]!==void 0&&u.push(l[i+0],l[i+1],l[i+2]),l[r]!==void 0&&u.push(l[r+0],l[r+1],l[r+2])},addUV:function(t,i,r){const l=this.uvs,u=this.object.geometry.uvs;u.push(l[t+0],l[t+1]),u.push(l[i+0],l[i+1]),u.push(l[r+0],l[r+1])},addDefaultUV:function(){const t=this.object.geometry.uvs;t.push(0,0),t.push(0,0),t.push(0,0)},addUVLine:function(t){const i=this.uvs;this.object.geometry.uvs.push(i[t+0],i[t+1])},addFace:function(t,i,r,l,u,h,d,m,p){const _=this.vertices.length;let g=this.parseVertexIndex(t,_),x=this.parseVertexIndex(i,_),M=this.parseVertexIndex(r,_);if(this.addVertex(g,x,M),this.addColor(g,x,M),d!==void 0&&d!==""){const E=this.normals.length;g=this.parseNormalIndex(d,E),x=this.parseNormalIndex(m,E),M=this.parseNormalIndex(p,E),this.addNormal(g,x,M)}else this.addFaceNormal(g,x,M);if(l!==void 0&&l!==""){const E=this.uvs.length;g=this.parseUVIndex(l,E),x=this.parseUVIndex(u,E),M=this.parseUVIndex(h,E),this.addUV(g,x,M),this.object.geometry.hasUVIndices=!0}else this.addDefaultUV()},addPointGeometry:function(t){this.object.geometry.type="Points";const i=this.vertices.length;for(let r=0,l=t.length;r<l;r++){const u=this.parseVertexIndex(t[r],i);this.addVertexPoint(u),this.addColor(u)}},addLineGeometry:function(t,i){this.object.geometry.type="Line";const r=this.vertices.length,l=this.uvs.length;for(let u=0,h=t.length;u<h;u++)this.addVertexLine(this.parseVertexIndex(t[u],r));for(let u=0,h=i.length;u<h;u++)this.addUVLine(this.parseUVIndex(i[u],l))}};return o.startObject("",!1),o}class uA extends vd{constructor(t){super(t),this.materials=null}load(t,i,r,l){const u=this,h=new Sy(this.manager);h.setPath(this.path),h.setRequestHeader(this.requestHeader),h.setWithCredentials(this.withCredentials),h.load(t,function(d){try{i(u.parse(d))}catch(m){l?l(m):console.error(m),u.manager.itemError(t)}},r,l)}setMaterials(t){return this.materials=t,this}parse(t){const i=new cA;t.indexOf(`\r
`)!==-1&&(t=t.replace(/\r\n/g,`
`)),t.indexOf(`\\
`)!==-1&&(t=t.replace(/\\\n/g,""));const r=t.split(`
`);let l=[];for(let d=0,m=r.length;d<m;d++){const p=r[d].trimStart();if(p.length===0)continue;const _=p.charAt(0);if(_!=="#")if(_==="v"){const g=p.split(Qg);switch(g[0]){case"v":i.vertices.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3])),g.length>=7?(_c.setRGB(parseFloat(g[4]),parseFloat(g[5]),parseFloat(g[6]),jn),i.colors.push(_c.r,_c.g,_c.b)):i.colors.push(void 0,void 0,void 0);break;case"vn":i.normals.push(parseFloat(g[1]),parseFloat(g[2]),parseFloat(g[3]));break;case"vt":i.uvs.push(parseFloat(g[1]),parseFloat(g[2]));break}}else if(_==="f"){const x=p.slice(1).trim().split(Qg),M=[];for(let A=0,y=x.length;A<y;A++){const v=x[A];if(v.length>0){const P=v.split("/");M.push(P)}}const E=M[0];for(let A=1,y=M.length-1;A<y;A++){const v=M[A],P=M[A+1];i.addFace(E[0],v[0],P[0],E[1],v[1],P[1],E[2],v[2],P[2])}}else if(_==="l"){const g=p.substring(1).trim().split(" ");let x=[];const M=[];if(p.indexOf("/")===-1)x=g;else for(let E=0,A=g.length;E<A;E++){const y=g[E].split("/");y[0]!==""&&x.push(y[0]),y[1]!==""&&M.push(y[1])}i.addLineGeometry(x,M)}else if(_==="p"){const x=p.slice(1).trim().split(" ");i.addPointGeometry(x)}else if((l=rA.exec(p))!==null){const g=(" "+l[0].slice(1).trim()).slice(1);i.startObject(g)}else if(oA.test(p))i.object.startMaterial(p.substring(7).trim(),i.materialLibraries);else if(sA.test(p))i.materialLibraries.push(p.substring(7).trim());else if(lA.test(p))console.warn('THREE.OBJLoader: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.');else if(_==="s"){if(l=p.split(" "),l.length>1){const x=l[1].trim().toLowerCase();i.object.smooth=x!=="0"&&x!=="off"}else i.object.smooth=!0;const g=i.object.currentMaterial();g&&(g.smooth=i.object.smooth)}else{if(p==="\0")continue;console.warn('THREE.OBJLoader: Unexpected line: "'+p+'"')}}i.finalize();const u=new Co;if(u.materialLibraries=[].concat(i.materialLibraries),!(i.objects.length===1&&i.objects[0].geometry.vertices.length===0)===!0)for(let d=0,m=i.objects.length;d<m;d++){const p=i.objects[d],_=p.geometry,g=p.materials,x=_.type==="Line",M=_.type==="Points";let E=!1;if(_.vertices.length===0)continue;const A=new li;A.setAttribute("position",new xn(_.vertices,3)),_.normals.length>0&&A.setAttribute("normal",new xn(_.normals,3)),_.colors.length>0&&(E=!0,A.setAttribute("color",new xn(_.colors,3))),_.hasUVIndices===!0&&A.setAttribute("uv",new xn(_.uvs,2));const y=[];for(let P=0,O=g.length;P<O;P++){const D=g[P],H=D.name+"_"+D.smooth+"_"+E;let z=i.materials[H];if(this.materials!==null){if(z=this.materials.create(D.name),x&&z&&!(z instanceof Uo)){const F=new Uo;sa.prototype.copy.call(F,z),F.color.copy(z.color),z=F}else if(M&&z&&!(z instanceof wo)){const F=new wo({size:10,sizeAttenuation:!1});sa.prototype.copy.call(F,z),F.color.copy(z.color),F.map=z.map,z=F}}z===void 0&&(x?z=new Uo:M?z=new wo({size:1,sizeAttenuation:!1}):z=new py,z.name=D.name,z.flatShading=!D.smooth,z.vertexColors=E,i.materials[H]=z),y.push(z)}let v;if(y.length>1){for(let P=0,O=g.length;P<O;P++){const D=g[P];A.addGroup(D.groupStart,D.groupCount,P)}x?v=new rd(A,y):M?v=new fh(A,y):v=new xi(A,y)}else x?v=new rd(A,y[0]):M?v=new fh(A,y[0]):v=new xi(A,y[0]);v.name=p.name,u.add(v)}else if(i.vertices.length>0){const d=new wo({size:1,sizeAttenuation:!1}),m=new li;m.setAttribute("position",new xn(i.vertices,3)),i.colors.length>0&&i.colors[0]!==void 0&&(m.setAttribute("color",new xn(i.colors,3)),d.vertexColors=!0);const p=new fh(m,d);u.add(p)}return u}}const fA=()=>(Y_.useRef(null),Y_.useEffect(()=>{var O,D,H,z,F;const o=document.querySelector(".display__canvas"),t=new ly,i=new aA({canvas:o});i.setClearColor(13751773,1);const r=new oi(60,window.innerWidth/window.innerHeight,.1,200);r.position.set(0,40,80),i.setSize(window.innerWidth,window.innerHeight);let l=null;new uA().load("./body.obj",G=>{G.traverse(R=>{if(R.isMesh){const b=R,B=new dy(b.geometry),st=B.attributes.position.array,nt=[],ft=new fe(65535),lt=new fe(8388736),k=new fe(16716947);for(let gt=0;gt<st.length;gt+=1){st[gt];const U=st[gt+1];st[gt+2];const $=(U+10)/50,yt=new fe;$<.5?yt.lerpColors(ft,lt,$*2):yt.lerpColors(lt,k,($-.5)*2),nt.push(yt.r,yt.g,yt.b)}B.setAttribute("color",new xn(nt,3));const rt=new Uo({vertexColors:!0}),Y=new rd(B,rt);Y.scale.set(1,1,1),Y.position.set(0,0,0),l=Y,t.add(Y),i.render(t,r),setTimeout(()=>{},100)}})},G=>{console.log(`${G.loaded/G.total*100}% loaded`)},G=>{console.error("An error happened while loading the model:",G)});const h=2,d=.048,m=13751773,p=P(window.innerHeight,window.innerWidth,h,d),_=new hy(p);t.background=_,i.render(t,r),window.addEventListener("resize",()=>{r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix(),i.setSize(window.innerWidth,window.innerHeight),i.render(t,r)}),i.render(t,r),document.querySelectorAll(".wellness_report__item").forEach((G,R)=>{G.addEventListener("click",function(b){G.getAttribute("id")==="upper"?M():E()})});let g=!1,x="none";function M(G){var R,b,B,st;if((R=document.querySelector("#lower"))==null||R.classList.remove("active"),x==="upper"){(b=document.querySelector("#upper"))==null||b.classList.remove("active"),A();return}else(B=document.querySelector("#upper"))==null||B.classList.add("active"),(st=document.querySelector(".wellness_report__card__issues_count"))==null||st.classList.remove("hidden"),document.querySelector(".wellness_report__card__issues_count").innerText="+3",y({y:-20,z:50},"upper")}function E(G){var R,b,B,st;if((R=document.querySelector("#upper"))==null||R.classList.remove("active"),x==="lower"){A(),(b=document.querySelector("#lower"))==null||b.classList.remove("active");return}else(B=document.querySelector("#lower"))==null||B.classList.add("active"),(st=document.querySelector(".wellness_report__card__issues_count"))==null||st.classList.remove("hidden"),document.querySelector(".wellness_report__card__issues_count").innerText="+1",y({y:0,z:50},"lower")}function A(){var R;const G={y:0,z:0};(R=document.querySelector(".wellness_report__card__issues_count"))==null||R.classList.add("hidden"),y(G,"none")}function y(G,R){if(g)return;g=!0;const b=300,B=Date.now(),st={y:(l==null?void 0:l.position.y)??0,z:(l==null?void 0:l.position.z)??0};function nt(){const ft=Date.now()-B,lt=Math.min(ft/b,1);l&&(l.position.y=st.y+(G.y-st.y)*lt,l.position.z=st.z+(G.z-st.z)*lt),i.render(t,r),lt<1?requestAnimationFrame(nt):(g=!1,x=R)}nt()}const v={zoomStep:10,zoomIn(){if(l&&l.position.z<70){const G={y:l.position.y,z:l.position.z+this.zoomStep};y(G,x)}},zoomOut(){if(l&&l.position.z>-30){const G={y:l.position.y,z:l.position.z-this.zoomStep};y(G,x)}},toggleFullscreen(){var G,R;document.fullscreenElement?document.exitFullscreen&&(document.exitFullscreen(),(R=document.querySelector(".controls__full_screen"))==null||R.classList.remove("active")):(document.documentElement.requestFullscreen(),(G=document.querySelector(".controls__full_screen"))==null||G.classList.add("active"))}};(O=document.querySelector(".controls__zoom_in"))==null||O.addEventListener("click",()=>v.zoomIn()),(D=document.querySelector(".controls__zoom_out"))==null||D.addEventListener("click",()=>v.zoomOut()),(H=document.querySelector(".controls__full_screen"))==null||H.addEventListener("click",()=>v.toggleFullscreen()),(z=document.querySelector("#menu"))==null||z.addEventListener("click",()=>document.querySelector(".navbar").style.display="flex"),(F=document.querySelector(".navbar__cross"))==null||F.addEventListener("click",()=>document.querySelector(".navbar").style.display="none");function P(G=256,R=256,b=8,B=.2){const st=document.createElement("canvas");st.width=G,st.height=R;const nt=st.getContext("2d"),ft=nt.createImageData(G,R),lt=ft.data,k=new fe(m),rt=k.r*255,Y=k.g*255,gt=k.b*255;for(let U=0;U<R;U+=b)for(let $=0;$<G;$+=b){const yt=Math.random()*255,At=rt+(yt-rt)*B,j=Y+(yt-Y)*B,dt=gt+(yt-gt)*B;for(let vt=0;vt<b;vt++)for(let Et=0;Et<b;Et++){const bt=((U+vt)*G+($+Et))*4;bt>=lt.length||(lt[bt]=At,lt[bt+1]=j,lt[bt+2]=dt,lt[bt+3]=255)}}return nt.putImageData(ft,0,0),st}},[]),Qt.jsx("canvas",{className:"display__canvas"})),hA=()=>Qt.jsxs(Qt.Fragment,{children:[Qt.jsxs("div",{className:"header",children:[Qt.jsx("div",{className:"logo_box",children:Qt.jsx("a",{href:"#",className:"logo_box__logo"})}),Qt.jsxs("div",{className:"navbar",children:[Qt.jsx("div",{className:"navbar__cross hidden"}),Qt.jsxs("a",{href:"#",className:"navbar__item active",id:"dashboard",children:[Qt.jsx("div",{className:"navbar__item__icon"}),Qt.jsx("span",{className:"navbar__item__text",children:"Dashboard"})]}),Qt.jsxs("a",{href:"#",className:"navbar__item",id:"Goals",children:[Qt.jsx("div",{className:"navbar__item__icon"}),Qt.jsx("span",{className:"navbar__item__text",children:"Goals"})]}),Qt.jsxs("a",{href:"#",className:"navbar__item",id:"Report",children:[Qt.jsx("div",{className:"navbar__item__icon"}),Qt.jsx("span",{className:"navbar__item__text",children:"Report"})]}),Qt.jsxs("a",{href:"#",className:"navbar__item",id:"Supplements",children:[Qt.jsx("div",{className:"navbar__item__icon"}),Qt.jsx("span",{className:"navbar__item__text",children:"Supplements"})]}),Qt.jsxs("a",{href:"#",className:"navbar__item",id:"Tests",children:[Qt.jsx("div",{className:"navbar__item__icon"}),Qt.jsx("span",{className:"navbar__item__text",children:"Tests"})]})]}),Qt.jsxs("div",{className:"account_info",children:[Qt.jsx("div",{className:"account_info__item",id:"notifications",children:Qt.jsx("div",{className:"account_info__item__icon"})}),Qt.jsx("div",{className:"account_info__item",id:"user",children:Qt.jsx("div",{className:"account_info__item__icon"})}),Qt.jsx("div",{className:"account_info__item hidden",id:"menu",children:Qt.jsx("div",{className:"account_info__item__icon"})})]})]}),Qt.jsxs("div",{className:"wellness_report",children:[Qt.jsx("div",{className:"wellness_report__item",id:"upper",children:Qt.jsx("div",{className:"wellness_report__item__icon"})}),Qt.jsx("div",{className:"wellness_report__item",id:"lower",children:Qt.jsx("div",{className:"wellness_report__item__icon"})})]}),Qt.jsxs("div",{className:"wellness_report__card",children:[Qt.jsx("div",{className:"wellness_report__card__issues_count hidden",children:"+2"}),Qt.jsx("div",{className:"wellness_report__card__description",children:"More Risks considered for your wellness"}),Qt.jsxs("div",{className:"wellness_report__card__progressbar",children:[Qt.jsx("div",{className:"wellness_report__card__progressbar__bar"}),Qt.jsx("div",{className:"wellness_report__card__progressbar__percentage",children:"100%"})]}),Qt.jsx("a",{href:"#",className:"wellness_report__card__order_test",children:"Order DNA Test"})]}),Qt.jsxs("div",{className:"controls",children:[Qt.jsx("div",{className:"controls__zoom_in",id:"zoom_in",children:Qt.jsx("div",{className:"controls__zoom_in__icon"})}),Qt.jsx("div",{className:"controls__zoom_out",id:"zoom_out",children:Qt.jsx("div",{className:"controls__zoom_out__icon"})}),Qt.jsx("div",{className:"controls__full_screen",id:"full_screen",children:Qt.jsx("div",{className:"controls__full_screen__icon"})})]}),Qt.jsx("div",{className:"display__layer",children:Qt.jsx(fA,{})})]});Wx.createRoot(document.getElementById("root")).render(Qt.jsx(hA,{}));
