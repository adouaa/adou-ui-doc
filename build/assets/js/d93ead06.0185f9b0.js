"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[951],{1123:(e,s,a)=>{a.d(s,{A:()=>r});var t=a(9028),n=a(6540),c=a(4848);const o=(0,n.forwardRef)(((e,s)=>{let{actRef:a,clickOutside:o=!0,children:r,title:l="Offcanvas",placement:d="end",width:i="400px",height:u="100%",showMask:h=!0,maskClosable:m=!0,showCloseButton:f=!0,className:v="",headerClassName:p="",bodyClassName:w="",onClose:k,onOpen:b,trigger:g,closeOnEsc:x=!0}=e;const[N,j]=(0,n.useState)(!1),[y,C]=(0,n.useState)(!1),[E,O]=(0,n.useState)(!1),$=(0,n.useRef)(null),A=()=>{y?L():_()},L=()=>{j(!0),setTimeout((()=>{j(!1),C(!1),k?.()}),300),setTimeout((()=>{O(!1)}),500)},_=()=>{O(!0),setTimeout((()=>{C(!0),b?.()}),100)};(0,t.A)([$],L,o&&$.current&&y),(0,n.useImperativeHandle)(a||s,(()=>({open:_,close:L,toggle:A,isOpen:y})));return(0,n.useEffect)((()=>{const e=e=>{x&&y&&"Escape"===e.key&&L()};return y&&document.addEventListener("keydown",e),()=>{document.removeEventListener("keydown",e)}}),[y,x]),(0,c.jsxs)("div",{className:"drawer-wrapper",children:[g&&(0,c.jsx)("div",{onClick:A,className:"drawer-trigger",children:g}),(0,c.jsxs)("div",{ref:$,className:`offcanvas offcanvas-${d} ${y?"show":""} ${N?"hiding":""} ${v}`,style:(()=>{const e={};return"start"===d||"end"===d?(e.width=i,e.height=u):(e.height=u,e.width="100%"),e})(),tabIndex:-1,role:"dialog","aria-modal":"true",children:[(0,c.jsxs)("div",{className:`offcanvas-header ${p}`,children:[(0,c.jsx)("h5",{className:"offcanvas-title",children:l}),f&&(0,c.jsx)("button",{onClick:L,type:"button",className:"btn-close","aria-label":"Close"})]}),(0,c.jsx)("div",{className:`offcanvas-body ${w}`,children:r})]}),h&&E&&(0,c.jsx)("div",{onClick:()=>{m&&L()},style:{transition:"all .3s ease"},className:"offcanvas-backdrop fade "+(y?"show":"")})]})}));o.displayName="Drawer";const r=o},9028:(e,s,a)=>{a.d(s,{A:()=>n});var t=a(6540);const n=function(e,s,a){void 0===a&&(a=!0),(0,t.useEffect)((()=>{const t=t=>{a&&e.length&&!(s=>e.some((e=>e.current?.contains(s.target))))(t)&&s&&s()};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}}),[e,s,a])}},4767:(e,s,a)=>{a.r(s),a.d(s,{default:()=>c});var t=a(1123),n=(a(6540),a(4848));const c=()=>(0,n.jsx)(t.A,{clickOutside:!1,maskClosable:!1,trigger:(0,n.jsx)("button",{className:"btn btn-primary",children:"\u6253\u5f00\u62bd\u5c49"}),children:(0,n.jsxs)("div",{className:"p-3",children:[(0,n.jsx)("h5",{children:"\u7981\u7528\u70b9\u51fb\u5916\u90e8\u5173\u95ed"}),(0,n.jsx)("p",{children:"\u53ea\u80fd\u901a\u8fc7\u5173\u95ed\u6309\u94ae\u5173\u95ed\u62bd\u5c49"})]})})}}]);