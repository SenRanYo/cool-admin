import{i as V,c as b}from"./index-e77a39a7.js";import{u as C}from"./index-8d3b4b42.js";import{d as n,p as w,W as c,o as B,c as g,a,b as i,J as N}from"./@vue.runtime-core-3a9e54b6.js";import{r as p}from"./@vue.reactivity-747ae439.js";import{_ as T}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./@vue.shared-9aa0355e.js";import"./element-plus-aceaa6a8.js";import"./chardet-ee49d9b4.js";import"./lodash-es-d00cf236.js";import"./@vueuse.core-b5ce6112.js";import"./@vueuse.shared-8ce56883.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-384ef2e5.js";import"./dayjs-98968027.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-a30dd394.js";import"./@floating-ui.core-a4bcb9d9.js";import"./monaco-editor-9ddaeaf3.js";import"./store-4dd21bbb.js";import"./axios-aba6f0e0.js";import"./nprogress-d2c1a460.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-2b0aea45.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-c84fbe77.js";import"./resize-detector-a5205554.js";import"./echarts-90e4e057.js";import"./tslib-54e39b60.js";import"./zrender-5c8f9fce.js";import"./mockjs-5923ee6a.js";import"./vue-1fcee0a5.js";const E={class:"cl-dept-check"},S={class:"cl-dept-check__search"},U={class:"cl-dept-check__tree"},A=n({name:"cl-dept-check"}),I=n({...A,props:{modelValue:{type:Array,default:()=>[]},checkStrictly:Boolean},emits:["update:modelValue"],setup(s,{emit:m}){const d=s,{service:_}=C(),o=p(),l=p(),r=p("");async function u(){return _.base.sys.department.list().then(e=>{l.value=b(e)})}function h(e,t){return e?t.name.includes(e):!0}function f(e,{checkedKeys:t}){m("update:modelValue",t)}return w(r,e=>{o.value.filter(e)}),V.useUpsert({async onOpened(){await u(),o.value.setCheckedKeys(d.modelValue||[])}}),(e,t)=>{const k=c("el-input"),y=c("el-tree"),v=c("el-scrollbar");return B(),g("div",E,[a("div",S,[i(k,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=x=>r.value=x),placeholder:"输入关键字进行过滤"},null,8,["modelValue"])]),a("div",U,[i(v,{"max-height":"200px"},{default:N(()=>[i(y,{ref_key:"Tree",ref:o,"node-key":"id","show-checkbox":"",data:l.value,props:{label:"name",children:"children"},"filter-node-method":h,"check-strictly":s.checkStrictly,onCheck:f},null,8,["data","check-strictly"])]),_:1})])])}}});const ke=T(I,[["__scopeId","data-v-c59e48cb"]]);export{ke as default};