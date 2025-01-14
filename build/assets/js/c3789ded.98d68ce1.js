"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2168,4762,7520,7546,9856],{6483:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>x,contentTitle:()=>h,default:()=>p,frontMatter:()=>a,metadata:()=>u,toc:()=>j});var r=s(4848),i=s(8453),o=s(9454),d=s(31),t=s(2258),l=s(1389),c=s(1068);const a={title:"useLoading \u52a0\u8f7d\u72b6\u6001"},h=void 0,u={id:"hooks/useLoading",title:"useLoading \u52a0\u8f7d\u72b6\u6001",description:"useLoading \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u5168\u5c40\u52a0\u8f7d\u72b6\u6001\u7684 React Hook\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u663e\u793a\u548c\u9690\u85cf\u52a0\u8f7d\u72b6\u6001\uff0c\u652f\u6301\u591a\u4e2a\u5e76\u53d1\u52a0\u8f7d\u8bf7\u6c42\u7684\u7ba1\u7406\u3002",source:"@site/docs/hooks/useLoading.mdx",sourceDirName:"hooks",slug:"/hooks/useLoading",permalink:"/adou-ui-doc/docs/hooks/useLoading",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useLoading \u52a0\u8f7d\u72b6\u6001"},sidebar:"tutorialSidebar",previous:{title:"useNotification \u901a\u77e5\u63d0\u9192",permalink:"/adou-ui-doc/docs/hooks/useNotification"},next:{title:"useToast \u8f7b\u63d0\u793a",permalink:"/adou-ui-doc/docs/hooks/useToast"}},x={},j=[{value:"1. \u57fa\u672c\u4f7f\u7528",id:"1-\u57fa\u672c\u4f7f\u7528",level:2},{value:"2. \u5f02\u6b65\u64cd\u4f5c",id:"2-\u5f02\u6b65\u64cd\u4f5c",level:2},{value:"3. \u5e76\u53d1\u52a0\u8f7d",id:"3-\u5e76\u53d1\u52a0\u8f7d",level:2},{value:"4. \u81ea\u5b9a\u4e49\u5185\u5bb9",id:"4-\u81ea\u5b9a\u4e49\u5185\u5bb9",level:2},{value:"\u4f7f\u7528\u65b9\u6cd5",id:"\u4f7f\u7528\u65b9\u6cd5",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:3},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function m(n){const e={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...n.components},{Details:s}=e;return s||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.code,{children:"useLoading"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u7ba1\u7406\u5168\u5c40\u52a0\u8f7d\u72b6\u6001\u7684 React Hook\u3002\u5b83\u63d0\u4f9b\u4e86\u4e00\u4e2a\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u663e\u793a\u548c\u9690\u85cf\u52a0\u8f7d\u72b6\u6001\uff0c\u652f\u6301\u591a\u4e2a\u5e76\u53d1\u52a0\u8f7d\u8bf7\u6c42\u7684\u7ba1\u7406\u3002"]}),"\n",(0,r.jsx)(e.h2,{id:"1-\u57fa\u672c\u4f7f\u7528",children:"1. \u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsx)(e.p,{children:"\u6700\u57fa\u672c\u7684\u52a0\u8f7d\u72b6\u6001\u63a7\u5236\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(d.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import React from "react";\r\nimport useLoading from "@site/src/hooks/useLoading";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst Basic = () => {\r\n  const { showLoading, hideLoading } = useLoading();\r\n  const handleClick = () => {\r\n    showLoading();\r\n    setTimeout(hideLoading, 2000);\r\n  };\r\n  return <Button onClick={handleClick}>\u663e\u793a\u52a0\u8f7d\u72b6\u6001 2 \u79d2</Button>;\r\n};\r\n\r\nexport default Basic;\n'})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"2-\u5f02\u6b65\u64cd\u4f5c",children:"2. \u5f02\u6b65\u64cd\u4f5c"}),"\n",(0,r.jsx)(e.p,{children:"\u5728\u5f02\u6b65\u64cd\u4f5c\u4e2d\u4f7f\u7528\u52a0\u8f7d\u72b6\u6001\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(t.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import React from "react";\r\nimport useLoading from "@site/src/hooks/useLoading";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst AsyncOperation = () => {\r\n  const { showLoading, hideLoading } = useLoading();\r\n  const handleAsyncOperation = async () => {\r\n    showLoading();\r\n    try {\r\n      await new Promise((resolve) => setTimeout(resolve, 2000));\r\n      // \u6a21\u62df\u5f02\u6b65\u64cd\u4f5c\r\n    } finally {\r\n      hideLoading();\r\n    }\r\n  };\r\n  return <Button onClick={handleAsyncOperation}>\u6267\u884c\u5f02\u6b65\u64cd\u4f5c</Button>;\r\n};\r\n\r\nexport default AsyncOperation;\n'})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"3-\u5e76\u53d1\u52a0\u8f7d",children:"3. \u5e76\u53d1\u52a0\u8f7d"}),"\n",(0,r.jsx)(e.p,{children:"\u652f\u6301\u591a\u4e2a\u5e76\u53d1\u7684\u52a0\u8f7d\u8bf7\u6c42\uff0c\u53ea\u6709\u5f53\u6240\u6709\u8bf7\u6c42\u90fd\u5b8c\u6210\u65f6\u624d\u4f1a\u9690\u85cf\u52a0\u8f7d\u72b6\u6001\u3002"}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(l.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import React from "react";\r\nimport useLoading from "@site/src/hooks/useLoading";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst MultipleLoading = () => {\r\n  const { showLoading, hideLoading } = useLoading();\r\n  const simulateMultipleRequests = () => {\r\n    showLoading();\r\n    setTimeout(() => {\r\n      hideLoading();\r\n      // \u7b2c\u4e00\u4e2a\u8bf7\u6c42\u5b8c\u6210\r\n    }, 1000);\r\n    showLoading();\r\n    setTimeout(() => {\r\n      hideLoading();\r\n      // \u7b2c\u4e8c\u4e2a\u8bf7\u6c42\u5b8c\u6210\r\n    }, 2000);\r\n  };\r\n  return <Button onClick={simulateMultipleRequests}>\u6a21\u62df\u591a\u4e2a\u8bf7\u6c42</Button>;\r\n};\r\n\r\nexport default MultipleLoading;\n'})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"4-\u81ea\u5b9a\u4e49\u5185\u5bb9",children:"4. \u81ea\u5b9a\u4e49\u5185\u5bb9"}),"\n",(0,r.jsxs)(e.p,{children:["\u901a\u8fc7\u4e3a ",(0,r.jsx)(e.code,{children:"showLoading"})," \u51fd\u6570\u4f20\u5165 ",(0,r.jsx)(e.code,{children:"icon"})," \u548c ",(0,r.jsx)(e.code,{children:"text"})," \u53ef\u4ee5\u81ea\u5b9a\u4e49\u5c55\u793a\u7684\u5185\u5bb9\u3002"]}),"\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(o.A,{children:[(0,r.jsx)(c.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-jsx",children:'import React from "react";\r\nimport useLoading from "@site/src/hooks/useLoading";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst Custom = () => {\r\n  const { showLoading, hideLoading } = useLoading();\r\n  const handleClick = () => {\r\n    showLoading(\r\n      <div className="spinner-grow text-primary" role="status">\r\n        <span className="visually-hidden">Loading...</span>\r\n      </div>,\r\n      "\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85......"\r\n    );\r\n    setTimeout(hideLoading, 2000);\r\n  };\r\n  return <Button onClick={handleClick}>\u663e\u793a\u52a0\u8f7d\u72b6\u6001 2 \u79d2</Button>;\r\n};\r\n\r\nexport default Custom;\n'})})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u4f7f\u7528\u65b9\u6cd5",children:"\u4f7f\u7528\u65b9\u6cd5"}),"\n",(0,r.jsxs)(e.p,{children:["\u76f4\u63a5\u5728\u7ec4\u4ef6\u4e2d\u5bfc\u5165\u5e76\u4f7f\u7528 ",(0,r.jsx)(e.code,{children:"useLoading"})," hook\uff1a"]}),"\n",(0,r.jsx)(e.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,r.jsx)(e.h3,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,r.jsxs)(e.table,{children:[(0,r.jsx)(e.thead,{children:(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.th,{children:"\u5c5e\u6027"}),(0,r.jsx)(e.th,{children:"\u8bf4\u660e"}),(0,r.jsx)(e.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(e.th,{children:"\u9ed8\u8ba4\u503c"})]})}),(0,r.jsxs)(e.tbody,{children:[(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"loading"}),(0,r.jsx)(e.td,{children:"\u5f53\u524d\u662f\u5426\u5904\u4e8e\u52a0\u8f7d\u72b6\u6001"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"boolean"})}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"false"})})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"showLoading"}),(0,r.jsx)(e.td,{children:"\u663e\u793a\u52a0\u8f7d\u72b6\u6001"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"() => void"})}),(0,r.jsx)(e.td,{children:"-"})]}),(0,r.jsxs)(e.tr,{children:[(0,r.jsx)(e.td,{children:"hideLoading"}),(0,r.jsx)(e.td,{children:"\u9690\u85cf\u52a0\u8f7d\u72b6\u6001"}),(0,r.jsx)(e.td,{children:(0,r.jsx)(e.code,{children:"() => void"})}),(0,r.jsx)(e.td,{children:"-"})]})]})]}),"\n",(0,r.jsx)(e.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5168\u5c40\u5355\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u91c7\u7528\u5355\u4f8b\u6a21\u5f0f\uff0c\u5168\u5c40\u5171\u4eab\u4e00\u4e2a\u52a0\u8f7d\u72b6\u6001"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u52a8\u7ba1\u7406 DOM \u8282\u70b9\u7684\u521b\u5efa\u548c\u6e05\u7406"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u5e76\u53d1\u5904\u7406"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u591a\u4e2a\u5e76\u53d1\u7684\u52a0\u8f7d\u8bf7\u6c42"}),"\n",(0,r.jsx)(e.li,{children:"\u4f7f\u7528\u8ba1\u6570\u5668\u786e\u4fdd\u6240\u6709\u8bf7\u6c42\u5b8c\u6210\u624d\u9690\u85cf"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6027\u80fd\u4f18\u5316"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u61d2\u52a0\u8f7d\u521b\u5efa DOM \u8282\u70b9"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u52a8\u7ba1\u7406\u7ec4\u4ef6\u7684\u6302\u8f7d\u548c\u5378\u8f7d"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528\u4fbf\u6377"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u7b80\u5355\u7684 API \u8bbe\u8ba1"}),"\n",(0,r.jsx)(e.li,{children:"\u81ea\u52a8\u5904\u7406\u5f02\u5e38\u60c5\u51b5"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(e.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,r.jsxs)(e.ol,{children:["\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6837\u5f0f\u4f9d\u8d56"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u786e\u4fdd\u5df2\u5f15\u5165 loading.scss \u6837\u5f0f\u6587\u4ef6"}),"\n",(0,r.jsx)(e.li,{children:"\u53ef\u4ee5\u81ea\u5b9a\u4e49\u52a0\u8f7d\u52a8\u753b\u6837\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u4f7f\u7528\u5efa\u8bae"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u63a8\u8350\u5728\u5f02\u6b65\u64cd\u4f5c\u4e2d\u4f7f\u7528"}),"\n",(0,r.jsx)(e.li,{children:"\u6ce8\u610f\u6b63\u786e\u914d\u5bf9 show/hide \u7684\u8c03\u7528"}),"\n",(0,r.jsx)(e.li,{children:"\u5efa\u8bae\u4f7f\u7528 try/finally \u786e\u4fdd\u4e00\u5b9a\u4f1a\u8c03\u7528 hide"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(e.li,{children:["\n",(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.strong,{children:"\u6027\u80fd\u8003\u8651"}),"\uff1a"]}),"\n",(0,r.jsxs)(e.ul,{children:["\n",(0,r.jsx)(e.li,{children:"\u9996\u6b21\u8c03\u7528\u65f6\u4f1a\u521b\u5efa DOM \u8282\u70b9"}),"\n",(0,r.jsx)(e.li,{children:"\u591a\u4e2a\u7ec4\u4ef6\u5171\u4eab\u540c\u4e00\u4e2a\u52a0\u8f7d\u72b6\u6001"}),"\n",(0,r.jsx)(e.li,{children:"\u652f\u6301\u5e76\u53d1\u7684\u52a0\u8f7d\u8bf7\u6c42\u7ba1\u7406"}),"\n"]}),"\n"]}),"\n"]})]})}function p(n={}){const{wrapper:e}={...(0,i.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(m,{...n})}):m(n)}},2639:(n,e,s)=>{s.d(e,{A:()=>o});var r=s(6540),i=s(4848);const o=n=>{const{fontSize:e,spinerType:s="border",spinerColor:o,loading:d,suffixIcon:t,prefixIcon:l,children:c,type:a="primary",size:h="md",externalClassName:u,round:x,textColor:j,disabled:m,outlineColor:p,onClick:g}=n,f=()=>r.Children.map(c,(n=>{if(!r.isValidElement(n)){n=(0,i.jsx)("span",{children:n});return r.cloneElement(n,{style:{fontSize:e}})}}));return(0,i.jsx)("span",{className:"button-wrapper",children:(0,i.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{g&&g()},className:`btn  btn-${h} ${x?"rounded-pill":""} ${j?`text-${j}`:""} ${p?`btn-outline-${p}`:`btn-${a}`} ${m?"disabled":""} ${u}`,disabled:d,children:d?(0,i.jsxs)("div",{className:"loading-btn",children:[(()=>{let n=!1;return r.Children.map(c,(e=>{e.props?.className?.includes("loader")&&(n=!0)})),n?r.Children.map(c,(n=>{if(n.props?.className.includes("loader"))return n})):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{className:`me-2 spinner-${s} spinner-${s}-sm text-${o}`,role:"status"})})})(),f()]}):(0,i.jsxs)(i.Fragment,{children:[l&&(0,i.jsx)("i",{className:`${l}`}),f(),t&&(0,i.jsx)("i",{className:`${t}`})]})})})}},9454:(n,e,s)=>{s.d(e,{A:()=>o});var r=s(6540),i=s(4848);const o=n=>{let{hoverUp:e,header:s,headerAlign:o="start",footer:d,footerAlign:t="start",children:l,externalClassName:c=""}=n;const[a,h]=(0,r.useState)(!1);return(0,i.jsxs)("div",{onMouseEnter:()=>{e&&h(!0)},onMouseLeave:()=>{h(!1)},className:`card-wrapper ${c} ${a?"hover-up":""}`,children:[s&&(0,i.jsx)("div",{className:`card-header p-2 text-${o}`,children:s}),(0,i.jsx)("div",{className:"card-content p-3",children:l}),d&&(0,i.jsx)("div",{className:`card-footer p-2 text-${t}`,children:d})]})}},2115:(n,e,s)=>{s.d(e,{A:()=>a});var r=s(6540),i=s(5338),o=s(4848);const d=n=>{let{icon:e,text:s}=n;return(0,o.jsxs)("div",{className:"loading-overlay",children:[e||(0,o.jsx)("div",{className:"loading-spinner"}),(0,o.jsx)("span",{className:" ms-2",children:s||"Loading..."})]})};let t=0,l=null,c=null;const a=()=>{const[n,e]=(0,r.useState)(!1);(0,r.useEffect)((()=>{l||(l=(()=>{const n=document.createElement("div");n.className="loading-wrapper",document.body.appendChild(n),c=(0,i.createRoot)(n);const e=(n,e,s)=>{c?.render(n?(0,o.jsx)(d,{icon:e,text:s}):null)};return{show:(n,s)=>{e(!0,n,s)},hide:()=>{e(!1)}}})())}),[]);return{loading:n,showLoading:(n,s)=>{t++,e(!0),l?.show(n,s)},hideLoading:()=>{t--,t<=0&&(t=0,e(!1),l?.hide())}}}},2258:(n,e,s)=>{s.r(e),s.d(e,{default:()=>d});s(6540);var r=s(2115),i=s(2639),o=s(4848);const d=()=>{const{showLoading:n,hideLoading:e}=(0,r.A)();return(0,o.jsx)(i.A,{onClick:async()=>{n();try{await new Promise((n=>setTimeout(n,2e3)))}finally{e()}},children:"\u6267\u884c\u5f02\u6b65\u64cd\u4f5c"})}},31:(n,e,s)=>{s.r(e),s.d(e,{default:()=>d});s(6540);var r=s(2115),i=s(2639),o=s(4848);const d=()=>{const{showLoading:n,hideLoading:e}=(0,r.A)();return(0,o.jsx)(i.A,{onClick:()=>{n(),setTimeout(e,2e3)},children:"\u663e\u793a\u52a0\u8f7d\u72b6\u6001 2 \u79d2"})}},1068:(n,e,s)=>{s.r(e),s.d(e,{default:()=>d});s(6540);var r=s(2115),i=s(2639),o=s(4848);const d=()=>{const{showLoading:n,hideLoading:e}=(0,r.A)();return(0,o.jsx)(i.A,{onClick:()=>{n((0,o.jsx)("div",{className:"spinner-grow text-primary",role:"status",children:(0,o.jsx)("span",{className:"visually-hidden",children:"Loading..."})}),"\u52a0\u8f7d\u4e2d\uff0c\u8bf7\u8010\u5fc3\u7b49\u5f85......"),setTimeout(e,2e3)},children:"\u663e\u793a\u52a0\u8f7d\u72b6\u6001 2 \u79d2"})}},1389:(n,e,s)=>{s.r(e),s.d(e,{default:()=>d});s(6540);var r=s(2115),i=s(2639),o=s(4848);const d=()=>{const{showLoading:n,hideLoading:e}=(0,r.A)();return(0,o.jsx)(i.A,{onClick:()=>{n(),setTimeout((()=>{e()}),1e3),n(),setTimeout((()=>{e()}),2e3)},children:"\u6a21\u62df\u591a\u4e2a\u8bf7\u6c42"})}},8453:(n,e,s)=>{s.d(e,{R:()=>d,x:()=>t});var r=s(6540);const i={},o=r.createContext(i);function d(n){const e=r.useContext(o);return r.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:d(n.components),r.createElement(o.Provider,{value:e},n.children)}}}]);