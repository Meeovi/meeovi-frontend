import{o as i,J as _,U as V,S as e,G as t,V as f,D as n,W as v}from"./entry.4d806ec5.js";import{u as b}from"./composables.cafbcfda.js";const c={},y=Object.assign(c,{__name:"account",setup(w){return b({label:"Account"}),(o,l)=>{const s=n("v-text-field"),d=n("v-col"),u=n("v-row"),r=n("v-spacer"),m=n("v-btn"),p=n("v-card-actions");return i(),_("div",null,[V("form",{method:"post","onVOn:submit":l[5]||(l[5]=f(a=>o.addAccessToken(),["prevent"]))},[e(u,null,{default:t(()=>[e(d,{cols:"12"},{default:t(()=>[e(s,{modelValue:o.first_name,"onUpdate:modelValue":l[0]||(l[0]=a=>o.first_name=a),type:"text",label:"First Name",required:""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(s,{modelValue:o.last_name,"onUpdate:modelValue":l[1]||(l[1]=a=>o.last_name=a),type:"text",label:"Last Name",required:""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(s,{modelValue:o.email,"onUpdate:modelValue":l[2]||(l[2]=a=>o.email=a),type:"email",label:"Email",required:""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(s,{modelValue:o.username,"onUpdate:modelValue":l[3]||(l[3]=a=>o.username=a),type:"username",label:"Username",required:""},null,8,["modelValue"])]),_:1}),e(d,{cols:"12"},{default:t(()=>[e(s,{modelValue:o.password,"onUpdate:modelValue":l[4]||(l[4]=a=>o.password=a),type:"password",label:"Password",required:""},null,8,["modelValue"])]),_:1})]),_:1}),e(p,null,{default:t(()=>[e(r),e(m,{color:"blue-darken-1",variant:"text"},{default:t(()=>[v(" Save ")]),_:1})]),_:1})],32)])}}});export{y as default};
