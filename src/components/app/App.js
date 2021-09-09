import React from "react";
import { AuthProvider } from "../../contexts/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import SignIn from "../auth/signin/SignIn";
import PrivateRoute from "../../routes/PrivateRoute";
import ForgotPassword from "../auth/forgotpassword/ForgotPassword";
import PageNotFound from "../pagenotfound/NotFound";
import Home from "../home/Home";
import Header from "../layouts/header/Header";
import UpdateProfile from "../userprofile/updateprofile/UpdateProfile";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute
            exact
            path="/update-profile"
            component={UpdateProfile}
          />
          <Route exact path="/SignIn" component={SignIn} />
          <Route exact path="/forgot-password" component={ForgotPassword} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
