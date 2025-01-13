"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[3295,6097,6862,8632],{6721:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var s=r(4848),t=r(8453),l=(r(9454),r(7915)),i=(r(5137),r(4489));const o={title:"useDrag \u62d6\u62fd\u94a9\u5b50"},d=void 0,c={id:"hooks/useDrag",title:"useDrag \u62d6\u62fd\u94a9\u5b50",description:"useDrag \u662f\u4e00\u4e2a\u7528\u4e8e\u5b9e\u73b0\u5143\u7d20\u62d6\u62fd\u529f\u80fd\u7684 React Hook\u3002\u5b83\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u5143\u7d20\u7684\u62d6\u62fd\u79fb\u52a8\uff0c\u652f\u6301\u666e\u901a\u5143\u7d20\u548c\u5bf9\u8bdd\u6846\u4e24\u79cd\u6a21\u5f0f\u3002",source:"@site/docs/hooks/useDrag.mdx",sourceDirName:"hooks",slug:"/hooks/useDrag",permalink:"/adou-ui-doc/docs/hooks/useDrag",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"useDrag \u62d6\u62fd\u94a9\u5b50"},sidebar:"tutorialSidebar",previous:{title:"useToast \u8f7b\u63d0\u793a",permalink:"/adou-ui-doc/docs/hooks/useToast"}},a={},h=[{value:"1. \u57fa\u672c\u4f7f\u7528",id:"1-\u57fa\u672c\u4f7f\u7528",level:2},{value:"2. \u81ea\u5b9a\u4e49\u6837\u5f0f",id:"2-\u81ea\u5b9a\u4e49\u6837\u5f0f",level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",level:2},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",level:2},{value:"\u7279\u6027",id:"\u7279\u6027",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2}];function x(e){const n={code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"useDrag"})," \u662f\u4e00\u4e2a\u7528\u4e8e\u5b9e\u73b0\u5143\u7d20\u62d6\u62fd\u529f\u80fd\u7684 React Hook\u3002\u5b83\u63d0\u4f9b\u4e86\u7b80\u5355\u7684\u65b9\u5f0f\u6765\u5b9e\u73b0\u5143\u7d20\u7684\u62d6\u62fd\u79fb\u52a8\uff0c\u652f\u6301\u666e\u901a\u5143\u7d20\u548c\u5bf9\u8bdd\u6846\u4e24\u79cd\u6a21\u5f0f\u3002"]}),"\n",(0,s.jsx)(n.h2,{id:"1-\u57fa\u672c\u4f7f\u7528",children:"1. \u57fa\u672c\u4f7f\u7528"}),"\n",(0,s.jsx)(n.p,{children:"\u6700\u57fa\u672c\u7684\u5143\u7d20\u62d6\u62fd\u529f\u80fd\u3002"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,s.jsx)(l.default,{}),"\n",(0,s.jsxs)(r,{className:"mt-3",children:[(0,s.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useRef } from "react";\r\nimport useDrag from "@site/src/hooks/useDrag";\r\n\r\nconst Basic = () => {\r\n  const elementRef = useRef(null);\r\n  const triggerRef = useRef(null);\r\n  const { position, handleMouseDown } = useDrag(elementRef, elementRef);\r\n  return (\r\n    <div\r\n      ref={elementRef}\r\n      onMouseDown={handleMouseDown}\r\n      className="draggable-box p-2"\r\n      style={{ width: "fit-content", background: "red" }}\r\n    >\r\n      <div ref={triggerRef} className="drag-handle">\r\n        \u62d6\u62fd\u6211\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default Basic;\r\n\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"2-\u81ea\u5b9a\u4e49\u6837\u5f0f",children:"2. \u81ea\u5b9a\u4e49\u6837\u5f0f"}),"\n",(0,s.jsxs)(n.p,{children:["\u53ef\u4ee5\u53d6\u6d88\u81ea\u52a8\u6837\u5f0f\u8bbe\u7f6e\uff0c ",(0,s.jsx)(n.strong,{children:"\u624b\u52a8\u63a7\u5236\u62d6\u62fd\u5143\u7d20\u7684\u6837\u5f0f"})," \u3002\u4f8b\u5982\u624b\u52a8\u63a7\u5236\u62d6\u62fd\u5143\u7d20\u53ea\u80fd ",(0,s.jsx)(n.strong,{children:"\u5728\u7236\u7ec4\u4ef6\u7684\u5185\u90e8\u8fdb\u884c\u62d6\u62fd"})," \u3002"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,s.jsx)(i.default,{}),"\n",(0,s.jsxs)(r,{className:"mt-3",children:[(0,s.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",children:'import React, { useRef } from "react";\r\nimport useDrag from "@site/src/hooks/useDrag";\r\n\r\nconst CustomStyle = () => {\r\n  const elementRef = useRef(null);\r\n  const triggerRef = useRef(null);\r\n  const { position, handleMouseDown } = useDrag(\r\n    triggerRef,\r\n    elementRef,\r\n    false,\r\n    false\r\n  );\r\n  return (\r\n    <div\r\n      className="wrapper"\r\n      style={{ backgroundColor: "red", width: "300px", padding: "15px 0" }}\r\n    >\r\n      <div\r\n        className="position-relative"\r\n        ref={elementRef}\r\n        style={{\r\n          top:\r\n            position.y <= -15\r\n              ? "-15px"\r\n              : position.y >= 15\r\n              ? "15px"\r\n              : position.y + "px",\r\n          left:\r\n            position.x <= 0\r\n              ? 0\r\n              : position.x >= 200\r\n              ? "200px"\r\n              : position.x + "px",\r\n          transition: "transform 0.1s",\r\n          cursor: "move",\r\n          zIndex: 999,\r\n        }}\r\n      >\r\n        <div\r\n          className="ps-2"\r\n          ref={triggerRef}\r\n          onMouseDown={handleMouseDown}\r\n          style={{ backgroundColor: "skyblue", width: "100px" }}\r\n        >\r\n          \u62d6\u62fd\u5143\u7d20\r\n        </div>\r\n      </div>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default CustomStyle;\r\n\n'})})]}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u6570",children:"\u53c2\u6570"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u53c2\u6570\u540d"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"triggerRef"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RefObject"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\u89e6\u53d1\u62d6\u62fd\u7684\u5143\u7d20\u5f15\u7528\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"elementRef"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"RefObject"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"\u88ab\u62d6\u62fd\u7684\u5143\u7d20\u5f15\u7528\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"isDialog"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"\u662f\u5426\u4e3a\u5bf9\u8bdd\u6846\u6a21\u5f0f\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"autoStyle"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"boolean"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"true"})}),(0,s.jsx)(n.td,{children:"\u662f\u5426\u81ea\u52a8\u8bbe\u7f6e\u6837\u5f0f\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"initialPosition"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{ x: number, y: number }"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{ x: 0, y: 0 }"})}),(0,s.jsx)(n.td,{children:"\u521d\u59cb\u4f4d\u7f6e\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8fd4\u56de\u503c",children:"\u8fd4\u56de\u503c"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5c5e\u6027\u540d"}),(0,s.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"position"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"{ x: number, y: number }"})}),(0,s.jsx)(n.td,{children:"\u5f53\u524d\u4f4d\u7f6e\u5750\u6807\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"handleMouseDown"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"(e: MouseEvent) => void"})}),(0,s.jsx)(n.td,{children:"\u9f20\u6807\u6309\u4e0b\u4e8b\u4ef6\u5904\u7406\u51fd\u6570\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u7279\u6027",children:"\u7279\u6027"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4e24\u79cd\u6a21\u5f0f"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u666e\u901a\u5143\u7d20\u62d6\u62fd"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u5bf9\u8bdd\u6846\u62d6\u62fd"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6837\u5f0f\u63a7\u5236"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u53ef\u9009\u62e9\u81ea\u52a8\u6837\u5f0f\u8bbe\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u624b\u52a8\u6837\u5f0f\u63a7\u5236"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u4f4d\u7f6e\u7ba1\u7406"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u81ea\u52a8\u8ba1\u7b97\u76f8\u5bf9\u4f4d\u7f6e"}),"\n",(0,s.jsx)(n.li,{children:"\u652f\u6301\u8bbe\u7f6e\u521d\u59cb\u4f4d\u7f6e"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u5f15\u7528\u8bbe\u7f6e"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5fc5\u987b\u4e3a\u89e6\u53d1\u5143\u7d20\u548c\u76ee\u6807\u5143\u7d20\u8bbe\u7f6e ref"}),"\n",(0,s.jsx)(n.li,{children:"triggerRef \u548c elementRef \u53ef\u4ee5\u662f\u540c\u4e00\u4e2a\u5143\u7d20"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6837\u5f0f\u5efa\u8bae"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f7f\u7528 autoStyle \u65f6\uff0c\u786e\u4fdd\u5143\u7d20\u53ef\u4ee5\u4f7f\u7528\u76f8\u5bf9\u5b9a\u4f4d"}),"\n",(0,s.jsx)(n.li,{children:"\u5173\u95ed autoStyle \u65f6\uff0c\u9700\u8981\u624b\u52a8\u5904\u7406\u4f4d\u7f6e\u6837\u5f0f"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u6027\u80fd\u8003\u8651"}),"\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u62d6\u62fd\u8fc7\u7a0b\u4e2d\u4f1a\u6301\u7eed\u89e6\u53d1\u72b6\u6001\u66f4\u65b0"}),"\n",(0,s.jsx)(n.li,{children:"\u5efa\u8bae\u4f7f\u7528\u9632\u6296\u6216\u8282\u6d41\u4f18\u5316\u9891\u7e41\u66f4\u65b0"}),"\n"]}),"\n"]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},9454:(e,n,r)=>{r.d(n,{A:()=>l});var s=r(6540),t=r(4848);const l=e=>{let{hoverUp:n,header:r,headerAlign:l="start",footer:i,footerAlign:o="start",children:d,externalClassName:c=""}=e;const[a,h]=(0,s.useState)(!1);return(0,t.jsxs)("div",{onMouseEnter:()=>{n&&h(!0)},onMouseLeave:()=>{h(!1)},className:`card-wrapper ${c} ${a?"hover-up":""}`,children:[r&&(0,t.jsx)("div",{className:`card-header p-2 text-${l}`,children:r}),(0,t.jsx)("div",{className:"card-content p-3",children:d}),i&&(0,t.jsx)("div",{className:`card-footer p-2 text-${o}`,children:i})]})}},3941:(e,n,r)=>{r.d(n,{A:()=>t});var s=r(6540);const t=function(e,n,r,t,l){void 0===r&&(r=!1),void 0===t&&(t=!0),void 0===l&&(l={x:0,y:0});const[i,o]=(0,s.useState)(!1),[d,c]=(0,s.useState)({x:0,y:0}),[a,h]=(0,s.useState)(l),x=(0,s.useRef)(null),u=e=>{i&&(r?h({x:e.clientX-d.x,y:e.clientY-d.y}):(console.log("e.clientX: ",e.clientX),console.log("dragOffset.x: ",d.x),console.log("window.scrollX: ",window.scrollX),console.log("elementFirstPositionRef.current?.left: ",x.current?.left),h({x:e.clientX-d.x-x.current?.left+window.scrollX,y:e.clientY-d.y-x.current?.top+window.scrollY})))},j=()=>{o(!1)};(0,s.useEffect)((()=>(i?(document.addEventListener("mousemove",u),document.addEventListener("mouseup",j)):(document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",j)),()=>{document.removeEventListener("mousemove",u),document.removeEventListener("mouseup",j)})),[i]),(0,s.useEffect)((()=>{t&&n.current&&(n.current.style.position="relative",n.current.style.top=a.y+"px",n.current.style.left=a.x+"px",n.current.style.cursor="move")}),[a]);return(0,s.useEffect)((()=>{n.current&&(x.current=n.current.getBoundingClientRect())}),[n]),{position:a,handleMouseDown:e=>{const r=n.current.getBoundingClientRect();o(!0),c({x:e.clientX-r.left,y:e.clientY-r.top})}}}},7915:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});var s=r(6540),t=r(3941),l=r(4848);const i=()=>{const e=(0,s.useRef)(null),n=(0,s.useRef)(null),{position:r,handleMouseDown:i}=(0,t.A)(e,e);return(0,l.jsx)("div",{ref:e,onMouseDown:i,className:"draggable-box p-2",style:{width:"fit-content",background:"red"},children:(0,l.jsx)("div",{ref:n,className:"drag-handle",children:"\u62d6\u62fd\u6211"})})}},4489:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});var s=r(6540),t=r(3941),l=r(4848);const i=()=>{const e=(0,s.useRef)(null),n=(0,s.useRef)(null),{position:r,handleMouseDown:i}=(0,t.A)(n,e,!1,!1);return(0,l.jsx)("div",{className:"wrapper",style:{backgroundColor:"red",width:"300px",padding:"15px 0"},children:(0,l.jsx)("div",{className:"position-relative",ref:e,style:{top:r.y<=-15?"-15px":r.y>=15?"15px":r.y+"px",left:r.x<=0?0:r.x>=200?"200px":r.x+"px",transition:"transform 0.1s",cursor:"move",zIndex:999},children:(0,l.jsx)("div",{className:"ps-2",ref:n,onMouseDown:i,style:{backgroundColor:"skyblue",width:"100px"},children:"\u62d6\u62fd\u5143\u7d20"})})})}},5137:(e,n,r)=>{r.r(n),r.d(n,{default:()=>i});var s=r(6540),t=r(3941),l=r(4848);const i=()=>{const e=(0,s.useRef)(null),n=(0,s.useRef)(null),{position:r,handleMouseDown:i}=(0,t.A)(n,e,!0);return(0,l.jsxs)("div",{ref:e,className:"dialog",style:{position:"absolute",left:r.x,top:r.y},children:[(0,l.jsx)("div",{ref:n,onMouseDown:i,className:"dialog-header",children:"\u53ef\u62d6\u62fd\u7684\u5bf9\u8bdd\u6846"}),(0,l.jsx)("div",{className:"dialog-content",children:"\u5bf9\u8bdd\u6846\u5185\u5bb9"})]})}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>o});var s=r(6540);const t={},l=s.createContext(t);function i(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);