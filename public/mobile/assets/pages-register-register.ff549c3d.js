import{d as e,z as a,u as s,A as o,m as l,o as t,c as r,w as u,b as d,g as m,l as p,v as n,h as i,av as c,ai as f,r as b,a as _,i as x,k as w}from"./index.28d89b6b.js";import{a as g,_ as v}from"./u-form-item.c7eecfd1.js";import{_ as h}from"./u-form.4bbd92fa.js";import{_ as V}from"./u-checkbox.787b773d.js";import{_ as y}from"./u-button.322cee95.js";import{_ as j}from"./plugin-vue_export-helper.21dcd24c.js";import"./u-icon.be7b466a.js";import"./emitter.5b880544.js";var k=j(e({__name:"register",setup(e){const j=a(!1),k=s(),$=o((()=>1==k.getLoginConfig.openAgreement)),B=l({username:"",password:"",password2:""}),C=async()=>!j.value&&$.value?uni.$u.toast("请勾选已阅读并同意《服务协议》和《隐私协议》"):B.username?B.password?B.password2?B.password!=B.password2?uni.$u.toast("两次输入的密码不一致"):(await c(B),uni.$u.toast("注册成功"),void setTimeout((()=>{f()}),1e3)):uni.$u.toast("请输入确认密码"):uni.$u.toast("请输入密码"):uni.$u.toast("请输入账号");return(e,a)=>{const s=b(_("u-input"),g),o=b(_("u-form-item"),v),l=b(_("u-form"),h),c=x,f=w,k=b(_("u-checkbox"),V),U=b(_("u-button"),y);return t(),r(f,{class:"register bg-white min-h-full flex flex-col items-center px-[40rpx] pt-[40rpx] box-border"},{default:u((()=>[d(f,{class:"w-full"},{default:u((()=>[d(l,{borderBottom:"","label-width":150},{default:u((()=>[d(o,{label:"创建账号",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",modelValue:B.username,"onUpdate:modelValue":a[0]||(a[0]=e=>B.username=e),border:!1,placeholder:"请输入账号"},null,8,["modelValue"])])),_:1}),d(o,{label:"设置密码",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",type:"password",modelValue:B.password,"onUpdate:modelValue":a[1]||(a[1]=e=>B.password=e),placeholder:"6-20位数字+字母或符号组合",border:!1},null,8,["modelValue"])])),_:1}),d(o,{label:"确认密码",borderBottom:""},{default:u((()=>[d(s,{class:"flex-1",type:"password",modelValue:B.password2,"onUpdate:modelValue":a[2]||(a[2]=e=>B.password2=e),placeholder:"请确认密码",border:!1},null,8,["modelValue"])])),_:1})])),_:1}),m($)?(t(),r(f,{key:0,class:"mt-[40rpx]"},{default:u((()=>[d(k,{modelValue:j.value,"onUpdate:modelValue":a[5]||(a[5]=e=>j.value=e),shape:"circle"},{default:u((()=>[d(f,{class:"text-xs flex"},{default:u((()=>[p(" 已阅读并同意 "),d(f,{onClick:a[3]||(a[3]=n((()=>{}),["stop"]))},{default:u((()=>[d(c,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=service"},{default:u((()=>[p(" 《服务协议》 ")])),_:1})])),_:1}),p(" 和 "),d(f,{onClick:a[4]||(a[4]=n((()=>{}),["stop"]))},{default:u((()=>[d(c,{class:"text-primary","hover-class":"none",url:"/pages/agreement/agreement?type=privacy"},{default:u((()=>[p(" 《隐私协议》 ")])),_:1})])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1})):i("v-if",!0),d(f,{class:"mt-[60rpx]"},{default:u((()=>[d(U,{type:"primary",shape:"circle",onClick:C},{default:u((()=>[p(" 注册 ")])),_:1})])),_:1})])),_:1})])),_:1})}}}),[["__scopeId","data-v-5a57eecc"]]);export{k as default};
