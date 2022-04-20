import React, { useEffect } from "react";
import { Container, Button, Typography, Box } from "@mui/material";
import { Switch, Route, Link } from "react-router-dom";
import { getStrategies } from "../../redux/strategy/thunks";
import { useDispatch, useSelector } from "react-redux";
import { selectAll } from "../../redux/strategy/strategySlice";

export default function Welcome() {
  const dispatch = useDispatch();
  const { strategies, isStrategiesReady } = useSelector(selectAll);

  useEffect(() => {
    dispatch(getStrategies());
  }, []);

  return (
    <Container sx={{ mt: 3 }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        {isStrategiesReady
          ? strategies.map((i, index) => {
              return (
                <Link key={index} to={`/strategies/${i.strategySlug}`}>
                  {i.strategyName}
                </Link>
              );
            })
          : "loading..."}
      </Box>
    </Container>
  );
}
