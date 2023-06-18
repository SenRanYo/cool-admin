import{i as n}from"./index-e77a39a7.js";import"./store-4dd21bbb.js";import{u as k}from"./index-8d3b4b42.js";import{d as m,W as t,o as T,I as w,J as l,b as e}from"./@vue.runtime-core-3a9e54b6.js";import{j as W}from"./@vue.reactivity-747ae439.js";import"./@vue.runtime-dom-7b7b8a44.js";import"./@vue.shared-9aa0355e.js";import"./element-plus-aceaa6a8.js";import"./chardet-ee49d9b4.js";import"./lodash-es-d00cf236.js";import"./@vueuse.core-b5ce6112.js";import"./@vueuse.shared-8ce56883.js";import"./@element-plus.icons-vue-e3809a99.js";import"./@popperjs.core-c75af06c.js";import"./@ctrl.tinycolor-384ef2e5.js";import"./dayjs-98968027.js";import"./async-validator-dee29e8b.js";import"./memoize-one-297ddbcb.js";import"./escape-html-1d60d822.js";import"./normalize-wheel-es-ed76fb12.js";import"./@floating-ui.dom-a30dd394.js";import"./@floating-ui.core-a4bcb9d9.js";import"./monaco-editor-9ddaeaf3.js";import"./axios-aba6f0e0.js";import"./nprogress-d2c1a460.js";import"./mitt-b509fb6d.js";import"./vue-router-19ed6b98.js";import"./pinia-2b0aea45.js";import"./vue-demi-71ba0ef2.js";import"./vue-echarts-c84fbe77.js";import"./resize-detector-a5205554.js";import"./echarts-90e4e057.js";import"./tslib-54e39b60.js";import"./zrender-5c8f9fce.js";import"./mockjs-5923ee6a.js";import"./vue-1fcee0a5.js";const C=m({name:"user-list"}),se=m({...C,setup(U){const{service:s}=k(),o=W({loginType:[{label:"小程序",value:0,type:"danger"},{label:"公众号",value:1,type:"success"},{label:"H5",value:2}],gender:[{label:"未知",value:0,type:"info"},{label:"男",value:1,type:"success"},{label:"女",value:2,type:"danger"}],status:[{label:"启用",value:1},{label:"禁用",value:0}]}),u=n.useTable({columns:[{type:"selection",width:60},{label:"昵称",prop:"nickName",minWidth:150},{label:"头像",prop:"avatarUrl",minWidth:100,component:{name:"cl-avatar"}},{label:"手机",prop:"phone",minWidth:120},{label:"性别",prop:"gender",dict:o.gender,minWidth:100},{label:"登录方式",prop:"loginType",dict:o.loginType,minWidth:100},{label:"状态",prop:"status",minWidth:100,component:{name:"cl-switch"}},{label:"创建时间",prop:"createTime",sortable:"desc",minWidth:150},{label:"操作",type:"op",buttons:["edit","delete"]}]}),_=n.useUpsert({dialog:{width:"600px"},items:[{prop:"avatarUrl",label:"头像",component:{name:"cl-upload"}},{prop:"nickName",label:"昵称",component:{name:"el-input"},required:!0},{prop:"phone",label:"手机号",component:{name:"el-input",props:{maxlength:11}}},{prop:"gender",label:"性别",value:1,component:{name:"el-radio-group",options:o.gender}},{prop:"status",label:"状态",value:1,component:{name:"el-radio-group",options:o.status}}]}),d=n.useCrud({service:s.user.info},r=>{r.refresh()});return(r,N)=>{const b=t("cl-refresh-btn"),f=t("cl-multi-delete-btn"),i=t("cl-select"),a=t("cl-filter"),c=t("cl-flex1"),h=t("cl-search-key"),p=t("cl-row"),g=t("cl-table"),y=t("cl-pagination"),v=t("cl-upsert"),x=t("cl-crud");return T(),w(x,{ref_key:"Crud",ref:d},{default:l(()=>[e(p,null,{default:l(()=>[e(b),e(f),e(a,{label:"登录方式"},{default:l(()=>[e(i,{options:o.loginType,prop:"loginType",style:{width:"120px"}},null,8,["options"])]),_:1}),e(a,{label:"性别"},{default:l(()=>[e(i,{options:o.gender,prop:"gender",style:{width:"120px"}},null,8,["options"])]),_:1}),e(c),e(h,{placeholder:"搜索昵称、手机号"})]),_:1}),e(p,null,{default:l(()=>[e(g,{ref_key:"Table",ref:u},null,512)]),_:1}),e(p,null,{default:l(()=>[e(c),e(y)]),_:1}),e(v,{ref_key:"Upsert",ref:_},null,512)]),_:1},512)}}});export{se as default};
