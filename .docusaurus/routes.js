import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/adou-ui-doc/__docusaurus/debug',
    component: ComponentCreator('/adou-ui-doc/__docusaurus/debug', '6f1'),
    exact: true
  },
  {
    path: '/adou-ui-doc/__docusaurus/debug/config',
    component: ComponentCreator('/adou-ui-doc/__docusaurus/debug/config', '818'),
    exact: true
  },
  {
    path: '/adou-ui-doc/__docusaurus/debug/content',
    component: ComponentCreator('/adou-ui-doc/__docusaurus/debug/content', '09f'),
    exact: true
  },
  {
    path: '/adou-ui-doc/__docusaurus/debug/globalData',
    component: ComponentCreator('/adou-ui-doc/__docusaurus/debug/globalData', 'a44'),
    exact: true
  },
  {
    path: '/adou-ui-doc/__docusaurus/debug/metadata',
    component: ComponentCreator('/adou-ui-doc/__docusaurus/debug/metadata', 'c16'),
    exact: true
  },
  {
    path: '/adou-ui-doc/__docusaurus/debug/registry',
    component: ComponentCreator('/adou-ui-doc/__docusaurus/debug/registry', '2f7'),
    exact: true
  },
  {
    path: '/adou-ui-doc/__docusaurus/debug/routes',
    component: ComponentCreator('/adou-ui-doc/__docusaurus/debug/routes', 'e67'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog',
    component: ComponentCreator('/adou-ui-doc/blog', 'eb6'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/archive',
    component: ComponentCreator('/adou-ui-doc/blog/archive', '299'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/authors',
    component: ComponentCreator('/adou-ui-doc/blog/authors', 'd6e'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/adou-ui-doc/blog/authors/all-sebastien-lorber-articles', 'a89'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/authors/yangshun',
    component: ComponentCreator('/adou-ui-doc/blog/authors/yangshun', 'c2c'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/first-blog-post',
    component: ComponentCreator('/adou-ui-doc/blog/first-blog-post', '37c'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/long-blog-post',
    component: ComponentCreator('/adou-ui-doc/blog/long-blog-post', '163'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/mdx-blog-post',
    component: ComponentCreator('/adou-ui-doc/blog/mdx-blog-post', '8ce'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/tags',
    component: ComponentCreator('/adou-ui-doc/blog/tags', '247'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/tags/docusaurus',
    component: ComponentCreator('/adou-ui-doc/blog/tags/docusaurus', 'c81'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/tags/facebook',
    component: ComponentCreator('/adou-ui-doc/blog/tags/facebook', '94b'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/tags/hello',
    component: ComponentCreator('/adou-ui-doc/blog/tags/hello', '7a5'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/tags/hola',
    component: ComponentCreator('/adou-ui-doc/blog/tags/hola', '642'),
    exact: true
  },
  {
    path: '/adou-ui-doc/blog/welcome',
    component: ComponentCreator('/adou-ui-doc/blog/welcome', 'a36'),
    exact: true
  },
  {
    path: '/adou-ui-doc/docs',
    component: ComponentCreator('/adou-ui-doc/docs', 'be0'),
    routes: [
      {
        path: '/adou-ui-doc/docs',
        component: ComponentCreator('/adou-ui-doc/docs', '0a5'),
        routes: [
          {
            path: '/adou-ui-doc/docs',
            component: ComponentCreator('/adou-ui-doc/docs', 'd35'),
            routes: [
              {
                path: '/adou-ui-doc/docs/form/cascader',
                component: ComponentCreator('/adou-ui-doc/docs/form/cascader', '351'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/form/checkbox',
                component: ComponentCreator('/adou-ui-doc/docs/form/checkbox', 'dc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/form/hint',
                component: ComponentCreator('/adou-ui-doc/docs/form/hint', 'b34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/form/input',
                component: ComponentCreator('/adou-ui-doc/docs/form/input', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/form/select',
                component: ComponentCreator('/adou-ui-doc/docs/form/select', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useDrag',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useDrag', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useLoading',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useLoading', '26e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useNotification',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useNotification', 'd5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useToast',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useToast', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/intro',
                component: ComponentCreator('/adou-ui-doc/docs/intro', '66a'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/congratulations', 'bc9'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/create-a-blog-post', '6c2'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/create-a-document', '99c'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/create-a-page', 'b3f'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/deploy-your-site', '8c4'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/markdown-features', 'ceb'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/test',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/test', '8e9'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-extras/manage-docs-versions', '1b9'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-extras/translate-your-site', '89b'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/web-elements/button',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/button', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/calendar',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/calendar', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/card',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/card', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/collapseX',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/collapseX', '7e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/collapseY',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/collapseY', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/dialog',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/dialog', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/horizontal-scroll-view',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/horizontal-scroll-view', '2ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/list',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/list', 'fda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/list-group',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/list-group', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/off-canvas',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/off-canvas', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/popover',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/popover', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/random-arrange',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/random-arrange', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/resizeable-sliderbar',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/resizeable-sliderbar', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/slider',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/slider', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/table',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/table', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/tabs',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/tabs', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/time-line',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/time-line', '6e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/tooltip',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/tooltip', '37b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
nent: ComponentCreator('/adou-ui-doc/web-elements/dialog/ClickOutside', 'ae5'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/dialog/CustomFooterText',
    component: ComponentCreator('/adou-ui-doc/web-elements/dialog/CustomFooterText', 'e29'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/dialog/Draggable',
    component: ComponentCreator('/adou-ui-doc/web-elements/dialog/Draggable', '2ad'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/dialog/MaxHeight',
    component: ComponentCreator('/adou-ui-doc/web-elements/dialog/MaxHeight', '818'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/dialog/Maximize',
    component: ComponentCreator('/adou-ui-doc/web-elements/dialog/Maximize', '6d3'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/dialog/Type',
    component: ComponentCreator('/adou-ui-doc/web-elements/dialog/Type', '8ed'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/drawer/',
    component: ComponentCreator('/adou-ui-doc/web-elements/drawer/', '578'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/drawer/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/drawer/Basic', 'bb7'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/drawer/CustomContent',
    component: ComponentCreator('/adou-ui-doc/web-elements/drawer/CustomContent', '7b2'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/drawer/CustomTrigger',
    component: ComponentCreator('/adou-ui-doc/web-elements/drawer/CustomTrigger', 'a87'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/drawer/NoClickOutside',
    component: ComponentCreator('/adou-ui-doc/web-elements/drawer/NoClickOutside', 'af9'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/drawer/Placement',
    component: ComponentCreator('/adou-ui-doc/web-elements/drawer/Placement', '513'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/horizontal-scroll-view/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/horizontal-scroll-view/Basic', '6d3'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/ActiveOnClick',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/ActiveOnClick', '668'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/Basic', 'd5b'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/data',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/data', '9c0'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/DefaultFirst',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/DefaultFirst', '5c3'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/MaxHeight',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/MaxHeight', 'd5e'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/Multiple',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/Multiple', '609'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/Render',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/Render', '043'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list-group/Split',
    component: ComponentCreator('/adou-ui-doc/web-elements/list-group/Split', 'a69'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/ActiveId',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/ActiveId', 'fd8'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/Async',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/Async', '35d'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/Basic', '12a'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/Custom',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/Custom', '804'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/data',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/data', '164'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/DefaultExpand',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/DefaultExpand', 'fa1'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/OptBar',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/OptBar', 'a13'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/list/ShowLine',
    component: ComponentCreator('/adou-ui-doc/web-elements/list/ShowLine', '1f9'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/popover/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/popover/Basic', '706'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/popover/Show',
    component: ComponentCreator('/adou-ui-doc/web-elements/popover/Show', 'd8c'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/popover/Trigger',
    component: ComponentCreator('/adou-ui-doc/web-elements/popover/Trigger', '874'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/random-arrange/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/random-arrange/Basic', 'b4e'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/random-arrange/CustomAnimation',
    component: ComponentCreator('/adou-ui-doc/web-elements/random-arrange/CustomAnimation', 'ffc'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/random-arrange/RefControl',
    component: ComponentCreator('/adou-ui-doc/web-elements/random-arrange/RefControl', '8af'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/resizeable-sliderbar/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/resizeable-sliderbar/Basic', '247'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/resizeable-sliderbar/InitialWidth',
    component: ComponentCreator('/adou-ui-doc/web-elements/resizeable-sliderbar/InitialWidth', '892'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/resizeable-sliderbar/ShowToggleBtn',
    component: ComponentCreator('/adou-ui-doc/web-elements/resizeable-sliderbar/ShowToggleBtn', '9f0'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/slider/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/slider/Basic', '32b'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/slider/Input',
    component: ComponentCreator('/adou-ui-doc/web-elements/slider/Input', 'e1d'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/slider/Marks',
    component: ComponentCreator('/adou-ui-doc/web-elements/slider/Marks', '7c3'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/slider/Range',
    component: ComponentCreator('/adou-ui-doc/web-elements/slider/Range', '34e'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/slider/Step',
    component: ComponentCreator('/adou-ui-doc/web-elements/slider/Step', 'f97'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/Align',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/Align', 'efa'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/Basic', '49b'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/basicData',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/basicData', '6d6'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/Checked',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/Checked', '821'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/ClickChecked',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/ClickChecked', '216'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/Collapse',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/Collapse', '10b'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/data',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/data', 'd1c'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/ExpandAll',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/ExpandAll', 'dab'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/HeadGroup',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/HeadGroup', 'ed9'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/headGroupData',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/headGroupData', '529'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/Select',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/Select', 'a89'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/ShowIndex',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/ShowIndex', '541'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/ShowTip',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/ShowTip', '2ed'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/Sortable',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/Sortable', '800'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/TableBGC',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/TableBGC', '096'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/table/treeData',
    component: ComponentCreator('/adou-ui-doc/web-elements/table/treeData', 'ab3'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tabs/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/tabs/Basic', '128'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tabs/ClearOnChange',
    component: ComponentCreator('/adou-ui-doc/web-elements/tabs/ClearOnChange', '2fe'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tabs/ExtraContent',
    component: ComponentCreator('/adou-ui-doc/web-elements/tabs/ExtraContent', '028'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tabs/GoTo',
    component: ComponentCreator('/adou-ui-doc/web-elements/tabs/GoTo', '984'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tabs/Style',
    component: ComponentCreator('/adou-ui-doc/web-elements/tabs/Style', 'bcf'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tabs/Test',
    component: ComponentCreator('/adou-ui-doc/web-elements/tabs/Test', '5fb'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/time-line/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/time-line/Basic', 'bc8'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/time-line/CustomIcon',
    component: ComponentCreator('/adou-ui-doc/web-elements/time-line/CustomIcon', '07e'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/time-line/CustomRender',
    component: ComponentCreator('/adou-ui-doc/web-elements/time-line/CustomRender', '13f'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/time-line/Horizontal',
    component: ComponentCreator('/adou-ui-doc/web-elements/time-line/Horizontal', '14c'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tooltip/Basic',
    component: ComponentCreator('/adou-ui-doc/web-elements/tooltip/Basic', '374'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tooltip/Position',
    component: ComponentCreator('/adou-ui-doc/web-elements/tooltip/Position', 'fc3'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tooltip/Style',
    component: ComponentCreator('/adou-ui-doc/web-elements/tooltip/Style', 'c40'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tooltip/Trigger',
    component: ComponentCreator('/adou-ui-doc/web-elements/tooltip/Trigger', '121'),
    exact: true
  },
  {
    path: '/adou-ui-doc/web-elements/tooltip/Wrap',
    component: ComponentCreator('/adou-ui-doc/web-elements/tooltip/Wrap', 'cb6'),
    exact: true
  },
  {
    path: '/adou-ui-doc/docs',
    component: ComponentCreator('/adou-ui-doc/docs', 'be0'),
    routes: [
      {
        path: '/adou-ui-doc/docs',
        component: ComponentCreator('/adou-ui-doc/docs', '0a5'),
        routes: [
          {
            path: '/adou-ui-doc/docs',
            component: ComponentCreator('/adou-ui-doc/docs', 'd35'),
            routes: [
              {
                path: '/adou-ui-doc/docs/form/cascader',
                component: ComponentCreator('/adou-ui-doc/docs/form/cascader', '351'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/form/checkbox',
                component: ComponentCreator('/adou-ui-doc/docs/form/checkbox', 'dc6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/form/hint',
                component: ComponentCreator('/adou-ui-doc/docs/form/hint', 'b34'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/form/input',
                component: ComponentCreator('/adou-ui-doc/docs/form/input', '92e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/form/select',
                component: ComponentCreator('/adou-ui-doc/docs/form/select', '6f9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useDrag',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useDrag', 'fa9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useLoading',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useLoading', '26e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useNotification',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useNotification', 'd5b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/hooks/useToast',
                component: ComponentCreator('/adou-ui-doc/docs/hooks/useToast', 'b87'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/intro',
                component: ComponentCreator('/adou-ui-doc/docs/intro', '66a'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/congratulations',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/congratulations', 'bc9'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/create-a-blog-post', '6c2'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/create-a-document',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/create-a-document', '99c'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/create-a-page',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/create-a-page', 'b3f'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/deploy-your-site', '8c4'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/markdown-features',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/markdown-features', 'ceb'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-basics/test',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-basics/test', '8e9'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-extras/manage-docs-versions', '1b9'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/tutorial-extras/translate-your-site',
                component: ComponentCreator('/adou-ui-doc/docs/tutorial-extras/translate-your-site', '89b'),
                exact: true
              },
              {
                path: '/adou-ui-doc/docs/web-elements/button',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/button', 'ac4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/calendar',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/calendar', '145'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/card',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/card', '59d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/collapseX',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/collapseX', '7e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/collapseY',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/collapseY', '56a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/dialog',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/dialog', '8de'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/horizontal-scroll-view',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/horizontal-scroll-view', '2ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/list',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/list', 'fda'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/list-group',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/list-group', '9a7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/off-canvas',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/off-canvas', '9c8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/popover',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/popover', '99b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/random-arrange',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/random-arrange', 'c41'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/resizeable-sliderbar',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/resizeable-sliderbar', 'e45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/slider',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/slider', '694'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/table',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/table', '10f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/tabs',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/tabs', 'daa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/time-line',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/time-line', '6e8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/adou-ui-doc/docs/web-elements/tooltip',
                component: ComponentCreator('/adou-ui-doc/docs/web-elements/tooltip', '37b'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/adou-ui-doc/',
    component: ComponentCreator('/adou-ui-doc/', '917'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
