"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[8910],{5464:(e,a,l)=>{l.d(a,{A:()=>o});var t=l(6540),s=l(4848);const c=(e,a)=>{let{contentWidth:l,id:c,wrapperWidth:n,valueKey:o="value",labelKey:r="label",returnType:i,suffixContentType:d="button",suffixContent:u,name:m,isFormItem:p,errMsg:h,labelWidth:f,commonSuffixIcon:x,readOnly:b,label:v,labelPosition:k,labelColor:y,inputGroup:g=!1,required:w=!1,externalClassName:C,inline:j=!0,options:N=[],defaultValue:I,wrap:S=!0,onChange:$,onFormDataChange:A,onFieldChange:F,onValidateField:D}=e;const W=(0,t.useId)(),_=(e,a)=>"string"==typeof a?e===a:Array.isArray(a)?"string"!=typeof a[0]?a.some((a=>a.value===e)):a.some((a=>a===e)):a?.[o]===e||a?.[r]===e,V=N.map((e=>({...e,checked:_(e.value,I)}))),[q,B]=(0,t.useState)(V),G=e=>{F&&F(m,e)},K=e=>{D&&D(m,e)},O=()=>{const e=q.filter((e=>e.checked));K(e)},[R,T]=(0,t.useState)(!1),z=()=>!w||(q.some((e=>e.checked))?(T(!1),!0):(T(!0),!1)),E=()=>{B(q.map((e=>(e.checked=!1,e))))};return(0,t.useImperativeHandle)(a,(()=>({validate:z,clear:E}))),(0,t.useEffect)((()=>{const e=N.map((e=>({...e,checked:_(e.value,I)})));B(e)}),[I,N]),(0,s.jsxs)("div",{className:`${!R&&p?"mb-3":""} checkbox-wrapper ${C}`,style:{width:n},children:[(0,s.jsxs)("div",{className:"content-box d-flex "+(g?"inputGroup":`label-in-${k}`),children:[v&&(0,s.jsx)("span",{style:{color:y,width:f},className:(g?"input-group-text":"")+" label-box",children:v}),(0,s.jsxs)("div",{className:"checkbox-form-content option-box",style:{display:j?"flex":"block",width:l,flexWrap:S?"wrap":"nowrap",...l?{}:{flex:1}},children:[q.map(((e,l)=>(0,s.jsxs)("div",{className:"form-check "+(l!==q.length-1?"me-2":""),style:{textAlign:"left",marginRight:"20px",marginBottom:0},children:[(0,s.jsx)("input",{ref:a,required:w,onBlur:O,className:"form-check-input",type:"checkbox",name:m,id:(c||W)+e.value,checked:e.checked,onChange:()=>(e=>{const a=q.map((a=>(a.value===e.value&&(a.checked=!a.checked),a)));B(a);const l=a.filter((e=>e.checked));if($&&$(l),"obj"===i)A&&A(m,l),G(l),K(l);else{const e=l.map((e=>e[o||r]));A&&A(m,e),G(e),K(e)}a.some((e=>e.checked))?T(!1):w&&T(!0)})(e),value:e.value,readOnly:b}),(0,s.jsx)("label",{className:"form-check-label",htmlFor:c||W+e.value,children:e.label||"Default Checkbox"})]},e.value))),u&&(0,s.jsx)("div",{className:""+("button"===d?"suffix-content-btn-wrapper px-2":"ms-2"),children:u})]}),x&&(0,s.jsx)("i",{onClick:()=>{E(),T(!0)},className:`${x} common-suffix-icon ms-2`})]}),R&&w&&(0,s.jsx)("div",{className:"fadeInDown mb-1",style:{color:"#DC3545",fontSize:"14px",paddingLeft:parseInt(f)>120?"120px":f},children:`${h||`${v||m}\u4e0d\u80fd\u4e3a\u7a7a`}`})]})},n=(0,t.forwardRef)(c);n.displayName="Checkbox";const o=n},8030:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});var t=l(6540),s=l(5464),c=l(4848);const n=e=>{let{}=e;const[a,l]=(0,t.useState)([{label:"\u82f9\u679c",value:"\u82f9\u679c"},{label:"\u9999\u8549",value:"\u9999\u8549"},{label:"\u6a59\u5b50",value:"\u6a59\u5b50"},{label:"\u897f\u74dc",value:"\u897f\u74dc"},{label:"\u8461\u8404",value:"\u8461\u8404"}]),[n,o]=(0,t.useState)(["\u9999\u8549","\u6a59\u5b50"]);return(0,c.jsx)("div",{className:"default-value-wrapper",children:(0,c.jsx)(s.A,{label:"\u98df\u7269",options:a,defaultValue:n})})}}}]);