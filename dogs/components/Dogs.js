import h from 'react-hyperscript'
import { connect as connectStyles } from 'react-fela'
import { compose } from 'recompose'
import dogNames from 'dog-names'
import { mapObjIndexed, values, keys, pipe} from 'ramda'
import { FormattedMessage } from 'dogstack/intl'

import Dog from './Dog'

import styles from '../styles/Dogs'

const mapDogs = mapObjIndexed((dog, key) => (
  h(Dog, {
    key,
    dog,
    size: 'small'
  })
))
const mapDogsToValues = pipe(mapDogs, values)

const Dogs = (props) => {
  const { styles, dogs, actions } = props

  return (
    h('div', {
      className: styles.container
    }, [
      h('h1', {
        className: styles.title
      }, [
        h(FormattedMessage, {
          id: 'dogs.myDogs',
          className: styles.titleText
        })
      ]),
      h('button', {
        className: styles.adoptButton,
        onClick: createDog
      }, [
        h(FormattedMessage, {
          id: 'dogs.adoptDog',
          className: styles.buttonText
        })
      ]),
      h('button', {
        className: styles.giveButton,
        onClick: removeDog
      }, [
        h(FormattedMessage, {
          id: 'dogs.giveDog',
          className: styles.buttonText
        })
      ]),
      h('div', {
        className: styles.dogsContainer
      }, [
        mapDogsToValues(dogs)
      ])
    ])
  )

  function createDog () {
    const name = dogNames.allRandom()
    actions.dogs.create({ name })
  }

  function removeDog () {
    const id = keys(dogs)[0]
    actions.dogs.remove(id)
  }
}

export default compose(
  connectStyles(styles)
)(Dogs)

