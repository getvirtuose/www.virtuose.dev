import React, { ReactElement } from "react"
import { Link } from "gatsby"
import { FormattedMessage } from "react-intl"

import SvgInbox from "../../Icons/outline/Inbox"
import SvgSparkles from "../../Icons/outline/Sparkles"

type Props = {}

const GetStarted: React.FC = () => (
  <Link
    to="/"
    className="inline-flex px-4 py-2 text-base font-medium text-white rounded-md shadow-sm bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-700"
  >
    <FormattedMessage id="landing/buttons/get-started" />
  </Link>
)

const Content: React.FC<{
  icon: ReactElement
  title: string | ReactElement
  description: string | ReactElement
}> = props => (
  <div>
    <div>
      <span className="flex items-center justify-center w-12 h-12 rounded-md bg-gradient-to-r from-blue-500 to-blue-700">
        {props.icon}
      </span>
    </div>
    <div className="mt-6">
      <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
        {props.title}
      </h2>
      <p className="mt-4 text-lg text-gray-500">{props.description}</p>
      <div className="mt-6">
        <GetStarted />
      </div>
    </div>
  </div>
)

export const AlternativeFeatures: React.FC<Props> = () => (
  <div className="relative pt-16 pb-32 overflow-hidden">
    <div
      aria-hidden="true"
      className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"
    ></div>

    <div className="relative">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
          <Content
            icon={<SvgInbox className="w-6 h-6 text-white" />}
            description={
              <FormattedMessage id="landing/alternative-features/support/description" />
            }
            title={
              <FormattedMessage id="landing/alternative-features/support/title" />
            }
          />
          <div className="pt-6 mt-8 border-t border-gray-200">
            <blockquote>
              <div>
                <p className="text-base text-gray-500">
                  &ldquo;
                  <FormattedMessage id="landing/alternative-features/testimonials/text" />
                  &rdquo;
                </p>
              </div>

              <footer className="mt-3">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <img
                      className="w-6 h-6 rounded-full"
                      src="https://images.unsplash.com/photo-1509783236416-c9ad59bae472?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
                      alt=""
                    />
                  </div>
                  <div className="text-base font-medium text-gray-700">
                    <FormattedMessage id="landing/alternative-features/testimonials/name" />
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        </div>

        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-1.jpg"
              alt="Inbox user interface"
            />
          </div>
        </div>
      </div>
    </div>

    <div className="mt-24">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="max-w-xl px-4 mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
          <Content
            icon={<SvgSparkles className="w-6 h-6 text-white" />}
            description={
              <FormattedMessage id="landing/alternative-features/understand/description" />
            }
            title={
              <FormattedMessage id="landing/alternative-features/understand/title" />
            }
          />
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
          <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <img
              className="w-full shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/inbox-app-screenshot-2.jpg"
              alt="Customer profile user interface"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
)
