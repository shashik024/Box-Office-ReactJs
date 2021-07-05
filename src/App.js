import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Routes/Home';
import Starred from './Routes/Starred';

function App() {
  // const routes = [{

  // }]
  return (
    <div>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/starred">
          <Starred />
        </Route>
        <Route>
          <div>
            <h1>Page Not Found !</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
