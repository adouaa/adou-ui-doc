"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[9572],{5464:(e,a,l)=>{l.d(a,{A:()=>o});var s=l(6540),t=l(4848);const c=(e,a)=>{let{contentWidth:l,id:c,wrapperWidth:n,valueKey:o="value",labelKey:r="label",returnType:i,suffixContentType:d="button",suffixContent:u,name:m,isFormItem:p,errMsg:h,labelWidth:f,commonSuffixIcon:x,readOnly:b,label:v,labelPosition:k,labelColor:y,inputGroup:g=!1,required:w=!1,externalClassName:C,inline:j=!0,options:N=[],defaultValue:I,wrap:$=!0,onChange:A,onFormDataChange:F,onFieldChange:S,onValidateField:D}=e;const W=(0,s.useId)(),_=(e,a)=>"string"==typeof a?e===a:Array.isArray(a)?"string"!=typeof a[0]?a.some((a=>a.value===e)):a.some((a=>a===e)):a?.[o]===e||a?.[r]===e,q=N.map((e=>({...e,checked:_(e.value,I)}))),[B,G]=(0,s.useState)(q),K=e=>{S&&S(m,e)},M=e=>{D&&D(m,e)},O=()=>{const e=B.filter((e=>e.checked));M(e)},[R,T]=(0,s.useState)(!1),V=()=>!w||(B.some((e=>e.checked))?(T(!1),!0):(T(!0),!1)),z=()=>{G(B.map((e=>(e.checked=!1,e))))};return(0,s.useImperativeHandle)(a,(()=>({validate:V,clear:z}))),(0,s.useEffect)((()=>{const e=N.map((e=>({...e,checked:_(e.value,I)})));G(e)}),[I,N]),(0,t.jsxs)("div",{className:`${!R&&p?"mb-3":""} checkbox-wrapper ${C}`,style:{width:n},children:[(0,t.jsxs)("div",{className:"content-box d-flex "+(g?"inputGroup":`label-in-${k}`),children:[v&&(0,t.jsx)("span",{style:{color:y,width:f},className:(g?"input-group-text":"")+" label-box",children:v}),(0,t.jsxs)("div",{className:"checkbox-form-content option-box",style:{display:j?"flex":"block",width:l,flexWrap:$?"wrap":"nowrap",...l?{}:{flex:1}},children:[B.map(((e,l)=>(0,t.jsxs)("div",{className:"form-check "+(l!==B.length-1?"me-2":""),style:{textAlign:"left",marginRight:"20px",marginBottom:0},children:[(0,t.jsx)("input",{ref:a,required:w,onBlur:O,className:"form-check-input",type:"checkbox",name:m,id:(c||W)+e.value,checked:e.checked,onChange:()=>(e=>{const a=B.map((a=>(a.value===e.value&&(a.checked=!a.checked),a)));G(a);const l=a.filter((e=>e.checked));if(A&&A(l),"obj"===i)F&&F(m,l),K(l),M(l);else{const e=l.map((e=>e[o||r]));F&&F(m,e),K(e),M(e)}a.some((e=>e.checked))?T(!1):w&&T(!0)})(e),value:e.value,readOnly:b}),(0,t.jsx)("label",{className:"form-check-label",htmlFor:c||W+e.value,children:e.label||"Default Checkbox"})]},e.value))),u&&(0,t.jsx)("div",{className:""+("button"===d?"suffix-content-btn-wrapper px-2":"ms-2"),children:u})]}),x&&(0,t.jsx)("i",{onClick:()=>{z(),T(!0)},className:`${x} common-suffix-icon ms-2`})]}),R&&w&&(0,t.jsx)("div",{className:"fadeInDown mb-1",style:{color:"#DC3545",fontSize:"14px",paddingLeft:parseInt(f)>120?"120px":f},children:`${h||`${v||m}\u4e0d\u80fd\u4e3a\u7a7a`}`})]})},n=(0,s.forwardRef)(c);n.displayName="Checkbox";const o=n},9626:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});var s=l(6540),t=l(5464),c=l(4848);const n=e=>{let{}=e;const[a,l]=(0,s.useState)([{label:"\u82f9\u679c",value:"\u82f9\u679c"},{label:"\u9999\u8549",value:"\u9999\u8549"},{label:"\u6a59\u5b50",value:"\u6a59\u5b50"},{label:"\u897f\u74dc",value:"\u897f\u74dc"},{label:"\u8461\u8404",value:"\u8461\u8404"}]);return(0,c.jsx)("div",{className:"basic-wrapper",children:(0,c.jsx)(t.A,{required:!0,errMsg:"\u8bf7\u9009\u62e9\u4e00\u79cd\u98df\u7269\u54e6~",label:"\u98df\u7269",options:a})})}}}]);