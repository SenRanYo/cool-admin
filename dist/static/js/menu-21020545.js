import{z as T,y as b,n as v,A as M}from"./lodash-es-d00cf236.js";import{l as h}from"./index-e77a39a7.js";import"./store-4dd21bbb.js";import{a as x}from"./element-plus-aceaa6a8.js";const D=["#409EFF","#67C23A","#E6A23C","#F56C6C","#909399","#B0CFEB","#FF9B91","#E6A23C","#BFAD6F","#FB78F2"],$=[{group:["province","city","district"],table:{label:"省市区",formatter(a){return a.province+"-"+a.city+"-"+a.district}},form:{label:"省市区",prop:"pca",hook:"pca",component:{name:"cl-distpicker"}}},{test:["address","addr"],table:{showOverflowTooltip:!0},form:{name:"el-input",props:{type:"textarea",rows:3}}},{test:["createTime"],table:{sortable:"desc",width:160}},{test:["updateTime"],table:{sortable:"custom",width:160}},{test:["avatar","img","image","pic","photo","picture","head","icon"],table:{name:"cl-image",props:{size:60}},form:{name:"cl-upload"}},{test:["avatars","imgs","images","pics","photos","pictures","heads","icons"],table:{name:"cl-image",props:{size:60}},form:{name:"cl-upload",props:{multiple:!0}}},{test:["file","attachment","attach","url","video","music"],table:{name:"cl-link"},form:{name:"cl-upload",props:{type:"file",limit:1}}},{test:["files","attachments","attachs","urls","videos","musics"],table:{name:"cl-link"},form:{name:"cl-upload",props:{type:"file",multiple:!0}}},{test:["enable","status","isDefault"],table:{name:"cl-switch"},form:{name:"cl-switch"}},{test:["type","classify","category"],handler:"dict"},{test:["types","classifys","categorys"],handler:"dict_multiple"},{test:["dates","dateRange","dateScope"],table:{name:"cl-date-text",props:{format:"YYYY-MM-DD"}},form:{name:"el-date-picker",props:{type:"daterange",valueFormat:"YYYY-MM-DD"}}},{test:["times","timeRange","timeScope"],form:{name:"el-date-picker",props:{type:"datetimerange",valueFormat:"YYYY-MM-DD HH:mm:ss",defaultTime:[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]}}},{test:["time"],form:{name:"el-date-picker",props:{type:"datetime",valueFormat:"YYYY-MM-DD HH:mm:ss"}}},{test:["star","stars"],table:{name:"el-rate",props:{disabled:!0}},form:{name:"el-rate"}},{test:["progress","rate","ratio"],table:{name:"el-progress"},form:{name:"el-slider",props:{style:{width:"200px"}}}},{test:["num","price","age","amount","stock"],form:{hook:{bind:["number"]},component:{name:"el-input-number",props:{min:0}}}},{test:["remark","desc"],table:{showOverflowTooltip:!0},form:{name:"el-input",props:{type:"textarea",rows:4}}},{test:["rich","text","html","content","introduce"],form:{name:"cl-editor-wang"}},{test:["code","codes"],form:{name:"cl-editor-monaco"}},{test:["date","day"],table:{name:"cl-date-text",props:{format:"YYYY-MM-DD"}},form:{name:"el-date-picker",props:{type:"date",valueFormat:"YYYY-MM-DD"}}}],C={dict({comment:a}){const[i,...e]=a.split(" "),s=e.map((p,c)=>{const[t,m]=p.split("-"),r={label:m,value:isNaN(Number(t))?t:Number(t),color:void 0};return c>0&&D[c]&&(r.color=D[c]),r}),o={table:{label:i,dict:s},form:{label:i,component:{name:"",options:s}}};return s[0]&&(o.form.value=s[0].value),o.form.component.name=e.length>4?"el-select":"el-radio-group",o},dict_multiple(a){var s,o;const{table:i,form:e}=C.dict(a);switch((s=e.component)!=null&&s.props||(e.component.props={}),e.value||(e.value=[]),(o=e.component)==null?void 0:o.name){case"el-select":e.component.props.multiple=!0,e.component.props.filterable=!0;break;case"el-radio-group":e.component.name="el-checkbox-group";break}return{table:i,form:e}}};function E(a,i){const e=a.propertyName;let s=a.comment,o,p=!1;$.find(t=>{let m=!1;if(t.test&&(m=!!t.test.find(r=>T(r)?r.test(e):b(r)?r(e):v(r)?r==e?!0:new RegExp(`${r}$`).test(e.toLocaleLowerCase()):!1)),t.group&&t.group.includes(e)&&t.group.some(r=>i.find(l=>l.propertyName==r))&&(t.group[0]==e?m=!0:p=!0),m)if(t.handler){const r=v(t.handler)?C[t.handler]:t.handler;b(r)&&(o=r(a))}else o={...t,test:void 0};return m});function c(t){return s=s.split(" ")[0],t!=null&&t.name?{prop:e,label:s,component:t}:{prop:e,label:s,...t}}return{column:c(o==null?void 0:o.table),item:c(o==null?void 0:o.form),isHidden:p}}function k(a){const i=[];let e=JSON.stringify(a,(s,o)=>{if(b(o)){const p=o.toString();return i.push([JSON.stringify({[s]:p}),p]),p}else return o});return i.forEach(s=>{e=e.replace(s[0].substring(1,s[0].length-1),s[1])}),e}function N(){function a({router:i="",columns:e=[],prefix:s="",api:o=[],module:p}){const c={items:[]},t={columns:[]};e.forEach(u=>{var g,y,Y;const{item:n,column:d,isHidden:F}=E(u,e);if(F)return!1;if(u.nullable||(n.required=!0),["createTime","updateTime","id","endTime","endDate"].includes(n.prop||"")||(n.component||(n.component={name:"el-input"}),c.items.push(n)),["startTime","startDate"].includes(n.prop)){const w=n.prop.replace("start","");if(e.find(f=>f.propertyName=="end"+w)){n.prop=w.toLocaleLowerCase();const f=n.prop=="time";n.label=f?"时间范围":"日期范围",n.hook="datetimeRange",n.component={name:"el-date-picker",props:{type:f?"datetimerange":"daterange",valueFormat:f?"YYYY-MM-DD HH:mm:ss":"YYYY-MM-DD 00:00:00",defaultTime:[new Date(2e3,1,1,0,0,0),new Date(2e3,1,1,23,59,59)]}}}}(y=(g=n.component)==null?void 0:g.name)!=null&&y.includes("cl-editor-")&&(t.columns.push(d),d.component={name:"cl-editor-preview",props:{name:M((Y=n.component)==null?void 0:Y.name.split("-"))}}),t.columns.push(d)});const m=s.replace("/admin","service").split("/");m.includes(p)||m.splice(1,0,p);const r=o.map(u=>u.path),l={add:r.includes("/add"),del:r.includes("/delete"),update:r.includes("/info")&&r.includes("/update"),page:r.includes("/page"),upsert:!0};if(l.upsert=l.add||l.update,l.del||l.upsert){const u=[];l.upsert&&u.push("edit"),l.del&&u.push("delete"),t.columns.push({type:"op",buttons:u})}return l.del?t.columns.unshift({type:"selection"}):t.columns.unshift({label:"#",type:"index"}),`<template>
            <cl-crud ref="Crud">
                <cl-row>
                    <!-- 刷新按钮 -->
                    <cl-refresh-btn />
                    ${l.add?`<!-- 新增按钮 -->
<cl-add-btn />`:""}
                    ${l.del?`<!-- 删除按钮 -->
<cl-multi-delete-btn />`:""}
                    <cl-flex1 />
                    <!-- 关键字搜索 -->
                    <cl-search-key />
                </cl-row>
        
                <cl-row>
                    <!-- 数据表格 -->
                    <cl-table ref="Table" />
                </cl-row>
        
                <cl-row>
                    <cl-flex1 />
                    <!-- 分页控件 -->
                    <cl-pagination />
                </cl-row>
        
                <!-- 新增、编辑 -->
                <cl-upsert ref="Upsert" />
            </cl-crud>
        </template>
        
        <script lang="ts" name="${i.replace(/^\//,"").replace(/\//g,"-")}" setup>
        import { useCrud, useTable, useUpsert } from "@cool-vue/crud";
        import { useCool } from "/@/cool";
        
        const { service } = useCool();
        
        // cl-upsert
        const Upsert = useUpsert(${k(c)});
        
        // cl-table
        const Table = useTable(${k(t)});
        
        // cl-crud
        const Crud = useCrud(
            {
                service: ${m.join(".")}
            },
            (app) => {
                app.refresh();
            }
        );
        <\/script>`}return{createVue:a}}function B(){const{createVue:a}=N();function i(e){return new Promise((s,o)=>{var p;e.viewPath=`modules/${e.module}/views/${M((p=e.router)==null?void 0:p.split("/"))}.vue`,h.base.sys.menu.add({type:1,isShow:!0,keepAlive:!0,...e,api:void 0,code:void 0,columns:void 0}).then(c=>{var m;const t=(m=e.api)==null?void 0:m.map(r=>{var u;const l={type:2,parentId:c.id,name:r.summary||r.path,perms:[r.path]};return r.path=="/update"&&(u=e.api)!=null&&u.find(n=>n.path=="/info")&&l.perms.push("/info"),{...l,perms:l.perms.map(n=>{var d;return(((d=e.prefix)==null?void 0:d.replace("/admin/",""))+n).replace(/\//g,":")}).join(",")}});h.base.sys.menu.add(t).then(()=>{s(()=>{h.request({url:"/__cool_createMenu",method:"POST",proxy:!1,data:{code:a(e),...e}}).then(()=>{location.reload()})})})}).catch(c=>{x.error(c.message),o()})})}return{create:i,createVue:a}}export{B as u};
