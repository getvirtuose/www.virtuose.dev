import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Navigation } from "../components/Navigation"

import configuration from "../configuration/articles.json"
import { Breadcrumb } from "../components/Breadcrumb"

const Section = ({ children, title, description = null }) => (
  <div className="container mx-auto">
    <div className="relative px-4 pt-8 pb-20 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        <div className="">
          <h2 className="font-serif text-3xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="max-w-2xl mt-3 text-xl text-gray-500 sm:mt-4">
              {description}
            </p>
          )}
        </div>
        <div className="w-full mt-12">{children}</div>
      </div>
      <hr className="mt-10" />
    </div>
  </div>
)

const Category = ({ title, to }) => (
  <Link
    to={to}
    className="relative flex items-center px-6 py-5 space-x-3 bg-white border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
  >
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between focus:outline-none">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <div className="text-sm font-medium text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </div>
      </div>
    </div>
  </Link>
)

const BlogIndex = ({ data }) => {
  const all = data.all.edges
  const categories = data.categories.edges
  const $categories = categories.reduce((acculumation, { node }) => {
    acculumation[node.id.value] = node
    return acculumation
  }, {})
  const breadcrumbs = [{ label: "Articles", url: "/articles/" }]

  return (
    <Layout background={"bg-gray-50"}>
      <SEO
        title={configuration.seo.title}
        description={configuration.seo.description}
        breadcrumbs={breadcrumbs}
      />

      <Navigation />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <Section
        title={configuration.section.categories.title}
        description={configuration.section.categories.description}
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {categories.map(({ node }) => (
            <Category title={node.name} to={`/articles/${node.id.value}/`} />
          ))}
        </div>
      </Section>

      <Section
        title={configuration.section.articles.title}
        description={configuration.section.articles.description}
      >
        <div className="flex flex-col w-full">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody>
                    {all.map(({ node }, index) => (
                      <Link
                        to={`/articles/${
                          $categories[node.frontmatter.category].url
                        }/${node.frontmatter.url}/`}
                        className={`${
                          index % 2 === 0 ? "bg-white" : "bg-gray-50"
                        } hover:bg-gray-100 cursor-pointer`}
                        style={{
                          display: "table-row",
                        }}
                      >
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">
                          {node.frontmatter.title}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                          {$categories[node.frontmatter.category].name}
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
                          <div className="text-red-400 hover:text-red-600">
                            {configuration.section.articles.read}
                          </div>
                        </td>
                      </Link>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
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
    all: allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "DD MMMM YYYY", locale: "fr")
            description
            readingTime
            url
            image {
              childImageSharp {
                fluid(jpegQuality: 100, fit: COVER, base64Width: 500) {
                  base64
                }
              }
            }
            title
            category
          }
        }
      }
    }
  }
`
