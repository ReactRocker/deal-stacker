import React from "react";
import { useForm } from "react-hook-form";
import { v4 } from "uuid";
import Segment from "../Segment";
import StyledTextField from "../StyledTextField";
import validator from "validator";
import { Button, Typography, Box } from "@mui/material";

export default function Test({
  step,
  dispatch,
  handleFinish,
  handleNextStep,
  stepId,
  steps,
  finished,
  handlePreviousStep,
  handleReset,
  handleSkipStep,
  canSkip,
}) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {},
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data) => {
    console.log(data);
    console.log("submit");
    if (stepId === steps.length - 1) {
      dispatch(handleFinish());
    } else {
      dispatch(handleNextStep(stepId));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {step.map((i) => {
        return (
          <Segment key={v4()} title={i.title}>
            {i.fields.map((o) => {
              console.log(o);
              return (
                <StyledTextField
                  key={v4()}
                  label={o.field_title}
                  error={errors?.[o.slug] ? true : false}
                  {...register(o.slug, {
                    validate: {
                      isNum: (value) => {
                        return (
                          validator.isNumeric(value) || "Value must be a number"
                        );
                      },
                    },
                  })}
                  helperText={errors?.[o.slug]?.message || false}
                />
              );
            })}
          </Segment>
        );
      })}
      {finished ? (
        <React.Fragment>
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button
              onClick={() => {
                dispatch(handleReset());
              }}
            >
              Reset
            </Button>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              variant="contained"
              disabled={stepId === 0}
              onClick={() => {
                dispatch(handlePreviousStep(stepId));
              }}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {canSkip && (
              <Button
                onClick={() => {
                  dispatch(handleSkipStep(stepId));
                }}
                sx={{ mr: 1 }}
              >
                Skip
              </Button>
            )}

            <Button type="submit">
              {stepId === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </form>
  );
}
