define(["ui","alpaca","jquery"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){var r;void 0===(r=function(e){n(2)}.call(t,n,t,e))||(e.exports=r)},function(e,t,n){var r;void 0===(r=function(e,t,r){var o=n(3),u=n(4);return n(5),o.registerField("theme-id",u.Fields.TextField.extend({setup:function(){this.base(),this.options.validator=function(e){e("test"==this.getValue()?{status:!1,message:"The value of 'test' is invalid"}:{status:!0})}}}))}.call(t,n,t,e))||(e.exports=r)},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n}])}));