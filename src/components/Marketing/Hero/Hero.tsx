import React from "react"
import { Dark } from "./Dark"
import { People } from "./People"

export const Hero: React.FC<{
  theme: "dark" | "people"
}> = props => {
  if (props.theme === "dark") return <Dark />
  if (props.theme === "people") return <People />
}
