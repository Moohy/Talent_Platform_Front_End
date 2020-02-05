import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router";


import "assets/scss/material-kit-pro-react.scss?v=1.8.0";

import Home from "views/HomePage/Home.js";
import Signup from "views/SignupPage/Signup.js";
import Signin from "views/SigninPage/Signin.js";
import Profile from 'views/ProfilePage/Profile.js';
import AboutUsPage from "views/AboutUsPage/AboutUsPage";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/signin" component={Signin} />
      <Route path='/profile' component={Profile} />
      <Route path='/aboutus' component={AboutUsPage} />
      <Route path="/" component={Signin} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
