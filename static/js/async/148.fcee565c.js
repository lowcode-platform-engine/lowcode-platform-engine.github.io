"use strict";(self.webpackChunklowcode_platform_docs=self.webpackChunklowcode_platform_docs||[]).push([["148"],{2763:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{COMPONENT_APP_UMD:function(){return COMPONENT_APP_UMD},COMPONENT_APP_VERSION_DEFAULT:function(){return COMPONENT_APP_VERSION_DEFAULT},LoadService:function(){return LoadService},default:function(){return __WEBPACK_DEFAULT_EXPORT__}});var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3062);let COMPONENT_APP_UMD="MyLib",COMPONENT_APP_VERSION_DEFAULT="1.0.0",CACHE_LOAD_MAP=new Map,CACHE_CSS_MAP=new Map;class LoadService{importScript(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{format:n="UMD"}=this.options;return"UMD"===n?this.importScriptUmdVersion2(t,e):"ES"===n?this.importScriptEs(t):void 0}importScriptEs(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(t=>t.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmd(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(t=>t.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmdVersion2(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((n,r)=>{let o=document.querySelector(`script[src="${t}"]`),i=(t,e)=>{let n="load"===t.type?"ready":"error";null==e||e.setAttribute("data-status",n)};if(o)"ready"===(o.getAttribute("data-status")||"ready")?n(o):(o.addEventListener("load",t=>{i(t,o),n(o)}),o.addEventListener("error",t=>{i(t,o),r(t)}));else{let o=document.createElement("script");o.src=t,Object.keys(e).forEach(t=>{o[t]=e[t]}),o.setAttribute("data-status","loading"),document.body.appendChild(o),o.addEventListener("load",t=>{i(t,o),n(o)}),o.addEventListener("error",t=>{i(t,o),r(t)})}})}cssToDom(t){let e=document.createElement("style");return e.textContent=t,e}importStyle(t){return new Promise(async(e,n)=>{try{let n="";if(CACHE_CSS_MAP.get(t))n=CACHE_CSS_MAP.get(t);else{let e=await fetch(t);n=await e.text(),CACHE_CSS_MAP.set(t,n)}e(this.cssToDom(n))}catch(t){n(t)}})}constructor(t){(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"url",""),(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"options",{componentName:COMPONENT_APP_UMD,version:COMPONENT_APP_VERSION_DEFAULT}),this.options=t}}let __WEBPACK_DEFAULT_EXPORT__={LoadService,CACHE_CSS_MAP,CACHE_LOAD_MAP,COMPONENT_APP_UMD,COMPONENT_APP_VERSION_DEFAULT}},3062:function(t,e,n){n.d(e,{_:function(){return r}});function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}}}]);