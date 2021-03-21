import { Link } from "gatsby"
import React from "react"
import { FormattedMessage } from "react-intl"

type Props = {}

export const CTA: React.FC<Props> = () => (
  <div className="bg-white">
    <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
      <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        <span className="block">
          <FormattedMessage id="landing/cta/title" />
        </span>
        <span className="block text-green-600">
          <FormattedMessage id="landing/cta/description" />
        </span>
      </h2>
      <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
        <Link
          to="/"
          className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-green-600 rounded-md shadow-sm hover:bg-green-700"
        >
          <FormattedMessage id="landing/buttons/learn-more" />
        </Link>
        <Link
          to="/"
          className="flex items-center justify-center px-4 py-3 text-base font-medium text-green-800 rounded-md shadow-sm bg-green-50 hover:bg-green-100"
        >
          <FormattedMessage id="landing/buttons/get-started" />
        </Link>
      </div>
    </div>
  </div>
)
