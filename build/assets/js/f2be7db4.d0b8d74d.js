"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[752],{2639:(e,s,r)=>{r.d(s,{A:()=>t});var l=r(6540),n=r(4848);const t=e=>{const{fontSize:s,spinerType:r="border",spinerColor:t,loading:a,suffixIcon:i,prefixIcon:c,children:d,type:o="primary",size:p="md",externalClassName:h,round:u,textColor:m,disabled:x,outlineColor:f,onClickOK:j}=e,$=()=>l.Children.map(d,(e=>{if(!l.isValidElement(e)){e=(0,n.jsx)("span",{children:e});return l.cloneElement(e,{style:{fontSize:s}})}}));return(0,n.jsx)("span",{className:"button-wrapper",children:(0,n.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{j&&j()},className:`btn  btn-${p} ${u?"rounded-pill":""} ${m?`text-${m}`:""} ${f?`btn-outline-${f}`:`btn-${o}`} ${x?"disabled":""} ${h}`,disabled:a,children:a?(0,n.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return l.Children.map(d,(s=>{s.props?.className?.includes("loader")&&(e=!0)})),e?l.Children.map(d,(e=>{if(e.props?.className.includes("loader"))return e})):(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:`me-2 spinner-${r} spinner-${r}-sm text-${t}`,role:"status"})})})(),$()]}):(0,n.jsxs)(n.Fragment,{children:[c&&(0,n.jsx)("i",{className:`${c}`}),$(),i&&(0,n.jsx)("i",{className:`${i}`})]})})})}},8631:(e,s,r)=>{r.d(s,{A:()=>a});var l=r(6540),n=r(2639),t=r(4848);const a=e=>{let{header:s,children:r,firstShow:a=!1}=e;const[i,c]=(0,l.useState)(!1),d=(0,l.useRef)(null),[o,p]=(0,l.useState)(0),[h,u]=(0,l.useState)(0);return(0,l.useEffect)((()=>{a&&(c(!0),p(d.current.scrollWidth),u(d.current.scrollHeight))}),[]),(0,l.useEffect)((()=>{p(d.current.scrollWidth),u(d.current.scrollHeight)}),[r]),(0,t.jsxs)("div",{className:"collapse-container",children:[(0,t.jsx)("div",{className:"collapse-header",children:(0,t.jsx)("div",{className:"collapse-header-content",onClick:()=>{c(!i)},children:s||(0,t.jsx)(n.A,{type:"primary",size:"sm",children:"\u5c55\u5f00"})})}),(0,t.jsx)("div",{className:"collapse-content mt-2",style:{maxWidth:i?`${o}px`:"0px",opacity:i?1:0},ref:d,children:r||"\u88ab\u6298\u53e0\u7684\u5185\u5bb9"})]})}},5313:(e,s,r)=>{r.r(s),r.d(s,{default:()=>t});r(6540);var l=r(8631),n=r(4848);const t=e=>{let{}=e;return(0,n.jsx)("div",{className:"header-wrapper",children:(0,n.jsx)(l.A,{header:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:(0,n.jsx)("p",{style:{color:"green"},children:"\u8fd9\u91cc\u662f\u5173\u4e8e\u5e38\u89c1\u95ee\u9898\u7684\u8be6\u7ec6\u89e3\u7b54\u5185\u5bb9\u3002"})})})}}}]);