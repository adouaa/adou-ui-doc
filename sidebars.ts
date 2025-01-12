import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
    // { type: "autogenerated", dirName: "." },
    // 路由在这里添加
    /*  {
      type: "category",
      label: "Tutorial1112",
      items: ["tutorial-basics/create-a-document"], // 子节点
      // 链接，点击时候跳转
      link: {
        type: "doc",
        id: "tutorial-basics/create-a-document",
      },
    },
    {
      type: "category",
      label: "test",
      items: ["tutorial-basics/markdown-features"],
      link: {
        type: "doc",
        id: "tutorial-basics/markdown-features",
      },
    }, */
    {
      type: "category",
      label: "Form 表单",
      items: [
        "form/cascader",
        "form/checkbox",
        "form/input",
        "form/select",
        "form/hint",
      ],
    },
    {
      type: "category",
      label: "Web Elements 网页元素",
      items: [
        "web-elements/button",
        "web-elements/calendar",
        "web-elements/card",
        "web-elements/collapseX",
        "web-elements/collapseY",
        "web-elements/dialog",
        "web-elements/horizontal-scroll-view",
        "web-elements/list",
        "web-elements/list-group",
        "web-elements/popover",
        "web-elements/resizeable-sliderbar",
        "web-elements/random-arrange",
        "web-elements/off-canvas",
        "web-elements/table",
        "web-elements/tabs",
        "web-elements/time-line",
      ],
    },
    {
      type: "category",
      label: "hooks",
      items: [
        "hooks/useNotification",
        "hooks/useLoading",
        "hooks/useToast",
        "hooks/useDrag",
      ],
    },
  ],

  // But you can create a sidebar manually

  /* tutorialSidebar: [
    "intro",
    "hello",
    {
      type: "category",
      label: "Tutorial",
      items: ["tutorial-basics/create-a-document"],
    },
  ], */
};

export default sidebars;
