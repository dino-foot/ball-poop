parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"tyFz":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Fragment=k,exports.SVGNamespace=void 0,exports.className=w,exports.jsxs=exports.jsx=exports.h=exports.createElement=O,exports.createFactory=C,exports.useRef=exports.createRef=u,exports.default=void 0,exports.isRef=f,exports.useCallback=exports.memo=t,exports.preventDefault=N,exports.stopPropagation=D,exports.useClassList=E,exports.useMemo=p,exports.useText=P;const e=Object.keys;function t(e){return e}function n(e){return"boolean"==typeof e}function r(e){return e&&"number"==typeof e.nodeType}function o(e){return"string"==typeof e}function s(e){return"number"==typeof e}function a(e){return"object"==typeof e?null!==e:i(e)}function i(e){return"function"==typeof e}function c(e){return a(e)&&"number"==typeof e.length&&"number"!=typeof e.nodeType}function l(t,n){if(t)for(const r of e(t))n(t[r],r)}function u(){return Object.seal({current:null})}function f(e){return a(e)&&"current"in e}function p(e){return e()}const d={animationIterationCount:0,borderImageOutset:0,borderImageSlice:0,borderImageWidth:0,boxFlex:0,boxFlexGroup:0,boxOrdinalGroup:0,columnCount:0,columns:0,flex:0,flexGrow:0,flexPositive:0,flexShrink:0,flexNegative:0,flexOrder:0,gridArea:0,gridRow:0,gridRowEnd:0,gridRowSpan:0,gridRowStart:0,gridColumn:0,gridColumnEnd:0,gridColumnSpan:0,gridColumnStart:0,fontWeight:0,lineClamp:0,lineHeight:0,opacity:0,order:0,orphans:0,tabSize:0,widows:0,zIndex:0,zoom:0,fillOpacity:0,floodOpacity:0,stopOpacity:0,strokeDasharray:0,strokeDashoffset:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0};function m(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}const x=["Webkit","ms","Moz","O"];e(d).forEach(e=>{x.forEach(t=>{d[m(t,e)]=0})});const g="http://www.w3.org/2000/svg";exports.SVGNamespace=g;const h="http://www.w3.org/1999/xlink",y="http://www.w3.org/XML/1998/namespace";function v(e){return!n(e)&&null!=e}function w(t){return Array.isArray(t)?t.map(w).filter(Boolean).join(" "):a(t)?e(t).filter(e=>t[e]).join(" "):v(t)?""+t:""}const b={animate:0,circle:0,clipPath:0,defs:0,desc:0,ellipse:0,feBlend:0,feColorMatrix:0,feComponentTransfer:0,feComposite:0,feConvolveMatrix:0,feDiffuseLighting:0,feDisplacementMap:0,feDistantLight:0,feFlood:0,feFuncA:0,feFuncB:0,feFuncG:0,feFuncR:0,feGaussianBlur:0,feImage:0,feMerge:0,feMergeNode:0,feMorphology:0,feOffset:0,fePointLight:0,feSpecularLighting:0,feSpotLight:0,feTile:0,feTurbulence:0,filter:0,foreignObject:0,g:0,image:0,line:0,linearGradient:0,marker:0,mask:0,metadata:0,path:0,pattern:0,polygon:0,polyline:0,radialGradient:0,rect:0,stop:0,svg:0,switch:0,symbol:0,text:0,textPath:0,tspan:0,use:0,view:0};function C(e){return O.bind(null,e)}function k(e){const t=document.createDocumentFragment();return L(e.children,t),t}function O(e,t,...n){let r;return(o(t)||Array.isArray(t))&&(n.unshift(t),t={}),(t=t||{}).namespaceURI||0!==b[e]||(t={...t,namespaceURI:g}),null==t.children||n.length||({children:n,...t}=t),o(e)?(F(t,r=t.namespaceURI?document.createElementNS(t.namespaceURI,e):document.createElement(e)),S(n,r)):i(e)&&(a(e.defaultProps)&&(t={...e.defaultProps,...t}),r=e({...t,children:n})),f(t.ref)?t.ref.current=r:i(t.ref)&&t.ref(r),r}function S(e,t){c(e)?L(e,t):o(e)||s(e)?R(document.createTextNode(e),t):null===e?R(document.createComment(""),t):r(e)&&R(e,t)}function L(e,t){for(const n of e)S(n,t);return t}function R(e,t){t instanceof window.HTMLTemplateElement?t.content.appendChild(e):t.appendChild(e)}function T(e){return e.replace(/[A-Z\d]/g,e=>":"+e.toLowerCase())}function M(e,t,n){switch(e){case"xlinkActuate":case"xlinkArcrole":case"xlinkHref":case"xlinkRole":case"xlinkShow":case"xlinkTitle":case"xlinkType":return void A(n,h,T(e),t);case"xmlnsXlink":return void j(n,T(e),t);case"xmlBase":case"xmlLang":case"xmlSpace":return void A(n,y,T(e),t)}switch(e){case"htmlFor":return void j(n,"for",t);case"dataset":return void l(t,(e,t)=>{null!=e&&(n.dataset[t]=e)});case"innerHTML":case"innerText":case"textContent":return void(n[e]=t);case"spellCheck":return void(n.spellcheck=t);case"class":case"className":return void(i(t)?t(n):j(n,"class",w(t)));case"ref":case"namespaceURI":return;case"style":if(a(t))return void l(t,(e,t)=>{s(e)&&0!==d[t]?n.style[t]=e+"px":n.style[t]=e})}if(i(t)){if("o"===e[0]&&"n"===e[1]){const r=e.toLowerCase();null==n[r]?n[r]=t:n.addEventListener(e,t)}}else!0===t?j(n,e,""):!1!==t&&null!=t&&j(n,e,t)}function j(e,t,n){e.setAttribute(t,n)}function A(e,t,n,r){e.setAttributeNS(t,n,r)}function F(t,n){for(const r of e(t))M(r,t[r],n);return n}function P(e){const t=new Text;function n(e){t.textContent=e}return Object.defineProperty(t,"toString",{value(){return this.textContent}}),null!=e&&n(e),[t,n]}function E(e){const t=document.createElement("div");null!=e&&(t.className=w(e));let n=t.classList;function r(e){e.className=n.value,n=e.classList}return Object.defineProperties(r,Object.getOwnPropertyDescriptors({get size(){return n.length},get value(){return n.value},add(...e){n.add(...e)},remove(...e){n.remove(...e)},toggle(e,t){n.toggle(e,t)},contains:e=>n.contains(e)})),r}var I={createElement:O,Fragment:k};function N(e){return e.preventDefault(),e}function D(e){return e.stopPropagation(),e}var G=I;exports.default=G;
},{}],"X3Ut":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=r(require("jsx-dom"));function t(e){if("function"!=typeof WeakMap)return null;var r=new WeakMap,n=new WeakMap;return(t=function(e){return e?n:r})(e)}function r(e,r){if(!r&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=t(r);if(n&&n.has(e))return n.get(e);var o={},u=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var f=u?Object.getOwnPropertyDescriptor(e,a):null;f&&(f.get||f.set)?Object.defineProperty(o,a,f):o[a]=e[a]}return o.default=e,n&&n.set(e,o),o}window.React=e;var n=e;exports.default=n;
},{"jsx-dom":"tyFz"}]},{},["X3Ut"], null)
//# sourceMappingURL=/ball-poop/jsx-dom-shim.e4cfc052.js.map