import React from "react"

const Layout = ({ children, background = "bg-white" }) => {
  return (
    <div className={`min-h-screen ${background}`}>
      <main>{children}</main>
    </div>
  )
}

export default Layout
