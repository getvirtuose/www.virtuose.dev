import React from "react"
import { Footer } from "../components/Marketing/Footer"
import { Features } from "../components/Marketing/Features/Features"
import { CTA } from "../components/Marketing/CTA"
import { GradientFeatures } from "../components/Marketing/GradientFeatures"
import { Header } from "../components/Marketing/Header/Header"
import { Hero } from "../components/Marketing/Hero/Hero"
import { LogoCloud } from "../components/Marketing/LogoCloud"
import { Stats } from "../components/Marketing/Stats"
import { Seo } from "../components/Seo/Seo"
import { PageProps } from "gatsby"
import { useIntl } from "react-intl"
import { SinglePricingWithFeatures } from "../components/Marketing/Pricing/SinglePricingWithFeatures"

type Props = {} & PageProps<null, { langKey: string }>

export const Landing: React.FC<Props> = props => {
  const intl = useIntl()

  return (
    <>
      <Seo
        title={intl.formatMessage({ id: "landing/seo/title" })}
        description={intl.formatMessage({ id: "landing/seo/description" })}
        lang={props.pageContext.langKey}
        defaultLangUrl="/"
        langUrls={[
          { url: "/", lang: "en" },
          { url: "/fr/", lang: "fr" },
          { url: "/de/", lang: "de" },
          { url: "/ja/", lang: "ja" },
          { url: "/pt/", lang: "pt" },
          { url: "/es/", lang: "es" },
        ]}
      />
      <div className="bg-white">
        <Header theme="dark" />

        <main>
          <Hero theme="dark" />
          <LogoCloud />
          <Features theme="grid-with-icons" />
          <SinglePricingWithFeatures />
          {/* <GradientFeatures /> */}
          {/* <Stats /> */}
          <CTA />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default Landing
