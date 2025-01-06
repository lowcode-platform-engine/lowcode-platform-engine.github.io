"use strict";(self.webpackChunklowcode_platform_docs=self.webpackChunklowcode_platform_docs||[]).push([["8972"],{7554:function(e,t,n){n.r(t),n.d(t,{default:function(){return s}});var a=n(2676),i=n(2669);n(4435);var r=n(5271),l=n(8630);let o=`
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
`,s=()=>{let[e,t]=(0,r.useState)(!0),[n,s]=(0,r.useState)(null);(0,r.useEffect)(()=>{(async()=>{try{await l.default.LibSchemaOnLinePlayground(),console.log(window)}catch(e){s(e),console.log(e)}t(!1)})()},[]);let d=()=>{let{ReactDOM:e,React:t,SchemaOnLinePlayground:n}=window;e.createRoot(document.getElementById("playgroundView")).render(t.createElement(n.SchemaPreviewOnline,{height:"calc(100vh - 72px)",defaultSchema:o}))},c=(0,r.useMemo)(()=>!e&&!n,[e,n]);return((0,r.useEffect)(()=>{console.log("mounted",c),c&&setTimeout(()=>{d()})},[c]),c)?(0,a.jsx)("div",{className:"playgroundView",children:(0,a.jsx)("div",{id:"playgroundView"})}):(0,a.jsx)(i.Z,{className:"loading",spinning:!0})}},8630:function(e,t,n){n.r(t),n.d(t,{default:()=>l});var a=JSON.parse('{"ic":"/open-react-render-sdk/index.umd.js","H0":"/setter-render/index.umd.js","UK":"/new-playground/index.umd.js"}');let i={};function r(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{src:t="https://cdn.jsdelivr.net/npm/typescript/lib/typescript.js",globalKey:n="ts"}=e;return window[n]?Promise.resolve():i[t]?i[t]:(i[t]=new Promise((e,a)=>{let r=document.createElement("script");r.setAttribute("data-src",t),r.src=t,r.async=!0,r.onload=()=>{window[n]?(console.log(`${n} loaded and available as window.${n}`),e()):(a(Error(`Failed to load ${n}. Ensure the global variable ${n} is set by the script.`)),delete i[t])},r.onerror=e=>{a(Error(`Failed to load ${n} from ${t}: ${e}`)),delete i[t]},document.body.appendChild(r)}),i[t])}console.log(a.ic,a.H0,a.UK);let l={LibSetterRender:async function e(){return console.log(a.ic,a.H0,a.UK),await r({src:a.H0||"/setter-render/index.umd.js",globalKey:"SetterRender"}),window.SetterRender},LibOpenReactRenderSdk:async function e(){return console.log(a.ic,a.H0,a.UK),await r({src:a.ic||"/open-react-render-sdk/index.umd.js",globalKey:"OpenReactRenderSdk"}),window.OpenReactRenderSdk},LibSchemaOnLinePlayground:async function e(){return console.log(a.ic,a.H0,a.UK),await r({src:a.UK||"/new-playground/index.umd.js",globalKey:"SchemaOnLinePlayground"}),window.SchemaOnLinePlayground}}}}]);