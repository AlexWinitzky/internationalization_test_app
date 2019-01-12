import React, { Fragment } from 'react';
import Home from './Home';
import { Switch, Route } from 'react-router-dom';

const App = () => (
  <Fragment>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Fragment>
)

export default App;
