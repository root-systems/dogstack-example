import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as ReduxProvider } from 'react-redux'
import { Provider as FelaProvider } from 'react-fela'
import { ConnectedRouter } from 'react-router-redux'
import createBrowserHistory from 'history/createBrowserHistory'

import configureStore from './store'
import createRenderer from './renderer'
import routes from './routes'
import Layout from './app/containers/layout'

document.addEventListener('DOMContentLoaded', () => {
  const history = createBrowserHistory()
  const store = configureStore({ history })
  const renderer = createRenderer(document.getElementById('app-fonts'))
  const mountNode = document.getElementById('app-styles')

  ReactDOM.render(
    <ReduxProvider store={store}>
      <FelaProvider renderer={renderer} mountNode={mountNode}>
        <ConnectedRouter history={history}>
          <Layout routes={routes} />
        </ConnectedRouter>
      </FelaProvider>
    </ReduxProvider>,
    document.querySelector('#app')
  )
})
