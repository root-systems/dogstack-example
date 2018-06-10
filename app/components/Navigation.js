import React from 'react'
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
          <Component
            key={name}
            as={ListItem}
            onClick={toggleDrawer}
            button={true}
            leftIcon={
              <i className={icon} aria-hidden="true" />
            }
          />
        )
      } else {
        item = (
          <NavLink to={path} key={name}>
            <ListItem button onClick={toggleDrawer}>
              <ListItemIcon>
                <i className={icon} aria-hidden="true" />
              </ListItemIcon>
              <FormattedMessage
                id={title}
                className={styles.labelText}
              />
            </ListItem>
          </NavLink>
        )
      }

      return (
        <List component="nav">
        { item }
        </List>
      )
    }),
    values
  )

  return (
    <div>
      <AppBar>
        <Toolbar>
          <IconButton onClick={toggleDrawer} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <FormattedMessage
            id='app.name'
            className={styles.labelText}
          />
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
        <List component="nav">
          <ListItem button onClick={toggleDrawer}>
            <ListItemIcon>
              <MenuIcon />
            </ListItemIcon>
            <FormattedMessage
              id='app.closeMenu'
              className={styles.labelText}
            />
          </ListItem>
        </List>
        <Divider />
        {mapRouteItems(navigationRoutes)}
        <Divider />
      </Drawer>
    </div>
  )
}

export default compose(
  connectFela(styles),
  withState('isDrawerOpen', 'setDrawerOpen', false),
  withHandlers({
    toggleDrawer: ({ setDrawerOpen }) => () => setDrawerOpen(not)
  })
)(Navigation)
