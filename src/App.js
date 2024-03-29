import React from "react";
import "./App.css";
import UserRegistration from "./components/registration/registration";
import UserLogin from "./components/login/login";
import NavigationBar from "./components/navigation/navigation";
import ForgotPassword from "./components/forgotPassword/forgotPassword";
import NotFoundPage from "./components/404/notFoundPage";
import { Route, Switch } from "react-router-dom";
import { observer } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
function App({ userStore }) {
  return (
    <Router>
      <div>
        <NavigationBar userStore={userStore} />
        <Switch>
          <Route
            path="/"
            exact
            component={(props) => (
              <UserLogin {...props} userStore={userStore} />
            )}
          />
          <Route
            path="/registration"
            exact
            component={(props) => (
              <UserRegistration {...props} userStore={userStore} />
            )}
          />
          <Route
            path="/profile"
            exact
            component={(props) => (
              <Dashboard {...props} userStore={userStore} />
            )}
          />
          <Route
            path="/profile/*"
            exact
            component={(props) => (
              <Dashboard {...props} userStore={userStore} />
            )}
          />
          <Route
            path="/forgot-password"
            exact
            component={(props) => (
              <ForgotPassword {...props} userStore={userStore} />
            )}
          />
          <Route path="*" component={NotFoundPage}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default observer(App);
