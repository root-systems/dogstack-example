export default {
  container: () => ({
    display: 'flex',
    justifyContent: 'center'
  }),
  name: ({ size }) => ({
    fontSize: nameFontSizes[size]
  })
}

const nameFontSizes = {
  small: '1.4rem',
  full: '4rem'
}
