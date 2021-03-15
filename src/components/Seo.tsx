import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

type Breadcrumb = { label: string; url: string }

const getBreadcrumb = (breadcrumbs: Breadcrumb[], endpoint) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map(({ label, url }, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: label,
      item: `${endpoint}${url}`,
    })),
  }
}

const SEO: React.FC<{
  breadcrumbs?: Array<Breadcrumb>
  description: string
  title: string
}> = ({ description, title, breadcrumbs }) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteUrl
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const siteUrl = site.siteMetadata?.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: "fr",
      }}
      title={title}
      meta={[
        {
          name: "charset",
          content: "UTF-8",
        },
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ]}
    >
      {breadcrumbs && (
        <script type="application/ld+json">
          {JSON.stringify(getBreadcrumb(breadcrumbs, siteUrl))}
        </script>
      )}
    </Helmet>
  )
}

export default SEO
