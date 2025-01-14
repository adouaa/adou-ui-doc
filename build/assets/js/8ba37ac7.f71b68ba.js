"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[6363],{2639:(e,t,n)=>{n.d(t,{A:()=>r});var s=n(6540),o=n(4848);const r=e=>{const{fontSize:t,spinerType:n="border",spinerColor:r,loading:l,suffixIcon:i,prefixIcon:c,children:a,type:d="primary",size:u="md",externalClassName:m,round:h,textColor:x,disabled:f,outlineColor:p,onClick:v}=e,g=()=>s.Children.map(a,(e=>{if(!s.isValidElement(e)){e=(0,o.jsx)("span",{children:e});return s.cloneElement(e,{style:{fontSize:t}})}}));return(0,o.jsx)("span",{className:"button-wrapper",children:(0,o.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{v&&v()},className:`btn  btn-${u} ${h?"rounded-pill":""} ${x?`text-${x}`:""} ${p?`btn-outline-${p}`:`btn-${d}`} ${f?"disabled":""} ${m}`,disabled:l,children:l?(0,o.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return s.Children.map(a,(t=>{t.props?.className?.includes("loader")&&(e=!0)})),e?s.Children.map(a,(e=>{if(e.props?.className.includes("loader"))return e})):(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:`me-2 spinner-${n} spinner-${n}-sm text-${r}`,role:"status"})})})(),g()]}):(0,o.jsxs)(o.Fragment,{children:[c&&(0,o.jsx)("i",{className:`${c}`}),g(),i&&(0,o.jsx)("i",{className:`${i}`})]})})})}},4180:(e,t,n)=>{n.d(t,{A:()=>a});var s=n(6540),o=n(961),r=n(3941),l=n(9028),i=n(2639),c=n(4848);const a=e=>{let{draggble:t,confirmBtnLoading:n,needDestroy:a=!1,maxY:d,maxX:u,max:m,showConfirm:h=!0,showCancel:x=!0,showClose:f=!0,canConfirm:p=!0,clickOutside:v=!1,confirmText:g="\u786e\u5b9a",cancelText:y="\u53d6\u6d88",confirmBtnClass:j="primary",cancelBtnClass:w="secondary",show:C=!1,title:b="\u63d0\u793a",children:N=null,type:$="",maxHeight:E="400px",width:k="600px",height:S,maxWidth:A,onCancel:L,onClose:T=()=>{},onConfirm:X=()=>{}}=e;const R=(0,s.useRef)(null),Y=(0,s.useRef)(null),[z,B]=(0,s.useState)(!1),[D,F]=(0,s.useState)(!1),[H,W]=(0,s.useState)(!1),[_,I]=(0,s.useState)({x:0,y:0}),[M,O]=(0,s.useState)(!1),{position:P,handleMouseDown:K}=(0,r.A)(Y,R,t&&!m,!1);return(0,s.useEffect)((()=>{if(z&&R.current){const e=R.current.offsetWidth,t=R.current.offsetHeight,n=(window.innerWidth-e)/2,s=(window.innerHeight-t)/2;R.current.style.top=d||m?"-20px":""+("tip"===$?s-20+"px":"2%"),R.current.style.left=`${n}px`,setTimeout((()=>{R.current.focus()}),100)}setTimeout((()=>{O(z)}),10)}),[z]),(0,s.useEffect)((()=>{C?(F(!1),setTimeout((()=>{B(C)}),100),setTimeout((()=>{W(!0)}),200)):(setTimeout((()=>{B(C)}),100),a&&setTimeout((()=>{F(!0)}),300))}),[C,$]),(0,l.A)(R,v&&T),(0,c.jsx)(c.Fragment,{children:(C||H)&&o.createPortal((0,c.jsx)("div",{className:"dialog-overlay "+(z?"open":""),children:!D&&(0,c.jsxs)("div",{onKeyDown:e=>{"Enter"===e.key?X&&X():"Escape"===e.key&&T&&T()},tabIndex:0,ref:R,className:"dialog "+(z?"open":""),style:{top:P.y-20+"px",left:`${P.x}px`,transform:`translateY(${M?"20px":"0"})`,maxWidth:m||u?"100vw":k||A,width:m||u?"100vw":k||A},children:[(0,c.jsxs)("div",{className:"dialog-header px-2 ps-3",children:[(0,c.jsx)("span",{className:"dialog-header-title fs-5",children:b}),(0,c.jsx)("div",{ref:Y,className:"header-placeholder flex-fill",onMouseDown:t&&!m?K:void 0,style:{cursor:t&&!m?"move":"default",height:"56.8px"}}),f&&(0,c.jsx)("button",{className:"dialog-close hover-scale",onClick:T,children:"\xd7"})]}),(0,c.jsx)("div",{className:"dialog-content",style:{maxHeight:m||d?"calc(100vh - 8rem)":S||E,height:m||d?"calc(100vh - 8rem)":S},children:N||"\u5f39\u7a97\u9ed8\u8ba4\u5185\u5bb9..."}),(0,c.jsxs)("div",{className:"dialog-footer d-flex justify-content-end p-3",children:[x&&(0,c.jsx)(i.A,{externalClassName:`me-2 btn-${w}`,size:"md",onClick:L??T,children:y}),h&&(0,c.jsx)(i.A,{loading:n,disabled:!p,externalClassName:`btn-${j}`,size:"md",onClick:X,children:g})]})]})}),document.body)})}},9028:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(6540);const o=function(e,t,n){void 0===n&&(n=!0),(0,s.useEffect)((()=>{const s=s=>{n&&e.length&&!(t=>e.some((e=>e.current?.contains(t.target))))(s)&&t&&t()};return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}}),[e,t,n])}},3941:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(6540);const o=function(e,t,n,o,r){void 0===n&&(n=!1),void 0===o&&(o=!0),void 0===r&&(r={x:0,y:0});const[l,i]=(0,s.useState)(!1),[c,a]=(0,s.useState)({x:0,y:0}),[d,u]=(0,s.useState)(r),m=(0,s.useRef)(null),h=e=>{l&&(n?u({x:e.clientX-c.x,y:e.clientY-c.y}):(console.log("e.clientX: ",e.clientX),console.log("dragOffset.x: ",c.x),console.log("window.scrollX: ",window.scrollX),console.log("elementFirstPositionRef.current?.left: ",m.current?.left),u({x:e.clientX-c.x-m.current?.left+window.scrollX,y:e.clientY-c.y-m.current?.top+window.scrollY})))},x=()=>{i(!1)};(0,s.useEffect)((()=>(l?(document.addEventListener("mousemove",h),document.addEventListener("mouseup",x)):(document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",x)),()=>{document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",x)})),[l]),(0,s.useEffect)((()=>{o&&t.current&&(t.current.style.position="relative",t.current.style.top=d.y+"px",t.current.style.left=d.x+"px",t.current.style.cursor="move")}),[d]);return(0,s.useEffect)((()=>{t.current&&(m.current=t.current.getBoundingClientRect())}),[t]),{position:d,handleMouseDown:e=>{const n=t.current.getBoundingClientRect();i(!0),a({x:e.clientX-n.left,y:e.clientY-n.top})}}}},1115:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var s=n(6540),o=n(4180),r=n(2639),l=n(4848);const i=()=>{const[e,t]=(0,s.useState)(!1);return(0,l.jsxs)("div",{className:"max-height-wrapper",children:[(0,l.jsx)(r.A,{onClick:()=>t(!0),children:"\u6253\u5f00\u5bf9\u8bdd\u6846"}),(0,l.jsxs)(o.A,{show:e,onClose:()=>t(!1),children:[(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,l.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"})]})]})}}}]);