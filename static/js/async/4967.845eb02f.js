"use strict";(self.webpackChunklowcode_platform_docs=self.webpackChunklowcode_platform_docs||[]).push([["4967"],{1501:function(e,t,u){u.r(t),u.d(t,{default:()=>o});var n=u(2676),r=u(453),i=u(8206);function a(e){return(0,n.jsx)(i.default,{})}function l(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{wrapper:t}=Object.assign({},(0,r.ah)(),e.components);return t?(0,n.jsx)(t,Object.assign({},e,{children:(0,n.jsx)(a,e)})):a(e)}let o=l;l.__RSPRESS_PAGE_META={},l.__RSPRESS_PAGE_META["schema%2Findex.mdx"]={toc:[],title:"",headingTitle:"",frontmatter:{navbar:!0,sidebar:!1,outline:!1,footer:!1}}},8206:function(e,t,u){u.r(t),u.d(t,{default:()=>o});var n=u(2676),r=u(5550);u(7773);var i=u(5271),a=u(8709);let l=`
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
  
   /**
   * \u{76F4}\u{63A5}\u{70B9}\u{51FB}
   *
   * @title \u{70B9}\u{51FB}\u{51FD}\u{6570}
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
`,o=()=>{let[e,t]=(0,i.useState)(!0),[u,o]=(0,i.useState)(null);(0,i.useEffect)(()=>{(async()=>{try{await a.default.LibSchemaOnLinePlayground(),console.log(window)}catch(e){o(e),console.log(e)}t(!1)})()},[]);let d=()=>{let{ReactDOM:e,React:t,SchemaOnLinePlayground:u}=window;e.createRoot(document.getElementById("playgroundView")).render(t.createElement(u.SchemaPreviewOnline,{height:"calc(100vh - 72px)",defaultSchema:l}))},s=(0,i.useMemo)(()=>!e&&!u,[e,u]);return((0,i.useEffect)(()=>{console.log("mounted",s),s&&setTimeout(()=>{d()})},[s]),s)?(0,n.jsx)("div",{className:"playgroundView",children:(0,n.jsx)("div",{id:"playgroundView"})}):(0,n.jsx)(r.Z,{className:"loading",spinning:!0})}},8709:function(e,t,u){u.r(t),u.d(t,{default:()=>a});var n=JSON.parse('{"ic":"/open-react-render-sdk/index.umd.js","H0":"/setter-render/index.umd.js","UK":"/new-playground/index.umd.js","pf":"/nexus-render-core/index.umd.js"}');let r={};function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{src:t="https://cdn.jsdelivr.net/npm/typescript/lib/typescript.js",globalKey:u="ts"}=e;return window[u]?Promise.resolve():(r[t]||(r[t]=new Promise((e,n)=>{let i=document.createElement("script");i.setAttribute("data-src",t),i.src=t,i.async=!0,i.onload=()=>{window[u]?(console.log(`${u} loaded and available as window.${u}`),e()):(n(Error(`Failed to load ${u}. Ensure the global variable ${u} is set by the script.`)),delete r[t])},i.onerror=e=>{n(Error(`Failed to load ${u} from ${t}: ${e}`)),delete r[t]},document.body.appendChild(i)})),r[t])}console.log(n.ic,n.H0,n.UK);let a={LibSetterRender:async function(){return console.log(n.ic,n.H0,n.UK),await i({src:n.H0||"/setter-render/index.umd.js",globalKey:"SetterRender"}),window.SetterRender},LibOpenReactRenderSdk:async function(){return console.log(n.ic,n.H0,n.UK),await i({src:n.ic||"/open-react-render-sdk/index.umd.js",globalKey:"OpenReactRenderSdk"}),window.OpenReactRenderSdk},LibSchemaOnLinePlayground:async function(){return console.log(n.ic,n.H0,n.UK),await i({src:n.UK||"/new-playground/index.umd.js",globalKey:"SchemaOnLinePlayground"}),window.SchemaOnLinePlayground},LibNexusRenderCoreSdk:async function(){return await i({src:n.pf||"/nexus-render-core/index.umd.js",globalKey:"NexusRenderCore"}),window.NexusRenderCore}}}}]);