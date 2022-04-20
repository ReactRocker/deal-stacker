const { model } = require("mongoose");
const { StrategySchema } = require("../schemas");
const { pmt } = require("../utils");

// const strategyOne = {
//   build_title: "BTL/BTS/Split/HMO/SA",
//   steps: {
//     purchasing: {
//       step_title: "Purchasing",
//       description: "Sales point about HQ JV",
//       hasOptions: false,
//       canSkip: false,
//       tooltip: {},
//       options: null,
//       spreadsheets: {
//         costs_that_funding_can_include: {
//           spreadsheet_title: "Costs that funding can include",
//           spreadsheet_type: "normal",
//           fields: {
//             purchase_price: {
//               field_title: "Purchase price",
//             },
//             current_value: {
//               field_title: "Current Value",
//             },
//           },
//         },
//         costs_that_funding_cant_include: {
//           spreadsheet_title: "Costs that funding cant include",
//           spreadsheet_type: "normal",
//           fields: {
//             sdlt: {
//               field_title: "SDLT",
//             },
//             sourcing_agent_fee: {
//               field_title: "Sourcing/Agent fee",
//             },
//             legals: {
//               field_title: "Legals",
//             },
//             planning: {
//               field_title: "Planning",
//             },
//             architect: {
//               field_title: "Architect",
//             },
//             surveys: {
//               field_title: "Surveys",
//             },
//             insurance: {
//               field_title: "Insurance",
//             },
//             other: {
//               field_title: "Other ",
//             },
//           },
//         },
//       },
//     },
//     works: {
//       step_title: "Works",
//       description: null,
//       hasOptions: false,
//       canSkip: true,
//       tooltip: null,
//       options: null,
//       spreadsheets: {
//         works_costs_that_can_be_included_in_funding: {
//           spreadsheet_title: "Works costs that can be included in funding",
//           spreadsheet_type: "normal",
//           fields: {
//             total_build_cost: {
//               field_title: "Total build cost",
//             },
//             contingency: {
//               field_title: "Contingency",
//             },
//             demolition: {
//               field_title: "Demolition",
//             },
//             warranty: {
//               field_title: "Warranty",
//             },
//             landscaping: {
//               field_title: "Landscaping",
//             },
//             utilities: {
//               field_title: "Utilities",
//             },
//             project_management: {
//               field_title: "Project Management",
//             },
//             site_manger: {
//               field_title: "Site Manger",
//             },
//             qs: {
//               field_title: "QS",
//             },
//           },
//         },
//         works_costs_that_are_separate_to_funding: {
//           spreadsheet_title: "Works costs that are separate to funding",
//           spreadsheet_type: "normal",
//           fields: {
//             drawdowns: {
//               field_title: "Drawdowns",
//             },
//             monitoring_surveyor_cost_per_survey: {
//               field_title: "Monitoring surveyor cost per survey",
//             },
//             cil_s106: {
//               field_title: "CIL/S106",
//             },
//             legals: {
//               field_title: "Legals",
//             },
//             furniture: {
//               field_title: "Furniture",
//             },
//             dressing: {
//               field_title: "Dressing",
//             },
//             advertising: {
//               field_title: "Advertising",
//             },
//           },
//         },
//       },
//     },
//     funding: {
//       step_title: "Funding",
//       description:
//         "Some of the fields sould be prepopulated but allow the user to change, the user should be able to select one option for the report or one option plus investor funds.",
//       hasOptions: true,
//       canSkip: true,
//       tooltip: {},
//       options: {
//         mortgage: {
//           option_title: "Mortgage",
//           description: null,
//           spreadsheets: {
//             mortgage: {
//               spreadsheet_title: "Mortgage",
//               spreadsheet_type: "normal",
//               fields: {
//                 purchase_price: {
//                   field_title: "Purchase Price",
//                 },
//                 cash_injection: {
//                   field_title: "Cash Injection",
//                 },
//                 // ltv: {
//                 //   field_title: "LTV",
//                 // },
//                 term: {
//                   field_title: "Term",
//                 },
//                 interest_rate: {
//                   field_title: "Interest Rate",
//                 },
//                 broker_fee_in: {
//                   field_title: "Broker Fee In",
//                 },
//                 broker_fee_out: {
//                   field_title: "Broker Fee Out",
//                 },
//               },
//             },
//             results: {
//               spreadsheet_title: "Result",
//               spreadsheet_type: "normal",
//               fields: {},
//             },
//           },
//         },
//         peer_to_peer: {
//           option_title: "Peer to peer",
//           description: null,
//           spreadsheets: {
//             peer_to_peer: {
//               spreadsheet_title: "Peer to Peer",
//               spreadsheet_type: "normal",
//               fields: {
//                 purchase_price: {
//                   field_title: "Purchase Price",
//                 },
//                 cash_Injection: {
//                   field_title: "Cash Injection",
//                 },
//                 // ltv_of_purchase: {
//                 //   field_title: "LTV of Purchase"
//                 // },
//                 works_costs: {
//                   field_title: "Works Costs",
//                 },
//                 // ltv_of_works: {
//                 //   field_title: "LTV of Works"
//                 // },
//                 term: {
//                   field_title: "Term",
//                 },
//                 interest_rate: {
//                   field_title: "Interest Rate p.a.",
//                 },
//                 broker_fee_in: {
//                   field_title: "Broker Fee In",
//                 },
//                 broker_fee_out: {
//                   field_title: "Broker Fee Out",
//                 },
//               },
//             },
//             results: {
//               spreadsheet_title: "Result",
//               spreadsheet_type: "normal",
//               fields: {},
//             },
//           },
//         },
//         bridging_loan: {
//           option_title: "Bridging Loan",
//           description: null,
//           spreadsheets: {
//             bridging_loan: {
//               spreadsheet_title: "Bridging Loan",
//               spreadsheet_type: "normal",
//               fields: {
//                 purchase_price: {
//                   field_title: "Purchase Price",
//                 },
//                 cash_injection: {
//                   field_title: "Cash Injection",
//                 },
//                 works_costs: {
//                   field_title: "Works Costs",
//                 },
//                 term: {
//                   field_title: "Term",
//                 },
//                 interest_rate: {
//                   field_title: "Interest Rate",
//                 },
//                 broker_fee_in: {
//                   field_title: "Broker Fee In",
//                 },
//                 broker_fee_out: {
//                   field_title: "Broker Fee Out",
//                 },
//               },
//             },
//             results: {
//               spreadsheet_title: "Result",
//               spreadsheet_type: "normal",
//               fields: {},
//             },
//           },
//         },
//         investor_funds: {
//           option_title: "Investor Funds",
//           description: null,
//           spreadsheets: {
//             investor_funds: {
//               spreadsheet_title: "Investor Funds",
//               spreadsheet_type: "normal",
//               // haven't formulas
//               fields: {
//                 purchase_price: {
//                   field_title: "Purchase Price",
//                 },
//                 cash_injection: {
//                   field_title: "Cash Injection",
//                 },
//                 // ltv: {
//                 //   field_title: "LTV",
//                 // },
//                 works_costs: {
//                   field_title: "Works Costs",
//                 },
//                 // ltv_of_works: {
//                 //   field_title: "LTV of Works",
//                 // },
//                 term: {
//                   field_title: "Term",
//                 },
//                 interest_rate: {
//                   field_title: "Interest Rate",
//                 },
//                 broker_fee_in: {
//                   field_title: "Broker Fee In",
//                 },
//                 broker_fee_out: {
//                   field_title: "Broker Fee Out",
//                 },
//               },
//             },
//             results: {
//               spreadsheet_title: "Result",
//               spreadsheet_type: "normal",
//               fields: {},
//             },
//           },
//         },
//       },
//       spreadsheets: null,
//     },
//     gdv: {
//       step_title: "GDV",
//       description: null,
//       hasOptions: false,
//       canSkip: false,
//       tooltip: null,
//       options: null,
//       spreadsheets: {
//         sales_values: {
//           canBeExpanded: true,
//           spreadsheet_title: "Sales Values",
//           spreadsheet_type: "normal",
//           fields: {
//             unit_1: {
//               field_title: "Unit 1",
//             },
//             unit_2: {
//               field_title: "Unit 2",
//             },
//             unit_3: {
//               field_title: "Unit 3",
//             },
//             unit_4: {
//               field_title: "Unit 4",
//             },
//             unit_5: {
//               field_title: "Unit 5",
//             },
//           },
//         },
//         selling_fees: {
//           canBeExpanded: false,
//           spreadsheet_title: "Selling Fees",
//           spreadsheet_type: "normal",
//           fields: {
//             agents_fee: {
//               field_title: "Agents Fee",
//             },
//             solicitor_fee: {
//               field_title: "Solicitor Fee",
//             },
//           },
//         },
//       },
//     },
//     rental_income: {
//       step_title: "Rental Income",
//       description: null,
//       hasOptions: true,
//       tooltip: null,
//       canSkip: true,
//       options: {
//         single_rental: {
//           option_title: "Single Rental",
//           description: null,
//           spreadsheets: {
//             single_rental: {
//               spreadsheet_title: "Single Rental",
//               spreadsheet_type: "normal",
//               fields: {
//                 total_monthly_rental_income: {
//                   field_title: "Total Monthly Rental Income",
//                 },
//                 additional_monthly_income: {
//                   field_title: "Additional Monthly Income",
//                 },
//                 occupancy: {
//                   field_title: "Occupancy",
//                   meta: {
//                     hasLabel: true,
//                     label: "%",
//                   },
//                 },
//               },
//             },
//             monthly_operating_costs: {
//               spreadsheet_title: "Monthly Operating Costs",
//               spreadsheet_type: "normal",
//               fields: {
//                 letting_agent_fee: {
//                   field_title: "Letting agent fee",
//                 },
//                 insurance: {
//                   field_title: "Insurance",
//                 },
//                 gas_and_electric: {
//                   field_title: "Gas and electric",
//                 },
//                 water: {
//                   field_title: "Water",
//                 },
//                 council_tax: {
//                   field_title: "Council Tax",
//                 },
//                 cleaner: {
//                   field_title: "Cleaner",
//                 },
//                 gardener: {
//                   field_title: "Gardener",
//                 },
//                 broadband: {
//                   field_title: "Broadband",
//                 },
//                 service_charge: {
//                   field_title: "Service Charge",
//                 },
//                 maintenance: {
//                   field_title: "Maintenance",
//                 },
//                 voids: {
//                   field_title: "Voids",
//                 },
//                 credit_card_fee: {
//                   field_title: "Credit card fee",
//                 },
//                 software: {
//                   field_title: "Software",
//                 },
//                 linen: {
//                   field_title: "Linen",
//                 },
//               },
//             },
//             results: {
//               spreadsheet_title: "Results",
//               spreadsheet_type: "normal",
//               fields: {},
//             },
//           },
//         },
//         hmo: {
//           option_title: "HMO",
//           description: null,
//           spreadsheets: {
//             hmo: {
//               spreadsheet_title: "HMO",
//               spreadsheet_type: "normal",
//               fields: {
//                 total_monthly_rental_income: {
//                   field_title: "Total Monthly Rental Income",
//                 },
//                 additional_monthly_income: {
//                   field_title: "Additional Monthly Income",
//                 },
//                 occupancy: {
//                   field_title: "Occupancy",
//                   meta: {
//                     hasLabel: true,
//                     label: "%",
//                   },
//                 },
//               },
//             },
//             monthly_operating_costs: {
//               spreadsheet_title: "Monthly Operating Costs",
//               spreadsheet_type: "normal",
//               fields: {
//                 letting_agent_fee: {
//                   field_title: "Letting agent fee",
//                 },
//                 insurance: {
//                   field_title: "Insurance",
//                 },
//                 gas_and_electric: {
//                   field_title: "Gas and electric",
//                 },
//                 water: {
//                   field_title: "Water",
//                 },
//                 council_tax: {
//                   field_title: "Council Tax",
//                 },
//                 cleaner: {
//                   field_title: "Cleaner",
//                 },
//                 gardener: {
//                   field_title: "Gardener",
//                 },
//                 broadband: {
//                   field_title: "Broadband",
//                 },
//                 service_charge: {
//                   field_title: "Service Charge",
//                 },
//                 maintenance: {
//                   field_title: "Maintenance",
//                 },
//                 voids: {
//                   field_title: "Voids",
//                 },
//                 credit_card_fee: {
//                   field_title: "Credit card fee",
//                 },
//                 software: {
//                   field_title: "Software",
//                 },
//                 linen: {
//                   field_title: "Linen",
//                 },
//               },
//             },
//             results: {
//               spreadsheet_title: "Results",
//               spreadsheet_type: "normal",
//               fields: {},
//             },
//           },
//         },
//         serviced_acc: {
//           option_title: "Serviced Acc",
//           description: null,
//           spreadsheets: {
//             serviced_acc: {
//               spreadsheet_title: "Serviced Acc",
//               spreadsheet_type: "normal",
//               fields: {
//                 total_monthly_rental_income: {
//                   field_title: "Total Monthly Rental Income",
//                 },
//                 additional_monthly_income: {
//                   field_title: "Additional Monthly Income",
//                 },
//                 occupancy: {
//                   field_title: "Occupancy",
//                   meta: {
//                     hasLabel: true,
//                     label: "%",
//                   },
//                 },
//               },
//             },
//             monthly_operating_costs: {
//               spreadsheet_title: "Monthly Operating Costs",
//               spreadsheet_type: "normal",
//               fields: {
//                 letting_agent_fee: {
//                   field_title: "Letting agent fee",
//                 },
//                 insurance: {
//                   field_title: "Insurance",
//                 },
//                 gas_and_electric: {
//                   field_title: "Gas and electric",
//                 },
//                 water: {
//                   field_title: "Water",
//                 },
//                 council_tax: {
//                   field_title: "Council Tax",
//                 },
//                 cleaner: {
//                   field_title: "Cleaner",
//                 },
//                 gardener: {
//                   field_title: "Gardener",
//                 },
//                 broadband: {
//                   field_title: "Broadband",
//                 },
//                 service_charge: {
//                   field_title: "Service Charge",
//                 },
//                 maintenance: {
//                   field_title: "Maintenance",
//                 },
//                 voids: {
//                   field_title: "Voids",
//                 },
//                 credit_card_fee: {
//                   field_title: "Credit card fee",
//                 },
//                 software: {
//                   field_title: "Software",
//                 },
//                 linen: {
//                   field_title: "Linen",
//                 },
//               },
//             },
//             results: {
//               spreadsheet_title: "Results",
//               spreadsheet_type: "normal",
//               fields: {},
//             },
//           },
//         },
//       },
//       spreadsheets: null,
//     },
//     report: {
//       step_title: "Report",
//       description: null,
//       hasOptions: false,
//       tooltip: null,
//       canSkip: true,
//       options: null,
//       spreadsheets: {},
//     },
//   },
// };

// purchasing
StrategySchema.virtual("purchasing_total").get(function () {
  const {
    costs_that_funding_can_include: {
      fields: { purchase_price, current_value },
    },
    costs_that_funding_cant_include: {
      fields: {
        sdlt,
        sourcing_agent_fee,
        legals,
        planning,
        architect,
        surveys,
        insurance,
        other,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.purchasing.spreadsheets;

  return (
    purchase_price.value +
    current_value.value +
    sdlt.value +
    sourcing_agent_fee.value +
    legals.value +
    planning.value +
    architect.value +
    surveys.value +
    insurance.value +
    other.value
  );
});

// works
StrategySchema.virtual("total_works_costs_funding_will_cover").get(function () {
  const {
    works_costs_that_can_be_included_in_funding: {
      fields: {
        total_build_cost,
        contingency,
        demolition,
        warranty,
        landscaping,
        utilities,
        project_management,
        site_manger,
        qs,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.works.spreadsheets;
  return (
    total_build_cost.value +
    contingency.value +
    demolition.value +
    warranty.value +
    landscaping.value +
    utilities.value +
    project_management.value +
    site_manger.value +
    qs.value
  );
});

StrategySchema.virtual("total_works_costs_funding_wont_cover").get(function () {
  const {
    works_costs_that_are_separate_to_funding: {
      fields: {
        drawdowns,
        monitoring_surveyor_cost_per_survey,
        cil_s106,
        legals,
        furniture,
        dressing,
        advertising,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.works.spreadsheets;
  return (
    drawdowns.value +
    monitoring_surveyor_cost_per_survey.value +
    cil_s106.value +
    legals.value +
    furniture.value +
    dressing.value +
    advertising.value
  );
});

StrategySchema.virtual("total_works_costs").get(function () {
  return (
    this.total_works_costs_funding_will_cover +
    this.total_works_costs_funding_wont_cover
  );
});

// funding

// mortgage
StrategySchema.virtual("funding_mortgage_ltv").get(function () {
  const {
    mortgage: {
      fields: { purchase_price, cash_injection },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.mortgage
    .spreadsheets;
  if (
    ((purchase_price.value - cash_injection.value) / purchase_price.value) *
      100 >
    0
  ) {
    return (
      ((purchase_price.value - cash_injection.value) / purchase_price.value) *
      100
    );
  } else return 0;
});

StrategySchema.virtual("funding_mortgage_results_loan_amount").get(function () {
  const {
    mortgage: {
      fields: { purchase_price, cash_injection },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.mortgage
    .spreadsheets;
  return purchase_price.value - cash_injection.value;
});

StrategySchema.virtual("funding_mortgage_results_monthly_cost").get(
  function () {
    const {
      mortgage: {
        fields: { purchase_price, cash_injection, term, interest_rate },
      },
    } = this.toObject({ flattenMaps: true }).steps.funding.options.mortgage
      .spreadsheets;
    return pmt(
      interest_rate.value / 12,
      term.value,
      purchase_price.value - cash_injection.value,
      0
    );
  }
);

StrategySchema.virtual("funding_mortgage_results_annual_cost").get(function () {
  return this.funding_mortgage_results_monthly_cost * 12;
});

StrategySchema.virtual("funding_mortgage_results_total_interest").get(
  function () {
    // no formula
    return 0;
  }
);

StrategySchema.virtual("funding_mortgage_results_total_fees").get(function () {
  const {
    mortgage: {
      fields: { broker_fee_in, broker_fee_out },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.mortgage
    .spreadsheets;
  return broker_fee_in.value + broker_fee_out.value;
});

// peer_to_peer
StrategySchema.virtual("peer_to_peer_ltv_of_purchase").get(function () {
  const {
    peer_to_peer: {
      fields: { purchase_price, cash_injection },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.peer_to_peer
    .spreadsheets;
  if (
    ((purchase_price.value - cash_injection.value) / purchase_price.value) *
      100 >
    0
  ) {
    return (
      ((purchase_price.value - cash_injection.value) / purchase_price.value) *
      100
    );
  } else return 0;
});

StrategySchema.virtual("peer_to_peer_ltv_of_works").get(function () {
  const {
    peer_to_peer: {
      fields: { purchase_price, cash_injection, works_costs },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.peer_to_peer
    .spreadsheets;
  if (purchase_price.value > cash_injection.value) {
    return (
      ((cash_injection.value - purchase_price.value) / works_costs.value) * 100
    );
  } else return 100;
});

StrategySchema.virtual("peer_to_peer_results_loan_amount").get(function () {
  const {
    peer_to_peer: {
      fields: { purchase_price, cash_injection, works_costs },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.peer_to_peer
    .spreadsheets;
  const { investor_funds_results_loan_amount } = this;
  if (investor_funds_results_loan_amount) {
    return works_costs.value + purchase_price.value - cash_injection.value;
  } else return works_costs.value + purchase_price.value - cash_injection.value + investor_funds_results_loan_amount;
});

StrategySchema.virtual("peer_to_peer_results_mounthly_cost").get(function () {
  const {
    peer_to_peer: {
      fields: { interest_rate },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.peer_to_peer
    .spreadsheets;
  const {
    investor_funds_results_loan_amount,
    investor_funds_results_monthly_cost,
    peer_to_peer_loan_amount,
  } = this;

  if (investor_funds_results_loan_amount) {
    return (interest_rate.value / 12 / 100) * peer_to_peer_loan_amount;
  } else return (interest_rate.value / 12 / 100) * peer_to_peer_loan_amount + investor_funds_results_monthly_cost;
});

StrategySchema.virtual("peer_to_peer_results_annual_cost").get(function () {
  return this.peer_to_peer_monthly_cost * 12;
});

StrategySchema.virtual("peer_to_peer_results_total_interest").get(function () {
  const {
    peer_to_peer: {
      fields: { term },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.peer_to_peer
    .spreadsheets;
  return this.peer_to_peer_monthly_cost * term.value;
});

StrategySchema.virtual("peer_to_peer_results_total_fees").get(function () {
  const {
    peer_to_peer: {
      fields: { broker_fee_in, broker_fee_out },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.peer_to_peer
    .spreadsheets;
  return (
    this.peer_to_peer_results_total_interest +
    broker_fee_in.value +
    broker_fee_out.value
  );
});

// bridging_loan
StrategySchema.virtual("bridging_loan_ltv").get(function () {
  // !!!!!
  const {
    bridging_loan: {
      fields: { purchase_price, cash_injection },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.bridging_loan
    .spreadsheets;
  if (
    ((purchase_price.value - cash_injection.value) / purchase_price.value) *
      100 >
    0
  ) {
    return (
      ((purchase_price.value - cash_injection.value) / purchase_price.value) *
      100
    );
  } else return 0;
});

StrategySchema.virtual("bridging_loan_ltv_of_works").get(function () {
  const {
    bridging_loan: {
      fields: { purchase_price, cash_injection, works_costs },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.bridging_loan
    .spreadsheets;
  if (cash_injection.value > purchase_price.value) {
    return (
      ((cash_injection.value > purchase_price.value) / works_costs.value) * 100
    );
  } else return 100;
});

StrategySchema.virtual("bridging_loan_results_loan_amount").get(function () {
  const {
    bridging_loan: {
      fields: { purchase_price, works_costs, cash_injection },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.bridging_loan
    .spreadsheets;
  if (0) {
    return purchase_price.value + works_costs.value - cash_injection.value;
  } else return purchase_price.value + works_costs.value - cash_injection.value;
});

StrategySchema.virtual("bridging_loan_results_monthly_cost").get(function () {
  const {
    bridging_loan: {
      fields: { interest_rate, purchase_price, works_costs, cash_injection },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.bridging_loan
    .spreadsheets;
  if (0) {
    return (
      (interest_rate.value / 12 / 100) * this.bridging_loan_results_loan_amount
    );
  } else return (interest_rate.value / 12 / 100) * this.bridging_loan_results_loan_amount + 0;
});

StrategySchema.virtual("bridging_loan_results_annual_cost").get(function () {
  return this.bridging_loan_results_monthly_cost * 12;
});

StrategySchema.virtual("bridging_loan_results_total_interest").get(function () {
  const {
    bridging_loan: {
      fields: { term },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.bridging_loan
    .spreadsheets;
  return this.bridging_loan_results_monthly_cost * term.value;
});

StrategySchema.virtual("bridging_loan_results_total_fees").get(function () {
  const {
    bridging_loan: {
      fields: { broker_fee_in, broker_fee_out },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.bridging_loan
    .spreadsheets;
  return (
    this.bridging_loan_results_total_interest +
    broker_fee_in.value +
    broker_fee_out.value
  );
});

// investor_funds
StrategySchema.virtual("investor_funds_results_loan_amount").get(function () {
  const {
    investor_funds: {
      fields: { purchase_price, cash_injection, works_costs },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.investor_funds
    .spreadsheets;
  if (0) {
    return purchase_price.value + works_costs.value - cash_injection.value;
  } else return purchase_price.value + works_costs.value - cash_injection.value + 0;
});

StrategySchema.virtual("investor_funds_results_monthly_cost").get(function () {
  const {
    investor_funds: {
      fields: { interest_rate },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.investor_funds
    .spreadsheets;
  if (0) {
    return (
      (interest_rate.value / 12 / 100) * this.investor_funds_results_loan_amount
    );
  } else return (interest_rate.value / 12 / 100) * this.investor_funds_results_loan_amount + 0;
});

StrategySchema.virtual("investor_funds_results_annual_cost").get(function () {
  return this.investor_funds_results_monthly_cost * 12;
});

StrategySchema.virtual("investor_funds_results_total_interest").get(
  function () {
    const {
      investor_funds: {
        fields: { term },
      },
    } = this.toObject({ flattenMaps: true }).steps.funding.options
      .investor_funds.spreadsheets;
    return this.investor_funds_results_monthly_cost * term.value;
  }
);
StrategySchema.virtual("investor_funds_results_total_fees").get(function () {
  const {
    investor_funds: {
      fields: { broker_fee_in, broker_fee_out },
    },
  } = this.toObject({ flattenMaps: true }).steps.funding.options.investor_funds
    .spreadsheets;
  return (
    this.investor_funds_results_total_interest +
    broker_fee_in.value +
    broker_fee_out.value
  );
});

// -------------
// rental_income
// -------------

// single_rental
StrategySchema.virtual("sr_single_rental_total_monthly_income").get(
  function () {
    const {
      single_rental: {
        fields: {
          total_monthly_rental_income,
          additional_monthly_income,
          occupancy,
        },
      },
    } = this.toObject({ flattenMaps: true }).steps.rental_income.options
      .single_rental.spreadsheets;
    return (
      (total_monthly_rental_income.value + additional_monthly_income.value) *
      (occupancy / 100)
    );
  }
);

StrategySchema.virtual("sr_single_rental_total_annual_income").get(function () {
  return this.sr_single_rental_total_monthly_income * 12;
});

// monthly_operating_costs
StrategySchema.virtual("sr_monthly_operating_costs_total").get(function () {
  const {
    monthly_operating_costs: {
      fields: {
        letting_agent_fee,
        insurance,
        gas_and_electric,
        water,
        council_tax,
        cleaner,
        gardener,
        broadband,
        service_charge,
        maintenance,
        voids,
        credit_card_fee,
        software,
        linen,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options
    .single_rental.spreadsheets;
  return (
    letting_agent_fee.value +
    insurance.value +
    gas_and_electric.value +
    water.value +
    council_tax.value +
    cleaner.value +
    gardener.value +
    broadband.value +
    service_charge.value +
    maintenance.value +
    voids.value +
    credit_card_fee.value +
    software.value +
    linen.value
  );
});

// results
StrategySchema.virtual("sr_results_net_monthly_income").get(function () {
  return (
    this.sr_single_rental_total_monthly_income -
    this.sr_monthly_operating_costs_total
  );
});

StrategySchema.virtual("sr_results_net_annual_income").get(function () {
  return this.sr_results_net_monthly_income * 12;
});

StrategySchema.virtual("sr_results_yield").get(function () {
  return (this.sr_results_net_annual_income / this.total_gdv) * 100;
});

// hmo
StrategySchema.virtual("hmo_hmo_total_monthly_income").get(function () {
  const {
    hmo: {
      fields: {
        total_monthly_rental_income,
        additional_monthly_income,
        occupancy,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options.hmo
    .spreadsheets;
  return (
    (total_monthly_rental_income.value + additional_monthly_income.value) *
    (occupancy / 100)
  );
});

StrategySchema.virtual("hmo_hmo_total_annual_income").get(function () {
  return this.hmo_hmo_total_monthly_income * 12;
});

// monthly_operating_costs
StrategySchema.virtual("hmo_monthly_operating_costs_total").get(function () {
  const {
    monthly_operating_costs: {
      fields: {
        letting_agent_fee,
        insurance,
        gas_and_electric,
        water,
        council_tax,
        cleaner,
        gardener,
        broadband,
        service_charge,
        maintenance,
        voids,
        credit_card_fee,
        software,
        linen,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options.hmo
    .spreadsheets;
  return (
    letting_agent_fee.value +
    insurance.value +
    gas_and_electric.value +
    water.value +
    council_tax.value +
    cleaner.value +
    gardener.value +
    broadband.value +
    service_charge.value +
    maintenance.value +
    voids.value +
    credit_card_fee.value +
    software.value +
    linen.value
  );
});

// results
StrategySchema.virtual("hmo_results_net_monthly_income").get(function () {
  return (
    this.hmo_hmo_total_monthly_income + this.hmo_monthly_operating_costs_total
  );
});

StrategySchema.virtual("hmo_results_net_annual_income").get(function () {
  return this.hmo_results_net_monthly_income * 12;
});

StrategySchema.virtual("hmo_results_yield").get(function () {
  // !!!fix
  return (this.hmo_results_net_annual_income / this.total_gdv) * 100;
});

// serviced_acc
StrategySchema.virtual("sa_serviced_acc_additional_guest").get(function () {
  const {
    serviced_acc: {
      fields: { total_no_units, average_nightly_rate, occupancy },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options
    .serviced_acc.spreadsheets;
  return (
    (total_no_units.value + average_nightly_rate.value) * (occupancy / 100)
  );
});

StrategySchema.virtual("sa_serviced_acc_additional_guest_percent").get(
  function () {
    return this.sa_serviced_acc_additional_guest * 12;
  }
);

// monthly_operating_costs
StrategySchema.virtual("sa_monthly_operating_costs_total").get(function () {
  const {
    monthly_operating_costs: {
      fields: {
        letting_agent_fee,
        insurance,
        gas_and_electric,
        water,
        council_tax,
        cleaner,
        gardener,
        broadband,
        service_charge,
        maintenance,
        voids,
        credit_card_fee,
        software,
        linen,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options
    .serviced_acc.spreadsheets;
  return (
    letting_agent_fee.value +
    insurance.value +
    gas_and_electric.value +
    water.value +
    council_tax.value +
    cleaner.value +
    gardener.value +
    broadband.value +
    service_charge.value +
    maintenance.value +
    voids.value +
    credit_card_fee.value +
    software.value +
    linen.value
  );
});

// results
StrategySchema.virtual("sa_results_net_monthly_income").get(function () {
  return (
    this.sa_serviced_acc_additional_guest -
    this.sa_monthly_operating_costs_total
  );
});

StrategySchema.virtual("sa_results_net_annual_income").get(function () {
  return this.sa_results_net_monthly_income * 12;
});

StrategySchema.virtual("sa_results_yield").get(function () {
  return (this.sa_results_net_annual_income / this.total_gdv) * 100;
});

// -------------
// gdv
// -------------

// sales_values
StrategySchema.virtual("total_gdv").get(function () {
  const { fields } = this.toObject({ flattenMaps: true }).steps.gdv.spreadsheets
    .sales_values;

  return Object.values(fields).reduce((acc, i) => acc + (i.value || 0), 0);
});

const StrategyOneModel = model("Strategies", StrategySchema);

// const test = async () => {
//   const ins = await StrategyModel.create(strategyOne);
//   console.log(ins.total_works_costs);
// };

// test();

module.exports = StrategyOneModel;
