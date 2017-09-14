export default {
  container: ({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    height: '100%',
    paddingTop: theme.space[3],
    paddingBottom: theme.space[3],
    [`@media (max-width: ${theme.breakpoints.tabletWide})`]: {
      paddingLeft: theme.space[5],
      paddingRight: theme.space[5]
    },
    [`@media (min-width: ${theme.breakpoints.tabletWide}) and (max-width: ${theme.breakpoints.desktop})`]: {
      paddingLeft: theme.space[6],
      paddingRight: theme.space[6]
    },
    [`@media (min-width: ${theme.breakpoints.desktop}) and (max-width: ${theme.breakpoints.desktopXL})`]: {
      paddingLeft: theme.space[7],
      paddingRight: theme.space[7]
    },
    [`@media (min-width: ${theme.breakpoints.desktopXL})`]: {
      paddingLeft: theme.space[8],
      paddingRight: theme.space[8]
    },
    ':before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      opacity: .6,
      zIndex: -1,
      backgroundColor: theme.colors.canvas,
      backgroundImage: 'url("https://www.randomdoggiegenerator.com/randomdoggie.php")',
      backgroundSize: 'cover'
    }
  }),
  header: ({ theme }) => ({
    marginBottom: theme.space[1]
  }),
  title: ({ theme }) => ({
    margin: theme.space[0],
    textAlign: 'center'
  }),
  titleText: ({ theme }) => ({
    fontFamily: theme.fonts.logo,
    fontSize: theme.fontSizes[12],
    color: theme.colors.text
  }),
  tagline: ({ theme }) => ({
    textAlign: 'center'
  }),
  taglineText: ({ theme }) => ({
    fontFamily: theme.fonts.primary,
    fontSize: theme.fontSizes[5],
    color: theme.colors.text,
    fontWeight: theme.fontWeights.bold
  }),
  buttonsContainer: ({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-around',
    paddingTop: theme.space[1],
    paddingBottom: theme.space[1]
  }),
  buttonText: ({ theme }) => ({
    textTransform: 'capitalize',
    color: theme.colors.alternateText
  })
}
