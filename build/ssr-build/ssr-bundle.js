module.exports=function(t){var n={};function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(n){return t[n]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/",e(e.s="QfWi")}({"868p":function(t,n,e){"use strict";(function(t){var r=e("lUZQ");n.a=function(n){var e=n.todo,o=n.dispatch,i=n.update,u={textDecoration:e.complete?"line-through":"none"};return t("div",{class:"element"},t("input",{type:"checkbox",onClick:function(){return o({type:r.a.CHECKED_TODO,payload:{id:e.id}})}},"Checked"),t("span",{style:u},e.task),t("div",{class:"btn-wrapper"},t("button",{class:"btn edit",onClick:function(){o({type:r.a.DELETE_TODO,payload:{id:e.id}}),i(e.task)}},"✎"),t("button",{class:"btn wrong",onClick:function(){o({type:r.a.DELETE_TODO,payload:{id:e.id}})}},"✖")))}}).call(this,e("HteQ").h)},HteQ:function(t,n){t.exports=require("preact")},QRet:function(t,n,e){"use strict";e.d(n,"b",(function(){return b})),e.d(n,"a",(function(){return O}));var r,o,i,u,c=e("HteQ"),a=0,_=[],f=[],l=c.options.__b,s=c.options.__r,p=c.options.diffed,d=c.options.__c,y=c.options.unmount;function h(t,n){c.options.__h&&c.options.__h(o,t,a||n),a=0;var e=o.__H||(o.__H={__:[],__h:[]});return t>=e.__.length&&e.__.push({__V:f}),e.__[t]}function b(t){return a=1,O(D,t)}function O(t,n,e){var i=h(r++,2);return i.t=t,i.__c||(i.__=[e?e(n):D(void 0,n),function(t){var n=i.t(i.__[0],t);i.__[0]!==n&&(i.__=[n,i.__[1]],i.__c.setState({}))}],i.__c=o),i.__}function m(){for(var t;t=_.shift();)if(t.__P)try{t.__H.__h.forEach(E),t.__H.__h.forEach(j),t.__H.__h=[]}catch(n){t.__H.__h=[],c.options.__e(n,t.__v)}}c.options.__b=function(t){o=null,l&&l(t)},c.options.__r=function(t){s&&s(t),r=0;var n=(o=t.__c).__H;n&&(i===o?(n.__h=[],o.__h=[],n.__.forEach((function(t){t.__V=f,t.u=void 0}))):(n.__h.forEach(E),n.__h.forEach(j),n.__h=[])),i=o},c.options.diffed=function(t){p&&p(t);var n=t.__c;n&&n.__H&&(n.__H.__h.length&&(1!==_.push(n)&&u===c.options.requestAnimationFrame||((u=c.options.requestAnimationFrame)||function(t){var n,e=function(){clearTimeout(r),v&&cancelAnimationFrame(n),setTimeout(t)},r=setTimeout(e,100);v&&(n=requestAnimationFrame(e))})(m)),n.__H.__.forEach((function(t){t.u&&(t.__H=t.u),t.__V!==f&&(t.__=t.__V),t.u=void 0,t.__V=f}))),i=o=null},c.options.__c=function(t,n){n.some((function(t){try{t.__h.forEach(E),t.__h=t.__h.filter((function(t){return!t.__||j(t)}))}catch(e){n.some((function(t){t.__h&&(t.__h=[])})),n=[],c.options.__e(e,t.__v)}})),d&&d(t,n)},c.options.unmount=function(t){y&&y(t);var n,e=t.__c;e&&e.__H&&(e.__H.__.forEach((function(t){try{E(t)}catch(t){n=t}})),n&&c.options.__e(n,e.__v))};var v="function"==typeof requestAnimationFrame;function E(t){var n=o,e=t.__c;"function"==typeof e&&(t.__c=void 0,e()),o=n}function j(t){var n=o;t.__c=t.__(),o=n}function D(t,n){return"function"==typeof n?n(t):n}},QfWi:function(t,n,e){"use strict";e.r(n);var r=e("SE09");n.default=r.a},SE09:function(t,n,e){"use strict";(function(t){e.d(n,"a",(function(){return y}));var r=e("HteQ"),o=e("QRet"),i=e("868p"),u=e("lUZQ");function c(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==e)return;var r,o,i=[],u=!0,c=!1;try{for(e=e.call(t);!(u=(r=e.next()).done)&&(i.push(r.value),!n||i.length!==n);u=!0);}catch(t){c=!0,o=t}finally{try{u||null==e.return||e.return()}finally{if(c)throw o}}return i}(t,n)||s(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){f(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function f(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t){return function(t){if(Array.isArray(t))return p(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||s(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(t,n){if(t){if("string"==typeof t)return p(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?p(t,n):void 0}}function p(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}var d=function(t,n){switch(n.type){case u.a.ADD_TODO:return[].concat(l(t),[{id:Date.now(),task:n.payload.task,complete:!1}]);case u.a.DELETE_TODO:return t.filter((function(t){return t.id!==n.payload.id}));case u.a.CHECKED_TODO:return t.map((function(t){return t.id===n.payload.id?_(_({},t),{},{complete:!t.complete}):t}));default:console.log("Wrong action!!!")}};function y(){var n=c(Object(o.a)(d,[]),2),e=n[0],a=n[1],_=c(Object(o.b)(""),2),f=_[0],l=_[1];return Object(r.h)(t,null,Object(r.h)("div",{class:"container"},Object(r.h)("h1",null,"Todo List"),Object(r.h)("form",{onSubmit:function(t){t.preventDefault(),a({type:u.a.ADD_TODO,payload:{task:f}}),l("")}},Object(r.h)("input",{class:"rect-box",type:"text",value:f,onInput:function(t){return l(t.target.value)}}))),Object(r.h)("ul",null,e&&e.map((function(t,n){return Object(r.h)(i.a,{todo:t,dispatch:a,update:l,key:n})}))))}}).call(this,e("HteQ").Fragment)},lUZQ:function(t,n,e){"use strict";n.a={ADD_TODO:"add",DELETE_TODO:"delete",UPDATE_TODO:"update",CHECKED_TODO:"check"}}});
//# sourceMappingURL=ssr-bundle.js.map