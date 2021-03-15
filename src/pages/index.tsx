import React from "react"
import { Footer } from "../components/Marketing/Footer"
import { AlternativeFeatures } from "../components/Marketing/AlternativesFeatures"
import { CTA } from "../components/Marketing/CTA"
import { GradientFeatures } from "../components/Marketing/GradientFeatures"
import { Header } from "../components/Marketing/Header"
import { Hero } from "../components/Marketing/Hero"
import { LogoCloud } from "../components/Marketing/LogoCloud"
import { Stats } from "../components/Marketing/Stats"

type Props = {}

export const Landing: React.FC<Props> = props => {
  return (
    <div className="bg-white">
      <Header />

      <main>
        {/* <!-- Hero section --> */}
        <Hero />

        {/* <!-- Logo Cloud --> */}
        <LogoCloud />

        {/* <!-- Alternating Feature Sections --> */}
        <AlternativeFeatures />

        {/* <!-- Gradient Feature Section --> */}
        <GradientFeatures />

        {/* <!-- Stats section --> */}
        <Stats />

        {/* <!-- CTA Section --> */}
        <CTA />
      </main>

      <Footer />
    </div>
  )
}

export default Landing
