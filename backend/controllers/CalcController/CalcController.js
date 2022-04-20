const {
  StrategyOneModel,
  StrategyTwoModel,
  StrategyThreeModel,
} = require("../../models");
const { strategies } = require("../../strategies");
const jwt = require("jsonwebtoken");

class CalcControllec {
  // _normalize = (raw) => {
  //   const normalizedData = [];
  //   for (let key in raw) {
  //     const row = raw[key];
  //     if (Array.isArray(row)) {
  //       normalizedData.push({
  //         tableHead: key,
  //         tableBody: row.map(({ subtableHead, subtableBody }) => {
  //           let temp = [];
  //           for (let key in subtableBody) {
  //             temp.push({
  //               cellName: key,
  //               cellValue: subtableBody[key],
  //             });
  //           }
  //           return {
  //             subtableHead,
  //             subtableBody: [...temp],
  //           };
  //         }),
  //       });
  //     } else {
  //       let temp = [];
  //       for (let tempKey in row) {
  //         temp.push({
  //           cellName: tempKey,
  //           cellValue: row[tempKey],
  //         });
  //       }
  //       normalizedData.push({
  //         tableHead: key,
  //         tableBody: [...temp],
  //       });
  //     }
  //   }
  //   return normalizedData;
  // };

  // _getStageOne = (model) => ({
  //   tabledData: this._normalize({
  //     ["Purchase which can be borrowed"]: {
  //       ["Surveyors Valuation"]: model["Surveyors Valuation"],
  //       ["Purchase Price"]: model["Purchase Price"],
  //     },
  //     ["Up front costs which can't be borrowed"]: {
  //       ["Buying Survey"]: model["Buying Survey"],
  //       ["Sourcing Fee"]: model["Sourcing Fee"],
  //       ["Insurance"]: model["Insurance"],
  //       ["2% P2P loan fee"]: model["2% P2P loan fee"],
  //       ["SDLT"]: model["SDLT"],
  //       ["Buyers Solicitor"]: model["Buyers Solicitor"],
  //       ["Planning/Architect (Borrowed)"]:
  //         model["Planning/Architect (Borrowed)"],
  //       ["Additional Legals"]: model["Additional Legals"],
  //       ["Money at Exchange"]: model["Money at Exchange"],
  //       ["Sourced Solicitor Fee"]: model["Sourced Solicitor Fee"],
  //       ["Total (Borrowed)"]: model["Total (Borrowed)"],
  //     },
  //     ["Costs during the project"]: {
  //       ["Build"]: model["Build"],
  //       ["Contingency (10%)"]: model["Contingency (10%)"],
  //       ["Project Manager (usually 10%)"]:
  //         model["Project Manager (usually 10%)"],
  //       ["CIL/S106"]: model["CIL/S106"],
  //       ["Planning/Architect (Costs during the project)"]:
  //         model["Planning/Architect (Costs during the project)"],
  //       ["Legals during project"]: model["Legals during project"],
  //       ["Drawdown Surveys"]: model["Drawdown Surveys"],
  //       ["Warranty"]: model["Warranty"],
  //       ["Landscaping"]: model["Landscaping"],
  //       ["Site road/1st stage"]: model["Site road/1st stage"],
  //       ["Costs pre end sale"]: model["Costs pre end sale"],
  //     },
  //     ["Costs due after sale"]: [
  //       {
  //         subtableHead: "P2P Costs",
  //         subtableBody: {
  //           ["P2P interest rate"]: model["P2P interest rate"],
  //           ["Term (months)"]: model["Term (months)"],
  //           ["P2P Investor Interest"]: model["P2P Investor Interest"],
  //           ["3% P2P loan fee"]: model["3% P2P loan fee"],
  //         },
  //       },
  //       {
  //         subtableHead: "Angel Investor Costs",
  //         subtableBody: {
  //           ["Interest for investor"]: model["Interest for investor"],
  //           ["Rate on investors money"]: model["Rate on investors money"],
  //           ["Pay back investor capital"]: model["Pay back investor capital"],
  //         },
  //       },
  //       {
  //         subtableHead: "Sourced MSF (5% of profit)",
  //         subtableBody: {
  //           ["Sale cost"]: model["Sale cost"],
  //           ["legals-sale"]: model["legals-sale"],
  //         },
  //       },
  //     ],
  //     ["Sales"]: {
  //       ["Unit 1"]: model["Unit 1"],
  //       ["Unit 2"]: model["Unit 2"],
  //       ["Unit 3"]: model["Unit 3"],
  //       ["Unit 4"]: model["Unit 4"],
  //       ["Unit 5"]: model["Unit 5"],
  //       ["Unit 6"]: model["Unit 6"],
  //       ["Unit 7"]: model["Unit 7"],
  //       ["Unit 8"]: model["Unit 8"],
  //       ["Unit 9"]: model["Unit 9"],
  //       ["Unit 10"]: model["Unit 10"],
  //       ["Unit 11"]: model["Unit 11"],
  //       ["Total (Sales)"]: model["Total (Sales)"],
  //       ["Total stressed -10% (Sales)"]: model["Total stressed -10% (Sales)"],
  //       ["Total stressed -20% (Sales)"]: model["Total stressed -20% (Sales)"],
  //     },
  //     ["P2P Loan"]: {
  //       ["70% of GDV is"]: model["70% of GDV is"],
  //       ["Your Total Loan"]: model["Your Total Loan"],
  //     },
  //     ["Cash you put in"]: {
  //       ["Purchase costs"]: model["Purchase costs"],
  //       ["Valuation - PP"]: model["Valuation - PP"],
  //       ["Borrower equity"]: model["Borrower equity"],
  //       ["Total (Cash you put in)"]: model["Total (Cash you put in)"],
  //     },
  //     ["Money from an investor"]: {
  //       ["Money (Money from an investor)"]:
  //         model["Money (Money from an investor)"],
  //     },
  //     ["Borrowing from P2P"]: {
  //       ["Total P2P Loan"]: model["Total P2P Loan"],
  //       ["You are short by"]: model["You are short by"],
  //     },
  //     ["Metrics"]: {
  //       ["Profit on sale (Metrix Stage 1)"]:
  //         model["Profit on sale (Metrix Stage 1)"],
  //       ["ROCE (Metrix Stage 1)"]: model["ROCE (Metrix Stage 1)"],
  //       ["ROI (Metrix Stage 1)"]: model["ROI (Metrix Stage 1)"],
  //       ["Profit (Metrix Stage 1)"]: model["Profit (Metrix Stage 1)"],
  //       ["Loan to purchase"]: model["Loan to purchase"],
  //       ["Loan to costs"]: model["Loan to costs"],
  //       ["Loan to GDV"]: model["Loan to GDV"],
  //       ["Borrower equity as % of valuation"]:
  //         model["Borrower equity as % of valuation"],
  //       ["Total invested by borrower"]: model["Total invested by borrower"],
  //     },
  //     ["Metrics stress test to 10%"]: {
  //       ["Profit on sale (Metrix Stage 1, 10%)"]:
  //         model["Profit on sale (Metrix Stage 1, 10%)"],
  //       ["ROCE % (Metrix Stage 1, 10%)"]: model["ROCE % (Metrix Stage 1, 10%)"],
  //       ["ROI % (Metrix Stage 1, 10%)"]: model["ROI % (Metrix Stage 1, 10%)"],
  //       ["Profit % (Metrix Stage 1, 10%)"]:
  //         model["Profit % (Metrix Stage 1, 10%)"],
  //       ["Loan to GDV % (Metrix Stage 1, 10%)"]:
  //         model["Loan to GDV % (Metrix Stage 1, 10%)"],
  //     },
  //     ["Metrics stress test to 20%"]: {
  //       ["Profit on sale (Metrix Stage 1, 20%)"]:
  //         model["Profit on sale (Metrix Stage 1, 20%)"],
  //       ["ROCE % (Metrix Stage 1, 20%)"]: model["ROCE % (Metrix Stage 1, 20%)"],
  //       ["ROI % (Metrix Stage 1, 20%)"]: model["ROI % (Metrix Stage 1, 20%)"],
  //       ["Profit % (Metrix Stage 1, 20%)"]:
  //         model["Profit % (Metrix Stage 1, 20%)"],
  //       ["Loan to GDV % (Metrix Stage 1, 20%)"]:
  //         model["Loan to GDV % (Metrix Stage 1, 20%)"],
  //     },
  //   }),
  //   rawData: {
  //     ["Surveyors Valuation"]: model["Surveyors Valuation"],
  //     ["Purchase Price"]: model["Purchase Price"],
  //     ["Buying Survey"]: model["Buying Survey"],
  //     ["Sourcing Fee"]: model["Sourcing Fee"],
  //     ["Insurance"]: model["Insurance"],
  //     // ["2% P2P loan fee"]: model["2% P2P loan fee"],
  //     ["SDLT"]: model["SDLT"],
  //     ["Buyers Solicitor"]: model["Buyers Solicitor"],
  //     ["Planning/Architect (Borrowed)"]: model["Planning/Architect (Borrowed)"],
  //     ["Additional Legals"]: model["Additional Legals"],
  //     ["Money at Exchange"]: model["Money at Exchange"],
  //     ["Sourced Solicitor Fee"]: model["Sourced Solicitor Fee"],
  //     // ["Total (Borrowed)"]: model["Total (Borrowed)"],
  //     ["Build"]: model["Build"],
  //     // ["Contingency (10%)"]: model["Contingency (10%)"],
  //     ["Project Manager (usually 10%)"]: model["Project Manager (usually 10%)"],
  //     ["CIL/S106"]: model["CIL/S106"],
  //     ["Planning/Architect (Costs during the project)"]:
  //       model["Planning/Architect (Costs during the project)"],
  //     ["Legals during project"]: model["Legals during project"],
  //     ["Drawdown Surveys"]: model["Drawdown Surveys"],
  //     ["Warranty"]: model["Warranty"],
  //     ["Landscaping"]: model["Landscaping"],
  //     ["Site road/1st stage"]: model["Site road/1st stage"],
  //     // ["Costs pre end sale"]: model["Costs pre end sale"],
  //     ["P2P interest rate"]: model["P2P interest rate"],
  //     ["Term (months)"]: model["Term (months)"],
  //     // ["P2P Investor Interest"]: model["P2P Investor Interest"],
  //     // ["3% P2P loan fee"]: model["3% P2P loan fee"],
  //     // ["Interest for investor"]: model["Interest for investor"],
  //     ["Rate on investors money"]: model["Rate on investors money"],
  //     // ["Pay back investor capital"]: model["Pay back investor capital"],
  //     ["Sale cost"]: model["Sale cost"],
  //     ["legals-sale"]: model["legals-sale"],
  //     ["Costs after sale"]: model["Costs after sale"],
  //     ["Unit 1"]: model["Unit 1"],
  //     ["Unit 2"]: model["Unit 2"],
  //     ["Unit 3"]: model["Unit 3"],
  //     ["Unit 4"]: model["Unit 4"],
  //     ["Unit 5"]: model["Unit 5"],
  //     ["Unit 6"]: model["Unit 6"],
  //     ["Unit 7"]: model["Unit 7"],
  //     ["Unit 8"]: model["Unit 8"],
  //     ["Unit 9"]: model["Unit 9"],
  //     ["Unit 10"]: model["Unit 10"],
  //     ["Unit 11"]: model["Unit 11"],
  //     // ["Total (Sales)"]: model["Total (Sales)"],
  //     // ["Total stressed -10% (Sales)"]: model["Total stressed -10% (Sales)"],
  //     // ["Total stressed -20% (Sales)"]: model["Total stressed -20% (Sales)"],
  //     // ["70% of GDV is"]: model["70% of GDV is"],
  //     // ["Your Total Loan"]: model["Your Total Loan"],
  //     // ["Purchase costs"]: model["Purchase costs"],
  //     // ["Valuation - PP"]: model["Valuation - PP"],
  //     ["Borrower equity"]: model["Borrower equity"],
  //     // ["Total (Cash you put in)"]: model["Total (Cash you put in)"],
  //     ["Money (Money from an investor)"]:
  //       model["Money (Money from an investor)"],
  //     // ["Total P2P Loan"]: model["Total P2P Loan"],
  //     // ["You are short by"]: model["You are short by"],
  //     // ["Profit on sale (Metrix Stage 1)"]:
  //     //   model["Profit on sale (Metrix Stage 1)"],
  //     // ["ROCE (Metrix Stage 1)"]: model["ROCE (Metrix Stage 1)"],
  //     // ["ROI (Metrix Stage 1)"]: model["ROI (Metrix Stage 1)"],
  //     // ["Profit (Metrix Stage 1)"]: model["Profit (Metrix Stage 1)"],
  //     // ["Loan to purchase"]: model["Loan to purchase"],
  //     // ["Loan to costs"]: model["Loan to costs"],
  //     // ["Loan to GDV"]: model["Loan to GDV"],
  //     // ["Borrower equity as % of valuation"]:
  //     //   model["Borrower equity as % of valuation"],
  //     // ["Total invested by borrower"]: model["Total invested by borrower"],
  //     // ["Profit on sale (Metrix Stage 1, 10%)"]:
  //     //   model["Profit on sale (Metrix Stage 1, 10%)"],
  //     // ["ROCE % (Metrix Stage 1, 10%)"]: model["ROCE % (Metrix Stage 1, 10%)"],
  //     // ["ROI % (Metrix Stage 1, 10%)"]: model["ROI % (Metrix Stage 1, 10%)"],
  //     // ["Profit % (Metrix Stage 1, 10%)"]:
  //     //   model["Profit % (Metrix Stage 1, 10%)"],
  //     // ["Loan to GDV % (Metrix Stage 1, 10%)"]:
  //     //   model["Loan to GDV % (Metrix Stage 1, 10%)"],
  //     // ["Profit on sale (Metrix Stage 1, 20%)"]:
  //     //   model["Profit on sale (Metrix Stage 1, 20%)"],
  //     // ["ROCE % (Metrix Stage 1, 20%)"]: model["ROCE % (Metrix Stage 1, 20%)"],
  //     // ["ROI % (Metrix Stage 1, 20%)"]: model["ROI % (Metrix Stage 1, 20%)"],
  //     // ["Profit % (Metrix Stage 1, 20%)"]:
  //     //   model["Profit % (Metrix Stage 1, 20%)"],
  //     // ["Loan to GDV % (Metrix Stage 1, 20%)"]:
  //     //   model["Loan to GDV % (Metrix Stage 1, 20%)"],
  //   },
  // });

  // _getStageTwo = (model) => ({
  //   tabledData: this._normalize({
  //     ["Refinance"]: {
  //       ["Total (Sales)"]: model["Total (Sales)"],
  //       ["Costs plus borrower equity"]: model["Costs plus borrower equity"],
  //     },
  //     ["Available borrowing"]: {
  //       ["Mortgage @ 75%"]: model["Mortgage @ 75%"],
  //     },
  //     ["Money left in the deal"]: {
  //       ["After you refinance this is left in, if red"]:
  //         model["After you refinance this is left in, if red"],
  //     },
  //   }),
  // });

  // _getStageThree = (model) => ({
  //   tabledData: this._normalize({
  //     ["Rental costs pcm (per unit)"]: {
  //       ["Lettings Fee (10%)"]: model["Lettings Fee (10%)"],
  //       ["Insurance"]: model["Insurance"],
  //       ["Lending @ 4% or Rent"]: model["Lending @ 4% or Rent"],
  //       ["Gas and Electric"]: model["Gas and Electric"],
  //       ["Water"]: model["Water"],
  //       ["Council Tax"]: model["Council Tax"],
  //       ["Cleaner"]: model["Cleaner"],
  //       ["Gardener"]: model["Gardener"],
  //       ["Broadband"]: model["Broadband"],
  //       ["Service Charge"]: model["Service Charge"],
  //       ["Monthly"]: model["Monthly (Rental costs)"],
  //       ["Annually"]: model["Annually (Rental costs)"],
  //     },
  //     ["Rental Income pcm"]: {
  //       ["Unit/Room 1"]: model["Unit/Room 1"],
  //       ["Unit/Room 2"]: model["Unit/Room 2"],
  //       ["Unit/Room 3"]: model["Unit/Room 3"],
  //       ["Unit/Room 4"]: model["Unit/Room 4"],
  //       ["Unit/Room 5"]: model["Unit/Room 5"],
  //       ["Unit/Room 6"]: model["Unit/Room 6"],
  //       ["Unit/Room 7"]: model["Unit/Room 7"],
  //       ["Unit/Room 8"]: model["Unit/Room 8"],
  //       ["Unit/Room 9"]: model["Unit/Room 9"],
  //       ["Unit/Room 10"]: model["Unit/Room 10"],
  //       ["Monthly"]: model["Monthly (Rental Income)"],
  //       ["Annually"]: model["Annually (Rental Income)"],
  //     },
  //     ["Metrics"]: {
  //       ["Monthly NET"]: model["Monthly NET"],
  //       ["Annual NET"]: model["Annual NET"],
  //       ["ROCE"]: model["Stage 3, Metrics ROCE"],
  //       ["Yield"]: model["Stage 3, Metrics Yield"],
  //     },
  //     ["Total P2P Costs"]: {
  //       ["2% In"]: model["Stage 3 2% In"],
  //       ["3% Out"]: model["Stage 3 3% Out"],
  //       ["Total Interest"]: model["Stage 3 Total Interest"],
  //       ["TOTAL"]: model["Total (Stage 3 Total P2P Costs)"],
  //     },
  //   }),
  //   rawData: {
  //     ["Lettings Fee (10%)"]: model["Lettings Fee (10%)"],
  //     ["Insurance"]: model["Insurance"],
  //     ["Lending @ 4% or Rent"]: model["Lending @ 4% or Rent"],
  //     ["Gas and Electric"]: model["Gas and Electric"],
  //     ["Water"]: model["Water"],
  //     ["Council Tax"]: model["Council Tax"],
  //     ["Cleaner"]: model["Cleaner"],
  //     ["Gardener"]: model["Gardener"],
  //     ["Broadband"]: model["Broadband"],
  //     ["Service Charge"]: model["Service Charge"],
  //     ["Unit/Room 1"]: model["Unit/Room 1"],
  //     ["Unit/Room 2"]: model["Unit/Room 2"],
  //     ["Unit/Room 3 "]: model["Unit/Room 3"],
  //     ["Unit/Room 4"]: model["Unit/Room 4"],
  //     ["Unit/Room 5"]: model["Unit/Room 5"],
  //     ["Unit/Room 6"]: model["Unit/Room 6"],
  //     ["Unit/Room 7"]: model["Unit/Room 7"],
  //     ["Unit/Room 8"]: model["Unit/Room 8"],
  //     ["Unit/Room 9"]: model["Unit/Room 9"],
  //     ["Unit/Room 10"]: model["Unit/Room 10"],
  //   },
  // });

  // _getData = (model, step) => {
  //   switch (step) {
  //     case 1:
  //       return this._getStageOne(model);
  //     case 2:
  //       return this._getStageTwo(model);
  //     default:
  //       return [
  //         {
  //           step: 1,
  //           stages: [
  //             { title: "Stage 1", data: this._getStageOne(model) },
  //             { title: "Stage 2", data: this._getStageTwo(model) },
  //           ],
  //         },
  //         { step: 2, stages: [...this._getStageTwo(model)] },
  //       ];
  //   }
  // };
  _normalize = (steps) => {
    // console.log("normalize");
    // console.log("steps:", steps);
    try {
      const res = Object.keys(steps).map((i, index) => {
        const {
          step_title,
          description,
          hasOptions,
          canSkip,
          tooltip,
          options,
          spreadsheets,
        } = steps[i];
        return {
          id: index,
          slug: i,
          stepTitle: step_title,
          active: index === 0 ? true : false,
          compleated: false,
          skipped: false,
          description,
          hasOptions,
          canSkip,
          tooltip,
          options: hasOptions
            ? Object.keys(options).map((i) => {
                const { option_title, description, spreadsheets } = options[i];
                return {
                  optionSlug: i,
                  optionTitle: option_title,
                  description,
                  spreadsheets: Object.keys(spreadsheets).map((i) => {
                    const {
                      spreadsheet_title,
                      canBeExpanded,
                      twoD,
                      spreadsheet_type,
                      fields,
                      subSpreadsheets,
                    } = spreadsheets[i];
                    if (twoD === true) {
                      return {
                        slug: i,
                        title: spreadsheet_title,
                        canBeExpanded: {
                          ...canBeExpanded,
                          fields:
                            canBeExpanded.fields &&
                            Object.keys(canBeExpanded.fields).map((i) => {
                              return {
                                slug: i,
                                ...canBeExpanded.fields[i],
                              };
                            }),
                        },
                        twoD,
                        subSpreadsheets: Object.keys(subSpreadsheets).map(
                          (i) => {
                            return {
                              subStreadsheetSlug: i,
                              subSpreadsheetTitle: subSpreadsheets[i].title,
                              fields: Object.keys(
                                subSpreadsheets[i].fields
                              ).map((o) => {
                                return {
                                  slug: o,
                                  ...subSpreadsheets[i].fields[o],
                                };
                              }),
                            };
                          }
                        ),
                        spreadsheetType: spreadsheet_type,
                      };
                    } else if (twoD === false) {
                      return {
                        slug: i,
                        title: spreadsheet_title,
                        canBeExpanded: {
                          ...canBeExpanded,
                          fields:
                            canBeExpanded.fields &&
                            Object.keys(canBeExpanded.fields).map((i) => {
                              return {
                                slug: i,
                                ...canBeExpanded.fields[i],
                              };
                            }),
                        },
                        twoD,
                        subSpreadsheets,
                        spreadsheetType: spreadsheet_type,
                        fields: Object.keys(fields).map((i) => {
                          return {
                            slug: i,
                            ...fields[i],
                          };
                        }),
                      };
                    }
                  }),
                };
              })
            : options,
          spreadsheets: !hasOptions
            ? Object.keys(spreadsheets).map((i) => {
                const {
                  spreadsheet_title,
                  canBeExpanded,
                  twoD,
                  spreadsheet_type,
                  fields,
                  subSpreadsheets,
                } = spreadsheets[i];
                if (twoD === true) {
                  return {
                    slug: i,
                    title: spreadsheet_title,
                    canBeExpanded: {
                      ...canBeExpanded,
                      fields:
                        canBeExpanded.fields &&
                        Object.keys(canBeExpanded.fields).map((i) => {
                          return {
                            slug: i,
                            ...canBeExpanded.fields[i],
                          };
                        }),
                    },
                    twoD,
                    subSpreadsheets: Object.keys(subSpreadsheets).map((i) => {
                      return {
                        subStreadsheetSlug: i,
                        subSpreadsheetTitle: subSpreadsheets[i].title,
                        fields: Object.keys(subSpreadsheets[i].fields).map(
                          (o) => {
                            return {
                              slug: o,
                              ...subSpreadsheets[i].fields[o],
                            };
                          }
                        ),
                      };
                    }),
                    spreadsheetType: spreadsheet_type,
                  };
                } else if (twoD === false) {
                  return {
                    slug: i,
                    title: spreadsheet_title,
                    canBeExpanded: {
                      ...canBeExpanded,
                      fields:
                        canBeExpanded.fields &&
                        Object.keys(canBeExpanded.fields).map((i) => {
                          return {
                            slug: i,
                            ...canBeExpanded.fields[i],
                          };
                        }),
                    },
                    twoD,
                    subSpreadsheets,
                    spreadsheetType: spreadsheet_type,
                    fields: Object.keys(fields).map((i) => {
                      return {
                        slug: i,
                        ...fields[i],
                      };
                    }),
                  };
                }
              })
            : spreadsheets,
        };
      });
      return res;
    } catch (error) {
      console.log(error);
    }

    // console.log(res);
  };

  create = async (req, res, next) => {
    console.log("create");
  };

  getStrategies = (req, res, next) => {
    res.json({
      strategies: strategies.map((i) => ({
        id: i.build_id,
        strategyName: i.build_title,
        strategySlug: i.strategy_slug,
      })),
    });
  };

  pickStrategy = async (req, res, next) => {
    const { strategyId } = req.body.data;
    const strategy = strategies.find((i) => i.build_id === strategyId) || null;
    if (!strategy) {
      res.status(404).json({
        status: "error",
        message: "Couldn't find strategy with such id",
      });
    } else {
      try {
        let created;
        switch (strategyId) {
          case 1:
            created = await StrategyOneModel.create(strategy);
            break;
          case 2:
            created = await StrategyTwoModel.create(strategy);
            break;
          case 3:
            created = await StrategyThreeModel.create(strategy);
            break;
        }
        const { build_id, strategy_slug, build_title, steps } =
          created.toObject({ flattenMaps: true });
        res.json({
          status: "success",
          strategy: {
            build_id,
            strategy_slug,
            build_title,
            steps: this._normalize(steps),
          },
        });
      } catch (error) {
        res.status(500).json({
          status: "error",
          message: "Something gone wrong...",
        });
      }
    }
  };

  update = async (req, res, next) => {
    console.log("update");
    // const { data, id } = res.locals;
    // try {
    //   const updated = await CalcDataModel.findByIdAndUpdate(
    //     id,
    //     { ...data },
    //     { returnOriginal: false }
    //   );
    //   const token = jwt.sign({ id: updated._id }, process.env.JWT_SECRET, {
    //     expiresIn: "1w",
    //   });
    //   const { tabledData } = this._getData(updated, 1);
    //   res.json({
    //     status: "success",
    //     data: tabledData,
    //     token,
    //     stage: updated.Stage,
    //   });
    // } catch (error) {
    //   res.status(403).json({
    //     status: "error",
    //     message: "Something went wrong, can't update...",
    //     error,
    //   });
    // }
  };

  remove = async (req, res, next) => {
    console.log("remove");
    // const { id } = res.locals;
    // try {
    // await CalcDataModel.findByIdAndDelete(id);
    // const token = jwt.sign({ id: updated._id }, process.env.JWT_SECRET, {
    // expiresIn: "1w",
    // });
    // res.json({
    // status: "success",
    // token,
    // });
    // } catch (error) {
    // res.status(403).json({
    // status: "error",
    // message: "Something went wrong, can't update...",
    // error,
    // });
    // }
  };

  fetch = async (req, res, next) => {
    res.send("fetch");
    // const { id } = res.locals;
    // try {
    //   const model = await CalcDataModel.findById(id);
    //   const data = this._getData(model);
    //   const token = jwt.sign({ id: updated._id }, process.env.JWT_SECRET, {
    //     expiresIn: "1w",
    //   });
    //   res.json({
    //     status: "success",
    //     data,
    //     token,
    //   });
    // } catch (error) {
    //   res.status(403).json({
    //     status: "error",
    //     message: "Something went wrong, can't update...",
    //     error,
    //   });
    // }
  };
}

module.exports = new CalcControllec();
