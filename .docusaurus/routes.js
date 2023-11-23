import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '17a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '07b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '4c6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '532'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b5d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'f6e'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '583'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '6d9'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'fdb'),
    exact: true
  },
  {
    path: '/blog/first-blog-post',
    component: ComponentCreator('/blog/first-blog-post', '85a'),
    exact: true
  },
  {
    path: '/blog/long-blog-post',
    component: ComponentCreator('/blog/long-blog-post', 'a9a'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', 'ba7'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '936'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'b89'),
    exact: true
  },
  {
    path: '/blog/tags/facebook',
    component: ComponentCreator('/blog/tags/facebook', '9ae'),
    exact: true
  },
  {
    path: '/blog/tags/hello',
    component: ComponentCreator('/blog/tags/hello', 'c52'),
    exact: true
  },
  {
    path: '/blog/tags/hola',
    component: ComponentCreator('/blog/tags/hola', '3bc'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '35c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a84'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '117'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e20'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '820'),
            routes: [
              {
                path: '/docs/category/docusaurus---basics',
                component: ComponentCreator('/docs/category/docusaurus---basics', '997'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/docusaurus---extras',
                component: ComponentCreator('/docs/category/docusaurus---extras', '54b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/elioblocs',
                component: ComponentCreator('/docs/category/elioblocs', '37c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/elioblocs-1',
                component: ComponentCreator('/docs/category/elioblocs-1', 'bd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/eliobot',
                component: ComponentCreator('/docs/category/eliobot', '168'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/exemples',
                component: ComponentCreator('/docs/category/exemples', 'e4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/python',
                component: ComponentCreator('/docs/category/python', '5ff'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/intro docu',
                component: ComponentCreator('/docs/docusaurus/intro docu', '907'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-basics/congratulations',
                component: ComponentCreator('/docs/docusaurus/tutorial-basics/congratulations', '710'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-basics/create-a-blog-post',
                component: ComponentCreator('/docs/docusaurus/tutorial-basics/create-a-blog-post', '61f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-basics/create-a-document',
                component: ComponentCreator('/docs/docusaurus/tutorial-basics/create-a-document', '800'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-basics/create-a-page',
                component: ComponentCreator('/docs/docusaurus/tutorial-basics/create-a-page', '4b0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-basics/deploy-your-site',
                component: ComponentCreator('/docs/docusaurus/tutorial-basics/deploy-your-site', 'eaa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-basics/markdown-features',
                component: ComponentCreator('/docs/docusaurus/tutorial-basics/markdown-features', '08c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-extras/manage-docs-versions',
                component: ComponentCreator('/docs/docusaurus/tutorial-extras/manage-docs-versions', '35e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/docusaurus/tutorial-extras/translate-your-site',
                component: ComponentCreator('/docs/docusaurus/tutorial-extras/translate-your-site', '454'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/elioblocs/assembly',
                component: ComponentCreator('/docs/elioblocs/assembly', 'a8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/assembly',
                component: ComponentCreator('/docs/eliobot/assembly', 'f04'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/backpacks',
                component: ComponentCreator('/docs/eliobot/backpacks', 'a10'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/battery',
                component: ComponentCreator('/docs/eliobot/battery', '014'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/button',
                component: ComponentCreator('/docs/eliobot/button', '5a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/buzzer',
                component: ComponentCreator('/docs/eliobot/buzzer', '716'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/led',
                component: ComponentCreator('/docs/eliobot/led', '72e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/motors',
                component: ComponentCreator('/docs/eliobot/motors', '530'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/sensors-line',
                component: ComponentCreator('/docs/eliobot/sensors-line', 'd0d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/sensors-proximity',
                component: ComponentCreator('/docs/eliobot/sensors-proximity', 'b2e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot/wifi',
                component: ComponentCreator('/docs/eliobot/wifi', 'c33'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/elioblocs/avoid-obstacles-elioblocs',
                component: ComponentCreator('/docs/examples/elioblocs/avoid-obstacles-elioblocs', '61b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/elioblocs/basic-movements-elioblocs',
                component: ComponentCreator('/docs/examples/elioblocs/basic-movements-elioblocs', 'd8e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/elioblocs/blink-led-elioblocs',
                component: ComponentCreator('/docs/examples/elioblocs/blink-led-elioblocs', 'afc'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/elioblocs/line-following-elioblocs',
                component: ComponentCreator('/docs/examples/elioblocs/line-following-elioblocs', 'cf2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/python/avoid-obstacles-elioblocs',
                component: ComponentCreator('/docs/examples/python/avoid-obstacles-elioblocs', '5e7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/python/basic-movements-elioblocs',
                component: ComponentCreator('/docs/examples/python/basic-movements-elioblocs', '92f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/python/blink-led-elioblocs',
                component: ComponentCreator('/docs/examples/python/blink-led-elioblocs', '706'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/examples/python/line-following-elioblocs',
                component: ComponentCreator('/docs/examples/python/line-following-elioblocs', '4aa'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', 'aed'),
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
    path: '/',
    component: ComponentCreator('/', '2fb'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
