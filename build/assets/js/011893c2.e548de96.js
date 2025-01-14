"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[752,4758,6864,6867,8371],{6281:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>x,contentTitle:()=>h,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>j});var n=s(4848),l=s(8453),d=s(9454),t=(s(8631),s(7388)),c=s(4467),i=s(5313),a=s(6744);const o={title:"CollapseX \u6a2a\u5411\u624b\u98ce\u7434"},h=void 0,p={id:"web-elements/collapseX",title:"CollapseX \u6a2a\u5411\u624b\u98ce\u7434",description:"Collapse \u662f\u4e00\u4e2a\u53ef\u6298\u53e0\u7684\u7ec4\u4ef6\uff0c\u5141\u8bb8\u7528\u6237\u70b9\u51fb\u6807\u9898\u4ee5\u5c55\u5f00\u6216\u6298\u53e0\u5185\u5bb9\u3002\u9002\u7528\u4e8e\u9700\u8981\u9690\u85cf\u548c\u663e\u793a\u5185\u5bb9\u7684\u573a\u666f\u3002",source:"@site/docs/web-elements/collapseX.mdx",sourceDirName:"web-elements",slug:"/web-elements/collapseX",permalink:"/adou-ui-doc/docs/web-elements/collapseX",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"CollapseX \u6a2a\u5411\u624b\u98ce\u7434"},sidebar:"tutorialSidebar",previous:{title:"Card \u5361\u7247",permalink:"/adou-ui-doc/docs/web-elements/card"},next:{title:"CollapseY \u7eb5\u5411\u624b\u98ce\u7434",permalink:"/adou-ui-doc/docs/web-elements/collapseY"}},x={},j=[{value:"1. \u57fa\u672c\u4f7f\u7528",id:"1-\u57fa\u672c\u4f7f\u7528",level:2},{value:"2. <code>Header</code>",id:"2-header",level:2},{value:"3. <code>Children</code>",id:"3-children",level:2},{value:"4. <code>FirstShow</code>",id:"4-firstshow",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}];function u(e){const r={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.R)(),...e.components},{Details:s}=r;return s||function(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Collapse"})," \u662f\u4e00\u4e2a\u53ef\u6298\u53e0\u7684\u7ec4\u4ef6\uff0c\u5141\u8bb8\u7528\u6237\u70b9\u51fb\u6807\u9898\u4ee5\u5c55\u5f00\u6216\u6298\u53e0\u5185\u5bb9\u3002\u9002\u7528\u4e8e\u9700\u8981\u9690\u85cf\u548c\u663e\u793a\u5185\u5bb9\u7684\u573a\u666f\u3002"]}),"\n",(0,n.jsx)(r.h2,{id:"1-\u57fa\u672c\u4f7f\u7528",children:"1. \u57fa\u672c\u4f7f\u7528"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(t.default,{}),(0,n.jsx)(s,{children:(0,n.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"})})]}),"\n",(0,n.jsxs)(r.h2,{id:"2-header",children:["2. ",(0,n.jsx)(r.code,{children:"Header"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Header"})," \u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u6298\u53e0\u7ec4\u4ef6\u7684\u6807\u9898\u5185\u5bb9\u3002\u7528\u6237\u70b9\u51fb\u6807\u9898\u53ef\u4ee5\u5c55\u5f00\u6216\u6298\u53e0\u5185\u5bb9\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u7c7b\u578b\uff1a",(0,n.jsx)(r.code,{children:"any"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(c.default,{}),(0,n.jsxs)(s,{className:"mt-3",children:[(0,n.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'import React from "react";\r\nimport Collapse from "@site/src/components/web-elements/adou-collapse";\r\n\r\ninterface HeaderProps {}\r\n\r\nconst Header = ({}: HeaderProps) => {\r\n  return (\r\n    <div className="header-wrapper">\r\n      <Collapse header={<h1>\u70b9\u51fb\u5c55\u5f00</h1>}>\r\n        <p>\u8fd9\u662f\u53ef\u6298\u53e0\u7684\u5185\u5bb9\u3002</p>\r\n      </Collapse>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Header;\n'})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"3-children",children:["3. ",(0,n.jsx)(r.code,{children:"Children"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"Children"})," \u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u6298\u53e0\u7ec4\u4ef6\u7684\u5b50\u5143\u7d20\u5185\u5bb9\uff0c\u5373\u6298\u53e0\u548c\u5c55\u5f00\u65f6\u663e\u793a\u7684\u5185\u5bb9\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u7c7b\u578b\uff1a",(0,n.jsx)(r.code,{children:"any"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(i.default,{}),(0,n.jsxs)(s,{className:"mt-3",children:[(0,n.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'import React from "react";\r\nimport Collapse from "@site/src/components/web-elements/adou-collapse";\r\n\r\ninterface ChildrenProps {}\r\n\r\nconst Children = ({}: ChildrenProps) => {\r\n  return (\r\n    <div className="header-wrapper">\r\n      <Collapse header={"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}>\r\n        <p style={{ color: "green" }}>\u8fd9\u91cc\u662f\u5173\u4e8e\u5e38\u89c1\u95ee\u9898\u7684\u8be6\u7ec6\u89e3\u7b54\u5185\u5bb9\u3002</p>\r\n      </Collapse>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Children;\r\n\n'})})]})]}),"\n",(0,n.jsxs)(r.h2,{id:"4-firstshow",children:["4. ",(0,n.jsx)(r.code,{children:"FirstShow"})]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"FirstShow"})," \u5c5e\u6027\u7528\u4e8e\u8bbe\u7f6e\u6298\u53e0\u7ec4\u4ef6\u7684\u5b50\u5143\u7d20\u5185\u5bb9\uff0c\u5373\u6298\u53e0\u548c\u5c55\u5f00\u65f6\u663e\u793a\u7684\u5185\u5bb9\u3002"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["\u7c7b\u578b\uff1a",(0,n.jsx)(r.code,{children:"any"})]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(a.default,{}),(0,n.jsxs)(s,{className:"mt-3",children:[(0,n.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-javascript",children:'import React from "react";\r\nimport Collapse from "@site/src/components/web-elements/adou-collapse";\r\n\r\ninterface FirstShowProps {}\r\n\r\nconst FirstShow = ({}: FirstShowProps) => {\r\n  return (\r\n    <div className="first-show-wrapper">\r\n      <Collapse firstShow header={"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54"}>\r\n        <p style={{ color: "greenyellow" }}>\r\n          \u8fd9\u91cc\u662f\u5173\u4e8e\u5e38\u89c1\u95ee\u9898\u7684\u8be6\u7ec6\u89e3\u7b54\u5185\u5bb9\u3002\r\n        </p>\r\n      </Collapse>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default FirstShow;\n'})})]})]}),"\n",(0,n.jsx)(r.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"\u5c5e\u6027\u540d"}),(0,n.jsx)(r.th,{children:"\u7c7b\u578b"}),(0,n.jsx)(r.th,{children:"\u9ed8\u8ba4\u503c"}),(0,n.jsx)(r.th,{children:"\u63cf\u8ff0"})]})}),(0,n.jsxs)(r.tbody,{children:[(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"header"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"any"})}),(0,n.jsx)(r.td,{children:"-"}),(0,n.jsx)(r.td,{children:"\u6298\u53e0\u7ec4\u4ef6\u7684\u6807\u9898\u5185\u5bb9\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"children"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"any"})}),(0,n.jsx)(r.td,{children:"-"}),(0,n.jsx)(r.td,{children:"\u6298\u53e0\u7ec4\u4ef6\u7684\u5b50\u5143\u7d20\u5185\u5bb9\u3002"})]}),(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"firstShow"}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"boolean"})}),(0,n.jsx)(r.td,{children:(0,n.jsx)(r.code,{children:"false"})}),(0,n.jsx)(r.td,{children:"\u662f\u5426\u5728\u521d\u6b21\u52a0\u8f7d\u65f6\u663e\u793a\u5185\u5bb9\u3002"})]})]})]})]})}function m(e={}){const{wrapper:r}={...(0,l.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2639:(e,r,s)=>{s.d(r,{A:()=>d});var n=s(6540),l=s(4848);const d=e=>{const{fontSize:r,spinerType:s="border",spinerColor:d,loading:t,suffixIcon:c,prefixIcon:i,children:a,type:o="primary",size:h="md",externalClassName:p,round:x,textColor:j,disabled:u,outlineColor:m,onClick:f}=e,v=()=>n.Children.map(a,(e=>{if(!n.isValidElement(e)){e=(0,l.jsx)("span",{children:e});return n.cloneElement(e,{style:{fontSize:r}})}}));return(0,l.jsx)("span",{className:"button-wrapper",children:(0,l.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{f&&f()},className:`btn  btn-${h} ${x?"rounded-pill":""} ${j?`text-${j}`:""} ${m?`btn-outline-${m}`:`btn-${o}`} ${u?"disabled":""} ${p}`,disabled:t,children:t?(0,l.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return n.Children.map(a,(r=>{r.props?.className?.includes("loader")&&(e=!0)})),e?n.Children.map(a,(e=>{if(e.props?.className.includes("loader"))return e})):(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:`me-2 spinner-${s} spinner-${s}-sm text-${d}`,role:"status"})})})(),v()]}):(0,l.jsxs)(l.Fragment,{children:[i&&(0,l.jsx)("i",{className:`${i}`}),v(),c&&(0,l.jsx)("i",{className:`${c}`})]})})})}},9454:(e,r,s)=>{s.d(r,{A:()=>d});var n=s(6540),l=s(4848);const d=e=>{let{hoverUp:r,header:s,headerAlign:d="start",footer:t,footerAlign:c="start",children:i,externalClassName:a=""}=e;const[o,h]=(0,n.useState)(!1);return(0,l.jsxs)("div",{onMouseEnter:()=>{r&&h(!0)},onMouseLeave:()=>{h(!1)},className:`card-wrapper ${a} ${o?"hover-up":""}`,children:[s&&(0,l.jsx)("div",{className:`card-header p-2 text-${d}`,children:s}),(0,l.jsx)("div",{className:"card-content p-3",children:i}),t&&(0,l.jsx)("div",{className:`card-footer p-2 text-${c}`,children:t})]})}},8631:(e,r,s)=>{s.d(r,{A:()=>t});var n=s(6540),l=s(2639),d=s(4848);const t=e=>{let{header:r,children:s,firstShow:t=!1}=e;const[c,i]=(0,n.useState)(!1),a=(0,n.useRef)(null),[o,h]=(0,n.useState)(0),[p,x]=(0,n.useState)(0);return(0,n.useEffect)((()=>{t&&(i(!0),h(a.current.scrollWidth),x(a.current.scrollHeight))}),[]),(0,n.useEffect)((()=>{h(a.current.scrollWidth),x(a.current.scrollHeight)}),[s]),(0,d.jsxs)("div",{className:"collapse-container",children:[(0,d.jsx)("div",{className:"collapse-header",children:(0,d.jsx)("div",{className:"collapse-header-content",onClick:()=>{i(!c)},children:r||(0,d.jsx)(l.A,{type:"primary",size:"sm",children:"\u5c55\u5f00"})})}),(0,d.jsx)("div",{className:"collapse-content mt-2",style:{maxWidth:c?`${o}px`:"0px",opacity:c?1:0},ref:a,children:s||"\u88ab\u6298\u53e0\u7684\u5185\u5bb9"})]})}},7388:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});s(6540);var n=s(8631),l=s(4848);const d=e=>{let{}=e;return(0,l.jsx)("div",{className:"header-wrapper",children:(0,l.jsx)(n.A,{})})}},5313:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});s(6540);var n=s(8631),l=s(4848);const d=e=>{let{}=e;return(0,l.jsx)("div",{className:"header-wrapper",children:(0,l.jsx)(n.A,{header:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:(0,l.jsx)("p",{style:{color:"green"},children:"\u8fd9\u91cc\u662f\u5173\u4e8e\u5e38\u89c1\u95ee\u9898\u7684\u8be6\u7ec6\u89e3\u7b54\u5185\u5bb9\u3002"})})})}},6744:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});s(6540);var n=s(8631),l=s(4848);const d=e=>{let{}=e;return(0,l.jsx)("div",{className:"first-show-wrapper",children:(0,l.jsxs)(n.A,{firstShow:!0,header:"\u5e38\u89c1\u95ee\u9898\u89e3\u7b54",children:[(0,l.jsx)("p",{children:"\u8fd9\u662f\u7b2c\u4e00\u6bb5\u5185\u5bb9\u3002"}),(0,l.jsx)("p",{children:"\u8fd9\u662f\u7b2c\u4e8c\u6bb5\u5185\u5bb9\u3002"})]})})}},4467:(e,r,s)=>{s.r(r),s.d(r,{default:()=>d});s(6540);var n=s(8631),l=s(4848);const d=e=>{let{}=e;return(0,l.jsx)("div",{className:"header-wrapper",children:(0,l.jsx)(n.A,{header:(0,l.jsx)("h1",{children:"\u70b9\u51fb\u5c55\u5f00"}),children:(0,l.jsx)("p",{children:"\u8fd9\u662f\u53ef\u6298\u53e0\u7684\u5185\u5bb9\u3002"})})})}},8453:(e,r,s)=>{s.d(r,{R:()=>t,x:()=>c});var n=s(6540);const l={},d=n.createContext(l);function t(e){const r=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:t(e.components),n.createElement(d.Provider,{value:r},e.children)}}}]);