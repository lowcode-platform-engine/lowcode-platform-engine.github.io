"use strict";(self.webpackChunklowcode_platform_docs=self.webpackChunklowcode_platform_docs||[]).push([["439"],{2301:function(e,t,r){r.r(t),r.d(t,{FormSchemaRender:function(){return d},default:function(){return S},useForm:function(){return f}});var o=r(2676),n=r(7781),s=r(2669),l=r(5271),i=r(2763);r(3110);let a={js:"/setter-render/index.umd.js",css:"/setter-render/style.css"},m={js:"/setter-render/index.umd.js",css:"/setter-render/style.css"};function c(e){let{type:t,properties:r={},Component:o,name:n,title:s}=e,l=[];for(let e in r){let{title:t,type:o,format:n,enum:s,enumNames:i,widget:a,items:m,required:p,properties:u,...d}=r[e],{default:f,...S}=d||{},h={label:t,name:e};if(s&&i&&["string","number","boolean"].includes(o)){let e=(s||[]).map((e,t)=>({label:i[t],value:e}))||[];l.push({componentName:"SingleSelectSetter",props:{...S,formItemProps:{...h},options:e,setter:"SingleSelectSetter"}})}else if("boolean"===o)l.push({componentName:"BooleanSetter",props:{...S,formItemProps:{...h},setter:"BooleanSetter"}});else if("string"===o)"color"===n?l.push({componentName:"ColorSetter",props:{...S,formItemProps:{...h}}}):"date"===n?l.push({componentName:"DateSetter",props:{...S,formItemProps:{...h},setter:"DateSetter"}}):"time"===n?l.push({componentName:"TimeSetter",props:{...S,formItemProps:{...h},setter:"TimeSetter"}}):"dateTime"===n?l.push({componentName:"DateTimeSetter",props:{...S,formItemProps:{...h},setter:"DateTimeSetter"}}):"image"===n?l.push({componentName:"ImageSetter",props:{...S,formItemProps:{...h},setter:"ImageSetter"}}):l.push({componentName:"StringSetter",props:{...S,formItemProps:{label:t,name:e},setter:"StringSetter"}});else if("number"===o)l.push({componentName:"NumberSetter",props:{...S,formItemProps:{label:t,name:e},setter:"NumberSetter"}});else if("array"===o){let{type:t,format:o,enum:n,enumNames:s}=m,i=(n||[]).map((e,t)=>({label:s[t],value:e}))||[];if(["string","number","boolean"].includes(t)){let e=()=>{l.push({componentName:"MultipleSelectSetter",props:{...S,formItemProps:{...h},options:i,setter:"MultipleSelectSetter"}})};a&&"checkbox"===a?l.push({componentName:"CheckboxSetter",props:{...S,formItemProps:{...h},options:i,setter:"CheckboxSetter"}}):e()}else if(["object"].includes(t)){let{items:t}=r[e],{type:o,properties:n,required:s,title:i,...a}=t;l.push({componentName:"ArrayObjectSetter",props:{...S,formItemProps:{...h},item:{componentName:"ObjectSetter",props:{...a,formItemProps:{label:i,name:`${h.name}.{{$i}}`},items:c(t),setter:"ObjectSetter"}},setter:"ArrayObjectSetter"}})}}else["object"].includes(o)&&l.push({componentName:"ObjectSetter",props:{...S,formItemProps:{...h},items:c(r[e]),setter:"ObjectSetter"}})}return l}function p(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t="";for(let r=0;r<8;r++)t+=e.charAt(Math.floor(Math.random()*e.length));return t}let u=()=>location.host.includes("localhost")||location.host.includes("127.0.0.1"),d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},[t,r]=(0,l.useState)(p()),d=e.schema||{},f=e.initialValues||{},[S]=n.Z.useForm(),h=c(d);console.log(h);let[b,g]=(0,l.useState)(!0),[y,w]=(0,l.useState)(null);(0,l.useEffect)(()=>{(async()=>{try{let e=u()?a:m,t=new i.LoadService({enableSandbox:!0}),r=await t.importScript(e.js);if(console.log(r),!document.querySelector("#setterRenderStyle")){let r=await t.importStyle(e.css);console.log(r),r.id="setterRenderStyle",document.querySelector("body").appendChild(r)}console.log(window)}catch(e){w(e),console.log(e)}g(!1)})()},[]);let N=()=>{let{ReactDOM:e,React:r,SetterRender:o}=window;e.createRoot(document.getElementById(t)).render(r.createElement(o.default,{form:S,schema:h,initialValues:f,onChange:e=>{console.log(e)}}))},P=(0,l.useMemo)(()=>!b&&!y,[b,y]);return((0,l.useEffect)(()=>{P&&setTimeout(()=>{N()})},[P]),P)?(0,o.jsx)("div",{id:t,className:"exampleItem"}):(0,o.jsx)(s.Z,{className:"loading",spinning:!0})},f=n.Z.useForm,S={FormSchemaRender:d,useForm:f}},8142:function(e,t,r){r.r(t),r.d(t,{ObjectArray:function(){return s},default:function(){return l}});var o=r(2676),n=r(2301);let s=()=>{let e=(0,n.useForm)();return(0,o.jsx)(n.FormSchemaRender,{initialValues:{testArr:[{name:"测试"}]},schema:{type:"object",properties:{testArr:{title:"测试集合",type:"array",items:{type:"object",properties:{name:{title:"测试对象名称",type:"string",default:"测试"}}}}}},footer:!1,form:e})},l={ObjectArray:s}},2763:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{COMPONENT_APP_UMD:function(){return COMPONENT_APP_UMD},COMPONENT_APP_VERSION_DEFAULT:function(){return COMPONENT_APP_VERSION_DEFAULT},LoadService:function(){return LoadService},default:function(){return __WEBPACK_DEFAULT_EXPORT__}});var _swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3062);let COMPONENT_APP_UMD="MyLib",COMPONENT_APP_VERSION_DEFAULT="1.0.0",CACHE_LOAD_MAP=new Map,CACHE_CSS_MAP=new Map;class LoadService{importScript(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{format:r="UMD"}=this.options;return"UMD"===r?this.importScriptUmdVersion2(e,t):"ES"===r?this.importScriptEs(e):void 0}importScriptEs(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(e=>e.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmd(url){let name=this.options.componentName||COMPONENT_APP_UMD;return new Promise(resolve=>CACHE_LOAD_MAP.get(url)?resolve(CACHE_LOAD_MAP.get(url)):fetch(url).then(e=>e.text()).then(text=>{eval(`${text}`);let Com=window[name].default?window[name].default:window[name];CACHE_LOAD_MAP.set(url,Com),resolve(Com)}))}importScriptUmdVersion2(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return new Promise((r,o)=>{let n=document.querySelector(`script[src="${e}"]`),s=(e,t)=>{let r="load"===e.type?"ready":"error";null==t||t.setAttribute("data-status",r)};if(n)"ready"===(n.getAttribute("data-status")||"ready")?r(n):(n.addEventListener("load",e=>{s(e,n),r(n)}),n.addEventListener("error",e=>{s(e,n),o(e)}));else{let n=document.createElement("script");n.src=e,Object.keys(t).forEach(e=>{n[e]=t[e]}),n.setAttribute("data-status","loading"),document.body.appendChild(n),n.addEventListener("load",e=>{s(e,n),r(n)}),n.addEventListener("error",e=>{s(e,n),o(e)})}})}cssToDom(e){let t=document.createElement("style");return t.textContent=e,t}importStyle(e){return new Promise(async(t,r)=>{try{let r="";if(CACHE_CSS_MAP.get(e))r=CACHE_CSS_MAP.get(e);else{let t=await fetch(e);r=await t.text(),CACHE_CSS_MAP.set(e,r)}t(this.cssToDom(r))}catch(e){r(e)}})}constructor(e){(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"url",""),(0,_swc_helpers_define_property__WEBPACK_IMPORTED_MODULE_0__._)(this,"options",{componentName:COMPONENT_APP_UMD,version:COMPONENT_APP_VERSION_DEFAULT}),this.options=e}}let __WEBPACK_DEFAULT_EXPORT__={LoadService,CACHE_CSS_MAP,CACHE_LOAD_MAP,COMPONENT_APP_UMD,COMPONENT_APP_VERSION_DEFAULT}}}]);