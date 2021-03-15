import { Transition } from "@headlessui/react"
import { StaticQuery, graphql, Link } from "gatsby"
import React, { useEffect, useState } from "react"
import logo from "../logo/logo.svg"

const Item = ({ title, to, description }) => (
  <Link
    to={to}
    className="flex items-start p-3 -m-3 rounded-lg hover:bg-gray-50"
  >
    <svg
      className="flex-shrink-0 w-6 h-6 text-gray-400"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
      />
    </svg>
    <div className="pl-4">
      <p className="text-base font-medium text-gray-900">{title}</p>
      <p className="mt-1 text-sm text-gray-500">{description}</p>
    </div>
  </Link>
)

export const Navigation = ({ noBorder = false }) => {
  const [isOpen, setOpen] = useState(false)
  const [isArticleOpen, setArticleOpen] = useState(false)

  useEffect(() => {
    const fn = () => {
      if (isArticleOpen) setArticleOpen(false)
    }

    window.addEventListener("click", fn)

    return () => {
      window.removeEventListener("click", fn)
    }
  }, [isArticleOpen])

  return (
    <StaticQuery
      query={graphql`
        query {
          categories: allCategoriesJson {
            edges {
              node {
                name
                description
                id: parent {
                  ... on File {
                    value: name
                  }
                }
              }
            }
          }
          recents: allMarkdownRemark(
            limit: 3
            sort: { fields: frontmatter___date, order: DESC }
          ) {
            edges {
              node {
                id
                frontmatter {
                  url
                  title
                }
              }
            }
          }
        }
      `}
      render={({ categories, recents }) => (
        <>
          <nav
            className={`bg-white ${noBorder ? "" : "border-b"} relative z-20`}
          >
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex justify-between w-full h-16">
                <div className="relative flex w-full">
                  <Link
                    to="/"
                    className="absolute flex items-center flex-shrink-0 h-full"
                  >
                    <img
                      className="block w-auto h-8 -mt-2"
                      src={logo}
                      alt="logo"
                    />
                    <span className="pl-2 font-bold uppercase">Chanoyu</span>
                  </Link>
                  <div className="hidden mx-auto lg:flex">
                    <div className="flex space-x-8">
                      {categories.edges.map(({ node }) => (
                        <Link
                          key={node.id.value}
                          to={`/articles/${node.id.value}/`}
                          className="inline-flex items-center px-1 pt-1 font-medium text-gray-600 hover:text-gray-900"
                        >
                          {node.name}
                        </Link>
                      ))}
                      <div className="relative flex items-center">
                        <button
                          type="button"
                          onClick={() => setArticleOpen(true)}
                          className={`text-gray-600 inline-flex items-center px-1 pt-1 font-medium group rounded-md hover:text-gray-900 focus:outline-none ${
                            isArticleOpen && "text-gray-900"
                          }`}
                        >
                          <span>Voir plus</span>
                          <svg
                            className={`ml-2 h-5 w-5 transform ${
                              isArticleOpen && "rotate-180"
                            } transition duration-150`}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>

                        <Transition
                          show={isArticleOpen}
                          enter="z-10 ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <div className="absolute z-10 w-screen max-w-md px-2 mt-6 transition transform -translate-x-1/2 left-1/2 sm:px-0">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
                                {categories.edges.map(({ node }) => (
                                  <Item
                                    key={node.id.value}
                                    to={`/articles/${node.id.value}/`}
                                    title={node.name}
                                    description={node.description}
                                  />
                                ))}
                              </div>

                              <div className="px-5 py-5 bg-gray-50 sm:px-8 sm:py-8">
                                <div>
                                  <span className="text-sm font-medium tracking-wide text-gray-500 uppercase">
                                    Les articles récents
                                  </span>
                                  <ul className="mt-4 space-y-4">
                                    {recents.edges.map(({ node }) => (
                                      <li
                                        className="text-base truncate"
                                        key={node.frontmatter.url}
                                      >
                                        <Link
                                          to={node.frontmatter.url}
                                          className="font-medium text-gray-900 transition-colors hover:text-red-400"
                                        >
                                          {node.frontmatter.title}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                                <div className="mt-5 text-sm">
                                  <Link
                                    to={"/articles/"}
                                    className="flex items-center font-medium text-red-400 group hover:text-red-500"
                                  >
                                    Voir tous les articles
                                    <div className="pl-2 transition-all duration-300 ease-in-out transform group-hover:translate-x-2">
                                      &rarr;
                                    </div>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Transition>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center ml-auto lg:hidden">
                    <button
                      onClick={() => setOpen(true)}
                      type="button"
                      className="inline-flex items-center justify-center p-2 text-gray-800 rounded hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      id="main-menu"
                      aria-haspopup="true"
                    >
                      <span className="sr-only">Open main menu</span>
                      <svg
                        className="w-6 h-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M4 6h16M4 12h16M4 18h16"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <Transition
                show={isOpen}
                className="absolute inset-x-0 top-0 p-2 transition origin-top-right transform md:hidden"
                enter="duration-150 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <div className="overflow-hidden bg-white rounded-lg shadow-md ring-1 ring-black ring-opacity-5">
                  <div className="flex items-center justify-between px-5 pt-4">
                    <div>
                      <img className="w-auto h-8" src={logo} alt="" />
                    </div>
                    <div className="-mr-2">
                      <button
                        onClick={() => setOpen(false)}
                        type="button"
                        className="inline-flex items-center justify-center p-2 text-gray-400 bg-white rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                      >
                        <span className="sr-only">Close menu</span>
                        <svg
                          className="w-6 h-6"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="main-menu"
                  >
                    <div className="px-2 pt-2 pb-3" role="none">
                      <Link
                        to={`/articles/`}
                        className="block px-3 py-2 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                        role="menuitem"
                      >
                        Articles
                      </Link>
                      {categories.edges.map(({ node }) => (
                        <Link
                          key={node.id.value}
                          to={`/articles/${node.id.value}/`}
                          className="block px-3 py-2 pl-6 text-base font-medium text-gray-700 rounded-md hover:text-gray-900 hover:bg-gray-50"
                          role="menuitem"
                        >
                          {node.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </Transition>
            </div>
          </nav>
        </>
      )}
    />
  )
}
