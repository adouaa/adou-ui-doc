"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[6106],{5215:(t,e,r)=>{r.d(e,{A:()=>a});var n=r(6540),o=r(5653),s=r(4848);const a=t=>{let{marks:e,range:r,sliderWidth:a,min:l=0,max:i=100,step:c,value:p,showStops:u=!0,showInput:d,onChange:h}=t;const[m,f]=(0,n.useState)(0),[x,g]=(0,n.useState)(0),[w,v]=(0,n.useState)(),[b,y]=(0,n.useState)([]),[C,j]=(0,n.useState)(0),[M,N]=(0,n.useState)(1),[S,F]=(0,n.useState)(!1),[W,$]=(0,n.useState)(!1),E=(0,n.useRef)(null),L=(0,n.useRef)(!1),T=(t,e,n)=>{const o=t.clientX-e.left;if(c&&!d)H(o,e);else{const t=100*Math.max(0,Math.min(o/e.width,1))+"%";n?g(t):f(t),r||(v(t),j(Math.round(parseFloat(t)/M)))}},H=(t,e)=>{const n=t/e.width*100/parseFloat(c+"%"),o=Math.round(n)*c+"%";L.current?g(o):f(o),r||v(o)},k=(t,e)=>{t.stopPropagation(),L.current=e,L.current?$(!0):F(!0);const r=E.current.getBoundingClientRect(),n=t=>{T(t,r,e)},o=()=>{L.current?$(!1):F(!1),L.current=!1,window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",o)};window.addEventListener("mousemove",n),window.addEventListener("mouseup",o)};return(0,n.useEffect)((()=>{c&&(()=>{let t=0;t=100/c;for(let e=0;e<t;e++)y((t=>[...t,{left:e*c+"%",value:e*c}]))})(),N(100/(i-l))}),[]),(0,n.useEffect)((()=>{const t=Math.abs(parseFloat(x)-parseFloat(m));r&&(v(t+"%"),j(isNaN(Math.round(t/M))?0:Math.round(t/M)));const e=Math.abs(parseFloat(x)-parseFloat(m))/M,n=Math.abs(parseFloat(x)-parseFloat(m));h&&h(e,n)}),[m,x]),(0,s.jsxs)("div",{className:"slider",children:[(0,s.jsxs)("div",{style:{width:a},className:"slider-runway me-3",ref:E,onMouseDown:t=>{t.preventDefault();const e=E.current.getBoundingClientRect(),n=t.clientX-e.left,o=n/e.width*100+"%";if(r){const t=n/E.current.getBoundingClientRect().width;Math.abs(t-parseFloat(m)/100)>Math.abs(t-parseFloat(x)/100)?(L.current=!0,c&&!d?H(n,e):g(o)):(L.current=!1,c&&!d?H(n,e):f(o))}else c&&!d?H(n,e):(L.current?g(o):f(o),!r&&v(o),j(Math.round(parseFloat(o)/M)));L.current?$(!0):F(!0);const s=t=>{T(t,e,L.current)},a=()=>{L.current?$(!1):F(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",a)};window.addEventListener("mousemove",s),window.addEventListener("mouseup",a)},onMouseUp:()=>{},children:[(0,s.jsx)("div",{className:"slider-bar bg-primary",style:{width:w,left:parseFloat(x)>parseFloat(m)?m:x}}),(0,s.jsx)("div",{className:"slider-button-wrapper1",style:{left:m},children:(0,s.jsx)(o.A,{mustShow:S,text:String(Math.round(parseFloat(m)/M)),children:(0,s.jsx)("div",{onMouseDown:k,className:"slider-button"})})}),r&&(0,s.jsx)("div",{className:"slider-button-wrapper2",style:{left:x},children:(0,s.jsx)(o.A,{mustShow:W,text:String(Math.round(parseFloat(x)/M)),children:(0,s.jsx)("div",{onMouseDown:t=>k(t,!0),className:"slider-button"})})}),u&&c&&!d&&(0,s.jsx)("div",{className:"slider-stop",children:b.map(((t,e)=>(0,s.jsx)("div",{className:"slider-stop-item",style:{left:t.left}},e)))}),e?.length>0?(0,s.jsx)("div",{className:"slider-mark",children:e?.map(((t,e)=>(0,s.jsxs)("div",{className:"slider-mark-item",children:[(0,s.jsx)("div",{className:"slider-mark-item-dot",style:{left:t.distance}}),(0,s.jsx)("div",{className:"slider-mark-item-label",style:{left:t.distance,...t.style},children:t.label})]},e)))}):""]}),d&&!r&&(0,s.jsx)("div",{className:"slider-input-box",children:(0,s.jsx)("input",{type:"number",value:C,onChange:t=>{let e=t.target.value;e=""===e?"":parseFloat(e),e>i?e=i:e<l&&(e=l),j(e),f(e*M+"%"),v(e*M+"%")},className:"form-control slider-input",placeholder:"\u8bf7\u8f93\u5165"})}),(0,s.jsx)("div",{className:"slider-values"})]})}},5653:(t,e,r)=>{r.d(e,{A:()=>l});var n=r(6540),o=r(961);const s=function(t,e,r){void 0===e&&(e=0),void 0===r&&(r=0),e=parseInt(e)?parseInt(e):0,r=parseInt(r)?parseInt(r):0;const n=t.getBoundingClientRect(),o=document.body,s=document.documentElement,a=window.pageYOffset||s.scrollTop||o.scrollTop,l=window.pageXOffset||s.scrollLeft||o.scrollLeft,i=s.clientTop||o.clientTop||0,c=s.clientLeft||o.clientLeft||0,p={};return p.y=n.top+a-i+r,p.x=n.left+l-c+e,p.width=n.width,p.height=n.height,p};var a=r(4848);const l=t=>{let{left:e,right:r,top:l,bottom:i,wrap:c=!1,width:p,arrowOffsetPercent:u,wrapperFlex:d,mustShow:h,show:m=!0,text:f,position:x="top",children:g,tooltipBgc:w="#333",tooltipFontColor:v,arrowBorderColor:b="#333",wrapperClassname:y}=t;const[C,j]=(0,n.useState)(!1),[M,N]=(0,n.useState)(!1),S=(0,n.useRef)(null),F=(0,n.useRef)(!1),W=(0,n.useRef)(null),[$,E]=(0,n.useState)(0),[L,T]=(0,n.useState)(0),H=(0,n.useRef)(null),[k,R]=(0,n.useState)({}),B=()=>{W.current&&clearTimeout(W.current),W.current=setTimeout((()=>{j(!0),setTimeout((()=>{N(!0)}),50)}),150)},A=()=>{h||(W.current&&clearTimeout(W.current),setTimeout((()=>{F.current||N(!1)}),200),setTimeout((()=>{F.current||j(!1)}),300))};return(0,n.useEffect)((()=>{h?B():A()}),[h]),(0,n.useEffect)((()=>{if(S.current){const t=S.current;E(t.offsetWidth),T(t.offsetHeight)}if(C){const t=s(H.current,0,0);R(t)}}),[C,M,g]),(0,a.jsxs)("div",{className:`adou-tooltip-wrapper ${y||""}`,style:{...d?{flex:1,display:"flex"}:{}},children:[(0,a.jsx)("div",{ref:H,className:"adou-tooltip-content",onMouseEnter:B,onMouseLeave:A,style:{...d?{flex:1}:{}},children:g}),("string"==typeof f?f?.trim?.()?.length>0:f)&&m&&C&&o.createPortal((0,a.jsxs)("div",{ref:S,onClick:t=>{t.stopPropagation()},onMouseEnter:()=>{F.current=!0,N(!0),setTimeout((()=>{j(!0)}),400)},onMouseLeave:()=>{h||(F.current=!1,setTimeout((()=>{N(!1)}),200),setTimeout((()=>{j(!1)}),300))},className:`adou-tooltip ${M?"show-tool-tip":""} adou-tooltip-${x}`,style:{backgroundColor:w,color:v,width:p,whiteSpace:c||p?"normal":"nowrap",position:"absolute",...(()=>{const t=k.y-S.current?.clientHeight-8+"px",e=k.y+H.current?.clientHeight+5+"px",r=k.x-S.current?.clientWidth+"px",n=k.y+H.current?.clientHeight/2-S.current?.clientHeight/2+"px",o=k.x+H.current?.clientWidth/2+"px";return"top"===x?{top:t,left:o}:"top-right"===x?{top:t,left:k.x+H.current?.clientWidth/2+S.current?.clientWidth/2+"px"}:"top-left"===x?{top:t,left:k.x+H.current?.clientWidth/2-S.current?.clientWidth/2+"px"}:"bottom"===x?{top:e,left:o}:"bottom-right"===x?{top:e,left:k.x+S.current?.clientWidth/2+H.current?.clientWidth/2+"px"}:"bottom-left"===x?{top:e,left:k.x+H.current?.clientWidth/2-S.current?.clientWidth/2+"px"}:"left"===x?{top:k.y+H.current?.clientHeight/2+"px",left:r}:"left-top"===x?{top:n,left:r}:"left-bottom"===x?{top:k.y+H.current?.clientHeight/2+S.current?.clientHeight/2+"px",left:r}:"right"===x?{top:k.y+H.current?.clientHeight/2+"px",left:k.x+H.current?.clientWidth+"px"}:"right-top"===x?{top:n,left:k.x+H.current?.clientWidth+"px"}:"right-bottom"===x?{top:k.y+H.current?.clientHeight/2+S.current?.clientHeight/2+"px",left:k.x+H.current?.clientWidth+"px"}:void 0})()},children:[(0,a.jsx)("div",{style:{...(()=>{const t="-8px",n=$*(u||.2),o=H.current?.clientWidth/4,s=n>o?o:n+"px",a=L*(u||.2),c=H.current?.clientHeight/4,p=a>c?c:a+"px";return"top"===x?{bottom:t,left:"50%",borderColor:`${b} transparent transparent transparent`}:"top-left"===x?{bottom:t,right:r||s,borderColor:`${b} transparent transparent transparent`}:"top-right"===x?{bottom:t,left:e||s,borderColor:`${b} transparent transparent transparent`}:"bottom"===x?{top:t,left:"50%",borderColor:`transparent transparent ${b} transparent`}:"bottom-right"===x?{top:t,left:e||s,borderColor:`transparent transparent ${b} transparent`}:"bottom-left"===x?{top:t,right:r||s,borderColor:`transparent transparent ${b} transparent`}:"left"===x?{top:"50%",right:t,borderColor:`transparent transparent transparent ${b}`}:"left-top"===x?{bottom:i||p,right:t,borderColor:`transparent transparent transparent ${b}`}:"left-bottom"===x?{top:l||p,right:"-9px",borderColor:`transparent transparent transparent ${b}`}:"right"===x?{top:"50%",left:t,borderColor:`transparent ${b} transparent transparent`}:"right-top"===x?{bottom:i||p,left:t,borderColor:`transparent ${b} transparent transparent`}:"right-bottom"===x?{top:l||p,left:t,borderColor:`transparent ${b} transparent transparent`}:void 0})()},className:`adou-tooltip-arrow adou-tooltip-arrow-${x}`}),f]}),document.body)]})}},2940:(t,e,r)=>{r.r(e),r.d(e,{default:()=>s});var n=r(5215),o=(r(6540),r(4848));const s=()=>(0,o.jsx)(n.A,{range:!0,min:0,max:100,onChange:(t,e)=>console.log(t,e)})}}]);