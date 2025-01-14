/*! For license information please see 3ec6a137.6427a9c1.js.LICENSE.txt */
(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[5780],{3741:(e,t,r)=>{"use strict";r.d(t,{A:()=>i});var a=r(6540),n=r(6942),o=r.n(n),s=r(4848);const i=a.forwardRef(((e,t)=>{const{rows:r,suffixContentType:n="button",suffixContent:i,errMsg:l,inline:u,isFormItem:c,labelWidth:d,labelColor:f,commonSuffixIcon:p,readOnly:m,externalClassName:h,width:x,inputGroup:g=!1,labelPosition:v="center",required:y=!1,name:b,label:w,placeholder:R,disabled:j,defaultValue:C,onChangeOK:N,onFormDataChange:S,autoSize:$}=e,[_,k]=(0,a.useState)(C??""),A=(0,a.useRef)(null),I=()=>{if(A.current&&$?.minRows&&$?.maxRows){A.current.style.height;const e=28,t=$.minRows*e,r=$.maxRows*e;A.current.style.height="auto";const a=Math.min(Math.max(A.current.scrollHeight,t),r);A.current.style.overflowY=a>=r?"auto":"hidden",A.current.style.height=`${a}px`}},[O,z]=(0,a.useState)(!1),F=()=>!y||(_?(z(!1),!0):(z(!0),!1)),M=()=>{k("")};(0,a.useImperativeHandle)(t,(()=>({validate:F,clear:M})));const q=o()({"textarea-warpper":!0,[h]:h});return(0,a.useEffect)((()=>{k(C||""),I()}),[C]),(0,s.jsxs)("div",{className:`${q} ${!O&&c&&"mb-3"}`,style:{width:x},children:[(0,s.jsxs)("div",{className:`label-in-${v} ${g?"input-group":""}`,children:[w&&(0,s.jsx)("span",{style:{color:f,width:d},className:(g?"input-group-text":"")+" label-box",children:w}),(0,s.jsxs)("div",{className:"textarea-form-content "+("top"===v&&u?"me-2":""),children:[(0,s.jsx)("textarea",{ref:A,style:{width:x,...u&&!x?{flex:1,marginRight:"15px"}:{},...i&&"button"===n?{borderTopRightRadius:0,borderBottomRightRadius:0}:{},resize:$?"none":"vertical"},rows:r,readOnly:m,required:y,name:b,value:_,disabled:j,onBlur:e=>{F()},onChange:e=>function(e){k(e.target.value),I();for(var t=arguments.length,r=new Array(t>1?t-1:0),a=1;a<t;a++)r[a-1]=arguments[a];N&&N(e.target.value,...r),S&&S(b,e.target.value)}(e),placeholder:R,className:"form-control","aria-label":"With textarea"}),i&&(0,s.jsx)("div",{className:""+("button"===n?"suffix-content-btn-wrapper px-2":"ms-2"),children:i})]}),p&&(0,s.jsx)("i",{onClick:()=>{k(""),z(!0)},className:`${p} common-suffix-icon ms-2`})]}),O&&y&&(0,s.jsx)("div",{className:"animate__animated animate__fadeIn",style:{color:"#DC3545",paddingLeft:parseInt(d)>120?"120px":parseFloat(d)+20+"px"},children:`${l||`${w||b}\u4e0d\u80fd\u4e3a\u7a7a`}`})]})}))},7242:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});r(6540);var a=r(3741),n=r(4848);const o=()=>(0,n.jsx)("div",{className:"auto-size-wrapper",children:(0,n.jsx)(a.A,{autoSize:{minRows:2,maxRows:4},defaultValue:"\u8fd9\u662f\u4e00\u6bb5\u6587\u5b57"})})},6942:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=s(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=s(t,r));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}}]);