"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2963],{8478:(e,t,o)=>{o.d(t,{A:()=>s});o(6540);var l=o(2303),n=o(4848);function s(e){let{children:t,fallback:o}=e;return(0,l.A)()?(0,n.jsx)(n.Fragment,{children:t?.()}):o??null}},4207:(e,t,o)=>{o.d(t,{A:()=>n});var l=o(6540);const n=function(e,t,o){void 0===o&&(o=[]);const n=(0,l.useRef)(0);return(0,l.useCallback)((function(){const o=Date.now();(!n.current||o-n.current>=t)&&(e(...arguments),n.current=o)}),o)}},4277:(e,t,o)=>{o.d(t,{A:()=>l});const l=function(e){return 0===Object.keys(e??{}).length}},8407:(e,t,o)=>{o.d(t,{A:()=>p});var l=o(6540),n=o(961);const s=function(e,t,o){void 0===t&&(t=0),void 0===o&&(o=0),t=parseInt(t)?parseInt(t):0,o=parseInt(o)?parseInt(o):0;const l=e.getBoundingClientRect(),n=document.body,s=document.documentElement,a=window.pageYOffset||s.scrollTop||n.scrollTop,r=window.pageXOffset||s.scrollLeft||n.scrollLeft,i=s.clientTop||n.clientTop||0,c=s.clientLeft||n.clientLeft||0,d={};return d.y=l.top+a-i+o,d.x=l.left+r-c+t,d.width=l.width,d.height=l.height,d},a=function(e,t,o){void 0===o&&(o=!0),(0,l.useEffect)((()=>{const l=l=>{o&&e.length&&!(t=>e.some((e=>e.current?.contains(t.target))))(l)&&t&&t()};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}}),[e,t,o])};const r=function(e){const t=window.getComputedStyle(e);return e.offsetWidth-(parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth))-(parseInt(t.paddingLeft)+parseInt(t.paddingRight))};var i=o(4207),c=o(4277),d=o(4848);const u=(0,l.memo)((e=>{const[t,o]=l.useState(!1);return(0,d.jsx)("div",{children:(0,d.jsx)("svg",{style:{width:"18px",height:"18px",fill:t?"red":"#848484"},className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3182",width:"200",height:"200",onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},children:(0,d.jsx)("path",{d:"M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 750.4a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z",fill:t?"red":"#848484","p-id":"3183"})})})})),f=l.forwardRef(((e,t)=>{const{backgroundColor:o,mode:f="common",multiple:p,showSearch:m,prefix:h,suffix:x,varient:g="outlined",contentWrap:v=!0,ellipsis:b=!0,compact:y,wrapperWidth:j,commonSuffixContent:w,size:C,clearable:S=!1,isAddon:N,wrapperStyle:k,formStyle:A,errorPaddingLeft:L,suffixContentExternalCls:E,selectContentExternalCls:I,labelMinWidth:R,noWrap:T=!0,shouldFocus:W=!1,activeColor:P={font:"#fff",bgc:"#2783d8"},returnType:F="obj",showDefaultValue:$=!1,labelKey:D="label",valueKey:M="value",suffixContent:H,showLabel:O=!0,suffixContentType:V,inline:B,commonSuffixIcon:_,isFormItem:q,errMsg:z,labelWidth:K,label:U,labelPosition:Y="center",inputGroup:G=!1,labelColor:X,required:J=!1,showEmpty:Q=!0,name:Z,width:ee,defaultValue:te,options:oe,placeholder:le,externalClassName:ne,disabled:se,transparent:ae,optionContentMaxHeight:re="200px",onChange:ie,onFormDataChange:ce,onFieldChange:de,onValidateField:ue,optionRender:fe,onInputChange:pe,filterOption:me}=e,[he,xe]=(0,l.useState)(!1),[ge,ve]=(0,l.useState)(!1),[be,ye]=(0,l.useState)(!1),[je,we]=(0,l.useState)(!1),[Ce,Se]=(0,l.useState)(oe||[]),[Ne,ke]=(0,l.useState)(oe||[]),[Ae,Le]=(0,l.useState)({}),[Ee,Ie]=(0,l.useState)([]),[Re,Te]=(0,l.useState)(te||null),[We,Pe]=(0,l.useState)(0),[Fe,$e]=(0,l.useState)(-1),[De,Me]=(0,l.useState)(""),[He,Oe]=(0,l.useState)(!1),Ve=(0,l.useRef)(null),Be=(0,l.useRef)(),_e=(0,l.useRef)(),[qe,ze]=(0,l.useState)({}),[Ke,Ue]=(0,l.useState)(!1),Ye=(0,l.useRef)(),Ge=()=>{if(!se){if("liveSearch"!==f&&Ue(!1),"common"===f)Ye.current&&(Ye.current.value="");else if("liveSearch"===f)Le(Ye.current?.value);else if("tags"===f){const e=Ye.current?.value,t=[...Ee||[]];if(e){if(t.find((t=>t===e)))return;console.log("5: ",5),t.push(e),Ie(t),Ye.current.value=""}Je(t),de&&de(Z,t)}"filled"===g&&Be.current&&(Be.current.style.backgroundColor="#f0f0f0"),he?(p?Je(Ee):"common"===f?Je(Ae?.[M]||Ae?.[D]):"liveSearch"===f&&Je(Ae?.[M]||Ae?.[D]||Ye.current.value),ve(!0),setTimeout((()=>{ve(!1),xe((e=>!e))}),100),ye(!1)):xe(!1),He&&Oe(!1)}},Xe=e=>{de&&de(Z,e)},Je=e=>{ue&&ue(Z,e)},Qe=()=>{const e=s(Be.current,0,0);window.innerHeight-Be.current.getBoundingClientRect().bottom<_e.current?.clientHeight&&(e.y=e.y-_e.current?.clientHeight-e.height),ze(e)},Ze=(e,t)=>{console.log("item: ",e),t?.stopPropagation();let o=[...Ee];if(p||"tags"===f){const t=Ee.findIndex((t=>t[M]===e[M]));console.log("index: ",t),t>-1?(o=o.filter((t=>t[M]!==e[M])),Ie(o)):(o.push(e),Ie(o)),Ye.current&&(Ye.current.value="")}else Le(e),Te(e),"liveSearch"===f&&(Ye.current.value=e[D]),Ge();const l=p||"tags"===f?o:"obj"===F||$?e:e[M];ie&&ie(l),ot(!1),ce&&ce(Z,l),Xe&&Xe(l),ot(!1),Je(e)},et=()=>Ae?.[M]||0===Ae?.[M]||!1===Ae?.[M]?("obj"===F?(ce&&ce(Z,Ae),Xe&&Xe(Ae)):(ce&&ce(Z,Ae[M]||Ae[D]),Xe&&Xe(Ae[M]||Ae[D])),Ae[M]||Ae[D]):Ae,[tt,ot]=(0,l.useState)(!1),lt=()=>!J||(Ae?(ot(!1),!0):(ot(!0),!1)),nt=()=>{p?Ie([]):(Le(""),Te(""))},st=(e,t)=>p||"tags"===f?Ee?.find((t=>t[M]===e[M]))?P?.[t]:"font"===t?"#000":"":Ae?.[M]===e[M]?P?.[t]:"font"===t?"#000":"";(0,l.useImperativeHandle)(t,(()=>({validate:lt,clear:nt,getValue:et})));const at=`adou-select-wrapper ${ne||""}`.trim(),rt=e=>{m&&Ye.current&&!p?(Ue(!0),Ye.current?.focus(),(0,c.A)(Ae)?xe(!0):("common"===f&&(Ye.current.value=Ae[D]||Ae),Ye.current?.select())):p||"tags"===f?Ue(!0):"liveSearch"===f&&(Ue(!0),Ye.current.value=Ae?.[D]||Ae)},it=(0,i.A)((e=>{pe&&pe(e)}),1e3),ct=e=>{e.stopPropagation();const t=e.target.value;if("tags"!==f&&xe(!0),"liveSearch"===f&&Xe(t),pe)it(t);else{const e=Ne.filter((e=>me?me(t,e,D,M):e[D].toLowerCase().includes(t.toLowerCase())));Se(e)}};return(0,l.useEffect)((()=>{if(te&&we(!0),$)if(p)Ie(te);else if("object"!=typeof te){const e={[M]:te,[D]:te};Le(e),Te(e)}else"object"==typeof te&&(Le(te),Te(te));else if(p){const e=oe.filter((e=>Array.isArray(te)?te.some((t=>{const o="object"==typeof t?t[M]:t;return e[M]===o})):e[M]===te));Ie(e)}else if("tags"===f)te?(console.log("defaultValue: ",te),Ie(Array.isArray(te)?te.map((e=>"object"==typeof e?e:{[M]:e,[D]:e})):"object"==typeof te?[te]:[{[M]:te,[D]:te}])):Ie([]);else if("object"==typeof te){const e=oe.find((e=>e?.[M]===te?.[M]));e?(Le(e),Te(e)):Le({})}else if(te||0===te||!1===te){const e=oe.find((e=>e[M]===te));Le(e)}else Le(Re);te&&ot(!1)}),[te,oe]),(0,l.useEffect)((()=>{if(Q){const e=[...oe];Se(e),ke(e)}else Se(oe),ke(oe)}),[oe]),(0,l.useEffect)((()=>{Pe(34*Ce.length||100),setTimeout((()=>{Qe()}),0)}),[Ce]),(0,l.useEffect)((()=>{he||$e(-1)}),[he]),(0,l.useEffect)((()=>{setTimeout((()=>{(()=>{const e=r(Be.current);if(!e)return;const t=document.querySelector(".adou-select-clear-icon-box")?.clientWidth,o=document.querySelector(".adou-select-icon-box")?.clientWidth;Me(e-(t||0)-(o||0)+"px")})()}),100)}),[te]),a([Be,_e,Ye],Ge,!0),(0,d.jsxs)("div",{onFocus:e=>{se||(e.stopPropagation(),"filled"===g&&Be.current&&!se&&(Be.current.style.backgroundColor=""),Oe(!0),W&&(Qe(),Ge()))},onKeyDown:e=>{if("Tab"!==e.key){if(he)if("ArrowUp"===e.key)e.preventDefault(),$e((e=>e<=0?Ce.length-1:e-1));else if("ArrowDown"===e.key)e.preventDefault(),$e((e=>e>=Ce.length-1?0:e+1));else if("Enter"===e.key){if(Ge(),-1==Fe)return;e.preventDefault(),Ze(Ce[Fe])}}else he&&Ge()},tabIndex:0,ref:Ve,className:`${at} `,style:{...k,...j?{width:j}:{flex:1}},children:[(0,d.jsx)("div",{className:"adou-select-form-content",children:(0,d.jsxs)("div",{ref:Be,onMouseEnter:()=>{ye(!0)},onMouseLeave:()=>{ye(!1)},onClick:e=>{Ye.current&&!Ye.current.value&&Se(Ne),e.stopPropagation(),setTimeout((()=>{Qe()}),10),se||m||xe(!0)},className:`adou-select d-flex align-items-center ${I||""} ${He?"adou-form-control-focus":""}`,style:{textAlign:"left",background:o||(ae?"transparent":se?"#eee":"filled"===g?"#f0f0f0":""),flex:1,minHeight:"lg"===C?"48px":"sm"===C?"32px":"40px",border:"borderless"===g?"none":"",cursor:se?"not-allowed":"pointer",...A},children:[h&&(0,d.jsx)("div",{className:"prefix me-2",children:h}),p||"tags"===f?(0,d.jsxs)("div",{className:"adou-select-value-list d-flex flex-wrap align-items-center flex-fill",children:[Ee?.map(((e,t)=>(0,d.jsxs)("div",{style:{backgroundColor:"rgb(0 0 0 / 6%)"},className:"adou-select-value-list-item d-flex px-2 my-1 rounded-1 me-1",children:[(0,d.jsx)("span",{className:"adou-select-value-list-item-text me-1",children:"object"==typeof e?e[D]:e}),!se&&(0,d.jsx)("span",{className:"adou-select-value-list-item-close",onClick:e=>((e,t,o)=>{e.stopPropagation();const l=[...Ee];l.splice(o,1),Xe(l),Je(l),Ie(l)})(e,0,t),children:(0,d.jsx)(u,{})})]},t))),(m||me||"tags"===f)&&(0,d.jsx)("div",{className:"adou-select-input-box flex-fill",children:(0,d.jsx)("input",{onBlur:e=>{e.stopPropagation()},placeholder:Ae?.[M]?"":le,onFocus:rt,ref:Ye,onChange:ct,disabled:se,type:"text",className:"adou-select-input","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:"filled"===g||ae?"transparent":"",cursor:se?"not-allowed":""}})})]}):Ae?.[M]||0===Ae?.[M]||!1===Ae?.[M]?b?!Ke||p?(0,d.jsx)("div",{title:Ae[D],className:"adou-select-value "+(v?"ellipsis-1":""),style:{maxWidth:De,...m||me||"liveSearch"===f?{}:{flex:1}},children:Ae[D]}):"":(0,d.jsx)("div",{className:"adou-select-value  "+(v?"ellipsis-1":""),style:{...m?{flex:1}:{}},children:Ae[D]}):"liveSearch"!==f&&!m&&!me&&(0,d.jsx)("div",{className:"select-value-empty-placeholder flex-fill"}),(m||me||"liveSearch"===f)&&!p&&"tags"!==f&&(0,d.jsx)("div",{className:"adou-select-input-box flex-fill",children:(0,d.jsx)("input",{placeholder:Ae?.[M]?"":le,onFocus:rt,ref:Ye,onChange:ct,disabled:se,type:"text",className:"adou-select-input","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:"filled"===g||ae?"transparent":"",cursor:se?"not-allowed":""}})}),x&&(0,d.jsx)("div",{className:"suffix ms-2",children:x}),S&&be&&(p?Ee.length:Ae?.[M||D])?(0,d.jsx)("div",{className:"adou-select-clear-icon-box fade-enter d-flex",children:(0,d.jsx)("i",{className:"adou-select-clear-icon fa-regular fa-circle-xmark text-secondary",style:{fontSize:"12px",cursor:"pointer"},onClick:e=>{e.stopPropagation(),nt(),ot(!0),Xe?.(p?[]:"str"===F?"":{}),Je("")}})}):(0,d.jsx)("div",{className:"adou-select-common-sufiix-content text-secondary",style:{textAlign:"right"},children:w}),_&&(0,d.jsx)("i",{onClick:()=>{},className:`${_} adou-select-common-suffix-icon`}),(0,d.jsx)("div",{className:"adou-select-icon-box ms-2 "+(m||Ae?.[M]||w?"":"text-end"),children:(0,d.jsx)("i",{style:{color:X,right:N?"0px":"14px"},className:"adou-select-icon fa-solid fa-caret-right "+(he?"rotate-up":"rotate-down")})})]})}),n.createPortal((0,d.jsx)("div",{style:{position:"absolute",top:qe.y+qe.height+"px",left:qe.x+"px",...he?{maxHeight:We>parseInt(re)?re:We+"px"}:{},...ge?{opacity:0,transform:"scaleY(0)"}:{}},ref:_e,className:`adou-select-option-content ${he?"adou-select-option-content-open":""} ${ge?"aduo-select-option-content-closing":""}`,children:he&&(0,d.jsx)("div",{className:"adou-select-option-box",children:Ce.length>0?Ce.map(((e,t)=>(0,d.jsx)("div",{onClick:t=>Ze(e,t),style:{color:st(e,"font"),backgroundColor:st(e,"bgc")},className:`adou-select-option ${Ae?.[M]===e[M]?"adou-select-option-active":""} ${Fe===t?"focused":""}`,children:fe?fe(e,D,M):e.render?e.render(e,D,M):e[D]},e[M]))):(0,d.jsx)("div",{className:"none-match ps-2",children:"No content"})})}),document.body)]})}));f.displayName="Select";const p=f},7504:(e,t,o)=>{o.r(t),o.d(t,{default:()=>a});o(6540);var l=o(8407),n=o(8478),s=o(4848);const a=()=>{const e=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}];return(0,s.jsx)("div",{className:"disabled-select-wrapper",children:(0,s.jsx)(n.A,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:()=>(0,s.jsx)(l.A,{disabled:!0,placeholder:"\u8bf7\u9009\u62e9",options:e})})})}}}]);