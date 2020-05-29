const urljoin = require("url-join");
const config = require("./site-config");
require("dotenv").config() // for later use with environment variables

module.exports = {
  pathPrefix: config.pathPrefix === "" ? "/" : config.pathPrefix,
  siteMetadata: {
    siteUrl: urljoin(config.pathPrefix, config.siteUrl),
    title: config.siteTitle,
    description: config.siteDescriptionShort,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-material-ui",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "${__dirname}/src/images",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "static",
        path: `${__dirname}/static/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "events",
        path: `${__dirname}/content/events/`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "bios",
        path: `${__dirname}/content/bios/`
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Poppins`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: "#663399",
        theme_color: "#663399",
        display: "minimal-ui",
        icon: config.siteLogo, // This path is relative to the root of the site.
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    "gatsby-plugin-offline",
  ],
}
