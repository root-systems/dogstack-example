import { combineRules } from 'fela'

const spaceAbove = ({ theme }) => ({
  marginTop: theme.space[2]
})

const container = () => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
})

export default {
  container: combineRules(container, ({ theme }) => ({
    height: '100%',
    backgroundColor: theme.colors.secondary3
  })),
  dogsContainer: combineRules(container, spaceAbove),
  titleText: () => ({
    textTransform: 'uppercase'
  }),
  buttonText: () => ({
    textTransform: 'capitalize'
  }),
  adoptButton: combineRules(spaceAbove),
  giveButton: combineRules(spaceAbove)
}
