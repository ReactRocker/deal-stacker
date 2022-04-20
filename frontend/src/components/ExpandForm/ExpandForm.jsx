import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import StyledTextField from "../StyledTextField";
import Segment from "../Segment";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { addStepField } from "../../redux/strategy/strategySlice";
import { selectStepsSpreadsheets } from "../../redux/strategy/strategySlice";
import { v4 } from "uuid";
import slugify from "slugify";

export default function ExpandForm({ segment, stepSlug, optionSlug }) {
  const {
    slug,
    canBeExpanded: { expandType, helperText, fields },
  } = segment;

  const spreadsheets = useSelector(
    selectStepsSpreadsheets({ stepSlug, optionSlug })
  );
  const currentSpreadsheet = spreadsheets.find((i) => i.slug === slug);
  const dispatch = useDispatch();

  const [value, setValue] = useState("");
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return expandType === "button" ? (
    <Button
      variant="outlined"
      onClick={() => {
        dispatch(
          addStepField({
            fieldTitle: `Unit ${currentSpreadsheet.fields.length + 1}`,
            fieldSlug: `unit_${currentSpreadsheet.fields.length + 1}`,
            segment,
            stepSlug,
          })
        );
      }}
    >
      {helperText}
    </Button>
  ) : (
    <Box sx={{ ml: 1 }}>
      <TextField
        value={value}
        onChange={handleChange}
        variant="standard"
        helperText={helperText}
        sx={{ mt: 3 }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <Button
                sx={{ mb: 1.5 }}
                onClick={() => {
                  const res = {
                    withSubs: true,
                    fields,
                    fieldTitle: value,
                    fieldSlug: slugify(value, "_"),
                    segment,
                    stepSlug,
                    optionSlug
                  };
                  console.log(res);
                  dispatch(addStepField(res));
                }}
              >
                Add
              </Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
