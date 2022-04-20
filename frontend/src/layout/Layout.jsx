import React, { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Welcome from "../pages/WelcomePage";
import Main from "../pages/Main";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAll } from "../redux/strategy/strategySlice";

export default function Layout() {
  const { isStrategiesReady } = useSelector(selectAll);
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Welcome} />
        {isStrategiesReady ? (
          <Route path="/strategies" component={Main} />
        ) : (
          <Redirect to="/" />
        )}
      </Switch>
      <Footer />
    </>
  );
}
