import{I as $,o as C,c as N,G as t,D as a,S as e,X as U,W as r,U as u,V as y}from"./entry.4d806ec5.js";const D={},L=u("span",{class:"text-h6"},"Create new List",-1),B=u("small",null,"*indicates required field",-1);function M(n,o,q,A,S,j){const m=a("v-icon"),s=a("v-btn"),c=a("v-card-title"),f=a("v-toolbar"),i=a("v-text-field"),d=a("v-col"),_=a("v-textarea"),p=a("v-row"),v=a("v-container"),V=a("v-card-text"),b=a("v-spacer"),k=a("v-card-actions"),g=a("v-card"),w=a("v-dialog");return C(),N(p,{justify:"center"},{default:t(()=>[e(w,{modelValue:n.dialog,"onUpdate:modelValue":o[9]||(o[9]=l=>n.dialog=l),fullscreen:"",scrim:!1,transition:"dialog-bottom-transition",persistent:""},{activator:t(({props:l})=>[e(s,U(l,{class:"rightAddBtn"}),{default:t(()=>[e(m,{start:"",icon:"fas fa-plus"}),r("Add List ")]),_:2},1040)]),default:t(()=>[e(g,null,{default:t(()=>[u("form",{method:"post","onVOn:submit":o[8]||(o[8]=y(l=>n.addList(),["prevent"]))},[e(f,{dark:"",color:"primary"},{default:t(()=>[e(s,{icon:"",dark:"",onClick:o[0]||(o[0]=l=>n.dialog=!1)},{default:t(()=>[e(m,{icon:"fas fa-circle-xmark"})]),_:1}),e(c,null,{default:t(()=>[L]),_:1})]),_:1}),e(V,null,{default:t(()=>[e(v,null,{default:t(()=>[e(p,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(i,{modelValue:n.name,"onUpdate:modelValue":o[1]||(o[1]=l=>n.name=l),id:"listName",label:"List Name*",required:""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(_,{modelValue:n.content,"onUpdate:modelValue":o[2]||(o[2]=l=>n.content=l),label:"Description",id:"listDescription"},null,8,["modelValue"])]),_:1}),e(d,{cols:"6"},{default:t(()=>[e(i,{modelValue:n.meta_title,"onUpdate:modelValue":o[3]||(o[3]=l=>n.meta_title=l),label:"Meta Name",id:"listName"},null,8,["modelValue"])]),_:1}),e(d,{cols:"6"},{default:t(()=>[e(i,{modelValue:n.meta_keywords,"onUpdate:modelValue":o[4]||(o[4]=l=>n.meta_keywords=l),label:"Meta Keywords"},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(_,{modelValue:n.meta_description,"onUpdate:modelValue":o[5]||(o[5]=l=>n.meta_description=l),label:"Meta Description",id:"listDescription"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1}),B]),_:1}),e(k,null,{default:t(()=>[e(b),e(s,{color:"blue-darken-1",variant:"text",onClick:o[6]||(o[6]=l=>n.dialog=!1)},{default:t(()=>[r(" Close ")]),_:1}),e(s,{color:"blue-darken-1",variant:"text",onClick:o[7]||(o[7]=l=>n.dialog=!1)},{default:t(()=>[r(" Save ")]),_:1})]),_:1})],32)]),_:1})]),_:1},8,["modelValue"])]),_:1})}const I=$(D,[["render",M]]);export{I as default};
