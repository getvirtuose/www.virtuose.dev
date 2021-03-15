import React from "react"
import { FormattedMessage } from "react-intl"

type Props = {}

export const Logo: React.FC<{
  src: string
  alt: string
  className?: string
}> = props => (
  <div
    className={`flex justify-center col-span-1 md:col-span-2 lg:col-span-1 ${
      props.className ? props.className : ""
    }`}
  >
    <img className="h-12" src={props.src} alt={props.alt} />
  </div>
)

export const LogoCloud: React.FC<Props> = () => (
  <div className="bg-gray-100">
    <div className="px-4 py-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <p className="text-sm font-semibold tracking-wide text-center text-gray-500 uppercase">
        <FormattedMessage id="landing/cloud/title" />
      </p>
      <div className="grid grid-cols-2 gap-8 mt-6 md:grid-cols-6 lg:grid-cols-5">
        <Logo
          src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
          alt="Tuple"
        />

        <Logo
          src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
          alt="Mirage"
        />

        <Logo
          src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
          alt="StaticKit"
        />

        <Logo
          src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
          alt="Transistor"
          className="md:col-start-2"
        />

        <Logo
          src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
          alt="Workcation"
          className="col-span-2 md:col-start-4"
        />
      </div>
    </div>
  </div>
)
