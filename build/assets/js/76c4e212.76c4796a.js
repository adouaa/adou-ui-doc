"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[4541],{2639:(e,s,r)=>{r.d(s,{A:()=>n});var l=r(6540),a=r(4848);const n=e=>{const{fontSize:s,spinerType:r="border",spinerColor:n,loading:t,suffixIcon:i,prefixIcon:o,children:d,type:c="primary",size:m="md",externalClassName:x,round:h,textColor:p,disabled:u,outlineColor:C,onClickOK:j}=e,N=()=>l.Children.map(d,(e=>{if(!l.isValidElement(e)){e=(0,a.jsx)("span",{children:e});return l.cloneElement(e,{style:{fontSize:s}})}}));return(0,a.jsx)("span",{className:"button-wrapper",children:(0,a.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{j&&j()},className:`btn  btn-${m} ${h?"rounded-pill":""} ${p?`text-${p}`:""} ${C?`btn-outline-${C}`:`btn-${c}`} ${u?"disabled":""} ${x}`,disabled:t,children:t?(0,a.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return l.Children.map(d,(s=>{s.props?.className?.includes("loader")&&(e=!0)})),e?l.Children.map(d,(e=>{if(e.props?.className.includes("loader"))return e})):(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:`me-2 spinner-${r} spinner-${r}-sm text-${n}`,role:"status"})})})(),N()]}):(0,a.jsxs)(a.Fragment,{children:[o&&(0,a.jsx)("i",{className:`${o}`}),N(),i&&(0,a.jsx)("i",{className:`${i}`})]})})})}},9454:(e,s,r)=>{r.d(s,{A:()=>n});var l=r(6540),a=r(4848);const n=e=>{let{hoverUp:s,header:r,headerAlign:n="start",footer:t,footerAlign:i="start",children:o,externalClassName:d=""}=e;const[c,m]=(0,l.useState)(!1);return(0,a.jsxs)("div",{onMouseEnter:()=>{s&&m(!0)},onMouseLeave:()=>{m(!1)},className:`card-wrapper ${d} ${c?"hover-up":""}`,children:[r&&(0,a.jsx)("div",{className:`card-header p-2 text-${n}`,children:r}),(0,a.jsx)("div",{className:"card-content p-3",children:o}),t&&(0,a.jsx)("div",{className:`card-footer p-2 text-${i}`,children:t})]})}},8396:(e,s,r)=>{r.r(s),r.d(s,{default:()=>t});r(6540);var l=r(9454),a=r(2639),n=r(4848);const t=e=>{let{}=e;return(0,n.jsx)("div",{className:"button-text-color-example mt-2",children:(0,n.jsxs)(l.A,{children:[(0,n.jsxs)("div",{className:"default-btn",children:[(0,n.jsx)(a.A,{textColor:"info",externalClassName:"me-2",type:"primary",children:"primary"}),(0,n.jsx)(a.A,{textColor:"light",externalClassName:"me-2",type:"secondary",children:"secondary"}),(0,n.jsx)(a.A,{textColor:"dark",externalClassName:"me-2",type:"danger",children:"danger"}),(0,n.jsx)(a.A,{textColor:"warning",externalClassName:"me-2",type:"success",children:"success"})]}),(0,n.jsxs)("div",{className:"plain-btn mt-4",children:[(0,n.jsx)(a.A,{textColor:"primary",externalClassName:"me-2",outlineColor:"warning",children:"warning"}),(0,n.jsx)(a.A,{textColor:"secondary",externalClassName:"me-2",outlineColor:"info",children:"info"}),(0,n.jsx)(a.A,{textColor:"success",externalClassName:"me-2",outlineColor:"light",children:"light"}),(0,n.jsx)(a.A,{textColor:"danger",externalClassName:"me-2",outlineColor:"dark",children:"dark"})]})]})})}}}]);