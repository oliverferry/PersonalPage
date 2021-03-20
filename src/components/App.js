import React from 'react'
import '../styles/App.css'
import { Container } from '@material-ui/core'
import FixedPosition from './TopBar'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import PostList from './PostList'


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
    secondary: {
      main: '#f50057',
    },
  }, typography: {
    fontFamily: [
      'Nunito',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
  }
});

const App = () => (
  <div className='app'>
    <MuiThemeProvider theme={theme}>
      <FixedPosition />
      <Container maxWidth="sm">
        <PostList/>
    </Container>
    </MuiThemeProvider>
  </div>

)
export default App
