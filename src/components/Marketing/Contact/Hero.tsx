import React, { ReactElement } from "react"

type Props = {}

export const Hero: React.FC<Props> = () => (
  <div className="bg-gray-50">
    <div className="py-24 lg:py-32">
      <div className="pl-4 pr-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
          Get in touch
        </h1>
        <p className="max-w-3xl mt-6 text-xl text-gray-500">
          Vel nunc non ut montes, viverra tempor. Proin lectus nibh phasellus
          morbi non morbi. In elementum urna ut volutpat. Sagittis et vel et
          fermentum amet consequat.
        </p>
      </div>
    </div>
  </div>
)
