import updater from './updater'
import epic from './epic'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import routes from './routes'
import style from './style'
import Layout from './app/containers/Layout'

const createBrowserEntry = require('dogstack/browser')
const authentication = require('dogstack-agents/client')

const store = {
  updater,
  epic
}

const client = {
  services: [
    authentication
  ]
}

// root
const appNode = document.createElement('div')
appNode.id = 'app'
document.body.appendChild(appNode)
const root = {
  appNode: '#app',
  styleNode: '#app-styles',
}

// intl
addLocaleData([...en])
const messagesByLocale = {
  'en': require('./app/locales/en')
}
const intl = {
  messagesByLocale
}

createBrowserEntry({
  store,
  style,
  client,
  root,
  intl,
  routes,
  Layout
})
