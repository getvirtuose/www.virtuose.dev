import React from "react"
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
      <div className="bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
          <div className="pb-16 xl:flex xl:items-center xl:justify-between">
            <div>
              <h1 className="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
                <span className="text-gray-900">Everything you need for </span>
                <span className="text-blue-600">$99 a month</span>
              </h1>
              <p className="mt-5 text-xl text-gray-500">
                Includes every feature we offer plus unlimited projects and
                unlimited users.
              </p>
            </div>
            <a
              href="#"
              className="inline-flex items-center justify-center w-full px-5 py-3 mt-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 sm:mt-10 sm:w-auto xl:mt-0"
            >
              Get started today
            </a>
          </div>
          <div className="pt-16 border-t border-gray-200 xl:grid xl:grid-cols-3 xl:gap-x-8">
            <div>
              <h2 className="text-base font-semibold tracking-wide text-blue-600 uppercase">
                Everything you need
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900">
                All-in-one platform
              </p>
              <p className="mt-4 text-lg text-gray-500">
                Ac euismod vel sit maecenas id pellentesque eu sed consectetur.
                Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus
                elementum blandit et.
              </p>
            </div>
            <div className="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
              <ul className="divide-y divide-gray-200">
                <Check first>
                  Vitae in pulvinar odio id utobortis in inter.
                </Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
              </ul>
              <ul className="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
                <Check first>
                  Vitae in pulvinar odio id utobortis in inter.
                </Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
                <Check>Vitae in pulvinar odio id utobortis in inter.</Check>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
