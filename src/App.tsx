import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainContainer from './containers/MainContainer';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <MainContainer />
      </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
