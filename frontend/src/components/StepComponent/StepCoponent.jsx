import React, { useEffect } from "react";
import { v4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import validator from "validator";
import {
  selectSteps,
  selectFinished,
  selectActiveStep,
  handleNextStep,
  handlePreviousStep,
  handleSkipStep,
  handleFinish,
  handleReset,
  stepFieldsDataPush,
  selectStepFieldsData,
  pickOption,
  selectStepsLength,
} from "../../redux/strategy/strategySlice";

import {
  Box,
  Button,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Divider,
} from "@mui/material";
import StyledTextField from "../StyledTextField";
import Segment from "../Segment";
import ExpandForm from "../ExpandForm";

function Navigation({
  finished,
  handleReset,
  handlePreviousStep,
  handleSkipStep,
  stepId,
  canSkip,
}) {
  const stepsLength = useSelector(selectStepsLength);
  const dispatch = useDispatch();

  return finished ? (
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
          {stepId === stepsLength - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </React.Fragment>
  );
}

function Options({ options, slug }) {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    setValue(value);
    dispatch(pickOption({ optionSlug: value, step: slug }));
  };

  return (
    <FormControl>
      <FormLabel>Select option</FormLabel>
      <RadioGroup
        value={value}
        onChange={handleChange}
        sx={{ flexDirection: "row" }}
      >
        {options.map((i) => {
          return (
            <FormControlLabel
              key={v4()}
              checked={i.active}
              value={i.optionSlug}
              control={<Radio />}
              label={i.optionTitle}
            />
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default function StepComponent({
  slug: stepSlug,
  hasOptions,
  options,
  spreadsheets,
  id: stepId,
  canSkip,
}) {
  const finished = useSelector(selectFinished);
  const steps = useSelector(selectSteps);
  const stepFieldsData = useSelector(selectStepFieldsData(stepSlug));

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: stepFieldsData || {},
    reValidateMode: "onSubmit",
  });

  const onSubmit = async (data) => {
    if (stepId === steps.length - 1) {
      dispatch(handleFinish());
    } else {
      dispatch(
        stepFieldsDataPush({
          // optionSlug,
          stepSlug,
          data,
        })
      );
      dispatch(handleNextStep(stepId));
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {hasOptions ? (
        <React.Fragment>
          <Options options={options} slug={stepSlug} />
          {options.map(
            (option) =>
              option.active &&
              option.spreadsheets.map((segment) =>
                !segment.twoD ? (
                  <React.Fragment key={v4()}>
                    <Segment title={segment.title}>
                      {segment.fields.map((field) => (
                        <StyledTextField
                          key={v4()}
                          label={field.field_title}
                          error={errors?.[field.slug] ? true : false}
                          {...register(
                            `${option.optionSlug}.${segment.slug}.${field.slug}`,
                            {
                              validate: {
                                isNum: (value) =>
                                  validator.isNumeric(value) ||
                                  "Value must be a number",
                              },
                            }
                          )}
                          helperText={errors?.[field.slug]?.message || false}
                        />
                      ))}
                    </Segment>
                    {segment.canBeExpanded.flag && (
                      <ExpandForm
                        segment={segment}
                        stepSlug={stepSlug}
                        optionSlug={option.optionSlug}
                      />
                    )}
                  </React.Fragment>
                ) : (
                  <Box
                    sx={{
                      border: "1px solid #231e4638",
                      borderRadius: "0.28571429rem",
                      padding: "15px",
                    }}
                  >
                    {segment.subSpreadsheets.map((subs) => {
                      return (
                        <React.Fragment key={v4()}>
                          <Segment title={subs.subSpreadsheetTitle} key={v4()}>
                            {subs.fields.map((field) => (
                              <StyledTextField
                                key={v4()}
                                label={field.field_title}
                                error={errors?.[field.slug] ? true : false}
                                {...register(
                                  `${option.optionSlug}.${segment.slug}.${subs.subStreadsheetSlug}.${field.slug}`,
                                  {
                                    validate: {
                                      isNum: (value) =>
                                        validator.isNumeric(value) ||
                                        "Value must be a number",
                                    },
                                  }
                                )}
                                helperText={
                                  errors?.[field.slug]?.message || false
                                }
                              />
                            ))}
                          </Segment>
                          <Divider />
                        </React.Fragment>
                      );
                    })}
                    {segment.canBeExpanded.flag && (
                      <ExpandForm
                        segment={segment}
                        stepSlug={stepSlug}
                        optionSlug={option.optionSlug}
                      />
                    )}
                  </Box>
                )
              )
          )}
        </React.Fragment>
      ) : (
        spreadsheets.map((segment) =>
          !segment.twoD ? (
            <React.Fragment key={v4()}>
              <Segment title={segment.title}>
                {segment.fields.map((field) => (
                  <StyledTextField
                    key={v4()}
                    label={field.field_title}
                    error={errors?.[field.slug] ? true : false}
                    {...register(`${segment.slug}.${field.slug}`, {
                      validate: {
                        isNum: (value) =>
                          validator.isNumeric(value) ||
                          "Value must be a number",
                      },
                    })}
                    helperText={errors?.[field.slug]?.message || false}
                  />
                ))}
              </Segment>
              {segment.canBeExpanded.flag && (
                <ExpandForm segment={segment} stepSlug={stepSlug} />
              )}
            </React.Fragment>
          ) : (
            <h1>hello</h1>
          )
        )
      )}
      <Navigation
        finished={finished}
        handleReset={handleReset}
        handlePreviousStep={handlePreviousStep}
        handleSkipStep={handleSkipStep}
        stepId={stepId}
        canSkip={canSkip}
      />
    </form>
  );
}
