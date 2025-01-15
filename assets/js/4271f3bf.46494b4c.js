"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[1184],{833:(e,l,t)=>{t.d(l,{A:()=>r});var n=t(6540),a=t(4848);const o=(e,l)=>{let{title:t,wrap:o,wrapperClassName:r,backgroundColor:s,inputStyle:i,prefix:d,suffix:u,addonBefore:c,addonAfter:p,varient:f="outlined",valueKey:x,labelKey:m,wrapperWidth:b,wrapperStyle:h,clearable:g=!1,commonSuffixContent:y,formStyle:C,suffixContentExternalClassName:v,inputExternalClassName:N,textEnd:j,name:w,errMsg:k,labelWidth:S,commonSuffixIcon:R,width:$="100%",label:z,layout:E="horizontal",labelColor:F,required:I=!1,type:B="text",defaultValue:_,size:A,externalClassName:L,prefixContent:M,suffixContent:T,suffixContentType:W="button",placeholder:q,style:K,disabled:P,transparent:V,children:D,onClick:H,onFocus:O,onBlur:G,onChange:J,onIconClick:Q,onFormDataChange:U,onFieldChange:X,onValidateField:Y}=e;const[Z,ee]=(0,n.useState)(_??""),[le,te]=(0,n.useState)(!1),[ne,ae]=(0,n.useState)(!1),oe=(0,n.useRef)(null),re=(0,n.useRef)(null),[se,ie]=(0,n.useState)(!1),de=e=>{X&&X(w,e)},ue=e=>{Y&&Y(w,e)},ce=()=>{},pe=()=>{ee("")},fe=()=>P?"#eee":"filled"===f?"#f0f0f0":s||"transparent",xe=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("input",{className:`input border-0 flex-fill ${j||"number"===B?"text-end":""} ${T&&"button"===W?"suffix-content-btn":""} ${N||""} `,ref:oe,required:I,style:{flex:1,width:$,outline:"none",..."filled"===f&&{backgroundColor:"transparent"},...c&&{borderTopLeftRadius:0,borderBottomLeftRadius:0},...p&&{borderTopRightRadius:0,borderBottomRightRadius:0},height:"lg"===A?"48px":"sm"===A?"32px":"40px",backgroundColor:fe(),cursor:P?"not-allowed":"auto",borderRadius:"0.375rem",...i},step:1,name:w,value:Z,readOnly:P,placeholder:q,onChange:function(e){const l=e.target.value,t="number"===B?Number(l):l;ee(l),J&&J(t),U&&U(w,t),de&&de(t),ue(l)},onBlur:e=>function(e){G&&G(e),ue(Z),"filled"===f&&re.current&&(re.current.style.backgroundColor="#f0f0f0"),ae(!1)}(e),onFocus:e=>function(e){e.stopPropagation(),"filled"===f&&re.current&&!P&&(re.current.style.backgroundColor="",ae(!0)),O&&O(e)}(e),onClick:e=>function(e){e.stopPropagation(),H&&H(e)}(e),type:B}),u&&(0,a.jsx)("div",{className:"suffix-box",children:u}),g&&Z?(0,a.jsx)("span",{className:"adou-input-clear-icon-box fade-enter me-1",style:{top:"sm"===A?"2px":"lg"===A?" 10px":"6px"},children:(0,a.jsx)("i",{className:"adou-input-clear-icon fa-regular fa-circle-xmark text-secondary flex-fill",style:{fontSize:"12px",cursor:"pointer"},onClick:()=>{pe(),de(""),de(""),console.log("5: ",5),ue("")}})}):(0,a.jsx)("div",{className:"adou-input-common-sufiix-content position-absolute text-secondary",style:{right:"14px",top:"sm"===A?"14%":"lg"===A?" 26%":"18%"},children:y})]});(0,n.useImperativeHandle)(l,(()=>({validate:ce,clear:pe}))),(0,n.useEffect)((()=>{ee(_||0===_?_:""),_&&ie(!1)}),[_]);(0,n.useRef)();return(0,n.useEffect)((()=>{}),[]),(0,a.jsx)("div",{title:t||z,onMouseEnter:()=>{te(!0)},onMouseLeave:()=>{te(!1)},className:`adou-input-wrapper position-relative ${r||""}`,style:{...h,...b?{width:b}:{flex:1},cursor:P?"not-allowed":"auto"},children:z||!p&&!c?(0,a.jsxs)("div",{className:`adou-input flex-fill ${(()=>{switch(E){case"horizontal":return"adou-input-label-horizontal";case"horizontal-top":return"adou-input-label-horizontal-top";case"vertical":return"adou-input-label-vertical"}})()}`,children:[z&&(0,a.jsx)("span",{className:"pe-3 "+("vertical"===E?"pb-1":""),style:{width:S||22*z.length,whiteSpace:"nowrap"},children:z}),(0,a.jsxs)("div",{tabIndex:1,style:{width:"100%",..."filled"===f&&{backgroundColor:"#f0f0f0",border:"none"},border:"outlined"===f?"1px solid #ced4da":"",backgroundColor:fe(),...C},ref:re,className:`adou-input-form-content flex-fill d-flex align-items-center ${ne?"adou-form-control-focus":""} ${"borderless"===f?"border-0":"filled"!==f||p||c?"":"border-0"} ${"number"!==B?"px-2":""}`,children:[d&&(0,a.jsx)("div",{className:"prefix-box",children:d}),(0,a.jsx)("div",{className:"input-box flex-fill d-flex align-items-center "+("number"!==B?"px-2":""),children:xe})]})]}):(0,a.jsx)("div",{className:"adou-input",children:(0,a.jsxs)("div",{className:"input-group",style:{flexWrap:o?"wrap":"nowrap"},children:[c&&(0,a.jsx)("span",{className:"input-group-text py-0",style:{fontSize:"14px"},children:c}),(0,a.jsxs)("div",{style:{..."filled"===f&&{border:c||p?"":"none"},...C,backgroundColor:fe(),border:"outlined"===f?"1px solid #ced4da":""},ref:re,tabIndex:1,className:`adou-input-form-content d-flex flex-fill align-items-center ${ne?"adou-form-control-focus":""} ${"number"!==B?"px-2":""}`,children:[d&&(0,a.jsx)("div",{className:"prefix-box",children:d}),(0,a.jsx)("div",{className:"input-box flex-fill d-flex  align-items-center "+("number"!==B?"px-2":""),children:xe})]}),p&&(0,a.jsx)("span",{className:"input-group-text py-0",style:{fontSize:"14px"},children:p&&p})]})})})};o.displayName="Input";const r=(0,n.forwardRef)(o)},2541:(e,l,t)=>{t.r(l),t.d(l,{default:()=>o});t(6540);var n=t(833),a=t(4848);const o=()=>(0,a.jsx)("div",{className:"clearable-wrapper",children:(0,a.jsx)(n.A,{clearable:!0,placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9"})})}}]);