import { map } from 'ramda'

export default function generateComponentStyles (styles) {
  return (props) => (renderer) => {
    return map(styles, (style) => {
      return renderer.renderRule(style, props)
    })
  }
}
