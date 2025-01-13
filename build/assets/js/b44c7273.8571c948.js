"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[731,1727,2658,4419],{358:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>x,contentTitle:()=>a,default:()=>p,frontMatter:()=>l,metadata:()=>h,toc:()=>u});var r=s(4848),t=s(8453),i=s(9454),o=s(3906),d=s(7271),c=s(2483);const l={title:"useToast \u8f7b\u63d0\u793a"},a=void 0,h={id:"hooks/useToast",title:"useToast \u8f7b\u63d0\u793a",description:"useToast \u662f\u4e00\u4e2a\u7528\u4e8e\u663e\u793a\u8f7b\u91cf\u7ea7\u63d0\u793a\u4fe1\u606f\u7684 React Hook\u3002\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u63d0\u793a\u3001\u81ea\u5b9a\u4e49\u6301\u7eed\u65f6\u95f4\u3001\u8fdb\u5ea6\u6761\u663e\u793a\uff0c\u4ee5\u53ca\u9f20\u6807\u60ac\u505c\u6682\u505c\u7b49\u529f\u80fd\u3002",source:"@site/docs/hooks/useToast.mdx",sourceDirName:"hooks",slug:"/hooks/useToast",permalink:"/adou-ui-doc/docs/hooks/useToast",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useToast \u8f7b\u63d0\u793a"},sidebar:"tutorialSidebar",previous:{title:"useLoading \u52a0\u8f7d\u72b6\u6001",permalink:"/adou-ui-doc/docs/hooks/useLoading"},next:{title:"useDrag \u62d6\u62fd\u94a9\u5b50",permalink:"/adou-ui-doc/docs/hooks/useDrag"}},x={},u=[{value:"1. \u57fa\u672c\u4f7f\u7528",id:"1-\u57fa\u672c\u4f7f\u7528",level:2},{value:"2. \u81ea\u5b9a\u4e49\u6301\u7eed\u65f6\u95f4",id:"2-\u81ea\u5b9a\u4e49\u6301\u7eed\u65f6\u95f4",level:2},{value:"3. \u81ea\u5b9a\u4e49\u5bbd\u5ea6",id:"3-\u81ea\u5b9a\u4e49\u5bbd\u5ea6",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"Toast \u914d\u7f6e\u9879",id:"toast-\u914d\u7f6e\u9879",level:3},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function j(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"useToast"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u663e\u793a\u8f7b\u91cf\u7ea7\u63d0\u793a\u4fe1\u606f\u7684 React Hook\u3002\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u63d0\u793a\u3001\u81ea\u5b9a\u4e49\u6301\u7eed\u65f6\u95f4\u3001\u8fdb\u5ea6\u6761\u663e\u793a\uff0c\u4ee5\u53ca\u9f20\u6807\u60ac\u505c\u6682\u505c\u7b49\u529f\u80fd\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"1-\u57fa\u672c\u4f7f\u7528",children:"1. \u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsxs)(e.p,{children:["\u6700\u57fa\u672c\u7684\u63d0\u793a\u4fe1\u606f\uff0c\u652f\u6301 ",(0,r.jsx)(e.code,{children:"success"}),"\u3001",(0,r.jsx)(e.code,{children:"error"}),"\u3001",(0,r.jsx)(e.code,{children:"warning"})," \u4e09\u79cd\u7c7b\u578b\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(o.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import React from "react";\r\nimport useToast from "@site/src/hooks/useToast";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst Basic = () => {\r\n  const toast = useToast();\r\n  const showToast = (type) => {\r\n    toast.open({\r\n      type,\r\n      content: `\u8fd9\u662f\u4e00\u6761${type}\u63d0\u793a`,\r\n    });\r\n  };\r\n  return (\r\n    <div className="d-flex gap-2">\r\n      <Button onClick={() => showToast("success")}>\u6210\u529f\u63d0\u793a</Button>\r\n      <Button onClick={() => showToast("warning")}>\u8b66\u544a\u63d0\u793a</Button>\r\n      <Button onClick={() => showToast("error")}>\u9519\u8bef\u63d0\u793a</Button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Basic;\n'})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"2-\u81ea\u5b9a\u4e49\u6301\u7eed\u65f6\u95f4",children:"2. \u81ea\u5b9a\u4e49\u6301\u7eed\u65f6\u95f4"}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u8bbe\u7f6e ",(0,r.jsx)(e.code,{children:"duration"})," \u5c5e\u6027\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63d0\u793a\u663e\u793a\u7684\u65f6\u957f\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(d.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import React from "react";\r\nimport useToast from "@site/src/hooks/useToast";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst CustomDuration = () => {\r\n  const toast = useToast();\r\n  return (\r\n    <div className="d-flex gap-2">\r\n      <Button\r\n        onClick={() =>\r\n          toast.open({\r\n            type: "success",\r\n            content: "\u8fd9\u6761\u63d0\u793a\u5c06\u5728 1 \u79d2\u540e\u6d88\u5931",\r\n            duration: 1000,\r\n          })\r\n        }\r\n      >\r\n        \u663e\u793a 1s\r\n      </Button>\r\n      <Button\r\n        onClick={() =>\r\n          toast.open({\r\n            type: "success",\r\n            content: "\u8fd9\u6761\u63d0\u793a\u5c06\u5728 5 \u79d2\u540e\u6d88\u5931",\r\n            duration: 5000,\r\n          })\r\n        }\r\n      >\r\n        \u663e\u793a 5s\r\n      </Button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default CustomDuration;\n'})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"3-\u81ea\u5b9a\u4e49\u5bbd\u5ea6",children:"3. \u81ea\u5b9a\u4e49\u5bbd\u5ea6"}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(e.code,{children:"width"})," \u5c5e\u6027\u53ef\u4ee5\u81ea\u5b9a\u4e49\u63d0\u793a\u6846\u7684\u5bbd\u5ea6\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(i.A,{children:[(0,r.jsx)(c.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import React from "react";\r\nimport useToast from "@site/src/hooks/useToast";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst CustomWidth = () => {\r\n  const toast = useToast();\r\n  return (\r\n    <div className="d-flex gap-2">\r\n      <Button\r\n        onClick={() =>\r\n          toast.open({\r\n            type: "success",\r\n            content: "\u8fd9\u662f\u4e00\u6761\u8f83\u7a84\u7684\u63d0\u793a",\r\n            width: "200px",\r\n          })\r\n        }\r\n      >\r\n        \u7a84\u63d0\u793a\r\n      </Button>\r\n      <Button\r\n        onClick={() =>\r\n          toast.open({\r\n            type: "success",\r\n            content: "\u8fd9\u662f\u4e00\u6761\u8f83\u5bbd\u7684\u63d0\u793a",\r\n            width: "400px",\r\n          })\r\n        }\r\n      >\r\n        \u5bbd\u63d0\u793a\r\n      </Button>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default CustomWidth;\n'})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsxs)(e.p,{children:["\u76f4\u63a5\u5728\u7ec4\u4ef6\u4e2d\u5bfc\u5165\u5e76\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"useToast"})," hook\uff1a"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,r.jsx)(e.h3,{id:"toast-\u914d\u7f6e\u9879",children:"Toast \u914d\u7f6e\u9879"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5c5e\u6027"}),(0,r.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"type"}),(0,r.jsx)(e.td,{children:"\u63d0\u793a\u7c7b\u578b"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"'success' | 'error' | 'warning'"})}),(0,r.jsx)(e.td,{children:"-"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"content"}),(0,r.jsx)(e.td,{children:"\u63d0\u793a\u5185\u5bb9"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"string"})}),(0,r.jsx)(e.td,{children:"-"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"duration"}),(0,r.jsx)(e.td,{children:"\u663e\u793a\u65f6\u957f\uff08\u6beb\u79d2\uff09"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"number"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"3000"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"width"}),(0,r.jsx)(e.td,{children:"\u63d0\u793a\u6846\u5bbd\u5ea6"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"string | number"})}),(0,r.jsx)(e.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5168\u5c40\u5355\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f\uff0c\u5168\u5c40\u5171\u4eab\u4e00\u4e2a\u63d0\u793a\u5b9e\u4f8b"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u52a8\u7ba1\u7406\u63d0\u793a\u961f\u5217"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u52a8\u753b\u6548\u679c"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u663e\u793a/\u9690\u85cf\u65f6\u6709\u5e73\u6ed1\u7684\u8fc7\u6e21\u52a8\u753b"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u591a\u4e2a\u63d0\u793a\u540c\u65f6\u663e\u793a\u548c\u5806\u53e0"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4ea4\u4e92\u4f18\u5316"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9f20\u6807\u60ac\u505c\u65f6\u6682\u505c\u5012\u8ba1\u65f6"}),"\n",(0,r.jsx)(e.li,{children:"\u79fb\u51fa\u540e\u7ee7\u7eed\u5012\u8ba1\u65f6"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u624b\u52a8\u5173\u95ed"}),"\n",(0,r.jsx)(e.li,{children:"\u663e\u793a\u8fdb\u5ea6\u6761\u6307\u793a\u5269\u4f59\u65f6\u95f4"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u81ea\u5b9a\u4e49\u9009\u9879"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u4e09\u79cd\u9884\u8bbe\u7c7b\u578b"}),"\n",(0,r.jsx)(e.li,{children:"\u53ef\u81ea\u5b9a\u4e49\u663e\u793a\u65f6\u957f"}),"\n",(0,r.jsx)(e.li,{children:"\u53ef\u81ea\u5b9a\u4e49\u63d0\u793a\u6846\u5bbd\u5ea6"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6837\u5f0f\u4f9d\u8d56"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u786e\u4fdd\u5df2\u5f15\u5165 toast.scss \u6837\u5f0f\u6587\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"\u6837\u5f0f\u652f\u6301\u54cd\u5e94\u5f0f\u5e03\u5c40"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528\u5efa\u8bae"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u63d0\u793a\u5185\u5bb9\u5efa\u8bae\u7b80\u77ed\u660e\u786e"}),"\n",(0,r.jsx)(e.li,{children:"\u5408\u7406\u8bbe\u7f6e\u663e\u793a\u65f6\u957f"}),"\n",(0,r.jsx)(e.li,{children:"\u907f\u514d\u540c\u65f6\u663e\u793a\u8fc7\u591a\u63d0\u793a"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6027\u80fd\u8003\u8651"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9996\u6b21\u4f7f\u7528\u65f6\u624d\u521b\u5efa DOM \u8282\u70b9"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u52a8\u7ba1\u7406\u5b9a\u65f6\u5668\u7684\u6e05\u7406"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u5e76\u53d1\u7684\u63d0\u793a\u663e\u793a"}),"\n"]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(j,{...n})}):j(n)}},2639:(n,e,s)=>{s.d(e,{A:()=>i});var r=s(6540),t=s(4848);const i=n=>{const{fontSize:e,spinerType:s="border",spinerColor:i,loading:o,suffixIcon:d,prefixIcon:c,children:l,type:a="primary",size:h="md",externalClassName:x,round:u,textColor:j,disabled:p,outlineColor:m,onClickOK:g}=n,f=()=>r.Children.map(l,(n=>{if(!r.isValidElement(n)){n=(0,t.jsx)("span",{children:n});return r.cloneElement(n,{style:{fontSize:e}})}}));return(0,t.jsx)("span",{className:"button-wrapper",children:(0,t.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{g&&g()},className:`btn  btn-${h} ${u?"rounded-pill":""} ${j?`text-${j}`:""} ${m?`btn-outline-${m}`:`btn-${a}`} ${p?"disabled":""} ${x}`,disabled:o,children:o?(0,t.jsxs)("div",{className:"loading-btn",children:[(()=>{let n=!1;return r.Children.map(l,(e=>{e.props?.className?.includes("loader")&&(n=!0)})),n?r.Children.map(l,(n=>{if(n.props?.className.includes("loader"))return n})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:`me-2 spinner-${s} spinner-${s}-sm text-${i}`,role:"status"})})})(),f()]}):(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("i",{className:`${c}`}),f(),d&&(0,t.jsx)("i",{className:`${d}`})]})})})}},9454:(n,e,s)=>{s.d(e,{A:()=>i});var r=s(6540),t=s(4848);const i=n=>{let{hoverUp:e,header:s,headerAlign:i="start",footer:o,footerAlign:d="start",children:c,externalClassName:l=""}=n;const[a,h]=(0,r.useState)(!1);return(0,t.jsxs)("div",{onMouseEnter:()=>{e&&h(!0)},onMouseLeave:()=>{h(!1)},className:`card-wrapper ${l} ${a?"hover-up":""}`,children:[s&&(0,t.jsx)("div",{className:`card-header p-2 text-${i}`,children:s}),(0,t.jsx)("div",{className:"card-content p-3",children:c}),o&&(0,t.jsx)("div",{className:`card-footer p-2 text-${d}`,children:o})]})}},8254:(n,e,s)=>{s.d(e,{A:()=>u});var r=s(6540),t=s(5338),i=s(4848);let o=null,d=null,c=0,l=[],a=new Map,h=new Map;const x=()=>{const[n,e]=(0,r.useState)([]);(0,r.useEffect)((()=>{e(l)}),[l]);return(0,i.jsx)("div",{className:"adou-toast-container",children:n.map((n=>(0,i.jsxs)("div",{style:{width:n.width},className:`adou-toast adou-toast-${n.type} ${n.appearing?"appearing":""} ${n.disappearing?"disappearing":""}`,onMouseEnter:()=>(n=>{const e=a.get(n),s=h.get(n);e&&clearTimeout(e),s&&clearInterval(s)})(n.id),onMouseLeave:()=>(n=>{const s=l.find((e=>e.id===n));if(!s)return;const r=s.remainingTime,t=setTimeout((()=>{l=l.map((e=>e.id===n?{...e,disappearing:!0}:e)),e([...l]),setTimeout((()=>{l=l.filter((e=>e.id!==n)),e([...l])}),500)}),r);a.set(n,t);const i=setInterval((()=>{const s=l.findIndex((e=>e.id===n));-1!==s&&l[s].remainingTime&&(l[s].remainingTime-=100,e([...l]))}),100);h.set(n,i)})(n.id),children:[(0,i.jsxs)("div",{className:"adou-toast-content",children:[n.content,(0,i.jsx)("button",{className:"adou-toast-close",onClick:()=>(n=>{const s=a.get(n.id),r=h.get(n.id);s&&clearTimeout(s),r&&clearInterval(r),l=l.map((e=>e.id===n.id?{...e,disappearing:!0}:e)),e([...l]),setTimeout((()=>{l=l.filter((e=>e.id!==n.id)),e([...l])}),500)})(n),children:"\xd7"})]}),(0,i.jsx)("div",{className:"adou-toast-timer",style:{width:(n.remainingTime||0)/(n.duration/100)+"%"}})]},n.id)))})},u=()=>((0,r.useEffect)((()=>{o||(o=(()=>{const n=document.createElement("div");return document.body.appendChild(n),d=(0,t.createRoot)(n),d.render((0,i.jsx)(x,{})),{open:n=>{const e=c++,s={id:e,duration:3e3,remainingTime:3e3,...n};s.remainingTime=s.duration,l.push(s),d?.render((0,i.jsx)(x,{})),setTimeout((()=>{const n=l.findIndex((n=>n.id===e));-1!==n&&(l[n].appearing=!0,d?.render((0,i.jsx)(x,{})))}),10);const r=setTimeout((()=>{l=l.map((n=>n.id===e?{...n,disappearing:!0}:n)),d?.render((0,i.jsx)(x,{})),setTimeout((()=>{l=l.filter((n=>n.id!==e)),d?.render((0,i.jsx)(x,{}))}),500)}),s.remainingTime);a.set(e,r);const t=setInterval((()=>{const n=l.findIndex((n=>n.id===e));-1!==n&&l[n].remainingTime&&(l[n].remainingTime-=100,d?.render((0,i.jsx)(x,{})))}),100);h.set(e,t)}}})())}),[]),{open:n=>{o?.open(n)}})},3906:(n,e,s)=>{s.r(e),s.d(e,{default:()=>o});s(6540);var r=s(8254),t=s(2639),i=s(4848);const o=()=>{const n=(0,r.A)(),e=e=>{n.open({type:e,content:`\u8fd9\u662f\u4e00\u6761${e}\u63d0\u793a`})};return(0,i.jsxs)("div",{className:"d-flex gap-2",children:[(0,i.jsx)(t.A,{onClick:()=>e("success"),children:"\u6210\u529f\u63d0\u793a"}),(0,i.jsx)(t.A,{onClick:()=>e("warning"),children:"\u8b66\u544a\u63d0\u793a"}),(0,i.jsx)(t.A,{onClick:()=>e("error"),children:"\u9519\u8bef\u63d0\u793a"})]})}},7271:(n,e,s)=>{s.r(e),s.d(e,{default:()=>o});s(6540);var r=s(8254),t=s(2639),i=s(4848);const o=()=>{const n=(0,r.A)();return(0,i.jsxs)("div",{className:"d-flex gap-2",children:[(0,i.jsx)(t.A,{onClick:()=>n.open({type:"success",content:"\u8fd9\u6761\u63d0\u793a\u5c06\u5728 1 \u79d2\u540e\u6d88\u5931",duration:1e3}),children:"\u663e\u793a 1s"}),(0,i.jsx)(t.A,{onClick:()=>n.open({type:"success",content:"\u8fd9\u6761\u63d0\u793a\u5c06\u5728 5 \u79d2\u540e\u6d88\u5931",duration:5e3}),children:"\u663e\u793a 5s"})]})}},2483:(n,e,s)=>{s.r(e),s.d(e,{default:()=>o});s(6540);var r=s(8254),t=s(2639),i=s(4848);const o=()=>{const n=(0,r.A)();return(0,i.jsxs)("div",{className:"d-flex gap-2",children:[(0,i.jsx)(t.A,{onClick:()=>n.open({type:"success",content:"\u8fd9\u662f\u4e00\u6761\u8f83\u7a84\u7684\u63d0\u793a",width:"200px"}),children:"\u7a84\u63d0\u793a"}),(0,i.jsx)(t.A,{onClick:()=>n.open({type:"success",content:"\u8fd9\u662f\u4e00\u6761\u8f83\u5bbd\u7684\u63d0\u793a",width:"400px"}),children:"\u5bbd\u63d0\u793a"})]})}},8453:(n,e,s)=>{s.d(e,{R:()=>o,x:()=>d});var r=s(6540);const t={},i=r.createContext(t);function o(n){const e=r.useContext(i);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),r.createElement(i.Provider,{value:e},n.children)}}}]);