const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const path = require("path");
const dynamicRoute = require("./plugins/dynamic-routes");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "svgr-iconkit",
  tagline: "SVG Iconkit for react web & mobile",
  url: "https://svgr-iconkit.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  organizationName: "svgr-iconkit", // Usually your GitHub org/user name.
  projectName: "svgr-iconkit-publicsite", // Usually your repo name.
  themes: ["@docusaurus/theme-live-codeblock"],
  themeConfig: {
    image: "img/64.png",
    navbar: {
      title: "svgr-iconkit",
      logo: {
        alt: "SVGR IconKit",
        src: "img/logo.svg",
        href: "/",
        target: "_self",
        width: 32,
        height: 32,
      },
      items: [
        {
          type: "docsVersionDropdown",
        },
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          position: "left",
          label: "Icons Explorer",
          to: "/explorer",
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'right',
        // },
        // {
        //   href: "https://expo.dev/@lemankk/svgr-iconkit-expo-explorer",
        //   label: "Expo Explorer",
        //   position: "right",
        // },
        {
          href: "https://github.com/svgr-iconkit/svgr-iconkit",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Intro",
              to: "/docs/intro",
            },
            {
              label: "Explorer",
              to: "/explorer",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/svgr-iconkit/svgr-iconkit",
            },
          ],
        },
      ],
      copyright: `Built with Docusaurus & @bootstrap-styled.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/svgr-iconkit/svgr-iconkit-publicsite/edit/master/",
          lastVersion: "current",
          versions: {
            current: {
              label: "0.2.0",
              path: "0.2.0",
            },
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
  plugins: [
    [
      "docusaurus-plugin-module-alias",
      {
        alias: {
          "@apps": path.resolve(__dirname, "./src/apps"),
        },
      },
    ],
    [
      "@docusaurus/plugin-google-gtag",
      {
        // You can also use your "G-" Measurement ID here.
        trackingID: "GTM-T35974N",
        // Optional fields.
        anonymizeIP: true, // Should IPs be anonymized?
      },
    ],
    [
      '@docusaurus/plugin-sitemap',
      {
        changefreq: 'weekly',
        priority: 0.5,
      },
    ],
    [
      dynamicRoute,
      {
        routes: [
          // {
          //   path: "/expo-explorer",
          //   exact: true,
          //   type: "redirect",
          //   to: "/explorer"
          // },
          {
            path: "/explorer",
            exact: false,
            component: "@apps/icons-explorer",
          },
          {
            path: "/expo-explorer",
            exact: true,
            component: "@apps/expo-explorer",
          },
        ],
      },
    ],
  ],
};
