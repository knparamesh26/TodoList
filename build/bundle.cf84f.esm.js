!function(e){function t(o){if(n[o])return n[o].exports;var _=n[o]={i:o,l:!1,exports:{}};return e[o].call(_.exports,_,_.exports,t),_.l=!0,_.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,o){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:o})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(t.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var _ in e)t.d(o,_,function(t){return e[t]}.bind(null,_));return o},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s="mdyV")}({"868p":function(e,t,n){"use strict";(function(e){var o=n("lUZQ");t.a=function({todo:t,dispatch:n,update:_}){const r={textDecoration:t.complete?"line-through":"none"};return e("div",{class:"element"},e("input",{type:"checkbox",onClick:()=>n({type:o.a.CHECKED_TODO,payload:{id:t.id}})},"Checked"),e("span",{style:r},t.task),e("div",{class:"btn-wrapper"},e("button",{class:"btn edit",onClick:()=>{n({type:o.a.DELETE_TODO,payload:{id:t.id}}),_(t.task)}},"✎"),e("button",{class:"btn wrong",onClick:()=>{n({type:o.a.DELETE_TODO,payload:{id:t.id}})}},"✖")))}}).call(this,n("hosL").h)},QRet:function(e,t,n){"use strict";function o(e,t){d.options.__h&&d.options.__h(s,e,h||t),h=0;var n=s.__H||(s.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:v}),n.__[e]}function _(e){return h=1,r(c,e)}function r(e,t,n){var _=o(a++,2);return _.t=e,_.__c||(_.__=[n?n(t):c(void 0,t),function(e){var t=_.t(_.__[0],e);_.__[0]!==t&&(_.__=[t,_.__[1]],_.__c.setState({}))}],_.__c=s),_.__}function i(){for(var e;e=y.shift();)if(e.__P)try{e.__H.__h.forEach(l),e.__H.__h.forEach(u),e.__H.__h=[]}catch(t){e.__H.__h=[],d.options.__e(t,e.__v)}}function l(e){var t=s,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),s=t}function u(e){var t=s;e.__c=e.__(),s=t}function c(e,t){return"function"==typeof t?t(e):t}n.d(t,"b",(function(){return _})),n.d(t,"a",(function(){return r}));var a,s,f,p,d=n("hosL"),h=0,y=[],v=[],m=d.options.__b,b=d.options.__r,g=d.options.diffed,k=d.options.__c,O=d.options.unmount;d.options.__b=function(e){s=null,m&&m(e)},d.options.__r=function(e){b&&b(e),a=0;var t=(s=e.__c).__H;t&&(f===s?(t.__h=[],s.__h=[],t.__.forEach((function(e){e.__V=v,e.u=void 0}))):(t.__h.forEach(l),t.__h.forEach(u),t.__h=[])),f=s},d.options.diffed=function(e){g&&g(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==y.push(t)&&p===d.options.requestAnimationFrame||((p=d.options.requestAnimationFrame)||function(e){var t,n=function(){clearTimeout(o),E&&cancelAnimationFrame(t),setTimeout(e)},o=setTimeout(n,100);E&&(t=requestAnimationFrame(n))})(i)),t.__H.__.forEach((function(e){e.u&&(e.__H=e.u),e.__V!==v&&(e.__=e.__V),e.u=void 0,e.__V=v}))),f=s=null},d.options.__c=function(e,t){t.some((function(e){try{e.__h.forEach(l),e.__h=e.__h.filter((function(e){return!e.__||u(e)}))}catch(n){t.some((function(e){e.__h&&(e.__h=[])})),t=[],d.options.__e(n,e.__v)}})),k&&k(e,t)},d.options.unmount=function(e){O&&O(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{l(e)}catch(e){t=e}})),t&&d.options.__e(t,n.__v))};var E="function"==typeof requestAnimationFrame},QfWi:function(e,t,n){"use strict";n.r(t);var o=n("SE09");t.default=o.a},SE09:function(e,t,n){"use strict";(function(e){function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){const[t,n]=Object(u.a)(s,[]),[o,_]=Object(u.b)("");return Object(l.h)(e,null,Object(l.h)("div",{class:"container"},Object(l.h)("h1",null,"Todo List"),Object(l.h)("form",{onSubmit:function(e){e.preventDefault(),n({type:a.a.ADD_TODO,payload:{task:o}}),_("")}},Object(l.h)("input",{class:"rect-box",type:"text",value:o,onInput:e=>_(e.target.value)}))),Object(l.h)("ul",null,t&&t.map(((e,t)=>Object(l.h)(c.a,{todo:e,dispatch:n,update:_,key:t})))))}n.d(t,"a",(function(){return i}));var l=n("hosL"),u=n("QRet"),c=n("868p"),a=n("lUZQ");const s=(e,t)=>{switch(t.type){case a.a.ADD_TODO:return[...e,{id:Date.now(),task:t.payload.task,complete:!1}];case a.a.DELETE_TODO:return e.filter((e=>e.id!==t.payload.id));case a.a.CHECKED_TODO:return e.map((e=>e.id===t.payload.id?_(_({},e),{},{complete:!e.complete}):e));default:console.log("Wrong action!!!")}}}).call(this,n("hosL").Fragment)},hosL:function(e,t,n){"use strict";function o(e,t){for(var n in t)e[n]=t[n];return e}function _(e){var t=e.parentNode;t&&t.removeChild(e)}function r(e,t,n){var o,_,r,l={};for(r in t)"key"==r?o=t[r]:"ref"==r?_=t[r]:l[r]=t[r];if(arguments.length>2&&(l.children=arguments.length>3?A.call(arguments,2):n),"function"==typeof e&&null!=e.defaultProps)for(r in e.defaultProps)void 0===l[r]&&(l[r]=e.defaultProps[r]);return i(e,l,o,_,null)}function i(e,t,n,o,_){var r={type:e,props:t,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==_?++L:_};return null==_&&null!=H.vnode&&H.vnode(r),r}function l(){return{current:null}}function u(e){return e.children}function c(e,t){this.props=e,this.context=t}function a(e,t){if(null==t)return e.__?a(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?a(e):null}function s(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return s(e)}}function f(e){(!e.__d&&(e.__d=!0)&&W.push(e)&&!p.__r++||M!==H.debounceRendering)&&((M=H.debounceRendering)||setTimeout)(p)}function p(){for(var e;p.__r=W.length;)e=W.sort((function(e,t){return e.__v.__b-t.__v.__b})),W=[],e.some((function(e){var t,n,_,r,i,l;e.__d&&(i=(r=(t=e).__v).__e,(l=t.__P)&&(n=[],(_=o({},r)).__v=r.__v+1,O(l,r,_,t.__n,void 0!==l.ownerSVGElement,null!=r.__h?[i]:null,n,null==i?a(r):i,r.__h),E(n,r),r.__e!=i&&s(r)))}))}function d(e,t,n,o,_,r,l,c,s,f){var p,d,y,m,b,g,k,E=o&&o.__k||R,D=E.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?i(null,m,null,null,m):Array.isArray(m)?i(u,{children:m},null,null,null):m.__b>0?i(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=E[p])||y&&m.key==y.key&&m.type===y.type)E[p]=void 0;else for(d=0;d<D;d++){if((y=E[d])&&m.key==y.key&&m.type===y.type){E[d]=void 0;break}y=null}O(e,m,y=y||N,_,r,l,c,s,f),b=m.__e,(d=m.ref)&&y.ref!=d&&(k||(k=[]),y.ref&&k.push(y.ref,null,m),k.push(d,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=s=h(m,s,e):s=v(e,m,y,E,b,s),"function"==typeof n.type&&(n.__d=s)):s&&y.__e==s&&s.parentNode!=e&&(s=a(y))}for(n.__e=g,p=D;p--;)null!=E[p]&&("function"==typeof n.type&&null!=E[p].__e&&E[p].__e==n.__d&&(n.__d=a(o,p+1)),T(E[p],E[p]));if(k)for(p=0;p<k.length;p++)C(k[p],k[++p],k[++p])}function h(e,t,n){for(var o,_=e.__k,r=0;_&&r<_.length;r++)(o=_[r])&&(o.__=e,t="function"==typeof o.type?h(o,t,n):v(n,o,o,_,o.__e,t));return t}function y(e,t){return t=t||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some((function(e){y(e,t)})):t.push(e)),t}function v(e,t,n,o,_,r){var i,l,u;if(void 0!==t.__d)i=t.__d,t.__d=void 0;else if(null==n||_!=r||null==_.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(_),i=null;else{for(l=r,u=0;(l=l.nextSibling)&&u<o.length;u+=2)if(l==_)break e;e.insertBefore(_,r),i=r}return void 0!==i?i:_.nextSibling}function m(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||V.test(t)?n:n+"px"}function b(e,t,n,o,_){var r;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||m(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||m(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?o||e.addEventListener(t,r?k:g,r):e.removeEventListener(t,r?k:g,r);else if("dangerouslySetInnerHTML"!==t){if(_)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function g(e){this.l[e.type+!1](H.event?H.event(e):e)}function k(e){this.l[e.type+!0](H.event?H.event(e):e)}function O(e,t,n,_,r,i,l,a,s){var f,p,h,y,v,m,b,g,k,O,E,C,T,P=t.type;if(void 0!==t.constructor)return null;null!=n.__h&&(s=n.__h,a=t.__e=n.__e,t.__h=null,i=[a]),(f=H.__b)&&f(t);try{e:if("function"==typeof P){if(g=t.props,k=(f=P.contextType)&&_[f.__c],O=f?k?k.props.value:f.__:_,n.__c?b=(p=t.__c=n.__c).__=p.__E:("prototype"in P&&P.prototype.render?t.__c=p=new P(g,O):(t.__c=p=new c(g,O),p.constructor=P,p.render=x),k&&k.sub(p),p.props=g,p.state||(p.state={}),p.context=O,p.__n=_,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=P.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=o({},p.__s)),o(p.__s,P.getDerivedStateFromProps(g,p.__s))),y=p.props,v=p.state,h)null==P.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==y&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(g,O),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(g,p.__s,O)||t.__v===n.__v){p.props=g,p.state=p.__s,t.__v!==n.__v&&(p.__d=!1),p.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach((function(e){e&&(e.__=t)})),p.__h.length&&l.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(g,p.__s,O),null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(y,v,m)}))}if(p.context=O,p.props=g,p.__v=t,p.__P=e,E=H.__r,C=0,"prototype"in P&&P.prototype.render)p.state=p.__s,p.__d=!1,E&&E(t),f=p.render(p.props,p.state,p.context);else do{p.__d=!1,E&&E(t),f=p.render(p.props,p.state,p.context),p.state=p.__s}while(p.__d&&++C<25);p.state=p.__s,null!=p.getChildContext&&(_=o(o({},_),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(y,v)),T=null!=f&&f.type===u&&null==f.key?f.props.children:f,d(e,Array.isArray(T)?T:[T],t,n,_,r,i,l,a,s),p.base=t.__e,t.__h=null,p.__h.length&&l.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==i&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=D(n.__e,t,n,_,r,i,l,s);(f=H.diffed)&&f(t)}catch(e){t.__v=null,(s||null!=i)&&(t.__e=a,t.__h=!!s,i[i.indexOf(a)]=null),H.__e(e,t,n)}}function E(e,t){H.__c&&H.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t)}))}catch(e){H.__e(e,t.__v)}}))}function D(e,t,n,o,r,i,l,u){var c,s,f,p=n.props,h=t.props,y=t.type,v=0;if("svg"===y&&(r=!0),null!=i)for(;v<i.length;v++)if((c=i[v])&&"setAttribute"in c==!!y&&(y?c.localName===y:3===c.nodeType)){e=c,i[v]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),i=null,u=!1}if(null===y)p===h||u&&e.data===h||(e.data=h);else{if(i=i&&A.call(e.childNodes),s=(p=n.props||N).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!u){if(null!=i)for(p={},v=0;v<e.attributes.length;v++)p[e.attributes[v].name]=e.attributes[v].value;(f||s)&&(f&&(s&&f.__html==s.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,o,_){var r;for(r in n)"children"===r||"key"===r||r in t||b(e,r,null,n[r],o);for(r in t)_&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||b(e,r,t[r],n[r],o)}(e,h,p,r,u),f)t.__k=[];else if(v=t.props.children,d(e,Array.isArray(v)?v:[v],t,n,o,r&&"foreignObject"!==y,i,l,i?i[0]:n.__k&&a(n,0),u),null!=i)for(v=i.length;v--;)null!=i[v]&&_(i[v]);u||("value"in h&&void 0!==(v=h.value)&&(v!==e.value||"progress"===y&&!v||"option"===y&&v!==p.value)&&b(e,"value",v,p.value,!1),"checked"in h&&void 0!==(v=h.checked)&&v!==e.checked&&b(e,"checked",v,p.checked,!1))}return e}function C(e,t,n){try{"function"==typeof e?e(t):e.current=t}catch(e){H.__e(e,n)}}function T(e,t,n){var o,r;if(H.unmount&&H.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||C(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){H.__e(e,t)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&T(o[r],t,"function"!=typeof e.type);n||null==e.__e||_(e.__e),e.__e=e.__d=void 0}function x(e,t,n){return this.constructor(e,n)}function P(e,t,n){var o,_,i;H.__&&H.__(e,t),_=(o="function"==typeof n)?null:n&&n.__k||t.__k,i=[],O(t,e=(!o&&n||t).__k=r(u,null,[e]),_||N,N,void 0!==t.ownerSVGElement,!o&&n?[n]:_?null:t.firstChild?A.call(t.childNodes):null,i,!o&&n?n:_?_.__e:t.firstChild,o),E(i,e)}function S(e,t){P(e,t,S)}function j(e,t,n){var _,r,l,u=o({},e.props);for(l in t)"key"==l?_=t[l]:"ref"==l?r=t[l]:u[l]=t[l];return arguments.length>2&&(u.children=arguments.length>3?A.call(arguments,2):n),i(e.type,u,_||e.key,r||e.ref,null)}function w(e,t){var n={__c:t="__cC"+F++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,o;return this.getChildContext||(n=[],(o={})[t]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.some(f)},this.sub=function(e){n.push(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n.splice(n.indexOf(e),1),t&&t.call(e)}}),e.children}};return n.Provider.__=n.Consumer.contextType=n}n.r(t),n.d(t,"render",(function(){return P})),n.d(t,"hydrate",(function(){return S})),n.d(t,"createElement",(function(){return r})),n.d(t,"h",(function(){return r})),n.d(t,"Fragment",(function(){return u})),n.d(t,"createRef",(function(){return l})),n.d(t,"isValidElement",(function(){return U})),n.d(t,"Component",(function(){return c})),n.d(t,"cloneElement",(function(){return j})),n.d(t,"createContext",(function(){return w})),n.d(t,"toChildArray",(function(){return y})),n.d(t,"options",(function(){return H}));var A,H,L,U,W,M,F,N={},R=[],V=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;A=R.slice,H={__e:function(e,t,n,o){for(var _,r,i;t=t.__;)if((_=t.__c)&&!_.__)try{if((r=_.constructor)&&null!=r.getDerivedStateFromError&&(_.setState(r.getDerivedStateFromError(e)),i=_.__d),null!=_.componentDidCatch&&(_.componentDidCatch(e,o||{}),i=_.__d),i)return _.__E=_}catch(t){e=t}throw e}},L=0,U=function(e){return null!=e&&void 0===e.constructor},c.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=o({},this.state),"function"==typeof e&&(e=e(o({},n),this.props)),e&&o(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),f(this))},c.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),f(this))},c.prototype.render=u,W=[],p.__r=0,F=0},lUZQ:function(e,t){"use strict";t.a={ADD_TODO:"add",DELETE_TODO:"delete",UPDATE_TODO:"update",CHECKED_TODO:"check"}},mdyV:function(e,t,n){"use strict";n.r(t);var o=n("hosL");const{h:_,render:r,hydrate:i}=o,l=e=>e&&e.default?e.default:e,u=e=>"/"===e[e.length-1]?e:e+"/";if("serviceWorker"in navigator&&navigator.serviceWorker.register(u(n.p)+"sw-esm.js"),"function"==typeof l(n("QfWi"))){let e=document.getElementById("preact_root")||document.body.firstElementChild,t=()=>{let t=l(n("QfWi")),o={};const c=document.querySelector('[type="__PREACT_CLI_DATA__"]');c&&(o=JSON.parse(decodeURI(c.innerHTML)).preRenderData||o);const a={preRenderData:o},s=o.url?u(o.url):"";(i&&s===u(location.pathname)?i:r)(_(t,{CLI_DATA:a}),document.body,e)};0,t()}}});
//# sourceMappingURL=bundle.cf84f.esm.js.map