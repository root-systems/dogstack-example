const createBrowserEntry = require('dogstack/browser')

import store from './store'
import style from './style'
import client from './client'
import root from './root'
import intl from './intl'
import routes from './routes'
import Layout from './layout'

createBrowserEntry({
  store,
  style,
  client,
  root,
  intl,
  routes,
  Layout
})
