"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[8478],{2639:(e,i,n)=>{n.d(i,{A:()=>a});var s=n(6540),t=n(4848);const a=e=>{const{fontSize:i,spinerType:n="border",spinerColor:a,loading:r,suffixIcon:c,prefixIcon:o,children:d,type:l="primary",size:m="md",externalClassName:u,round:p,textColor:x,disabled:f,outlineColor:h,onClickOK:j}=e,g=()=>s.Children.map(d,(e=>{if(!s.isValidElement(e)){e=(0,t.jsx)("span",{children:e});return s.cloneElement(e,{style:{fontSize:i}})}}));return(0,t.jsx)("span",{className:"button-wrapper",children:(0,t.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{j&&j()},className:`btn  btn-${m} ${p?"rounded-pill":""} ${x?`text-${x}`:""} ${h?`btn-outline-${h}`:`btn-${l}`} ${f?"disabled":""} ${u}`,disabled:r,children:r?(0,t.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return s.Children.map(d,(i=>{i.props?.className?.includes("loader")&&(e=!0)})),e?s.Children.map(d,(e=>{if(e.props?.className.includes("loader"))return e})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:`me-2 spinner-${n} spinner-${n}-sm text-${a}`,role:"status"})})})(),g()]}):(0,t.jsxs)(t.Fragment,{children:[o&&(0,t.jsx)("i",{className:`${o}`}),g(),c&&(0,t.jsx)("i",{className:`${c}`})]})})})}},4390:(e,i,n)=>{n.d(i,{A:()=>p});var s=n(6540),t=n(5338),a=n(4848);let r=null,c=null,o=0,d=[],l=new Map,m=new Map;const u=()=>{const[e,i]=(0,s.useState)([]);(0,s.useEffect)((()=>{i(d)}),[d]);const n=e=>{d=d.map((i=>void 0!==e&&i.id===e?{...i,disappearing:!0}:i)),i([...d]),setTimeout((()=>{d=d.filter((i=>i.id!==e)),i([...d]);const n=l.get(e),s=m.get(e);n&&(clearTimeout(n),l.delete(e)),s&&(clearInterval(s),m.delete(e))}),300)},t=e=>{switch(e.type){case"success":return(0,a.jsx)("i",{className:"text-success fa-regular fa-circle-check"});case"warning":return(0,a.jsx)("i",{className:"text-warning fa-solid fa-circle-exclamation"});case"info":return(0,a.jsx)("i",{className:"text-info fa-solid fa-circle-info"});case"danger":return(0,a.jsx)("i",{className:"text-danger fa-solid fa-circle-exclamation"})}};return(0,a.jsx)("div",{className:"adou-notification-container",children:e.map((e=>(0,a.jsxs)("div",{onMouseEnter:()=>(e=>{const i=l.get(e.id),n=m.get(e.id);i&&clearTimeout(i),n&&clearInterval(n)})(e),onMouseLeave:()=>(e=>{const s=setTimeout((()=>{n(e.id)}),e.remainTime);l.set(e.id,s);const t=setInterval((()=>{const n=d.find((i=>i.id===e.id));n&&(n.remainTime-=100,i([...d]))}),100);m.set(e.id,t)})(e),className:`adou-notification ${e.appearing?"adou-notification-appearing":""} ${e.disappearing?"adou-notification-disappearing":""}`,children:[(0,a.jsxs)("div",{className:"adou-notification-header",children:[(0,a.jsxs)("div",{className:"adou-notification-header-title",children:[(0,a.jsx)("div",{className:"adou-notification-header-title-icon",children:e.customTitleIcon?e.customTitleIcon:t(e)}),(0,a.jsx)("span",{className:`text-${e.title} adou-notification-header-title-text`,children:e.title})]}),(0,a.jsx)("div",{className:"adou-notification-header-close",onClick:()=>n(e.id),children:(0,a.jsx)("i",{className:"fa-solid fa-xmark"})})]}),(0,a.jsx)("div",{className:`adou-notification-content text-${e.type}`,children:e.message})]},e.id)))})},p=()=>((0,s.useEffect)((()=>{r||(r=(()=>{const e=document.createElement("div");return document.body.appendChild(e),c=(0,t.createRoot)(e),c.render((0,a.jsx)(u,{})),{open:e=>{const i=++o,n={id:i,duration:3e3,type:"info",...e};n.remainTime=n.duration,d.push(n),c?.render((0,a.jsx)(u,{})),setTimeout((()=>{const e=d.find((e=>e.id===i));e&&(e.appearing=!0,c?.render((0,a.jsx)(u,{})))}),50);const s=setTimeout((()=>{const e=d.findIndex((e=>e.id===i));-1!==e&&(d[e].disappearing=!0,c?.render((0,a.jsx)(u,{})),setTimeout((()=>{d=d.filter((e=>e.id!==i)),c?.render((0,a.jsx)(u,{}))}),300))}),e.duration||3e3);l.set(i,s);const t=setInterval((()=>{const e=d.find((e=>e.id===i));e&&(e.remainTime-=100,c?.render((0,a.jsx)(u,{})))}),100);m.set(i,t)}}})())}),[]),{open:e=>{r?.open(e)}})},3592:(e,i,n)=>{n.r(i),n.d(i,{default:()=>r});n(6540);var s=n(2639),t=n(4390),a=n(4848);const r=()=>{const e=(0,t.A)(),i=i=>{e?.open({title:i.charAt(0).toUpperCase()+i.slice(1),message:` \u8fd9\u662f\u4e00\u6761${i}\u901a\u77e5`,type:i})};return(0,a.jsxs)("div",{className:"d-flex gap-2",children:[(0,a.jsx)(s.A,{onClick:()=>i("success"),children:"\u6210\u529f\u901a\u77e5"}),(0,a.jsx)(s.A,{onClick:()=>i("warning"),children:"\u8b66\u544a\u901a\u77e5"}),(0,a.jsx)(s.A,{onClick:()=>i("info"),children:"\u4fe1\u606f\u901a\u77e5"}),(0,a.jsx)(s.A,{onClick:()=>i("danger"),children:"\u9519\u8bef\u901a\u77e5"})]})}}}]);