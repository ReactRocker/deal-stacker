const { model } = require("mongoose");
const { StrategySchema } = require("../schemas");

// const strategyTwo = {
//   build_title: "Rent to rent HMO/SA",
//   steps: {
//     initial_spend: {
//       step_title: "Initial Spend",
//       description: null,
//       hasOptions: false,
//       canSkip: false,
//       tooltip: {},
//       options: null,
//       spreadsheets: {
//         initial_spend: {
//           spreadsheet_title: "Initial Spend", //provide normal title
//           spreadsheet_type: "normal",
//           fields: {
//             rent: {
//               field_title: "Rent",
//             },
//             deposit: {
//               field_title: "Deposit",
//             },
//             sourcing_agent_fee: {
//               field_title: "Sourcing/Agent fee",
//             },
//             furniture: {
//               field_title: "Furniture",
//             },
//             pictures_orniments: {
//               field_title: "Pictures/Orniments",
//             },
//             kitchen_utensils: {
//               field_title: "Kitchen utensils",
//             },
//             electrical_goods: {
//               field_title: "Electrical goods",
//             },
//             bedding_and_towels: {
//               field_title: "Bedding and Towels",
//             },
//             refurb: {
//               field_title: "Refurb",
//             },
//             legals: {
//               field_title: "Legals",
//             },
//             insurance: {
//               field_title: "Insurance",
//             },
//             other: {
//               field_title: "Other",
//             },
//             other_2: {
//               field_title: "Other_2", //two "other"
//             },
//           },
//         },
//       },
//     },
//     rental_income: {
//       step_title: "Works",
//       description: null,
//       hasOptions: true,
//       canSkip: true,
//       tooltip: null,
//       options: {
//         hmo: {
//           option_title: "Mortgage",
//           description: null,
//           spreadsheets: {
//             hmo: {
//               spreadsheet_title: "HMO",
//               spreadsheet_type: "normal",
//               fields: {
//                 room_1: {
//                   field_title: "Room 1",
//                 },
//                 room_2: {
//                   field_title: "Room 2",
//                 },
//                 room_3: {
//                   field_title: "Room 3",
//                 },
//                 room_4: {
//                   field_title: "Room 4",
//                 },
//                 room_5: {
//                   field_title: "Room 5",
//                 },
//                 room_6: {
//                   field_title: "Room 6",
//                 },
//                 room_7: {
//                   field_title: "Room 7",
//                 },
//                 room_8: {
//                   field_title: "Room 8",
//                 },
//                 room_9: {
//                   field_title: "Room 9",
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
//           },
//         },
//         serviced_acc: {
//           option_title: "Serviced Acc",
//           desctiption: null,
//           spreadsheets: {
//             serviced_acc: {
//               spreadsheet_title: "Serviced Acc",
//               spreadsheet_type: "normal",
//               fields: {
//                 room_1_nightly_rate: {
//                   field_title: "Room 1 nightly rate",
//                 },
//                 room_2_nightly_rate: {
//                   field_title: "Room 2 nightly rate",
//                 },
//                 room_3_nightly_rate: {
//                   field_title: "Room 3 nightly rate",
//                 },
//                 room_4_nightly_rate: {
//                   field_title: "Room 4 nightly rate",
//                 },
//                 room_5_nightly_rate: {
//                   field_title: "Room 5 nightly rate",
//                 },
//                 room_6_nightly_rate: {
//                   field_title: "Room 6 nightly rate",
//                 },
//                 room_7_nightly_rate: {
//                   field_title: "Room 7 nightly rate",
//                 },
//                 room_8_nightly_rate: {
//                   field_title: "Room 8 nightly rate",
//                 },
//                 room_9_nightly_rate: {
//                   field_title: "Room 9 nightly rate",
//                 },
//                 average_stay: {
//                   field_title: "Average Stay",
//                 },
//                 additional_guest_rate: {
//                   field_title: "Additional Guest rate",
//                 },
//                 additional_guest: {
//                   field_title: "Additional Guest",
//                   meta: {
//                     hasLabel: true,
//                     label: "%",
//                   },
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
//           },
//         },
//       },
//       spreadsheets: null,
//     },
//     expenses: {
//       step_title: "Expenses",
//       description: null,
//       hasOptions: true,
//       canSkip: true,
//       tooltip: {},
//       // 2 headers in excel spreadsheet
//       options: {
//         hmo: {
//           option_title: "HMO",
//           description: null,
//           spreadsheets: {
//             monthly_operating_costs: {
//               spreadsheet_title: "HMO",
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
//                 mortgage_borrowing: {
//                   field_title: "Mortgage/Borrowing",
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
//                 booking_fee: {
//                   field_title: "Booking.com fee",
//                 },
//                 card_fees: {
//                   field_title: "Card Fees",
//                   meta: {
//                     hasLabel: true,
//                     label: "%",
//                   },
//                 },
//               },
//             },
//             costs_per_stay: {
//               spreadsheet_title: "Costs per Stay",
//               spreadsheet_type: "normal",
//               fields: {
//                 cleaning_per_change_over: {
//                   field_title: "Cleaning per change over",
//                 },
//                 laundry_per_changeover_pp: {
//                   field_title: "Laundry per changeover PP",
//                 },
//                 check_in_cost: {
//                   field_title: "Check in cost",
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

// initial_spend

// total_cost
StrategySchema.virtual("initial_spend_total_cost").get(function () {
  const {
    initial_spend: {
      fields: {
        rent,
        deposit,
        sourcing_agent_fee,
        furniture,
        pictures_orniments,
        kitchen_utensils,
        electrical_goods,
        bedding_and_towels,
        refurb,
        legals,
        insurance,
        other,
        other_2,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.initial_spend.spreadsheets;
  return (
    rent.value +
    deposit.value +
    sourcing_agent_fee.value +
    furniture.value +
    pictures_orniments.value +
    kitchen_utensils.value +
    electrical_goods.value +
    bedding_and_towels.value +
    refurb.value +
    legals.value +
    insurance.value +
    other.value +
    other_2.value
  );
});

// rental_income

// hmo
StrategySchema.virtual("hmo_hmo_total_annual_income").get(function () {
  const {
    hmo: {
      fields: {
        room_1,
        room_2,
        room_3,
        room_4,
        room_5,
        room_6,
        room_7,
        room_8,
        room_9,
        additional_monthly_income,
        occupancy,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options.hmo
    .spreadsheets;
  return (
    (room_1.value +
      room_2.value +
      room_3.value +
      room_4.value +
      room_5.value +
      room_6.value +
      room_7.value +
      room_8.value +
      room_9.value +
      additional_monthly_income.value) *
    365 *
    (occupancy / 100)
  );
});

StrategySchema.virtual("hmo_hmo_total_monthly_income").get(function () {
  return this.hmo_hmo_total_annual_income / 12;
});

// serviced_acc
StrategySchema.virtual("sr_serviced_acc_total_annual_income").get(function () {
  const {
    serviced_acc: {
      fields: {
        room_1_nightly_rate,
        room_2_nightly_rate,
        room_3_nightly_rate,
        room_4_nightly_rate,
        room_5_nightly_rate,
        room_6_nightly_rate,
        room_7_nightly_rate,
        room_8_nightly_rate,
        room_9_nightly_rate,
        average_stay,
        additional_guest_rate,
        additional_guest,
        occupancy,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options
    .serviced_acc.spreadsheets;
  const toom_nightly_rate = [
    room_1_nightly_rate,
    room_2_nightly_rate,
    room_3_nightly_rate,
    room_4_nightly_rate,
    room_5_nightly_rate,
    room_6_nightly_rate,
    room_7_nightly_rate,
    room_8_nightly_rate,
    room_9_nightly_rate,
  ];
  return (
    ((room_1_nightly_rate.value +
      room_2_nightly_rate.value +
      room_3_nightly_rate.value +
      room_4_nightly_rate.value +
      room_5_nightly_rate.value +
      room_6_nightly_rate.value +
      room_7_nightly_rate.value +
      room_8_nightly_rate.value +
      room_9_nightly_rate.value) *
      365 +
      toom_nightly_rate.filter((i) => i.value || false).length *
        additional_guest_rate.value *
        (additional_guest / 100) *
        365) *
    (occupancy / 100)
  );
});

StrategySchema.virtual("sr_serviced_acc_total_monthly_income").get(function () {
  return this.sr_serviced_acc_total_annual_income / 12;
});

// expenses

// hmo
StrategySchema.virtual("hmo_results_net_monthly_income").get(function () {
  const {
    hmo: {
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
        mortgage_borrowing,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.expenses.options.hmo
    .spreadsheets;
  return (
    this.hmo_hmo_total_monthly_income -
    (letting_agent_fee.value +
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
      linen.value +
      mortgage_borrowing.value)
  );
});

StrategySchema.virtual("hmo_results_net_annual_income").get(function () {
  return this.hmo_results_net_monthly_income / 12;
});

StrategySchema.virtual("hmo_results_roce").get(function () {
  return this.hmo_results_net_annual_income / this.initial_spend_total_cost;
});

// serviced_acc
StrategySchema.virtual("sa_monthly_operating_costs_total").get(function () {
  const {
    serviced_acc: {
      fields: {
        letting_agent_fee,
        insurance,
        gas_and_electric,
        water,
        council_tax,
        gardener,
        broadband,
        service_charge,
        maintenance,
        voids,
        booking_fee,
        card_fees,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.expenses.options.serviced_acc
    .spreadsheets;
  return (
    letting_agent_fee.value +
    insurance.value +
    gas_and_electric.value +
    water.value +
    council_tax.value +
    gardener.value +
    broadband.value +
    service_charge.value +
    maintenance.value +
    voids.value +
    (card_fees.value / 100) * this.sr_serviced_acc_total_monthly_income +
    (booking_fee.value / 100) * this.sr_serviced_acc_total_monthly_income
  );
});

StrategySchema.virtual("sa_costs_per_stay_total").get(function () {
  const {
    costs_per_stay: {
      fields: {
        cleaning_per_change_over,
        laundry_per_changeover_PP,
        check_in_cost,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.expenses.options.serviced_acc
    .spreadsheets;
  return (
    cleaning_per_change_over.value +
    laundry_per_changeover_PP.value +
    check_in_cost.value
  );
});

StrategySchema.virtual("sa_costs_per_stay_total_costs").get(function () {
  const {
    serviced_acc: {
      fields: {
        room_1_nightly_rate,
        room_2_nightly_rate,
        room_3_nightly_rate,
        room_4_nightly_rate,
        room_5_nightly_rate,
        room_6_nightly_rate,
        room_7_nightly_rate,
        room_8_nightly_rate,
        room_9_nightly_rate,
        average_stay,
        additional_guest_rate,
        additional_guest,
        occupancy,
      },
    },
  } = this.toObject({ flattenMaps: true }).steps.rental_income.options;
  const room_nightly_rate = [
    room_1_nightly_rate,
    room_2_nightly_rate,
    room_3_nightly_rate,
    room_4_nightly_rate,
    room_5_nightly_rate,
    room_6_nightly_rate,
    room_7_nightly_rate,
    room_8_nightly_rate,
    room_9_nightly_rate,
  ];
  return (
    this.sa_costs_per_stay_total *
      (365 / 12 / average_stay.value) *
      room_nightly_rate.filter((i) => i.value > 0.0).length *
      (occupancy.value / 100) +
    this.sa_monthly_operating_costs_total
  );
});

StrategySchema.virtual("sa_results_net_monthly_income").get(function () {
  return (
    this.sr_serviced_acc_total_monthly_income -
    this.sa_costs_per_stay_total_costs
  );
});

StrategySchema.virtual("sa_results_net_annual_income").get(function () {
  return this.sa_results_net_monthly_income * 12;
});

StrategySchema.virtual("sa_results_roce").get(function () {
  return this.sa_results_net_annual_income / this.initial_spend_total_cost;
});

const StrategyTwoModel = model("Strategies", StrategySchema);

// const test = async () => {
//   const ins = await StrategyModel.create();
// };

// test();

module.exports = StrategyTwoModel;
