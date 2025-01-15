"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[5139,8430],{4277:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e){return 0===Object.keys(e??{}).length}},6608:(e,t,r)=>{r.d(t,{nA:()=>a,Ay:()=>p});var n=r(6540),l=r(4848);const a=e=>{const{parentId:t,tooltip:r,sortable:a,collapse:i,isParent:o,maxWidth:s,render:c,rowData:p,prop:d,label:h,rowIndex:m,colIndex:x,value:u,eidtable:f,align:g="center",width:b,onChange:w,onEditCancel:y,onEditOK:v,onExpand:k}=e,[j,N]=(0,n.useState)(!1),[S,C]=(0,n.useState)(u||""),W=(0,n.useRef)(null),$=()=>{switch(g){case"start":return"justify-content-start";case"end":return"justify-content-end";default:return"justify-content-center"}};return(0,n.useEffect)((()=>{C(u)}),[u]),(0,l.jsx)("div",{className:`table-cell d-flex ${$()}`,style:{width:"100%"},children:c?c(S,p,m,d,x):(0,l.jsx)("div",{className:"table-cell-wrapper",style:{display:"inline-block",width:"100%"},onDoubleClick:()=>{f&&N(!0)},ref:W,children:j?(0,l.jsx)("div",{style:{width:W.current?`${W.current.clientWidth}px`:"100%",boxSizing:"border-box"}}):(0,l.jsx)("div",{className:"table-cell-content",children:(0,l.jsxs)("div",{className:`value d-flex align-items-center ${$()}`,children:[o?(0,l.jsx)("i",{onClick:e=>{e.stopPropagation(),k&&k()},className:`fa-solid fa-chevron-right me-2 ${i?"table-cell-folder-rotate-down":""} collapse-icon`}):t&&0===x?(0,l.jsx)("span",{className:"ps-3"}):null,(0,l.jsx)("div",{style:{maxWidth:s},className:"ellipsis-1 ",children:S})]})})})})};var i=r(5653),o=r(4277);const s=function(e,t){return void 0===t&&(t=[]),e.forEach((e=>{e.children?s(e.children,t):t.push(e)})),t},c=e=>{const{pageSizeOptions:t=[5,10,15,20],pagination:r=!1,pageSize:c=10,currentPage:p=1,showTotal:d=!1,compact:h,showTip:m,checkAll:x,tdPadding:u="px-2 py-3",clickChecked:f,showHeader:g=!0,defaultCheckedList:b,headerFontWeight:w="normal",tableWidth:y,tableBGC:v,tableRef:k,activeId:j,maxWidth:N,showIndex:S=!1,multiple:C=!1,id:W="id",trPointer:$=!1,align:E,collection:T,collapse:I=!0,expandAll:O=!1,size:A="lg",data:J,columns:H,propsData:P,tableHover:B=!0,tableStriped:D=!1,tableBorderd:_=!1,tableBorderless:L=!1,headColor:R="null",captionContent:F,captionPosition:z="top",tableResponsive:M="xxl",eidtable:U=!1,headSticky:q=!0,headTextColor:G="black",headBGC:V="",divider:K,maxHeight:X="500px",minHeight:Y="0px",onRowDoubleClick:Q,onRowClick:Z,onPageChange:ee,onPageSizeChange:te}=e,[re,ne]=(0,n.useState)([]),[le,ae]=(0,n.useState)([]),[ie,oe]=(0,n.useState)([]),[se,ce]=(0,n.useState)(0),[pe,de]=(0,n.useState)([]),[he,me]=(0,n.useState)(1),[xe,ue]=(0,n.useState)(p),[fe,ge]=(0,n.useState)(c),[be,we]=(0,n.useState)(0),[ye,ve]=(0,n.useState)([]),ke=(0,n.useId)(),je=e=>{const t=(r,n)=>r.map(((r,l)=>(r[n]===e[n]&&(r.collapse=!r.collapse),r.children&&t(r.children,n),r))),r=t(re,W);ne(r)},Ne=e=>{switch(e){case"start":return"flex-start";case"end":return"flex-end";default:return"center"}},Se=(e,t)=>{const r=ie?.find((t=>t.prop===e));if(r)if(t){if(r.isDown)return"7px solid red"}else if(r.isUp)return"7px solid red"},Ce=e=>{switch(e.align||E){case"start":return"justify-content-start";case"end":return"justify-content-end";default:return"justify-content-center"}},We=(e,t,r)=>!r&&e.children?.length?"start":t.align||E,$e=(e,t)=>{const r=JSON.parse(JSON.stringify(J));oe((n=>n.map((n=>(e===n.prop&&(t?(n.isDown=!n.isDown,n.isUp=!1,n.isDown?ne((t=>JSON.parse(JSON.stringify(t)).map((t=>{const r=t.children?JSON.parse(JSON.stringify(t.children)):[];return r.length>0&&(r.sort(((t,r)=>t[e]<r[e]?1:-1)),t.children=r),t})).sort(((t,r)=>t[e]<r[e]?1:-1)))):ne(r)):(n.isUp=!n.isUp,n.isDown=!1,n.isUp?ne((t=>JSON.parse(JSON.stringify(t)).map((t=>{const r=t.children?JSON.parse(JSON.stringify(t.children)):[];return r.length>0&&(r.sort(((t,r)=>t[e]>r[e]?1:-1)),t.children=r),t})).sort(((t,r)=>t[e]>r[e]?1:-1)))):ne(r))),n)))))},Ee=function(t,r,o,c,p,d,x){return void 0===x&&(x=0),x++,r.collapse&&r.children&&r.children.map(((g,b)=>(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)("tr",{onClick:e=>Le(g,e),className:`tr-content tr-content ${!0===g.checked?"tr-checked":""} collapse-table-tr animate__animated animate__fadeIn`,style:{...f||$?{cursor:"pointer"}:"",..._?{}:{borderBottom:"1px solid #f0f0f0"}},children:[T&&(0,l.jsx)("td",{scope:"row",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",verticalAlign:"middle"},className:`text-center py-1 ${h?"p-0":u}`,children:(0,l.jsx)("input",{className:u,name:g[W]+ke,id:g[W]+ke,checked:!0===g.checked,onChange:e=>Me(g,e),type:C?"checkbox":"radio"})}),S&&(0,l.jsx)("th",{className:`text-center py-1 ${h?"p-0":u}`,style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",padding:"0px",alignContent:"center",fontWeight:w},children:`${o+1}.${b+1}`}),e.children?n.Children.map(t,((e,t)=>{let a=e.props,s=a.prop;if(n.isValidElement(e)){const d=n.cloneElement(e,{parentId:g.parentId,collapse:g.collapse,onExpand:()=>je(g),isParent:!t&&g.children,value:g[s],rowData:g,eidtable:U,prop:s,rowIndex:o,colIndex:t,align:We(r,a,t),maxWidth:a.maxWidth||N,showTip:a.showTip||m});return(0,l.jsx)("td",{className:`text-${a.align} py-1 ${h?"p-0":u}`,style:{verticalAlign:c[s],width:p[s],overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",maxWidth:a.maxWidth||N,[""+(t?"":"paddingLeft")]:"40px"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${Ce(a)}`,style:{paddingLeft:t?0:15*x+"px"},children:a.showTip?(0,l.jsx)(i.A,{position:"right",text:g[s],children:d}):d})},t)}})):s(H).map(((e,t)=>{let n=e.props?e.props:e,s=n.prop;const d={parentId:g.parentId,collapse:g.collapse,onExpand:()=>je(g),isParent:!t&&g.children,value:g[s],rowData:g,eidtable:U,prop:s,rowIndex:o,colIndex:t,align:We(r,n,t),maxWidth:n.maxWidth||N,showTip:n.showTip||m};return(0,l.jsx)("td",{className:`text-${n.align} py-1 ${h?"p-0":u}`,style:{verticalAlign:c[s],width:p[n.prop],overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",maxWidth:n.maxWidth||N,[""+(t?"":"paddingLeft")]:"40px"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${Ce(n)}`,style:{paddingLeft:t?0:15*x+"px"},children:n.showTip?(0,l.jsx)(i.A,{position:"right",text:g[s],children:(0,l.jsx)(a,{...d})}):(0,l.jsx)(a,{...d})})},t)}))]},g[W]),g.children?.length>0?Ee(t,g,o,c,p,d,x):null]},g[W])))};let Te=[];e.children?e.children?.length?Te=e.children:Te.push(e.children):Te=s(H).map((e=>(e.props=e,e)));let Ie={};const Oe={},Ae={};Te.forEach((e=>{e?.props&&(Ie[e.props.prop]=e.props.width,Oe[e.props.prop]=e.props.align||E,Ae[e.props.prop]=e.props.verticalAlign||"middle")})),!(0,o.A)(Ie)&&Object.values(Ie).every((e=>!e))&&(Ie=(e=>{console.log("calculateHeaderWidth-------------: ");const t={},r=e.map((e=>({title:e.props.title,prop:e.props.prop}))),n=r.reduce(((e,t)=>e+t.title?.length),0);return r.forEach((e=>{t[e.prop]=100*Number((e.title?.length/n).toFixed(2))+"%"})),t})(Te));const Je=e=>{let t=0;return e.forEach((e=>{const r=He(e);r>t&&(t=r)})),t},He=e=>{if(!e.children)return 1;let t=0;return e.children.forEach((e=>{const r=He(e);r>t&&(t=r)})),t+1},Pe=(e,t)=>{if(!e.children)return 1;let r=0;return e.children.forEach((e=>{r+=Pe(e,t+1)})),r};(0,n.useEffect)((()=>{const e=(e=>{const t=Je(e);me(t);const r=Array.from({length:t},(()=>[])),n=(e,l)=>{e.forEach((e=>{const a={title:e.title,colSpan:Pe(e,l),rowSpan:e.children?.length?1:t-l,...e};r[l]||(r[l]=[]),r[l].push(a),e.children&&n(e.children,l+1)}))};return n(e,0),r})(H);de(e)}),[H]),(0,n.useEffect)((()=>{}),[]);const[Be,De]=(0,n.useState)(!1),_e=(e,t,r)=>{const n=t.find((t=>t[r]===e.parentId?t:t.children?.length?_e(e,t.children,r):void 0));if(!(0,o.A)(n)){const e=n.children.every((e=>!0===e.checked)),t=n.children.some((e=>!0===e.checked));n.checked=!!e||!!t&&"partial",n.parentId&&_e(n,re,r)}},Le=(e,t)=>{if(Z&&Z(e),Q&&Q(e),f){"checkbox"===t.target.type||"radio"===t.target.type||Me(e,t)}},Re=(e,t)=>e.map((e=>(t.includes(e[W])&&(e.checked=!0,e.children&&ze(e.children,!0)),e.children?.length&&(e.children=Re(e.children,t)),e))),Fe=e=>e.map((e=>(e.checked=!0,e.children?.length&&Fe(e.children),e))),ze=(e,t)=>e.map((e=>(e.checked=t,e.children?.length&&ze(e.children,t),e))),Me=(e,t)=>{t.stopPropagation(),ce(se+1);const r=t=>t.map((t=>(t[W]===e[W]?(t.checked=!(!0===t.checked),t.children?.length&&(t.children=ze(t.children,!0===t.checked))):t.children?.length&&(t.children=r(t.children)),t))),n=(e,t)=>e.map((e=>(e[W]!==t[W]&&(e.checked=!1,e.children?.length&&(e.children=n(e.children,t))),e)));(f||T)&&(r(re),C||n(re,e)),e.parentId&&_e(e,re,W),De(Ue(re))};function Ue(e){return e?.every((e=>!!e.checked&&(!e.children||Ue(e.children))))}const qe=e=>{const t=e.target.checked;De(t);const r=e=>e.map((e=>(e.checked=t,e.children&&(e.children=r(e.children)),e)));ne(r(re))},Ge=()=>{ze(re,!1)},Ve=function(e,t){return void 0===t&&(t=[]),e.forEach((e=>{!0===e.checked&&t.push(e),e.children&&Ve(e.children,t)})),t},Ke=()=>Ve(JSON.parse(JSON.stringify(re)),[]),Xe=()=>{const e=tt(JSON.parse(JSON.stringify(re)),!0);ne(e)},Ye=()=>{const e=tt(JSON.parse(JSON.stringify(re)),!1);ne(e)},Qe=()=>{const e=document.querySelector(".table-wrapper"),t=document.querySelector(".table-body");t&&e&&e.scrollTo({top:t.clientHeight,behavior:"smooth"})},Ze=()=>{const e=document.querySelector(".table-wrapper");e&&e.scrollTo({top:0,behavior:"smooth"})},et=(e,t)=>e.map((e=>(e.parentId=t,e.children&&et(e.children,e[W]),e))),tt=function(e,t){return void 0===t&&(t=O),e.map((e=>(e.collapse=t,e.children&&tt(e.children,t),e)))};(0,n.useEffect)((()=>{if(!J.length)return ne([]),void De(!1);let e=JSON.parse(JSON.stringify(J));e=et(e,0);const t=Ue(e);De(t),I?setTimeout((()=>{const t=tt(e);ne(t),ae(t)}),10):(ne(e),ae(e)),e.length&&setTimeout((()=>{(e=>{if(x){const t=Fe(e);ne(t),De(!0)}else if(Array.isArray(b)&&b.length>0){const t=Re(JSON.parse(JSON.stringify(e)),b);ne(t)}})(e)}),10)}),[J]),(0,n.useEffect)((()=>{}),[re]),(0,n.useEffect)((()=>{if(j){const e=JSON.parse(JSON.stringify(J)).map((e=>(e[W]&&e[W]===j?e.checked=!0:e.checked=!1,e)));setTimeout((()=>{ne(e)}),10)}}),[j,J]),(0,n.useEffect)((()=>{oe(H)}),[H]),(0,n.useImperativeHandle)(k,(()=>({clearChecked:Ge,getCheckedList:Ke,expandAll:Xe,foldAll:Ye,scrollToEnd:Qe,scrollToTop:Ze})));const rt=(0,n.useCallback)((()=>{if(!r)return void ve(re);const e=(xe-1)*fe,t=e+fe,n=re.slice(e,t);ve(n),we(Math.ceil(re.length/fe))}),[re,xe,fe,r]),nt=()=>{const e=[];if(be<=7)for(let t=1;t<=be;t++)e.push({page:t,type:"page"});else if(e.push({page:1,type:"page"}),xe<=3){for(let t=2;t<=5;t++)e.push({page:t,type:"page"});e.push({page:0,type:"ellipsis"}),e.push({page:be,type:"page"})}else if(xe>=be-2){e.push({page:0,type:"ellipsis"});for(let t=be-4;t<=be;t++)e.push({page:t,type:"page"})}else{e.push({page:0,type:"ellipsis"});for(let t=xe-1;t<=xe+1;t++)e.push({page:t,type:"page"});e.push({page:0,type:"ellipsis"}),e.push({page:be,type:"page"})}return e},lt=(e,t)=>{if("prev"===t){if(e<=0)return}else if("next"===t&&e>=be+1)return;ue(e),ee?.(e)};(0,n.useEffect)((()=>{rt()}),[rt]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{minHeight:Y,maxHeight:X,overflow:"auto",width:y},className:"table-wrapper "+("table-responsive"+("-"+M)),children:[(0,l.jsxs)("table",{style:{background:v,width:y},className:`table ${D?"table-striped":""} ${_?"table-bordered":"table-borderless"} table-${A} ${R?`table-${R}`:""} overflow-auto ${0===ye.length?"mb-0":""}`,children:[g&&(0,l.jsx)("thead",{style:{position:q?"sticky":"unset",top:0,backgroundColor:`${V}`,zIndex:999},className:`text-${G}`,children:pe.map(((e,t)=>{if(e?.length)return(0,l.jsxs)("tr",{children:[0===t&&T&&(0,l.jsx)("th",{className:h?"p-0":"",rowSpan:he,scope:"col th-collection",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",textAlign:"center"},children:C&&(0,l.jsx)("input",{checked:Be,onChange:qe,type:C?"checkbox":"radio"})}),0===t&&S&&(0,l.jsx)("th",{className:h?"p-0":"",rowSpan:he,scope:"col th-index",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px"}}),e.map((e=>(0,l.jsx)("th",{rowSpan:e.rowSpan,colSpan:e.colSpan,style:{whiteSpace:"nowrap",width:Ie[e.prop],fontWeight:w},className:`${Oe[e.prop]?"text-"+Oe[e.prop]:""} ${h?"p-0":""} align-middle`,scope:"col",children:(0,l.jsxs)("div",{className:"header-content",style:{display:"flex",alignItems:"center",justifyContent:Ne(Oe[e.prop])},children:[(0,l.jsx)("span",{className:"header-text",children:e.title}),e.sortable&&(0,l.jsxs)("div",{className:"header-icon ms-1",children:[(0,l.jsx)("i",{style:{borderBottom:Se(e.prop)||"7px solid #000"},onClick:()=>$e(e.prop),className:"icon sort-up"}),(0,l.jsx)("i",{style:{borderTop:Se(e.prop,!0)||"7px solid #000"},onClick:()=>$e(e.prop,!0),className:"icon sort-down"})]})]})},e.title)))]},t)}))}),(0,l.jsx)("tbody",{className:"table-body "+(K?"table-group-divider":""),children:re.length>0&&ye.map(((t,r)=>(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)("tr",{onClick:e=>Le(t,e),className:"tr-content "+(!0===t.checked?"tr-checked":""),style:{...f||$?{cursor:"pointer"}:"",..._?{}:{borderBottom:"1px solid #f0f0f0"}},children:[T&&(0,l.jsx)("td",{scope:"row",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",verticalAlign:"middle"},className:`text-center py-1 ${h?"p-0":u}`,children:(0,l.jsx)("input",{className:u,name:t[W]+ke,id:t[W]+ke,checked:!0===t.checked,onChange:e=>Me(t,e),type:C?"checkbox":"radio"})}),S&&(0,l.jsx)("td",{className:`text-center py-1 ${h?"p-0":u}`,scope:"col",style:{alignContent:"center",padding:"0px",minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px"},children:r+1}),e.children?n.Children.map(Te,((e,a)=>{const o=e.props;let s=o.prop;if(n.isValidElement(e)){const c=n.cloneElement(e,{onExpand:()=>je(t),isParent:!a&&I&&t.children,value:t[`${s}`],rowData:t,eidtable:U,prop:s,rowIndex:r,colIndex:a,canCollapse:t.children,collapse:t.collapse,align:!a&&I&&t.children?"start":o.align||E,width:Ie[o.prop],maxWidth:o.maxWidth||N,showTip:o.showTip||m});return(0,l.jsx)("td",{className:`text-${o.align||E} py-1 ${h?"p-0":u}`,style:{verticalAlign:Ae[s],width:Ie[o.prop],maxWidth:o.maxWidth||N,overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",whiteSpace:"nowrap"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${Ce(o)}`,children:o.showTip?(0,l.jsx)(i.A,{text:t[s],children:c}):c})},a)}})):s(H).map(((e,n)=>{const o=e.props?e.props:e;let s=o.prop;const c={onExpand:()=>je(t),isParent:!n&&I&&t.children,value:t[`${s}`],rowData:t,eidtable:U,prop:s,rowIndex:r,colIndex:n,canCollapse:t.children,collapse:t.collapse,align:!n&&I&&t.children?"start":o.align||E,width:Ie[o.prop],maxWidth:o.maxWidth||N,showTip:o.showTip||m};return(0,l.jsx)("td",{className:`text-${o.align||E} py-1 ${h?"p-0":u}`,style:{verticalAlign:Ae[s],width:Ie[o.prop],maxWidth:o.maxWidth||N,overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",whiteSpace:"nowrap"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${Ce(o)}`,children:o.showTip?(0,l.jsx)(i.A,{text:t[s],children:(0,l.jsx)(a,{...c})}):(0,l.jsx)(a,{...c})})},n)}))]},r),Ee(Te,t,r,Ae,Ie,Oe)]},t[W]+ke)))})]}),0===ye.length&&(0,l.jsx)("div",{className:"text-center p-1",children:"\u6682\u65e0\u6570\u636e~"}),r?(0,l.jsxs)("div",{className:"d-flex justify-content-between align-items-center p-2",children:[(0,l.jsxs)("div",{className:"d-flex align-items-center",children:[d&&(0,l.jsxs)("span",{className:"me-3",children:["\u5171 ",re.length," \u6761"]}),(0,l.jsx)("select",{className:"form-select form-select-sm me-2",style:{width:"100px"},value:fe,onChange:e=>(e=>{ge(e),ue(1),te?.(e)})(Number(e.target.value)),children:t.map((e=>(0,l.jsxs)("option",{value:e,children:[e," \u6761/\u9875"]},e)))})]}),(0,l.jsxs)("div",{className:"pagination d-flex align-items-center",children:[(0,l.jsx)("i",{onClick:()=>lt(xe-1,"prev"),className:"prev-arrow rounded fa-solid fa-chevron-left "+(1===xe?"disabled":"")}),(0,l.jsx)("div",{className:"page-numbers d-flex align-items-center mx-2",children:nt().map(((e,t)=>(0,l.jsx)(n.Fragment,{children:"page"===e.type?(0,l.jsx)("button",{className:"btn btn-sm page-number-item d-flex align-items-center justify-content-center mx-1 "+(e.page===xe?"btn-primary":"btn-outline-secondary"),style:{minWidth:"24px",height:"26px"},onClick:()=>lt(e.page),children:e.page}):(0,l.jsx)("span",{className:"mx-1 d-flex align-items-center",children:"..."})},t)))}),(0,l.jsx)("i",{className:"next-arrow rounded fa-solid fa-chevron-right "+(xe===be?"disabled":""),onClick:()=>lt(xe+1,"next")})]})]}):null]})})};c.TableCell=a;const p=c},5653:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540),l=r(961);const a=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=0),t=parseInt(t)?parseInt(t):0,r=parseInt(r)?parseInt(r):0;const n=e.getBoundingClientRect(),l=document.body,a=document.documentElement,i=window.pageYOffset||a.scrollTop||l.scrollTop,o=window.pageXOffset||a.scrollLeft||l.scrollLeft,s=a.clientTop||l.clientTop||0,c=a.clientLeft||l.clientLeft||0,p={};return p.y=n.top+i-s+r,p.x=n.left+o-c+t,p.width=n.width,p.height=n.height,p};var i=r(4848);const o=e=>{let{left:t,right:r,top:o,bottom:s,wrap:c=!1,width:p,arrowOffsetPercent:d,wrapperFlex:h,mustShow:m,show:x=!0,text:u,position:f="top",children:g,tooltipBgc:b="#333",tooltipFontColor:w,arrowBorderColor:y="#333",wrapperClassname:v}=e;const[k,j]=(0,n.useState)(!1),[N,S]=(0,n.useState)(!1),C=(0,n.useRef)(null),W=(0,n.useRef)(!1),$=(0,n.useRef)(null),[E,T]=(0,n.useState)(0),[I,O]=(0,n.useState)(0),A=(0,n.useRef)(null),[J,H]=(0,n.useState)({}),P=()=>{$.current&&clearTimeout($.current),$.current=setTimeout((()=>{j(!0),setTimeout((()=>{S(!0)}),50)}),150)},B=()=>{m||($.current&&clearTimeout($.current),setTimeout((()=>{W.current||S(!1)}),200),setTimeout((()=>{W.current||j(!1)}),300))};return(0,n.useEffect)((()=>{m?P():B()}),[m]),(0,n.useEffect)((()=>{if(C.current){const e=C.current;T(e.offsetWidth),O(e.offsetHeight)}if(k){const e=a(A.current,0,0);H(e)}}),[k,N,g]),(0,i.jsxs)("div",{className:`adou-tooltip-wrapper ${v||""}`,style:{...h?{flex:1,display:"flex"}:{}},children:[(0,i.jsx)("div",{ref:A,className:"adou-tooltip-content",onMouseEnter:P,onMouseLeave:B,style:{...h?{flex:1}:{}},children:g}),("string"==typeof u?u?.trim?.()?.length>0:u)&&x&&k&&l.createPortal((0,i.jsxs)("div",{ref:C,onClick:e=>{e.stopPropagation()},onMouseEnter:()=>{W.current=!0,S(!0),setTimeout((()=>{j(!0)}),400)},onMouseLeave:()=>{m||(W.current=!1,setTimeout((()=>{S(!1)}),200),setTimeout((()=>{j(!1)}),300))},className:`adou-tooltip ${N?"show-tool-tip":""} adou-tooltip-${f}`,style:{backgroundColor:b,color:w,width:p,whiteSpace:c||p?"normal":"nowrap",position:"absolute",...(()=>{const e=J.y-C.current?.clientHeight-8+"px",t=J.y+A.current?.clientHeight+5+"px",r=J.x-C.current?.clientWidth+"px",n=J.y+A.current?.clientHeight/2-C.current?.clientHeight/2+"px",l=J.x+A.current?.clientWidth/2+"px";return"top"===f?{top:e,left:l}:"top-right"===f?{top:e,left:J.x+A.current?.clientWidth/2+C.current?.clientWidth/2+"px"}:"top-left"===f?{top:e,left:J.x+A.current?.clientWidth/2-C.current?.clientWidth/2+"px"}:"bottom"===f?{top:t,left:l}:"bottom-right"===f?{top:t,left:J.x+C.current?.clientWidth/2+A.current?.clientWidth/2+"px"}:"bottom-left"===f?{top:t,left:J.x+A.current?.clientWidth/2-C.current?.clientWidth/2+"px"}:"left"===f?{top:J.y+A.current?.clientHeight/2+"px",left:r}:"left-top"===f?{top:n,left:r}:"left-bottom"===f?{top:J.y+A.current?.clientHeight/2+C.current?.clientHeight/2+"px",left:r}:"right"===f?{top:J.y+A.current?.clientHeight/2+"px",left:J.x+A.current?.clientWidth+"px"}:"right-top"===f?{top:n,left:J.x+A.current?.clientWidth+"px"}:"right-bottom"===f?{top:J.y+A.current?.clientHeight/2+C.current?.clientHeight/2+"px",left:J.x+A.current?.clientWidth+"px"}:void 0})()},children:[(0,i.jsx)("div",{style:{...(()=>{const e="-8px",n=E*(d||.2),l=A.current?.clientWidth/4,a=n>l?l:n+"px",i=I*(d||.2),c=A.current?.clientHeight/4,p=i>c?c:i+"px";return"top"===f?{bottom:e,left:"50%",borderColor:`${y} transparent transparent transparent`}:"top-left"===f?{bottom:e,right:r||a,borderColor:`${y} transparent transparent transparent`}:"top-right"===f?{bottom:e,left:t||a,borderColor:`${y} transparent transparent transparent`}:"bottom"===f?{top:e,left:"50%",borderColor:`transparent transparent ${y} transparent`}:"bottom-right"===f?{top:e,left:t||a,borderColor:`transparent transparent ${y} transparent`}:"bottom-left"===f?{top:e,right:r||a,borderColor:`transparent transparent ${y} transparent`}:"left"===f?{top:"50%",right:e,borderColor:`transparent transparent transparent ${y}`}:"left-top"===f?{bottom:s||p,right:e,borderColor:`transparent transparent transparent ${y}`}:"left-bottom"===f?{top:o||p,right:"-9px",borderColor:`transparent transparent transparent ${y}`}:"right"===f?{top:"50%",left:e,borderColor:`transparent ${y} transparent transparent`}:"right-top"===f?{bottom:s||p,left:e,borderColor:`transparent ${y} transparent transparent`}:"right-bottom"===f?{top:o||p,left:e,borderColor:`transparent ${y} transparent transparent`}:void 0})()},className:`adou-tooltip-arrow adou-tooltip-arrow-${f}`}),u]}),document.body)]})}},8146:(e,t,r)=>{r.r(t),r.d(t,{default:()=>i});r(6540);var n=r(6608),l=r(7974),a=r(4848);const i=e=>{let{}=e;return(0,a.jsx)("div",{className:"table-bgc-wrapper",children:(0,a.jsx)(n.Ay,{tableBGC:"beige",data:l.data,columns:l.columns,children:l.columns.map((e=>(0,a.jsx)(n.nA,{...e},e.prop)))})})}},7974:(e,t,r)=>{r.r(t),r.d(t,{columns:()=>a,data:()=>l,default:()=>i});var n=r(4848);const l=[{id:"team001",teamName:"\u7814\u53d1\u56e2\u961f",leader:"\u5f20\u5cf0",contactEmail:"rf_team@company.com",memberCount:30,yearsSinceEstablishment:5,checked:!1},{id:"team002",teamName:"\u5e02\u573a\u56e2\u961f",leader:"\u674e\u60a6",contactEmail:"mk_team@company.com",memberCount:25,yearsSinceEstablishment:4,checked:!1},{id:"team003",teamName:"\u9500\u552e\u56e2\u961f",leader:"\u738b\u5f3a",contactEmail:"sl_team@company.com",memberCount:40,yearsSinceEstablishment:6,checked:!1},{id:"team004",teamName:"\u5ba2\u670d\u56e2\u961f",leader:"\u8d75\u7433",contactEmail:"cs_team@company.com",memberCount:15,yearsSinceEstablishment:3,checked:!1},{id:"team005",teamName:"\u8d22\u52a1\u56e2\u961f",leader:"\u5b59\u6d01",contactEmail:"fc_team@company.com",memberCount:10,yearsSinceEstablishment:7,checked:!1}],a=[{title:"\u56e2\u961f ID",prop:"id",width:"120px"},{title:"\u56e2\u961f\u540d\u79f0",prop:"teamName",width:"150px"},{title:"\u8d1f\u8d23\u4eba",prop:"leader",width:"120px"},{title:"\u8054\u7cfb\u90ae\u7bb1",prop:"contactEmail",width:"250px"},{title:"\u56e2\u961f\u4eba\u6570",prop:"memberCount",width:"120px"},{title:"\u6210\u7acb\u5e74\u9650",prop:"yearsSinceEstablishment",width:"120px"}],i=()=>(0,n.jsx)("div",{})}}]);