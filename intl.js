import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'

addLocaleData([...en])

const messagesByLocale = {
  'en': require('./app/locales/en')
}

export default {
  messagesByLocale
}
