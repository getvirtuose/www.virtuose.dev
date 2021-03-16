import React from "react"

type Props = {}

export const FAQ: React.FC<Props> = props => {
  return (
    <div className="bg-blue-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          Frequently asked questions
        </h2>
        <div className="pt-10 mt-6 border-t border-blue-400 border-opacity-25">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
            <div>
              <dt className="text-lg font-medium leading-6 text-white">
                What&#039;s the best thing about Switzerland?
              </dt>
              <dd className="mt-2 text-base text-blue-200">
                I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Quas cupiditate
                laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-medium leading-6 text-white">
                Why do you never see elephants hiding in trees?
              </dt>
              <dd className="mt-2 text-base text-blue-200">
                Because they&#039;re so good at it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-medium leading-6 text-white">
                How do you make holy water?
              </dt>
              <dd className="mt-2 text-base text-blue-200">
                You boil the hell out of it. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-medium leading-6 text-white">
                Why can&#039;t you hear a pterodactyl go to the bathroom?
              </dt>
              <dd className="mt-2 text-base text-blue-200">
                Because the pee is silent. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-medium leading-6 text-white">
                What do you call someone with no body and no nose?
              </dt>
              <dd className="mt-2 text-base text-blue-200">
                Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quas cupiditate laboriosam fugiat.
              </dd>
            </div>

            <div>
              <dt className="text-lg font-medium leading-6 text-white">
                Why did the invisible man turn down the job offer?
              </dt>
              <dd className="mt-2 text-base text-blue-200">
                He couldn&#039;t see himself doing it. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quas cupiditate laboriosam
                fugiat.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  )
}
