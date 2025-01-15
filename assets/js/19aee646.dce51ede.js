"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2924],{4277:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e){return 0===Object.keys(e??{}).length}},6608:(e,t,r)=>{r.d(t,{nA:()=>i,Ay:()=>p});var n=r(6540),l=r(4848);const i=e=>{const{parentId:t,tooltip:r,sortable:i,collapse:a,isParent:o,maxWidth:s,render:c,rowData:p,prop:d,label:h,rowIndex:x,colIndex:u,value:m,eidtable:f,align:g="center",width:w,onChange:b,onEditCancel:y,onEditOK:v,onExpand:j}=e,[k,N]=(0,n.useState)(!1),[S,W]=(0,n.useState)(m||""),C=(0,n.useRef)(null),$=()=>{switch(g){case"start":return"justify-content-start";case"end":return"justify-content-end";default:return"justify-content-center"}};return(0,n.useEffect)((()=>{W(m)}),[m]),(0,l.jsx)("div",{className:`table-cell d-flex ${$()}`,style:{width:"100%"},children:c?c(S,p,x,d,u):(0,l.jsx)("div",{className:"table-cell-wrapper",style:{display:"inline-block",width:"100%"},onDoubleClick:()=>{f&&N(!0)},ref:C,children:k?(0,l.jsx)("div",{style:{width:C.current?`${C.current.clientWidth}px`:"100%",boxSizing:"border-box"}}):(0,l.jsx)("div",{className:"table-cell-content",children:(0,l.jsxs)("div",{className:`value d-flex align-items-center ${$()}`,children:[o?(0,l.jsx)("i",{onClick:e=>{e.stopPropagation(),j&&j()},className:`fa-solid fa-chevron-right me-2 ${a?"table-cell-folder-rotate-down":""} collapse-icon`}):t&&0===u?(0,l.jsx)("span",{className:"ps-3"}):null,(0,l.jsx)("div",{style:{maxWidth:s},className:"ellipsis-1 ",children:S})]})})})})};var a=r(5653),o=r(4277);const s=function(e,t){return void 0===t&&(t=[]),e.forEach((e=>{e.children?s(e.children,t):t.push(e)})),t},c=e=>{const{pageSizeOptions:t=[5,10,15,20],pagination:r=!1,pageSize:c=10,currentPage:p=1,showTotal:d=!1,compact:h,showTip:x,checkAll:u,tdPadding:m="px-2 py-3",clickChecked:f,showHeader:g=!0,defaultCheckedList:w,headerFontWeight:b="normal",tableWidth:y,tableBGC:v,tableRef:j,activeId:k,maxWidth:N,showIndex:S=!1,multiple:W=!1,id:C="id",trPointer:$=!1,align:T,collection:E,collapse:I=!0,expandAll:O=!1,size:A="lg",data:J,columns:H,propsData:P,tableHover:B=!0,tableStriped:D=!1,tableBorderd:L=!1,tableBorderless:R=!1,headColor:F="null",captionContent:_,captionPosition:z="top",tableResponsive:M="xxl",eidtable:U=!1,headSticky:q=!0,headTextColor:G="black",headBGC:V="",divider:K,maxHeight:X="500px",minHeight:Y="0px",onRowDoubleClick:Q,onRowClick:Z,onPageChange:ee,onPageSizeChange:te}=e,[re,ne]=(0,n.useState)([]),[le,ie]=(0,n.useState)([]),[ae,oe]=(0,n.useState)([]),[se,ce]=(0,n.useState)(0),[pe,de]=(0,n.useState)([]),[he,xe]=(0,n.useState)(1),[ue,me]=(0,n.useState)(p),[fe,ge]=(0,n.useState)(c),[we,be]=(0,n.useState)(0),[ye,ve]=(0,n.useState)([]),je=(0,n.useId)(),ke=e=>{const t=(r,n)=>r.map(((r,l)=>(r[n]===e[n]&&(r.collapse=!r.collapse),r.children&&t(r.children,n),r))),r=t(re,C);ne(r)},Ne=e=>{switch(e){case"start":return"flex-start";case"end":return"flex-end";default:return"center"}},Se=(e,t)=>{const r=ae?.find((t=>t.prop===e));if(r)if(t){if(r.isDown)return"7px solid red"}else if(r.isUp)return"7px solid red"},We=e=>{switch(e.align||T){case"start":return"justify-content-start";case"end":return"justify-content-end";default:return"justify-content-center"}},Ce=(e,t,r)=>!r&&e.children?.length?"start":t.align||T,$e=(e,t)=>{const r=JSON.parse(JSON.stringify(J));oe((n=>n.map((n=>(e===n.prop&&(t?(n.isDown=!n.isDown,n.isUp=!1,n.isDown?ne((t=>JSON.parse(JSON.stringify(t)).map((t=>{const r=t.children?JSON.parse(JSON.stringify(t.children)):[];return r.length>0&&(r.sort(((t,r)=>t[e]<r[e]?1:-1)),t.children=r),t})).sort(((t,r)=>t[e]<r[e]?1:-1)))):ne(r)):(n.isUp=!n.isUp,n.isDown=!1,n.isUp?ne((t=>JSON.parse(JSON.stringify(t)).map((t=>{const r=t.children?JSON.parse(JSON.stringify(t.children)):[];return r.length>0&&(r.sort(((t,r)=>t[e]>r[e]?1:-1)),t.children=r),t})).sort(((t,r)=>t[e]>r[e]?1:-1)))):ne(r))),n)))))},Te=function(t,r,o,c,p,d,u){return void 0===u&&(u=0),u++,r.collapse&&r.children&&r.children.map(((g,w)=>(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)("tr",{onClick:e=>Re(g,e),className:`tr-content tr-content ${!0===g.checked?"tr-checked":""} collapse-table-tr animate__animated animate__fadeIn`,style:{...f||$?{cursor:"pointer"}:"",...L?{}:{borderBottom:"1px solid #f0f0f0"}},children:[E&&(0,l.jsx)("td",{scope:"row",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",verticalAlign:"middle"},className:`text-center py-1 ${h?"p-0":m}`,children:(0,l.jsx)("input",{className:m,name:g[C]+je,id:g[C]+je,checked:!0===g.checked,onChange:e=>Me(g,e),type:W?"checkbox":"radio"})}),S&&(0,l.jsx)("th",{className:`text-center py-1 ${h?"p-0":m}`,style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",padding:"0px",alignContent:"center",fontWeight:b},children:`${o+1}.${w+1}`}),e.children?n.Children.map(t,((e,t)=>{let i=e.props,s=i.prop;if(n.isValidElement(e)){const d=n.cloneElement(e,{parentId:g.parentId,collapse:g.collapse,onExpand:()=>ke(g),isParent:!t&&g.children,value:g[s],rowData:g,eidtable:U,prop:s,rowIndex:o,colIndex:t,align:Ce(r,i,t),maxWidth:i.maxWidth||N,showTip:i.showTip||x});return(0,l.jsx)("td",{className:`text-${i.align} py-1 ${h?"p-0":m}`,style:{verticalAlign:c[s],width:p[s],overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",maxWidth:i.maxWidth||N,[""+(t?"":"paddingLeft")]:"40px"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${We(i)}`,style:{paddingLeft:t?0:15*u+"px"},children:i.showTip?(0,l.jsx)(a.A,{position:"right",text:g[s],children:d}):d})},t)}})):s(H).map(((e,t)=>{let n=e.props?e.props:e,s=n.prop;const d={parentId:g.parentId,collapse:g.collapse,onExpand:()=>ke(g),isParent:!t&&g.children,value:g[s],rowData:g,eidtable:U,prop:s,rowIndex:o,colIndex:t,align:Ce(r,n,t),maxWidth:n.maxWidth||N,showTip:n.showTip||x};return(0,l.jsx)("td",{className:`text-${n.align} py-1 ${h?"p-0":m}`,style:{verticalAlign:c[s],width:p[n.prop],overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",maxWidth:n.maxWidth||N,[""+(t?"":"paddingLeft")]:"40px"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${We(n)}`,style:{paddingLeft:t?0:15*u+"px"},children:n.showTip?(0,l.jsx)(a.A,{position:"right",text:g[s],children:(0,l.jsx)(i,{...d})}):(0,l.jsx)(i,{...d})})},t)}))]},g[C]),g.children?.length>0?Te(t,g,o,c,p,d,u):null]},g[C])))};let Ee=[];e.children?e.children?.length?Ee=e.children:Ee.push(e.children):Ee=s(H).map((e=>(e.props=e,e)));let Ie={};const Oe={},Ae={};Ee.forEach((e=>{e?.props&&(Ie[e.props.prop]=e.props.width,Oe[e.props.prop]=e.props.align||T,Ae[e.props.prop]=e.props.verticalAlign||"middle")})),!(0,o.A)(Ie)&&Object.values(Ie).every((e=>!e))&&(Ie=(e=>{console.log("calculateHeaderWidth-------------: ");const t={},r=e.map((e=>({title:e.props.title,prop:e.props.prop}))),n=r.reduce(((e,t)=>e+t.title?.length),0);return r.forEach((e=>{t[e.prop]=100*Number((e.title?.length/n).toFixed(2))+"%"})),t})(Ee));const Je=e=>{let t=0;return e.forEach((e=>{const r=He(e);r>t&&(t=r)})),t},He=e=>{if(!e.children)return 1;let t=0;return e.children.forEach((e=>{const r=He(e);r>t&&(t=r)})),t+1},Pe=(e,t)=>{if(!e.children)return 1;let r=0;return e.children.forEach((e=>{r+=Pe(e,t+1)})),r};(0,n.useEffect)((()=>{const e=(e=>{const t=Je(e);xe(t);const r=Array.from({length:t},(()=>[])),n=(e,l)=>{e.forEach((e=>{const i={title:e.title,colSpan:Pe(e,l),rowSpan:e.children?.length?1:t-l,...e};r[l]||(r[l]=[]),r[l].push(i),e.children&&n(e.children,l+1)}))};return n(e,0),r})(H);de(e)}),[H]),(0,n.useEffect)((()=>{}),[]);const[Be,De]=(0,n.useState)(!1),Le=(e,t,r)=>{const n=t.find((t=>t[r]===e.parentId?t:t.children?.length?Le(e,t.children,r):void 0));if(!(0,o.A)(n)){const e=n.children.every((e=>!0===e.checked)),t=n.children.some((e=>!0===e.checked));n.checked=!!e||!!t&&"partial",n.parentId&&Le(n,re,r)}},Re=(e,t)=>{if(Z&&Z(e),Q&&Q(e),f){"checkbox"===t.target.type||"radio"===t.target.type||Me(e,t)}},Fe=(e,t)=>e.map((e=>(t.includes(e[C])&&(e.checked=!0,e.children&&ze(e.children,!0)),e.children?.length&&(e.children=Fe(e.children,t)),e))),_e=e=>e.map((e=>(e.checked=!0,e.children?.length&&_e(e.children),e))),ze=(e,t)=>e.map((e=>(e.checked=t,e.children?.length&&ze(e.children,t),e))),Me=(e,t)=>{t.stopPropagation(),ce(se+1);const r=t=>t.map((t=>(t[C]===e[C]?(t.checked=!(!0===t.checked),t.children?.length&&(t.children=ze(t.children,!0===t.checked))):t.children?.length&&(t.children=r(t.children)),t))),n=(e,t)=>e.map((e=>(e[C]!==t[C]&&(e.checked=!1,e.children?.length&&(e.children=n(e.children,t))),e)));(f||E)&&(r(re),W||n(re,e)),e.parentId&&Le(e,re,C),De(Ue(re))};function Ue(e){return e?.every((e=>!!e.checked&&(!e.children||Ue(e.children))))}const qe=e=>{const t=e.target.checked;De(t);const r=e=>e.map((e=>(e.checked=t,e.children&&(e.children=r(e.children)),e)));ne(r(re))},Ge=()=>{ze(re,!1)},Ve=function(e,t){return void 0===t&&(t=[]),e.forEach((e=>{!0===e.checked&&t.push(e),e.children&&Ve(e.children,t)})),t},Ke=()=>Ve(JSON.parse(JSON.stringify(re)),[]),Xe=()=>{const e=tt(JSON.parse(JSON.stringify(re)),!0);ne(e)},Ye=()=>{const e=tt(JSON.parse(JSON.stringify(re)),!1);ne(e)},Qe=()=>{const e=document.querySelector(".table-wrapper"),t=document.querySelector(".table-body");t&&e&&e.scrollTo({top:t.clientHeight,behavior:"smooth"})},Ze=()=>{const e=document.querySelector(".table-wrapper");e&&e.scrollTo({top:0,behavior:"smooth"})},et=(e,t)=>e.map((e=>(e.parentId=t,e.children&&et(e.children,e[C]),e))),tt=function(e,t){return void 0===t&&(t=O),e.map((e=>(e.collapse=t,e.children&&tt(e.children,t),e)))};(0,n.useEffect)((()=>{if(!J.length)return ne([]),void De(!1);let e=JSON.parse(JSON.stringify(J));e=et(e,0);const t=Ue(e);De(t),I?setTimeout((()=>{const t=tt(e);ne(t),ie(t)}),10):(ne(e),ie(e)),e.length&&setTimeout((()=>{(e=>{if(u){const t=_e(e);ne(t),De(!0)}else if(Array.isArray(w)&&w.length>0){const t=Fe(JSON.parse(JSON.stringify(e)),w);ne(t)}})(e)}),10)}),[J]),(0,n.useEffect)((()=>{}),[re]),(0,n.useEffect)((()=>{if(k){const e=JSON.parse(JSON.stringify(J)).map((e=>(e[C]&&e[C]===k?e.checked=!0:e.checked=!1,e)));setTimeout((()=>{ne(e)}),10)}}),[k,J]),(0,n.useEffect)((()=>{oe(H)}),[H]),(0,n.useImperativeHandle)(j,(()=>({clearChecked:Ge,getCheckedList:Ke,expandAll:Xe,foldAll:Ye,scrollToEnd:Qe,scrollToTop:Ze})));const rt=(0,n.useCallback)((()=>{if(!r)return void ve(re);const e=(ue-1)*fe,t=e+fe,n=re.slice(e,t);ve(n),be(Math.ceil(re.length/fe))}),[re,ue,fe,r]),nt=()=>{const e=[];if(we<=7)for(let t=1;t<=we;t++)e.push({page:t,type:"page"});else if(e.push({page:1,type:"page"}),ue<=3){for(let t=2;t<=5;t++)e.push({page:t,type:"page"});e.push({page:0,type:"ellipsis"}),e.push({page:we,type:"page"})}else if(ue>=we-2){e.push({page:0,type:"ellipsis"});for(let t=we-4;t<=we;t++)e.push({page:t,type:"page"})}else{e.push({page:0,type:"ellipsis"});for(let t=ue-1;t<=ue+1;t++)e.push({page:t,type:"page"});e.push({page:0,type:"ellipsis"}),e.push({page:we,type:"page"})}return e},lt=(e,t)=>{if("prev"===t){if(e<=0)return}else if("next"===t&&e>=we+1)return;me(e),ee?.(e)};(0,n.useEffect)((()=>{rt()}),[rt]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{style:{minHeight:Y,maxHeight:X,overflow:"auto",width:y},className:"table-wrapper "+("table-responsive"+("-"+M)),children:[(0,l.jsxs)("table",{style:{background:v,width:y},className:`table ${D?"table-striped":""} ${L?"table-bordered":"table-borderless"} table-${A} ${F?`table-${F}`:""} overflow-auto ${0===ye.length?"mb-0":""}`,children:[g&&(0,l.jsx)("thead",{style:{position:q?"sticky":"unset",top:0,backgroundColor:`${V}`,zIndex:999},className:`text-${G}`,children:pe.map(((e,t)=>{if(e?.length)return(0,l.jsxs)("tr",{children:[0===t&&E&&(0,l.jsx)("th",{className:h?"p-0":"",rowSpan:he,scope:"col th-collection",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",textAlign:"center"},children:W&&(0,l.jsx)("input",{checked:Be,onChange:qe,type:W?"checkbox":"radio"})}),0===t&&S&&(0,l.jsx)("th",{className:h?"p-0":"",rowSpan:he,scope:"col th-index",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px"}}),e.map((e=>(0,l.jsx)("th",{rowSpan:e.rowSpan,colSpan:e.colSpan,style:{whiteSpace:"nowrap",width:Ie[e.prop],fontWeight:b},className:`${Oe[e.prop]?"text-"+Oe[e.prop]:""} ${h?"p-0":""} align-middle`,scope:"col",children:(0,l.jsxs)("div",{className:"header-content",style:{display:"flex",alignItems:"center",justifyContent:Ne(Oe[e.prop])},children:[(0,l.jsx)("span",{className:"header-text",children:e.title}),e.sortable&&(0,l.jsxs)("div",{className:"header-icon ms-1",children:[(0,l.jsx)("i",{style:{borderBottom:Se(e.prop)||"7px solid #000"},onClick:()=>$e(e.prop),className:"icon sort-up"}),(0,l.jsx)("i",{style:{borderTop:Se(e.prop,!0)||"7px solid #000"},onClick:()=>$e(e.prop,!0),className:"icon sort-down"})]})]})},e.title)))]},t)}))}),(0,l.jsx)("tbody",{className:"table-body "+(K?"table-group-divider":""),children:re.length>0&&ye.map(((t,r)=>(0,l.jsxs)(n.Fragment,{children:[(0,l.jsxs)("tr",{onClick:e=>Re(t,e),className:"tr-content "+(!0===t.checked?"tr-checked":""),style:{...f||$?{cursor:"pointer"}:"",...L?{}:{borderBottom:"1px solid #f0f0f0"}},children:[E&&(0,l.jsx)("td",{scope:"row",style:{minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px",verticalAlign:"middle"},className:`text-center py-1 ${h?"p-0":m}`,children:(0,l.jsx)("input",{className:m,name:t[C]+je,id:t[C]+je,checked:!0===t.checked,onChange:e=>Me(t,e),type:W?"checkbox":"radio"})}),S&&(0,l.jsx)("td",{className:`text-center py-1 ${h?"p-0":m}`,scope:"col",style:{alignContent:"center",padding:"0px",minWidth:h?"30px":"50px",width:h?"30px":"50px",maxWidth:h?"30px":"50px"},children:r+1}),e.children?n.Children.map(Ee,((e,i)=>{const o=e.props;let s=o.prop;if(n.isValidElement(e)){const c=n.cloneElement(e,{onExpand:()=>ke(t),isParent:!i&&I&&t.children,value:t[`${s}`],rowData:t,eidtable:U,prop:s,rowIndex:r,colIndex:i,canCollapse:t.children,collapse:t.collapse,align:!i&&I&&t.children?"start":o.align||T,width:Ie[o.prop],maxWidth:o.maxWidth||N,showTip:o.showTip||x});return(0,l.jsx)("td",{className:`text-${o.align||T} py-1 ${h?"p-0":m}`,style:{verticalAlign:Ae[s],width:Ie[o.prop],maxWidth:o.maxWidth||N,overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",whiteSpace:"nowrap"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${We(o)}`,children:o.showTip?(0,l.jsx)(a.A,{text:t[s],children:c}):c})},i)}})):s(H).map(((e,n)=>{const o=e.props?e.props:e;let s=o.prop;const c={onExpand:()=>ke(t),isParent:!n&&I&&t.children,value:t[`${s}`],rowData:t,eidtable:U,prop:s,rowIndex:r,colIndex:n,canCollapse:t.children,collapse:t.collapse,align:!n&&I&&t.children?"start":o.align||T,width:Ie[o.prop],maxWidth:o.maxWidth||N,showTip:o.showTip||x};return(0,l.jsx)("td",{className:`text-${o.align||T} py-1 ${h?"p-0":m}`,style:{verticalAlign:Ae[s],width:Ie[o.prop],maxWidth:o.maxWidth||N,overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",whiteSpace:"nowrap"},children:(0,l.jsx)("div",{className:`collapse-table-td d-flex ${We(o)}`,children:o.showTip?(0,l.jsx)(a.A,{text:t[s],children:(0,l.jsx)(i,{...c})}):(0,l.jsx)(i,{...c})})},n)}))]},r),Te(Ee,t,r,Ae,Ie,Oe)]},t[C]+je)))})]}),0===ye.length&&(0,l.jsx)("div",{className:"text-center p-1",children:"\u6682\u65e0\u6570\u636e~"}),r?(0,l.jsxs)("div",{className:"d-flex justify-content-between align-items-center p-2",children:[(0,l.jsxs)("div",{className:"d-flex align-items-center",children:[d&&(0,l.jsxs)("span",{className:"me-3",children:["\u5171 ",re.length," \u6761"]}),(0,l.jsx)("select",{className:"form-select form-select-sm me-2",style:{width:"100px"},value:fe,onChange:e=>(e=>{ge(e),me(1),te?.(e)})(Number(e.target.value)),children:t.map((e=>(0,l.jsxs)("option",{value:e,children:[e," \u6761/\u9875"]},e)))})]}),(0,l.jsxs)("div",{className:"pagination d-flex align-items-center",children:[(0,l.jsx)("i",{onClick:()=>lt(ue-1,"prev"),className:"prev-arrow rounded fa-solid fa-chevron-left "+(1===ue?"disabled":"")}),(0,l.jsx)("div",{className:"page-numbers d-flex align-items-center mx-2",children:nt().map(((e,t)=>(0,l.jsx)(n.Fragment,{children:"page"===e.type?(0,l.jsx)("button",{className:"btn btn-sm page-number-item d-flex align-items-center justify-content-center mx-1 "+(e.page===ue?"btn-primary":"btn-outline-secondary"),style:{minWidth:"24px",height:"26px"},onClick:()=>lt(e.page),children:e.page}):(0,l.jsx)("span",{className:"mx-1 d-flex align-items-center",children:"..."})},t)))}),(0,l.jsx)("i",{className:"next-arrow rounded fa-solid fa-chevron-right "+(ue===we?"disabled":""),onClick:()=>lt(ue+1,"next")})]})]}):null]})})};c.TableCell=i;const p=c},5653:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(6540),l=r(961);const i=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=0),t=parseInt(t)?parseInt(t):0,r=parseInt(r)?parseInt(r):0;const n=e.getBoundingClientRect(),l=document.body,i=document.documentElement,a=window.pageYOffset||i.scrollTop||l.scrollTop,o=window.pageXOffset||i.scrollLeft||l.scrollLeft,s=i.clientTop||l.clientTop||0,c=i.clientLeft||l.clientLeft||0,p={};return p.y=n.top+a-s+r,p.x=n.left+o-c+t,p.width=n.width,p.height=n.height,p};var a=r(4848);const o=e=>{let{left:t,right:r,top:o,bottom:s,wrap:c=!1,width:p,arrowOffsetPercent:d,wrapperFlex:h,mustShow:x,show:u=!0,text:m,position:f="top",children:g,tooltipBgc:w="#333",tooltipFontColor:b,arrowBorderColor:y="#333",wrapperClassname:v}=e;const[j,k]=(0,n.useState)(!1),[N,S]=(0,n.useState)(!1),W=(0,n.useRef)(null),C=(0,n.useRef)(!1),$=(0,n.useRef)(null),[T,E]=(0,n.useState)(0),[I,O]=(0,n.useState)(0),A=(0,n.useRef)(null),[J,H]=(0,n.useState)({}),P=()=>{$.current&&clearTimeout($.current),$.current=setTimeout((()=>{k(!0),setTimeout((()=>{S(!0)}),50)}),150)},B=()=>{x||($.current&&clearTimeout($.current),setTimeout((()=>{C.current||S(!1)}),200),setTimeout((()=>{C.current||k(!1)}),300))};return(0,n.useEffect)((()=>{x?P():B()}),[x]),(0,n.useEffect)((()=>{if(W.current){const e=W.current;E(e.offsetWidth),O(e.offsetHeight)}if(j){const e=i(A.current,0,0);H(e)}}),[j,N,g]),(0,a.jsxs)("div",{className:`adou-tooltip-wrapper ${v||""}`,style:{...h?{flex:1,display:"flex"}:{}},children:[(0,a.jsx)("div",{ref:A,className:"adou-tooltip-content",onMouseEnter:P,onMouseLeave:B,style:{...h?{flex:1}:{}},children:g}),("string"==typeof m?m?.trim?.()?.length>0:m)&&u&&j&&l.createPortal((0,a.jsxs)("div",{ref:W,onClick:e=>{e.stopPropagation()},onMouseEnter:()=>{C.current=!0,S(!0),setTimeout((()=>{k(!0)}),400)},onMouseLeave:()=>{x||(C.current=!1,setTimeout((()=>{S(!1)}),200),setTimeout((()=>{k(!1)}),300))},className:`adou-tooltip ${N?"show-tool-tip":""} adou-tooltip-${f}`,style:{backgroundColor:w,color:b,width:p,whiteSpace:c||p?"normal":"nowrap",position:"absolute",...(()=>{const e=J.y-W.current?.clientHeight-8+"px",t=J.y+A.current?.clientHeight+5+"px",r=J.x-W.current?.clientWidth+"px",n=J.y+A.current?.clientHeight/2-W.current?.clientHeight/2+"px",l=J.x+A.current?.clientWidth/2+"px";return"top"===f?{top:e,left:l}:"top-right"===f?{top:e,left:J.x+A.current?.clientWidth/2+W.current?.clientWidth/2+"px"}:"top-left"===f?{top:e,left:J.x+A.current?.clientWidth/2-W.current?.clientWidth/2+"px"}:"bottom"===f?{top:t,left:l}:"bottom-right"===f?{top:t,left:J.x+W.current?.clientWidth/2+A.current?.clientWidth/2+"px"}:"bottom-left"===f?{top:t,left:J.x+A.current?.clientWidth/2-W.current?.clientWidth/2+"px"}:"left"===f?{top:J.y+A.current?.clientHeight/2+"px",left:r}:"left-top"===f?{top:n,left:r}:"left-bottom"===f?{top:J.y+A.current?.clientHeight/2+W.current?.clientHeight/2+"px",left:r}:"right"===f?{top:J.y+A.current?.clientHeight/2+"px",left:J.x+A.current?.clientWidth+"px"}:"right-top"===f?{top:n,left:J.x+A.current?.clientWidth+"px"}:"right-bottom"===f?{top:J.y+A.current?.clientHeight/2+W.current?.clientHeight/2+"px",left:J.x+A.current?.clientWidth+"px"}:void 0})()},children:[(0,a.jsx)("div",{style:{...(()=>{const e="-8px",n=T*(d||.2),l=A.current?.clientWidth/4,i=n>l?l:n+"px",a=I*(d||.2),c=A.current?.clientHeight/4,p=a>c?c:a+"px";return"top"===f?{bottom:e,left:"50%",borderColor:`${y} transparent transparent transparent`}:"top-left"===f?{bottom:e,right:r||i,borderColor:`${y} transparent transparent transparent`}:"top-right"===f?{bottom:e,left:t||i,borderColor:`${y} transparent transparent transparent`}:"bottom"===f?{top:e,left:"50%",borderColor:`transparent transparent ${y} transparent`}:"bottom-right"===f?{top:e,left:t||i,borderColor:`transparent transparent ${y} transparent`}:"bottom-left"===f?{top:e,right:r||i,borderColor:`transparent transparent ${y} transparent`}:"left"===f?{top:"50%",right:e,borderColor:`transparent transparent transparent ${y}`}:"left-top"===f?{bottom:s||p,right:e,borderColor:`transparent transparent transparent ${y}`}:"left-bottom"===f?{top:o||p,right:"-9px",borderColor:`transparent transparent transparent ${y}`}:"right"===f?{top:"50%",left:e,borderColor:`transparent ${y} transparent transparent`}:"right-top"===f?{bottom:s||p,left:e,borderColor:`transparent ${y} transparent transparent`}:"right-bottom"===f?{top:o||p,left:e,borderColor:`transparent ${y} transparent transparent`}:void 0})()},className:`adou-tooltip-arrow adou-tooltip-arrow-${f}`}),m]}),document.body)]})}},8955:(e,t,r)=>{r.r(t),r.d(t,{columns:()=>a,data:()=>i,default:()=>o});r(6540);var n=r(6608),l=r(4848);const i=[{id:"dept001",name:"\u6280\u672f\u90e8",type:"\u90e8\u95e8",children:[{id:"emp001",name:"\u5f20\u4e09",type:"\u5458\u5de5",position:"\u9ad8\u7ea7\u5de5\u7a0b\u5e08",children:[{id:"task001",name:"\u9879\u76ee A \u5f00\u53d1\u4efb\u52a1",type:"\u4efb\u52a1",progress:"80%"},{id:"task002",name:"\u6280\u672f\u6587\u6863\u64b0\u5199",type:"\u4efb\u52a1",progress:"30%"}]},{id:"emp002",name:"\u674e\u56db",type:"\u5458\u5de5",position:"\u5de5\u7a0b\u5e08",children:[{id:"task003",name:"\u9879\u76ee B \u6d4b\u8bd5\u4efb\u52a1",type:"\u4efb\u52a1",progress:"50%"}]}]},{id:"dept002",name:"\u5e02\u573a\u90e8",type:"\u90e8\u95e8",children:[{id:"emp003",name:"\u738b\u4e94",type:"\u5458\u5de5",position:"\u5e02\u573a\u7ecf\u7406",children:[{id:"campaign001",name:"\u4ea7\u54c1\u63a8\u5e7f\u6d3b\u52a8",type:"\u6d3b\u52a8",status:"\u8fdb\u884c\u4e2d"}]}]}],a=[{prop:"id",title:"\u90e8\u95e8ID",width:"180px",align:"center",sortable:!0},{prop:"name",title:"\u90e8\u95e8\u540d\u79f0",width:"180px",align:"end"},{prop:"type",title:"\u7c7b\u578b",width:"180px"},{prop:"position",title:"\u804c\u4f4d",width:"180px"}],o=e=>{let{}=e;return(0,l.jsx)("div",{className:"collapse-wrapper",children:(0,l.jsx)(n.Ay,{data:i,columns:a,children:a.map((e=>(0,l.jsx)(n.nA,{...e},e.prop)))})})}}}]);