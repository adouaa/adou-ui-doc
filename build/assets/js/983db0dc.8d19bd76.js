"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[3780],{8478:(e,t,l)=>{l.d(t,{A:()=>a});l(6540);var n=l(2303),o=l(4848);function a(e){let{children:t,fallback:l}=e;return(0,n.A)()?(0,o.jsx)(o.Fragment,{children:t?.()}):l??null}},4207:(e,t,l)=>{l.d(t,{A:()=>o});var n=l(6540);const o=function(e,t,l){void 0===l&&(l=[]);const o=(0,n.useRef)(0);return(0,n.useCallback)((function(){const l=Date.now();(!o.current||l-o.current>=t)&&(e(...arguments),o.current=l)}),l)}},4277:(e,t,l)=>{l.d(t,{A:()=>n});const n=function(e){return 0===Object.keys(e??{}).length}},8407:(e,t,l)=>{l.d(t,{A:()=>p});var n=l(6540),o=l(961);const a=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=0),t=parseInt(t)?parseInt(t):0,l=parseInt(l)?parseInt(l):0;const n=e.getBoundingClientRect(),o=document.body,a=document.documentElement,s=window.pageYOffset||a.scrollTop||o.scrollTop,r=window.pageXOffset||a.scrollLeft||o.scrollLeft,i=a.clientTop||o.clientTop||0,c=a.clientLeft||o.clientLeft||0,u={};return u.y=n.top+s-i+l,u.x=n.left+r-c+t,u.width=n.width,u.height=n.height,u},s=function(e,t,l){void 0===l&&(l=!0),(0,n.useEffect)((()=>{const n=n=>{l&&e.length&&!(t=>e.some((e=>e.current?.contains(t.target))))(n)&&t&&t()};return document.addEventListener("mousedown",n),()=>{document.removeEventListener("mousedown",n)}}),[e,t,l])};const r=function(e){const t=window.getComputedStyle(e);return e.offsetWidth-(parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth))-(parseInt(t.paddingLeft)+parseInt(t.paddingRight))};var i=l(4207),c=l(4277),u=l(4848);const d=(0,n.memo)((e=>{const[t,l]=n.useState(!1);return(0,u.jsx)("div",{children:(0,u.jsx)("svg",{style:{width:"18px",height:"18px",fill:t?"red":"#848484"},className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3182",width:"200",height:"200",onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:(0,u.jsx)("path",{d:"M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 750.4a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z",fill:t?"red":"#848484","p-id":"3183"})})})})),f=n.forwardRef(((e,t)=>{const{showIcon:l=!0,title:f,backgroundColor:p,mode:h="common",multiple:m,showSearch:x,prefix:v,suffix:g,varient:b="outlined",contentWrap:y=!0,ellipsis:w=!0,compact:j,wrapperWidth:S,commonSuffixContent:C,size:N,clearable:k=!1,isAddon:A,wrapperStyle:L,formStyle:E,errorPaddingLeft:I,suffixContentExternalCls:T,selectContentExternalCls:W,labelMinWidth:R,noWrap:D=!0,shouldFocus:_=!1,activeColor:F={font:"#fff",bgc:"#2783d8"},returnType:P="obj",showDefaultValue:$=!1,labelKey:M="label",valueKey:H="value",suffixContent:B,showLabel:O=!0,suffixContentType:J,inline:K,commonSuffixIcon:V,isFormItem:q,errMsg:z,labelWidth:U,label:Y,labelPosition:G="center",inputGroup:X=!1,labelColor:Q,required:Z=!1,showEmpty:ee=!0,name:te,width:le,defaultValue:ne,options:oe,placeholder:ae,externalClassName:se,disabled:re,transparent:ie,optionContentMaxHeight:ce="200px",onChange:ue,onFormDataChange:de,onFieldChange:fe,onValidateField:pe,optionRender:he,onInputChange:me,filterOption:xe}=e,[ve,ge]=(0,n.useState)(!1),[be,ye]=(0,n.useState)(!1),[we,je]=(0,n.useState)(!1),[Se,Ce]=(0,n.useState)(!1),[Ne,ke]=(0,n.useState)(oe||[]),[Ae,Le]=(0,n.useState)(oe||[]),[Ee,Ie]=(0,n.useState)({}),[Te,We]=(0,n.useState)([]),[Re,De]=(0,n.useState)(ne||null),[_e,Fe]=(0,n.useState)(0),[Pe,$e]=(0,n.useState)(-1),[Me,He]=(0,n.useState)(""),[Be,Oe]=(0,n.useState)(!1),Je=(0,n.useRef)(null),Ke=(0,n.useRef)(),Ve=(0,n.useRef)(),[qe,ze]=(0,n.useState)({}),[Ue,Ye]=(0,n.useState)(!1),Ge=(0,n.useRef)(),Xe=(0,n.useRef)(""),Qe=()=>{re||("liveSearch"===h||x||Ye(!1),"common"===h&&Ge.current?Ge.current.value=x&&Ee?.[M]||"":"liveSearch"===h?Ie(Ge.current?.value):"tags"===h&&lt(Ge.current?.value),"filled"===b&&Ke.current&&(Ke.current.style.backgroundColor="#f0f0f0"),ve?(m?et(Te):"common"===h?et(Ee?.[H]||Ee?.[M]):"liveSearch"===h&&et(Ee?.[H]||Ee?.[M]||Ge.current.value),ye(!0),setTimeout((()=>{ye(!1),ge((e=>!e))}),100),je(!1)):ge(!1),Be&&Oe(!1))},Ze=e=>{fe&&fe(te,e)},et=e=>{pe&&pe(te,e)},tt=()=>{const e=a(Ke.current,0,0),t=window.innerHeight;if(!Ke.current)return;t-Ke.current.getBoundingClientRect().bottom<Ve.current?.clientHeight&&(e.y=e.y-Ve.current?.clientHeight-e.height),ze(e)},lt=e=>{const t=[...Te||[]];if(e){if(t.find((t=>"string"==typeof t?t===e:t[H]===e)))return;t.push(e),We(t),Ge.current.value=""}et(t),fe&&fe(te,t),Xe.current=""},nt=(e,t)=>{t?.stopPropagation();let l=[...Te];if(m||"tags"===h){Te.findIndex((t=>t[H]===e[H]))>-1?(l=l.filter((t=>t[H]!==e[H])),We(l)):(l.push(e),We(l)),Ge.current&&(Ge.current.value="")}else Ie(e),De(e),"liveSearch"===h&&(Ge.current.value=e[M]),Qe();const n=m||"tags"===h?l:"obj"===P||$?e:e[H];ue&&ue(n),st(!1),de&&de(te,n),Ze&&Ze(n),st(!1),et(e)},ot=()=>Ee?.[H]||0===Ee?.[H]||!1===Ee?.[H]?("obj"===P?(de&&de(te,Ee),Ze&&Ze(Ee)):(de&&de(te,Ee[H]||Ee[M]),Ze&&Ze(Ee[H]||Ee[M])),Ee[H]||Ee[M]):Ee,[at,st]=(0,n.useState)(!1),rt=()=>!Z||(Ee?(st(!1),!0):(st(!0),!1)),it=()=>{m?We([]):(Ie(""),De(""))},ct=()=>re?"#eee":"filled"===b||ie?"transparent":p||"transparent",ut=(e,t)=>m||"tags"===h?Te?.find((t=>t[H]===e[H]))?F?.[t]:"font"===t?"#000":"":Ee?.[H]===e[H]?F?.[t]:"font"===t?"#000":"";(0,n.useImperativeHandle)(t,(()=>({validate:rt,clear:it,getValue:ot})));const dt=`adou-select-wrapper ${se||""}`.trim(),ft=e=>{x&&Ge.current&&!m?(Ye(!0),Ge.current?.focus(),(0,c.A)(Ee)?ge(!0):("common"===h&&(Ge.current.value="object"==typeof Ee?Ee[M]:Ee),Ge.current?.select())):m||"tags"===h?Ye(!0):"liveSearch"===h&&(Ye(!0),Ee&&!(0,c.A)(Ee)&&(Ge.current.value=Ee?.[M]||Ee)),setTimeout((()=>{tt()}),10)},pt=((0,i.A)((e=>{me&&me(e)}),300),e=>{e.stopPropagation();const t=e.target.value;if("tags"!==h&&ge(!0),"liveSearch"===h&&Ze(t),me)me&&me(t);else{const e=Ae.filter((e=>xe?xe(t,e,M,H):String(e[M]).toLowerCase().includes(t.toLowerCase())));ke(e)}"tags"===h&&(Xe.current=t)});return(0,n.useEffect)((()=>{if(ne)if(st(!1),Ce(!0),$||x||"liveSearch"===h)if(m)We(ne);else if("object"!=typeof ne){let e=oe.find((e=>e?.[H]===ne));e||(e={[H]:ne,[M]:ne}),Ie(e),De(e)}else"object"==typeof ne&&(Ie(ne),De(ne));else if(m){const e=oe.filter((e=>Array.isArray(ne)?ne.some((t=>{const l="object"==typeof t?t[H]:t;return e[H]===l})):e[H]===ne));We(e)}else if("tags"===h)We(ne?Array.isArray(ne)?ne.map((e=>"object"==typeof e?e:{[H]:e,[M]:e})):"object"==typeof ne?[ne]:[{[H]:ne,[M]:ne}]:[]);else if("object"==typeof ne){const e=oe.find((e=>e?.[H]===ne?.[H]));e?(Ie(e),De(e)):Ie({})}else if(ne||0===ne||!1===ne){const e=oe.find((e=>e[H]===ne));Ie(e)}else Ie(Re);else Ie(""),De(""),We([]);setTimeout((()=>{(()=>{const e=r(Ke.current);if(!e)return;const t=document.querySelector(".adou-select-clear-icon-box")?.clientWidth,l=document.querySelector(".adou-select-icon-box")?.clientWidth;He(e-(t||0)-(l||0)-8+"px")})()}),100)}),[ne,oe]),(0,n.useEffect)((()=>{if(ee){if(oe){const e=[...oe];ke(e),Le(e)}}else ke(oe),Le(oe)}),[oe]),(0,n.useEffect)((()=>{Fe(34*Ne.length||100),setTimeout((()=>{tt()}),0)}),[Ne]),(0,n.useEffect)((()=>{ve||$e(-1)}),[ve]),(0,n.useEffect)((()=>{Ge.current&&(Ue||x||"liveSearch"===h)&&Ee?Ge.current.value="object"==typeof Ee?Ee?.[H]?Ee[M]:"":Ee:Ge.current&&(Ge.current.value="")}),[Ee]),s([Ke,Ve,Ge],Qe,Ve.current&&Ke.current&&ve),(0,u.jsxs)("div",{title:f||Y,onFocus:e=>{re||(e.stopPropagation(),"filled"===b&&Ke.current&&!re&&(Ke.current.style.backgroundColor=""),Oe(!0),_&&(tt(),Qe()))},onKeyDown:e=>{if("Tab"!==e.key){if(ve)if("ArrowUp"===e.key)e.preventDefault(),$e((e=>e<=0?Ne.length-1:e-1));else if("ArrowDown"===e.key)e.preventDefault(),$e((e=>e>=Ne.length-1?0:e+1));else if("Enter"===e.key){if(Qe(),-1==Pe)return;e.preventDefault(),nt(Ne[Pe])}}else ve&&Qe()},tabIndex:0,ref:Je,className:`${dt} `,style:{...L,...S?{width:S}:{flex:1}},children:[(0,u.jsx)("div",{className:"adou-select-form-content",children:(0,u.jsxs)("div",{ref:Ke,onMouseEnter:()=>{je(!0)},onMouseLeave:()=>{je(!1)},onClick:e=>{Ge.current&&!Ge.current.value&&ke(Ae),e.stopPropagation(),x||"liveSearch"===h||setTimeout((()=>{tt()}),10),re||x||ge(!0)},className:`adou-select d-flex align-items-center ${W||""} ${Be?"adou-form-control-focus":""}`,style:{textAlign:"left",background:re?"#eee":ie?"transparent":p||("filled"===b?"#f0f0f0":""),flex:1,minHeight:"lg"===N?"48px":"sm"===N?"33.6px":"41.6px",border:"borderless"===b?"none":"",cursor:re?"not-allowed":"pointer",...E},children:[v&&(0,u.jsx)("div",{className:"prefix me-2",children:v}),m||"tags"===h?(0,u.jsxs)("div",{className:"adou-select-value-list d-flex flex-wrap align-items-center flex-fill",children:[Te?.map(((e,t)=>(0,u.jsxs)("div",{style:{backgroundColor:"rgb(0 0 0 / 6%)"},className:"adou-select-value-list-item d-flex px-2 my-1 rounded-1 me-1",children:[(0,u.jsx)("span",{className:"adou-select-value-list-item-text me-1",children:"object"==typeof e?e[M]:e}),!re&&(0,u.jsx)("span",{className:"adou-select-value-list-item-close",onClick:e=>((e,t,l)=>{e.stopPropagation();const n=[...Te];n.splice(l,1),Ze(n),et(n),We(n)})(e,0,t),children:(0,u.jsx)(d,{})})]},t))),(x||xe||"tags"===h)&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",children:(0,u.jsx)("input",{onKeyDown:e=>{const t=e.currentTarget.value;"Enter"!==e.key||ve||t&&(lt(t),e.preventDefault())},onBlur:e=>{ve||lt(Xe.current)},placeholder:Ee?.[H]?"":ae,onFocus:ft,ref:Ge,onChange:pt,disabled:re,type:"text",className:"adou-select-input","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:ct(),width:"100%",cursor:re?"not-allowed":""}})})]}):Ee?.[H]||0===Ee?.[H]||!1===Ee?.[H]?w?Ue&&!m||x||"liveSearch"===h?"":(0,u.jsx)("div",{title:Ee[M]||Ee,className:"adou-select-value "+(y?"ellipsis-1":""),style:{maxWidth:Me,...x||xe?{}:{flex:1}},children:Ee[M]}):(0,u.jsx)("div",{className:"adou-select-value  "+(y?"ellipsis-1":""),style:{flex:1},children:Ee[M]}):"liveSearch"!==h&&!x&&!xe&&(0,u.jsx)("div",{className:"select-value-empty-placeholder flex-fill"}),(x||xe||"liveSearch"===h)&&!m&&"tags"!==h&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",title:Ee?.[M]||Ee,children:(0,u.jsx)("input",{placeholder:Ee?.[H]?"":ae,onFocus:ft,ref:Ge,onChange:pt,disabled:re,type:"text",className:"adou-select-input ellipsis-1","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:ct(),width:"100%",cursor:re?"not-allowed":""}})}),g&&(0,u.jsx)("div",{className:"suffix ms-2",children:g}),k&&we&&(m?Te.length:Ee?.[H||M])?(0,u.jsx)("div",{className:"adou-select-clear-icon-box fade-enter d-flex",children:(0,u.jsx)("i",{className:"adou-select-clear-icon fa-regular fa-circle-xmark text-secondary",style:{fontSize:"12px",cursor:"pointer"},onClick:e=>{e.stopPropagation(),it(),st(!0),Ze?.(m?[]:"str"===P?"":{}),et("")}})}):(0,u.jsx)("div",{className:"adou-select-common-sufiix-content text-secondary",style:{textAlign:"right",whiteSpace:"nowrap"},children:C}),V&&(0,u.jsx)("i",{onClick:()=>{},className:`${V} adou-select-common-suffix-icon`}),(0,u.jsx)("div",{className:"adou-select-icon-box ms-2 "+(x||Ee?.[H]||C?"":"text-end"),children:l&&(0,u.jsx)("i",{style:{color:Q,right:A?"0px":"14px"},className:"adou-select-icon fa-solid fa-caret-right "+(ve?"rotate-up":"rotate-down")})})]})}),o.createPortal((0,u.jsx)("div",{style:{position:"absolute",top:qe.y+qe.height+"px",left:qe.x+"px",...ve?{maxHeight:_e>parseInt(ce)?ce:_e+"px"}:{},...be?{opacity:0,transform:"scaleY(0)"}:{}},ref:Ve,className:`adou-select-option-content ${ve?"adou-select-option-content-open":""} ${be?"aduo-select-option-content-closing":""}`,children:ve&&(0,u.jsx)("div",{className:"adou-select-option-box",children:Ne.length>0?Ne.map(((e,t)=>(0,u.jsx)("div",{onClick:t=>nt(e,t),style:{color:ut(e,"font"),backgroundColor:ut(e,"bgc")},className:`adou-select-option ${Ee?.[H]===e[H]?"adou-select-option-active":""} ${Pe===t?"focused":""}`,children:he?he(e,M,H):e.render?e.render(e,M,H):e[M]},e[H]))):(0,u.jsx)("div",{className:"none-match ps-2",children:"No content"})})}),document.body)]})}));f.displayName="Select";const p=f},2030:(e,t,l)=>{l.r(t),l.d(t,{default:()=>s});l(6540);var n=l(8407),o=l(8478),a=l(4848);const s=()=>{const e=[{value:"john_smith",label:"John Smith"},{value:"emma_watson",label:"Emma Watson"},{value:"william_jones",label:"William Jones"},{value:"olivia_brown",label:"Olivia Brown"},{value:"james_davis",label:"James Davis"},{value:"ava_wilson",label:"Ava Wilson"},{value:"joseph_turner",label:"Joseph Turner"}];return(0,a.jsx)("div",{className:"live-search-wrapper",children:(0,a.jsx)(o.A,{fallback:(0,a.jsx)("div",{children:"Loading..."}),children:()=>(0,a.jsx)(n.A,{mode:"liveSearch",placeholder:"\u8bf7\u8f93\u5165",options:e})})})}}}]);