module.exports = themeOptions => {
  console.log("gatsby-theme-empress options");
  console.log(themeOptions);

  const config = {
    siteMetadata: {
      theme: themeOptions.theme || "light",
      empressPath: themeOptions.empressPath || "", // change to /blog to host your blog at /blog
      header: {
        type: themeOptions.header.type || themeOptions.headerType || "normal", // change this to "hero" to use the hero banner header
        desktopHeroImage: themeOptions.header?.desktopHeroImage || themeOptions.desktopHeroImage || "",
        mobileHeroImage: themeOptions.header?.mobileHeroImage || themeOptions.mobileHeroImage || "",
      }
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      "gatsby-plugin-sharp",
      "gatsby-transformer-json",
      "gatsby-transformer-sharp",
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
          path: themeOptions.postsPath || '/content/posts',
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "pages",
          path: themeOptions.pagesPath || '/content/posts',
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "menus",
          path: themeOptions.menusPath || '/content/menus',
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "authors",
          path: themeOptions.authorsPath || '/content/authors',
        }
      },
      {
        resolve: `gatsby-plugin-google-gtag`,
        options: {
          // You can add multiple tracking ids and a pageview event will be fired for all of them.
          trackingIds: [
            themeOptions.googleAnalyticsId || "G-MXFPMHX87J", // Google Analytics Measurement ID. Replace this one with your own.
          ],
        },
      },
    ],
  };
  return config;
};
