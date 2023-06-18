import{d as r,W as t,o as v,c as f,b as e,J as a}from"./@vue.runtime-core-3a9e54b6.js";import{r as s}from"./@vue.reactivity-747ae439.js";import{_ as b}from"./_plugin-vue_export-helper-c27b6911.js";import"./@vue.shared-9aa0355e.js";const V={class:"editor"},g=r({name:"demo-editor"}),y=r({...g,setup(w){const _=s("富文本编辑器 cl-editor-wang"),d=s("富文本编辑器 cl-editor-quill"),c=s(`// 代码编辑器 cl-editor-monaco
class User {
    main() {
        console.log('Name', '神仙都没用')
    }
}

const user = new User();
user.main();
`);return(x,o)=>{const u=t("cl-editor-wang"),n=t("el-tab-pane"),m=t("cl-editor-quill"),i=t("cl-editor-monaco"),p=t("el-tabs");return v(),f("div",V,[e(p,{type:"card"},{default:a(()=>[e(n,{label:"Wang"},{default:a(()=>[e(u,{modelValue:_.value,"onUpdate:modelValue":o[0]||(o[0]=l=>_.value=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"Quill",lazy:""},{default:a(()=>[e(m,{modelValue:d.value,"onUpdate:modelValue":o[1]||(o[1]=l=>d.value=l)},null,8,["modelValue"])]),_:1}),e(n,{label:"Monaco",lazy:""},{default:a(()=>[e(i,{modelValue:c.value,"onUpdate:modelValue":o[2]||(o[2]=l=>c.value=l),language:"typescript"},null,8,["modelValue"])]),_:1})]),_:1})])}}});const z=b(y,[["__scopeId","data-v-71c06b67"]]);export{z as default};
