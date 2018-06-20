import h from 'react-hyperscript'
import { connect as connectFela } from 'react-fela'
import { not, pipe, map, values, isNil } from 'ramda'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import { withState, withHandlers, compose } from 'recompose'
import { NavLink } from 'react-router-dom'

import styles from '../styles/Navigation'
import { FormattedMessage } from 'dogstack/intl'
import { LogOut } from 'dogstack-agents/components'

function Navigation (props) {
  const { styles, isDrawerOpen, toggleDrawer, navigationRoutes } = props

  const mapRouteItems = pipe(
    map(route => {
      const {
        path,
        name = path,
        navigation
      } = route

      const {
        Component,
        title = name,
        icon
      } = navigation

      let item

      if (Component) {
        item = (
          h(Component, {
            key: name,
            as: ListItem,
            onClick: toggleDrawer,
            button: true,
            leftIcon: h('i', { className: icon, 'aria-hidden': "true" })
          })
        )
      } else {
        item = (
          h(NavLink, { to: path, key: name }, [
            h(ListItem, { button: true, onClick: toggleDrawer }, [
              h(ListItemIcon, [
                h('i', { className: icon, 'aria-hidden': "true" })
              ]),
              h(FormattedMessage, {
                id: title,
                className: styles.labelText
              })
            ])
          ])
        )
      }

      return (
        h(List, { component: "nav" }, [
          item
        ])
      )
    }),
    values
  )

  return (
    h('div', [
      h(AppBar, [
        h(Toolbar, [
          h(IconButton, { onClick: toggleDrawer, color: "inherit", 'aria-label': "Menu" }, [
            h(MenuIcon)
          ]),
          h(FormattedMessage, {
            id: 'app.name',
            className: styles.labelText
          })
        ])
      ]),
      h(Drawer, { open: isDrawerOpen, onClose: toggleDrawer }, [
        h(List, { component: "nav" }, [
          h(ListItem, { button: true, onClick: toggleDrawer }, [
            h(ListItemIcon, [
              h(MenuIcon)
            ]),
            h(FormattedMessage, {
              id: 'app.closeMenu',
              className: styles.labelText
            })
          ])
        ]),
        h(Divider),
        mapRouteItems(navigationRoutes),
        h(Divider)
      ])
    ])
  )
}

export default compose(
  connectFela(styles),
  withState('isDrawerOpen', 'setDrawerOpen', false),
  withHandlers({
    toggleDrawer: ({ setDrawerOpen }) => () => setDrawerOpen(not)
  })
)(Navigation)
