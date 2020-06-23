import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Game } from './pages';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/game" exact component={Game} />
      </Switch>
    </BrowserRouter>
  )
}