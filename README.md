# Gatsby Blog

This project is a sample blog created as a way for me to learn the fundamentals of [Gatsby](https://gatsbyjs.org), the popular static site generator built on React.

Features of Gatsby (and React) that I've utilized in this project include:
* Built-in `pages` directory that automatically generates `/{pageName}` url
* `Layout` component for wrapping shared components around `pages`
* Higher-order components like `Auxiliary`
* Using built-in CSS module functionality via `*.module.scss` files
* `gatsby-config.js` configuration
  * Activating Gatsby plugins
  * Configuring `siteMetadata`
* Creating environment variables
* Using GraphQL to query:
  * `siteMetadata`
  * Files via `gatsby-source-filesystem`
  * Markdown files via `gatsby-transformer-remark`
* Using `gatsby-node.js` to:
  * Add `slug` to Markdown nodes via `onCreateNode` and `createNodeField`
  * Generate new site page nodes for blog posts via `createPages`
* Dynamically generate blog post pages using `Post` template (includes passing `slug` into GraphQL query)