import React from "react"
import { FormattedMessage } from "react-intl"

type Props = {}

export const Stats: React.FC<Props> = () => (
  <div className="relative bg-gray-900">
    <div className="absolute bottom-0 h-80 xl:inset-0 xl:h-full xl:w-full">
      <div className="w-full h-full xl:grid xl:grid-cols-2">
        <div className="h-full xl:relative xl:col-start-2">
          <img
            className="object-cover w-full h-full opacity-25 xl:absolute xl:inset-0"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            alt="People working on laptops"
          />
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
          ></div>
        </div>
      </div>
    </div>
    <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
      <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
        <h2 className="text-sm font-semibold tracking-wide uppercase">
          <span className="text-transparent bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text">
            <FormattedMessage id="landing/stats/label" />
          </span>
        </h2>
        <p className="mt-3 text-3xl font-extrabold text-white">
          <FormattedMessage id="landing/stats/title" />
        </p>
        <p className="mt-5 text-lg text-gray-300">
          <FormattedMessage id="landing/stats/description" />
        </p>
        <div className="grid grid-cols-1 mt-12 gap-y-12 gap-x-6 sm:grid-cols-2">
          <p>
            <span className="block text-2xl font-bold text-white">
              <FormattedMessage id="landing/stats/companies/value" />
            </span>
            <span className="block mt-1 text-base text-gray-300">
              <FormattedMessage id="landing/stats/companies/description" />
            </span>
          </p>

          <p>
            <span className="block text-2xl font-bold text-white">
              <FormattedMessage id="landing/stats/countries/value" />
            </span>
            <span className="block mt-1 text-base text-gray-300">
              <FormattedMessage id="landing/stats/countries/description" />
            </span>
          </p>

          <p>
            <span className="block text-2xl font-bold text-white">
              <FormattedMessage id="landing/stats/customers/value" />
            </span>
            <span className="block mt-1 text-base text-gray-300">
              <FormattedMessage id="landing/stats/customers/description" />
            </span>
          </p>

          <p>
            <span className="block text-2xl font-bold text-white"><FormattedMessage id="landing/stats/issues/value" /></span>
            <span className="block mt-1 text-base text-gray-300">
            <FormattedMessage id="landing/stats/issues/description" />
            </span>
          </p>
        </div>
      </div>
    </div>
  </div>
)
