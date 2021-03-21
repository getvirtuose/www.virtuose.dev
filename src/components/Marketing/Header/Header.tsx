import React from "react"
import { Dark } from "./Dark"
import { Light } from "./Light"

export const Header: React.FC<{
  theme: "dark" | "light"
}> = props => {
  if (props.theme === "dark") return <Dark />
  if (props.theme === "light") return <Light />
}
