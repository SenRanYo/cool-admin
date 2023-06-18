import{g as q,i as p}from"./index-e77a39a7.js";import"./store-4dd21bbb.js";import{u as z}from"./index-8d3b4b42.js";import{_ as J}from"./form-btn.vue_vue_type_script_setup_true_lang-349aeb23.js";import{a as u,b as P}from"./element-plus-aceaa6a8.js";import{d as v,W as o,o as W,I as $,J as r,b as e,a as G,N as a}from"./@vue.runtime-core-3a9e54b6.js";import{j as H,u as y}from"./@vue.reactivity-747ae439.js";import{O as s}from"./@vue.shared-9aa0355e.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./monaco-editor-9ddaeaf3.js";import"./axios-aba6f0e0.js";import"./nprogress-d2c1a460.js";import"./chardet-ee49d9b4.js";import"./lodash-es-d00cf236.js";import"./@vueuse.core-b5ce6112.js";import"./@vueuse.shared-8ce56883.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-2b0aea45.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-c84fbe77.js";import"./resize-detector-a5205554.js";import"./echarts-90e4e057.js";import"./tslib-54e39b60.js";import"./zrender-5c8f9fce.js";import"./mockjs-5923ee6a.js";import"./vue-1fcee0a5.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-384ef2e5.js";import"./dayjs-98968027.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-a30dd394.js";import"./@floating-ui.core-a4bcb9d9.js";const K={style:{padding:"0 10px"}},L=v({name:"demo-crud"}),Ie=v({...L,setup(Q){z();const{dict:x}=q(),b=H({status:[{label:"启用",value:1},{label:"禁用",type:"danger",value:0}]}),w=p.useCrud({service:"test"},t=>{t.refresh({})}),m=p.useUpsert({items:[{type:"tabs",props:{type:"card",labels:[{label:"基础",value:"base"},{label:"其他",value:"other"}]}},{label:"头像",prop:"avatar",group:"base",component:{name:"cl-upload"}},{label:"账号",group:"base",prop:"account",component:{name:"el-input"}},()=>{var t;return{label:"密码",group:"base",prop:"password",hidden:((t=m.value)==null?void 0:t.mode)=="update",component:{name:"el-input",props:{type:"password"}}}},{prop:"user",group:"base",component:{name:"cl-form-card",props:{label:"用户信息（多层级展示）"}},children:[{label:"姓名",prop:"name",required:!0,component:{name:"el-input"}},{label:"年龄",prop:"age",component:{name:"el-input-number"}}]},{label:"省市区",prop:"pca",group:"base",component:{name:"cl-distpicker"}},{label:"职业",prop:"occupation",group:"other",component:{name:"el-tree-select",props:{data:x.get("occupation"),checkStrictly:!0}}},{label:"身份证照片",prop:"idCardPic",group:"other",component:{name:"cl-upload",props:{isSpace:!0,size:[200,300]}}}],plugins:[p.setFocus("account")],onInfo(t,{next:n,done:l}){l(t)},onSubmit(t,{next:n,close:l,done:f}){console.log("onSubmit",t),n(t)},onOpened(t){var n;((n=m.value)==null?void 0:n.mode)!="info"&&u.success("编辑中")},onClose(t,n){var l;if(((l=m.value)==null?void 0:l.mode)=="update"&&t=="close")return P.confirm("还没填完，确定关闭不？","提示",{type:"warning"}).then(()=>{n(),u.info("好吧")}).catch(()=>{u.success("请继续编辑")});n()}}),_=p.useTable({columns:[{type:"selection",width:60},{label:"#",type:"expand",prop:"detail"},{label:"姓名",prop:"name"},{label:"存款(元)",prop:"price",sortable:!0},{label:"状态",orderNum:2,prop:"status",dict:b.status},{label:"创建时间",orderNum:1,prop:"createTime",sortable:"desc"},{type:"op",width:350,buttons({scope:t}){return["info","edit","delete",{label:"自定义按钮",hidden:!t.row.status,onClick({scope:n}){u.success(n.row.name+"正常")}}]}}]});function k({data:t}){return["合计","","",t.reduce((n,l)=>parseFloat(n+Number(l.price)),0).toFixed(2)]}const C=p.useAdvSearch({items:[{label:"昵称",prop:"name",component:{name:"el-input"}}]});return(t,n)=>{const l=o("cl-refresh-btn"),f=o("cl-add-btn"),S=o("cl-multi-delete-btn"),N=o("cl-select"),T=o("cl-filter"),h=o("cl-flex1"),B=o("cl-import-btn"),A=o("cl-export-btn"),D=o("cl-column-custom"),E=o("cl-search-key"),F=o("cl-adv-btn"),d=o("cl-row"),i=o("el-descriptions-item"),I=o("el-descriptions"),M=o("cl-table"),U=o("cl-pagination"),V=o("cl-upsert"),O=o("cl-adv-search"),j=o("cl-crud");return W(),$(j,{ref_key:"Crud",ref:w,border:""},{default:r(()=>[e(d,null,{default:r(()=>{var c,g;return[e(l),e(f),e(S),e(J),e(T,{label:"状态筛选"},{default:r(()=>[e(N,{options:b.status,prop:"status"},null,8,["options"])]),_:1}),e(h),e(B,{template:"/用户导入模版.xlsx"}),e(A,{columns:(c=y(_))==null?void 0:c.columns},null,8,["columns"]),e(D,{columns:(g=y(_))==null?void 0:g.columns},null,8,["columns"]),e(E),e(F)]}),_:1}),e(d,null,{default:r(()=>[e(M,{ref_key:"Table",ref:_,"show-summary":"","summary-method":k},{"column-detail":r(({scope:c})=>[G("div",K,[e(I,{border:"",column:3},{default:r(()=>[e(i,{label:"ID"},{default:r(()=>[a(s(c.row.id),1)]),_:2},1024),e(i,{label:"姓名"},{default:r(()=>[a(s(c.row.name),1)]),_:2},1024),e(i,{label:"存款"},{default:r(()=>[a(s(c.row.price),1)]),_:2},1024),e(i,{label:"创建时间"},{default:r(()=>[a(s(c.row.createTime),1)]),_:2},1024)]),_:2},1024)])]),"column-price":r(({scope:c})=>[a(" ￥"+s(c.row.price),1)]),_:1},512)]),_:1}),e(d,null,{default:r(()=>[e(h),e(U)]),_:1}),e(V,{ref_key:"Upsert",ref:m},null,512),e(O,{ref_key:"AdvSearch",ref:C},null,512)]),_:1},512)}}});export{Ie as default};
