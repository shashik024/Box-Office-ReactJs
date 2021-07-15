import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Home from './Routes/Home';
import Show from './Routes/Show';
import Starred from './Routes/Starred';

// App.js -> theme for styled components
const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

function App() {
  // const routes = [{

  // }]
  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/starred">
          <Starred />
        </Route>
        <Route exact path="/show/:id">
          <Show />
        </Route>
        <Route>
          <div>
            <h1>Page Not Found !</h1>
          </div>
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
