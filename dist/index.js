"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(n){throw (e=0, n)}};};var s=f(function(F,o){
var t=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist');function y(r,e,n){return t(r)||t(e)||t(n)||e<=0||n<=0||r<0||r>1?NaN:r===0?0:r===1?1/0:e*v(r/(1-r),1/n)}o.exports=y
});var q=f(function(O,c){
var N=require('@stdlib/utils-constant-function/dist'),u=require('@stdlib/math-base-assert-is-nan/dist'),x=require('@stdlib/math-base-special-pow/dist');function w(r,e){if(u(r)||u(e)||r<=0||e<=0)return N(NaN);return n;function n(i){return u(i)||i<0||i>1?NaN:i===0?0:i===1?1/0:r*x(i/(1-i),1/e)}}c.exports=w
});var I=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),a=s(),d=q();I(a,"factory",d);module.exports=a;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
