"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2063,3934],{3085:(e,l,t)=>{t.d(l,{A:()=>s});var a=t(6540);const r=(e,l)=>{const t=[];let a=[];return e.forEach(((r,i)=>{a.push(r),(i+1)%l!=0&&i!==e.length-1||(t.push(a),a=[])})),t};var i=t(4848);const s=e=>{let{multiple:l,itemHeight:t=40,columnMaxHeight:s,lineBreak:n=!1,listPerColumn:o,height:c,maxHeight:u,activeOnClick:m=!0,externalClassName:d,noWrap:p,defaultFirst:h=!1,data:b,activeList:v,labelKey:g="label",valueKey:f="value",type:x="primary",render:y,onItemClick:k,onItemDoubleClick:C}=e;const[I,j]=(0,a.useState)([]),[w,N]=(0,a.useState)(v||{}),[A,H]=(0,a.useState)(s),E=(0,a.useRef)(null),S=e=>{let t;if(l&&Array.isArray(w)){t=w.some((l=>l[f]===e[f]))?w.filter((l=>l[f]!==e[f])):[...w,e],N(t),k&&k(e)}else{t=w[f]===e[f]?{}:e,N(t),k&&k(t)}},$=(e,l)=>{e.preventDefault(),e.stopPropagation(),C&&C(l)},D=e=>{if(!m)return"";let t=!1;return l&&Array.isArray(w)?w.map((e=>e[f])).includes(e[f])&&(t=!0):w?.[f]===e[f]&&(t=!0),t?`active bg-${x} border-${x}`:""};return(0,a.useEffect)((()=>{if(v?N(v||{}):h&&N(b?.[0]),E.current){const e=E.current.parentElement;e&&e.clientHeight>0&&H(e.clientHeight)}}),[v,b,s,E.current]),(0,a.useEffect)((()=>{if(n&&(s||u||A))if(o)j(r(b||[],o));else{const e=[];let l=[],a=0;b?.forEach((r=>{a+t>parseFloat(s||u||A)&&(e.push(l),l=[],a=0),l.push(r),a+=t})),l.length>0&&e.push(l),j(e)}else j(b||[])}),[b,n,s,u,A]),(0,i.jsx)("div",{className:`list-group-wrapper ${d||""}`,ref:E,children:n&&(s||u||A)?(0,i.jsx)("div",{className:"row g-0",children:I.map(((e,l)=>(0,i.jsx)("div",{className:"col",children:(0,i.jsx)("ul",{className:"list-group me-2",style:{height:c,maxHeight:s||u||c||A,overflowY:"auto",border:"1px solid #ccc",borderRadius:"5px",boxSizing:"border-box"},children:Array.isArray(e)&&e?.map(((e,l)=>(0,i.jsx)("button",{onClick:()=>S(e),onDoubleClick:l=>$(l,e),type:"button",className:`list-group-item list-group-item-action border-0 ${D(e)}`,children:e.render?e.render(e,g,f):y?y(e,g,f):e[g]},l)))})},l)))}):(0,i.jsx)("div",{className:"list-group",style:{height:c,maxHeight:u||c,overflowY:"auto",border:I.length?"1px solid #ccc":"none"},children:I?.map(((e,l)=>(0,i.jsx)("button",{style:{whiteSpace:p?"nowrap":"normal",border:"none"},onClick:()=>S(e),onDoubleClick:l=>$(l,e),type:"button",className:`list-group-item list-group-item-action ${D(e)}`,children:e.render?e.render(e,g,f):y?y(e,g,f):e[g]},e[f])))})})}},7801:(e,l,t)=>{t.r(l),t.d(l,{default:()=>s});t(6540);var a=t(3085),r=t(1428),i=t(4848);const s=e=>{let{}=e;return(0,i.jsx)("div",{className:"active-on-click-wrapper",children:(0,i.jsx)(a.A,{activeOnClick:!1,data:r.data})})}},1428:(e,l,t)=>{t.r(l),t.d(l,{data:()=>r,default:()=>i});var a=t(4848);const r=[{label:"Item 1",value:"1"},{label:"Item 2",value:"2"},{label:"Item 3",value:"3"},{label:"Item 4",value:"4"},{label:"Item 5",value:"5"},{label:"Item 6",value:"6"},{label:"Item 7",value:"7"},{label:"Item 8",value:"8"},{label:"Item 9",value:"9"},{label:"Item 10",value:"10"}],i=()=>(0,a.jsx)("div",{})}}]);