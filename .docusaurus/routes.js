import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    component: ComponentCreator('/docs', '769'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'e9f'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '505'),
            routes: [
              {
                path: '/docs/blocs_elioblocs/colors/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/colors/bloc', '53f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/conditions/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/conditions/bloc', '44d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/functions/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/functions/bloc', '2ef'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/line/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/line/bloc', '882'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/lists/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/lists/bloc', 'f48'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/loops/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/loops/bloc', '573'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/maths/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/maths/bloc', 'da5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/movements/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/movements/bloc', 'c1c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/obstacles/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/obstacles/bloc', 'fc9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/sounds/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/sounds/bloc', 'd0b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/utilities/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/utilities/bloc', '25c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/blocs_elioblocs/variables/bloc',
                component: ComponentCreator('/docs/blocs_elioblocs/variables/bloc', 'ceb'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/boucles',
                component: ComponentCreator('/docs/category/boucles', 'fd5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/conditions',
                component: ComponentCreator('/docs/category/conditions', '23a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/couleurs',
                component: ComponentCreator('/docs/category/couleurs', '00d'),
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
                path: '/docs/category/exemples',
                component: ComponentCreator('/docs/category/exemples', 'e4c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/fonctions',
                component: ComponentCreator('/docs/category/fonctions', '2b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/les-blocs-elioblocs',
                component: ComponentCreator('/docs/category/les-blocs-elioblocs', '45a'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/les-fonctionnalités-de-eliobot',
                component: ComponentCreator('/docs/category/les-fonctionnalités-de-eliobot', 'a42'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/librairie-python',
                component: ComponentCreator('/docs/category/librairie-python', 'd8b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/listes',
                component: ComponentCreator('/docs/category/listes', 'e3c'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/maths',
                component: ComponentCreator('/docs/category/maths', '34d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/mouvements',
                component: ComponentCreator('/docs/category/mouvements', '55e'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/obstacles',
                component: ComponentCreator('/docs/category/obstacles', '8dc'),
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
                path: '/docs/category/sons',
                component: ComponentCreator('/docs/category/sons', '084'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/suivi-de-ligne',
                component: ComponentCreator('/docs/category/suivi-de-ligne', '726'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/utilitaires',
                component: ComponentCreator('/docs/category/utilitaires', '4ca'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/variables',
                component: ComponentCreator('/docs/category/variables', '19d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/eliobot-assembly',
                component: ComponentCreator('/docs/eliobot-assembly', '2b4'),
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
              },
              {
                path: '/docs/python_lib/intro',
                component: ComponentCreator('/docs/python_lib/intro', 'f34'),
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
