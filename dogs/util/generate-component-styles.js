import { map, __ } from 'ramda'

export default function generateComponentStyles (styles) {
  const mapWithStyles = map(__, styles)
  return (props) => (renderer) => {
    return mapWithStyles((style) => {
      return renderer.renderRule(style, props)
    })
  }
}
