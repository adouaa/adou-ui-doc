"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2665],{5464:(e,a,l)=>{l.d(a,{A:()=>o});var t=l(6540),s=l(4848);const n=(e,a)=>{let{contentWidth:l,id:n,wrapperWidth:c,valueKey:o="value",labelKey:i="label",returnType:r,suffixContentType:d="button",suffixContent:p,name:m,isFormItem:u,errMsg:h,labelWidth:f,commonSuffixIcon:x,readOnly:b,label:k,labelPosition:v,labelColor:y,inputGroup:g=!1,required:w=!1,externalClassName:C,inline:j=!0,options:N=[],defaultValue:I,wrap:$=!0,onChange:A,onFormDataChange:F,onFieldChange:D,onValidateField:O}=e;const S=(0,t.useId)(),W=(e,a)=>"string"==typeof a?e===a:Array.isArray(a)?"string"!=typeof a[0]?a.some((a=>a.value===e)):a.some((a=>a===e)):a?.[o]===e||a?.[i]===e,_=N.map((e=>({...e,checked:W(e.value,I)}))),[q,B]=(0,t.useState)(_),G=e=>{D&&D(m,e)},K=e=>{O&&O(m,e)},R=()=>{const e=q.filter((e=>e.checked));K(e)},[T,V]=(0,t.useState)(!1),z=()=>!w||(q.some((e=>e.checked))?(V(!1),!0):(V(!0),!1)),E=()=>{B(q.map((e=>(e.checked=!1,e))))};return(0,t.useImperativeHandle)(a,(()=>({validate:z,clear:E}))),(0,t.useEffect)((()=>{const e=N.map((e=>({...e,checked:W(e.value,I)})));B(e)}),[I,N]),(0,s.jsxs)("div",{className:`${!T&&u?"mb-3":""} checkbox-wrapper ${C}`,style:{width:c},children:[(0,s.jsxs)("div",{className:"content-box d-flex "+(g?"inputGroup":`label-in-${v}`),children:[k&&(0,s.jsx)("span",{style:{color:y,width:f},className:(g?"input-group-text":"")+" label-box",children:k}),(0,s.jsxs)("div",{className:"checkbox-form-content option-box",style:{display:j?"flex":"block",width:l,flexWrap:$?"wrap":"nowrap",...l?{}:{flex:1}},children:[q.map(((e,l)=>(0,s.jsxs)("div",{className:"form-check "+(l!==q.length-1?"me-2":""),style:{textAlign:"left",marginRight:"20px",marginBottom:0},children:[(0,s.jsx)("input",{ref:a,required:w,onBlur:R,className:"form-check-input",type:"checkbox",name:m,id:(n||S)+e.value,checked:e.checked,onChange:()=>(e=>{const a=q.map((a=>(a.value===e.value&&(a.checked=!a.checked),a)));B(a);const l=a.filter((e=>e.checked));if(A&&A(l),"obj"===r)F&&F(m,l),G(l),K(l);else{const e=l.map((e=>e[o||i]));F&&F(m,e),G(e),K(e)}a.some((e=>e.checked))?V(!1):w&&V(!0)})(e),value:e.value,readOnly:b}),(0,s.jsx)("label",{className:"form-check-label",htmlFor:n||S+e.value,children:e.label||"Default Checkbox"})]},e.value))),p&&(0,s.jsx)("div",{className:""+("button"===d?"suffix-content-btn-wrapper px-2":"ms-2"),children:p})]}),x&&(0,s.jsx)("i",{onClick:()=>{E(),V(!0)},className:`${x} common-suffix-icon ms-2`})]}),T&&w&&(0,s.jsx)("div",{className:"fadeInDown mb-1",style:{color:"#DC3545",fontSize:"14px",paddingLeft:parseInt(f)>120?"120px":f},children:`${h||`${k||m}\u4e0d\u80fd\u4e3a\u7a7a`}`})]})},c=(0,t.forwardRef)(n);c.displayName="Checkbox";const o=c},3415:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});l(6540);var t=l(5464),s=l(4848);const n=e=>{let{}=e;return(0,s.jsx)("div",{className:"basic-wrapper",children:(0,s.jsx)(t.A,{label:"\u98df\u7269",options:[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"}]})})}}}]);