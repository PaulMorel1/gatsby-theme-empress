module.exports = {
  siteMetadata: {
    title: "Site Name Placeholder",
    description: "Site description placeholder.",
    author: "Author Placeholder",
    siteUrl: "https://www.SiteUrlPlaceholder.com",
  },
  plugins: [
    {
      resolve: "gatsby-theme-empress",
      options: {
        "postsPath": `${__dirname}/content/posts`,
        "pagesPath": `${__dirname}/content/pages`,
        "menusPath": `${__dirname}/content/menus`,
        "theme": 'dark',
        "headerType": "hero",
        "desktopHeroImage": "david-clode-13PjNBaDMcg-unsplash.jpg",
        "mobileHeroImage": "david-clode-13PjNBaDMcg-unsplash.jpg",
        "googleAnalyticsId": "FAKE_ID",
        "empressPath": "", // change this to "/blog" to have your blog live there 
      }
    },
  ],
};
