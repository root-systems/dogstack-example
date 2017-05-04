import React, { Component, createElement } from 'react'
import { connect as connectRedux } from 'react-redux'
import { bindActionCreators as bindDispatchActionCreators } from 'redux'
import createCid from 'cuid'
import { is, pipe, compose, keys, map, partialRight } from 'ramda'

const { isArray } = Array

module.exports = {
  connectFeathers
}

// feathers-action-react
function connectFeathers (options) {
  const {
    selector,
    actions,
    query
  } = options

  const reduxConnector = connectRedux(
    selector,
    function mapDispatchToProps (dispatch) {
      const bindActionCreators = map(pipe(
        partialRight(bindDispatchActionCreators, [dispatch]),
        bindCidToActionCreators
      ))
      return {
        actions: bindActionCreators(actions)
      }
    }
  )

  const feathersConnector = (component) => {
    return class ConnectedFeathers extends Component {
      constructor (props, context) {
        super(props, context)

        this.cancels = []
        this.query = query
      }

      componentDidMount () {
        this.fetch()
      }

      componentWillUnmount () {
        this.cancel()
      }

      render () {
        return createElement(component, this.props)
      }

      fetch () {
        var queryDescriptors = this.query
        if (isFunction(queryDescriptors)) {
          queryDescriptors = this.query(this.props)
        }
        if (!isArray(queryDescriptors)) {
          queryDescriptors = [queryDescriptors]
        }
        queryDescriptors.forEach(descriptor => {
          console.log('query', descriptor)
          const { resource, id, params } = descriptor
          const method = id ? 'get' : 'find'
          const action = this.props.actions[resource][method]
          const cid = id ? action(id, params) : action(params)
          const cancelAction = this.props[resource].complete
          const cancel = () => cancelAction(cid)
          this.cancels.push(cancel)
        })
      }

      cancel () {
        this.cancels.forEach(cancel => cancel())
      }
    }
  }

  return compose(reduxConnector, feathersConnector)
}

const bindCidToActionCreators = map(action => {
  return (...args) => {
    const cid = createCid()
    action(cid, ...args)
    return cid
  }
})

const isFunction = is(Function)
