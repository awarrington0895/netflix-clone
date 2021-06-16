import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Login from "./login/Login";
import Loading from "./Loading";
import { useSelector } from "react-redux";

const Layout = () => {
  const loading = useSelector((state) => state.loading);

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
      {loading.isLoadingShown && <Loading />}
    </>
  );
};

export default Layout;
