"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[7520],{2639:(e,n,s)=>{s.d(n,{A:()=>i});var l=s(6540),a=s(4848);const i=e=>{const{fontSize:n,spinerType:s="border",spinerColor:i,loading:r,suffixIcon:t,prefixIcon:o,children:d,type:c="primary",size:m="md",externalClassName:u,round:p,textColor:h,disabled:x,outlineColor:b,onClick:g}=e,j=()=>l.Children.map(d,(e=>{if(!l.isValidElement(e)){e=(0,a.jsx)("span",{children:e});return l.cloneElement(e,{style:{fontSize:n}})}}));return(0,a.jsx)("span",{className:"button-wrapper",children:(0,a.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{g&&g()},className:`btn  btn-${m} ${p?"rounded-pill":""} ${h?`text-${h}`:""} ${b?`btn-outline-${b}`:`btn-${c}`} ${x?"disabled":""} ${u}`,disabled:r,children:r?(0,a.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return l.Children.map(d,(n=>{n.props?.className?.includes("loader")&&(e=!0)})),e?l.Children.map(d,(e=>{if(e.props?.className.includes("loader"))return e})):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:`me-2 spinner-${s} spinner-${s}-sm text-${i}`,role:"status"})})})(),j()]}):(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("i",{className:`${o}`}),j(),t&&(0,a.jsx)("i",{className:`${t}`})]})})})}},2115:(e,n,s)=>{s.d(n,{A:()=>c});var l=s(6540),a=s(5338),i=s(4848);const r=e=>{let{icon:n,text:s}=e;return(0,i.jsxs)("div",{className:"loading-overlay",children:[n||(0,i.jsx)("div",{className:"loading-spinner"}),(0,i.jsx)("span",{className:" ms-2",children:s||"Loading..."})]})};let t=0,o=null,d=null;const c=()=>{const[e,n]=(0,l.useState)(!1);(0,l.useEffect)((()=>{o||(o=(()=>{const e=document.createElement("div");e.className="loading-wrapper",document.body.appendChild(e),d=(0,a.createRoot)(e);const n=(e,n,s)=>{d?.render(e?(0,i.jsx)(r,{icon:n,text:s}):null)};return{show:(e,s)=>{n(!0,e,s)},hide:()=>{n(!1)}}})())}),[]);return{loading:e,showLoading:(e,s)=>{t++,n(!0),o?.show(e,s)},hideLoading:()=>{t--,t<=0&&(t=0,n(!1),o?.hide())}}}},2258:(e,n,s)=>{s.r(n),s.d(n,{default:()=>r});s(6540);var l=s(2115),a=s(2639),i=s(4848);const r=()=>{const{showLoading:e,hideLoading:n}=(0,l.A)();return(0,i.jsx)(a.A,{onClick:async()=>{e();try{await new Promise((e=>setTimeout(e,2e3)))}finally{n()}},children:"\u6267\u884c\u5f02\u6b65\u64cd\u4f5c"})}}}]);