import React, { useEffect, useState } from "react"
import { IntlProvider } from "react-intl"

// @todo : Moyen de le faire automatiquement ?

import en from "../../i18n/messages/en.json"
import fr from "../../i18n/messages/fr.json"
import pt from "../../i18n/messages/pt.json"
import es from "../../i18n/messages/es.json"
import de from "../../i18n/messages/de.json"
import ja from "../../i18n/messages/ja.json"

const messages = { en, fr, pt, es, de, ja }

export const CustomIntlProvider = props => {
  const [dynamicLanguage, setDynamicLanguage] = useState(null)
  const { langKey } = props

  useEffect(() => {
    const { languages } = navigator
    const language = localStorage.getItem("language")
    const selectTheRightLanguage =
      language ||
      languages.find(value =>
        /(^fr)|(^en)|(^de)|(^pt)|(^es)|(^ja)/gim.exec(value)
      ) ||
      "en"

    const [lang] = selectTheRightLanguage.split("-")
    const locale = window.location.pathname.includes("/app/") ? lang : langKey

    setDynamicLanguage(locale)
  }, [])

  return (
    <IntlProvider
      locale={dynamicLanguage || langKey}
      messages={messages[dynamicLanguage || langKey]}
    >
      {props.children}
    </IntlProvider>
  )
}
