"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2206],{3085:(e,l,t)=>{t.d(l,{A:()=>i});var r=t(6540);const a=(e,l)=>{const t=[];let r=[];return e.forEach(((a,s)=>{r.push(a),(s+1)%l!=0&&s!==e.length-1||(t.push(r),r=[])})),t};var s=t(4848);const i=e=>{let{multiple:l,itemHeight:t=40,columnMaxHeight:i,lineBreak:n=!1,listPerColumn:o,height:c,maxHeight:u,activeOnClick:d=!0,externalClassName:m,noWrap:p,defaultFirst:h=!1,data:b,activeList:v,labelKey:g="label",valueKey:x="value",type:f="primary",render:y,onItemClick:k,onItemDoubleClick:I}=e;const[j,C]=(0,r.useState)([]),[w,N]=(0,r.useState)(v||{}),[A,H]=(0,r.useState)(i),D=(0,r.useRef)(null),E=e=>{let t;if(l&&Array.isArray(w)){t=w.some((l=>l[x]===e[x]))?w.filter((l=>l[x]!==e[x])):[...w,e],N(t),k&&k(e)}else{t=w[x]===e[x]?{}:e,N(t),k&&k(t)}},S=(e,l)=>{e.preventDefault(),e.stopPropagation(),I&&I(l)},$=e=>{if(!d)return"";let t=!1;return l&&Array.isArray(w)?w.map((e=>e[x])).includes(e[x])&&(t=!0):w?.[x]===e[x]&&(t=!0),t?`active bg-${f} border-${f}`:""};return(0,r.useEffect)((()=>{if(v?N(v||{}):h&&N(b?.[0]),D.current){const e=D.current.parentElement;e&&e.clientHeight>0&&H(e.clientHeight)}}),[v,b,i,D.current]),(0,r.useEffect)((()=>{if(n&&(i||u||A))if(o)C(a(b||[],o));else{const e=[];let l=[],r=0;b?.forEach((a=>{r+t>parseFloat(i||u||A)&&(e.push(l),l=[],r=0),l.push(a),r+=t})),l.length>0&&e.push(l),C(e)}else C(b||[])}),[b,n,i,u,A]),(0,s.jsx)("div",{className:`list-group-wrapper ${m||""}`,ref:D,children:n&&(i||u||A)?(0,s.jsx)("div",{className:"row g-0",children:j.map(((e,l)=>(0,s.jsx)("div",{className:"col",children:(0,s.jsx)("ul",{className:"list-group me-2",style:{height:c,maxHeight:i||u||c||A,overflowY:"auto",border:"1px solid #ccc",borderRadius:"5px",boxSizing:"border-box"},children:Array.isArray(e)&&e?.map(((e,l)=>(0,s.jsx)("button",{onClick:()=>E(e),onDoubleClick:l=>S(l,e),type:"button",className:`list-group-item list-group-item-action border-0 ${$(e)}`,children:e.render?e.render(e,g,x):y?y(e,g,x):e[g]},l)))})},l)))}):(0,s.jsx)("div",{className:"list-group",style:{height:c,maxHeight:u||c,overflowY:"auto",border:j.length?"1px solid #ccc":"none"},children:j?.map(((e,l)=>(0,s.jsx)("button",{style:{whiteSpace:p?"nowrap":"normal",border:"none"},onClick:()=>E(e),onDoubleClick:l=>S(l,e),type:"button",className:`list-group-item list-group-item-action ${$(e)}`,children:e.render?e.render(e,g,x):y?y(e,g,x):e[g]},e[x])))})})}},4316:(e,l,t)=>{t.r(l),t.d(l,{default:()=>s});t(6540);var r=t(3085),a=t(4848);const s=e=>{let{}=e;const l=[{label:"Item 1",value:"1"},{label:"Item 2",value:"2",render:()=>(0,a.jsx)("a",{style:{textDecoration:"underline",color:"red"},children:"666"})},{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 6",value:"6"},{label:"Item 7",value:"7"},{label:"Item 8",value:"8"},{label:"Item 9",value:"9"},{label:"Item 10",value:"10"}];return(0,a.jsx)("div",{className:"render-wrapper",children:(0,a.jsx)(r.A,{render:(e,l)=>(0,a.jsx)("span",{className:"text-warning",children:e[l]}),data:l})})}}}]);