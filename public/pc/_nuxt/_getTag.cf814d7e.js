import{aX as o,aY as i,aZ as $,a_ as k,a$ as T,b0 as d,ar as M,b1 as s,b2 as P,b3 as c}from"./entry.49b00e51.js";var A=o(i,"WeakMap");const g=A;var j=$(Object.keys,Object);const C=j;var K=Object.prototype,V=K.hasOwnProperty;function x(r){if(!k(r))return C(r);var t=[];for(var e in Object(r))V.call(r,e)&&e!="constructor"&&t.push(e);return t}function D(r){return T(r)?d(r):x(r)}function W(r,t){for(var e=-1,a=t.length,u=r.length;++e<a;)r[u+e]=t[e];return r}function G(r,t){for(var e=-1,a=r==null?0:r.length,u=0,f=[];++e<a;){var b=r[e];t(b,e,r)&&(f[u++]=b)}return f}function I(){return[]}var E=Object.prototype,L=E.propertyIsEnumerable,y=Object.getOwnPropertySymbols,B=y?function(r){return r==null?[]:(r=Object(r),G(y(r),function(t){return L.call(r,t)}))}:I;const F=B;function N(r,t,e){var a=t(r);return M(r)?a:W(a,e(r))}function U(r){return N(r,D,F)}var X=o(i,"DataView");const l=X;var Y=o(i,"Promise");const p=Y;var Z=o(i,"Set");const v=Z;var w="[object Map]",_="[object Object]",m="[object Promise]",S="[object Set]",h="[object WeakMap]",O="[object DataView]",q=s(l),z=s(c),H=s(p),J=s(v),Q=s(g),n=P;(l&&n(new l(new ArrayBuffer(1)))!=O||c&&n(new c)!=w||p&&n(p.resolve())!=m||v&&n(new v)!=S||g&&n(new g)!=h)&&(n=function(r){var t=P(r),e=t==_?r.constructor:void 0,a=e?s(e):"";if(a)switch(a){case q:return O;case z:return w;case H:return m;case J:return S;case Q:return h}return t});const rr=n;export{W as a,N as b,rr as c,U as d,F as g,D as k,I as s};