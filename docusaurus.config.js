// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

console.log('Site URL is :', process.env.SITE_URL);
console.log('Base URL is :', process.env.BASE_URL);

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Actian Integration Platform',
  tagline: 'Documentation',
  favicon: 'img/logos/favicon.ico',
  //plugins: [require.resolve('docusaurus-lunr-search')],

  // URL will be replaced from environment variable in the Maven build. Set to localhost for local dev.
  url: process.env.SITE_URL || 'https://integration-platform-docs.netlify.app/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  //For netlify, set to / otherwise it will try to find the site at siteurl/guide/
  baseUrl: process.env.BASE_URL || '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ActianCorp', // Usually your GitHub org/user name.
  projectName: 'integration-platform-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'ignore',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  //i18n: {
  //  defaultLocale: 'en',
  //  locales: ['en'],
  //},

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/ActianCorp/integration-platform-docs/tree/suggestions',
          //showLastUpdateTime: true,
         },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          lastmod: 'date',
          changefreq: 'weekly',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
          createSitemapItems: async (params) => {
            const {defaultCreateSitemapItems, ...rest} = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes('/page/'));
          },
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    colorMode: {
      disableSwitch: true,
    },      
    //Navbar items
      //image: 'img/Logos_Actian_3Color-White-Transparent.png',
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
