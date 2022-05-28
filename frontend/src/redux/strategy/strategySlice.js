import { createSlice } from "@reduxjs/toolkit";
import { getStrategies, pickStrategy } from "./thunks";

const initialState = {
  strategies: [],
  isStrategiesReady: false,
  currentStrategy: "",
  status: "idle",
  steps: [],
  isReady: false,
  stepFieldsData: {},
  finished: false,
};

export const strategySlice = createSlice({
  name: "strategy",
  initialState,
  reducers: {
    handleNextStep(state, { payload }) {
      state.steps.forEach((i) => {
        if (i.id === payload) {
          i.active = false;
          i.compleated = true;
          i.skipped = false;
          const second = state.steps.find((o) => o.id === i.id + 1);
          second.active = true;
        }
      });
    },
    handlePreviousStep(state, { payload }) {
      state.steps.forEach((i) => {
        if (i.id === payload) {
          i.active = false;
          const prev = state.steps.find((o) => o.id === i.id - 1);
          prev.active = true;
        }
      });
    },
    handleSkipStep(state, { payload }) {
      state.steps.forEach((i) => {
        if (i.id === payload) {
          i.active = false;
          i.compleated = false;
          i.skipped = true;
          const second = state.steps.find((o) => o.id === i.id + 1);
          second.active = true;
        }
      });
    },
    handleFinish(state) {
      state.finished = true;
    },
    handleReset(state) {
      state.steps.forEach((i) => {
        i.active = i.id === 0 ? true : false;
        i.compleated = false;
        i.skipped = false;
      });
      state.finished = false;
    },
    // stepFieldsDataPush({ stepFieldsData }, { payload: { stepSlug, data } }) {
    stepFieldsDataPush(state, { payload }) {
      const { data, spreadsheetSlug, optionSlug, stepSlug } = payload;
      const { hasOptions, options, spreadsheets } = state.steps.find(
        (i) => i.slug === stepSlug
      );
      if (hasOptions) {
        // const option = options.find((i) => i.optionSlug === optionSlug);
        options.forEach((option) => {
          if (option.active) {
            option.spreadsheets.forEach(
              ({ slug: spreadsheetSlug, fields, twoD, subSpreadsheets }) => {
                if (!twoD) {
                  fields.forEach((i) => {
                    i.value = data[option.optionSlug][spreadsheetSlug][i.slug];
                  });
                } else {
                  subSpreadsheets.forEach(
                    ({ fields, subStreadsheetSlug, subSpreadsheetTitle }) => {
                      // debugger;
                      fields.forEach((i) => {
                        console.log(option, i, data);
                        console.log(
                          data[option.optionSlug][spreadsheetSlug][
                            subStreadsheetSlug
                          ][i.slug]
                        );
                        i.value =
                          data[option.optionSlug][spreadsheetSlug][
                            subStreadsheetSlug
                          ][i.slug];
                      });
                    }
                  );
                }
              }
            );
          }
        });
      } else {
        spreadsheets.forEach(
          ({ slug: spreadsheetSlug, fields, twoD, subSpreadsheets }) => {
            if (!twoD) {
              fields.forEach((i) => {
                i.value = data[spreadsheetSlug][i.slug];
              });
            } else {
              subSpreadsheets.forEach(
                ({ fields, subStreadsheetSlug, subSpreadsheetTitle }) => {
                  fields.forEach((i) => {
                    i.value = data[spreadsheetSlug][subStreadsheetSlug][i.slug];
                  });
                }
              );
            }
          }
        );
      }
    },
    stepFieldsdataUpdate(state, action) {},
    stepFieldsdataRemove(state, action) {},
    addStepField(state, { payload }) {
      const {
        stepSlug,
        fieldTitle,
        fieldSlug,
        segment,
        fields,
        withSubs,
        optionSlug,
      } = payload;
      const targetStep = state.steps.find((i) => i.slug === stepSlug);
      if (targetStep.hasOptions) {
        if (!withSubs) {
          targetStep.options
            .find((i) => i.optionSlug === optionSlug)
            .spreadsheets.find((i) => i.slug === segment.slug)
            .fields.push({
              field_title: fieldTitle,
              slug: fieldSlug,
            });
        } else {
          targetStep.options
            .find((i) => i.optionSlug === optionSlug)
            .spreadsheets.find((i) => i.slug === segment.slug)
            .subSpreadsheets.push({
              subStreadsheetSlug: fieldSlug,
              subSpreadsheetTitle: fieldTitle,
              fields,
            });
        }
      } else {
        if (!withSubs) {
          targetStep.spreadsheets
            .find((i) => i.slug === segment.slug)
            .fields.push({
              field_title: fieldTitle,
              slug: fieldSlug,
            });
        } else {
          targetStep.spreadsheets
            .find((i) => i.slug === segment.slug)
            .subSpreadsheets.push({
              subStreadsheetSlug: fieldTitle,
              subSpreadsheetTitle: fieldSlug,
              fields,
            });
        }
      }
    },
    pickOption(state, { payload }) {
      const { optionSlug, step } = payload;
      state.steps
        .find((i) => i.slug === step)
        .options.forEach((i) => {
          i.active = false;
        });
      state.steps
        .find((i) => i.slug === step)
        .options.forEach((i) => {
          if (i.optionSlug === optionSlug) {
            i.active = true;
          }
        });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getStrategies.pending, (state) => {
        state.status = "pending";
      })
      .addCase(getStrategies.fulfilled, (state, { payload }) => {
        state.status = "idle";
        state.strategies = payload.strategies;
        state.isStrategiesReady = true;
      })
      .addCase(getStrategies.rejected, (state) => {
        state.status = "failed";
      })
      .addCase(pickStrategy.pending, (state) => {
        state.status = "pending";
      })
      .addCase(pickStrategy.fulfilled, (state, { payload }) => {
        const { build_title, steps } = payload;
        state.status = "idle";
        state.currentStrategy = build_title;
        state.steps = steps;
        state.isReady = true;
      })
      .addCase(pickStrategy.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectIsLoading = (state) => state.strategy.status === "loading";
export const selectIsReady = (state) => state.strategy.isReady;
export const selectSteps = (state) => state.strategy.steps;
export const selectStepsLength = (state) => state.strategy.steps.length;
export const selectStepsSpreadsheets =
  ({ stepSlug, optionSlug }) =>
  (state) => {
    const step = state.strategy.steps.find((i) => i.slug === stepSlug);
    if (step.hasOptions) {
      const { spreadsheets } = step.options.find(
        (i) => i.optionSlug === optionSlug
      );
      return spreadsheets;
    } else return step.spreadsheets;
  };

export const selectStrategyTitle = (state) => state.strategy.strategyTitle;
export const selectFinished = (state) => state.strategy.finished;
export const selectActiveStep = (state) =>
  state.strategy.steps.find((i) => i?.active === true);
export const selectSkipped = (state) =>
  state.strategy.steps.find((i) => i?.skipped === true);
export const selectStepFieldsData = (slug) => (state) => {
  const res = state.strategy.stepFieldsData[slug] || null;
  return res;
};
export const selectAll = (state) => state.strategy;

export const {
  handleNextStep,
  handlePreviousStep,
  handleSkipStep,
  handleFinish,
  handleReset,
  stepFieldsDataPush,
  stepFieldsdataUpdate,
  stepFieldsdataRemove,
  addStepField,
  pickOption,
} = strategySlice.actions;
export default strategySlice.reducer;
