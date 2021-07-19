import React from 'react';
import NavBar from './components/Nav';
import Main from './components/Main';
import { About, Feature, Home, Institution } from './menu';
import { Container } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import './App.css';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Nunito Sans',
    'fontWeightExtra-light': 200,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    'fontWeightSemi-bold': 600,
    fontWeightBold: 700,
    'fontWeightExtra-bold': 800,
    fontWeightBlack: 900,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Container max-width='sm'>
          <NavBar />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' component={About} />
            <Route path='/feature' component={Feature} />
            <Route path='/institution' component={Institution} />
          </Switch>
          <Main />
          <Footer />
        </Container>
      </Router>
    </ThemeProvider>
  );
}

export default App;
