/* eslint-disable */

module.exports = {
  pathPrefix: "/personal-v2",
  siteMetadata: {
    title: "Christine Chen",
    description: "Christine Chen's software development portfolio.",
    siteUrl: "https://cublibre.github.io/personal-v2", // TODO: Possibly change
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Christine Chen",
        short_name: "Cublibre",
        icon: "src/images/icon.svg",
        display: "standalone",
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ]
};
