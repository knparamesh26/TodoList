!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:r})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(r,o,function(e){return t[e]}.bind(null,o));return r},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s="mdyV")}({"868p":function(t,e,n){"use strict";(function(t){var r=n("lUZQ");e.a=function(e){var n=e.todo,o=e.dispatch,_=e.update,i={textDecoration:n.complete?"line-through":"none"};return t("div",{class:"element"},t("input",{type:"checkbox",onClick:function(){return o({type:r.a.CHECKED_TODO,payload:{id:n.id}})}},"Checked"),t("span",{style:i},n.task),t("div",{class:"btn-wrapper"},t("button",{class:"btn edit",onClick:function(){o({type:r.a.DELETE_TODO,payload:{id:n.id}}),_(n.task)}},"✎"),t("button",{class:"btn wrong",onClick:function(){o({type:r.a.DELETE_TODO,payload:{id:n.id}})}},"✖")))}}).call(this,n("hosL").h)},QRet:function(t,e,n){"use strict";function r(t,e){d.options.__h&&d.options.__h(f,t,h||e),h=0;var n=f.__H||(f.__H={__:[],__h:[]});return t>=n.__.length&&n.__.push({__V:v}),n.__[t]}function o(t){return h=1,_(c,t)}function _(t,e,n){var o=r(a++,2);return o.t=t,o.__c||(o.__=[n?n(e):c(void 0,e),function(t){var e=o.t(o.__[0],t);o.__[0]!==e&&(o.__=[e,o.__[1]],o.__c.setState({}))}],o.__c=f),o.__}function i(){for(var t;t=y.shift();)if(t.__P)try{t.__H.__h.forEach(u),t.__H.__h.forEach(l),t.__H.__h=[]}catch(e){t.__H.__h=[],d.options.__e(e,t.__v)}}function u(t){var e=f,n=t.__c;"function"==typeof n&&(t.__c=void 0,n()),f=e}function l(t){var e=f;t.__c=t.__(),f=e}function c(t,e){return"function"==typeof e?e(t):e}n.d(e,"b",(function(){return o})),n.d(e,"a",(function(){return _}));var a,f,s,p,d=n("hosL"),h=0,y=[],v=[],m=d.options.__b,b=d.options.__r,g=d.options.diffed,k=d.options.__c,O=d.options.unmount;d.options.__b=function(t){f=null,m&&m(t)},d.options.__r=function(t){b&&b(t),a=0;var e=(f=t.__c).__H;e&&(s===f?(e.__h=[],f.__h=[],e.__.forEach((function(t){t.__V=v,t.u=void 0}))):(e.__h.forEach(u),e.__h.forEach(l),e.__h=[])),s=f},d.options.diffed=function(t){g&&g(t);var e=t.__c;e&&e.__H&&(e.__H.__h.length&&(1!==y.push(e)&&p===d.options.requestAnimationFrame||((p=d.options.requestAnimationFrame)||function(t){var e,n=function(){clearTimeout(r),E&&cancelAnimationFrame(e),setTimeout(t)},r=setTimeout(n,100);E&&(e=requestAnimationFrame(n))})(i)),e.__H.__.forEach((function(t){t.u&&(t.__H=t.u),t.__V!==v&&(t.__=t.__V),t.u=void 0,t.__V=v}))),s=f=null},d.options.__c=function(t,e){e.some((function(t){try{t.__h.forEach(u),t.__h=t.__h.filter((function(t){return!t.__||l(t)}))}catch(n){e.some((function(t){t.__h&&(t.__h=[])})),e=[],d.options.__e(n,t.__v)}})),k&&k(t,e)},d.options.unmount=function(t){O&&O(t);var e,n=t.__c;n&&n.__H&&(n.__H.__.forEach((function(t){try{u(t)}catch(t){e=t}})),e&&d.options.__e(e,n.__v))};var E="function"==typeof requestAnimationFrame},QfWi:function(t,e,n){"use strict";n.r(e);var r=n("SE09");e.default=r.a},SE09:function(t,e,n){"use strict";(function(t){function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==n)return;var r,o,_=[],i=!0,u=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(_.push(r.value),!e||_.length!==e);i=!0);}catch(t){u=!0,o=t}finally{try{i||null==n.return||n.return()}finally{if(u)throw o}}return _}(t,e)||l(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||l(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){if(t){if("string"==typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function a(){var e=r(Object(s.a)(h,[]),2),n=e[0],o=e[1],_=r(Object(s.b)(""),2),i=_[0],u=_[1];return Object(f.h)(t,null,Object(f.h)("div",{class:"container"},Object(f.h)("h1",null,"Todo List"),Object(f.h)("form",{onSubmit:function(t){t.preventDefault(),o({type:d.a.ADD_TODO,payload:{task:i}}),u("")}},Object(f.h)("input",{class:"rect-box",type:"text",value:i,onInput:function(t){return u(t.target.value)}}))),Object(f.h)("ul",null,n&&n.map((function(t,e){return Object(f.h)(p.a,{todo:t,dispatch:o,update:u,key:e})}))))}n.d(e,"a",(function(){return a}));var f=n("hosL"),s=n("QRet"),p=n("868p"),d=n("lUZQ"),h=function(t,e){switch(e.type){case d.a.ADD_TODO:return[].concat(u(t),[{id:Date.now(),task:e.payload.task,complete:!1}]);case d.a.DELETE_TODO:return t.filter((function(t){return t.id!==e.payload.id}));case d.a.CHECKED_TODO:return t.map((function(t){return t.id===e.payload.id?_(_({},t),{},{complete:!t.complete}):t}));default:console.log("Wrong action!!!")}}}).call(this,n("hosL").Fragment)},hosL:function(t,e,n){"use strict";function r(t,e){for(var n in e)t[n]=e[n];return t}function o(t){var e=t.parentNode;e&&e.removeChild(t)}function _(t,e,n){var r,o,_,u={};for(_ in e)"key"==_?r=e[_]:"ref"==_?o=e[_]:u[_]=e[_];if(arguments.length>2&&(u.children=arguments.length>3?P.call(arguments,2):n),"function"==typeof t&&null!=t.defaultProps)for(_ in t.defaultProps)void 0===u[_]&&(u[_]=t.defaultProps[_]);return i(t,u,r,o,null)}function i(t,e,n,r,o){var _={type:t,props:e,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++L:o};return null==o&&null!=H.vnode&&H.vnode(_),_}function u(){return{current:null}}function l(t){return t.children}function c(t,e){this.props=t,this.context=e}function a(t,e){if(null==e)return t.__?a(t.__,t.__.__k.indexOf(t)+1):null;for(var n;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e)return n.__e;return"function"==typeof t.type?a(t):null}function f(t){var e,n;if(null!=(t=t.__)&&null!=t.__c){for(t.__e=t.__c.base=null,e=0;e<t.__k.length;e++)if(null!=(n=t.__k[e])&&null!=n.__e){t.__e=t.__c.base=n.__e;break}return f(t)}}function s(t){(!t.__d&&(t.__d=!0)&&W.push(t)&&!p.__r++||M!==H.debounceRendering)&&((M=H.debounceRendering)||setTimeout)(p)}function p(){for(var t;p.__r=W.length;)t=W.sort((function(t,e){return t.__v.__b-e.__v.__b})),W=[],t.some((function(t){var e,n,o,_,i,u;t.__d&&(i=(_=(e=t).__v).__e,(u=e.__P)&&(n=[],(o=r({},_)).__v=_.__v+1,O(u,_,o,e.__n,void 0!==u.ownerSVGElement,null!=_.__h?[i]:null,n,null==i?a(_):i,_.__h),E(n,_),_.__e!=i&&f(_)))}))}function d(t,e,n,r,o,_,u,c,f,s){var p,d,y,m,b,g,k,E=r&&r.__k||N,D=E.length;for(n.__k=[],p=0;p<e.length;p++)if(null!=(m=n.__k[p]=null==(m=e[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(l,{children:m},null,null,null):m.__b>0?i(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=E[p])||y&&m.key==y.key&&m.type===y.type)E[p]=void 0;else for(d=0;d<D;d++){if((y=E[d])&&m.key==y.key&&m.type===y.type){E[d]=void 0;break}y=null}O(t,m,y=y||F,o,_,u,c,f,s),b=m.__e,(d=m.ref)&&y.ref!=d&&(k||(k=[]),y.ref&&k.push(y.ref,null,m),k.push(d,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=f=h(m,f,t):f=v(t,m,y,E,b,f),"function"==typeof n.type&&(n.__d=f)):f&&y.__e==f&&f.parentNode!=t&&(f=a(y))}for(n.__e=g,p=D;p--;)null!=E[p]&&("function"==typeof n.type&&null!=E[p].__e&&E[p].__e==n.__d&&(n.__d=a(r,p+1)),T(E[p],E[p]));if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function h(t,e,n){for(var r,o=t.__k,_=0;o&&_<o.length;_++)(r=o[_])&&(r.__=t,e="function"==typeof r.type?h(r,e,n):v(n,r,r,o,r.__e,e));return e}function y(t,e){return e=e||[],null==t||"boolean"==typeof t||(Array.isArray(t)?t.some((function(t){y(t,e)})):e.push(t)),e}function v(t,e,n,r,o,_){var i,u,l;if(void 0!==e.__d)i=e.__d,e.__d=void 0;else if(null==n||o!=_||null==o.parentNode)t:if(null==_||_.parentNode!==t)t.appendChild(o),i=null;else{for(u=_,l=0;(u=u.nextSibling)&&l<r.length;l+=2)if(u==o)break t;t.insertBefore(o,_),i=_}return void 0!==i?i:o.nextSibling}function m(t,e,n){"-"===e[0]?t.setProperty(e,n):t[e]=null==n?"":"number"!=typeof n||R.test(e)?n:n+"px"}function b(t,e,n,r,o){var _;t:if("style"===e)if("string"==typeof n)t.style.cssText=n;else{if("string"==typeof r&&(t.style.cssText=r=""),r)for(e in r)n&&e in n||m(t.style,e,"");if(n)for(e in n)r&&n[e]===r[e]||m(t.style,e,n[e])}else if("o"===e[0]&&"n"===e[1])_=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in t?e.toLowerCase().slice(2):e.slice(2),t.l||(t.l={}),t.l[e+_]=n,n?r||t.addEventListener(e,_?k:g,_):t.removeEventListener(e,_?k:g,_);else if("dangerouslySetInnerHTML"!==e){if(o)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==e&&"list"!==e&&"form"!==e&&"tabIndex"!==e&&"download"!==e&&e in t)try{t[e]=null==n?"":n;break t}catch(t){}"function"==typeof n||(null!=n&&(!1!==n||"a"===e[0]&&"r"===e[1])?t.setAttribute(e,n):t.removeAttribute(e))}}function g(t){this.l[t.type+!1](H.event?H.event(t):t)}function k(t){this.l[t.type+!0](H.event?H.event(t):t)}function O(t,e,n,o,_,i,u,a,f){var s,p,h,y,v,m,b,g,k,O,E,C,T,A=e.type;if(void 0!==e.constructor)return null;null!=n.__h&&(f=n.__h,a=e.__e=n.__e,e.__h=null,i=[a]),(s=H.__b)&&s(e);try{t:if("function"==typeof A){if(g=e.props,k=(s=A.contextType)&&o[s.__c],O=s?k?k.props.value:s.__:o,n.__c?b=(p=e.__c=n.__c).__=p.__E:("prototype"in A&&A.prototype.render?e.__c=p=new A(g,O):(e.__c=p=new c(g,O),p.constructor=A,p.render=S),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=r({},p.__s)),r(p.__s,A.getDerivedStateFromProps(g,p.__s))),y=p.props,v=p.state,h)null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==A.getDerivedStateFromProps&&g!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||e.__v===n.__v){p.props=g,p.state=p.__s,e.__v!==n.__v&&(p.__d=!1),p.__v=e,e.__e=n.__e,e.__k=n.__k,e.__k.forEach((function(t){t&&(t.__=e)})),p.__h.length&&u.push(p);break t}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,v,m)}))}if(p.context=O,p.props=g,p.__v=e,p.__P=t,E=H.__r,C=0,"prototype"in A&&A.prototype.render)p.state=p.__s,p.__d=!1,E&&E(e),s=p.render(p.props,p.state,p.context);else do{p.__d=!1,E&&E(e),s=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++C<25);p.state=p.__s,null!=p.getChildContext&&(o=r(r({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(y,v)),T=null!=s&&s.type===l&&null==s.key?s.props.children:s,d(t,Array.isArray(T)?T:[T],e,n,o,_,i,u,a,f),p.base=e.__e,e.__h=null,p.__h.length&&u.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==i&&e.__v===n.__v?(e.__k=n.__k,e.__e=n.__e):e.__e=D(n.__e,e,n,o,_,i,u,f);(s=H.diffed)&&s(e)}catch(t){e.__v=null,(f||null!=i)&&(e.__e=a,e.__h=!!f,i[i.indexOf(a)]=null),H.__e(t,e,n)}}function E(t,e){H.__c&&H.__c(e,t),t.some((function(e){try{t=e.__h,e.__h=[],t.some((function(t){t.call(e)}))}catch(t){H.__e(t,e.__v)}}))}function D(t,e,n,r,_,i,u,l){var c,f,s,p=n.props,h=e.props,y=e.type,v=0;if("svg"===y&&(_=!0),null!=i)for(;v<i.length;v++)if((c=i[v])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){t=c,i[v]=null;break}if(null==t){if(null===y)return document.createTextNode(h);t=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),i=null,l=!1}if(null===y)p===h||l&&t.data===h||(t.data=h);else{if(i=i&&P.call(t.childNodes),f=(p=n.props||F).dangerouslySetInnerHTML,s=h.dangerouslySetInnerHTML,!l){if(null!=i)for(p={},v=0;v<t.attributes.length;v++)p[t.attributes[v].name]=t.attributes[v].value;(s||f)&&(s&&(f&&s.__html==f.__html||s.__html===t.innerHTML)||(t.innerHTML=s&&s.__html||""))}if(function(t,e,n,r,o){var _;for(_ in n)"children"===_||"key"===_||_ in e||b(t,_,null,n[_],r);for(_ in e)o&&"function"!=typeof e[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===e[_]||b(t,_,e[_],n[_],r)}(t,h,p,_,l),s)e.__k=[];else if(v=e.props.children,d(t,Array.isArray(v)?v:[v],e,n,r,_&&"foreignObject"!==y,i,u,i?i[0]:n.__k&&a(n,0),l),null!=i)for(v=i.length;v--;)null!=i[v]&&o(i[v]);l||("value"in h&&void 0!==(v=h.value)&&(v!==t.value||"progress"===y&&!v||"option"===y&&v!==p.value)&&b(t,"value",v,p.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==t.checked&&b(t,"checked",v,p.checked,!1))}return t}function C(t,e,n){try{"function"==typeof t?t(e):t.current=e}catch(t){H.__e(t,n)}}function T(t,e,n){var r,_;if(H.unmount&&H.unmount(t),(r=t.ref)&&(r.current&&r.current!==t.__e||C(r,null,e)),null!=(r=t.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(t){H.__e(t,e)}r.base=r.__P=null}if(r=t.__k)for(_=0;_<r.length;_++)r[_]&&T(r[_],e,"function"!=typeof t.type);n||null==t.__e||o(t.__e),t.__e=t.__d=void 0}function S(t,e,n){return this.constructor(t,n)}function A(t,e,n){var r,o,i;H.__&&H.__(t,e),o=(r="function"==typeof n)?null:n&&n.__k||e.__k,i=[],O(e,t=(!r&&n||e).__k=_(l,null,[t]),o||F,F,void 0!==e.ownerSVGElement,!r&&n?[n]:o?null:e.firstChild?P.call(e.childNodes):null,i,!r&&n?n:o?o.__e:e.firstChild,r),E(i,t)}function j(t,e){A(t,e,j)}function w(t,e,n){var o,_,u,l=r({},t.props);for(u in e)"key"==u?o=e[u]:"ref"==u?_=e[u]:l[u]=e[u];return arguments.length>2&&(l.children=arguments.length>3?P.call(arguments,2):n),i(t.type,l,o||t.key,_||t.ref,null)}function x(t,e){var n={__c:e="__cC"+I++,__:t,Consumer:function(t,e){return t.children(e)},Provider:function(t){var n,r;return this.getChildContext||(n=[],(r={})[e]=this,this.getChildContext=function(){return r},this.shouldComponentUpdate=function(t){this.props.value!==t.value&&n.some(s)},this.sub=function(t){n.push(t);var e=t.componentWillUnmount;t.componentWillUnmount=function(){n.splice(n.indexOf(t),1),e&&e.call(t)}}),t.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(e),n.d(e,"render",(function(){return A})),n.d(e,"hydrate",(function(){return j})),n.d(e,"createElement",(function(){return _})),n.d(e,"h",(function(){return _})),n.d(e,"Fragment",(function(){return l})),n.d(e,"createRef",(function(){return u})),n.d(e,"isValidElement",(function(){return U})),n.d(e,"Component",(function(){return c})),n.d(e,"cloneElement",(function(){return w})),n.d(e,"createContext",(function(){return x})),n.d(e,"toChildArray",(function(){return y})),n.d(e,"options",(function(){return H}));var P,H,L,U,W,M,I,F={},N=[],R=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;P=N.slice,H={__e:function(t,e,n,r){for(var o,_,i;e=e.__;)if((o=e.__c)&&!o.__)try{if((_=o.constructor)&&null!=_.getDerivedStateFromError&&(o.setState(_.getDerivedStateFromError(t)),i=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(t,r||{}),i=o.__d),i)return o.__E=o}catch(e){t=e}throw t}},L=0,U=function(t){return null!=t&&void 0===t.constructor},c.prototype.setState=function(t,e){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=r({},this.state),"function"==typeof t&&(t=t(r({},n),this.props)),t&&r(n,t),null!=t&&this.__v&&(e&&this.__h.push(e),s(this))},c.prototype.forceUpdate=function(t){this.__v&&(this.__e=!0,t&&this.__h.push(t),s(this))},c.prototype.render=l,W=[],p.__r=0,I=0},lUZQ:function(t,e){"use strict";e.a={ADD_TODO:"add",DELETE_TODO:"delete",UPDATE_TODO:"update",CHECKED_TODO:"check"}},mdyV:function(t,e,n){"use strict";n.r(e);var r=n("hosL"),o=r.h,_=r.render,i=r.hydrate,u=function(t){return t&&t.default?t.default:t},l=function(t){return"/"===t[t.length-1]?t:t+"/"};if("serviceWorker"in navigator&&navigator.serviceWorker.register(l(n.p)+"sw.js"),"function"==typeof u(n("QfWi"))){var c=document.getElementById("preact_root")||document.body.firstElementChild;0,function(){var t=u(n("QfWi")),e={},r=document.querySelector('[type="__PREACT_CLI_DATA__"]');r&&(e=JSON.parse(decodeURI(r.innerHTML)).preRenderData||e);var a={preRenderData:e},f=e.url?l(e.url):"";(i&&f===l(location.pathname)?i:_)(o(t,{CLI_DATA:a}),document.body,c)}()}}});
//# sourceMappingURL=bundle.ca944.js.map