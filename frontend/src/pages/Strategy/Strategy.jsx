import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pickStrategy } from "../../redux/strategy/thunks";
import {
  selectAll,
  selectActiveStep,
} from "../../redux/strategy/strategySlice";

import { Box, Stepper, Step, StepLabel, Typography } from "@mui/material";

import StepComponent from "../../components/StepComponent";
import { v4 } from "uuid";

export default function Strategy({ strategyId }) {
  const activeStep = useSelector(selectActiveStep);
  const { isReady, steps } = useSelector(selectAll);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pickStrategy(strategyId));
  }, []);

  return isReady ? (
    <Box>
      <Stepper
        activeStep={activeStep.id}
        sx={{
          flexWrap: "wrap",
          ".MuiStep-root": {},
          ".MuiStepConnector-root": {
            flex: "1 1 30px",
          },
        }}
      >
        {steps.map(({ canSkip, skipped, id, stepTitle }) => {
          const stepProps = {};
          if (skipped) {
            stepProps.completed = false;
          }

          return (
            <Step
              key={id}
              {...stepProps}
              sx={{
                padding: "8px",
                ".MuiStepIcon-root": {
                  borderRadius: "100%",
                  // backgroundColor: canSkip ? "grey" : "#ddaee3",
                },
              }}
            >
              <StepLabel
                optional={
                  canSkip && <Typography variant="caption">Optional</Typography>
                }
              >
                {stepTitle}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {steps.map(
        (step) =>
          step.id === activeStep.id && <StepComponent {...step} key={v4()} />
      )}
    </Box>
  ) : (
    "loading..."
  );
}
