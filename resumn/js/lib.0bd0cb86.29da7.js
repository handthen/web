"use strict";(self.webpackChunkwebpack=self.webpackChunkwebpack||[]).push([[553],{82960:(r,t,n)=>{n.d(t,{HY:()=>p,Tw:()=>w,Zz:()=>h,y$:()=>a});var e=n(89379);function o(r){return"Minified Redux error #"+r+"; visit https://redux.js.org/Errors?code="+r+" for the full message or use the non-minified dev environment for full errors. "}var i="function"==typeof Symbol&&Symbol.observable||"@@observable",f=function(){return Math.random().toString(36).substring(7).split("").join(".")},u={INIT:"@@redux/INIT"+f(),REPLACE:"@@redux/REPLACE"+f(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+f()}};function c(r){if("object"!=typeof r||null===r)return!1;for(var t=r;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(r)===t}function a(r,t,n){var e;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error(o(0));if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error(o(1));return n(a)(r,t)}if("function"!=typeof r)throw new Error(o(2));var f=r,p=t,h=[],w=h,y=!1;function l(){w===h&&(w=h.slice())}function v(){if(y)throw new Error(o(3));return p}function s(r){if("function"!=typeof r)throw new Error(o(4));if(y)throw new Error(o(5));var t=!0;return l(),w.push(r),function(){if(t){if(y)throw new Error(o(6));t=!1,l();var n=w.indexOf(r);w.splice(n,1),h=null}}}function d(r){if(!c(r))throw new Error(o(7));if(void 0===r.type)throw new Error(o(8));if(y)throw new Error(o(9));try{y=!0,p=f(p,r)}finally{y=!1}for(var t=h=w,n=0;n<t.length;n++){(0,t[n])()}return r}return d({type:u.INIT}),(e={dispatch:d,subscribe:s,getState:v,replaceReducer:function(r){if("function"!=typeof r)throw new Error(o(10));f=r,d({type:u.REPLACE})}})[i]=function(){var r,t=s;return(r={subscribe:function(r){if("object"!=typeof r||null===r)throw new Error(o(11));function n(){r.next&&r.next(v())}return n(),{unsubscribe:t(n)}}})[i]=function(){return this},r},e}function p(r){for(var t=Object.keys(r),n={},e=0;e<t.length;e++){var i=t[e];0,"function"==typeof r[i]&&(n[i]=r[i])}var f,c=Object.keys(n);try{!function(r){Object.keys(r).forEach((function(t){var n=r[t];if(void 0===n(void 0,{type:u.INIT}))throw new Error(o(12));if(void 0===n(void 0,{type:u.PROBE_UNKNOWN_ACTION()}))throw new Error(o(13))}))}(n)}catch(r){f=r}return function(r,t){if(void 0===r&&(r={}),f)throw f;for(var e=!1,i={},u=0;u<c.length;u++){var a=c[u],p=n[a],h=r[a],w=p(h,t);if(void 0===w){t&&t.type;throw new Error(o(14))}i[a]=w,e=e||w!==h}return(e=e||c.length!==Object.keys(r).length)?i:r}}function h(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return 0===t.length?function(r){return r}:1===t.length?t[0]:t.reduce((function(r,t){return function(){return r(t.apply(void 0,arguments))}}))}function w(){for(var r=arguments.length,t=new Array(r),n=0;n<r;n++)t[n]=arguments[n];return function(r){return function(){var n=r.apply(void 0,arguments),i=function(){throw new Error(o(15))},f={getState:n.getState,dispatch:function(){return i.apply(void 0,arguments)}},u=t.map((function(r){return r(f)}));return i=h.apply(void 0,u)(n.dispatch),(0,e.A)((0,e.A)({},n),{},{dispatch:i})}}}}}]);