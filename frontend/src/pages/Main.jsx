import React, {} from "react";
import { Container } from "@mui/material";
import { Switch, Route } from "react-router-dom";
import Strategy from "./Strategy";
import { selectAll } from "../redux/strategy/strategySlice";
import { useSelector } from "react-redux";

const Main = () => {
  const { strategies, isStrategiesReady } = useSelector(selectAll);

  return (
    <Container sx={{ mt: 3 }}>
      <Switch>
        {isStrategiesReady &&
          strategies.map((i, index) => {
            return (
              <Route path={`/strategies/${i.strategySlug}`} key={index}>
                <Strategy strategyId={i.id} />
              </Route>
            );
          })}
        <Route
          path="*"
          component={() => {
            return <h1>404 Not Found</h1>;
          }}
        />
      </Switch>
    </Container>
  );
};

export default Main;
