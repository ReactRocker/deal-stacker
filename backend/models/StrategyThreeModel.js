const { model } = require("mongoose");
const { StrategySchema } = require("../schemas");

// const strategyThree = {
//   build_title: "Commercial conversion",
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
//               field_title: "Other",
//             },
//             other_2: {
//               field_title: "Other_2",
//             },
//           },
//         },
//       },
//     },
//     works: {
//       step_title: "Works",
//       description:
//         "Select how you want to price the works. Depending what the user selects the below fields will be displayed",
//       hasOptions: true,
//       canSkip: true,
//       tooltip: null,
//       options: {
//         per_unit: {
//           option_title: "Per Unit",
//           description: null,
//           spreadsheets: {
//             // TODO: rename fields
//             wcosts_included_in_funding: {
//               spreadsheet_title: "Works costs that can be included in funding",
//               twoD: true,
//               canBeExpanded: true,
//               subSpreadsheets: {
//                 unit_type_1: {
//                   title: "Unit type 1",
//                   fields: {
//                     no_units: {
//                       field_title: "No Units",
//                     },
//                     resale_per_unit: {
//                       field_title: "Resale price per unit", // ?????????????????????
//                     },
//                   },
//                 },
//                 unit_type_2: {
//                   title: "Unit type 2",
//                   fields: {
//                     no_units: {
//                       field_title: "No Units",
//                     },
//                     resale_per_unit: {
//                       field_title: "Resale price per unit",
//                     },
//                   },
//                 },
//                 unit_type_3: {
//                   title: "Unit type 3",
//                   fields: {
//                     no_units: {
//                       field_title: "No Units",
//                     },
//                     resale_per_unit: {
//                       field_title: "Resale price per unit",
//                     },
//                   },
//                 },
//               },
//             },
//             addworks_costs_included_funding: {
//               spreadsheet_title:
//                 "Additional works costs that can be included in funding",
//               spreadsheet_type: "normal",
//               fields: {
//                 contingency: {
//                   field_title: "Contingency",
//                 },
//                 demolition: {
//                   field_title: "Demolition",
//                 },
//                 warranty: {
//                   field_title: "Warranty",
//                 },
//                 landscaping: {
//                   field_title: "Landscaping",
//                 },
//                 utilities: {
//                   field_title: "Utilities",
//                 },
//                 project_management: {
//                   field_title: "Project Management",
//                 },
//                 site_manager: {
//                   field_title: "Site Manager",
//                 },
//                 qs: {
//                   field_title: "QS",
//                 },
//               },
//             },
//             works_costs_separate_funding: {
//               spreadsheet_title: "Works costs that are separate to funding",
//               spreadsheet_type: "normal",
//               fields: {
//                 вrawdowns: {
//                   field_title: "Drawdowns",
//                 },
//                 monitoring_surveyor_cost_per_survey: {
//                   field_title: "Monitoring surveyor cost per survey",
//                 },
//                 cil_s106: {
//                   field_title: "CIL/S106",
//                 },
//                 legals: {
//                   field_title: "Legals",
//                 },
//                 furniture: {
//                   field_title: "Furniture",
//                 },
//                 dressing: {
//                   field_title: "Dressing",
//                 },
//                 advertising: {
//                   field_title: "Advertising",
//                 },
//               },
//             },
//           },
//         },
//         per_m2: {
//           option_title: "Per M2",
//           description: null,
//           spreadsheets: {
//             // TODO: rename fields
//             area_build: {
//               spreadsheet_title: "Area of build",
//               twoD: true,
//               canBeExpanded: true,
//               subSpreadsheets: {
//                 internal_saleable_area: {
//                   title: "Internal development area",
//                   fields: {
//                     m2: {
//                       field_title: "M2",
//                     },
//                     price_m2: {
//                       field_title: "Price/M2",
//                     },
//                   },
//                 },
//                 external_saleable_area: {
//                   title: "External development area",
//                   fields: {
//                     m2: {
//                       field_title: "M2",
//                     },
//                     price_m2: {
//                       field_title: "Price/M2",
//                     },
//                   },
//                 },
//                 additional_saleable_area: {
//                   title: "Additional development area",
//                   fields: {
//                     m2: {
//                       field_title: "M2",
//                     },
//                     price_m2: {
//                       field_title: "Price/M2",
//                     },
//                   },
//                 },
//               },
//             },
//             addworks_costs_included_funding: {
//               spreadsheet_title:
//                 "Additional works costs that can be included in funding",
//               spreadsheet_type: "normal",
//               fields: {
//                 contingency: {
//                   field_title: "Contingency",
//                 },
//                 demolition: {
//                   field_title: "Demolition",
//                 },
//                 warranty: {
//                   field_title: "Warranty",
//                 },
//                 landscaping: {
//                   field_title: "Landscaping",
//                 },
//                 utilities: {
//                   field_title: "Utilities",
//                 },
//                 project_management: {
//                   field_title: "Project Management",
//                 },
//                 site_manager: {
//                   field_title: "Site Manager",
//                 },
//                 qs: {
//                   field_title: "QS",
//                 },
//               },
//             },
//             works_costs_separate_funding: {
//               spreadsheet_title: "Works costs that are separate to funding",
//               spreadsheet_type: "normal",
//               fields: {
//                 вrawdowns: {
//                   field_title: "Drawdowns",
//                 },
//                 monitoring_surveyor_cost_per_survey: {
//                   field_title: "Monitoring surveyor cost per survey",
//                 },
//                 cil_s106: {
//                   field_title: "CIL/S106",
//                 },
//                 legals: {
//                   field_title: "Legals",
//                 },
//                 furniture: {
//                   field_title: "Furniture",
//                 },
//                 dressing: {
//                   field_title: "Dressing",
//                 },
//                 advertising: {
//                   field_title: "Advertising",
//                 },
//               },
//             },
//           },
//         },
//       },
//       spreadsheets: {},
//     },
//     funding: {
//       step_title: "Funding",
//       description:
//         "Some of the fields sould be prepopulated but allow the user to change, the user should be able to select one option for the report or one option plus investor funds.",
//       hasOptions: true,
//       canSkip: true,
//       tooltip: {},
//       options: {
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
//                 cash_injection: {
//                   field_title: "Cash Injection",
//                 },
//                 ltv_of_purchase: {
//                   field_title: "LTV of Purchase",
//                 },
//                 works_costs: {
//                   field_title: "Works Costs",
//                 },
//                 ltv_of_works: {
//                   field_title: "LTV of Works",
//                 },
//                 term_months: {
//                   field_title: "Term Months",
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
//                 ltv_of_purchase: {
//                   field_title: "LTV of Purchase",
//                 },
//                 works_costs: {
//                   field_title: "Works Costs",
//                 },
//                 ltv_of_works: {
//                   field_title: "LTV of Works",
//                 },
//                 term_months: {
//                   field_title: "Term Months",
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
//                 ltv_of_purchase: {
//                   field_title: "LTV of Purchase",
//                 },
//                 works_costs: {
//                   field_title: "Works Costs",
//                 },
//                 ltv_of_works: {
//                   field_title: "LTV of Works",
//                 },
//                 term_months: {
//                   field_title: "Term Months",
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
//       },
//       spreadsheets: null,
//     },
//     gdv: {
//       step_title: "GDV",
//       description:
//         "Select how you want to price the GDV. Depending what the user selects the below fields will be displayed",
//       hasOptions: true,
//       canSkip: false,
//       tooltip: null,
//       options: {
//         per_unit: {
//           option_title: "Price Per Unit",
//           description: null,
//           spreadsheets: {
//             gdv_price_per_unit: {
//               spreadsheet_title: "GDV based on a price per unit",
//               twoD: true,
//               canBeExpanded: true,
//               subSpreadsheets: {
//                 unit_type_1: {
//                   title: "Unit type 1",
//                   fields: {
//                     no_units: {
//                       field_title: "No Units",
//                     },
//                     resale_per_unit: {
//                       field_title: "Resale price per unit", // ?????????????????????
//                     },
//                   },
//                 },
//                 unit_type_2: {
//                   title: "Unit type 2",
//                   fields: {
//                     no_units: {
//                       field_title: "No Units",
//                     },
//                     resale_per_unit: {
//                       field_title: "Resale price per unit",
//                     },
//                   },
//                 },
//                 unit_type_3: {
//                   title: "Unit type 3",
//                   fields: {
//                     no_units: {
//                       field_title: "No Units",
//                     },
//                     resale_per_unit: {
//                       field_title: "Resale price per unit",
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//         per_m2: {
//           option_title: "Price Per M2",
//           description: null,
//           spreadsheets: {
//             area_of_build: {
//               spreadsheet_title: "Area of build",
//               twoD: true,
//               canBeExpanded: true,
//               subSpreadsheets: {
//                 internal_saleable_area: {
//                   title: "Internal Saleable area",
//                   fields: {
//                     m2: {
//                       field_title: "M2",
//                     },
//                     price_m2: {
//                       field_title: "Price/M2",
//                     },
//                   },
//                 },
//                 external_saleable_area: {
//                   title: "External Saleable area",
//                   fields: {
//                     m2: {
//                       field_title: "M2",
//                     },
//                     price_m2: {
//                       field_title: "Price/M2",
//                     },
//                   },
//                 },
//                 additional_saleable_area: {
//                   title: "Additional Saleable area",
//                   fields: {
//                     m2: {
//                       field_title: "M2",
//                     },
//                     price_m2: {
//                       field_title: "Price/M2",
//                     },
//                   },
//                 },
//               },
//             },
//           },
//         },
//       },
//       spreadsheets: {},
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
//
StrategySchema.virtual("costs_that_funding_cant_include_total").get(
  function () {
    const {
      costs_that_funding_can_include: {
        fields: {
          sdlt,
          sourcing_agent_fee,
          legals,
          planning,
          architect,
          surveys,
          insurance,
          other,
          other_2,
        },
      },
      costs_that_funding_cant_include: {
        fields: { purchase_price, current_value },
      },
    } = this.toObject({ flattenMaps: true }).steps.purchasing.spreadsheets;

    return (
      sdlt.value +
      sourcing_agent_fee.value +
      legals.value +
      planning.value +
      architect.value +
      surveys.value +
      insurance.value +
      other.value +
      other_2.value +
      purchase_price.value +
      current_value.value
    );
  }
);

// works
// // //
// Per Unit
//
// Works costs that can be included in funding
StrategySchema.virtual("wcosts_included_in_funding_tcost_arr").get(function () {
  const {
    wcosts_included_in_funding: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.works.options.per_unit
    .spreadsheets;

  const res = Object.keys(subSpreadsheets).map((i) => {
    const { no_units, resale_per_unit } = subSpreadsheets[i].fields;
    return { i, total_cost: no_units.value * resale_per_unit.value };
  });

  return res;
});

StrategySchema.virtual("punit_based_total_costs").get(function () {
  return this.wcosts_included_in_funding_tcost_arr.reduce((acc, i) => {
    return acc + i.total_cost;
  }, 0);
});

// Additional works costs that can be included in funding

StrategySchema.virtual("punit_addworks_costs_included_funding_total").get(
  function () {
    const {
      addworks_costs_included_funding: {
        fields: {
          contingency,
          demolition,
          warranty,
          landscaping,
          utilities,
          project_management,
          site_manager,
          qs,
        },
      },
    } = this.toObject({ flattenMaps: true }).steps.works.options.per_unit
      .spreadsheets;

    return (
      contingency.value +
      demolition.value +
      warranty.value +
      landscaping.value +
      utilities.value +
      project_management.value +
      site_manager.value +
      qs.value
    );
  }
);

// Works costs that are separate to funding

StrategySchema.virtual("punit_works_costs_separate_funding_total").get(
  function () {
    const {
      works_costs_separate_funding: {
        fields: {
          вrawdowns,
          monitoring_surveyor_cost_per_survey,
          cil_s106,
          legals,
          furniture,
          dressing,
          advertising,
        },
      },
    } = this.toObject({ flattenMaps: true }).steps.works.options.per_unit
      .spreadsheets;

    return (
      вrawdowns.value +
      monitoring_surveyor_cost_per_survey.value +
      cil_s106.value +
      legals.value +
      furniture.value +
      dressing.value +
      advertising.value
    );
  }
);

StrategySchema.virtual("punit_total_works_costs").get(function () {
  return (
    this.punit_addworks_costs_included_funding_total +
    this.punit_works_costs_separate_funding_total
  );
});

// Per M2
//
// Area of build

StrategySchema.virtual("aread_build_tcost_arr").get(function () {
  const {
    area_build: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.works.options.per_m2
    .spreadsheets;

  const res = Object.keys(subSpreadsheets).map((i) => {
    const { m2, price_m2 } = subSpreadsheets[i].fields;
    return { i, total_cost: m2.value * price_m2.value };
  });

  return res;
});

StrategySchema.virtual("pm2_based_total_costs").get(function () {
  return this.aread_build_tcost_arr.reduce((acc, i) => {
    return acc + i.total_cost;
  }, 0);
});

// Additional works costs that can be included in funding
StrategySchema.virtual("pm2_addworks_costs_included_funding_total").get(
  function () {
    const {
      addworks_costs_included_funding: {
        fields: {
          contingency,
          demolition,
          warranty,
          landscaping,
          utilities,
          project_management,
          site_manager,
          qs,
        },
      },
    } = this.toObject({ flattenMaps: true }).steps.works.options.per_m2
      .spreadsheets;

    return (
      contingency.value +
      demolition.value +
      warranty.value +
      landscaping.value +
      utilities.value +
      project_management.value +
      site_manager.value +
      qs.value
    );
  }
);

// Works costs that are separate to funding
StrategySchema.virtual("pm2_works_costs_separate_funding_total").get(
  function () {
    const {
      works_costs_separate_funding: {
        fields: {
          вrawdowns,
          monitoring_surveyor_cost_per_survey,
          cil_s106,
          legals,
          furniture,
          dressing,
          advertising,
        },
      },
    } = this.toObject({ flattenMaps: true }).steps.works.options.per_unit
      .spreadsheets;

    return (
      вrawdowns.value +
      monitoring_surveyor_cost_per_survey.value +
      cil_s106.value +
      legals.value +
      furniture.value +
      dressing.value +
      advertising.value
    );
  }
);

StrategySchema.virtual("pm2_total_works_costs").get(function () {
  return (
    this.pm2_addworks_costs_included_funding_total +
    this.pm2_works_costs_separate_funding_total
  );
});

// funding
// // //

// Peer to Peer
//
// Peer to Peer
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

// Results
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

// Bridging Loan
//
// Bridging Loan
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
// Results
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

// Investor Funds
//
// Investor Funds
StrategySchema.virtual("investor_funds_ltv_of_purchase").get(function () {
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

StrategySchema.virtual("investor_funds_ltv_of_works").get(function () {
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

// Results
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

// gdv
// // //

// Per Unit
//
// GDV based on a price per unit
StrategySchema.virtual("gdv_price_per_unit").get(function () {
  const {
    gdv_price_per_unit: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.gdv.options.per_unit
    .spreadsheets;

  const res = Object.keys(subSpreadsheets).map((i) => {
    const { no_units, resale_per_unit } = subSpreadsheets[i].fields;
    return { i, total_cost: no_units.value * resale_per_unit.value };
  });

  return res;
});

StrategySchema.virtual("gdv_no_units_total").get(function () {
  const {
    gdv_price_per_unit: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.gdv.options.per_unit
    .spreadsheets;

  return Object.keys(subSpreadsheets).reduce((acc, i) => {
    const { no_units } = subSpreadsheets[i].fields;
    return acc + (no_units.value || 0);
  }, 0);
});

StrategySchema.virtual("gdv_resale_per_unit_total").get(function () {
  const {
    gdv_price_per_unit: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.gdv.options.per_unit
    .spreadsheets;

  return Object.keys(subSpreadsheets).reduce((acc, i) => {
    const { resale_per_unit } = subSpreadsheets[i].fields;
    return acc + (resale_per_unit.value || 0);
  }, 0);
});

StrategySchema.virtual("gdv_price_per_unit_resales_sum").get(function () {
  return this.gdv_price_per_unit.reduce((acc, i) => {
    return acc + i.total_cost;
  }, 0);
});

// Per M2
//
// Area of build
StrategySchema.virtual("gdv_area_of_build").get(function () {
  const {
    area_of_build: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.gdv.options.per_m2
    .spreadsheets;

  const res = Object.keys(subSpreadsheets).map((i) => {
    const { m2, price_m2 } = subSpreadsheets[i].fields;
    return { i, total_cost: m2.value * price_m2.value };
  });

  return res;
});

StrategySchema.virtual("gdv_m2_total").get(function () {
  const {
    area_of_build: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.gdv.options.per_m2
    .spreadsheets;

  return Object.keys(subSpreadsheets).reduce((acc, i) => {
    const { m2 } = subSpreadsheets[i].fields;
    return acc + (m2.value || 0);
  }, 0);
});

StrategySchema.virtual("gdv_price_m2_total").get(function () {
  const {
    area_of_build: { subSpreadsheets },
  } = this.toObject({ flattenMaps: true }).steps.gdv.options.per_m2
    .spreadsheets;

  return Object.keys(subSpreadsheets).reduce((acc, i) => {
    const { price_m2 } = subSpreadsheets[i].fields;
    return acc + (price_m2.value || 0);
  }, 0);
});

StrategySchema.virtual("gdv_price_per_m2_total_cost").get(function () {
  return this.gdv_area_of_build.reduce((acc, i) => {
    return acc + i.total_cost;
  }, 0);
});

// rental_income
// // //

// Single Rental
// single_rental
// monthly_operation_costs
// results

// HMO
// hmo
// monthly_operation_costs
// results

// Serviced Acc
// serviced_acc
// monthly_operation_costs
// results

const StrategyThreeModel = model("Strategies", StrategySchema);

// const test = async () => {
//   const ins = await StrategyModel.create();
// };

// test();

module.exports = StrategyThreeModel;
