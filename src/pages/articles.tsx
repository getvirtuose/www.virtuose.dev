import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Navigation } from "../components/Navigation"

import configuration from "../configuration/articles.json"
import { Breadcrumb } from "../components/Breadcrumb"

const Section = ({ children, title, description = null }) => (
  <div className="container mx-auto">
    <div className="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="">
          <h2 className="font-serif text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              {description}
            </p>
          )}
        </div>
        <div className="mt-12 w-full">{children}</div>
      </div>
      <hr className="mt-10" />
    </div>
  </div>
)

const Category = ({ title, to }) => (
  <Link
    to={to}
    className="relative rounded-lg border cursor-pointer border-gray-300 bg-white px-6 py-5 flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
  >
    <div className="flex-1 min-w-0">
      <div className="focus:outline-none flex items-center justify-between">
        <p className="text-sm font-medium text-gray-900">{title}</p>
        <div className="text-sm font-medium text-gray-900">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-4 w-4"
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
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
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
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
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {node.frontmatter.title}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {$categories[node.frontmatter.category].name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
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
