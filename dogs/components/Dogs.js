import h from 'react-hyperscript'
import dogNames from 'dog-names'
import { mapObjIndexed, values, keys, pipe, prop } from 'ramda'
import { FormattedMessage } from 'dogstack/intl'

const mapDogs = mapObjIndexed((dog, key) => (
  h('p', {}, prop('name', dog))
))
const mapDogsToValues = pipe(mapDogs, values)

const Dogs = (props) => {
  const { dogs, actions } = props

  return (
    h('div', {}, [
      h('h1', {}, [
        h(FormattedMessage, {
          id: 'dogs.myDogs'
        })
      ]),
      h('button', {
        onClick: createDog
      }, [
        h(FormattedMessage, {
          id: 'dogs.adoptDog'
        })
      ]),
      h('button', {
        onClick: removeDog
      }, [
        h(FormattedMessage, {
          id: 'dogs.giveDog'
        })
      ]),
      h('div', {}, [
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

export default Dogs
