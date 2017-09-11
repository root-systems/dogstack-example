export default {
  container: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: theme.colors.primary1
  }),
  dogsContainer: () => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '20px'
  }),
  adoptButton: () => ({
    marginTop: '20px'
  })
}
