"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[1516,8430],{4277:(e,t,r)=>{r.d(t,{A:()=>n});const n=function(e){return 0===Object.keys(e??{}).length}},9596:(e,t,r)=>{r.d(t,{nA:()=>l,Ay:()=>h});var n=r(6540),o=r(4848);const l=e=>{const{parentId:t,showTip:r,sortable:l,collapse:a,isParent:i,maxWidth:c,render:s,rowData:d,prop:p,label:h,rowIndex:m,colIndex:x,value:u,eidtable:f,align:g="center",width:w,onChange:b,onEditCancel:y,onEditOK:k,onExpand:v}=e,[N,j]=(0,n.useState)(!1),[S,W]=(0,n.useState)(u||""),$=(0,n.useRef)(null),C=()=>{switch(g){case"start":return"justify-content-start";case"end":return"justify-content-end";default:return"justify-content-center"}};return(0,n.useEffect)((()=>{W(u)}),[u]),(0,o.jsx)("div",{className:`table-cell d-flex ${C()}`,style:{width:"100%"},children:s?s(S,d,m,p,x):(0,o.jsx)("div",{className:"table-cell-wrapper",style:{display:"inline-block",width:"100%"},onDoubleClick:()=>{f&&j(!0)},ref:$,children:N?(0,o.jsx)("div",{style:{width:$.current?`${$.current.clientWidth}px`:"100%",boxSizing:"border-box"}}):(0,o.jsx)("div",{className:"table-cell-content",children:(0,o.jsxs)("div",{className:`value d-flex align-items-center ${C()}`,children:[i?(0,o.jsx)("i",{onClick:e=>{e.stopPropagation(),v&&v()},className:`fa-solid fa-chevron-right me-2 ${a?"table-cell-folder-rotate-down":""} collapse-icon`}):t&&0===x?(0,o.jsx)("span",{className:"ps-3"}):null,(0,o.jsx)("div",{style:{maxWidth:r&&parseFloat(c)>parseFloat(w)-20?parseFloat(w)-20+"px":c},className:"ellipsis-1 ",children:S})]})})})})};var a=r(961);const i=function(e,t,r){void 0===t&&(t=0),void 0===r&&(r=0),t=parseInt(t)?parseInt(t):0,r=parseInt(r)?parseInt(r):0;const n=e.getBoundingClientRect(),o=document.body,l=document.documentElement,a=window.pageYOffset||l.scrollTop||o.scrollTop,i=window.pageXOffset||l.scrollLeft||o.scrollLeft,c=l.clientTop||o.clientTop||0,s=l.clientLeft||o.clientLeft||0,d={};return d.y=n.top+a-c+r,d.x=n.left+i-s+t,d.width=n.width,d.height=n.height,d},c=e=>{let{left:t,right:r,top:l,bottom:c,wrap:s=!1,width:d,arrowOffsetPercent:p,wrapperFlex:h,mustShow:m,show:x=!0,text:u,position:f="top",children:g,tooltipBgc:w="#333",tooltipFontColor:b,arrowBorderColor:y="#333",wrapperClassname:k}=e;const[v,N]=(0,n.useState)(!1),[j,S]=(0,n.useState)(!1),W=(0,n.useRef)(null),$=(0,n.useRef)(!1),C=(0,n.useRef)(null),[E,T]=(0,n.useState)(0),[I,O]=(0,n.useState)(0),A=(0,n.useRef)(null),[J,H]=(0,n.useState)({}),B=()=>{C.current&&clearTimeout(C.current),C.current=setTimeout((()=>{N(!0),setTimeout((()=>{S(!0)}),50)}),200)},D=()=>{m||(C.current&&clearTimeout(C.current),setTimeout((()=>{$.current||S(!1)}),200),setTimeout((()=>{$.current||N(!1)}),300))};return(0,n.useEffect)((()=>{m?B():D()}),[m]),(0,n.useEffect)((()=>{if(W.current){const e=W.current;T(e.offsetWidth),O(e.offsetHeight)}if(v){const e=i(A.current,0,0);H(e)}}),[v,j]),(0,o.jsxs)("div",{className:`adou-tooltip-wrapper ${k||""}`,style:{...h?{flex:1,display:"flex"}:{}},children:[(0,o.jsx)("div",{ref:A,className:"adou-tooltip-content",onMouseEnter:B,onMouseLeave:D,style:{...h?{flex:1}:{}},children:g}),("string"==typeof u?u?.trim?.()?.length>0:u)&&x&&v&&a.createPortal((0,o.jsxs)("div",{ref:W,onClick:e=>{e.stopPropagation()},onMouseEnter:()=>{$.current=!0,S(!0),setTimeout((()=>{N(!0)}),400)},onMouseLeave:()=>{m||($.current=!1,setTimeout((()=>{S(!1)}),200),setTimeout((()=>{N(!1)}),300))},className:`adou-tooltip ${j?"show-tool-tip":""} adou-tooltip-${f}`,style:{backgroundColor:w,color:b,width:d,whiteSpace:s||d?"normal":"nowrap",position:"absolute",...(()=>{const e=J.y-W.current?.clientHeight-8+"px",t=J.y+A.current?.clientHeight+5+"px",r=J.x-W.current?.clientWidth+"px",n=J.y+A.current?.clientHeight/2-W.current?.clientHeight/2+"px",o=J.x+A.current?.clientWidth/2+"px";return"top"===f?{top:e,left:o}:"top-right"===f?{top:e,left:J.x+A.current?.clientWidth/2+W.current?.clientWidth/2+"px"}:"top-left"===f?{top:e,left:J.x+A.current?.clientWidth/2-W.current?.clientWidth/2+"px"}:"bottom"===f?{top:t,left:o}:"bottom-right"===f?{top:t,left:J.x+W.current?.clientWidth/2+A.current?.clientWidth/2+"px"}:"bottom-left"===f?{top:t,left:J.x+A.current?.clientWidth/2-W.current?.clientWidth/2+"px"}:"left"===f?{top:J.y+A.current?.clientHeight/2+"px",left:r}:"left-top"===f?{top:n,left:r}:"left-bottom"===f?{top:J.y+A.current?.clientHeight/2+W.current?.clientHeight/2+"px",left:r}:"right"===f?{top:J.y+A.current?.clientHeight/2+"px",left:J.x+A.current?.clientWidth+"px"}:"right-top"===f?{top:n,left:J.x+A.current?.clientWidth+"px"}:"right-bottom"===f?{top:J.y+A.current?.clientHeight/2+W.current?.clientHeight/2+"px",left:J.x+A.current?.clientWidth+"px"}:void 0})()},children:[(0,o.jsx)("div",{style:{...(()=>{const e="-8px",n=E*(p||.2),o=A.current?.clientWidth/4,a=n>o?o:n+"px",i=I*(p||.2),s=A.current?.clientHeight/4,d=i>s?s:i+"px";return"top"===f?{bottom:e,left:"50%","border-color":`${y} transparent transparent transparent`}:"top-left"===f?{bottom:e,right:r||a,"border-color":`${y} transparent transparent transparent`}:"top-right"===f?{bottom:e,left:t||a,"border-color":`${y} transparent transparent transparent`}:"bottom"===f?{top:e,left:"50%","border-color":`transparent transparent ${y} transparent`}:"bottom-right"===f?{top:e,left:t||a,"border-color":`transparent transparent ${y} transparent`}:"bottom-left"===f?{top:e,right:r||a,"border-color":`transparent transparent ${y} transparent`}:"left-top"===f?{bottom:c||d,right:e,"border-color":`transparent transparent transparent ${y}`}:"left-bottom"===f?{top:l||d,right:"-9px","border-color":`transparent transparent transparent ${y}`}:"right"===f?{top:"50%",left:e,"border-color":`transparent ${y} transparent transparent`}:"right-top"===f?{bottom:c||d,left:e,"border-color":`transparent ${y} transparent transparent`}:"right-bottom"===f?{top:l||d,left:e,"border-color":`transparent ${y} transparent transparent`}:void 0})()},className:`adou-tooltip-arrow adou-tooltip-arrow-${f}`}),u]}),document.body)]})};var s=r(4277);const d=function(e,t){return void 0===t&&(t=[]),e.forEach((e=>{e.children?d(e.children,t):t.push(e)})),t},p=e=>{const{showTip:t,checkAll:r,tdPadding:a="px-2 py-3",clickChecked:i,showHeader:p=!0,defaultCheckedList:h,headerFontWeight:m="normal",tableWidth:x,tableBGC:u,tableRef:f,activeId:g,maxWidth:w,showIndex:b=!1,multiple:y=!1,id:k="id",trPointer:v=!1,align:N,collection:j,collapse:S=!0,expandAll:W=!1,size:$="lg",data:C,columns:E,propsData:T,tableHover:I=!0,tableStriped:O=!1,tableBorderd:A=!1,tableBorderless:J=!1,headColor:H="null",captionContent:B,captionPosition:D="top",tableResponsive:P="xxl",eidtable:_=!1,headSticky:L=!0,headTextColor:F="black",headBGC:R="",divider:U,maxHeight:M="500px",minHeight:q="0px",onRowDoubleClick:z,onRowClick:G}=e,[V,K]=(0,n.useState)([]),[X,Y]=(0,n.useState)([]),[Q,Z]=(0,n.useState)([]),[ee,te]=(0,n.useState)(0),[re,ne]=(0,n.useState)([]),[oe,le]=(0,n.useState)(1),ae=(0,n.useId)(),ie=e=>{const t=(r,n)=>r.map(((r,o)=>(r[n]===e[n]&&(r.collapse=!r.collapse),r.children&&t(r.children,n),r))),r=t(V,k);K(r)},ce=e=>{switch(e){case"start":return"flex-start";case"end":return"flex-end";default:return"center"}},se=(e,t)=>{const r=Q?.find((t=>t.prop===e));if(r)if(t){if(r.isDown)return"7px solid red"}else if(r.isUp)return"7px solid red"},de=e=>{switch(e.align||N){case"start":return"justify-content-start";case"end":return"justify-content-end";default:return"justify-content-center"}},pe=(e,t,r)=>!r&&e.children?.length?"start":t.align||N,he=(e,t)=>{const r=JSON.parse(JSON.stringify(C));Z((n=>n.map((n=>(e===n.prop&&(t?(n.isDown=!n.isDown,n.isUp=!1,n.isDown?K((t=>JSON.parse(JSON.stringify(t)).map((t=>{const r=t.children?JSON.parse(JSON.stringify(t.children)):[];return r.length>0&&(r.sort(((t,r)=>t[e]<r[e]?1:-1)),t.children=r),t})).sort(((t,r)=>t[e]<r[e]?1:-1)))):K(r)):(n.isUp=!n.isUp,n.isDown=!1,n.isUp?K((t=>JSON.parse(JSON.stringify(t)).map((t=>{const r=t.children?JSON.parse(JSON.stringify(t.children)):[];return r.length>0&&(r.sort(((t,r)=>t[e]>r[e]?1:-1)),t.children=r),t})).sort(((t,r)=>t[e]>r[e]?1:-1)))):K(r))),n)))))},me=function(r,s,p,h,x,u,f){return void 0===f&&(f=0),f++,console.log("data: ",s),s.collapse&&s.children&&s.children.map(((g,N)=>(0,o.jsxs)(n.Fragment,{children:[(0,o.jsxs)("tr",{onClick:e=>je(g,e),className:`tr-content tr-content ${!0===g.checked?"tr-checked":""} collapse-table-tr animate__animated animate__fadeIn`,style:{...i||v?{cursor:"pointer"}:"",...A?{}:{borderBottom:"1px solid #f0f0f0"}},children:[j&&(0,o.jsx)("td",{scope:"row",style:{minWidth:"50px",width:"50px",maxWidth:"50px",verticalAlign:"middle"},className:`text-center ${a}`,children:(0,o.jsx)("input",{className:a,name:g[k]+ae,id:g[k]+ae,checked:!0===g.checked,onChange:e=>Ce(g,e),type:y?"checkbox":"radio"})}),b&&(0,o.jsx)("th",{className:`text-center ${a}`,style:{minWidth:"50px",width:"50px",maxWidth:"50px",padding:"0px",alignContent:"center",fontWeight:m},children:`${p+1}.${N+1}`}),e.children?n.Children.map(r,((e,r)=>{let l=e.props,i=l.prop;if(n.isValidElement(e)){const d=n.cloneElement(e,{parentId:g.parentId,collapse:g.collapse,onExpand:()=>ie(g),isParent:!r&&g.children,value:g[i],rowData:g,eidtable:_,prop:i,rowIndex:p,colIndex:r,align:pe(s,l,r),maxWidth:l.maxWidth||w,showTip:l.showTip||t});return(0,o.jsx)("td",{className:`text-${l.align} ${a}`,style:{verticalAlign:h[i],width:x[i],overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",maxWidth:l.maxWidth||w,[""+(r?"":"paddingLeft")]:"40px"},children:(0,o.jsx)("div",{className:`collapse-table-td d-flex ${de(l)}`,style:{paddingLeft:r?0:15*f+"px"},children:l.showTip?(0,o.jsx)(c,{position:"right",text:g[i],children:d}):d})},r)}})):d(E).map(((e,r)=>{console.log(": ",d(E));let n=e.props?e.props:e,i=n.prop;const m={parentId:g.parentId,collapse:g.collapse,onExpand:()=>ie(g),isParent:!r&&g.children,value:g[i],rowData:g,eidtable:_,prop:i,rowIndex:p,colIndex:r,align:pe(s,n,r),maxWidth:n.maxWidth||w,showTip:n.showTip||t};return(0,o.jsx)("td",{className:`text-${n.align} ${a}`,style:{verticalAlign:h[i],width:x[n.prop],overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",maxWidth:n.maxWidth||w,[""+(r?"":"paddingLeft")]:"40px"},children:(0,o.jsx)("div",{className:`collapse-table-td d-flex ${de(n)}`,style:{paddingLeft:r?0:15*f+"px"},children:n.showTip?(0,o.jsx)(c,{position:"right",text:g[i],children:(0,o.jsx)(l,{...m})}):(0,o.jsx)(l,{...m})})},r)}))]},g[k]),g.children?.length>0?me(r,g,p,h,x,u,f):null]},g[k])))};let xe=[];e.children?e.children?.length?xe=e.children:xe.push(e.children):xe=d(E).map((e=>(e.props=e,e)));let ue={};const fe={},ge={};xe.forEach((e=>{e?.props&&(ue[e.props.prop]=e.props.width,fe[e.props.prop]=e.props.align||N,ge[e.props.prop]=e.props.verticalAlign||"middle")})),!(0,s.A)(ue)&&Object.values(ue).every((e=>!e))&&(ue=(e=>{console.log("calculateHeaderWidth-------------: ");const t={},r=e.map((e=>({title:e.props.title,prop:e.props.prop}))),n=r.reduce(((e,t)=>e+t.title.length),0);return r.forEach((e=>{t[e.prop]=100*Number((e.title?.length/n).toFixed(2))+"%"})),t})(xe));const we=e=>{let t=0;return e.forEach((e=>{const r=be(e);r>t&&(t=r)})),t},be=e=>{if(!e.children)return 1;let t=0;return e.children.forEach((e=>{const r=be(e);r>t&&(t=r)})),t+1},ye=(e,t)=>{if(!e.children)return 1;let r=0;return e.children.forEach((e=>{r+=ye(e,t+1)})),r};(0,n.useEffect)((()=>{const e=(e=>{const t=we(e);le(t);const r=Array.from({length:t},(()=>[])),n=(e,o)=>{e.forEach((e=>{const l={title:e.title,colSpan:ye(e,o),rowSpan:e.children?.length?1:t-o,...e};r[o]||(r[o]=[]),r[o].push(l),e.children&&n(e.children,o+1)}))};return n(e,0),r})(E);ne(e)}),[E]),(0,n.useEffect)((()=>{}),[]);const[ke,ve]=(0,n.useState)(!1),Ne=(e,t,r)=>{const n=t.find((t=>t[r]===e.parentId?t:t.children?.length?Ne(e,t.children,r):void 0));if(!(0,s.A)(n)){const e=n.children.every((e=>!0===e.checked)),t=n.children.some((e=>!0===e.checked));n.checked=!!e||!!t&&"partial",n.parentId&&Ne(n,V,r)}},je=(e,t)=>{if(G&&G(e),z&&z(e),i){"checkbox"===t.target.type||"radio"===t.target.type||Ce(e,t)}},Se=(e,t)=>e.map((e=>(t.includes(e[k])&&(e.checked=!0,e.children&&$e(e.children,!0)),e.children?.length&&(e.children=Se(e.children,t)),e))),We=e=>e.map((e=>(e.checked=!0,e.children?.length&&We(e.children),e))),$e=(e,t)=>e.map((e=>(e.checked=t,e.children?.length&&$e(e.children,t),e))),Ce=(e,t)=>{t.stopPropagation(),te(ee+1);const r=t=>t.map((t=>(t[k]===e[k]?(t.checked=!(!0===t.checked),t.children?.length&&(t.children=$e(t.children,!0===t.checked))):t.children?.length&&(t.children=r(t.children)),t))),n=(e,t)=>e.map((e=>(e[k]!==t[k]&&(e.checked=!1,e.children?.length&&(e.children=n(e.children,t))),e)));(i||j)&&(r(V),y||n(V,e)),e.parentId&&Ne(e,V,k),ve(Ee(V))};function Ee(e){return e?.every((e=>!!e.checked&&(!e.children||Ee(e.children))))}const Te=e=>{const t=e.target.checked;ve(t);const r=e=>e.map((e=>(e.checked=t,e.children&&(e.children=r(e.children)),e)));K(r(V))},Ie=()=>{$e(V,!1)},Oe=function(e,t){return void 0===t&&(t=[]),e.forEach((e=>{!0===e.checked&&t.push(e),e.children&&Oe(e.children,t)})),t},Ae=()=>Oe(JSON.parse(JSON.stringify(V)),[]),Je=()=>{const e=_e(JSON.parse(JSON.stringify(V)),!0);K(e)},He=()=>{const e=_e(JSON.parse(JSON.stringify(V)),!1);K(e)},Be=()=>{const e=document.querySelector(".table-wrapper"),t=document.querySelector(".table-body");t&&e&&e.scrollTo({top:t.clientHeight,behavior:"smooth"})},De=()=>{const e=document.querySelector(".table-wrapper");e&&e.scrollTo({top:0,behavior:"smooth"})},Pe=(e,t)=>e.map((e=>(e.parentId=t,e.children&&Pe(e.children,e[k]),e))),_e=function(e,t){return void 0===t&&(t=W),e.map((e=>(e.collapse=t,e.children&&_e(e.children,t),e)))};return(0,n.useEffect)((()=>{if(!C.length)return K([]),void ve(!1);let e=JSON.parse(JSON.stringify(C));e=Pe(e,0);const t=Ee(e);ve(t),S?setTimeout((()=>{const t=_e(e);K(t),Y(t)}),10):(K(e),Y(e)),e.length&&setTimeout((()=>{(e=>{if(r){const t=We(e);K(t),ve(!0)}else if(Array.isArray(h)&&h.length>0){const t=Se(JSON.parse(JSON.stringify(e)),h);K(t)}})(e)}),10)}),[C]),(0,n.useEffect)((()=>{}),[V]),(0,n.useEffect)((()=>{if(g){const e=JSON.parse(JSON.stringify(C)).map((e=>(e[k]&&e[k]===g?e.checked=!0:e.checked=!1,e)));setTimeout((()=>{K(e)}),10)}}),[g,C]),(0,n.useEffect)((()=>{Z(E)}),[E]),(0,n.useImperativeHandle)(f,(()=>({clearChecked:Ie,getCheckedList:Ae,expandAll:Je,foldAll:He,scrollToEnd:Be,scrollToTop:De}))),(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)("div",{style:{minHeight:q,maxHeight:M,overflow:"auto",width:x},className:"table-wrapper "+("table-responsive"+("-"+P)),children:[(0,o.jsxs)("table",{style:{background:u,width:x},className:`table ${O?"table-striped":""} ${A?"table-bordered":"table-borderless"} table-${$} ${H?`table-${H}`:""} overflow-auto ${0===C.length?"mb-0":""}`,children:[p&&(0,o.jsx)("thead",{style:{position:L?"sticky":"unset",top:0,backgroundColor:`${R}`,zIndex:999},className:`text-${F}`,children:re.map(((e,t)=>{if(e?.length)return(0,o.jsxs)("tr",{children:[0===t&&j&&(0,o.jsx)("th",{rowSpan:oe,scope:"col th-collection",style:{minWidth:"50px",width:"50px",maxWidth:"50px",textAlign:"center"},children:y&&(0,o.jsx)("input",{checked:ke,onChange:Te,type:y?"checkbox":"radio"})}),0===t&&b&&(0,o.jsx)("th",{rowSpan:oe,scope:"col th-index",style:{minWidth:"50px",width:"50px",maxWidth:"50px"}}),e.map((e=>(0,o.jsx)("th",{rowSpan:e.rowSpan,colSpan:e.colSpan,style:{whiteSpace:"nowrap",width:ue[e.prop],fontWeight:m},className:`text-${fe[e.prop]} align-middle`,scope:"col",children:(0,o.jsxs)("div",{className:"header-content",style:{display:"flex",alignItems:"center",justifyContent:ce(fe[e.prop])},children:[(0,o.jsx)("span",{className:"header-text",children:e.title}),e.sortable&&(0,o.jsxs)("div",{className:"header-icon ms-1",children:[(0,o.jsx)("i",{style:{borderBottom:se(e.prop)||"7px solid #000"},onClick:()=>he(e.prop),className:"icon sort-up"}),(0,o.jsx)("i",{style:{borderTop:se(e.prop,!0)||"7px solid #000"},onClick:()=>he(e.prop,!0),className:"icon sort-down"})]})]})},e.title)))]},t)}))}),(console.log("columns: ",E),console.log("columns: ",d(E,[])),(0,o.jsx)("tbody",{className:"table-body "+(U?"table-group-divider":""),children:V.length>0&&V.map(((r,s)=>(0,o.jsxs)(n.Fragment,{children:[(0,o.jsxs)("tr",{onClick:e=>je(r,e),className:"tr-content "+(!0===r.checked?"tr-checked":""),style:{...i||v?{cursor:"pointer"}:"",...A?{}:{borderBottom:"1px solid #f0f0f0"}},children:[j&&(0,o.jsx)("td",{scope:"row",style:{minWidth:"50px",width:"50px",maxWidth:"50px",verticalAlign:"middle"},className:`text-center ${a}`,children:(0,o.jsx)("input",{className:a,name:r[k]+ae,id:r[k]+ae,checked:!0===r.checked,onChange:e=>Ce(r,e),type:y?"checkbox":"radio"})}),b&&(0,o.jsx)("td",{className:`text-center ${a}`,scope:"col",style:{alignContent:"center",padding:"0px",minWidth:"50px",width:"50px",maxWidth:"50px"},children:s+1}),e.children?n.Children.map(xe,((e,l)=>{const i=e.props;let d=i.prop;if(n.isValidElement(e)){const p=n.cloneElement(e,{onExpand:()=>ie(r),isParent:!l&&S&&r.children,value:r[`${d}`],rowData:r,eidtable:_,prop:d,rowIndex:s,colIndex:l,canCollapse:r.children,collapse:r.collapse,align:!l&&S&&r.children?"start":i.align||N,width:ue[i.prop],maxWidth:i.maxWidth||w,showTip:i.showTip||t});return(0,o.jsx)("td",{className:`text-${i.align||N} ${a}`,style:{verticalAlign:ge[d],width:ue[i.prop],maxWidth:i.maxWidth||w,overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",whiteSpace:"nowrap"},children:(0,o.jsx)("div",{className:`collapse-table-td d-flex ${de(i)}`,children:i.showTip?(0,o.jsx)(c,{text:r[d],children:p}):p})},l)}})):d(E).map(((e,n)=>{const i=e.props?e.props:e;let d=i.prop;const p={onExpand:()=>ie(r),isParent:!n&&S&&r.children,value:r[`${d}`],rowData:r,eidtable:_,prop:d,rowIndex:s,colIndex:n,canCollapse:r.children,collapse:r.collapse,align:!n&&S&&r.children?"start":i.align||N,width:ue[i.prop],maxWidth:i.maxWidth||w,showTip:i.showTip||t};return(0,o.jsx)("td",{className:`text-${i.align||N} ${a}`,style:{verticalAlign:ge[d],width:ue[i.prop],maxWidth:i.maxWidth||w,overflowWrap:"break-word",wordWrap:"break-word",wordBreak:"break-word",whiteSpace:"nowrap"},children:(0,o.jsx)("div",{className:`collapse-table-td d-flex ${de(i)}`,children:i.showTip?(0,o.jsx)(c,{text:r[d],children:(0,o.jsx)(l,{...p})}):(0,o.jsx)(l,{...p})})},n)}))]},s),me(xe,r,s,ge,ue,fe)]},r[k]+ae)))}))]}),0===C.length&&(0,o.jsx)("div",{className:"text-center p-1",children:"\u6682\u65e0\u6570\u636e~"})]})})};p.TableCell=l;const h=p},8729:(e,t,r)=>{r.r(t),r.d(t,{default:()=>a});r(6540);var n=r(9596),o=r(7974),l=r(4848);const a=e=>{let{}=e;return(0,l.jsx)("div",{className:"show-index-wrapper",children:(0,l.jsx)(n.Ay,{showIndex:!0,data:o.data,columns:o.columns,children:o.columns.map((e=>(0,l.jsx)(n.nA,{...e},e.prop)))})})}},7974:(e,t,r)=>{r.r(t),r.d(t,{columns:()=>l,data:()=>o,default:()=>a});var n=r(4848);const o=[{id:"team001",teamName:"\u7814\u53d1\u56e2\u961f",leader:"\u5f20\u5cf0",contactEmail:"rf_team@company.com",memberCount:30,yearsSinceEstablishment:5,checked:!1},{id:"team002",teamName:"\u5e02\u573a\u56e2\u961f",leader:"\u674e\u60a6",contactEmail:"mk_team@company.com",memberCount:25,yearsSinceEstablishment:4,checked:!1},{id:"team003",teamName:"\u9500\u552e\u56e2\u961f",leader:"\u738b\u5f3a",contactEmail:"sl_team@company.com",memberCount:40,yearsSinceEstablishment:6,checked:!1},{id:"team004",teamName:"\u5ba2\u670d\u56e2\u961f",leader:"\u8d75\u7433",contactEmail:"cs_team@company.com",memberCount:15,yearsSinceEstablishment:3,checked:!1},{id:"team005",teamName:"\u8d22\u52a1\u56e2\u961f",leader:"\u5b59\u6d01",contactEmail:"fc_team@company.com",memberCount:10,yearsSinceEstablishment:7,checked:!1}],l=[{title:"\u56e2\u961f ID",prop:"id",width:"120px"},{title:"\u56e2\u961f\u540d\u79f0",prop:"teamName",width:"150px"},{title:"\u8d1f\u8d23\u4eba",prop:"leader",width:"120px"},{title:"\u8054\u7cfb\u90ae\u7bb1",prop:"contactEmail",width:"250px"},{title:"\u56e2\u961f\u4eba\u6570",prop:"memberCount",width:"120px"},{title:"\u6210\u7acb\u5e74\u9650",prop:"yearsSinceEstablishment",width:"120px"}],a=()=>(0,n.jsx)("div",{})}}]);