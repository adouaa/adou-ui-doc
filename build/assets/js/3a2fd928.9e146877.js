"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[6172],{2639:(e,s,n)=>{n.d(s,{A:()=>i});var r=n(6540),l=n(4848);const i=e=>{const{fontSize:s,spinerType:n="border",spinerColor:i,loading:t,suffixIcon:a,prefixIcon:d,children:c,type:o="primary",size:p="md",externalClassName:m,round:u,textColor:h,disabled:x,outlineColor:$,onClick:b}=e,j=()=>r.Children.map(c,(e=>{if(!r.isValidElement(e)){e=(0,l.jsx)("span",{children:e});return r.cloneElement(e,{style:{fontSize:s}})}}));return(0,l.jsx)("span",{className:"button-wrapper",children:(0,l.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{b&&b()},className:`btn  btn-${p} ${u?"rounded-pill":""} ${h?`text-${h}`:""} ${$?`btn-outline-${$}`:`btn-${o}`} ${x?"disabled":""} ${m}`,disabled:t,children:t?(0,l.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return r.Children.map(c,(s=>{s.props?.className?.includes("loader")&&(e=!0)})),e?r.Children.map(c,(e=>{if(e.props?.className.includes("loader"))return e})):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:`me-2 spinner-${n} spinner-${n}-sm text-${i}`,role:"status"})})})(),j()]}):(0,l.jsxs)(l.Fragment,{children:[d&&(0,l.jsx)("i",{className:`${d}`}),j(),a&&(0,l.jsx)("i",{className:`${a}`})]})})})}},1530:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});var r=n(6540),l=n(2639),i=n(4848);const t=e=>{let{}=e;const[s,n]=(0,r.useState)(0);return(0,i.jsxs)("div",{className:"test-wrapper",children:[(0,i.jsx)("p",{children:"\u5185\u5bb91"}),(0,i.jsxs)("h3",{children:["\u8ba1\u6570\uff1a",s]}),(0,i.jsx)(l.A,{onClick:()=>n((e=>e+1)),children:"+1"})]})}}}]);