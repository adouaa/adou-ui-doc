"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[4596],{2639:(e,s,n)=>{n.d(s,{A:()=>i});var l=n(6540),t=n(4848);const i=e=>{const{fontSize:s,spinerType:n="border",spinerColor:i,loading:a,suffixIcon:r,prefixIcon:c,children:o,type:d="primary",size:m="md",externalClassName:p,round:h,textColor:x,disabled:u,outlineColor:j,onClick:b}=e,N=()=>l.Children.map(o,(e=>{if(!l.isValidElement(e)){e=(0,t.jsx)("span",{children:e});return l.cloneElement(e,{style:{fontSize:s}})}}));return(0,t.jsx)("span",{className:"button-wrapper",children:(0,t.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{b&&b()},className:`btn  btn-${m} ${h?"rounded-pill":""} ${x?`text-${x}`:""} ${j?`btn-outline-${j}`:`btn-${d}`} ${u?"disabled":""} ${p}`,disabled:a,children:a?(0,t.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return l.Children.map(o,(s=>{s.props?.className?.includes("loader")&&(e=!0)})),e?l.Children.map(o,(e=>{if(e.props?.className.includes("loader"))return e})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:`me-2 spinner-${n} spinner-${n}-sm text-${i}`,role:"status"})})})(),N()]}):(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("i",{className:`${c}`}),N(),r&&(0,t.jsx)("i",{className:`${r}`})]})})})}},3032:(e,s,n)=>{n.d(s,{A:()=>t});n(6540);var l=n(4848);const t=e=>{let{hintContent:s,bgc:n="#cff4fc",color:t="#087990"}=e;return(0,l.jsx)("div",{className:"hint-wrapper",style:{backgroundColor:n,color:t},children:s.map(((e,s)=>(0,l.jsxs)("div",{className:"hint-item",children:[(0,l.jsx)("div",{className:"hint-title",children:(0,l.jsxs)("div",{children:[(0,l.jsx)("i",{className:"fa-solid fa-circle-info me-2"}),(0,l.jsx)("span",{children:e.title})]})}),(0,l.jsx)("div",{className:"hint-content",children:e.content.map(((e,s)=>(0,l.jsxs)("div",{className:"hint-content-item",children:[(0,l.jsxs)("span",{className:"index me-2",children:[s+1,"."]}),(0,l.jsx)("span",{className:"hint-text-item",children:(0,l.jsx)("span",{className:"value",style:{color:e.textColor,backgroundColor:e.textBgcolor},children:e.value},s)})]})))})]},s)))})}},8668:(e,s,n)=>{n.r(s),n.d(s,{default:()=>a});n(6540);var l=n(3032),t=n(2639),i=n(4848);const a=e=>{let{}=e;const s=[{title:"\u63d0\u793a\u6807\u98981",content:[{value:"\u8fd9\u662f\u666e\u901a\u6587\u672c\u3002"},{value:(0,i.jsxs)("span",{children:["\u8fd9\u662f\u81ea\u5b9a\u4e49\u6587\u672c\uff1a",(0,i.jsx)(t.A,{onClick:()=>window.alert("\u8fd9\u662f\u4e00\u4e2a\u63d0\u793a"),type:"primary",size:"sm",children:"\u63d0\u793a"})]})}]},{title:"\u63d0\u793a\u6807\u98982",content:[{value:"\u53e6\u4e00\u4e2a\u666e\u901a\u6587\u672c\u3002"}]}];return(0,i.jsx)("div",{className:"custom-wrapper",children:(0,i.jsx)(l.A,{hintContent:s,bgc:"#bbf146",color:"black"})})}}}]);