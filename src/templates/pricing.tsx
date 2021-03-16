import React from "react"
import { Footer } from "../components/Marketing/Footer"
import { AlternativeFeatures } from "../components/Marketing/AlternativesFeatures"
import { CTA } from "../components/Marketing/CTA"
import { GradientFeatures } from "../components/Marketing/GradientFeatures"
import { Header } from "../components/Marketing/Header"
import { Hero } from "../components/Marketing/Hero"
import { LogoCloud } from "../components/Marketing/LogoCloud"
import { Stats } from "../components/Marketing/Stats"
import { Seo } from "../components/Seo/Seo"
import { PageProps } from "gatsby"
import { useIntl } from "react-intl"
import { SinglePricingWithFeatures } from "../components/Marketing/Pricing/SinglePricingWithFeatures"
import { FAQ } from "../components/Marketing/Pricing/FAQ"

type Props = {} & PageProps<null, { langKey: string }>

export const Landing: React.FC<Props> = props => {
  const intl = useIntl()

  return (
    <>
      <Seo
        title={intl.formatMessage({ id: "pricing/seo/title" })}
        description={intl.formatMessage({ id: "pricing/seo/description" })}
        lang={props.pageContext.langKey}
        defaultLangUrl="/"
        langUrls={[
          { url: "/pricing/", lang: "en" },
          { url: "/fr/pricing/", lang: "fr" },
          { url: "/de/pricing/", lang: "de" },
          { url: "/ja/pricing/", lang: "ja" },
          { url: "/pt/pricing/", lang: "pt" },
          { url: "/es/pricing/", lang: "es" },
        ]}
      />
      <div className="bg-white">
        <Header />

        <main>
          <SinglePricingWithFeatures />
          <LogoCloud />
          <FAQ />
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Landing
