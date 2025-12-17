(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();function h1(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ep={exports:{}},Kl={};var Ax;function d1(){if(Ax)return Kl;Ax=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(a,o,l){var c=null;if(l!==void 0&&(c=""+l),o.key!==void 0&&(c=""+o.key),"key"in o){l={};for(var f in o)f!=="key"&&(l[f]=o[f])}else l=o;return o=l.ref,{$$typeof:r,type:a,key:c,ref:o!==void 0?o:null,props:l}}return Kl.Fragment=t,Kl.jsx=n,Kl.jsxs=n,Kl}var Rx;function p1(){return Rx||(Rx=1,ep.exports=d1()),ep.exports}var _e=p1(),np={exports:{}},ae={};var Cx;function m1(){if(Cx)return ae;Cx=1;var r=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),g=Symbol.for("react.activity"),v=Symbol.iterator;function S(z){return z===null||typeof z!="object"?null:(z=v&&z[v]||z["@@iterator"],typeof z=="function"?z:null)}var T={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,y={};function x(z,J,ht){this.props=z,this.context=J,this.refs=y,this.updater=ht||T}x.prototype.isReactComponent={},x.prototype.setState=function(z,J){if(typeof z!="object"&&typeof z!="function"&&z!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,z,J,"setState")},x.prototype.forceUpdate=function(z){this.updater.enqueueForceUpdate(this,z,"forceUpdate")};function D(){}D.prototype=x.prototype;function w(z,J,ht){this.props=z,this.context=J,this.refs=y,this.updater=ht||T}var C=w.prototype=new D;C.constructor=w,M(C,x.prototype),C.isPureReactComponent=!0;var R=Array.isArray;function P(){}var U={H:null,A:null,T:null,S:null},F=Object.prototype.hasOwnProperty;function b(z,J,ht){var yt=ht.ref;return{$$typeof:r,type:z,key:J,ref:yt!==void 0?yt:null,props:ht}}function L(z,J){return b(z.type,J,z.props)}function V(z){return typeof z=="object"&&z!==null&&z.$$typeof===r}function Y(z){var J={"=":"=0",":":"=2"};return"$"+z.replace(/[=:]/g,function(ht){return J[ht]})}var Z=/\/+/g;function st(z,J){return typeof z=="object"&&z!==null&&z.key!=null?Y(""+z.key):J.toString(36)}function it(z){switch(z.status){case"fulfilled":return z.value;case"rejected":throw z.reason;default:switch(typeof z.status=="string"?z.then(P,P):(z.status="pending",z.then(function(J){z.status==="pending"&&(z.status="fulfilled",z.value=J)},function(J){z.status==="pending"&&(z.status="rejected",z.reason=J)})),z.status){case"fulfilled":return z.value;case"rejected":throw z.reason}}throw z}function I(z,J,ht,yt,Ct){var tt=typeof z;(tt==="undefined"||tt==="boolean")&&(z=null);var ut=!1;if(z===null)ut=!0;else switch(tt){case"bigint":case"string":case"number":ut=!0;break;case"object":switch(z.$$typeof){case r:case t:ut=!0;break;case _:return ut=z._init,I(ut(z._payload),J,ht,yt,Ct)}}if(ut)return Ct=Ct(z),ut=yt===""?"."+st(z,0):yt,R(Ct)?(ht="",ut!=null&&(ht=ut.replace(Z,"$&/")+"/"),I(Ct,J,ht,"",function(Bt){return Bt})):Ct!=null&&(V(Ct)&&(Ct=L(Ct,ht+(Ct.key==null||z&&z.key===Ct.key?"":(""+Ct.key).replace(Z,"$&/")+"/")+ut)),J.push(Ct)),1;ut=0;var Tt=yt===""?".":yt+":";if(R(z))for(var Ht=0;Ht<z.length;Ht++)yt=z[Ht],tt=Tt+st(yt,Ht),ut+=I(yt,J,ht,tt,Ct);else if(Ht=S(z),typeof Ht=="function")for(z=Ht.call(z),Ht=0;!(yt=z.next()).done;)yt=yt.value,tt=Tt+st(yt,Ht++),ut+=I(yt,J,ht,tt,Ct);else if(tt==="object"){if(typeof z.then=="function")return I(it(z),J,ht,yt,Ct);throw J=String(z),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(z).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.")}return ut}function H(z,J,ht){if(z==null)return z;var yt=[],Ct=0;return I(z,yt,"","",function(tt){return J.call(ht,tt,Ct++)}),yt}function Q(z){if(z._status===-1){var J=z._result;J=J(),J.then(function(ht){(z._status===0||z._status===-1)&&(z._status=1,z._result=ht)},function(ht){(z._status===0||z._status===-1)&&(z._status=2,z._result=ht)}),z._status===-1&&(z._status=0,z._result=J)}if(z._status===1)return z._result.default;throw z._result}var xt=typeof reportError=="function"?reportError:function(z){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var J=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof z=="object"&&z!==null&&typeof z.message=="string"?String(z.message):String(z),error:z});if(!window.dispatchEvent(J))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",z);return}console.error(z)},gt={map:H,forEach:function(z,J,ht){H(z,function(){J.apply(this,arguments)},ht)},count:function(z){var J=0;return H(z,function(){J++}),J},toArray:function(z){return H(z,function(J){return J})||[]},only:function(z){if(!V(z))throw Error("React.Children.only expected to receive a single React element child.");return z}};return ae.Activity=g,ae.Children=gt,ae.Component=x,ae.Fragment=n,ae.Profiler=o,ae.PureComponent=w,ae.StrictMode=a,ae.Suspense=p,ae.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=U,ae.__COMPILER_RUNTIME={__proto__:null,c:function(z){return U.H.useMemoCache(z)}},ae.cache=function(z){return function(){return z.apply(null,arguments)}},ae.cacheSignal=function(){return null},ae.cloneElement=function(z,J,ht){if(z==null)throw Error("The argument must be a React element, but you passed "+z+".");var yt=M({},z.props),Ct=z.key;if(J!=null)for(tt in J.key!==void 0&&(Ct=""+J.key),J)!F.call(J,tt)||tt==="key"||tt==="__self"||tt==="__source"||tt==="ref"&&J.ref===void 0||(yt[tt]=J[tt]);var tt=arguments.length-2;if(tt===1)yt.children=ht;else if(1<tt){for(var ut=Array(tt),Tt=0;Tt<tt;Tt++)ut[Tt]=arguments[Tt+2];yt.children=ut}return b(z.type,Ct,yt)},ae.createContext=function(z){return z={$$typeof:c,_currentValue:z,_currentValue2:z,_threadCount:0,Provider:null,Consumer:null},z.Provider=z,z.Consumer={$$typeof:l,_context:z},z},ae.createElement=function(z,J,ht){var yt,Ct={},tt=null;if(J!=null)for(yt in J.key!==void 0&&(tt=""+J.key),J)F.call(J,yt)&&yt!=="key"&&yt!=="__self"&&yt!=="__source"&&(Ct[yt]=J[yt]);var ut=arguments.length-2;if(ut===1)Ct.children=ht;else if(1<ut){for(var Tt=Array(ut),Ht=0;Ht<ut;Ht++)Tt[Ht]=arguments[Ht+2];Ct.children=Tt}if(z&&z.defaultProps)for(yt in ut=z.defaultProps,ut)Ct[yt]===void 0&&(Ct[yt]=ut[yt]);return b(z,tt,Ct)},ae.createRef=function(){return{current:null}},ae.forwardRef=function(z){return{$$typeof:f,render:z}},ae.isValidElement=V,ae.lazy=function(z){return{$$typeof:_,_payload:{_status:-1,_result:z},_init:Q}},ae.memo=function(z,J){return{$$typeof:d,type:z,compare:J===void 0?null:J}},ae.startTransition=function(z){var J=U.T,ht={};U.T=ht;try{var yt=z(),Ct=U.S;Ct!==null&&Ct(ht,yt),typeof yt=="object"&&yt!==null&&typeof yt.then=="function"&&yt.then(P,xt)}catch(tt){xt(tt)}finally{J!==null&&ht.types!==null&&(J.types=ht.types),U.T=J}},ae.unstable_useCacheRefresh=function(){return U.H.useCacheRefresh()},ae.use=function(z){return U.H.use(z)},ae.useActionState=function(z,J,ht){return U.H.useActionState(z,J,ht)},ae.useCallback=function(z,J){return U.H.useCallback(z,J)},ae.useContext=function(z){return U.H.useContext(z)},ae.useDebugValue=function(){},ae.useDeferredValue=function(z,J){return U.H.useDeferredValue(z,J)},ae.useEffect=function(z,J){return U.H.useEffect(z,J)},ae.useEffectEvent=function(z){return U.H.useEffectEvent(z)},ae.useId=function(){return U.H.useId()},ae.useImperativeHandle=function(z,J,ht){return U.H.useImperativeHandle(z,J,ht)},ae.useInsertionEffect=function(z,J){return U.H.useInsertionEffect(z,J)},ae.useLayoutEffect=function(z,J){return U.H.useLayoutEffect(z,J)},ae.useMemo=function(z,J){return U.H.useMemo(z,J)},ae.useOptimistic=function(z,J){return U.H.useOptimistic(z,J)},ae.useReducer=function(z,J,ht){return U.H.useReducer(z,J,ht)},ae.useRef=function(z){return U.H.useRef(z)},ae.useState=function(z){return U.H.useState(z)},ae.useSyncExternalStore=function(z,J,ht){return U.H.useSyncExternalStore(z,J,ht)},ae.useTransition=function(){return U.H.useTransition()},ae.version="19.2.3",ae}var wx;function c_(){return wx||(wx=1,np.exports=m1()),np.exports}var Kt=c_();const _1=h1(Kt);var ip={exports:{}},Ql={},ap={exports:{}},rp={};var Dx;function g1(){return Dx||(Dx=1,(function(r){function t(I,H){var Q=I.length;I.push(H);t:for(;0<Q;){var xt=Q-1>>>1,gt=I[xt];if(0<o(gt,H))I[xt]=H,I[Q]=gt,Q=xt;else break t}}function n(I){return I.length===0?null:I[0]}function a(I){if(I.length===0)return null;var H=I[0],Q=I.pop();if(Q!==H){I[0]=Q;t:for(var xt=0,gt=I.length,z=gt>>>1;xt<z;){var J=2*(xt+1)-1,ht=I[J],yt=J+1,Ct=I[yt];if(0>o(ht,Q))yt<gt&&0>o(Ct,ht)?(I[xt]=Ct,I[yt]=Q,xt=yt):(I[xt]=ht,I[J]=Q,xt=J);else if(yt<gt&&0>o(Ct,Q))I[xt]=Ct,I[yt]=Q,xt=yt;else break t}}return H}function o(I,H){var Q=I.sortIndex-H.sortIndex;return Q!==0?Q:I.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var c=Date,f=c.now();r.unstable_now=function(){return c.now()-f}}var p=[],d=[],_=1,g=null,v=3,S=!1,T=!1,M=!1,y=!1,x=typeof setTimeout=="function"?setTimeout:null,D=typeof clearTimeout=="function"?clearTimeout:null,w=typeof setImmediate<"u"?setImmediate:null;function C(I){for(var H=n(d);H!==null;){if(H.callback===null)a(d);else if(H.startTime<=I)a(d),H.sortIndex=H.expirationTime,t(p,H);else break;H=n(d)}}function R(I){if(M=!1,C(I),!T)if(n(p)!==null)T=!0,P||(P=!0,Y());else{var H=n(d);H!==null&&it(R,H.startTime-I)}}var P=!1,U=-1,F=5,b=-1;function L(){return y?!0:!(r.unstable_now()-b<F)}function V(){if(y=!1,P){var I=r.unstable_now();b=I;var H=!0;try{t:{T=!1,M&&(M=!1,D(U),U=-1),S=!0;var Q=v;try{e:{for(C(I),g=n(p);g!==null&&!(g.expirationTime>I&&L());){var xt=g.callback;if(typeof xt=="function"){g.callback=null,v=g.priorityLevel;var gt=xt(g.expirationTime<=I);if(I=r.unstable_now(),typeof gt=="function"){g.callback=gt,C(I),H=!0;break e}g===n(p)&&a(p),C(I)}else a(p);g=n(p)}if(g!==null)H=!0;else{var z=n(d);z!==null&&it(R,z.startTime-I),H=!1}}break t}finally{g=null,v=Q,S=!1}H=void 0}}finally{H?Y():P=!1}}}var Y;if(typeof w=="function")Y=function(){w(V)};else if(typeof MessageChannel<"u"){var Z=new MessageChannel,st=Z.port2;Z.port1.onmessage=V,Y=function(){st.postMessage(null)}}else Y=function(){x(V,0)};function it(I,H){U=x(function(){I(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(I){I.callback=null},r.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<I?Math.floor(1e3/I):5},r.unstable_getCurrentPriorityLevel=function(){return v},r.unstable_next=function(I){switch(v){case 1:case 2:case 3:var H=3;break;default:H=v}var Q=v;v=H;try{return I()}finally{v=Q}},r.unstable_requestPaint=function(){y=!0},r.unstable_runWithPriority=function(I,H){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var Q=v;v=I;try{return H()}finally{v=Q}},r.unstable_scheduleCallback=function(I,H,Q){var xt=r.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?xt+Q:xt):Q=xt,I){case 1:var gt=-1;break;case 2:gt=250;break;case 5:gt=1073741823;break;case 4:gt=1e4;break;default:gt=5e3}return gt=Q+gt,I={id:_++,callback:H,priorityLevel:I,startTime:Q,expirationTime:gt,sortIndex:-1},Q>xt?(I.sortIndex=Q,t(d,I),n(p)===null&&I===n(d)&&(M?(D(U),U=-1):M=!0,it(R,Q-xt))):(I.sortIndex=gt,t(p,I),T||S||(T=!0,P||(P=!0,Y()))),I},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(I){var H=v;return function(){var Q=v;v=H;try{return I.apply(this,arguments)}finally{v=Q}}}})(rp)),rp}var Ux;function v1(){return Ux||(Ux=1,ap.exports=g1()),ap.exports}var sp={exports:{}},kn={};var Lx;function x1(){if(Lx)return kn;Lx=1;var r=c_();function t(p){var d="https://react.dev/errors/"+p;if(1<arguments.length){d+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)d+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+p+"; visit "+d+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function n(){}var a={d:{f:n,r:function(){throw Error(t(522))},D:n,C:n,L:n,m:n,X:n,S:n,M:n},p:0,findDOMNode:null},o=Symbol.for("react.portal");function l(p,d,_){var g=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:o,key:g==null?null:""+g,children:p,containerInfo:d,implementation:_}}var c=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function f(p,d){if(p==="font")return"";if(typeof d=="string")return d==="use-credentials"?d:""}return kn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,kn.createPortal=function(p,d){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!d||d.nodeType!==1&&d.nodeType!==9&&d.nodeType!==11)throw Error(t(299));return l(p,d,null,_)},kn.flushSync=function(p){var d=c.T,_=a.p;try{if(c.T=null,a.p=2,p)return p()}finally{c.T=d,a.p=_,a.d.f()}},kn.preconnect=function(p,d){typeof p=="string"&&(d?(d=d.crossOrigin,d=typeof d=="string"?d==="use-credentials"?d:"":void 0):d=null,a.d.C(p,d))},kn.prefetchDNS=function(p){typeof p=="string"&&a.d.D(p)},kn.preinit=function(p,d){if(typeof p=="string"&&d&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin),v=typeof d.integrity=="string"?d.integrity:void 0,S=typeof d.fetchPriority=="string"?d.fetchPriority:void 0;_==="style"?a.d.S(p,typeof d.precedence=="string"?d.precedence:void 0,{crossOrigin:g,integrity:v,fetchPriority:S}):_==="script"&&a.d.X(p,{crossOrigin:g,integrity:v,fetchPriority:S,nonce:typeof d.nonce=="string"?d.nonce:void 0})}},kn.preinitModule=function(p,d){if(typeof p=="string")if(typeof d=="object"&&d!==null){if(d.as==null||d.as==="script"){var _=f(d.as,d.crossOrigin);a.d.M(p,{crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0})}}else d==null&&a.d.M(p)},kn.preload=function(p,d){if(typeof p=="string"&&typeof d=="object"&&d!==null&&typeof d.as=="string"){var _=d.as,g=f(_,d.crossOrigin);a.d.L(p,_,{crossOrigin:g,integrity:typeof d.integrity=="string"?d.integrity:void 0,nonce:typeof d.nonce=="string"?d.nonce:void 0,type:typeof d.type=="string"?d.type:void 0,fetchPriority:typeof d.fetchPriority=="string"?d.fetchPriority:void 0,referrerPolicy:typeof d.referrerPolicy=="string"?d.referrerPolicy:void 0,imageSrcSet:typeof d.imageSrcSet=="string"?d.imageSrcSet:void 0,imageSizes:typeof d.imageSizes=="string"?d.imageSizes:void 0,media:typeof d.media=="string"?d.media:void 0})}},kn.preloadModule=function(p,d){if(typeof p=="string")if(d){var _=f(d.as,d.crossOrigin);a.d.m(p,{as:typeof d.as=="string"&&d.as!=="script"?d.as:void 0,crossOrigin:_,integrity:typeof d.integrity=="string"?d.integrity:void 0})}else a.d.m(p)},kn.requestFormReset=function(p){a.d.r(p)},kn.unstable_batchedUpdates=function(p,d){return p(d)},kn.useFormState=function(p,d,_){return c.H.useFormState(p,d,_)},kn.useFormStatus=function(){return c.H.useHostTransitionStatus()},kn.version="19.2.3",kn}var Nx;function S1(){if(Nx)return sp.exports;Nx=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),sp.exports=x1(),sp.exports}var Ox;function y1(){if(Ox)return Ql;Ox=1;var r=v1(),t=c_(),n=S1();function a(e){var i="https://react.dev/errors/"+e;if(1<arguments.length){i+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)i+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function o(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function l(e){var i=e,s=e;if(e.alternate)for(;i.return;)i=i.return;else{e=i;do i=e,(i.flags&4098)!==0&&(s=i.return),e=i.return;while(e)}return i.tag===3?s:null}function c(e){if(e.tag===13){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function f(e){if(e.tag===31){var i=e.memoizedState;if(i===null&&(e=e.alternate,e!==null&&(i=e.memoizedState)),i!==null)return i.dehydrated}return null}function p(e){if(l(e)!==e)throw Error(a(188))}function d(e){var i=e.alternate;if(!i){if(i=l(e),i===null)throw Error(a(188));return i!==e?null:e}for(var s=e,u=i;;){var h=s.return;if(h===null)break;var m=h.alternate;if(m===null){if(u=h.return,u!==null){s=u;continue}break}if(h.child===m.child){for(m=h.child;m;){if(m===s)return p(h),e;if(m===u)return p(h),i;m=m.sibling}throw Error(a(188))}if(s.return!==u.return)s=h,u=m;else{for(var E=!1,N=h.child;N;){if(N===s){E=!0,s=h,u=m;break}if(N===u){E=!0,u=h,s=m;break}N=N.sibling}if(!E){for(N=m.child;N;){if(N===s){E=!0,s=m,u=h;break}if(N===u){E=!0,u=m,s=h;break}N=N.sibling}if(!E)throw Error(a(189))}}if(s.alternate!==u)throw Error(a(190))}if(s.tag!==3)throw Error(a(188));return s.stateNode.current===s?e:i}function _(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e;for(e=e.child;e!==null;){if(i=_(e),i!==null)return i;e=e.sibling}return null}var g=Object.assign,v=Symbol.for("react.element"),S=Symbol.for("react.transitional.element"),T=Symbol.for("react.portal"),M=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),D=Symbol.for("react.consumer"),w=Symbol.for("react.context"),C=Symbol.for("react.forward_ref"),R=Symbol.for("react.suspense"),P=Symbol.for("react.suspense_list"),U=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),b=Symbol.for("react.activity"),L=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function Y(e){return e===null||typeof e!="object"?null:(e=V&&e[V]||e["@@iterator"],typeof e=="function"?e:null)}var Z=Symbol.for("react.client.reference");function st(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Z?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case M:return"Fragment";case x:return"Profiler";case y:return"StrictMode";case R:return"Suspense";case P:return"SuspenseList";case b:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case T:return"Portal";case w:return e.displayName||"Context";case D:return(e._context.displayName||"Context")+".Consumer";case C:var i=e.render;return e=e.displayName,e||(e=i.displayName||i.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case U:return i=e.displayName||null,i!==null?i:st(e.type)||"Memo";case F:i=e._payload,e=e._init;try{return st(e(i))}catch{}}return null}var it=Array.isArray,I=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,Q={pending:!1,data:null,method:null,action:null},xt=[],gt=-1;function z(e){return{current:e}}function J(e){0>gt||(e.current=xt[gt],xt[gt]=null,gt--)}function ht(e,i){gt++,xt[gt]=e.current,e.current=i}var yt=z(null),Ct=z(null),tt=z(null),ut=z(null);function Tt(e,i){switch(ht(tt,i),ht(Ct,e),ht(yt,null),i.nodeType){case 9:case 11:e=(e=i.documentElement)&&(e=e.namespaceURI)?jv(e):0;break;default:if(e=i.tagName,i=i.namespaceURI)i=jv(i),e=Kv(i,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}J(yt),ht(yt,e)}function Ht(){J(yt),J(Ct),J(tt)}function Bt(e){e.memoizedState!==null&&ht(ut,e);var i=yt.current,s=Kv(i,e.type);i!==s&&(ht(Ct,e),ht(yt,s))}function he(e){Ct.current===e&&(J(yt),J(Ct)),ut.current===e&&(J(ut),ql._currentValue=Q)}var rn,ge;function de(e){if(rn===void 0)try{throw Error()}catch(s){var i=s.stack.trim().match(/\n( *(at )?)/);rn=i&&i[1]||"",ge=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+rn+e+ge}var we=!1;function se(e,i){if(!e||we)return"";we=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(i){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(ct){var rt=ct}Reflect.construct(e,[],_t)}else{try{_t.call()}catch(ct){rt=ct}e.call(_t.prototype)}}else{try{throw Error()}catch(ct){rt=ct}(_t=e())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(ct){if(ct&&rt&&typeof ct.stack=="string")return[ct.stack,rt.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var m=u.DetermineComponentFrameRoot(),E=m[0],N=m[1];if(E&&N){var G=E.split(`
`),nt=N.split(`
`);for(h=u=0;u<G.length&&!G[u].includes("DetermineComponentFrameRoot");)u++;for(;h<nt.length&&!nt[h].includes("DetermineComponentFrameRoot");)h++;if(u===G.length||h===nt.length)for(u=G.length-1,h=nt.length-1;1<=u&&0<=h&&G[u]!==nt[h];)h--;for(;1<=u&&0<=h;u--,h--)if(G[u]!==nt[h]){if(u!==1||h!==1)do if(u--,h--,0>h||G[u]!==nt[h]){var dt=`
`+G[u].replace(" at new "," at ");return e.displayName&&dt.includes("<anonymous>")&&(dt=dt.replace("<anonymous>",e.displayName)),dt}while(1<=u&&0<=h);break}}}finally{we=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?de(s):""}function sn(e,i){switch(e.tag){case 26:case 27:case 5:return de(e.type);case 16:return de("Lazy");case 13:return e.child!==i&&i!==null?de("Suspense Fallback"):de("Suspense");case 19:return de("SuspenseList");case 0:case 15:return se(e.type,!1);case 11:return se(e.type.render,!1);case 1:return se(e.type,!0);case 31:return de("Activity");default:return""}}function k(e){try{var i="",s=null;do i+=sn(e,s),s=e,e=e.return;while(e);return i}catch(u){return`
Error generating stack: `+u.message+`
`+u.stack}}var Qe=Object.prototype.hasOwnProperty,Ee=r.unstable_scheduleCallback,Ne=r.unstable_cancelCallback,qt=r.unstable_shouldYield,B=r.unstable_requestPaint,A=r.unstable_now,q=r.unstable_getCurrentPriorityLevel,pt=r.unstable_ImmediatePriority,St=r.unstable_UserBlockingPriority,ft=r.unstable_NormalPriority,Zt=r.unstable_LowPriority,wt=r.unstable_IdlePriority,kt=r.log,ee=r.unstable_setDisableYieldValue,Et=null,bt=null;function zt(e){if(typeof kt=="function"&&ee(e),bt&&typeof bt.setStrictMode=="function")try{bt.setStrictMode(Et,e)}catch{}}var Pt=Math.clz32?Math.clz32:W,Dt=Math.log,le=Math.LN2;function W(e){return e>>>=0,e===0?32:31-(Dt(e)/le|0)|0}var Lt=256,At=262144,Ft=4194304;function Mt(e){var i=e&42;if(i!==0)return i;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function vt(e,i,s){var u=e.pendingLanes;if(u===0)return 0;var h=0,m=e.suspendedLanes,E=e.pingedLanes;e=e.warmLanes;var N=u&134217727;return N!==0?(u=N&~m,u!==0?h=Mt(u):(E&=N,E!==0?h=Mt(E):s||(s=N&~e,s!==0&&(h=Mt(s))))):(N=u&~m,N!==0?h=Mt(N):E!==0?h=Mt(E):s||(s=u&~e,s!==0&&(h=Mt(s)))),h===0?0:i!==0&&i!==h&&(i&m)===0&&(m=h&-h,s=i&-i,m>=s||m===32&&(s&4194048)!==0)?i:h}function Rt(e,i){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&i)===0}function ne(e,i){switch(e){case 1:case 2:case 4:case 8:case 64:return i+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fe(){var e=Ft;return Ft<<=1,(Ft&62914560)===0&&(Ft=4194304),e}function Te(e){for(var i=[],s=0;31>s;s++)i.push(e);return i}function Gn(e,i){e.pendingLanes|=i,i!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Wi(e,i,s,u,h,m){var E=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var N=e.entanglements,G=e.expirationTimes,nt=e.hiddenUpdates;for(s=E&~s;0<s;){var dt=31-Pt(s),_t=1<<dt;N[dt]=0,G[dt]=-1;var rt=nt[dt];if(rt!==null)for(nt[dt]=null,dt=0;dt<rt.length;dt++){var ct=rt[dt];ct!==null&&(ct.lane&=-536870913)}s&=~_t}u!==0&&Ou(e,u,0),m!==0&&h===0&&e.tag!==0&&(e.suspendedLanes|=m&~(E&~i))}function Ou(e,i,s){e.pendingLanes|=i,e.suspendedLanes&=~i;var u=31-Pt(i);e.entangledLanes|=i,e.entanglements[u]=e.entanglements[u]|1073741824|s&261930}function al(e,i){var s=e.entangledLanes|=i;for(e=e.entanglements;s;){var u=31-Pt(s),h=1<<u;h&i|e[u]&i&&(e[u]|=i),s&=~h}}function Is(e,i){var s=i&-i;return s=(s&42)!==0?1:rl(s),(s&(e.suspendedLanes|i))!==0?0:s}function rl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Bs(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function sl(){var e=H.p;return e!==0?e:(e=window.event,e===void 0?32:xx(e.type))}function aa(e,i){var s=H.p;try{return H.p=e,i()}finally{H.p=s}}var wi=Math.random().toString(36).slice(2),mn="__reactFiber$"+wi,Dn="__reactProps$"+wi,qi="__reactContainer$"+wi,Hs="__reactEvents$"+wi,Vs="__reactListeners$"+wi,Pu="__reactHandles$"+wi,ol="__reactResources$"+wi,Qr="__reactMarker$"+wi;function ll(e){delete e[mn],delete e[Dn],delete e[Hs],delete e[Vs],delete e[Pu]}function sr(e){var i=e[mn];if(i)return i;for(var s=e.parentNode;s;){if(i=s[qi]||s[mn]){if(s=i.alternate,i.child!==null||s!==null&&s.child!==null)for(e=ix(e);e!==null;){if(s=e[mn])return s;e=ix(e)}return i}e=s,s=e.parentNode}return null}function or(e){if(e=e[mn]||e[qi]){var i=e.tag;if(i===5||i===6||i===13||i===31||i===26||i===27||i===3)return e}return null}function Jr(e){var i=e.tag;if(i===5||i===26||i===27||i===6)return e.stateNode;throw Error(a(33))}function lr(e){var i=e[ol];return i||(i=e[ol]={hoistableStyles:new Map,hoistableScripts:new Map}),i}function O(e){e[Qr]=!0}var j=new Set,lt={};function at(e,i){$(e,i),$(e+"Capture",i)}function $(e,i){for(lt[e]=i,e=0;e<i.length;e++)j.add(i[e])}var Ut=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),It={},Nt={};function Vt(e){return Qe.call(Nt,e)?!0:Qe.call(It,e)?!1:Ut.test(e)?Nt[e]=!0:(It[e]=!0,!1)}function Xt(e,i,s){if(Vt(i))if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(i);return;case"boolean":var u=i.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){e.removeAttribute(i);return}}e.setAttribute(i,""+s)}}function Jt(e,i,s){if(s===null)e.removeAttribute(i);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(i);return}e.setAttribute(i,""+s)}}function Wt(e,i,s,u){if(u===null)e.removeAttribute(s);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(i,s,""+u)}}function $t(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function De(e){var i=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Je(e,i,s){var u=Object.getOwnPropertyDescriptor(e.constructor.prototype,i);if(!e.hasOwnProperty(i)&&typeof u<"u"&&typeof u.get=="function"&&typeof u.set=="function"){var h=u.get,m=u.set;return Object.defineProperty(e,i,{configurable:!0,get:function(){return h.call(this)},set:function(E){s=""+E,m.call(this,E)}}),Object.defineProperty(e,i,{enumerable:u.enumerable}),{getValue:function(){return s},setValue:function(E){s=""+E},stopTracking:function(){e._valueTracker=null,delete e[i]}}}}function Ze(e){if(!e._valueTracker){var i=De(e)?"checked":"value";e._valueTracker=Je(e,i,""+e[i])}}function Oe(e){if(!e)return!1;var i=e._valueTracker;if(!i)return!0;var s=i.getValue(),u="";return e&&(u=De(e)?e.checked?"true":"false":e.value),e=u,e!==s?(i.setValue(e),!0):!1}function jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Ue=/[\n"\\]/g;function ie(e){return e.replace(Ue,function(i){return"\\"+i.charCodeAt(0).toString(16)+" "})}function Un(e,i,s,u,h,m,E,N){e.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?e.type=E:e.removeAttribute("type"),i!=null?E==="number"?(i===0&&e.value===""||e.value!=i)&&(e.value=""+$t(i)):e.value!==""+$t(i)&&(e.value=""+$t(i)):E!=="submit"&&E!=="reset"||e.removeAttribute("value"),i!=null?Ln(e,E,$t(i)):s!=null?Ln(e,E,$t(s)):u!=null&&e.removeAttribute("value"),h==null&&m!=null&&(e.defaultChecked=!!m),h!=null&&(e.checked=h&&typeof h!="function"&&typeof h!="symbol"),N!=null&&typeof N!="function"&&typeof N!="symbol"&&typeof N!="boolean"?e.name=""+$t(N):e.removeAttribute("name")}function Ma(e,i,s,u,h,m,E,N){if(m!=null&&typeof m!="function"&&typeof m!="symbol"&&typeof m!="boolean"&&(e.type=m),i!=null||s!=null){if(!(m!=="submit"&&m!=="reset"||i!=null)){Ze(e);return}s=s!=null?""+$t(s):"",i=i!=null?""+$t(i):s,N||i===e.value||(e.value=i),e.defaultValue=i}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,e.checked=N?e.checked:!!u,e.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(e.name=E),Ze(e)}function Ln(e,i,s){i==="number"&&jt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function Di(e,i,s,u){if(e=e.options,i){i={};for(var h=0;h<s.length;h++)i["$"+s[h]]=!0;for(s=0;s<e.length;s++)h=i.hasOwnProperty("$"+e[s].value),e[s].selected!==h&&(e[s].selected=h),h&&u&&(e[s].defaultSelected=!0)}else{for(s=""+$t(s),i=null,h=0;h<e.length;h++){if(e[h].value===s){e[h].selected=!0,u&&(e[h].defaultSelected=!0);return}i!==null||e[h].disabled||(i=e[h])}i!==null&&(i.selected=!0)}}function ze(e,i,s){if(i!=null&&(i=""+$t(i),i!==e.value&&(e.value=i),s==null)){e.defaultValue!==i&&(e.defaultValue=i);return}e.defaultValue=s!=null?""+$t(s):""}function Nn(e,i,s,u){if(i==null){if(u!=null){if(s!=null)throw Error(a(92));if(it(u)){if(1<u.length)throw Error(a(93));u=u[0]}s=u}s==null&&(s=""),i=s}s=$t(i),e.defaultValue=s,u=e.textContent,u===s&&u!==""&&u!==null&&(e.value=u),Ze(e)}function En(e,i){if(i){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=i;return}}e.textContent=i}var On=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Pn(e,i,s){var u=i.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?u?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="":u?e.setProperty(i,s):typeof s!="number"||s===0||On.has(i)?i==="float"?e.cssFloat=s:e[i]=(""+s).trim():e[i]=s+"px"}function Gs(e,i,s){if(i!=null&&typeof i!="object")throw Error(a(62));if(e=e.style,s!=null){for(var u in s)!s.hasOwnProperty(u)||i!=null&&i.hasOwnProperty(u)||(u.indexOf("--")===0?e.setProperty(u,""):u==="float"?e.cssFloat="":e[u]="");for(var h in i)u=i[h],i.hasOwnProperty(h)&&s[h]!==u&&Pn(e,h,u)}else for(var m in i)i.hasOwnProperty(m)&&Pn(e,m,i[m])}function Yi(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var lE=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uE=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Fu(e){return uE.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ea(){}var Jf=null;function $f(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ks=null,Xs=null;function Z_(e){var i=or(e);if(i&&(e=i.stateNode)){var s=e[Dn]||null;t:switch(e=i.stateNode,i.type){case"input":if(Un(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),i=s.name,s.type==="radio"&&i!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+ie(""+i)+'"][type="radio"]'),i=0;i<s.length;i++){var u=s[i];if(u!==e&&u.form===e.form){var h=u[Dn]||null;if(!h)throw Error(a(90));Un(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(i=0;i<s.length;i++)u=s[i],u.form===e.form&&Oe(u)}break t;case"textarea":ze(e,s.value,s.defaultValue);break t;case"select":i=s.value,i!=null&&Di(e,!!s.multiple,i,!1)}}}var th=!1;function j_(e,i,s){if(th)return e(i,s);th=!0;try{var u=e(i);return u}finally{if(th=!1,(ks!==null||Xs!==null)&&(Ec(),ks&&(i=ks,e=Xs,Xs=ks=null,Z_(i),e)))for(i=0;i<e.length;i++)Z_(e[i])}}function ul(e,i){var s=e.stateNode;if(s===null)return null;var u=s[Dn]||null;if(u===null)return null;s=u[i];t:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(e=e.type,u=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!u;break t;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(a(231,i,typeof s));return s}var Ta=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),eh=!1;if(Ta)try{var cl={};Object.defineProperty(cl,"passive",{get:function(){eh=!0}}),window.addEventListener("test",cl,cl),window.removeEventListener("test",cl,cl)}catch{eh=!1}var ur=null,nh=null,zu=null;function K_(){if(zu)return zu;var e,i=nh,s=i.length,u,h="value"in ur?ur.value:ur.textContent,m=h.length;for(e=0;e<s&&i[e]===h[e];e++);var E=s-e;for(u=1;u<=E&&i[s-u]===h[m-u];u++);return zu=h.slice(e,1<u?1-u:void 0)}function Iu(e){var i=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&i===13&&(e=13)):e=i,e===10&&(e=13),32<=e||e===13?e:0}function Bu(){return!0}function Q_(){return!1}function $n(e){function i(s,u,h,m,E){this._reactName=s,this._targetInst=h,this.type=u,this.nativeEvent=m,this.target=E,this.currentTarget=null;for(var N in e)e.hasOwnProperty(N)&&(s=e[N],this[N]=s?s(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?Bu:Q_,this.isPropagationStopped=Q_,this}return g(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Bu)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Bu)},persist:function(){},isPersistent:Bu}),i}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Hu=$n($r),fl=g({},$r,{view:0,detail:0}),cE=$n(fl),ih,ah,hl,Vu=g({},fl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:sh,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==hl&&(hl&&e.type==="mousemove"?(ih=e.screenX-hl.screenX,ah=e.screenY-hl.screenY):ah=ih=0,hl=e),ih)},movementY:function(e){return"movementY"in e?e.movementY:ah}}),J_=$n(Vu),fE=g({},Vu,{dataTransfer:0}),hE=$n(fE),dE=g({},fl,{relatedTarget:0}),rh=$n(dE),pE=g({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),mE=$n(pE),_E=g({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),gE=$n(_E),vE=g({},$r,{data:0}),$_=$n(vE),xE={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},SE={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yE={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ME(e){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(e):(e=yE[e])?!!i[e]:!1}function sh(){return ME}var EE=g({},fl,{key:function(e){if(e.key){var i=xE[e.key]||e.key;if(i!=="Unidentified")return i}return e.type==="keypress"?(e=Iu(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?SE[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:sh,charCode:function(e){return e.type==="keypress"?Iu(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Iu(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),TE=$n(EE),bE=g({},Vu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),t0=$n(bE),AE=g({},fl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:sh}),RE=$n(AE),CE=g({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),wE=$n(CE),DE=g({},Vu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),UE=$n(DE),LE=g({},$r,{newState:0,oldState:0}),NE=$n(LE),OE=[9,13,27,32],oh=Ta&&"CompositionEvent"in window,dl=null;Ta&&"documentMode"in document&&(dl=document.documentMode);var PE=Ta&&"TextEvent"in window&&!dl,e0=Ta&&(!oh||dl&&8<dl&&11>=dl),n0=" ",i0=!1;function a0(e,i){switch(e){case"keyup":return OE.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Ws=!1;function FE(e,i){switch(e){case"compositionend":return r0(i);case"keypress":return i.which!==32?null:(i0=!0,n0);case"textInput":return e=i.data,e===n0&&i0?null:e;default:return null}}function zE(e,i){if(Ws)return e==="compositionend"||!oh&&a0(e,i)?(e=K_(),zu=nh=ur=null,Ws=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return e0&&i.locale!=="ko"?null:i.data;default:return null}}var IE={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function s0(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i==="input"?!!IE[e.type]:i==="textarea"}function o0(e,i,s,u){ks?Xs?Xs.push(u):Xs=[u]:ks=u,i=Dc(i,"onChange"),0<i.length&&(s=new Hu("onChange","change",null,s,u),e.push({event:s,listeners:i}))}var pl=null,ml=null;function BE(e){kv(e,0)}function Gu(e){var i=Jr(e);if(Oe(i))return e}function l0(e,i){if(e==="change")return i}var u0=!1;if(Ta){var lh;if(Ta){var uh="oninput"in document;if(!uh){var c0=document.createElement("div");c0.setAttribute("oninput","return;"),uh=typeof c0.oninput=="function"}lh=uh}else lh=!1;u0=lh&&(!document.documentMode||9<document.documentMode)}function f0(){pl&&(pl.detachEvent("onpropertychange",h0),ml=pl=null)}function h0(e){if(e.propertyName==="value"&&Gu(ml)){var i=[];o0(i,ml,e,$f(e)),j_(BE,i)}}function HE(e,i,s){e==="focusin"?(f0(),pl=i,ml=s,pl.attachEvent("onpropertychange",h0)):e==="focusout"&&f0()}function VE(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Gu(ml)}function GE(e,i){if(e==="click")return Gu(i)}function kE(e,i){if(e==="input"||e==="change")return Gu(i)}function XE(e,i){return e===i&&(e!==0||1/e===1/i)||e!==e&&i!==i}var hi=typeof Object.is=="function"?Object.is:XE;function _l(e,i){if(hi(e,i))return!0;if(typeof e!="object"||e===null||typeof i!="object"||i===null)return!1;var s=Object.keys(e),u=Object.keys(i);if(s.length!==u.length)return!1;for(u=0;u<s.length;u++){var h=s[u];if(!Qe.call(i,h)||!hi(e[h],i[h]))return!1}return!0}function d0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function p0(e,i){var s=d0(e);e=0;for(var u;s;){if(s.nodeType===3){if(u=e+s.textContent.length,e<=i&&u>=i)return{node:s,offset:i-e};e=u}t:{for(;s;){if(s.nextSibling){s=s.nextSibling;break t}s=s.parentNode}s=void 0}s=d0(s)}}function m0(e,i){return e&&i?e===i?!0:e&&e.nodeType===3?!1:i&&i.nodeType===3?m0(e,i.parentNode):"contains"in e?e.contains(i):e.compareDocumentPosition?!!(e.compareDocumentPosition(i)&16):!1:!1}function _0(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var i=jt(e.document);i instanceof e.HTMLIFrameElement;){try{var s=typeof i.contentWindow.location.href=="string"}catch{s=!1}if(s)e=i.contentWindow;else break;i=jt(e.document)}return i}function ch(e){var i=e&&e.nodeName&&e.nodeName.toLowerCase();return i&&(i==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||i==="textarea"||e.contentEditable==="true")}var WE=Ta&&"documentMode"in document&&11>=document.documentMode,qs=null,fh=null,gl=null,hh=!1;function g0(e,i,s){var u=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;hh||qs==null||qs!==jt(u)||(u=qs,"selectionStart"in u&&ch(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),gl&&_l(gl,u)||(gl=u,u=Dc(fh,"onSelect"),0<u.length&&(i=new Hu("onSelect","select",null,i,s),e.push({event:i,listeners:u}),i.target=qs)))}function ts(e,i){var s={};return s[e.toLowerCase()]=i.toLowerCase(),s["Webkit"+e]="webkit"+i,s["Moz"+e]="moz"+i,s}var Ys={animationend:ts("Animation","AnimationEnd"),animationiteration:ts("Animation","AnimationIteration"),animationstart:ts("Animation","AnimationStart"),transitionrun:ts("Transition","TransitionRun"),transitionstart:ts("Transition","TransitionStart"),transitioncancel:ts("Transition","TransitionCancel"),transitionend:ts("Transition","TransitionEnd")},dh={},v0={};Ta&&(v0=document.createElement("div").style,"AnimationEvent"in window||(delete Ys.animationend.animation,delete Ys.animationiteration.animation,delete Ys.animationstart.animation),"TransitionEvent"in window||delete Ys.transitionend.transition);function es(e){if(dh[e])return dh[e];if(!Ys[e])return e;var i=Ys[e],s;for(s in i)if(i.hasOwnProperty(s)&&s in v0)return dh[e]=i[s];return e}var x0=es("animationend"),S0=es("animationiteration"),y0=es("animationstart"),qE=es("transitionrun"),YE=es("transitionstart"),ZE=es("transitioncancel"),M0=es("transitionend"),E0=new Map,ph="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ph.push("scrollEnd");function Zi(e,i){E0.set(e,i),at(i,[e])}var ku=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var i=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(i))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},Ui=[],Zs=0,mh=0;function Xu(){for(var e=Zs,i=mh=Zs=0;i<e;){var s=Ui[i];Ui[i++]=null;var u=Ui[i];Ui[i++]=null;var h=Ui[i];Ui[i++]=null;var m=Ui[i];if(Ui[i++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}m!==0&&T0(s,h,m)}}function Wu(e,i,s,u){Ui[Zs++]=e,Ui[Zs++]=i,Ui[Zs++]=s,Ui[Zs++]=u,mh|=u,e.lanes|=u,e=e.alternate,e!==null&&(e.lanes|=u)}function _h(e,i,s,u){return Wu(e,i,s,u),qu(e)}function ns(e,i){return Wu(e,null,null,i),qu(e)}function T0(e,i,s){e.lanes|=s;var u=e.alternate;u!==null&&(u.lanes|=s);for(var h=!1,m=e.return;m!==null;)m.childLanes|=s,u=m.alternate,u!==null&&(u.childLanes|=s),m.tag===22&&(e=m.stateNode,e===null||e._visibility&1||(h=!0)),e=m,m=m.return;return e.tag===3?(m=e.stateNode,h&&i!==null&&(h=31-Pt(s),e=m.hiddenUpdates,u=e[h],u===null?e[h]=[i]:u.push(i),i.lane=s|536870912),m):null}function qu(e){if(50<Bl)throw Bl=0,bd=null,Error(a(185));for(var i=e.return;i!==null;)e=i,i=e.return;return e.tag===3?e.stateNode:null}var js={};function jE(e,i,s,u){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(e,i,s,u){return new jE(e,i,s,u)}function gh(e){return e=e.prototype,!(!e||!e.isReactComponent)}function ba(e,i){var s=e.alternate;return s===null?(s=di(e.tag,i,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=i,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,i=e.dependencies,s.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function b0(e,i){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=i,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,i=s.dependencies,e.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),e}function Yu(e,i,s,u,h,m){var E=0;if(u=e,typeof e=="function")gh(e)&&(E=1);else if(typeof e=="string")E=t1(e,s,yt.current)?26:e==="html"||e==="head"||e==="body"?27:5;else t:switch(e){case b:return e=di(31,s,i,h),e.elementType=b,e.lanes=m,e;case M:return is(s.children,h,m,i);case y:E=8,h|=24;break;case x:return e=di(12,s,i,h|2),e.elementType=x,e.lanes=m,e;case R:return e=di(13,s,i,h),e.elementType=R,e.lanes=m,e;case P:return e=di(19,s,i,h),e.elementType=P,e.lanes=m,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case w:E=10;break t;case D:E=9;break t;case C:E=11;break t;case U:E=14;break t;case F:E=16,u=null;break t}E=29,s=Error(a(130,e===null?"null":typeof e,"")),u=null}return i=di(E,s,i,h),i.elementType=e,i.type=u,i.lanes=m,i}function is(e,i,s,u){return e=di(7,e,u,i),e.lanes=s,e}function vh(e,i,s){return e=di(6,e,null,i),e.lanes=s,e}function A0(e){var i=di(18,null,null,0);return i.stateNode=e,i}function xh(e,i,s){return i=di(4,e.children!==null?e.children:[],e.key,i),i.lanes=s,i.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},i}var R0=new WeakMap;function Li(e,i){if(typeof e=="object"&&e!==null){var s=R0.get(e);return s!==void 0?s:(i={value:e,source:i,stack:k(i)},R0.set(e,i),i)}return{value:e,source:i,stack:k(i)}}var Ks=[],Qs=0,Zu=null,vl=0,Ni=[],Oi=0,cr=null,ra=1,sa="";function Aa(e,i){Ks[Qs++]=vl,Ks[Qs++]=Zu,Zu=e,vl=i}function C0(e,i,s){Ni[Oi++]=ra,Ni[Oi++]=sa,Ni[Oi++]=cr,cr=e;var u=ra;e=sa;var h=32-Pt(u)-1;u&=~(1<<h),s+=1;var m=32-Pt(i)+h;if(30<m){var E=h-h%5;m=(u&(1<<E)-1).toString(32),u>>=E,h-=E,ra=1<<32-Pt(i)+h|s<<h|u,sa=m+e}else ra=1<<m|s<<h|u,sa=e}function Sh(e){e.return!==null&&(Aa(e,1),C0(e,1,0))}function yh(e){for(;e===Zu;)Zu=Ks[--Qs],Ks[Qs]=null,vl=Ks[--Qs],Ks[Qs]=null;for(;e===cr;)cr=Ni[--Oi],Ni[Oi]=null,sa=Ni[--Oi],Ni[Oi]=null,ra=Ni[--Oi],Ni[Oi]=null}function w0(e,i){Ni[Oi++]=ra,Ni[Oi++]=sa,Ni[Oi++]=cr,ra=i.id,sa=i.overflow,cr=e}var Fn=null,je=null,Se=!1,fr=null,Pi=!1,Mh=Error(a(519));function hr(e){var i=Error(a(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw xl(Li(i,e)),Mh}function D0(e){var i=e.stateNode,s=e.type,u=e.memoizedProps;switch(i[mn]=e,i[Dn]=u,s){case"dialog":me("cancel",i),me("close",i);break;case"iframe":case"object":case"embed":me("load",i);break;case"video":case"audio":for(s=0;s<Vl.length;s++)me(Vl[s],i);break;case"source":me("error",i);break;case"img":case"image":case"link":me("error",i),me("load",i);break;case"details":me("toggle",i);break;case"input":me("invalid",i),Ma(i,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0);break;case"select":me("invalid",i);break;case"textarea":me("invalid",i),Nn(i,u.value,u.defaultValue,u.children)}s=u.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||i.textContent===""+s||u.suppressHydrationWarning===!0||Yv(i.textContent,s)?(u.popover!=null&&(me("beforetoggle",i),me("toggle",i)),u.onScroll!=null&&me("scroll",i),u.onScrollEnd!=null&&me("scrollend",i),u.onClick!=null&&(i.onclick=Ea),i=!0):i=!1,i||hr(e,!0)}function U0(e){for(Fn=e.return;Fn;)switch(Fn.tag){case 5:case 31:case 13:Pi=!1;return;case 27:case 3:Pi=!0;return;default:Fn=Fn.return}}function Js(e){if(e!==Fn)return!1;if(!Se)return U0(e),Se=!0,!1;var i=e.tag,s;if((s=i!==3&&i!==27)&&((s=i===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||Hd(e.type,e.memoizedProps)),s=!s),s&&je&&hr(e),U0(e),i===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=nx(e)}else if(i===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(317));je=nx(e)}else i===27?(i=je,Ar(e.type)?(e=Wd,Wd=null,je=e):je=i):je=Fn?zi(e.stateNode.nextSibling):null;return!0}function as(){je=Fn=null,Se=!1}function Eh(){var e=fr;return e!==null&&(ii===null?ii=e:ii.push.apply(ii,e),fr=null),e}function xl(e){fr===null?fr=[e]:fr.push(e)}var Th=z(null),rs=null,Ra=null;function dr(e,i,s){ht(Th,i._currentValue),i._currentValue=s}function Ca(e){e._currentValue=Th.current,J(Th)}function bh(e,i,s){for(;e!==null;){var u=e.alternate;if((e.childLanes&i)!==i?(e.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),e===s)break;e=e.return}}function Ah(e,i,s,u){var h=e.child;for(h!==null&&(h.return=e);h!==null;){var m=h.dependencies;if(m!==null){var E=h.child;m=m.firstContext;t:for(;m!==null;){var N=m;m=h;for(var G=0;G<i.length;G++)if(N.context===i[G]){m.lanes|=s,N=m.alternate,N!==null&&(N.lanes|=s),bh(m.return,s,e),u||(E=null);break t}m=N.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(a(341));E.lanes|=s,m=E.alternate,m!==null&&(m.lanes|=s),bh(E,s,e),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===e){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function $s(e,i,s,u){e=null;for(var h=i,m=!1;h!==null;){if(!m){if((h.flags&524288)!==0)m=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(a(387));if(E=E.memoizedProps,E!==null){var N=h.type;hi(h.pendingProps.value,E.value)||(e!==null?e.push(N):e=[N])}}else if(h===ut.current){if(E=h.alternate,E===null)throw Error(a(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(e!==null?e.push(ql):e=[ql])}h=h.return}e!==null&&Ah(i,e,s,u),i.flags|=262144}function ju(e){for(e=e.firstContext;e!==null;){if(!hi(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function ss(e){rs=e,Ra=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function zn(e){return L0(rs,e)}function Ku(e,i){return rs===null&&ss(e),L0(e,i)}function L0(e,i){var s=i._currentValue;if(i={context:i,memoizedValue:s,next:null},Ra===null){if(e===null)throw Error(a(308));Ra=i,e.dependencies={lanes:0,firstContext:i},e.flags|=524288}else Ra=Ra.next=i;return s}var KE=typeof AbortController<"u"?AbortController:function(){var e=[],i=this.signal={aborted:!1,addEventListener:function(s,u){e.push(u)}};this.abort=function(){i.aborted=!0,e.forEach(function(s){return s()})}},QE=r.unstable_scheduleCallback,JE=r.unstable_NormalPriority,_n={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Rh(){return{controller:new KE,data:new Map,refCount:0}}function Sl(e){e.refCount--,e.refCount===0&&QE(JE,function(){e.controller.abort()})}var yl=null,Ch=0,to=0,eo=null;function $E(e,i){if(yl===null){var s=yl=[];Ch=0,to=Ud(),eo={status:"pending",value:void 0,then:function(u){s.push(u)}}}return Ch++,i.then(N0,N0),i}function N0(){if(--Ch===0&&yl!==null){eo!==null&&(eo.status="fulfilled");var e=yl;yl=null,to=0,eo=null;for(var i=0;i<e.length;i++)(0,e[i])()}}function tT(e,i){var s=[],u={status:"pending",value:null,reason:null,then:function(h){s.push(h)}};return e.then(function(){u.status="fulfilled",u.value=i;for(var h=0;h<s.length;h++)(0,s[h])(i)},function(h){for(u.status="rejected",u.reason=h,h=0;h<s.length;h++)(0,s[h])(void 0)}),u}var O0=I.S;I.S=function(e,i){gv=A(),typeof i=="object"&&i!==null&&typeof i.then=="function"&&$E(e,i),O0!==null&&O0(e,i)};var os=z(null);function wh(){var e=os.current;return e!==null?e:We.pooledCache}function Qu(e,i){i===null?ht(os,os.current):ht(os,i.pool)}function P0(){var e=wh();return e===null?null:{parent:_n._currentValue,pool:e}}var no=Error(a(460)),Dh=Error(a(474)),Ju=Error(a(542)),$u={then:function(){}};function F0(e){return e=e.status,e==="fulfilled"||e==="rejected"}function z0(e,i,s){switch(s=e[s],s===void 0?e.push(i):s!==i&&(i.then(Ea,Ea),i=s),i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,B0(e),e;default:if(typeof i.status=="string")i.then(Ea,Ea);else{if(e=We,e!==null&&100<e.shellSuspendCounter)throw Error(a(482));e=i,e.status="pending",e.then(function(u){if(i.status==="pending"){var h=i;h.status="fulfilled",h.value=u}},function(u){if(i.status==="pending"){var h=i;h.status="rejected",h.reason=u}})}switch(i.status){case"fulfilled":return i.value;case"rejected":throw e=i.reason,B0(e),e}throw us=i,no}}function ls(e){try{var i=e._init;return i(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(us=s,no):s}}var us=null;function I0(){if(us===null)throw Error(a(459));var e=us;return us=null,e}function B0(e){if(e===no||e===Ju)throw Error(a(483))}var io=null,Ml=0;function tc(e){var i=Ml;return Ml+=1,io===null&&(io=[]),z0(io,e,i)}function El(e,i){i=i.props.ref,e.ref=i!==void 0?i:null}function ec(e,i){throw i.$$typeof===v?Error(a(525)):(e=Object.prototype.toString.call(i),Error(a(31,e==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":e)))}function H0(e){function i(K,X){if(e){var et=K.deletions;et===null?(K.deletions=[X],K.flags|=16):et.push(X)}}function s(K,X){if(!e)return null;for(;X!==null;)i(K,X),X=X.sibling;return null}function u(K){for(var X=new Map;K!==null;)K.key!==null?X.set(K.key,K):X.set(K.index,K),K=K.sibling;return X}function h(K,X){return K=ba(K,X),K.index=0,K.sibling=null,K}function m(K,X,et){return K.index=et,e?(et=K.alternate,et!==null?(et=et.index,et<X?(K.flags|=67108866,X):et):(K.flags|=67108866,X)):(K.flags|=1048576,X)}function E(K){return e&&K.alternate===null&&(K.flags|=67108866),K}function N(K,X,et,mt){return X===null||X.tag!==6?(X=vh(et,K.mode,mt),X.return=K,X):(X=h(X,et),X.return=K,X)}function G(K,X,et,mt){var Qt=et.type;return Qt===M?dt(K,X,et.props.children,mt,et.key):X!==null&&(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===F&&ls(Qt)===X.type)?(X=h(X,et.props),El(X,et),X.return=K,X):(X=Yu(et.type,et.key,et.props,null,K.mode,mt),El(X,et),X.return=K,X)}function nt(K,X,et,mt){return X===null||X.tag!==4||X.stateNode.containerInfo!==et.containerInfo||X.stateNode.implementation!==et.implementation?(X=xh(et,K.mode,mt),X.return=K,X):(X=h(X,et.children||[]),X.return=K,X)}function dt(K,X,et,mt,Qt){return X===null||X.tag!==7?(X=is(et,K.mode,mt,Qt),X.return=K,X):(X=h(X,et),X.return=K,X)}function _t(K,X,et){if(typeof X=="string"&&X!==""||typeof X=="number"||typeof X=="bigint")return X=vh(""+X,K.mode,et),X.return=K,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case S:return et=Yu(X.type,X.key,X.props,null,K.mode,et),El(et,X),et.return=K,et;case T:return X=xh(X,K.mode,et),X.return=K,X;case F:return X=ls(X),_t(K,X,et)}if(it(X)||Y(X))return X=is(X,K.mode,et,null),X.return=K,X;if(typeof X.then=="function")return _t(K,tc(X),et);if(X.$$typeof===w)return _t(K,Ku(K,X),et);ec(K,X)}return null}function rt(K,X,et,mt){var Qt=X!==null?X.key:null;if(typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint")return Qt!==null?null:N(K,X,""+et,mt);if(typeof et=="object"&&et!==null){switch(et.$$typeof){case S:return et.key===Qt?G(K,X,et,mt):null;case T:return et.key===Qt?nt(K,X,et,mt):null;case F:return et=ls(et),rt(K,X,et,mt)}if(it(et)||Y(et))return Qt!==null?null:dt(K,X,et,mt,null);if(typeof et.then=="function")return rt(K,X,tc(et),mt);if(et.$$typeof===w)return rt(K,X,Ku(K,et),mt);ec(K,et)}return null}function ct(K,X,et,mt,Qt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return K=K.get(et)||null,N(X,K,""+mt,Qt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case S:return K=K.get(mt.key===null?et:mt.key)||null,G(X,K,mt,Qt);case T:return K=K.get(mt.key===null?et:mt.key)||null,nt(X,K,mt,Qt);case F:return mt=ls(mt),ct(K,X,et,mt,Qt)}if(it(mt)||Y(mt))return K=K.get(et)||null,dt(X,K,mt,Qt,null);if(typeof mt.then=="function")return ct(K,X,et,tc(mt),Qt);if(mt.$$typeof===w)return ct(K,X,et,Ku(X,mt),Qt);ec(X,mt)}return null}function Gt(K,X,et,mt){for(var Qt=null,Ae=null,Yt=X,ue=X=0,xe=null;Yt!==null&&ue<et.length;ue++){Yt.index>ue?(xe=Yt,Yt=null):xe=Yt.sibling;var Re=rt(K,Yt,et[ue],mt);if(Re===null){Yt===null&&(Yt=xe);break}e&&Yt&&Re.alternate===null&&i(K,Yt),X=m(Re,X,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re,Yt=xe}if(ue===et.length)return s(K,Yt),Se&&Aa(K,ue),Qt;if(Yt===null){for(;ue<et.length;ue++)Yt=_t(K,et[ue],mt),Yt!==null&&(X=m(Yt,X,ue),Ae===null?Qt=Yt:Ae.sibling=Yt,Ae=Yt);return Se&&Aa(K,ue),Qt}for(Yt=u(Yt);ue<et.length;ue++)xe=ct(Yt,K,ue,et[ue],mt),xe!==null&&(e&&xe.alternate!==null&&Yt.delete(xe.key===null?ue:xe.key),X=m(xe,X,ue),Ae===null?Qt=xe:Ae.sibling=xe,Ae=xe);return e&&Yt.forEach(function(Ur){return i(K,Ur)}),Se&&Aa(K,ue),Qt}function te(K,X,et,mt){if(et==null)throw Error(a(151));for(var Qt=null,Ae=null,Yt=X,ue=X=0,xe=null,Re=et.next();Yt!==null&&!Re.done;ue++,Re=et.next()){Yt.index>ue?(xe=Yt,Yt=null):xe=Yt.sibling;var Ur=rt(K,Yt,Re.value,mt);if(Ur===null){Yt===null&&(Yt=xe);break}e&&Yt&&Ur.alternate===null&&i(K,Yt),X=m(Ur,X,ue),Ae===null?Qt=Ur:Ae.sibling=Ur,Ae=Ur,Yt=xe}if(Re.done)return s(K,Yt),Se&&Aa(K,ue),Qt;if(Yt===null){for(;!Re.done;ue++,Re=et.next())Re=_t(K,Re.value,mt),Re!==null&&(X=m(Re,X,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return Se&&Aa(K,ue),Qt}for(Yt=u(Yt);!Re.done;ue++,Re=et.next())Re=ct(Yt,K,ue,Re.value,mt),Re!==null&&(e&&Re.alternate!==null&&Yt.delete(Re.key===null?ue:Re.key),X=m(Re,X,ue),Ae===null?Qt=Re:Ae.sibling=Re,Ae=Re);return e&&Yt.forEach(function(f1){return i(K,f1)}),Se&&Aa(K,ue),Qt}function Xe(K,X,et,mt){if(typeof et=="object"&&et!==null&&et.type===M&&et.key===null&&(et=et.props.children),typeof et=="object"&&et!==null){switch(et.$$typeof){case S:t:{for(var Qt=et.key;X!==null;){if(X.key===Qt){if(Qt=et.type,Qt===M){if(X.tag===7){s(K,X.sibling),mt=h(X,et.props.children),mt.return=K,K=mt;break t}}else if(X.elementType===Qt||typeof Qt=="object"&&Qt!==null&&Qt.$$typeof===F&&ls(Qt)===X.type){s(K,X.sibling),mt=h(X,et.props),El(mt,et),mt.return=K,K=mt;break t}s(K,X);break}else i(K,X);X=X.sibling}et.type===M?(mt=is(et.props.children,K.mode,mt,et.key),mt.return=K,K=mt):(mt=Yu(et.type,et.key,et.props,null,K.mode,mt),El(mt,et),mt.return=K,K=mt)}return E(K);case T:t:{for(Qt=et.key;X!==null;){if(X.key===Qt)if(X.tag===4&&X.stateNode.containerInfo===et.containerInfo&&X.stateNode.implementation===et.implementation){s(K,X.sibling),mt=h(X,et.children||[]),mt.return=K,K=mt;break t}else{s(K,X);break}else i(K,X);X=X.sibling}mt=xh(et,K.mode,mt),mt.return=K,K=mt}return E(K);case F:return et=ls(et),Xe(K,X,et,mt)}if(it(et))return Gt(K,X,et,mt);if(Y(et)){if(Qt=Y(et),typeof Qt!="function")throw Error(a(150));return et=Qt.call(et),te(K,X,et,mt)}if(typeof et.then=="function")return Xe(K,X,tc(et),mt);if(et.$$typeof===w)return Xe(K,X,Ku(K,et),mt);ec(K,et)}return typeof et=="string"&&et!==""||typeof et=="number"||typeof et=="bigint"?(et=""+et,X!==null&&X.tag===6?(s(K,X.sibling),mt=h(X,et),mt.return=K,K=mt):(s(K,X),mt=vh(et,K.mode,mt),mt.return=K,K=mt),E(K)):s(K,X)}return function(K,X,et,mt){try{Ml=0;var Qt=Xe(K,X,et,mt);return io=null,Qt}catch(Yt){if(Yt===no||Yt===Ju)throw Yt;var Ae=di(29,Yt,null,K.mode);return Ae.lanes=mt,Ae.return=K,Ae}}}var cs=H0(!0),V0=H0(!1),pr=!1;function Uh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Lh(e,i){e=e.updateQueue,i.updateQueue===e&&(i.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function mr(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function _r(e,i,s){var u=e.updateQueue;if(u===null)return null;if(u=u.shared,(Le&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,i=qu(e),T0(e,null,s),i}return Wu(e,u,i,s),qu(e)}function Tl(e,i,s){if(i=i.updateQueue,i!==null&&(i=i.shared,(s&4194048)!==0)){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,al(e,s)}}function Nh(e,i){var s=e.updateQueue,u=e.alternate;if(u!==null&&(u=u.updateQueue,s===u)){var h=null,m=null;if(s=s.firstBaseUpdate,s!==null){do{var E={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};m===null?h=m=E:m=m.next=E,s=s.next}while(s!==null);m===null?h=m=i:m=m.next=i}else h=m=i;s={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:m,shared:u.shared,callbacks:u.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=i:e.next=i,s.lastBaseUpdate=i}var Oh=!1;function bl(){if(Oh){var e=eo;if(e!==null)throw e}}function Al(e,i,s,u){Oh=!1;var h=e.updateQueue;pr=!1;var m=h.firstBaseUpdate,E=h.lastBaseUpdate,N=h.shared.pending;if(N!==null){h.shared.pending=null;var G=N,nt=G.next;G.next=null,E===null?m=nt:E.next=nt,E=G;var dt=e.alternate;dt!==null&&(dt=dt.updateQueue,N=dt.lastBaseUpdate,N!==E&&(N===null?dt.firstBaseUpdate=nt:N.next=nt,dt.lastBaseUpdate=G))}if(m!==null){var _t=h.baseState;E=0,dt=nt=G=null,N=m;do{var rt=N.lane&-536870913,ct=rt!==N.lane;if(ct?(ve&rt)===rt:(u&rt)===rt){rt!==0&&rt===to&&(Oh=!0),dt!==null&&(dt=dt.next={lane:0,tag:N.tag,payload:N.payload,callback:null,next:null});t:{var Gt=e,te=N;rt=i;var Xe=s;switch(te.tag){case 1:if(Gt=te.payload,typeof Gt=="function"){_t=Gt.call(Xe,_t,rt);break t}_t=Gt;break t;case 3:Gt.flags=Gt.flags&-65537|128;case 0:if(Gt=te.payload,rt=typeof Gt=="function"?Gt.call(Xe,_t,rt):Gt,rt==null)break t;_t=g({},_t,rt);break t;case 2:pr=!0}}rt=N.callback,rt!==null&&(e.flags|=64,ct&&(e.flags|=8192),ct=h.callbacks,ct===null?h.callbacks=[rt]:ct.push(rt))}else ct={lane:rt,tag:N.tag,payload:N.payload,callback:N.callback,next:null},dt===null?(nt=dt=ct,G=_t):dt=dt.next=ct,E|=rt;if(N=N.next,N===null){if(N=h.shared.pending,N===null)break;ct=N,N=ct.next,ct.next=null,h.lastBaseUpdate=ct,h.shared.pending=null}}while(!0);dt===null&&(G=_t),h.baseState=G,h.firstBaseUpdate=nt,h.lastBaseUpdate=dt,m===null&&(h.shared.lanes=0),yr|=E,e.lanes=E,e.memoizedState=_t}}function G0(e,i){if(typeof e!="function")throw Error(a(191,e));e.call(i)}function k0(e,i){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)G0(s[e],i)}var ao=z(null),nc=z(0);function X0(e,i){e=za,ht(nc,e),ht(ao,i),za=e|i.baseLanes}function Ph(){ht(nc,za),ht(ao,ao.current)}function Fh(){za=nc.current,J(ao),J(nc)}var pi=z(null),Fi=null;function gr(e){var i=e.alternate;ht(fn,fn.current&1),ht(pi,e),Fi===null&&(i===null||ao.current!==null||i.memoizedState!==null)&&(Fi=e)}function zh(e){ht(fn,fn.current),ht(pi,e),Fi===null&&(Fi=e)}function W0(e){e.tag===22?(ht(fn,fn.current),ht(pi,e),Fi===null&&(Fi=e)):vr()}function vr(){ht(fn,fn.current),ht(pi,pi.current)}function mi(e){J(pi),Fi===e&&(Fi=null),J(fn)}var fn=z(0);function ic(e){for(var i=e;i!==null;){if(i.tag===13){var s=i.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||kd(s)||Xd(s)))return i}else if(i.tag===19&&(i.memoizedProps.revealOrder==="forwards"||i.memoizedProps.revealOrder==="backwards"||i.memoizedProps.revealOrder==="unstable_legacy-backwards"||i.memoizedProps.revealOrder==="together")){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var wa=0,oe=null,Ge=null,gn=null,ac=!1,ro=!1,fs=!1,rc=0,Rl=0,so=null,eT=0;function on(){throw Error(a(321))}function Ih(e,i){if(i===null)return!1;for(var s=0;s<i.length&&s<e.length;s++)if(!hi(e[s],i[s]))return!1;return!0}function Bh(e,i,s,u,h,m){return wa=m,oe=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,I.H=e===null||e.memoizedState===null?Cg:td,fs=!1,m=s(u,h),fs=!1,ro&&(m=Y0(i,s,u,h)),q0(e),m}function q0(e){I.H=Dl;var i=Ge!==null&&Ge.next!==null;if(wa=0,gn=Ge=oe=null,ac=!1,Rl=0,so=null,i)throw Error(a(300));e===null||vn||(e=e.dependencies,e!==null&&ju(e)&&(vn=!0))}function Y0(e,i,s,u){oe=e;var h=0;do{if(ro&&(so=null),Rl=0,ro=!1,25<=h)throw Error(a(301));if(h+=1,gn=Ge=null,e.updateQueue!=null){var m=e.updateQueue;m.lastEffect=null,m.events=null,m.stores=null,m.memoCache!=null&&(m.memoCache.index=0)}I.H=wg,m=i(s,u)}while(ro);return m}function nT(){var e=I.H,i=e.useState()[0];return i=typeof i.then=="function"?Cl(i):i,e=e.useState()[0],(Ge!==null?Ge.memoizedState:null)!==e&&(oe.flags|=1024),i}function Hh(){var e=rc!==0;return rc=0,e}function Vh(e,i,s){i.updateQueue=e.updateQueue,i.flags&=-2053,e.lanes&=~s}function Gh(e){if(ac){for(e=e.memoizedState;e!==null;){var i=e.queue;i!==null&&(i.pending=null),e=e.next}ac=!1}wa=0,gn=Ge=oe=null,ro=!1,Rl=rc=0,so=null}function jn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return gn===null?oe.memoizedState=gn=e:gn=gn.next=e,gn}function hn(){if(Ge===null){var e=oe.alternate;e=e!==null?e.memoizedState:null}else e=Ge.next;var i=gn===null?oe.memoizedState:gn.next;if(i!==null)gn=i,Ge=e;else{if(e===null)throw oe.alternate===null?Error(a(467)):Error(a(310));Ge=e,e={memoizedState:Ge.memoizedState,baseState:Ge.baseState,baseQueue:Ge.baseQueue,queue:Ge.queue,next:null},gn===null?oe.memoizedState=gn=e:gn=gn.next=e}return gn}function sc(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Cl(e){var i=Rl;return Rl+=1,so===null&&(so=[]),e=z0(so,e,i),i=oe,(gn===null?i.memoizedState:gn.next)===null&&(i=i.alternate,I.H=i===null||i.memoizedState===null?Cg:td),e}function oc(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Cl(e);if(e.$$typeof===w)return zn(e)}throw Error(a(438,String(e)))}function kh(e){var i=null,s=oe.updateQueue;if(s!==null&&(i=s.memoCache),i==null){var u=oe.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(i={data:u.data.map(function(h){return h.slice()}),index:0})))}if(i==null&&(i={data:[],index:0}),s===null&&(s=sc(),oe.updateQueue=s),s.memoCache=i,s=i.data[i.index],s===void 0)for(s=i.data[i.index]=Array(e),u=0;u<e;u++)s[u]=L;return i.index++,s}function Da(e,i){return typeof i=="function"?i(e):i}function lc(e){var i=hn();return Xh(i,Ge,e)}function Xh(e,i,s){var u=e.queue;if(u===null)throw Error(a(311));u.lastRenderedReducer=s;var h=e.baseQueue,m=u.pending;if(m!==null){if(h!==null){var E=h.next;h.next=m.next,m.next=E}i.baseQueue=h=m,u.pending=null}if(m=e.baseState,h===null)e.memoizedState=m;else{i=h.next;var N=E=null,G=null,nt=i,dt=!1;do{var _t=nt.lane&-536870913;if(_t!==nt.lane?(ve&_t)===_t:(wa&_t)===_t){var rt=nt.revertLane;if(rt===0)G!==null&&(G=G.next={lane:0,revertLane:0,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null}),_t===to&&(dt=!0);else if((wa&rt)===rt){nt=nt.next,rt===to&&(dt=!0);continue}else _t={lane:0,revertLane:nt.revertLane,gesture:null,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(N=G=_t,E=m):G=G.next=_t,oe.lanes|=rt,yr|=rt;_t=nt.action,fs&&s(m,_t),m=nt.hasEagerState?nt.eagerState:s(m,_t)}else rt={lane:_t,revertLane:nt.revertLane,gesture:nt.gesture,action:nt.action,hasEagerState:nt.hasEagerState,eagerState:nt.eagerState,next:null},G===null?(N=G=rt,E=m):G=G.next=rt,oe.lanes|=_t,yr|=_t;nt=nt.next}while(nt!==null&&nt!==i);if(G===null?E=m:G.next=N,!hi(m,e.memoizedState)&&(vn=!0,dt&&(s=eo,s!==null)))throw s;e.memoizedState=m,e.baseState=E,e.baseQueue=G,u.lastRenderedState=m}return h===null&&(u.lanes=0),[e.memoizedState,u.dispatch]}function Wh(e){var i=hn(),s=i.queue;if(s===null)throw Error(a(311));s.lastRenderedReducer=e;var u=s.dispatch,h=s.pending,m=i.memoizedState;if(h!==null){s.pending=null;var E=h=h.next;do m=e(m,E.action),E=E.next;while(E!==h);hi(m,i.memoizedState)||(vn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),s.lastRenderedState=m}return[m,u]}function Z0(e,i,s){var u=oe,h=hn(),m=Se;if(m){if(s===void 0)throw Error(a(407));s=s()}else s=i();var E=!hi((Ge||h).memoizedState,s);if(E&&(h.memoizedState=s,vn=!0),h=h.queue,Zh(Q0.bind(null,u,h,e),[e]),h.getSnapshot!==i||E||gn!==null&&gn.memoizedState.tag&1){if(u.flags|=2048,oo(9,{destroy:void 0},K0.bind(null,u,h,s,i),null),We===null)throw Error(a(349));m||(wa&127)!==0||j0(u,i,s)}return s}function j0(e,i,s){e.flags|=16384,e={getSnapshot:i,value:s},i=oe.updateQueue,i===null?(i=sc(),oe.updateQueue=i,i.stores=[e]):(s=i.stores,s===null?i.stores=[e]:s.push(e))}function K0(e,i,s,u){i.value=s,i.getSnapshot=u,J0(i)&&$0(e)}function Q0(e,i,s){return s(function(){J0(i)&&$0(e)})}function J0(e){var i=e.getSnapshot;e=e.value;try{var s=i();return!hi(e,s)}catch{return!0}}function $0(e){var i=ns(e,2);i!==null&&ai(i,e,2)}function qh(e){var i=jn();if(typeof e=="function"){var s=e;if(e=s(),fs){zt(!0);try{s()}finally{zt(!1)}}}return i.memoizedState=i.baseState=e,i.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:e},i}function tg(e,i,s,u){return e.baseState=s,Xh(e,Ge,typeof u=="function"?u:Da)}function iT(e,i,s,u,h){if(fc(e))throw Error(a(485));if(e=i.action,e!==null){var m={payload:h,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){m.listeners.push(E)}};I.T!==null?s(!0):m.isTransition=!1,u(m),s=i.pending,s===null?(m.next=i.pending=m,eg(i,m)):(m.next=s.next,i.pending=s.next=m)}}function eg(e,i){var s=i.action,u=i.payload,h=e.state;if(i.isTransition){var m=I.T,E={};I.T=E;try{var N=s(h,u),G=I.S;G!==null&&G(E,N),ng(e,i,N)}catch(nt){Yh(e,i,nt)}finally{m!==null&&E.types!==null&&(m.types=E.types),I.T=m}}else try{m=s(h,u),ng(e,i,m)}catch(nt){Yh(e,i,nt)}}function ng(e,i,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(u){ig(e,i,u)},function(u){return Yh(e,i,u)}):ig(e,i,s)}function ig(e,i,s){i.status="fulfilled",i.value=s,ag(i),e.state=s,i=e.pending,i!==null&&(s=i.next,s===i?e.pending=null:(s=s.next,i.next=s,eg(e,s)))}function Yh(e,i,s){var u=e.pending;if(e.pending=null,u!==null){u=u.next;do i.status="rejected",i.reason=s,ag(i),i=i.next;while(i!==u)}e.action=null}function ag(e){e=e.listeners;for(var i=0;i<e.length;i++)(0,e[i])()}function rg(e,i){return i}function sg(e,i){if(Se){var s=We.formState;if(s!==null){t:{var u=oe;if(Se){if(je){e:{for(var h=je,m=Pi;h.nodeType!==8;){if(!m){h=null;break e}if(h=zi(h.nextSibling),h===null){h=null;break e}}m=h.data,h=m==="F!"||m==="F"?h:null}if(h){je=zi(h.nextSibling),u=h.data==="F!";break t}}hr(u)}u=!1}u&&(i=s[0])}}return s=jn(),s.memoizedState=s.baseState=i,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:rg,lastRenderedState:i},s.queue=u,s=bg.bind(null,oe,u),u.dispatch=s,u=qh(!1),m=$h.bind(null,oe,!1,u.queue),u=jn(),h={state:i,dispatch:null,action:e,pending:null},u.queue=h,s=iT.bind(null,oe,h,m,s),h.dispatch=s,u.memoizedState=e,[i,s,!1]}function og(e){var i=hn();return lg(i,Ge,e)}function lg(e,i,s){if(i=Xh(e,i,rg)[0],e=lc(Da)[0],typeof i=="object"&&i!==null&&typeof i.then=="function")try{var u=Cl(i)}catch(E){throw E===no?Ju:E}else u=i;i=hn();var h=i.queue,m=h.dispatch;return s!==i.memoizedState&&(oe.flags|=2048,oo(9,{destroy:void 0},aT.bind(null,h,s),null)),[u,m,e]}function aT(e,i){e.action=i}function ug(e){var i=hn(),s=Ge;if(s!==null)return lg(i,s,e);hn(),i=i.memoizedState,s=hn();var u=s.queue.dispatch;return s.memoizedState=e,[i,u,!1]}function oo(e,i,s,u){return e={tag:e,create:s,deps:u,inst:i,next:null},i=oe.updateQueue,i===null&&(i=sc(),oe.updateQueue=i),s=i.lastEffect,s===null?i.lastEffect=e.next=e:(u=s.next,s.next=e,e.next=u,i.lastEffect=e),e}function cg(){return hn().memoizedState}function uc(e,i,s,u){var h=jn();oe.flags|=e,h.memoizedState=oo(1|i,{destroy:void 0},s,u===void 0?null:u)}function cc(e,i,s,u){var h=hn();u=u===void 0?null:u;var m=h.memoizedState.inst;Ge!==null&&u!==null&&Ih(u,Ge.memoizedState.deps)?h.memoizedState=oo(i,m,s,u):(oe.flags|=e,h.memoizedState=oo(1|i,m,s,u))}function fg(e,i){uc(8390656,8,e,i)}function Zh(e,i){cc(2048,8,e,i)}function rT(e){oe.flags|=4;var i=oe.updateQueue;if(i===null)i=sc(),oe.updateQueue=i,i.events=[e];else{var s=i.events;s===null?i.events=[e]:s.push(e)}}function hg(e){var i=hn().memoizedState;return rT({ref:i,nextImpl:e}),function(){if((Le&2)!==0)throw Error(a(440));return i.impl.apply(void 0,arguments)}}function dg(e,i){return cc(4,2,e,i)}function pg(e,i){return cc(4,4,e,i)}function mg(e,i){if(typeof i=="function"){e=e();var s=i(e);return function(){typeof s=="function"?s():i(null)}}if(i!=null)return e=e(),i.current=e,function(){i.current=null}}function _g(e,i,s){s=s!=null?s.concat([e]):null,cc(4,4,mg.bind(null,i,e),s)}function jh(){}function gg(e,i){var s=hn();i=i===void 0?null:i;var u=s.memoizedState;return i!==null&&Ih(i,u[1])?u[0]:(s.memoizedState=[e,i],e)}function vg(e,i){var s=hn();i=i===void 0?null:i;var u=s.memoizedState;if(i!==null&&Ih(i,u[1]))return u[0];if(u=e(),fs){zt(!0);try{e()}finally{zt(!1)}}return s.memoizedState=[u,i],u}function Kh(e,i,s){return s===void 0||(wa&1073741824)!==0&&(ve&261930)===0?e.memoizedState=i:(e.memoizedState=s,e=xv(),oe.lanes|=e,yr|=e,s)}function xg(e,i,s,u){return hi(s,i)?s:ao.current!==null?(e=Kh(e,s,u),hi(e,i)||(vn=!0),e):(wa&42)===0||(wa&1073741824)!==0&&(ve&261930)===0?(vn=!0,e.memoizedState=s):(e=xv(),oe.lanes|=e,yr|=e,i)}function Sg(e,i,s,u,h){var m=H.p;H.p=m!==0&&8>m?m:8;var E=I.T,N={};I.T=N,$h(e,!1,i,s);try{var G=h(),nt=I.S;if(nt!==null&&nt(N,G),G!==null&&typeof G=="object"&&typeof G.then=="function"){var dt=tT(G,u);wl(e,i,dt,vi(e))}else wl(e,i,u,vi(e))}catch(_t){wl(e,i,{then:function(){},status:"rejected",reason:_t},vi())}finally{H.p=m,E!==null&&N.types!==null&&(E.types=N.types),I.T=E}}function sT(){}function Qh(e,i,s,u){if(e.tag!==5)throw Error(a(476));var h=yg(e).queue;Sg(e,h,i,Q,s===null?sT:function(){return Mg(e),s(u)})}function yg(e){var i=e.memoizedState;if(i!==null)return i;i={memoizedState:Q,baseState:Q,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:Q},next:null};var s={};return i.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Da,lastRenderedState:s},next:null},e.memoizedState=i,e=e.alternate,e!==null&&(e.memoizedState=i),i}function Mg(e){var i=yg(e);i.next===null&&(i=e.alternate.memoizedState),wl(e,i.next.queue,{},vi())}function Jh(){return zn(ql)}function Eg(){return hn().memoizedState}function Tg(){return hn().memoizedState}function oT(e){for(var i=e.return;i!==null;){switch(i.tag){case 24:case 3:var s=vi();e=mr(s);var u=_r(i,e,s);u!==null&&(ai(u,i,s),Tl(u,i,s)),i={cache:Rh()},e.payload=i;return}i=i.return}}function lT(e,i,s){var u=vi();s={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},fc(e)?Ag(i,s):(s=_h(e,i,s,u),s!==null&&(ai(s,e,u),Rg(s,i,u)))}function bg(e,i,s){var u=vi();wl(e,i,s,u)}function wl(e,i,s,u){var h={lane:u,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(fc(e))Ag(i,h);else{var m=e.alternate;if(e.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var E=i.lastRenderedState,N=m(E,s);if(h.hasEagerState=!0,h.eagerState=N,hi(N,E))return Wu(e,i,h,0),We===null&&Xu(),!1}catch{}if(s=_h(e,i,h,u),s!==null)return ai(s,e,u),Rg(s,i,u),!0}return!1}function $h(e,i,s,u){if(u={lane:2,revertLane:Ud(),gesture:null,action:u,hasEagerState:!1,eagerState:null,next:null},fc(e)){if(i)throw Error(a(479))}else i=_h(e,s,u,2),i!==null&&ai(i,e,2)}function fc(e){var i=e.alternate;return e===oe||i!==null&&i===oe}function Ag(e,i){ro=ac=!0;var s=e.pending;s===null?i.next=i:(i.next=s.next,s.next=i),e.pending=i}function Rg(e,i,s){if((s&4194048)!==0){var u=i.lanes;u&=e.pendingLanes,s|=u,i.lanes=s,al(e,s)}}var Dl={readContext:zn,use:oc,useCallback:on,useContext:on,useEffect:on,useImperativeHandle:on,useLayoutEffect:on,useInsertionEffect:on,useMemo:on,useReducer:on,useRef:on,useState:on,useDebugValue:on,useDeferredValue:on,useTransition:on,useSyncExternalStore:on,useId:on,useHostTransitionStatus:on,useFormState:on,useActionState:on,useOptimistic:on,useMemoCache:on,useCacheRefresh:on};Dl.useEffectEvent=on;var Cg={readContext:zn,use:oc,useCallback:function(e,i){return jn().memoizedState=[e,i===void 0?null:i],e},useContext:zn,useEffect:fg,useImperativeHandle:function(e,i,s){s=s!=null?s.concat([e]):null,uc(4194308,4,mg.bind(null,i,e),s)},useLayoutEffect:function(e,i){return uc(4194308,4,e,i)},useInsertionEffect:function(e,i){uc(4,2,e,i)},useMemo:function(e,i){var s=jn();i=i===void 0?null:i;var u=e();if(fs){zt(!0);try{e()}finally{zt(!1)}}return s.memoizedState=[u,i],u},useReducer:function(e,i,s){var u=jn();if(s!==void 0){var h=s(i);if(fs){zt(!0);try{s(i)}finally{zt(!1)}}}else h=i;return u.memoizedState=u.baseState=h,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:h},u.queue=e,e=e.dispatch=lT.bind(null,oe,e),[u.memoizedState,e]},useRef:function(e){var i=jn();return e={current:e},i.memoizedState=e},useState:function(e){e=qh(e);var i=e.queue,s=bg.bind(null,oe,i);return i.dispatch=s,[e.memoizedState,s]},useDebugValue:jh,useDeferredValue:function(e,i){var s=jn();return Kh(s,e,i)},useTransition:function(){var e=qh(!1);return e=Sg.bind(null,oe,e.queue,!0,!1),jn().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,i,s){var u=oe,h=jn();if(Se){if(s===void 0)throw Error(a(407));s=s()}else{if(s=i(),We===null)throw Error(a(349));(ve&127)!==0||j0(u,i,s)}h.memoizedState=s;var m={value:s,getSnapshot:i};return h.queue=m,fg(Q0.bind(null,u,m,e),[e]),u.flags|=2048,oo(9,{destroy:void 0},K0.bind(null,u,m,s,i),null),s},useId:function(){var e=jn(),i=We.identifierPrefix;if(Se){var s=sa,u=ra;s=(u&~(1<<32-Pt(u)-1)).toString(32)+s,i="_"+i+"R_"+s,s=rc++,0<s&&(i+="H"+s.toString(32)),i+="_"}else s=eT++,i="_"+i+"r_"+s.toString(32)+"_";return e.memoizedState=i},useHostTransitionStatus:Jh,useFormState:sg,useActionState:sg,useOptimistic:function(e){var i=jn();i.memoizedState=i.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return i.queue=s,i=$h.bind(null,oe,!0,s),s.dispatch=i,[e,i]},useMemoCache:kh,useCacheRefresh:function(){return jn().memoizedState=oT.bind(null,oe)},useEffectEvent:function(e){var i=jn(),s={impl:e};return i.memoizedState=s,function(){if((Le&2)!==0)throw Error(a(440));return s.impl.apply(void 0,arguments)}}},td={readContext:zn,use:oc,useCallback:gg,useContext:zn,useEffect:Zh,useImperativeHandle:_g,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:lc,useRef:cg,useState:function(){return lc(Da)},useDebugValue:jh,useDeferredValue:function(e,i){var s=hn();return xg(s,Ge.memoizedState,e,i)},useTransition:function(){var e=lc(Da)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Cl(e),i]},useSyncExternalStore:Z0,useId:Eg,useHostTransitionStatus:Jh,useFormState:og,useActionState:og,useOptimistic:function(e,i){var s=hn();return tg(s,Ge,e,i)},useMemoCache:kh,useCacheRefresh:Tg};td.useEffectEvent=hg;var wg={readContext:zn,use:oc,useCallback:gg,useContext:zn,useEffect:Zh,useImperativeHandle:_g,useInsertionEffect:dg,useLayoutEffect:pg,useMemo:vg,useReducer:Wh,useRef:cg,useState:function(){return Wh(Da)},useDebugValue:jh,useDeferredValue:function(e,i){var s=hn();return Ge===null?Kh(s,e,i):xg(s,Ge.memoizedState,e,i)},useTransition:function(){var e=Wh(Da)[0],i=hn().memoizedState;return[typeof e=="boolean"?e:Cl(e),i]},useSyncExternalStore:Z0,useId:Eg,useHostTransitionStatus:Jh,useFormState:ug,useActionState:ug,useOptimistic:function(e,i){var s=hn();return Ge!==null?tg(s,Ge,e,i):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:kh,useCacheRefresh:Tg};wg.useEffectEvent=hg;function ed(e,i,s,u){i=e.memoizedState,s=s(u,i),s=s==null?i:g({},i,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var nd={enqueueSetState:function(e,i,s){e=e._reactInternals;var u=vi(),h=mr(u);h.payload=i,s!=null&&(h.callback=s),i=_r(e,h,u),i!==null&&(ai(i,e,u),Tl(i,e,u))},enqueueReplaceState:function(e,i,s){e=e._reactInternals;var u=vi(),h=mr(u);h.tag=1,h.payload=i,s!=null&&(h.callback=s),i=_r(e,h,u),i!==null&&(ai(i,e,u),Tl(i,e,u))},enqueueForceUpdate:function(e,i){e=e._reactInternals;var s=vi(),u=mr(s);u.tag=2,i!=null&&(u.callback=i),i=_r(e,u,s),i!==null&&(ai(i,e,s),Tl(i,e,s))}};function Dg(e,i,s,u,h,m,E){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(u,m,E):i.prototype&&i.prototype.isPureReactComponent?!_l(s,u)||!_l(h,m):!0}function Ug(e,i,s,u){e=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(s,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(s,u),i.state!==e&&nd.enqueueReplaceState(i,i.state,null)}function hs(e,i){var s=i;if("ref"in i){s={};for(var u in i)u!=="ref"&&(s[u]=i[u])}if(e=e.defaultProps){s===i&&(s=g({},s));for(var h in e)s[h]===void 0&&(s[h]=e[h])}return s}function Lg(e){ku(e)}function Ng(e){console.error(e)}function Og(e){ku(e)}function hc(e,i){try{var s=e.onUncaughtError;s(i.value,{componentStack:i.stack})}catch(u){setTimeout(function(){throw u})}}function Pg(e,i,s){try{var u=e.onCaughtError;u(s.value,{componentStack:s.stack,errorBoundary:i.tag===1?i.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function id(e,i,s){return s=mr(s),s.tag=3,s.payload={element:null},s.callback=function(){hc(e,i)},s}function Fg(e){return e=mr(e),e.tag=3,e}function zg(e,i,s,u){var h=s.type.getDerivedStateFromError;if(typeof h=="function"){var m=u.value;e.payload=function(){return h(m)},e.callback=function(){Pg(i,s,u)}}var E=s.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(e.callback=function(){Pg(i,s,u),typeof h!="function"&&(Mr===null?Mr=new Set([this]):Mr.add(this));var N=u.stack;this.componentDidCatch(u.value,{componentStack:N!==null?N:""})})}function uT(e,i,s,u,h){if(s.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(i=s.alternate,i!==null&&$s(i,s,h,!0),s=pi.current,s!==null){switch(s.tag){case 31:case 13:return Fi===null?Tc():s.alternate===null&&ln===0&&(ln=3),s.flags&=-257,s.flags|=65536,s.lanes=h,u===$u?s.flags|=16384:(i=s.updateQueue,i===null?s.updateQueue=new Set([u]):i.add(u),Cd(e,u,h)),!1;case 22:return s.flags|=65536,u===$u?s.flags|=16384:(i=s.updateQueue,i===null?(i={transitions:null,markerInstances:null,retryQueue:new Set([u])},s.updateQueue=i):(s=i.retryQueue,s===null?i.retryQueue=new Set([u]):s.add(u)),Cd(e,u,h)),!1}throw Error(a(435,s.tag))}return Cd(e,u,h),Tc(),!1}if(Se)return i=pi.current,i!==null?((i.flags&65536)===0&&(i.flags|=256),i.flags|=65536,i.lanes=h,u!==Mh&&(e=Error(a(422),{cause:u}),xl(Li(e,s)))):(u!==Mh&&(i=Error(a(423),{cause:u}),xl(Li(i,s))),e=e.current.alternate,e.flags|=65536,h&=-h,e.lanes|=h,u=Li(u,s),h=id(e.stateNode,u,h),Nh(e,h),ln!==4&&(ln=2)),!1;var m=Error(a(520),{cause:u});if(m=Li(m,s),Il===null?Il=[m]:Il.push(m),ln!==4&&(ln=2),i===null)return!0;u=Li(u,s),s=i;do{switch(s.tag){case 3:return s.flags|=65536,e=h&-h,s.lanes|=e,e=id(s.stateNode,u,e),Nh(s,e),!1;case 1:if(i=s.type,m=s.stateNode,(s.flags&128)===0&&(typeof i.getDerivedStateFromError=="function"||m!==null&&typeof m.componentDidCatch=="function"&&(Mr===null||!Mr.has(m))))return s.flags|=65536,h&=-h,s.lanes|=h,h=Fg(h),zg(h,e,s,u),Nh(s,h),!1}s=s.return}while(s!==null);return!1}var ad=Error(a(461)),vn=!1;function In(e,i,s,u){i.child=e===null?V0(i,null,s,u):cs(i,e.child,s,u)}function Ig(e,i,s,u,h){s=s.render;var m=i.ref;if("ref"in u){var E={};for(var N in u)N!=="ref"&&(E[N]=u[N])}else E=u;return ss(i),u=Bh(e,i,s,E,m,h),N=Hh(),e!==null&&!vn?(Vh(e,i,h),Ua(e,i,h)):(Se&&N&&Sh(i),i.flags|=1,In(e,i,u,h),i.child)}function Bg(e,i,s,u,h){if(e===null){var m=s.type;return typeof m=="function"&&!gh(m)&&m.defaultProps===void 0&&s.compare===null?(i.tag=15,i.type=m,Hg(e,i,m,u,h)):(e=Yu(s.type,null,u,i,i.mode,h),e.ref=i.ref,e.return=i,i.child=e)}if(m=e.child,!hd(e,h)){var E=m.memoizedProps;if(s=s.compare,s=s!==null?s:_l,s(E,u)&&e.ref===i.ref)return Ua(e,i,h)}return i.flags|=1,e=ba(m,u),e.ref=i.ref,e.return=i,i.child=e}function Hg(e,i,s,u,h){if(e!==null){var m=e.memoizedProps;if(_l(m,u)&&e.ref===i.ref)if(vn=!1,i.pendingProps=u=m,hd(e,h))(e.flags&131072)!==0&&(vn=!0);else return i.lanes=e.lanes,Ua(e,i,h)}return rd(e,i,s,u,h)}function Vg(e,i,s,u){var h=u.children,m=e!==null?e.memoizedState:null;if(e===null&&i.stateNode===null&&(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),u.mode==="hidden"){if((i.flags&128)!==0){if(m=m!==null?m.baseLanes|s:s,e!==null){for(u=i.child=e.child,h=0;u!==null;)h=h|u.lanes|u.childLanes,u=u.sibling;u=h&~m}else u=0,i.child=null;return Gg(e,i,m,s,u)}if((s&536870912)!==0)i.memoizedState={baseLanes:0,cachePool:null},e!==null&&Qu(i,m!==null?m.cachePool:null),m!==null?X0(i,m):Ph(),W0(i);else return u=i.lanes=536870912,Gg(e,i,m!==null?m.baseLanes|s:s,s,u)}else m!==null?(Qu(i,m.cachePool),X0(i,m),vr(),i.memoizedState=null):(e!==null&&Qu(i,null),Ph(),vr());return In(e,i,h,s),i.child}function Ul(e,i){return e!==null&&e.tag===22||i.stateNode!==null||(i.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.sibling}function Gg(e,i,s,u,h){var m=wh();return m=m===null?null:{parent:_n._currentValue,pool:m},i.memoizedState={baseLanes:s,cachePool:m},e!==null&&Qu(i,null),Ph(),W0(i),e!==null&&$s(e,i,u,!0),i.childLanes=h,null}function dc(e,i){return i=mc({mode:i.mode,children:i.children},e.mode),i.ref=e.ref,e.child=i,i.return=e,i}function kg(e,i,s){return cs(i,e.child,null,s),e=dc(i,i.pendingProps),e.flags|=2,mi(i),i.memoizedState=null,e}function cT(e,i,s){var u=i.pendingProps,h=(i.flags&128)!==0;if(i.flags&=-129,e===null){if(Se){if(u.mode==="hidden")return e=dc(i,u),i.lanes=536870912,Ul(null,e);if(zh(i),(e=je)?(e=ex(e,Pi),e=e!==null&&e.data==="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:cr!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},s=A0(e),s.return=i,i.child=s,Fn=i,je=null)):e=null,e===null)throw hr(i);return i.lanes=536870912,null}return dc(i,u)}var m=e.memoizedState;if(m!==null){var E=m.dehydrated;if(zh(i),h)if(i.flags&256)i.flags&=-257,i=kg(e,i,s);else if(i.memoizedState!==null)i.child=e.child,i.flags|=128,i=null;else throw Error(a(558));else if(vn||$s(e,i,s,!1),h=(s&e.childLanes)!==0,vn||h){if(u=We,u!==null&&(E=Is(u,s),E!==0&&E!==m.retryLane))throw m.retryLane=E,ns(e,E),ai(u,e,E),ad;Tc(),i=kg(e,i,s)}else e=m.treeContext,je=zi(E.nextSibling),Fn=i,Se=!0,fr=null,Pi=!1,e!==null&&w0(i,e),i=dc(i,u),i.flags|=4096;return i}return e=ba(e.child,{mode:u.mode,children:u.children}),e.ref=i.ref,i.child=e,e.return=i,e}function pc(e,i){var s=i.ref;if(s===null)e!==null&&e.ref!==null&&(i.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(a(284));(e===null||e.ref!==s)&&(i.flags|=4194816)}}function rd(e,i,s,u,h){return ss(i),s=Bh(e,i,s,u,void 0,h),u=Hh(),e!==null&&!vn?(Vh(e,i,h),Ua(e,i,h)):(Se&&u&&Sh(i),i.flags|=1,In(e,i,s,h),i.child)}function Xg(e,i,s,u,h,m){return ss(i),i.updateQueue=null,s=Y0(i,u,s,h),q0(e),u=Hh(),e!==null&&!vn?(Vh(e,i,m),Ua(e,i,m)):(Se&&u&&Sh(i),i.flags|=1,In(e,i,s,m),i.child)}function Wg(e,i,s,u,h){if(ss(i),i.stateNode===null){var m=js,E=s.contextType;typeof E=="object"&&E!==null&&(m=zn(E)),m=new s(u,m),i.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,m.updater=nd,i.stateNode=m,m._reactInternals=i,m=i.stateNode,m.props=u,m.state=i.memoizedState,m.refs={},Uh(i),E=s.contextType,m.context=typeof E=="object"&&E!==null?zn(E):js,m.state=i.memoizedState,E=s.getDerivedStateFromProps,typeof E=="function"&&(ed(i,s,E,u),m.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(E=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),E!==m.state&&nd.enqueueReplaceState(m,m.state,null),Al(i,u,m,h),bl(),m.state=i.memoizedState),typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!0}else if(e===null){m=i.stateNode;var N=i.memoizedProps,G=hs(s,N);m.props=G;var nt=m.context,dt=s.contextType;E=js,typeof dt=="object"&&dt!==null&&(E=zn(dt));var _t=s.getDerivedStateFromProps;dt=typeof _t=="function"||typeof m.getSnapshotBeforeUpdate=="function",N=i.pendingProps!==N,dt||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(N||nt!==E)&&Ug(i,m,u,E),pr=!1;var rt=i.memoizedState;m.state=rt,Al(i,u,m,h),bl(),nt=i.memoizedState,N||rt!==nt||pr?(typeof _t=="function"&&(ed(i,s,_t,u),nt=i.memoizedState),(G=pr||Dg(i,s,G,u,rt,nt,E))?(dt||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount()),typeof m.componentDidMount=="function"&&(i.flags|=4194308)):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=nt),m.props=u,m.state=nt,m.context=E,u=G):(typeof m.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{m=i.stateNode,Lh(e,i),E=i.memoizedProps,dt=hs(s,E),m.props=dt,_t=i.pendingProps,rt=m.context,nt=s.contextType,G=js,typeof nt=="object"&&nt!==null&&(G=zn(nt)),N=s.getDerivedStateFromProps,(nt=typeof N=="function"||typeof m.getSnapshotBeforeUpdate=="function")||typeof m.UNSAFE_componentWillReceiveProps!="function"&&typeof m.componentWillReceiveProps!="function"||(E!==_t||rt!==G)&&Ug(i,m,u,G),pr=!1,rt=i.memoizedState,m.state=rt,Al(i,u,m,h),bl();var ct=i.memoizedState;E!==_t||rt!==ct||pr||e!==null&&e.dependencies!==null&&ju(e.dependencies)?(typeof N=="function"&&(ed(i,s,N,u),ct=i.memoizedState),(dt=pr||Dg(i,s,dt,u,rt,ct,G)||e!==null&&e.dependencies!==null&&ju(e.dependencies))?(nt||typeof m.UNSAFE_componentWillUpdate!="function"&&typeof m.componentWillUpdate!="function"||(typeof m.componentWillUpdate=="function"&&m.componentWillUpdate(u,ct,G),typeof m.UNSAFE_componentWillUpdate=="function"&&m.UNSAFE_componentWillUpdate(u,ct,G)),typeof m.componentDidUpdate=="function"&&(i.flags|=4),typeof m.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=ct),m.props=u,m.state=ct,m.context=G,u=dt):(typeof m.componentDidUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=4),typeof m.getSnapshotBeforeUpdate!="function"||E===e.memoizedProps&&rt===e.memoizedState||(i.flags|=1024),u=!1)}return m=u,pc(e,i),u=(i.flags&128)!==0,m||u?(m=i.stateNode,s=u&&typeof s.getDerivedStateFromError!="function"?null:m.render(),i.flags|=1,e!==null&&u?(i.child=cs(i,e.child,null,h),i.child=cs(i,null,s,h)):In(e,i,s,h),i.memoizedState=m.state,e=i.child):e=Ua(e,i,h),e}function qg(e,i,s,u){return as(),i.flags|=256,In(e,i,s,u),i.child}var sd={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function od(e){return{baseLanes:e,cachePool:P0()}}function ld(e,i,s){return e=e!==null?e.childLanes&~s:0,i&&(e|=gi),e}function Yg(e,i,s){var u=i.pendingProps,h=!1,m=(i.flags&128)!==0,E;if((E=m)||(E=e!==null&&e.memoizedState===null?!1:(fn.current&2)!==0),E&&(h=!0,i.flags&=-129),E=(i.flags&32)!==0,i.flags&=-33,e===null){if(Se){if(h?gr(i):vr(),(e=je)?(e=ex(e,Pi),e=e!==null&&e.data!=="&"?e:null,e!==null&&(i.memoizedState={dehydrated:e,treeContext:cr!==null?{id:ra,overflow:sa}:null,retryLane:536870912,hydrationErrors:null},s=A0(e),s.return=i,i.child=s,Fn=i,je=null)):e=null,e===null)throw hr(i);return Xd(e)?i.lanes=32:i.lanes=536870912,null}var N=u.children;return u=u.fallback,h?(vr(),h=i.mode,N=mc({mode:"hidden",children:N},h),u=is(u,h,s,null),N.return=i,u.return=i,N.sibling=u,i.child=N,u=i.child,u.memoizedState=od(s),u.childLanes=ld(e,E,s),i.memoizedState=sd,Ul(null,u)):(gr(i),ud(i,N))}var G=e.memoizedState;if(G!==null&&(N=G.dehydrated,N!==null)){if(m)i.flags&256?(gr(i),i.flags&=-257,i=cd(e,i,s)):i.memoizedState!==null?(vr(),i.child=e.child,i.flags|=128,i=null):(vr(),N=u.fallback,h=i.mode,u=mc({mode:"visible",children:u.children},h),N=is(N,h,s,null),N.flags|=2,u.return=i,N.return=i,u.sibling=N,i.child=u,cs(i,e.child,null,s),u=i.child,u.memoizedState=od(s),u.childLanes=ld(e,E,s),i.memoizedState=sd,i=Ul(null,u));else if(gr(i),Xd(N)){if(E=N.nextSibling&&N.nextSibling.dataset,E)var nt=E.dgst;E=nt,u=Error(a(419)),u.stack="",u.digest=E,xl({value:u,source:null,stack:null}),i=cd(e,i,s)}else if(vn||$s(e,i,s,!1),E=(s&e.childLanes)!==0,vn||E){if(E=We,E!==null&&(u=Is(E,s),u!==0&&u!==G.retryLane))throw G.retryLane=u,ns(e,u),ai(E,e,u),ad;kd(N)||Tc(),i=cd(e,i,s)}else kd(N)?(i.flags|=192,i.child=e.child,i=null):(e=G.treeContext,je=zi(N.nextSibling),Fn=i,Se=!0,fr=null,Pi=!1,e!==null&&w0(i,e),i=ud(i,u.children),i.flags|=4096);return i}return h?(vr(),N=u.fallback,h=i.mode,G=e.child,nt=G.sibling,u=ba(G,{mode:"hidden",children:u.children}),u.subtreeFlags=G.subtreeFlags&65011712,nt!==null?N=ba(nt,N):(N=is(N,h,s,null),N.flags|=2),N.return=i,u.return=i,u.sibling=N,i.child=u,Ul(null,u),u=i.child,N=e.child.memoizedState,N===null?N=od(s):(h=N.cachePool,h!==null?(G=_n._currentValue,h=h.parent!==G?{parent:G,pool:G}:h):h=P0(),N={baseLanes:N.baseLanes|s,cachePool:h}),u.memoizedState=N,u.childLanes=ld(e,E,s),i.memoizedState=sd,Ul(e.child,u)):(gr(i),s=e.child,e=s.sibling,s=ba(s,{mode:"visible",children:u.children}),s.return=i,s.sibling=null,e!==null&&(E=i.deletions,E===null?(i.deletions=[e],i.flags|=16):E.push(e)),i.child=s,i.memoizedState=null,s)}function ud(e,i){return i=mc({mode:"visible",children:i},e.mode),i.return=e,e.child=i}function mc(e,i){return e=di(22,e,null,i),e.lanes=0,e}function cd(e,i,s){return cs(i,e.child,null,s),e=ud(i,i.pendingProps.children),e.flags|=2,i.memoizedState=null,e}function Zg(e,i,s){e.lanes|=i;var u=e.alternate;u!==null&&(u.lanes|=i),bh(e.return,i,s)}function fd(e,i,s,u,h,m){var E=e.memoizedState;E===null?e.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:s,tailMode:h,treeForkCount:m}:(E.isBackwards=i,E.rendering=null,E.renderingStartTime=0,E.last=u,E.tail=s,E.tailMode=h,E.treeForkCount=m)}function jg(e,i,s){var u=i.pendingProps,h=u.revealOrder,m=u.tail;u=u.children;var E=fn.current,N=(E&2)!==0;if(N?(E=E&1|2,i.flags|=128):E&=1,ht(fn,E),In(e,i,u,s),u=Se?vl:0,!N&&e!==null&&(e.flags&128)!==0)t:for(e=i.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Zg(e,s,i);else if(e.tag===19)Zg(e,s,i);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===i)break t;for(;e.sibling===null;){if(e.return===null||e.return===i)break t;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(h){case"forwards":for(s=i.child,h=null;s!==null;)e=s.alternate,e!==null&&ic(e)===null&&(h=s),s=s.sibling;s=h,s===null?(h=i.child,i.child=null):(h=s.sibling,s.sibling=null),fd(i,!1,h,s,m,u);break;case"backwards":case"unstable_legacy-backwards":for(s=null,h=i.child,i.child=null;h!==null;){if(e=h.alternate,e!==null&&ic(e)===null){i.child=h;break}e=h.sibling,h.sibling=s,s=h,h=e}fd(i,!0,s,null,m,u);break;case"together":fd(i,!1,null,null,void 0,u);break;default:i.memoizedState=null}return i.child}function Ua(e,i,s){if(e!==null&&(i.dependencies=e.dependencies),yr|=i.lanes,(s&i.childLanes)===0)if(e!==null){if($s(e,i,s,!1),(s&i.childLanes)===0)return null}else return null;if(e!==null&&i.child!==e.child)throw Error(a(153));if(i.child!==null){for(e=i.child,s=ba(e,e.pendingProps),i.child=s,s.return=i;e.sibling!==null;)e=e.sibling,s=s.sibling=ba(e,e.pendingProps),s.return=i;s.sibling=null}return i.child}function hd(e,i){return(e.lanes&i)!==0?!0:(e=e.dependencies,!!(e!==null&&ju(e)))}function fT(e,i,s){switch(i.tag){case 3:Tt(i,i.stateNode.containerInfo),dr(i,_n,e.memoizedState.cache),as();break;case 27:case 5:Bt(i);break;case 4:Tt(i,i.stateNode.containerInfo);break;case 10:dr(i,i.type,i.memoizedProps.value);break;case 31:if(i.memoizedState!==null)return i.flags|=128,zh(i),null;break;case 13:var u=i.memoizedState;if(u!==null)return u.dehydrated!==null?(gr(i),i.flags|=128,null):(s&i.child.childLanes)!==0?Yg(e,i,s):(gr(i),e=Ua(e,i,s),e!==null?e.sibling:null);gr(i);break;case 19:var h=(e.flags&128)!==0;if(u=(s&i.childLanes)!==0,u||($s(e,i,s,!1),u=(s&i.childLanes)!==0),h){if(u)return jg(e,i,s);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),ht(fn,fn.current),u)break;return null;case 22:return i.lanes=0,Vg(e,i,s,i.pendingProps);case 24:dr(i,_n,e.memoizedState.cache)}return Ua(e,i,s)}function Kg(e,i,s){if(e!==null)if(e.memoizedProps!==i.pendingProps)vn=!0;else{if(!hd(e,s)&&(i.flags&128)===0)return vn=!1,fT(e,i,s);vn=(e.flags&131072)!==0}else vn=!1,Se&&(i.flags&1048576)!==0&&C0(i,vl,i.index);switch(i.lanes=0,i.tag){case 16:t:{var u=i.pendingProps;if(e=ls(i.elementType),i.type=e,typeof e=="function")gh(e)?(u=hs(e,u),i.tag=1,i=Wg(null,i,e,u,s)):(i.tag=0,i=rd(null,i,e,u,s));else{if(e!=null){var h=e.$$typeof;if(h===C){i.tag=11,i=Ig(null,i,e,u,s);break t}else if(h===U){i.tag=14,i=Bg(null,i,e,u,s);break t}}throw i=st(e)||e,Error(a(306,i,""))}}return i;case 0:return rd(e,i,i.type,i.pendingProps,s);case 1:return u=i.type,h=hs(u,i.pendingProps),Wg(e,i,u,h,s);case 3:t:{if(Tt(i,i.stateNode.containerInfo),e===null)throw Error(a(387));u=i.pendingProps;var m=i.memoizedState;h=m.element,Lh(e,i),Al(i,u,null,s);var E=i.memoizedState;if(u=E.cache,dr(i,_n,u),u!==m.cache&&Ah(i,[_n],s,!0),bl(),u=E.element,m.isDehydrated)if(m={element:u,isDehydrated:!1,cache:E.cache},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){i=qg(e,i,u,s);break t}else if(u!==h){h=Li(Error(a(424)),i),xl(h),i=qg(e,i,u,s);break t}else for(e=i.stateNode.containerInfo,e.nodeType===9?e=e.body:e=e.nodeName==="HTML"?e.ownerDocument.body:e,je=zi(e.firstChild),Fn=i,Se=!0,fr=null,Pi=!0,s=V0(i,null,u,s),i.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(as(),u===h){i=Ua(e,i,s);break t}In(e,i,u,s)}i=i.child}return i;case 26:return pc(e,i),e===null?(s=ox(i.type,null,i.pendingProps,null))?i.memoizedState=s:Se||(s=i.type,e=i.pendingProps,u=Uc(tt.current).createElement(s),u[mn]=i,u[Dn]=e,Bn(u,s,e),O(u),i.stateNode=u):i.memoizedState=ox(i.type,e.memoizedProps,i.pendingProps,e.memoizedState),null;case 27:return Bt(i),e===null&&Se&&(u=i.stateNode=ax(i.type,i.pendingProps,tt.current),Fn=i,Pi=!0,h=je,Ar(i.type)?(Wd=h,je=zi(u.firstChild)):je=h),In(e,i,i.pendingProps.children,s),pc(e,i),e===null&&(i.flags|=4194304),i.child;case 5:return e===null&&Se&&((h=u=je)&&(u=VT(u,i.type,i.pendingProps,Pi),u!==null?(i.stateNode=u,Fn=i,je=zi(u.firstChild),Pi=!1,h=!0):h=!1),h||hr(i)),Bt(i),h=i.type,m=i.pendingProps,E=e!==null?e.memoizedProps:null,u=m.children,Hd(h,m)?u=null:E!==null&&Hd(h,E)&&(i.flags|=32),i.memoizedState!==null&&(h=Bh(e,i,nT,null,null,s),ql._currentValue=h),pc(e,i),In(e,i,u,s),i.child;case 6:return e===null&&Se&&((e=s=je)&&(s=GT(s,i.pendingProps,Pi),s!==null?(i.stateNode=s,Fn=i,je=null,e=!0):e=!1),e||hr(i)),null;case 13:return Yg(e,i,s);case 4:return Tt(i,i.stateNode.containerInfo),u=i.pendingProps,e===null?i.child=cs(i,null,u,s):In(e,i,u,s),i.child;case 11:return Ig(e,i,i.type,i.pendingProps,s);case 7:return In(e,i,i.pendingProps,s),i.child;case 8:return In(e,i,i.pendingProps.children,s),i.child;case 12:return In(e,i,i.pendingProps.children,s),i.child;case 10:return u=i.pendingProps,dr(i,i.type,u.value),In(e,i,u.children,s),i.child;case 9:return h=i.type._context,u=i.pendingProps.children,ss(i),h=zn(h),u=u(h),i.flags|=1,In(e,i,u,s),i.child;case 14:return Bg(e,i,i.type,i.pendingProps,s);case 15:return Hg(e,i,i.type,i.pendingProps,s);case 19:return jg(e,i,s);case 31:return cT(e,i,s);case 22:return Vg(e,i,s,i.pendingProps);case 24:return ss(i),u=zn(_n),e===null?(h=wh(),h===null&&(h=We,m=Rh(),h.pooledCache=m,m.refCount++,m!==null&&(h.pooledCacheLanes|=s),h=m),i.memoizedState={parent:u,cache:h},Uh(i),dr(i,_n,h)):((e.lanes&s)!==0&&(Lh(e,i),Al(i,null,null,s),bl()),h=e.memoizedState,m=i.memoizedState,h.parent!==u?(h={parent:u,cache:u},i.memoizedState=h,i.lanes===0&&(i.memoizedState=i.updateQueue.baseState=h),dr(i,_n,u)):(u=m.cache,dr(i,_n,u),u!==h.cache&&Ah(i,[_n],s,!0))),In(e,i,i.pendingProps.children,s),i.child;case 29:throw i.pendingProps}throw Error(a(156,i.tag))}function La(e){e.flags|=4}function dd(e,i,s,u,h){if((i=(e.mode&32)!==0)&&(i=!1),i){if(e.flags|=16777216,(h&335544128)===h)if(e.stateNode.complete)e.flags|=8192;else if(Ev())e.flags|=8192;else throw us=$u,Dh}else e.flags&=-16777217}function Qg(e,i){if(i.type!=="stylesheet"||(i.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!hx(i))if(Ev())e.flags|=8192;else throw us=$u,Dh}function _c(e,i){i!==null&&(e.flags|=4),e.flags&16384&&(i=e.tag!==22?Fe():536870912,e.lanes|=i,fo|=i)}function Ll(e,i){if(!Se)switch(e.tailMode){case"hidden":i=e.tail;for(var s=null;i!==null;)i.alternate!==null&&(s=i),i=i.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var u=null;s!==null;)s.alternate!==null&&(u=s),s=s.sibling;u===null?i||e.tail===null?e.tail=null:e.tail.sibling=null:u.sibling=null}}function Ke(e){var i=e.alternate!==null&&e.alternate.child===e.child,s=0,u=0;if(i)for(var h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=e,h=h.sibling;else for(h=e.child;h!==null;)s|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=e,h=h.sibling;return e.subtreeFlags|=u,e.childLanes=s,i}function hT(e,i,s){var u=i.pendingProps;switch(yh(i),i.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ke(i),null;case 1:return Ke(i),null;case 3:return s=i.stateNode,u=null,e!==null&&(u=e.memoizedState.cache),i.memoizedState.cache!==u&&(i.flags|=2048),Ca(_n),Ht(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(Js(i)?La(i):e===null||e.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,Eh())),Ke(i),null;case 26:var h=i.type,m=i.memoizedState;return e===null?(La(i),m!==null?(Ke(i),Qg(i,m)):(Ke(i),dd(i,h,null,u,s))):m?m!==e.memoizedState?(La(i),Ke(i),Qg(i,m)):(Ke(i),i.flags&=-16777217):(e=e.memoizedProps,e!==u&&La(i),Ke(i),dd(i,h,e,u,s)),null;case 27:if(he(i),s=tt.current,h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&La(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}e=yt.current,Js(i)?D0(i):(e=ax(h,u,s),i.stateNode=e,La(i))}return Ke(i),null;case 5:if(he(i),h=i.type,e!==null&&i.stateNode!=null)e.memoizedProps!==u&&La(i);else{if(!u){if(i.stateNode===null)throw Error(a(166));return Ke(i),null}if(m=yt.current,Js(i))D0(i);else{var E=Uc(tt.current);switch(m){case 1:m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case 2:m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;default:switch(h){case"svg":m=E.createElementNS("http://www.w3.org/2000/svg",h);break;case"math":m=E.createElementNS("http://www.w3.org/1998/Math/MathML",h);break;case"script":m=E.createElement("div"),m.innerHTML="<script><\/script>",m=m.removeChild(m.firstChild);break;case"select":m=typeof u.is=="string"?E.createElement("select",{is:u.is}):E.createElement("select"),u.multiple?m.multiple=!0:u.size&&(m.size=u.size);break;default:m=typeof u.is=="string"?E.createElement(h,{is:u.is}):E.createElement(h)}}m[mn]=i,m[Dn]=u;t:for(E=i.child;E!==null;){if(E.tag===5||E.tag===6)m.appendChild(E.stateNode);else if(E.tag!==4&&E.tag!==27&&E.child!==null){E.child.return=E,E=E.child;continue}if(E===i)break t;for(;E.sibling===null;){if(E.return===null||E.return===i)break t;E=E.return}E.sibling.return=E.return,E=E.sibling}i.stateNode=m;t:switch(Bn(m,h,u),h){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break t;case"img":u=!0;break t;default:u=!1}u&&La(i)}}return Ke(i),dd(i,i.type,e===null?null:e.memoizedProps,i.pendingProps,s),null;case 6:if(e&&i.stateNode!=null)e.memoizedProps!==u&&La(i);else{if(typeof u!="string"&&i.stateNode===null)throw Error(a(166));if(e=tt.current,Js(i)){if(e=i.stateNode,s=i.memoizedProps,u=null,h=Fn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}e[mn]=i,e=!!(e.nodeValue===s||u!==null&&u.suppressHydrationWarning===!0||Yv(e.nodeValue,s)),e||hr(i,!0)}else e=Uc(e).createTextNode(u),e[mn]=i,i.stateNode=e}return Ke(i),null;case 31:if(s=i.memoizedState,e===null||e.memoizedState!==null){if(u=Js(i),s!==null){if(e===null){if(!u)throw Error(a(318));if(e=i.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(a(557));e[mn]=i}else as(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),e=!1}else s=Eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return i.flags&256?(mi(i),i):(mi(i),null);if((i.flags&128)!==0)throw Error(a(558))}return Ke(i),null;case 13:if(u=i.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(h=Js(i),u!==null&&u.dehydrated!==null){if(e===null){if(!h)throw Error(a(318));if(h=i.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(a(317));h[mn]=i}else as(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Ke(i),h=!1}else h=Eh(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=h),h=!0;if(!h)return i.flags&256?(mi(i),i):(mi(i),null)}return mi(i),(i.flags&128)!==0?(i.lanes=s,i):(s=u!==null,e=e!==null&&e.memoizedState!==null,s&&(u=i.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool),m=null,u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(m=u.memoizedState.cachePool.pool),m!==h&&(u.flags|=2048)),s!==e&&s&&(i.child.flags|=8192),_c(i,i.updateQueue),Ke(i),null);case 4:return Ht(),e===null&&Pd(i.stateNode.containerInfo),Ke(i),null;case 10:return Ca(i.type),Ke(i),null;case 19:if(J(fn),u=i.memoizedState,u===null)return Ke(i),null;if(h=(i.flags&128)!==0,m=u.rendering,m===null)if(h)Ll(u,!1);else{if(ln!==0||e!==null&&(e.flags&128)!==0)for(e=i.child;e!==null;){if(m=ic(e),m!==null){for(i.flags|=128,Ll(u,!1),e=m.updateQueue,i.updateQueue=e,_c(i,e),i.subtreeFlags=0,e=s,s=i.child;s!==null;)b0(s,e),s=s.sibling;return ht(fn,fn.current&1|2),Se&&Aa(i,u.treeForkCount),i.child}e=e.sibling}u.tail!==null&&A()>yc&&(i.flags|=128,h=!0,Ll(u,!1),i.lanes=4194304)}else{if(!h)if(e=ic(m),e!==null){if(i.flags|=128,h=!0,e=e.updateQueue,i.updateQueue=e,_c(i,e),Ll(u,!0),u.tail===null&&u.tailMode==="hidden"&&!m.alternate&&!Se)return Ke(i),null}else 2*A()-u.renderingStartTime>yc&&s!==536870912&&(i.flags|=128,h=!0,Ll(u,!1),i.lanes=4194304);u.isBackwards?(m.sibling=i.child,i.child=m):(e=u.last,e!==null?e.sibling=m:i.child=m,u.last=m)}return u.tail!==null?(e=u.tail,u.rendering=e,u.tail=e.sibling,u.renderingStartTime=A(),e.sibling=null,s=fn.current,ht(fn,h?s&1|2:s&1),Se&&Aa(i,u.treeForkCount),e):(Ke(i),null);case 22:case 23:return mi(i),Fh(),u=i.memoizedState!==null,e!==null?e.memoizedState!==null!==u&&(i.flags|=8192):u&&(i.flags|=8192),u?(s&536870912)!==0&&(i.flags&128)===0&&(Ke(i),i.subtreeFlags&6&&(i.flags|=8192)):Ke(i),s=i.updateQueue,s!==null&&_c(i,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),u=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(u=i.memoizedState.cachePool.pool),u!==s&&(i.flags|=2048),e!==null&&J(os),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),i.memoizedState.cache!==s&&(i.flags|=2048),Ca(_n),Ke(i),null;case 25:return null;case 30:return null}throw Error(a(156,i.tag))}function dT(e,i){switch(yh(i),i.tag){case 1:return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 3:return Ca(_n),Ht(),e=i.flags,(e&65536)!==0&&(e&128)===0?(i.flags=e&-65537|128,i):null;case 26:case 27:case 5:return he(i),null;case 31:if(i.memoizedState!==null){if(mi(i),i.alternate===null)throw Error(a(340));as()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 13:if(mi(i),e=i.memoizedState,e!==null&&e.dehydrated!==null){if(i.alternate===null)throw Error(a(340));as()}return e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 19:return J(fn),null;case 4:return Ht(),null;case 10:return Ca(i.type),null;case 22:case 23:return mi(i),Fh(),e!==null&&J(os),e=i.flags,e&65536?(i.flags=e&-65537|128,i):null;case 24:return Ca(_n),null;case 25:return null;default:return null}}function Jg(e,i){switch(yh(i),i.tag){case 3:Ca(_n),Ht();break;case 26:case 27:case 5:he(i);break;case 4:Ht();break;case 31:i.memoizedState!==null&&mi(i);break;case 13:mi(i);break;case 19:J(fn);break;case 10:Ca(i.type);break;case 22:case 23:mi(i),Fh(),e!==null&&J(os);break;case 24:Ca(_n)}}function Nl(e,i){try{var s=i.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var h=u.next;s=h;do{if((s.tag&e)===e){u=void 0;var m=s.create,E=s.inst;u=m(),E.destroy=u}s=s.next}while(s!==h)}}catch(N){Be(i,i.return,N)}}function xr(e,i,s){try{var u=i.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var m=h.next;u=m;do{if((u.tag&e)===e){var E=u.inst,N=E.destroy;if(N!==void 0){E.destroy=void 0,h=i;var G=s,nt=N;try{nt()}catch(dt){Be(h,G,dt)}}}u=u.next}while(u!==m)}}catch(dt){Be(i,i.return,dt)}}function $g(e){var i=e.updateQueue;if(i!==null){var s=e.stateNode;try{k0(i,s)}catch(u){Be(e,e.return,u)}}}function tv(e,i,s){s.props=hs(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(u){Be(e,i,u)}}function Ol(e,i){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var u=e.stateNode;break;case 30:u=e.stateNode;break;default:u=e.stateNode}typeof s=="function"?e.refCleanup=s(u):s.current=u}}catch(h){Be(e,i,h)}}function oa(e,i){var s=e.ref,u=e.refCleanup;if(s!==null)if(typeof u=="function")try{u()}catch(h){Be(e,i,h)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(h){Be(e,i,h)}else s.current=null}function ev(e){var i=e.type,s=e.memoizedProps,u=e.stateNode;try{t:switch(i){case"button":case"input":case"select":case"textarea":s.autoFocus&&u.focus();break t;case"img":s.src?u.src=s.src:s.srcSet&&(u.srcset=s.srcSet)}}catch(h){Be(e,e.return,h)}}function pd(e,i,s){try{var u=e.stateNode;PT(u,e.type,s,i),u[Dn]=i}catch(h){Be(e,e.return,h)}}function nv(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Ar(e.type)||e.tag===4}function md(e){t:for(;;){for(;e.sibling===null;){if(e.return===null||nv(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Ar(e.type)||e.flags&2||e.child===null||e.tag===4)continue t;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function _d(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,i):(i=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,i.appendChild(e),s=s._reactRootContainer,s!=null||i.onclick!==null||(i.onclick=Ea));else if(u!==4&&(u===27&&Ar(e.type)&&(s=e.stateNode,i=null),e=e.child,e!==null))for(_d(e,i,s),e=e.sibling;e!==null;)_d(e,i,s),e=e.sibling}function gc(e,i,s){var u=e.tag;if(u===5||u===6)e=e.stateNode,i?s.insertBefore(e,i):s.appendChild(e);else if(u!==4&&(u===27&&Ar(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(gc(e,i,s),e=e.sibling;e!==null;)gc(e,i,s),e=e.sibling}function iv(e){var i=e.stateNode,s=e.memoizedProps;try{for(var u=e.type,h=i.attributes;h.length;)i.removeAttributeNode(h[0]);Bn(i,u,s),i[mn]=e,i[Dn]=s}catch(m){Be(e,e.return,m)}}var Na=!1,xn=!1,gd=!1,av=typeof WeakSet=="function"?WeakSet:Set,Rn=null;function pT(e,i){if(e=e.containerInfo,Id=Ic,e=_0(e),ch(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else t:{s=(s=e.ownerDocument)&&s.defaultView||window;var u=s.getSelection&&s.getSelection();if(u&&u.rangeCount!==0){s=u.anchorNode;var h=u.anchorOffset,m=u.focusNode;u=u.focusOffset;try{s.nodeType,m.nodeType}catch{s=null;break t}var E=0,N=-1,G=-1,nt=0,dt=0,_t=e,rt=null;e:for(;;){for(var ct;_t!==s||h!==0&&_t.nodeType!==3||(N=E+h),_t!==m||u!==0&&_t.nodeType!==3||(G=E+u),_t.nodeType===3&&(E+=_t.nodeValue.length),(ct=_t.firstChild)!==null;)rt=_t,_t=ct;for(;;){if(_t===e)break e;if(rt===s&&++nt===h&&(N=E),rt===m&&++dt===u&&(G=E),(ct=_t.nextSibling)!==null)break;_t=rt,rt=_t.parentNode}_t=ct}s=N===-1||G===-1?null:{start:N,end:G}}else s=null}s=s||{start:0,end:0}}else s=null;for(Bd={focusedElem:e,selectionRange:s},Ic=!1,Rn=i;Rn!==null;)if(i=Rn,e=i.child,(i.subtreeFlags&1028)!==0&&e!==null)e.return=i,Rn=e;else for(;Rn!==null;){switch(i=Rn,m=i.alternate,e=i.flags,i.tag){case 0:if((e&4)!==0&&(e=i.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)h=e[s],h.ref.impl=h.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&m!==null){e=void 0,s=i,h=m.memoizedProps,m=m.memoizedState,u=s.stateNode;try{var Gt=hs(s.type,h);e=u.getSnapshotBeforeUpdate(Gt,m),u.__reactInternalSnapshotBeforeUpdate=e}catch(te){Be(s,s.return,te)}}break;case 3:if((e&1024)!==0){if(e=i.stateNode.containerInfo,s=e.nodeType,s===9)Gd(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Gd(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(a(163))}if(e=i.sibling,e!==null){e.return=i.return,Rn=e;break}Rn=i.return}}function rv(e,i,s){var u=s.flags;switch(s.tag){case 0:case 11:case 15:Pa(e,s),u&4&&Nl(5,s);break;case 1:if(Pa(e,s),u&4)if(e=s.stateNode,i===null)try{e.componentDidMount()}catch(E){Be(s,s.return,E)}else{var h=hs(s.type,i.memoizedProps);i=i.memoizedState;try{e.componentDidUpdate(h,i,e.__reactInternalSnapshotBeforeUpdate)}catch(E){Be(s,s.return,E)}}u&64&&$g(s),u&512&&Ol(s,s.return);break;case 3:if(Pa(e,s),u&64&&(e=s.updateQueue,e!==null)){if(i=null,s.child!==null)switch(s.child.tag){case 27:case 5:i=s.child.stateNode;break;case 1:i=s.child.stateNode}try{k0(e,i)}catch(E){Be(s,s.return,E)}}break;case 27:i===null&&u&4&&iv(s);case 26:case 5:Pa(e,s),i===null&&u&4&&ev(s),u&512&&Ol(s,s.return);break;case 12:Pa(e,s);break;case 31:Pa(e,s),u&4&&lv(e,s);break;case 13:Pa(e,s),u&4&&uv(e,s),u&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=ET.bind(null,s),kT(e,s))));break;case 22:if(u=s.memoizedState!==null||Na,!u){i=i!==null&&i.memoizedState!==null||xn,h=Na;var m=xn;Na=u,(xn=i)&&!m?Fa(e,s,(s.subtreeFlags&8772)!==0):Pa(e,s),Na=h,xn=m}break;case 30:break;default:Pa(e,s)}}function sv(e){var i=e.alternate;i!==null&&(e.alternate=null,sv(i)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(i=e.stateNode,i!==null&&ll(i)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var $e=null,ti=!1;function Oa(e,i,s){for(s=s.child;s!==null;)ov(e,i,s),s=s.sibling}function ov(e,i,s){if(bt&&typeof bt.onCommitFiberUnmount=="function")try{bt.onCommitFiberUnmount(Et,s)}catch{}switch(s.tag){case 26:xn||oa(s,i),Oa(e,i,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:xn||oa(s,i);var u=$e,h=ti;Ar(s.type)&&($e=s.stateNode,ti=!1),Oa(e,i,s),kl(s.stateNode),$e=u,ti=h;break;case 5:xn||oa(s,i);case 6:if(u=$e,h=ti,$e=null,Oa(e,i,s),$e=u,ti=h,$e!==null)if(ti)try{($e.nodeType===9?$e.body:$e.nodeName==="HTML"?$e.ownerDocument.body:$e).removeChild(s.stateNode)}catch(m){Be(s,i,m)}else try{$e.removeChild(s.stateNode)}catch(m){Be(s,i,m)}break;case 18:$e!==null&&(ti?(e=$e,$v(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),So(e)):$v($e,s.stateNode));break;case 4:u=$e,h=ti,$e=s.stateNode.containerInfo,ti=!0,Oa(e,i,s),$e=u,ti=h;break;case 0:case 11:case 14:case 15:xr(2,s,i),xn||xr(4,s,i),Oa(e,i,s);break;case 1:xn||(oa(s,i),u=s.stateNode,typeof u.componentWillUnmount=="function"&&tv(s,i,u)),Oa(e,i,s);break;case 21:Oa(e,i,s);break;case 22:xn=(u=xn)||s.memoizedState!==null,Oa(e,i,s),xn=u;break;default:Oa(e,i,s)}}function lv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{So(e)}catch(s){Be(i,i.return,s)}}}function uv(e,i){if(i.memoizedState===null&&(e=i.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{So(e)}catch(s){Be(i,i.return,s)}}function mT(e){switch(e.tag){case 31:case 13:case 19:var i=e.stateNode;return i===null&&(i=e.stateNode=new av),i;case 22:return e=e.stateNode,i=e._retryCache,i===null&&(i=e._retryCache=new av),i;default:throw Error(a(435,e.tag))}}function vc(e,i){var s=mT(e);i.forEach(function(u){if(!s.has(u)){s.add(u);var h=TT.bind(null,e,u);u.then(h,h)}})}function ei(e,i){var s=i.deletions;if(s!==null)for(var u=0;u<s.length;u++){var h=s[u],m=e,E=i,N=E;t:for(;N!==null;){switch(N.tag){case 27:if(Ar(N.type)){$e=N.stateNode,ti=!1;break t}break;case 5:$e=N.stateNode,ti=!1;break t;case 3:case 4:$e=N.stateNode.containerInfo,ti=!0;break t}N=N.return}if($e===null)throw Error(a(160));ov(m,E,h),$e=null,ti=!1,m=h.alternate,m!==null&&(m.return=null),h.return=null}if(i.subtreeFlags&13886)for(i=i.child;i!==null;)cv(i,e),i=i.sibling}var ji=null;function cv(e,i){var s=e.alternate,u=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:ei(i,e),ni(e),u&4&&(xr(3,e,e.return),Nl(3,e),xr(5,e,e.return));break;case 1:ei(i,e),ni(e),u&512&&(xn||s===null||oa(s,s.return)),u&64&&Na&&(e=e.updateQueue,e!==null&&(u=e.callbacks,u!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?u:s.concat(u))));break;case 26:var h=ji;if(ei(i,e),ni(e),u&512&&(xn||s===null||oa(s,s.return)),u&4){var m=s!==null?s.memoizedState:null;if(u=e.memoizedState,s===null)if(u===null)if(e.stateNode===null){t:{u=e.type,s=e.memoizedProps,h=h.ownerDocument||h;e:switch(u){case"title":m=h.getElementsByTagName("title")[0],(!m||m[Qr]||m[mn]||m.namespaceURI==="http://www.w3.org/2000/svg"||m.hasAttribute("itemprop"))&&(m=h.createElement(u),h.head.insertBefore(m,h.querySelector("head > title"))),Bn(m,u,s),m[mn]=e,O(m),u=m;break t;case"link":var E=cx("link","href",h).get(u+(s.href||""));if(E){for(var N=0;N<E.length;N++)if(m=E[N],m.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&m.getAttribute("rel")===(s.rel==null?null:s.rel)&&m.getAttribute("title")===(s.title==null?null:s.title)&&m.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){E.splice(N,1);break e}}m=h.createElement(u),Bn(m,u,s),h.head.appendChild(m);break;case"meta":if(E=cx("meta","content",h).get(u+(s.content||""))){for(N=0;N<E.length;N++)if(m=E[N],m.getAttribute("content")===(s.content==null?null:""+s.content)&&m.getAttribute("name")===(s.name==null?null:s.name)&&m.getAttribute("property")===(s.property==null?null:s.property)&&m.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&m.getAttribute("charset")===(s.charSet==null?null:s.charSet)){E.splice(N,1);break e}}m=h.createElement(u),Bn(m,u,s),h.head.appendChild(m);break;default:throw Error(a(468,u))}m[mn]=e,O(m),u=m}e.stateNode=u}else fx(h,e.type,e.stateNode);else e.stateNode=ux(h,u,e.memoizedProps);else m!==u?(m===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):m.count--,u===null?fx(h,e.type,e.stateNode):ux(h,u,e.memoizedProps)):u===null&&e.stateNode!==null&&pd(e,e.memoizedProps,s.memoizedProps)}break;case 27:ei(i,e),ni(e),u&512&&(xn||s===null||oa(s,s.return)),s!==null&&u&4&&pd(e,e.memoizedProps,s.memoizedProps);break;case 5:if(ei(i,e),ni(e),u&512&&(xn||s===null||oa(s,s.return)),e.flags&32){h=e.stateNode;try{En(h,"")}catch(Gt){Be(e,e.return,Gt)}}u&4&&e.stateNode!=null&&(h=e.memoizedProps,pd(e,h,s!==null?s.memoizedProps:h)),u&1024&&(gd=!0);break;case 6:if(ei(i,e),ni(e),u&4){if(e.stateNode===null)throw Error(a(162));u=e.memoizedProps,s=e.stateNode;try{s.nodeValue=u}catch(Gt){Be(e,e.return,Gt)}}break;case 3:if(Oc=null,h=ji,ji=Lc(i.containerInfo),ei(i,e),ji=h,ni(e),u&4&&s!==null&&s.memoizedState.isDehydrated)try{So(i.containerInfo)}catch(Gt){Be(e,e.return,Gt)}gd&&(gd=!1,fv(e));break;case 4:u=ji,ji=Lc(e.stateNode.containerInfo),ei(i,e),ni(e),ji=u;break;case 12:ei(i,e),ni(e);break;case 31:ei(i,e),ni(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,vc(e,u)));break;case 13:ei(i,e),ni(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(Sc=A()),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,vc(e,u)));break;case 22:h=e.memoizedState!==null;var G=s!==null&&s.memoizedState!==null,nt=Na,dt=xn;if(Na=nt||h,xn=dt||G,ei(i,e),xn=dt,Na=nt,ni(e),u&8192)t:for(i=e.stateNode,i._visibility=h?i._visibility&-2:i._visibility|1,h&&(s===null||G||Na||xn||ds(e)),s=null,i=e;;){if(i.tag===5||i.tag===26){if(s===null){G=s=i;try{if(m=G.stateNode,h)E=m.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{N=G.stateNode;var _t=G.memoizedProps.style,rt=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;N.style.display=rt==null||typeof rt=="boolean"?"":(""+rt).trim()}}catch(Gt){Be(G,G.return,Gt)}}}else if(i.tag===6){if(s===null){G=i;try{G.stateNode.nodeValue=h?"":G.memoizedProps}catch(Gt){Be(G,G.return,Gt)}}}else if(i.tag===18){if(s===null){G=i;try{var ct=G.stateNode;h?tx(ct,!0):tx(G.stateNode,!1)}catch(Gt){Be(G,G.return,Gt)}}}else if((i.tag!==22&&i.tag!==23||i.memoizedState===null||i===e)&&i.child!==null){i.child.return=i,i=i.child;continue}if(i===e)break t;for(;i.sibling===null;){if(i.return===null||i.return===e)break t;s===i&&(s=null),i=i.return}s===i&&(s=null),i.sibling.return=i.return,i=i.sibling}u&4&&(u=e.updateQueue,u!==null&&(s=u.retryQueue,s!==null&&(u.retryQueue=null,vc(e,s))));break;case 19:ei(i,e),ni(e),u&4&&(u=e.updateQueue,u!==null&&(e.updateQueue=null,vc(e,u)));break;case 30:break;case 21:break;default:ei(i,e),ni(e)}}function ni(e){var i=e.flags;if(i&2){try{for(var s,u=e.return;u!==null;){if(nv(u)){s=u;break}u=u.return}if(s==null)throw Error(a(160));switch(s.tag){case 27:var h=s.stateNode,m=md(e);gc(e,m,h);break;case 5:var E=s.stateNode;s.flags&32&&(En(E,""),s.flags&=-33);var N=md(e);gc(e,N,E);break;case 3:case 4:var G=s.stateNode.containerInfo,nt=md(e);_d(e,nt,G);break;default:throw Error(a(161))}}catch(dt){Be(e,e.return,dt)}e.flags&=-3}i&4096&&(e.flags&=-4097)}function fv(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var i=e;fv(i),i.tag===5&&i.flags&1024&&i.stateNode.reset(),e=e.sibling}}function Pa(e,i){if(i.subtreeFlags&8772)for(i=i.child;i!==null;)rv(e,i.alternate,i),i=i.sibling}function ds(e){for(e=e.child;e!==null;){var i=e;switch(i.tag){case 0:case 11:case 14:case 15:xr(4,i,i.return),ds(i);break;case 1:oa(i,i.return);var s=i.stateNode;typeof s.componentWillUnmount=="function"&&tv(i,i.return,s),ds(i);break;case 27:kl(i.stateNode);case 26:case 5:oa(i,i.return),ds(i);break;case 22:i.memoizedState===null&&ds(i);break;case 30:ds(i);break;default:ds(i)}e=e.sibling}}function Fa(e,i,s){for(s=s&&(i.subtreeFlags&8772)!==0,i=i.child;i!==null;){var u=i.alternate,h=e,m=i,E=m.flags;switch(m.tag){case 0:case 11:case 15:Fa(h,m,s),Nl(4,m);break;case 1:if(Fa(h,m,s),u=m,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(nt){Be(u,u.return,nt)}if(u=m,h=u.updateQueue,h!==null){var N=u.stateNode;try{var G=h.shared.hiddenCallbacks;if(G!==null)for(h.shared.hiddenCallbacks=null,h=0;h<G.length;h++)G0(G[h],N)}catch(nt){Be(u,u.return,nt)}}s&&E&64&&$g(m),Ol(m,m.return);break;case 27:iv(m);case 26:case 5:Fa(h,m,s),s&&u===null&&E&4&&ev(m),Ol(m,m.return);break;case 12:Fa(h,m,s);break;case 31:Fa(h,m,s),s&&E&4&&lv(h,m);break;case 13:Fa(h,m,s),s&&E&4&&uv(h,m);break;case 22:m.memoizedState===null&&Fa(h,m,s),Ol(m,m.return);break;case 30:break;default:Fa(h,m,s)}i=i.sibling}}function vd(e,i){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(e=i.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&Sl(s))}function xd(e,i){e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Sl(e))}function Ki(e,i,s,u){if(i.subtreeFlags&10256)for(i=i.child;i!==null;)hv(e,i,s,u),i=i.sibling}function hv(e,i,s,u){var h=i.flags;switch(i.tag){case 0:case 11:case 15:Ki(e,i,s,u),h&2048&&Nl(9,i);break;case 1:Ki(e,i,s,u);break;case 3:Ki(e,i,s,u),h&2048&&(e=null,i.alternate!==null&&(e=i.alternate.memoizedState.cache),i=i.memoizedState.cache,i!==e&&(i.refCount++,e!=null&&Sl(e)));break;case 12:if(h&2048){Ki(e,i,s,u),e=i.stateNode;try{var m=i.memoizedProps,E=m.id,N=m.onPostCommit;typeof N=="function"&&N(E,i.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(G){Be(i,i.return,G)}}else Ki(e,i,s,u);break;case 31:Ki(e,i,s,u);break;case 13:Ki(e,i,s,u);break;case 23:break;case 22:m=i.stateNode,E=i.alternate,i.memoizedState!==null?m._visibility&2?Ki(e,i,s,u):Pl(e,i):m._visibility&2?Ki(e,i,s,u):(m._visibility|=2,lo(e,i,s,u,(i.subtreeFlags&10256)!==0||!1)),h&2048&&vd(E,i);break;case 24:Ki(e,i,s,u),h&2048&&xd(i.alternate,i);break;default:Ki(e,i,s,u)}}function lo(e,i,s,u,h){for(h=h&&((i.subtreeFlags&10256)!==0||!1),i=i.child;i!==null;){var m=e,E=i,N=s,G=u,nt=E.flags;switch(E.tag){case 0:case 11:case 15:lo(m,E,N,G,h),Nl(8,E);break;case 23:break;case 22:var dt=E.stateNode;E.memoizedState!==null?dt._visibility&2?lo(m,E,N,G,h):Pl(m,E):(dt._visibility|=2,lo(m,E,N,G,h)),h&&nt&2048&&vd(E.alternate,E);break;case 24:lo(m,E,N,G,h),h&&nt&2048&&xd(E.alternate,E);break;default:lo(m,E,N,G,h)}i=i.sibling}}function Pl(e,i){if(i.subtreeFlags&10256)for(i=i.child;i!==null;){var s=e,u=i,h=u.flags;switch(u.tag){case 22:Pl(s,u),h&2048&&vd(u.alternate,u);break;case 24:Pl(s,u),h&2048&&xd(u.alternate,u);break;default:Pl(s,u)}i=i.sibling}}var Fl=8192;function uo(e,i,s){if(e.subtreeFlags&Fl)for(e=e.child;e!==null;)dv(e,i,s),e=e.sibling}function dv(e,i,s){switch(e.tag){case 26:uo(e,i,s),e.flags&Fl&&e.memoizedState!==null&&e1(s,ji,e.memoizedState,e.memoizedProps);break;case 5:uo(e,i,s);break;case 3:case 4:var u=ji;ji=Lc(e.stateNode.containerInfo),uo(e,i,s),ji=u;break;case 22:e.memoizedState===null&&(u=e.alternate,u!==null&&u.memoizedState!==null?(u=Fl,Fl=16777216,uo(e,i,s),Fl=u):uo(e,i,s));break;default:uo(e,i,s)}}function pv(e){var i=e.alternate;if(i!==null&&(e=i.child,e!==null)){i.child=null;do i=e.sibling,e.sibling=null,e=i;while(e!==null)}}function zl(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];Rn=u,_v(u,e)}pv(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)mv(e),e=e.sibling}function mv(e){switch(e.tag){case 0:case 11:case 15:zl(e),e.flags&2048&&xr(9,e,e.return);break;case 3:zl(e);break;case 12:zl(e);break;case 22:var i=e.stateNode;e.memoizedState!==null&&i._visibility&2&&(e.return===null||e.return.tag!==13)?(i._visibility&=-3,xc(e)):zl(e);break;default:zl(e)}}function xc(e){var i=e.deletions;if((e.flags&16)!==0){if(i!==null)for(var s=0;s<i.length;s++){var u=i[s];Rn=u,_v(u,e)}pv(e)}for(e=e.child;e!==null;){switch(i=e,i.tag){case 0:case 11:case 15:xr(8,i,i.return),xc(i);break;case 22:s=i.stateNode,s._visibility&2&&(s._visibility&=-3,xc(i));break;default:xc(i)}e=e.sibling}}function _v(e,i){for(;Rn!==null;){var s=Rn;switch(s.tag){case 0:case 11:case 15:xr(8,s,i);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var u=s.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Sl(s.memoizedState.cache)}if(u=s.child,u!==null)u.return=s,Rn=u;else t:for(s=e;Rn!==null;){u=Rn;var h=u.sibling,m=u.return;if(sv(u),u===s){Rn=null;break t}if(h!==null){h.return=m,Rn=h;break t}Rn=m}}}var _T={getCacheForType:function(e){var i=zn(_n),s=i.data.get(e);return s===void 0&&(s=e(),i.data.set(e,s)),s},cacheSignal:function(){return zn(_n).controller.signal}},gT=typeof WeakMap=="function"?WeakMap:Map,Le=0,We=null,pe=null,ve=0,Ie=0,_i=null,Sr=!1,co=!1,Sd=!1,za=0,ln=0,yr=0,ps=0,yd=0,gi=0,fo=0,Il=null,ii=null,Md=!1,Sc=0,gv=0,yc=1/0,Mc=null,Mr=null,Tn=0,Er=null,ho=null,Ia=0,Ed=0,Td=null,vv=null,Bl=0,bd=null;function vi(){return(Le&2)!==0&&ve!==0?ve&-ve:I.T!==null?Ud():sl()}function xv(){if(gi===0)if((ve&536870912)===0||Se){var e=At;At<<=1,(At&3932160)===0&&(At=262144),gi=e}else gi=536870912;return e=pi.current,e!==null&&(e.flags|=32),gi}function ai(e,i,s){(e===We&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)&&(po(e,0),Tr(e,ve,gi,!1)),Gn(e,s),((Le&2)===0||e!==We)&&(e===We&&((Le&2)===0&&(ps|=s),ln===4&&Tr(e,ve,gi,!1)),la(e))}function Sv(e,i,s){if((Le&6)!==0)throw Error(a(327));var u=!s&&(i&127)===0&&(i&e.expiredLanes)===0||Rt(e,i),h=u?ST(e,i):Rd(e,i,!0),m=u;do{if(h===0){co&&!u&&Tr(e,i,0,!1);break}else{if(s=e.current.alternate,m&&!vT(s)){h=Rd(e,i,!1),m=!1;continue}if(h===2){if(m=i,e.errorRecoveryDisabledLanes&m)var E=0;else E=e.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){i=E;t:{var N=e;h=Il;var G=N.current.memoizedState.isDehydrated;if(G&&(po(N,E).flags|=256),E=Rd(N,E,!1),E!==2){if(Sd&&!G){N.errorRecoveryDisabledLanes|=m,ps|=m,h=4;break t}m=ii,ii=h,m!==null&&(ii===null?ii=m:ii.push.apply(ii,m))}h=E}if(m=!1,h!==2)continue}}if(h===1){po(e,0),Tr(e,i,0,!0);break}t:{switch(u=e,m=h,m){case 0:case 1:throw Error(a(345));case 4:if((i&4194048)!==i)break;case 6:Tr(u,i,gi,!Sr);break t;case 2:ii=null;break;case 3:case 5:break;default:throw Error(a(329))}if((i&62914560)===i&&(h=Sc+300-A(),10<h)){if(Tr(u,i,gi,!Sr),vt(u,0,!0)!==0)break t;Ia=i,u.timeoutHandle=Qv(yv.bind(null,u,s,ii,Mc,Md,i,gi,ps,fo,Sr,m,"Throttled",-0,0),h);break t}yv(u,s,ii,Mc,Md,i,gi,ps,fo,Sr,m,null,-0,0)}}break}while(!0);la(e)}function yv(e,i,s,u,h,m,E,N,G,nt,dt,_t,rt,ct){if(e.timeoutHandle=-1,_t=i.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ea},dv(i,m,_t);var Gt=(m&62914560)===m?Sc-A():(m&4194048)===m?gv-A():0;if(Gt=n1(_t,Gt),Gt!==null){Ia=m,e.cancelPendingCommit=Gt(wv.bind(null,e,i,m,s,u,h,E,N,G,dt,_t,null,rt,ct)),Tr(e,m,E,!nt);return}}wv(e,i,m,s,u,h,E,N,G)}function vT(e){for(var i=e;;){var s=i.tag;if((s===0||s===11||s===15)&&i.flags&16384&&(s=i.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var u=0;u<s.length;u++){var h=s[u],m=h.getSnapshot;h=h.value;try{if(!hi(m(),h))return!1}catch{return!1}}if(s=i.child,i.subtreeFlags&16384&&s!==null)s.return=i,i=s;else{if(i===e)break;for(;i.sibling===null;){if(i.return===null||i.return===e)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Tr(e,i,s,u){i&=~yd,i&=~ps,e.suspendedLanes|=i,e.pingedLanes&=~i,u&&(e.warmLanes|=i),u=e.expirationTimes;for(var h=i;0<h;){var m=31-Pt(h),E=1<<m;u[m]=-1,h&=~E}s!==0&&Ou(e,s,i)}function Ec(){return(Le&6)===0?(Hl(0),!1):!0}function Ad(){if(pe!==null){if(Ie===0)var e=pe.return;else e=pe,Ra=rs=null,Gh(e),io=null,Ml=0,e=pe;for(;e!==null;)Jg(e.alternate,e),e=e.return;pe=null}}function po(e,i){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,IT(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),Ia=0,Ad(),We=e,pe=s=ba(e.current,null),ve=i,Ie=0,_i=null,Sr=!1,co=Rt(e,i),Sd=!1,fo=gi=yd=ps=yr=ln=0,ii=Il=null,Md=!1,(i&8)!==0&&(i|=i&32);var u=e.entangledLanes;if(u!==0)for(e=e.entanglements,u&=i;0<u;){var h=31-Pt(u),m=1<<h;i|=e[h],u&=~m}return za=i,Xu(),s}function Mv(e,i){oe=null,I.H=Dl,i===no||i===Ju?(i=I0(),Ie=3):i===Dh?(i=I0(),Ie=4):Ie=i===ad?8:i!==null&&typeof i=="object"&&typeof i.then=="function"?6:1,_i=i,pe===null&&(ln=1,hc(e,Li(i,e.current)))}function Ev(){var e=pi.current;return e===null?!0:(ve&4194048)===ve?Fi===null:(ve&62914560)===ve||(ve&536870912)!==0?e===Fi:!1}function Tv(){var e=I.H;return I.H=Dl,e===null?Dl:e}function bv(){var e=I.A;return I.A=_T,e}function Tc(){ln=4,Sr||(ve&4194048)!==ve&&pi.current!==null||(co=!0),(yr&134217727)===0&&(ps&134217727)===0||We===null||Tr(We,ve,gi,!1)}function Rd(e,i,s){var u=Le;Le|=2;var h=Tv(),m=bv();(We!==e||ve!==i)&&(Mc=null,po(e,i)),i=!1;var E=ln;t:do try{if(Ie!==0&&pe!==null){var N=pe,G=_i;switch(Ie){case 8:Ad(),E=6;break t;case 3:case 2:case 9:case 6:pi.current===null&&(i=!0);var nt=Ie;if(Ie=0,_i=null,mo(e,N,G,nt),s&&co){E=0;break t}break;default:nt=Ie,Ie=0,_i=null,mo(e,N,G,nt)}}xT(),E=ln;break}catch(dt){Mv(e,dt)}while(!0);return i&&e.shellSuspendCounter++,Ra=rs=null,Le=u,I.H=h,I.A=m,pe===null&&(We=null,ve=0,Xu()),E}function xT(){for(;pe!==null;)Av(pe)}function ST(e,i){var s=Le;Le|=2;var u=Tv(),h=bv();We!==e||ve!==i?(Mc=null,yc=A()+500,po(e,i)):co=Rt(e,i);t:do try{if(Ie!==0&&pe!==null){i=pe;var m=_i;e:switch(Ie){case 1:Ie=0,_i=null,mo(e,i,m,1);break;case 2:case 9:if(F0(m)){Ie=0,_i=null,Rv(i);break}i=function(){Ie!==2&&Ie!==9||We!==e||(Ie=7),la(e)},m.then(i,i);break t;case 3:Ie=7;break t;case 4:Ie=5;break t;case 7:F0(m)?(Ie=0,_i=null,Rv(i)):(Ie=0,_i=null,mo(e,i,m,7));break;case 5:var E=null;switch(pe.tag){case 26:E=pe.memoizedState;case 5:case 27:var N=pe;if(E?hx(E):N.stateNode.complete){Ie=0,_i=null;var G=N.sibling;if(G!==null)pe=G;else{var nt=N.return;nt!==null?(pe=nt,bc(nt)):pe=null}break e}}Ie=0,_i=null,mo(e,i,m,5);break;case 6:Ie=0,_i=null,mo(e,i,m,6);break;case 8:Ad(),ln=6;break t;default:throw Error(a(462))}}yT();break}catch(dt){Mv(e,dt)}while(!0);return Ra=rs=null,I.H=u,I.A=h,Le=s,pe!==null?0:(We=null,ve=0,Xu(),ln)}function yT(){for(;pe!==null&&!qt();)Av(pe)}function Av(e){var i=Kg(e.alternate,e,za);e.memoizedProps=e.pendingProps,i===null?bc(e):pe=i}function Rv(e){var i=e,s=i.alternate;switch(i.tag){case 15:case 0:i=Xg(s,i,i.pendingProps,i.type,void 0,ve);break;case 11:i=Xg(s,i,i.pendingProps,i.type.render,i.ref,ve);break;case 5:Gh(i);default:Jg(s,i),i=pe=b0(i,za),i=Kg(s,i,za)}e.memoizedProps=e.pendingProps,i===null?bc(e):pe=i}function mo(e,i,s,u){Ra=rs=null,Gh(i),io=null,Ml=0;var h=i.return;try{if(uT(e,h,i,s,ve)){ln=1,hc(e,Li(s,e.current)),pe=null;return}}catch(m){if(h!==null)throw pe=h,m;ln=1,hc(e,Li(s,e.current)),pe=null;return}i.flags&32768?(Se||u===1?e=!0:co||(ve&536870912)!==0?e=!1:(Sr=e=!0,(u===2||u===9||u===3||u===6)&&(u=pi.current,u!==null&&u.tag===13&&(u.flags|=16384))),Cv(i,e)):bc(i)}function bc(e){var i=e;do{if((i.flags&32768)!==0){Cv(i,Sr);return}e=i.return;var s=hT(i.alternate,i,za);if(s!==null){pe=s;return}if(i=i.sibling,i!==null){pe=i;return}pe=i=e}while(i!==null);ln===0&&(ln=5)}function Cv(e,i){do{var s=dT(e.alternate,e);if(s!==null){s.flags&=32767,pe=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!i&&(e=e.sibling,e!==null)){pe=e;return}pe=e=s}while(e!==null);ln=6,pe=null}function wv(e,i,s,u,h,m,E,N,G){e.cancelPendingCommit=null;do Ac();while(Tn!==0);if((Le&6)!==0)throw Error(a(327));if(i!==null){if(i===e.current)throw Error(a(177));if(m=i.lanes|i.childLanes,m|=mh,Wi(e,s,m,E,N,G),e===We&&(pe=We=null,ve=0),ho=i,Er=e,Ia=s,Ed=m,Td=h,vv=u,(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,bT(ft,function(){return Ov(),null})):(e.callbackNode=null,e.callbackPriority=0),u=(i.flags&13878)!==0,(i.subtreeFlags&13878)!==0||u){u=I.T,I.T=null,h=H.p,H.p=2,E=Le,Le|=4;try{pT(e,i,s)}finally{Le=E,H.p=h,I.T=u}}Tn=1,Dv(),Uv(),Lv()}}function Dv(){if(Tn===1){Tn=0;var e=Er,i=ho,s=(i.flags&13878)!==0;if((i.subtreeFlags&13878)!==0||s){s=I.T,I.T=null;var u=H.p;H.p=2;var h=Le;Le|=4;try{cv(i,e);var m=Bd,E=_0(e.containerInfo),N=m.focusedElem,G=m.selectionRange;if(E!==N&&N&&N.ownerDocument&&m0(N.ownerDocument.documentElement,N)){if(G!==null&&ch(N)){var nt=G.start,dt=G.end;if(dt===void 0&&(dt=nt),"selectionStart"in N)N.selectionStart=nt,N.selectionEnd=Math.min(dt,N.value.length);else{var _t=N.ownerDocument||document,rt=_t&&_t.defaultView||window;if(rt.getSelection){var ct=rt.getSelection(),Gt=N.textContent.length,te=Math.min(G.start,Gt),Xe=G.end===void 0?te:Math.min(G.end,Gt);!ct.extend&&te>Xe&&(E=Xe,Xe=te,te=E);var K=p0(N,te),X=p0(N,Xe);if(K&&X&&(ct.rangeCount!==1||ct.anchorNode!==K.node||ct.anchorOffset!==K.offset||ct.focusNode!==X.node||ct.focusOffset!==X.offset)){var et=_t.createRange();et.setStart(K.node,K.offset),ct.removeAllRanges(),te>Xe?(ct.addRange(et),ct.extend(X.node,X.offset)):(et.setEnd(X.node,X.offset),ct.addRange(et))}}}}for(_t=[],ct=N;ct=ct.parentNode;)ct.nodeType===1&&_t.push({element:ct,left:ct.scrollLeft,top:ct.scrollTop});for(typeof N.focus=="function"&&N.focus(),N=0;N<_t.length;N++){var mt=_t[N];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Ic=!!Id,Bd=Id=null}finally{Le=h,H.p=u,I.T=s}}e.current=i,Tn=2}}function Uv(){if(Tn===2){Tn=0;var e=Er,i=ho,s=(i.flags&8772)!==0;if((i.subtreeFlags&8772)!==0||s){s=I.T,I.T=null;var u=H.p;H.p=2;var h=Le;Le|=4;try{rv(e,i.alternate,i)}finally{Le=h,H.p=u,I.T=s}}Tn=3}}function Lv(){if(Tn===4||Tn===3){Tn=0,B();var e=Er,i=ho,s=Ia,u=vv;(i.subtreeFlags&10256)!==0||(i.flags&10256)!==0?Tn=5:(Tn=0,ho=Er=null,Nv(e,e.pendingLanes));var h=e.pendingLanes;if(h===0&&(Mr=null),Bs(s),i=i.stateNode,bt&&typeof bt.onCommitFiberRoot=="function")try{bt.onCommitFiberRoot(Et,i,void 0,(i.current.flags&128)===128)}catch{}if(u!==null){i=I.T,h=H.p,H.p=2,I.T=null;try{for(var m=e.onRecoverableError,E=0;E<u.length;E++){var N=u[E];m(N.value,{componentStack:N.stack})}}finally{I.T=i,H.p=h}}(Ia&3)!==0&&Ac(),la(e),h=e.pendingLanes,(s&261930)!==0&&(h&42)!==0?e===bd?Bl++:(Bl=0,bd=e):Bl=0,Hl(0)}}function Nv(e,i){(e.pooledCacheLanes&=i)===0&&(i=e.pooledCache,i!=null&&(e.pooledCache=null,Sl(i)))}function Ac(){return Dv(),Uv(),Lv(),Ov()}function Ov(){if(Tn!==5)return!1;var e=Er,i=Ed;Ed=0;var s=Bs(Ia),u=I.T,h=H.p;try{H.p=32>s?32:s,I.T=null,s=Td,Td=null;var m=Er,E=Ia;if(Tn=0,ho=Er=null,Ia=0,(Le&6)!==0)throw Error(a(331));var N=Le;if(Le|=4,mv(m.current),hv(m,m.current,E,s),Le=N,Hl(0,!1),bt&&typeof bt.onPostCommitFiberRoot=="function")try{bt.onPostCommitFiberRoot(Et,m)}catch{}return!0}finally{H.p=h,I.T=u,Nv(e,i)}}function Pv(e,i,s){i=Li(s,i),i=id(e.stateNode,i,2),e=_r(e,i,2),e!==null&&(Gn(e,2),la(e))}function Be(e,i,s){if(e.tag===3)Pv(e,e,s);else for(;i!==null;){if(i.tag===3){Pv(i,e,s);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Mr===null||!Mr.has(u))){e=Li(s,e),s=Fg(2),u=_r(i,s,2),u!==null&&(zg(s,u,i,e),Gn(u,2),la(u));break}}i=i.return}}function Cd(e,i,s){var u=e.pingCache;if(u===null){u=e.pingCache=new gT;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(s)||(Sd=!0,h.add(s),e=MT.bind(null,e,i,s),i.then(e,e))}function MT(e,i,s){var u=e.pingCache;u!==null&&u.delete(i),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,We===e&&(ve&s)===s&&(ln===4||ln===3&&(ve&62914560)===ve&&300>A()-Sc?(Le&2)===0&&po(e,0):yd|=s,fo===ve&&(fo=0)),la(e)}function Fv(e,i){i===0&&(i=Fe()),e=ns(e,i),e!==null&&(Gn(e,i),la(e))}function ET(e){var i=e.memoizedState,s=0;i!==null&&(s=i.retryLane),Fv(e,s)}function TT(e,i){var s=0;switch(e.tag){case 31:case 13:var u=e.stateNode,h=e.memoizedState;h!==null&&(s=h.retryLane);break;case 19:u=e.stateNode;break;case 22:u=e.stateNode._retryCache;break;default:throw Error(a(314))}u!==null&&u.delete(i),Fv(e,s)}function bT(e,i){return Ee(e,i)}var Rc=null,_o=null,wd=!1,Cc=!1,Dd=!1,br=0;function la(e){e!==_o&&e.next===null&&(_o===null?Rc=_o=e:_o=_o.next=e),Cc=!0,wd||(wd=!0,RT())}function Hl(e,i){if(!Dd&&Cc){Dd=!0;do for(var s=!1,u=Rc;u!==null;){if(e!==0){var h=u.pendingLanes;if(h===0)var m=0;else{var E=u.suspendedLanes,N=u.pingedLanes;m=(1<<31-Pt(42|e)+1)-1,m&=h&~(E&~N),m=m&201326741?m&201326741|1:m?m|2:0}m!==0&&(s=!0,Hv(u,m))}else m=ve,m=vt(u,u===We?m:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(m&3)===0||Rt(u,m)||(s=!0,Hv(u,m));u=u.next}while(s);Dd=!1}}function AT(){zv()}function zv(){Cc=wd=!1;var e=0;br!==0&&zT()&&(e=br);for(var i=A(),s=null,u=Rc;u!==null;){var h=u.next,m=Iv(u,i);m===0?(u.next=null,s===null?Rc=h:s.next=h,h===null&&(_o=s)):(s=u,(e!==0||(m&3)!==0)&&(Cc=!0)),u=h}Tn!==0&&Tn!==5||Hl(e),br!==0&&(br=0)}function Iv(e,i){for(var s=e.suspendedLanes,u=e.pingedLanes,h=e.expirationTimes,m=e.pendingLanes&-62914561;0<m;){var E=31-Pt(m),N=1<<E,G=h[E];G===-1?((N&s)===0||(N&u)!==0)&&(h[E]=ne(N,i)):G<=i&&(e.expiredLanes|=N),m&=~N}if(i=We,s=ve,s=vt(e,e===i?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u=e.callbackNode,s===0||e===i&&(Ie===2||Ie===9)||e.cancelPendingCommit!==null)return u!==null&&u!==null&&Ne(u),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Rt(e,s)){if(i=s&-s,i===e.callbackPriority)return i;switch(u!==null&&Ne(u),Bs(s)){case 2:case 8:s=St;break;case 32:s=ft;break;case 268435456:s=wt;break;default:s=ft}return u=Bv.bind(null,e),s=Ee(s,u),e.callbackPriority=i,e.callbackNode=s,i}return u!==null&&u!==null&&Ne(u),e.callbackPriority=2,e.callbackNode=null,2}function Bv(e,i){if(Tn!==0&&Tn!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(Ac()&&e.callbackNode!==s)return null;var u=ve;return u=vt(e,e===We?u:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),u===0?null:(Sv(e,u,i),Iv(e,A()),e.callbackNode!=null&&e.callbackNode===s?Bv.bind(null,e):null)}function Hv(e,i){if(Ac())return null;Sv(e,i,!0)}function RT(){BT(function(){(Le&6)!==0?Ee(pt,AT):zv()})}function Ud(){if(br===0){var e=to;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),br=e}return br}function Vv(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Fu(""+e)}function Gv(e,i){var s=i.ownerDocument.createElement("input");return s.name=i.name,s.value=i.value,e.id&&s.setAttribute("form",e.id),i.parentNode.insertBefore(s,i),e=new FormData(e),s.parentNode.removeChild(s),e}function CT(e,i,s,u,h){if(i==="submit"&&s&&s.stateNode===h){var m=Vv((h[Dn]||null).action),E=u.submitter;E&&(i=(i=E[Dn]||null)?Vv(i.formAction):E.getAttribute("formAction"),i!==null&&(m=i,E=null));var N=new Hu("action","action",null,u,h);e.push({event:N,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(br!==0){var G=E?Gv(h,E):new FormData(h);Qh(s,{pending:!0,data:G,method:h.method,action:m},null,G)}}else typeof m=="function"&&(N.preventDefault(),G=E?Gv(h,E):new FormData(h),Qh(s,{pending:!0,data:G,method:h.method,action:m},m,G))},currentTarget:h}]})}}for(var Ld=0;Ld<ph.length;Ld++){var Nd=ph[Ld],wT=Nd.toLowerCase(),DT=Nd[0].toUpperCase()+Nd.slice(1);Zi(wT,"on"+DT)}Zi(x0,"onAnimationEnd"),Zi(S0,"onAnimationIteration"),Zi(y0,"onAnimationStart"),Zi("dblclick","onDoubleClick"),Zi("focusin","onFocus"),Zi("focusout","onBlur"),Zi(qE,"onTransitionRun"),Zi(YE,"onTransitionStart"),Zi(ZE,"onTransitionCancel"),Zi(M0,"onTransitionEnd"),$("onMouseEnter",["mouseout","mouseover"]),$("onMouseLeave",["mouseout","mouseover"]),$("onPointerEnter",["pointerout","pointerover"]),$("onPointerLeave",["pointerout","pointerover"]),at("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),at("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),at("onBeforeInput",["compositionend","keypress","textInput","paste"]),at("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),at("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vl="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),UT=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vl));function kv(e,i){i=(i&4)!==0;for(var s=0;s<e.length;s++){var u=e[s],h=u.event;u=u.listeners;t:{var m=void 0;if(i)for(var E=u.length-1;0<=E;E--){var N=u[E],G=N.instance,nt=N.currentTarget;if(N=N.listener,G!==m&&h.isPropagationStopped())break t;m=N,h.currentTarget=nt;try{m(h)}catch(dt){ku(dt)}h.currentTarget=null,m=G}else for(E=0;E<u.length;E++){if(N=u[E],G=N.instance,nt=N.currentTarget,N=N.listener,G!==m&&h.isPropagationStopped())break t;m=N,h.currentTarget=nt;try{m(h)}catch(dt){ku(dt)}h.currentTarget=null,m=G}}}}function me(e,i){var s=i[Hs];s===void 0&&(s=i[Hs]=new Set);var u=e+"__bubble";s.has(u)||(Xv(i,e,2,!1),s.add(u))}function Od(e,i,s){var u=0;i&&(u|=4),Xv(s,e,u,i)}var wc="_reactListening"+Math.random().toString(36).slice(2);function Pd(e){if(!e[wc]){e[wc]=!0,j.forEach(function(s){s!=="selectionchange"&&(UT.has(s)||Od(s,!1,e),Od(s,!0,e))});var i=e.nodeType===9?e:e.ownerDocument;i===null||i[wc]||(i[wc]=!0,Od("selectionchange",!1,i))}}function Xv(e,i,s,u){switch(xx(i)){case 2:var h=r1;break;case 8:h=s1;break;default:h=Kd}s=h.bind(null,i,s,e),h=void 0,!eh||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?e.addEventListener(i,s,{capture:!0,passive:h}):e.addEventListener(i,s,!0):h!==void 0?e.addEventListener(i,s,{passive:h}):e.addEventListener(i,s,!1)}function Fd(e,i,s,u,h){var m=u;if((i&1)===0&&(i&2)===0&&u!==null)t:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var N=u.stateNode.containerInfo;if(N===h)break;if(E===4)for(E=u.return;E!==null;){var G=E.tag;if((G===3||G===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;N!==null;){if(E=sr(N),E===null)return;if(G=E.tag,G===5||G===6||G===26||G===27){u=m=E;continue t}N=N.parentNode}}u=u.return}j_(function(){var nt=m,dt=$f(s),_t=[];t:{var rt=E0.get(e);if(rt!==void 0){var ct=Hu,Gt=e;switch(e){case"keypress":if(Iu(s)===0)break t;case"keydown":case"keyup":ct=TE;break;case"focusin":Gt="focus",ct=rh;break;case"focusout":Gt="blur",ct=rh;break;case"beforeblur":case"afterblur":ct=rh;break;case"click":if(s.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":ct=J_;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":ct=hE;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":ct=RE;break;case x0:case S0:case y0:ct=mE;break;case M0:ct=wE;break;case"scroll":case"scrollend":ct=cE;break;case"wheel":ct=UE;break;case"copy":case"cut":case"paste":ct=gE;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":ct=t0;break;case"toggle":case"beforetoggle":ct=NE}var te=(i&4)!==0,Xe=!te&&(e==="scroll"||e==="scrollend"),K=te?rt!==null?rt+"Capture":null:rt;te=[];for(var X=nt,et;X!==null;){var mt=X;if(et=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||et===null||K===null||(mt=ul(X,K),mt!=null&&te.push(Gl(X,mt,et))),Xe)break;X=X.return}0<te.length&&(rt=new ct(rt,Gt,null,s,dt),_t.push({event:rt,listeners:te}))}}if((i&7)===0){t:{if(rt=e==="mouseover"||e==="pointerover",ct=e==="mouseout"||e==="pointerout",rt&&s!==Jf&&(Gt=s.relatedTarget||s.fromElement)&&(sr(Gt)||Gt[qi]))break t;if((ct||rt)&&(rt=dt.window===dt?dt:(rt=dt.ownerDocument)?rt.defaultView||rt.parentWindow:window,ct?(Gt=s.relatedTarget||s.toElement,ct=nt,Gt=Gt?sr(Gt):null,Gt!==null&&(Xe=l(Gt),te=Gt.tag,Gt!==Xe||te!==5&&te!==27&&te!==6)&&(Gt=null)):(ct=null,Gt=nt),ct!==Gt)){if(te=J_,mt="onMouseLeave",K="onMouseEnter",X="mouse",(e==="pointerout"||e==="pointerover")&&(te=t0,mt="onPointerLeave",K="onPointerEnter",X="pointer"),Xe=ct==null?rt:Jr(ct),et=Gt==null?rt:Jr(Gt),rt=new te(mt,X+"leave",ct,s,dt),rt.target=Xe,rt.relatedTarget=et,mt=null,sr(dt)===nt&&(te=new te(K,X+"enter",Gt,s,dt),te.target=et,te.relatedTarget=Xe,mt=te),Xe=mt,ct&&Gt)e:{for(te=LT,K=ct,X=Gt,et=0,mt=K;mt;mt=te(mt))et++;mt=0;for(var Qt=X;Qt;Qt=te(Qt))mt++;for(;0<et-mt;)K=te(K),et--;for(;0<mt-et;)X=te(X),mt--;for(;et--;){if(K===X||X!==null&&K===X.alternate){te=K;break e}K=te(K),X=te(X)}te=null}else te=null;ct!==null&&Wv(_t,rt,ct,te,!1),Gt!==null&&Xe!==null&&Wv(_t,Xe,Gt,te,!0)}}t:{if(rt=nt?Jr(nt):window,ct=rt.nodeName&&rt.nodeName.toLowerCase(),ct==="select"||ct==="input"&&rt.type==="file")var Ae=l0;else if(s0(rt))if(u0)Ae=kE;else{Ae=VE;var Yt=HE}else ct=rt.nodeName,!ct||ct.toLowerCase()!=="input"||rt.type!=="checkbox"&&rt.type!=="radio"?nt&&Yi(nt.elementType)&&(Ae=l0):Ae=GE;if(Ae&&(Ae=Ae(e,nt))){o0(_t,Ae,s,dt);break t}Yt&&Yt(e,rt,nt),e==="focusout"&&nt&&rt.type==="number"&&nt.memoizedProps.value!=null&&Ln(rt,"number",rt.value)}switch(Yt=nt?Jr(nt):window,e){case"focusin":(s0(Yt)||Yt.contentEditable==="true")&&(qs=Yt,fh=nt,gl=null);break;case"focusout":gl=fh=qs=null;break;case"mousedown":hh=!0;break;case"contextmenu":case"mouseup":case"dragend":hh=!1,g0(_t,s,dt);break;case"selectionchange":if(WE)break;case"keydown":case"keyup":g0(_t,s,dt)}var ue;if(oh)t:{switch(e){case"compositionstart":var xe="onCompositionStart";break t;case"compositionend":xe="onCompositionEnd";break t;case"compositionupdate":xe="onCompositionUpdate";break t}xe=void 0}else Ws?a0(e,s)&&(xe="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(xe="onCompositionStart");xe&&(e0&&s.locale!=="ko"&&(Ws||xe!=="onCompositionStart"?xe==="onCompositionEnd"&&Ws&&(ue=K_()):(ur=dt,nh="value"in ur?ur.value:ur.textContent,Ws=!0)),Yt=Dc(nt,xe),0<Yt.length&&(xe=new $_(xe,e,null,s,dt),_t.push({event:xe,listeners:Yt}),ue?xe.data=ue:(ue=r0(s),ue!==null&&(xe.data=ue)))),(ue=PE?FE(e,s):zE(e,s))&&(xe=Dc(nt,"onBeforeInput"),0<xe.length&&(Yt=new $_("onBeforeInput","beforeinput",null,s,dt),_t.push({event:Yt,listeners:xe}),Yt.data=ue)),CT(_t,e,nt,s,dt)}kv(_t,i)})}function Gl(e,i,s){return{instance:e,listener:i,currentTarget:s}}function Dc(e,i){for(var s=i+"Capture",u=[];e!==null;){var h=e,m=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||m===null||(h=ul(e,s),h!=null&&u.unshift(Gl(e,h,m)),h=ul(e,i),h!=null&&u.push(Gl(e,h,m))),e.tag===3)return u;e=e.return}return[]}function LT(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wv(e,i,s,u,h){for(var m=i._reactName,E=[];s!==null&&s!==u;){var N=s,G=N.alternate,nt=N.stateNode;if(N=N.tag,G!==null&&G===u)break;N!==5&&N!==26&&N!==27||nt===null||(G=nt,h?(nt=ul(s,m),nt!=null&&E.unshift(Gl(s,nt,G))):h||(nt=ul(s,m),nt!=null&&E.push(Gl(s,nt,G)))),s=s.return}E.length!==0&&e.push({event:i,listeners:E})}var NT=/\r\n?/g,OT=/\u0000|\uFFFD/g;function qv(e){return(typeof e=="string"?e:""+e).replace(NT,`
`).replace(OT,"")}function Yv(e,i){return i=qv(i),qv(e)===i}function ke(e,i,s,u,h,m){switch(s){case"children":typeof u=="string"?i==="body"||i==="textarea"&&u===""||En(e,u):(typeof u=="number"||typeof u=="bigint")&&i!=="body"&&En(e,""+u);break;case"className":Jt(e,"class",u);break;case"tabIndex":Jt(e,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":Jt(e,s,u);break;case"style":Gs(e,u,m);break;case"data":if(i!=="object"){Jt(e,"data",u);break}case"src":case"href":if(u===""&&(i!=="a"||s!=="href")){e.removeAttribute(s);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Fu(""+u),e.setAttribute(s,u);break;case"action":case"formAction":if(typeof u=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof m=="function"&&(s==="formAction"?(i!=="input"&&ke(e,i,"name",h.name,h,null),ke(e,i,"formEncType",h.formEncType,h,null),ke(e,i,"formMethod",h.formMethod,h,null),ke(e,i,"formTarget",h.formTarget,h,null)):(ke(e,i,"encType",h.encType,h,null),ke(e,i,"method",h.method,h,null),ke(e,i,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){e.removeAttribute(s);break}u=Fu(""+u),e.setAttribute(s,u);break;case"onClick":u!=null&&(e.onclick=Ea);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"multiple":e.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":e.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){e.removeAttribute("xlink:href");break}s=Fu(""+u),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""+u):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":u===!0?e.setAttribute(s,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?e.setAttribute(s,u):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?e.setAttribute(s,u):e.removeAttribute(s);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?e.removeAttribute(s):e.setAttribute(s,u);break;case"popover":me("beforetoggle",e),me("toggle",e),Xt(e,"popover",u);break;case"xlinkActuate":Wt(e,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Wt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Wt(e,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Wt(e,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Wt(e,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Wt(e,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Wt(e,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Xt(e,"is",u);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=lE.get(s)||s,Xt(e,s,u))}}function zd(e,i,s,u,h,m){switch(s){case"style":Gs(e,u,m);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(a(61));if(s=u.__html,s!=null){if(h.children!=null)throw Error(a(60));e.innerHTML=s}}break;case"children":typeof u=="string"?En(e,u):(typeof u=="number"||typeof u=="bigint")&&En(e,""+u);break;case"onScroll":u!=null&&me("scroll",e);break;case"onScrollEnd":u!=null&&me("scrollend",e);break;case"onClick":u!=null&&(e.onclick=Ea);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!lt.hasOwnProperty(s))t:{if(s[0]==="o"&&s[1]==="n"&&(h=s.endsWith("Capture"),i=s.slice(2,h?s.length-7:void 0),m=e[Dn]||null,m=m!=null?m[s]:null,typeof m=="function"&&e.removeEventListener(i,m,h),typeof u=="function")){typeof m!="function"&&m!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(i,u,h);break t}s in e?e[s]=u:u===!0?e.setAttribute(s,""):Xt(e,s,u)}}}function Bn(e,i,s){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":me("error",e),me("load",e);var u=!1,h=!1,m;for(m in s)if(s.hasOwnProperty(m)){var E=s[m];if(E!=null)switch(m){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,m,E,s,null)}}h&&ke(e,i,"srcSet",s.srcSet,s,null),u&&ke(e,i,"src",s.src,s,null);return;case"input":me("invalid",e);var N=m=E=h=null,G=null,nt=null;for(u in s)if(s.hasOwnProperty(u)){var dt=s[u];if(dt!=null)switch(u){case"name":h=dt;break;case"type":E=dt;break;case"checked":G=dt;break;case"defaultChecked":nt=dt;break;case"value":m=dt;break;case"defaultValue":N=dt;break;case"children":case"dangerouslySetInnerHTML":if(dt!=null)throw Error(a(137,i));break;default:ke(e,i,u,dt,s,null)}}Ma(e,m,N,G,nt,E,h,!1);return;case"select":me("invalid",e),u=E=m=null;for(h in s)if(s.hasOwnProperty(h)&&(N=s[h],N!=null))switch(h){case"value":m=N;break;case"defaultValue":E=N;break;case"multiple":u=N;default:ke(e,i,h,N,s,null)}i=m,s=E,e.multiple=!!u,i!=null?Di(e,!!u,i,!1):s!=null&&Di(e,!!u,s,!0);return;case"textarea":me("invalid",e),m=h=u=null;for(E in s)if(s.hasOwnProperty(E)&&(N=s[E],N!=null))switch(E){case"value":u=N;break;case"defaultValue":h=N;break;case"children":m=N;break;case"dangerouslySetInnerHTML":if(N!=null)throw Error(a(91));break;default:ke(e,i,E,N,s,null)}Nn(e,u,h,m);return;case"option":for(G in s)s.hasOwnProperty(G)&&(u=s[G],u!=null)&&(G==="selected"?e.selected=u&&typeof u!="function"&&typeof u!="symbol":ke(e,i,G,u,s,null));return;case"dialog":me("beforetoggle",e),me("toggle",e),me("cancel",e),me("close",e);break;case"iframe":case"object":me("load",e);break;case"video":case"audio":for(u=0;u<Vl.length;u++)me(Vl[u],e);break;case"image":me("error",e),me("load",e);break;case"details":me("toggle",e);break;case"embed":case"source":case"link":me("error",e),me("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(nt in s)if(s.hasOwnProperty(nt)&&(u=s[nt],u!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,i));default:ke(e,i,nt,u,s,null)}return;default:if(Yi(i)){for(dt in s)s.hasOwnProperty(dt)&&(u=s[dt],u!==void 0&&zd(e,i,dt,u,s,void 0));return}}for(N in s)s.hasOwnProperty(N)&&(u=s[N],u!=null&&ke(e,i,N,u,s,null))}function PT(e,i,s,u){switch(i){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,m=null,E=null,N=null,G=null,nt=null,dt=null;for(ct in s){var _t=s[ct];if(s.hasOwnProperty(ct)&&_t!=null)switch(ct){case"checked":break;case"value":break;case"defaultValue":G=_t;default:u.hasOwnProperty(ct)||ke(e,i,ct,null,u,_t)}}for(var rt in u){var ct=u[rt];if(_t=s[rt],u.hasOwnProperty(rt)&&(ct!=null||_t!=null))switch(rt){case"type":m=ct;break;case"name":h=ct;break;case"checked":nt=ct;break;case"defaultChecked":dt=ct;break;case"value":E=ct;break;case"defaultValue":N=ct;break;case"children":case"dangerouslySetInnerHTML":if(ct!=null)throw Error(a(137,i));break;default:ct!==_t&&ke(e,i,rt,ct,u,_t)}}Un(e,E,N,G,nt,dt,m,h);return;case"select":ct=E=N=rt=null;for(m in s)if(G=s[m],s.hasOwnProperty(m)&&G!=null)switch(m){case"value":break;case"multiple":ct=G;default:u.hasOwnProperty(m)||ke(e,i,m,null,u,G)}for(h in u)if(m=u[h],G=s[h],u.hasOwnProperty(h)&&(m!=null||G!=null))switch(h){case"value":rt=m;break;case"defaultValue":N=m;break;case"multiple":E=m;default:m!==G&&ke(e,i,h,m,u,G)}i=N,s=E,u=ct,rt!=null?Di(e,!!s,rt,!1):!!u!=!!s&&(i!=null?Di(e,!!s,i,!0):Di(e,!!s,s?[]:"",!1));return;case"textarea":ct=rt=null;for(N in s)if(h=s[N],s.hasOwnProperty(N)&&h!=null&&!u.hasOwnProperty(N))switch(N){case"value":break;case"children":break;default:ke(e,i,N,null,u,h)}for(E in u)if(h=u[E],m=s[E],u.hasOwnProperty(E)&&(h!=null||m!=null))switch(E){case"value":rt=h;break;case"defaultValue":ct=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(a(91));break;default:h!==m&&ke(e,i,E,h,u,m)}ze(e,rt,ct);return;case"option":for(var Gt in s)rt=s[Gt],s.hasOwnProperty(Gt)&&rt!=null&&!u.hasOwnProperty(Gt)&&(Gt==="selected"?e.selected=!1:ke(e,i,Gt,null,u,rt));for(G in u)rt=u[G],ct=s[G],u.hasOwnProperty(G)&&rt!==ct&&(rt!=null||ct!=null)&&(G==="selected"?e.selected=rt&&typeof rt!="function"&&typeof rt!="symbol":ke(e,i,G,rt,u,ct));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var te in s)rt=s[te],s.hasOwnProperty(te)&&rt!=null&&!u.hasOwnProperty(te)&&ke(e,i,te,null,u,rt);for(nt in u)if(rt=u[nt],ct=s[nt],u.hasOwnProperty(nt)&&rt!==ct&&(rt!=null||ct!=null))switch(nt){case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(a(137,i));break;default:ke(e,i,nt,rt,u,ct)}return;default:if(Yi(i)){for(var Xe in s)rt=s[Xe],s.hasOwnProperty(Xe)&&rt!==void 0&&!u.hasOwnProperty(Xe)&&zd(e,i,Xe,void 0,u,rt);for(dt in u)rt=u[dt],ct=s[dt],!u.hasOwnProperty(dt)||rt===ct||rt===void 0&&ct===void 0||zd(e,i,dt,rt,u,ct);return}}for(var K in s)rt=s[K],s.hasOwnProperty(K)&&rt!=null&&!u.hasOwnProperty(K)&&ke(e,i,K,null,u,rt);for(_t in u)rt=u[_t],ct=s[_t],!u.hasOwnProperty(_t)||rt===ct||rt==null&&ct==null||ke(e,i,_t,rt,u,ct)}function Zv(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function FT(){if(typeof performance.getEntriesByType=="function"){for(var e=0,i=0,s=performance.getEntriesByType("resource"),u=0;u<s.length;u++){var h=s[u],m=h.transferSize,E=h.initiatorType,N=h.duration;if(m&&N&&Zv(E)){for(E=0,N=h.responseEnd,u+=1;u<s.length;u++){var G=s[u],nt=G.startTime;if(nt>N)break;var dt=G.transferSize,_t=G.initiatorType;dt&&Zv(_t)&&(G=G.responseEnd,E+=dt*(G<N?1:(N-nt)/(G-nt)))}if(--u,i+=8*(m+E)/(h.duration/1e3),e++,10<e)break}}if(0<e)return i/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Id=null,Bd=null;function Uc(e){return e.nodeType===9?e:e.ownerDocument}function jv(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Kv(e,i){if(e===0)switch(i){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&i==="foreignObject"?0:e}function Hd(e,i){return e==="textarea"||e==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.children=="bigint"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Vd=null;function zT(){var e=window.event;return e&&e.type==="popstate"?e===Vd?!1:(Vd=e,!0):(Vd=null,!1)}var Qv=typeof setTimeout=="function"?setTimeout:void 0,IT=typeof clearTimeout=="function"?clearTimeout:void 0,Jv=typeof Promise=="function"?Promise:void 0,BT=typeof queueMicrotask=="function"?queueMicrotask:typeof Jv<"u"?function(e){return Jv.resolve(null).then(e).catch(HT)}:Qv;function HT(e){setTimeout(function(){throw e})}function Ar(e){return e==="head"}function $v(e,i){var s=i,u=0;do{var h=s.nextSibling;if(e.removeChild(s),h&&h.nodeType===8)if(s=h.data,s==="/$"||s==="/&"){if(u===0){e.removeChild(h),So(i);return}u--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")u++;else if(s==="html")kl(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,kl(s);for(var m=s.firstChild;m;){var E=m.nextSibling,N=m.nodeName;m[Qr]||N==="SCRIPT"||N==="STYLE"||N==="LINK"&&m.rel.toLowerCase()==="stylesheet"||s.removeChild(m),m=E}}else s==="body"&&kl(e.ownerDocument.body);s=h}while(s);So(i)}function tx(e,i){var s=e;e=0;do{var u=s.nextSibling;if(s.nodeType===1?i?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(i?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),u&&u.nodeType===8)if(s=u.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=u}while(s)}function Gd(e){var i=e.firstChild;for(i&&i.nodeType===10&&(i=i.nextSibling);i;){var s=i;switch(i=i.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":Gd(s),ll(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function VT(e,i,s,u){for(;e.nodeType===1;){var h=s;if(e.nodeName.toLowerCase()!==i.toLowerCase()){if(!u&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(u){if(!e[Qr])switch(i){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(m=e.getAttribute("rel"),m==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(m!==h.rel||e.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||e.getAttribute("title")!==(h.title==null?null:h.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(m=e.getAttribute("src"),(m!==(h.src==null?null:h.src)||e.getAttribute("type")!==(h.type==null?null:h.type)||e.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&m&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(i==="input"&&e.type==="hidden"){var m=h.name==null?null:""+h.name;if(h.type==="hidden"&&e.getAttribute("name")===m)return e}else return e;if(e=zi(e.nextSibling),e===null)break}return null}function GT(e,i,s){if(i==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=zi(e.nextSibling),e===null))return null;return e}function ex(e,i){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!i||(e=zi(e.nextSibling),e===null))return null;return e}function kd(e){return e.data==="$?"||e.data==="$~"}function Xd(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function kT(e,i){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=i;else if(e.data!=="$?"||s.readyState!=="loading")i();else{var u=function(){i(),s.removeEventListener("DOMContentLoaded",u)};s.addEventListener("DOMContentLoaded",u),e._reactRetry=u}}function zi(e){for(;e!=null;e=e.nextSibling){var i=e.nodeType;if(i===1||i===3)break;if(i===8){if(i=e.data,i==="$"||i==="$!"||i==="$?"||i==="$~"||i==="&"||i==="F!"||i==="F")break;if(i==="/$"||i==="/&")return null}}return e}var Wd=null;function nx(e){e=e.nextSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(i===0)return zi(e.nextSibling);i--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||i++}e=e.nextSibling}return null}function ix(e){e=e.previousSibling;for(var i=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(i===0)return e;i--}else s!=="/$"&&s!=="/&"||i++}e=e.previousSibling}return null}function ax(e,i,s){switch(i=Uc(s),e){case"html":if(e=i.documentElement,!e)throw Error(a(452));return e;case"head":if(e=i.head,!e)throw Error(a(453));return e;case"body":if(e=i.body,!e)throw Error(a(454));return e;default:throw Error(a(451))}}function kl(e){for(var i=e.attributes;i.length;)e.removeAttributeNode(i[0]);ll(e)}var Ii=new Map,rx=new Set;function Lc(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Ba=H.d;H.d={f:XT,r:WT,D:qT,C:YT,L:ZT,m:jT,X:QT,S:KT,M:JT};function XT(){var e=Ba.f(),i=Ec();return e||i}function WT(e){var i=or(e);i!==null&&i.tag===5&&i.type==="form"?Mg(i):Ba.r(e)}var go=typeof document>"u"?null:document;function sx(e,i,s){var u=go;if(u&&typeof i=="string"&&i){var h=ie(i);h='link[rel="'+e+'"][href="'+h+'"]',typeof s=="string"&&(h+='[crossorigin="'+s+'"]'),rx.has(h)||(rx.add(h),e={rel:e,crossOrigin:s,href:i},u.querySelector(h)===null&&(i=u.createElement("link"),Bn(i,"link",e),O(i),u.head.appendChild(i)))}}function qT(e){Ba.D(e),sx("dns-prefetch",e,null)}function YT(e,i){Ba.C(e,i),sx("preconnect",e,i)}function ZT(e,i,s){Ba.L(e,i,s);var u=go;if(u&&e&&i){var h='link[rel="preload"][as="'+ie(i)+'"]';i==="image"&&s&&s.imageSrcSet?(h+='[imagesrcset="'+ie(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(h+='[imagesizes="'+ie(s.imageSizes)+'"]')):h+='[href="'+ie(e)+'"]';var m=h;switch(i){case"style":m=vo(e);break;case"script":m=xo(e)}Ii.has(m)||(e=g({rel:"preload",href:i==="image"&&s&&s.imageSrcSet?void 0:e,as:i},s),Ii.set(m,e),u.querySelector(h)!==null||i==="style"&&u.querySelector(Xl(m))||i==="script"&&u.querySelector(Wl(m))||(i=u.createElement("link"),Bn(i,"link",e),O(i),u.head.appendChild(i)))}}function jT(e,i){Ba.m(e,i);var s=go;if(s&&e){var u=i&&typeof i.as=="string"?i.as:"script",h='link[rel="modulepreload"][as="'+ie(u)+'"][href="'+ie(e)+'"]',m=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":m=xo(e)}if(!Ii.has(m)&&(e=g({rel:"modulepreload",href:e},i),Ii.set(m,e),s.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Wl(m)))return}u=s.createElement("link"),Bn(u,"link",e),O(u),s.head.appendChild(u)}}}function KT(e,i,s){Ba.S(e,i,s);var u=go;if(u&&e){var h=lr(u).hoistableStyles,m=vo(e);i=i||"default";var E=h.get(m);if(!E){var N={loading:0,preload:null};if(E=u.querySelector(Xl(m)))N.loading=5;else{e=g({rel:"stylesheet",href:e,"data-precedence":i},s),(s=Ii.get(m))&&qd(e,s);var G=E=u.createElement("link");O(G),Bn(G,"link",e),G._p=new Promise(function(nt,dt){G.onload=nt,G.onerror=dt}),G.addEventListener("load",function(){N.loading|=1}),G.addEventListener("error",function(){N.loading|=2}),N.loading|=4,Nc(E,i,u)}E={type:"stylesheet",instance:E,count:1,state:N},h.set(m,E)}}}function QT(e,i){Ba.X(e,i);var s=go;if(s&&e){var u=lr(s).hoistableScripts,h=xo(e),m=u.get(h);m||(m=s.querySelector(Wl(h)),m||(e=g({src:e,async:!0},i),(i=Ii.get(h))&&Yd(e,i),m=s.createElement("script"),O(m),Bn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function JT(e,i){Ba.M(e,i);var s=go;if(s&&e){var u=lr(s).hoistableScripts,h=xo(e),m=u.get(h);m||(m=s.querySelector(Wl(h)),m||(e=g({src:e,async:!0,type:"module"},i),(i=Ii.get(h))&&Yd(e,i),m=s.createElement("script"),O(m),Bn(m,"link",e),s.head.appendChild(m)),m={type:"script",instance:m,count:1,state:null},u.set(h,m))}}function ox(e,i,s,u){var h=(h=tt.current)?Lc(h):null;if(!h)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(i=vo(s.href),s=lr(h).hoistableStyles,u=s.get(i),u||(u={type:"style",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=vo(s.href);var m=lr(h).hoistableStyles,E=m.get(e);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},m.set(e,E),(m=h.querySelector(Xl(e)))&&!m._p&&(E.instance=m,E.state.loading=5),Ii.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},Ii.set(e,s),m||$T(h,e,s,E.state))),i&&u===null)throw Error(a(528,""));return E}if(i&&u!==null)throw Error(a(529,""));return null;case"script":return i=s.async,s=s.src,typeof s=="string"&&i&&typeof i!="function"&&typeof i!="symbol"?(i=xo(s),s=lr(h).hoistableScripts,u=s.get(i),u||(u={type:"script",instance:null,count:0,state:null},s.set(i,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function vo(e){return'href="'+ie(e)+'"'}function Xl(e){return'link[rel="stylesheet"]['+e+"]"}function lx(e){return g({},e,{"data-precedence":e.precedence,precedence:null})}function $T(e,i,s,u){e.querySelector('link[rel="preload"][as="style"]['+i+"]")?u.loading=1:(i=e.createElement("link"),u.preload=i,i.addEventListener("load",function(){return u.loading|=1}),i.addEventListener("error",function(){return u.loading|=2}),Bn(i,"link",s),O(i),e.head.appendChild(i))}function xo(e){return'[src="'+ie(e)+'"]'}function Wl(e){return"script[async]"+e}function ux(e,i,s){if(i.count++,i.instance===null)switch(i.type){case"style":var u=e.querySelector('style[data-href~="'+ie(s.href)+'"]');if(u)return i.instance=u,O(u),u;var h=g({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return u=(e.ownerDocument||e).createElement("style"),O(u),Bn(u,"style",h),Nc(u,s.precedence,e),i.instance=u;case"stylesheet":h=vo(s.href);var m=e.querySelector(Xl(h));if(m)return i.state.loading|=4,i.instance=m,O(m),m;u=lx(s),(h=Ii.get(h))&&qd(u,h),m=(e.ownerDocument||e).createElement("link"),O(m);var E=m;return E._p=new Promise(function(N,G){E.onload=N,E.onerror=G}),Bn(m,"link",u),i.state.loading|=4,Nc(m,s.precedence,e),i.instance=m;case"script":return m=xo(s.src),(h=e.querySelector(Wl(m)))?(i.instance=h,O(h),h):(u=s,(h=Ii.get(m))&&(u=g({},s),Yd(u,h)),e=e.ownerDocument||e,h=e.createElement("script"),O(h),Bn(h,"link",u),e.head.appendChild(h),i.instance=h);case"void":return null;default:throw Error(a(443,i.type))}else i.type==="stylesheet"&&(i.state.loading&4)===0&&(u=i.instance,i.state.loading|=4,Nc(u,s.precedence,e));return i.instance}function Nc(e,i,s){for(var u=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,m=h,E=0;E<u.length;E++){var N=u[E];if(N.dataset.precedence===i)m=N;else if(m!==h)break}m?m.parentNode.insertBefore(e,m.nextSibling):(i=s.nodeType===9?s.head:s,i.insertBefore(e,i.firstChild))}function qd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.title==null&&(e.title=i.title)}function Yd(e,i){e.crossOrigin==null&&(e.crossOrigin=i.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=i.referrerPolicy),e.integrity==null&&(e.integrity=i.integrity)}var Oc=null;function cx(e,i,s){if(Oc===null){var u=new Map,h=Oc=new Map;h.set(s,u)}else h=Oc,u=h.get(s),u||(u=new Map,h.set(s,u));if(u.has(e))return u;for(u.set(e,null),s=s.getElementsByTagName(e),h=0;h<s.length;h++){var m=s[h];if(!(m[Qr]||m[mn]||e==="link"&&m.getAttribute("rel")==="stylesheet")&&m.namespaceURI!=="http://www.w3.org/2000/svg"){var E=m.getAttribute(i)||"";E=e+E;var N=u.get(E);N?N.push(m):u.set(E,[m])}}return u}function fx(e,i,s){e=e.ownerDocument||e,e.head.insertBefore(s,i==="title"?e.querySelector("head > title"):null)}function t1(e,i,s){if(s===1||i.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof i.precedence!="string"||typeof i.href!="string"||i.href==="")break;return!0;case"link":if(typeof i.rel!="string"||typeof i.href!="string"||i.href===""||i.onLoad||i.onError)break;return i.rel==="stylesheet"?(e=i.disabled,typeof i.precedence=="string"&&e==null):!0;case"script":if(i.async&&typeof i.async!="function"&&typeof i.async!="symbol"&&!i.onLoad&&!i.onError&&i.src&&typeof i.src=="string")return!0}return!1}function hx(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function e1(e,i,s,u){if(s.type==="stylesheet"&&(typeof u.media!="string"||matchMedia(u.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var h=vo(u.href),m=i.querySelector(Xl(h));if(m){i=m._p,i!==null&&typeof i=="object"&&typeof i.then=="function"&&(e.count++,e=Pc.bind(e),i.then(e,e)),s.state.loading|=4,s.instance=m,O(m);return}m=i.ownerDocument||i,u=lx(u),(h=Ii.get(h))&&qd(u,h),m=m.createElement("link"),O(m);var E=m;E._p=new Promise(function(N,G){E.onload=N,E.onerror=G}),Bn(m,"link",u),s.instance=m}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,i),(i=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=Pc.bind(e),i.addEventListener("load",s),i.addEventListener("error",s))}}var Zd=0;function n1(e,i){return e.stylesheets&&e.count===0&&zc(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var u=setTimeout(function(){if(e.stylesheets&&zc(e,e.stylesheets),e.unsuspend){var m=e.unsuspend;e.unsuspend=null,m()}},6e4+i);0<e.imgBytes&&Zd===0&&(Zd=62500*FT());var h=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zc(e,e.stylesheets),e.unsuspend)){var m=e.unsuspend;e.unsuspend=null,m()}},(e.imgBytes>Zd?50:800)+i);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(u),clearTimeout(h)}}:null}function Pc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zc(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Fc=null;function zc(e,i){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Fc=new Map,i.forEach(i1,e),Fc=null,Pc.call(e))}function i1(e,i){if(!(i.state.loading&4)){var s=Fc.get(e);if(s)var u=s.get(null);else{s=new Map,Fc.set(e,s);for(var h=e.querySelectorAll("link[data-precedence],style[data-precedence]"),m=0;m<h.length;m++){var E=h[m];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(s.set(E.dataset.precedence,E),u=E)}u&&s.set(null,u)}h=i.instance,E=h.getAttribute("data-precedence"),m=s.get(E)||u,m===u&&s.set(null,h),s.set(E,h),this.count++,u=Pc.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),m?m.parentNode.insertBefore(h,m.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(h,e.firstChild)),i.state.loading|=4}}var ql={$$typeof:w,Provider:null,Consumer:null,_currentValue:Q,_currentValue2:Q,_threadCount:0};function a1(e,i,s,u,h,m,E,N,G){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Te(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Te(0),this.hiddenUpdates=Te(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=m,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=G,this.incompleteTransitions=new Map}function dx(e,i,s,u,h,m,E,N,G,nt,dt,_t){return e=new a1(e,i,s,E,G,nt,dt,_t,N),i=1,m===!0&&(i|=24),m=di(3,null,null,i),e.current=m,m.stateNode=e,i=Rh(),i.refCount++,e.pooledCache=i,i.refCount++,m.memoizedState={element:u,isDehydrated:s,cache:i},Uh(m),e}function px(e){return e?(e=js,e):js}function mx(e,i,s,u,h,m){h=px(h),u.context===null?u.context=h:u.pendingContext=h,u=mr(i),u.payload={element:s},m=m===void 0?null:m,m!==null&&(u.callback=m),s=_r(e,u,i),s!==null&&(ai(s,e,i),Tl(s,e,i))}function _x(e,i){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<i?s:i}}function jd(e,i){_x(e,i),(e=e.alternate)&&_x(e,i)}function gx(e){if(e.tag===13||e.tag===31){var i=ns(e,67108864);i!==null&&ai(i,e,67108864),jd(e,67108864)}}function vx(e){if(e.tag===13||e.tag===31){var i=vi();i=rl(i);var s=ns(e,i);s!==null&&ai(s,e,i),jd(e,i)}}var Ic=!0;function r1(e,i,s,u){var h=I.T;I.T=null;var m=H.p;try{H.p=2,Kd(e,i,s,u)}finally{H.p=m,I.T=h}}function s1(e,i,s,u){var h=I.T;I.T=null;var m=H.p;try{H.p=8,Kd(e,i,s,u)}finally{H.p=m,I.T=h}}function Kd(e,i,s,u){if(Ic){var h=Qd(u);if(h===null)Fd(e,i,u,Bc,s),Sx(e,u);else if(l1(h,e,i,s,u))u.stopPropagation();else if(Sx(e,u),i&4&&-1<o1.indexOf(e)){for(;h!==null;){var m=or(h);if(m!==null)switch(m.tag){case 3:if(m=m.stateNode,m.current.memoizedState.isDehydrated){var E=Mt(m.pendingLanes);if(E!==0){var N=m;for(N.pendingLanes|=2,N.entangledLanes|=2;E;){var G=1<<31-Pt(E);N.entanglements[1]|=G,E&=~G}la(m),(Le&6)===0&&(yc=A()+500,Hl(0))}}break;case 31:case 13:N=ns(m,2),N!==null&&ai(N,m,2),Ec(),jd(m,2)}if(m=Qd(u),m===null&&Fd(e,i,u,Bc,s),m===h)break;h=m}h!==null&&u.stopPropagation()}else Fd(e,i,u,null,s)}}function Qd(e){return e=$f(e),Jd(e)}var Bc=null;function Jd(e){if(Bc=null,e=sr(e),e!==null){var i=l(e);if(i===null)e=null;else{var s=i.tag;if(s===13){if(e=c(i),e!==null)return e;e=null}else if(s===31){if(e=f(i),e!==null)return e;e=null}else if(s===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;e=null}else i!==e&&(e=null)}}return Bc=e,null}function xx(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(q()){case pt:return 2;case St:return 8;case ft:case Zt:return 32;case wt:return 268435456;default:return 32}default:return 32}}var $d=!1,Rr=null,Cr=null,wr=null,Yl=new Map,Zl=new Map,Dr=[],o1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Sx(e,i){switch(e){case"focusin":case"focusout":Rr=null;break;case"dragenter":case"dragleave":Cr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Yl.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zl.delete(i.pointerId)}}function jl(e,i,s,u,h,m){return e===null||e.nativeEvent!==m?(e={blockedOn:i,domEventName:s,eventSystemFlags:u,nativeEvent:m,targetContainers:[h]},i!==null&&(i=or(i),i!==null&&gx(i)),e):(e.eventSystemFlags|=u,i=e.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),e)}function l1(e,i,s,u,h){switch(i){case"focusin":return Rr=jl(Rr,e,i,s,u,h),!0;case"dragenter":return Cr=jl(Cr,e,i,s,u,h),!0;case"mouseover":return wr=jl(wr,e,i,s,u,h),!0;case"pointerover":var m=h.pointerId;return Yl.set(m,jl(Yl.get(m)||null,e,i,s,u,h)),!0;case"gotpointercapture":return m=h.pointerId,Zl.set(m,jl(Zl.get(m)||null,e,i,s,u,h)),!0}return!1}function yx(e){var i=sr(e.target);if(i!==null){var s=l(i);if(s!==null){if(i=s.tag,i===13){if(i=c(s),i!==null){e.blockedOn=i,aa(e.priority,function(){vx(s)});return}}else if(i===31){if(i=f(s),i!==null){e.blockedOn=i,aa(e.priority,function(){vx(s)});return}}else if(i===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Hc(e){if(e.blockedOn!==null)return!1;for(var i=e.targetContainers;0<i.length;){var s=Qd(e.nativeEvent);if(s===null){s=e.nativeEvent;var u=new s.constructor(s.type,s);Jf=u,s.target.dispatchEvent(u),Jf=null}else return i=or(s),i!==null&&gx(i),e.blockedOn=s,!1;i.shift()}return!0}function Mx(e,i,s){Hc(e)&&s.delete(i)}function u1(){$d=!1,Rr!==null&&Hc(Rr)&&(Rr=null),Cr!==null&&Hc(Cr)&&(Cr=null),wr!==null&&Hc(wr)&&(wr=null),Yl.forEach(Mx),Zl.forEach(Mx)}function Vc(e,i){e.blockedOn===i&&(e.blockedOn=null,$d||($d=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,u1)))}var Gc=null;function Ex(e){Gc!==e&&(Gc=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Gc===e&&(Gc=null);for(var i=0;i<e.length;i+=3){var s=e[i],u=e[i+1],h=e[i+2];if(typeof u!="function"){if(Jd(u||s)===null)continue;break}var m=or(s);m!==null&&(e.splice(i,3),i-=3,Qh(m,{pending:!0,data:h,method:s.method,action:u},u,h))}}))}function So(e){function i(G){return Vc(G,e)}Rr!==null&&Vc(Rr,e),Cr!==null&&Vc(Cr,e),wr!==null&&Vc(wr,e),Yl.forEach(i),Zl.forEach(i);for(var s=0;s<Dr.length;s++){var u=Dr[s];u.blockedOn===e&&(u.blockedOn=null)}for(;0<Dr.length&&(s=Dr[0],s.blockedOn===null);)yx(s),s.blockedOn===null&&Dr.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(u=0;u<s.length;u+=3){var h=s[u],m=s[u+1],E=h[Dn]||null;if(typeof m=="function")E||Ex(s);else if(E){var N=null;if(m&&m.hasAttribute("formAction")){if(h=m,E=m[Dn]||null)N=E.formAction;else if(Jd(h)!==null)continue}else N=E.action;typeof N=="function"?s[u+1]=N:(s.splice(u,3),u-=3),Ex(s)}}}function Tx(){function e(m){m.canIntercept&&m.info==="react-transition"&&m.intercept({handler:function(){return new Promise(function(E){return h=E})},focusReset:"manual",scroll:"manual"})}function i(){h!==null&&(h(),h=null),u||setTimeout(s,20)}function s(){if(!u&&!navigation.transition){var m=navigation.currentEntry;m&&m.url!=null&&navigation.navigate(m.url,{state:m.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var u=!1,h=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",i),navigation.addEventListener("navigateerror",i),setTimeout(s,100),function(){u=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",i),navigation.removeEventListener("navigateerror",i),h!==null&&(h(),h=null)}}}function tp(e){this._internalRoot=e}kc.prototype.render=tp.prototype.render=function(e){var i=this._internalRoot;if(i===null)throw Error(a(409));var s=i.current,u=vi();mx(s,u,e,i,null,null)},kc.prototype.unmount=tp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var i=e.containerInfo;mx(e.current,2,null,e,null,null),Ec(),i[qi]=null}};function kc(e){this._internalRoot=e}kc.prototype.unstable_scheduleHydration=function(e){if(e){var i=sl();e={blockedOn:null,target:e,priority:i};for(var s=0;s<Dr.length&&i!==0&&i<Dr[s].priority;s++);Dr.splice(s,0,e),s===0&&yx(e)}};var bx=t.version;if(bx!=="19.2.3")throw Error(a(527,bx,"19.2.3"));H.findDOMNode=function(e){var i=e._reactInternals;if(i===void 0)throw typeof e.render=="function"?Error(a(188)):(e=Object.keys(e).join(","),Error(a(268,e)));return e=d(i),e=e!==null?_(e):null,e=e===null?null:e.stateNode,e};var c1={bundleType:0,version:"19.2.3",rendererPackageName:"react-dom",currentDispatcherRef:I,reconcilerVersion:"19.2.3"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{Et=Xc.inject(c1),bt=Xc}catch{}}return Ql.createRoot=function(e,i){if(!o(e))throw Error(a(299));var s=!1,u="",h=Lg,m=Ng,E=Og;return i!=null&&(i.unstable_strictMode===!0&&(s=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onUncaughtError!==void 0&&(h=i.onUncaughtError),i.onCaughtError!==void 0&&(m=i.onCaughtError),i.onRecoverableError!==void 0&&(E=i.onRecoverableError)),i=dx(e,1,!1,null,null,s,u,null,h,m,E,Tx),e[qi]=i.current,Pd(e),new tp(i)},Ql.hydrateRoot=function(e,i,s){if(!o(e))throw Error(a(299));var u=!1,h="",m=Lg,E=Ng,N=Og,G=null;return s!=null&&(s.unstable_strictMode===!0&&(u=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onUncaughtError!==void 0&&(m=s.onUncaughtError),s.onCaughtError!==void 0&&(E=s.onCaughtError),s.onRecoverableError!==void 0&&(N=s.onRecoverableError),s.formState!==void 0&&(G=s.formState)),i=dx(e,1,!0,i,s??null,u,h,G,m,E,N,Tx),i.context=px(null),s=i.current,u=vi(),u=rl(u),h=mr(u),h.callback=null,_r(s,h,u),s=u,i.current.lanes=s,Gn(i,s),la(i),e[qi]=i.current,Pd(e),new kc(i)},Ql.version="19.2.3",Ql}var Px;function M1(){if(Px)return ip.exports;Px=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(t){console.error(t)}}return r(),ip.exports=y1(),ip.exports}var E1=M1();const f_="182",T1=0,Fx=1,b1=2,mf=1,A1=2,su=3,qr=0,si=1,Ya=2,Ka=0,Bo=1,zx=2,Ix=3,Bx=4,R1=5,bs=100,C1=101,w1=102,D1=103,U1=104,L1=200,N1=201,O1=202,P1=203,Qp=204,Jp=205,F1=206,z1=207,I1=208,B1=209,H1=210,V1=211,G1=212,k1=213,X1=214,$p=0,tm=1,em=2,Xo=3,nm=4,im=5,am=6,rm=7,ry=0,W1=1,q1=2,_a=0,sy=1,oy=2,ly=3,uy=4,cy=5,fy=6,hy=7,dy=300,Ps=301,Wo=302,sm=303,om=304,Vf=306,lm=1e3,Za=1001,um=1002,Hn=1003,Y1=1004,Wc=1005,Yn=1006,op=1007,Rs=1008,Gi=1009,py=1010,my=1011,_u=1012,h_=1013,xa=1014,da=1015,$a=1016,d_=1017,p_=1018,gu=1020,_y=35902,gy=35899,vy=1021,xy=1022,na=1023,tr=1026,Cs=1027,Sy=1028,m_=1029,qo=1030,__=1031,g_=1033,_f=33776,gf=33777,vf=33778,xf=33779,cm=35840,fm=35841,hm=35842,dm=35843,pm=36196,mm=37492,_m=37496,gm=37488,vm=37489,xm=37490,Sm=37491,ym=37808,Mm=37809,Em=37810,Tm=37811,bm=37812,Am=37813,Rm=37814,Cm=37815,wm=37816,Dm=37817,Um=37818,Lm=37819,Nm=37820,Om=37821,Pm=36492,Fm=36494,zm=36495,Im=36283,Bm=36284,Hm=36285,Vm=36286,Z1=3200,j1=0,K1=1,Ir="",Vi="srgb",Yo="srgb-linear",bf="linear",He="srgb",yo=7680,Hx=519,Q1=512,J1=513,$1=514,v_=515,tb=516,eb=517,x_=518,nb=519,Vx=35044,Gx="300 es",pa=2e3,Af=2001;function yy(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function Rf(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ib(){const r=Rf("canvas");return r.style.display="block",r}const kx={};function Xx(...r){const t="THREE."+r.shift();console.log(t,...r)}function re(...r){const t="THREE."+r.shift();console.warn(t,...r)}function Ce(...r){const t="THREE."+r.shift();console.error(t,...r)}function vu(...r){const t=r.join(" ");t in kx||(kx[t]=!0,re(...r))}function ab(r,t,n){return new Promise(function(a,o){function l(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:o();break;case r.TIMEOUT_EXPIRED:setTimeout(l,n);break;default:a()}}setTimeout(l,n)})}class nl{addEventListener(t,n){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[t]===void 0&&(a[t]=[]),a[t].indexOf(n)===-1&&a[t].push(n)}hasEventListener(t,n){const a=this._listeners;return a===void 0?!1:a[t]!==void 0&&a[t].indexOf(n)!==-1}removeEventListener(t,n){const a=this._listeners;if(a===void 0)return;const o=a[t];if(o!==void 0){const l=o.indexOf(n);l!==-1&&o.splice(l,1)}}dispatchEvent(t){const n=this._listeners;if(n===void 0)return;const a=n[t.type];if(a!==void 0){t.target=this;const o=a.slice(0);for(let l=0,c=o.length;l<c;l++)o[l].call(this,t);t.target=null}}}const Xn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lp=Math.PI/180,Gm=180/Math.PI;function Ru(){const r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Xn[r&255]+Xn[r>>8&255]+Xn[r>>16&255]+Xn[r>>24&255]+"-"+Xn[t&255]+Xn[t>>8&255]+"-"+Xn[t>>16&15|64]+Xn[t>>24&255]+"-"+Xn[n&63|128]+Xn[n>>8&255]+"-"+Xn[n>>16&255]+Xn[n>>24&255]+Xn[a&255]+Xn[a>>8&255]+Xn[a>>16&255]+Xn[a>>24&255]).toLowerCase()}function ye(r,t,n){return Math.max(t,Math.min(n,r))}function rb(r,t){return(r%t+t)%t}function up(r,t,n){return(1-n)*r+n*t}function Jl(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function ri(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Pe{constructor(t=0,n=0){Pe.prototype.isVector2=!0,this.x=t,this.y=n}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,n){return this.x=t,this.y=n,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const n=this.x,a=this.y,o=t.elements;return this.x=o[0]*n+o[3]*a+o[6],this.y=o[1]*n+o[4]*a+o[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y;return n*n+a*a}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this}rotateAround(t,n){const a=Math.cos(n),o=Math.sin(n),l=this.x-t.x,c=this.y-t.y;return this.x=l*a-c*o+t.x,this.y=l*o+c*a+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Cu{constructor(t=0,n=0,a=0,o=1){this.isQuaternion=!0,this._x=t,this._y=n,this._z=a,this._w=o}static slerpFlat(t,n,a,o,l,c,f){let p=a[o+0],d=a[o+1],_=a[o+2],g=a[o+3],v=l[c+0],S=l[c+1],T=l[c+2],M=l[c+3];if(f<=0){t[n+0]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g;return}if(f>=1){t[n+0]=v,t[n+1]=S,t[n+2]=T,t[n+3]=M;return}if(g!==M||p!==v||d!==S||_!==T){let y=p*v+d*S+_*T+g*M;y<0&&(v=-v,S=-S,T=-T,M=-M,y=-y);let x=1-f;if(y<.9995){const D=Math.acos(y),w=Math.sin(D);x=Math.sin(x*D)/w,f=Math.sin(f*D)/w,p=p*x+v*f,d=d*x+S*f,_=_*x+T*f,g=g*x+M*f}else{p=p*x+v*f,d=d*x+S*f,_=_*x+T*f,g=g*x+M*f;const D=1/Math.sqrt(p*p+d*d+_*_+g*g);p*=D,d*=D,_*=D,g*=D}}t[n]=p,t[n+1]=d,t[n+2]=_,t[n+3]=g}static multiplyQuaternionsFlat(t,n,a,o,l,c){const f=a[o],p=a[o+1],d=a[o+2],_=a[o+3],g=l[c],v=l[c+1],S=l[c+2],T=l[c+3];return t[n]=f*T+_*g+p*S-d*v,t[n+1]=p*T+_*v+d*g-f*S,t[n+2]=d*T+_*S+f*v-p*g,t[n+3]=_*T-f*g-p*v-d*S,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,n,a,o){return this._x=t,this._y=n,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,n=!0){const a=t._x,o=t._y,l=t._z,c=t._order,f=Math.cos,p=Math.sin,d=f(a/2),_=f(o/2),g=f(l/2),v=p(a/2),S=p(o/2),T=p(l/2);switch(c){case"XYZ":this._x=v*_*g+d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g-v*S*T;break;case"YXZ":this._x=v*_*g+d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g+v*S*T;break;case"ZXY":this._x=v*_*g-d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g-v*S*T;break;case"ZYX":this._x=v*_*g-d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g+v*S*T;break;case"YZX":this._x=v*_*g+d*S*T,this._y=d*S*g+v*_*T,this._z=d*_*T-v*S*g,this._w=d*_*g-v*S*T;break;case"XZY":this._x=v*_*g-d*S*T,this._y=d*S*g-v*_*T,this._z=d*_*T+v*S*g,this._w=d*_*g+v*S*T;break;default:re("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,n){const a=n/2,o=Math.sin(a);return this._x=t.x*o,this._y=t.y*o,this._z=t.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(t){const n=t.elements,a=n[0],o=n[4],l=n[8],c=n[1],f=n[5],p=n[9],d=n[2],_=n[6],g=n[10],v=a+f+g;if(v>0){const S=.5/Math.sqrt(v+1);this._w=.25/S,this._x=(_-p)*S,this._y=(l-d)*S,this._z=(c-o)*S}else if(a>f&&a>g){const S=2*Math.sqrt(1+a-f-g);this._w=(_-p)/S,this._x=.25*S,this._y=(o+c)/S,this._z=(l+d)/S}else if(f>g){const S=2*Math.sqrt(1+f-a-g);this._w=(l-d)/S,this._x=(o+c)/S,this._y=.25*S,this._z=(p+_)/S}else{const S=2*Math.sqrt(1+g-a-f);this._w=(c-o)/S,this._x=(l+d)/S,this._y=(p+_)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(t,n){let a=t.dot(n)+1;return a<1e-8?(a=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=a):(this._x=0,this._y=-t.z,this._z=t.y,this._w=a)):(this._x=t.y*n.z-t.z*n.y,this._y=t.z*n.x-t.x*n.z,this._z=t.x*n.y-t.y*n.x,this._w=a),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ye(this.dot(t),-1,1)))}rotateTowards(t,n){const a=this.angleTo(t);if(a===0)return this;const o=Math.min(1,n/a);return this.slerp(t,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,n){const a=t._x,o=t._y,l=t._z,c=t._w,f=n._x,p=n._y,d=n._z,_=n._w;return this._x=a*_+c*f+o*d-l*p,this._y=o*_+c*p+l*f-a*d,this._z=l*_+c*d+a*p-o*f,this._w=c*_-a*f-o*p-l*d,this._onChangeCallback(),this}slerp(t,n){if(n<=0)return this;if(n>=1)return this.copy(t);let a=t._x,o=t._y,l=t._z,c=t._w,f=this.dot(t);f<0&&(a=-a,o=-o,l=-l,c=-c,f=-f);let p=1-n;if(f<.9995){const d=Math.acos(f),_=Math.sin(d);p=Math.sin(p*d)/_,n=Math.sin(n*d)/_,this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this._onChangeCallback()}else this._x=this._x*p+a*n,this._y=this._y*p+o*n,this._z=this._z*p+l*n,this._w=this._w*p+c*n,this.normalize();return this}slerpQuaternions(t,n,a){return this.copy(t).slerp(n,a)}random(){const t=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(t),o*Math.cos(t),l*Math.sin(n),l*Math.cos(n))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,n=0){return this._x=t[n],this._y=t[n+1],this._z=t[n+2],this._w=t[n+3],this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._w,t}fromBufferAttribute(t,n){return this._x=t.getX(n),this._y=t.getY(n),this._z=t.getZ(n),this._w=t.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ot{constructor(t=0,n=0,a=0){ot.prototype.isVector3=!0,this.x=t,this.y=n,this.z=a}set(t,n,a){return a===void 0&&(a=this.z),this.x=t,this.y=n,this.z=a,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,n){return this.x=t.x*n.x,this.y=t.y*n.y,this.z=t.z*n.z,this}applyEuler(t){return this.applyQuaternion(Wx.setFromEuler(t))}applyAxisAngle(t,n){return this.applyQuaternion(Wx.setFromAxisAngle(t,n))}applyMatrix3(t){const n=this.x,a=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[3]*a+l[6]*o,this.y=l[1]*n+l[4]*a+l[7]*o,this.z=l[2]*n+l[5]*a+l[8]*o,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,l=t.elements,c=1/(l[3]*n+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*n+l[4]*a+l[8]*o+l[12])*c,this.y=(l[1]*n+l[5]*a+l[9]*o+l[13])*c,this.z=(l[2]*n+l[6]*a+l[10]*o+l[14])*c,this}applyQuaternion(t){const n=this.x,a=this.y,o=this.z,l=t.x,c=t.y,f=t.z,p=t.w,d=2*(c*o-f*a),_=2*(f*n-l*o),g=2*(l*a-c*n);return this.x=n+p*d+c*g-f*_,this.y=a+p*_+f*d-l*g,this.z=o+p*g+l*_-c*d,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const n=this.x,a=this.y,o=this.z,l=t.elements;return this.x=l[0]*n+l[4]*a+l[8]*o,this.y=l[1]*n+l[5]*a+l[9]*o,this.z=l[2]*n+l[6]*a+l[10]*o,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,n){const a=t.x,o=t.y,l=t.z,c=n.x,f=n.y,p=n.z;return this.x=o*p-l*f,this.y=l*c-a*p,this.z=a*f-o*c,this}projectOnVector(t){const n=t.lengthSq();if(n===0)return this.set(0,0,0);const a=t.dot(this)/n;return this.copy(t).multiplyScalar(a)}projectOnPlane(t){return cp.copy(this).projectOnVector(t),this.sub(cp)}reflect(t){return this.sub(cp.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const n=Math.sqrt(this.lengthSq()*t.lengthSq());if(n===0)return Math.PI/2;const a=this.dot(t)/n;return Math.acos(ye(a,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const n=this.x-t.x,a=this.y-t.y,o=this.z-t.z;return n*n+a*a+o*o}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,n,a){const o=Math.sin(n)*t;return this.x=o*Math.sin(a),this.y=Math.cos(n)*t,this.z=o*Math.cos(a),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,n,a){return this.x=t*Math.sin(n),this.y=a,this.z=t*Math.cos(n),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(t){const n=this.setFromMatrixColumn(t,0).length(),a=this.setFromMatrixColumn(t,1).length(),o=this.setFromMatrixColumn(t,2).length();return this.x=n,this.y=a,this.z=o,this}setFromMatrixColumn(t,n){return this.fromArray(t.elements,n*4)}setFromMatrix3Column(t,n){return this.fromArray(t.elements,n*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,n=Math.random()*2-1,a=Math.sqrt(1-n*n);return this.x=a*Math.cos(t),this.y=n,this.z=a*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cp=new ot,Wx=new Cu;class ce{constructor(t,n,a,o,l,c,f,p,d){ce.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,n,a,o,l,c,f,p,d)}set(t,n,a,o,l,c,f,p,d){const _=this.elements;return _[0]=t,_[1]=o,_[2]=f,_[3]=n,_[4]=l,_[5]=p,_[6]=a,_[7]=c,_[8]=d,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],this}extractBasis(t,n,a){return t.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const n=t.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,l=this.elements,c=a[0],f=a[3],p=a[6],d=a[1],_=a[4],g=a[7],v=a[2],S=a[5],T=a[8],M=o[0],y=o[3],x=o[6],D=o[1],w=o[4],C=o[7],R=o[2],P=o[5],U=o[8];return l[0]=c*M+f*D+p*R,l[3]=c*y+f*w+p*P,l[6]=c*x+f*C+p*U,l[1]=d*M+_*D+g*R,l[4]=d*y+_*w+g*P,l[7]=d*x+_*C+g*U,l[2]=v*M+S*D+T*R,l[5]=v*y+S*w+T*P,l[8]=v*x+S*C+T*U,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[3]*=t,n[6]*=t,n[1]*=t,n[4]*=t,n[7]*=t,n[2]*=t,n[5]*=t,n[8]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8];return n*c*_-n*f*d-a*l*_+a*f*p+o*l*d-o*c*p}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=_*c-f*d,v=f*p-_*l,S=d*l-c*p,T=n*g+a*v+o*S;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/T;return t[0]=g*M,t[1]=(o*d-_*a)*M,t[2]=(f*a-o*c)*M,t[3]=v*M,t[4]=(_*n-o*p)*M,t[5]=(o*l-f*n)*M,t[6]=S*M,t[7]=(a*p-d*n)*M,t[8]=(c*n-a*l)*M,this}transpose(){let t;const n=this.elements;return t=n[1],n[1]=n[3],n[3]=t,t=n[2],n[2]=n[6],n[6]=t,t=n[5],n[5]=n[7],n[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const n=this.elements;return t[0]=n[0],t[1]=n[3],t[2]=n[6],t[3]=n[1],t[4]=n[4],t[5]=n[7],t[6]=n[2],t[7]=n[5],t[8]=n[8],this}setUvTransform(t,n,a,o,l,c,f){const p=Math.cos(l),d=Math.sin(l);return this.set(a*p,a*d,-a*(p*c+d*f)+c+t,-o*d,o*p,-o*(-d*c+p*f)+f+n,0,0,1),this}scale(t,n){return this.premultiply(fp.makeScale(t,n)),this}rotate(t){return this.premultiply(fp.makeRotation(-t)),this}translate(t,n){return this.premultiply(fp.makeTranslation(t,n)),this}makeTranslation(t,n){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,n,0,0,1),this}makeRotation(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,a,n,0,0,0,1),this}makeScale(t,n){return this.set(t,0,0,0,n,0,0,0,1),this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<9;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<9;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const fp=new ce,qx=new ce().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yx=new ce().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sb(){const r={enabled:!0,workingColorSpace:Yo,spaces:{},convert:function(o,l,c){return this.enabled===!1||l===c||!l||!c||(this.spaces[l].transfer===He&&(o.r=Qa(o.r),o.g=Qa(o.g),o.b=Qa(o.b)),this.spaces[l].primaries!==this.spaces[c].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===He&&(o.r=Ho(o.r),o.g=Ho(o.g),o.b=Ho(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Ir?bf:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,c){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return vu("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return vu("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(o,l)}},t=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],a=[.3127,.329];return r.define({[Yo]:{primaries:t,whitePoint:a,transfer:bf,toXYZ:qx,fromXYZ:Yx,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Vi},outputColorSpaceConfig:{drawingBufferColorSpace:Vi}},[Vi]:{primaries:t,whitePoint:a,transfer:He,toXYZ:qx,fromXYZ:Yx,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Vi}}}),r}const be=sb();function Qa(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ho(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Mo;class ob{static getDataURL(t,n="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let a;if(t instanceof HTMLCanvasElement)a=t;else{Mo===void 0&&(Mo=Rf("canvas")),Mo.width=t.width,Mo.height=t.height;const o=Mo.getContext("2d");t instanceof ImageData?o.putImageData(t,0,0):o.drawImage(t,0,0,t.width,t.height),a=Mo}return a.toDataURL(n)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const n=Rf("canvas");n.width=t.width,n.height=t.height;const a=n.getContext("2d");a.drawImage(t,0,0,t.width,t.height);const o=a.getImageData(0,0,t.width,t.height),l=o.data;for(let c=0;c<l.length;c++)l[c]=Qa(l[c]/255)*255;return a.putImageData(o,0,0),n}else if(t.data){const n=t.data.slice(0);for(let a=0;a<n.length;a++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[a]=Math.floor(Qa(n[a]/255)*255):n[a]=Qa(n[a]);return{data:n,width:t.width,height:t.height}}else return re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let lb=0;class S_{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lb++}),this.uuid=Ru(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?t.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?t.set(n.displayHeight,n.displayWidth,0):n!==null?t.set(n.width,n.height,n.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let c=0,f=o.length;c<f;c++)o[c].isDataTexture?l.push(hp(o[c].image)):l.push(hp(o[c]))}else l=hp(o);a.url=l}return n||(t.images[this.uuid]=a),a}}function hp(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ob.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(re("Texture: Unable to serialize Texture."),{})}let ub=0;const dp=new ot;class Jn extends nl{constructor(t=Jn.DEFAULT_IMAGE,n=Jn.DEFAULT_MAPPING,a=Za,o=Za,l=Yn,c=Rs,f=na,p=Gi,d=Jn.DEFAULT_ANISOTROPY,_=Ir){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ub++}),this.uuid=Ru(),this.name="",this.source=new S_(t),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=c,this.anisotropy=d,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Pe(0,0),this.repeat=new Pe(1,1),this.center=new Pe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ce,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(dp).x}get height(){return this.source.getSize(dp).y}get depth(){return this.source.getSize(dp).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const n in t){const a=t[n];if(a===void 0){re(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){re(`Texture.setValues(): property '${n}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";if(!n&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),n||(t.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==dy)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case lm:t.x=t.x-Math.floor(t.x);break;case Za:t.x=t.x<0?0:1;break;case um:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case lm:t.y=t.y-Math.floor(t.y);break;case Za:t.y=t.y<0?0:1;break;case um:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=dy;Jn.DEFAULT_ANISOTROPY=1;class pn{constructor(t=0,n=0,a=0,o=1){pn.prototype.isVector4=!0,this.x=t,this.y=n,this.z=a,this.w=o}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,n,a,o){return this.x=t,this.y=n,this.z=a,this.w=o,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,n){switch(t){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,n){return this.x=t.x+n.x,this.y=t.y+n.y,this.z=t.z+n.z,this.w=t.w+n.w,this}addScaledVector(t,n){return this.x+=t.x*n,this.y+=t.y*n,this.z+=t.z*n,this.w+=t.w*n,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,n){return this.x=t.x-n.x,this.y=t.y-n.y,this.z=t.z-n.z,this.w=t.w-n.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const n=this.x,a=this.y,o=this.z,l=this.w,c=t.elements;return this.x=c[0]*n+c[4]*a+c[8]*o+c[12]*l,this.y=c[1]*n+c[5]*a+c[9]*o+c[13]*l,this.z=c[2]*n+c[6]*a+c[10]*o+c[14]*l,this.w=c[3]*n+c[7]*a+c[11]*o+c[15]*l,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const n=Math.sqrt(1-t.w*t.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/n,this.y=t.y/n,this.z=t.z/n),this}setAxisAngleFromRotationMatrix(t){let n,a,o,l;const p=t.elements,d=p[0],_=p[4],g=p[8],v=p[1],S=p[5],T=p[9],M=p[2],y=p[6],x=p[10];if(Math.abs(_-v)<.01&&Math.abs(g-M)<.01&&Math.abs(T-y)<.01){if(Math.abs(_+v)<.1&&Math.abs(g+M)<.1&&Math.abs(T+y)<.1&&Math.abs(d+S+x-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const w=(d+1)/2,C=(S+1)/2,R=(x+1)/2,P=(_+v)/4,U=(g+M)/4,F=(T+y)/4;return w>C&&w>R?w<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(w),o=P/a,l=U/a):C>R?C<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(C),a=P/o,l=F/o):R<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(R),a=U/l,o=F/l),this.set(a,o,l,n),this}let D=Math.sqrt((y-T)*(y-T)+(g-M)*(g-M)+(v-_)*(v-_));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(g-M)/D,this.z=(v-_)/D,this.w=Math.acos((d+S+x-1)/2),this}setFromMatrixPosition(t){const n=t.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,n){return this.x=ye(this.x,t.x,n.x),this.y=ye(this.y,t.y,n.y),this.z=ye(this.z,t.z,n.z),this.w=ye(this.w,t.w,n.w),this}clampScalar(t,n){return this.x=ye(this.x,t,n),this.y=ye(this.y,t,n),this.z=ye(this.z,t,n),this.w=ye(this.w,t,n),this}clampLength(t,n){const a=this.length();return this.divideScalar(a||1).multiplyScalar(ye(a,t,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,n){return this.x+=(t.x-this.x)*n,this.y+=(t.y-this.y)*n,this.z+=(t.z-this.z)*n,this.w+=(t.w-this.w)*n,this}lerpVectors(t,n,a){return this.x=t.x+(n.x-t.x)*a,this.y=t.y+(n.y-t.y)*a,this.z=t.z+(n.z-t.z)*a,this.w=t.w+(n.w-t.w)*a,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,n=0){return this.x=t[n],this.y=t[n+1],this.z=t[n+2],this.w=t[n+3],this}toArray(t=[],n=0){return t[n]=this.x,t[n+1]=this.y,t[n+2]=this.z,t[n+3]=this.w,t}fromBufferAttribute(t,n){return this.x=t.getX(n),this.y=t.getY(n),this.z=t.getZ(n),this.w=t.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class cb extends nl{constructor(t=1,n=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},a),this.isRenderTarget=!0,this.width=t,this.height=n,this.depth=a.depth,this.scissor=new pn(0,0,t,n),this.scissorTest=!1,this.viewport=new pn(0,0,t,n);const o={width:t,height:n,depth:a.depth},l=new Jn(o);this.textures=[];const c=a.count;for(let f=0;f<c;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview}_setTextureOptions(t={}){const n={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(n.mapping=t.mapping),t.wrapS!==void 0&&(n.wrapS=t.wrapS),t.wrapT!==void 0&&(n.wrapT=t.wrapT),t.wrapR!==void 0&&(n.wrapR=t.wrapR),t.magFilter!==void 0&&(n.magFilter=t.magFilter),t.minFilter!==void 0&&(n.minFilter=t.minFilter),t.format!==void 0&&(n.format=t.format),t.type!==void 0&&(n.type=t.type),t.anisotropy!==void 0&&(n.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(n.colorSpace=t.colorSpace),t.flipY!==void 0&&(n.flipY=t.flipY),t.generateMipmaps!==void 0&&(n.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(n.internalFormat=t.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(n)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,n,a=1){if(this.width!==t||this.height!==n||this.depth!==a){this.width=t,this.height=n,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=t,this.textures[o].image.height=n,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,t,n),this.scissor.set(0,0,t,n)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,a=t.textures.length;n<a;n++){this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const o=Object.assign({},t.textures[n].image);this.textures[n].source=new S_(o)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ga extends cb{constructor(t=1,n=1,a={}){super(t,n,a),this.isWebGLRenderTarget=!0}}class My extends Jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class fb extends Jn{constructor(t=null,n=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:n,height:a,depth:o},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Za,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wu{constructor(t=new ot(1/0,1/0,1/0),n=new ot(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=n}set(t,n){return this.min.copy(t),this.max.copy(n),this}setFromArray(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n+=3)this.expandByPoint(Qi.fromArray(t,n));return this}setFromBufferAttribute(t){this.makeEmpty();for(let n=0,a=t.count;n<a;n++)this.expandByPoint(Qi.fromBufferAttribute(t,n));return this}setFromPoints(t){this.makeEmpty();for(let n=0,a=t.length;n<a;n++)this.expandByPoint(t[n]);return this}setFromCenterAndSize(t,n){const a=Qi.copy(n).multiplyScalar(.5);return this.min.copy(t).sub(a),this.max.copy(t).add(a),this}setFromObject(t,n=!1){return this.makeEmpty(),this.expandByObject(t,n)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,n=!1){t.updateWorldMatrix(!1,!1);const a=t.geometry;if(a!==void 0){const l=a.getAttribute("position");if(n===!0&&l!==void 0&&t.isInstancedMesh!==!0)for(let c=0,f=l.count;c<f;c++)t.isMesh===!0?t.getVertexPosition(c,Qi):Qi.fromBufferAttribute(l,c),Qi.applyMatrix4(t.matrixWorld),this.expandByPoint(Qi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qc.copy(t.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),qc.copy(a.boundingBox)),qc.applyMatrix4(t.matrixWorld),this.union(qc)}const o=t.children;for(let l=0,c=o.length;l<c;l++)this.expandByObject(o[l],n);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,n){return n.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Qi),Qi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let n,a;return t.normal.x>0?(n=t.normal.x*this.min.x,a=t.normal.x*this.max.x):(n=t.normal.x*this.max.x,a=t.normal.x*this.min.x),t.normal.y>0?(n+=t.normal.y*this.min.y,a+=t.normal.y*this.max.y):(n+=t.normal.y*this.max.y,a+=t.normal.y*this.min.y),t.normal.z>0?(n+=t.normal.z*this.min.z,a+=t.normal.z*this.max.z):(n+=t.normal.z*this.max.z,a+=t.normal.z*this.min.z),n<=-t.constant&&a>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter($l),Yc.subVectors(this.max,$l),Eo.subVectors(t.a,$l),To.subVectors(t.b,$l),bo.subVectors(t.c,$l),Lr.subVectors(To,Eo),Nr.subVectors(bo,To),ms.subVectors(Eo,bo);let n=[0,-Lr.z,Lr.y,0,-Nr.z,Nr.y,0,-ms.z,ms.y,Lr.z,0,-Lr.x,Nr.z,0,-Nr.x,ms.z,0,-ms.x,-Lr.y,Lr.x,0,-Nr.y,Nr.x,0,-ms.y,ms.x,0];return!pp(n,Eo,To,bo,Yc)||(n=[1,0,0,0,1,0,0,0,1],!pp(n,Eo,To,bo,Yc))?!1:(Zc.crossVectors(Lr,Nr),n=[Zc.x,Zc.y,Zc.z],pp(n,Eo,To,bo,Yc))}clampPoint(t,n){return n.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Qi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Qi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ha),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ha=[new ot,new ot,new ot,new ot,new ot,new ot,new ot,new ot],Qi=new ot,qc=new wu,Eo=new ot,To=new ot,bo=new ot,Lr=new ot,Nr=new ot,ms=new ot,$l=new ot,Yc=new ot,Zc=new ot,_s=new ot;function pp(r,t,n,a,o){for(let l=0,c=r.length-3;l<=c;l+=3){_s.fromArray(r,l);const f=o.x*Math.abs(_s.x)+o.y*Math.abs(_s.y)+o.z*Math.abs(_s.z),p=t.dot(_s),d=n.dot(_s),_=a.dot(_s);if(Math.max(-Math.max(p,d,_),Math.min(p,d,_))>f)return!1}return!0}const hb=new wu,tu=new ot,mp=new ot;class y_{constructor(t=new ot,n=-1){this.isSphere=!0,this.center=t,this.radius=n}set(t,n){return this.center.copy(t),this.radius=n,this}setFromPoints(t,n){const a=this.center;n!==void 0?a.copy(n):hb.setFromPoints(t).getCenter(a);let o=0;for(let l=0,c=t.length;l<c;l++)o=Math.max(o,a.distanceToSquared(t[l]));return this.radius=Math.sqrt(o),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const n=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=n*n}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,n){const a=this.center.distanceToSquared(t);return n.copy(t),a>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;tu.subVectors(t,this.center);const n=tu.lengthSq();if(n>this.radius*this.radius){const a=Math.sqrt(n),o=(a-this.radius)*.5;this.center.addScaledVector(tu,o/a),this.radius+=o}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mp.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(tu.copy(t.center).add(mp)),this.expandByPoint(tu.copy(t.center).sub(mp))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Va=new ot,_p=new ot,jc=new ot,Or=new ot,gp=new ot,Kc=new ot,vp=new ot;class db{constructor(t=new ot,n=new ot(0,0,-1)){this.origin=t,this.direction=n}set(t,n){return this.origin.copy(t),this.direction.copy(n),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,n){return n.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Va)),this}closestPointToPoint(t,n){n.subVectors(t,this.origin);const a=n.dot(this.direction);return a<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const n=Va.subVectors(t,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(t):(Va.copy(this.origin).addScaledVector(this.direction,n),Va.distanceToSquared(t))}distanceSqToSegment(t,n,a,o){_p.copy(t).add(n).multiplyScalar(.5),jc.copy(n).sub(t).normalize(),Or.copy(this.origin).sub(_p);const l=t.distanceTo(n)*.5,c=-this.direction.dot(jc),f=Or.dot(this.direction),p=-Or.dot(jc),d=Or.lengthSq(),_=Math.abs(1-c*c);let g,v,S,T;if(_>0)if(g=c*p-f,v=c*f-p,T=l*_,g>=0)if(v>=-T)if(v<=T){const M=1/_;g*=M,v*=M,S=g*(g+c*v+2*f)+v*(c*g+v+2*p)+d}else v=l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v=-l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;else v<=-T?(g=Math.max(0,-(-c*l+f)),v=g>0?-l:Math.min(Math.max(-l,-p),l),S=-g*g+v*(v+2*p)+d):v<=T?(g=0,v=Math.min(Math.max(-l,-p),l),S=v*(v+2*p)+d):(g=Math.max(0,-(c*l+f)),v=g>0?l:Math.min(Math.max(-l,-p),l),S=-g*g+v*(v+2*p)+d);else v=c>0?-l:l,g=Math.max(0,-(c*v+f)),S=-g*g+v*(v+2*p)+d;return a&&a.copy(this.origin).addScaledVector(this.direction,g),o&&o.copy(_p).addScaledVector(jc,v),S}intersectSphere(t,n){Va.subVectors(t.center,this.origin);const a=Va.dot(this.direction),o=Va.dot(Va)-a*a,l=t.radius*t.radius;if(o>l)return null;const c=Math.sqrt(l-o),f=a-c,p=a+c;return p<0?null:f<0?this.at(p,n):this.at(f,n)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const n=t.normal.dot(this.direction);if(n===0)return t.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(t.normal)+t.constant)/n;return a>=0?a:null}intersectPlane(t,n){const a=this.distanceToPlane(t);return a===null?null:this.at(a,n)}intersectsPlane(t){const n=t.distanceToPoint(this.origin);return n===0||t.normal.dot(this.direction)*n<0}intersectBox(t,n){let a,o,l,c,f,p;const d=1/this.direction.x,_=1/this.direction.y,g=1/this.direction.z,v=this.origin;return d>=0?(a=(t.min.x-v.x)*d,o=(t.max.x-v.x)*d):(a=(t.max.x-v.x)*d,o=(t.min.x-v.x)*d),_>=0?(l=(t.min.y-v.y)*_,c=(t.max.y-v.y)*_):(l=(t.max.y-v.y)*_,c=(t.min.y-v.y)*_),a>c||l>o||((l>a||isNaN(a))&&(a=l),(c<o||isNaN(o))&&(o=c),g>=0?(f=(t.min.z-v.z)*g,p=(t.max.z-v.z)*g):(f=(t.max.z-v.z)*g,p=(t.min.z-v.z)*g),a>p||f>o)||((f>a||a!==a)&&(a=f),(p<o||o!==o)&&(o=p),o<0)?null:this.at(a>=0?a:o,n)}intersectsBox(t){return this.intersectBox(t,Va)!==null}intersectTriangle(t,n,a,o,l){gp.subVectors(n,t),Kc.subVectors(a,t),vp.crossVectors(gp,Kc);let c=this.direction.dot(vp),f;if(c>0){if(o)return null;f=1}else if(c<0)f=-1,c=-c;else return null;Or.subVectors(this.origin,t);const p=f*this.direction.dot(Kc.crossVectors(Or,Kc));if(p<0)return null;const d=f*this.direction.dot(gp.cross(Or));if(d<0||p+d>c)return null;const _=-f*Or.dot(vp);return _<0?null:this.at(_/c,l)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mn{constructor(t,n,a,o,l,c,f,p,d,_,g,v,S,T,M,y){Mn.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,n,a,o,l,c,f,p,d,_,g,v,S,T,M,y)}set(t,n,a,o,l,c,f,p,d,_,g,v,S,T,M,y){const x=this.elements;return x[0]=t,x[4]=n,x[8]=a,x[12]=o,x[1]=l,x[5]=c,x[9]=f,x[13]=p,x[2]=d,x[6]=_,x[10]=g,x[14]=v,x[3]=S,x[7]=T,x[11]=M,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mn().fromArray(this.elements)}copy(t){const n=this.elements,a=t.elements;return n[0]=a[0],n[1]=a[1],n[2]=a[2],n[3]=a[3],n[4]=a[4],n[5]=a[5],n[6]=a[6],n[7]=a[7],n[8]=a[8],n[9]=a[9],n[10]=a[10],n[11]=a[11],n[12]=a[12],n[13]=a[13],n[14]=a[14],n[15]=a[15],this}copyPosition(t){const n=this.elements,a=t.elements;return n[12]=a[12],n[13]=a[13],n[14]=a[14],this}setFromMatrix3(t){const n=t.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(t,n,a){return this.determinant()===0?(t.set(1,0,0),n.set(0,1,0),a.set(0,0,1),this):(t.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(t,n,a){return this.set(t.x,n.x,a.x,0,t.y,n.y,a.y,0,t.z,n.z,a.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();const n=this.elements,a=t.elements,o=1/Ao.setFromMatrixColumn(t,0).length(),l=1/Ao.setFromMatrixColumn(t,1).length(),c=1/Ao.setFromMatrixColumn(t,2).length();return n[0]=a[0]*o,n[1]=a[1]*o,n[2]=a[2]*o,n[3]=0,n[4]=a[4]*l,n[5]=a[5]*l,n[6]=a[6]*l,n[7]=0,n[8]=a[8]*c,n[9]=a[9]*c,n[10]=a[10]*c,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(t){const n=this.elements,a=t.x,o=t.y,l=t.z,c=Math.cos(a),f=Math.sin(a),p=Math.cos(o),d=Math.sin(o),_=Math.cos(l),g=Math.sin(l);if(t.order==="XYZ"){const v=c*_,S=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=-p*g,n[8]=d,n[1]=S+T*d,n[5]=v-M*d,n[9]=-f*p,n[2]=M-v*d,n[6]=T+S*d,n[10]=c*p}else if(t.order==="YXZ"){const v=p*_,S=p*g,T=d*_,M=d*g;n[0]=v+M*f,n[4]=T*f-S,n[8]=c*d,n[1]=c*g,n[5]=c*_,n[9]=-f,n[2]=S*f-T,n[6]=M+v*f,n[10]=c*p}else if(t.order==="ZXY"){const v=p*_,S=p*g,T=d*_,M=d*g;n[0]=v-M*f,n[4]=-c*g,n[8]=T+S*f,n[1]=S+T*f,n[5]=c*_,n[9]=M-v*f,n[2]=-c*d,n[6]=f,n[10]=c*p}else if(t.order==="ZYX"){const v=c*_,S=c*g,T=f*_,M=f*g;n[0]=p*_,n[4]=T*d-S,n[8]=v*d+M,n[1]=p*g,n[5]=M*d+v,n[9]=S*d-T,n[2]=-d,n[6]=f*p,n[10]=c*p}else if(t.order==="YZX"){const v=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=M-v*g,n[8]=T*g+S,n[1]=g,n[5]=c*_,n[9]=-f*_,n[2]=-d*_,n[6]=S*g+T,n[10]=v-M*g}else if(t.order==="XZY"){const v=c*p,S=c*d,T=f*p,M=f*d;n[0]=p*_,n[4]=-g,n[8]=d*_,n[1]=v*g+M,n[5]=c*_,n[9]=S*g-T,n[2]=T*g-S,n[6]=f*_,n[10]=M*g+v}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(t){return this.compose(pb,t,mb)}lookAt(t,n,a){const o=this.elements;return xi.subVectors(t,n),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Pr.crossVectors(a,xi),Pr.lengthSq()===0&&(Math.abs(a.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Pr.crossVectors(a,xi)),Pr.normalize(),Qc.crossVectors(xi,Pr),o[0]=Pr.x,o[4]=Qc.x,o[8]=xi.x,o[1]=Pr.y,o[5]=Qc.y,o[9]=xi.y,o[2]=Pr.z,o[6]=Qc.z,o[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,n){const a=t.elements,o=n.elements,l=this.elements,c=a[0],f=a[4],p=a[8],d=a[12],_=a[1],g=a[5],v=a[9],S=a[13],T=a[2],M=a[6],y=a[10],x=a[14],D=a[3],w=a[7],C=a[11],R=a[15],P=o[0],U=o[4],F=o[8],b=o[12],L=o[1],V=o[5],Y=o[9],Z=o[13],st=o[2],it=o[6],I=o[10],H=o[14],Q=o[3],xt=o[7],gt=o[11],z=o[15];return l[0]=c*P+f*L+p*st+d*Q,l[4]=c*U+f*V+p*it+d*xt,l[8]=c*F+f*Y+p*I+d*gt,l[12]=c*b+f*Z+p*H+d*z,l[1]=_*P+g*L+v*st+S*Q,l[5]=_*U+g*V+v*it+S*xt,l[9]=_*F+g*Y+v*I+S*gt,l[13]=_*b+g*Z+v*H+S*z,l[2]=T*P+M*L+y*st+x*Q,l[6]=T*U+M*V+y*it+x*xt,l[10]=T*F+M*Y+y*I+x*gt,l[14]=T*b+M*Z+y*H+x*z,l[3]=D*P+w*L+C*st+R*Q,l[7]=D*U+w*V+C*it+R*xt,l[11]=D*F+w*Y+C*I+R*gt,l[15]=D*b+w*Z+C*H+R*z,this}multiplyScalar(t){const n=this.elements;return n[0]*=t,n[4]*=t,n[8]*=t,n[12]*=t,n[1]*=t,n[5]*=t,n[9]*=t,n[13]*=t,n[2]*=t,n[6]*=t,n[10]*=t,n[14]*=t,n[3]*=t,n[7]*=t,n[11]*=t,n[15]*=t,this}determinant(){const t=this.elements,n=t[0],a=t[4],o=t[8],l=t[12],c=t[1],f=t[5],p=t[9],d=t[13],_=t[2],g=t[6],v=t[10],S=t[14],T=t[3],M=t[7],y=t[11],x=t[15],D=p*S-d*v,w=f*S-d*g,C=f*v-p*g,R=c*S-d*_,P=c*v-p*_,U=c*g-f*_;return n*(M*D-y*w+x*C)-a*(T*D-y*R+x*P)+o*(T*w-M*R+x*U)-l*(T*C-M*P+y*U)}transpose(){const t=this.elements;let n;return n=t[1],t[1]=t[4],t[4]=n,n=t[2],t[2]=t[8],t[8]=n,n=t[6],t[6]=t[9],t[9]=n,n=t[3],t[3]=t[12],t[12]=n,n=t[7],t[7]=t[13],t[13]=n,n=t[11],t[11]=t[14],t[14]=n,this}setPosition(t,n,a){const o=this.elements;return t.isVector3?(o[12]=t.x,o[13]=t.y,o[14]=t.z):(o[12]=t,o[13]=n,o[14]=a),this}invert(){const t=this.elements,n=t[0],a=t[1],o=t[2],l=t[3],c=t[4],f=t[5],p=t[6],d=t[7],_=t[8],g=t[9],v=t[10],S=t[11],T=t[12],M=t[13],y=t[14],x=t[15],D=g*y*d-M*v*d+M*p*S-f*y*S-g*p*x+f*v*x,w=T*v*d-_*y*d-T*p*S+c*y*S+_*p*x-c*v*x,C=_*M*d-T*g*d+T*f*S-c*M*S-_*f*x+c*g*x,R=T*g*p-_*M*p-T*f*v+c*M*v+_*f*y-c*g*y,P=n*D+a*w+o*C+l*R;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/P;return t[0]=D*U,t[1]=(M*v*l-g*y*l-M*o*S+a*y*S+g*o*x-a*v*x)*U,t[2]=(f*y*l-M*p*l+M*o*d-a*y*d-f*o*x+a*p*x)*U,t[3]=(g*p*l-f*v*l-g*o*d+a*v*d+f*o*S-a*p*S)*U,t[4]=w*U,t[5]=(_*y*l-T*v*l+T*o*S-n*y*S-_*o*x+n*v*x)*U,t[6]=(T*p*l-c*y*l-T*o*d+n*y*d+c*o*x-n*p*x)*U,t[7]=(c*v*l-_*p*l+_*o*d-n*v*d-c*o*S+n*p*S)*U,t[8]=C*U,t[9]=(T*g*l-_*M*l-T*a*S+n*M*S+_*a*x-n*g*x)*U,t[10]=(c*M*l-T*f*l+T*a*d-n*M*d-c*a*x+n*f*x)*U,t[11]=(_*f*l-c*g*l-_*a*d+n*g*d+c*a*S-n*f*S)*U,t[12]=R*U,t[13]=(_*M*o-T*g*o+T*a*v-n*M*v-_*a*y+n*g*y)*U,t[14]=(T*f*o-c*M*o-T*a*p+n*M*p+c*a*y-n*f*y)*U,t[15]=(c*g*o-_*f*o+_*a*p-n*g*p-c*a*v+n*f*v)*U,this}scale(t){const n=this.elements,a=t.x,o=t.y,l=t.z;return n[0]*=a,n[4]*=o,n[8]*=l,n[1]*=a,n[5]*=o,n[9]*=l,n[2]*=a,n[6]*=o,n[10]*=l,n[3]*=a,n[7]*=o,n[11]*=l,this}getMaxScaleOnAxis(){const t=this.elements,n=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],a=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],o=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(n,a,o))}makeTranslation(t,n,a){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,n,0,0,1,a,0,0,0,1),this}makeRotationX(t){const n=Math.cos(t),a=Math.sin(t);return this.set(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1),this}makeRotationY(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1),this}makeRotationZ(t){const n=Math.cos(t),a=Math.sin(t);return this.set(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,n){const a=Math.cos(n),o=Math.sin(n),l=1-a,c=t.x,f=t.y,p=t.z,d=l*c,_=l*f;return this.set(d*c+a,d*f-o*p,d*p+o*f,0,d*f+o*p,_*f+a,_*p-o*c,0,d*p-o*f,_*p+o*c,l*p*p+a,0,0,0,0,1),this}makeScale(t,n,a){return this.set(t,0,0,0,0,n,0,0,0,0,a,0,0,0,0,1),this}makeShear(t,n,a,o,l,c){return this.set(1,a,l,0,t,1,c,0,n,o,1,0,0,0,0,1),this}compose(t,n,a){const o=this.elements,l=n._x,c=n._y,f=n._z,p=n._w,d=l+l,_=c+c,g=f+f,v=l*d,S=l*_,T=l*g,M=c*_,y=c*g,x=f*g,D=p*d,w=p*_,C=p*g,R=a.x,P=a.y,U=a.z;return o[0]=(1-(M+x))*R,o[1]=(S+C)*R,o[2]=(T-w)*R,o[3]=0,o[4]=(S-C)*P,o[5]=(1-(v+x))*P,o[6]=(y+D)*P,o[7]=0,o[8]=(T+w)*U,o[9]=(y-D)*U,o[10]=(1-(v+M))*U,o[11]=0,o[12]=t.x,o[13]=t.y,o[14]=t.z,o[15]=1,this}decompose(t,n,a){const o=this.elements;if(t.x=o[12],t.y=o[13],t.z=o[14],this.determinant()===0)return a.set(1,1,1),n.identity(),this;let l=Ao.set(o[0],o[1],o[2]).length();const c=Ao.set(o[4],o[5],o[6]).length(),f=Ao.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),Ji.copy(this);const d=1/l,_=1/c,g=1/f;return Ji.elements[0]*=d,Ji.elements[1]*=d,Ji.elements[2]*=d,Ji.elements[4]*=_,Ji.elements[5]*=_,Ji.elements[6]*=_,Ji.elements[8]*=g,Ji.elements[9]*=g,Ji.elements[10]*=g,n.setFromRotationMatrix(Ji),a.x=l,a.y=c,a.z=f,this}makePerspective(t,n,a,o,l,c,f=pa,p=!1){const d=this.elements,_=2*l/(n-t),g=2*l/(a-o),v=(n+t)/(n-t),S=(a+o)/(a-o);let T,M;if(p)T=l/(c-l),M=c*l/(c-l);else if(f===pa)T=-(c+l)/(c-l),M=-2*c*l/(c-l);else if(f===Af)T=-c/(c-l),M=-c*l/(c-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=v,d[12]=0,d[1]=0,d[5]=g,d[9]=S,d[13]=0,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(t,n,a,o,l,c,f=pa,p=!1){const d=this.elements,_=2/(n-t),g=2/(a-o),v=-(n+t)/(n-t),S=-(a+o)/(a-o);let T,M;if(p)T=1/(c-l),M=c/(c-l);else if(f===pa)T=-2/(c-l),M=-(c+l)/(c-l);else if(f===Af)T=-1/(c-l),M=-l/(c-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return d[0]=_,d[4]=0,d[8]=0,d[12]=v,d[1]=0,d[5]=g,d[9]=0,d[13]=S,d[2]=0,d[6]=0,d[10]=T,d[14]=M,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(t){const n=this.elements,a=t.elements;for(let o=0;o<16;o++)if(n[o]!==a[o])return!1;return!0}fromArray(t,n=0){for(let a=0;a<16;a++)this.elements[a]=t[a+n];return this}toArray(t=[],n=0){const a=this.elements;return t[n]=a[0],t[n+1]=a[1],t[n+2]=a[2],t[n+3]=a[3],t[n+4]=a[4],t[n+5]=a[5],t[n+6]=a[6],t[n+7]=a[7],t[n+8]=a[8],t[n+9]=a[9],t[n+10]=a[10],t[n+11]=a[11],t[n+12]=a[12],t[n+13]=a[13],t[n+14]=a[14],t[n+15]=a[15],t}}const Ao=new ot,Ji=new Mn,pb=new ot(0,0,0),mb=new ot(1,1,1),Pr=new ot,Qc=new ot,xi=new ot,Zx=new Mn,jx=new Cu;class er{constructor(t=0,n=0,a=0,o=er.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=n,this._z=a,this._order=o}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,n,a,o=this._order){return this._x=t,this._y=n,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,n=this._order,a=!0){const o=t.elements,l=o[0],c=o[4],f=o[8],p=o[1],d=o[5],_=o[9],g=o[2],v=o[6],S=o[10];switch(n){case"XYZ":this._y=Math.asin(ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,S),this._z=Math.atan2(-c,l)):(this._x=Math.atan2(v,d),this._z=0);break;case"YXZ":this._x=Math.asin(-ye(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,d)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(ye(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-c,d)):(this._y=0,this._z=Math.atan2(p,l));break;case"ZYX":this._y=Math.asin(-ye(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(v,S),this._z=Math.atan2(p,l)):(this._x=0,this._z=Math.atan2(-c,d));break;case"YZX":this._z=Math.asin(ye(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,d),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(v,d),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-_,S),this._y=0);break;default:re("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,a===!0&&this._onChangeCallback(),this}setFromQuaternion(t,n,a){return Zx.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zx,n,a)}setFromVector3(t,n=this._order){return this.set(t.x,t.y,t.z,n)}reorder(t){return jx.setFromEuler(this),this.setFromQuaternion(jx,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],n=0){return t[n]=this._x,t[n+1]=this._y,t[n+2]=this._z,t[n+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}er.DEFAULT_ORDER="XYZ";class Ey{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let _b=0;const Kx=new ot,Ro=new Cu,Ga=new Mn,Jc=new ot,eu=new ot,gb=new ot,vb=new Cu,Qx=new ot(1,0,0),Jx=new ot(0,1,0),$x=new ot(0,0,1),tS={type:"added"},xb={type:"removed"},Co={type:"childadded",child:null},xp={type:"childremoved",child:null};class bi extends nl{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_b++}),this.uuid=Ru(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bi.DEFAULT_UP.clone();const t=new ot,n=new er,a=new Cu,o=new ot(1,1,1);function l(){a.setFromEuler(n,!1)}function c(){n.setFromQuaternion(a,void 0,!1)}n._onChange(l),a._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Mn},normalMatrix:{value:new ce}}),this.matrix=new Mn,this.matrixWorld=new Mn,this.matrixAutoUpdate=bi.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ey,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,n){this.quaternion.setFromAxisAngle(t,n)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,n){return Ro.setFromAxisAngle(t,n),this.quaternion.multiply(Ro),this}rotateOnWorldAxis(t,n){return Ro.setFromAxisAngle(t,n),this.quaternion.premultiply(Ro),this}rotateX(t){return this.rotateOnAxis(Qx,t)}rotateY(t){return this.rotateOnAxis(Jx,t)}rotateZ(t){return this.rotateOnAxis($x,t)}translateOnAxis(t,n){return Kx.copy(t).applyQuaternion(this.quaternion),this.position.add(Kx.multiplyScalar(n)),this}translateX(t){return this.translateOnAxis(Qx,t)}translateY(t){return this.translateOnAxis(Jx,t)}translateZ(t){return this.translateOnAxis($x,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ga.copy(this.matrixWorld).invert())}lookAt(t,n,a){t.isVector3?Jc.copy(t):Jc.set(t,n,a);const o=this.parent;this.updateWorldMatrix(!0,!1),eu.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ga.lookAt(eu,Jc,this.up):Ga.lookAt(Jc,eu,this.up),this.quaternion.setFromRotationMatrix(Ga),o&&(Ga.extractRotation(o.matrixWorld),Ro.setFromRotationMatrix(Ga),this.quaternion.premultiply(Ro.invert()))}add(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return t===this?(Ce("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(tS),Co.child=t,this.dispatchEvent(Co),Co.child=null):Ce("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const n=this.children.indexOf(t);return n!==-1&&(t.parent=null,this.children.splice(n,1),t.dispatchEvent(xb),xp.child=t,this.dispatchEvent(xp),xp.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ga.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ga.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ga),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(tS),Co.child=t,this.dispatchEvent(Co),Co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,n){if(this[t]===n)return this;for(let a=0,o=this.children.length;a<o;a++){const c=this.children[a].getObjectByProperty(t,n);if(c!==void 0)return c}}getObjectsByProperty(t,n,a=[]){this[t]===n&&a.push(this);const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].getObjectsByProperty(t,n,a);return a}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eu,t,gb),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eu,vb,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return t.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(t){t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].traverseVisible(t)}traverseAncestors(t){const n=this.parent;n!==null&&(t(n),n.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const n=this.children;for(let a=0,o=n.length;a<o;a++)n[a].updateMatrixWorld(t)}updateWorldMatrix(t,n){const a=this.parent;if(t===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const o=this.children;for(let l=0,c=o.length;l<c;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(t){const n=t===void 0||typeof t=="string",a={};n&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(t),o.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(t)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(t.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let d=0,_=p.length;d<_;d++){const g=p[d];l(t.shapes,g)}else l(t.shapes,p)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(t.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,d=this.material.length;p<d;p++)f.push(l(t.materials,this.material[p]));o.material=f}else o.material=l(t.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(t).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];o.animations.push(l(t.animations,p))}}if(n){const f=c(t.geometries),p=c(t.materials),d=c(t.textures),_=c(t.images),g=c(t.shapes),v=c(t.skeletons),S=c(t.animations),T=c(t.nodes);f.length>0&&(a.geometries=f),p.length>0&&(a.materials=p),d.length>0&&(a.textures=d),_.length>0&&(a.images=_),g.length>0&&(a.shapes=g),v.length>0&&(a.skeletons=v),S.length>0&&(a.animations=S),T.length>0&&(a.nodes=T)}return a.object=o,a;function c(f){const p=[];for(const d in f){const _=f[d];delete _.metadata,p.push(_)}return p}}clone(t){return new this.constructor().copy(this,t)}copy(t,n=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),n===!0)for(let a=0;a<t.children.length;a++){const o=t.children[a];this.add(o.clone())}return this}}bi.DEFAULT_UP=new ot(0,1,0);bi.DEFAULT_MATRIX_AUTO_UPDATE=!0;bi.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $i=new ot,ka=new ot,Sp=new ot,Xa=new ot,wo=new ot,Do=new ot,eS=new ot,yp=new ot,Mp=new ot,Ep=new ot,Tp=new pn,bp=new pn,Ap=new pn;class ea{constructor(t=new ot,n=new ot,a=new ot){this.a=t,this.b=n,this.c=a}static getNormal(t,n,a,o){o.subVectors(a,n),$i.subVectors(t,n),o.cross($i);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(t,n,a,o,l){$i.subVectors(o,n),ka.subVectors(a,n),Sp.subVectors(t,n);const c=$i.dot($i),f=$i.dot(ka),p=$i.dot(Sp),d=ka.dot(ka),_=ka.dot(Sp),g=c*d-f*f;if(g===0)return l.set(0,0,0),null;const v=1/g,S=(d*p-f*_)*v,T=(c*_-f*p)*v;return l.set(1-S-T,T,S)}static containsPoint(t,n,a,o){return this.getBarycoord(t,n,a,o,Xa)===null?!1:Xa.x>=0&&Xa.y>=0&&Xa.x+Xa.y<=1}static getInterpolation(t,n,a,o,l,c,f,p){return this.getBarycoord(t,n,a,o,Xa)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(l,Xa.x),p.addScaledVector(c,Xa.y),p.addScaledVector(f,Xa.z),p)}static getInterpolatedAttribute(t,n,a,o,l,c){return Tp.setScalar(0),bp.setScalar(0),Ap.setScalar(0),Tp.fromBufferAttribute(t,n),bp.fromBufferAttribute(t,a),Ap.fromBufferAttribute(t,o),c.setScalar(0),c.addScaledVector(Tp,l.x),c.addScaledVector(bp,l.y),c.addScaledVector(Ap,l.z),c}static isFrontFacing(t,n,a,o){return $i.subVectors(a,n),ka.subVectors(t,n),$i.cross(ka).dot(o)<0}set(t,n,a){return this.a.copy(t),this.b.copy(n),this.c.copy(a),this}setFromPointsAndIndices(t,n,a,o){return this.a.copy(t[n]),this.b.copy(t[a]),this.c.copy(t[o]),this}setFromAttributeAndIndices(t,n,a,o){return this.a.fromBufferAttribute(t,n),this.b.fromBufferAttribute(t,a),this.c.fromBufferAttribute(t,o),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $i.subVectors(this.c,this.b),ka.subVectors(this.a,this.b),$i.cross(ka).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ea.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,n){return ea.getBarycoord(t,this.a,this.b,this.c,n)}getInterpolation(t,n,a,o,l){return ea.getInterpolation(t,this.a,this.b,this.c,n,a,o,l)}containsPoint(t){return ea.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ea.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,n){const a=this.a,o=this.b,l=this.c;let c,f;wo.subVectors(o,a),Do.subVectors(l,a),yp.subVectors(t,a);const p=wo.dot(yp),d=Do.dot(yp);if(p<=0&&d<=0)return n.copy(a);Mp.subVectors(t,o);const _=wo.dot(Mp),g=Do.dot(Mp);if(_>=0&&g<=_)return n.copy(o);const v=p*g-_*d;if(v<=0&&p>=0&&_<=0)return c=p/(p-_),n.copy(a).addScaledVector(wo,c);Ep.subVectors(t,l);const S=wo.dot(Ep),T=Do.dot(Ep);if(T>=0&&S<=T)return n.copy(l);const M=S*d-p*T;if(M<=0&&d>=0&&T<=0)return f=d/(d-T),n.copy(a).addScaledVector(Do,f);const y=_*T-S*g;if(y<=0&&g-_>=0&&S-T>=0)return eS.subVectors(l,o),f=(g-_)/(g-_+(S-T)),n.copy(o).addScaledVector(eS,f);const x=1/(y+M+v);return c=M*x,f=v*x,n.copy(a).addScaledVector(wo,c).addScaledVector(Do,f)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ty={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},$c={h:0,s:0,l:0};function Rp(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*6*(2/3-n):r}class Ve{constructor(t,n,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,n,a)}set(t,n,a){if(n===void 0&&a===void 0){const o=t;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(t,n,a);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,n=Vi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,be.colorSpaceToWorking(this,n),this}setRGB(t,n,a,o=be.workingColorSpace){return this.r=t,this.g=n,this.b=a,be.colorSpaceToWorking(this,o),this}setHSL(t,n,a,o=be.workingColorSpace){if(t=rb(t,1),n=ye(n,0,1),a=ye(a,0,1),n===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+n):a+n-a*n,c=2*a-l;this.r=Rp(c,l,t+1/3),this.g=Rp(c,l,t),this.b=Rp(c,l,t-1/3)}return be.colorSpaceToWorking(this,o),this}setStyle(t,n=Vi){function a(l){l!==void 0&&parseFloat(l)<1&&re("Color: Alpha component of "+t+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(t)){let l;const c=o[1],f=o[2];switch(c){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,n);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,n);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,n);break;default:re("Color: Unknown color model "+t)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(t)){const l=o[1],c=l.length;if(c===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,n);if(c===6)return this.setHex(parseInt(l,16),n);re("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,n);return this}setColorName(t,n=Vi){const a=Ty[t.toLowerCase()];return a!==void 0?this.setHex(a,n):re("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Qa(t.r),this.g=Qa(t.g),this.b=Qa(t.b),this}copyLinearToSRGB(t){return this.r=Ho(t.r),this.g=Ho(t.g),this.b=Ho(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Vi){return be.workingToColorSpace(Wn.copy(this),t),Math.round(ye(Wn.r*255,0,255))*65536+Math.round(ye(Wn.g*255,0,255))*256+Math.round(ye(Wn.b*255,0,255))}getHexString(t=Vi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,n=be.workingColorSpace){be.workingToColorSpace(Wn.copy(this),n);const a=Wn.r,o=Wn.g,l=Wn.b,c=Math.max(a,o,l),f=Math.min(a,o,l);let p,d;const _=(f+c)/2;if(f===c)p=0,d=0;else{const g=c-f;switch(d=_<=.5?g/(c+f):g/(2-c-f),c){case a:p=(o-l)/g+(o<l?6:0);break;case o:p=(l-a)/g+2;break;case l:p=(a-o)/g+4;break}p/=6}return t.h=p,t.s=d,t.l=_,t}getRGB(t,n=be.workingColorSpace){return be.workingToColorSpace(Wn.copy(this),n),t.r=Wn.r,t.g=Wn.g,t.b=Wn.b,t}getStyle(t=Vi){be.workingToColorSpace(Wn.copy(this),t);const n=Wn.r,a=Wn.g,o=Wn.b;return t!==Vi?`color(${t} ${n.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(t,n,a){return this.getHSL(Fr),this.setHSL(Fr.h+t,Fr.s+n,Fr.l+a)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,n){return this.r=t.r+n.r,this.g=t.g+n.g,this.b=t.b+n.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,n){return this.r+=(t.r-this.r)*n,this.g+=(t.g-this.g)*n,this.b+=(t.b-this.b)*n,this}lerpColors(t,n,a){return this.r=t.r+(n.r-t.r)*a,this.g=t.g+(n.g-t.g)*a,this.b=t.b+(n.b-t.b)*a,this}lerpHSL(t,n){this.getHSL(Fr),t.getHSL($c);const a=up(Fr.h,$c.h,n),o=up(Fr.s,$c.s,n),l=up(Fr.l,$c.l,n);return this.setHSL(a,o,l),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const n=this.r,a=this.g,o=this.b,l=t.elements;return this.r=l[0]*n+l[3]*a+l[6]*o,this.g=l[1]*n+l[4]*a+l[7]*o,this.b=l[2]*n+l[5]*a+l[8]*o,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,n=0){return this.r=t[n],this.g=t[n+1],this.b=t[n+2],this}toArray(t=[],n=0){return t[n]=this.r,t[n+1]=this.g,t[n+2]=this.b,t}fromBufferAttribute(t,n){return this.r=t.getX(n),this.g=t.getY(n),this.b=t.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Wn=new Ve;Ve.NAMES=Ty;let Sb=0;class Gf extends nl{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Sb++}),this.uuid=Ru(),this.name="",this.type="Material",this.blending=Bo,this.side=qr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Qp,this.blendDst=Jp,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ve(0,0,0),this.blendAlpha=0,this.depthFunc=Xo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Hx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=yo,this.stencilZFail=yo,this.stencilZPass=yo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const n in t){const a=t[n];if(a===void 0){re(`Material: parameter '${n}' has value of undefined.`);continue}const o=this[n];if(o===void 0){re(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[n]=a}}toJSON(t){const n=t===void 0||typeof t=="string";n&&(t={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(t).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(t).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(t).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(t).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(t).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.shadowSide!==null&&(a.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),this.blending!==Bo&&(a.blending=this.blending),this.side!==qr&&(a.side=this.side),this.vertexColors===!0&&(a.vertexColors=!0),this.opacity<1&&(a.opacity=this.opacity),this.transparent===!0&&(a.transparent=!0),this.blendSrc!==Qp&&(a.blendSrc=this.blendSrc),this.blendDst!==Jp&&(a.blendDst=this.blendDst),this.blendEquation!==bs&&(a.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(a.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(a.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(a.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(a.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(a.blendAlpha=this.blendAlpha),this.depthFunc!==Xo&&(a.depthFunc=this.depthFunc),this.depthTest===!1&&(a.depthTest=this.depthTest),this.depthWrite===!1&&(a.depthWrite=this.depthWrite),this.colorWrite===!1&&(a.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(a.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Hx&&(a.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(a.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(a.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==yo&&(a.stencilFail=this.stencilFail),this.stencilZFail!==yo&&(a.stencilZFail=this.stencilZFail),this.stencilZPass!==yo&&(a.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(a.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(a.rotation=this.rotation),this.polygonOffset===!0&&(a.polygonOffset=!0),this.polygonOffsetFactor!==0&&(a.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(a.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(a.linewidth=this.linewidth),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.dithering===!0&&(a.dithering=!0),this.alphaTest>0&&(a.alphaTest=this.alphaTest),this.alphaHash===!0&&(a.alphaHash=!0),this.alphaToCoverage===!0&&(a.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(a.premultipliedAlpha=!0),this.forceSinglePass===!0&&(a.forceSinglePass=!0),this.allowOverride===!1&&(a.allowOverride=!1),this.wireframe===!0&&(a.wireframe=!0),this.wireframeLinewidth>1&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(a.flatShading=!0),this.visible===!1&&(a.visible=!1),this.toneMapped===!1&&(a.toneMapped=!1),this.fog===!1&&(a.fog=!1),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const c=[];for(const f in l){const p=l[f];delete p.metadata,c.push(p)}return c}if(n){const l=o(t.textures),c=o(t.images);l.length>0&&(a.textures=l),c.length>0&&(a.images=c)}return a}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const n=t.clippingPlanes;let a=null;if(n!==null){const o=n.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=n[l].clone()}return this.clippingPlanes=a,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class by extends Gf{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new er,this.combine=ry,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Sn=new ot,tf=new Pe;let yb=0;class va{constructor(t,n,a=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:yb++}),this.name="",this.array=t,this.itemSize=n,this.count=t!==void 0?t.length/n:0,this.normalized=a,this.usage=Vx,this.updateRanges=[],this.gpuType=da,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,n){this.updateRanges.push({start:t,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,n,a){t*=this.itemSize,a*=n.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[t+o]=n.array[a+o];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let n=0,a=this.count;n<a;n++)tf.fromBufferAttribute(this,n),tf.applyMatrix3(t),this.setXY(n,tf.x,tf.y);else if(this.itemSize===3)for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix3(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyMatrix4(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyMatrix4(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}applyNormalMatrix(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.applyNormalMatrix(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}transformDirection(t){for(let n=0,a=this.count;n<a;n++)Sn.fromBufferAttribute(this,n),Sn.transformDirection(t),this.setXYZ(n,Sn.x,Sn.y,Sn.z);return this}set(t,n=0){return this.array.set(t,n),this}getComponent(t,n){let a=this.array[t*this.itemSize+n];return this.normalized&&(a=Jl(a,this.array)),a}setComponent(t,n,a){return this.normalized&&(a=ri(a,this.array)),this.array[t*this.itemSize+n]=a,this}getX(t){let n=this.array[t*this.itemSize];return this.normalized&&(n=Jl(n,this.array)),n}setX(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize]=n,this}getY(t){let n=this.array[t*this.itemSize+1];return this.normalized&&(n=Jl(n,this.array)),n}setY(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+1]=n,this}getZ(t){let n=this.array[t*this.itemSize+2];return this.normalized&&(n=Jl(n,this.array)),n}setZ(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+2]=n,this}getW(t){let n=this.array[t*this.itemSize+3];return this.normalized&&(n=Jl(n,this.array)),n}setW(t,n){return this.normalized&&(n=ri(n,this.array)),this.array[t*this.itemSize+3]=n,this}setXY(t,n,a){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),a=ri(a,this.array)),this.array[t+0]=n,this.array[t+1]=a,this}setXYZ(t,n,a,o){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),a=ri(a,this.array),o=ri(o,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this}setXYZW(t,n,a,o,l){return t*=this.itemSize,this.normalized&&(n=ri(n,this.array),a=ri(a,this.array),o=ri(o,this.array),l=ri(l,this.array)),this.array[t+0]=n,this.array[t+1]=a,this.array[t+2]=o,this.array[t+3]=l,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Vx&&(t.usage=this.usage),t}}class Ay extends va{constructor(t,n,a){super(new Uint16Array(t),n,a)}}class Ry extends va{constructor(t,n,a){super(new Uint32Array(t),n,a)}}class Ja extends va{constructor(t,n,a){super(new Float32Array(t),n,a)}}let Mb=0;const Bi=new Mn,Cp=new bi,Uo=new ot,Si=new wu,nu=new wu,Cn=new ot;class rr extends nl{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=Ru(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(yy(t)?Ry:Ay)(t,1):this.index=t,this}setIndirect(t,n=0){return this.indirect=t,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,n){return this.attributes[t]=n,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,n,a=0){this.groups.push({start:t,count:n,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(t,n){this.drawRange.start=t,this.drawRange.count=n}applyMatrix4(t){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(t),n.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ce().getNormalMatrix(t);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(t),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Bi.makeRotationFromQuaternion(t),this.applyMatrix4(Bi),this}rotateX(t){return Bi.makeRotationX(t),this.applyMatrix4(Bi),this}rotateY(t){return Bi.makeRotationY(t),this.applyMatrix4(Bi),this}rotateZ(t){return Bi.makeRotationZ(t),this.applyMatrix4(Bi),this}translate(t,n,a){return Bi.makeTranslation(t,n,a),this.applyMatrix4(Bi),this}scale(t,n,a){return Bi.makeScale(t,n,a),this.applyMatrix4(Bi),this}lookAt(t){return Cp.lookAt(t),Cp.updateMatrix(),this.applyMatrix4(Cp.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Uo).negate(),this.translate(Uo.x,Uo.y,Uo.z),this}setFromPoints(t){const n=this.getAttribute("position");if(n===void 0){const a=[];for(let o=0,l=t.length;o<l;o++){const c=t[o];a.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Ja(a,3))}else{const a=Math.min(t.length,n.count);for(let o=0;o<a;o++){const l=t[o];n.setXYZ(o,l.x,l.y,l.z||0)}t.length>n.count&&re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new wu);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ot(-1/0,-1/0,-1/0),new ot(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),n)for(let a=0,o=n.length;a<o;a++){const l=n[a];Si.setFromBufferAttribute(l),this.morphTargetsRelative?(Cn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Cn),Cn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Cn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ce('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new y_);const t=this.attributes.position,n=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Ce("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ot,1/0);return}if(t){const a=this.boundingSphere.center;if(Si.setFromBufferAttribute(t),n)for(let l=0,c=n.length;l<c;l++){const f=n[l];nu.setFromBufferAttribute(f),this.morphTargetsRelative?(Cn.addVectors(Si.min,nu.min),Si.expandByPoint(Cn),Cn.addVectors(Si.max,nu.max),Si.expandByPoint(Cn)):(Si.expandByPoint(nu.min),Si.expandByPoint(nu.max))}Si.getCenter(a);let o=0;for(let l=0,c=t.count;l<c;l++)Cn.fromBufferAttribute(t,l),o=Math.max(o,a.distanceToSquared(Cn));if(n)for(let l=0,c=n.length;l<c;l++){const f=n[l],p=this.morphTargetsRelative;for(let d=0,_=f.count;d<_;d++)Cn.fromBufferAttribute(f,d),p&&(Uo.fromBufferAttribute(t,d),Cn.add(Uo)),o=Math.max(o,a.distanceToSquared(Cn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ce('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,n=this.attributes;if(t===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ce("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=n.position,o=n.normal,l=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new va(new Float32Array(4*a.count),4));const c=this.getAttribute("tangent"),f=[],p=[];for(let F=0;F<a.count;F++)f[F]=new ot,p[F]=new ot;const d=new ot,_=new ot,g=new ot,v=new Pe,S=new Pe,T=new Pe,M=new ot,y=new ot;function x(F,b,L){d.fromBufferAttribute(a,F),_.fromBufferAttribute(a,b),g.fromBufferAttribute(a,L),v.fromBufferAttribute(l,F),S.fromBufferAttribute(l,b),T.fromBufferAttribute(l,L),_.sub(d),g.sub(d),S.sub(v),T.sub(v);const V=1/(S.x*T.y-T.x*S.y);isFinite(V)&&(M.copy(_).multiplyScalar(T.y).addScaledVector(g,-S.y).multiplyScalar(V),y.copy(g).multiplyScalar(S.x).addScaledVector(_,-T.x).multiplyScalar(V),f[F].add(M),f[b].add(M),f[L].add(M),p[F].add(y),p[b].add(y),p[L].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:t.count}]);for(let F=0,b=D.length;F<b;++F){const L=D[F],V=L.start,Y=L.count;for(let Z=V,st=V+Y;Z<st;Z+=3)x(t.getX(Z+0),t.getX(Z+1),t.getX(Z+2))}const w=new ot,C=new ot,R=new ot,P=new ot;function U(F){R.fromBufferAttribute(o,F),P.copy(R);const b=f[F];w.copy(b),w.sub(R.multiplyScalar(R.dot(b))).normalize(),C.crossVectors(P,b);const V=C.dot(p[F])<0?-1:1;c.setXYZW(F,w.x,w.y,w.z,V)}for(let F=0,b=D.length;F<b;++F){const L=D[F],V=L.start,Y=L.count;for(let Z=V,st=V+Y;Z<st;Z+=3)U(t.getX(Z+0)),U(t.getX(Z+1)),U(t.getX(Z+2))}}computeVertexNormals(){const t=this.index,n=this.getAttribute("position");if(n!==void 0){let a=this.getAttribute("normal");if(a===void 0)a=new va(new Float32Array(n.count*3),3),this.setAttribute("normal",a);else for(let v=0,S=a.count;v<S;v++)a.setXYZ(v,0,0,0);const o=new ot,l=new ot,c=new ot,f=new ot,p=new ot,d=new ot,_=new ot,g=new ot;if(t)for(let v=0,S=t.count;v<S;v+=3){const T=t.getX(v+0),M=t.getX(v+1),y=t.getX(v+2);o.fromBufferAttribute(n,T),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,y),_.subVectors(c,l),g.subVectors(o,l),_.cross(g),f.fromBufferAttribute(a,T),p.fromBufferAttribute(a,M),d.fromBufferAttribute(a,y),f.add(_),p.add(_),d.add(_),a.setXYZ(T,f.x,f.y,f.z),a.setXYZ(M,p.x,p.y,p.z),a.setXYZ(y,d.x,d.y,d.z)}else for(let v=0,S=n.count;v<S;v+=3)o.fromBufferAttribute(n,v+0),l.fromBufferAttribute(n,v+1),c.fromBufferAttribute(n,v+2),_.subVectors(c,l),g.subVectors(o,l),_.cross(g),a.setXYZ(v+0,_.x,_.y,_.z),a.setXYZ(v+1,_.x,_.y,_.z),a.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let n=0,a=t.count;n<a;n++)Cn.fromBufferAttribute(t,n),Cn.normalize(),t.setXYZ(n,Cn.x,Cn.y,Cn.z)}toNonIndexed(){function t(f,p){const d=f.array,_=f.itemSize,g=f.normalized,v=new d.constructor(p.length*_);let S=0,T=0;for(let M=0,y=p.length;M<y;M++){f.isInterleavedBufferAttribute?S=p[M]*f.data.stride+f.offset:S=p[M]*_;for(let x=0;x<_;x++)v[T++]=d[S++]}return new va(v,_,g)}if(this.index===null)return re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rr,a=this.index.array,o=this.attributes;for(const f in o){const p=o[f],d=t(p,a);n.setAttribute(f,d)}const l=this.morphAttributes;for(const f in l){const p=[],d=l[f];for(let _=0,g=d.length;_<g;_++){const v=d[_],S=t(v,a);p.push(S)}n.morphAttributes[f]=p}n.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let f=0,p=c.length;f<p;f++){const d=c[f];n.addGroup(d.start,d.count,d.materialIndex)}return n}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const d in p)p[d]!==void 0&&(t[d]=p[d]);return t}t.data={attributes:{}};const n=this.index;n!==null&&(t.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const a=this.attributes;for(const p in a){const d=a[p];t.data.attributes[p]=d.toJSON(t.data)}const o={};let l=!1;for(const p in this.morphAttributes){const d=this.morphAttributes[p],_=[];for(let g=0,v=d.length;g<v;g++){const S=d[g];_.push(S.toJSON(t.data))}_.length>0&&(o[p]=_,l=!0)}l&&(t.data.morphAttributes=o,t.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(t.data.groups=JSON.parse(JSON.stringify(c)));const f=this.boundingSphere;return f!==null&&(t.data.boundingSphere=f.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=t.name;const a=t.index;a!==null&&this.setIndex(a.clone());const o=t.attributes;for(const d in o){const _=o[d];this.setAttribute(d,_.clone(n))}const l=t.morphAttributes;for(const d in l){const _=[],g=l[d];for(let v=0,S=g.length;v<S;v++)_.push(g[v].clone(n));this.morphAttributes[d]=_}this.morphTargetsRelative=t.morphTargetsRelative;const c=t.groups;for(let d=0,_=c.length;d<_;d++){const g=c[d];this.addGroup(g.start,g.count,g.materialIndex)}const f=t.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=t.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const nS=new Mn,gs=new db,ef=new y_,iS=new ot,nf=new ot,af=new ot,rf=new ot,wp=new ot,sf=new ot,aS=new ot,of=new ot;class Sa extends bi{constructor(t=new rr,n=new by){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,n){return super.copy(t,n),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,a=Object.keys(n);if(a.length>0){const o=n[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,c=o.length;l<c;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(t,n){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,c=a.morphTargetsRelative;n.fromBufferAttribute(o,t);const f=this.morphTargetInfluences;if(l&&f){sf.set(0,0,0);for(let p=0,d=l.length;p<d;p++){const _=f[p],g=l[p];_!==0&&(wp.fromBufferAttribute(g,t),c?sf.addScaledVector(wp,_):sf.addScaledVector(wp.sub(n),_))}n.add(sf)}return n}raycast(t,n){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ef.copy(a.boundingSphere),ef.applyMatrix4(l),gs.copy(t.ray).recast(t.near),!(ef.containsPoint(gs.origin)===!1&&(gs.intersectSphere(ef,iS)===null||gs.origin.distanceToSquared(iS)>(t.far-t.near)**2))&&(nS.copy(l).invert(),gs.copy(t.ray).applyMatrix4(nS),!(a.boundingBox!==null&&gs.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(t,n,gs)))}_computeIntersections(t,n,a){let o;const l=this.geometry,c=this.material,f=l.index,p=l.attributes.position,d=l.attributes.uv,_=l.attributes.uv1,g=l.attributes.normal,v=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const y=v[T],x=c[y.materialIndex],D=Math.max(y.start,S.start),w=Math.min(f.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,R=w;C<R;C+=3){const P=f.getX(C),U=f.getX(C+1),F=f.getX(C+2);o=lf(this,x,t,a,d,_,g,P,U,F),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),M=Math.min(f.count,S.start+S.count);for(let y=T,x=M;y<x;y+=3){const D=f.getX(y),w=f.getX(y+1),C=f.getX(y+2);o=lf(this,c,t,a,d,_,g,D,w,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}else if(p!==void 0)if(Array.isArray(c))for(let T=0,M=v.length;T<M;T++){const y=v[T],x=c[y.materialIndex],D=Math.max(y.start,S.start),w=Math.min(p.count,Math.min(y.start+y.count,S.start+S.count));for(let C=D,R=w;C<R;C+=3){const P=C,U=C+1,F=C+2;o=lf(this,x,t,a,d,_,g,P,U,F),o&&(o.faceIndex=Math.floor(C/3),o.face.materialIndex=y.materialIndex,n.push(o))}}else{const T=Math.max(0,S.start),M=Math.min(p.count,S.start+S.count);for(let y=T,x=M;y<x;y+=3){const D=y,w=y+1,C=y+2;o=lf(this,c,t,a,d,_,g,D,w,C),o&&(o.faceIndex=Math.floor(y/3),n.push(o))}}}}function Eb(r,t,n,a,o,l,c,f){let p;if(t.side===si?p=a.intersectTriangle(c,l,o,!0,f):p=a.intersectTriangle(o,l,c,t.side===qr,f),p===null)return null;of.copy(f),of.applyMatrix4(r.matrixWorld);const d=n.ray.origin.distanceTo(of);return d<n.near||d>n.far?null:{distance:d,point:of.clone(),object:r}}function lf(r,t,n,a,o,l,c,f,p,d){r.getVertexPosition(f,nf),r.getVertexPosition(p,af),r.getVertexPosition(d,rf);const _=Eb(r,t,n,a,nf,af,rf,aS);if(_){const g=new ot;ea.getBarycoord(aS,nf,af,rf,g),o&&(_.uv=ea.getInterpolatedAttribute(o,f,p,d,g,new Pe)),l&&(_.uv1=ea.getInterpolatedAttribute(l,f,p,d,g,new Pe)),c&&(_.normal=ea.getInterpolatedAttribute(c,f,p,d,g,new ot),_.normal.dot(a.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:d,normal:new ot,materialIndex:0};ea.getNormal(nf,af,rf,v.normal),_.face=v,_.barycoord=g}return _}class Du extends rr{constructor(t=1,n=1,a=1,o=1,l=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:n,depth:a,widthSegments:o,heightSegments:l,depthSegments:c};const f=this;o=Math.floor(o),l=Math.floor(l),c=Math.floor(c);const p=[],d=[],_=[],g=[];let v=0,S=0;T("z","y","x",-1,-1,a,n,t,c,l,0),T("z","y","x",1,-1,a,n,-t,c,l,1),T("x","z","y",1,1,t,a,n,o,c,2),T("x","z","y",1,-1,t,a,-n,o,c,3),T("x","y","z",1,-1,t,n,a,o,l,4),T("x","y","z",-1,-1,t,n,-a,o,l,5),this.setIndex(p),this.setAttribute("position",new Ja(d,3)),this.setAttribute("normal",new Ja(_,3)),this.setAttribute("uv",new Ja(g,2));function T(M,y,x,D,w,C,R,P,U,F,b){const L=C/U,V=R/F,Y=C/2,Z=R/2,st=P/2,it=U+1,I=F+1;let H=0,Q=0;const xt=new ot;for(let gt=0;gt<I;gt++){const z=gt*V-Z;for(let J=0;J<it;J++){const ht=J*L-Y;xt[M]=ht*D,xt[y]=z*w,xt[x]=st,d.push(xt.x,xt.y,xt.z),xt[M]=0,xt[y]=0,xt[x]=P>0?1:-1,_.push(xt.x,xt.y,xt.z),g.push(J/U),g.push(1-gt/F),H+=1}}for(let gt=0;gt<F;gt++)for(let z=0;z<U;z++){const J=v+z+it*gt,ht=v+z+it*(gt+1),yt=v+(z+1)+it*(gt+1),Ct=v+(z+1)+it*gt;p.push(J,ht,Ct),p.push(ht,yt,Ct),Q+=6}f.addGroup(S,Q,b),S+=Q,v+=H}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Du(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Zo(r){const t={};for(const n in r){t[n]={};for(const a in r[n]){const o=r[n][a];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[n][a]=null):t[n][a]=o.clone():Array.isArray(o)?t[n][a]=o.slice():t[n][a]=o}}return t}function Kn(r){const t={};for(let n=0;n<r.length;n++){const a=Zo(r[n]);for(const o in a)t[o]=a[o]}return t}function Tb(r){const t=[];for(let n=0;n<r.length;n++)t.push(r[n].clone());return t}function Cy(r){const t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:be.workingColorSpace}const bb={clone:Zo,merge:Kn};var Ab=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Rb=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ia extends Gf{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ab,this.fragmentShader=Rb,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zo(t.uniforms),this.uniformsGroups=Tb(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){const n=super.toJSON(t);n.glslVersion=this.glslVersion,n.uniforms={};for(const o in this.uniforms){const c=this.uniforms[o].value;c&&c.isTexture?n.uniforms[o]={type:"t",value:c.toJSON(t).uuid}:c&&c.isColor?n.uniforms[o]={type:"c",value:c.getHex()}:c&&c.isVector2?n.uniforms[o]={type:"v2",value:c.toArray()}:c&&c.isVector3?n.uniforms[o]={type:"v3",value:c.toArray()}:c&&c.isVector4?n.uniforms[o]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?n.uniforms[o]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?n.uniforms[o]={type:"m4",value:c.toArray()}:n.uniforms[o]={value:c}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(n.extensions=a),n}}class wy extends bi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mn,this.projectionMatrix=new Mn,this.projectionMatrixInverse=new Mn,this.coordinateSystem=pa,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,n){return super.copy(t,n),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,n){super.updateWorldMatrix(t,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const zr=new ot,rS=new Pe,sS=new Pe;class ta extends wy{constructor(t=50,n=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const n=.5*this.getFilmHeight()/t;this.fov=Gm*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(lp*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Gm*2*Math.atan(Math.tan(lp*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,n,a){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,n){return this.getViewBounds(t,rS,sS),n.subVectors(sS,rS)}setViewOffset(t,n,a,o,l,c){this.aspect=t/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let n=t*Math.tan(lp*.5*this.fov)/this.zoom,a=2*n,o=this.aspect*a,l=-.5*o;const c=this.view;if(this.view!==null&&this.view.enabled){const p=c.fullWidth,d=c.fullHeight;l+=c.offsetX*o/p,n-=c.offsetY*a/d,o*=c.width/p,a*=c.height/d}const f=this.filmOffset;f!==0&&(l+=t*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,n,n-a,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Lo=-90,No=1;class Cb extends bi{constructor(t,n,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ta(Lo,No,t,n);o.layers=this.layers,this.add(o);const l=new ta(Lo,No,t,n);l.layers=this.layers,this.add(l);const c=new ta(Lo,No,t,n);c.layers=this.layers,this.add(c);const f=new ta(Lo,No,t,n);f.layers=this.layers,this.add(f);const p=new ta(Lo,No,t,n);p.layers=this.layers,this.add(p);const d=new ta(Lo,No,t,n);d.layers=this.layers,this.add(d)}updateCoordinateSystem(){const t=this.coordinateSystem,n=this.children.concat(),[a,o,l,c,f,p]=n;for(const d of n)this.remove(d);if(t===pa)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(t===Af)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const d of n)this.add(d),d.updateMatrixWorld()}update(t,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[l,c,f,p,d,_]=this.children,g=t.getRenderTarget(),v=t.getActiveCubeFace(),S=t.getActiveMipmapLevel(),T=t.xr.enabled;t.xr.enabled=!1;const M=a.texture.generateMipmaps;a.texture.generateMipmaps=!1,t.setRenderTarget(a,0,o),t.render(n,l),t.setRenderTarget(a,1,o),t.render(n,c),t.setRenderTarget(a,2,o),t.render(n,f),t.setRenderTarget(a,3,o),t.render(n,p),t.setRenderTarget(a,4,o),t.render(n,d),a.texture.generateMipmaps=M,t.setRenderTarget(a,5,o),t.render(n,_),t.setRenderTarget(g,v,S),t.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class Dy extends Jn{constructor(t=[],n=Ps,a,o,l,c,f,p,d,_){super(t,n,a,o,l,c,f,p,d,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Uy extends ga{constructor(t=1,n={}){super(t,t,n),this.isWebGLCubeRenderTarget=!0;const a={width:t,height:t,depth:1},o=[a,a,a,a,a,a];this.texture=new Dy(o),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new Du(5,5,5),l=new ia({name:"CubemapFromEquirect",uniforms:Zo(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:si,blending:Ka});l.uniforms.tEquirect.value=n;const c=new Sa(o,l),f=n.minFilter;return n.minFilter===Rs&&(n.minFilter=Yn),new Cb(1,10,this).update(t,c),n.minFilter=f,c.geometry.dispose(),c.material.dispose(),this}clear(t,n=!0,a=!0,o=!0){const l=t.getRenderTarget();for(let c=0;c<6;c++)t.setRenderTarget(this,c),t.clear(n,a,o);t.setRenderTarget(l)}}class uf extends bi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wb={type:"move"};class Dp{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uf,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uf,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ot,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ot),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uf,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ot,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ot),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const n=this._hand;if(n)for(const a of t.hand.values())this._getHandJoint(n,a)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,n,a){let o=null,l=null,c=null;const f=this._targetRay,p=this._grip,d=this._hand;if(t&&n.session.visibilityState!=="visible-blurred"){if(d&&t.hand){c=!0;for(const M of t.hand.values()){const y=n.getJointPose(M,a),x=this._getHandJoint(d,M);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const _=d.joints["index-finger-tip"],g=d.joints["thumb-tip"],v=_.position.distanceTo(g.position),S=.02,T=.005;d.inputState.pinching&&v>S+T?(d.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!d.inputState.pinching&&v<=S-T&&(d.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else p!==null&&t.gripSpace&&(l=n.getPose(t.gripSpace,a),l!==null&&(p.matrix.fromArray(l.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,l.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(l.linearVelocity)):p.hasLinearVelocity=!1,l.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(l.angularVelocity)):p.hasAngularVelocity=!1));f!==null&&(o=n.getPose(t.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(wb)))}return f!==null&&(f.visible=o!==null),p!==null&&(p.visible=l!==null),d!==null&&(d.visible=c!==null),this}_getHandJoint(t,n){if(t.joints[n.jointName]===void 0){const a=new uf;a.matrixAutoUpdate=!1,a.visible=!1,t.joints[n.jointName]=a,t.add(a)}return t.joints[n.jointName]}}class Db extends bi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new er,this.environmentIntensity=1,this.environmentRotation=new er,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,n){return super.copy(t,n),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const n=super.toJSON(t);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Ub extends Jn{constructor(t=null,n=1,a=1,o,l,c,f,p,d=Hn,_=Hn,g,v){super(null,c,f,p,d,_,o,l,g,v),this.isDataTexture=!0,this.image={data:t,width:n,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Up=new ot,Lb=new ot,Nb=new ce;class Es{constructor(t=new ot(1,0,0),n=0){this.isPlane=!0,this.normal=t,this.constant=n}set(t,n){return this.normal.copy(t),this.constant=n,this}setComponents(t,n,a,o){return this.normal.set(t,n,a),this.constant=o,this}setFromNormalAndCoplanarPoint(t,n){return this.normal.copy(t),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(t,n,a){const o=Up.subVectors(a,n).cross(Lb.subVectors(t,n)).normalize();return this.setFromNormalAndCoplanarPoint(o,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,n){return n.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,n){const a=t.delta(Up),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(t.start)===0?n.copy(t.start):null;const l=-(t.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:n.copy(t.start).addScaledVector(a,l)}intersectsLine(t){const n=this.distanceToPoint(t.start),a=this.distanceToPoint(t.end);return n<0&&a>0||a<0&&n>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,n){const a=n||Nb.getNormalMatrix(t),o=this.coplanarPoint(Up).applyMatrix4(t),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const vs=new y_,Ob=new Pe(.5,.5),cf=new ot;class Ly{constructor(t=new Es,n=new Es,a=new Es,o=new Es,l=new Es,c=new Es){this.planes=[t,n,a,o,l,c]}set(t,n,a,o,l,c){const f=this.planes;return f[0].copy(t),f[1].copy(n),f[2].copy(a),f[3].copy(o),f[4].copy(l),f[5].copy(c),this}copy(t){const n=this.planes;for(let a=0;a<6;a++)n[a].copy(t.planes[a]);return this}setFromProjectionMatrix(t,n=pa,a=!1){const o=this.planes,l=t.elements,c=l[0],f=l[1],p=l[2],d=l[3],_=l[4],g=l[5],v=l[6],S=l[7],T=l[8],M=l[9],y=l[10],x=l[11],D=l[12],w=l[13],C=l[14],R=l[15];if(o[0].setComponents(d-c,S-_,x-T,R-D).normalize(),o[1].setComponents(d+c,S+_,x+T,R+D).normalize(),o[2].setComponents(d+f,S+g,x+M,R+w).normalize(),o[3].setComponents(d-f,S-g,x-M,R-w).normalize(),a)o[4].setComponents(p,v,y,C).normalize(),o[5].setComponents(d-p,S-v,x-y,R-C).normalize();else if(o[4].setComponents(d-p,S-v,x-y,R-C).normalize(),n===pa)o[5].setComponents(d+p,S+v,x+y,R+C).normalize();else if(n===Af)o[5].setComponents(p,v,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const n=t.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),vs.copy(n.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);const n=Ob.distanceTo(t.center);return vs.radius=.7071067811865476+n,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){const n=this.planes,a=t.center,o=-t.radius;for(let l=0;l<6;l++)if(n[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(t){const n=this.planes;for(let a=0;a<6;a++){const o=n[a];if(cf.x=o.normal.x>0?t.max.x:t.min.x,cf.y=o.normal.y>0?t.max.y:t.min.y,cf.z=o.normal.z>0?t.max.z:t.min.z,o.distanceToPoint(cf)<0)return!1}return!0}containsPoint(t){const n=this.planes;for(let a=0;a<6;a++)if(n[a].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xu extends Jn{constructor(t,n,a=xa,o,l,c,f=Hn,p=Hn,d,_=tr,g=1){if(_!==tr&&_!==Cs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:t,height:n,depth:g};super(v,o,l,c,f,p,_,a,d),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new S_(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const n=super.toJSON(t);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class Pb extends xu{constructor(t,n=xa,a=Ps,o,l,c=Hn,f=Hn,p,d=tr){const _={width:t,height:t,depth:1},g=[_,_,_,_,_,_];super(t,t,n,a,o,l,c,f,p,d),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}}class Ny extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Uu extends rr{constructor(t=1,n=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:n,widthSegments:a,heightSegments:o};const l=t/2,c=n/2,f=Math.floor(a),p=Math.floor(o),d=f+1,_=p+1,g=t/f,v=n/p,S=[],T=[],M=[],y=[];for(let x=0;x<_;x++){const D=x*v-c;for(let w=0;w<d;w++){const C=w*g-l;T.push(C,-D,0),M.push(0,0,1),y.push(w/f),y.push(1-x/p)}}for(let x=0;x<p;x++)for(let D=0;D<f;D++){const w=D+d*x,C=D+d*(x+1),R=D+1+d*(x+1),P=D+1+d*x;S.push(w,C,P),S.push(C,R,P)}this.setIndex(S),this.setAttribute("position",new Ja(T,3)),this.setAttribute("normal",new Ja(M,3)),this.setAttribute("uv",new Ja(y,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Uu(t.width,t.height,t.widthSegments,t.heightSegments)}}class Fb extends ia{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zb extends Gf{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Ib extends Gf{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class M_ extends wy{constructor(t=-1,n=1,a=1,o=-1,l=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=n,this.top=a,this.bottom=o,this.near=l,this.far=c,this.updateProjectionMatrix()}copy(t,n){return super.copy(t,n),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,n,a,o,l,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=n,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-t,c=a+t,f=o+n,p=o-n;if(this.view!==null&&this.view.enabled){const d=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=d*this.view.offsetX,c=l+d*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(l,c,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const n=super.toJSON(t);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class Bb extends ta{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function oS(r,t,n,a){const o=Hb(a);switch(n){case vy:return r*t;case Sy:return r*t/o.components*o.byteLength;case m_:return r*t/o.components*o.byteLength;case qo:return r*t*2/o.components*o.byteLength;case __:return r*t*2/o.components*o.byteLength;case xy:return r*t*3/o.components*o.byteLength;case na:return r*t*4/o.components*o.byteLength;case g_:return r*t*4/o.components*o.byteLength;case _f:case gf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case vf:case xf:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case fm:case dm:return Math.max(r,16)*Math.max(t,8)/4;case cm:case hm:return Math.max(r,8)*Math.max(t,8)/2;case pm:case mm:case gm:case vm:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case _m:case xm:case Sm:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ym:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mm:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case Em:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Tm:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case bm:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Am:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case Rm:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Cm:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case wm:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Dm:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Um:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Lm:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Nm:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Om:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Pm:case Fm:case zm:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Im:case Bm:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Hm:case Vm:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function Hb(r){switch(r){case Gi:case py:return{byteLength:1,components:1};case _u:case my:case $a:return{byteLength:2,components:1};case d_:case p_:return{byteLength:2,components:4};case xa:case h_:case da:return{byteLength:4,components:1};case _y:case gy:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:f_}}));typeof window<"u"&&(window.__THREE__?re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=f_);function Oy(){let r=null,t=!1,n=null,a=null;function o(l,c){n(l,c),a=r.requestAnimationFrame(o)}return{start:function(){t!==!0&&n!==null&&(a=r.requestAnimationFrame(o),t=!0)},stop:function(){r.cancelAnimationFrame(a),t=!1},setAnimationLoop:function(l){n=l},setContext:function(l){r=l}}}function Vb(r){const t=new WeakMap;function n(f,p){const d=f.array,_=f.usage,g=d.byteLength,v=r.createBuffer();r.bindBuffer(p,v),r.bufferData(p,d,_),f.onUploadCallback();let S;if(d instanceof Float32Array)S=r.FLOAT;else if(typeof Float16Array<"u"&&d instanceof Float16Array)S=r.HALF_FLOAT;else if(d instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(d instanceof Int16Array)S=r.SHORT;else if(d instanceof Uint32Array)S=r.UNSIGNED_INT;else if(d instanceof Int32Array)S=r.INT;else if(d instanceof Int8Array)S=r.BYTE;else if(d instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:v,type:S,bytesPerElement:d.BYTES_PER_ELEMENT,version:f.version,size:g}}function a(f,p,d){const _=p.array,g=p.updateRanges;if(r.bindBuffer(d,f),g.length===0)r.bufferSubData(d,0,_);else{g.sort((S,T)=>S.start-T.start);let v=0;for(let S=1;S<g.length;S++){const T=g[v],M=g[S];M.start<=T.start+T.count+1?T.count=Math.max(T.count,M.start+M.count-T.start):(++v,g[v]=M)}g.length=v+1;for(let S=0,T=g.length;S<T;S++){const M=g[S];r.bufferSubData(d,M.start*_.BYTES_PER_ELEMENT,_,M.start,M.count)}p.clearUpdateRanges()}p.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),t.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=t.get(f);p&&(r.deleteBuffer(p.buffer),t.delete(f))}function c(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=t.get(f);(!_||_.version<f.version)&&t.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const d=t.get(f);if(d===void 0)t.set(f,n(f,p));else if(d.version<f.version){if(d.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(d.buffer,f,p),d.version=f.version}}return{get:o,remove:l,update:c}}var Gb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,kb=`#ifdef USE_ALPHAHASH
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
#endif`,Xb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Yb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Zb=`#ifdef USE_AOMAP
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
#endif`,jb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kb=`#ifdef USE_BATCHING
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
#endif`,Qb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tA=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eA=`#ifdef USE_IRIDESCENCE
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
#endif`,nA=`#ifdef USE_BUMPMAP
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
#endif`,iA=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,aA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sA=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,cA=`#if defined( USE_COLOR_ALPHA )
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
#endif`,fA=`#define PI 3.141592653589793
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
} // validated`,hA=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,dA=`vec3 transformedNormal = objectNormal;
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
#endif`,pA=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mA=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,_A=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gA=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vA="gl_FragColor = linearToOutputTexel( gl_FragColor );",xA=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,SA=`#ifdef USE_ENVMAP
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
#endif`,yA=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,MA=`#ifdef USE_ENVMAP
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
#endif`,EA=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,TA=`#ifdef USE_ENVMAP
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
#endif`,bA=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,AA=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,RA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,wA=`#ifdef USE_GRADIENTMAP
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
}`,DA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,LA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NA=`uniform bool receiveShadow;
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
#endif`,OA=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,PA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,FA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,zA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,BA=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,HA=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,VA=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
#endif`,GA=`#if defined( RE_IndirectDiffuse )
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
#endif`,kA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,XA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,YA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ZA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,jA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,QA=`#if defined( USE_POINTS_UV )
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
#endif`,JA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$A=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tR=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eR=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iR=`#ifdef USE_MORPHTARGETS
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
#endif`,aR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,sR=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cR=`#ifdef USE_NORMALMAP
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
#endif`,fR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,_R=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vR=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,SR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,yR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ER=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
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
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
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
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,TR=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bR=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,AR=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
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
}`,RR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,CR=`#ifdef USE_SKINNING
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
#endif`,wR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,DR=`#ifdef USE_SKINNING
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
#endif`,UR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,NR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,OR=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,PR=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,FR=`#ifdef USE_TRANSMISSION
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
#endif`,zR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BR=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,HR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const VR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GR=`uniform sampler2D t2D;
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
}`,kR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XR=`#ifdef ENVMAP_TYPE_CUBE
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
}`,WR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qR=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YR=`#include <common>
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
}`,ZR=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,jR=`#define DISTANCE
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
}`,KR=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JR=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$R=`uniform float scale;
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
}`,tC=`uniform vec3 diffuse;
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
}`,eC=`#include <common>
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
}`,nC=`uniform vec3 diffuse;
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
}`,iC=`#define LAMBERT
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
}`,aC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,rC=`#define MATCAP
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
}`,sC=`#define MATCAP
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
}`,oC=`#define NORMAL
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
}`,lC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uC=`#define PHONG
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
}`,cC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,fC=`#define STANDARD
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
}`,hC=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,dC=`#define TOON
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
}`,pC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,mC=`uniform float size;
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
}`,_C=`uniform vec3 diffuse;
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
}`,gC=`#include <common>
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
}`,vC=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,xC=`uniform float rotation;
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
}`,SC=`uniform vec3 diffuse;
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
}`,fe={alphahash_fragment:Gb,alphahash_pars_fragment:kb,alphamap_fragment:Xb,alphamap_pars_fragment:Wb,alphatest_fragment:qb,alphatest_pars_fragment:Yb,aomap_fragment:Zb,aomap_pars_fragment:jb,batching_pars_vertex:Kb,batching_vertex:Qb,begin_vertex:Jb,beginnormal_vertex:$b,bsdfs:tA,iridescence_fragment:eA,bumpmap_pars_fragment:nA,clipping_planes_fragment:iA,clipping_planes_pars_fragment:aA,clipping_planes_pars_vertex:rA,clipping_planes_vertex:sA,color_fragment:oA,color_pars_fragment:lA,color_pars_vertex:uA,color_vertex:cA,common:fA,cube_uv_reflection_fragment:hA,defaultnormal_vertex:dA,displacementmap_pars_vertex:pA,displacementmap_vertex:mA,emissivemap_fragment:_A,emissivemap_pars_fragment:gA,colorspace_fragment:vA,colorspace_pars_fragment:xA,envmap_fragment:SA,envmap_common_pars_fragment:yA,envmap_pars_fragment:MA,envmap_pars_vertex:EA,envmap_physical_pars_fragment:OA,envmap_vertex:TA,fog_vertex:bA,fog_pars_vertex:AA,fog_fragment:RA,fog_pars_fragment:CA,gradientmap_pars_fragment:wA,lightmap_pars_fragment:DA,lights_lambert_fragment:UA,lights_lambert_pars_fragment:LA,lights_pars_begin:NA,lights_toon_fragment:PA,lights_toon_pars_fragment:FA,lights_phong_fragment:zA,lights_phong_pars_fragment:IA,lights_physical_fragment:BA,lights_physical_pars_fragment:HA,lights_fragment_begin:VA,lights_fragment_maps:GA,lights_fragment_end:kA,logdepthbuf_fragment:XA,logdepthbuf_pars_fragment:WA,logdepthbuf_pars_vertex:qA,logdepthbuf_vertex:YA,map_fragment:ZA,map_pars_fragment:jA,map_particle_fragment:KA,map_particle_pars_fragment:QA,metalnessmap_fragment:JA,metalnessmap_pars_fragment:$A,morphinstance_vertex:tR,morphcolor_vertex:eR,morphnormal_vertex:nR,morphtarget_pars_vertex:iR,morphtarget_vertex:aR,normal_fragment_begin:rR,normal_fragment_maps:sR,normal_pars_fragment:oR,normal_pars_vertex:lR,normal_vertex:uR,normalmap_pars_fragment:cR,clearcoat_normal_fragment_begin:fR,clearcoat_normal_fragment_maps:hR,clearcoat_pars_fragment:dR,iridescence_pars_fragment:pR,opaque_fragment:mR,packing:_R,premultiplied_alpha_fragment:gR,project_vertex:vR,dithering_fragment:xR,dithering_pars_fragment:SR,roughnessmap_fragment:yR,roughnessmap_pars_fragment:MR,shadowmap_pars_fragment:ER,shadowmap_pars_vertex:TR,shadowmap_vertex:bR,shadowmask_pars_fragment:AR,skinbase_vertex:RR,skinning_pars_vertex:CR,skinning_vertex:wR,skinnormal_vertex:DR,specularmap_fragment:UR,specularmap_pars_fragment:LR,tonemapping_fragment:NR,tonemapping_pars_fragment:OR,transmission_fragment:PR,transmission_pars_fragment:FR,uv_pars_fragment:zR,uv_pars_vertex:IR,uv_vertex:BR,worldpos_vertex:HR,background_vert:VR,background_frag:GR,backgroundCube_vert:kR,backgroundCube_frag:XR,cube_vert:WR,cube_frag:qR,depth_vert:YR,depth_frag:ZR,distance_vert:jR,distance_frag:KR,equirect_vert:QR,equirect_frag:JR,linedashed_vert:$R,linedashed_frag:tC,meshbasic_vert:eC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:aC,meshmatcap_vert:rC,meshmatcap_frag:sC,meshnormal_vert:oC,meshnormal_frag:lC,meshphong_vert:uC,meshphong_frag:cC,meshphysical_vert:fC,meshphysical_frag:hC,meshtoon_vert:dC,meshtoon_frag:pC,points_vert:mC,points_frag:_C,shadow_vert:gC,shadow_frag:vC,sprite_vert:xC,sprite_frag:SC},Ot={common:{diffuse:{value:new Ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ce}},envmap:{envMap:{value:null},envMapRotation:{value:new ce},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ce}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ce}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ce},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ce},normalScale:{value:new Pe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ce},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ce}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ce}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ce}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0},uvTransform:{value:new ce}},sprite:{diffuse:{value:new Ve(16777215)},opacity:{value:1},center:{value:new Pe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ce},alphaMap:{value:null},alphaMapTransform:{value:new ce},alphaTest:{value:0}}},fa={basic:{uniforms:Kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.fog]),vertexShader:fe.meshbasic_vert,fragmentShader:fe.meshbasic_frag},lambert:{uniforms:Kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ve(0)}}]),vertexShader:fe.meshlambert_vert,fragmentShader:fe.meshlambert_frag},phong:{uniforms:Kn([Ot.common,Ot.specularmap,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,Ot.lights,{emissive:{value:new Ve(0)},specular:{value:new Ve(1118481)},shininess:{value:30}}]),vertexShader:fe.meshphong_vert,fragmentShader:fe.meshphong_frag},standard:{uniforms:Kn([Ot.common,Ot.envmap,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.roughnessmap,Ot.metalnessmap,Ot.fog,Ot.lights,{emissive:{value:new Ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag},toon:{uniforms:Kn([Ot.common,Ot.aomap,Ot.lightmap,Ot.emissivemap,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.gradientmap,Ot.fog,Ot.lights,{emissive:{value:new Ve(0)}}]),vertexShader:fe.meshtoon_vert,fragmentShader:fe.meshtoon_frag},matcap:{uniforms:Kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,Ot.fog,{matcap:{value:null}}]),vertexShader:fe.meshmatcap_vert,fragmentShader:fe.meshmatcap_frag},points:{uniforms:Kn([Ot.points,Ot.fog]),vertexShader:fe.points_vert,fragmentShader:fe.points_frag},dashed:{uniforms:Kn([Ot.common,Ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:fe.linedashed_vert,fragmentShader:fe.linedashed_frag},depth:{uniforms:Kn([Ot.common,Ot.displacementmap]),vertexShader:fe.depth_vert,fragmentShader:fe.depth_frag},normal:{uniforms:Kn([Ot.common,Ot.bumpmap,Ot.normalmap,Ot.displacementmap,{opacity:{value:1}}]),vertexShader:fe.meshnormal_vert,fragmentShader:fe.meshnormal_frag},sprite:{uniforms:Kn([Ot.sprite,Ot.fog]),vertexShader:fe.sprite_vert,fragmentShader:fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ce},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:fe.background_vert,fragmentShader:fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ce}},vertexShader:fe.backgroundCube_vert,fragmentShader:fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:fe.cube_vert,fragmentShader:fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:fe.equirect_vert,fragmentShader:fe.equirect_frag},distance:{uniforms:Kn([Ot.common,Ot.displacementmap,{referencePosition:{value:new ot},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:fe.distance_vert,fragmentShader:fe.distance_frag},shadow:{uniforms:Kn([Ot.lights,Ot.fog,{color:{value:new Ve(0)},opacity:{value:1}}]),vertexShader:fe.shadow_vert,fragmentShader:fe.shadow_frag}};fa.physical={uniforms:Kn([fa.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ce},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ce},clearcoatNormalScale:{value:new Pe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ce},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ce},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ce},sheen:{value:0},sheenColor:{value:new Ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ce},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ce},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ce},transmissionSamplerSize:{value:new Pe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ce},attenuationDistance:{value:0},attenuationColor:{value:new Ve(0)},specularColor:{value:new Ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ce},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ce},anisotropyVector:{value:new Pe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ce}}]),vertexShader:fe.meshphysical_vert,fragmentShader:fe.meshphysical_frag};const ff={r:0,b:0,g:0},xs=new er,yC=new Mn;function MC(r,t,n,a,o,l,c){const f=new Ve(0);let p=l===!0?0:1,d,_,g=null,v=0,S=null;function T(w){let C=w.isScene===!0?w.background:null;return C&&C.isTexture&&(C=(w.backgroundBlurriness>0?n:t).get(C)),C}function M(w){let C=!1;const R=T(w);R===null?x(f,p):R&&R.isColor&&(x(R,1),C=!0);const P=r.xr.getEnvironmentBlendMode();P==="additive"?a.buffers.color.setClear(0,0,0,1,c):P==="alpha-blend"&&a.buffers.color.setClear(0,0,0,0,c),(r.autoClear||C)&&(a.buffers.depth.setTest(!0),a.buffers.depth.setMask(!0),a.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function y(w,C){const R=T(C);R&&(R.isCubeTexture||R.mapping===Vf)?(_===void 0&&(_=new Sa(new Du(1,1,1),new ia({name:"BackgroundCubeMaterial",uniforms:Zo(fa.backgroundCube.uniforms),vertexShader:fa.backgroundCube.vertexShader,fragmentShader:fa.backgroundCube.fragmentShader,side:si,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),_.geometry.deleteAttribute("normal"),_.geometry.deleteAttribute("uv"),_.onBeforeRender=function(P,U,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(_.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(_)),xs.copy(C.backgroundRotation),xs.x*=-1,xs.y*=-1,xs.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(xs.y*=-1,xs.z*=-1),_.material.uniforms.envMap.value=R,_.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,_.material.uniforms.backgroundBlurriness.value=C.backgroundBlurriness,_.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,_.material.uniforms.backgroundRotation.value.setFromMatrix4(yC.makeRotationFromEuler(xs)),_.material.toneMapped=be.getTransfer(R.colorSpace)!==He,(g!==R||v!==R.version||S!==r.toneMapping)&&(_.material.needsUpdate=!0,g=R,v=R.version,S=r.toneMapping),_.layers.enableAll(),w.unshift(_,_.geometry,_.material,0,0,null)):R&&R.isTexture&&(d===void 0&&(d=new Sa(new Uu(2,2),new ia({name:"BackgroundMaterial",uniforms:Zo(fa.background.uniforms),vertexShader:fa.background.vertexShader,fragmentShader:fa.background.fragmentShader,side:qr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(d)),d.material.uniforms.t2D.value=R,d.material.uniforms.backgroundIntensity.value=C.backgroundIntensity,d.material.toneMapped=be.getTransfer(R.colorSpace)!==He,R.matrixAutoUpdate===!0&&R.updateMatrix(),d.material.uniforms.uvTransform.value.copy(R.matrix),(g!==R||v!==R.version||S!==r.toneMapping)&&(d.material.needsUpdate=!0,g=R,v=R.version,S=r.toneMapping),d.layers.enableAll(),w.unshift(d,d.geometry,d.material,0,0,null))}function x(w,C){w.getRGB(ff,Cy(r)),a.buffers.color.setClear(ff.r,ff.g,ff.b,C,c)}function D(){_!==void 0&&(_.geometry.dispose(),_.material.dispose(),_=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return f},setClearColor:function(w,C=1){f.set(w),p=C,x(f,p)},getClearAlpha:function(){return p},setClearAlpha:function(w){p=w,x(f,p)},render:M,addToRenderList:y,dispose:D}}function EC(r,t){const n=r.getParameter(r.MAX_VERTEX_ATTRIBS),a={},o=v(null);let l=o,c=!1;function f(L,V,Y,Z,st){let it=!1;const I=g(Z,Y,V);l!==I&&(l=I,d(l.object)),it=S(L,Z,Y,st),it&&T(L,Z,Y,st),st!==null&&t.update(st,r.ELEMENT_ARRAY_BUFFER),(it||c)&&(c=!1,C(L,V,Y,Z),st!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(st).buffer))}function p(){return r.createVertexArray()}function d(L){return r.bindVertexArray(L)}function _(L){return r.deleteVertexArray(L)}function g(L,V,Y){const Z=Y.wireframe===!0;let st=a[L.id];st===void 0&&(st={},a[L.id]=st);let it=st[V.id];it===void 0&&(it={},st[V.id]=it);let I=it[Z];return I===void 0&&(I=v(p()),it[Z]=I),I}function v(L){const V=[],Y=[],Z=[];for(let st=0;st<n;st++)V[st]=0,Y[st]=0,Z[st]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:Y,attributeDivisors:Z,object:L,attributes:{},index:null}}function S(L,V,Y,Z){const st=l.attributes,it=V.attributes;let I=0;const H=Y.getAttributes();for(const Q in H)if(H[Q].location>=0){const gt=st[Q];let z=it[Q];if(z===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(z=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(z=L.instanceColor)),gt===void 0||gt.attribute!==z||z&&gt.data!==z.data)return!0;I++}return l.attributesNum!==I||l.index!==Z}function T(L,V,Y,Z){const st={},it=V.attributes;let I=0;const H=Y.getAttributes();for(const Q in H)if(H[Q].location>=0){let gt=it[Q];gt===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(gt=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(gt=L.instanceColor));const z={};z.attribute=gt,gt&&gt.data&&(z.data=gt.data),st[Q]=z,I++}l.attributes=st,l.attributesNum=I,l.index=Z}function M(){const L=l.newAttributes;for(let V=0,Y=L.length;V<Y;V++)L[V]=0}function y(L){x(L,0)}function x(L,V){const Y=l.newAttributes,Z=l.enabledAttributes,st=l.attributeDivisors;Y[L]=1,Z[L]===0&&(r.enableVertexAttribArray(L),Z[L]=1),st[L]!==V&&(r.vertexAttribDivisor(L,V),st[L]=V)}function D(){const L=l.newAttributes,V=l.enabledAttributes;for(let Y=0,Z=V.length;Y<Z;Y++)V[Y]!==L[Y]&&(r.disableVertexAttribArray(Y),V[Y]=0)}function w(L,V,Y,Z,st,it,I){I===!0?r.vertexAttribIPointer(L,V,Y,st,it):r.vertexAttribPointer(L,V,Y,Z,st,it)}function C(L,V,Y,Z){M();const st=Z.attributes,it=Y.getAttributes(),I=V.defaultAttributeValues;for(const H in it){const Q=it[H];if(Q.location>=0){let xt=st[H];if(xt===void 0&&(H==="instanceMatrix"&&L.instanceMatrix&&(xt=L.instanceMatrix),H==="instanceColor"&&L.instanceColor&&(xt=L.instanceColor)),xt!==void 0){const gt=xt.normalized,z=xt.itemSize,J=t.get(xt);if(J===void 0)continue;const ht=J.buffer,yt=J.type,Ct=J.bytesPerElement,tt=yt===r.INT||yt===r.UNSIGNED_INT||xt.gpuType===h_;if(xt.isInterleavedBufferAttribute){const ut=xt.data,Tt=ut.stride,Ht=xt.offset;if(ut.isInstancedInterleavedBuffer){for(let Bt=0;Bt<Q.locationSize;Bt++)x(Q.location+Bt,ut.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=ut.meshPerAttribute*ut.count)}else for(let Bt=0;Bt<Q.locationSize;Bt++)y(Q.location+Bt);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let Bt=0;Bt<Q.locationSize;Bt++)w(Q.location+Bt,z/Q.locationSize,yt,gt,Tt*Ct,(Ht+z/Q.locationSize*Bt)*Ct,tt)}else{if(xt.isInstancedBufferAttribute){for(let ut=0;ut<Q.locationSize;ut++)x(Q.location+ut,xt.meshPerAttribute);L.isInstancedMesh!==!0&&Z._maxInstanceCount===void 0&&(Z._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let ut=0;ut<Q.locationSize;ut++)y(Q.location+ut);r.bindBuffer(r.ARRAY_BUFFER,ht);for(let ut=0;ut<Q.locationSize;ut++)w(Q.location+ut,z/Q.locationSize,yt,gt,z*Ct,z/Q.locationSize*ut*Ct,tt)}}else if(I!==void 0){const gt=I[H];if(gt!==void 0)switch(gt.length){case 2:r.vertexAttrib2fv(Q.location,gt);break;case 3:r.vertexAttrib3fv(Q.location,gt);break;case 4:r.vertexAttrib4fv(Q.location,gt);break;default:r.vertexAttrib1fv(Q.location,gt)}}}}D()}function R(){F();for(const L in a){const V=a[L];for(const Y in V){const Z=V[Y];for(const st in Z)_(Z[st].object),delete Z[st];delete V[Y]}delete a[L]}}function P(L){if(a[L.id]===void 0)return;const V=a[L.id];for(const Y in V){const Z=V[Y];for(const st in Z)_(Z[st].object),delete Z[st];delete V[Y]}delete a[L.id]}function U(L){for(const V in a){const Y=a[V];if(Y[L.id]===void 0)continue;const Z=Y[L.id];for(const st in Z)_(Z[st].object),delete Z[st];delete Y[L.id]}}function F(){b(),c=!0,l!==o&&(l=o,d(l.object))}function b(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:F,resetDefaultState:b,dispose:R,releaseStatesOfGeometry:P,releaseStatesOfProgram:U,initAttributes:M,enableAttribute:y,disableUnusedAttributes:D}}function TC(r,t,n){let a;function o(d){a=d}function l(d,_){r.drawArrays(a,d,_),n.update(_,a,1)}function c(d,_,g){g!==0&&(r.drawArraysInstanced(a,d,_,g),n.update(_,a,g))}function f(d,_,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,d,0,_,0,g);let S=0;for(let T=0;T<g;T++)S+=_[T];n.update(S,a,1)}function p(d,_,g,v){if(g===0)return;const S=t.get("WEBGL_multi_draw");if(S===null)for(let T=0;T<d.length;T++)c(d[T],_[T],v[T]);else{S.multiDrawArraysInstancedWEBGL(a,d,0,_,0,v,0,g);let T=0;for(let M=0;M<g;M++)T+=_[M]*v[M];n.update(T,a,1)}}this.setMode=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=p}function bC(r,t,n,a){let o;function l(){if(o!==void 0)return o;if(t.has("EXT_texture_filter_anisotropic")===!0){const U=t.get("EXT_texture_filter_anisotropic");o=r.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function c(U){return!(U!==na&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(U){const F=U===$a&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(U!==Gi&&a.convert(U)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==da&&!F)}function p(U){if(U==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let d=n.precision!==void 0?n.precision:"highp";const _=p(d);_!==d&&(re("WebGLRenderer:",d,"not supported, using",_,"instead."),d=_);const g=n.logarithmicDepthBuffer===!0,v=n.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_TEXTURE_SIZE),y=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),D=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),C=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),R=r.getParameter(r.MAX_SAMPLES),P=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:p,textureFormatReadable:c,textureTypeReadable:f,precision:d,logarithmicDepthBuffer:g,reversedDepthBuffer:v,maxTextures:S,maxVertexTextures:T,maxTextureSize:M,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:w,maxFragmentUniforms:C,maxSamples:R,samples:P}}function AC(r){const t=this;let n=null,a=0,o=!1,l=!1;const c=new Es,f=new ce,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(g,v){const S=g.length!==0||v||a!==0||o;return o=v,a=g.length,S},this.beginShadows=function(){l=!0,_(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,v){n=_(g,v,0)},this.setState=function(g,v,S){const T=g.clippingPlanes,M=g.clipIntersection,y=g.clipShadows,x=r.get(g);if(!o||T===null||T.length===0||l&&!y)l?_(null):d();else{const D=l?0:a,w=D*4;let C=x.clippingState||null;p.value=C,C=_(T,v,w,S);for(let R=0;R!==w;++R)C[R]=n[R];x.clippingState=C,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=D}};function d(){p.value!==n&&(p.value=n,p.needsUpdate=a>0),t.numPlanes=a,t.numIntersection=0}function _(g,v,S,T){const M=g!==null?g.length:0;let y=null;if(M!==0){if(y=p.value,T!==!0||y===null){const x=S+M*4,D=v.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let w=0,C=S;w!==M;++w,C+=4)c.copy(g[w]).applyMatrix4(D,f),c.normal.toArray(y,C),y[C+3]=c.constant}p.value=y,p.needsUpdate=!0}return t.numPlanes=M,t.numIntersection=0,y}}function RC(r){let t=new WeakMap;function n(c,f){return f===sm?c.mapping=Ps:f===om&&(c.mapping=Wo),c}function a(c){if(c&&c.isTexture){const f=c.mapping;if(f===sm||f===om)if(t.has(c)){const p=t.get(c).texture;return n(p,c.mapping)}else{const p=c.image;if(p&&p.height>0){const d=new Uy(p.height);return d.fromEquirectangularTexture(r,c),t.set(c,d),c.addEventListener("dispose",o),n(d.texture,c.mapping)}else return null}}return c}function o(c){const f=c.target;f.removeEventListener("dispose",o);const p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function l(){t=new WeakMap}return{get:a,dispose:l}}const Br=4,lS=[.125,.215,.35,.446,.526,.582],As=20,CC=256,iu=new M_,uS=new Ve;let Lp=null,Np=0,Op=0,Pp=!1;const wC=new ot;class cS{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,n=0,a=.1,o=100,l={}){const{size:c=256,position:f=wC}=l;Lp=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(t,a,o,p,f),n>0&&this._blur(p,0,0,n),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(t,n=null){return this._fromTexture(t,n)}fromCubemap(t,n=null){return this._fromTexture(t,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dS(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hS(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Lp,Np,Op),this._renderer.xr.enabled=Pp,t.scissorTest=!1,Oo(t,0,0,t.width,t.height)}_fromTexture(t,n){t.mapping===Ps||t.mapping===Wo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Lp=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),Pp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=n||this._allocateTargets();return this._textureToCubeUV(t,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,a={magFilter:Yn,minFilter:Yn,generateMipmaps:!1,type:$a,format:na,colorSpace:Yo,depthBuffer:!1},o=fS(t,n,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fS(t,n,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=DC(l)),this._blurMaterial=LC(l,t,n),this._ggxMaterial=UC(l,t,n)}return o}_compileMaterial(t){const n=new Sa(new rr,t);this._renderer.compile(n,iu)}_sceneToCubeUV(t,n,a,o,l){const p=new ta(90,1,n,a),d=[1,-1,1,1,1,1],_=[1,1,1,-1,-1,-1],g=this._renderer,v=g.autoClear,S=g.toneMapping;g.getClearColor(uS),g.toneMapping=_a,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(o),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sa(new Du,new by({name:"PMREM.Background",side:si,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,y=M.material;let x=!1;const D=t.background;D?D.isColor&&(y.color.copy(D),t.background=null,x=!0):(y.color.copy(uS),x=!0);for(let w=0;w<6;w++){const C=w%3;C===0?(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x+_[w],l.y,l.z)):C===1?(p.up.set(0,0,d[w]),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y+_[w],l.z)):(p.up.set(0,d[w],0),p.position.set(l.x,l.y,l.z),p.lookAt(l.x,l.y,l.z+_[w]));const R=this._cubeSize;Oo(o,C*R,w>2?R:0,R,R),g.setRenderTarget(o),x&&g.render(M,p),g.render(t,p)}g.toneMapping=S,g.autoClear=v,t.background=D}_textureToCubeUV(t,n){const a=this._renderer,o=t.mapping===Ps||t.mapping===Wo;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=dS()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hS());const l=o?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=l;const f=l.uniforms;f.envMap.value=t;const p=this._cubeSize;Oo(n,0,0,3*p,2*p),a.setRenderTarget(n),a.render(c,iu)}_applyPMREM(t){const n=this._renderer,a=n.autoClear;n.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(t,l-1,l);n.autoClear=a}_applyGGXFilter(t,n,a){const o=this._renderer,l=this._pingPongRenderTarget,c=this._ggxMaterial,f=this._lodMeshes[a];f.material=c;const p=c.uniforms,d=a/(this._lodMeshes.length-1),_=n/(this._lodMeshes.length-1),g=Math.sqrt(d*d-_*_),v=0+d*1.25,S=g*v,{_lodMax:T}=this,M=this._sizeLods[a],y=3*M*(a>T-Br?a-T+Br:0),x=4*(this._cubeSize-M);p.envMap.value=t.texture,p.roughness.value=S,p.mipInt.value=T-n,Oo(l,y,x,3*M,2*M),o.setRenderTarget(l),o.render(f,iu),p.envMap.value=l.texture,p.roughness.value=0,p.mipInt.value=T-a,Oo(t,y,x,3*M,2*M),o.setRenderTarget(t),o.render(f,iu)}_blur(t,n,a,o,l){const c=this._pingPongRenderTarget;this._halfBlur(t,c,n,a,o,"latitudinal",l),this._halfBlur(c,t,a,a,o,"longitudinal",l)}_halfBlur(t,n,a,o,l,c,f){const p=this._renderer,d=this._blurMaterial;c!=="latitudinal"&&c!=="longitudinal"&&Ce("blur direction must be either latitudinal or longitudinal!");const _=3,g=this._lodMeshes[o];g.material=d;const v=d.uniforms,S=this._sizeLods[a]-1,T=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*As-1),M=l/T,y=isFinite(l)?1+Math.floor(_*M):As;y>As&&re(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${As}`);const x=[];let D=0;for(let U=0;U<As;++U){const F=U/M,b=Math.exp(-F*F/2);x.push(b),U===0?D+=b:U<y&&(D+=2*b)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;v.envMap.value=t.texture,v.samples.value=y,v.weights.value=x,v.latitudinal.value=c==="latitudinal",f&&(v.poleAxis.value=f);const{_lodMax:w}=this;v.dTheta.value=T,v.mipInt.value=w-a;const C=this._sizeLods[o],R=3*C*(o>w-Br?o-w+Br:0),P=4*(this._cubeSize-C);Oo(n,R,P,3*C,2*C),p.setRenderTarget(n),p.render(g,iu)}}function DC(r){const t=[],n=[],a=[];let o=r;const l=r-Br+1+lS.length;for(let c=0;c<l;c++){const f=Math.pow(2,o);t.push(f);let p=1/f;c>r-Br?p=lS[c-r+Br-1]:c===0&&(p=0),n.push(p);const d=1/(f-2),_=-d,g=1+d,v=[_,_,g,_,g,g,_,_,g,g,_,g],S=6,T=6,M=3,y=2,x=1,D=new Float32Array(M*T*S),w=new Float32Array(y*T*S),C=new Float32Array(x*T*S);for(let P=0;P<S;P++){const U=P%3*2/3-1,F=P>2?0:-1,b=[U,F,0,U+2/3,F,0,U+2/3,F+1,0,U,F,0,U+2/3,F+1,0,U,F+1,0];D.set(b,M*T*P),w.set(v,y*T*P);const L=[P,P,P,P,P,P];C.set(L,x*T*P)}const R=new rr;R.setAttribute("position",new va(D,M)),R.setAttribute("uv",new va(w,y)),R.setAttribute("faceIndex",new va(C,x)),a.push(new Sa(R,null)),o>Br&&o--}return{lodMeshes:a,sizeLods:t,sigmas:n}}function fS(r,t,n){const a=new ga(r,t,n);return a.texture.mapping=Vf,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function Oo(r,t,n,a,o){r.viewport.set(t,n,a,o),r.scissor.set(t,n,a,o)}function UC(r,t,n){return new ia({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:CC,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:kf(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function LC(r,t,n){const a=new Float32Array(As),o=new ot(0,1,0);return new ia({name:"SphericalGaussianBlur",defines:{n:As,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:a},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function hS(){return new ia({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:kf(),fragmentShader:`

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
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function dS(){return new ia({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:kf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ka,depthTest:!1,depthWrite:!1})}function kf(){return`

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
	`}function NC(r){let t=new WeakMap,n=null;function a(f){if(f&&f.isTexture){const p=f.mapping,d=p===sm||p===om,_=p===Ps||p===Wo;if(d||_){let g=t.get(f);const v=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==v)return n===null&&(n=new cS(r)),g=d?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const S=f.image;return d&&S&&S.height>0||_&&S&&o(S)?(n===null&&(n=new cS(r)),g=d?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",l),g.texture):null}}}return f}function o(f){let p=0;const d=6;for(let _=0;_<d;_++)f[_]!==void 0&&p++;return p===d}function l(f){const p=f.target;p.removeEventListener("dispose",l);const d=t.get(p);d!==void 0&&(t.delete(p),d.dispose())}function c(){t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:a,dispose:c}}function OC(r){const t={};function n(a){if(t[a]!==void 0)return t[a];const o=r.getExtension(a);return t[a]=o,o}return{has:function(a){return n(a)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(a){const o=n(a);return o===null&&vu("WebGLRenderer: "+a+" extension not supported."),o}}}function PC(r,t,n,a){const o={},l=new WeakMap;function c(g){const v=g.target;v.index!==null&&t.remove(v.index);for(const T in v.attributes)t.remove(v.attributes[T]);v.removeEventListener("dispose",c),delete o[v.id];const S=l.get(v);S&&(t.remove(S),l.delete(v)),a.releaseStatesOfGeometry(v),v.isInstancedBufferGeometry===!0&&delete v._maxInstanceCount,n.memory.geometries--}function f(g,v){return o[v.id]===!0||(v.addEventListener("dispose",c),o[v.id]=!0,n.memory.geometries++),v}function p(g){const v=g.attributes;for(const S in v)t.update(v[S],r.ARRAY_BUFFER)}function d(g){const v=[],S=g.index,T=g.attributes.position;let M=0;if(S!==null){const D=S.array;M=S.version;for(let w=0,C=D.length;w<C;w+=3){const R=D[w+0],P=D[w+1],U=D[w+2];v.push(R,P,P,U,U,R)}}else if(T!==void 0){const D=T.array;M=T.version;for(let w=0,C=D.length/3-1;w<C;w+=3){const R=w+0,P=w+1,U=w+2;v.push(R,P,P,U,U,R)}}else return;const y=new(yy(v)?Ry:Ay)(v,1);y.version=M;const x=l.get(g);x&&t.remove(x),l.set(g,y)}function _(g){const v=l.get(g);if(v){const S=g.index;S!==null&&v.version<S.version&&d(g)}else d(g);return l.get(g)}return{get:f,update:p,getWireframeAttribute:_}}function FC(r,t,n){let a;function o(v){a=v}let l,c;function f(v){l=v.type,c=v.bytesPerElement}function p(v,S){r.drawElements(a,S,l,v*c),n.update(S,a,1)}function d(v,S,T){T!==0&&(r.drawElementsInstanced(a,S,l,v*c,T),n.update(S,a,T))}function _(v,S,T){if(T===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,S,0,l,v,0,T);let y=0;for(let x=0;x<T;x++)y+=S[x];n.update(y,a,1)}function g(v,S,T,M){if(T===0)return;const y=t.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<v.length;x++)d(v[x]/c,S[x],M[x]);else{y.multiDrawElementsInstancedWEBGL(a,S,0,l,v,0,M,0,T);let x=0;for(let D=0;D<T;D++)x+=S[D]*M[D];n.update(x,a,1)}}this.setMode=o,this.setIndex=f,this.render=p,this.renderInstances=d,this.renderMultiDraw=_,this.renderMultiDrawInstances=g}function zC(r){const t={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,c,f){switch(n.calls++,c){case r.TRIANGLES:n.triangles+=f*(l/3);break;case r.LINES:n.lines+=f*(l/2);break;case r.LINE_STRIP:n.lines+=f*(l-1);break;case r.LINE_LOOP:n.lines+=f*l;break;case r.POINTS:n.points+=f*l;break;default:Ce("WebGLInfo: Unknown draw mode:",c);break}}function o(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:t,render:n,programs:null,autoReset:!0,reset:o,update:a}}function IC(r,t,n){const a=new WeakMap,o=new pn;function l(c,f,p){const d=c.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,g=_!==void 0?_.length:0;let v=a.get(f);if(v===void 0||v.count!==g){let L=function(){F.dispose(),a.delete(f),f.removeEventListener("dispose",L)};var S=L;v!==void 0&&v.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],w=f.morphAttributes.color||[];let C=0;T===!0&&(C=1),M===!0&&(C=2),y===!0&&(C=3);let R=f.attributes.position.count*C,P=1;R>t.maxTextureSize&&(P=Math.ceil(R/t.maxTextureSize),R=t.maxTextureSize);const U=new Float32Array(R*P*4*g),F=new My(U,R,P,g);F.type=da,F.needsUpdate=!0;const b=C*4;for(let V=0;V<g;V++){const Y=x[V],Z=D[V],st=w[V],it=R*P*4*V;for(let I=0;I<Y.count;I++){const H=I*b;T===!0&&(o.fromBufferAttribute(Y,I),U[it+H+0]=o.x,U[it+H+1]=o.y,U[it+H+2]=o.z,U[it+H+3]=0),M===!0&&(o.fromBufferAttribute(Z,I),U[it+H+4]=o.x,U[it+H+5]=o.y,U[it+H+6]=o.z,U[it+H+7]=0),y===!0&&(o.fromBufferAttribute(st,I),U[it+H+8]=o.x,U[it+H+9]=o.y,U[it+H+10]=o.z,U[it+H+11]=st.itemSize===4?o.w:1)}}v={count:g,texture:F,size:new Pe(R,P)},a.set(f,v),f.addEventListener("dispose",L)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",c.morphTexture,n);else{let T=0;for(let y=0;y<d.length;y++)T+=d[y];const M=f.morphTargetsRelative?1:1-T;p.getUniforms().setValue(r,"morphTargetBaseInfluence",M),p.getUniforms().setValue(r,"morphTargetInfluences",d)}p.getUniforms().setValue(r,"morphTargetsTexture",v.texture,n),p.getUniforms().setValue(r,"morphTargetsTextureSize",v.size)}return{update:l}}function BC(r,t,n,a){let o=new WeakMap;function l(p){const d=a.render.frame,_=p.geometry,g=t.get(p,_);if(o.get(g)!==d&&(t.update(g),o.set(g,d)),p.isInstancedMesh&&(p.hasEventListener("dispose",f)===!1&&p.addEventListener("dispose",f),o.get(p)!==d&&(n.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&n.update(p.instanceColor,r.ARRAY_BUFFER),o.set(p,d))),p.isSkinnedMesh){const v=p.skeleton;o.get(v)!==d&&(v.update(),o.set(v,d))}return g}function c(){o=new WeakMap}function f(p){const d=p.target;d.removeEventListener("dispose",f),n.remove(d.instanceMatrix),d.instanceColor!==null&&n.remove(d.instanceColor)}return{update:l,dispose:c}}const HC={[sy]:"LINEAR_TONE_MAPPING",[oy]:"REINHARD_TONE_MAPPING",[ly]:"CINEON_TONE_MAPPING",[uy]:"ACES_FILMIC_TONE_MAPPING",[fy]:"AGX_TONE_MAPPING",[hy]:"NEUTRAL_TONE_MAPPING",[cy]:"CUSTOM_TONE_MAPPING"};function VC(r,t,n,a,o){const l=new ga(t,n,{type:r,depthBuffer:a,stencilBuffer:o}),c=new ga(t,n,{type:$a,depthBuffer:!1,stencilBuffer:!1}),f=new rr;f.setAttribute("position",new Ja([-1,3,0,-1,-1,0,3,-1,0],3)),f.setAttribute("uv",new Ja([0,2,0,0,2,0],2));const p=new Fb({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Sa(f,p),_=new M_(-1,1,1,-1,0,1);let g=null,v=null,S=!1,T,M=null,y=[],x=!1;this.setSize=function(D,w){l.setSize(D,w),c.setSize(D,w);for(let C=0;C<y.length;C++){const R=y[C];R.setSize&&R.setSize(D,w)}},this.setEffects=function(D){y=D,x=y.length>0&&y[0].isRenderPass===!0;const w=l.width,C=l.height;for(let R=0;R<y.length;R++){const P=y[R];P.setSize&&P.setSize(w,C)}},this.begin=function(D,w){if(S||D.toneMapping===_a&&y.length===0)return!1;if(M=w,w!==null){const C=w.width,R=w.height;(l.width!==C||l.height!==R)&&this.setSize(C,R)}return x===!1&&D.setRenderTarget(l),T=D.toneMapping,D.toneMapping=_a,!0},this.hasRenderPass=function(){return x},this.end=function(D,w){D.toneMapping=T,S=!0;let C=l,R=c;for(let P=0;P<y.length;P++){const U=y[P];if(U.enabled!==!1&&(U.render(D,R,C,w),U.needsSwap!==!1)){const F=C;C=R,R=F}}if(g!==D.outputColorSpace||v!==D.toneMapping){g=D.outputColorSpace,v=D.toneMapping,p.defines={},be.getTransfer(g)===He&&(p.defines.SRGB_TRANSFER="");const P=HC[v];P&&(p.defines[P]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=C.texture,D.setRenderTarget(M),D.render(d,_),M=null,S=!1},this.isCompositing=function(){return S},this.dispose=function(){l.dispose(),c.dispose(),f.dispose(),p.dispose()}}const Py=new Jn,km=new xu(1,1),Fy=new My,zy=new fb,Iy=new Dy,pS=[],mS=[],_S=new Float32Array(16),gS=new Float32Array(9),vS=new Float32Array(4);function il(r,t,n){const a=r[0];if(a<=0||a>0)return r;const o=t*n;let l=pS[o];if(l===void 0&&(l=new Float32Array(o),pS[o]=l),t!==0){a.toArray(l,0);for(let c=1,f=0;c!==t;++c)f+=n,r[c].toArray(l,f)}return l}function bn(r,t){if(r.length!==t.length)return!1;for(let n=0,a=r.length;n<a;n++)if(r[n]!==t[n])return!1;return!0}function An(r,t){for(let n=0,a=t.length;n<a;n++)r[n]=t[n]}function Xf(r,t){let n=mS[t];n===void 0&&(n=new Int32Array(t),mS[t]=n);for(let a=0;a!==t;++a)n[a]=r.allocateTextureUnit();return n}function GC(r,t){const n=this.cache;n[0]!==t&&(r.uniform1f(this.addr,t),n[0]=t)}function kC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;r.uniform2fv(this.addr,t),An(n,t)}}function XC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else if(t.r!==void 0)(n[0]!==t.r||n[1]!==t.g||n[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),n[0]=t.r,n[1]=t.g,n[2]=t.b);else{if(bn(n,t))return;r.uniform3fv(this.addr,t),An(n,t)}}function WC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;r.uniform4fv(this.addr,t),An(n,t)}}function qC(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;r.uniformMatrix2fv(this.addr,!1,t),An(n,t)}else{if(bn(n,a))return;vS.set(a),r.uniformMatrix2fv(this.addr,!1,vS),An(n,a)}}function YC(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;r.uniformMatrix3fv(this.addr,!1,t),An(n,t)}else{if(bn(n,a))return;gS.set(a),r.uniformMatrix3fv(this.addr,!1,gS),An(n,a)}}function ZC(r,t){const n=this.cache,a=t.elements;if(a===void 0){if(bn(n,t))return;r.uniformMatrix4fv(this.addr,!1,t),An(n,t)}else{if(bn(n,a))return;_S.set(a),r.uniformMatrix4fv(this.addr,!1,_S),An(n,a)}}function jC(r,t){const n=this.cache;n[0]!==t&&(r.uniform1i(this.addr,t),n[0]=t)}function KC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;r.uniform2iv(this.addr,t),An(n,t)}}function QC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;r.uniform3iv(this.addr,t),An(n,t)}}function JC(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;r.uniform4iv(this.addr,t),An(n,t)}}function $C(r,t){const n=this.cache;n[0]!==t&&(r.uniform1ui(this.addr,t),n[0]=t)}function t3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),n[0]=t.x,n[1]=t.y);else{if(bn(n,t))return;r.uniform2uiv(this.addr,t),An(n,t)}}function e3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),n[0]=t.x,n[1]=t.y,n[2]=t.z);else{if(bn(n,t))return;r.uniform3uiv(this.addr,t),An(n,t)}}function n3(r,t){const n=this.cache;if(t.x!==void 0)(n[0]!==t.x||n[1]!==t.y||n[2]!==t.z||n[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),n[0]=t.x,n[1]=t.y,n[2]=t.z,n[3]=t.w);else{if(bn(n,t))return;r.uniform4uiv(this.addr,t),An(n,t)}}function i3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o);let l;this.type===r.SAMPLER_2D_SHADOW?(km.compareFunction=n.isReversedDepthBuffer()?x_:v_,l=km):l=Py,n.setTexture2D(t||l,o)}function a3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture3D(t||zy,o)}function r3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTextureCube(t||Iy,o)}function s3(r,t,n){const a=this.cache,o=n.allocateTextureUnit();a[0]!==o&&(r.uniform1i(this.addr,o),a[0]=o),n.setTexture2DArray(t||Fy,o)}function o3(r){switch(r){case 5126:return GC;case 35664:return kC;case 35665:return XC;case 35666:return WC;case 35674:return qC;case 35675:return YC;case 35676:return ZC;case 5124:case 35670:return jC;case 35667:case 35671:return KC;case 35668:case 35672:return QC;case 35669:case 35673:return JC;case 5125:return $C;case 36294:return t3;case 36295:return e3;case 36296:return n3;case 35678:case 36198:case 36298:case 36306:case 35682:return i3;case 35679:case 36299:case 36307:return a3;case 35680:case 36300:case 36308:case 36293:return r3;case 36289:case 36303:case 36311:case 36292:return s3}}function l3(r,t){r.uniform1fv(this.addr,t)}function u3(r,t){const n=il(t,this.size,2);r.uniform2fv(this.addr,n)}function c3(r,t){const n=il(t,this.size,3);r.uniform3fv(this.addr,n)}function f3(r,t){const n=il(t,this.size,4);r.uniform4fv(this.addr,n)}function h3(r,t){const n=il(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,n)}function d3(r,t){const n=il(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,n)}function p3(r,t){const n=il(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,n)}function m3(r,t){r.uniform1iv(this.addr,t)}function _3(r,t){r.uniform2iv(this.addr,t)}function g3(r,t){r.uniform3iv(this.addr,t)}function v3(r,t){r.uniform4iv(this.addr,t)}function x3(r,t){r.uniform1uiv(this.addr,t)}function S3(r,t){r.uniform2uiv(this.addr,t)}function y3(r,t){r.uniform3uiv(this.addr,t)}function M3(r,t){r.uniform4uiv(this.addr,t)}function E3(r,t,n){const a=this.cache,o=t.length,l=Xf(n,o);bn(a,l)||(r.uniform1iv(this.addr,l),An(a,l));let c;this.type===r.SAMPLER_2D_SHADOW?c=km:c=Py;for(let f=0;f!==o;++f)n.setTexture2D(t[f]||c,l[f])}function T3(r,t,n){const a=this.cache,o=t.length,l=Xf(n,o);bn(a,l)||(r.uniform1iv(this.addr,l),An(a,l));for(let c=0;c!==o;++c)n.setTexture3D(t[c]||zy,l[c])}function b3(r,t,n){const a=this.cache,o=t.length,l=Xf(n,o);bn(a,l)||(r.uniform1iv(this.addr,l),An(a,l));for(let c=0;c!==o;++c)n.setTextureCube(t[c]||Iy,l[c])}function A3(r,t,n){const a=this.cache,o=t.length,l=Xf(n,o);bn(a,l)||(r.uniform1iv(this.addr,l),An(a,l));for(let c=0;c!==o;++c)n.setTexture2DArray(t[c]||Fy,l[c])}function R3(r){switch(r){case 5126:return l3;case 35664:return u3;case 35665:return c3;case 35666:return f3;case 35674:return h3;case 35675:return d3;case 35676:return p3;case 5124:case 35670:return m3;case 35667:case 35671:return _3;case 35668:case 35672:return g3;case 35669:case 35673:return v3;case 5125:return x3;case 36294:return S3;case 36295:return y3;case 36296:return M3;case 35678:case 36198:case 36298:case 36306:case 35682:return E3;case 35679:case 36299:case 36307:return T3;case 35680:case 36300:case 36308:case 36293:return b3;case 36289:case 36303:case 36311:case 36292:return A3}}class C3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.setValue=o3(n.type)}}class w3{constructor(t,n,a){this.id=t,this.addr=a,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=R3(n.type)}}class D3{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,n,a){const o=this.seq;for(let l=0,c=o.length;l!==c;++l){const f=o[l];f.setValue(t,n[f.id],a)}}}const Fp=/(\w+)(\])?(\[|\.)?/g;function xS(r,t){r.seq.push(t),r.map[t.id]=t}function U3(r,t,n){const a=r.name,o=a.length;for(Fp.lastIndex=0;;){const l=Fp.exec(a),c=Fp.lastIndex;let f=l[1];const p=l[2]==="]",d=l[3];if(p&&(f=f|0),d===void 0||d==="["&&c+2===o){xS(n,d===void 0?new C3(f,r,t):new w3(f,r,t));break}else{let g=n.map[f];g===void 0&&(g=new D3(f),xS(n,g)),n=g}}}class Sf{constructor(t,n){this.seq=[],this.map={};const a=t.getProgramParameter(n,t.ACTIVE_UNIFORMS);for(let c=0;c<a;++c){const f=t.getActiveUniform(n,c),p=t.getUniformLocation(n,f.name);U3(f,p,this)}const o=[],l=[];for(const c of this.seq)c.type===t.SAMPLER_2D_SHADOW||c.type===t.SAMPLER_CUBE_SHADOW||c.type===t.SAMPLER_2D_ARRAY_SHADOW?o.push(c):l.push(c);o.length>0&&(this.seq=o.concat(l))}setValue(t,n,a,o){const l=this.map[n];l!==void 0&&l.setValue(t,a,o)}setOptional(t,n,a){const o=n[a];o!==void 0&&this.setValue(t,a,o)}static upload(t,n,a,o){for(let l=0,c=n.length;l!==c;++l){const f=n[l],p=a[f.id];p.needsUpdate!==!1&&f.setValue(t,p.value,o)}}static seqWithValue(t,n){const a=[];for(let o=0,l=t.length;o!==l;++o){const c=t[o];c.id in n&&a.push(c)}return a}}function SS(r,t,n){const a=r.createShader(t);return r.shaderSource(a,n),r.compileShader(a),a}const L3=37297;let N3=0;function O3(r,t){const n=r.split(`
`),a=[],o=Math.max(t-6,0),l=Math.min(t+6,n.length);for(let c=o;c<l;c++){const f=c+1;a.push(`${f===t?">":" "} ${f}: ${n[c]}`)}return a.join(`
`)}const yS=new ce;function P3(r){be._getMatrix(yS,be.workingColorSpace,r);const t=`mat3( ${yS.elements.map(n=>n.toFixed(4))} )`;switch(be.getTransfer(r)){case bf:return[t,"LinearTransferOETF"];case He:return[t,"sRGBTransferOETF"];default:return re("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function MS(r,t,n){const a=r.getShaderParameter(t,r.COMPILE_STATUS),l=(r.getShaderInfoLog(t)||"").trim();if(a&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const f=parseInt(c[1]);return n.toUpperCase()+`

`+l+`

`+O3(r.getShaderSource(t),f)}else return l}function F3(r,t){const n=P3(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const z3={[sy]:"Linear",[oy]:"Reinhard",[ly]:"Cineon",[uy]:"ACESFilmic",[fy]:"AgX",[hy]:"Neutral",[cy]:"Custom"};function I3(r,t){const n=z3[t];return n===void 0?(re("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const hf=new ot;function B3(){be.getLuminanceCoefficients(hf);const r=hf.x.toFixed(4),t=hf.y.toFixed(4),n=hf.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function H3(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ou).join(`
`)}function V3(r){const t=[];for(const n in r){const a=r[n];a!==!1&&t.push("#define "+n+" "+a)}return t.join(`
`)}function G3(r,t){const n={},a=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=r.getActiveAttrib(t,o),c=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),n[c]={type:l.type,location:r.getAttribLocation(t,c),locationSize:f}}return n}function ou(r){return r!==""}function ES(r,t){const n=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function TS(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const k3=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xm(r){return r.replace(k3,W3)}const X3=new Map;function W3(r,t){let n=fe[t];if(n===void 0){const a=X3.get(t);if(a!==void 0)n=fe[a],re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,a);else throw new Error("Can not resolve #include <"+t+">")}return Xm(n)}const q3=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bS(r){return r.replace(q3,Y3)}function Y3(r,t,n,a){let o="";for(let l=parseInt(t);l<parseInt(n);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function AS(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}const Z3={[mf]:"SHADOWMAP_TYPE_PCF",[su]:"SHADOWMAP_TYPE_VSM"};function j3(r){return Z3[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K3={[Ps]:"ENVMAP_TYPE_CUBE",[Wo]:"ENVMAP_TYPE_CUBE",[Vf]:"ENVMAP_TYPE_CUBE_UV"};function Q3(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":K3[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const J3={[Wo]:"ENVMAP_MODE_REFRACTION"};function $3(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":J3[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const t2={[ry]:"ENVMAP_BLENDING_MULTIPLY",[W1]:"ENVMAP_BLENDING_MIX",[q1]:"ENVMAP_BLENDING_ADD"};function e2(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":t2[r.combine]||"ENVMAP_BLENDING_NONE"}function n2(r){const t=r.envMapCubeUVHeight;if(t===null)return null;const n=Math.log2(t)-2,a=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,n),112)),texelHeight:a,maxMip:n}}function i2(r,t,n,a){const o=r.getContext(),l=n.defines;let c=n.vertexShader,f=n.fragmentShader;const p=j3(n),d=Q3(n),_=$3(n),g=e2(n),v=n2(n),S=H3(n),T=V3(l),M=o.createProgram();let y,x,D=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(y=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ou).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T].filter(ou).join(`
`),x.length>0&&(x+=`
`)):(y=[AS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+_:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ou).join(`
`),x=[AS(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,T,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.envMap?"#define "+_:"",n.envMap?"#define "+g:"",v?"#define CUBEUV_TEXEL_WIDTH "+v.texelWidth:"",v?"#define CUBEUV_TEXEL_HEIGHT "+v.texelHeight:"",v?"#define CUBEUV_MAX_MIP "+v.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+p:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==_a?"#define TONE_MAPPING":"",n.toneMapping!==_a?fe.tonemapping_pars_fragment:"",n.toneMapping!==_a?I3("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",fe.colorspace_pars_fragment,F3("linearToOutputTexel",n.outputColorSpace),B3(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ou).join(`
`)),c=Xm(c),c=ES(c,n),c=TS(c,n),f=Xm(f),f=ES(f,n),f=TS(f,n),c=bS(c),f=bS(f),n.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",n.glslVersion===Gx?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gx?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=D+y+c,C=D+x+f,R=SS(o,o.VERTEX_SHADER,w),P=SS(o,o.FRAGMENT_SHADER,C);o.attachShader(M,R),o.attachShader(M,P),n.index0AttributeName!==void 0?o.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&o.bindAttribLocation(M,0,"position"),o.linkProgram(M);function U(V){if(r.debug.checkShaderErrors){const Y=o.getProgramInfoLog(M)||"",Z=o.getShaderInfoLog(R)||"",st=o.getShaderInfoLog(P)||"",it=Y.trim(),I=Z.trim(),H=st.trim();let Q=!0,xt=!0;if(o.getProgramParameter(M,o.LINK_STATUS)===!1)if(Q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(o,M,R,P);else{const gt=MS(o,R,"vertex"),z=MS(o,P,"fragment");Ce("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(M,o.VALIDATE_STATUS)+`

Material Name: `+V.name+`
Material Type: `+V.type+`

Program Info Log: `+it+`
`+gt+`
`+z)}else it!==""?re("WebGLProgram: Program Info Log:",it):(I===""||H==="")&&(xt=!1);xt&&(V.diagnostics={runnable:Q,programLog:it,vertexShader:{log:I,prefix:y},fragmentShader:{log:H,prefix:x}})}o.deleteShader(R),o.deleteShader(P),F=new Sf(o,M),b=G3(o,M)}let F;this.getUniforms=function(){return F===void 0&&U(this),F};let b;this.getAttributes=function(){return b===void 0&&U(this),b};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=o.getProgramParameter(M,L3)),L},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N3++,this.cacheKey=t,this.usedTimes=1,this.program=M,this.vertexShader=R,this.fragmentShader=P,this}let a2=0;class r2{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const n=t.vertexShader,a=t.fragmentShader,o=this._getShaderStage(n),l=this._getShaderStage(a),c=this._getShaderCacheForMaterial(t);return c.has(o)===!1&&(c.add(o),o.usedTimes++),c.has(l)===!1&&(c.add(l),l.usedTimes++),this}remove(t){const n=this.materialCache.get(t);for(const a of n)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const n=this.materialCache;let a=n.get(t);return a===void 0&&(a=new Set,n.set(t,a)),a}_getShaderStage(t){const n=this.shaderCache;let a=n.get(t);return a===void 0&&(a=new s2(t),n.set(t,a)),a}}class s2{constructor(t){this.id=a2++,this.code=t,this.usedTimes=0}}function o2(r,t,n,a,o,l,c){const f=new Ey,p=new r2,d=new Set,_=[],g=new Map,v=o.logarithmicDepthBuffer;let S=o.precision;const T={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function M(b){return d.add(b),b===0?"uv":`uv${b}`}function y(b,L,V,Y,Z){const st=Y.fog,it=Z.geometry,I=b.isMeshStandardMaterial?Y.environment:null,H=(b.isMeshStandardMaterial?n:t).get(b.envMap||I),Q=H&&H.mapping===Vf?H.image.height:null,xt=T[b.type];b.precision!==null&&(S=o.getMaxPrecision(b.precision),S!==b.precision&&re("WebGLProgram.getParameters:",b.precision,"not supported, using",S,"instead."));const gt=it.morphAttributes.position||it.morphAttributes.normal||it.morphAttributes.color,z=gt!==void 0?gt.length:0;let J=0;it.morphAttributes.position!==void 0&&(J=1),it.morphAttributes.normal!==void 0&&(J=2),it.morphAttributes.color!==void 0&&(J=3);let ht,yt,Ct,tt;if(xt){const Te=fa[xt];ht=Te.vertexShader,yt=Te.fragmentShader}else ht=b.vertexShader,yt=b.fragmentShader,p.update(b),Ct=p.getVertexShaderID(b),tt=p.getFragmentShaderID(b);const ut=r.getRenderTarget(),Tt=r.state.buffers.depth.getReversed(),Ht=Z.isInstancedMesh===!0,Bt=Z.isBatchedMesh===!0,he=!!b.map,rn=!!b.matcap,ge=!!H,de=!!b.aoMap,we=!!b.lightMap,se=!!b.bumpMap,sn=!!b.normalMap,k=!!b.displacementMap,Qe=!!b.emissiveMap,Ee=!!b.metalnessMap,Ne=!!b.roughnessMap,qt=b.anisotropy>0,B=b.clearcoat>0,A=b.dispersion>0,q=b.iridescence>0,pt=b.sheen>0,St=b.transmission>0,ft=qt&&!!b.anisotropyMap,Zt=B&&!!b.clearcoatMap,wt=B&&!!b.clearcoatNormalMap,kt=B&&!!b.clearcoatRoughnessMap,ee=q&&!!b.iridescenceMap,Et=q&&!!b.iridescenceThicknessMap,bt=pt&&!!b.sheenColorMap,zt=pt&&!!b.sheenRoughnessMap,Pt=!!b.specularMap,Dt=!!b.specularColorMap,le=!!b.specularIntensityMap,W=St&&!!b.transmissionMap,Lt=St&&!!b.thicknessMap,At=!!b.gradientMap,Ft=!!b.alphaMap,Mt=b.alphaTest>0,vt=!!b.alphaHash,Rt=!!b.extensions;let ne=_a;b.toneMapped&&(ut===null||ut.isXRRenderTarget===!0)&&(ne=r.toneMapping);const Fe={shaderID:xt,shaderType:b.type,shaderName:b.name,vertexShader:ht,fragmentShader:yt,defines:b.defines,customVertexShaderID:Ct,customFragmentShaderID:tt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:S,batching:Bt,batchingColor:Bt&&Z._colorsTexture!==null,instancing:Ht,instancingColor:Ht&&Z.instanceColor!==null,instancingMorph:Ht&&Z.morphTexture!==null,outputColorSpace:ut===null?r.outputColorSpace:ut.isXRRenderTarget===!0?ut.texture.colorSpace:Yo,alphaToCoverage:!!b.alphaToCoverage,map:he,matcap:rn,envMap:ge,envMapMode:ge&&H.mapping,envMapCubeUVHeight:Q,aoMap:de,lightMap:we,bumpMap:se,normalMap:sn,displacementMap:k,emissiveMap:Qe,normalMapObjectSpace:sn&&b.normalMapType===K1,normalMapTangentSpace:sn&&b.normalMapType===j1,metalnessMap:Ee,roughnessMap:Ne,anisotropy:qt,anisotropyMap:ft,clearcoat:B,clearcoatMap:Zt,clearcoatNormalMap:wt,clearcoatRoughnessMap:kt,dispersion:A,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Et,sheen:pt,sheenColorMap:bt,sheenRoughnessMap:zt,specularMap:Pt,specularColorMap:Dt,specularIntensityMap:le,transmission:St,transmissionMap:W,thicknessMap:Lt,gradientMap:At,opaque:b.transparent===!1&&b.blending===Bo&&b.alphaToCoverage===!1,alphaMap:Ft,alphaTest:Mt,alphaHash:vt,combine:b.combine,mapUv:he&&M(b.map.channel),aoMapUv:de&&M(b.aoMap.channel),lightMapUv:we&&M(b.lightMap.channel),bumpMapUv:se&&M(b.bumpMap.channel),normalMapUv:sn&&M(b.normalMap.channel),displacementMapUv:k&&M(b.displacementMap.channel),emissiveMapUv:Qe&&M(b.emissiveMap.channel),metalnessMapUv:Ee&&M(b.metalnessMap.channel),roughnessMapUv:Ne&&M(b.roughnessMap.channel),anisotropyMapUv:ft&&M(b.anisotropyMap.channel),clearcoatMapUv:Zt&&M(b.clearcoatMap.channel),clearcoatNormalMapUv:wt&&M(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:kt&&M(b.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&M(b.iridescenceMap.channel),iridescenceThicknessMapUv:Et&&M(b.iridescenceThicknessMap.channel),sheenColorMapUv:bt&&M(b.sheenColorMap.channel),sheenRoughnessMapUv:zt&&M(b.sheenRoughnessMap.channel),specularMapUv:Pt&&M(b.specularMap.channel),specularColorMapUv:Dt&&M(b.specularColorMap.channel),specularIntensityMapUv:le&&M(b.specularIntensityMap.channel),transmissionMapUv:W&&M(b.transmissionMap.channel),thicknessMapUv:Lt&&M(b.thicknessMap.channel),alphaMapUv:Ft&&M(b.alphaMap.channel),vertexTangents:!!it.attributes.tangent&&(sn||qt),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!it.attributes.color&&it.attributes.color.itemSize===4,pointsUvs:Z.isPoints===!0&&!!it.attributes.uv&&(he||Ft),fog:!!st,useFog:b.fog===!0,fogExp2:!!st&&st.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:v,reversedDepthBuffer:Tt,skinning:Z.isSkinnedMesh===!0,morphTargets:it.morphAttributes.position!==void 0,morphNormals:it.morphAttributes.normal!==void 0,morphColors:it.morphAttributes.color!==void 0,morphTargetsCount:z,morphTextureStride:J,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&V.length>0,shadowMapType:r.shadowMap.type,toneMapping:ne,decodeVideoTexture:he&&b.map.isVideoTexture===!0&&be.getTransfer(b.map.colorSpace)===He,decodeVideoTextureEmissive:Qe&&b.emissiveMap.isVideoTexture===!0&&be.getTransfer(b.emissiveMap.colorSpace)===He,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Ya,flipSided:b.side===si,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Rt&&b.extensions.clipCullDistance===!0&&a.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Rt&&b.extensions.multiDraw===!0||Bt)&&a.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:a.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Fe.vertexUv1s=d.has(1),Fe.vertexUv2s=d.has(2),Fe.vertexUv3s=d.has(3),d.clear(),Fe}function x(b){const L=[];if(b.shaderID?L.push(b.shaderID):(L.push(b.customVertexShaderID),L.push(b.customFragmentShaderID)),b.defines!==void 0)for(const V in b.defines)L.push(V),L.push(b.defines[V]);return b.isRawShaderMaterial===!1&&(D(L,b),w(L,b),L.push(r.outputColorSpace)),L.push(b.customProgramCacheKey),L.join()}function D(b,L){b.push(L.precision),b.push(L.outputColorSpace),b.push(L.envMapMode),b.push(L.envMapCubeUVHeight),b.push(L.mapUv),b.push(L.alphaMapUv),b.push(L.lightMapUv),b.push(L.aoMapUv),b.push(L.bumpMapUv),b.push(L.normalMapUv),b.push(L.displacementMapUv),b.push(L.emissiveMapUv),b.push(L.metalnessMapUv),b.push(L.roughnessMapUv),b.push(L.anisotropyMapUv),b.push(L.clearcoatMapUv),b.push(L.clearcoatNormalMapUv),b.push(L.clearcoatRoughnessMapUv),b.push(L.iridescenceMapUv),b.push(L.iridescenceThicknessMapUv),b.push(L.sheenColorMapUv),b.push(L.sheenRoughnessMapUv),b.push(L.specularMapUv),b.push(L.specularColorMapUv),b.push(L.specularIntensityMapUv),b.push(L.transmissionMapUv),b.push(L.thicknessMapUv),b.push(L.combine),b.push(L.fogExp2),b.push(L.sizeAttenuation),b.push(L.morphTargetsCount),b.push(L.morphAttributeCount),b.push(L.numDirLights),b.push(L.numPointLights),b.push(L.numSpotLights),b.push(L.numSpotLightMaps),b.push(L.numHemiLights),b.push(L.numRectAreaLights),b.push(L.numDirLightShadows),b.push(L.numPointLightShadows),b.push(L.numSpotLightShadows),b.push(L.numSpotLightShadowsWithMaps),b.push(L.numLightProbes),b.push(L.shadowMapType),b.push(L.toneMapping),b.push(L.numClippingPlanes),b.push(L.numClipIntersection),b.push(L.depthPacking)}function w(b,L){f.disableAll(),L.instancing&&f.enable(0),L.instancingColor&&f.enable(1),L.instancingMorph&&f.enable(2),L.matcap&&f.enable(3),L.envMap&&f.enable(4),L.normalMapObjectSpace&&f.enable(5),L.normalMapTangentSpace&&f.enable(6),L.clearcoat&&f.enable(7),L.iridescence&&f.enable(8),L.alphaTest&&f.enable(9),L.vertexColors&&f.enable(10),L.vertexAlphas&&f.enable(11),L.vertexUv1s&&f.enable(12),L.vertexUv2s&&f.enable(13),L.vertexUv3s&&f.enable(14),L.vertexTangents&&f.enable(15),L.anisotropy&&f.enable(16),L.alphaHash&&f.enable(17),L.batching&&f.enable(18),L.dispersion&&f.enable(19),L.batchingColor&&f.enable(20),L.gradientMap&&f.enable(21),b.push(f.mask),f.disableAll(),L.fog&&f.enable(0),L.useFog&&f.enable(1),L.flatShading&&f.enable(2),L.logarithmicDepthBuffer&&f.enable(3),L.reversedDepthBuffer&&f.enable(4),L.skinning&&f.enable(5),L.morphTargets&&f.enable(6),L.morphNormals&&f.enable(7),L.morphColors&&f.enable(8),L.premultipliedAlpha&&f.enable(9),L.shadowMapEnabled&&f.enable(10),L.doubleSided&&f.enable(11),L.flipSided&&f.enable(12),L.useDepthPacking&&f.enable(13),L.dithering&&f.enable(14),L.transmission&&f.enable(15),L.sheen&&f.enable(16),L.opaque&&f.enable(17),L.pointsUvs&&f.enable(18),L.decodeVideoTexture&&f.enable(19),L.decodeVideoTextureEmissive&&f.enable(20),L.alphaToCoverage&&f.enable(21),b.push(f.mask)}function C(b){const L=T[b.type];let V;if(L){const Y=fa[L];V=bb.clone(Y.uniforms)}else V=b.uniforms;return V}function R(b,L){let V=g.get(L);return V!==void 0?++V.usedTimes:(V=new i2(r,L,b,l),_.push(V),g.set(L,V)),V}function P(b){if(--b.usedTimes===0){const L=_.indexOf(b);_[L]=_[_.length-1],_.pop(),g.delete(b.cacheKey),b.destroy()}}function U(b){p.remove(b)}function F(){p.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:C,acquireProgram:R,releaseProgram:P,releaseShaderCache:U,programs:_,dispose:F}}function l2(){let r=new WeakMap;function t(c){return r.has(c)}function n(c){let f=r.get(c);return f===void 0&&(f={},r.set(c,f)),f}function a(c){r.delete(c)}function o(c,f,p){r.get(c)[f]=p}function l(){r=new WeakMap}return{has:t,get:n,remove:a,update:o,dispose:l}}function u2(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function RS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function CS(){const r=[];let t=0;const n=[],a=[],o=[];function l(){t=0,n.length=0,a.length=0,o.length=0}function c(g,v,S,T,M,y){let x=r[t];return x===void 0?(x={id:g.id,object:g,geometry:v,material:S,groupOrder:T,renderOrder:g.renderOrder,z:M,group:y},r[t]=x):(x.id=g.id,x.object=g,x.geometry=v,x.material=S,x.groupOrder=T,x.renderOrder=g.renderOrder,x.z=M,x.group=y),t++,x}function f(g,v,S,T,M,y){const x=c(g,v,S,T,M,y);S.transmission>0?a.push(x):S.transparent===!0?o.push(x):n.push(x)}function p(g,v,S,T,M,y){const x=c(g,v,S,T,M,y);S.transmission>0?a.unshift(x):S.transparent===!0?o.unshift(x):n.unshift(x)}function d(g,v){n.length>1&&n.sort(g||u2),a.length>1&&a.sort(v||RS),o.length>1&&o.sort(v||RS)}function _(){for(let g=t,v=r.length;g<v;g++){const S=r[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:n,transmissive:a,transparent:o,init:l,push:f,unshift:p,finish:_,sort:d}}function c2(){let r=new WeakMap;function t(a,o){const l=r.get(a);let c;return l===void 0?(c=new CS,r.set(a,[c])):o>=l.length?(c=new CS,l.push(c)):c=l[o],c}function n(){r=new WeakMap}return{get:t,dispose:n}}function f2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={direction:new ot,color:new Ve};break;case"SpotLight":n={position:new ot,direction:new ot,color:new Ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new ot,color:new Ve,distance:0,decay:0};break;case"HemisphereLight":n={direction:new ot,skyColor:new Ve,groundColor:new Ve};break;case"RectAreaLight":n={color:new Ve,position:new ot,halfWidth:new ot,halfHeight:new ot};break}return r[t.id]=n,n}}}function h2(){const r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let n;switch(t.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pe,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=n,n}}}let d2=0;function p2(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function m2(r){const t=new f2,n=h2(),a={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)a.probe.push(new ot);const o=new ot,l=new Mn,c=new Mn;function f(d){let _=0,g=0,v=0;for(let b=0;b<9;b++)a.probe[b].set(0,0,0);let S=0,T=0,M=0,y=0,x=0,D=0,w=0,C=0,R=0,P=0,U=0;d.sort(p2);for(let b=0,L=d.length;b<L;b++){const V=d[b],Y=V.color,Z=V.intensity,st=V.distance;let it=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===qo?it=V.shadow.map.texture:it=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)_+=Y.r*Z,g+=Y.g*Z,v+=Y.b*Z;else if(V.isLightProbe){for(let I=0;I<9;I++)a.probe[I].addScaledVector(V.sh.coefficients[I],Z);U++}else if(V.isDirectionalLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const H=V.shadow,Q=n.get(V);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,a.directionalShadow[S]=Q,a.directionalShadowMap[S]=it,a.directionalShadowMatrix[S]=V.shadow.matrix,D++}a.directional[S]=I,S++}else if(V.isSpotLight){const I=t.get(V);I.position.setFromMatrixPosition(V.matrixWorld),I.color.copy(Y).multiplyScalar(Z),I.distance=st,I.coneCos=Math.cos(V.angle),I.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),I.decay=V.decay,a.spot[M]=I;const H=V.shadow;if(V.map&&(a.spotLightMap[R]=V.map,R++,H.updateMatrices(V),V.castShadow&&P++),a.spotLightMatrix[M]=H.matrix,V.castShadow){const Q=n.get(V);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,a.spotShadow[M]=Q,a.spotShadowMap[M]=it,C++}M++}else if(V.isRectAreaLight){const I=t.get(V);I.color.copy(Y).multiplyScalar(Z),I.halfWidth.set(V.width*.5,0,0),I.halfHeight.set(0,V.height*.5,0),a.rectArea[y]=I,y++}else if(V.isPointLight){const I=t.get(V);if(I.color.copy(V.color).multiplyScalar(V.intensity),I.distance=V.distance,I.decay=V.decay,V.castShadow){const H=V.shadow,Q=n.get(V);Q.shadowIntensity=H.intensity,Q.shadowBias=H.bias,Q.shadowNormalBias=H.normalBias,Q.shadowRadius=H.radius,Q.shadowMapSize=H.mapSize,Q.shadowCameraNear=H.camera.near,Q.shadowCameraFar=H.camera.far,a.pointShadow[T]=Q,a.pointShadowMap[T]=it,a.pointShadowMatrix[T]=V.shadow.matrix,w++}a.point[T]=I,T++}else if(V.isHemisphereLight){const I=t.get(V);I.skyColor.copy(V.color).multiplyScalar(Z),I.groundColor.copy(V.groundColor).multiplyScalar(Z),a.hemi[x]=I,x++}}y>0&&(r.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ot.LTC_FLOAT_1,a.rectAreaLTC2=Ot.LTC_FLOAT_2):(a.rectAreaLTC1=Ot.LTC_HALF_1,a.rectAreaLTC2=Ot.LTC_HALF_2)),a.ambient[0]=_,a.ambient[1]=g,a.ambient[2]=v;const F=a.hash;(F.directionalLength!==S||F.pointLength!==T||F.spotLength!==M||F.rectAreaLength!==y||F.hemiLength!==x||F.numDirectionalShadows!==D||F.numPointShadows!==w||F.numSpotShadows!==C||F.numSpotMaps!==R||F.numLightProbes!==U)&&(a.directional.length=S,a.spot.length=M,a.rectArea.length=y,a.point.length=T,a.hemi.length=x,a.directionalShadow.length=D,a.directionalShadowMap.length=D,a.pointShadow.length=w,a.pointShadowMap.length=w,a.spotShadow.length=C,a.spotShadowMap.length=C,a.directionalShadowMatrix.length=D,a.pointShadowMatrix.length=w,a.spotLightMatrix.length=C+R-P,a.spotLightMap.length=R,a.numSpotLightShadowsWithMaps=P,a.numLightProbes=U,F.directionalLength=S,F.pointLength=T,F.spotLength=M,F.rectAreaLength=y,F.hemiLength=x,F.numDirectionalShadows=D,F.numPointShadows=w,F.numSpotShadows=C,F.numSpotMaps=R,F.numLightProbes=U,a.version=d2++)}function p(d,_){let g=0,v=0,S=0,T=0,M=0;const y=_.matrixWorldInverse;for(let x=0,D=d.length;x<D;x++){const w=d[x];if(w.isDirectionalLight){const C=a.directional[g];C.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),g++}else if(w.isSpotLight){const C=a.spot[S];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(w.matrixWorld),o.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(y),S++}else if(w.isRectAreaLight){const C=a.rectArea[T];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),c.identity(),l.copy(w.matrixWorld),l.premultiply(y),c.extractRotation(l),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(w.isPointLight){const C=a.point[v];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),v++}else if(w.isHemisphereLight){const C=a.hemi[M];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(y),M++}}}return{setup:f,setupView:p,state:a}}function wS(r){const t=new m2(r),n=[],a=[];function o(_){d.camera=_,n.length=0,a.length=0}function l(_){n.push(_)}function c(_){a.push(_)}function f(){t.setup(n)}function p(_){t.setupView(n,_)}const d={lightsArray:n,shadowsArray:a,camera:null,lights:t,transmissionRenderTarget:{}};return{init:o,state:d,setupLights:f,setupLightsView:p,pushLight:l,pushShadow:c}}function _2(r){let t=new WeakMap;function n(o,l=0){const c=t.get(o);let f;return c===void 0?(f=new wS(r),t.set(o,[f])):l>=c.length?(f=new wS(r),c.push(f)):f=c[l],f}function a(){t=new WeakMap}return{get:n,dispose:a}}const g2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,x2=[new ot(1,0,0),new ot(-1,0,0),new ot(0,1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1)],S2=[new ot(0,-1,0),new ot(0,-1,0),new ot(0,0,1),new ot(0,0,-1),new ot(0,-1,0),new ot(0,-1,0)],DS=new Mn,au=new ot,zp=new ot;function y2(r,t,n){let a=new Ly;const o=new Pe,l=new Pe,c=new pn,f=new zb,p=new Ib,d={},_=n.maxTextureSize,g={[qr]:si,[si]:qr,[Ya]:Ya},v=new ia({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pe},radius:{value:4}},vertexShader:g2,fragmentShader:v2}),S=v.clone();S.defines.HORIZONTAL_PASS=1;const T=new rr;T.setAttribute("position",new va(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Sa(T,v),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=mf;let x=this.type;this.render=function(P,U,F){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;P.type===A1&&(re("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),P.type=mf);const b=r.getRenderTarget(),L=r.getActiveCubeFace(),V=r.getActiveMipmapLevel(),Y=r.state;Y.setBlending(Ka),Y.buffers.depth.getReversed()===!0?Y.buffers.color.setClear(0,0,0,0):Y.buffers.color.setClear(1,1,1,1),Y.buffers.depth.setTest(!0),Y.setScissorTest(!1);const Z=x!==this.type;Z&&U.traverse(function(st){st.material&&(Array.isArray(st.material)?st.material.forEach(it=>it.needsUpdate=!0):st.material.needsUpdate=!0)});for(let st=0,it=P.length;st<it;st++){const I=P[st],H=I.shadow;if(H===void 0){re("WebGLShadowMap:",I,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;o.copy(H.mapSize);const Q=H.getFrameExtents();if(o.multiply(Q),l.copy(H.mapSize),(o.x>_||o.y>_)&&(o.x>_&&(l.x=Math.floor(_/Q.x),o.x=l.x*Q.x,H.mapSize.x=l.x),o.y>_&&(l.y=Math.floor(_/Q.y),o.y=l.y*Q.y,H.mapSize.y=l.y)),H.map===null||Z===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===su){if(I.isPointLight){re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new ga(o.x,o.y,{format:qo,type:$a,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),H.map.texture.name=I.name+".shadowMap",H.map.depthTexture=new xu(o.x,o.y,da),H.map.depthTexture.name=I.name+".shadowMapDepth",H.map.depthTexture.format=tr,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn}else{I.isPointLight?(H.map=new Uy(o.x),H.map.depthTexture=new Pb(o.x,xa)):(H.map=new ga(o.x,o.y),H.map.depthTexture=new xu(o.x,o.y,xa)),H.map.depthTexture.name=I.name+".shadowMap",H.map.depthTexture.format=tr;const gt=r.state.buffers.depth.getReversed();this.type===mf?(H.map.depthTexture.compareFunction=gt?x_:v_,H.map.depthTexture.minFilter=Yn,H.map.depthTexture.magFilter=Yn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Hn,H.map.depthTexture.magFilter=Hn)}H.camera.updateProjectionMatrix()}const xt=H.map.isWebGLCubeRenderTarget?6:1;for(let gt=0;gt<xt;gt++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,gt),r.clear();else{gt===0&&(r.setRenderTarget(H.map),r.clear());const z=H.getViewport(gt);c.set(l.x*z.x,l.y*z.y,l.x*z.z,l.y*z.w),Y.viewport(c)}if(I.isPointLight){const z=H.camera,J=H.matrix,ht=I.distance||z.far;ht!==z.far&&(z.far=ht,z.updateProjectionMatrix()),au.setFromMatrixPosition(I.matrixWorld),z.position.copy(au),zp.copy(z.position),zp.add(x2[gt]),z.up.copy(S2[gt]),z.lookAt(zp),z.updateMatrixWorld(),J.makeTranslation(-au.x,-au.y,-au.z),DS.multiplyMatrices(z.projectionMatrix,z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(DS,z.coordinateSystem,z.reversedDepth)}else H.updateMatrices(I);a=H.getFrustum(),C(U,F,H.camera,I,this.type)}H.isPointLightShadow!==!0&&this.type===su&&D(H,F),H.needsUpdate=!1}x=this.type,y.needsUpdate=!1,r.setRenderTarget(b,L,V)};function D(P,U){const F=t.update(M);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,S.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,S.needsUpdate=!0),P.mapPass===null&&(P.mapPass=new ga(o.x,o.y,{format:qo,type:$a})),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value=P.mapSize,v.uniforms.radius.value=P.radius,r.setRenderTarget(P.mapPass),r.clear(),r.renderBufferDirect(U,null,F,v,M,null),S.uniforms.shadow_pass.value=P.mapPass.texture,S.uniforms.resolution.value=P.mapSize,S.uniforms.radius.value=P.radius,r.setRenderTarget(P.map),r.clear(),r.renderBufferDirect(U,null,F,S,M,null)}function w(P,U,F,b){let L=null;const V=F.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)L=V;else if(L=F.isPointLight===!0?p:f,r.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0||U.alphaToCoverage===!0){const Y=L.uuid,Z=U.uuid;let st=d[Y];st===void 0&&(st={},d[Y]=st);let it=st[Z];it===void 0&&(it=L.clone(),st[Z]=it,U.addEventListener("dispose",R)),L=it}if(L.visible=U.visible,L.wireframe=U.wireframe,b===su?L.side=U.shadowSide!==null?U.shadowSide:U.side:L.side=U.shadowSide!==null?U.shadowSide:g[U.side],L.alphaMap=U.alphaMap,L.alphaTest=U.alphaToCoverage===!0?.5:U.alphaTest,L.map=U.map,L.clipShadows=U.clipShadows,L.clippingPlanes=U.clippingPlanes,L.clipIntersection=U.clipIntersection,L.displacementMap=U.displacementMap,L.displacementScale=U.displacementScale,L.displacementBias=U.displacementBias,L.wireframeLinewidth=U.wireframeLinewidth,L.linewidth=U.linewidth,F.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const Y=r.properties.get(L);Y.light=F}return L}function C(P,U,F,b,L){if(P.visible===!1)return;if(P.layers.test(U.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&L===su)&&(!P.frustumCulled||a.intersectsObject(P))){P.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,P.matrixWorld);const Z=t.update(P),st=P.material;if(Array.isArray(st)){const it=Z.groups;for(let I=0,H=it.length;I<H;I++){const Q=it[I],xt=st[Q.materialIndex];if(xt&&xt.visible){const gt=w(P,xt,b,L);P.onBeforeShadow(r,P,U,F,Z,gt,Q),r.renderBufferDirect(F,null,Z,gt,P,Q),P.onAfterShadow(r,P,U,F,Z,gt,Q)}}}else if(st.visible){const it=w(P,st,b,L);P.onBeforeShadow(r,P,U,F,Z,it,null),r.renderBufferDirect(F,null,Z,it,P,null),P.onAfterShadow(r,P,U,F,Z,it,null)}}const Y=P.children;for(let Z=0,st=Y.length;Z<st;Z++)C(Y[Z],U,F,b,L)}function R(P){P.target.removeEventListener("dispose",R);for(const F in d){const b=d[F],L=P.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}const M2={[$p]:tm,[em]:am,[nm]:rm,[Xo]:im,[tm]:$p,[am]:em,[rm]:nm,[im]:Xo};function E2(r,t){function n(){let W=!1;const Lt=new pn;let At=null;const Ft=new pn(0,0,0,0);return{setMask:function(Mt){At!==Mt&&!W&&(r.colorMask(Mt,Mt,Mt,Mt),At=Mt)},setLocked:function(Mt){W=Mt},setClear:function(Mt,vt,Rt,ne,Fe){Fe===!0&&(Mt*=ne,vt*=ne,Rt*=ne),Lt.set(Mt,vt,Rt,ne),Ft.equals(Lt)===!1&&(r.clearColor(Mt,vt,Rt,ne),Ft.copy(Lt))},reset:function(){W=!1,At=null,Ft.set(-1,0,0,0)}}}function a(){let W=!1,Lt=!1,At=null,Ft=null,Mt=null;return{setReversed:function(vt){if(Lt!==vt){const Rt=t.get("EXT_clip_control");vt?Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.ZERO_TO_ONE_EXT):Rt.clipControlEXT(Rt.LOWER_LEFT_EXT,Rt.NEGATIVE_ONE_TO_ONE_EXT),Lt=vt;const ne=Mt;Mt=null,this.setClear(ne)}},getReversed:function(){return Lt},setTest:function(vt){vt?ut(r.DEPTH_TEST):Tt(r.DEPTH_TEST)},setMask:function(vt){At!==vt&&!W&&(r.depthMask(vt),At=vt)},setFunc:function(vt){if(Lt&&(vt=M2[vt]),Ft!==vt){switch(vt){case $p:r.depthFunc(r.NEVER);break;case tm:r.depthFunc(r.ALWAYS);break;case em:r.depthFunc(r.LESS);break;case Xo:r.depthFunc(r.LEQUAL);break;case nm:r.depthFunc(r.EQUAL);break;case im:r.depthFunc(r.GEQUAL);break;case am:r.depthFunc(r.GREATER);break;case rm:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ft=vt}},setLocked:function(vt){W=vt},setClear:function(vt){Mt!==vt&&(Lt&&(vt=1-vt),r.clearDepth(vt),Mt=vt)},reset:function(){W=!1,At=null,Ft=null,Mt=null,Lt=!1}}}function o(){let W=!1,Lt=null,At=null,Ft=null,Mt=null,vt=null,Rt=null,ne=null,Fe=null;return{setTest:function(Te){W||(Te?ut(r.STENCIL_TEST):Tt(r.STENCIL_TEST))},setMask:function(Te){Lt!==Te&&!W&&(r.stencilMask(Te),Lt=Te)},setFunc:function(Te,Gn,Wi){(At!==Te||Ft!==Gn||Mt!==Wi)&&(r.stencilFunc(Te,Gn,Wi),At=Te,Ft=Gn,Mt=Wi)},setOp:function(Te,Gn,Wi){(vt!==Te||Rt!==Gn||ne!==Wi)&&(r.stencilOp(Te,Gn,Wi),vt=Te,Rt=Gn,ne=Wi)},setLocked:function(Te){W=Te},setClear:function(Te){Fe!==Te&&(r.clearStencil(Te),Fe=Te)},reset:function(){W=!1,Lt=null,At=null,Ft=null,Mt=null,vt=null,Rt=null,ne=null,Fe=null}}}const l=new n,c=new a,f=new o,p=new WeakMap,d=new WeakMap;let _={},g={},v=new WeakMap,S=[],T=null,M=!1,y=null,x=null,D=null,w=null,C=null,R=null,P=null,U=new Ve(0,0,0),F=0,b=!1,L=null,V=null,Y=null,Z=null,st=null;const it=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let I=!1,H=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),I=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),I=H>=2);let xt=null,gt={};const z=r.getParameter(r.SCISSOR_BOX),J=r.getParameter(r.VIEWPORT),ht=new pn().fromArray(z),yt=new pn().fromArray(J);function Ct(W,Lt,At,Ft){const Mt=new Uint8Array(4),vt=r.createTexture();r.bindTexture(W,vt),r.texParameteri(W,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(W,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Rt=0;Rt<At;Rt++)W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?r.texImage3D(Lt,0,r.RGBA,1,1,Ft,0,r.RGBA,r.UNSIGNED_BYTE,Mt):r.texImage2D(Lt+Rt,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,Mt);return vt}const tt={};tt[r.TEXTURE_2D]=Ct(r.TEXTURE_2D,r.TEXTURE_2D,1),tt[r.TEXTURE_CUBE_MAP]=Ct(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),tt[r.TEXTURE_2D_ARRAY]=Ct(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),tt[r.TEXTURE_3D]=Ct(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),f.setClear(0),ut(r.DEPTH_TEST),c.setFunc(Xo),se(!1),sn(Fx),ut(r.CULL_FACE),de(Ka);function ut(W){_[W]!==!0&&(r.enable(W),_[W]=!0)}function Tt(W){_[W]!==!1&&(r.disable(W),_[W]=!1)}function Ht(W,Lt){return g[W]!==Lt?(r.bindFramebuffer(W,Lt),g[W]=Lt,W===r.DRAW_FRAMEBUFFER&&(g[r.FRAMEBUFFER]=Lt),W===r.FRAMEBUFFER&&(g[r.DRAW_FRAMEBUFFER]=Lt),!0):!1}function Bt(W,Lt){let At=S,Ft=!1;if(W){At=v.get(Lt),At===void 0&&(At=[],v.set(Lt,At));const Mt=W.textures;if(At.length!==Mt.length||At[0]!==r.COLOR_ATTACHMENT0){for(let vt=0,Rt=Mt.length;vt<Rt;vt++)At[vt]=r.COLOR_ATTACHMENT0+vt;At.length=Mt.length,Ft=!0}}else At[0]!==r.BACK&&(At[0]=r.BACK,Ft=!0);Ft&&r.drawBuffers(At)}function he(W){return T!==W?(r.useProgram(W),T=W,!0):!1}const rn={[bs]:r.FUNC_ADD,[C1]:r.FUNC_SUBTRACT,[w1]:r.FUNC_REVERSE_SUBTRACT};rn[D1]=r.MIN,rn[U1]=r.MAX;const ge={[L1]:r.ZERO,[N1]:r.ONE,[O1]:r.SRC_COLOR,[Qp]:r.SRC_ALPHA,[H1]:r.SRC_ALPHA_SATURATE,[I1]:r.DST_COLOR,[F1]:r.DST_ALPHA,[P1]:r.ONE_MINUS_SRC_COLOR,[Jp]:r.ONE_MINUS_SRC_ALPHA,[B1]:r.ONE_MINUS_DST_COLOR,[z1]:r.ONE_MINUS_DST_ALPHA,[V1]:r.CONSTANT_COLOR,[G1]:r.ONE_MINUS_CONSTANT_COLOR,[k1]:r.CONSTANT_ALPHA,[X1]:r.ONE_MINUS_CONSTANT_ALPHA};function de(W,Lt,At,Ft,Mt,vt,Rt,ne,Fe,Te){if(W===Ka){M===!0&&(Tt(r.BLEND),M=!1);return}if(M===!1&&(ut(r.BLEND),M=!0),W!==R1){if(W!==y||Te!==b){if((x!==bs||C!==bs)&&(r.blendEquation(r.FUNC_ADD),x=bs,C=bs),Te)switch(W){case Bo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zx:r.blendFunc(r.ONE,r.ONE);break;case Ix:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Bx:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Ce("WebGLState: Invalid blending: ",W);break}else switch(W){case Bo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zx:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ix:Ce("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Bx:Ce("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ce("WebGLState: Invalid blending: ",W);break}D=null,w=null,R=null,P=null,U.set(0,0,0),F=0,y=W,b=Te}return}Mt=Mt||Lt,vt=vt||At,Rt=Rt||Ft,(Lt!==x||Mt!==C)&&(r.blendEquationSeparate(rn[Lt],rn[Mt]),x=Lt,C=Mt),(At!==D||Ft!==w||vt!==R||Rt!==P)&&(r.blendFuncSeparate(ge[At],ge[Ft],ge[vt],ge[Rt]),D=At,w=Ft,R=vt,P=Rt),(ne.equals(U)===!1||Fe!==F)&&(r.blendColor(ne.r,ne.g,ne.b,Fe),U.copy(ne),F=Fe),y=W,b=!1}function we(W,Lt){W.side===Ya?Tt(r.CULL_FACE):ut(r.CULL_FACE);let At=W.side===si;Lt&&(At=!At),se(At),W.blending===Bo&&W.transparent===!1?de(Ka):de(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),c.setFunc(W.depthFunc),c.setTest(W.depthTest),c.setMask(W.depthWrite),l.setMask(W.colorWrite);const Ft=W.stencilWrite;f.setTest(Ft),Ft&&(f.setMask(W.stencilWriteMask),f.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),f.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Qe(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?ut(r.SAMPLE_ALPHA_TO_COVERAGE):Tt(r.SAMPLE_ALPHA_TO_COVERAGE)}function se(W){L!==W&&(W?r.frontFace(r.CW):r.frontFace(r.CCW),L=W)}function sn(W){W!==T1?(ut(r.CULL_FACE),W!==V&&(W===Fx?r.cullFace(r.BACK):W===b1?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Tt(r.CULL_FACE),V=W}function k(W){W!==Y&&(I&&r.lineWidth(W),Y=W)}function Qe(W,Lt,At){W?(ut(r.POLYGON_OFFSET_FILL),(Z!==Lt||st!==At)&&(r.polygonOffset(Lt,At),Z=Lt,st=At)):Tt(r.POLYGON_OFFSET_FILL)}function Ee(W){W?ut(r.SCISSOR_TEST):Tt(r.SCISSOR_TEST)}function Ne(W){W===void 0&&(W=r.TEXTURE0+it-1),xt!==W&&(r.activeTexture(W),xt=W)}function qt(W,Lt,At){At===void 0&&(xt===null?At=r.TEXTURE0+it-1:At=xt);let Ft=gt[At];Ft===void 0&&(Ft={type:void 0,texture:void 0},gt[At]=Ft),(Ft.type!==W||Ft.texture!==Lt)&&(xt!==At&&(r.activeTexture(At),xt=At),r.bindTexture(W,Lt||tt[W]),Ft.type=W,Ft.texture=Lt)}function B(){const W=gt[xt];W!==void 0&&W.type!==void 0&&(r.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function A(){try{r.compressedTexImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function q(){try{r.compressedTexImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function pt(){try{r.texSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function St(){try{r.texSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ft(){try{r.compressedTexSubImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Zt(){try{r.compressedTexSubImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function wt(){try{r.texStorage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function kt(){try{r.texStorage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function ee(){try{r.texImage2D(...arguments)}catch(W){Ce("WebGLState:",W)}}function Et(){try{r.texImage3D(...arguments)}catch(W){Ce("WebGLState:",W)}}function bt(W){ht.equals(W)===!1&&(r.scissor(W.x,W.y,W.z,W.w),ht.copy(W))}function zt(W){yt.equals(W)===!1&&(r.viewport(W.x,W.y,W.z,W.w),yt.copy(W))}function Pt(W,Lt){let At=d.get(Lt);At===void 0&&(At=new WeakMap,d.set(Lt,At));let Ft=At.get(W);Ft===void 0&&(Ft=r.getUniformBlockIndex(Lt,W.name),At.set(W,Ft))}function Dt(W,Lt){const Ft=d.get(Lt).get(W);p.get(Lt)!==Ft&&(r.uniformBlockBinding(Lt,Ft,W.__bindingPointIndex),p.set(Lt,Ft))}function le(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),c.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),_={},xt=null,gt={},g={},v=new WeakMap,S=[],T=null,M=!1,y=null,x=null,D=null,w=null,C=null,R=null,P=null,U=new Ve(0,0,0),F=0,b=!1,L=null,V=null,Y=null,Z=null,st=null,ht.set(0,0,r.canvas.width,r.canvas.height),yt.set(0,0,r.canvas.width,r.canvas.height),l.reset(),c.reset(),f.reset()}return{buffers:{color:l,depth:c,stencil:f},enable:ut,disable:Tt,bindFramebuffer:Ht,drawBuffers:Bt,useProgram:he,setBlending:de,setMaterial:we,setFlipSided:se,setCullFace:sn,setLineWidth:k,setPolygonOffset:Qe,setScissorTest:Ee,activeTexture:Ne,bindTexture:qt,unbindTexture:B,compressedTexImage2D:A,compressedTexImage3D:q,texImage2D:ee,texImage3D:Et,updateUBOMapping:Pt,uniformBlockBinding:Dt,texStorage2D:wt,texStorage3D:kt,texSubImage2D:pt,texSubImage3D:St,compressedTexSubImage2D:ft,compressedTexSubImage3D:Zt,scissor:bt,viewport:zt,reset:le}}function T2(r,t,n,a,o,l,c){const f=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new Pe,_=new WeakMap;let g;const v=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(B,A){return S?new OffscreenCanvas(B,A):Rf("canvas")}function M(B,A,q){let pt=1;const St=qt(B);if((St.width>q||St.height>q)&&(pt=q/Math.max(St.width,St.height)),pt<1)if(typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&B instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&B instanceof ImageBitmap||typeof VideoFrame<"u"&&B instanceof VideoFrame){const ft=Math.floor(pt*St.width),Zt=Math.floor(pt*St.height);g===void 0&&(g=T(ft,Zt));const wt=A?T(ft,Zt):g;return wt.width=ft,wt.height=Zt,wt.getContext("2d").drawImage(B,0,0,ft,Zt),re("WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+ft+"x"+Zt+")."),wt}else return"data"in B&&re("WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),B;return B}function y(B){return B.generateMipmaps}function x(B){r.generateMipmap(B)}function D(B){return B.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:B.isWebGL3DRenderTarget?r.TEXTURE_3D:B.isWebGLArrayRenderTarget||B.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function w(B,A,q,pt,St=!1){if(B!==null){if(r[B]!==void 0)return r[B];re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+B+"'")}let ft=A;if(A===r.RED&&(q===r.FLOAT&&(ft=r.R32F),q===r.HALF_FLOAT&&(ft=r.R16F),q===r.UNSIGNED_BYTE&&(ft=r.R8)),A===r.RED_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.R8UI),q===r.UNSIGNED_SHORT&&(ft=r.R16UI),q===r.UNSIGNED_INT&&(ft=r.R32UI),q===r.BYTE&&(ft=r.R8I),q===r.SHORT&&(ft=r.R16I),q===r.INT&&(ft=r.R32I)),A===r.RG&&(q===r.FLOAT&&(ft=r.RG32F),q===r.HALF_FLOAT&&(ft=r.RG16F),q===r.UNSIGNED_BYTE&&(ft=r.RG8)),A===r.RG_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RG8UI),q===r.UNSIGNED_SHORT&&(ft=r.RG16UI),q===r.UNSIGNED_INT&&(ft=r.RG32UI),q===r.BYTE&&(ft=r.RG8I),q===r.SHORT&&(ft=r.RG16I),q===r.INT&&(ft=r.RG32I)),A===r.RGB_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGB8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGB16UI),q===r.UNSIGNED_INT&&(ft=r.RGB32UI),q===r.BYTE&&(ft=r.RGB8I),q===r.SHORT&&(ft=r.RGB16I),q===r.INT&&(ft=r.RGB32I)),A===r.RGBA_INTEGER&&(q===r.UNSIGNED_BYTE&&(ft=r.RGBA8UI),q===r.UNSIGNED_SHORT&&(ft=r.RGBA16UI),q===r.UNSIGNED_INT&&(ft=r.RGBA32UI),q===r.BYTE&&(ft=r.RGBA8I),q===r.SHORT&&(ft=r.RGBA16I),q===r.INT&&(ft=r.RGBA32I)),A===r.RGB&&(q===r.UNSIGNED_INT_5_9_9_9_REV&&(ft=r.RGB9_E5),q===r.UNSIGNED_INT_10F_11F_11F_REV&&(ft=r.R11F_G11F_B10F)),A===r.RGBA){const Zt=St?bf:be.getTransfer(pt);q===r.FLOAT&&(ft=r.RGBA32F),q===r.HALF_FLOAT&&(ft=r.RGBA16F),q===r.UNSIGNED_BYTE&&(ft=Zt===He?r.SRGB8_ALPHA8:r.RGBA8),q===r.UNSIGNED_SHORT_4_4_4_4&&(ft=r.RGBA4),q===r.UNSIGNED_SHORT_5_5_5_1&&(ft=r.RGB5_A1)}return(ft===r.R16F||ft===r.R32F||ft===r.RG16F||ft===r.RG32F||ft===r.RGBA16F||ft===r.RGBA32F)&&t.get("EXT_color_buffer_float"),ft}function C(B,A){let q;return B?A===null||A===xa||A===gu?q=r.DEPTH24_STENCIL8:A===da?q=r.DEPTH32F_STENCIL8:A===_u&&(q=r.DEPTH24_STENCIL8,re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):A===null||A===xa||A===gu?q=r.DEPTH_COMPONENT24:A===da?q=r.DEPTH_COMPONENT32F:A===_u&&(q=r.DEPTH_COMPONENT16),q}function R(B,A){return y(B)===!0||B.isFramebufferTexture&&B.minFilter!==Hn&&B.minFilter!==Yn?Math.log2(Math.max(A.width,A.height))+1:B.mipmaps!==void 0&&B.mipmaps.length>0?B.mipmaps.length:B.isCompressedTexture&&Array.isArray(B.image)?A.mipmaps.length:1}function P(B){const A=B.target;A.removeEventListener("dispose",P),F(A),A.isVideoTexture&&_.delete(A)}function U(B){const A=B.target;A.removeEventListener("dispose",U),L(A)}function F(B){const A=a.get(B);if(A.__webglInit===void 0)return;const q=B.source,pt=v.get(q);if(pt){const St=pt[A.__cacheKey];St.usedTimes--,St.usedTimes===0&&b(B),Object.keys(pt).length===0&&v.delete(q)}a.remove(B)}function b(B){const A=a.get(B);r.deleteTexture(A.__webglTexture);const q=B.source,pt=v.get(q);delete pt[A.__cacheKey],c.memory.textures--}function L(B){const A=a.get(B);if(B.depthTexture&&(B.depthTexture.dispose(),a.remove(B.depthTexture)),B.isWebGLCubeRenderTarget)for(let pt=0;pt<6;pt++){if(Array.isArray(A.__webglFramebuffer[pt]))for(let St=0;St<A.__webglFramebuffer[pt].length;St++)r.deleteFramebuffer(A.__webglFramebuffer[pt][St]);else r.deleteFramebuffer(A.__webglFramebuffer[pt]);A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer[pt])}else{if(Array.isArray(A.__webglFramebuffer))for(let pt=0;pt<A.__webglFramebuffer.length;pt++)r.deleteFramebuffer(A.__webglFramebuffer[pt]);else r.deleteFramebuffer(A.__webglFramebuffer);if(A.__webglDepthbuffer&&r.deleteRenderbuffer(A.__webglDepthbuffer),A.__webglMultisampledFramebuffer&&r.deleteFramebuffer(A.__webglMultisampledFramebuffer),A.__webglColorRenderbuffer)for(let pt=0;pt<A.__webglColorRenderbuffer.length;pt++)A.__webglColorRenderbuffer[pt]&&r.deleteRenderbuffer(A.__webglColorRenderbuffer[pt]);A.__webglDepthRenderbuffer&&r.deleteRenderbuffer(A.__webglDepthRenderbuffer)}const q=B.textures;for(let pt=0,St=q.length;pt<St;pt++){const ft=a.get(q[pt]);ft.__webglTexture&&(r.deleteTexture(ft.__webglTexture),c.memory.textures--),a.remove(q[pt])}a.remove(B)}let V=0;function Y(){V=0}function Z(){const B=V;return B>=o.maxTextures&&re("WebGLTextures: Trying to use "+B+" texture units while this GPU supports only "+o.maxTextures),V+=1,B}function st(B){const A=[];return A.push(B.wrapS),A.push(B.wrapT),A.push(B.wrapR||0),A.push(B.magFilter),A.push(B.minFilter),A.push(B.anisotropy),A.push(B.internalFormat),A.push(B.format),A.push(B.type),A.push(B.generateMipmaps),A.push(B.premultiplyAlpha),A.push(B.flipY),A.push(B.unpackAlignment),A.push(B.colorSpace),A.join()}function it(B,A){const q=a.get(B);if(B.isVideoTexture&&Ee(B),B.isRenderTargetTexture===!1&&B.isExternalTexture!==!0&&B.version>0&&q.__version!==B.version){const pt=B.image;if(pt===null)re("WebGLRenderer: Texture marked for update but no image data found.");else if(pt.complete===!1)re("WebGLRenderer: Texture marked for update but image is incomplete");else{tt(q,B,A);return}}else B.isExternalTexture&&(q.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(r.TEXTURE_2D,q.__webglTexture,r.TEXTURE0+A)}function I(B,A){const q=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){tt(q,B,A);return}else B.isExternalTexture&&(q.__webglTexture=B.sourceTexture?B.sourceTexture:null);n.bindTexture(r.TEXTURE_2D_ARRAY,q.__webglTexture,r.TEXTURE0+A)}function H(B,A){const q=a.get(B);if(B.isRenderTargetTexture===!1&&B.version>0&&q.__version!==B.version){tt(q,B,A);return}n.bindTexture(r.TEXTURE_3D,q.__webglTexture,r.TEXTURE0+A)}function Q(B,A){const q=a.get(B);if(B.isCubeDepthTexture!==!0&&B.version>0&&q.__version!==B.version){ut(q,B,A);return}n.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture,r.TEXTURE0+A)}const xt={[lm]:r.REPEAT,[Za]:r.CLAMP_TO_EDGE,[um]:r.MIRRORED_REPEAT},gt={[Hn]:r.NEAREST,[Y1]:r.NEAREST_MIPMAP_NEAREST,[Wc]:r.NEAREST_MIPMAP_LINEAR,[Yn]:r.LINEAR,[op]:r.LINEAR_MIPMAP_NEAREST,[Rs]:r.LINEAR_MIPMAP_LINEAR},z={[Q1]:r.NEVER,[nb]:r.ALWAYS,[J1]:r.LESS,[v_]:r.LEQUAL,[$1]:r.EQUAL,[x_]:r.GEQUAL,[tb]:r.GREATER,[eb]:r.NOTEQUAL};function J(B,A){if(A.type===da&&t.has("OES_texture_float_linear")===!1&&(A.magFilter===Yn||A.magFilter===op||A.magFilter===Wc||A.magFilter===Rs||A.minFilter===Yn||A.minFilter===op||A.minFilter===Wc||A.minFilter===Rs)&&re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(B,r.TEXTURE_WRAP_S,xt[A.wrapS]),r.texParameteri(B,r.TEXTURE_WRAP_T,xt[A.wrapT]),(B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY)&&r.texParameteri(B,r.TEXTURE_WRAP_R,xt[A.wrapR]),r.texParameteri(B,r.TEXTURE_MAG_FILTER,gt[A.magFilter]),r.texParameteri(B,r.TEXTURE_MIN_FILTER,gt[A.minFilter]),A.compareFunction&&(r.texParameteri(B,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(B,r.TEXTURE_COMPARE_FUNC,z[A.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(A.magFilter===Hn||A.minFilter!==Wc&&A.minFilter!==Rs||A.type===da&&t.has("OES_texture_float_linear")===!1)return;if(A.anisotropy>1||a.get(A).__currentAnisotropy){const q=t.get("EXT_texture_filter_anisotropic");r.texParameterf(B,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(A.anisotropy,o.getMaxAnisotropy())),a.get(A).__currentAnisotropy=A.anisotropy}}}function ht(B,A){let q=!1;B.__webglInit===void 0&&(B.__webglInit=!0,A.addEventListener("dispose",P));const pt=A.source;let St=v.get(pt);St===void 0&&(St={},v.set(pt,St));const ft=st(A);if(ft!==B.__cacheKey){St[ft]===void 0&&(St[ft]={texture:r.createTexture(),usedTimes:0},c.memory.textures++,q=!0),St[ft].usedTimes++;const Zt=St[B.__cacheKey];Zt!==void 0&&(St[B.__cacheKey].usedTimes--,Zt.usedTimes===0&&b(A)),B.__cacheKey=ft,B.__webglTexture=St[ft].texture}return q}function yt(B,A,q){return Math.floor(Math.floor(B/q)/A)}function Ct(B,A,q,pt){const ft=B.updateRanges;if(ft.length===0)n.texSubImage2D(r.TEXTURE_2D,0,0,0,A.width,A.height,q,pt,A.data);else{ft.sort((Et,bt)=>Et.start-bt.start);let Zt=0;for(let Et=1;Et<ft.length;Et++){const bt=ft[Zt],zt=ft[Et],Pt=bt.start+bt.count,Dt=yt(zt.start,A.width,4),le=yt(bt.start,A.width,4);zt.start<=Pt+1&&Dt===le&&yt(zt.start+zt.count-1,A.width,4)===Dt?bt.count=Math.max(bt.count,zt.start+zt.count-bt.start):(++Zt,ft[Zt]=zt)}ft.length=Zt+1;const wt=r.getParameter(r.UNPACK_ROW_LENGTH),kt=r.getParameter(r.UNPACK_SKIP_PIXELS),ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,A.width);for(let Et=0,bt=ft.length;Et<bt;Et++){const zt=ft[Et],Pt=Math.floor(zt.start/4),Dt=Math.ceil(zt.count/4),le=Pt%A.width,W=Math.floor(Pt/A.width),Lt=Dt,At=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,le),r.pixelStorei(r.UNPACK_SKIP_ROWS,W),n.texSubImage2D(r.TEXTURE_2D,0,le,W,Lt,At,q,pt,A.data)}B.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,wt),r.pixelStorei(r.UNPACK_SKIP_PIXELS,kt),r.pixelStorei(r.UNPACK_SKIP_ROWS,ee)}}function tt(B,A,q){let pt=r.TEXTURE_2D;(A.isDataArrayTexture||A.isCompressedArrayTexture)&&(pt=r.TEXTURE_2D_ARRAY),A.isData3DTexture&&(pt=r.TEXTURE_3D);const St=ht(B,A),ft=A.source;n.bindTexture(pt,B.__webglTexture,r.TEXTURE0+q);const Zt=a.get(ft);if(ft.version!==Zt.__version||St===!0){n.activeTexture(r.TEXTURE0+q);const wt=be.getPrimaries(be.workingColorSpace),kt=A.colorSpace===Ir?null:be.getPrimaries(A.colorSpace),ee=A.colorSpace===Ir||wt===kt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let Et=M(A.image,!1,o.maxTextureSize);Et=Ne(A,Et);const bt=l.convert(A.format,A.colorSpace),zt=l.convert(A.type);let Pt=w(A.internalFormat,bt,zt,A.colorSpace,A.isVideoTexture);J(pt,A);let Dt;const le=A.mipmaps,W=A.isVideoTexture!==!0,Lt=Zt.__version===void 0||St===!0,At=ft.dataReady,Ft=R(A,Et);if(A.isDepthTexture)Pt=C(A.format===Cs,A.type),Lt&&(W?n.texStorage2D(r.TEXTURE_2D,1,Pt,Et.width,Et.height):n.texImage2D(r.TEXTURE_2D,0,Pt,Et.width,Et.height,0,bt,zt,null));else if(A.isDataTexture)if(le.length>0){W&&Lt&&n.texStorage2D(r.TEXTURE_2D,Ft,Pt,le[0].width,le[0].height);for(let Mt=0,vt=le.length;Mt<vt;Mt++)Dt=le[Mt],W?At&&n.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,bt,zt,Dt.data):n.texImage2D(r.TEXTURE_2D,Mt,Pt,Dt.width,Dt.height,0,bt,zt,Dt.data);A.generateMipmaps=!1}else W?(Lt&&n.texStorage2D(r.TEXTURE_2D,Ft,Pt,Et.width,Et.height),At&&Ct(A,Et,bt,zt)):n.texImage2D(r.TEXTURE_2D,0,Pt,Et.width,Et.height,0,bt,zt,Et.data);else if(A.isCompressedTexture)if(A.isCompressedArrayTexture){W&&Lt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Pt,le[0].width,le[0].height,Et.depth);for(let Mt=0,vt=le.length;Mt<vt;Mt++)if(Dt=le[Mt],A.format!==na)if(bt!==null)if(W){if(At)if(A.layerUpdates.size>0){const Rt=oS(Dt.width,Dt.height,A.format,A.type);for(const ne of A.layerUpdates){const Fe=Dt.data.subarray(ne*Rt/Dt.data.BYTES_PER_ELEMENT,(ne+1)*Rt/Dt.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,ne,Dt.width,Dt.height,1,bt,Fe)}A.clearLayerUpdates()}else n.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,bt,Dt.data)}else n.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,Dt.width,Dt.height,Et.depth,0,Dt.data,0,0);else re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else W?At&&n.texSubImage3D(r.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,Et.depth,bt,zt,Dt.data):n.texImage3D(r.TEXTURE_2D_ARRAY,Mt,Pt,Dt.width,Dt.height,Et.depth,0,bt,zt,Dt.data)}else{W&&Lt&&n.texStorage2D(r.TEXTURE_2D,Ft,Pt,le[0].width,le[0].height);for(let Mt=0,vt=le.length;Mt<vt;Mt++)Dt=le[Mt],A.format!==na?bt!==null?W?At&&n.compressedTexSubImage2D(r.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,bt,Dt.data):n.compressedTexImage2D(r.TEXTURE_2D,Mt,Pt,Dt.width,Dt.height,0,Dt.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):W?At&&n.texSubImage2D(r.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,bt,zt,Dt.data):n.texImage2D(r.TEXTURE_2D,Mt,Pt,Dt.width,Dt.height,0,bt,zt,Dt.data)}else if(A.isDataArrayTexture)if(W){if(Lt&&n.texStorage3D(r.TEXTURE_2D_ARRAY,Ft,Pt,Et.width,Et.height,Et.depth),At)if(A.layerUpdates.size>0){const Mt=oS(Et.width,Et.height,A.format,A.type);for(const vt of A.layerUpdates){const Rt=Et.data.subarray(vt*Mt/Et.data.BYTES_PER_ELEMENT,(vt+1)*Mt/Et.data.BYTES_PER_ELEMENT);n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,vt,Et.width,Et.height,1,bt,zt,Rt)}A.clearLayerUpdates()}else n.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Et.width,Et.height,Et.depth,bt,zt,Et.data)}else n.texImage3D(r.TEXTURE_2D_ARRAY,0,Pt,Et.width,Et.height,Et.depth,0,bt,zt,Et.data);else if(A.isData3DTexture)W?(Lt&&n.texStorage3D(r.TEXTURE_3D,Ft,Pt,Et.width,Et.height,Et.depth),At&&n.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Et.width,Et.height,Et.depth,bt,zt,Et.data)):n.texImage3D(r.TEXTURE_3D,0,Pt,Et.width,Et.height,Et.depth,0,bt,zt,Et.data);else if(A.isFramebufferTexture){if(Lt)if(W)n.texStorage2D(r.TEXTURE_2D,Ft,Pt,Et.width,Et.height);else{let Mt=Et.width,vt=Et.height;for(let Rt=0;Rt<Ft;Rt++)n.texImage2D(r.TEXTURE_2D,Rt,Pt,Mt,vt,0,bt,zt,null),Mt>>=1,vt>>=1}}else if(le.length>0){if(W&&Lt){const Mt=qt(le[0]);n.texStorage2D(r.TEXTURE_2D,Ft,Pt,Mt.width,Mt.height)}for(let Mt=0,vt=le.length;Mt<vt;Mt++)Dt=le[Mt],W?At&&n.texSubImage2D(r.TEXTURE_2D,Mt,0,0,bt,zt,Dt):n.texImage2D(r.TEXTURE_2D,Mt,Pt,bt,zt,Dt);A.generateMipmaps=!1}else if(W){if(Lt){const Mt=qt(Et);n.texStorage2D(r.TEXTURE_2D,Ft,Pt,Mt.width,Mt.height)}At&&n.texSubImage2D(r.TEXTURE_2D,0,0,0,bt,zt,Et)}else n.texImage2D(r.TEXTURE_2D,0,Pt,bt,zt,Et);y(A)&&x(pt),Zt.__version=ft.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function ut(B,A,q){if(A.image.length!==6)return;const pt=ht(B,A),St=A.source;n.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture,r.TEXTURE0+q);const ft=a.get(St);if(St.version!==ft.__version||pt===!0){n.activeTexture(r.TEXTURE0+q);const Zt=be.getPrimaries(be.workingColorSpace),wt=A.colorSpace===Ir?null:be.getPrimaries(A.colorSpace),kt=A.colorSpace===Ir||Zt===wt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,A.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,A.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,A.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,kt);const ee=A.isCompressedTexture||A.image[0].isCompressedTexture,Et=A.image[0]&&A.image[0].isDataTexture,bt=[];for(let vt=0;vt<6;vt++)!ee&&!Et?bt[vt]=M(A.image[vt],!0,o.maxCubemapSize):bt[vt]=Et?A.image[vt].image:A.image[vt],bt[vt]=Ne(A,bt[vt]);const zt=bt[0],Pt=l.convert(A.format,A.colorSpace),Dt=l.convert(A.type),le=w(A.internalFormat,Pt,Dt,A.colorSpace),W=A.isVideoTexture!==!0,Lt=ft.__version===void 0||pt===!0,At=St.dataReady;let Ft=R(A,zt);J(r.TEXTURE_CUBE_MAP,A);let Mt;if(ee){W&&Lt&&n.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,le,zt.width,zt.height);for(let vt=0;vt<6;vt++){Mt=bt[vt].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];A.format!==na?Pt!==null?W?At&&n.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ne.width,ne.height,Pt,ne.data):n.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,le,ne.width,ne.height,0,ne.data):re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,0,0,ne.width,ne.height,Pt,Dt,ne.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt,le,ne.width,ne.height,0,Pt,Dt,ne.data)}}}else{if(Mt=A.mipmaps,W&&Lt){Mt.length>0&&Ft++;const vt=qt(bt[0]);n.texStorage2D(r.TEXTURE_CUBE_MAP,Ft,le,vt.width,vt.height)}for(let vt=0;vt<6;vt++)if(Et){W?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,bt[vt].width,bt[vt].height,Pt,Dt,bt[vt].data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,bt[vt].width,bt[vt].height,0,Pt,Dt,bt[vt].data);for(let Rt=0;Rt<Mt.length;Rt++){const Fe=Mt[Rt].image[vt].image;W?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Fe.width,Fe.height,Pt,Dt,Fe.data):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,le,Fe.width,Fe.height,0,Pt,Dt,Fe.data)}}else{W?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,0,0,Pt,Dt,bt[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,0,le,Pt,Dt,bt[vt]);for(let Rt=0;Rt<Mt.length;Rt++){const ne=Mt[Rt];W?At&&n.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,0,0,Pt,Dt,ne.image[vt]):n.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+vt,Rt+1,le,Pt,Dt,ne.image[vt])}}}y(A)&&x(r.TEXTURE_CUBE_MAP),ft.__version=St.version,A.onUpdate&&A.onUpdate(A)}B.__version=A.version}function Tt(B,A,q,pt,St,ft){const Zt=l.convert(q.format,q.colorSpace),wt=l.convert(q.type),kt=w(q.internalFormat,Zt,wt,q.colorSpace),ee=a.get(A),Et=a.get(q);if(Et.__renderTarget=A,!ee.__hasExternalTextures){const bt=Math.max(1,A.width>>ft),zt=Math.max(1,A.height>>ft);St===r.TEXTURE_3D||St===r.TEXTURE_2D_ARRAY?n.texImage3D(St,ft,kt,bt,zt,A.depth,0,Zt,wt,null):n.texImage2D(St,ft,kt,bt,zt,0,Zt,wt,null)}n.bindFramebuffer(r.FRAMEBUFFER,B),Qe(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,pt,St,Et.__webglTexture,0,k(A)):(St===r.TEXTURE_2D||St>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,pt,St,Et.__webglTexture,ft),n.bindFramebuffer(r.FRAMEBUFFER,null)}function Ht(B,A,q){if(r.bindRenderbuffer(r.RENDERBUFFER,B),A.depthBuffer){const pt=A.depthTexture,St=pt&&pt.isDepthTexture?pt.type:null,ft=C(A.stencilBuffer,St),Zt=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Qe(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),ft,A.width,A.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),ft,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,ft,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Zt,r.RENDERBUFFER,B)}else{const pt=A.textures;for(let St=0;St<pt.length;St++){const ft=pt[St],Zt=l.convert(ft.format,ft.colorSpace),wt=l.convert(ft.type),kt=w(ft.internalFormat,Zt,wt,ft.colorSpace);Qe(A)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(A),kt,A.width,A.height):q?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(A),kt,A.width,A.height):r.renderbufferStorage(r.RENDERBUFFER,kt,A.width,A.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Bt(B,A,q){const pt=A.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(r.FRAMEBUFFER,B),!(A.depthTexture&&A.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const St=a.get(A.depthTexture);if(St.__renderTarget=A,(!St.__webglTexture||A.depthTexture.image.width!==A.width||A.depthTexture.image.height!==A.height)&&(A.depthTexture.image.width=A.width,A.depthTexture.image.height=A.height,A.depthTexture.needsUpdate=!0),pt){if(St.__webglInit===void 0&&(St.__webglInit=!0,A.depthTexture.addEventListener("dispose",P)),St.__webglTexture===void 0){St.__webglTexture=r.createTexture(),n.bindTexture(r.TEXTURE_CUBE_MAP,St.__webglTexture),J(r.TEXTURE_CUBE_MAP,A.depthTexture);const ee=l.convert(A.depthTexture.format),Et=l.convert(A.depthTexture.type);let bt;A.depthTexture.format===tr?bt=r.DEPTH_COMPONENT24:A.depthTexture.format===Cs&&(bt=r.DEPTH24_STENCIL8);for(let zt=0;zt<6;zt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+zt,0,bt,A.width,A.height,0,ee,Et,null)}}else it(A.depthTexture,0);const ft=St.__webglTexture,Zt=k(A),wt=pt?r.TEXTURE_CUBE_MAP_POSITIVE_X+q:r.TEXTURE_2D,kt=A.depthTexture.format===Cs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(A.depthTexture.format===tr)Qe(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,wt,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,wt,ft,0);else if(A.depthTexture.format===Cs)Qe(A)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,kt,wt,ft,0,Zt):r.framebufferTexture2D(r.FRAMEBUFFER,kt,wt,ft,0);else throw new Error("Unknown depthTexture format")}function he(B){const A=a.get(B),q=B.isWebGLCubeRenderTarget===!0;if(A.__boundDepthTexture!==B.depthTexture){const pt=B.depthTexture;if(A.__depthDisposeCallback&&A.__depthDisposeCallback(),pt){const St=()=>{delete A.__boundDepthTexture,delete A.__depthDisposeCallback,pt.removeEventListener("dispose",St)};pt.addEventListener("dispose",St),A.__depthDisposeCallback=St}A.__boundDepthTexture=pt}if(B.depthTexture&&!A.__autoAllocateDepthBuffer)if(q)for(let pt=0;pt<6;pt++)Bt(A.__webglFramebuffer[pt],B,pt);else{const pt=B.texture.mipmaps;pt&&pt.length>0?Bt(A.__webglFramebuffer[0],B,0):Bt(A.__webglFramebuffer,B,0)}else if(q){A.__webglDepthbuffer=[];for(let pt=0;pt<6;pt++)if(n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[pt]),A.__webglDepthbuffer[pt]===void 0)A.__webglDepthbuffer[pt]=r.createRenderbuffer(),Ht(A.__webglDepthbuffer[pt],B,!1);else{const St=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer[pt];r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}else{const pt=B.texture.mipmaps;if(pt&&pt.length>0?n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer[0]):n.bindFramebuffer(r.FRAMEBUFFER,A.__webglFramebuffer),A.__webglDepthbuffer===void 0)A.__webglDepthbuffer=r.createRenderbuffer(),Ht(A.__webglDepthbuffer,B,!1);else{const St=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ft=A.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ft),r.framebufferRenderbuffer(r.FRAMEBUFFER,St,r.RENDERBUFFER,ft)}}n.bindFramebuffer(r.FRAMEBUFFER,null)}function rn(B,A,q){const pt=a.get(B);A!==void 0&&Tt(pt.__webglFramebuffer,B,B.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),q!==void 0&&he(B)}function ge(B){const A=B.texture,q=a.get(B),pt=a.get(A);B.addEventListener("dispose",U);const St=B.textures,ft=B.isWebGLCubeRenderTarget===!0,Zt=St.length>1;if(Zt||(pt.__webglTexture===void 0&&(pt.__webglTexture=r.createTexture()),pt.__version=A.version,c.memory.textures++),ft){q.__webglFramebuffer=[];for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer[wt]=[];for(let kt=0;kt<A.mipmaps.length;kt++)q.__webglFramebuffer[wt][kt]=r.createFramebuffer()}else q.__webglFramebuffer[wt]=r.createFramebuffer()}else{if(A.mipmaps&&A.mipmaps.length>0){q.__webglFramebuffer=[];for(let wt=0;wt<A.mipmaps.length;wt++)q.__webglFramebuffer[wt]=r.createFramebuffer()}else q.__webglFramebuffer=r.createFramebuffer();if(Zt)for(let wt=0,kt=St.length;wt<kt;wt++){const ee=a.get(St[wt]);ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture(),c.memory.textures++)}if(B.samples>0&&Qe(B)===!1){q.__webglMultisampledFramebuffer=r.createFramebuffer(),q.__webglColorRenderbuffer=[],n.bindFramebuffer(r.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let wt=0;wt<St.length;wt++){const kt=St[wt];q.__webglColorRenderbuffer[wt]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,q.__webglColorRenderbuffer[wt]);const ee=l.convert(kt.format,kt.colorSpace),Et=l.convert(kt.type),bt=w(kt.internalFormat,ee,Et,kt.colorSpace,B.isXRRenderTarget===!0),zt=k(B);r.renderbufferStorageMultisample(r.RENDERBUFFER,zt,bt,B.width,B.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,q.__webglColorRenderbuffer[wt])}r.bindRenderbuffer(r.RENDERBUFFER,null),B.depthBuffer&&(q.__webglDepthRenderbuffer=r.createRenderbuffer(),Ht(q.__webglDepthRenderbuffer,B,!0)),n.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ft){n.bindTexture(r.TEXTURE_CUBE_MAP,pt.__webglTexture),J(r.TEXTURE_CUBE_MAP,A);for(let wt=0;wt<6;wt++)if(A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)Tt(q.__webglFramebuffer[wt][kt],B,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,kt);else Tt(q.__webglFramebuffer[wt],B,A,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0);y(A)&&x(r.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Zt){for(let wt=0,kt=St.length;wt<kt;wt++){const ee=St[wt],Et=a.get(ee);let bt=r.TEXTURE_2D;(B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(bt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(bt,Et.__webglTexture),J(bt,ee),Tt(q.__webglFramebuffer,B,ee,r.COLOR_ATTACHMENT0+wt,bt,0),y(ee)&&x(bt)}n.unbindTexture()}else{let wt=r.TEXTURE_2D;if((B.isWebGL3DRenderTarget||B.isWebGLArrayRenderTarget)&&(wt=B.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),n.bindTexture(wt,pt.__webglTexture),J(wt,A),A.mipmaps&&A.mipmaps.length>0)for(let kt=0;kt<A.mipmaps.length;kt++)Tt(q.__webglFramebuffer[kt],B,A,r.COLOR_ATTACHMENT0,wt,kt);else Tt(q.__webglFramebuffer,B,A,r.COLOR_ATTACHMENT0,wt,0);y(A)&&x(wt),n.unbindTexture()}B.depthBuffer&&he(B)}function de(B){const A=B.textures;for(let q=0,pt=A.length;q<pt;q++){const St=A[q];if(y(St)){const ft=D(B),Zt=a.get(St).__webglTexture;n.bindTexture(ft,Zt),x(ft),n.unbindTexture()}}}const we=[],se=[];function sn(B){if(B.samples>0){if(Qe(B)===!1){const A=B.textures,q=B.width,pt=B.height;let St=r.COLOR_BUFFER_BIT;const ft=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Zt=a.get(B),wt=A.length>1;if(wt)for(let ee=0;ee<A.length;ee++)n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,null),n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,null,0);n.bindFramebuffer(r.READ_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer);const kt=B.texture.mipmaps;kt&&kt.length>0?n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer[0]):n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglFramebuffer);for(let ee=0;ee<A.length;ee++){if(B.resolveDepthBuffer&&(B.depthBuffer&&(St|=r.DEPTH_BUFFER_BIT),B.stencilBuffer&&B.resolveStencilBuffer&&(St|=r.STENCIL_BUFFER_BIT)),wt){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=a.get(A[ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Et,0)}r.blitFramebuffer(0,0,q,pt,0,0,q,pt,St,r.NEAREST),p===!0&&(we.length=0,se.length=0,we.push(r.COLOR_ATTACHMENT0+ee),B.depthBuffer&&B.resolveDepthBuffer===!1&&(we.push(ft),se.push(ft),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,se)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,we))}if(n.bindFramebuffer(r.READ_FRAMEBUFFER,null),n.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),wt)for(let ee=0;ee<A.length;ee++){n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.RENDERBUFFER,Zt.__webglColorRenderbuffer[ee]);const Et=a.get(A[ee]).__webglTexture;n.bindFramebuffer(r.FRAMEBUFFER,Zt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+ee,r.TEXTURE_2D,Et,0)}n.bindFramebuffer(r.DRAW_FRAMEBUFFER,Zt.__webglMultisampledFramebuffer)}else if(B.depthBuffer&&B.resolveDepthBuffer===!1&&p){const A=B.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[A])}}}function k(B){return Math.min(o.maxSamples,B.samples)}function Qe(B){const A=a.get(B);return B.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&A.__useRenderToTexture!==!1}function Ee(B){const A=c.render.frame;_.get(B)!==A&&(_.set(B,A),B.update())}function Ne(B,A){const q=B.colorSpace,pt=B.format,St=B.type;return B.isCompressedTexture===!0||B.isVideoTexture===!0||q!==Yo&&q!==Ir&&(be.getTransfer(q)===He?(pt!==na||St!==Gi)&&re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ce("WebGLTextures: Unsupported texture color space:",q)),A}function qt(B){return typeof HTMLImageElement<"u"&&B instanceof HTMLImageElement?(d.width=B.naturalWidth||B.width,d.height=B.naturalHeight||B.height):typeof VideoFrame<"u"&&B instanceof VideoFrame?(d.width=B.displayWidth,d.height=B.displayHeight):(d.width=B.width,d.height=B.height),d}this.allocateTextureUnit=Z,this.resetTextureUnits=Y,this.setTexture2D=it,this.setTexture2DArray=I,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=rn,this.setupRenderTarget=ge,this.updateRenderTargetMipmap=de,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=Tt,this.useMultisampledRTT=Qe,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function b2(r,t){function n(a,o=Ir){let l;const c=be.getTransfer(o);if(a===Gi)return r.UNSIGNED_BYTE;if(a===d_)return r.UNSIGNED_SHORT_4_4_4_4;if(a===p_)return r.UNSIGNED_SHORT_5_5_5_1;if(a===_y)return r.UNSIGNED_INT_5_9_9_9_REV;if(a===gy)return r.UNSIGNED_INT_10F_11F_11F_REV;if(a===py)return r.BYTE;if(a===my)return r.SHORT;if(a===_u)return r.UNSIGNED_SHORT;if(a===h_)return r.INT;if(a===xa)return r.UNSIGNED_INT;if(a===da)return r.FLOAT;if(a===$a)return r.HALF_FLOAT;if(a===vy)return r.ALPHA;if(a===xy)return r.RGB;if(a===na)return r.RGBA;if(a===tr)return r.DEPTH_COMPONENT;if(a===Cs)return r.DEPTH_STENCIL;if(a===Sy)return r.RED;if(a===m_)return r.RED_INTEGER;if(a===qo)return r.RG;if(a===__)return r.RG_INTEGER;if(a===g_)return r.RGBA_INTEGER;if(a===_f||a===gf||a===vf||a===xf)if(c===He)if(l=t.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===_f)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===gf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===vf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===xf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=t.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===_f)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===gf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===vf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===xf)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===cm||a===fm||a===hm||a===dm)if(l=t.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===cm)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===fm)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===hm)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===dm)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===pm||a===mm||a===_m||a===gm||a===vm||a===xm||a===Sm)if(l=t.get("WEBGL_compressed_texture_etc"),l!==null){if(a===pm||a===mm)return c===He?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===_m)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===gm)return l.COMPRESSED_R11_EAC;if(a===vm)return l.COMPRESSED_SIGNED_R11_EAC;if(a===xm)return l.COMPRESSED_RG11_EAC;if(a===Sm)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===ym||a===Mm||a===Em||a===Tm||a===bm||a===Am||a===Rm||a===Cm||a===wm||a===Dm||a===Um||a===Lm||a===Nm||a===Om)if(l=t.get("WEBGL_compressed_texture_astc"),l!==null){if(a===ym)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Mm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Em)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Tm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===bm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Am)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Rm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Cm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===wm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Dm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Um)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Lm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Nm)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Om)return c===He?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Pm||a===Fm||a===zm)if(l=t.get("EXT_texture_compression_bptc"),l!==null){if(a===Pm)return c===He?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Fm)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===zm)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Im||a===Bm||a===Hm||a===Vm)if(l=t.get("EXT_texture_compression_rgtc"),l!==null){if(a===Im)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Bm)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Hm)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Vm)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===gu?r.UNSIGNED_INT_24_8:r[a]!==void 0?r[a]:null}return{convert:n}}const A2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R2=`
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

}`;class C2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,n){if(this.texture===null){const a=new Ny(t.texture);(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(t){if(this.texture!==null&&this.mesh===null){const n=t.cameras[0].viewport,a=new ia({vertexShader:A2,fragmentShader:R2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Sa(new Uu(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class w2 extends nl{constructor(t,n){super();const a=this;let o=null,l=1,c=null,f="local-floor",p=1,d=null,_=null,g=null,v=null,S=null,T=null;const M=typeof XRWebGLBinding<"u",y=new C2,x={},D=n.getContextAttributes();let w=null,C=null;const R=[],P=[],U=new Pe;let F=null;const b=new ta;b.viewport=new pn;const L=new ta;L.viewport=new pn;const V=[b,L],Y=new Bb;let Z=null,st=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let ut=R[tt];return ut===void 0&&(ut=new Dp,R[tt]=ut),ut.getTargetRaySpace()},this.getControllerGrip=function(tt){let ut=R[tt];return ut===void 0&&(ut=new Dp,R[tt]=ut),ut.getGripSpace()},this.getHand=function(tt){let ut=R[tt];return ut===void 0&&(ut=new Dp,R[tt]=ut),ut.getHandSpace()};function it(tt){const ut=P.indexOf(tt.inputSource);if(ut===-1)return;const Tt=R[ut];Tt!==void 0&&(Tt.update(tt.inputSource,tt.frame,d||c),Tt.dispatchEvent({type:tt.type,data:tt.inputSource}))}function I(){o.removeEventListener("select",it),o.removeEventListener("selectstart",it),o.removeEventListener("selectend",it),o.removeEventListener("squeeze",it),o.removeEventListener("squeezestart",it),o.removeEventListener("squeezeend",it),o.removeEventListener("end",I),o.removeEventListener("inputsourceschange",H);for(let tt=0;tt<R.length;tt++){const ut=P[tt];ut!==null&&(P[tt]=null,R[tt].disconnect(ut))}Z=null,st=null,y.reset();for(const tt in x)delete x[tt];t.setRenderTarget(w),S=null,v=null,g=null,o=null,C=null,Ct.stop(),a.isPresenting=!1,t.setPixelRatio(F),t.setSize(U.width,U.height,!1),a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){l=tt,a.isPresenting===!0&&re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){f=tt,a.isPresenting===!0&&re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return d||c},this.setReferenceSpace=function(tt){d=tt},this.getBaseLayer=function(){return v!==null?v:S},this.getBinding=function(){return g===null&&M&&(g=new XRWebGLBinding(o,n)),g},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(tt){if(o=tt,o!==null){if(w=t.getRenderTarget(),o.addEventListener("select",it),o.addEventListener("selectstart",it),o.addEventListener("selectend",it),o.addEventListener("squeeze",it),o.addEventListener("squeezestart",it),o.addEventListener("squeezeend",it),o.addEventListener("end",I),o.addEventListener("inputsourceschange",H),D.xrCompatible!==!0&&await n.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(U),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,Ht=null,Bt=null;D.depth&&(Bt=D.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Tt=D.stencil?Cs:tr,Ht=D.stencil?gu:xa);const he={colorFormat:n.RGBA8,depthFormat:Bt,scaleFactor:l};g=this.getBinding(),v=g.createProjectionLayer(he),o.updateRenderState({layers:[v]}),t.setPixelRatio(1),t.setSize(v.textureWidth,v.textureHeight,!1),C=new ga(v.textureWidth,v.textureHeight,{format:na,type:Gi,depthTexture:new xu(v.textureWidth,v.textureHeight,Ht,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:D.stencil,colorSpace:t.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1})}else{const Tt={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,n,Tt),o.updateRenderState({baseLayer:S}),t.setPixelRatio(1),t.setSize(S.framebufferWidth,S.framebufferHeight,!1),C=new ga(S.framebufferWidth,S.framebufferHeight,{format:na,type:Gi,colorSpace:t.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(p),d=null,c=await o.requestReferenceSpace(f),Ct.setContext(o),Ct.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function H(tt){for(let ut=0;ut<tt.removed.length;ut++){const Tt=tt.removed[ut],Ht=P.indexOf(Tt);Ht>=0&&(P[Ht]=null,R[Ht].disconnect(Tt))}for(let ut=0;ut<tt.added.length;ut++){const Tt=tt.added[ut];let Ht=P.indexOf(Tt);if(Ht===-1){for(let he=0;he<R.length;he++)if(he>=P.length){P.push(Tt),Ht=he;break}else if(P[he]===null){P[he]=Tt,Ht=he;break}if(Ht===-1)break}const Bt=R[Ht];Bt&&Bt.connect(Tt)}}const Q=new ot,xt=new ot;function gt(tt,ut,Tt){Q.setFromMatrixPosition(ut.matrixWorld),xt.setFromMatrixPosition(Tt.matrixWorld);const Ht=Q.distanceTo(xt),Bt=ut.projectionMatrix.elements,he=Tt.projectionMatrix.elements,rn=Bt[14]/(Bt[10]-1),ge=Bt[14]/(Bt[10]+1),de=(Bt[9]+1)/Bt[5],we=(Bt[9]-1)/Bt[5],se=(Bt[8]-1)/Bt[0],sn=(he[8]+1)/he[0],k=rn*se,Qe=rn*sn,Ee=Ht/(-se+sn),Ne=Ee*-se;if(ut.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(Ne),tt.translateZ(Ee),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Bt[10]===-1)tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse);else{const qt=rn+Ee,B=ge+Ee,A=k-Ne,q=Qe+(Ht-Ne),pt=de*ge/B*qt,St=we*ge/B*qt;tt.projectionMatrix.makePerspective(A,q,pt,St,qt,B),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function z(tt,ut){ut===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(ut.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(o===null)return;let ut=tt.near,Tt=tt.far;y.texture!==null&&(y.depthNear>0&&(ut=y.depthNear),y.depthFar>0&&(Tt=y.depthFar)),Y.near=L.near=b.near=ut,Y.far=L.far=b.far=Tt,(Z!==Y.near||st!==Y.far)&&(o.updateRenderState({depthNear:Y.near,depthFar:Y.far}),Z=Y.near,st=Y.far),Y.layers.mask=tt.layers.mask|6,b.layers.mask=Y.layers.mask&3,L.layers.mask=Y.layers.mask&5;const Ht=tt.parent,Bt=Y.cameras;z(Y,Ht);for(let he=0;he<Bt.length;he++)z(Bt[he],Ht);Bt.length===2?gt(Y,b,L):Y.projectionMatrix.copy(b.projectionMatrix),J(tt,Y,Ht)};function J(tt,ut,Tt){Tt===null?tt.matrix.copy(ut.matrixWorld):(tt.matrix.copy(Tt.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(ut.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(ut.projectionMatrix),tt.projectionMatrixInverse.copy(ut.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=Gm*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(v===null&&S===null))return p},this.setFoveation=function(tt){p=tt,v!==null&&(v.fixedFoveation=tt),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=tt)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(Y)},this.getCameraTexture=function(tt){return x[tt]};let ht=null;function yt(tt,ut){if(_=ut.getViewerPose(d||c),T=ut,_!==null){const Tt=_.views;S!==null&&(t.setRenderTargetFramebuffer(C,S.framebuffer),t.setRenderTarget(C));let Ht=!1;Tt.length!==Y.cameras.length&&(Y.cameras.length=0,Ht=!0);for(let ge=0;ge<Tt.length;ge++){const de=Tt[ge];let we=null;if(S!==null)we=S.getViewport(de);else{const sn=g.getViewSubImage(v,de);we=sn.viewport,ge===0&&(t.setRenderTargetTextures(C,sn.colorTexture,sn.depthStencilTexture),t.setRenderTarget(C))}let se=V[ge];se===void 0&&(se=new ta,se.layers.enable(ge),se.viewport=new pn,V[ge]=se),se.matrix.fromArray(de.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(de.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(we.x,we.y,we.width,we.height),ge===0&&(Y.matrix.copy(se.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Ht===!0&&Y.cameras.push(se)}const Bt=o.enabledFeatures;if(Bt&&Bt.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&M){g=a.getBinding();const ge=g.getDepthInformation(Tt[0]);ge&&ge.isValid&&ge.texture&&y.init(ge,o.renderState)}if(Bt&&Bt.includes("camera-access")&&M){t.state.unbindTexture(),g=a.getBinding();for(let ge=0;ge<Tt.length;ge++){const de=Tt[ge].camera;if(de){let we=x[de];we||(we=new Ny,x[de]=we);const se=g.getCameraImage(de);we.sourceTexture=se}}}}for(let Tt=0;Tt<R.length;Tt++){const Ht=P[Tt],Bt=R[Tt];Ht!==null&&Bt!==void 0&&Bt.update(Ht,ut,d||c)}ht&&ht(tt,ut),ut.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ut}),T=null}const Ct=new Oy;Ct.setAnimationLoop(yt),this.setAnimationLoop=function(tt){ht=tt},this.dispose=function(){}}}const Ss=new er,D2=new Mn;function U2(r,t){function n(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function a(y,x){x.color.getRGB(y.fogColor.value,Cy(r)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function o(y,x,D,w,C){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),_(y,x)):x.isMeshStandardMaterial?(l(y,x),v(y,x),x.isMeshPhysicalMaterial&&S(y,x,C)):x.isMeshMatcapMaterial?(l(y,x),T(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),M(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(c(y,x),x.isLineDashedMaterial&&f(y,x)):x.isPointsMaterial?p(y,x,D,w):x.isSpriteMaterial?d(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,n(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===si&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,n(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===si&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,n(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,n(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,n(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=t.get(x),w=D.envMap,C=D.envMapRotation;w&&(y.envMap.value=w,Ss.copy(C),Ss.x*=-1,Ss.y*=-1,Ss.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ss.y*=-1,Ss.z*=-1),y.envMapRotation.value.setFromMatrix4(D2.makeRotationFromEuler(Ss)),y.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,n(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,n(x.aoMap,y.aoMapTransform))}function c(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform))}function f(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function p(y,x,D,w){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=w*.5,x.map&&(y.map.value=x.map,n(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function d(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,n(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,n(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function _(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function v(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,n(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,n(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,n(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,n(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,n(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,n(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,n(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===si&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,n(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,n(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,n(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,n(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,n(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,n(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,n(x.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,x){x.matcap&&(y.matcap.value=x.matcap)}function M(y,x){const D=t.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function L2(r,t,n,a){let o={},l={},c=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(D,w){const C=w.program;a.uniformBlockBinding(D,C)}function d(D,w){let C=o[D.id];C===void 0&&(T(D),C=_(D),o[D.id]=C,D.addEventListener("dispose",y));const R=w.program;a.updateUBOMapping(D,R);const P=t.render.frame;l[D.id]!==P&&(v(D),l[D.id]=P)}function _(D){const w=g();D.__bindingPointIndex=w;const C=r.createBuffer(),R=D.__size,P=D.usage;return r.bindBuffer(r.UNIFORM_BUFFER,C),r.bufferData(r.UNIFORM_BUFFER,R,P),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,w,C),C}function g(){for(let D=0;D<f;D++)if(c.indexOf(D)===-1)return c.push(D),D;return Ce("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function v(D){const w=o[D.id],C=D.uniforms,R=D.__cache;r.bindBuffer(r.UNIFORM_BUFFER,w);for(let P=0,U=C.length;P<U;P++){const F=Array.isArray(C[P])?C[P]:[C[P]];for(let b=0,L=F.length;b<L;b++){const V=F[b];if(S(V,P,b,R)===!0){const Y=V.__offset,Z=Array.isArray(V.value)?V.value:[V.value];let st=0;for(let it=0;it<Z.length;it++){const I=Z[it],H=M(I);typeof I=="number"||typeof I=="boolean"?(V.__data[0]=I,r.bufferSubData(r.UNIFORM_BUFFER,Y+st,V.__data)):I.isMatrix3?(V.__data[0]=I.elements[0],V.__data[1]=I.elements[1],V.__data[2]=I.elements[2],V.__data[3]=0,V.__data[4]=I.elements[3],V.__data[5]=I.elements[4],V.__data[6]=I.elements[5],V.__data[7]=0,V.__data[8]=I.elements[6],V.__data[9]=I.elements[7],V.__data[10]=I.elements[8],V.__data[11]=0):(I.toArray(V.__data,st),st+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,Y,V.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(D,w,C,R){const P=D.value,U=w+"_"+C;if(R[U]===void 0)return typeof P=="number"||typeof P=="boolean"?R[U]=P:R[U]=P.clone(),!0;{const F=R[U];if(typeof P=="number"||typeof P=="boolean"){if(F!==P)return R[U]=P,!0}else if(F.equals(P)===!1)return F.copy(P),!0}return!1}function T(D){const w=D.uniforms;let C=0;const R=16;for(let U=0,F=w.length;U<F;U++){const b=Array.isArray(w[U])?w[U]:[w[U]];for(let L=0,V=b.length;L<V;L++){const Y=b[L],Z=Array.isArray(Y.value)?Y.value:[Y.value];for(let st=0,it=Z.length;st<it;st++){const I=Z[st],H=M(I),Q=C%R,xt=Q%H.boundary,gt=Q+xt;C+=xt,gt!==0&&R-gt<H.storage&&(C+=R-gt),Y.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),Y.__offset=C,C+=H.storage}}}const P=C%R;return P>0&&(C+=R-P),D.__size=C,D.__cache={},this}function M(D){const w={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(w.boundary=4,w.storage=4):D.isVector2?(w.boundary=8,w.storage=8):D.isVector3||D.isColor?(w.boundary=16,w.storage=12):D.isVector4?(w.boundary=16,w.storage=16):D.isMatrix3?(w.boundary=48,w.storage=48):D.isMatrix4?(w.boundary=64,w.storage=64):D.isTexture?re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):re("WebGLRenderer: Unsupported uniform value type.",D),w}function y(D){const w=D.target;w.removeEventListener("dispose",y);const C=c.indexOf(w.__bindingPointIndex);c.splice(C,1),r.deleteBuffer(o[w.id]),delete o[w.id],delete l[w.id]}function x(){for(const D in o)r.deleteBuffer(o[D]);c=[],o={},l={}}return{bind:p,update:d,dispose:x}}const N2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ua=null;function O2(){return ua===null&&(ua=new Ub(N2,16,16,qo,$a),ua.name="DFG_LUT",ua.minFilter=Yn,ua.magFilter=Yn,ua.wrapS=Za,ua.wrapT=Za,ua.generateMipmaps=!1,ua.needsUpdate=!0),ua}class P2{constructor(t={}){const{canvas:n=ib(),context:a=null,depth:o=!0,stencil:l=!1,alpha:c=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:d=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:v=!1,outputBufferType:S=Gi}=t;this.isWebGLRenderer=!0;let T;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=a.getContextAttributes().alpha}else T=c;const M=S,y=new Set([g_,__,m_]),x=new Set([Gi,xa,_u,gu,d_,p_]),D=new Uint32Array(4),w=new Int32Array(4);let C=null,R=null;const P=[],U=[];let F=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=_a,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const b=this;let L=!1;this._outputColorSpace=Vi;let V=0,Y=0,Z=null,st=-1,it=null;const I=new pn,H=new pn;let Q=null;const xt=new Ve(0);let gt=0,z=n.width,J=n.height,ht=1,yt=null,Ct=null;const tt=new pn(0,0,z,J),ut=new pn(0,0,z,J);let Tt=!1;const Ht=new Ly;let Bt=!1,he=!1;const rn=new Mn,ge=new ot,de=new pn,we={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let se=!1;function sn(){return Z===null?ht:1}let k=a;function Qe(O,j){return n.getContext(O,j)}try{const O={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:d,powerPreference:_,failIfMajorPerformanceCaveat:g};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${f_}`),n.addEventListener("webglcontextlost",ne,!1),n.addEventListener("webglcontextrestored",Fe,!1),n.addEventListener("webglcontextcreationerror",Te,!1),k===null){const j="webgl2";if(k=Qe(j,O),k===null)throw Qe(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(O){throw Ce("WebGLRenderer: "+O.message),O}let Ee,Ne,qt,B,A,q,pt,St,ft,Zt,wt,kt,ee,Et,bt,zt,Pt,Dt,le,W,Lt,At,Ft,Mt;function vt(){Ee=new OC(k),Ee.init(),At=new b2(k,Ee),Ne=new bC(k,Ee,t,At),qt=new E2(k,Ee),Ne.reversedDepthBuffer&&v&&qt.buffers.depth.setReversed(!0),B=new zC(k),A=new l2,q=new T2(k,Ee,qt,A,Ne,At,B),pt=new RC(b),St=new NC(b),ft=new Vb(k),Ft=new EC(k,ft),Zt=new PC(k,ft,B,Ft),wt=new BC(k,Zt,ft,B),le=new IC(k,Ne,q),zt=new AC(A),kt=new o2(b,pt,St,Ee,Ne,Ft,zt),ee=new U2(b,A),Et=new c2,bt=new _2(Ee),Dt=new MC(b,pt,St,qt,wt,T,p),Pt=new y2(b,wt,Ne),Mt=new L2(k,B,Ne,qt),W=new TC(k,Ee,B),Lt=new FC(k,Ee,B),B.programs=kt.programs,b.capabilities=Ne,b.extensions=Ee,b.properties=A,b.renderLists=Et,b.shadowMap=Pt,b.state=qt,b.info=B}vt(),M!==Gi&&(F=new VC(M,n.width,n.height,o,l));const Rt=new w2(b,k);this.xr=Rt,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const O=Ee.get("WEBGL_lose_context");O&&O.loseContext()},this.forceContextRestore=function(){const O=Ee.get("WEBGL_lose_context");O&&O.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(O){O!==void 0&&(ht=O,this.setSize(z,J,!1))},this.getSize=function(O){return O.set(z,J)},this.setSize=function(O,j,lt=!0){if(Rt.isPresenting){re("WebGLRenderer: Can't change size while VR device is presenting.");return}z=O,J=j,n.width=Math.floor(O*ht),n.height=Math.floor(j*ht),lt===!0&&(n.style.width=O+"px",n.style.height=j+"px"),F!==null&&F.setSize(n.width,n.height),this.setViewport(0,0,O,j)},this.getDrawingBufferSize=function(O){return O.set(z*ht,J*ht).floor()},this.setDrawingBufferSize=function(O,j,lt){z=O,J=j,ht=lt,n.width=Math.floor(O*lt),n.height=Math.floor(j*lt),this.setViewport(0,0,O,j)},this.setEffects=function(O){if(M===Gi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(O){for(let j=0;j<O.length;j++)if(O[j].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(O||[])},this.getCurrentViewport=function(O){return O.copy(I)},this.getViewport=function(O){return O.copy(tt)},this.setViewport=function(O,j,lt,at){O.isVector4?tt.set(O.x,O.y,O.z,O.w):tt.set(O,j,lt,at),qt.viewport(I.copy(tt).multiplyScalar(ht).round())},this.getScissor=function(O){return O.copy(ut)},this.setScissor=function(O,j,lt,at){O.isVector4?ut.set(O.x,O.y,O.z,O.w):ut.set(O,j,lt,at),qt.scissor(H.copy(ut).multiplyScalar(ht).round())},this.getScissorTest=function(){return Tt},this.setScissorTest=function(O){qt.setScissorTest(Tt=O)},this.setOpaqueSort=function(O){yt=O},this.setTransparentSort=function(O){Ct=O},this.getClearColor=function(O){return O.copy(Dt.getClearColor())},this.setClearColor=function(){Dt.setClearColor(...arguments)},this.getClearAlpha=function(){return Dt.getClearAlpha()},this.setClearAlpha=function(){Dt.setClearAlpha(...arguments)},this.clear=function(O=!0,j=!0,lt=!0){let at=0;if(O){let $=!1;if(Z!==null){const Ut=Z.texture.format;$=y.has(Ut)}if($){const Ut=Z.texture.type,It=x.has(Ut),Nt=Dt.getClearColor(),Vt=Dt.getClearAlpha(),Xt=Nt.r,Jt=Nt.g,Wt=Nt.b;It?(D[0]=Xt,D[1]=Jt,D[2]=Wt,D[3]=Vt,k.clearBufferuiv(k.COLOR,0,D)):(w[0]=Xt,w[1]=Jt,w[2]=Wt,w[3]=Vt,k.clearBufferiv(k.COLOR,0,w))}else at|=k.COLOR_BUFFER_BIT}j&&(at|=k.DEPTH_BUFFER_BIT),lt&&(at|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(at)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",ne,!1),n.removeEventListener("webglcontextrestored",Fe,!1),n.removeEventListener("webglcontextcreationerror",Te,!1),Dt.dispose(),Et.dispose(),bt.dispose(),A.dispose(),pt.dispose(),St.dispose(),wt.dispose(),Ft.dispose(),Mt.dispose(),kt.dispose(),Rt.dispose(),Rt.removeEventListener("sessionstart",Bs),Rt.removeEventListener("sessionend",sl),aa.stop()};function ne(O){O.preventDefault(),Xx("WebGLRenderer: Context Lost."),L=!0}function Fe(){Xx("WebGLRenderer: Context Restored."),L=!1;const O=B.autoReset,j=Pt.enabled,lt=Pt.autoUpdate,at=Pt.needsUpdate,$=Pt.type;vt(),B.autoReset=O,Pt.enabled=j,Pt.autoUpdate=lt,Pt.needsUpdate=at,Pt.type=$}function Te(O){Ce("WebGLRenderer: A WebGL context could not be created. Reason: ",O.statusMessage)}function Gn(O){const j=O.target;j.removeEventListener("dispose",Gn),Wi(j)}function Wi(O){Ou(O),A.remove(O)}function Ou(O){const j=A.get(O).programs;j!==void 0&&(j.forEach(function(lt){kt.releaseProgram(lt)}),O.isShaderMaterial&&kt.releaseShaderCache(O))}this.renderBufferDirect=function(O,j,lt,at,$,Ut){j===null&&(j=we);const It=$.isMesh&&$.matrixWorld.determinant()<0,Nt=Qr(O,j,lt,at,$);qt.setMaterial(at,It);let Vt=lt.index,Xt=1;if(at.wireframe===!0){if(Vt=Zt.getWireframeAttribute(lt),Vt===void 0)return;Xt=2}const Jt=lt.drawRange,Wt=lt.attributes.position;let $t=Jt.start*Xt,De=(Jt.start+Jt.count)*Xt;Ut!==null&&($t=Math.max($t,Ut.start*Xt),De=Math.min(De,(Ut.start+Ut.count)*Xt)),Vt!==null?($t=Math.max($t,0),De=Math.min(De,Vt.count)):Wt!=null&&($t=Math.max($t,0),De=Math.min(De,Wt.count));const Je=De-$t;if(Je<0||Je===1/0)return;Ft.setup($,at,Nt,lt,Vt);let Ze,Oe=W;if(Vt!==null&&(Ze=ft.get(Vt),Oe=Lt,Oe.setIndex(Ze)),$.isMesh)at.wireframe===!0?(qt.setLineWidth(at.wireframeLinewidth*sn()),Oe.setMode(k.LINES)):Oe.setMode(k.TRIANGLES);else if($.isLine){let jt=at.linewidth;jt===void 0&&(jt=1),qt.setLineWidth(jt*sn()),$.isLineSegments?Oe.setMode(k.LINES):$.isLineLoop?Oe.setMode(k.LINE_LOOP):Oe.setMode(k.LINE_STRIP)}else $.isPoints?Oe.setMode(k.POINTS):$.isSprite&&Oe.setMode(k.TRIANGLES);if($.isBatchedMesh)if($._multiDrawInstances!==null)vu("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Oe.renderMultiDrawInstances($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount,$._multiDrawInstances);else if(Ee.get("WEBGL_multi_draw"))Oe.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const jt=$._multiDrawStarts,Ue=$._multiDrawCounts,ie=$._multiDrawCount,Un=Vt?ft.get(Vt).bytesPerElement:1,Ma=A.get(at).currentProgram.getUniforms();for(let Ln=0;Ln<ie;Ln++)Ma.setValue(k,"_gl_DrawID",Ln),Oe.render(jt[Ln]/Un,Ue[Ln])}else if($.isInstancedMesh)Oe.renderInstances($t,Je,$.count);else if(lt.isInstancedBufferGeometry){const jt=lt._maxInstanceCount!==void 0?lt._maxInstanceCount:1/0,Ue=Math.min(lt.instanceCount,jt);Oe.renderInstances($t,Je,Ue)}else Oe.render($t,Je)};function al(O,j,lt){O.transparent===!0&&O.side===Ya&&O.forceSinglePass===!1?(O.side=si,O.needsUpdate=!0,Vs(O,j,lt),O.side=qr,O.needsUpdate=!0,Vs(O,j,lt),O.side=Ya):Vs(O,j,lt)}this.compile=function(O,j,lt=null){lt===null&&(lt=O),R=bt.get(lt),R.init(j),U.push(R),lt.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),O!==lt&&O.traverseVisible(function($){$.isLight&&$.layers.test(j.layers)&&(R.pushLight($),$.castShadow&&R.pushShadow($))}),R.setupLights();const at=new Set;return O.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Ut=$.material;if(Ut)if(Array.isArray(Ut))for(let It=0;It<Ut.length;It++){const Nt=Ut[It];al(Nt,lt,$),at.add(Nt)}else al(Ut,lt,$),at.add(Ut)}),R=U.pop(),at},this.compileAsync=function(O,j,lt=null){const at=this.compile(O,j,lt);return new Promise($=>{function Ut(){if(at.forEach(function(It){A.get(It).currentProgram.isReady()&&at.delete(It)}),at.size===0){$(O);return}setTimeout(Ut,10)}Ee.get("KHR_parallel_shader_compile")!==null?Ut():setTimeout(Ut,10)})};let Is=null;function rl(O){Is&&Is(O)}function Bs(){aa.stop()}function sl(){aa.start()}const aa=new Oy;aa.setAnimationLoop(rl),typeof self<"u"&&aa.setContext(self),this.setAnimationLoop=function(O){Is=O,Rt.setAnimationLoop(O),O===null?aa.stop():aa.start()},Rt.addEventListener("sessionstart",Bs),Rt.addEventListener("sessionend",sl),this.render=function(O,j){if(j!==void 0&&j.isCamera!==!0){Ce("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;const lt=Rt.enabled===!0&&Rt.isPresenting===!0,at=F!==null&&(Z===null||lt)&&F.begin(b,Z);if(O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),Rt.enabled===!0&&Rt.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(Rt.cameraAutoUpdate===!0&&Rt.updateCamera(j),j=Rt.getCamera()),O.isScene===!0&&O.onBeforeRender(b,O,j,Z),R=bt.get(O,U.length),R.init(j),U.push(R),rn.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),Ht.setFromProjectionMatrix(rn,pa,j.reversedDepth),he=this.localClippingEnabled,Bt=zt.init(this.clippingPlanes,he),C=Et.get(O,P.length),C.init(),P.push(C),Rt.enabled===!0&&Rt.isPresenting===!0){const It=b.xr.getDepthSensingMesh();It!==null&&wi(It,j,-1/0,b.sortObjects)}wi(O,j,0,b.sortObjects),C.finish(),b.sortObjects===!0&&C.sort(yt,Ct),se=Rt.enabled===!1||Rt.isPresenting===!1||Rt.hasDepthSensing()===!1,se&&Dt.addToRenderList(C,O),this.info.render.frame++,Bt===!0&&zt.beginShadows();const $=R.state.shadowsArray;if(Pt.render($,O,j),Bt===!0&&zt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(at&&F.hasRenderPass())===!1){const It=C.opaque,Nt=C.transmissive;if(R.setupLights(),j.isArrayCamera){const Vt=j.cameras;if(Nt.length>0)for(let Xt=0,Jt=Vt.length;Xt<Jt;Xt++){const Wt=Vt[Xt];Dn(It,Nt,O,Wt)}se&&Dt.render(O);for(let Xt=0,Jt=Vt.length;Xt<Jt;Xt++){const Wt=Vt[Xt];mn(C,O,Wt,Wt.viewport)}}else Nt.length>0&&Dn(It,Nt,O,j),se&&Dt.render(O),mn(C,O,j)}Z!==null&&Y===0&&(q.updateMultisampleRenderTarget(Z),q.updateRenderTargetMipmap(Z)),at&&F.end(b),O.isScene===!0&&O.onAfterRender(b,O,j),Ft.resetDefaultState(),st=-1,it=null,U.pop(),U.length>0?(R=U[U.length-1],Bt===!0&&zt.setGlobalState(b.clippingPlanes,R.state.camera)):R=null,P.pop(),P.length>0?C=P[P.length-1]:C=null};function wi(O,j,lt,at){if(O.visible===!1)return;if(O.layers.test(j.layers)){if(O.isGroup)lt=O.renderOrder;else if(O.isLOD)O.autoUpdate===!0&&O.update(j);else if(O.isLight)R.pushLight(O),O.castShadow&&R.pushShadow(O);else if(O.isSprite){if(!O.frustumCulled||Ht.intersectsSprite(O)){at&&de.setFromMatrixPosition(O.matrixWorld).applyMatrix4(rn);const It=wt.update(O),Nt=O.material;Nt.visible&&C.push(O,It,Nt,lt,de.z,null)}}else if((O.isMesh||O.isLine||O.isPoints)&&(!O.frustumCulled||Ht.intersectsObject(O))){const It=wt.update(O),Nt=O.material;if(at&&(O.boundingSphere!==void 0?(O.boundingSphere===null&&O.computeBoundingSphere(),de.copy(O.boundingSphere.center)):(It.boundingSphere===null&&It.computeBoundingSphere(),de.copy(It.boundingSphere.center)),de.applyMatrix4(O.matrixWorld).applyMatrix4(rn)),Array.isArray(Nt)){const Vt=It.groups;for(let Xt=0,Jt=Vt.length;Xt<Jt;Xt++){const Wt=Vt[Xt],$t=Nt[Wt.materialIndex];$t&&$t.visible&&C.push(O,It,$t,lt,de.z,Wt)}}else Nt.visible&&C.push(O,It,Nt,lt,de.z,null)}}const Ut=O.children;for(let It=0,Nt=Ut.length;It<Nt;It++)wi(Ut[It],j,lt,at)}function mn(O,j,lt,at){const{opaque:$,transmissive:Ut,transparent:It}=O;R.setupLightsView(lt),Bt===!0&&zt.setGlobalState(b.clippingPlanes,lt),at&&qt.viewport(I.copy(at)),$.length>0&&qi($,j,lt),Ut.length>0&&qi(Ut,j,lt),It.length>0&&qi(It,j,lt),qt.buffers.depth.setTest(!0),qt.buffers.depth.setMask(!0),qt.buffers.color.setMask(!0),qt.setPolygonOffset(!1)}function Dn(O,j,lt,at){if((lt.isScene===!0?lt.overrideMaterial:null)!==null)return;if(R.state.transmissionRenderTarget[at.id]===void 0){const $t=Ee.has("EXT_color_buffer_half_float")||Ee.has("EXT_color_buffer_float");R.state.transmissionRenderTarget[at.id]=new ga(1,1,{generateMipmaps:!0,type:$t?$a:Gi,minFilter:Rs,samples:Ne.samples,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:be.workingColorSpace})}const Ut=R.state.transmissionRenderTarget[at.id],It=at.viewport||I;Ut.setSize(It.z*b.transmissionResolutionScale,It.w*b.transmissionResolutionScale);const Nt=b.getRenderTarget(),Vt=b.getActiveCubeFace(),Xt=b.getActiveMipmapLevel();b.setRenderTarget(Ut),b.getClearColor(xt),gt=b.getClearAlpha(),gt<1&&b.setClearColor(16777215,.5),b.clear(),se&&Dt.render(lt);const Jt=b.toneMapping;b.toneMapping=_a;const Wt=at.viewport;if(at.viewport!==void 0&&(at.viewport=void 0),R.setupLightsView(at),Bt===!0&&zt.setGlobalState(b.clippingPlanes,at),qi(O,lt,at),q.updateMultisampleRenderTarget(Ut),q.updateRenderTargetMipmap(Ut),Ee.has("WEBGL_multisampled_render_to_texture")===!1){let $t=!1;for(let De=0,Je=j.length;De<Je;De++){const Ze=j[De],{object:Oe,geometry:jt,material:Ue,group:ie}=Ze;if(Ue.side===Ya&&Oe.layers.test(at.layers)){const Un=Ue.side;Ue.side=si,Ue.needsUpdate=!0,Hs(Oe,lt,at,jt,Ue,ie),Ue.side=Un,Ue.needsUpdate=!0,$t=!0}}$t===!0&&(q.updateMultisampleRenderTarget(Ut),q.updateRenderTargetMipmap(Ut))}b.setRenderTarget(Nt,Vt,Xt),b.setClearColor(xt,gt),Wt!==void 0&&(at.viewport=Wt),b.toneMapping=Jt}function qi(O,j,lt){const at=j.isScene===!0?j.overrideMaterial:null;for(let $=0,Ut=O.length;$<Ut;$++){const It=O[$],{object:Nt,geometry:Vt,group:Xt}=It;let Jt=It.material;Jt.allowOverride===!0&&at!==null&&(Jt=at),Nt.layers.test(lt.layers)&&Hs(Nt,j,lt,Vt,Jt,Xt)}}function Hs(O,j,lt,at,$,Ut){O.onBeforeRender(b,j,lt,at,$,Ut),O.modelViewMatrix.multiplyMatrices(lt.matrixWorldInverse,O.matrixWorld),O.normalMatrix.getNormalMatrix(O.modelViewMatrix),$.onBeforeRender(b,j,lt,at,O,Ut),$.transparent===!0&&$.side===Ya&&$.forceSinglePass===!1?($.side=si,$.needsUpdate=!0,b.renderBufferDirect(lt,j,at,$,O,Ut),$.side=qr,$.needsUpdate=!0,b.renderBufferDirect(lt,j,at,$,O,Ut),$.side=Ya):b.renderBufferDirect(lt,j,at,$,O,Ut),O.onAfterRender(b,j,lt,at,$,Ut)}function Vs(O,j,lt){j.isScene!==!0&&(j=we);const at=A.get(O),$=R.state.lights,Ut=R.state.shadowsArray,It=$.state.version,Nt=kt.getParameters(O,$.state,Ut,j,lt),Vt=kt.getProgramCacheKey(Nt);let Xt=at.programs;at.environment=O.isMeshStandardMaterial?j.environment:null,at.fog=j.fog,at.envMap=(O.isMeshStandardMaterial?St:pt).get(O.envMap||at.environment),at.envMapRotation=at.environment!==null&&O.envMap===null?j.environmentRotation:O.envMapRotation,Xt===void 0&&(O.addEventListener("dispose",Gn),Xt=new Map,at.programs=Xt);let Jt=Xt.get(Vt);if(Jt!==void 0){if(at.currentProgram===Jt&&at.lightsStateVersion===It)return ol(O,Nt),Jt}else Nt.uniforms=kt.getUniforms(O),O.onBeforeCompile(Nt,b),Jt=kt.acquireProgram(Nt,Vt),Xt.set(Vt,Jt),at.uniforms=Nt.uniforms;const Wt=at.uniforms;return(!O.isShaderMaterial&&!O.isRawShaderMaterial||O.clipping===!0)&&(Wt.clippingPlanes=zt.uniform),ol(O,Nt),at.needsLights=sr(O),at.lightsStateVersion=It,at.needsLights&&(Wt.ambientLightColor.value=$.state.ambient,Wt.lightProbe.value=$.state.probe,Wt.directionalLights.value=$.state.directional,Wt.directionalLightShadows.value=$.state.directionalShadow,Wt.spotLights.value=$.state.spot,Wt.spotLightShadows.value=$.state.spotShadow,Wt.rectAreaLights.value=$.state.rectArea,Wt.ltc_1.value=$.state.rectAreaLTC1,Wt.ltc_2.value=$.state.rectAreaLTC2,Wt.pointLights.value=$.state.point,Wt.pointLightShadows.value=$.state.pointShadow,Wt.hemisphereLights.value=$.state.hemi,Wt.directionalShadowMap.value=$.state.directionalShadowMap,Wt.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Wt.spotShadowMap.value=$.state.spotShadowMap,Wt.spotLightMatrix.value=$.state.spotLightMatrix,Wt.spotLightMap.value=$.state.spotLightMap,Wt.pointShadowMap.value=$.state.pointShadowMap,Wt.pointShadowMatrix.value=$.state.pointShadowMatrix),at.currentProgram=Jt,at.uniformsList=null,Jt}function Pu(O){if(O.uniformsList===null){const j=O.currentProgram.getUniforms();O.uniformsList=Sf.seqWithValue(j.seq,O.uniforms)}return O.uniformsList}function ol(O,j){const lt=A.get(O);lt.outputColorSpace=j.outputColorSpace,lt.batching=j.batching,lt.batchingColor=j.batchingColor,lt.instancing=j.instancing,lt.instancingColor=j.instancingColor,lt.instancingMorph=j.instancingMorph,lt.skinning=j.skinning,lt.morphTargets=j.morphTargets,lt.morphNormals=j.morphNormals,lt.morphColors=j.morphColors,lt.morphTargetsCount=j.morphTargetsCount,lt.numClippingPlanes=j.numClippingPlanes,lt.numIntersection=j.numClipIntersection,lt.vertexAlphas=j.vertexAlphas,lt.vertexTangents=j.vertexTangents,lt.toneMapping=j.toneMapping}function Qr(O,j,lt,at,$){j.isScene!==!0&&(j=we),q.resetTextureUnits();const Ut=j.fog,It=at.isMeshStandardMaterial?j.environment:null,Nt=Z===null?b.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Yo,Vt=(at.isMeshStandardMaterial?St:pt).get(at.envMap||It),Xt=at.vertexColors===!0&&!!lt.attributes.color&&lt.attributes.color.itemSize===4,Jt=!!lt.attributes.tangent&&(!!at.normalMap||at.anisotropy>0),Wt=!!lt.morphAttributes.position,$t=!!lt.morphAttributes.normal,De=!!lt.morphAttributes.color;let Je=_a;at.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Je=b.toneMapping);const Ze=lt.morphAttributes.position||lt.morphAttributes.normal||lt.morphAttributes.color,Oe=Ze!==void 0?Ze.length:0,jt=A.get(at),Ue=R.state.lights;if(Bt===!0&&(he===!0||O!==it)){const On=O===it&&at.id===st;zt.setState(at,O,On)}let ie=!1;at.version===jt.__version?(jt.needsLights&&jt.lightsStateVersion!==Ue.state.version||jt.outputColorSpace!==Nt||$.isBatchedMesh&&jt.batching===!1||!$.isBatchedMesh&&jt.batching===!0||$.isBatchedMesh&&jt.batchingColor===!0&&$.colorTexture===null||$.isBatchedMesh&&jt.batchingColor===!1&&$.colorTexture!==null||$.isInstancedMesh&&jt.instancing===!1||!$.isInstancedMesh&&jt.instancing===!0||$.isSkinnedMesh&&jt.skinning===!1||!$.isSkinnedMesh&&jt.skinning===!0||$.isInstancedMesh&&jt.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&jt.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&jt.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&jt.instancingMorph===!1&&$.morphTexture!==null||jt.envMap!==Vt||at.fog===!0&&jt.fog!==Ut||jt.numClippingPlanes!==void 0&&(jt.numClippingPlanes!==zt.numPlanes||jt.numIntersection!==zt.numIntersection)||jt.vertexAlphas!==Xt||jt.vertexTangents!==Jt||jt.morphTargets!==Wt||jt.morphNormals!==$t||jt.morphColors!==De||jt.toneMapping!==Je||jt.morphTargetsCount!==Oe)&&(ie=!0):(ie=!0,jt.__version=at.version);let Un=jt.currentProgram;ie===!0&&(Un=Vs(at,j,$));let Ma=!1,Ln=!1,Di=!1;const ze=Un.getUniforms(),Nn=jt.uniforms;if(qt.useProgram(Un.program)&&(Ma=!0,Ln=!0,Di=!0),at.id!==st&&(st=at.id,Ln=!0),Ma||it!==O){qt.buffers.depth.getReversed()&&O.reversedDepth!==!0&&(O._reversedDepth=!0,O.updateProjectionMatrix()),ze.setValue(k,"projectionMatrix",O.projectionMatrix),ze.setValue(k,"viewMatrix",O.matrixWorldInverse);const Pn=ze.map.cameraPosition;Pn!==void 0&&Pn.setValue(k,ge.setFromMatrixPosition(O.matrixWorld)),Ne.logarithmicDepthBuffer&&ze.setValue(k,"logDepthBufFC",2/(Math.log(O.far+1)/Math.LN2)),(at.isMeshPhongMaterial||at.isMeshToonMaterial||at.isMeshLambertMaterial||at.isMeshBasicMaterial||at.isMeshStandardMaterial||at.isShaderMaterial)&&ze.setValue(k,"isOrthographic",O.isOrthographicCamera===!0),it!==O&&(it=O,Ln=!0,Di=!0)}if(jt.needsLights&&(Ue.state.directionalShadowMap.length>0&&ze.setValue(k,"directionalShadowMap",Ue.state.directionalShadowMap,q),Ue.state.spotShadowMap.length>0&&ze.setValue(k,"spotShadowMap",Ue.state.spotShadowMap,q),Ue.state.pointShadowMap.length>0&&ze.setValue(k,"pointShadowMap",Ue.state.pointShadowMap,q)),$.isSkinnedMesh){ze.setOptional(k,$,"bindMatrix"),ze.setOptional(k,$,"bindMatrixInverse");const On=$.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),ze.setValue(k,"boneTexture",On.boneTexture,q))}$.isBatchedMesh&&(ze.setOptional(k,$,"batchingTexture"),ze.setValue(k,"batchingTexture",$._matricesTexture,q),ze.setOptional(k,$,"batchingIdTexture"),ze.setValue(k,"batchingIdTexture",$._indirectTexture,q),ze.setOptional(k,$,"batchingColorTexture"),$._colorsTexture!==null&&ze.setValue(k,"batchingColorTexture",$._colorsTexture,q));const En=lt.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&le.update($,lt,Un),(Ln||jt.receiveShadow!==$.receiveShadow)&&(jt.receiveShadow=$.receiveShadow,ze.setValue(k,"receiveShadow",$.receiveShadow)),at.isMeshGouraudMaterial&&at.envMap!==null&&(Nn.envMap.value=Vt,Nn.flipEnvMap.value=Vt.isCubeTexture&&Vt.isRenderTargetTexture===!1?-1:1),at.isMeshStandardMaterial&&at.envMap===null&&j.environment!==null&&(Nn.envMapIntensity.value=j.environmentIntensity),Nn.dfgLUT!==void 0&&(Nn.dfgLUT.value=O2()),Ln&&(ze.setValue(k,"toneMappingExposure",b.toneMappingExposure),jt.needsLights&&ll(Nn,Di),Ut&&at.fog===!0&&ee.refreshFogUniforms(Nn,Ut),ee.refreshMaterialUniforms(Nn,at,ht,J,R.state.transmissionRenderTarget[O.id]),Sf.upload(k,Pu(jt),Nn,q)),at.isShaderMaterial&&at.uniformsNeedUpdate===!0&&(Sf.upload(k,Pu(jt),Nn,q),at.uniformsNeedUpdate=!1),at.isSpriteMaterial&&ze.setValue(k,"center",$.center),ze.setValue(k,"modelViewMatrix",$.modelViewMatrix),ze.setValue(k,"normalMatrix",$.normalMatrix),ze.setValue(k,"modelMatrix",$.matrixWorld),at.isShaderMaterial||at.isRawShaderMaterial){const On=at.uniformsGroups;for(let Pn=0,Gs=On.length;Pn<Gs;Pn++){const Yi=On[Pn];Mt.update(Yi,Un),Mt.bind(Yi,Un)}}return Un}function ll(O,j){O.ambientLightColor.needsUpdate=j,O.lightProbe.needsUpdate=j,O.directionalLights.needsUpdate=j,O.directionalLightShadows.needsUpdate=j,O.pointLights.needsUpdate=j,O.pointLightShadows.needsUpdate=j,O.spotLights.needsUpdate=j,O.spotLightShadows.needsUpdate=j,O.rectAreaLights.needsUpdate=j,O.hemisphereLights.needsUpdate=j}function sr(O){return O.isMeshLambertMaterial||O.isMeshToonMaterial||O.isMeshPhongMaterial||O.isMeshStandardMaterial||O.isShadowMaterial||O.isShaderMaterial&&O.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(O,j,lt){const at=A.get(O);at.__autoAllocateDepthBuffer=O.resolveDepthBuffer===!1,at.__autoAllocateDepthBuffer===!1&&(at.__useRenderToTexture=!1),A.get(O.texture).__webglTexture=j,A.get(O.depthTexture).__webglTexture=at.__autoAllocateDepthBuffer?void 0:lt,at.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(O,j){const lt=A.get(O);lt.__webglFramebuffer=j,lt.__useDefaultFramebuffer=j===void 0};const or=k.createFramebuffer();this.setRenderTarget=function(O,j=0,lt=0){Z=O,V=j,Y=lt;let at=null,$=!1,Ut=!1;if(O){const Nt=A.get(O);if(Nt.__useDefaultFramebuffer!==void 0){qt.bindFramebuffer(k.FRAMEBUFFER,Nt.__webglFramebuffer),I.copy(O.viewport),H.copy(O.scissor),Q=O.scissorTest,qt.viewport(I),qt.scissor(H),qt.setScissorTest(Q),st=-1;return}else if(Nt.__webglFramebuffer===void 0)q.setupRenderTarget(O);else if(Nt.__hasExternalTextures)q.rebindTextures(O,A.get(O.texture).__webglTexture,A.get(O.depthTexture).__webglTexture);else if(O.depthBuffer){const Jt=O.depthTexture;if(Nt.__boundDepthTexture!==Jt){if(Jt!==null&&A.has(Jt)&&(O.width!==Jt.image.width||O.height!==Jt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");q.setupDepthRenderbuffer(O)}}const Vt=O.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Ut=!0);const Xt=A.get(O).__webglFramebuffer;O.isWebGLCubeRenderTarget?(Array.isArray(Xt[j])?at=Xt[j][lt]:at=Xt[j],$=!0):O.samples>0&&q.useMultisampledRTT(O)===!1?at=A.get(O).__webglMultisampledFramebuffer:Array.isArray(Xt)?at=Xt[lt]:at=Xt,I.copy(O.viewport),H.copy(O.scissor),Q=O.scissorTest}else I.copy(tt).multiplyScalar(ht).floor(),H.copy(ut).multiplyScalar(ht).floor(),Q=Tt;if(lt!==0&&(at=or),qt.bindFramebuffer(k.FRAMEBUFFER,at)&&qt.drawBuffers(O,at),qt.viewport(I),qt.scissor(H),qt.setScissorTest(Q),$){const Nt=A.get(O.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+j,Nt.__webglTexture,lt)}else if(Ut){const Nt=j;for(let Vt=0;Vt<O.textures.length;Vt++){const Xt=A.get(O.textures[Vt]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+Vt,Xt.__webglTexture,lt,Nt)}}else if(O!==null&&lt!==0){const Nt=A.get(O.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Nt.__webglTexture,lt)}st=-1},this.readRenderTargetPixels=function(O,j,lt,at,$,Ut,It,Nt=0){if(!(O&&O.isWebGLRenderTarget)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Vt=A.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Vt=Vt[It]),Vt){qt.bindFramebuffer(k.FRAMEBUFFER,Vt);try{const Xt=O.textures[Nt],Jt=Xt.format,Wt=Xt.type;if(!Ne.textureFormatReadable(Jt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ne.textureTypeReadable(Wt)){Ce("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=O.width-at&&lt>=0&&lt<=O.height-$&&(O.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),k.readPixels(j,lt,at,$,At.convert(Jt),At.convert(Wt),Ut))}finally{const Xt=Z!==null?A.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,Xt)}}},this.readRenderTargetPixelsAsync=async function(O,j,lt,at,$,Ut,It,Nt=0){if(!(O&&O.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Vt=A.get(O).__webglFramebuffer;if(O.isWebGLCubeRenderTarget&&It!==void 0&&(Vt=Vt[It]),Vt)if(j>=0&&j<=O.width-at&&lt>=0&&lt<=O.height-$){qt.bindFramebuffer(k.FRAMEBUFFER,Vt);const Xt=O.textures[Nt],Jt=Xt.format,Wt=Xt.type;if(!Ne.textureFormatReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ne.textureTypeReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $t=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.bufferData(k.PIXEL_PACK_BUFFER,Ut.byteLength,k.STREAM_READ),O.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+Nt),k.readPixels(j,lt,at,$,At.convert(Jt),At.convert(Wt),0);const De=Z!==null?A.get(Z).__webglFramebuffer:null;qt.bindFramebuffer(k.FRAMEBUFFER,De);const Je=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await ab(k,Je,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$t),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ut),k.deleteBuffer($t),k.deleteSync(Je),Ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(O,j=null,lt=0){const at=Math.pow(2,-lt),$=Math.floor(O.image.width*at),Ut=Math.floor(O.image.height*at),It=j!==null?j.x:0,Nt=j!==null?j.y:0;q.setTexture2D(O,0),k.copyTexSubImage2D(k.TEXTURE_2D,lt,0,0,It,Nt,$,Ut),qt.unbindTexture()};const Jr=k.createFramebuffer(),lr=k.createFramebuffer();this.copyTextureToTexture=function(O,j,lt=null,at=null,$=0,Ut=null){Ut===null&&($!==0?(vu("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ut=$,$=0):Ut=0);let It,Nt,Vt,Xt,Jt,Wt,$t,De,Je;const Ze=O.isCompressedTexture?O.mipmaps[Ut]:O.image;if(lt!==null)It=lt.max.x-lt.min.x,Nt=lt.max.y-lt.min.y,Vt=lt.isBox3?lt.max.z-lt.min.z:1,Xt=lt.min.x,Jt=lt.min.y,Wt=lt.isBox3?lt.min.z:0;else{const En=Math.pow(2,-$);It=Math.floor(Ze.width*En),Nt=Math.floor(Ze.height*En),O.isDataArrayTexture?Vt=Ze.depth:O.isData3DTexture?Vt=Math.floor(Ze.depth*En):Vt=1,Xt=0,Jt=0,Wt=0}at!==null?($t=at.x,De=at.y,Je=at.z):($t=0,De=0,Je=0);const Oe=At.convert(j.format),jt=At.convert(j.type);let Ue;j.isData3DTexture?(q.setTexture3D(j,0),Ue=k.TEXTURE_3D):j.isDataArrayTexture||j.isCompressedArrayTexture?(q.setTexture2DArray(j,0),Ue=k.TEXTURE_2D_ARRAY):(q.setTexture2D(j,0),Ue=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const ie=k.getParameter(k.UNPACK_ROW_LENGTH),Un=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Ma=k.getParameter(k.UNPACK_SKIP_PIXELS),Ln=k.getParameter(k.UNPACK_SKIP_ROWS),Di=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Ze.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ze.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Xt),k.pixelStorei(k.UNPACK_SKIP_ROWS,Jt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Wt);const ze=O.isDataArrayTexture||O.isData3DTexture,Nn=j.isDataArrayTexture||j.isData3DTexture;if(O.isDepthTexture){const En=A.get(O),On=A.get(j),Pn=A.get(En.__renderTarget),Gs=A.get(On.__renderTarget);qt.bindFramebuffer(k.READ_FRAMEBUFFER,Pn.__webglFramebuffer),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Gs.__webglFramebuffer);for(let Yi=0;Yi<Vt;Yi++)ze&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(O).__webglTexture,$,Wt+Yi),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,A.get(j).__webglTexture,Ut,Je+Yi)),k.blitFramebuffer(Xt,Jt,It,Nt,$t,De,It,Nt,k.DEPTH_BUFFER_BIT,k.NEAREST);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if($!==0||O.isRenderTargetTexture||A.has(O)){const En=A.get(O),On=A.get(j);qt.bindFramebuffer(k.READ_FRAMEBUFFER,Jr),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,lr);for(let Pn=0;Pn<Vt;Pn++)ze?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,En.__webglTexture,$,Wt+Pn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,En.__webglTexture,$),Nn?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,On.__webglTexture,Ut,Je+Pn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,On.__webglTexture,Ut),$!==0?k.blitFramebuffer(Xt,Jt,It,Nt,$t,De,It,Nt,k.COLOR_BUFFER_BIT,k.NEAREST):Nn?k.copyTexSubImage3D(Ue,Ut,$t,De,Je+Pn,Xt,Jt,It,Nt):k.copyTexSubImage2D(Ue,Ut,$t,De,Xt,Jt,It,Nt);qt.bindFramebuffer(k.READ_FRAMEBUFFER,null),qt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Nn?O.isDataTexture||O.isData3DTexture?k.texSubImage3D(Ue,Ut,$t,De,Je,It,Nt,Vt,Oe,jt,Ze.data):j.isCompressedArrayTexture?k.compressedTexSubImage3D(Ue,Ut,$t,De,Je,It,Nt,Vt,Oe,Ze.data):k.texSubImage3D(Ue,Ut,$t,De,Je,It,Nt,Vt,Oe,jt,Ze):O.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ut,$t,De,It,Nt,Oe,jt,Ze.data):O.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ut,$t,De,Ze.width,Ze.height,Oe,Ze.data):k.texSubImage2D(k.TEXTURE_2D,Ut,$t,De,It,Nt,Oe,jt,Ze);k.pixelStorei(k.UNPACK_ROW_LENGTH,ie),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Un),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Ma),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ln),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Di),Ut===0&&j.generateMipmaps&&k.generateMipmap(Ue),qt.unbindTexture()},this.initRenderTarget=function(O){A.get(O).__webglFramebuffer===void 0&&q.setupRenderTarget(O)},this.initTexture=function(O){O.isCubeTexture?q.setTextureCube(O,0):O.isData3DTexture?q.setTexture3D(O,0):O.isDataArrayTexture||O.isCompressedArrayTexture?q.setTexture2DArray(O,0):q.setTexture2D(O,0),qt.unbindTexture()},this.resetState=function(){V=0,Y=0,Z=null,qt.reset(),Ft.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pa}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const n=this.getContext();n.drawingBufferColorSpace=be._getDrawingBufferColorSpace(t),n.unpackColorSpace=be._getUnpackColorSpace()}}const F2=({topColor:r="#5227FF",bottomColor:t="#FF9FFC",intensity:n=1,rotationSpeed:a=.3,interactive:o=!1,className:l="",glowAmount:c=.005,pillarWidth:f=3,pillarHeight:p=.4,noiseIntensity:d=.5,mixBlendMode:_="screen",pillarRotation:g=0})=>{const v=Kt.useRef(null),S=Kt.useRef(null),T=Kt.useRef(null),M=Kt.useRef(null),y=Kt.useRef(null),x=Kt.useRef(null),D=Kt.useRef(null),w=Kt.useRef(new Pe(0,0)),C=Kt.useRef(0),[R,P]=Kt.useState(!0);return Kt.useEffect(()=>{const U=document.createElement("canvas");U.getContext("webgl")||U.getContext("experimental-webgl")||(P(!1),console.warn("WebGL is not supported in this browser"))},[]),Kt.useEffect(()=>{if(!v.current||!R)return;const U=v.current,F=U.clientWidth,b=U.clientHeight,L=new Db;y.current=L;const V=new M_(-1,1,1,-1,0,1);x.current=V;let Y;try{Y=new P2({antialias:!1,alpha:!0,powerPreference:"high-performance",precision:"lowp",stencil:!1,depth:!1})}catch(ut){console.error("Failed to create WebGL renderer:",ut),P(!1);return}Y.setSize(F,b),Y.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.appendChild(Y.domElement),T.current=Y;const Z=ut=>{const Tt=new Ve(ut);return new ot(Tt.r,Tt.g,Tt.b)},st=`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = vec4(position, 1.0);
      }
    `,it=`
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec2 uMouse;
      uniform vec3 uTopColor;
      uniform vec3 uBottomColor;
      uniform float uIntensity;
      uniform bool uInteractive;
      uniform float uGlowAmount;
      uniform float uPillarWidth;
      uniform float uPillarHeight;
      uniform float uNoiseIntensity;
      uniform float uPillarRotation;
      varying vec2 vUv;

      const float PI = 3.141592653589793;
      const float EPSILON = 0.001;
      const float E = 2.71828182845904523536;
      const float HALF = 0.5;

      mat2 rot(float angle) {
        float s = sin(angle);
        float c = cos(angle);
        return mat2(c, -s, s, c);
      }

      // Procedural noise function
      float noise(vec2 coord) {
        float G = E;
        vec2 r = (G * sin(G * coord));
        return fract(r.x * r.y * (1.0 + coord.x));
      }

      // Apply layered wave deformation to position
      vec3 applyWaveDeformation(vec3 pos, float timeOffset) {
        float frequency = 1.0;
        float amplitude = 1.0;
        vec3 deformed = pos;
        
        for(float i = 0.0; i < 4.0; i++) {
          deformed.xz *= rot(0.4);
          float phase = timeOffset * i * 2.0;
          vec3 oscillation = cos(deformed.zxy * frequency - phase);
          deformed += oscillation * amplitude;
          frequency *= 2.0;
          amplitude *= HALF;
        }
        return deformed;
      }

      // Polynomial smooth blending between two values
      float blendMin(float a, float b, float k) {
        float scaledK = k * 4.0;
        float h = max(scaledK - abs(a - b), 0.0);
        return min(a, b) - h * h * 0.25 / scaledK;
      }

      float blendMax(float a, float b, float k) {
        return -blendMin(-a, -b, k);
      }

      void main() {
        vec2 fragCoord = vUv * uResolution;
        vec2 uv = (fragCoord * 2.0 - uResolution) / uResolution.y;
        
        // Apply 2D rotation to UV coordinates
        float rotAngle = uPillarRotation * PI / 180.0;
        uv *= rot(rotAngle);

        vec3 origin = vec3(0.0, 0.0, -10.0);
        vec3 direction = normalize(vec3(uv, 1.0));

        float maxDepth = 50.0;
        float depth = 0.1;

        mat2 rotX = rot(uTime * 0.3);
        if(uInteractive && length(uMouse) > 0.0) {
          rotX = rot(uMouse.x * PI * 2.0);
        }

        vec3 color = vec3(0.0);
        
        for(float i = 0.0; i < 100.0; i++) {
          vec3 pos = origin + direction * depth;
          pos.xz *= rotX;

          // Apply vertical scaling and wave deformation
          vec3 deformed = pos;
          deformed.y *= uPillarHeight;
          deformed = applyWaveDeformation(deformed + vec3(0.0, uTime, 0.0), uTime);
          
          // Calculate distance field using cosine pattern
          vec2 cosinePair = cos(deformed.xz);
          float fieldDistance = length(cosinePair) - 0.2;
          
          // Radial boundary constraint
          float radialBound = length(pos.xz) - uPillarWidth;
          fieldDistance = blendMax(radialBound, fieldDistance, 1.0);
          fieldDistance = abs(fieldDistance) * 0.15 + 0.01;

          vec3 gradient = mix(uBottomColor, uTopColor, smoothstep(15.0, -15.0, pos.y));
          color += gradient * pow(1.0 / fieldDistance, 1.0);

          if(fieldDistance < EPSILON || depth > maxDepth) break;
          depth += fieldDistance;
        }

        // Normalize by pillar width to maintain consistent glow regardless of size
        float widthNormalization = uPillarWidth / 3.0;
        color = tanh(color * uGlowAmount / widthNormalization);
        
        // Add noise postprocessing
        float rnd = noise(gl_FragCoord.xy);
        color -= rnd / 15.0 * uNoiseIntensity;
        
        gl_FragColor = vec4(color * uIntensity, 1.0);
      }
    `,I=new ia({vertexShader:st,fragmentShader:it,uniforms:{uTime:{value:0},uResolution:{value:new Pe(F,b)},uMouse:{value:w.current},uTopColor:{value:Z(r)},uBottomColor:{value:Z(t)},uIntensity:{value:n},uInteractive:{value:o},uGlowAmount:{value:c},uPillarWidth:{value:f},uPillarHeight:{value:p},uNoiseIntensity:{value:d},uPillarRotation:{value:g}},transparent:!0,depthWrite:!1,depthTest:!1});M.current=I;const H=new Uu(2,2);D.current=H;const Q=new Sa(H,I);L.add(Q);let xt=null;const gt=ut=>{if(!o||xt)return;xt=window.setTimeout(()=>{xt=null},16);const Tt=U.getBoundingClientRect(),Ht=(ut.clientX-Tt.left)/Tt.width*2-1,Bt=-((ut.clientY-Tt.top)/Tt.height)*2+1;w.current.set(Ht,Bt)};o&&U.addEventListener("mousemove",gt,{passive:!0});let z=performance.now();const ht=1e3/60,yt=ut=>{if(!M.current||!T.current||!y.current||!x.current)return;const Tt=ut-z;Tt>=ht&&(C.current+=.016*a,M.current.uniforms.uTime.value=C.current,T.current.render(y.current,x.current),z=ut-Tt%ht),S.current=requestAnimationFrame(yt)};S.current=requestAnimationFrame(yt);let Ct=null;const tt=()=>{Ct&&clearTimeout(Ct),Ct=window.setTimeout(()=>{if(!T.current||!M.current||!v.current)return;const ut=v.current.clientWidth,Tt=v.current.clientHeight;T.current.setSize(ut,Tt),M.current.uniforms.uResolution.value.set(ut,Tt)},150)};return window.addEventListener("resize",tt,{passive:!0}),()=>{window.removeEventListener("resize",tt),o&&U.removeEventListener("mousemove",gt),S.current&&cancelAnimationFrame(S.current),T.current&&(T.current.dispose(),T.current.forceContextLoss(),U.contains(T.current.domElement)&&U.removeChild(T.current.domElement)),M.current&&M.current.dispose(),D.current&&D.current.dispose(),T.current=null,M.current=null,y.current=null,x.current=null,D.current=null,S.current=null}},[r,t,n,a,o,c,f,p,d,g,R]),R?_e.jsx("div",{ref:v,className:`light-pillar-container ${l}`,style:{mixBlendMode:_}}):_e.jsx("div",{className:`light-pillar-fallback ${l}`,style:{mixBlendMode:_},children:"WebGL not supported"})};function Wa(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function By(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var Ai={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},jo={duration:.5,overwrite:!1,delay:0},E_,Vn,tn,ki=1e8,Ye=1/ki,Wm=Math.PI*2,z2=Wm/4,I2=0,Hy=Math.sqrt,B2=Math.cos,H2=Math.sin,wn=function(t){return typeof t=="string"},cn=function(t){return typeof t=="function"},nr=function(t){return typeof t=="number"},T_=function(t){return typeof t>"u"},ya=function(t){return typeof t=="object"},oi=function(t){return t!==!1},b_=function(){return typeof window<"u"},df=function(t){return cn(t)||wn(t)},Vy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Zn=Array.isArray,V2=/random\([^)]+\)/g,G2=/,\s*/g,US=/(?:-?\.?\d|\.)+/gi,Gy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Fo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ip=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ky=/[+-]=-?[.\d]+/,k2=/[^,'"\[\]\s]+/gi,X2=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,nn,ca,qm,A_,Ri={},Cf={},Xy,Wy=function(t){return(Cf=Ko(t,Ri))&&fi},R_=function(t,n){return console.warn("Invalid property",t,"set to",n,"Missing plugin? gsap.registerPlugin()")},Su=function(t,n){return!n&&console.warn(t)},qy=function(t,n){return t&&(Ri[t]=n)&&Cf&&(Cf[t]=n)||Ri},yu=function(){return 0},W2={suppressEvents:!0,isStart:!0,kill:!1},yf={suppressEvents:!0,kill:!1},q2={suppressEvents:!0},C_={},Xr=[],Ym={},Yy,yi={},Bp={},LS=30,Mf=[],w_="",D_=function(t){var n=t[0],a,o;if(ya(n)||cn(n)||(t=[t]),!(a=(n._gsap||{}).harness)){for(o=Mf.length;o--&&!Mf[o].targetTest(n););a=Mf[o]}for(o=t.length;o--;)t[o]&&(t[o]._gsap||(t[o]._gsap=new gM(t[o],a)))||t.splice(o,1);return t},Us=function(t){return t._gsap||D_(Xi(t))[0]._gsap},Zy=function(t,n,a){return(a=t[n])&&cn(a)?t[n]():T_(a)&&t.getAttribute&&t.getAttribute(n)||a},li=function(t,n){return(t=t.split(",")).forEach(n)||t},dn=function(t){return Math.round(t*1e5)/1e5||0},en=function(t){return Math.round(t*1e7)/1e7||0},Vo=function(t,n){var a=n.charAt(0),o=parseFloat(n.substr(2));return t=parseFloat(t),a==="+"?t+o:a==="-"?t-o:a==="*"?t*o:t/o},Y2=function(t,n){for(var a=n.length,o=0;t.indexOf(n[o])<0&&++o<a;);return o<a},wf=function(){var t=Xr.length,n=Xr.slice(0),a,o;for(Ym={},Xr.length=0,a=0;a<t;a++)o=n[a],o&&o._lazy&&(o.render(o._lazy[0],o._lazy[1],!0)._lazy=0)},U_=function(t){return!!(t._initted||t._startAt||t.add)},jy=function(t,n,a,o){Xr.length&&!Vn&&wf(),t.render(n,a,!!(Vn&&n<0&&U_(t))),Xr.length&&!Vn&&wf()},Ky=function(t){var n=parseFloat(t);return(n||n===0)&&(t+"").match(k2).length<2?n:wn(t)?t.trim():t},Qy=function(t){return t},Ci=function(t,n){for(var a in n)a in t||(t[a]=n[a]);return t},Z2=function(t){return function(n,a){for(var o in a)o in n||o==="duration"&&t||o==="ease"||(n[o]=a[o])}},Ko=function(t,n){for(var a in n)t[a]=n[a];return t},NS=function r(t,n){for(var a in n)a!=="__proto__"&&a!=="constructor"&&a!=="prototype"&&(t[a]=ya(n[a])?r(t[a]||(t[a]={}),n[a]):n[a]);return t},Df=function(t,n){var a={},o;for(o in t)o in n||(a[o]=t[o]);return a},cu=function(t){var n=t.parent||nn,a=t.keyframes?Z2(Zn(t.keyframes)):Ci;if(oi(t.inherit))for(;n;)a(t,n.vars.defaults),n=n.parent||n._dp;return t},j2=function(t,n){for(var a=t.length,o=a===n.length;o&&a--&&t[a]===n[a];);return a<0},Jy=function(t,n,a,o,l){var c=t[o],f;if(l)for(f=n[l];c&&c[l]>f;)c=c._prev;return c?(n._next=c._next,c._next=n):(n._next=t[a],t[a]=n),n._next?n._next._prev=n:t[o]=n,n._prev=c,n.parent=n._dp=t,n},Wf=function(t,n,a,o){a===void 0&&(a="_first"),o===void 0&&(o="_last");var l=n._prev,c=n._next;l?l._next=c:t[a]===n&&(t[a]=c),c?c._prev=l:t[o]===n&&(t[o]=l),n._next=n._prev=n.parent=null},Yr=function(t,n){t.parent&&(!n||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Ls=function(t,n){if(t&&(!n||n._end>t._dur||n._start<0))for(var a=t;a;)a._dirty=1,a=a.parent;return t},K2=function(t){for(var n=t.parent;n&&n.parent;)n._dirty=1,n.totalDuration(),n=n.parent;return t},Zm=function(t,n,a,o){return t._startAt&&(Vn?t._startAt.revert(yf):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(n,!0,o))},Q2=function r(t){return!t||t._ts&&r(t.parent)},OS=function(t){return t._repeat?Qo(t._tTime,t=t.duration()+t._rDelay)*t:0},Qo=function(t,n){var a=Math.floor(t=en(t/n));return t&&a===t?a-1:a},Uf=function(t,n){return(t-n._start)*n._ts+(n._ts>=0?0:n._dirty?n.totalDuration():n._tDur)},qf=function(t){return t._end=en(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ye)||0))},Yf=function(t,n){var a=t._dp;return a&&a.smoothChildTiming&&t._ts&&(t._start=en(a._time-(t._ts>0?n/t._ts:((t._dirty?t.totalDuration():t._tDur)-n)/-t._ts)),qf(t),a._dirty||Ls(a,t)),t},$y=function(t,n){var a;if((n._time||!n._dur&&n._initted||n._start<t._time&&(n._dur||!n.add))&&(a=Uf(t.rawTime(),n),(!n._dur||Lu(0,n.totalDuration(),a)-n._tTime>Ye)&&n.render(a,!0)),Ls(t,n)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(a=t;a._dp;)a.rawTime()>=0&&a.totalTime(a._tTime),a=a._dp;t._zTime=-Ye}},ha=function(t,n,a,o){return n.parent&&Yr(n),n._start=en((nr(a)?a:a||t!==nn?Hi(t,a,n):t._time)+n._delay),n._end=en(n._start+(n.totalDuration()/Math.abs(n.timeScale())||0)),Jy(t,n,"_first","_last",t._sort?"_start":0),jm(n)||(t._recent=n),o||$y(t,n),t._ts<0&&Yf(t,t._tTime),t},tM=function(t,n){return(Ri.ScrollTrigger||R_("scrollTrigger",n))&&Ri.ScrollTrigger.create(n,t)},eM=function(t,n,a,o,l){if(N_(t,n,l),!t._initted)return 1;if(!a&&t._pt&&!Vn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Yy!==Mi.frame)return Xr.push(t),t._lazy=[l,o],1},J2=function r(t){var n=t.parent;return n&&n._ts&&n._initted&&!n._lock&&(n.rawTime()<0||r(n))},jm=function(t){var n=t.data;return n==="isFromStart"||n==="isStart"},$2=function(t,n,a,o){var l=t.ratio,c=n<0||!n&&(!t._start&&J2(t)&&!(!t._initted&&jm(t))||(t._ts<0||t._dp._ts<0)&&!jm(t))?0:1,f=t._rDelay,p=0,d,_,g;if(f&&t._repeat&&(p=Lu(0,t._tDur,n),_=Qo(p,f),t._yoyo&&_&1&&(c=1-c),_!==Qo(t._tTime,f)&&(l=1-c,t.vars.repeatRefresh&&t._initted&&t.invalidate())),c!==l||Vn||o||t._zTime===Ye||!n&&t._zTime){if(!t._initted&&eM(t,n,o,a,p))return;for(g=t._zTime,t._zTime=n||(a?Ye:0),a||(a=n&&!g),t.ratio=c,t._from&&(c=1-c),t._time=0,t._tTime=p,d=t._pt;d;)d.r(c,d.d),d=d._next;n<0&&Zm(t,n,a,!0),t._onUpdate&&!a&&Ei(t,"onUpdate"),p&&t._repeat&&!a&&t.parent&&Ei(t,"onRepeat"),(n>=t._tDur||n<0)&&t.ratio===c&&(c&&Yr(t,1),!a&&!Vn&&(Ei(t,c?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=n)},tw=function(t,n,a){var o;if(a>n)for(o=t._first;o&&o._start<=a;){if(o.data==="isPause"&&o._start>n)return o;o=o._next}else for(o=t._last;o&&o._start>=a;){if(o.data==="isPause"&&o._start<n)return o;o=o._prev}},Jo=function(t,n,a,o){var l=t._repeat,c=en(n)||0,f=t._tTime/t._tDur;return f&&!o&&(t._time*=c/t._dur),t._dur=c,t._tDur=l?l<0?1e10:en(c*(l+1)+t._rDelay*l):c,f>0&&!o&&Yf(t,t._tTime=t._tDur*f),t.parent&&qf(t),a||Ls(t.parent,t),t},PS=function(t){return t instanceof Qn?Ls(t):Jo(t,t._dur)},ew={_start:0,endTime:yu,totalDuration:yu},Hi=function r(t,n,a){var o=t.labels,l=t._recent||ew,c=t.duration()>=ki?l.endTime(!1):t._dur,f,p,d;return wn(n)&&(isNaN(n)||n in o)?(p=n.charAt(0),d=n.substr(-1)==="%",f=n.indexOf("="),p==="<"||p===">"?(f>=0&&(n=n.replace(/=/,"")),(p==="<"?l._start:l.endTime(l._repeat>=0))+(parseFloat(n.substr(1))||0)*(d?(f<0?l:a).totalDuration()/100:1)):f<0?(n in o||(o[n]=c),o[n]):(p=parseFloat(n.charAt(f-1)+n.substr(f+1)),d&&a&&(p=p/100*(Zn(a)?a[0]:a).totalDuration()),f>1?r(t,n.substr(0,f-1),a)+p:c+p)):n==null?c:+n},fu=function(t,n,a){var o=nr(n[1]),l=(o?2:1)+(t<2?0:1),c=n[l],f,p;if(o&&(c.duration=n[1]),c.parent=a,t){for(f=c,p=a;p&&!("immediateRender"in f);)f=p.vars.defaults||{},p=oi(p.vars.inherit)&&p.parent;c.immediateRender=oi(f.immediateRender),t<2?c.runBackwards=1:c.startAt=n[l-1]}return new yn(n[0],c,n[l+1])},Kr=function(t,n){return t||t===0?n(t):n},Lu=function(t,n,a){return a<t?t:a>n?n:a},qn=function(t,n){return!wn(t)||!(n=X2.exec(t))?"":n[1]},nw=function(t,n,a){return Kr(a,function(o){return Lu(t,n,o)})},Km=[].slice,nM=function(t,n){return t&&ya(t)&&"length"in t&&(!n&&!t.length||t.length-1 in t&&ya(t[0]))&&!t.nodeType&&t!==ca},iw=function(t,n,a){return a===void 0&&(a=[]),t.forEach(function(o){var l;return wn(o)&&!n||nM(o,1)?(l=a).push.apply(l,Xi(o)):a.push(o)})||a},Xi=function(t,n,a){return tn&&!n&&tn.selector?tn.selector(t):wn(t)&&!a&&(qm||!$o())?Km.call((n||A_).querySelectorAll(t),0):Zn(t)?iw(t,a):nM(t)?Km.call(t,0):t?[t]:[]},Qm=function(t){return t=Xi(t)[0]||Su("Invalid scope")||{},function(n){var a=t.current||t.nativeElement||t;return Xi(n,a.querySelectorAll?a:a===t?Su("Invalid scope")||A_.createElement("div"):t)}},iM=function(t){return t.sort(function(){return .5-Math.random()})},aM=function(t){if(cn(t))return t;var n=ya(t)?t:{each:t},a=Ns(n.ease),o=n.from||0,l=parseFloat(n.base)||0,c={},f=o>0&&o<1,p=isNaN(o)||f,d=n.axis,_=o,g=o;return wn(o)?_=g={center:.5,edges:.5,end:1}[o]||0:!f&&p&&(_=o[0],g=o[1]),function(v,S,T){var M=(T||n).length,y=c[M],x,D,w,C,R,P,U,F,b;if(!y){if(b=n.grid==="auto"?0:(n.grid||[1,ki])[1],!b){for(U=-ki;U<(U=T[b++].getBoundingClientRect().left)&&b<M;);b<M&&b--}for(y=c[M]=[],x=p?Math.min(b,M)*_-.5:o%b,D=b===ki?0:p?M*g/b-.5:o/b|0,U=0,F=ki,P=0;P<M;P++)w=P%b-x,C=D-(P/b|0),y[P]=R=d?Math.abs(d==="y"?C:w):Hy(w*w+C*C),R>U&&(U=R),R<F&&(F=R);o==="random"&&iM(y),y.max=U-F,y.min=F,y.v=M=(parseFloat(n.amount)||parseFloat(n.each)*(b>M?M-1:d?d==="y"?M/b:b:Math.max(b,M/b))||0)*(o==="edges"?-1:1),y.b=M<0?l-M:l,y.u=qn(n.amount||n.each)||0,a=a&&M<0?pM(a):a}return M=(y[v]-y.min)/y.max||0,en(y.b+(a?a(M):M)*y.v)+y.u}},Jm=function(t){var n=Math.pow(10,((t+"").split(".")[1]||"").length);return function(a){var o=en(Math.round(parseFloat(a)/t)*t*n);return(o-o%1)/n+(nr(a)?0:qn(a))}},rM=function(t,n){var a=Zn(t),o,l;return!a&&ya(t)&&(o=a=t.radius||ki,t.values?(t=Xi(t.values),(l=!nr(t[0]))&&(o*=o)):t=Jm(t.increment)),Kr(n,a?cn(t)?function(c){return l=t(c),Math.abs(l-c)<=o?l:c}:function(c){for(var f=parseFloat(l?c.x:c),p=parseFloat(l?c.y:0),d=ki,_=0,g=t.length,v,S;g--;)l?(v=t[g].x-f,S=t[g].y-p,v=v*v+S*S):v=Math.abs(t[g]-f),v<d&&(d=v,_=g);return _=!o||d<=o?t[_]:c,l||_===c||nr(c)?_:_+qn(c)}:Jm(t))},sM=function(t,n,a,o){return Kr(Zn(t)?!n:a===!0?!!(a=0):!o,function(){return Zn(t)?t[~~(Math.random()*t.length)]:(a=a||1e-5)&&(o=a<1?Math.pow(10,(a+"").length-2):1)&&Math.floor(Math.round((t-a/2+Math.random()*(n-t+a*.99))/a)*a*o)/o})},aw=function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];return function(o){return n.reduce(function(l,c){return c(l)},o)}},rw=function(t,n){return function(a){return t(parseFloat(a))+(n||qn(a))}},sw=function(t,n,a){return lM(t,n,0,1,a)},oM=function(t,n,a){return Kr(a,function(o){return t[~~n(o)]})},ow=function r(t,n,a){var o=n-t;return Zn(t)?oM(t,r(0,t.length),n):Kr(a,function(l){return(o+(l-t)%o)%o+t})},lw=function r(t,n,a){var o=n-t,l=o*2;return Zn(t)?oM(t,r(0,t.length-1),n):Kr(a,function(c){return c=(l+(c-t)%l)%l||0,t+(c>o?l-c:c)})},Mu=function(t){return t.replace(V2,function(n){var a=n.indexOf("[")+1,o=n.substring(a||7,a?n.indexOf("]"):n.length-1).split(G2);return sM(a?o:+o[0],a?0:+o[1],+o[2]||1e-5)})},lM=function(t,n,a,o,l){var c=n-t,f=o-a;return Kr(l,function(p){return a+((p-t)/c*f||0)})},uw=function r(t,n,a,o){var l=isNaN(t+n)?0:function(S){return(1-S)*t+S*n};if(!l){var c=wn(t),f={},p,d,_,g,v;if(a===!0&&(o=1)&&(a=null),c)t={p:t},n={p:n};else if(Zn(t)&&!Zn(n)){for(_=[],g=t.length,v=g-2,d=1;d<g;d++)_.push(r(t[d-1],t[d]));g--,l=function(T){T*=g;var M=Math.min(v,~~T);return _[M](T-M)},a=n}else o||(t=Ko(Zn(t)?[]:{},t));if(!_){for(p in n)L_.call(f,t,p,"get",n[p]);l=function(T){return F_(T,f)||(c?t.p:t)}}}return Kr(a,l)},FS=function(t,n,a){var o=t.labels,l=ki,c,f,p;for(c in o)f=o[c]-n,f<0==!!a&&f&&l>(f=Math.abs(f))&&(p=c,l=f);return p},Ei=function(t,n,a){var o=t.vars,l=o[n],c=tn,f=t._ctx,p,d,_;if(l)return p=o[n+"Params"],d=o.callbackScope||t,a&&Xr.length&&wf(),f&&(tn=f),_=p?l.apply(d,p):l.call(d),tn=c,_},lu=function(t){return Yr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Vn),t.progress()<1&&Ei(t,"onInterrupt"),t},zo,uM=[],cM=function(t){if(t)if(t=!t.name&&t.default||t,b_()||t.headless){var n=t.name,a=cn(t),o=n&&!a&&t.init?function(){this._props=[]}:t,l={init:yu,render:F_,add:L_,kill:bw,modifier:Tw,rawVars:0},c={targetTest:0,get:0,getSetter:P_,aliases:{},register:0};if($o(),t!==o){if(yi[n])return;Ci(o,Ci(Df(t,l),c)),Ko(o.prototype,Ko(l,Df(t,c))),yi[o.prop=n]=o,t.targetTest&&(Mf.push(o),C_[n]=1),n=(n==="css"?"CSS":n.charAt(0).toUpperCase()+n.substr(1))+"Plugin"}qy(n,o),t.register&&t.register(fi,o,ui)}else uM.push(t)},qe=255,uu={aqua:[0,qe,qe],lime:[0,qe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,qe],navy:[0,0,128],white:[qe,qe,qe],olive:[128,128,0],yellow:[qe,qe,0],orange:[qe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[qe,0,0],pink:[qe,192,203],cyan:[0,qe,qe],transparent:[qe,qe,qe,0]},Hp=function(t,n,a){return t+=t<0?1:t>1?-1:0,(t*6<1?n+(a-n)*t*6:t<.5?a:t*3<2?n+(a-n)*(2/3-t)*6:n)*qe+.5|0},fM=function(t,n,a){var o=t?nr(t)?[t>>16,t>>8&qe,t&qe]:0:uu.black,l,c,f,p,d,_,g,v,S,T;if(!o){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),uu[t])o=uu[t];else if(t.charAt(0)==="#"){if(t.length<6&&(l=t.charAt(1),c=t.charAt(2),f=t.charAt(3),t="#"+l+l+c+c+f+f+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return o=parseInt(t.substr(1,6),16),[o>>16,o>>8&qe,o&qe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),o=[t>>16,t>>8&qe,t&qe]}else if(t.substr(0,3)==="hsl"){if(o=T=t.match(US),!n)p=+o[0]%360/360,d=+o[1]/100,_=+o[2]/100,c=_<=.5?_*(d+1):_+d-_*d,l=_*2-c,o.length>3&&(o[3]*=1),o[0]=Hp(p+1/3,l,c),o[1]=Hp(p,l,c),o[2]=Hp(p-1/3,l,c);else if(~t.indexOf("="))return o=t.match(Gy),a&&o.length<4&&(o[3]=1),o}else o=t.match(US)||uu.transparent;o=o.map(Number)}return n&&!T&&(l=o[0]/qe,c=o[1]/qe,f=o[2]/qe,g=Math.max(l,c,f),v=Math.min(l,c,f),_=(g+v)/2,g===v?p=d=0:(S=g-v,d=_>.5?S/(2-g-v):S/(g+v),p=g===l?(c-f)/S+(c<f?6:0):g===c?(f-l)/S+2:(l-c)/S+4,p*=60),o[0]=~~(p+.5),o[1]=~~(d*100+.5),o[2]=~~(_*100+.5)),a&&o.length<4&&(o[3]=1),o},hM=function(t){var n=[],a=[],o=-1;return t.split(Wr).forEach(function(l){var c=l.match(Fo)||[];n.push.apply(n,c),a.push(o+=c.length+1)}),n.c=a,n},zS=function(t,n,a){var o="",l=(t+o).match(Wr),c=n?"hsla(":"rgba(",f=0,p,d,_,g;if(!l)return t;if(l=l.map(function(v){return(v=fM(v,n,1))&&c+(n?v[0]+","+v[1]+"%,"+v[2]+"%,"+v[3]:v.join(","))+")"}),a&&(_=hM(t),p=a.c,p.join(o)!==_.c.join(o)))for(d=t.replace(Wr,"1").split(Fo),g=d.length-1;f<g;f++)o+=d[f]+(~p.indexOf(f)?l.shift()||c+"0,0,0,0)":(_.length?_:l.length?l:a).shift());if(!d)for(d=t.split(Wr),g=d.length-1;f<g;f++)o+=d[f]+l[f];return o+d[g]},Wr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in uu)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),cw=/hsl[a]?\(/,dM=function(t){var n=t.join(" "),a;if(Wr.lastIndex=0,Wr.test(n))return a=cw.test(n),t[1]=zS(t[1],a),t[0]=zS(t[0],a,hM(t[1])),!0},Eu,Mi=(function(){var r=Date.now,t=500,n=33,a=r(),o=a,l=1e3/240,c=l,f=[],p,d,_,g,v,S,T=function M(y){var x=r()-o,D=y===!0,w,C,R,P;if((x>t||x<0)&&(a+=x-n),o+=x,R=o-a,w=R-c,(w>0||D)&&(P=++g.frame,v=R-g.time*1e3,g.time=R=R/1e3,c+=w+(w>=l?4:l-w),C=1),D||(p=d(M)),C)for(S=0;S<f.length;S++)f[S](R,v,P,y)};return g={time:0,frame:0,tick:function(){T(!0)},deltaRatio:function(y){return v/(1e3/(y||60))},wake:function(){Xy&&(!qm&&b_()&&(ca=qm=window,A_=ca.document||{},Ri.gsap=fi,(ca.gsapVersions||(ca.gsapVersions=[])).push(fi.version),Wy(Cf||ca.GreenSockGlobals||!ca.gsap&&ca||{}),uM.forEach(cM)),_=typeof requestAnimationFrame<"u"&&requestAnimationFrame,p&&g.sleep(),d=_||function(y){return setTimeout(y,c-g.time*1e3+1|0)},Eu=1,T(2))},sleep:function(){(_?cancelAnimationFrame:clearTimeout)(p),Eu=0,d=yu},lagSmoothing:function(y,x){t=y||1/0,n=Math.min(x||33,t)},fps:function(y){l=1e3/(y||240),c=g.time*1e3+l},add:function(y,x,D){var w=x?function(C,R,P,U){y(C,R,P,U),g.remove(w)}:y;return g.remove(y),f[D?"unshift":"push"](w),$o(),w},remove:function(y,x){~(x=f.indexOf(y))&&f.splice(x,1)&&S>=x&&S--},_listeners:f},g})(),$o=function(){return!Eu&&Mi.wake()},Me={},fw=/^[\d.\-M][\d.\-,\s]/,hw=/["']/g,dw=function(t){for(var n={},a=t.substr(1,t.length-3).split(":"),o=a[0],l=1,c=a.length,f,p,d;l<c;l++)p=a[l],f=l!==c-1?p.lastIndexOf(","):p.length,d=p.substr(0,f),n[o]=isNaN(d)?d.replace(hw,"").trim():+d,o=p.substr(f+1).trim();return n},pw=function(t){var n=t.indexOf("(")+1,a=t.indexOf(")"),o=t.indexOf("(",n);return t.substring(n,~o&&o<a?t.indexOf(")",a+1):a)},mw=function(t){var n=(t+"").split("("),a=Me[n[0]];return a&&n.length>1&&a.config?a.config.apply(null,~t.indexOf("{")?[dw(n[1])]:pw(t).split(",").map(Ky)):Me._CE&&fw.test(t)?Me._CE("",t):a},pM=function(t){return function(n){return 1-t(1-n)}},mM=function r(t,n){for(var a=t._first,o;a;)a instanceof Qn?r(a,n):a.vars.yoyoEase&&(!a._yoyo||!a._repeat)&&a._yoyo!==n&&(a.timeline?r(a.timeline,n):(o=a._ease,a._ease=a._yEase,a._yEase=o,a._yoyo=n)),a=a._next},Ns=function(t,n){return t&&(cn(t)?t:Me[t]||mw(t))||n},zs=function(t,n,a,o){a===void 0&&(a=function(p){return 1-n(1-p)}),o===void 0&&(o=function(p){return p<.5?n(p*2)/2:1-n((1-p)*2)/2});var l={easeIn:n,easeOut:a,easeInOut:o},c;return li(t,function(f){Me[f]=Ri[f]=l,Me[c=f.toLowerCase()]=a;for(var p in l)Me[c+(p==="easeIn"?".in":p==="easeOut"?".out":".inOut")]=Me[f+"."+p]=l[p]}),l},_M=function(t){return function(n){return n<.5?(1-t(1-n*2))/2:.5+t((n-.5)*2)/2}},Vp=function r(t,n,a){var o=n>=1?n:1,l=(a||(t?.3:.45))/(n<1?n:1),c=l/Wm*(Math.asin(1/o)||0),f=function(_){return _===1?1:o*Math.pow(2,-10*_)*H2((_-c)*l)+1},p=t==="out"?f:t==="in"?function(d){return 1-f(1-d)}:_M(f);return l=Wm/l,p.config=function(d,_){return r(t,d,_)},p},Gp=function r(t,n){n===void 0&&(n=1.70158);var a=function(c){return c?--c*c*((n+1)*c+n)+1:0},o=t==="out"?a:t==="in"?function(l){return 1-a(1-l)}:_M(a);return o.config=function(l){return r(t,l)},o};li("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var n=t<5?t+1:t;zs(r+",Power"+(n-1),t?function(a){return Math.pow(a,n)}:function(a){return a},function(a){return 1-Math.pow(1-a,n)},function(a){return a<.5?Math.pow(a*2,n)/2:1-Math.pow((1-a)*2,n)/2})});Me.Linear.easeNone=Me.none=Me.Linear.easeIn;zs("Elastic",Vp("in"),Vp("out"),Vp());(function(r,t){var n=1/t,a=2*n,o=2.5*n,l=function(f){return f<n?r*f*f:f<a?r*Math.pow(f-1.5/t,2)+.75:f<o?r*(f-=2.25/t)*f+.9375:r*Math.pow(f-2.625/t,2)+.984375};zs("Bounce",function(c){return 1-l(1-c)},l)})(7.5625,2.75);zs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});zs("Circ",function(r){return-(Hy(1-r*r)-1)});zs("Sine",function(r){return r===1?1:-B2(r*z2)+1});zs("Back",Gp("in"),Gp("out"),Gp());Me.SteppedEase=Me.steps=Ri.SteppedEase={config:function(t,n){t===void 0&&(t=1);var a=1/t,o=t+(n?0:1),l=n?1:0,c=1-Ye;return function(f){return((o*Lu(0,c,f)|0)+l)*a}}};jo.ease=Me["quad.out"];li("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return w_+=r+","+r+"Params,"});var gM=function(t,n){this.id=I2++,t._gsap=this,this.target=t,this.harness=n,this.get=n?n.get:Zy,this.set=n?n.getSetter:P_},Tu=(function(){function r(n){this.vars=n,this._delay=+n.delay||0,(this._repeat=n.repeat===1/0?-2:n.repeat||0)&&(this._rDelay=n.repeatDelay||0,this._yoyo=!!n.yoyo||!!n.yoyoEase),this._ts=1,Jo(this,+n.duration,1,1),this.data=n.data,tn&&(this._ctx=tn,tn.data.push(this)),Eu||Mi.wake()}var t=r.prototype;return t.delay=function(a){return a||a===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+a-this._delay),this._delay=a,this):this._delay},t.duration=function(a){return arguments.length?this.totalDuration(this._repeat>0?a+(a+this._rDelay)*this._repeat:a):this.totalDuration()&&this._dur},t.totalDuration=function(a){return arguments.length?(this._dirty=0,Jo(this,this._repeat<0?a:(a-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(a,o){if($o(),!arguments.length)return this._tTime;var l=this._dp;if(l&&l.smoothChildTiming&&this._ts){for(Yf(this,a),!l._dp||l.parent||$y(l,this);l&&l.parent;)l.parent._time!==l._start+(l._ts>=0?l._tTime/l._ts:(l.totalDuration()-l._tTime)/-l._ts)&&l.totalTime(l._tTime,!0),l=l.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&a<this._tDur||this._ts<0&&a>0||!this._tDur&&!a)&&ha(this._dp,this,this._start-this._delay)}return(this._tTime!==a||!this._dur&&!o||this._initted&&Math.abs(this._zTime)===Ye||!this._initted&&this._dur&&a||!a&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=a),jy(this,a,o)),this},t.time=function(a,o){return arguments.length?this.totalTime(Math.min(this.totalDuration(),a+OS(this))%(this._dur+this._rDelay)||(a?this._dur:0),o):this._time},t.totalProgress=function(a,o){return arguments.length?this.totalTime(this.totalDuration()*a,o):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(a,o){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-a:a)+OS(this),o):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(a,o){var l=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(a-1)*l,o):this._repeat?Qo(this._tTime,l)+1:1},t.timeScale=function(a,o){if(!arguments.length)return this._rts===-Ye?0:this._rts;if(this._rts===a)return this;var l=this.parent&&this._ts?Uf(this.parent._time,this):this._tTime;return this._rts=+a||0,this._ts=this._ps||a===-Ye?0:this._rts,this.totalTime(Lu(-Math.abs(this._delay),this.totalDuration(),l),o!==!1),qf(this),K2(this)},t.paused=function(a){return arguments.length?(this._ps!==a&&(this._ps=a,a?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):($o(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ye&&(this._tTime-=Ye)))),this):this._ps},t.startTime=function(a){if(arguments.length){this._start=en(a);var o=this.parent||this._dp;return o&&(o._sort||!this.parent)&&ha(o,this,this._start-this._delay),this}return this._start},t.endTime=function(a){return this._start+(oi(a)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(a){var o=this.parent||this._dp;return o?a&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Uf(o.rawTime(a),this):this._tTime:this._tTime},t.revert=function(a){a===void 0&&(a=q2);var o=Vn;return Vn=a,U_(this)&&(this.timeline&&this.timeline.revert(a),this.totalTime(-.01,a.suppressEvents)),this.data!=="nested"&&a.kill!==!1&&this.kill(),Vn=o,this},t.globalTime=function(a){for(var o=this,l=arguments.length?a:o.rawTime();o;)l=o._start+l/(Math.abs(o._ts)||1),o=o._dp;return!this.parent&&this._sat?this._sat.globalTime(a):l},t.repeat=function(a){return arguments.length?(this._repeat=a===1/0?-2:a,PS(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(a){if(arguments.length){var o=this._time;return this._rDelay=a,PS(this),o?this.time(o):this}return this._rDelay},t.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},t.seek=function(a,o){return this.totalTime(Hi(this,a),oi(o))},t.restart=function(a,o){return this.play().totalTime(a?-this._delay:0,oi(o)),this._dur||(this._zTime=-Ye),this},t.play=function(a,o){return a!=null&&this.seek(a,o),this.reversed(!1).paused(!1)},t.reverse=function(a,o){return a!=null&&this.seek(a||this.totalDuration(),o),this.reversed(!0).paused(!1)},t.pause=function(a,o){return a!=null&&this.seek(a,o),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(a){return arguments.length?(!!a!==this.reversed()&&this.timeScale(-this._rts||(a?-Ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ye,this},t.isActive=function(){var a=this.parent||this._dp,o=this._start,l;return!!(!a||this._ts&&this._initted&&a.isActive()&&(l=a.rawTime(!0))>=o&&l<this.endTime(!0)-Ye)},t.eventCallback=function(a,o,l){var c=this.vars;return arguments.length>1?(o?(c[a]=o,l&&(c[a+"Params"]=l),a==="onUpdate"&&(this._onUpdate=o)):delete c[a],this):c[a]},t.then=function(a){var o=this,l=o._prom;return new Promise(function(c){var f=cn(a)?a:Qy,p=function(){var _=o.then;o.then=null,l&&l(),cn(f)&&(f=f(o))&&(f.then||f===o)&&(o.then=_),c(f),o.then=_};o._initted&&o.totalProgress()===1&&o._ts>=0||!o._tTime&&o._ts<0?p():o._prom=p})},t.kill=function(){lu(this)},r})();Ci(Tu.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ye,_prom:0,_ps:!1,_rts:1});var Qn=(function(r){By(t,r);function t(a,o){var l;return a===void 0&&(a={}),l=r.call(this,a)||this,l.labels={},l.smoothChildTiming=!!a.smoothChildTiming,l.autoRemoveChildren=!!a.autoRemoveChildren,l._sort=oi(a.sortChildren),nn&&ha(a.parent||nn,Wa(l),o),a.reversed&&l.reverse(),a.paused&&l.paused(!0),a.scrollTrigger&&tM(Wa(l),a.scrollTrigger),l}var n=t.prototype;return n.to=function(o,l,c){return fu(0,arguments,this),this},n.from=function(o,l,c){return fu(1,arguments,this),this},n.fromTo=function(o,l,c,f){return fu(2,arguments,this),this},n.set=function(o,l,c){return l.duration=0,l.parent=this,cu(l).repeatDelay||(l.repeat=0),l.immediateRender=!!l.immediateRender,new yn(o,l,Hi(this,c),1),this},n.call=function(o,l,c){return ha(this,yn.delayedCall(0,o,l),c)},n.staggerTo=function(o,l,c,f,p,d,_){return c.duration=l,c.stagger=c.stagger||f,c.onComplete=d,c.onCompleteParams=_,c.parent=this,new yn(o,c,Hi(this,p)),this},n.staggerFrom=function(o,l,c,f,p,d,_){return c.runBackwards=1,cu(c).immediateRender=oi(c.immediateRender),this.staggerTo(o,l,c,f,p,d,_)},n.staggerFromTo=function(o,l,c,f,p,d,_,g){return f.startAt=c,cu(f).immediateRender=oi(f.immediateRender),this.staggerTo(o,l,f,p,d,_,g)},n.render=function(o,l,c){var f=this._time,p=this._dirty?this.totalDuration():this._tDur,d=this._dur,_=o<=0?0:en(o),g=this._zTime<0!=o<0&&(this._initted||!d),v,S,T,M,y,x,D,w,C,R,P,U;if(this!==nn&&_>p&&o>=0&&(_=p),_!==this._tTime||c||g){if(f!==this._time&&d&&(_+=this._time-f,o+=this._time-f),v=_,C=this._start,w=this._ts,x=!w,g&&(d||(f=this._zTime),(o||!l)&&(this._zTime=o)),this._repeat){if(P=this._yoyo,y=d+this._rDelay,this._repeat<-1&&o<0)return this.totalTime(y*100+o,l,c);if(v=en(_%y),_===p?(M=this._repeat,v=d):(R=en(_/y),M=~~R,M&&M===R&&(v=d,M--),v>d&&(v=d)),R=Qo(this._tTime,y),!f&&this._tTime&&R!==M&&this._tTime-R*y-this._dur<=0&&(R=M),P&&M&1&&(v=d-v,U=1),M!==R&&!this._lock){var F=P&&R&1,b=F===(P&&M&1);if(M<R&&(F=!F),f=F?0:_%d?d:_,this._lock=1,this.render(f||(U?0:en(M*y)),l,!d)._lock=0,this._tTime=_,!l&&this.parent&&Ei(this,"onRepeat"),this.vars.repeatRefresh&&!U&&(this.invalidate()._lock=1,R=M),f&&f!==this._time||x!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(d=this._dur,p=this._tDur,b&&(this._lock=2,f=F?d:-1e-4,this.render(f,!0),this.vars.repeatRefresh&&!U&&this.invalidate()),this._lock=0,!this._ts&&!x)return this;mM(this,U)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(D=tw(this,en(f),en(v)),D&&(_-=v-(v=D._start))),this._tTime=_,this._time=v,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=o,f=0),!f&&_&&d&&!l&&!R&&(Ei(this,"onStart"),this._tTime!==_))return this;if(v>=f&&o>=0)for(S=this._first;S;){if(T=S._next,(S._act||v>=S._start)&&S._ts&&D!==S){if(S.parent!==this)return this.render(o,l,c);if(S.render(S._ts>0?(v-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(v-S._start)*S._ts,l,c),v!==this._time||!this._ts&&!x){D=0,T&&(_+=this._zTime=-Ye);break}}S=T}else{S=this._last;for(var L=o<0?o:v;S;){if(T=S._prev,(S._act||L<=S._end)&&S._ts&&D!==S){if(S.parent!==this)return this.render(o,l,c);if(S.render(S._ts>0?(L-S._start)*S._ts:(S._dirty?S.totalDuration():S._tDur)+(L-S._start)*S._ts,l,c||Vn&&U_(S)),v!==this._time||!this._ts&&!x){D=0,T&&(_+=this._zTime=L?-Ye:Ye);break}}S=T}}if(D&&!l&&(this.pause(),D.render(v>=f?0:-Ye)._zTime=v>=f?1:-1,this._ts))return this._start=C,qf(this),this.render(o,l,c);this._onUpdate&&!l&&Ei(this,"onUpdate",!0),(_===p&&this._tTime>=this.totalDuration()||!_&&f)&&(C===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((o||!d)&&(_===p&&this._ts>0||!_&&this._ts<0)&&Yr(this,1),!l&&!(o<0&&!f)&&(_||f||!p)&&(Ei(this,_===p&&o>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(_<p&&this.timeScale()>0)&&this._prom())))}return this},n.add=function(o,l){var c=this;if(nr(l)||(l=Hi(this,l,o)),!(o instanceof Tu)){if(Zn(o))return o.forEach(function(f){return c.add(f,l)}),this;if(wn(o))return this.addLabel(o,l);if(cn(o))o=yn.delayedCall(0,o);else return this}return this!==o?ha(this,o,l):this},n.getChildren=function(o,l,c,f){o===void 0&&(o=!0),l===void 0&&(l=!0),c===void 0&&(c=!0),f===void 0&&(f=-ki);for(var p=[],d=this._first;d;)d._start>=f&&(d instanceof yn?l&&p.push(d):(c&&p.push(d),o&&p.push.apply(p,d.getChildren(!0,l,c)))),d=d._next;return p},n.getById=function(o){for(var l=this.getChildren(1,1,1),c=l.length;c--;)if(l[c].vars.id===o)return l[c]},n.remove=function(o){return wn(o)?this.removeLabel(o):cn(o)?this.killTweensOf(o):(o.parent===this&&Wf(this,o),o===this._recent&&(this._recent=this._last),Ls(this))},n.totalTime=function(o,l){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=en(Mi.time-(this._ts>0?o/this._ts:(this.totalDuration()-o)/-this._ts))),r.prototype.totalTime.call(this,o,l),this._forcing=0,this):this._tTime},n.addLabel=function(o,l){return this.labels[o]=Hi(this,l),this},n.removeLabel=function(o){return delete this.labels[o],this},n.addPause=function(o,l,c){var f=yn.delayedCall(0,l||yu,c);return f.data="isPause",this._hasPause=1,ha(this,f,Hi(this,o))},n.removePause=function(o){var l=this._first;for(o=Hi(this,o);l;)l._start===o&&l.data==="isPause"&&Yr(l),l=l._next},n.killTweensOf=function(o,l,c){for(var f=this.getTweensOf(o,c),p=f.length;p--;)Hr!==f[p]&&f[p].kill(o,l);return this},n.getTweensOf=function(o,l){for(var c=[],f=Xi(o),p=this._first,d=nr(l),_;p;)p instanceof yn?Y2(p._targets,f)&&(d?(!Hr||p._initted&&p._ts)&&p.globalTime(0)<=l&&p.globalTime(p.totalDuration())>l:!l||p.isActive())&&c.push(p):(_=p.getTweensOf(f,l)).length&&c.push.apply(c,_),p=p._next;return c},n.tweenTo=function(o,l){l=l||{};var c=this,f=Hi(c,o),p=l,d=p.startAt,_=p.onStart,g=p.onStartParams,v=p.immediateRender,S,T=yn.to(c,Ci({ease:l.ease||"none",lazy:!1,immediateRender:!1,time:f,overwrite:"auto",duration:l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale())||Ye,onStart:function(){if(c.pause(),!S){var y=l.duration||Math.abs((f-(d&&"time"in d?d.time:c._time))/c.timeScale());T._dur!==y&&Jo(T,y,0,1).render(T._time,!0,!0),S=1}_&&_.apply(T,g||[])}},l));return v?T.render(0):T},n.tweenFromTo=function(o,l,c){return this.tweenTo(l,Ci({startAt:{time:Hi(this,o)}},c))},n.recent=function(){return this._recent},n.nextLabel=function(o){return o===void 0&&(o=this._time),FS(this,Hi(this,o))},n.previousLabel=function(o){return o===void 0&&(o=this._time),FS(this,Hi(this,o),1)},n.currentLabel=function(o){return arguments.length?this.seek(o,!0):this.previousLabel(this._time+Ye)},n.shiftChildren=function(o,l,c){c===void 0&&(c=0);var f=this._first,p=this.labels,d;for(o=en(o);f;)f._start>=c&&(f._start+=o,f._end+=o),f=f._next;if(l)for(d in p)p[d]>=c&&(p[d]+=o);return Ls(this)},n.invalidate=function(o){var l=this._first;for(this._lock=0;l;)l.invalidate(o),l=l._next;return r.prototype.invalidate.call(this,o)},n.clear=function(o){o===void 0&&(o=!0);for(var l=this._first,c;l;)c=l._next,this.remove(l),l=c;return this._dp&&(this._time=this._tTime=this._pTime=0),o&&(this.labels={}),Ls(this)},n.totalDuration=function(o){var l=0,c=this,f=c._last,p=ki,d,_,g;if(arguments.length)return c.timeScale((c._repeat<0?c.duration():c.totalDuration())/(c.reversed()?-o:o));if(c._dirty){for(g=c.parent;f;)d=f._prev,f._dirty&&f.totalDuration(),_=f._start,_>p&&c._sort&&f._ts&&!c._lock?(c._lock=1,ha(c,f,_-f._delay,1)._lock=0):p=_,_<0&&f._ts&&(l-=_,(!g&&!c._dp||g&&g.smoothChildTiming)&&(c._start+=en(_/c._ts),c._time-=_,c._tTime-=_),c.shiftChildren(-_,!1,-1/0),p=0),f._end>l&&f._ts&&(l=f._end),f=d;Jo(c,c===nn&&c._time>l?c._time:l,1,1),c._dirty=0}return c._tDur},t.updateRoot=function(o){if(nn._ts&&(jy(nn,Uf(o,nn)),Yy=Mi.frame),Mi.frame>=LS){LS+=Ai.autoSleep||120;var l=nn._first;if((!l||!l._ts)&&Ai.autoSleep&&Mi._listeners.length<2){for(;l&&!l._ts;)l=l._next;l||Mi.sleep()}}},t})(Tu);Ci(Qn.prototype,{_lock:0,_hasPause:0,_forcing:0});var _w=function(t,n,a,o,l,c,f){var p=new ui(this._pt,t,n,0,1,EM,null,l),d=0,_=0,g,v,S,T,M,y,x,D;for(p.b=a,p.e=o,a+="",o+="",(x=~o.indexOf("random("))&&(o=Mu(o)),c&&(D=[a,o],c(D,t,n),a=D[0],o=D[1]),v=a.match(Ip)||[];g=Ip.exec(o);)T=g[0],M=o.substring(d,g.index),S?S=(S+1)%5:M.substr(-5)==="rgba("&&(S=1),T!==v[_++]&&(y=parseFloat(v[_-1])||0,p._pt={_next:p._pt,p:M||_===1?M:",",s:y,c:T.charAt(1)==="="?Vo(y,T)-y:parseFloat(T)-y,m:S&&S<4?Math.round:0},d=Ip.lastIndex);return p.c=d<o.length?o.substring(d,o.length):"",p.fp=f,(ky.test(o)||x)&&(p.e=0),this._pt=p,p},L_=function(t,n,a,o,l,c,f,p,d,_){cn(o)&&(o=o(l||0,t,c));var g=t[n],v=a!=="get"?a:cn(g)?d?t[n.indexOf("set")||!cn(t["get"+n.substr(3)])?n:"get"+n.substr(3)](d):t[n]():g,S=cn(g)?d?yw:yM:O_,T;if(wn(o)&&(~o.indexOf("random(")&&(o=Mu(o)),o.charAt(1)==="="&&(T=Vo(v,o)+(qn(v)||0),(T||T===0)&&(o=T))),!_||v!==o||$m)return!isNaN(v*o)&&o!==""?(T=new ui(this._pt,t,n,+v||0,o-(v||0),typeof g=="boolean"?Ew:MM,0,S),d&&(T.fp=d),f&&T.modifier(f,this,t),this._pt=T):(!g&&!(n in t)&&R_(n,o),_w.call(this,t,n,v,o,S,p||Ai.stringFilter,d))},gw=function(t,n,a,o,l){if(cn(t)&&(t=hu(t,l,n,a,o)),!ya(t)||t.style&&t.nodeType||Zn(t)||Vy(t))return wn(t)?hu(t,l,n,a,o):t;var c={},f;for(f in t)c[f]=hu(t[f],l,n,a,o);return c},vM=function(t,n,a,o,l,c){var f,p,d,_;if(yi[t]&&(f=new yi[t]).init(l,f.rawVars?n[t]:gw(n[t],o,l,c,a),a,o,c)!==!1&&(a._pt=p=new ui(a._pt,l,t,0,1,f.render,f,0,f.priority),a!==zo))for(d=a._ptLookup[a._targets.indexOf(l)],_=f._props.length;_--;)d[f._props[_]]=p;return f},Hr,$m,N_=function r(t,n,a){var o=t.vars,l=o.ease,c=o.startAt,f=o.immediateRender,p=o.lazy,d=o.onUpdate,_=o.runBackwards,g=o.yoyoEase,v=o.keyframes,S=o.autoRevert,T=t._dur,M=t._startAt,y=t._targets,x=t.parent,D=x&&x.data==="nested"?x.vars.targets:y,w=t._overwrite==="auto"&&!E_,C=t.timeline,R,P,U,F,b,L,V,Y,Z,st,it,I,H;if(C&&(!v||!l)&&(l="none"),t._ease=Ns(l,jo.ease),t._yEase=g?pM(Ns(g===!0?l:g,jo.ease)):0,g&&t._yoyo&&!t._repeat&&(g=t._yEase,t._yEase=t._ease,t._ease=g),t._from=!C&&!!o.runBackwards,!C||v&&!o.stagger){if(Y=y[0]?Us(y[0]).harness:0,I=Y&&o[Y.prop],R=Df(o,C_),M&&(M._zTime<0&&M.progress(1),n<0&&_&&f&&!S?M.render(-1,!0):M.revert(_&&T?yf:W2),M._lazy=0),c){if(Yr(t._startAt=yn.set(y,Ci({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!M&&oi(p),startAt:null,delay:0,onUpdate:d&&function(){return Ei(t,"onUpdate")},stagger:0},c))),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Vn||!f&&!S)&&t._startAt.revert(yf),f&&T&&n<=0&&a<=0){n&&(t._zTime=n);return}}else if(_&&T&&!M){if(n&&(f=!1),U=Ci({overwrite:!1,data:"isFromStart",lazy:f&&!M&&oi(p),immediateRender:f,stagger:0,parent:x},R),I&&(U[Y.prop]=I),Yr(t._startAt=yn.set(y,U)),t._startAt._dp=0,t._startAt._sat=t,n<0&&(Vn?t._startAt.revert(yf):t._startAt.render(-1,!0)),t._zTime=n,!f)r(t._startAt,Ye,Ye);else if(!n)return}for(t._pt=t._ptCache=0,p=T&&oi(p)||p&&!T,P=0;P<y.length;P++){if(b=y[P],V=b._gsap||D_(y)[P]._gsap,t._ptLookup[P]=st={},Ym[V.id]&&Xr.length&&wf(),it=D===y?P:D.indexOf(b),Y&&(Z=new Y).init(b,I||R,t,it,D)!==!1&&(t._pt=F=new ui(t._pt,b,Z.name,0,1,Z.render,Z,0,Z.priority),Z._props.forEach(function(Q){st[Q]=F}),Z.priority&&(L=1)),!Y||I)for(U in R)yi[U]&&(Z=vM(U,R,t,it,b,D))?Z.priority&&(L=1):st[U]=F=L_.call(t,b,U,"get",R[U],it,D,0,o.stringFilter);t._op&&t._op[P]&&t.kill(b,t._op[P]),w&&t._pt&&(Hr=t,nn.killTweensOf(b,st,t.globalTime(n)),H=!t.parent,Hr=0),t._pt&&p&&(Ym[V.id]=1)}L&&TM(t),t._onInit&&t._onInit(t)}t._onUpdate=d,t._initted=(!t._op||t._pt)&&!H,v&&n<=0&&C.render(ki,!0,!0)},vw=function(t,n,a,o,l,c,f,p){var d=(t._pt&&t._ptCache||(t._ptCache={}))[n],_,g,v,S;if(!d)for(d=t._ptCache[n]=[],v=t._ptLookup,S=t._targets.length;S--;){if(_=v[S][n],_&&_.d&&_.d._pt)for(_=_.d._pt;_&&_.p!==n&&_.fp!==n;)_=_._next;if(!_)return $m=1,t.vars[n]="+=0",N_(t,f),$m=0,p?Su(n+" not eligible for reset"):1;d.push(_)}for(S=d.length;S--;)g=d[S],_=g._pt||g,_.s=(o||o===0)&&!l?o:_.s+(o||0)+c*_.c,_.c=a-_.s,g.e&&(g.e=dn(a)+qn(g.e)),g.b&&(g.b=_.s+qn(g.b))},xw=function(t,n){var a=t[0]?Us(t[0]).harness:0,o=a&&a.aliases,l,c,f,p;if(!o)return n;l=Ko({},n);for(c in o)if(c in l)for(p=o[c].split(","),f=p.length;f--;)l[p[f]]=l[c];return l},Sw=function(t,n,a,o){var l=n.ease||o||"power1.inOut",c,f;if(Zn(n))f=a[t]||(a[t]=[]),n.forEach(function(p,d){return f.push({t:d/(n.length-1)*100,v:p,e:l})});else for(c in n)f=a[c]||(a[c]=[]),c==="ease"||f.push({t:parseFloat(t),v:n[c],e:l})},hu=function(t,n,a,o,l){return cn(t)?t.call(n,a,o,l):wn(t)&&~t.indexOf("random(")?Mu(t):t},xM=w_+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",SM={};li(xM+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return SM[r]=1});var yn=(function(r){By(t,r);function t(a,o,l,c){var f;typeof o=="number"&&(l.duration=o,o=l,l=null),f=r.call(this,c?o:cu(o))||this;var p=f.vars,d=p.duration,_=p.delay,g=p.immediateRender,v=p.stagger,S=p.overwrite,T=p.keyframes,M=p.defaults,y=p.scrollTrigger,x=p.yoyoEase,D=o.parent||nn,w=(Zn(a)||Vy(a)?nr(a[0]):"length"in o)?[a]:Xi(a),C,R,P,U,F,b,L,V;if(f._targets=w.length?D_(w):Su("GSAP target "+a+" not found. https://gsap.com",!Ai.nullTargetWarn)||[],f._ptLookup=[],f._overwrite=S,T||v||df(d)||df(_)){if(o=f.vars,C=f.timeline=new Qn({data:"nested",defaults:M||{},targets:D&&D.data==="nested"?D.vars.targets:w}),C.kill(),C.parent=C._dp=Wa(f),C._start=0,v||df(d)||df(_)){if(U=w.length,L=v&&aM(v),ya(v))for(F in v)~xM.indexOf(F)&&(V||(V={}),V[F]=v[F]);for(R=0;R<U;R++)P=Df(o,SM),P.stagger=0,x&&(P.yoyoEase=x),V&&Ko(P,V),b=w[R],P.duration=+hu(d,Wa(f),R,b,w),P.delay=(+hu(_,Wa(f),R,b,w)||0)-f._delay,!v&&U===1&&P.delay&&(f._delay=_=P.delay,f._start+=_,P.delay=0),C.to(b,P,L?L(R,b,w):0),C._ease=Me.none;C.duration()?d=_=0:f.timeline=0}else if(T){cu(Ci(C.vars.defaults,{ease:"none"})),C._ease=Ns(T.ease||o.ease||"none");var Y=0,Z,st,it;if(Zn(T))T.forEach(function(I){return C.to(w,I,">")}),C.duration();else{P={};for(F in T)F==="ease"||F==="easeEach"||Sw(F,T[F],P,T.easeEach);for(F in P)for(Z=P[F].sort(function(I,H){return I.t-H.t}),Y=0,R=0;R<Z.length;R++)st=Z[R],it={ease:st.e,duration:(st.t-(R?Z[R-1].t:0))/100*d},it[F]=st.v,C.to(w,it,Y),Y+=it.duration;C.duration()<d&&C.to({},{duration:d-C.duration()})}}d||f.duration(d=C.duration())}else f.timeline=0;return S===!0&&!E_&&(Hr=Wa(f),nn.killTweensOf(w),Hr=0),ha(D,Wa(f),l),o.reversed&&f.reverse(),o.paused&&f.paused(!0),(g||!d&&!T&&f._start===en(D._time)&&oi(g)&&Q2(Wa(f))&&D.data!=="nested")&&(f._tTime=-Ye,f.render(Math.max(0,-_)||0)),y&&tM(Wa(f),y),f}var n=t.prototype;return n.render=function(o,l,c){var f=this._time,p=this._tDur,d=this._dur,_=o<0,g=o>p-Ye&&!_?p:o<Ye?0:o,v,S,T,M,y,x,D,w,C;if(!d)$2(this,o,l,c);else if(g!==this._tTime||!o||c||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==_||this._lazy){if(v=g,w=this.timeline,this._repeat){if(M=d+this._rDelay,this._repeat<-1&&_)return this.totalTime(M*100+o,l,c);if(v=en(g%M),g===p?(T=this._repeat,v=d):(y=en(g/M),T=~~y,T&&T===y?(v=d,T--):v>d&&(v=d)),x=this._yoyo&&T&1,x&&(C=this._yEase,v=d-v),y=Qo(this._tTime,M),v===f&&!c&&this._initted&&T===y)return this._tTime=g,this;T!==y&&(w&&this._yEase&&mM(w,x),this.vars.repeatRefresh&&!x&&!this._lock&&v!==M&&this._initted&&(this._lock=c=1,this.render(en(M*T),!0).invalidate()._lock=0))}if(!this._initted){if(eM(this,_?o:v,c,l,g))return this._tTime=0,this;if(f!==this._time&&!(c&&this.vars.repeatRefresh&&T!==y))return this;if(d!==this._dur)return this.render(o,l,c)}if(this._tTime=g,this._time=v,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=D=(C||this._ease)(v/d),this._from&&(this.ratio=D=1-D),!f&&g&&!l&&!y&&(Ei(this,"onStart"),this._tTime!==g))return this;for(S=this._pt;S;)S.r(D,S.d),S=S._next;w&&w.render(o<0?o:w._dur*w._ease(v/this._dur),l,c)||this._startAt&&(this._zTime=o),this._onUpdate&&!l&&(_&&Zm(this,o,l,c),Ei(this,"onUpdate")),this._repeat&&T!==y&&this.vars.onRepeat&&!l&&this.parent&&Ei(this,"onRepeat"),(g===this._tDur||!g)&&this._tTime===g&&(_&&!this._onUpdate&&Zm(this,o,!0,!0),(o||!d)&&(g===this._tDur&&this._ts>0||!g&&this._ts<0)&&Yr(this,1),!l&&!(_&&!f)&&(g||f||x)&&(Ei(this,g===p?"onComplete":"onReverseComplete",!0),this._prom&&!(g<p&&this.timeScale()>0)&&this._prom()))}return this},n.targets=function(){return this._targets},n.invalidate=function(o){return(!o||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(o),r.prototype.invalidate.call(this,o)},n.resetTo=function(o,l,c,f,p){Eu||Mi.wake(),this._ts||this.play();var d=Math.min(this._dur,(this._dp._time-this._start)*this._ts),_;return this._initted||N_(this,d),_=this._ease(d/this._dur),vw(this,o,l,c,f,_,d,p)?this.resetTo(o,l,c,f,1):(Yf(this,0),this.parent||Jy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},n.kill=function(o,l){if(l===void 0&&(l="all"),!o&&(!l||l==="all"))return this._lazy=this._pt=0,this.parent?lu(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Vn),this;if(this.timeline){var c=this.timeline.totalDuration();return this.timeline.killTweensOf(o,l,Hr&&Hr.vars.overwrite!==!0)._first||lu(this),this.parent&&c!==this.timeline.totalDuration()&&Jo(this,this._dur*this.timeline._tDur/c,0,1),this}var f=this._targets,p=o?Xi(o):f,d=this._ptLookup,_=this._pt,g,v,S,T,M,y,x;if((!l||l==="all")&&j2(f,p))return l==="all"&&(this._pt=0),lu(this);for(g=this._op=this._op||[],l!=="all"&&(wn(l)&&(M={},li(l,function(D){return M[D]=1}),l=M),l=xw(f,l)),x=f.length;x--;)if(~p.indexOf(f[x])){v=d[x],l==="all"?(g[x]=l,T=v,S={}):(S=g[x]=g[x]||{},T=l);for(M in T)y=v&&v[M],y&&((!("kill"in y.d)||y.d.kill(M)===!0)&&Wf(this,y,"_pt"),delete v[M]),S!=="all"&&(S[M]=1)}return this._initted&&!this._pt&&_&&lu(this),this},t.to=function(o,l){return new t(o,l,arguments[2])},t.from=function(o,l){return fu(1,arguments)},t.delayedCall=function(o,l,c,f){return new t(l,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:o,onComplete:l,onReverseComplete:l,onCompleteParams:c,onReverseCompleteParams:c,callbackScope:f})},t.fromTo=function(o,l,c){return fu(2,arguments)},t.set=function(o,l){return l.duration=0,l.repeatDelay||(l.repeat=0),new t(o,l)},t.killTweensOf=function(o,l,c){return nn.killTweensOf(o,l,c)},t})(Tu);Ci(yn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});li("staggerTo,staggerFrom,staggerFromTo",function(r){yn[r]=function(){var t=new Qn,n=Km.call(arguments,0);return n.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,n)}});var O_=function(t,n,a){return t[n]=a},yM=function(t,n,a){return t[n](a)},yw=function(t,n,a,o){return t[n](o.fp,a)},Mw=function(t,n,a){return t.setAttribute(n,a)},P_=function(t,n){return cn(t[n])?yM:T_(t[n])&&t.setAttribute?Mw:O_},MM=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e6)/1e6,n)},Ew=function(t,n){return n.set(n.t,n.p,!!(n.s+n.c*t),n)},EM=function(t,n){var a=n._pt,o="";if(!t&&n.b)o=n.b;else if(t===1&&n.e)o=n.e;else{for(;a;)o=a.p+(a.m?a.m(a.s+a.c*t):Math.round((a.s+a.c*t)*1e4)/1e4)+o,a=a._next;o+=n.c}n.set(n.t,n.p,o,n)},F_=function(t,n){for(var a=n._pt;a;)a.r(t,a.d),a=a._next},Tw=function(t,n,a,o){for(var l=this._pt,c;l;)c=l._next,l.p===o&&l.modifier(t,n,a),l=c},bw=function(t){for(var n=this._pt,a,o;n;)o=n._next,n.p===t&&!n.op||n.op===t?Wf(this,n,"_pt"):n.dep||(a=1),n=o;return!a},Aw=function(t,n,a,o){o.mSet(t,n,o.m.call(o.tween,a,o.mt),o)},TM=function(t){for(var n=t._pt,a,o,l,c;n;){for(a=n._next,o=l;o&&o.pr>n.pr;)o=o._next;(n._prev=o?o._prev:c)?n._prev._next=n:l=n,(n._next=o)?o._prev=n:c=n,n=a}t._pt=l},ui=(function(){function r(n,a,o,l,c,f,p,d,_){this.t=a,this.s=l,this.c=c,this.p=o,this.r=f||MM,this.d=p||this,this.set=d||O_,this.pr=_||0,this._next=n,n&&(n._prev=this)}var t=r.prototype;return t.modifier=function(a,o,l){this.mSet=this.mSet||this.set,this.set=Aw,this.m=a,this.mt=l,this.tween=o},r})();li(w_+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return C_[r]=1});Ri.TweenMax=Ri.TweenLite=yn;Ri.TimelineLite=Ri.TimelineMax=Qn;nn=new Qn({sortChildren:!1,defaults:jo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ai.stringFilter=dM;var Os=[],Ef={},Rw=[],IS=0,Cw=0,kp=function(t){return(Ef[t]||Rw).map(function(n){return n()})},t_=function(){var t=Date.now(),n=[];t-IS>2&&(kp("matchMediaInit"),Os.forEach(function(a){var o=a.queries,l=a.conditions,c,f,p,d;for(f in o)c=ca.matchMedia(o[f]).matches,c&&(p=1),c!==l[f]&&(l[f]=c,d=1);d&&(a.revert(),p&&n.push(a))}),kp("matchMediaRevert"),n.forEach(function(a){return a.onMatch(a,function(o){return a.add(null,o)})}),IS=t,kp("matchMedia"))},bM=(function(){function r(n,a){this.selector=a&&Qm(a),this.data=[],this._r=[],this.isReverted=!1,this.id=Cw++,n&&this.add(n)}var t=r.prototype;return t.add=function(a,o,l){cn(a)&&(l=o,o=a,a=cn);var c=this,f=function(){var d=tn,_=c.selector,g;return d&&d!==c&&d.data.push(c),l&&(c.selector=Qm(l)),tn=c,g=o.apply(c,arguments),cn(g)&&c._r.push(g),tn=d,c.selector=_,c.isReverted=!1,g};return c.last=f,a===cn?f(c,function(p){return c.add(null,p)}):a?c[a]=f:f},t.ignore=function(a){var o=tn;tn=null,a(this),tn=o},t.getTweens=function(){var a=[];return this.data.forEach(function(o){return o instanceof r?a.push.apply(a,o.getTweens()):o instanceof yn&&!(o.parent&&o.parent.data==="nested")&&a.push(o)}),a},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(a,o){var l=this;if(a?(function(){for(var f=l.getTweens(),p=l.data.length,d;p--;)d=l.data[p],d.data==="isFlip"&&(d.revert(),d.getChildren(!0,!0,!1).forEach(function(_){return f.splice(f.indexOf(_),1)}));for(f.map(function(_){return{g:_._dur||_._delay||_._sat&&!_._sat.vars.immediateRender?_.globalTime(0):-1/0,t:_}}).sort(function(_,g){return g.g-_.g||-1/0}).forEach(function(_){return _.t.revert(a)}),p=l.data.length;p--;)d=l.data[p],d instanceof Qn?d.data!=="nested"&&(d.scrollTrigger&&d.scrollTrigger.revert(),d.kill()):!(d instanceof yn)&&d.revert&&d.revert(a);l._r.forEach(function(_){return _(a,l)}),l.isReverted=!0})():this.data.forEach(function(f){return f.kill&&f.kill()}),this.clear(),o)for(var c=Os.length;c--;)Os[c].id===this.id&&Os.splice(c,1)},t.revert=function(a){this.kill(a||{})},r})(),ww=(function(){function r(n){this.contexts=[],this.scope=n,tn&&tn.data.push(this)}var t=r.prototype;return t.add=function(a,o,l){ya(a)||(a={matches:a});var c=new bM(0,l||this.scope),f=c.conditions={},p,d,_;tn&&!c.selector&&(c.selector=tn.selector),this.contexts.push(c),o=c.add("onMatch",o),c.queries=a;for(d in a)d==="all"?_=1:(p=ca.matchMedia(a[d]),p&&(Os.indexOf(c)<0&&Os.push(c),(f[d]=p.matches)&&(_=1),p.addListener?p.addListener(t_):p.addEventListener("change",t_)));return _&&o(c,function(g){return c.add(null,g)}),this},t.revert=function(a){this.kill(a||{})},t.kill=function(a){this.contexts.forEach(function(o){return o.kill(a,!0)})},r})(),Lf={registerPlugin:function(){for(var t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];n.forEach(function(o){return cM(o)})},timeline:function(t){return new Qn(t)},getTweensOf:function(t,n){return nn.getTweensOf(t,n)},getProperty:function(t,n,a,o){wn(t)&&(t=Xi(t)[0]);var l=Us(t||{}).get,c=a?Qy:Ky;return a==="native"&&(a=""),t&&(n?c((yi[n]&&yi[n].get||l)(t,n,a,o)):function(f,p,d){return c((yi[f]&&yi[f].get||l)(t,f,p,d))})},quickSetter:function(t,n,a){if(t=Xi(t),t.length>1){var o=t.map(function(_){return fi.quickSetter(_,n,a)}),l=o.length;return function(_){for(var g=l;g--;)o[g](_)}}t=t[0]||{};var c=yi[n],f=Us(t),p=f.harness&&(f.harness.aliases||{})[n]||n,d=c?function(_){var g=new c;zo._pt=0,g.init(t,a?_+a:_,zo,0,[t]),g.render(1,g),zo._pt&&F_(1,zo)}:f.set(t,p);return c?d:function(_){return d(t,p,a?_+a:_,f,1)}},quickTo:function(t,n,a){var o,l=fi.to(t,Ci((o={},o[n]="+=0.1",o.paused=!0,o.stagger=0,o),a||{})),c=function(p,d,_){return l.resetTo(n,p,d,_)};return c.tween=l,c},isTweening:function(t){return nn.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ns(t.ease,jo.ease)),NS(jo,t||{})},config:function(t){return NS(Ai,t||{})},registerEffect:function(t){var n=t.name,a=t.effect,o=t.plugins,l=t.defaults,c=t.extendTimeline;(o||"").split(",").forEach(function(f){return f&&!yi[f]&&!Ri[f]&&Su(n+" effect requires "+f+" plugin.")}),Bp[n]=function(f,p,d){return a(Xi(f),Ci(p||{},l),d)},c&&(Qn.prototype[n]=function(f,p,d){return this.add(Bp[n](f,ya(p)?p:(d=p)&&{},this),d)})},registerEase:function(t,n){Me[t]=Ns(n)},parseEase:function(t,n){return arguments.length?Ns(t,n):Me},getById:function(t){return nn.getById(t)},exportRoot:function(t,n){t===void 0&&(t={});var a=new Qn(t),o,l;for(a.smoothChildTiming=oi(t.smoothChildTiming),nn.remove(a),a._dp=0,a._time=a._tTime=nn._time,o=nn._first;o;)l=o._next,(n||!(!o._dur&&o instanceof yn&&o.vars.onComplete===o._targets[0]))&&ha(a,o,o._start-o._delay),o=l;return ha(nn,a,0),a},context:function(t,n){return t?new bM(t,n):tn},matchMedia:function(t){return new ww(t)},matchMediaRefresh:function(){return Os.forEach(function(t){var n=t.conditions,a,o;for(o in n)n[o]&&(n[o]=!1,a=1);a&&t.revert()})||t_()},addEventListener:function(t,n){var a=Ef[t]||(Ef[t]=[]);~a.indexOf(n)||a.push(n)},removeEventListener:function(t,n){var a=Ef[t],o=a&&a.indexOf(n);o>=0&&a.splice(o,1)},utils:{wrap:ow,wrapYoyo:lw,distribute:aM,random:sM,snap:rM,normalize:sw,getUnit:qn,clamp:nw,splitColor:fM,toArray:Xi,selector:Qm,mapRange:lM,pipe:aw,unitize:rw,interpolate:uw,shuffle:iM},install:Wy,effects:Bp,ticker:Mi,updateRoot:Qn.updateRoot,plugins:yi,globalTimeline:nn,core:{PropTween:ui,globals:qy,Tween:yn,Timeline:Qn,Animation:Tu,getCache:Us,_removeLinkedListItem:Wf,reverting:function(){return Vn},context:function(t){return t&&tn&&(tn.data.push(t),t._ctx=tn),tn},suppressOverwrites:function(t){return E_=t}}};li("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Lf[r]=yn[r]});Mi.add(Qn.updateRoot);zo=Lf.to({},{duration:0});var Dw=function(t,n){for(var a=t._pt;a&&a.p!==n&&a.op!==n&&a.fp!==n;)a=a._next;return a},Uw=function(t,n){var a=t._targets,o,l,c;for(o in n)for(l=a.length;l--;)c=t._ptLookup[l][o],c&&(c=c.d)&&(c._pt&&(c=Dw(c,o)),c&&c.modifier&&c.modifier(n[o],t,a[l],o))},Xp=function(t,n){return{name:t,headless:1,rawVars:1,init:function(o,l,c){c._onInit=function(f){var p,d;if(wn(l)&&(p={},li(l,function(_){return p[_]=1}),l=p),n){p={};for(d in l)p[d]=n(l[d]);l=p}Uw(f,l)}}}},fi=Lf.registerPlugin({name:"attr",init:function(t,n,a,o,l){var c,f,p;this.tween=a;for(c in n)p=t.getAttribute(c)||"",f=this.add(t,"setAttribute",(p||0)+"",n[c],o,l,0,0,c),f.op=c,f.b=p,this._props.push(c)},render:function(t,n){for(var a=n._pt;a;)Vn?a.set(a.t,a.p,a.b,a):a.r(t,a.d),a=a._next}},{name:"endArray",headless:1,init:function(t,n){for(var a=n.length;a--;)this.add(t,a,t[a]||0,n[a],0,0,0,0,0,1)}},Xp("roundProps",Jm),Xp("modifiers"),Xp("snap",rM))||Lf;yn.version=Qn.version=fi.version="3.14.2";Xy=1;b_()&&$o();Me.Power0;Me.Power1;Me.Power2;Me.Power3;Me.Power4;Me.Linear;Me.Quad;Me.Cubic;Me.Quart;Me.Quint;Me.Strong;Me.Elastic;Me.Back;Me.SteppedEase;Me.Bounce;Me.Sine;Me.Expo;Me.Circ;var BS,Vr,Go,z_,ws,HS,I_,Lw=function(){return typeof window<"u"},ir={},Ts=180/Math.PI,ko=Math.PI/180,Po=Math.atan2,VS=1e8,B_=/([A-Z])/g,Nw=/(left|right|width|margin|padding|x)/i,Ow=/[\s,\(]\S/,ma={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},e_=function(t,n){return n.set(n.t,n.p,Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Pw=function(t,n){return n.set(n.t,n.p,t===1?n.e:Math.round((n.s+n.c*t)*1e4)/1e4+n.u,n)},Fw=function(t,n){return n.set(n.t,n.p,t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},zw=function(t,n){return n.set(n.t,n.p,t===1?n.e:t?Math.round((n.s+n.c*t)*1e4)/1e4+n.u:n.b,n)},Iw=function(t,n){var a=n.s+n.c*t;n.set(n.t,n.p,~~(a+(a<0?-.5:.5))+n.u,n)},AM=function(t,n){return n.set(n.t,n.p,t?n.e:n.b,n)},RM=function(t,n){return n.set(n.t,n.p,t!==1?n.b:n.e,n)},Bw=function(t,n,a){return t.style[n]=a},Hw=function(t,n,a){return t.style.setProperty(n,a)},Vw=function(t,n,a){return t._gsap[n]=a},Gw=function(t,n,a){return t._gsap.scaleX=t._gsap.scaleY=a},kw=function(t,n,a,o,l){var c=t._gsap;c.scaleX=c.scaleY=a,c.renderTransform(l,c)},Xw=function(t,n,a,o,l){var c=t._gsap;c[n]=a,c.renderTransform(l,c)},an="transform",ci=an+"Origin",Ww=function r(t,n){var a=this,o=this.target,l=o.style,c=o._gsap;if(t in ir&&l){if(this.tfm=this.tfm||{},t!=="transform")t=ma[t]||t,~t.indexOf(",")?t.split(",").forEach(function(f){return a.tfm[f]=qa(o,f)}):this.tfm[t]=c.x?c[t]:qa(o,t),t===ci&&(this.tfm.zOrigin=c.zOrigin);else return ma.transform.split(",").forEach(function(f){return r.call(a,f,n)});if(this.props.indexOf(an)>=0)return;c.svg&&(this.svgo=o.getAttribute("data-svg-origin"),this.props.push(ci,n,"")),t=an}(l||n)&&this.props.push(t,n,l[t])},CM=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},qw=function(){var t=this.props,n=this.target,a=n.style,o=n._gsap,l,c;for(l=0;l<t.length;l+=3)t[l+1]?t[l+1]===2?n[t[l]](t[l+2]):n[t[l]]=t[l+2]:t[l+2]?a[t[l]]=t[l+2]:a.removeProperty(t[l].substr(0,2)==="--"?t[l]:t[l].replace(B_,"-$1").toLowerCase());if(this.tfm){for(c in this.tfm)o[c]=this.tfm[c];o.svg&&(o.renderTransform(),n.setAttribute("data-svg-origin",this.svgo||"")),l=I_(),(!l||!l.isStart)&&!a[an]&&(CM(a),o.zOrigin&&a[ci]&&(a[ci]+=" "+o.zOrigin+"px",o.zOrigin=0,o.renderTransform()),o.uncache=1)}},wM=function(t,n){var a={target:t,props:[],revert:qw,save:Ww};return t._gsap||fi.core.getCache(t),n&&t.style&&t.nodeType&&n.split(",").forEach(function(o){return a.save(o)}),a},DM,n_=function(t,n){var a=Vr.createElementNS?Vr.createElementNS((n||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Vr.createElement(t);return a&&a.style?a:Vr.createElement(t)},Ti=function r(t,n,a){var o=getComputedStyle(t);return o[n]||o.getPropertyValue(n.replace(B_,"-$1").toLowerCase())||o.getPropertyValue(n)||!a&&r(t,tl(n)||n,1)||""},GS="O,Moz,ms,Ms,Webkit".split(","),tl=function(t,n,a){var o=n||ws,l=o.style,c=5;if(t in l&&!a)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);c--&&!(GS[c]+t in l););return c<0?null:(c===3?"ms":c>=0?GS[c]:"")+t},i_=function(){Lw()&&window.document&&(BS=window,Vr=BS.document,Go=Vr.documentElement,ws=n_("div")||{style:{}},n_("div"),an=tl(an),ci=an+"Origin",ws.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",DM=!!tl("perspective"),I_=fi.core.reverting,z_=1)},kS=function(t){var n=t.ownerSVGElement,a=n_("svg",n&&n.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),o=t.cloneNode(!0),l;o.style.display="block",a.appendChild(o),Go.appendChild(a);try{l=o.getBBox()}catch{}return a.removeChild(o),Go.removeChild(a),l},XS=function(t,n){for(var a=n.length;a--;)if(t.hasAttribute(n[a]))return t.getAttribute(n[a])},UM=function(t){var n,a;try{n=t.getBBox()}catch{n=kS(t),a=1}return n&&(n.width||n.height)||a||(n=kS(t)),n&&!n.width&&!n.x&&!n.y?{x:+XS(t,["x","cx","x1"])||0,y:+XS(t,["y","cy","y1"])||0,width:0,height:0}:n},LM=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&UM(t))},Zr=function(t,n){if(n){var a=t.style,o;n in ir&&n!==ci&&(n=an),a.removeProperty?(o=n.substr(0,2),(o==="ms"||n.substr(0,6)==="webkit")&&(n="-"+n),a.removeProperty(o==="--"?n:n.replace(B_,"-$1").toLowerCase())):a.removeAttribute(n)}},Gr=function(t,n,a,o,l,c){var f=new ui(t._pt,n,a,0,1,c?RM:AM);return t._pt=f,f.b=o,f.e=l,t._props.push(a),f},WS={deg:1,rad:1,turn:1},Yw={grid:1,flex:1},jr=function r(t,n,a,o){var l=parseFloat(a)||0,c=(a+"").trim().substr((l+"").length)||"px",f=ws.style,p=Nw.test(n),d=t.tagName.toLowerCase()==="svg",_=(d?"client":"offset")+(p?"Width":"Height"),g=100,v=o==="px",S=o==="%",T,M,y,x;if(o===c||!l||WS[o]||WS[c])return l;if(c!=="px"&&!v&&(l=r(t,n,a,"px")),x=t.getCTM&&LM(t),(S||c==="%")&&(ir[n]||~n.indexOf("adius")))return T=x?t.getBBox()[p?"width":"height"]:t[_],dn(S?l/T*g:l/100*T);if(f[p?"width":"height"]=g+(v?c:o),M=o!=="rem"&&~n.indexOf("adius")||o==="em"&&t.appendChild&&!d?t:t.parentNode,x&&(M=(t.ownerSVGElement||{}).parentNode),(!M||M===Vr||!M.appendChild)&&(M=Vr.body),y=M._gsap,y&&S&&y.width&&p&&y.time===Mi.time&&!y.uncache)return dn(l/y.width*g);if(S&&(n==="height"||n==="width")){var D=t.style[n];t.style[n]=g+o,T=t[_],D?t.style[n]=D:Zr(t,n)}else(S||c==="%")&&!Yw[Ti(M,"display")]&&(f.position=Ti(t,"position")),M===t&&(f.position="static"),M.appendChild(ws),T=ws[_],M.removeChild(ws),f.position="absolute";return p&&S&&(y=Us(M),y.time=Mi.time,y.width=M[_]),dn(v?T*l/g:T&&l?g/T*l:0)},qa=function(t,n,a,o){var l;return z_||i_(),n in ma&&n!=="transform"&&(n=ma[n],~n.indexOf(",")&&(n=n.split(",")[0])),ir[n]&&n!=="transform"?(l=Au(t,o),l=n!=="transformOrigin"?l[n]:l.svg?l.origin:Of(Ti(t,ci))+" "+l.zOrigin+"px"):(l=t.style[n],(!l||l==="auto"||o||~(l+"").indexOf("calc("))&&(l=Nf[n]&&Nf[n](t,n,a)||Ti(t,n)||Zy(t,n)||(n==="opacity"?1:0))),a&&!~(l+"").trim().indexOf(" ")?jr(t,n,l,a)+a:l},Zw=function(t,n,a,o){if(!a||a==="none"){var l=tl(n,t,1),c=l&&Ti(t,l,1);c&&c!==a?(n=l,a=c):n==="borderColor"&&(a=Ti(t,"borderTopColor"))}var f=new ui(this._pt,t.style,n,0,1,EM),p=0,d=0,_,g,v,S,T,M,y,x,D,w,C,R;if(f.b=a,f.e=o,a+="",o+="",o.substring(0,6)==="var(--"&&(o=Ti(t,o.substring(4,o.indexOf(")")))),o==="auto"&&(M=t.style[n],t.style[n]=o,o=Ti(t,n)||o,M?t.style[n]=M:Zr(t,n)),_=[a,o],dM(_),a=_[0],o=_[1],v=a.match(Fo)||[],R=o.match(Fo)||[],R.length){for(;g=Fo.exec(o);)y=g[0],D=o.substring(p,g.index),T?T=(T+1)%5:(D.substr(-5)==="rgba("||D.substr(-5)==="hsla(")&&(T=1),y!==(M=v[d++]||"")&&(S=parseFloat(M)||0,C=M.substr((S+"").length),y.charAt(1)==="="&&(y=Vo(S,y)+C),x=parseFloat(y),w=y.substr((x+"").length),p=Fo.lastIndex-w.length,w||(w=w||Ai.units[n]||C,p===o.length&&(o+=w,f.e+=w)),C!==w&&(S=jr(t,n,M,w)||0),f._pt={_next:f._pt,p:D||d===1?D:",",s:S,c:x-S,m:T&&T<4||n==="zIndex"?Math.round:0});f.c=p<o.length?o.substring(p,o.length):""}else f.r=n==="display"&&o==="none"?RM:AM;return ky.test(o)&&(f.e=0),this._pt=f,f},qS={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jw=function(t){var n=t.split(" "),a=n[0],o=n[1]||"50%";return(a==="top"||a==="bottom"||o==="left"||o==="right")&&(t=a,a=o,o=t),n[0]=qS[a]||a,n[1]=qS[o]||o,n.join(" ")},Kw=function(t,n){if(n.tween&&n.tween._time===n.tween._dur){var a=n.t,o=a.style,l=n.u,c=a._gsap,f,p,d;if(l==="all"||l===!0)o.cssText="",p=1;else for(l=l.split(","),d=l.length;--d>-1;)f=l[d],ir[f]&&(p=1,f=f==="transformOrigin"?ci:an),Zr(a,f);p&&(Zr(a,an),c&&(c.svg&&a.removeAttribute("transform"),o.scale=o.rotate=o.translate="none",Au(a,1),c.uncache=1,CM(o)))}},Nf={clearProps:function(t,n,a,o,l){if(l.data!=="isFromStart"){var c=t._pt=new ui(t._pt,n,a,0,0,Kw);return c.u=o,c.pr=-10,c.tween=l,t._props.push(a),1}}},bu=[1,0,0,1,0,0],NM={},OM=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},YS=function(t){var n=Ti(t,an);return OM(n)?bu:n.substr(7).match(Gy).map(dn)},H_=function(t,n){var a=t._gsap||Us(t),o=t.style,l=YS(t),c,f,p,d;return a.svg&&t.getAttribute("transform")?(p=t.transform.baseVal.consolidate().matrix,l=[p.a,p.b,p.c,p.d,p.e,p.f],l.join(",")==="1,0,0,1,0,0"?bu:l):(l===bu&&!t.offsetParent&&t!==Go&&!a.svg&&(p=o.display,o.display="block",c=t.parentNode,(!c||!t.offsetParent&&!t.getBoundingClientRect().width)&&(d=1,f=t.nextElementSibling,Go.appendChild(t)),l=YS(t),p?o.display=p:Zr(t,"display"),d&&(f?c.insertBefore(t,f):c?c.appendChild(t):Go.removeChild(t))),n&&l.length>6?[l[0],l[1],l[4],l[5],l[12],l[13]]:l)},a_=function(t,n,a,o,l,c){var f=t._gsap,p=l||H_(t,!0),d=f.xOrigin||0,_=f.yOrigin||0,g=f.xOffset||0,v=f.yOffset||0,S=p[0],T=p[1],M=p[2],y=p[3],x=p[4],D=p[5],w=n.split(" "),C=parseFloat(w[0])||0,R=parseFloat(w[1])||0,P,U,F,b;a?p!==bu&&(U=S*y-T*M)&&(F=C*(y/U)+R*(-M/U)+(M*D-y*x)/U,b=C*(-T/U)+R*(S/U)-(S*D-T*x)/U,C=F,R=b):(P=UM(t),C=P.x+(~w[0].indexOf("%")?C/100*P.width:C),R=P.y+(~(w[1]||w[0]).indexOf("%")?R/100*P.height:R)),o||o!==!1&&f.smooth?(x=C-d,D=R-_,f.xOffset=g+(x*S+D*M)-x,f.yOffset=v+(x*T+D*y)-D):f.xOffset=f.yOffset=0,f.xOrigin=C,f.yOrigin=R,f.smooth=!!o,f.origin=n,f.originIsAbsolute=!!a,t.style[ci]="0px 0px",c&&(Gr(c,f,"xOrigin",d,C),Gr(c,f,"yOrigin",_,R),Gr(c,f,"xOffset",g,f.xOffset),Gr(c,f,"yOffset",v,f.yOffset)),t.setAttribute("data-svg-origin",C+" "+R)},Au=function(t,n){var a=t._gsap||new gM(t);if("x"in a&&!n&&!a.uncache)return a;var o=t.style,l=a.scaleX<0,c="px",f="deg",p=getComputedStyle(t),d=Ti(t,ci)||"0",_,g,v,S,T,M,y,x,D,w,C,R,P,U,F,b,L,V,Y,Z,st,it,I,H,Q,xt,gt,z,J,ht,yt,Ct;return _=g=v=M=y=x=D=w=C=0,S=T=1,a.svg=!!(t.getCTM&&LM(t)),p.translate&&((p.translate!=="none"||p.scale!=="none"||p.rotate!=="none")&&(o[an]=(p.translate!=="none"?"translate3d("+(p.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(p.rotate!=="none"?"rotate("+p.rotate+") ":"")+(p.scale!=="none"?"scale("+p.scale.split(" ").join(",")+") ":"")+(p[an]!=="none"?p[an]:"")),o.scale=o.rotate=o.translate="none"),U=H_(t,a.svg),a.svg&&(a.uncache?(Q=t.getBBox(),d=a.xOrigin-Q.x+"px "+(a.yOrigin-Q.y)+"px",H=""):H=!n&&t.getAttribute("data-svg-origin"),a_(t,H||d,!!H||a.originIsAbsolute,a.smooth!==!1,U)),R=a.xOrigin||0,P=a.yOrigin||0,U!==bu&&(V=U[0],Y=U[1],Z=U[2],st=U[3],_=it=U[4],g=I=U[5],U.length===6?(S=Math.sqrt(V*V+Y*Y),T=Math.sqrt(st*st+Z*Z),M=V||Y?Po(Y,V)*Ts:0,D=Z||st?Po(Z,st)*Ts+M:0,D&&(T*=Math.abs(Math.cos(D*ko))),a.svg&&(_-=R-(R*V+P*Z),g-=P-(R*Y+P*st))):(Ct=U[6],ht=U[7],gt=U[8],z=U[9],J=U[10],yt=U[11],_=U[12],g=U[13],v=U[14],F=Po(Ct,J),y=F*Ts,F&&(b=Math.cos(-F),L=Math.sin(-F),H=it*b+gt*L,Q=I*b+z*L,xt=Ct*b+J*L,gt=it*-L+gt*b,z=I*-L+z*b,J=Ct*-L+J*b,yt=ht*-L+yt*b,it=H,I=Q,Ct=xt),F=Po(-Z,J),x=F*Ts,F&&(b=Math.cos(-F),L=Math.sin(-F),H=V*b-gt*L,Q=Y*b-z*L,xt=Z*b-J*L,yt=st*L+yt*b,V=H,Y=Q,Z=xt),F=Po(Y,V),M=F*Ts,F&&(b=Math.cos(F),L=Math.sin(F),H=V*b+Y*L,Q=it*b+I*L,Y=Y*b-V*L,I=I*b-it*L,V=H,it=Q),y&&Math.abs(y)+Math.abs(M)>359.9&&(y=M=0,x=180-x),S=dn(Math.sqrt(V*V+Y*Y+Z*Z)),T=dn(Math.sqrt(I*I+Ct*Ct)),F=Po(it,I),D=Math.abs(F)>2e-4?F*Ts:0,C=yt?1/(yt<0?-yt:yt):0),a.svg&&(H=t.getAttribute("transform"),a.forceCSS=t.setAttribute("transform","")||!OM(Ti(t,an)),H&&t.setAttribute("transform",H))),Math.abs(D)>90&&Math.abs(D)<270&&(l?(S*=-1,D+=M<=0?180:-180,M+=M<=0?180:-180):(T*=-1,D+=D<=0?180:-180)),n=n||a.uncache,a.x=_-((a.xPercent=_&&(!n&&a.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-_)?-50:0)))?t.offsetWidth*a.xPercent/100:0)+c,a.y=g-((a.yPercent=g&&(!n&&a.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-g)?-50:0)))?t.offsetHeight*a.yPercent/100:0)+c,a.z=v+c,a.scaleX=dn(S),a.scaleY=dn(T),a.rotation=dn(M)+f,a.rotationX=dn(y)+f,a.rotationY=dn(x)+f,a.skewX=D+f,a.skewY=w+f,a.transformPerspective=C+c,(a.zOrigin=parseFloat(d.split(" ")[2])||!n&&a.zOrigin||0)&&(o[ci]=Of(d)),a.xOffset=a.yOffset=0,a.force3D=Ai.force3D,a.renderTransform=a.svg?Jw:DM?PM:Qw,a.uncache=0,a},Of=function(t){return(t=t.split(" "))[0]+" "+t[1]},Wp=function(t,n,a){var o=qn(n);return dn(parseFloat(n)+parseFloat(jr(t,"x",a+"px",o)))+o},Qw=function(t,n){n.z="0px",n.rotationY=n.rotationX="0deg",n.force3D=0,PM(t,n)},ys="0deg",ru="0px",Ms=") ",PM=function(t,n){var a=n||this,o=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.z,d=a.rotation,_=a.rotationY,g=a.rotationX,v=a.skewX,S=a.skewY,T=a.scaleX,M=a.scaleY,y=a.transformPerspective,x=a.force3D,D=a.target,w=a.zOrigin,C="",R=x==="auto"&&t&&t!==1||x===!0;if(w&&(g!==ys||_!==ys)){var P=parseFloat(_)*ko,U=Math.sin(P),F=Math.cos(P),b;P=parseFloat(g)*ko,b=Math.cos(P),c=Wp(D,c,U*b*-w),f=Wp(D,f,-Math.sin(P)*-w),p=Wp(D,p,F*b*-w+w)}y!==ru&&(C+="perspective("+y+Ms),(o||l)&&(C+="translate("+o+"%, "+l+"%) "),(R||c!==ru||f!==ru||p!==ru)&&(C+=p!==ru||R?"translate3d("+c+", "+f+", "+p+") ":"translate("+c+", "+f+Ms),d!==ys&&(C+="rotate("+d+Ms),_!==ys&&(C+="rotateY("+_+Ms),g!==ys&&(C+="rotateX("+g+Ms),(v!==ys||S!==ys)&&(C+="skew("+v+", "+S+Ms),(T!==1||M!==1)&&(C+="scale("+T+", "+M+Ms),D.style[an]=C||"translate(0, 0)"},Jw=function(t,n){var a=n||this,o=a.xPercent,l=a.yPercent,c=a.x,f=a.y,p=a.rotation,d=a.skewX,_=a.skewY,g=a.scaleX,v=a.scaleY,S=a.target,T=a.xOrigin,M=a.yOrigin,y=a.xOffset,x=a.yOffset,D=a.forceCSS,w=parseFloat(c),C=parseFloat(f),R,P,U,F,b;p=parseFloat(p),d=parseFloat(d),_=parseFloat(_),_&&(_=parseFloat(_),d+=_,p+=_),p||d?(p*=ko,d*=ko,R=Math.cos(p)*g,P=Math.sin(p)*g,U=Math.sin(p-d)*-v,F=Math.cos(p-d)*v,d&&(_*=ko,b=Math.tan(d-_),b=Math.sqrt(1+b*b),U*=b,F*=b,_&&(b=Math.tan(_),b=Math.sqrt(1+b*b),R*=b,P*=b)),R=dn(R),P=dn(P),U=dn(U),F=dn(F)):(R=g,F=v,P=U=0),(w&&!~(c+"").indexOf("px")||C&&!~(f+"").indexOf("px"))&&(w=jr(S,"x",c,"px"),C=jr(S,"y",f,"px")),(T||M||y||x)&&(w=dn(w+T-(T*R+M*U)+y),C=dn(C+M-(T*P+M*F)+x)),(o||l)&&(b=S.getBBox(),w=dn(w+o/100*b.width),C=dn(C+l/100*b.height)),b="matrix("+R+","+P+","+U+","+F+","+w+","+C+")",S.setAttribute("transform",b),D&&(S.style[an]=b)},$w=function(t,n,a,o,l){var c=360,f=wn(l),p=parseFloat(l)*(f&&~l.indexOf("rad")?Ts:1),d=p-o,_=o+d+"deg",g,v;return f&&(g=l.split("_")[1],g==="short"&&(d%=c,d!==d%(c/2)&&(d+=d<0?c:-c)),g==="cw"&&d<0?d=(d+c*VS)%c-~~(d/c)*c:g==="ccw"&&d>0&&(d=(d-c*VS)%c-~~(d/c)*c)),t._pt=v=new ui(t._pt,n,a,o,d,Pw),v.e=_,v.u="deg",t._props.push(a),v},ZS=function(t,n){for(var a in n)t[a]=n[a];return t},tD=function(t,n,a){var o=ZS({},a._gsap),l="perspective,force3D,transformOrigin,svgOrigin",c=a.style,f,p,d,_,g,v,S,T;o.svg?(d=a.getAttribute("transform"),a.setAttribute("transform",""),c[an]=n,f=Au(a,1),Zr(a,an),a.setAttribute("transform",d)):(d=getComputedStyle(a)[an],c[an]=n,f=Au(a,1),c[an]=d);for(p in ir)d=o[p],_=f[p],d!==_&&l.indexOf(p)<0&&(S=qn(d),T=qn(_),g=S!==T?jr(a,p,d,T):parseFloat(d),v=parseFloat(_),t._pt=new ui(t._pt,f,p,g,v-g,e_),t._pt.u=T||0,t._props.push(p));ZS(f,o)};li("padding,margin,Width,Radius",function(r,t){var n="Top",a="Right",o="Bottom",l="Left",c=(t<3?[n,a,o,l]:[n+l,n+a,o+a,o+l]).map(function(f){return t<2?r+f:"border"+f+r});Nf[t>1?"border"+r:r]=function(f,p,d,_,g){var v,S;if(arguments.length<4)return v=c.map(function(T){return qa(f,T,d)}),S=v.join(" "),S.split(v[0]).length===5?v[0]:S;v=(_+"").split(" "),S={},c.forEach(function(T,M){return S[T]=v[M]=v[M]||v[(M-1)/2|0]}),f.init(p,S,g)}});var FM={name:"css",register:i_,targetTest:function(t){return t.style&&t.nodeType},init:function(t,n,a,o,l){var c=this._props,f=t.style,p=a.vars.startAt,d,_,g,v,S,T,M,y,x,D,w,C,R,P,U,F,b;z_||i_(),this.styles=this.styles||wM(t),F=this.styles.props,this.tween=a;for(M in n)if(M!=="autoRound"&&(_=n[M],!(yi[M]&&vM(M,n,a,o,t,l)))){if(S=typeof _,T=Nf[M],S==="function"&&(_=_.call(a,o,t,l),S=typeof _),S==="string"&&~_.indexOf("random(")&&(_=Mu(_)),T)T(this,t,M,_,a)&&(U=1);else if(M.substr(0,2)==="--")d=(getComputedStyle(t).getPropertyValue(M)+"").trim(),_+="",Wr.lastIndex=0,Wr.test(d)||(y=qn(d),x=qn(_),x?y!==x&&(d=jr(t,M,d,x)+x):y&&(_+=y)),this.add(f,"setProperty",d,_,o,l,0,0,M),c.push(M),F.push(M,0,f[M]);else if(S!=="undefined"){if(p&&M in p?(d=typeof p[M]=="function"?p[M].call(a,o,t,l):p[M],wn(d)&&~d.indexOf("random(")&&(d=Mu(d)),qn(d+"")||d==="auto"||(d+=Ai.units[M]||qn(qa(t,M))||""),(d+"").charAt(1)==="="&&(d=qa(t,M))):d=qa(t,M),v=parseFloat(d),D=S==="string"&&_.charAt(1)==="="&&_.substr(0,2),D&&(_=_.substr(2)),g=parseFloat(_),M in ma&&(M==="autoAlpha"&&(v===1&&qa(t,"visibility")==="hidden"&&g&&(v=0),F.push("visibility",0,f.visibility),Gr(this,f,"visibility",v?"inherit":"hidden",g?"inherit":"hidden",!g)),M!=="scale"&&M!=="transform"&&(M=ma[M],~M.indexOf(",")&&(M=M.split(",")[0]))),w=M in ir,w){if(this.styles.save(M),b=_,S==="string"&&_.substring(0,6)==="var(--"){if(_=Ti(t,_.substring(4,_.indexOf(")"))),_.substring(0,5)==="calc("){var L=t.style.perspective;t.style.perspective=_,_=Ti(t,"perspective"),L?t.style.perspective=L:Zr(t,"perspective")}g=parseFloat(_)}if(C||(R=t._gsap,R.renderTransform&&!n.parseTransform||Au(t,n.parseTransform),P=n.smoothOrigin!==!1&&R.smooth,C=this._pt=new ui(this._pt,f,an,0,1,R.renderTransform,R,0,-1),C.dep=1),M==="scale")this._pt=new ui(this._pt,R,"scaleY",R.scaleY,(D?Vo(R.scaleY,D+g):g)-R.scaleY||0,e_),this._pt.u=0,c.push("scaleY",M),M+="X";else if(M==="transformOrigin"){F.push(ci,0,f[ci]),_=jw(_),R.svg?a_(t,_,0,P,0,this):(x=parseFloat(_.split(" ")[2])||0,x!==R.zOrigin&&Gr(this,R,"zOrigin",R.zOrigin,x),Gr(this,f,M,Of(d),Of(_)));continue}else if(M==="svgOrigin"){a_(t,_,1,P,0,this);continue}else if(M in NM){$w(this,R,M,v,D?Vo(v,D+_):_);continue}else if(M==="smoothOrigin"){Gr(this,R,"smooth",R.smooth,_);continue}else if(M==="force3D"){R[M]=_;continue}else if(M==="transform"){tD(this,_,t);continue}}else M in f||(M=tl(M)||M);if(w||(g||g===0)&&(v||v===0)&&!Ow.test(_)&&M in f)y=(d+"").substr((v+"").length),g||(g=0),x=qn(_)||(M in Ai.units?Ai.units[M]:y),y!==x&&(v=jr(t,M,d,x)),this._pt=new ui(this._pt,w?R:f,M,v,(D?Vo(v,D+g):g)-v,!w&&(x==="px"||M==="zIndex")&&n.autoRound!==!1?Iw:e_),this._pt.u=x||0,w&&b!==_?(this._pt.b=d,this._pt.e=b,this._pt.r=zw):y!==x&&x!=="%"&&(this._pt.b=d,this._pt.r=Fw);else if(M in f)Zw.call(this,t,M,d,D?D+_:_);else if(M in t)this.add(t,M,d||t[M],D?D+_:_,o,l);else if(M!=="parseTransform"){R_(M,_);continue}w||(M in f?F.push(M,0,f[M]):typeof t[M]=="function"?F.push(M,2,t[M]()):F.push(M,1,d||t[M])),c.push(M)}}U&&TM(this)},render:function(t,n){if(n.tween._time||!I_())for(var a=n._pt;a;)a.r(t,a.d),a=a._next;else n.styles.revert()},get:qa,aliases:ma,getSetter:function(t,n,a){var o=ma[n];return o&&o.indexOf(",")<0&&(n=o),n in ir&&n!==ci&&(t._gsap.x||qa(t,"x"))?a&&HS===a?n==="scale"?Gw:Vw:(HS=a||{})&&(n==="scale"?kw:Xw):t.style&&!T_(t.style[n])?Bw:~n.indexOf("-")?Hw:P_(t,n)},core:{_removeProperty:Zr,_getMatrix:H_}};fi.utils.checkPrefix=tl;fi.core.getStyleSaver=wM;(function(r,t,n,a){var o=li(r+","+t+","+n,function(l){ir[l]=1});li(t,function(l){Ai.units[l]="deg",NM[l]=1}),ma[o[13]]=r+","+t,li(a,function(l){var c=l.split(":");ma[c[1]]=o[c[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");li("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ai.units[r]="px"});fi.registerPlugin(FM);var el=fi.registerPlugin(FM)||fi;el.core.Tween;const eD=({text:r,as:t="div",typingSpeed:n=50,initialDelay:a=0,pauseDuration:o=2e3,deletingSpeed:l=30,loop:c=!0,className:f="",showCursor:p=!0,hideCursorWhileTyping:d=!1,hideCursorOnComplete:_=!1,cursorCharacter:g="|",cursorClassName:v="",cursorBlinkDuration:S=.5,textColors:T=[],variableSpeed:M,onSentenceComplete:y,startOnVisible:x=!1,reverseMode:D=!1,...w})=>{const[C,R]=Kt.useState(""),[P,U]=Kt.useState(0),[F,b]=Kt.useState(!1),[L,V]=Kt.useState(0),[Y,Z]=Kt.useState(!x),[st,it]=Kt.useState(!1),I=Kt.useRef(null),H=Kt.useRef(null),Q=Kt.useMemo(()=>Array.isArray(r)?r:[r],[r]),xt=Kt.useCallback(()=>{if(!M)return n;const{min:J,max:ht}=M;return Math.random()*(ht-J)+J},[M,n]),gt=()=>{if(T.length!==0)return T[L%T.length]};Kt.useEffect(()=>{if(!x||!H.current)return;const J=new IntersectionObserver(ht=>{ht.forEach(yt=>{yt.isIntersecting&&Z(!0)})},{threshold:.1});return J.observe(H.current),()=>J.disconnect()},[x]),Kt.useEffect(()=>{p&&I.current&&(el.set(I.current,{opacity:1}),el.to(I.current,{opacity:0,duration:S,repeat:-1,yoyo:!0,ease:"power2.inOut"}))},[p,S]),Kt.useEffect(()=>{if(!Y)return;let J;const ht=Q[L],yt=D?ht.split("").reverse().join(""):ht,Ct=()=>{if(F)if(C===""){if(b(!1),L===Q.length-1&&!c)return;y&&y(Q[L],L),V(tt=>(tt+1)%Q.length),U(0),J=setTimeout(()=>{},o)}else J=setTimeout(()=>{R(tt=>tt.slice(0,-1))},l);else if(P<yt.length)J=setTimeout(()=>{R(tt=>tt+yt[P]),U(tt=>tt+1)},M?xt():n);else if(Q.length>=1){if(!c&&L===Q.length-1){it(!0);return}J=setTimeout(()=>{b(!0)},o)}};return P===0&&!F&&C===""?J=setTimeout(Ct,a):Ct(),()=>clearTimeout(J)},[P,C,F,n,l,o,Q,L,c,a,Y,D,M,y]);const z=d&&(P<Q[L].length||F)||_&&st;return Kt.createElement(t,{ref:H,className:`text-type ${f}`,...w},_e.jsx("span",{className:"text-type__content",style:{color:gt()||"inherit"},children:C}),p&&!z&&_e.jsx("span",{ref:I,className:`text-type__cursor ${v}`,children:g}))};function zM(r){const t=Kt.useRef(null);return t.current===null&&(t.current=r()),t.current}const nD=typeof window<"u",iD=nD?Kt.useLayoutEffect:Kt.useEffect;function aD(r,t){r.indexOf(t)===-1&&r.push(t)}function rD(r,t){const n=r.indexOf(t);n>-1&&r.splice(n,1)}const Fs=(r,t,n)=>n>t?t:n<r?r:n;let IM=()=>{};const Pf={},Zf=r=>r,sD=(r,t)=>n=>t(r(n)),V_=(...r)=>r.reduce(sD),BM=(r,t,n)=>{const a=t-r;return a===0?1:(n-r)/a};class oD{constructor(){this.subscriptions=[]}add(t){return aD(this.subscriptions,t),()=>rD(this.subscriptions,t)}notify(t,n,a){const o=this.subscriptions.length;if(o)if(o===1)this.subscriptions[0](t,n,a);else for(let l=0;l<o;l++){const c=this.subscriptions[l];c&&c(t,n,a)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const jf=r=>r*1e3,kr=r=>r/1e3;function HM(r,t){return t?r*(1e3/t):0}const VM=(r,t,n)=>(((1-3*n+3*t)*r+(3*n-6*t))*r+3*t)*r,lD=1e-7,uD=12;function cD(r,t,n,a,o){let l,c,f=0;do c=t+(n-t)/2,l=VM(c,a,o)-r,l>0?n=c:t=c;while(Math.abs(l)>lD&&++f<uD);return c}function Nu(r,t,n,a){if(r===t&&n===a)return Zf;const o=l=>cD(l,0,1,r,n);return l=>l===0||l===1?l:VM(o(l),t,a)}const GM=r=>t=>t<=.5?r(2*t)/2:(2-r(2*(1-t)))/2,kM=r=>t=>1-r(1-t),XM=Nu(.33,1.53,.69,.99),G_=kM(XM),fD=GM(G_),hD=r=>(r*=2)<1?.5*G_(r):.5*(2-Math.pow(2,-10*(r-1))),k_=r=>1-Math.sin(Math.acos(r)),dD=kM(k_),pD=GM(k_),mD=Nu(.42,0,1,1),_D=Nu(0,0,.58,1),WM=Nu(.42,0,.58,1),gD=r=>Array.isArray(r)&&typeof r[0]!="number",vD=r=>Array.isArray(r)&&typeof r[0]=="number",xD={linear:Zf,easeIn:mD,easeInOut:WM,easeOut:_D,circIn:k_,circInOut:pD,circOut:dD,backIn:G_,backInOut:fD,backOut:XM,anticipate:hD},SD=r=>typeof r=="string",jS=r=>{if(vD(r)){IM(r.length===4);const[t,n,a,o]=r;return Nu(t,n,a,o)}else if(SD(r))return xD[r];return r},pf=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function yD(r,t){let n=new Set,a=new Set,o=!1,l=!1;const c=new WeakSet;let f={delta:0,timestamp:0,isProcessing:!1};function p(_){c.has(_)&&(d.schedule(_),r()),_(f)}const d={schedule:(_,g=!1,v=!1)=>{const T=v&&o?n:a;return g&&c.add(_),T.has(_)||T.add(_),_},cancel:_=>{a.delete(_),c.delete(_)},process:_=>{if(f=_,o){l=!0;return}o=!0,[n,a]=[a,n],n.forEach(p),n.clear(),o=!1,l&&(l=!1,d.process(_))}};return d}const MD=40;function ED(r,t){let n=!1,a=!0;const o={delta:0,timestamp:0,isProcessing:!1},l=()=>n=!0,c=pf.reduce((w,C)=>(w[C]=yD(l),w),{}),{setup:f,read:p,resolveKeyframes:d,preUpdate:_,update:g,preRender:v,render:S,postRender:T}=c,M=()=>{const w=Pf.useManualTiming?o.timestamp:performance.now();n=!1,Pf.useManualTiming||(o.delta=a?1e3/60:Math.max(Math.min(w-o.timestamp,MD),1)),o.timestamp=w,o.isProcessing=!0,f.process(o),p.process(o),d.process(o),_.process(o),g.process(o),v.process(o),S.process(o),T.process(o),o.isProcessing=!1,n&&t&&(a=!1,r(M))},y=()=>{n=!0,a=!0,o.isProcessing||r(M)};return{schedule:pf.reduce((w,C)=>{const R=c[C];return w[C]=(P,U=!1,F=!1)=>(n||y(),R.schedule(P,U,F)),w},{}),cancel:w=>{for(let C=0;C<pf.length;C++)c[pf[C]].cancel(w)},state:o,steps:c}}const{schedule:Kf,cancel:qM,state:Ff}=ED(typeof requestAnimationFrame<"u"?requestAnimationFrame:Zf,!0);let Tf;function TD(){Tf=void 0}const ja={now:()=>(Tf===void 0&&ja.set(Ff.isProcessing||Pf.useManualTiming?Ff.timestamp:performance.now()),Tf),set:r=>{Tf=r,queueMicrotask(TD)}},bD=r=>t=>typeof t=="string"&&t.startsWith(r),AD=bD("var(--"),RD=r=>AD(r)?CD.test(r.split("/*")[0].trim()):!1,CD=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,YM={test:r=>typeof r=="number",parse:parseFloat,transform:r=>r},ZM={...YM,transform:r=>Fs(0,1,r)},du=r=>Math.round(r*1e5)/1e5,jM=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function wD(r){return r==null}const DD=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,X_=(r,t)=>n=>!!(typeof n=="string"&&DD.test(n)&&n.startsWith(r)||t&&!wD(n)&&Object.prototype.hasOwnProperty.call(n,t)),KM=(r,t,n)=>a=>{if(typeof a!="string")return a;const[o,l,c,f]=a.match(jM);return{[r]:parseFloat(o),[t]:parseFloat(l),[n]:parseFloat(c),alpha:f!==void 0?parseFloat(f):1}},UD=r=>Fs(0,255,r),qp={...YM,transform:r=>Math.round(UD(r))},Ds={test:X_("rgb","red"),parse:KM("red","green","blue"),transform:({red:r,green:t,blue:n,alpha:a=1})=>"rgba("+qp.transform(r)+", "+qp.transform(t)+", "+qp.transform(n)+", "+du(ZM.transform(a))+")"};function LD(r){let t="",n="",a="",o="";return r.length>5?(t=r.substring(1,3),n=r.substring(3,5),a=r.substring(5,7),o=r.substring(7,9)):(t=r.substring(1,2),n=r.substring(2,3),a=r.substring(3,4),o=r.substring(4,5),t+=t,n+=n,a+=a,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(a,16),alpha:o?parseInt(o,16)/255:1}}const r_={test:X_("#"),parse:LD,transform:Ds.transform},ND=r=>({test:t=>typeof t=="string"&&t.endsWith(r)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${r}`}),KS=ND("%"),Io={test:X_("hsl","hue"),parse:KM("hue","saturation","lightness"),transform:({hue:r,saturation:t,lightness:n,alpha:a=1})=>"hsla("+Math.round(r)+", "+KS.transform(du(t))+", "+KS.transform(du(n))+", "+du(ZM.transform(a))+")"},ar={test:r=>Ds.test(r)||r_.test(r)||Io.test(r),parse:r=>Ds.test(r)?Ds.parse(r):Io.test(r)?Io.parse(r):r_.parse(r),transform:r=>typeof r=="string"?r:r.hasOwnProperty("red")?Ds.transform(r):Io.transform(r),getAnimatableNone:r=>{const t=ar.parse(r);return t.alpha=0,ar.transform(t)}},OD=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function PD(r){return isNaN(r)&&typeof r=="string"&&(r.match(jM)?.length||0)+(r.match(OD)?.length||0)>0}const QM="number",JM="color",FD="var",zD="var(",QS="${}",ID=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function zf(r){const t=r.toString(),n=[],a={color:[],number:[],var:[]},o=[];let l=0;const f=t.replace(ID,p=>(ar.test(p)?(a.color.push(l),o.push(JM),n.push(ar.parse(p))):p.startsWith(zD)?(a.var.push(l),o.push(FD),n.push(p)):(a.number.push(l),o.push(QM),n.push(parseFloat(p))),++l,QS)).split(QS);return{values:n,split:f,indexes:a,types:o}}function $M(r){return zf(r).values}function tE(r){const{split:t,types:n}=zf(r),a=t.length;return o=>{let l="";for(let c=0;c<a;c++)if(l+=t[c],o[c]!==void 0){const f=n[c];f===QM?l+=du(o[c]):f===JM?l+=ar.transform(o[c]):l+=o[c]}return l}}const BD=r=>typeof r=="number"?0:ar.test(r)?ar.getAnimatableNone(r):r;function HD(r){const t=$M(r);return tE(r)(t.map(BD))}const VD={test:PD,parse:$M,createTransformer:tE,getAnimatableNone:HD};function Yp(r,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?r+(t-r)*6*n:n<1/2?t:n<2/3?r+(t-r)*(2/3-n)*6:r}function GD({hue:r,saturation:t,lightness:n,alpha:a}){r/=360,t/=100,n/=100;let o=0,l=0,c=0;if(!t)o=l=c=n;else{const f=n<.5?n*(1+t):n+t-n*t,p=2*n-f;o=Yp(p,f,r+1/3),l=Yp(p,f,r),c=Yp(p,f,r-1/3)}return{red:Math.round(o*255),green:Math.round(l*255),blue:Math.round(c*255),alpha:a}}function If(r,t){return n=>n>0?t:r}const Qf=(r,t,n)=>r+(t-r)*n,Zp=(r,t,n)=>{const a=r*r,o=n*(t*t-a)+a;return o<0?0:Math.sqrt(o)},kD=[r_,Ds,Io],XD=r=>kD.find(t=>t.test(r));function JS(r){const t=XD(r);if(!t)return!1;let n=t.parse(r);return t===Io&&(n=GD(n)),n}const $S=(r,t)=>{const n=JS(r),a=JS(t);if(!n||!a)return If(r,t);const o={...n};return l=>(o.red=Zp(n.red,a.red,l),o.green=Zp(n.green,a.green,l),o.blue=Zp(n.blue,a.blue,l),o.alpha=Qf(n.alpha,a.alpha,l),Ds.transform(o))},s_=new Set(["none","hidden"]);function WD(r,t){return s_.has(r)?n=>n<=0?r:t:n=>n>=1?t:r}function qD(r,t){return n=>Qf(r,t,n)}function W_(r){return typeof r=="number"?qD:typeof r=="string"?RD(r)?If:ar.test(r)?$S:jD:Array.isArray(r)?eE:typeof r=="object"?ar.test(r)?$S:YD:If}function eE(r,t){const n=[...r],a=n.length,o=r.map((l,c)=>W_(l)(l,t[c]));return l=>{for(let c=0;c<a;c++)n[c]=o[c](l);return n}}function YD(r,t){const n={...r,...t},a={};for(const o in n)r[o]!==void 0&&t[o]!==void 0&&(a[o]=W_(r[o])(r[o],t[o]));return o=>{for(const l in a)n[l]=a[l](o);return n}}function ZD(r,t){const n=[],a={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const l=t.types[o],c=r.indexes[l][a[l]],f=r.values[c]??0;n[o]=f,a[l]++}return n}const jD=(r,t)=>{const n=VD.createTransformer(t),a=zf(r),o=zf(t);return a.indexes.var.length===o.indexes.var.length&&a.indexes.color.length===o.indexes.color.length&&a.indexes.number.length>=o.indexes.number.length?s_.has(r)&&!o.values.length||s_.has(t)&&!a.values.length?WD(r,t):V_(eE(ZD(a,o),o.values),n):If(r,t)};function nE(r,t,n){return typeof r=="number"&&typeof t=="number"&&typeof n=="number"?Qf(r,t,n):W_(r)(r,t)}const KD=r=>{const t=({timestamp:n})=>r(n);return{start:(n=!0)=>Kf.update(t,n),stop:()=>qM(t),now:()=>Ff.isProcessing?Ff.timestamp:ja.now()}},QD=(r,t,n=10)=>{let a="";const o=Math.max(Math.round(t/n),2);for(let l=0;l<o;l++)a+=Math.round(r(l/(o-1))*1e4)/1e4+", ";return`linear(${a.substring(0,a.length-2)})`},Bf=2e4;function q_(r){let t=0;const n=50;let a=r.next(t);for(;!a.done&&t<Bf;)t+=n,a=r.next(t);return t>=Bf?1/0:t}function JD(r,t=100,n){const a=n({...r,keyframes:[0,t]}),o=Math.min(q_(a),Bf);return{type:"keyframes",ease:l=>a.next(o*l).value/t,duration:kr(o)}}const $D=5;function iE(r,t,n){const a=Math.max(t-$D,0);return HM(n-r(a),t-a)}const un={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jp=.001;function tU({duration:r=un.duration,bounce:t=un.bounce,velocity:n=un.velocity,mass:a=un.mass}){let o,l,c=1-t;c=Fs(un.minDamping,un.maxDamping,c),r=Fs(un.minDuration,un.maxDuration,kr(r)),c<1?(o=d=>{const _=d*c,g=_*r,v=_-n,S=o_(d,c),T=Math.exp(-g);return jp-v/S*T},l=d=>{const g=d*c*r,v=g*n+n,S=Math.pow(c,2)*Math.pow(d,2)*r,T=Math.exp(-g),M=o_(Math.pow(d,2),c);return(-o(d)+jp>0?-1:1)*((v-S)*T)/M}):(o=d=>{const _=Math.exp(-d*r),g=(d-n)*r+1;return-jp+_*g},l=d=>{const _=Math.exp(-d*r),g=(n-d)*(r*r);return _*g});const f=5/r,p=nU(o,l,f);if(r=jf(r),isNaN(p))return{stiffness:un.stiffness,damping:un.damping,duration:r};{const d=Math.pow(p,2)*a;return{stiffness:d,damping:c*2*Math.sqrt(a*d),duration:r}}}const eU=12;function nU(r,t,n){let a=n;for(let o=1;o<eU;o++)a=a-r(a)/t(a);return a}function o_(r,t){return r*Math.sqrt(1-t*t)}const iU=["duration","bounce"],aU=["stiffness","damping","mass"];function ty(r,t){return t.some(n=>r[n]!==void 0)}function rU(r){let t={velocity:un.velocity,stiffness:un.stiffness,damping:un.damping,mass:un.mass,isResolvedFromDuration:!1,...r};if(!ty(r,aU)&&ty(r,iU))if(r.visualDuration){const n=r.visualDuration,a=2*Math.PI/(n*1.2),o=a*a,l=2*Fs(.05,1,1-(r.bounce||0))*Math.sqrt(o);t={...t,mass:un.mass,stiffness:o,damping:l}}else{const n=tU(r);t={...t,...n,mass:un.mass},t.isResolvedFromDuration=!0}return t}function Hf(r=un.visualDuration,t=un.bounce){const n=typeof r!="object"?{visualDuration:r,keyframes:[0,1],bounce:t}:r;let{restSpeed:a,restDelta:o}=n;const l=n.keyframes[0],c=n.keyframes[n.keyframes.length-1],f={done:!1,value:l},{stiffness:p,damping:d,mass:_,duration:g,velocity:v,isResolvedFromDuration:S}=rU({...n,velocity:-kr(n.velocity||0)}),T=v||0,M=d/(2*Math.sqrt(p*_)),y=c-l,x=kr(Math.sqrt(p/_)),D=Math.abs(y)<5;a||(a=D?un.restSpeed.granular:un.restSpeed.default),o||(o=D?un.restDelta.granular:un.restDelta.default);let w;if(M<1){const R=o_(x,M);w=P=>{const U=Math.exp(-M*x*P);return c-U*((T+M*x*y)/R*Math.sin(R*P)+y*Math.cos(R*P))}}else if(M===1)w=R=>c-Math.exp(-x*R)*(y+(T+x*y)*R);else{const R=x*Math.sqrt(M*M-1);w=P=>{const U=Math.exp(-M*x*P),F=Math.min(R*P,300);return c-U*((T+M*x*y)*Math.sinh(F)+R*y*Math.cosh(F))/R}}const C={calculatedDuration:S&&g||null,next:R=>{const P=w(R);if(S)f.done=R>=g;else{let U=R===0?T:0;M<1&&(U=R===0?jf(T):iE(w,R,P));const F=Math.abs(U)<=a,b=Math.abs(c-P)<=o;f.done=F&&b}return f.value=f.done?c:P,f},toString:()=>{const R=Math.min(q_(C),Bf),P=QD(U=>C.next(R*U).value,R,30);return R+"ms "+P},toTransition:()=>{}};return C}Hf.applyToOptions=r=>{const t=JD(r,100,Hf);return r.ease=t.ease,r.duration=jf(t.duration),r.type="keyframes",r};function l_({keyframes:r,velocity:t=0,power:n=.8,timeConstant:a=325,bounceDamping:o=10,bounceStiffness:l=500,modifyTarget:c,min:f,max:p,restDelta:d=.5,restSpeed:_}){const g=r[0],v={done:!1,value:g},S=F=>f!==void 0&&F<f||p!==void 0&&F>p,T=F=>f===void 0?p:p===void 0||Math.abs(f-F)<Math.abs(p-F)?f:p;let M=n*t;const y=g+M,x=c===void 0?y:c(y);x!==y&&(M=x-g);const D=F=>-M*Math.exp(-F/a),w=F=>x+D(F),C=F=>{const b=D(F),L=w(F);v.done=Math.abs(b)<=d,v.value=v.done?x:L};let R,P;const U=F=>{S(v.value)&&(R=F,P=Hf({keyframes:[v.value,T(v.value)],velocity:iE(w,F,v.value),damping:o,stiffness:l,restDelta:d,restSpeed:_}))};return U(0),{calculatedDuration:null,next:F=>{let b=!1;return!P&&R===void 0&&(b=!0,C(F),U(F)),R!==void 0&&F>=R?P.next(F-R):(!b&&C(F),v)}}}function sU(r,t,n){const a=[],o=n||Pf.mix||nE,l=r.length-1;for(let c=0;c<l;c++){let f=o(r[c],r[c+1]);if(t){const p=Array.isArray(t)?t[c]||Zf:t;f=V_(p,f)}a.push(f)}return a}function aE(r,t,{clamp:n=!0,ease:a,mixer:o}={}){const l=r.length;if(IM(l===t.length),l===1)return()=>t[0];if(l===2&&t[0]===t[1])return()=>t[1];const c=r[0]===r[1];r[0]>r[l-1]&&(r=[...r].reverse(),t=[...t].reverse());const f=sU(t,a,o),p=f.length,d=_=>{if(c&&_<r[0])return t[0];let g=0;if(p>1)for(;g<r.length-2&&!(_<r[g+1]);g++);const v=BM(r[g],r[g+1],_);return f[g](v)};return n?_=>d(Fs(r[0],r[l-1],_)):d}function oU(r,t){const n=r[r.length-1];for(let a=1;a<=t;a++){const o=BM(0,t,a);r.push(Qf(n,1,o))}}function lU(r){const t=[0];return oU(t,r.length-1),t}function uU(r,t){return r.map(n=>n*t)}function cU(r,t){return r.map(()=>t||WM).splice(0,r.length-1)}function pu({duration:r=300,keyframes:t,times:n,ease:a="easeInOut"}){const o=gD(a)?a.map(jS):jS(a),l={done:!1,value:t[0]},c=uU(n&&n.length===t.length?n:lU(t),r),f=aE(c,t,{ease:Array.isArray(o)?o:cU(t,o)});return{calculatedDuration:r,next:p=>(l.value=f(p),l.done=p>=r,l)}}const fU=r=>r!==null;function hU(r,{repeat:t,repeatType:n="loop"},a,o=1){const l=r.filter(fU),f=o<0||t&&n!=="loop"&&t%2===1?0:l.length-1;return!f||a===void 0?l[f]:a}const dU={decay:l_,inertia:l_,tween:pu,keyframes:pu,spring:Hf};function pU(r){typeof r.type=="string"&&(r.type=dU[r.type])}class mU{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(t=>{this.resolve=t})}notifyFinished(){this.resolve()}then(t,n){return this.finished.then(t,n)}}const _U=r=>r/100;class gU extends mU{constructor(t){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{const{motionValue:n}=this.options;n&&n.updatedAt!==ja.now()&&this.tick(ja.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),this.options.onStop?.())},this.options=t,this.initAnimation(),this.play(),t.autoplay===!1&&this.pause()}initAnimation(){const{options:t}=this;pU(t);const{type:n=pu,repeat:a=0,repeatDelay:o=0,repeatType:l,velocity:c=0}=t;let{keyframes:f}=t;const p=n||pu;p!==pu&&typeof f[0]!="number"&&(this.mixKeyframes=V_(_U,nE(f[0],f[1])),f=[0,100]);const d=p({...t,keyframes:f});l==="mirror"&&(this.mirroredGenerator=p({...t,keyframes:[...f].reverse(),velocity:-c})),d.calculatedDuration===null&&(d.calculatedDuration=q_(d));const{calculatedDuration:_}=d;this.calculatedDuration=_,this.resolvedDuration=_+o,this.totalDuration=this.resolvedDuration*(a+1)-o,this.generator=d}updateTime(t){const n=Math.round(t-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(t,n=!1){const{generator:a,totalDuration:o,mixKeyframes:l,mirroredGenerator:c,resolvedDuration:f,calculatedDuration:p}=this;if(this.startTime===null)return a.next(0);const{delay:d=0,keyframes:_,repeat:g,repeatType:v,repeatDelay:S,type:T,onUpdate:M,finalKeyframe:y}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,t):this.speed<0&&(this.startTime=Math.min(t-o/this.speed,this.startTime)),n?this.currentTime=t:this.updateTime(t);const x=this.currentTime-d*(this.playbackSpeed>=0?1:-1),D=this.playbackSpeed>=0?x<0:x>o;this.currentTime=Math.max(x,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=o);let w=this.currentTime,C=a;if(g){const F=Math.min(this.currentTime,o)/f;let b=Math.floor(F),L=F%1;!L&&F>=1&&(L=1),L===1&&b--,b=Math.min(b,g+1),b%2&&(v==="reverse"?(L=1-L,S&&(L-=S/f)):v==="mirror"&&(C=c)),w=Fs(0,1,L)*f}const R=D?{done:!1,value:_[0]}:C.next(w);l&&(R.value=l(R.value));let{done:P}=R;!D&&p!==null&&(P=this.playbackSpeed>=0?this.currentTime>=o:this.currentTime<=0);const U=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&P);return U&&T!==l_&&(R.value=hU(_,this.options,y,this.speed)),M&&M(R.value),U&&this.finish(),R}then(t,n){return this.finished.then(t,n)}get duration(){return kr(this.calculatedDuration)}get iterationDuration(){const{delay:t=0}=this.options||{};return this.duration+kr(t)}get time(){return kr(this.currentTime)}set time(t){t=jf(t),this.currentTime=t,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=t:this.driver&&(this.startTime=this.driver.now()-t/this.playbackSpeed),this.driver?.start(!1)}get speed(){return this.playbackSpeed}set speed(t){this.updateTime(ja.now());const n=this.playbackSpeed!==t;this.playbackSpeed=t,n&&(this.time=kr(this.currentTime))}play(){if(this.isStopped)return;const{driver:t=KD,startTime:n}=this.options;this.driver||(this.driver=t(o=>this.tick(o))),this.options.onPlay?.();const a=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=a):this.holdTime!==null?this.startTime=a-this.holdTime:this.startTime||(this.startTime=n??a),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(ja.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){this.notifyFinished(),this.teardown(),this.state="finished",this.options.onComplete?.()}cancel(){this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),this.options.onCancel?.()}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(t){return this.startTime=0,this.tick(t,!0)}attachTimeline(t){return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),this.driver?.stop(),t.observe(this)}}function vU(r,t,n){if(r instanceof EventTarget)return[r];if(typeof r=="string"){const o=document.querySelectorAll(r);return o?Array.from(o):[]}return Array.from(r)}const ey=30,xU=r=>!isNaN(parseFloat(r)),mu={current:void 0};class SU{constructor(t,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=a=>{const o=ja.now();if(this.updatedAt!==o&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(a),this.current!==this.prev&&(this.events.change?.notify(this.current),this.dependents))for(const l of this.dependents)l.dirty()},this.hasAnimated=!1,this.setCurrent(t),this.owner=n.owner}setCurrent(t){this.current=t,this.updatedAt=ja.now(),this.canTrackVelocity===null&&t!==void 0&&(this.canTrackVelocity=xU(this.current))}setPrevFrameValue(t=this.current){this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new oD);const a=this.events[t].add(n);return t==="change"?()=>{a(),Kf.read(()=>{this.events.change.getSize()||this.stop()})}:a}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t){this.passiveEffect?this.passiveEffect(t,this.updateAndNotify):this.updateAndNotify(t)}setWithVelocity(t,n,a){this.set(n),this.prev=void 0,this.prevFrameValue=t,this.prevUpdatedAt=this.updatedAt-a}jump(t,n=!0){this.updateAndNotify(t),this.prev=t,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){this.events.change?.notify(this.current)}addDependent(t){this.dependents||(this.dependents=new Set),this.dependents.add(t)}removeDependent(t){this.dependents&&this.dependents.delete(t)}get(){return mu.current&&mu.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const t=ja.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||t-this.updatedAt>ey)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,ey);return HM(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.dependents?.clear(),this.events.destroy?.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function yU(r,t){return new SU(r,t)}function MU(...r){const t=!Array.isArray(r[0]),n=t?0:-1,a=r[0+n],o=r[1+n],l=r[2+n],c=r[3+n],f=aE(o,l,c);return t?f(a):f}const rE=r=>!!(r&&r.getVelocity);function EU(r,t,n){const a=r.get();let o=null,l=a,c;const f=typeof a=="string"?a.replace(/[\d.-]/g,""):void 0,p=()=>{o&&(o.stop(),o=null)},d=()=>{p(),o=new gU({keyframes:[iy(r.get()),iy(l)],velocity:r.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:c})};if(r.attach((_,g)=>{l=_,c=v=>g(ny(v,f)),Kf.postRender(d)},p),rE(t)){const _=t.on("change",v=>r.set(ny(v,f))),g=r.on("destroy",_);return()=>{_(),g()}}return p}function ny(r,t){return t?r+t:r}function iy(r){return typeof r=="number"?r:parseFloat(r)}const sE=Kt.createContext({transformPagePoint:r=>r,isStatic:!1,reducedMotion:"never"});function Y_(r){const t=zM(()=>yU(r)),{isStatic:n}=Kt.useContext(sE);if(n){const[,a]=Kt.useState(r);Kt.useEffect(()=>t.on("change",a),[])}return t}function oE(r,t){const n=Y_(t()),a=()=>n.set(t());return a(),iD(()=>{const o=()=>Kf.preRender(a,!1,!0),l=r.map(c=>c.on("change",o));return()=>{l.forEach(c=>c()),qM(a)}}),n}function TU(r){mu.current=[],r();const t=oE(mu.current,r);return mu.current=void 0,t}function bU(r,t,n,a){if(typeof r=="function")return TU(r);const o=MU(t,n,a);return Array.isArray(r)?ay(r,o):ay([r],([l])=>o(l))}function ay(r,t){const n=zM(()=>[]);return oE(r,()=>{n.length=0;const a=r.length;for(let o=0;o<a;o++)n[o]=r[o].get();return t(n)})}function AU(r,t={}){const{isStatic:n}=Kt.useContext(sE),a=()=>rE(r)?r.get():r;if(n)return bU(a);const o=Y_(a());return Kt.useInsertionEffect(()=>EU(o,r,t),[o,JSON.stringify(t)]),o}const RU={some:0,all:1};function CU(r,t,{root:n,margin:a,amount:o="some"}={}){const l=vU(r),c=new WeakMap,f=d=>{d.forEach(_=>{const g=c.get(_.target);if(_.isIntersecting!==!!g)if(_.isIntersecting){const v=t(_.target,_);typeof v=="function"?c.set(_.target,v):p.unobserve(_.target)}else typeof g=="function"&&(g(_),c.delete(_.target))})},p=new IntersectionObserver(f,{root:n,rootMargin:a,threshold:typeof o=="number"?o:RU[o]});return l.forEach(d=>p.observe(d)),()=>p.disconnect()}function wU(r,{root:t,margin:n,amount:a,once:o=!1,initial:l=!1}={}){const[c,f]=Kt.useState(l);return Kt.useEffect(()=>{if(!r.current||o&&c)return;const p=()=>(f(!0),o?void 0:()=>f(!1)),d={root:t&&t.current||void 0,margin:n,amount:a};return CU(r.current,p,d)},[t,r,n,o,a]),c}function DU({to:r,from:t=0,direction:n="up",delay:a=0,duration:o=2,className:l="",startWhen:c=!0,separator:f="",suffix:p="",onStart:d,onEnd:_}){const g=Kt.useRef(null),v=Y_(n==="down"?r:t),S=20+40*(1/o),T=100*(1/o),M=AU(v,{damping:S,stiffness:T}),y=wU(g,{once:!0,margin:"0px"}),x=C=>{const R=C.toString();if(R.includes(".")){const P=R.split(".")[1];if(parseInt(P)!==0)return P.length}return 0},D=Math.max(x(t),x(r)),w=Kt.useCallback(C=>{const R=D>0,P={useGrouping:!!f,minimumFractionDigits:R?D:0,maximumFractionDigits:R?D:0},U=Intl.NumberFormat("en-US",P).format(C);return`${f?U.replace(/,/g,f):U}${p}`},[D,f,p]);return Kt.useEffect(()=>{g.current&&(g.current.textContent=w(n==="down"?r:t))},[t,r,n,w]),Kt.useEffect(()=>{if(y&&c){typeof d=="function"&&d();const C=setTimeout(()=>{v.set(n==="down"?t:r)},a*1e3),R=setTimeout(()=>{typeof _=="function"&&_()},a*1e3+o*1e3);return()=>{clearTimeout(C),clearTimeout(R)}}},[y,c,v,n,t,r,a,d,_,o]),Kt.useEffect(()=>{const C=M.on("change",R=>{g.current&&(g.current.textContent=w(R))});return()=>C()},[M,w]),_e.jsx("span",{className:l,ref:g})}const u_=Kt.forwardRef(({customClass:r,...t},n)=>_e.jsx("div",{ref:n,...t,className:`card ${r??""} ${t.className??""}`.trim()}));u_.displayName="Card";const Kp=(r,t,n,a)=>({x:r*t,y:-r*n,z:-r*t*1.5,zIndex:a-r}),UU=(r,t,n)=>el.set(r,{x:t.x,y:t.y,z:t.z,xPercent:-50,yPercent:-50,skewY:n,transformOrigin:"center center",zIndex:t.zIndex,force3D:!0}),LU=({width:r=280,height:t=360,cardDistance:n=40,verticalDistance:a=40,delay:o=5e3,pauseOnHover:l=!1,onCardClick:c,skewAmount:f=6,easing:p="elastic",children:d})=>{const _=p==="elastic"?{ease:"elastic.out(0.6,0.9)",durDrop:2,durMove:2,durReturn:2,promoteOverlap:.9,returnDelay:.05}:{ease:"power1.inOut",durDrop:.8,durMove:.8,durReturn:.8,promoteOverlap:.45,returnDelay:.2},g=Kt.useMemo(()=>Kt.Children.toArray(d),[d]),v=Kt.useMemo(()=>g.map(()=>_1.createRef()),[g.length]),S=Kt.useRef(Array.from({length:g.length},(C,R)=>R)),T=Kt.useRef(null),M=Kt.useRef(),y=Kt.useRef(null),x=Kt.useRef(null);Kt.useEffect(()=>{const C=v.length;v.forEach((P,U)=>UU(P.current,Kp(U,n,a,C),f));const R=(P=!1)=>{if(S.current.length<2)return;T.current&&T.current.isActive()&&T.current.progress(1);const[U,...F]=S.current,b=v[U].current,L=el.timeline();T.current=L,P&&L.timeScale(3),L.to(b,{y:"+=500",duration:_.durDrop,ease:_.ease}),L.addLabel("promote",`-=${_.durDrop*_.promoteOverlap}`),F.forEach((Y,Z)=>{const st=v[Y].current,it=Kp(Z,n,a,v.length);L.set(st,{zIndex:it.zIndex},"promote"),L.to(st,{x:it.x,y:it.y,z:it.z,duration:_.durMove,ease:_.ease},`promote+=${Z*.15}`)});const V=Kp(v.length-1,n,a,v.length);L.addLabel("return",`promote+=${_.durMove*_.returnDelay}`),L.call(()=>{el.set(b,{zIndex:V.zIndex})},void 0,"return"),L.to(b,{x:V.x,y:V.y,z:V.z,duration:_.durReturn,ease:_.ease},"return"),L.call(()=>{S.current=[...F,U]})};if(x.current=R,M.current=window.setInterval(()=>R(!1),o),l){const P=y.current,U=()=>clearInterval(M.current),F=()=>{clearInterval(M.current),M.current=window.setInterval(()=>R(!1),o)};return P.addEventListener("mouseenter",U),P.addEventListener("mouseleave",F),()=>{P.removeEventListener("mouseenter",U),P.removeEventListener("mouseleave",F),clearInterval(M.current)}}return()=>clearInterval(M.current)},[n,a,o,l,f,p,v]);const D=(C,R)=>{C.stopPropagation(),clearInterval(M.current),M.current=window.setInterval(()=>{x.current&&x.current(!1)},o),x.current&&x.current(!0),c&&c(R)},w=g.map((C,R)=>Kt.isValidElement(C)?Kt.cloneElement(C,{key:R,ref:v[R],style:{width:r,height:t,...C.props.style??{}},onClick:P=>{C.props.onClick?.(P),D(P,R)}}):C);return _e.jsx("div",{ref:y,className:"card-swap-container",style:{width:r,height:t},children:w})};function NU(){return _e.jsxs("div",{style:{width:"100vw",height:"100vh",backgroundColor:"#000",position:"relative",overflow:"hidden"},children:[_e.jsx("div",{style:{position:"absolute",inset:0,zIndex:0},children:_e.jsx(F2,{topColor:"#22F565",bottomColor:"#048604",intensity:1.3,rotationSpeed:.6,glowAmount:.002,pillarWidth:3.7,pillarHeight:.4,noiseIntensity:.4,pillarRotation:21,interactive:!1,mixBlendMode:"normal"})}),_e.jsxs("nav",{className:"nav-pill",children:[_e.jsx("div",{className:"logo-container",children:_e.jsx(eD,{text:["Kakapo Labs"],className:"kakapo-title",typingSpeed:100,startDelay:500,cursorCharacter:"█",loop:!1,showCursor:!0,hideCursorOnComplete:!0,as:"div"})}),_e.jsxs("div",{className:"nav-links",children:[_e.jsx("a",{href:"https://discord.gg/QAgEPdVkdS",target:"_blank",rel:"noopener noreferrer",className:"nav-text-btn",style:{textDecoration:"none"},children:"Discord"}),_e.jsx("a",{href:"https://github.com/Kakapo-Labs",target:"_blank",rel:"noopener noreferrer",className:"nav-text-btn",style:{textDecoration:"none"},children:"Github"}),_e.jsx("a",{href:"https://ko-fi.com/kakapolabs",target:"_blank",rel:"noopener noreferrer",className:"nav-text-btn",style:{textDecoration:"none"},children:"Donate"})]})]}),_e.jsxs("div",{className:"main-layout",style:{position:"relative",zIndex:10,pointerEvents:"none"},children:[_e.jsx("div",{className:"layout-left",children:_e.jsxs("div",{className:"hero-container",style:{pointerEvents:"auto"},children:[_e.jsxs("h2",{className:"hero-text",children:["Premium & Open Source,",_e.jsx("br",{}),"Forever."]}),_e.jsxs("div",{className:"glass-pane",children:[_e.jsx("span",{className:"downloads-label",children:"Downloads"}),_e.jsx(DU,{from:0,to:1300,separator:",",direction:"up",duration:2.5,className:"count-up-text",suffix:"+"})]})]})}),_e.jsx("div",{className:"layout-right",style:{pointerEvents:"auto"},children:_e.jsxs(LU,{width:"720px",height:"480px",cardDistance:50,verticalDistance:50,delay:4e3,pauseOnHover:!0,children:[_e.jsxs(u_,{style:{"--card-bg-image":'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("images/examplespoofer.png")'},children:[_e.jsx("h3",{children:_e.jsx("a",{href:"https://github.com/Kakapo-Labs/RL-Spoofer-GUI",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"},children:"RL Name Spoofer"})}),_e.jsx("p",{children:"Name yourself whatever you want, whenever you want!"})]}),_e.jsxs(u_,{style:{"--card-bg-image":'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.95)), url("https://raw.githubusercontent.com/Kakapo-Labs/Website/refs/heads/main/images/alphaloaderexample.png")'},children:[_e.jsx("h3",{children:_e.jsx("a",{href:"https://github.com/Kakapo-Labs/AlphaLoader",target:"_blank",rel:"noopener noreferrer",style:{color:"inherit"},children:"AlphaLoader"})}),_e.jsx("p",{children:"The one-click AlphaConsole mod browser and installer"})]})]})})]})]})}E1.createRoot(document.getElementById("root")).render(_e.jsx(Kt.StrictMode,{children:_e.jsx(NU,{})}));
