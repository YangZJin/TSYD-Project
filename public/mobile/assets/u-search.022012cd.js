import{D as e,r as t,a as o,o as l,c as a,w as r,b as s,x as c,h as i,l as n,t as u,s as d,v as h,k as p,I as y}from"./index.28d89b6b.js";import{_ as f}from"./u-icon.be7b466a.js";import{_ as m}from"./plugin-vue_export-helper.21dcd24c.js";var g=m({name:"u-search",emits:["update:modelValue","input","change","search","custom","clear","focus","blur"],props:{value:{type:String,default:""},modelValue:{type:String,default:""},shape:{type:String,default:"round"},bgColor:{type:String,default:"#f2f2f2"},placeholder:{type:String,default:"请输入关键字"},clearabled:{type:Boolean,default:!0},focus:{type:Boolean,default:!1},showAction:{type:Boolean,default:!0},actionStyle:{type:Object,default:()=>({})},actionText:{type:String,default:"搜索"},inputAlign:{type:String,default:"left"},disabled:{type:Boolean,default:!1},animation:{type:Boolean,default:!1},borderColor:{type:String,default:"none"},height:{type:[Number,String],default:64},inputStyle:{type:Object,default:()=>({})},maxlength:{type:[Number,String],default:"-1"},searchIconColor:{type:String,default:""},color:{type:String,default:"#606266"},placeholderColor:{type:String,default:"#909399"},margin:{type:String,default:"0"},searchIcon:{type:String,default:"search"}},data(){return{keyword:"",showClear:!1,show:!1,focused:this.focus}},watch:{keyword(e){this.$emit("input",e),this.$emit("update:modelValue",e),this.$emit("change",e)},valueCom:{immediate:!0,handler(e){this.keyword=e}}},computed:{valueCom(){return this.modelValue},showActionBtn(){return!(this.animation||!this.showAction)},borderStyle(){return this.borderColor?`1px solid ${this.borderColor}`:"none"}},methods:{inputChange(e){this.keyword=e.detail.value},clear(){this.keyword="",this.$nextTick((()=>{this.$emit("clear")}))},search(t){this.$emit("search",t.detail.value);try{e()}catch(o){}},custom(){this.$emit("custom",this.keyword);try{e()}catch(t){}},getFocus(){this.focused=!0,this.animation&&this.showAction&&(this.show=!0),this.$emit("focus",this.keyword)},blur(){setTimeout((()=>{this.focused=!1}),100),this.show=!1,this.$emit("blur",this.keyword)},clickHandler(){this.disabled&&this.$emit("click")}}},[["render",function(e,m,g,b,C,k){const w=t(o("u-icon"),f),S=p,x=y;return l(),a(S,{class:"u-search",onClick:k.clickHandler,style:c({margin:g.margin})},{default:r((()=>[s(S,{class:"u-content",style:c({backgroundColor:g.bgColor,borderRadius:"round"==g.shape?"100rpx":"10rpx",border:k.borderStyle,height:g.height+"rpx"})},{default:r((()=>[s(S,{class:"u-icon-wrap"},{default:r((()=>[s(w,{class:"u-clear-icon",size:30,name:g.searchIcon,color:g.searchIconColor?g.searchIconColor:g.color},null,8,["name","color"])])),_:1}),s(x,{"confirm-type":"search",onBlur:k.blur,value:k.valueCom,onConfirm:k.search,onInput:k.inputChange,disabled:g.disabled,onFocus:k.getFocus,focus:g.focus,maxlength:g.maxlength,"placeholder-class":"u-placeholder-class",placeholder:g.placeholder,"placeholder-style":`color: ${g.placeholderColor}`,class:"u-input",type:"text",style:c([{textAlign:g.inputAlign,color:g.color,backgroundColor:g.bgColor},g.inputStyle])},null,8,["onBlur","value","onConfirm","onInput","disabled","onFocus","focus","maxlength","placeholder","placeholder-style","style"]),C.keyword&&g.clearabled&&C.focused?(l(),a(S,{key:0,class:"u-close-wrap",onClick:k.clear},{default:r((()=>[s(w,{class:"u-clear-icon",name:"close-circle-fill",size:"34",color:"#c0c4cc"})])),_:1},8,["onClick"])):i("v-if",!0)])),_:1},8,["style"]),s(S,{style:c([g.actionStyle]),class:d(["u-action",[k.showActionBtn||C.show?"u-action-active":""]]),onClick:h(k.custom,["stop","prevent"])},{default:r((()=>[n(u(g.actionText),1)])),_:1},8,["style","class","onClick"])])),_:1},8,["onClick","style"])}],["__scopeId","data-v-47eb8750"]]);export{g as _};
