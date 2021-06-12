# Empress

## Description

Empress is a feature complete static blog theme. If you finished the Gatsby tutorial and liked Gatsby, but you didn't want to waste time re-inventing basic features like tags, then this might be the right package for you.

The goal of this project is a blog for the 21st century that has all the core features of a static blog, without any bloat.

### Features

Empress is a fully featured Gatsby blog starter.

- Tags
- Menus
- Themes
- Pinned posts
- Deployment to AWS (S3/CloudFront)
- Redirects
- Hero banner
- Google Analytics

### But why no SASS? Styled Components? Typography?

When I tried to set up a Gatsby blog using other starters/themes, I found that I couldn't upgrade to the latest version of major dependencies, such as Gatsby, due to a broken web of dependencies. For this reason I wanted to keep this blog as vanilla as possible.

You can add any libraries that you like.

## How to install

1. This version of Empress is a theme, so you can install it from npm. See (https://www.npmjs.com/package/gatsby-theme-empress)[https://www.npmjs.com/package/gatsby-theme-empress].

```
npm install gatsby-theme-empress
```

2. Add the configuration to gatsby-config.js.

```
// gatsby-config.js
module.exports = {
  plugins: [
    "gatsby-theme-empress"
  ],
}
```

## Available options

The available options allow you to set up basic properties of your site.

```
    {
      resolve: "gatsby-theme-empress",
      options: {
        "postsPath": `${__dirname}\\content\\posts`,
        "pagesPath": `${__dirname}\\content\\pages`,
        "menusPath": `${__dirname}\\content\\menus`,
        "theme": 'dark',
        "headerType": "hero",
        "desktopHeroImage": "filename_in_static/images.jpg",
        "mobileHeroImage": "filename_in_static/images.jpg",
        "googleAnalyticsId": "FAKE_ID",
      }
    },
```

### Or try the starter

Gatsby recommends using a theme rather than a starter, but if you want to start from the starter, then get it from GitHub: https://github.com/PaulMorel1/eMPress

## Requirements

To use it out-of-the-box as intended, you need the following things.

- a free GitHub account
- a free AWS account
- knowledge of git and markdown

That allows you to hook into the power of AWS S3/CloudFront and GitHub Actions. Together these services will allow you to run a fast, modern blog without paying a cent (usually).

## Development

Unlike the starter version of Empress, the theme version is a yarn project. So you will use yarn rather than npm. Be careful mixing the two of them. Thar be dragons.

```
yarn install
yarn run dev
```

## Build

```
yarn run build
```

## Deploy on AWS using GitHub Actions

If you are using the built-in GitHub Actions integration, then just commit your new stuff and push to master on GitHub. Make sure you go through the setup on AWS and GitHub. You must create a public S3 bucket and a CloudFront distribution then save secret keys into your repo settings on GitHub.

I'm not entirely sure that the AWS deployment script can be distributed with the theme, so see https://github.com/PaulMorel1/eMPress/blob/master/.github/workflows/buildAndDeployToS3.yml.

## How do I make a new visual theme?

See `src\styles\themes\dark.css` for example.

1. Copy `dark.css` into a new file.
2. Update the css file. Add the new rules for your theme. The class name at the top is the name of your theme.
3. Modify `src\styles\themes\themes.js`. Add the import for your new theme.
4. Modify `gatsby-config.js`. Update `siteMetadata.theme` to match your new theme name. So if your theme name is `marks-dark-theme` then you should set theme to `marks-dark-theme`.

## How do I set the hero image?

1. Set `headerType` to `hero` in  `gatsby-config.js`.
2. Then set the fields `desktopHeroImage` and `mobileHeroImage` to the filenames of the images in `/static/images`.

## How do I configure Google Analytics?

1. Update the `trackingIds` field in `gatsby-config.js`. You must have signed up for Google Analytics already. Like everything else in an Empress Blog, it is free.

## How to contribute

Fork the repo and open a PR, then at-mention me to request a review. I'm open to any features that don't add significant dependencies.

## License

CC BY-NC 3.0: https://creativecommons.org/licenses/by-nc/3.0/