import { Link } from "gatsby"
import React from "react"
import { FormattedMessage } from "react-intl"

type Props = {}

export const People: React.FC<Props> = () => (
  <div className="relative">
    <div className="absolute inset-x-0 bottom-0 bg-gray-100 h-1/2"></div>
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
        <div className="absolute inset-0">
          <img
            className="object-cover w-full h-full"
            src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
            alt="People working on laptops"
          />
          <div
            className="absolute inset-0 bg-green-500"
            style={{ mixBlendMode: "multiply" }}
          ></div>
        </div>
        <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl">
            <span className="block text-white">
              <FormattedMessage id="landing/hero/title" />
            </span>
          </h1>
          <p className="max-w-lg mx-auto mt-6 text-xl text-center text-green-200 sm:max-w-3xl">
            <FormattedMessage id="landing/hero/description" />
          </p>
          <div className="max-w-sm mx-auto mt-10 sm:max-w-none sm:flex sm:justify-center">
            <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
              <Link
                to="/"
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-green-500 bg-white border border-transparent rounded-md shadow-sm hover:bg-green-50 sm:px-8"
              >
                <FormattedMessage id="landing/buttons/get-started" />
              </Link>
              <Link
                to="/"
                className="flex items-center justify-center px-4 py-3 text-base font-medium text-white bg-green-500 border border-transparent rounded-md shadow-sm bg-opacity-70 hover:bg-opacity-80 sm:px-8"
              >
                <FormattedMessage id="landing/buttons/live-demo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
