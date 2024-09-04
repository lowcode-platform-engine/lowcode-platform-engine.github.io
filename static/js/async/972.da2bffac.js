"use strict";(self.webpackChunklowcode_platform_docs=self.webpackChunklowcode_platform_docs||[]).push([["972"],{7554:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var i=n(2676),o=n(5944);n(4938);var r=n(5271),l=n(2763);let s={js:"/playground/index.umd.js",css:"/playground/style.css"},a={js:"/playground/index.umd.js",css:"/playground/style.css"},d=`
/**
 * @Component CommonHeader
 * @name common-header
 * @title \u{6D4B}\u{8BD5}\u{7EC4}\u{4EF6}
 */
export default interface CommonHeaderIProps {
  /**
   * \u{540D}\u{79F0}
   *
   * @title \u{540D}\u{79F0}
   * @type string
   * @default \u{6D4B}\u{8BD5}
   */
  name?: string;
  
  /**
   * \u{590D}\u{9009}\u{6846}
   *
   * @title \u{590D}\u{9009}\u{6846}
   * @type string
   * @widget checkbox
   * @default ['1']
   */
  checkbox?: TestSelectValue[];
  
  
  /**
   * \u{56FE}\u{7247}\u{9009}\u{62E9}
   *
   * @title \u{56FE}\u{7247}\u{9009}\u{62E9}
   * @type string
   * @format image
   * @default https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg
   */
  image?: string

  /**
   * \u{65E5}\u{671F}\u{9009}\u{62E9}\u{5668}
   *
   * @title \u{65E5}\u{671F}\u{9009}\u{62E9}\u{5668}
   * @type string
   * @format date
   * @default 2021-03-23
   */
  date?: string;

  /**
   * \u{65F6}\u{95F4}\u{9009}\u{62E9}\u{5668}
   *
   * @title \u{65F6}\u{95F4}\u{9009}\u{62E9}\u{5668}
   * @type string
   * @format time
   * @default 12:23:24
   */
  time?: string;

  /**
   * \u{65E5}\u{671F}\u{65F6}\u{95F4}\u{9009}\u{62E9}\u{5668}
   *
   * @title \u{65E5}\u{671F}\u{65F6}\u{95F4}\u{9009}\u{62E9}\u{5668}
   * @type string
   * @format dateTime
   * @default 2021-03-23 12:23:24
   */
  dateTime?: string;

  /**
   * \u{989C}\u{8272}
   *
   * @title \u{989C}\u{8272}
   * @type string
   * @format color
   * @default #000000
   */
  color?: string;

  /**
   * \u{5E74}\u{9F84}
   *
   * @title \u{5E74}\u{9F84}
   * @minimum 0
   * @maximum 100
   * @type number
   */
  age?: number;

  /**
   * \u{5F00}\u{5173}
   *
   * @title \u{5F00}\u{5173}
   * @type boolean
   * @default true
   */
  switch: boolean;

  /**
   * \u{4E0B}\u{62C9}\u{9009}\u{62E9}
   *
   * @title \u{4E0B}\u{62C9}\u{9009}\u{62E9}\u{5355}\u{9009}
   * @type string
   */
  selectVal?: TestSelectValue;

  /**
   * \u{4E0B}\u{62C9}\u{591A}\u{9009}\u{62E9}
   *
   * @title \u{4E0B}\u{62C9}\u{9009}\u{591A}\u{62E9}\u{5355}\u{9009}
   * @type string
   */
  selectMulVal?: TestSelectValue[];


  /**
   * \u{5BF9}\u{8C61}\u{914D}\u{7F6E}
   *
   * @title \u{6D4B}\u{8BD5}\u{5BF9}\u{8C61}\u{914D}\u{7F6E}
   * @type string
   */
  objVal?: TestObj;

  /**
   * \u{5BF9}\u{8C61}\u{96C6}\u{5408}\u{914D}\u{7F6E}
   *
   * @title \u{5BF9}\u{8C61}\u{96C6}\u{5408}\u{914D}\u{7F6E}
   * @minItems 1
   * @maxItems 3
   * @type string
   */
  arrayObjVal?: TestObj[];
}

// @ts-ignore
enum TestSelectValue {
  test1 = '1',
  test2 = '2',
  test3 = '3',
}
interface Age {

  /**
   * \u{5E74}\u{9F84}
   *
   * @title \u{5E74}\u{9F84}
   * @minimum 0
   * @maximum 100
   * @type number
   */
  age?: number;
}


/**
 * \u{6D4B}\u{8BD5}\u{5B57}\u{6BB5}
 * @title \u{6D4B}\u{8BD5}\u{5B57}\u{6BB5}
 */
interface TestObj {
  /**
   * \u{540D}\u{79F0}
   *
   * @title \u{540D}\u{79F0}
   * @type string
   * @default \u{6D4B}\u{8BD5}
   */
  name?: string;

  /**
   * \u{65E5}\u{671F}\u{9009}\u{62E9}\u{5668}
   *
   * @title \u{65E5}\u{671F}\u{9009}\u{62E9}\u{5668}
   * @type string
   * @format date
   * @default 2021-03-23
   */
  date?: string;
}
`,c=()=>location.host.includes("localhost")||location.host.includes("127.0.0.1"),u=()=>{let[e,t]=(0,r.useState)(!0),[n,u]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{try{let e=c()?s:a,t=new l.LoadService({enableSandbox:!0}),n=await t.importScript(e.js);if(console.log(n),!document.querySelector("#playgroundStyle")){let n=await t.importStyle(e.css);console.log(n),n.id="playgroundStyle",document.querySelector("body").appendChild(n)}console.log(window)}catch(e){u(e),console.log(e)}t(!1)})()},[]);let m=()=>{let{ReactDOM:e,React:t,SchemaOnLinePlayground:n}=window;e.createRoot(document.getElementById("playgroundView")).render(t.createElement(n.SchemaPreviewOnline,{height:"calc(100vh - 72px)",defaultSchema:d}))},p=(0,r.useMemo)(()=>!e&&!n,[e,n]);return((0,r.useEffect)(()=>{console.log("mounted",p),p&&setTimeout(()=>{m()})},[p]),p)?(0,i.jsx)("div",{className:"playgroundView",children:(0,i.jsx)("div",{id:"playgroundView"})}):(0,i.jsx)(o.Z,{className:"loading",spinning:!0})}},2763:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{COMPONENT_APP_UMD:function(){return COMPONENT_APP_UMD},COMPONENT_APP_VERSION_DEFAULT:function(){return COMPONENT_APP_VERSION_DEFAULT},LoadService:function(){return LoadService},default:function(){return __WEBPACK_DEFAULT_EXPORT__}});var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6056);let COMPONENT_APP_UMD="MyLib",COMPONENT_APP_VERSION_DEFAULT="1.0.0",CACHE_LOAD_MAP=new Map,CACHE_CSS_MAP=new Map;class LoadService{importScript(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{format:n="UMD"}=this.options;return"UMD"===n?this.importScriptUmdVersion2(e,t):"ES"===n?this.importScriptEs(e):void 0}importScriptEs(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(e=>e.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmd(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(e=>e.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmdVersion2(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((n,i)=>{let o=document.querySelector(`script[src="${e}"]`),r=(e,t)=>{let n="load"===e.type?"ready":"error";null==t||t.setAttribute("data-status",n)};if(o)"ready"===(o.getAttribute("data-status")||"ready")?n(o):(o.addEventListener("load",e=>{r(e,o),n(o)}),o.addEventListener("error",e=>{r(e,o),i(e)}));else{let o=document.createElement("script");o.src=e,Object.keys(t).forEach(e=>{o[e]=t[e]}),o.setAttribute("data-status","loading"),document.body.appendChild(o),o.addEventListener("load",e=>{r(e,o),n(o)}),o.addEventListener("error",e=>{r(e,o),i(e)})}})}cssToDom(e){let t=document.createElement("style");return t.textContent=e,t}importStyle(e){return new Promise(async(t,n)=>{try{let n="";if(CACHE_CSS_MAP.get(e))n=CACHE_CSS_MAP.get(e);else{let t=await fetch(e);n=await t.text(),CACHE_CSS_MAP.set(e,n)}t(this.cssToDom(n))}catch(e){n(e)}})}constructor(e){(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"url",""),(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"options",{componentName:COMPONENT_APP_UMD,version:COMPONENT_APP_VERSION_DEFAULT}),this.options=e}}let __WEBPACK_DEFAULT_EXPORT__={LoadService,CACHE_CSS_MAP,CACHE_LOAD_MAP,COMPONENT_APP_UMD,COMPONENT_APP_VERSION_DEFAULT}}}]);