const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const languages = require("./src/configuration/languages.json")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const Article = path.resolve(`./src/templates/article.tsx`)
  const Category = path.resolve(`./src/templates/category.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            frontmatter {
              category
              url
              products
            }
          }
        }
        products: allProductsJson {
          nodes {
            price
            stars
            url
            name
            description
            illustration
            advantages
            id: parent {
              ... on File {
                value: name
              }
            }
          }
        }
        categories: allCategoriesJson {
          edges {
            node {
              name
              url
              id: parent {
                ... on File {
                  value: name
                }
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes
  const categories = result.data.categories.edges
  const allProducts = result.data.products.nodes

  categories.forEach(category => {
    createPage({
      path: `/articles/${category.node.id.value}/`,
      component: Category,
      context: {
        category: category.node.id.value,
      },
    })
  })

  posts.forEach((post, index) => {
    const previousPostId =
      index === 0 ? posts[posts.length - 1].id : posts[index - 1].id
    const nextPostId =
      index === posts.length - 1 ? posts[0].id : posts[index + 1].id

    const category = categories.find(
      ({ node }) => node.id.value === post.frontmatter.category
    )
    const products = post.frontmatter.products.map(value =>
      allProducts.find(({ id }) => id.value === value)
    )

    createPage({
      path: `/articles/${category.node.url}/${post.frontmatter.url}/`,
      component: Article,
      context: {
        id: post.id,
        previousPostId,
        nextPostId,
        category: category.node.url,
        products,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: lang === "en" ? "/" : `/${lang}/`,
      component: path.resolve(`./src/templates/index.tsx`),
      context: {
        langKey: lang,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: lang === "en" ? "/pricing/" : `/${lang}/pricing/`,
      component: path.resolve(`./src/templates/pricing.tsx`),
      context: {
        langKey: lang,
      },
    })
  })

  languages.forEach(lang => {
    createPage({
      path: lang === "en" ? "/contact/" : `/${lang}/contact/`,
      component: path.resolve(`./src/templates/contact.tsx`),
      context: {
        langKey: lang,
      },
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
