import { Transition } from "@headlessui/react"
import React, { ReactElement, useState } from "react"
import { FormattedMessage } from "react-intl"
import { Link } from "gatsby"

import SvgInbox from "../../Icons/outline/Inbox"
import SvgX from "../../Icons/outline/X"
import SvgMenu from "../../Icons/outline/Menu"
import SvgChevronDown from "../../Icons/solid/ChevronDown"
import SvgAnnotation from "../../Icons/outline/Annotation"
import SvgChatAlt2 from "../../Icons/outline/ChatAlt2"
import SvgQuestionMarkCircle from "../../Icons/outline/QuestionMarkCircle"

type Props = {}

export const Dropdown: React.FC<{ label: ReactElement }> = props => {
  const [isOpen, setOpen] = useState(false)

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!isOpen)}
        className={`inline-flex items-center text-base font-medium text-gray-500 bg-white rounded-md group hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          isOpen ? "text-gray-600" : ""
        }`}
        aria-expanded="false"
      >
        <span>{props.label}</span>
        <SvgChevronDown
          className={`w-5 h-5 ml-2 text-gray-400 transform group-hover:text-gray-500 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <Transition
        show={isOpen}
        className="absolute z-10 w-screen max-w-md mt-3 -ml-4 transform lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        {props.children}
      </Transition>
    </div>
  )
}

export const DropdownItem: React.FC<{
  title: string | ReactElement
  description: string | ReactElement
  to: string
  icon: ReactElement
}> = props => (
  <Link
    to={props.to}
    className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
  >
    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-blue-500 to-blue-700 sm:h-12 sm:w-12">
      {props.icon}
    </div>
    <div className="ml-4">
      <p className="text-base font-medium text-gray-900">{props.title}</p>
      <p className="mt-1 text-sm text-gray-500">{props.description}</p>
    </div>
  </Link>
)

export const Tab: React.FC<{ to: string }> = props => (
  <Link
    to={props.to}
    className="text-base font-medium text-gray-500 hover:text-gray-900"
  >
    {props.children}
  </Link>
)

export const Light: React.FC<Props> = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <div className="relative bg-white">
        <div className="flex items-center justify-between px-4 py-6 mx-auto max-w-7xl sm:px-6 md:justify-start md:space-x-10 lg:px-8">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Workflow</span>
              <img
                className="w-auto h-8 sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-blue-600.svg"
                alt=""
              />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <SvgMenu className="w-6 h-6" />
            </button>
          </div>
          <nav className="hidden space-x-10 md:flex">
            <Dropdown
              label={
                <FormattedMessage id="landing/footer/categories/solutions" />
              }
            >
              <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="relative grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8 lg:grid-cols-2">
                  <DropdownItem
                    to="/"
                    icon={<SvgInbox className="w-6 h-6" />}
                    title={
                      <FormattedMessage id="landing/header/solutions/inbox/title" />
                    }
                    description={
                      <FormattedMessage id="landing/header/solutions/inbox/description" />
                    }
                  />

                  <DropdownItem
                    to="#"
                    icon={<SvgAnnotation className="w-6 h-6" />}
                    title={
                      <FormattedMessage id="landing/header/solutions/messaging/title" />
                    }
                    description={
                      <FormattedMessage id="landing/header/solutions/messaging/description" />
                    }
                  />

                  <DropdownItem
                    to="#"
                    icon={<SvgChatAlt2 className="w-6 h-6" />}
                    title={
                      <FormattedMessage id="landing/header/solutions/live-chat/title" />
                    }
                    description={
                      <FormattedMessage id="landing/header/solutions/live-chat/description" />
                    }
                  />

                  <DropdownItem
                    to="#"
                    icon={<SvgQuestionMarkCircle className="w-6 h-6" />}
                    title={
                      <FormattedMessage id="landing/header/solutions/knowledge-base/title" />
                    }
                    description={
                      <FormattedMessage id="landing/header/solutions/knowledge-base/description" />
                    }
                  />
                </div>
              </div>
            </Dropdown>

            <Tab to="/pricing/">
              <FormattedMessage id="landing/tabs/pricing" />
            </Tab>

            <Tab to="#">
              <FormattedMessage id="landing/tabs/partners" />
            </Tab>

            <Tab to="#">
              <FormattedMessage id="landing/tabs/company" />
            </Tab>
          </nav>
          <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
            <Link
              to="/signin/"
              className="text-base font-medium text-gray-500 whitespace-nowrap hover:text-gray-900"
            >
              <FormattedMessage id="landing/tabs/signin" />
            </Link>

            <Link
              to="/signup/"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-blue-700 bg-blue-100 border border-transparent rounded-md whitespace-nowrap hover:bg-blue-200"
            >
              <FormattedMessage id="landing/tabs/signup" />
            </Link>
          </div>
        </div>

        <Transition
          show={isMenuOpen}
          className="absolute inset-x-0 top-0 z-30 p-2 transition origin-top-right transform md:hidden"
          enter="duration-200 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="bg-white divide-y-2 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 divide-gray-50">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div>
                  <img
                    className="w-auto h-8"
                    src="https://tailwindui.com/img/logos/workflow-mark-blue-400-to-blue-600.svg"
                    alt="Workflow"
                  />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    onClick={() => setMenuOpen(false)}
                    className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                  >
                    <span className="sr-only">Close menu</span>

                    <SvgX className="w-6 h-6" />
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid grid-cols-1 gap-7">
                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600">
                      {/* <!-- Heroicon name: outline/inbox --> */}
                      <SvgInbox className="w-6 h-6" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      <FormattedMessage id="landing/tabs/inbox" />
                    </div>
                  </Link>

                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600">
                      {/* <!-- Heroicon name: outline/Annotation --> */}
                      <SvgAnnotation className="w-6 h-6" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      <FormattedMessage id="landing/tabs/messaging" />
                    </div>
                  </Link>

                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600">
                      {/* <!-- Heroicon name: outline/chat-alt-2 --> */}
                      <SvgChatAlt2 className="w-6 h-6" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      <FormattedMessage id="landing/tabs/live-chat" />
                    </div>
                  </Link>

                  <Link
                    to="#"
                    className="flex items-center p-3 -m-3 rounded-lg hover:bg-gray-50"
                  >
                    <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 text-white rounded-md bg-gradient-to-r from-blue-400 to-blue-600">
                      {/* <!-- Heroicon name: outline/question-mark-circle --> */}
                      <SvgQuestionMarkCircle className="w-6 h-6" />
                    </div>
                    <div className="ml-4 text-base font-medium text-gray-900">
                      <FormattedMessage id="landing/tabs/knowledge-base" />
                    </div>
                  </Link>
                </nav>
              </div>
            </div>
            <div className="px-5 py-6">
              <div className="grid grid-cols-2 gap-4">
                <Link
                  to="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  <FormattedMessage id="landing/tabs/pricing" />
                </Link>

                <Link
                  to="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  <FormattedMessage id="landing/tabs/partners" />
                </Link>

                <Link
                  to="#"
                  className="text-base font-medium text-gray-900 hover:text-gray-700"
                >
                  <FormattedMessage id="landing/tabs/company" />
                </Link>
              </div>
              <div className="mt-6">
                <Link
                  to="#"
                  className="flex items-center justify-center w-full px-4 py-2 text-base font-medium text-white border border-transparent rounded-md shadow-sm bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700"
                >
                  <FormattedMessage id="landing/tabs/signup" />
                </Link>
                <p className="mt-6 text-base font-medium text-center text-gray-500">
                  <FormattedMessage id="landing/menu/is-customer" />{" "}
                  <Link to="#" className="text-gray-900">
                    <FormattedMessage id="landing/tabs/signin" />
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </header>
  )
}
