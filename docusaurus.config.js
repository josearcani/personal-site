// @ts-check
import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Jose Arcani',
  tagline: 'Backend Developer',
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
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
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
          // { to: '/blog', label: 'Blog', position: 'right' },
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
              { label: 'Blog', to: '/blog' },
            ],
          },
          {
            title: 'Social',
            items: [
              { label: 'GitHub', href: 'https://github.com/josearcani' },
              { label: 'LinkedIn', href: 'https://www.linkedin.com/in/josearcani' },
              { label: 'Twitter', href: 'https://twitter.com/jose_arcani' },
              { label: 'Stack Overflow', href: 'https://stackoverflow.com/users/17825417/jose-arcani' },
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
