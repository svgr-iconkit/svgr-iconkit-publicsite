const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const path = require('path')
const dynamicRoute = require('./plugins/dynamic-routes');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'svgr-iconkit',
  tagline: 'Iconkit for react web & mobile',
  url: 'https://svgr-iconkit.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'svgr-iconkit',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        // {
        //   type: 'docsVersionDropdown',
        // },
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Tutorial',
        },
        {
          position: 'left',
          label: 'Icons Explorer',
          to: '/icons-explorer',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://svgr-iconkit.dev/expo-explorer',
          label: 'Expo Explorer',
          position: 'right',
        },
        {
          href: 'https://github.com/svgr-iconkit/svgr-iconkit',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
            {
              label: 'Advanced Usage',
              to: '/docs/advanced-usage',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/svgr-iconkit/svgr-iconkit',
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-module-alias',
      {
          alias: {
              '@apps': path.resolve(__dirname, './src/apps'),
          },
      },
    ],
    [
      dynamicRoute, {
        routes: [
          {
            path: '/icons-explorer',
            exact: false,
            component: '@apps/icons-explorer',
          }
        ]
      }
    ]
  ],
};
