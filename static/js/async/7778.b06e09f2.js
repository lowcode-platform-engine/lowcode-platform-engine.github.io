"use strict";(self.webpackChunklowcode_platform_docs=self.webpackChunklowcode_platform_docs||[]).push([["7778"],{3533:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(2676),a=n(453),i=n(7554);function l(e){return(0,r.jsx)(i.default,{})}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,a.ah)(),e.components);return t?(0,r.jsx)(t,Object.assign({},e,{children:(0,r.jsx)(l,e)})):l(e)}let d=o;o.__RSPRESS_PAGE_META={},o.__RSPRESS_PAGE_META["schema%2Findex.mdx"]={toc:[],title:"",frontmatter:{navbar:!0,sidebar:!1,outline:!1,footer:!1}}},7554:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(2676),a=n(2669);n(4435);var i=n(5271),l=n(8630);let o=`
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
  
   /**
   * 直接点击
   *
   * @title 点击函数
   */
  onClick: (item: number) => void;
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
`,d=()=>{let[e,t]=(0,i.useState)(!0),[n,d]=(0,i.useState)(null);(0,i.useEffect)(()=>{(async()=>{try{await l.default.LibSchemaOnLinePlayground(),console.log(window)}catch(e){d(e),console.log(e)}t(!1)})()},[]);let s=()=>{let{ReactDOM:e,React:t,SchemaOnLinePlayground:n}=window;e.createRoot(document.getElementById("playgroundView")).render(t.createElement(n.SchemaPreviewOnline,{height:"calc(100vh - 72px)",defaultSchema:o}))},c=(0,i.useMemo)(()=>!e&&!n,[e,n]);return((0,i.useEffect)(()=>{console.log("mounted",c),c&&setTimeout(()=>{s()})},[c]),c)?(0,r.jsx)("div",{className:"playgroundView",children:(0,r.jsx)("div",{id:"playgroundView"})}):(0,r.jsx)(a.Z,{className:"loading",spinning:!0})}},8630:function(e,t,n){n.r(t),n.d(t,{default:()=>l});var r=JSON.parse('{"ic":"/open-react-render-sdk/index.umd.js","H0":"/setter-render/index.umd.js","UK":"/new-playground/index.umd.js"}');let a={};function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{src:t="https://cdn.jsdelivr.net/npm/typescript/lib/typescript.js",globalKey:n="ts"}=e;return window[n]?Promise.resolve():a[t]?a[t]:(a[t]=new Promise((e,r)=>{let i=document.createElement("script");i.setAttribute("data-src",t),i.src=t,i.async=!0,i.onload=()=>{window[n]?(console.log(`${n} loaded and available as window.${n}`),e()):(r(Error(`Failed to load ${n}. Ensure the global variable ${n} is set by the script.`)),delete a[t])},i.onerror=e=>{r(Error(`Failed to load ${n} from ${t}: ${e}`)),delete a[t]},document.body.appendChild(i)}),a[t])}let l={LibSetterRender:async function e(){return await i({src:r.H0||"/setter-render/index.umd.js",globalKey:"SetterRender"}),window.SetterRender},LibOpenReactRenderSdk:async function e(){return await i({src:r.ic||"/open-react-render-sdk/index.umd.js",globalKey:"OpenReactRenderSdk"}),window.OpenReactRenderSdk},LibSchemaOnLinePlayground:async function e(){return await i({src:r.UK||"/new-playground/index.umd.js",globalKey:"SchemaOnLinePlayground"}),window.SchemaOnLinePlayground}}}}]);