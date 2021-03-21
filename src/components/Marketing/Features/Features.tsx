import React from "react"
import { AlternativeFeatures } from "./AlternativesFeatures"
import { GridWithOffsetIcons } from "./GridWithOffsetIcons"

export const Features: React.FC<{
  theme: "grid-with-icons" | "alternative"
}> = props => {
  if (props.theme === "grid-with-icons") return <GridWithOffsetIcons />
  if (props.theme === "alternative") return <AlternativeFeatures />
}
