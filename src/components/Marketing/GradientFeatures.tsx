import React, { ReactElement } from "react"
import { FormattedMessage } from "react-intl"
import SvgChatAlt from "../Icons/outline/ChatAlt"
import SvgDocumentReport from "../Icons/outline/DocumentReport"
import SvgHeart from "../Icons/outline/Heart"
import SvgInbox from "../Icons/outline/Inbox"
import SvgPencilAlt from "../Icons/outline/PencilAlt"
import SvgReply from "../Icons/outline/Reply"
import SvgTrash from "../Icons/outline/Trash"
import SvgUser from "../Icons/outline/User"

type Props = {}

export const Feature: React.FC<{
  icon: ReactElement
  title: ReactElement
  description: ReactElement
}> = props => (
  <div>
    <div>
      <span className="flex items-center justify-center w-12 h-12 bg-white rounded-md bg-opacity-10">
        {props.icon}
      </span>
    </div>
    <div className="mt-6">
      <h3 className="text-lg font-medium text-white">{props.title}</h3>
      <p className="mt-2 text-base text-indigo-200">{props.description}</p>
    </div>
  </div>
)

export const GradientFeatures: React.FC<Props> = () => (
  <div className="bg-gradient-to-r from-indigo-700 to-blue-900">
    <div className="max-w-4xl px-4 py-16 mx-auto sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      <h2 className="text-3xl font-extrabold tracking-tight text-white">
        <FormattedMessage id="landing/features/title" />
      </h2>
      <p className="max-w-3xl mt-4 text-lg text-blue-200">
        <FormattedMessage id="landing/features/description" />
      </p>
      <div className="grid grid-cols-1 mt-12 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
        <Feature
          icon={<SvgInbox className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/title" />}
          description={
            <FormattedMessage id="landing/features/description" />
          }
        />

        <Feature
          icon={<SvgUser className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/manage/title" />}
          description={
            <FormattedMessage id="landing/features/manage/description" />
          }
        />

        <Feature
          icon={<SvgTrash className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/spam/title" />}
          description={
            <FormattedMessage id="landing/features/spam/description" />
          }
        />

        <Feature
          icon={<SvgPencilAlt className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/markdown/title" />}
          description={
            <FormattedMessage id="landing/features/markdown/description" />
          }
        />

        <Feature
          icon={<SvgDocumentReport className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/report/title" />}
          description={
            <FormattedMessage id="landing/features/report/description" />
          }
        />

        <Feature
          icon={<SvgReply className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/replies/title" />}
          description={
            <FormattedMessage id="landing/features/replies/description" />
          }
        />

        <Feature
          icon={<SvgChatAlt className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/email/title" />}
          description={
            <FormattedMessage id="landing/features/email/description" />
          }
        />

        <Feature
          icon={<SvgHeart className="w-6 h-6 text-white" />}
          title={<FormattedMessage id="landing/features/connect/title" />}
          description={
            <FormattedMessage id="landing/features/connect/description" />
          }
        />
      </div>
    </div>
  </div>
)
