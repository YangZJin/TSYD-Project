import{K as w,_ as C,I as v,L as A,w as k,M as y,N as D}from"./element-plus.fa1aa32c.js";import{_ as x,s as L}from"./edit.vue_vue_type_script_setup_true_lang.f1fa7908.js";import{d as F,s as T,a0 as N,ag as R,o as a,c as V,V as t,M as e,O as d,L as u,T as l}from"./@vue.cab01781.js";import"./@vueuse.724ed0af.js";import"./@element-plus.92b4185f.js";import"./lodash-es.29c53eac.js";import"./dayjs.22a46fd8.js";import"./axios.8058589d.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.82a509e0.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.b4f64333.js";import"./lodash.bbe6f09f.js";import"./vue-router.5046cc50.js";import"./pinia.e85e8286.js";import"./vue-demi.bfae2336.js";import"./css-color-function.5bd363c0.js";import"./color.232115c1.js";import"./clone.8f44c0eb.js";import"./color-convert.69e17089.js";import"./color-string.e356f5de.js";import"./color-name.e7a4e1d3.js";import"./nprogress.404eaa9c.js";import"./vue-clipboard3.19ab9072.js";import"./clipboard.6fb7c109.js";import"./echarts.6ad8c478.js";import"./zrender.f91f2f01.js";import"./highlight.js.4ebdf9a4.js";import"./@highlightjs.0ab41b7b.js";import"./index.8bea8b0f.js";const M={class:"storage"},S=l("\u5F00\u542F"),$=l("\u5173\u95ED"),z=l(" \u8BBE\u7F6E "),I=F({name:"storage"}),ht=F({...I,setup(K){const c=T(),o=N({loading:!1,lists:[]}),m=async()=>{try{o.loading=!0,o.lists=await L(),o.loading=!1}catch{o.loading=!1}},f=i=>{var r;(r=c.value)==null||r.open(i)};return m(),(i,r)=>{const g=w,p=v,s=A,_=C,B=k,E=y,h=R("perms"),b=D;return a(),V("div",M,[t(p,{class:"!border-none",shadow:"never"},{default:e(()=>[t(g,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A1.\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\u540E\uFF0C\u9700\u8981\u5C06\u8D44\u6E90\u6587\u4EF6\u4F20\u8F93\u81F3\u65B0\u7684\u5B58\u50A8\u7AEF\uFF1B2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B",closable:!1,"show-icon":""})]),_:1}),d((a(),u(p,{class:"!border-none mt-4",shadow:"never"},{default:e(()=>[t(E,{size:"large",data:o.lists},{default:e(()=>[t(s,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(s,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"describe","min-width":"160"}),t(s,{label:"\u72B6\u6001","min-width":"80"},{default:e(({row:n})=>[n.status==1?(a(),u(_,{key:0},{default:e(()=>[S]),_:1})):(a(),u(_,{key:1,type:"danger"},{default:e(()=>[$]),_:1}))]),_:1}),t(s,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:e(({row:n})=>[d((a(),u(B,{type:"primary",link:"",onClick:O=>f(n.alias)},{default:e(()=>[z]),_:2},1032,["onClick"])),[[h,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[b,o.loading]]),t(x,{ref_key:"editRef",ref:c,onSuccess:m},null,512)])}}});export{ht as default};
