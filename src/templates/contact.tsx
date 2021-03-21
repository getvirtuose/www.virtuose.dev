import React from "react"
import { Footer } from "../components/Marketing/Footer"
import { Header } from "../components/Marketing/Header/Header"
import { Hero } from "../components/Marketing/contact/Hero"
import { Seo } from "../components/Seo/Seo"
import { PageProps } from "gatsby"
import { useIntl } from "react-intl"
import { FAQ } from "../components/Marketing/Pricing/FAQ"
import { Form } from "../components/Marketing/Contact/Form"

type Props = {} & PageProps<null, { langKey: string }>

export const Landing: React.FC<Props> = props => {
  const intl = useIntl()

  return (
    <>
      <Seo
        title={intl.formatMessage({ id: "contact/seo/title" })}
        description={intl.formatMessage({ id: "contact/seo/description" })}
        lang={props.pageContext.langKey}
        defaultLangUrl="/"
        langUrls={[
          { url: "/contact/", lang: "en" },
          { url: "/fr/contact/", lang: "fr" },
          { url: "/de/contact/", lang: "de" },
          { url: "/ja/contact/", lang: "ja" },
          { url: "/pt/contact/", lang: "pt" },
          { url: "/es/contact/", lang: "es" },
        ]}
      />
      <div className="bg-white">
        <Header theme="light" />

        <main>
          <Hero />
          <Form />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Landing
