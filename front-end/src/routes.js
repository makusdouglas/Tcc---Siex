import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Main from './pages/Main';
import Profile from './pages/Profile';
import Login from './pages/Login';
import SignIn from './pages/SignIn';

import notFound from './pages/notFound';
import { isAutenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAutenticated() ? (
        <Component {...props} key={props.location.key} />
      ) : (
        <Redirect
          to={{ pathname: '/login', state: { from: props.location } }}
        />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/login" component={Login} />
        <Route path="/signin" component={SignIn} />
        <Route component={notFound} />
      </Switch>
    </BrowserRouter>
  );
}
