import{i as k}from"./@vueuse.core-b5ce6112.js";import"./index-e77a39a7.js";import"./store-4dd21bbb.js";import{u as w}from"./index-8d3b4b42.js";import{n as N,w as S}from"./lodash-es-d00cf236.js";import{a as O}from"./element-plus-aceaa6a8.js";import{d as v,W as a,o as j,c as B,b as m,J as p,N as d,G as E,n as J}from"./@vue.runtime-core-3a9e54b6.js";import{r as f,u as T}from"./@vue.reactivity-747ae439.js";import"./@vueuse.shared-8ce56883.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./@vue.shared-9aa0355e.js";import"./monaco-editor-9ddaeaf3.js";import"./axios-aba6f0e0.js";import"./nprogress-d2c1a460.js";import"./chardet-ee49d9b4.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-2b0aea45.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-c84fbe77.js";import"./resize-detector-a5205554.js";import"./echarts-90e4e057.js";import"./tslib-54e39b60.js";import"./zrender-5c8f9fce.js";import"./mockjs-5923ee6a.js";import"./vue-1fcee0a5.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-384ef2e5.js";import"./dayjs-98968027.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-a30dd394.js";import"./@floating-ui.core-a4bcb9d9.js";const U=v({name:"cl-editor-preview"}),go=v({...U,props:{title:{type:String,default:"文本预览"},name:{type:String,required:!0},props:Object},setup(l,{expose:_}){const s=l,{refs:g,setRefs:C}=w(),{copy:b}=k(),r=f(!1),t=f("");async function y(e){var o,i;N(e)&&(t.value=e),S(e)&&(t.value=JSON.stringify(e,null,4)),r.value=!0,await J(),s.name=="monaco"&&((i=(o=g.editor)==null?void 0:o.formatCode)==null||i.call(o))}function u(){r.value=!1}function V(){b(t.value),O.success("复制成功")}return _({open:y,close:u}),(e,o)=>{const i=a("cl-editor"),c=a("el-button"),x=a("cl-dialog");return j(),B("div",null,[m(x,{width:"1000px",title:l.title,"append-to-body":"",modelValue:r.value,"onUpdate:modelValue":o[1]||(o[1]=n=>r.value=n)},{footer:p(()=>[m(c,{onClick:u},{default:p(()=>[d("关闭")]),_:1}),m(c,{type:"success",onClick:V},{default:p(()=>[d("复制")]),_:1})]),default:p(()=>[m(i,E({name:`cl-editor-${l.name}`,ref:T(C)("editor"),height:600},s.props,{modelValue:t.value,"onUpdate:modelValue":o[0]||(o[0]=n=>t.value=n)}),null,16,["name","modelValue"])]),_:1},8,["title","modelValue"])])}}});export{go as default};
