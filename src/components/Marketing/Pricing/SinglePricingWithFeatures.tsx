import React from "react"
import { FormattedMessage } from "react-intl"
import SvgCheck from "../../Icons/outline/Check"

type Props = {}

const Check: React.FC<{ first?: boolean }> = props => (
  <li className={`flex py-4 ${props.first ? "md:py-0 md:pb-4" : ""}`}>
    <SvgCheck className="flex-shrink-0 w-6 h-6 text-green-500" />
    <span className="ml-3 text-base text-gray-500">{props.children}</span>
  </li>
)

export const SinglePricingWithFeatures: React.FC<Props> = props => {
  return (
    <>
      <div className="bg-gradient-to-b from-green-50 via-white to-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight">
                <FormattedMessage
                  id="pricing/single-pricing/title"
                  values={{
                    span: (value: string) => (
                      <span className="text-green-600">{value}</span>
                    ),
                  }}
                />
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                <FormattedMessage id="pricing/single-pricing/description" />
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-white bg-green-600 border border-transparent rounded-md hover:bg-green-700 sm:mt-10 sm:w-auto xl:mt-0"
            >
              <FormattedMessage id="pricing/single-pricing/get-started" />
            </a>
          </div>
          <div className="pt-16 border-t border-gray-200 xl:grid xl:grid-cols-3 xl:gap-x-8">
            <div>
              <h2 className="text-base font-semibold tracking-wide text-green-600 uppercase">
                <FormattedMessage id="pricing/single-pricing/features/label" />
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                <FormattedMessage id="pricing/single-pricing/features/title" />
              </p>
              <p className="mt-4 text-lg text-gray-500">
                <FormattedMessage id="pricing/single-pricing/features/description" />
              </p>
            </div>
            <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
              <ul className="divide-y divide-gray-200">
                <Check first>
                  <FormattedMessage id="pricing/single-pricing/features/1" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/2" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/3" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/4" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/5" />
                </Check>
              </ul>
              <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                <Check first>
                  <FormattedMessage id="pricing/single-pricing/features/6" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/7" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/8" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/9" />
                </Check>
                <Check>
                  <FormattedMessage id="pricing/single-pricing/features/10" />
                </Check>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
