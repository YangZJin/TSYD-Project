import{_ as B}from"./index.065f20cf.js";import{K as C,I as h,C as w,D as b,F as g,w as V}from"./element-plus.fa1aa32c.js";import{r as d,f as I}from"./index.b4f64333.js";import{d as _,a0 as x,ag as S,o as c,c as k,V as e,M as u,a,O as y,L as N,T}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";function U(p){return d.post({url:"/channel/op/save",params:p})}function W(){return d.get({url:"/channel/op/detail"})}const q=a("div",{class:"font-medium mb-7"},"\u7F51\u7AD9\u5E94\u7528",-1),K={class:"w-80"},L={class:"w-80"},M=T("\u4FDD\u5B58"),O=_({name:"wxDevConfig"}),ve=_({...O,setup(p){const t=x({appId:"",appSecret:""}),n=async()=>{const l=await W();for(const o in t)t[o]=l[o]},F=async()=>{await U(t),n(),I.msgSuccess("\u64CD\u4F5C\u6210\u529F")};return n(),(l,o)=>{const f=C,s=h,i=w,m=b,E=g,D=V,v=B,A=S("perms");return c(),k("div",null,[e(s,{class:"!border-none",shadow:"never"},{default:u(()=>[e(f,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u586B\u5199\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5F00\u53D1\u914D\u7F6E\uFF0C\u8BF7\u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u521B\u5EFA\u5E94\u7528\u5E76\u5B8C\u6210\u8BA4\u8BC1\uFF1B\u7F51\u7AD9\u5E94\u7528\u914D\u7F6E\u4E3B\u8981\u7528\u4E8E\u7F51\u7AD9\u5FAE\u4FE1\u767B\u5F55\u548C\u5FAE\u4FE1\u652F\u4ED8",closable:!1,"show-icon":""})]),_:1}),e(E,{ref:"formRef",model:t,"label-width":"160px"},{default:u(()=>[e(s,{class:"!border-none mt-4",shadow:"never"},{default:u(()=>[q,e(m,{label:"AppID",prop:"appId"},{default:u(()=>[a("div",K,[e(i,{modelValue:t.appId,"onUpdate:modelValue":o[0]||(o[0]=r=>t.appId=r),placeholder:"\u8BF7\u8F93\u5165AppID"},null,8,["modelValue"])])]),_:1}),e(m,{label:"AppSecret",prop:"appSecret"},{default:u(()=>[a("div",null,[a("div",L,[e(i,{modelValue:t.appSecret,"onUpdate:modelValue":o[1]||(o[1]=r=>t.appSecret=r),placeholder:"\u8BF7\u8F93\u5165AppSecret"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1},8,["model"]),y((c(),N(v,null,{default:u(()=>[e(D,{type:"primary",onClick:F},{default:u(()=>[M]),_:1})]),_:1})),[[A,["channel:op:save"]]])])}}});export{ve as default};
