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
    component: ComponentCreator('/docs', 'ed2'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '701'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '971'),
            routes: [
              {
                path: '/docs/blocs_elioblocs/colors/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/colors/bloc', 'ae0'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/conditions/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/conditions/bloc', 'b9a'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/functions/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/functions/bloc', '472'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/line/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/line/bloc', '3be'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/lists/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/lists/bloc', '316'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/loops/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/loops/bloc', 'd3d'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/maths/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/maths/bloc', '46c'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/movements/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/movements/bloc', '3c1'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/obstacles/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/obstacles/bloc', 'f97'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/sounds/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/sounds/bloc', 'acc'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/utilities/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/utilities/bloc', '916'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/variables/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/variables/bloc', '5fd'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/boucles',
                component: ComponentCreator('/docs/category/boucles', '4dd'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/conditions',
                component: ComponentCreator('/docs/category/conditions', '050'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/couleurs',
                component: ComponentCreator('/docs/category/couleurs', '633'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/exemples',
                component: ComponentCreator('/docs/category/exemples', '21d'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/fonctions',
                component: ComponentCreator('/docs/category/fonctions', '885'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/les-blocs-elioblocs',
                component: ComponentCreator('/docs/category/les-blocs-elioblocs', '894'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/les-fonctionnalités-de-eliobot',
                component: ComponentCreator('/docs/category/les-fonctionnalités-de-eliobot', 'a5a'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/librairie-python',
                component: ComponentCreator('/docs/category/librairie-python', '266'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/listes',
                component: ComponentCreator('/docs/category/listes', '261'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/maths',
                component: ComponentCreator('/docs/category/maths', 'b71'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/mouvements',
                component: ComponentCreator('/docs/category/mouvements', 'a5e'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/obstacles',
                component: ComponentCreator('/docs/category/obstacles', '22c'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/programmer-avec-elioblocs',
                component: ComponentCreator('/docs/category/programmer-avec-elioblocs', '2e0'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/programmer-avec-elioblocs-1',
                component: ComponentCreator('/docs/category/programmer-avec-elioblocs-1', 'bb9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/programmer-en-python',
                component: ComponentCreator('/docs/category/programmer-en-python', '44d'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/programmer-en-python-1',
                component: ComponentCreator('/docs/category/programmer-en-python-1', '704'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/sons',
                component: ComponentCreator('/docs/category/sons', '812'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/suivi-de-ligne',
                component: ComponentCreator('/docs/category/suivi-de-ligne', '917'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/utilitaires',
                component: ComponentCreator('/docs/category/utilitaires', '219'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/category/variables',
                component: ComponentCreator('/docs/category/variables', 'a18'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/backpacks',
                component: ComponentCreator('/docs/eliobot/backpacks', '1f9'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/battery',
                component: ComponentCreator('/docs/eliobot/battery', 'b4f'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/button',
                component: ComponentCreator('/docs/eliobot/button', '22a'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/buzzer',
                component: ComponentCreator('/docs/eliobot/buzzer', 'cd6'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/led',
                component: ComponentCreator('/docs/eliobot/led', '509'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/motors',
                component: ComponentCreator('/docs/eliobot/motors', '546'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/sensors-line',
                component: ComponentCreator('/docs/eliobot/sensors-line', '745'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/sensors-proximity',
                component: ComponentCreator('/docs/eliobot/sensors-proximity', 'fe2'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/eliobot/wifi',
                component: ComponentCreator('/docs/eliobot/wifi', '2ff'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/intro',
                component: ComponentCreator('/docs/intro', '693'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/python_lib/intro',
                component: ComponentCreator('/docs/python_lib/intro', 'bae'),
                exact: true,
                sidebar: "docSidebar"
              },
              {
                path: '/docs/tutorial/elioblocs/avoid-obstacles-elioblocs',
                component: ComponentCreator('/docs/tutorial/elioblocs/avoid-obstacles-elioblocs', '9ed'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/elioblocs/basic-movements-elioblocs',
                component: ComponentCreator('/docs/tutorial/elioblocs/basic-movements-elioblocs', 'b83'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/elioblocs/blink-led-elioblocs',
                component: ComponentCreator('/docs/tutorial/elioblocs/blink-led-elioblocs', 'f96'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/elioblocs/line-following-elioblocs',
                component: ComponentCreator('/docs/tutorial/elioblocs/line-following-elioblocs', '30a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/eliobot-assembly',
                component: ComponentCreator('/docs/tutorial/eliobot-assembly', 'c66'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/python/avoid-obstacles-elioblocs',
                component: ComponentCreator('/docs/tutorial/python/avoid-obstacles-elioblocs', '785'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/python/basic-movements-elioblocs',
                component: ComponentCreator('/docs/tutorial/python/basic-movements-elioblocs', '82a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/python/blink-led-elioblocs',
                component: ComponentCreator('/docs/tutorial/python/blink-led-elioblocs', '437'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tutorial/python/line-following-elioblocs',
                component: ComponentCreator('/docs/tutorial/python/line-following-elioblocs', '961'),
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
