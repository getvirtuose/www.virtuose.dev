import React from "react"
import { FormattedMessage, useIntl } from "react-intl"
import illustration from "../../../assets/pixelz.svg"
import SvgChevronRight from "../../Icons/solid/ChevronRight"

export const Dark = () => {
  const intl = useIntl()

  return (
    <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
      <div className="mx-auto max-w-7xl lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div className="lg:py-24">
              <div className="inline-flex items-center p-1 pr-2 text-white bg-black rounded-full sm:text-base lg:text-sm xl:text-base">
                <span className="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-green-600 rounded-full">
                  <FormattedMessage id="landing/hero/early/banner/label" />
                </span>
                <span className="pr-3 ml-4 text-sm">
                  <FormattedMessage id="landing/hero/early/banner/message" />
                </span>
              </div>
              <h1 className="mt-4 font-serif text-4xl font-extrabold tracking-tight text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                <FormattedMessage
                  id="landing/hero/title"
                  values={{
                    span: (value: any) => (
                      <span className="block text-green-200">{value}</span>
                    ),
                  }}
                />
              </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                <FormattedMessage id="landing/hero/description" />
              </p>
              <div className="mt-10 sm:mt-12">
                <form action="#" className="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div className="sm:flex">
                    <div className="flex-1 min-w-0">
                      <label htmlFor="email" className="sr-only">
                        <FormattedMessage id="landing/input/email" />
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="block w-full px-4 py-3 text-base text-gray-900 placeholder-gray-500 border-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                        placeholder={intl.formatMessage({
                          id: "landing/input/email",
                        })}
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <button
                        type="submit"
                        className="block w-full px-4 py-3 font-medium text-white bg-green-600 rounded-md shadow to-cyan-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      >
                        <FormattedMessage id="landing/buttons/get-free-access" />
                      </button>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                    <FormattedMessage id="landing/hero/early/input/message" />
                  </p>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
            <div className="max-w-md px-4 mx-auto sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
              {/* <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ --> */}
              <img
                className="w-full m-auto lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={illustration}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
