"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[9723],{8478:(e,t,l)=>{l.d(t,{A:()=>o});l(6540);var a=l(2303),n=l(4848);function o(e){let{children:t,fallback:l}=e;return(0,a.A)()?(0,n.jsx)(n.Fragment,{children:t?.()}):l??null}},4207:(e,t,l)=>{l.d(t,{A:()=>n});var a=l(6540);const n=function(e,t,l){void 0===l&&(l=[]);const n=(0,a.useRef)(0);return(0,a.useCallback)((function(){const l=Date.now();(!n.current||l-n.current>=t)&&(e(...arguments),n.current=l)}),l)}},4277:(e,t,l)=>{l.d(t,{A:()=>a});const a=function(e){return 0===Object.keys(e??{}).length}},8407:(e,t,l)=>{l.d(t,{A:()=>p});var a=l(6540),n=l(961);const o=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=0),t=parseInt(t)?parseInt(t):0,l=parseInt(l)?parseInt(l):0;const a=e.getBoundingClientRect(),n=document.body,o=document.documentElement,r=window.pageYOffset||o.scrollTop||n.scrollTop,s=window.pageXOffset||o.scrollLeft||n.scrollLeft,i=o.clientTop||n.clientTop||0,c=o.clientLeft||n.clientLeft||0,u={};return u.y=a.top+r-i+l,u.x=a.left+s-c+t,u.width=a.width,u.height=a.height,u},r=function(e,t,l){void 0===l&&(l=!0),(0,a.useEffect)((()=>{const a=a=>{l&&e.length&&!(t=>e.some((e=>e.current?.contains(t.target))))(a)&&t&&t()};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}}),[e,t,l])};const s=function(e){const t=window.getComputedStyle(e);return e.offsetWidth-(parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth))-(parseInt(t.paddingLeft)+parseInt(t.paddingRight))};var i=l(4207),c=l(4277),u=l(4848);const d=(0,a.memo)((e=>{const[t,l]=a.useState(!1);return(0,u.jsx)("div",{children:(0,u.jsx)("svg",{style:{width:"18px",height:"18px",fill:t?"red":"#848484"},className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3182",width:"200",height:"200",onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:(0,u.jsx)("path",{d:"M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 750.4a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z",fill:t?"red":"#848484","p-id":"3183"})})})})),f=a.forwardRef(((e,t)=>{const{showIcon:l=!0,title:f,backgroundColor:p,mode:h="common",multiple:m,showSearch:v,prefix:x,suffix:b,varient:g="outlined",contentWrap:y=!0,ellipsis:w=!0,compact:j,wrapperWidth:S,commonSuffixContent:C,size:k,clearable:N=!1,isAddon:_,wrapperStyle:A,formStyle:L,errorPaddingLeft:E,suffixContentExternalCls:I,selectContentExternalCls:T,labelMinWidth:W,noWrap:D=!0,shouldFocus:R=!1,activeColor:M={font:"#fff",bgc:"#2783d8"},returnType:P="obj",showDefaultValue:F=!1,labelKey:H="label",valueKey:$="value",suffixContent:B,showLabel:O=!0,suffixContentType:K,inline:J,commonSuffixIcon:V,isFormItem:q,errMsg:z,labelWidth:U,label:G,labelPosition:Y="center",inputGroup:X=!1,labelColor:Q,required:Z=!1,showEmpty:ee=!0,name:te,width:le,defaultValue:ae,options:ne,placeholder:oe,externalClassName:re,disabled:se,transparent:ie,optionContentMaxHeight:ce="200px",onChange:ue,onFormDataChange:de,onFieldChange:fe,onValidateField:pe,optionRender:he,onInputChange:me,filterOption:ve}=e,[xe,be]=(0,a.useState)(!1),[ge,ye]=(0,a.useState)(!1),[we,je]=(0,a.useState)(!1),[Se,Ce]=(0,a.useState)(!1),[ke,Ne]=(0,a.useState)(ne||[]),[_e,Ae]=(0,a.useState)(ne||[]),[Le,Ee]=(0,a.useState)({}),[Ie,Te]=(0,a.useState)([]),[We,De]=(0,a.useState)(ae||null),[Re,Me]=(0,a.useState)(0),[Pe,Fe]=(0,a.useState)(-1),[He,$e]=(0,a.useState)(""),[Be,Oe]=(0,a.useState)(!1),Ke=(0,a.useRef)(null),Je=(0,a.useRef)(),Ve=(0,a.useRef)(),[qe,ze]=(0,a.useState)({}),[Ue,Ge]=(0,a.useState)(!1),Ye=(0,a.useRef)(),Xe=(0,a.useRef)(""),Qe=()=>{se||("liveSearch"===h||v||Ge(!1),"common"===h&&Ye.current?Ye.current.value=v&&Le?.[H]||"":"liveSearch"===h?Ee(Ye.current?.value):"tags"===h&&lt(Ye.current?.value),"filled"===g&&Je.current&&(Je.current.style.backgroundColor="#f0f0f0"),xe?(m?et(Ie):"common"===h?et(Le?.[$]||Le?.[H]):"liveSearch"===h&&et(Le?.[$]||Le?.[H]||Ye.current.value),ye(!0),setTimeout((()=>{ye(!1),be((e=>!e))}),100),je(!1)):be(!1),Be&&Oe(!1))},Ze=e=>{fe&&fe(te,e)},et=e=>{pe&&pe(te,e)},tt=()=>{const e=o(Je.current,0,0),t=window.innerHeight;if(!Je.current)return;t-Je.current.getBoundingClientRect().bottom<Ve.current?.clientHeight&&(e.y=e.y-Ve.current?.clientHeight-e.height),ze(e)},lt=e=>{const t=[...Ie||[]];if(e){if(t.find((t=>"string"==typeof t?t===e:t[$]===e)))return;t.push(e),Te(t),Ye.current.value=""}et(t),fe&&fe(te,t),Xe.current=""},at=(e,t)=>{t?.stopPropagation();let l=[...Ie];if(m||"tags"===h){Ie.findIndex((t=>t[$]===e[$]))>-1?(l=l.filter((t=>t[$]!==e[$])),Te(l)):(l.push(e),Te(l)),Ye.current&&(Ye.current.value="")}else Ee(e),De(e),"liveSearch"===h&&(Ye.current.value=e[H]),Qe();const a=m||"tags"===h?l:"obj"===P||F?e:e[$];ue&&ue(a),rt(!1),de&&de(te,a),Ze&&Ze(a),rt(!1),et(e)},nt=()=>Le?.[$]||0===Le?.[$]||!1===Le?.[$]?("obj"===P?(de&&de(te,Le),Ze&&Ze(Le)):(de&&de(te,Le[$]||Le[H]),Ze&&Ze(Le[$]||Le[H])),Le[$]||Le[H]):Le,[ot,rt]=(0,a.useState)(!1),st=()=>!Z||(Le?(rt(!1),!0):(rt(!0),!1)),it=()=>{m?Te([]):(Ee(""),De(""))},ct=()=>se?"#eee":"filled"===g||ie?"transparent":p||"transparent",ut=(e,t)=>m||"tags"===h?Ie?.find((t=>t[$]===e[$]))?M?.[t]:"font"===t?"#000":"":Le?.[$]===e[$]?M?.[t]:"font"===t?"#000":"";(0,a.useImperativeHandle)(t,(()=>({validate:st,clear:it,getValue:nt})));const dt=`adou-select-wrapper ${re||""}`.trim(),ft=e=>{v&&Ye.current&&!m?(Ge(!0),Ye.current?.focus(),(0,c.A)(Le)?be(!0):("common"===h&&(Ye.current.value="object"==typeof Le?Le[H]:Le),Ye.current?.select())):m||"tags"===h?Ge(!0):"liveSearch"===h&&(Ge(!0),Le&&!(0,c.A)(Le)&&(Ye.current.value=Le?.[H]||Le)),setTimeout((()=>{tt()}),10)},pt=((0,i.A)((e=>{me&&me(e)}),300),e=>{e.stopPropagation();const t=e.target.value;if("tags"!==h&&be(!0),"liveSearch"===h&&Ze(t),me)me&&me(t);else{const e=_e.filter((e=>ve?ve(t,e,H,$):String(e[H]).toLowerCase().includes(t.toLowerCase())));Ne(e)}"tags"===h&&(Xe.current=t)});return(0,a.useEffect)((()=>{if(ae)if(rt(!1),Ce(!0),F||v||"liveSearch"===h)if(m)Te(ae);else if("object"!=typeof ae){let e=ne.find((e=>e?.[$]===ae));e||(e={[$]:ae,[H]:ae}),Ee(e),De(e)}else"object"==typeof ae&&(Ee(ae),De(ae));else if(m){const e=ne.filter((e=>Array.isArray(ae)?ae.some((t=>{const l="object"==typeof t?t[$]:t;return e[$]===l})):e[$]===ae));Te(e)}else if("tags"===h)Te(ae?Array.isArray(ae)?ae.map((e=>"object"==typeof e?e:{[$]:e,[H]:e})):"object"==typeof ae?[ae]:[{[$]:ae,[H]:ae}]:[]);else if("object"==typeof ae){const e=ne.find((e=>e?.[$]===ae?.[$]));e?(Ee(e),De(e)):Ee({})}else if(ae||0===ae||!1===ae){const e=ne.find((e=>e[$]===ae));Ee(e)}else Ee(We);else Ee(""),De(""),Te([]);setTimeout((()=>{(()=>{const e=s(Je.current);if(!e)return;const t=document.querySelector(".adou-select-clear-icon-box")?.clientWidth,l=document.querySelector(".adou-select-icon-box")?.clientWidth;$e(e-(t||0)-(l||0)-8+"px")})()}),100)}),[ae,ne]),(0,a.useEffect)((()=>{if(ee){if(ne){const e=[...ne];Ne(e),Ae(e)}}else Ne(ne),Ae(ne)}),[ne]),(0,a.useEffect)((()=>{Me(34*ke.length||100),setTimeout((()=>{tt()}),0)}),[ke]),(0,a.useEffect)((()=>{xe||Fe(-1)}),[xe]),(0,a.useEffect)((()=>{Ye.current&&(Ue||v||"liveSearch"===h)&&Le?Ye.current.value="object"==typeof Le?Le?.[$]?Le[H]:"":Le:Ye.current&&(Ye.current.value="")}),[Le]),r([Je,Ve,Ye],Qe,Ve.current&&Je.current&&xe),(0,u.jsxs)("div",{title:f||G,onFocus:e=>{se||(e.stopPropagation(),"filled"===g&&Je.current&&!se&&(Je.current.style.backgroundColor=""),Oe(!0),R&&(tt(),Qe()))},onKeyDown:e=>{if("Tab"!==e.key){if(xe)if("ArrowUp"===e.key)e.preventDefault(),Fe((e=>e<=0?ke.length-1:e-1));else if("ArrowDown"===e.key)e.preventDefault(),Fe((e=>e>=ke.length-1?0:e+1));else if("Enter"===e.key){if(Qe(),-1==Pe)return;e.preventDefault(),at(ke[Pe])}}else xe&&Qe()},tabIndex:0,ref:Ke,className:`${dt} `,style:{...A,...S?{width:S}:{flex:1}},children:[(0,u.jsx)("div",{className:"adou-select-form-content",children:(0,u.jsxs)("div",{ref:Je,onMouseEnter:()=>{je(!0)},onMouseLeave:()=>{je(!1)},onClick:e=>{Ye.current&&!Ye.current.value&&Ne(_e),e.stopPropagation(),v||"liveSearch"===h||setTimeout((()=>{tt()}),10),se||v||be(!0)},className:`adou-select d-flex align-items-center ${T||""} ${Be?"adou-form-control-focus":""}`,style:{textAlign:"left",background:se?"#eee":ie?"transparent":p||("filled"===g?"#f0f0f0":""),flex:1,minHeight:"lg"===k?"48px":"sm"===k?"33.6px":"41.6px",border:"borderless"===g?"none":"",cursor:se?"not-allowed":"pointer",...L},children:[x&&(0,u.jsx)("div",{className:"prefix me-2",children:x}),m||"tags"===h?(0,u.jsxs)("div",{className:"adou-select-value-list d-flex flex-wrap align-items-center flex-fill",children:[Ie?.map(((e,t)=>(0,u.jsxs)("div",{style:{backgroundColor:"rgb(0 0 0 / 6%)"},className:"adou-select-value-list-item d-flex px-2 my-1 rounded-1 me-1",children:[(0,u.jsx)("span",{className:"adou-select-value-list-item-text me-1",children:"object"==typeof e?e[H]:e}),!se&&(0,u.jsx)("span",{className:"adou-select-value-list-item-close",onClick:e=>((e,t,l)=>{e.stopPropagation();const a=[...Ie];a.splice(l,1),Ze(a),et(a),Te(a)})(e,0,t),children:(0,u.jsx)(d,{})})]},t))),(v||ve||"tags"===h)&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",children:(0,u.jsx)("input",{onKeyDown:e=>{const t=e.currentTarget.value;"Enter"!==e.key||xe||t&&(lt(t),e.preventDefault())},onBlur:e=>{xe||lt(Xe.current)},placeholder:Le?.[$]?"":oe,onFocus:ft,ref:Ye,onChange:pt,disabled:se,type:"text",className:"adou-select-input","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:ct(),width:"100%",cursor:se?"not-allowed":""}})})]}):Le?.[$]||0===Le?.[$]||!1===Le?.[$]?w?Ue&&!m||v||"liveSearch"===h?"":(0,u.jsx)("div",{title:Le[H]||Le,className:"adou-select-value "+(y?"ellipsis-1":""),style:{maxWidth:He,...v||ve?{}:{flex:1}},children:Le[H]}):(0,u.jsx)("div",{className:"adou-select-value  "+(y?"ellipsis-1":""),style:{flex:1},children:Le[H]}):"liveSearch"!==h&&!v&&!ve&&(0,u.jsx)("div",{className:"select-value-empty-placeholder flex-fill"}),(v||ve||"liveSearch"===h)&&!m&&"tags"!==h&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",title:Le?.[H]||Le,children:(0,u.jsx)("input",{placeholder:Le?.[$]?"":oe,onFocus:ft,ref:Ye,onChange:pt,disabled:se,type:"text",className:"adou-select-input ellipsis-1","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:ct(),width:"100%",cursor:se?"not-allowed":""}})}),b&&(0,u.jsx)("div",{className:"suffix ms-2",children:b}),N&&we&&(m?Ie.length:Le?.[$||H])?(0,u.jsx)("div",{className:"adou-select-clear-icon-box fade-enter d-flex",children:(0,u.jsx)("i",{className:"adou-select-clear-icon fa-regular fa-circle-xmark text-secondary",style:{fontSize:"12px",cursor:"pointer"},onClick:e=>{e.stopPropagation(),it(),rt(!0),Ze?.(m?[]:"str"===P?"":{}),et("")}})}):(0,u.jsx)("div",{className:"adou-select-common-sufiix-content text-secondary",style:{textAlign:"right",whiteSpace:"nowrap"},children:C}),V&&(0,u.jsx)("i",{onClick:()=>{},className:`${V} adou-select-common-suffix-icon`}),(0,u.jsx)("div",{className:"adou-select-icon-box ms-2 "+(v||Le?.[$]||C?"":"text-end"),children:l&&(0,u.jsx)("i",{style:{color:Q,right:_?"0px":"14px"},className:"adou-select-icon fa-solid fa-caret-right "+(xe?"rotate-up":"rotate-down")})})]})}),n.createPortal((0,u.jsx)("div",{style:{position:"absolute",top:qe.y+qe.height+"px",left:qe.x+"px",...xe?{maxHeight:Re>parseInt(ce)?ce:Re+"px"}:{},...ge?{opacity:0,transform:"scaleY(0)"}:{}},ref:Ve,className:`adou-select-option-content ${xe?"adou-select-option-content-open":""} ${ge?"aduo-select-option-content-closing":""}`,children:xe&&(0,u.jsx)("div",{className:"adou-select-option-box",children:ke.length>0?ke.map(((e,t)=>(0,u.jsx)("div",{onClick:t=>at(e,t),style:{color:ut(e,"font"),backgroundColor:ut(e,"bgc")},className:`adou-select-option ${Le?.[$]===e[$]?"adou-select-option-active":""} ${Pe===t?"focused":""}`,children:he?he(e,H,$):e.render?e.render(e,H,$):e[H]},e[$]))):(0,u.jsx)("div",{className:"none-match ps-2",children:"No content"})})}),document.body)]})}));f.displayName="Select";const p=f},1037:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});l(6540);var a=l(8407),n=l(8478),o=l(4848);const r=()=>{const e=[{value:"john_smith",label:"John Smith"},{value:"emma_watson",label:"Emma Watson"},{value:"william_jones",label:"William Jones"},{value:"olivia_brown",label:"Olivia Brown"},{value:"james_davis",label:"James Davis"},{value:"ava_wilson",label:"Ava Wilson"},{value:"henry_taylor",label:"Henry Taylor"},{value:"sophia_miller",label:"Sophia Miller"},{value:"benjamin_white",label:"Benjamin White"},{value:"isabella_green",label:"Isabella Green"},{value:"daniel_king",label:"Daniel King"},{value:"mia_lee",label:"Mia Lee"},{value:"alexander_clark",label:"Alexander Clark"},{value:"charlotte_ross",label:"Charlotte Ross"},{value:"matthew_hall",label:"Matthew Hall"},{value:"amelia_baker",label:"Amelia Baker"},{value:"joseph_turner",label:"Joseph Turner"},{value:"evelyn_cook",label:"Evelyn Cook"},{value:"david_porter",label:"David Porter"},{value:"scarlett_moore",label:"Scarlett Moore"}];return(0,o.jsx)("div",{className:"filter-option-wrapper",children:(0,o.jsx)(n.A,{fallback:(0,o.jsx)("div",{children:"Loading..."}),children:()=>(0,o.jsx)(a.A,{filterOption:(e,t)=>t.label.toLowerCase().includes("jo"),placeholder:"\u8bf7\u8f93\u5165",options:e})})})}}}]);