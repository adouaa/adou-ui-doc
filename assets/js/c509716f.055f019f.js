"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2882],{8478:(e,t,l)=>{l.d(t,{A:()=>o});l(6540);var n=l(2303),s=l(4848);function o(e){let{children:t,fallback:l}=e;return(0,n.A)()?(0,s.jsx)(s.Fragment,{children:t?.()}):l??null}},4207:(e,t,l)=>{l.d(t,{A:()=>s});var n=l(6540);const s=function(e,t,l){void 0===l&&(l=[]);const s=(0,n.useRef)(0);return(0,n.useCallback)((function(){const l=Date.now();(!s.current||l-s.current>=t)&&(e(...arguments),s.current=l)}),l)}},4277:(e,t,l)=>{l.d(t,{A:()=>n});const n=function(e){return 0===Object.keys(e??{}).length}},8407:(e,t,l)=>{l.d(t,{A:()=>p});var n=l(6540),s=l(961);const o=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=0),t=parseInt(t)?parseInt(t):0,l=parseInt(l)?parseInt(l):0;const n=e.getBoundingClientRect(),s=document.body,o=document.documentElement,a=window.pageYOffset||o.scrollTop||s.scrollTop,r=window.pageXOffset||o.scrollLeft||s.scrollLeft,c=o.clientTop||s.clientTop||0,i=o.clientLeft||s.clientLeft||0,u={};return u.y=n.top+a-c+l,u.x=n.left+r-i+t,u.width=n.width,u.height=n.height,u},a=function(e,t,l){void 0===l&&(l=!0),(0,n.useEffect)((()=>{const n=n=>{l&&e.length&&!(t=>e.some((e=>e.current?.contains(t.target))))(n)&&t&&t()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t,l])};const r=function(e){const t=window.getComputedStyle(e);return e.offsetWidth-(parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth))-(parseInt(t.paddingLeft)+parseInt(t.paddingRight))};var c=l(4207),i=l(4277),u=l(4848);const d=(0,n.memo)((e=>{const[t,l]=n.useState(!1);return(0,u.jsx)("div",{children:(0,u.jsx)("svg",{style:{width:"18px",height:"18px",fill:t?"red":"#848484"},className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3182",width:"200",height:"200",onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:(0,u.jsx)("path",{d:"M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 750.4a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z",fill:t?"red":"#848484","p-id":"3183"})})})})),f=n.forwardRef(((e,t)=>{const{showIcon:l=!0,title:f,backgroundColor:p,mode:h="common",multiple:m,showSearch:x,prefix:g,suffix:v,varient:b="outlined",contentWrap:y=!0,ellipsis:j=!0,compact:w,wrapperWidth:S,commonSuffixContent:C,size:N,clearable:k=!1,isAddon:A,wrapperStyle:L,formStyle:E,errorPaddingLeft:I,suffixContentExternalCls:T,selectContentExternalCls:R,labelMinWidth:W,noWrap:D=!0,shouldFocus:F=!1,activeColor:P={font:"#fff",bgc:"#2783d8"},returnType:$="obj",showDefaultValue:M=!1,labelKey:H="label",valueKey:O="value",suffixContent:z,showLabel:B=!0,suffixContentType:K,inline:V,commonSuffixIcon:_,isFormItem:q,errMsg:U,labelWidth:Y,label:G,labelPosition:X="center",inputGroup:J=!1,labelColor:Q,required:Z=!1,showEmpty:ee=!0,name:te,width:le,defaultValue:ne,options:se,placeholder:oe,externalClassName:ae,disabled:re,transparent:ce,optionContentMaxHeight:ie="200px",onChange:ue,onFormDataChange:de,onFieldChange:fe,onValidateField:pe,optionRender:he,onInputChange:me,filterOption:xe}=e,[ge,ve]=(0,n.useState)(!1),[be,ye]=(0,n.useState)(!1),[je,we]=(0,n.useState)(!1),[Se,Ce]=(0,n.useState)(!1),[Ne,ke]=(0,n.useState)(se||[]),[Ae,Le]=(0,n.useState)(se||[]),[Ee,Ie]=(0,n.useState)({}),[Te,Re]=(0,n.useState)([]),[We,De]=(0,n.useState)(ne||null),[Fe,Pe]=(0,n.useState)(0),[$e,Me]=(0,n.useState)(-1),[He,Oe]=(0,n.useState)(""),[ze,Be]=(0,n.useState)(!1),Ke=(0,n.useRef)(null),Ve=(0,n.useRef)(),_e=(0,n.useRef)(),[qe,Ue]=(0,n.useState)({}),[Ye,Ge]=(0,n.useState)(!1),Xe=(0,n.useRef)(),Je=(0,n.useRef)(""),Qe=()=>{re||("liveSearch"===h||x||Ge(!1),"common"===h&&Xe.current?Xe.current.value=x&&Ee?.[H]||"":"liveSearch"===h?Ie(Xe.current?.value):"tags"===h&&lt(Xe.current?.value),"filled"===b&&Ve.current&&(Ve.current.style.backgroundColor="#f0f0f0"),ge?(m?et(Te):"common"===h?et(Ee?.[O]||Ee?.[H]):"liveSearch"===h&&et(Ee?.[O]||Ee?.[H]||Xe.current.value),ye(!0),setTimeout((()=>{ye(!1),ve((e=>!e))}),100),we(!1)):ve(!1),ze&&Be(!1))},Ze=e=>{fe&&fe(te,e)},et=e=>{pe&&pe(te,e)},tt=()=>{const e=o(Ve.current,0,0),t=window.innerHeight;if(!Ve.current)return;t-Ve.current.getBoundingClientRect().bottom<_e.current?.clientHeight&&(e.y=e.y-_e.current?.clientHeight-e.height),Ue(e)},lt=e=>{const t=[...Te||[]];if(e){if(t.find((t=>"string"==typeof t?t===e:t[O]===e)))return;t.push(e),Re(t),Xe.current.value=""}et(t),fe&&fe(te,t),Je.current=""},nt=(e,t)=>{t?.stopPropagation();let l=[...Te];if(m||"tags"===h){Te.findIndex((t=>t[O]===e[O]))>-1?(l=l.filter((t=>t[O]!==e[O])),Re(l)):(l.push(e),Re(l)),Xe.current&&(Xe.current.value="")}else Ie(e),De(e),"liveSearch"===h&&(Xe.current.value=e[H]),Qe();const n=m||"tags"===h?l:"obj"===$||M?e:e[O];ue&&ue(n),at(!1),de&&de(te,n),Ze&&Ze(n),at(!1),et(e)},st=()=>Ee?.[O]||0===Ee?.[O]||!1===Ee?.[O]?("obj"===$?(de&&de(te,Ee),Ze&&Ze(Ee)):(de&&de(te,Ee[O]||Ee[H]),Ze&&Ze(Ee[O]||Ee[H])),Ee[O]||Ee[H]):Ee,[ot,at]=(0,n.useState)(!1),rt=()=>!Z||(Ee?(at(!1),!0):(at(!0),!1)),ct=()=>{m?Re([]):(Ie(""),De(""))},it=()=>re?"#eee":"filled"===b||ce?"transparent":p||"transparent",ut=(e,t)=>m||"tags"===h?Te?.find((t=>t[O]===e[O]))?P?.[t]:"font"===t?"#000":"":Ee?.[O]===e[O]?P?.[t]:"font"===t?"#000":"";(0,n.useImperativeHandle)(t,(()=>({validate:rt,clear:ct,getValue:st})));const dt=`adou-select-wrapper ${ae||""}`.trim(),ft=e=>{x&&Xe.current&&!m?(Ge(!0),Xe.current?.focus(),(0,i.A)(Ee)?ve(!0):("common"===h&&(Xe.current.value="object"==typeof Ee?Ee[H]:Ee),Xe.current?.select())):m||"tags"===h?Ge(!0):"liveSearch"===h&&(Ge(!0),Ee&&!(0,i.A)(Ee)&&(Xe.current.value=Ee?.[H]||Ee)),setTimeout((()=>{tt()}),10)},pt=((0,c.A)((e=>{me&&me(e)}),300),e=>{e.stopPropagation();const t=e.target.value;if("tags"!==h&&ve(!0),"liveSearch"===h&&Ze(t),me)me&&me(t);else{const e=Ae.filter((e=>xe?xe(t,e,H,O):String(e[H]).toLowerCase().includes(t.toLowerCase())));ke(e)}"tags"===h&&(Je.current=t)});return(0,n.useEffect)((()=>{if(ne)if(at(!1),Ce(!0),M||x||"liveSearch"===h)if(m)Re(ne);else if("object"!=typeof ne){let e=se.find((e=>e?.[O]===ne));e||(e={[O]:ne,[H]:ne}),Ie(e),De(e)}else"object"==typeof ne&&(Ie(ne),De(ne));else if(m){const e=se.filter((e=>Array.isArray(ne)?ne.some((t=>{const l="object"==typeof t?t[O]:t;return e[O]===l})):e[O]===ne));Re(e)}else if("tags"===h)Re(ne?Array.isArray(ne)?ne.map((e=>"object"==typeof e?e:{[O]:e,[H]:e})):"object"==typeof ne?[ne]:[{[O]:ne,[H]:ne}]:[]);else if("object"==typeof ne){const e=se.find((e=>e?.[O]===ne?.[O]));e?(Ie(e),De(e)):Ie({})}else if(ne||0===ne||!1===ne){const e=se.find((e=>e[O]===ne));Ie(e)}else Ie(We);else Ie(""),De(""),Re([]);setTimeout((()=>{(()=>{const e=r(Ve.current);if(!e)return;const t=document.querySelector(".adou-select-clear-icon-box")?.clientWidth,l=document.querySelector(".adou-select-icon-box")?.clientWidth;Oe(e-(t||0)-(l||0)-8+"px")})()}),100)}),[ne,se]),(0,n.useEffect)((()=>{if(ee){if(se){const e=[...se];ke(e),Le(e)}}else ke(se),Le(se)}),[se]),(0,n.useEffect)((()=>{Pe(34*Ne.length||100),setTimeout((()=>{tt()}),0)}),[Ne]),(0,n.useEffect)((()=>{ge||Me(-1)}),[ge]),(0,n.useEffect)((()=>{Xe.current&&(Ye||x||"liveSearch"===h)&&Ee?Xe.current.value="object"==typeof Ee?Ee?.[O]?Ee[H]:"":Ee:Xe.current&&(Xe.current.value="")}),[Ee]),a([Ve,_e,Xe],Qe,_e.current&&Ve.current&&ge),(0,u.jsxs)("div",{title:f||G,onFocus:e=>{re||(e.stopPropagation(),"filled"===b&&Ve.current&&!re&&(Ve.current.style.backgroundColor=""),Be(!0),F&&(tt(),Qe()))},onKeyDown:e=>{if("Tab"!==e.key){if(ge)if("ArrowUp"===e.key)e.preventDefault(),Me((e=>e<=0?Ne.length-1:e-1));else if("ArrowDown"===e.key)e.preventDefault(),Me((e=>e>=Ne.length-1?0:e+1));else if("Enter"===e.key){if(Qe(),-1==$e)return;e.preventDefault(),nt(Ne[$e])}}else ge&&Qe()},tabIndex:0,ref:Ke,className:`${dt} `,style:{...L,...S?{width:S}:{flex:1}},children:[(0,u.jsx)("div",{className:"adou-select-form-content",children:(0,u.jsxs)("div",{ref:Ve,onMouseEnter:()=>{we(!0)},onMouseLeave:()=>{we(!1)},onClick:e=>{Xe.current&&!Xe.current.value&&ke(Ae),e.stopPropagation(),x||"liveSearch"===h||setTimeout((()=>{tt()}),10),re||x||ve(!0)},className:`adou-select d-flex align-items-center ${R||""} ${ze?"adou-form-control-focus":""}`,style:{textAlign:"left",background:re?"#eee":ce?"transparent":p||("filled"===b?"#f0f0f0":""),flex:1,minHeight:"lg"===N?"48px":"sm"===N?"33.6px":"41.6px",border:"borderless"===b?"none":"",cursor:re?"not-allowed":"pointer",...E},children:[g&&(0,u.jsx)("div",{className:"prefix me-2",children:g}),m||"tags"===h?(0,u.jsxs)("div",{className:"adou-select-value-list d-flex flex-wrap align-items-center flex-fill",children:[Te?.map(((e,t)=>(0,u.jsxs)("div",{style:{backgroundColor:"rgb(0 0 0 / 6%)"},className:"adou-select-value-list-item d-flex px-2 my-1 rounded-1 me-1",children:[(0,u.jsx)("span",{className:"adou-select-value-list-item-text me-1",children:"object"==typeof e?e[H]:e}),!re&&(0,u.jsx)("span",{className:"adou-select-value-list-item-close",onClick:e=>((e,t,l)=>{e.stopPropagation();const n=[...Te];n.splice(l,1),Ze(n),et(n),Re(n)})(e,0,t),children:(0,u.jsx)(d,{})})]},t))),(x||xe||"tags"===h)&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",children:(0,u.jsx)("input",{onKeyDown:e=>{const t=e.currentTarget.value;"Enter"!==e.key||ge||t&&(lt(t),e.preventDefault())},onBlur:e=>{ge||lt(Je.current)},placeholder:Ee?.[O]?"":oe,onFocus:ft,ref:Xe,onChange:pt,disabled:re,type:"text",className:"adou-select-input","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:it(),width:"100%",cursor:re?"not-allowed":""}})})]}):Ee?.[O]||0===Ee?.[O]||!1===Ee?.[O]?j?Ye&&!m||x||"liveSearch"===h?"":(0,u.jsx)("div",{title:Ee[H]||Ee,className:"adou-select-value "+(y?"ellipsis-1":""),style:{maxWidth:He,...x||xe?{}:{flex:1}},children:Ee[H]}):(0,u.jsx)("div",{className:"adou-select-value  "+(y?"ellipsis-1":""),style:{flex:1},children:Ee[H]}):"liveSearch"!==h&&!x&&!xe&&(0,u.jsx)("div",{className:"select-value-empty-placeholder flex-fill"}),(x||xe||"liveSearch"===h)&&!m&&"tags"!==h&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",title:Ee?.[H]||Ee,children:(0,u.jsx)("input",{placeholder:Ee?.[O]?"":oe,onFocus:ft,ref:Xe,onChange:pt,disabled:re,type:"text",className:"adou-select-input ellipsis-1","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:it(),width:"100%",cursor:re?"not-allowed":""}})}),v&&(0,u.jsx)("div",{className:"suffix ms-2",children:v}),k&&je&&(m?Te.length:Ee?.[O||H])?(0,u.jsx)("div",{className:"adou-select-clear-icon-box fade-enter d-flex",children:(0,u.jsx)("i",{className:"adou-select-clear-icon fa-regular fa-circle-xmark text-secondary",style:{fontSize:"12px",cursor:"pointer"},onClick:e=>{e.stopPropagation(),ct(),at(!0),Ze?.(m?[]:"str"===$?"":{}),et("")}})}):(0,u.jsx)("div",{className:"adou-select-common-sufiix-content text-secondary",style:{textAlign:"right",whiteSpace:"nowrap"},children:C}),_&&(0,u.jsx)("i",{onClick:()=>{},className:`${_} adou-select-common-suffix-icon`}),(0,u.jsx)("div",{className:"adou-select-icon-box ms-2 "+(x||Ee?.[O]||C?"":"text-end"),children:l&&(0,u.jsx)("i",{style:{color:Q,right:A?"0px":"14px"},className:"adou-select-icon fa-solid fa-caret-right "+(ge?"rotate-up":"rotate-down")})})]})}),s.createPortal((0,u.jsx)("div",{style:{position:"absolute",top:qe.y+qe.height+"px",left:qe.x+"px",...ge?{maxHeight:Fe>parseInt(ie)?ie:Fe+"px"}:{},...be?{opacity:0,transform:"scaleY(0)"}:{}},ref:_e,className:`adou-select-option-content ${ge?"adou-select-option-content-open":""} ${be?"aduo-select-option-content-closing":""}`,children:ge&&(0,u.jsx)("div",{className:"adou-select-option-box",children:Ne.length>0?Ne.map(((e,t)=>(0,u.jsx)("div",{onClick:t=>nt(e,t),style:{color:ut(e,"font"),backgroundColor:ut(e,"bgc")},className:`adou-select-option ${Ee?.[O]===e[O]?"adou-select-option-active":""} ${$e===t?"focused":""}`,children:he?he(e,H,O):e.render?e.render(e,H,O):e[H]},e[O]))):(0,u.jsx)("div",{className:"none-match ps-2",children:"No content"})})}),document.body)]})}));f.displayName="Select";const p=f},2395:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});l(6540);var n=l(8407),s=l(8478),o=l(4848);const a=()=>{const e=[{label:"Option 1",value:"1"},{label:"Option 2",value:"2"},{label:"Option 3",value:"3"}];return(0,o.jsx)("div",{className:"size-select-wrapper",children:(0,o.jsx)(s.A,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:()=>(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"sm-select",children:(0,o.jsx)(n.A,{size:"sm",placeholder:"\u8bf7\u9009\u62e9",options:e})}),(0,o.jsx)("div",{className:"default-select my-2",children:(0,o.jsx)(n.A,{placeholder:"\u8bf7\u9009\u62e9",options:e})}),(0,o.jsx)("div",{className:"lg-select",children:(0,o.jsx)(n.A,{size:"lg",placeholder:"\u8bf7\u9009\u62e9",options:e})})]})})})}}}]);