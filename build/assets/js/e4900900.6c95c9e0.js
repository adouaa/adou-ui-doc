"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[4286],{8478:(e,t,l)=>{l.d(t,{A:()=>s});l(6540);var o=l(2303),n=l(4848);function s(e){let{children:t,fallback:l}=e;return(0,o.A)()?(0,n.jsx)(n.Fragment,{children:t?.()}):l??null}},4207:(e,t,l)=>{l.d(t,{A:()=>n});var o=l(6540);const n=function(e,t,l){void 0===l&&(l=[]);const n=(0,o.useRef)(0);return(0,o.useCallback)((function(){const l=Date.now();(!n.current||l-n.current>=t)&&(e(...arguments),n.current=l)}),l)}},4277:(e,t,l)=>{l.d(t,{A:()=>o});const o=function(e){return 0===Object.keys(e??{}).length}},8407:(e,t,l)=>{l.d(t,{A:()=>p});var o=l(6540),n=l(961);const s=function(e,t,l){void 0===t&&(t=0),void 0===l&&(l=0),t=parseInt(t)?parseInt(t):0,l=parseInt(l)?parseInt(l):0;const o=e.getBoundingClientRect(),n=document.body,s=document.documentElement,a=window.pageYOffset||s.scrollTop||n.scrollTop,r=window.pageXOffset||s.scrollLeft||n.scrollLeft,i=s.clientTop||n.clientTop||0,c=s.clientLeft||n.clientLeft||0,u={};return u.y=o.top+a-i+l,u.x=o.left+r-c+t,u.width=o.width,u.height=o.height,u},a=function(e,t,l){void 0===l&&(l=!0),(0,o.useEffect)((()=>{const o=o=>{l&&e.length&&!(t=>e.some((e=>e.current?.contains(t.target))))(o)&&t&&t()};return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}}),[e,t,l])};const r=function(e){const t=window.getComputedStyle(e);return e.offsetWidth-(parseInt(t.borderLeftWidth)+parseInt(t.borderRightWidth))-(parseInt(t.paddingLeft)+parseInt(t.paddingRight))};var i=l(4207),c=l(4277),u=l(4848);const d=(0,o.memo)((e=>{const[t,l]=o.useState(!1);return(0,u.jsx)("div",{children:(0,u.jsx)("svg",{style:{width:"18px",height:"18px",fill:t?"red":"#848484"},className:"icon",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"3182",width:"200",height:"200",onMouseEnter:()=>{l(!0)},onMouseLeave:()=>{l(!1)},children:(0,u.jsx)("path",{d:"M507.168 473.232L716.48 263.936a16 16 0 0 1 22.624 0l11.312 11.312a16 16 0 0 1 0 22.624L541.12 507.168 750.4 750.4a16 16 0 0 1 0 22.624l-11.312 11.312a16 16 0 0 1-22.624 0L507.168 541.12 297.872 750.4a16 16 0 0 1-22.624 0l-11.312-11.312a16 16 0 0 1 0-22.624l209.296-209.312-209.296-209.296a16 16 0 0 1 0-22.624l11.312-11.312a16 16 0 0 1 22.624 0l209.296 209.296z",fill:t?"red":"#848484","p-id":"3183"})})})})),f=o.forwardRef(((e,t)=>{const{backgroundColor:l,mode:f="common",multiple:p,showSearch:m,prefix:h,suffix:x,varient:v="outlined",contentWrap:g=!0,ellipsis:b=!0,compact:y,wrapperWidth:w,commonSuffixContent:j,size:S,clearable:C=!1,isAddon:N,wrapperStyle:k,formStyle:A,errorPaddingLeft:L,suffixContentExternalCls:E,selectContentExternalCls:I,labelMinWidth:W,noWrap:T=!0,shouldFocus:R=!1,activeColor:_={font:"#fff",bgc:"#2783d8"},returnType:P="obj",showDefaultValue:D=!1,labelKey:F="label",valueKey:$="value",suffixContent:M,showLabel:H=!0,suffixContentType:B,inline:O,commonSuffixIcon:V,isFormItem:J,errMsg:q,labelWidth:z,label:K,labelPosition:U="center",inputGroup:Y=!1,labelColor:G,required:X=!1,showEmpty:Q=!0,name:Z,width:ee,defaultValue:te,options:le,placeholder:oe,externalClassName:ne,disabled:se,transparent:ae,optionContentMaxHeight:re="200px",onChange:ie,onFormDataChange:ce,onFieldChange:ue,onValidateField:de,optionRender:fe,onInputChange:pe,filterOption:me}=e,[he,xe]=(0,o.useState)(!1),[ve,ge]=(0,o.useState)(!1),[be,ye]=(0,o.useState)(!1),[we,je]=(0,o.useState)(!1),[Se,Ce]=(0,o.useState)(le||[]),[Ne,ke]=(0,o.useState)(le||[]),[Ae,Le]=(0,o.useState)({}),[Ee,Ie]=(0,o.useState)([]),[We,Te]=(0,o.useState)(te||null),[Re,_e]=(0,o.useState)(0),[Pe,De]=(0,o.useState)(-1),[Fe,$e]=(0,o.useState)(""),[Me,He]=(0,o.useState)(!1),Be=(0,o.useRef)(null),Oe=(0,o.useRef)(),Ve=(0,o.useRef)(),[Je,qe]=(0,o.useState)({}),[ze,Ke]=(0,o.useState)(!1),Ue=(0,o.useRef)(),Ye=()=>{if(!se){if("liveSearch"!==f&&Ke(!1),"common"===f)Ue.current&&(Ue.current.value="");else if("liveSearch"===f)Le(Ue.current?.value);else if("tags"===f){const e=Ue.current?.value,t=[...Ee||[]];if(e){if(t.find((t=>t===e)))return;console.log("5: ",5),t.push(e),Ie(t),Ue.current.value=""}Xe(t),ue&&ue(Z,t)}"filled"===v&&Oe.current&&(Oe.current.style.backgroundColor="#f0f0f0"),he?(p?Xe(Ee):"common"===f?Xe(Ae?.[$]||Ae?.[F]):"liveSearch"===f&&Xe(Ae?.[$]||Ae?.[F]||Ue.current.value),ge(!0),setTimeout((()=>{ge(!1),xe((e=>!e))}),100),ye(!1)):xe(!1),Me&&He(!1)}},Ge=e=>{ue&&ue(Z,e)},Xe=e=>{de&&de(Z,e)},Qe=()=>{const e=s(Oe.current,0,0);window.innerHeight-Oe.current.getBoundingClientRect().bottom<Ve.current?.clientHeight&&(e.y=e.y-Ve.current?.clientHeight-e.height),qe(e)},Ze=(e,t)=>{console.log("item: ",e),t?.stopPropagation();let l=[...Ee];if(p||"tags"===f){const t=Ee.findIndex((t=>t[$]===e[$]));console.log("index: ",t),t>-1?(l=l.filter((t=>t[$]!==e[$])),Ie(l)):(l.push(e),Ie(l)),Ue.current&&(Ue.current.value="")}else Le(e),Te(e),"liveSearch"===f&&(Ue.current.value=e[F]),Ye();const o=p||"tags"===f?l:"obj"===P||D?e:e[$];ie&&ie(o),lt(!1),ce&&ce(Z,o),Ge&&Ge(o),lt(!1),Xe(e)},et=()=>Ae?.[$]||0===Ae?.[$]||!1===Ae?.[$]?("obj"===P?(ce&&ce(Z,Ae),Ge&&Ge(Ae)):(ce&&ce(Z,Ae[$]||Ae[F]),Ge&&Ge(Ae[$]||Ae[F])),Ae[$]||Ae[F]):Ae,[tt,lt]=(0,o.useState)(!1),ot=()=>!X||(Ae?(lt(!1),!0):(lt(!0),!1)),nt=()=>{p?Ie([]):(Le(""),Te(""))},st=(e,t)=>p||"tags"===f?Ee?.find((t=>t[$]===e[$]))?_?.[t]:"font"===t?"#000":"":Ae?.[$]===e[$]?_?.[t]:"font"===t?"#000":"";(0,o.useImperativeHandle)(t,(()=>({validate:ot,clear:nt,getValue:et})));const at=`adou-select-wrapper ${ne||""}`.trim(),rt=e=>{m&&Ue.current&&!p?(Ke(!0),Ue.current?.focus(),(0,c.A)(Ae)?xe(!0):("common"===f&&(Ue.current.value=Ae[F]||Ae),Ue.current?.select())):p||"tags"===f?Ke(!0):"liveSearch"===f&&(Ke(!0),Ue.current.value=Ae?.[F]||Ae)},it=(0,i.A)((e=>{pe&&pe(e)}),1e3),ct=e=>{e.stopPropagation();const t=e.target.value;if("tags"!==f&&xe(!0),"liveSearch"===f&&Ge(t),pe)it(t);else{const e=Ne.filter((e=>me?me(t,e,F,$):e[F].toLowerCase().includes(t.toLowerCase())));Ce(e)}};return(0,o.useEffect)((()=>{if(te&&je(!0),D)if(p)Ie(te);else if("object"!=typeof te){const e={[$]:te,[F]:te};Le(e),Te(e)}else"object"==typeof te&&(Le(te),Te(te));else if(p){const e=le.filter((e=>Array.isArray(te)?te.some((t=>{const l="object"==typeof t?t[$]:t;return e[$]===l})):e[$]===te));Ie(e)}else if("tags"===f)te?(console.log("defaultValue: ",te),Ie(Array.isArray(te)?te.map((e=>"object"==typeof e?e:{[$]:e,[F]:e})):"object"==typeof te?[te]:[{[$]:te,[F]:te}])):Ie([]);else if("object"==typeof te){const e=le.find((e=>e?.[$]===te?.[$]));e?(Le(e),Te(e)):Le({})}else if(te||0===te||!1===te){const e=le.find((e=>e[$]===te));Le(e)}else Le(We);te&&lt(!1)}),[te,le]),(0,o.useEffect)((()=>{if(Q){const e=[...le];Ce(e),ke(e)}else Ce(le),ke(le)}),[le]),(0,o.useEffect)((()=>{_e(34*Se.length||100),setTimeout((()=>{Qe()}),0)}),[Se]),(0,o.useEffect)((()=>{he||De(-1)}),[he]),(0,o.useEffect)((()=>{setTimeout((()=>{(()=>{const e=r(Oe.current);if(!e)return;const t=document.querySelector(".adou-select-clear-icon-box")?.clientWidth,l=document.querySelector(".adou-select-icon-box")?.clientWidth;$e(e-(t||0)-(l||0)+"px")})()}),100)}),[te]),a([Oe,Ve,Ue],Ye,!0),(0,u.jsxs)("div",{onFocus:e=>{se||(e.stopPropagation(),"filled"===v&&Oe.current&&!se&&(Oe.current.style.backgroundColor=""),He(!0),R&&(Qe(),Ye()))},onKeyDown:e=>{if("Tab"!==e.key){if(he)if("ArrowUp"===e.key)e.preventDefault(),De((e=>e<=0?Se.length-1:e-1));else if("ArrowDown"===e.key)e.preventDefault(),De((e=>e>=Se.length-1?0:e+1));else if("Enter"===e.key){if(Ye(),-1==Pe)return;e.preventDefault(),Ze(Se[Pe])}}else he&&Ye()},tabIndex:0,ref:Be,className:`${at} `,style:{...k,...w?{width:w}:{flex:1}},children:[(0,u.jsx)("div",{className:"adou-select-form-content",children:(0,u.jsxs)("div",{ref:Oe,onMouseEnter:()=>{ye(!0)},onMouseLeave:()=>{ye(!1)},onClick:e=>{Ue.current&&!Ue.current.value&&Ce(Ne),e.stopPropagation(),setTimeout((()=>{Qe()}),10),se||m||xe(!0)},className:`adou-select d-flex align-items-center ${I||""} ${Me?"adou-form-control-focus":""}`,style:{textAlign:"left",background:l||(ae?"transparent":se?"#eee":"filled"===v?"#f0f0f0":""),flex:1,minHeight:"lg"===S?"48px":"sm"===S?"32px":"40px",border:"borderless"===v?"none":"",cursor:se?"not-allowed":"pointer",...A},children:[h&&(0,u.jsx)("div",{className:"prefix me-2",children:h}),p||"tags"===f?(0,u.jsxs)("div",{className:"adou-select-value-list d-flex flex-wrap align-items-center flex-fill",children:[Ee?.map(((e,t)=>(0,u.jsxs)("div",{style:{backgroundColor:"rgb(0 0 0 / 6%)"},className:"adou-select-value-list-item d-flex px-2 my-1 rounded-1 me-1",children:[(0,u.jsx)("span",{className:"adou-select-value-list-item-text me-1",children:"object"==typeof e?e[F]:e}),!se&&(0,u.jsx)("span",{className:"adou-select-value-list-item-close",onClick:e=>((e,t,l)=>{e.stopPropagation();const o=[...Ee];o.splice(l,1),Ge(o),Xe(o),Ie(o)})(e,0,t),children:(0,u.jsx)(d,{})})]},t))),(m||me||"tags"===f)&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",children:(0,u.jsx)("input",{onBlur:e=>{e.stopPropagation()},placeholder:Ae?.[$]?"":oe,onFocus:rt,ref:Ue,onChange:ct,disabled:se,type:"text",className:"adou-select-input","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:"filled"===v||ae?"transparent":"",cursor:se?"not-allowed":""}})})]}):Ae?.[$]||0===Ae?.[$]||!1===Ae?.[$]?b?!ze||p?(0,u.jsx)("div",{title:Ae[F],className:"adou-select-value "+(g?"ellipsis-1":""),style:{maxWidth:Fe,...m||me||"liveSearch"===f?{}:{flex:1}},children:Ae[F]}):"":(0,u.jsx)("div",{className:"adou-select-value  "+(g?"ellipsis-1":""),style:{...m?{flex:1}:{}},children:Ae[F]}):"liveSearch"!==f&&!m&&!me&&(0,u.jsx)("div",{className:"select-value-empty-placeholder flex-fill"}),(m||me||"liveSearch"===f)&&!p&&"tags"!==f&&(0,u.jsx)("div",{className:"adou-select-input-box flex-fill",children:(0,u.jsx)("input",{placeholder:Ae?.[$]?"":oe,onFocus:rt,ref:Ue,onChange:ct,disabled:se,type:"text",className:"adou-select-input","aria-label":"Username","aria-describedby":"basic-addon1",style:{backgroundColor:"filled"===v||ae?"transparent":"",cursor:se?"not-allowed":""}})}),x&&(0,u.jsx)("div",{className:"suffix ms-2",children:x}),C&&be&&(p?Ee.length:Ae?.[$||F])?(0,u.jsx)("div",{className:"adou-select-clear-icon-box fade-enter d-flex",children:(0,u.jsx)("i",{className:"adou-select-clear-icon fa-regular fa-circle-xmark text-secondary",style:{fontSize:"12px",cursor:"pointer"},onClick:e=>{e.stopPropagation(),nt(),lt(!0),Ge?.(p?[]:"str"===P?"":{}),Xe("")}})}):(0,u.jsx)("div",{className:"adou-select-common-sufiix-content text-secondary",style:{textAlign:"right"},children:j}),V&&(0,u.jsx)("i",{onClick:()=>{},className:`${V} adou-select-common-suffix-icon`}),(0,u.jsx)("div",{className:"adou-select-icon-box ms-2 "+(m||Ae?.[$]||j?"":"text-end"),children:(0,u.jsx)("i",{style:{color:G,right:N?"0px":"14px"},className:"adou-select-icon fa-solid fa-caret-right "+(he?"rotate-up":"rotate-down")})})]})}),n.createPortal((0,u.jsx)("div",{style:{position:"absolute",top:Je.y+Je.height+"px",left:Je.x+"px",...he?{maxHeight:Re>parseInt(re)?re:Re+"px"}:{},...ve?{opacity:0,transform:"scaleY(0)"}:{}},ref:Ve,className:`adou-select-option-content ${he?"adou-select-option-content-open":""} ${ve?"aduo-select-option-content-closing":""}`,children:he&&(0,u.jsx)("div",{className:"adou-select-option-box",children:Se.length>0?Se.map(((e,t)=>(0,u.jsx)("div",{onClick:t=>Ze(e,t),style:{color:st(e,"font"),backgroundColor:st(e,"bgc")},className:`adou-select-option ${Ae?.[$]===e[$]?"adou-select-option-active":""} ${Pe===t?"focused":""}`,children:fe?fe(e,F,$):e.render?e.render(e,F,$):e[F]},e[$]))):(0,u.jsx)("div",{className:"none-match ps-2",children:"No content"})})}),document.body)]})}));f.displayName="Select";const p=f},2727:(e,t,l)=>{l.r(t),l.d(t,{default:()=>a});l(6540);var o=l(8407),n=l(8478),s=l(4848);const a=()=>{const e=[{value:"john_smith",label:"John Smith"},{value:"emma_watson",label:"Emma Watson"},{value:"william_jones",label:"William Jones"},{value:"olivia_brown",label:"Olivia Brown"},{value:"james_davis",label:"James Davis"},{value:"ava_wilson",label:"Ava Wilson"},{value:"joseph_turner",label:"Joseph Turner"}];return(0,s.jsx)("div",{className:"show-search-wrapper",children:(0,s.jsx)(n.A,{fallback:(0,s.jsx)("div",{children:"Loading..."}),children:()=>(0,s.jsx)(o.A,{showSearch:!0,placeholder:"\u8bf7\u9009\u62e9",options:e})})})}}}]);