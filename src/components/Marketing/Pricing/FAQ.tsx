import React, { ReactElement } from "react"
import { FormattedMessage } from "react-intl"

type Props = {}

const Question: React.FC<{
  question: ReactElement | string
  answer: ReactElement | string
}> = props => (
  <div>
    <dt className="text-lg font-medium leading-6 text-white">
      {props.question}
    </dt>
    <dd className="mt-2 text-base text-blue-200">{props.answer}</dd>
  </div>
)

export const FAQ: React.FC<Props> = props => {
  return (
    <div className="bg-blue-900">
      <div className="px-4 py-16 mx-auto max-w-7xl sm:py-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-white">
          <FormattedMessage id="pricing/faq/title" />
        </h2>
        <div className="pt-10 mt-6 border-t border-blue-400 border-opacity-25">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
            <Question
              question={<FormattedMessage id="pricing/faq/1/question" />}
              answer={<FormattedMessage id="pricing/faq/1/answer" />}
            />
            <Question
              question={<FormattedMessage id="pricing/faq/2/question" />}
              answer={<FormattedMessage id="pricing/faq/2/answer" />}
            />
            <Question
              question={<FormattedMessage id="pricing/faq/3/question" />}
              answer={<FormattedMessage id="pricing/faq/3/answer" />}
            />
            <Question
              question={<FormattedMessage id="pricing/faq/4/question" />}
              answer={<FormattedMessage id="pricing/faq/4/answer" />}
            />
            <Question
              question={<FormattedMessage id="pricing/faq/5/question" />}
              answer={<FormattedMessage id="pricing/faq/5/answer" />}
            />
            <Question
              question={<FormattedMessage id="pricing/faq/6/question" />}
              answer={<FormattedMessage id="pricing/faq/6/answer" />}
            />
          </dl>
        </div>
      </div>
    </div>
  )
}
