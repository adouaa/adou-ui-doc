"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[451],{4207:(e,n,r)=>{r.d(n,{A:()=>s});var t=r(6540);const s=function(e,n,r){void 0===r&&(r=[]);const s=(0,t.useRef)(0);return(0,t.useCallback)((function(){const r=Date.now();(!s.current||r-s.current>=n)&&(e(...arguments),s.current=r)}),r)}},2639:(e,n,r)=>{r.d(n,{A:()=>a});var t=r(6540),s=r(4848);const a=e=>{const{fontSize:n,spinerType:r="border",spinerColor:a,loading:i,suffixIcon:l,prefixIcon:o,children:c,type:d="primary",size:m="md",externalClassName:u,round:p,textColor:f,disabled:h,outlineColor:b,onClick:x}=e,N=()=>t.Children.map(c,(e=>{if(!t.isValidElement(e)){e=(0,s.jsx)("span",{children:e});return t.cloneElement(e,{style:{fontSize:n}})}}));return(0,s.jsx)("span",{className:"button-wrapper",children:(0,s.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{x&&x()},className:`btn  btn-${m} ${p?"rounded-pill":""} ${f?`text-${f}`:""} ${b?`btn-outline-${b}`:`btn-${d}`} ${h?"disabled":""} ${u}`,disabled:i,children:i?(0,s.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return t.Children.map(c,(n=>{n.props?.className?.includes("loader")&&(e=!0)})),e?t.Children.map(c,(e=>{if(e.props?.className.includes("loader"))return e})):(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:`me-2 spinner-${r} spinner-${r}-sm text-${a}`,role:"status"})})})(),N()]}):(0,s.jsxs)(s.Fragment,{children:[o&&(0,s.jsx)("i",{className:`${o}`}),N(),l&&(0,s.jsx)("i",{className:`${l}`})]})})})}},6590:(e,n,r)=>{r.d(n,{A:()=>l});var t=r(6540),s=r(2639),a=r(4207),i=r(4848);const l=e=>{let{actRef:n,children:r,buttonText:l="\u968f\u673a\u6392\u5e8f",onShuffle:o,className:c="",buttonClassName:d="",showButton:m=!0,animationDuration:u=300,animationTiming:p="ease-in-out"}=e;const f=(0,t.useRef)(new Map),h=(0,t.useRef)(null),b=e=>e.getBoundingClientRect(),x=(0,a.A)((()=>{if(!h.current)return;const e=(()=>{const e=new Map;return f.current.forEach(((n,r)=>{e.set(r,b(n))})),e})(),n=t.Children.count(r);(e=>{for(let n=e.length-1;n>0;n--){const r=Math.floor(Math.random()*(n+1));[e[n],e[r]]=[e[r],e[n]]}return e})([...Array(n)].map(((e,n)=>n))).forEach((e=>{const n=f.current.get(e);n&&h.current.appendChild(n)})),requestAnimationFrame((()=>{f.current.forEach(((n,r)=>{const t=e.get(r),s=b(n),a=t.left-s.left,i=t.top-s.top;n.style.transform=`translate(${a}px, ${i}px)`,requestAnimationFrame((()=>{n.style.transition=`transform ${u}ms ${p}`,n.style.transform="",n.addEventListener("transitionend",(()=>{n.style.transition=""}),{once:!0})}))}))})),o?.()}),u),N=t.Children.map(r,((e,n)=>{const r=(0,t.cloneElement)(e,{key:n,className:`random-arrange-item ${e.props.className||""}`});return(0,i.jsx)("div",{className:"random-arrange-item-wrapper",ref:r=>{"function"==typeof e.ref?e.ref(r):e.ref&&(e.ref.current=r),r&&f.current.set(n,r)},children:r})}));return(0,t.useImperativeHandle)(n,(()=>({shuffle:x}))),(0,i.jsxs)("div",{className:`random-arrange-wrapper ${c}`,children:[m&&(0,i.jsx)("div",{className:"contrl-btn mb-2",children:(0,i.jsx)(s.A,{externalClassName:d,onClick:x,children:l})}),(0,i.jsx)("div",{ref:h,className:"random-arrange-list",children:N})]})}},1823:(e,n,r)=>{r.r(n),r.d(n,{default:()=>a});var t=r(6590),s=(r(6540),r(4848));const a=()=>(0,s.jsxs)(t.A,{buttonText:"\u6162\u901f\u6253\u4e71",animationDuration:800,animationTiming:"cubic-bezier(0.68, -0.55, 0.265, 1.55)",onShuffle:()=>console.log("\u6392\u5e8f\u5b8c\u6210"),children:[(0,s.jsx)("div",{className:"p-3 bg-primary-subtle m-2 rounded",children:"Item 1"}),(0,s.jsx)("div",{className:"p-3 bg-primary-subtle m-2 rounded",children:"Item 2"}),(0,s.jsx)("div",{className:"p-3 bg-primary-subtle m-2 rounded",children:"Item 3"}),(0,s.jsx)("div",{className:"p-3 bg-primary-subtle m-2 rounded",children:"Item 4"}),(0,s.jsx)("div",{className:"p-3 bg-primary-subtle m-2 rounded",children:"Item 5"})]})}}]);