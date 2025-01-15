"use strict";(self.webpackChunkyma_16_doc=self.webpackChunkyma_16_doc||[]).push([[2534,2942,3726,3880,5924,6363,6660,6947,7968,9437],{8752:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>g,contentTitle:()=>p,default:()=>w,frontMatter:()=>u,metadata:()=>f,toc:()=>v});var r=s(4848),t=s(8453),l=s(9454),i=(s(4180),s(9562)),d=s(4227),c=s(6388),o=s(6003),a=s(8124),x=s(8737),h=s(1106),j=s(1562),m=s(1115);const u={title:"Dialog \u5bf9\u8bdd\u6846"},p=void 0,f={id:"web-elements/dialog",title:"Dialog \u5bf9\u8bdd\u6846",description:"Dialog \u662f\u4e00\u4e2a\u6a21\u6001\u5bf9\u8bdd\u6846\u7ec4\u4ef6\uff0c\u652f\u6301\u591a\u79cd\u914d\u7f6e\u9009\u9879\uff0c\u5982\u6700\u5927\u5316\u3001\u786e\u8ba4\u548c\u53d6\u6d88\u6309\u94ae\u3001\u70b9\u51fb\u5916\u90e8\u5173\u95ed\u4ee5\u53ca\u53ef\u4ee5\u62d6\u62fd\u7b49\u3002\u9002\u7528\u4e8e\u9700\u8981\u7528\u6237\u4ea4\u4e92\u7684\u573a\u666f\u3002",source:"@site/docs/web-elements/dialog.mdx",sourceDirName:"web-elements",slug:"/web-elements/dialog",permalink:"/adou-ui-doc/docs/web-elements/dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Dialog \u5bf9\u8bdd\u6846"},sidebar:"tutorialSidebar",previous:{title:"CollapseY \u7eb5\u5411\u624b\u98ce\u7434",permalink:"/adou-ui-doc/docs/web-elements/collapseY"},next:{title:"\u6c34\u5e73\u6eda\u52a8",permalink:"/adou-ui-doc/docs/web-elements/horizontal-scroll-view"}},g={},v=[{value:"1. \u57fa\u672c\u4f7f\u7528",id:"1-\u57fa\u672c\u4f7f\u7528",level:2},{value:"2. \u81ea\u5b9a\u4e49\u9875\u811a",id:"2-\u81ea\u5b9a\u4e49\u9875\u811a",level:2},{value:"2.1 \u9875\u811a\u6587\u5b57",id:"21-\u9875\u811a\u6587\u5b57",level:3},{value:"2.1.1 <code>confirmText</code> \u548c <code>cancelText</code>",id:"211-confirmtext-\u548c-canceltext",level:4},{value:"2.2 \u7981\u7528\u786e\u5b9a\u6309\u94ae",id:"22-\u7981\u7528\u786e\u5b9a\u6309\u94ae",level:3},{value:"2.2.1 <code>canConfirm</code>",id:"221-canconfirm",level:4},{value:"3. \u70b9\u51fb\u5916\u90e8\u5173\u95ed",id:"3-\u70b9\u51fb\u5916\u90e8\u5173\u95ed",level:2},{value:"4. \u6700\u5927\u5316",id:"4-\u6700\u5927\u5316",level:2},{value:"5. \u53ef\u62d6\u62fd",id:"5-\u53ef\u62d6\u62fd",level:2},{value:"6. \u5f02\u6b65\u5173\u95ed",id:"6-\u5f02\u6b65\u5173\u95ed",level:2},{value:"7. \u5bf9\u8bdd\u6846\u7c7b\u578b",id:"7-\u5bf9\u8bdd\u6846\u7c7b\u578b",level:2},{value:"8. \u8d85\u51fa\u6eda\u52a8",id:"8-\u8d85\u51fa\u6eda\u52a8",level:2},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",level:2}];function C(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Dialog"})," \u662f\u4e00\u4e2a\u6a21\u6001\u5bf9\u8bdd\u6846\u7ec4\u4ef6\uff0c\u652f\u6301\u591a\u79cd\u914d\u7f6e\u9009\u9879\uff0c\u5982\u6700\u5927\u5316\u3001\u786e\u8ba4\u548c\u53d6\u6d88\u6309\u94ae\u3001\u70b9\u51fb\u5916\u90e8\u5173\u95ed\u4ee5\u53ca\u53ef\u4ee5\u62d6\u62fd\u7b49\u3002\u9002\u7528\u4e8e\u9700\u8981\u7528\u6237\u4ea4\u4e92\u7684\u573a\u666f\u3002"]}),"\n",(0,r.jsx)(n.h2,{id:"1-\u57fa\u672c\u4f7f\u7528",children:"1. \u57fa\u672c\u4f7f\u7528"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(i.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u70b9\u51fb\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst BasicExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="basic-wrapper">\r\n      <Button onClick={() => setIsOpen(true)}>Primary</Button>\r\n      <Dialog show={isOpen} onClose={() => setIsOpen(false)}></Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default BasicExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"2-\u81ea\u5b9a\u4e49\u9875\u811a",children:"2. \u81ea\u5b9a\u4e49\u9875\u811a"}),"\n",(0,r.jsx)(n.h3,{id:"21-\u9875\u811a\u6587\u5b57",children:"2.1 \u9875\u811a\u6587\u5b57"}),"\n",(0,r.jsxs)(n.h4,{id:"211-confirmtext-\u548c-canceltext",children:["2.1.1 ",(0,r.jsx)(n.code,{children:"confirmText"})," \u548c ",(0,r.jsx)(n.code,{children:"cancelText"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"any"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(d.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst CustomFooterExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="custom-footer-wrapper">\r\n      <Button onClick={() => setIsOpen(true)}>\u81ea\u5b9a\u4e49\u9875\u811a\u6587\u5b57</Button>\r\n      <Dialog\r\n        cancelText="\u5173\u95ed\u7684\u6587\u5b57"\r\n        confirmText="\u786e\u5b9a\u7684\u6587\u5b57"\r\n        show={isOpen}\r\n        onClose={() => setIsOpen(false)}\r\n        title="\u57fa\u672c\u5bf9\u8bdd\u6846"\r\n      >\r\n        <p>\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u9875\u811a\u6309\u94ae\u6587\u5b57\u7684\u5bf9\u8bdd\u6846\u5185\u5bb9\u3002</p>\r\n      </Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default CustomFooterExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"22-\u7981\u7528\u786e\u5b9a\u6309\u94ae",children:"2.2 \u7981\u7528\u786e\u5b9a\u6309\u94ae"}),"\n",(0,r.jsxs)(n.h4,{id:"221-canconfirm",children:["2.2.1 ",(0,r.jsx)(n.code,{children:"canConfirm"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(c.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst CanConfirmExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="can-confirm-wrapper">\r\n      <Button size="md" onClick={() => setIsOpen(true)}>\r\n        Primary\r\n      </Button>\r\n      <Dialog\r\n        showCancel={false}\r\n        canConfirm={false}\r\n        show={isOpen}\r\n        onClose={() => setIsOpen(false)}\r\n      ></Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default CanConfirmExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"3-\u70b9\u51fb\u5916\u90e8\u5173\u95ed",children:"3. \u70b9\u51fb\u5916\u90e8\u5173\u95ed"}),"\n",(0,r.jsxs)(n.p,{children:["\u901a\u8fc7 ",(0,r.jsx)(n.code,{children:"ClickOutside"})," \u5c5e\u6027\u53ef\u4ee5\u5b9e\u73b0\u70b9\u51fb\u5bf9\u8bdd\u6846\u5916\u90e8\u5173\u95ed\u5bf9\u8bdd\u6846\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(o.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst ClickOutsideExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="click-outside-wrapper">\r\n      <Button onClick={() => setIsOpen(true)}>\u6253\u5f00\u5bf9\u8bdd\u6846</Button>\r\n      <Dialog\r\n        show={isOpen}\r\n        onClose={() => setIsOpen(false)}\r\n        clickOutside\r\n        title="\u70b9\u51fb\u5916\u90e8\u5173\u95ed"\r\n      >\r\n        <p>\u70b9\u51fb\u5bf9\u8bdd\u6846\u5916\u90e8\u53ef\u4ee5\u5173\u95ed\u6b64\u5bf9\u8bdd\u6846\u3002</p>\r\n      </Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default ClickOutsideExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"4-\u6700\u5927\u5316",children:"4. \u6700\u5927\u5316"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"Maximize"})," \u5c5e\u6027\u53ef\u7528\u4e8e\u8bbe\u7f6e\u5bf9\u8bdd\u6846\u662f\u5426\u6700\u5927\u5316\u663e\u793a\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(a.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst MaximizeExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="maximize-wrapper">\r\n      <Button onClick={() => setIsOpen(true)}>\u6253\u5f00\u6700\u5927\u5bf9\u8bdd\u6846</Button>\r\n      <Dialog\r\n        show={isOpen}\r\n        onClose={() => setIsOpen(false)}\r\n        max\r\n        title="\u6700\u5927\u5316\u5bf9\u8bdd\u6846"\r\n      >\r\n        <p>\u8fd9\u662f\u4e00\u4e2a\u6700\u5927\u5316\u663e\u793a\u7684\u5bf9\u8bdd\u6846\u3002</p>\r\n      </Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default MaximizeExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"5-\u53ef\u62d6\u62fd",children:"5. \u53ef\u62d6\u62fd"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"draggable"})," \u5c5e\u6027\u53ef\u7528\u4e8e\u8bbe\u7f6e\u5bf9\u8bdd\u6846\u662f\u5426\u53ef\u62d6\u62fd\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(x.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst DragExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="drag-wrapper">\r\n      <Button onClick={() => setIsOpen(true)}>\u6253\u5f00\u5bf9\u8bdd\u6846</Button>\r\n      <Dialog\r\n        draggable\r\n        show={isOpen}\r\n        onClose={() => setIsOpen(false)}\r\n        title="\u57fa\u672c\u5bf9\u8bdd\u6846"\r\n      >\r\n        <p>\u8fd9\u662f\u4e00\u4e2a\u57fa\u672c\u7684\u5bf9\u8bdd\u6846\u5185\u5bb9\u3002</p>\r\n      </Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default DragExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"6-\u5f02\u6b65\u5173\u95ed",children:"6. \u5f02\u6b65\u5173\u95ed"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"confirmLoading"})," \u5c5e\u6027\u53ef\u7528\u4e8e\u8bbe\u7f6e\u5bf9\u8bdd\u6846\u786e\u5b9a\u6309\u94ae ",(0,r.jsx)(n.code,{children:"Loading"})," \u6548\u679c\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"boolean"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(h.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst BasicExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n  const [confirmLoading, setConfirmLoading] = useState < boolean > false;\r\n\r\n  const handleConfirm = () => {\r\n    setConfirmLoading(true);\r\n    setTimeout(() => {\r\n      setConfirmLoading(false);\r\n      setIsOpen(false);\r\n    }, 2000);\r\n  };\r\n\r\n  return (\r\n    <div className="basic-wrapper">\r\n      <Button\r\n        onClick={() => {\r\n          setIsOpen(true);\r\n        }}\r\n      >\r\n        \u6253\u5f00\u5bf9\u8bdd\u6846\r\n      </Button>\r\n      <Dialog\r\n        show={isOpen}\r\n        confirmLoading={confirmLoading}\r\n        onConfirm={handleConfirm}\r\n        title="\u5f02\u6b65\u5173\u95ed\u5bf9\u8bdd\u6846"\r\n      >\r\n        <p>\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u5173\u95ed\u7684\u5bf9\u8bdd\u6846\u5185\u5bb9\u3002</p>\r\n      </Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default BasicExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"7-\u5bf9\u8bdd\u6846\u7c7b\u578b",children:"7. \u5bf9\u8bdd\u6846\u7c7b\u578b"}),"\n",(0,r.jsxs)(n.p,{children:["\u5bf9\u8bdd\u6846\u5206\u4e3a\u6b63\u5e38\u5bf9\u8bdd\u6846\u548c ",(0,r.jsx)(n.code,{children:"\u63d0\u793a"})," \u5bf9\u8bdd\u6846\uff0c\u5c06 ",(0,r.jsx)(n.code,{children:"type"})," \u5c5e\u6027\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(n.code,{children:"tip"}),"\u5373\u53ef"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(j.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst TypeExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="type-wrapper">\r\n      <Button onClick={() => setIsOpen(true)}>Tip\u5bf9\u8bdd\u6846</Button>\r\n      <Dialog\r\n        type="tip"\r\n        show={isOpen}\r\n        onClose={() => setIsOpen(false)}\r\n      ></Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default TypeExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"8-\u8d85\u51fa\u6eda\u52a8",children:"8. \u8d85\u51fa\u6eda\u52a8"}),"\n",(0,r.jsxs)(n.p,{children:["\u4e3a\u5bf9\u8bdd\u6846\u8bbe\u7f6e ",(0,r.jsx)(n.code,{children:"maxHeight"})," \u5c5e\u6027\uff0c\u53ef\u4ee5\u5b9e\u73b0 ",(0,r.jsx)(n.code,{children:"Y\u8f74"})," \u8d85\u51fa\u6eda\u52a8\uff0c\u9ed8\u8ba4\u503c\u4e3a ",(0,r.jsx)(n.code,{children:"400px"}),"\u3002"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u7c7b\u578b\uff1a",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6548\u679c\u793a\u4f8b"}),"\uff1a"]}),"\n",(0,r.jsxs)(l.A,{children:[(0,r.jsx)(m.default,{}),(0,r.jsxs)(s,{className:"mt-3",children:[(0,r.jsx)("summary",{children:"\u67e5\u770b\u4ee3\u7801"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",children:'import React, { useState } from "react";\r\nimport Dialog from "@site/src/components/web-elements/adou-dialog";\r\nimport Button from "@site/src/components/adou-button";\r\n\r\nconst MaxHeightExample = () => {\r\n  const [isOpen, setIsOpen] = useState(false);\r\n\r\n  return (\r\n    <div className="max-height-wrapper">\r\n      <Button onClick={() => setIsOpen(true)}>\u6253\u5f00\u5bf9\u8bdd\u6846</Button>\r\n      <Dialog show={isOpen} onClose={() => setIsOpen(false)}>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n        <h1>\u8fd9\u662f\u4e00\u6bb5\u6587\u672c</h1>\r\n      </Dialog>\r\n    </div>\r\n  );\r\n};\r\n\r\nexport default MaxHeightExample;\n'})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"\u5c5e\u6027",children:"\u5c5e\u6027"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u5c5e\u6027\u540d"}),(0,r.jsx)(n.th,{children:"\u7c7b\u578b"}),(0,r.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,r.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"draggable"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u5141\u8bb8\u5bf9\u8bdd\u6846\u62d6\u52a8\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"confirmLoading"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsxs)(n.td,{children:["\u786e\u8ba4\u6309\u94ae\u662f\u5426\u663e\u793a\u52a0\u8f7d\u72b6\u6001(",(0,r.jsx)(n.strong,{children:"\u5f02\u6b65\u5173\u95ed"}),")\u3002"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"needDestroy"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u9700\u8981\u9500\u6bc1\u5bf9\u8bdd\u6846\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxY"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u5728 Y \u8f74\u4e0a\u6700\u5927\u5316\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxX"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u5728 X \u8f74\u4e0a\u6700\u5927\u5316\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"max"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u6700\u5927\u5316\u663e\u793a\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"showConfirm"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u663e\u793a\u786e\u8ba4\u6309\u94ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"showCancel"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u663e\u793a\u53d6\u6d88\u6309\u94ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"showClose"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"canConfirm"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"true"})}),(0,r.jsx)(n.td,{children:"\u786e\u8ba4\u6309\u94ae\u662f\u5426\u53ef\u7528\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clickOutside"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u5916\u90e8\u5173\u95ed\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"confirmText"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"\u786e\u5b9a"'})}),(0,r.jsx)(n.td,{children:"\u786e\u8ba4\u6309\u94ae\u7684\u6587\u672c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cancelText"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"\u53d6\u6d88"'})}),(0,r.jsx)(n.td,{children:"\u53d6\u6d88\u6309\u94ae\u7684\u6587\u672c\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"confirmBtnClass"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"primary"'})}),(0,r.jsx)(n.td,{children:"\u786e\u8ba4\u6309\u94ae\u7684\u6837\u5f0f\u7c7b\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cancelBtnClass"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"secondary"'})}),(0,r.jsx)(n.td,{children:"\u53d6\u6d88\u6309\u94ae\u7684\u6837\u5f0f\u7c7b\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"show"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"boolean"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"false"})}),(0,r.jsx)(n.td,{children:"\u662f\u5426\u663e\u793a\u5bf9\u8bdd\u6846\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"title"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"\u63d0\u793a"'})}),(0,r.jsx)(n.td,{children:"\u5bf9\u8bdd\u6846\u7684\u6807\u9898\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"children"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"ReactNode"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"null"})}),(0,r.jsx)(n.td,{children:"\u5bf9\u8bdd\u6846\u7684\u5185\u5bb9\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'""'})}),(0,r.jsx)(n.td,{children:"\u5bf9\u8bdd\u6846\u7684\u7c7b\u578b\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxHeight"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"400px"'})}),(0,r.jsx)(n.td,{children:"\u5bf9\u8bdd\u6846\u7684\u6700\u5927\u9ad8\u5ea6\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"width"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:'"600px"'})}),(0,r.jsx)(n.td,{children:"\u5bf9\u8bdd\u6846\u7684\u5bbd\u5ea6\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"height"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u5bf9\u8bdd\u6846\u7684\u9ad8\u5ea6\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"maxWidth"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"string"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u5bf9\u8bdd\u6846\u7684\u6700\u5927\u5bbd\u5ea6\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onCancel"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"() => void"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u53d6\u6d88\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onClose"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"() => void"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u5173\u95ed\u5bf9\u8bdd\u6846\u7684\u56de\u8c03\u51fd\u6570\u3002"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"onConfirm"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"() => void"})}),(0,r.jsx)(n.td,{children:"-"}),(0,r.jsx)(n.td,{children:"\u786e\u8ba4\u6309\u94ae\u7684\u56de\u8c03\u51fd\u6570\u3002"})]})]})]})]})}function w(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(C,{...e})}):C(e)}},2639:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(6540),t=s(4848);const l=e=>{const{fontSize:n,spinerType:s="border",spinerColor:l,loading:i,suffixIcon:d,prefixIcon:c,children:o,type:a="primary",size:x="md",externalClassName:h,round:j,textColor:m,disabled:u,outlineColor:p,onClick:f}=e,g=()=>r.Children.map(o,(e=>{if(!r.isValidElement(e)){e=(0,t.jsx)("span",{children:e});return r.cloneElement(e,{style:{fontSize:n}})}}));return(0,t.jsx)("span",{className:"button-wrapper",children:(0,t.jsx)("button",{style:{cursor:"pointer",height:"100%"},onClick:()=>{f&&f()},className:`btn  btn-${x} ${j?"rounded-pill":""} ${m?`text-${m}`:""} ${p?`btn-outline-${p}`:`btn-${a}`} ${u?"disabled":""} ${h}`,disabled:i,children:i?(0,t.jsxs)("div",{className:"loading-btn",children:[(()=>{let e=!1;return r.Children.map(o,(n=>{n.props?.className?.includes("loader")&&(e=!0)})),e?r.Children.map(o,(e=>{if(e.props?.className.includes("loader"))return e})):(0,t.jsx)(t.Fragment,{children:(0,t.jsx)("div",{className:`me-2 spinner-${s} spinner-${s}-sm text-${l}`,role:"status"})})})(),g()]}):(0,t.jsxs)(t.Fragment,{children:[c&&(0,t.jsx)("i",{className:`${c}`}),g(),d&&(0,t.jsx)("i",{className:`${d}`})]})})})}},9454:(e,n,s)=>{s.d(n,{A:()=>l});var r=s(6540),t=s(4848);const l=e=>{let{hoverUp:n,header:s,headerAlign:l="start",footer:i,footerAlign:d="start",children:c,externalClassName:o=""}=e;const[a,x]=(0,r.useState)(!1);return(0,t.jsxs)("div",{onMouseEnter:()=>{n&&x(!0)},onMouseLeave:()=>{x(!1)},className:`card-wrapper ${o} ${a?"hover-up":""}`,children:[s&&(0,t.jsx)("div",{className:`card-header p-2 text-${l}`,children:s}),(0,t.jsx)("div",{className:"card-content p-3",children:c}),i&&(0,t.jsx)("div",{className:`card-footer p-2 text-${d}`,children:i})]})}},4180:(e,n,s)=>{s.d(n,{A:()=>o});var r=s(6540),t=s(961),l=s(3941),i=s(9028),d=s(2639),c=s(4848);const o=e=>{let{draggble:n,confirmBtnLoading:s,needDestroy:o=!1,maxY:a,maxX:x,max:h,showConfirm:j=!0,showCancel:m=!0,showClose:u=!0,canConfirm:p=!0,clickOutside:f=!1,confirmText:g="\u786e\u5b9a",cancelText:v="\u53d6\u6d88",confirmBtnClass:C="primary",cancelBtnClass:w="secondary",show:b=!1,title:y="\u63d0\u793a",children:N=null,type:O="",maxHeight:D="400px",width:k="600px",height:S,maxWidth:E,onCancel:A,onClose:B=()=>{},onConfirm:I=()=>{}}=e;const T=(0,r.useRef)(null),$=(0,r.useRef)(null),[L,R]=(0,r.useState)(!1),[z,M]=(0,r.useState)(!1),[X,Y]=(0,r.useState)(!1),[H,P]=(0,r.useState)({x:0,y:0}),[F,W]=(0,r.useState)(!1),{position:_,handleMouseDown:K}=(0,l.A)($,T,n&&!h,!1);return(0,r.useEffect)((()=>{if(L&&T.current){const e=T.current.offsetWidth,n=T.current.offsetHeight,s=(window.innerWidth-e)/2,r=(window.innerHeight-n)/2;T.current.style.top=a||h?"-20px":""+("tip"===O?r-20+"px":"2%"),T.current.style.left=`${s}px`,setTimeout((()=>{T.current.focus()}),100)}setTimeout((()=>{W(L)}),10)}),[L]),(0,r.useEffect)((()=>{b?(M(!1),setTimeout((()=>{R(b)}),100),setTimeout((()=>{Y(!0)}),200)):(setTimeout((()=>{R(b)}),100),o&&setTimeout((()=>{M(!0)}),300))}),[b,O]),(0,i.A)(T,f&&B),(0,c.jsx)(c.Fragment,{children:(b||X)&&t.createPortal((0,c.jsx)("div",{className:"dialog-overlay "+(L?"open":""),children:!z&&(0,c.jsxs)("div",{onKeyDown:e=>{"Enter"===e.key?I&&I():"Escape"===e.key&&B&&B()},tabIndex:0,ref:T,className:"dialog "+(L?"open":""),style:{top:_.y-20+"px",left:`${_.x}px`,transform:`translateY(${F?"20px":"0"})`,maxWidth:h||x?"100vw":k||E,width:h||x?"100vw":k||E},children:[(0,c.jsxs)("div",{className:"dialog-header px-2 ps-3",children:[(0,c.jsx)("span",{className:"dialog-header-title fs-5",children:y}),(0,c.jsx)("div",{ref:$,className:"header-placeholder flex-fill",onMouseDown:n&&!h?K:void 0,style:{cursor:n&&!h?"move":"default",height:"56.8px"}}),u&&(0,c.jsx)("button",{className:"dialog-close hover-scale",onClick:B,children:"\xd7"})]}),(0,c.jsx)("div",{className:"dialog-content",style:{maxHeight:h||a?"calc(100vh - 8rem)":S||D,height:h||a?"calc(100vh - 8rem)":S},children:N||"\u5f39\u7a97\u9ed8\u8ba4\u5185\u5bb9..."}),(0,c.jsxs)("div",{className:"dialog-footer d-flex justify-content-end p-3",children:[m&&(0,c.jsx)(d.A,{externalClassName:`me-2 btn-${w}`,size:"md",onClick:A??B,children:v}),j&&(0,c.jsx)(d.A,{loading:s,disabled:!p,externalClassName:`btn-${C}`,size:"md",onClick:I,children:g})]})]})}),document.body)})}},9028:(e,n,s)=>{s.d(n,{A:()=>t});var r=s(6540);const t=function(e,n,s){void 0===s&&(s=!0),(0,r.useEffect)((()=>{const r=r=>{s&&e.length&&!(n=>e.some((e=>e.current?.contains(n.target))))(r)&&n&&n()};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}}),[e,n,s])}},3941:(e,n,s)=>{s.d(n,{A:()=>t});var r=s(6540);const t=function(e,n,s,t,l){void 0===s&&(s=!1),void 0===t&&(t=!0),void 0===l&&(l={x:0,y:0});const[i,d]=(0,r.useState)(!1),[c,o]=(0,r.useState)({x:0,y:0}),[a,x]=(0,r.useState)(l),h=(0,r.useRef)(null),j=e=>{i&&(s?x({x:e.clientX-c.x,y:e.clientY-c.y}):(console.log("e.clientX: ",e.clientX),console.log("dragOffset.x: ",c.x),console.log("window.scrollX: ",window.scrollX),console.log("elementFirstPositionRef.current?.left: ",h.current?.left),x({x:e.clientX-c.x-h.current?.left+window.scrollX,y:e.clientY-c.y-h.current?.top+window.scrollY})))},m=()=>{d(!1)};(0,r.useEffect)((()=>(i?(document.addEventListener("mousemove",j),document.addEventListener("mouseup",m)):(document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",m)),()=>{document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",m)})),[i]),(0,r.useEffect)((()=>{t&&n.current&&(n.current.style.position="relative",n.current.style.top=a.y+"px",n.current.style.left=a.x+"px",n.current.style.cursor="move")}),[a]);return(0,r.useEffect)((()=>{n.current&&(h.current=n.current.getBoundingClientRect())}),[n]),{position:a,handleMouseDown:e=>{const s=n.current.getBoundingClientRect();d(!0),o({x:e.clientX-s.left,y:e.clientY-s.top})}}}},1106:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1),[s,d]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"basic-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>{n(!0)},children:"\u6253\u5f00\u5bf9\u8bdd\u6846"}),(0,i.jsx)(t.A,{show:e,confirmLoading:s,onConfirm:()=>{d(!0),setTimeout((()=>{d(!1),n(!1)}),2e3)},onClose:()=>n(!1),title:"\u5f02\u6b65\u5173\u95ed\u5bf9\u8bdd\u6846",children:(0,i.jsx)("p",{children:"\u8fd9\u662f\u4e00\u4e2a\u5f02\u6b65\u5173\u95ed\u7684\u5bf9\u8bdd\u6846\u5185\u5bb9\u3002"})})]})}},9562:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"basic-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>n(!0),children:"Primary"}),(0,i.jsx)(t.A,{show:e,onClose:()=>n(!1)})]})}},6388:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"can-confirm-wrapper",children:[(0,i.jsx)(l.A,{size:"md",onClick:()=>n(!0),children:"Primary"}),(0,i.jsx)(t.A,{showCancel:!1,canConfirm:!1,show:e,onClose:()=>n(!1)})]})}},6003:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"click-outside-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>n(!0),children:"\u6253\u5f00\u5bf9\u8bdd\u6846"}),(0,i.jsx)(t.A,{show:e,onClose:()=>n(!1),clickOutside:!0,title:"\u70b9\u51fb\u5916\u90e8\u5173\u95ed",children:(0,i.jsx)("p",{children:"\u70b9\u51fb\u5bf9\u8bdd\u6846\u5916\u90e8\u53ef\u4ee5\u5173\u95ed\u6b64\u5bf9\u8bdd\u6846\u3002"})})]})}},4227:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"custom-footer-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>n(!0),children:"\u81ea\u5b9a\u4e49\u9875\u811a\u6587\u5b57"}),(0,i.jsx)(t.A,{cancelText:"\u5173\u95ed\u7684\u6587\u5b57",confirmText:"\u786e\u5b9a\u7684\u6587\u5b57",show:e,onClose:()=>n(!1),title:"\u57fa\u672c\u5bf9\u8bdd\u6846",children:(0,i.jsx)("p",{children:"\u8fd9\u662f\u4e00\u4e2a\u81ea\u5b9a\u4e49\u9875\u811a\u6309\u94ae\u6587\u5b57\u7684\u5bf9\u8bdd\u6846\u5185\u5bb9\u3002"})})]})}},8737:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"drag-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>n(!0),children:"\u6253\u5f00\u5bf9\u8bdd\u6846"}),(0,i.jsx)(t.A,{draggble:!0,show:e,onClose:()=>n(!1),title:"\u57fa\u672c\u5bf9\u8bdd\u6846",children:(0,i.jsx)("p",{children:"\u8fd9\u662f\u4e00\u4e2a\u57fa\u672c\u7684\u5bf9\u8bdd\u6846\u5185\u5bb9\u3002"})})]})}},1115:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"max-height-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>n(!0),children:"\u6253\u5f00\u5bf9\u8bdd\u6846"}),(0,i.jsxs)(t.A,{show:e,onClose:()=>n(!1),children:[(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"}),(0,i.jsx)("h1",{children:"\u8fd9\u662f\u4e00\u6bb5\u6587\u672c"})]})]})}},8124:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"maximize-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>n(!0),children:"\u6253\u5f00\u6700\u5927\u5bf9\u8bdd\u6846"}),(0,i.jsx)(t.A,{show:e,onClose:()=>n(!1),max:!0,title:"\u6700\u5927\u5316\u5bf9\u8bdd\u6846",children:(0,i.jsx)("p",{children:"\u8fd9\u662f\u4e00\u4e2a\u6700\u5927\u5316\u663e\u793a\u7684\u5bf9\u8bdd\u6846\u3002"})})]})}},1562:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var r=s(6540),t=s(4180),l=s(2639),i=s(4848);const d=()=>{const[e,n]=(0,r.useState)(!1);return(0,i.jsxs)("div",{className:"type-wrapper",children:[(0,i.jsx)(l.A,{onClick:()=>n(!0),children:"Tip\u5bf9\u8bdd\u6846"}),(0,i.jsx)(t.A,{type:"tip",show:e,onClose:()=>n(!1)})]})}},8453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(6540);const t={},l=r.createContext(t);function i(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);