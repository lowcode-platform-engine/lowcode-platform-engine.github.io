"use strict";(self.webpackChunklowcode_platform_docs=self.webpackChunklowcode_platform_docs||[]).push([["585"],{3730:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var r=n(2676),i=n(453),o=n(7554);function a(e){return(0,r.jsx)(o.default,{})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,i.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(a,e)})):a(e)}let s=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["schema%2Findex.mdx"]={toc:[],title:"",frontmatter:{navbar:!0,sidebar:!1,outline:!1,footer:!1}}},7554:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var r=n(2676),i=n(2669);n(9041);var o=n(5271),a=n(2763);let l={js:"/playground/index.umd.js",css:"/playground/style.css"},s={js:"/playground/index.umd.js",css:"/playground/style.css"},d=`
/**
 * @Component CommonHeader
 * @name common-header
 * @title 测试组件
 */
export default interface CommonHeaderIProps {
  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name?: string;
  
  /**
   * 复选框
   *
   * @title 复选框
   * @type string
   * @widget checkbox
   * @default ['1']
   */
  checkbox?: TestSelectValue[];
  
  
  /**
   * 图片选择
   *
   * @title 图片选择
   * @type string
   * @format image
   * @default https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg
   */
  image?: string

  /**
   * 日期选择器
   *
   * @title 日期选择器
   * @type string
   * @format date
   * @default 2021-03-23
   */
  date?: string;

  /**
   * 时间选择器
   *
   * @title 时间选择器
   * @type string
   * @format time
   * @default 12:23:24
   */
  time?: string;

  /**
   * 日期时间选择器
   *
   * @title 日期时间选择器
   * @type string
   * @format dateTime
   * @default 2021-03-23 12:23:24
   */
  dateTime?: string;

  /**
   * 颜色
   *
   * @title 颜色
   * @type string
   * @format color
   * @default #000000
   */
  color?: string;

  /**
   * 年龄
   *
   * @title 年龄
   * @minimum 0
   * @maximum 100
   * @type number
   */
  age?: number;

  /**
   * 开关
   *
   * @title 开关
   * @type boolean
   * @default true
   */
  switch: boolean;

  /**
   * 下拉选择
   *
   * @title 下拉选择单选
   * @type string
   */
  selectVal?: TestSelectValue;

  /**
   * 下拉多选择
   *
   * @title 下拉选多择单选
   * @type string
   */
  selectMulVal?: TestSelectValue[];


  /**
   * 对象配置
   *
   * @title 测试对象配置
   * @type string
   */
  objVal?: TestObj;

  /**
   * 对象集合配置
   *
   * @title 对象集合配置
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
   * 年龄
   *
   * @title 年龄
   * @minimum 0
   * @maximum 100
   * @type number
   */
  age?: number;
}


/**
 * 测试字段
 * @title 测试字段
 */
interface TestObj {
  /**
   * 名称
   *
   * @title 名称
   * @type string
   * @default 测试
   */
  name?: string;

  /**
   * 日期选择器
   *
   * @title 日期选择器
   * @type string
   * @format date
   * @default 2021-03-23
   */
  date?: string;
}
`,c=()=>location.host.includes("localhost")||location.host.includes("127.0.0.1"),u=()=>{let[e,t]=(0,o.useState)(!0),[n,u]=(0,o.useState)(null);(0,o.useEffect)(()=>{(async()=>{try{let e=c()?l:s,t=new a.LoadService({enableSandbox:!0}),n=await t.importScript(e.js);if(console.log(n),!document.querySelector("#playgroundStyle")){let n=await t.importStyle(e.css);console.log(n),n.id="playgroundStyle",document.querySelector("body").appendChild(n)}console.log(window)}catch(e){u(e),console.log(e)}t(!1)})()},[]);let m=()=>{let{ReactDOM:e,React:t,SchemaOnLinePlayground:n}=window;e.createRoot(document.getElementById("playgroundView")).render(t.createElement(n.SchemaPreviewOnline,{height:"calc(100vh - 72px)",defaultSchema:d}))},p=(0,o.useMemo)(()=>!e&&!n,[e,n]);return((0,o.useEffect)(()=>{console.log("mounted",p),p&&setTimeout(()=>{m()})},[p]),p)?(0,r.jsx)("div",{className:"playgroundView",children:(0,r.jsx)("div",{id:"playgroundView"})}):(0,r.jsx)(i.Z,{className:"loading",spinning:!0})}},2763:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{COMPONENT_APP_UMD:function(){return COMPONENT_APP_UMD},COMPONENT_APP_VERSION_DEFAULT:function(){return COMPONENT_APP_VERSION_DEFAULT},LoadService:function(){return LoadService},default:function(){return __WEBPACK_DEFAULT_EXPORT__}});var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3062);let COMPONENT_APP_UMD="MyLib",COMPONENT_APP_VERSION_DEFAULT="1.0.0",CACHE_LOAD_MAP=new Map,CACHE_CSS_MAP=new Map;class LoadService{importScript(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{format:n="UMD"}=this.options;return"UMD"===n?this.importScriptUmdVersion2(e,t):"ES"===n?this.importScriptEs(e):void 0}importScriptEs(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(e=>e.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmd(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(e=>e.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmdVersion2(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((n,r)=>{let i=document.querySelector(`script[src="${e}"]`),o=(e,t)=>{let n="load"===e.type?"ready":"error";null==t||t.setAttribute("data-status",n)};if(i)"ready"===(i.getAttribute("data-status")||"ready")?n(i):(i.addEventListener("load",e=>{o(e,i),n(i)}),i.addEventListener("error",e=>{o(e,i),r(e)}));else{let i=document.createElement("script");i.src=e,Object.keys(t).forEach(e=>{i[e]=t[e]}),i.setAttribute("data-status","loading"),document.body.appendChild(i),i.addEventListener("load",e=>{o(e,i),n(i)}),i.addEventListener("error",e=>{o(e,i),r(e)})}})}cssToDom(e){let t=document.createElement("style");return t.textContent=e,t}importStyle(e){return new Promise(async(t,n)=>{try{let n="";if(CACHE_CSS_MAP.get(e))n=CACHE_CSS_MAP.get(e);else{let t=await fetch(e);n=await t.text(),CACHE_CSS_MAP.set(e,n)}t(this.cssToDom(n))}catch(e){n(e)}})}constructor(e){(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"url",""),(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"options",{componentName:COMPONENT_APP_UMD,version:COMPONENT_APP_VERSION_DEFAULT}),this.options=e}}let __WEBPACK_DEFAULT_EXPORT__={LoadService,CACHE_CSS_MAP,CACHE_LOAD_MAP,COMPONENT_APP_UMD,COMPONENT_APP_VERSION_DEFAULT}}}]);