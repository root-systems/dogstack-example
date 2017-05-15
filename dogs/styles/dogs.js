export default {
  container: ({ color }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: color
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
