module.exports = {
  siteMetadata: {
    title: "Site Name Placeholder",
    description: "Site description placeholder.",
    author: "Author Placeholder",
    siteUrl: "https://www.SiteUrlPlaceholder.com",
    twitterHandle: "@TwitterHandlePlaceholder",
    theme: "light",
    headerType: "normal", // change this to "hero" to use the hero banner header
    desktopHeroImage: "",
    mobileHeroImage: "",
  },
  plugins: [
    "gatsby-theme-empress",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              include: ["featured"],
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: { maxWidth: 1024 },
          }
        ]
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/content/posts/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/content/pages/`,
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "menus",
        path: `${__dirname}/content/menus/`,
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-MXFPMHX87J", // Google Analytics Measurement ID. Replace this one with your own.
        ],
      },
    },
  ],
};
