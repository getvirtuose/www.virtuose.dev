import React from "react"
import { Link, graphql } from "gatsby"

import { Navigation } from "../components/Navigation"
import { Breadcrumb } from "../components/Breadcrumb"
import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Products } from "../components/Products"

const Article = ({ data, pageContext }) => {
  const { previous, next } = data
  const article = data.article.frontmatter
  const products = pageContext.products || []
  const category = data.category

  const breadcrumbs = [
    { label: "Articles", url: "/articles/" },
    { label: category.name, url: `/articles/${article.category}/` },
    {
      label: article.title,
      url: `/articles/${article.category}/${article.url}/`,
    },
  ]

  return (
    <Layout>
      <SEO
        title={article.title}
        description={article.description}
        breadcrumbs={breadcrumbs}
      />
      <Navigation />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <div className="relative pt-8 bg-gray-50 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto">
            <div
              className="w-full h-96 rounded"
              style={{
                backgroundImage: `url(${article.image.childImageSharp.fluid.base64})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>

            <h2 className="mt-8 block text-base text-center text-red-400 font-semibold tracking-wide uppercase">
              {category.name}
            </h2>
            <h1 className="font-serif mt-2 block text-4xl sm:text-6xl text-center font-extrabold tracking-tight text-gray-900">
              {article.title}
            </h1>
            <p className="mt-8 italic text-xl text-gray-500 leading-8">
              {article.description}
            </p>
          </div>
          <div
            className="mt-6 font-serif prose prose-red prose-xl text-gray-500 mx-auto"
            dangerouslySetInnerHTML={{ __html: data.article.html }}
          />
        </div>

        <Products products={products} />

        <nav className="blog-post-nav mt-24">
          <ul className="sm:flex">
            <li className="w-full border flex h-28 items-center px-6">
              <div>
                <div className="text-gray-400">Article précédent</div>
                {previous ? (
                  <Link
                    to={`/articles/${previous.frontmatter.category}/${previous.frontmatter.url}/`}
                    className="text-xl font-serif hover:text-red-400"
                    rel="prev"
                  >
                    ← {previous.frontmatter.title}
                  </Link>
                ) : (
                  <div className="text-xl font-serif">Fin</div>
                )}
              </div>
            </li>
            <li className="w-full sm:justify-end border h-28 flex items-center px-6">
              <div>
                <div className="text-gray-400">Article suivant</div>
                {next ? (
                  <Link
                    to={`/articles/${next.frontmatter.category}/${next.frontmatter.url}/`}
                    className="text-xl font-serif hover:text-red-400"
                    rel="next"
                  >
                    {next.frontmatter.title} →
                  </Link>
                ) : (
                  <div className="text-xl font-serif sm:text-right">Fin</div>
                )}
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </Layout>
  )
}

export default Article

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
    $category: String
  ) {
    article: markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
        category
        url
        date(formatString: "MMMM DD, YYYY", locale: "fr")
        image {
          childImageSharp {
            fluid(jpegQuality: 100, fit: COVER, base64Width: 1000) {
              base64
            }
          }
        }
      }
    }
    category: categoriesJson(url: { eq: $category }) {
      id
      name
      url
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      frontmatter {
        title
        url
        category
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      frontmatter {
        title
        url
        category
      }
    }
  }
`
