/* eslint-disable */

module.exports = {
  pathPrefix: '/personal-v2',
  siteMetadata: {
    title: 'Christine Chen',
    description: "Christine Chen's software development portfolio.",
    siteUrl: 'https://cublibre.github.io/personal-v2', // TODO: Possibly change
    image: '/images/banner.png',
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Christine Chen',
        short_name: 'Cublibre',
        start_url: '/',
        description: "Christine Chen's software developer portfolio.",
        background_color: '#1e293b',
        theme_color: '#f486c0',
        display: 'standalone',
        icon: 'src/images/icon.svg',
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
        ],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: './content/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'hero',
        path: './content/hero/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'about',
        path: './content/about/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'exp',
        path: './content/exp/',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './content/projects/',
      },
    },
  ],
};
