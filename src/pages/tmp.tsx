import React, { useRef } from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/Seo"
import { Navigation } from "../components/Navigation"
import { useLottie } from "../hooks/useLottie"

import configuration from "../configuration/home.json"
import { Footer } from "../components/Footer"
import illustration from "../lottie/fuji.json"

const Hero: React.FC<{
  description: string
  title: string
  heading: string
}> = ({ description, title, heading }) => {
  const ref = useRef<HTMLDivElement>(null)

  useLottie(ref, illustration)

  return (
    <div className="relative z-10">
      <div
        className="hidden lg:block lg:absolute lg:inset-0"
        aria-hidden="true"
      >
        <svg
          className="absolute top-0 left-1/2 transform translate-x-64 translate-y-8"
          width="640"
          height="600"
          fill="none"
          viewBox="0 0 640 600"
        >
          <defs>
            <pattern
              id="9ebea6f4-a1f5-4d96-8c4e-4c2abf658047"
              x="118"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                className="text-gray-300"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            y="40"
            width="640"
            height="450"
            className="text-gray-50"
            fill="currentColor"
          />
          <rect
            x="118"
            width="404"
            height="550"
            fill="url(#9ebea6f4-a1f5-4d96-8c4e-4c2abf658047)"
          />
        </svg>
      </div>
      <div className="relative pb-16 sm:pb-24 lg:pb-32">
        <main className="pt-16 mx-auto max-w-7xl px-4 sm:pt-24 sm:px-6">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <div>
                <h1 className="block text-sm font-semibold uppercase tracking-wide text-gray-500 sm:text-base lg:text-sm xl:text-base">
                  {heading}
                </h1>
                <span
                  className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></span>
              </div>
              <p
                className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                dangerouslySetInnerHTML={{ __html: description }}
              ></p>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <svg
                className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-8 scale-75 origin-top sm:scale-100 lg:hidden"
                width="640"
                height="500"
                fill="none"
                viewBox="0 0 640 500"
                aria-hidden="true"
              >
                <defs>
                  <pattern
                    id="4f4f415c-a0e9-44c2-9601-6ded5a34a13e"
                    x="118"
                    y="0"
                    width="20"
                    height="20"
                    patternUnits="userSpaceOnUse"
                  >
                    <rect
                      x="0"
                      y="0"
                      width="4"
                      height="4"
                      className="text-gray-200"
                      fill="currentColor"
                    />
                  </pattern>
                </defs>
                <rect
                  y="30"
                  width="640"
                  height="350"
                  className="text-gray-50"
                  fill="currentColor"
                />
                <rect
                  x="118"
                  width="404"
                  height="450"
                  fill="url(#4f4f415c-a0e9-44c2-9601-6ded5a34a13e)"
                />
              </svg>
              <div className="relative mx-auto w-full lg:max-w-md">
                <div className="relative block w-full overflow-hidden">
                  <div className="w-full" ref={ref} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

const Article = ({
  illustration,
  title,
  date,
  url,
  description,
  category,
  readingTime = 2,
}) => (
  <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
    <div className="flex-shrink-0">
      <img className="h-48 w-full object-cover" src={illustration} alt="" />
    </div>
    <div className="flex-1 bg-white p-6 flex flex-col justify-between">
      <div className="flex-1">
        <p className="text-sm font-medium text-red-400">
          <Link to={`/articles/${category.url}/`} className="hover:underline">
            {category.name}
          </Link>
        </p>
        <Link to={`/articles/${category.url}/${url}/`} className="block mt-2">
          <p className="text-xl font-semibold text-gray-900">{title}</p>
          <p className="mt-3 text-base text-gray-500">{description}</p>
        </Link>
      </div>
      <div className="mt-6 flex items-center">
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime="2020-03-10">{date}</time>
          <span aria-hidden="true">&middot;</span>
          <span>{readingTime} min de lecture</span>
        </div>
      </div>
    </div>
  </div>
)

const Section = ({ children, title, description = null }) => (
  <div className="container mx-auto">
    <div className="relative bg-gray-50 sm:pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-white h-1/3 sm:h-2/3"></div>
      </div>
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {description && (
            <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
              {description}
            </p>
          )}
        </div>
        <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
          {children}
        </div>
      </div>
    </div>
  </div>
)

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const articlesByCategories = data.articlesByCategories.group
  const recents = data.recents.edges
  const categories = data.categories.edges
  const $categories = categories.reduce((acculumation, { node }) => {
    acculumation[node.id.value] = node
    return acculumation
  }, {})

  return (
    <Layout>
      <SEO
        title={configuration.seo.title}
        description={configuration.seo.description}
      />

      <Navigation noBorder />

      <Hero
        title={configuration.hero.title}
        description={configuration.hero.description}
        heading={configuration.hero.heading}
      />

      <Section
        title={configuration.section.recently.title}
        description={configuration.section.recently.description}
      >
        {recents.map(({ node }) => (
          <Article
            key={node.id}
            url={node.frontmatter.url}
            illustration={node.frontmatter.image.childImageSharp.fluid.base64}
            title={node.frontmatter.title}
            readingTime={node.frontmatter.readingTime}
            description={node.frontmatter.description}
            date={node.frontmatter.date}
            category={$categories[node.frontmatter.category]}
          />
        ))}
      </Section>

      {/* {articlesByCategories.map(({ category, nodes }) => (
        <Section
          key={category}
          title={configuration.section.byCategories.title.replace(
            "{}",
            $categories[category].name
          )}
        >
          {nodes.map(({ frontmatter }) => (
            <Article
              key={frontmatter.url}
              url={frontmatter.url}
              readingTime={frontmatter.readingTime}
              illustration={frontmatter.image.childImageSharp.fluid.base64}
              title={frontmatter.title}
              description={frontmatter.description}
              date={frontmatter.date}
              category={$categories[frontmatter.category]}
            />
          ))}
        </Section>
      ))} */}

      <Footer />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
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
    articlesByCategories: allMarkdownRemark {
      group(field: frontmatter___category) {
        nodes {
          frontmatter {
            description
            title
            readingTime
            url
            date(formatString: "DD MMMM YYYY", locale: "fr")
            image {
              childImageSharp {
                fluid(jpegQuality: 100, fit: COVER, base64Width: 500) {
                  base64
                }
              }
            }
            category
          }
        }
        category: fieldValue
      }
    }
    recents: allMarkdownRemark(
      limit: 3
      sort: { fields: frontmatter___date, order: DESC }
    ) {
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
