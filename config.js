const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'http://dlsosoccer.com',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://dlsostatic.blob.core.windows.net/$web/img/logo-md-blue.png',
    logoLink: 'http://dlsosoccer.com',
    title:
      "<a href='http://dlsosoccer.com'><img class='img-responsive' src='https://dlsostatic.blob.core.windows.net/$web/img/1X1.png' alt='DLSO' /></a>",
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    social: ``,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'DLSO Covid-19 Operations Plan and Modified Rules', link: 'https://dlsostatic.blob.core.windows.net/dlso-rules/dlso-covid-19-operations-plan-and-modified-rules.pdf' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='http://dlsosoccer.com'></a><div class='greenCircle'></div><a href='http://dlsosoccer.com'></a>",
  },
  siteMetadata: {
    title: 'Development League of Southern Oregon | DLSO',
    description: 'The Development League of Southern Oregon was created to generate balanced competition among all age groups from U8 through Middle School.',
    ogImage: null,
    docsLocation: 'https://github.com/RonaldLundberg/dlso-gatsby',
    favicon: 'https://dlsostatic.blob.core.windows.net/$web/img/soccer-512x512.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/soccer-512x512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
