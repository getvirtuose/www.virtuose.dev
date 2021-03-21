import React from "react"
import SvgCloudUpload from "../../Icons/outline/CloudUpload"
import SvgLockClosed from "../../Icons/outline/LockClosed"
import SvgRefresh from "../../Icons/outline/Refresh"

export const GridWithOffsetIcons: React.FC = () => (
  <div className="relative py-16 bg-white sm:py-24 lg:py-32">
    <div className="max-w-md px-4 mx-auto text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 className="text-base font-semibold tracking-wider text-green-600 uppercase">
        Un site complet en quelques cliques
      </h2>
      <p className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Je ne veux plus coder encore et encore les mêmes choses
      </p>
      <p className="mx-auto mt-5 text-xl text-gray-500 max-w-prose">
        Je veux lancer un nouveau projet, je dois donc créer une landing page,
        la page de tarification, la page d'authentification etc... Je veux aller
        vite donc je n'écris pas de tests, je code salement et j'oublie
        complètement toutes les bonnes pratiques... Quelques mois plus tard,
        j'ai l'impression d'avancer lentement à cause d'un code désagréable et
        difficile à maintenir.
      </p>
      <div className="mt-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="pt-6">
            <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    <SvgCloudUpload className="w-6 h-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  Déploiement automatique
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  J'écris mon code, je le push sur Github et le déploiement
                  s'effectue automatiquement sur Firebase, Vercel, Netlify ou
                  Gatsby Cloud.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    <SvgLockClosed className="w-6 h-6 text-white"></SvgLockClosed>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  Architecture robuste et scalable
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Fini la dette, les problèmes de conventions de code etc...
                  Laissez vous guider par l'architecture simple et robuste que
                  je vous propose
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    <SvgRefresh className="w-6 h-6 text-white" />
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  Plateforme optimisée pour le référencement
                </h3>
                <p className="mt-5 text-base text-gray-500"></p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    {/* <!-- Heroicon name: outline/shield-check --> */}
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  Multi-langue gérée nativement
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    {/* <!-- Heroicon name: outline/cog --> */}
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  Plateforme entièrement testée
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus.
                  Et magna sit morbi lobortis.
                </p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <div className="flow-root px-6 pb-8 rounded-lg bg-gray-50">
              <div className="-mt-6">
                <div>
                  <span className="inline-flex items-center justify-center p-3 bg-green-500 rounded-md shadow-lg">
                    {/* <!-- Heroicon name: outline/server --> */}
                    <svg
                      className="w-6 h-6 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </span>
                </div>
                <h3 className="mt-8 text-lg font-medium tracking-tight text-gray-900">
                  Analyses et récoltes de données
                </h3>
                <p className="mt-5 text-base text-gray-500">
                  Le traçage est installée et fonctionnelle nativement sur
                  l'ensemble de la plateforme. Vous pouvez utiliser n'importe
                  quel service comme Amplitude, Google Analytics et bien
                  d'autres...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)
