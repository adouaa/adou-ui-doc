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
    component: ComponentCreator('/adou-ui-doc/docs', 'c96'),
    routes: [
      {
        path: '/adou-ui-doc/docs',
        component: ComponentCreator('/adou-ui-doc/docs', 'be3'),
        routes: [
          {
            path: '/adou-ui-doc/docs',
            component: ComponentCreator('/adou-ui-doc/docs', '4a1'),
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
