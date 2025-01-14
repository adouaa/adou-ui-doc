"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[1952],{2639:(e,n,s)=>{s.d(n,{A:()=>l});var a=s(6540),r=s(4848);const l=e=>{const{fontSize:n,spinerType:s="border",spinerColor:l,loading:t,suffixIcon:c,prefixIcon:i,children:d,type:o="primary",size:m="md",externalClassName:x,round:h,textColor:p,disabled:b,outlineColor:u,onClick:j}=e,v=()=>a.Children.map(d,(e=>{if(!a.isValidElement(e)){e=(0,r.jsx)("span",{children:e});return a.cloneElement(e,{style:{fontSize:n}})}}));return(0,r.jsx)("span",{className:"button-wrapper",children:(0,r.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{j&&j()},className:`btn  btn-${m} ${h?"rounded-pill":""} ${p?`text-${p}`:""} ${u?`btn-outline-${u}`:`btn-${o}`} ${b?"disabled":""} ${x}`,disabled:t,children:t?(0,r.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return a.Children.map(d,(n=>{n.props?.className?.includes("loader")&&(e=!0)})),e?a.Children.map(d,(e=>{if(e.props?.className.includes("loader"))return e})):(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{className:`me-2 spinner-${s} spinner-${s}-sm text-${l}`,role:"status"})})})(),v()]}):(0,r.jsxs)(r.Fragment,{children:[i&&(0,r.jsx)("i",{className:`${i}`}),v(),c&&(0,r.jsx)("i",{className:`${c}`})]})})})}},416:(e,n,s)=>{s.d(n,{A:()=>l});var a=s(6540),r=s(4848);const l=e=>{const{commonTabItemHeaderExternalCls:n,tabRef:s,commonExtraContent:l,extraContentCls:t,contentHeight:c,showExtraContent:i,lineaGradient:d="",children:o,activeIndex:m=0,activeLabelColor:x="#409eff",tabStyle:h="bootstrap",contentPadding:p,clearOnChange:b=!0,onLabelClick:u}=e,[j,v]=(0,a.useState)(0),[N,C]=(0,a.useState)(m),g=(0,a.useRef)(),f=(e,n)=>{C(e),u&&u(e,n)};(0,a.useEffect)((()=>{v(j+1)}),[N]);const $=e=>{C(e)};return(0,a.useImperativeHandle)(s,(()=>({goTo:$,getCurrentIndex:()=>N}))),(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"tabs-box",children:[(()=>{const e=[];return a.Children.map(o,(n=>{e.push(n)})),(0,r.jsx)(r.Fragment,{children:"common"===h?(0,r.jsx)("div",{className:"header-wrapper",children:(0,r.jsxs)("div",{className:"tabs-header mb-2  d-flex align-items-center",children:[(0,r.jsx)("div",{className:"tabs-header-content d-flex",style:{flex:1},children:e.map(((e,s)=>{if(e)return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:`tabs-header-item-box ${e.propps?.exsternalClsaaName||n} ${0===s&&"first"}`,children:(0,r.jsxs)("div",{onClick:()=>f(s,e),className:`tabs-header-item d-flex align-items-center  ${N===s&&"active"}`,children:[(0,r.jsx)("div",{className:"label-icon me-1",children:e?.props?.headerIcon}),(0,r.jsx)("div",{className:"label-text",children:e?.props?.label})]})})},s)}))}),l&&(0,r.jsx)("div",{className:"common-extra-content",children:l}),g.current&&(0,r.jsx)("div",{className:"extra-content",children:g.current})]})}):(0,r.jsx)("div",{className:"header-wrapper",children:(0,r.jsxs)("div",{className:"bootstrap-tabs-header d-flex align-items-center",children:[(0,r.jsx)("ul",{className:"nav nav-tabs mb-2",style:{flex:1},children:e.map(((e,s)=>(0,r.jsx)("li",{className:"nav-item d-flex mt-0",onClick:()=>f(s,e),children:(0,r.jsxs)("a",{style:{color:s===N?e.props.activeLabelColor||x:"",cursor:"pointer",...s===N?{background:`linear-gradient(${d})`}:{}},className:`${s===N?"active":""} ${e.propps?.exsternalClsaaName||n} nav-link d-flex align-items-center`,"aria-current":"page",children:[e.props.prefixIcon&&(0,r.jsx)("i",{className:e.props.prefixIcon+" me-1"}),(0,r.jsx)("div",{className:"label-icon me-1",children:e?.props?.headerIcon}),(0,r.jsx)("div",{className:"label-text",children:e?.props?.label})]})},s)))}),l&&(0,r.jsx)("div",{className:"common-extra-content",children:l}),g.current&&(0,r.jsx)("div",{className:"extra-content",children:g.current})]})})})})(),(()=>{const e=[];return a.Children.map(o,((n,s)=>{if(n){s===N&&(g.current=n.props.extraContent);const r=a.cloneElement(n,{active:s===N,key:s,contentPadding:p,clearOnChange:b});e.push(r)}})),(0,r.jsx)("div",{className:"tab-content",style:{...c?{height:c}:{}},children:e})})()]})})}},856:(e,n,s)=>{s.d(n,{A:()=>r});s(6540);var a=s(4848);const r=e=>{const{exsternalClsaaName:n,prefixIcon:s,headerIcon:r,extraContent:l,label:t,url:c,children:i,active:d,contentPadding:o="0px",clearOnChange:m}=e;return(0,a.jsx)("div",{className:"tab-item-wrapper",style:{height:d?"100%":"0"},children:m?d&&(0,a.jsx)("div",{className:"tab-item-content",style:{padding:o||"0px 10px",height:"100%"},children:i}):(0,a.jsx)("div",{className:""+(d?"":"d-none"),style:{padding:o||"0px 10px"},children:i})})}},7899:(e,n,s)=>{s.r(n),s.d(n,{default:()=>i});var a=s(2639),r=s(416),l=s(856),t=s(6540),c=s(4848);const i=()=>{const e=(0,t.useRef)(null);return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)("div",{className:"opt-btns mb-2",children:[(0,c.jsx)(a.A,{onClick:()=>e.current.goTo(0),children:"goTo1"}),(0,c.jsx)(a.A,{externalClassName:"mx-1",onClick:()=>e.current.goTo(1),children:"goTo2"}),(0,c.jsx)(a.A,{onClick:()=>e.current.goTo(2),children:"goTo3"})]}),(0,c.jsxs)(r.A,{tabRef:e,children:[(0,c.jsx)(l.A,{label:"\u6807\u7b7e1",children:"\u5185\u5bb91"}),(0,c.jsx)(l.A,{label:"\u6807\u7b7e2",children:"\u5185\u5bb92"}),(0,c.jsx)(l.A,{label:"\u6807\u7b7e3",children:"\u5185\u5bb93"})]})]})}}}]);