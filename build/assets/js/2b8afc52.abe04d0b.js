"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[7546],{2639:(e,n,s)=>{s.d(n,{A:()=>r});var l=s(6540),a=s(4848);const r=e=>{const{fontSize:n,spinerType:s="border",spinerColor:r,loading:t,suffixIcon:i,prefixIcon:o,children:d,type:c="primary",size:u="md",externalClassName:m,round:p,textColor:h,disabled:x,outlineColor:b,onClickOK:g}=e,j=()=>l.Children.map(d,(e=>{if(!l.isValidElement(e)){e=(0,a.jsx)("span",{children:e});return l.cloneElement(e,{style:{fontSize:n}})}}));return(0,a.jsx)("span",{className:"button-wrapper",children:(0,a.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{g&&g()},className:`btn  btn-${u} ${p?"rounded-pill":""} ${h?`text-${h}`:""} ${b?`btn-outline-${b}`:`btn-${c}`} ${x?"disabled":""} ${m}`,disabled:t,children:t?(0,a.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return l.Children.map(d,(n=>{n.props?.className?.includes("loader")&&(e=!0)})),e?l.Children.map(d,(e=>{if(e.props?.className.includes("loader"))return e})):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:`me-2 spinner-${s} spinner-${s}-sm text-${r}`,role:"status"})})})(),j()]}):(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("i",{className:`${o}`}),j(),i&&(0,a.jsx)("i",{className:`${i}`})]})})})}},2115:(e,n,s)=>{s.d(n,{A:()=>c});var l=s(6540),a=s(5338),r=s(4848);const t=e=>{let{icon:n,text:s}=e;return(0,r.jsxs)("div",{className:"loading-overlay",children:[n||(0,r.jsx)("div",{className:"loading-spinner"}),(0,r.jsx)("span",{className:" ms-2",children:s||"Loading..."})]})};let i=0,o=null,d=null;const c=()=>{const[e,n]=(0,l.useState)(!1);(0,l.useEffect)((()=>{o||(o=(()=>{const e=document.createElement("div");e.className="loading-wrapper",document.body.appendChild(e),d=(0,a.createRoot)(e);const n=(e,n,s)=>{d?.render(e?(0,r.jsx)(t,{icon:n,text:s}):null)};return{show:(e,s)=>{n(!0,e,s)},hide:()=>{n(!1)}}})())}),[]);return{loading:e,showLoading:(e,s)=>{i++,n(!0),o?.show(e,s)},hideLoading:()=>{i--,i<=0&&(i=0,n(!1),o?.hide())}}}},31:(e,n,s)=>{s.r(n),s.d(n,{default:()=>t});s(6540);var l=s(2115),a=s(2639),r=s(4848);const t=()=>{const{showLoading:e,hideLoading:n}=(0,l.A)();return(0,r.jsx)(a.A,{onClick:()=>{e(),setTimeout(n,2e3)},children:"\u663e\u793a\u52a0\u8f7d\u72b6\u6001 2 \u79d2"})}}}]);