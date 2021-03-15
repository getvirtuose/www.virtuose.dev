import * as csv from "csv-parser"
import * as fs from "fs"

const languages = {}

fs.createReadStream("scripts/i18n.tsv")
  .pipe(csv({ separator: "\t" }))
  .on("data", ({ id, ...langs }) => {
    for (const lang in langs) {
      if (Object.prototype.hasOwnProperty.call(langs, lang)) {
        languages[lang] = {
          ...languages[lang],
          [id]: langs[lang],
        }
      }
    }
  })
  .on("end", () => {
    for (const lang in languages) {
      if (Object.prototype.hasOwnProperty.call(languages, lang)) {
        const translations = languages[lang]

        fs.writeFileSync(
          `src/i18n/messages/${lang}.json`,
          JSON.stringify(translations)
        )
      }
    }
  })
