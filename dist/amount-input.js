var amountInput=function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=5)}([function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e,n){var r=n(6),o=n(7),i=n(8);t.exports=function(t,e){return r(t)||o(t,e)||i()}},function(t,e,n){var r=n(0);t.exports=function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){r(t,e,n[e])})}return t}},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}t.exports=function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}},function(t,e,n){"use strict";n.r(e),n.d(e,"AmountInput",function(){return d}),n.d(e,"format",function(){return y}),n.d(e,"amountInput",function(){return x});var r=n(1),o=n.n(r),i=n(2),a=n.n(i),u=n(3),c=n.n(u),l=n(4),s=n.n(l),f=n(0),p=n.n(f),d=function(){function t(e){var n=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};c()(this,t),p()(this,"update",function(t){var e=!(1<arguments.length&&void 0!==arguments[1])||arguments[1],r=!(2<arguments.length&&void 0!==arguments[2])||arguments[2],o=n.input,i=n.options,a=i.willAcceptAmount,u=i.onAcceptAmount,c=i.onRejectAmount;a(t)?(n.amount=t,o.value=y(t,i),e&&u(o,t)):r&&c(o,t)}),p()(this,"handleDelete",function(t){var e=t.target,r=t.inputType,o=n.amount,i=n.options;if("deleteContentBackward"===r){var a=m(o,i);0===i.precision?(a=a.substr(0,a.length-3),a+="00"):a=(a=a.substr(0,a.length-1)).padStart(3,"0");var u=b(a,i);n.update(u),w(e)}}),p()(this,"handlePaste",function(t){var e=n.options;t.preventDefault();var r=t.clipboardData,o=t.target,i=h(v(r.getData("Text")),e);isNaN(i)||(n.update(i),w(o))}),p()(this,"handleKeyPress",function(t){var e=n.amount,r=n.options,o=t.which,i=t.keyCode,a=t.target,u=m(e,r),c=String.fromCharCode(i||o);if(t.preventDefault(),navigator.userAgent.match(/firefox/i)&&8===o)n.handleDelete({target:a,inputType:"deleteContentBackward"});else if(c.match(/^[0-9]$/)){var l=b(0===r.precision?u.substr(0,u.length-2)+c+"00":u+c,r);n.update(l),w(a)}else w(a)}),p()(this,"handleEventWithCursorMove",function(t){w(t.target)}),p()(this,"handleKeyDown",function(t){var e=t.key,n=t.ctrlKey;t.metaKey||(e.startsWith("Arrow")&&t.preventDefault(),n&&navigator.platform.startsWith("Mac")&&t.preventDefault())}),p()(this,"handleDblClick",function(t){var e=t.target,n=e.value.length;e.setSelectionRange(0,n)});var o=t.options;this.amount=0,this.input=e,this.options=a()({},o,r)}return s()(t,[{key:"init",value:function(){var t=this.input,e=this.options,n=h(v(t.value),e);isNaN(n)&&(n=0),t.value=y(n,e),this.amount=n,this.update(n),t.addEventListener("input",this.handleDelete),t.addEventListener("paste",this.handlePaste),t.addEventListener("focus",this.handleEventWithCursorMove),t.addEventListener("click",this.handleEventWithCursorMove),t.addEventListener("dblclick",this.handleDblClick),t.addEventListener("keydown",this.handleKeyDown),t.addEventListener("keypress",this.handleKeyPress)}}]),t}();function v(t){var e=(t=t.replace(/[^\d.,]+/g,"")).match(/^([\d,]+)(?:\.(\d+))?$/)||t.match(/^([\d.]+)(?:,(\d+))?$/),n=o()(e,3),r=n[1],i=n[2];if(r=r.replace(/[^\d]+/g,""),i=(i||"0").replace(/[^\d]+/g,""),r)return parseFloat("".concat(r,".").concat(i))}function h(t,e){return parseFloat(t.toFixed(e.precision))}function y(t,e){var n=d.options,r=g(m(t,e=a()({},n,e)),e),i=o()(r,2),u=i[0],c=i[1],l=function(t,e){for(var n=u.split(""),r=[];n.length;){var o=n.splice(-3,3);r.unshift(o.join(""))}return r.join(e.delimiter)}(0,e);return 0<e.precision&&(l+="".concat(e.separator).concat(c)),l}function g(t,e){var n=e.precision||2,r=t.substr(0,t.length-n),o=t.substr(-n);return[r=r.replace(/^0+/g,"").padStart(1,"0"),o=o.padEnd(n,"0")]}function b(t,e){var n=g(t,e),r=o()(n,2),i=r[0],a=r[1];return parseFloat("".concat(i,".").concat(a))}function m(t,e){var n=e.precision;n=n||2;var r=t.toFixed(n).split("."),i=o()(r,2),a=i[0],u=i[1];return u=(u||"0").padEnd(n,"0"),a=(a||"0").padStart(1,"0"),"".concat(a).concat(u)}function w(t){var e=t.value.length;t.setSelectionRange(e,e)}function x(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},n=new d(t,e);return n.init(),n.update}p()(d,"options",{precision:2,separator:".",delimiter:",",willAcceptAmount:function(){return!0},onAcceptAmount:function(){return!0},onRejectAmount:function(){return!0}}),e.default=x},function(t,e){t.exports=function(t){if(Array.isArray(t))return t}},function(t,e){t.exports=function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var a,u=t[Symbol.iterator]();!(r=(a=u.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==u.return||u.return()}finally{if(o)throw i}}return n}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}}]);
//# sourceMappingURL=amount-input.js.map