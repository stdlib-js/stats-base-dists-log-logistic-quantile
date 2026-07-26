"use strict";var f=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(i){throw (e=0, i)}};};var s=f(function(O,o){
var n=require('@stdlib/math-base-assert-is-nan/dist'),v=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/constants-float64-pinf/dist');function y(r,e,i){return n(r)||n(e)||n(i)||e<=0||i<=0||r<0||r>1?NaN:r===0?0:r===1?N:e*v(r/(1-r),1/i)}o.exports=y
});var a=f(function(R,q){
var x=require('@stdlib/utils-constant-function/dist'),t=require('@stdlib/math-base-assert-is-nan/dist'),F=require('@stdlib/math-base-special-pow/dist'),w=require('@stdlib/constants-float64-pinf/dist');function I(r,e){if(t(r)||t(e)||r<=0||e<=0)return x(NaN);return i;function i(u){return t(u)||u<0||u>1?NaN:u===0?0:u===1?w:r*F(u/(1-u),1/e)}}q.exports=I
});var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=s(),d=a();P(c,"factory",d);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
