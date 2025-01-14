"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[4585,7153],{5917:(e,n,a)=>{a.d(n,{A:()=>l});var i=a(6540),s=a(4848);const d=e=>{let{defaltExpandNodes:n,showLine:a,maxLevel:t,onLoadNode:l,lazy:o=!1,activeFontColor:c="#fff",activeBgc:r="#2783d8",bgc:h="transparent",addIconClass:p,deleteIconClass:x,editIconClass:g,prefixTag:m,showTag:u=!0,children:f,wrap:E=!0,node:w,isTree:v,showOptIcons:I=!1,showAddIcon:T=!1,showEditIcon:C=!1,activeId:N,onToggle:L,onToggleIconClick:y,onItemClick:k,onOptIconClick:j}=e;const[S,$]=(0,i.useState)(!1),[b,H]=(0,i.useState)(!1),[O,A]=(0,i.useState)(w),[z,R]=(0,i.useState)(0),F=(0,i.useRef)(null),M=(0,i.useRef)(null),_=()=>{$((e=>!e)),L&&L(O)};function B(e){let n=[],a=e;for(;a;)"DIV"===a.tagName&&a.classList.contains("expanded")&&n.push(a),a=a.parentNode;!function(e,n,a){let i;void 0===a&&(a=!1),i=e.scrollHeight,n.forEach(((e,n)=>{if(n){const n=parseInt(e.style.maxHeight);e.style.maxHeight=`${i+n+16}px`}else e.style.maxHeight=`${i}px`}))}(e,n)}const W=e=>{const n=F.current?.querySelector(`.children.${e||"not-expand"}`),a=n?.querySelectorAll(".list-node-wrapper");if(a){const e=[...a],n=[];setTimeout((()=>{let a;e.forEach((e=>{e.parentNode.classList.contains("expanded")&&n.push(e)})),n?.forEach((e=>{a!=e.parentNode&&(a=e.parentNode,B(a))}))}),0)}},q=async(e,n)=>{let a;n?(n.stopPropagation(),a=n.target):a=M.current,_(),v&&o&&!e.hasLoaded&&await(async e=>{let n={...e};n.loading=!0,A(n);const a=await l(e);a&&(n.children=a.map(((n,i)=>{let s={...n,level:e.level+1,isExpanded:!1};return i===a.length-1&&(s.isEachLast=!0),s})),n.loading=!1,n.hasLoaded=!0),A(n)})(e);const i=a?.parentNode?.parentNode;F.current=i,R(S?0:i?.scrollHeight),W()},D=e=>{y&&y(e)},P=(e,n,a)=>{e.stopPropagation(),j&&j(n,a)};return(0,i.useEffect)((()=>{n?.includes(w.id)&&(1===w.level?setTimeout((()=>{q(O)}),100):q(O)),A(w)}),[w]),(0,i.useEffect)((()=>{!O.loading&&O.hasLoaded&&W("expanded")}),[O.loading,O.hasLoaded]),(0,s.jsx)("div",{className:"list-node-wrapper",children:(0,s.jsxs)("div",{className:`node-item-list  ${a?"show-line":""} ${O.isEachLast?"each-last":""} ${O.isFirst?"first":""}`,children:[(0,s.jsxs)("div",{onMouseEnter:()=>{H(!0)},onMouseLeave:()=>{H(!1)},style:{backgroundColor:O.bgc,...!a&&{paddingLeft:26*O.level+"px"}},className:"node-item-content pe-1 "+(O.level?"":"ps-2"),children:[v&&(!O.hasLoaded&&o||O.children&&O.children.length>0)&&O.level!==t-1?(0,s.jsx)("i",{ref:M,onMouseEnter:()=>{A((e=>({...e,isEnter:!0})))},onMouseLeave:()=>{A((e=>({...e,isEnter:!1})))},style:{fontSize:"16px",width:"10px",...O.isEnter?{transform:"scale(1.4)",color:"#334155"}:"",marginRight:"4px"},onClick:e=>q(O,e),className:"toggle-icon fa fa-caret-"+(S?"down":"right")}):(0,s.jsx)("span",{className:"empty-placehokder",style:{width:"14px"}}),O.loading&&(0,s.jsx)("div",{style:{width:"18px",height:"18px"},className:"spinner-border mx-1 ms-2",role:"status",children:(0,s.jsx)("span",{className:"visually-hidden ",children:"Loading..."})}),O.prefixTag||m?(0,s.jsx)("div",{className:"prefix-tag ms-1",children:(0,s.jsx)("i",{className:`${O.prefixTag||m} ${O.id,""}`})}):"",u&&(f?.length>0?f:[f]).map((e=>{if(e?.props?.id===O.showTag)return e})),(0,s.jsx)("div",{style:{whiteSpace:""+(E?"normal":"nowrap"),...b?{backgroundColor:"#cce1fc"}:{},...String(N)===String(O.id)?{backgroundColor:r,color:c}:""},onClick:e=>((e,n)=>{k&&k(n)})(0,O),className:`${v&&(!O.hasLoaded&&o||O.children&&O.children.length>0)&&O.level!==t-1||O.prefixTag||m?"ms-1":""} py-1 item-name ${O.children&&O.children.length>0?"has-children":"no-children"} ${String(N)===String(O.id)?"active":""}`,children:O.name}),(0,s.jsxs)("div",{className:"right-content "+(I&&b?"show-opt-icons":"hide-opt-icons"),children:[(0,s.jsx)("i",{style:{display:T||p?"inline-block":"none"},className:`icon fa ${p||"fa-plus text-success"}`,onClick:e=>P(e,"add",O)}),(0,s.jsx)("i",{style:{display:C||g?"inline-block":"none"},className:`icon fa ${g||"fa-pencil text-warning"}`,onClick:e=>P(e,"edit",O)}),(0,s.jsx)("i",{className:`icon fa ${x||"fa-trash text-danger"}`,onClick:e=>P(e,"delete",O)})]})]}),O.children&&O.children.length>0&&(0,s.jsx)("div",{className:"children "+(S?"expanded":"not-expand"),style:{maxHeight:z,paddingLeft:a?"35px":0},children:O.children.map((e=>(0,s.jsx)(d,{defaltExpandNodes:n,showLine:a,maxLevel:t,onLoadNode:l,lazy:o,addIconClass:p,editIconClass:g,deleteIconClass:x,prefixTag:m,showTag:u,children:f,showAddIcon:T,showEditIcon:C,showOptIcons:I,activeId:N,onOptIconClick:(e,n)=>((e,n)=>{j&&j(e,n)})(e,n),onToggleIconClick:D,onItemClick:k,node:e,isTree:v,onToggle:L},e.id)))})]})})},t=d,l=(0,i.forwardRef)(((e,n)=>{let{defaltExpandNodes:a,showLine:d,maxLevel:l,lazy:o,overflowY:c=!0,activeBgc:r,deleteIconClass:h,addIconClass:p,editIconClass:x,prefixTag:g,showSearch:m=!1,showTag:u=!0,children:f,wrap:E=!0,data:w,isTree:v=!1,showOptIcons:I=!1,showAddIcon:T=!0,showEditIcon:C=!0,activeId:N,maxWidth:L=300,maxHeight:y="100%",onToggle:k,onItemClick:j,onToggleIconClick:S,onOptIconClick:$,onLoadNode:b}=e;const[H,O]=(0,i.useState)(N),[A,z]=(0,i.useState)([]),R=e=>{O(e.id),j&&j(e)},F=e=>{S&&S(e)},M=(0,i.useRef)(null),_=()=>{setTimeout((()=>{M.current&&M.current.scrollTo({top:M.current.scrollHeight,behavior:"smooth"})}),10)},B=()=>{setTimeout((()=>{M.current&&M.current.scrollTo({top:0,behavior:"smooth"})}),0)};function W(e){let n=-1;return e.forEach(((a,i)=>{if(a.children&&a.children.length>0){a.children=W(a.children);const e=a.children[a.children.length-1];e&&(e.isEachLast=!0)}i===e.length-1?(a.isEachLast=!0,n=i):a.isEachLast=!1})),0===e.length&&n>=0&&(e[n].isEachLast=!0),e}const q=(e,n)=>{const a=(n,i,s)=>{const d=[];return n.forEach((n=>{n.pid===i&&(n.level=s,0===n.level&&(n.isFirst=!0),d.push(n),n.children=a(e,n.id,s+1))})),d};return a(e,n,0)};function D(e){let n=[];function a(e,i){const{id:s,name:d,isExpanded:t}=e;n.push({...e,id:s,name:d,isExpanded:t,pid:i}),e.children&&e.children.length>0&&e.children.forEach((e=>{a(e,s)}))}return e.forEach((e=>{a(e,null)})),n.map(((e,n)=>0===n?{...e,isFirst:!0}:e))}const P=async e=>{if(b){return await b(e,A)}};return(0,i.useImperativeHandle)(n,(()=>({scrollToEnd:_,scrollToTop:B,flattenDataWithoutNesting:D,convertListToTree:q}))),(0,i.useEffect)((()=>{O(N)}),[N]),(0,i.useEffect)((()=>{z(W(q(D(w),w?.[0]?.pid||null))),N||O(-1)}),[w]),(0,i.useEffect)((()=>{}),[A]),(0,s.jsx)("div",{className:"list-wrapper "+(d?"ps-2":""),style:{flex:1,height:"100%"},children:(0,s.jsx)("div",{ref:M,className:"list-content",style:{maxWidth:L,maxHeight:y,overflowY:"auto"},children:A&&A.map((e=>(0,s.jsx)(t,{defaltExpandNodes:a,showLine:d,maxLevel:l,onLoadNode:P,lazy:o,activeBgc:r,addIconClass:p,deleteIconClass:h,editIconClass:x,prefixTag:g,showTag:u,wrap:E,showEditIcon:C,showAddIcon:T,activeId:H,showOptIcons:I,onOptIconClick:(e,n)=>((e,n)=>{$&&$(e,n)})(e,n),onToggleIconClick:F,onItemClick:R,node:e,isTree:v,onToggle:k,children:f},e.id)))})})}))},5103:(e,n,a)=>{a.r(n),a.d(n,{default:()=>t});a(6540);var i=a(5917),s=a(926),d=a(4848);const t=e=>{let{}=e;return(0,d.jsx)("div",{className:"show-line-wrapper p-2",children:(0,d.jsx)(i.A,{showLine:!0,isTree:!0,data:s.data})})}},926:(e,n,a)=>{a.r(n),a.d(n,{data:()=>s,default:()=>d});var i=a(4848);const s=[{id:"1",name:"\u6839\u8282\u70b91",isExpanded:!1,children:[{id:"1-1",name:"\u5b50\u8282\u70b91-1",isExpanded:!1,children:[{id:"1-1-1",name:"\u5b59\u8282\u70b91-1-1",isExpanded:!1,children:[{id:"1-1-1-1",name:"\u66fe\u5b59\u8282\u70b91-1-1-1",isExpanded:!1,children:[]},{id:"11-11-1-1",name:"\u66fe\u5b59\u8282\u70b911-11-1-1",isExpanded:!1,children:[]},{id:"121-121-1-1",name:"\u66fe\u5b59\u8282\u70b9121-1-1-1",isExpanded:!1,children:[]}]}]},{id:"1-2",name:"\u5b50\u8282\u70b91-2",isExpanded:!1,children:[{id:"1-2-1",name:"\u5b59\u8282\u70b91-2-1",isExpanded:!1,children:[]},{id:"1-2-2",name:"\u5b59\u8282\u70b91-2-2",isExpanded:!1,children:[]}]}]},{id:"3-1-1-2",name:"\u66fe\u5b59\u8282\u70b93-1-1-2",isExpanded:!1,children:[{id:"13-1-1-2",name:"\u66fe\u5b59\u8282\u70b913-1-1-2",isExpanded:!1,children:[{id:"113-1-1-2",name:"\u66fe\u5b59\u8282\u70b9113-1-1-2",isExpanded:!1,children:[{id:"1113-1-1-2",name:"\u66fe\u5b59\u8282\u70b91113-1-1-2",isExpanded:!1}]},{id:"213-1-1-2",name:"\u66fe\u5b59\u8282\u70b9213-1-1-2",isExpanded:!1}]}]},{id:"2",name:"\u6839\u8282\u70b92",isExpanded:!1,children:[{id:"2-1-1-2",name:"\u66fe\u5b59\u8282\u70b92-1-1-2",isExpanded:!1,children:[{id:"2-2-1-2",name:"\u66fe\u5b59\u8282\u70b92-2-1-2",isExpanded:!1,children:[{id:"2-3-1-2",name:"\u66fe\u5b59\u8282\u70b92-3-1-2",isExpanded:!1,children:[]}]}]},{id:"12-2-1-2",name:"\u66fe\u5b59\u8282\u70b92-2-1-2",isExpanded:!1,children:[{id:"2-3-1-5",name:"\u66fe\u5b59\u8282\u70b92-3-1-5",isExpanded:!1,children:[]}]}]}],d=()=>(0,i.jsx)("div",{})}}]);