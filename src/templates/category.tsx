import React from "react"
import { Link, graphql } from "gatsby"

import { Navigation } from "../components/Navigation"
import { Breadcrumb } from "../components/Breadcrumb"
import Layout from "../components/Layout"
import SEO from "../components/Seo"

import configuration from "../configuration/category.json"

const Section = ({ children, title, description = null }) => (
  <div className="container mx-auto">
    <div className="relative pt-8 pb-20 px-4 sm:px-6 lg:pt-8 lg:pb-8 lg:px-8">
      <div className="relative max-w-7xl mx-auto">
        <div className="">
          <h1 className="font-serif text-3xl tracking-tight font-extrabold text-gray-900 sm:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
              {description}
            </p>
          )}
        </div>
        <div className="mt-12 w-full">{children}</div>
      </div>
    </div>
  </div>
)

const Category = ({ data }) => {
  const articles = data.articles.edges
  const category = data.category

  const breadcrumbs = [
    { label: "Articles", url: "/articles/" },
    { label: category.name, url: `/articles/${category.url}/` },
  ]

  return (
    <Layout background={"bg-gray-50"}>
      <SEO
        title={configuration.seo.title.replace("{}", category.name)}
        description={configuration.seo.description.replace("{}", category.name)}
        breadcrumbs={breadcrumbs}
      />
      <Navigation />
      <Breadcrumb breadcrumbs={breadcrumbs} />

      <Section
        title={configuration.section.articles.title.replace(
          "{}",
          category.name
        )}
        description={configuration.section.articles.description.replace(
          "{}",
          category.name.toLowerCase()
        )}
      >
        <div className="flex flex-col w-full">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden border border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody>
                    {articles.map(({ node }, index) => (
                      <Link
                        to={`/articles/${category.url}/${node.frontmatter.url}/`}
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

export default Category

export const pageQuery = graphql`
  query CategoryPage($category: String) {
    articles: allMarkdownRemark(
      filter: { frontmatter: { category: { eq: $category } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            url
          }
        }
      }
    }
    category: categoriesJson(url: { eq: $category }) {
      id
      name
      url
    }
  }
`
