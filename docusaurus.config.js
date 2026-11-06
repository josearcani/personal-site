// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jose Arcani',
  tagline: 'Software Engineer · .NET, React & AI-powered systems',
  favicon: 'img/favicon.ico',

  url: 'https://josearcani.com',
  baseUrl: '/',

  organizationName: 'josearcani',
  projectName: 'personal-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  onBrokenAnchors: 'ignore',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {label: 'English', htmlLang: 'en'},
      es: {label: 'Español', htmlLang: 'es'},
    },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        // Blog is disabled for now; posts are kept in /blog for later.
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/jose.jpg',
      navbar: {
        title: 'Jose Arcani',
        logo: {
          alt: 'Jose Arcani Logo',
          src: 'img/devicon/terminal.svg',
          srcDark: 'img/devicon/terminal-white.svg',
        },
        items: [
          {
            type: 'doc',
            position: 'left',
            docId: 'notes',
            label: 'Notes',
          },
          {
            type: 'docSidebar',
            position: 'left',
            sidebarId: 'gists',
            label: 'Gists',
          },
          { to: 'projects', label: 'Projects', position: 'left' },
          {
            href: 'https://github.com/josearcani',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://gitlab.com/josearcani',
            label: 'Gitlab',
            position: 'right',
          },
          { type: 'localeDropdown', position: 'right' },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Content',
            items: [
              { label: 'Notes', to: '/docs/notes' },
              { label: 'Gists', to: '/docs/gists' },
              { label: 'Projects', to: '/projects' },
            ],
          },
          {
            title: 'Social',
            items: [
              { label: 'GitHub', href: 'https://github.com/josearcani' },
              { label: 'GitLab', href: 'https://gitlab.com/josearcani' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/josearcani/' },
            ],
          },
        ],
        copyright: 'Built with Docusaurus.',
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
