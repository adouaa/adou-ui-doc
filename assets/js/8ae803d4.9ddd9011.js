"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[153,4585],{9454:(e,n,a)=>{a.d(n,{A:()=>i});var s=a(6540),d=a(4848);const i=e=>{let{hoverUp:n,header:a,headerAlign:i="start",footer:t,footerAlign:l="start",children:o,externalClassName:c=""}=e;const[r,h]=(0,s.useState)(!1);return(0,d.jsxs)("div",{onMouseEnter:()=>{n&&h(!0)},onMouseLeave:()=>{h(!1)},className:`card-wrapper ${c} ${r?"hover-up":""}`,children:[a&&(0,d.jsx)("div",{className:`card-header p-2 text-${i}`,children:a}),(0,d.jsx)("div",{className:"card-content p-3",children:o}),t&&(0,d.jsx)("div",{className:`card-footer p-2 text-${l}`,children:t})]})}},5917:(e,n,a)=>{a.d(n,{A:()=>l});var s=a(6540),d=a(4848);const i=e=>{let{defaltExpandNodes:n,showLine:a,maxLevel:t,onLoadNode:l,lazy:o=!1,activeFontColor:c="#fff",activeBgc:r="#2783d8",bgc:h="transparent",addIconClass:p,deleteIconClass:x,editIconClass:m,prefixTag:g,showTag:u=!0,children:f,wrap:v=!0,node:E,isTree:w,showOptIcons:I=!1,showAddIcon:C=!1,showEditIcon:N=!1,activeId:T,onToggle:L,onToggleIconClick:j,onItemClick:y,onOptIconClick:k}=e;const[$,S]=(0,s.useState)(!1),[b,A]=(0,s.useState)(!1),[O,H]=(0,s.useState)(E),[M,z]=(0,s.useState)(0),F=(0,s.useRef)(null),R=(0,s.useRef)(null),_=()=>{S((e=>!e)),L&&L(O)};function B(e){let n=[],a=e;for(;a;)"DIV"===a.tagName&&a.classList.contains("expanded")&&n.push(a),a=a.parentNode;!function(e,n,a){let s;void 0===a&&(a=!1),s=e.scrollHeight,n.forEach(((e,n)=>{if(n){const n=parseInt(e.style.maxHeight);e.style.maxHeight=`${s+n+16}px`}else e.style.maxHeight=`${s}px`}))}(e,n)}const W=e=>{const n=F.current?.querySelector(`.children.${e||"not-expand"}`),a=n?.querySelectorAll(".list-node-wrapper");if(a){const e=[...a],n=[];setTimeout((()=>{let a;e.forEach((e=>{e.parentNode.classList.contains("expanded")&&n.push(e)})),n?.forEach((e=>{a!=e.parentNode&&(a=e.parentNode,B(a))}))}),0)}},q=async(e,n)=>{let a;n?(n.stopPropagation(),a=n.target):a=R.current,_(),w&&o&&!e.hasLoaded&&await(async e=>{let n={...e};n.loading=!0,H(n);const a=await l(e);a&&(n.children=a.map(((n,s)=>{let d={...n,level:e.level+1,isExpanded:!1};return s===a.length-1&&(d.isEachLast=!0),d})),n.loading=!1,n.hasLoaded=!0),H(n)})(e);const s=a?.parentNode?.parentNode;F.current=s,z($?0:s?.scrollHeight),W()},D=e=>{j&&j(e)},P=(e,n,a)=>{e.stopPropagation(),k&&k(n,a)};return(0,s.useEffect)((()=>{n?.includes(E.id)&&(1===E.level?setTimeout((()=>{q(O)}),100):q(O)),H(E)}),[E]),(0,s.useEffect)((()=>{!O.loading&&O.hasLoaded&&W("expanded")}),[O.loading,O.hasLoaded]),(0,d.jsx)("div",{className:"list-node-wrapper",children:(0,d.jsxs)("div",{className:`node-item-list  ${a?"show-line":""} ${O.isEachLast?"each-last":""} ${O.isFirst?"first":""}`,children:[(0,d.jsxs)("div",{onMouseEnter:()=>{A(!0)},onMouseLeave:()=>{A(!1)},style:{backgroundColor:O.bgc,...!a&&{paddingLeft:26*O.level+"px"}},className:"node-item-content pe-1 "+(O.level?"":"ps-2"),children:[w&&(!O.hasLoaded&&o||O.children&&O.children.length>0)&&O.level!==t-1?(0,d.jsx)("i",{ref:R,onMouseEnter:()=>{H((e=>({...e,isEnter:!0})))},onMouseLeave:()=>{H((e=>({...e,isEnter:!1})))},style:{fontSize:"16px",width:"10px",...O.isEnter?{transform:"scale(1.4)",color:"#334155"}:"",marginRight:"4px"},onClick:e=>q(O,e),className:"toggle-icon fa fa-caret-"+($?"down":"right")}):(0,d.jsx)("span",{className:"empty-placehokder",style:{width:"14px"}}),O.loading&&(0,d.jsx)("div",{style:{width:"18px",height:"18px"},className:"spinner-border mx-1 ms-2",role:"status",children:(0,d.jsx)("span",{className:"visually-hidden ",children:"Loading..."})}),O.prefixTag||g?(0,d.jsx)("div",{className:"prefix-tag ms-1",children:(0,d.jsx)("i",{className:`${O.prefixTag||g} ${O.id,""}`})}):"",u&&(f?.length>0?f:[f]).map((e=>{if(e?.props?.id===O.showTag)return e})),(0,d.jsx)("div",{style:{whiteSpace:""+(v?"normal":"nowrap"),...b?{backgroundColor:"#cce1fc"}:{},...String(T)===String(O.id)?{backgroundColor:r,color:c}:""},onClick:e=>((e,n)=>{y&&y(n)})(0,O),className:`${w&&(!O.hasLoaded&&o||O.children&&O.children.length>0)&&O.level!==t-1||O.prefixTag||g?"ms-1":""} py-1 item-name ${O.children&&O.children.length>0?"has-children":"no-children"} ${String(T)===String(O.id)?"active":""}`,children:O.name}),(0,d.jsxs)("div",{className:"right-content "+(I&&b?"show-opt-icons":"hide-opt-icons"),children:[(0,d.jsx)("i",{style:{display:C||p?"inline-block":"none"},className:`icon fa ${p||"fa-plus text-success"}`,onClick:e=>P(e,"add",O)}),(0,d.jsx)("i",{style:{display:N||m?"inline-block":"none"},className:`icon fa ${m||"fa-pencil text-warning"}`,onClick:e=>P(e,"edit",O)}),(0,d.jsx)("i",{className:`icon fa ${x||"fa-trash text-danger"}`,onClick:e=>P(e,"delete",O)})]})]}),O.children&&O.children.length>0&&(0,d.jsx)("div",{className:"children "+($?"expanded":"not-expand"),style:{maxHeight:M,paddingLeft:a?"35px":0},children:O.children.map((e=>(0,d.jsx)(i,{defaltExpandNodes:n,showLine:a,maxLevel:t,onLoadNode:l,lazy:o,addIconClass:p,editIconClass:m,deleteIconClass:x,prefixTag:g,showTag:u,children:f,showAddIcon:C,showEditIcon:N,showOptIcons:I,activeId:T,onOptIconClick:(e,n)=>((e,n)=>{k&&k(e,n)})(e,n),onToggleIconClick:D,onItemClick:y,node:e,isTree:w,onToggle:L},e.id)))})]})})},t=i,l=(0,s.forwardRef)(((e,n)=>{let{defaltExpandNodes:a,showLine:i,maxLevel:l,lazy:o,overflowY:c=!0,activeBgc:r,deleteIconClass:h,addIconClass:p,editIconClass:x,prefixTag:m,showSearch:g=!1,showTag:u=!0,children:f,wrap:v=!0,data:E,isTree:w=!1,showOptIcons:I=!1,showAddIcon:C=!0,showEditIcon:N=!0,activeId:T,maxWidth:L=300,maxHeight:j="100%",onToggle:y,onItemClick:k,onToggleIconClick:$,onOptIconClick:S,onLoadNode:b}=e;const[A,O]=(0,s.useState)(T),[H,M]=(0,s.useState)([]),z=e=>{O(e.id),k&&k(e)},F=e=>{$&&$(e)},R=(0,s.useRef)(null),_=()=>{setTimeout((()=>{R.current&&R.current.scrollTo({top:R.current.scrollHeight,behavior:"smooth"})}),10)},B=()=>{setTimeout((()=>{R.current&&R.current.scrollTo({top:0,behavior:"smooth"})}),0)};function W(e){let n=-1;return e.forEach(((a,s)=>{if(a.children&&a.children.length>0){a.children=W(a.children);const e=a.children[a.children.length-1];e&&(e.isEachLast=!0)}s===e.length-1?(a.isEachLast=!0,n=s):a.isEachLast=!1})),0===e.length&&n>=0&&(e[n].isEachLast=!0),e}const q=(e,n)=>{const a=(n,s,d)=>{const i=[];return n.forEach((n=>{n.pid===s&&(n.level=d,0===n.level&&(n.isFirst=!0),i.push(n),n.children=a(e,n.id,d+1))})),i};return a(e,n,0)};function D(e){let n=[];function a(e,s){const{id:d,name:i,isExpanded:t}=e;n.push({...e,id:d,name:i,isExpanded:t,pid:s}),e.children&&e.children.length>0&&e.children.forEach((e=>{a(e,d)}))}return e.forEach((e=>{a(e,null)})),n.map(((e,n)=>0===n?{...e,isFirst:!0}:e))}const P=async e=>{if(b){return await b(e,H)}};return(0,s.useImperativeHandle)(n,(()=>({scrollToEnd:_,scrollToTop:B,flattenDataWithoutNesting:D,convertListToTree:q}))),(0,s.useEffect)((()=>{O(T)}),[T]),(0,s.useEffect)((()=>{M(W(q(D(E),E?.[0]?.pid||null))),T||O(-1)}),[E]),(0,s.useEffect)((()=>{}),[H]),(0,d.jsx)("div",{className:"list-wrapper "+(i?"ps-2":""),style:{flex:1,height:"100%"},children:(0,d.jsx)("div",{ref:R,className:"list-content",style:{maxWidth:L,maxHeight:j,overflowY:"auto"},children:H&&H.map((e=>(0,d.jsx)(t,{defaltExpandNodes:a,showLine:i,maxLevel:l,onLoadNode:P,lazy:o,activeBgc:r,addIconClass:p,deleteIconClass:h,editIconClass:x,prefixTag:m,showTag:u,wrap:v,showEditIcon:N,showAddIcon:C,activeId:A,showOptIcons:I,onOptIconClick:(e,n)=>((e,n)=>{S&&S(e,n)})(e,n),onToggleIconClick:F,onItemClick:z,node:e,isTree:w,onToggle:y,children:f},e.id)))})})}))},7652:(e,n,a)=>{a.r(n),a.d(n,{default:()=>l});a(6540);var s=a(5917),d=a(926),i=a(9454),t=a(4848);const l=e=>{let{}=e;const n=(e,n)=>{alert(`\u70b9\u51fb\u4e86 ${e} \u6309\u94ae\uff0c\u5f53\u524d\u9879\u3010id\u3011\u4e3a${n.id}\uff0c\u3010name\u3011\u4e3a${n.name}`)};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.A,{header:"\u9ed8\u8ba4\u64cd\u4f5c\u680f",children:(0,t.jsx)("div",{className:"opt-bar-wrapper p-2",children:(0,t.jsx)(s.A,{onOptIconClick:n,showOptIcons:!0,isTree:!0,data:d.data})})}),(0,t.jsx)("hr",{}),(0,t.jsx)(i.A,{header:"\u81ea\u5b9a\u4e49\u64cd\u4f5c\u680f",children:(0,t.jsx)("div",{className:"opt-bar-wrapper p-2",children:(0,t.jsx)(s.A,{onOptIconClick:n,showOptIcons:!0,addIconClass:"fa-solid fa-circle-plus text-success",editIconClass:"fa-solid fa-pencil text-secondary",isTree:!0,data:d.data})})})]})}},926:(e,n,a)=>{a.r(n),a.d(n,{data:()=>d,default:()=>i});var s=a(4848);const d=[{id:"1",name:"\u6839\u8282\u70b91",isExpanded:!1,children:[{id:"1-1",name:"\u5b50\u8282\u70b91-1",isExpanded:!1,children:[{id:"1-1-1",name:"\u5b59\u8282\u70b91-1-1",isExpanded:!1,children:[{id:"1-1-1-1",name:"\u66fe\u5b59\u8282\u70b91-1-1-1",isExpanded:!1,children:[]},{id:"11-11-1-1",name:"\u66fe\u5b59\u8282\u70b911-11-1-1",isExpanded:!1,children:[]},{id:"121-121-1-1",name:"\u66fe\u5b59\u8282\u70b9121-1-1-1",isExpanded:!1,children:[]}]}]},{id:"1-2",name:"\u5b50\u8282\u70b91-2",isExpanded:!1,children:[{id:"1-2-1",name:"\u5b59\u8282\u70b91-2-1",isExpanded:!1,children:[]},{id:"1-2-2",name:"\u5b59\u8282\u70b91-2-2",isExpanded:!1,children:[]}]}]},{id:"3-1-1-2",name:"\u66fe\u5b59\u8282\u70b93-1-1-2",isExpanded:!1,children:[{id:"13-1-1-2",name:"\u66fe\u5b59\u8282\u70b913-1-1-2",isExpanded:!1,children:[{id:"113-1-1-2",name:"\u66fe\u5b59\u8282\u70b9113-1-1-2",isExpanded:!1,children:[{id:"1113-1-1-2",name:"\u66fe\u5b59\u8282\u70b91113-1-1-2",isExpanded:!1}]},{id:"213-1-1-2",name:"\u66fe\u5b59\u8282\u70b9213-1-1-2",isExpanded:!1}]}]},{id:"2",name:"\u6839\u8282\u70b92",isExpanded:!1,children:[{id:"2-1-1-2",name:"\u66fe\u5b59\u8282\u70b92-1-1-2",isExpanded:!1,children:[{id:"2-2-1-2",name:"\u66fe\u5b59\u8282\u70b92-2-1-2",isExpanded:!1,children:[{id:"2-3-1-2",name:"\u66fe\u5b59\u8282\u70b92-3-1-2",isExpanded:!1,children:[]}]}]},{id:"12-2-1-2",name:"\u66fe\u5b59\u8282\u70b92-2-1-2",isExpanded:!1,children:[{id:"2-3-1-5",name:"\u66fe\u5b59\u8282\u70b92-3-1-5",isExpanded:!1,children:[]}]}]}],i=()=>(0,s.jsx)("div",{})}}]);