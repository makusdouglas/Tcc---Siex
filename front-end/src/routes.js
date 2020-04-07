import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </BrowserRouter>
  );
}
