"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[53],{2639:(e,s,n)=>{n.d(s,{A:()=>a});var r=n(6540),t=n(4848);const a=e=>{const{fontSize:s,spinerType:n="border",spinerColor:a,loading:l,suffixIcon:i,prefixIcon:o,children:d,type:c="primary",size:u="md",externalClassName:m,round:p,textColor:h,disabled:x,outlineColor:g,onClick:C}=e,j=()=>r.Children.map(d,(e=>{if(!r.isValidElement(e)){e=(0,t.jsx)("span",{children:e});return r.cloneElement(e,{style:{fontSize:s}})}}));return(0,t.jsx)("span",{className:"button-wrapper",children:(0,t.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{C&&C()},className:`btn  btn-${u} ${p?"rounded-pill":""} ${h?`text-${h}`:""} ${g?`btn-outline-${g}`:`btn-${c}`} ${x?"disabled":""} ${m}`,disabled:l,children:l?(0,t.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return r.Children.map(d,(s=>{s.props?.className?.includes("loader")&&(e=!0)})),e?r.Children.map(d,(e=>{if(e.props?.className.includes("loader"))return e})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:`me-2 spinner-${n} spinner-${n}-sm text-${a}`,role:"status"})})})(),j()]}):(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)("i",{className:`${o}`}),j(),i&&(0,t.jsx)("i",{className:`${i}`})]})})})}},9454:(e,s,n)=>{n.d(s,{A:()=>a});var r=n(6540),t=n(4848);const a=e=>{let{hoverUp:s,header:n,headerAlign:a="start",footer:l,footerAlign:i="start",children:o,externalClassName:d=""}=e;const[c,u]=(0,r.useState)(!1);return(0,t.jsxs)("div",{onMouseEnter:()=>{s&&u(!0)},onMouseLeave:()=>{u(!1)},className:`card-wrapper ${d} ${c?"hover-up":""}`,children:[n&&(0,t.jsx)("div",{className:`card-header p-2 text-${a}`,children:n}),(0,t.jsx)("div",{className:"card-content p-3",children:o}),l&&(0,t.jsx)("div",{className:`card-footer p-2 text-${i}`,children:l})]})}},1851:(e,s,n)=>{n.r(s),n.d(s,{default:()=>i});var r=n(6540),t=n(9454),a=n(2639),l=n(4848);const i=()=>{const[e,s]=r.useState(!1),[n,i]=r.useState(!1),[o,d]=r.useState(!1),[c,u]=r.useState(!1);return(0,l.jsx)("div",{className:"button-loading-example mt-2",children:(0,l.jsxs)(t.A,{children:[(0,l.jsxs)("div",{className:"default-btns",children:[(0,l.jsx)(a.A,{externalClassName:"me-2",size:"lg",loading:e,type:"primary",onClick:()=>{s(!0),setTimeout((()=>{s(!1)}),3e3)},children:"Loading Button1"}),(0,l.jsx)(a.A,{spinerColor:"danger",loading:n,type:"warning",onClick:()=>{i(!0),setTimeout((()=>{i(!1)}),1e3)},children:"Loading Button2"})]}),(0,l.jsxs)("div",{className:"plain-btns my-2",children:[(0,l.jsx)(a.A,{externalClassName:"me-2",spinerType:"grow",size:"lg",loading:o,outlineColor:"success",onClick:()=>{d(!0),setTimeout((()=>{d(!1)}),1e3)},children:"Loading Button3"}),(0,l.jsx)(a.A,{spinerColor:"success",size:"sm",spinerType:"grow",loading:c,outlineColor:"danger",onClick:()=>{u(!0),setTimeout((()=>{u(!1)}),2e3)},children:"Loading Button4"})]})]})})}}}]);