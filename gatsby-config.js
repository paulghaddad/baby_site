module.exports = {
  siteMetadata: {
    title: "Learning Babies",
    description: "Back to Basics: Simple Activities for Babies",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.learningbabies.com',
        policy: [{userAgent: '*', allow: '/'}]
      }
    },
    {
      resolve: "gatsby-plugin-sass",
        options: {
          sassOptions: {
            indentedSyntax: true,
          },
        },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/static/img`,
        name: "uploads",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/img`,
        name: "images",
      },
    },
    `gatsby-plugin-image`,
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-heading-slug",
          "gatsby-remark-relative-images",
          {
            resolve: "gatsby-remark-images",
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {
              destinationDir: "static",
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
      options: {
        develop: true, // Activates purging in npm run develop
        purgeOnly: ["/all.sass"], // applies purging only on the bulma css file
      },
    }, // must be after other CSS plugins
    "gatsby-plugin-netlify", // make sure to keep it last in the array
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-HRZGWZB4KQ"],
        pluginConfig: {
          head: true,
        },
      }
    }
  ],
};
