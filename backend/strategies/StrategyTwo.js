module.exports = {
  build_id: 2,
  build_title: "Rent to rent HMO/SA",
  strategy_slug: "rent-to-rent-hmo-sa",
  steps: {
    initial_spend: {
      stepTitle: "Initial Spend",
      description: null,
      hasOptions: false,
      canSkip: false,
      tooltip: {},
      options: null,
      spreadsheets: {
        initial_spend: {
          spreadsheetTitle: "Initial Spend", //provide normal title
          spreadsheet_type: "normal",
          fields: {
            rent: {
              field_title: "Rent",
            },
            deposit: {
              field_title: "Deposit",
            },
            sourcing_agent_fee: {
              field_title: "Sourcing/Agent fee",
            },
            furniture: {
              field_title: "Furniture",
            },
            pictures_orniments: {
              field_title: "Pictures/Orniments",
            },
            kitchen_utensils: {
              field_title: "Kitchen utensils",
            },
            electrical_goods: {
              field_title: "Electrical goods",
            },
            bedding_and_towels: {
              field_title: "Bedding and Towels",
            },
            refurb: {
              field_title: "Refurb",
            },
            legals: {
              field_title: "Legals",
            },
            insurance: {
              field_title: "Insurance",
            },
            other: {
              field_title: "Other",
            },
            other_2: {
              field_title: "Other_2", //two "other"
            },
          },
        },
      },
    },
    rental_income: {
      stepTitle: "Works",
      description: null,
      hasOptions: true,
      canSkip: true,
      tooltip: null,
      options: {
        hmo: {
          optionTitle: "Mortgage",
          description: null,
          spreadsheets: {
            hmo: {
              spreadsheetTitle: "HMO",
              spreadsheet_type: "normal",
              fields: {
                room_1: {
                  field_title: "Room 1",
                },
                room_2: {
                  field_title: "Room 2",
                },
                room_3: {
                  field_title: "Room 3",
                },
                room_4: {
                  field_title: "Room 4",
                },
                room_5: {
                  field_title: "Room 5",
                },
                room_6: {
                  field_title: "Room 6",
                },
                room_7: {
                  field_title: "Room 7",
                },
                room_8: {
                  field_title: "Room 8",
                },
                room_9: {
                  field_title: "Room 9",
                },
                additional_monthly_income: {
                  field_title: "Additional Monthly Income",
                },
                occupancy: {
                  field_title: "Occupancy",
                  meta: {
                    hasLabel: true,
                    label: "%",
                  },
                },
              },
            },
          },
        },
        serviced_acc: {
          optionTitle: "Serviced Acc",
          desctiption: null,
          spreadsheets: {
            serviced_acc: {
              spreadsheetTitle: "Serviced Acc",
              spreadsheet_type: "normal",
              fields: {
                room_1_nightly_rate: {
                  field_title: "Room 1 nightly rate",
                },
                room_2_nightly_rate: {
                  field_title: "Room 2 nightly rate",
                },
                room_3_nightly_rate: {
                  field_title: "Room 3 nightly rate",
                },
                room_4_nightly_rate: {
                  field_title: "Room 4 nightly rate",
                },
                room_5_nightly_rate: {
                  field_title: "Room 5 nightly rate",
                },
                room_6_nightly_rate: {
                  field_title: "Room 6 nightly rate",
                },
                room_7_nightly_rate: {
                  field_title: "Room 7 nightly rate",
                },
                room_8_nightly_rate: {
                  field_title: "Room 8 nightly rate",
                },
                room_9_nightly_rate: {
                  field_title: "Room 9 nightly rate",
                },
                average_stay: {
                  field_title: "Average Stay",
                },
                additional_guest_rate: {
                  field_title: "Additional Guest rate",
                },
                additional_guest: {
                  field_title: "Additional Guest",
                  meta: {
                    hasLabel: true,
                    label: "%",
                  },
                },
                occupancy: {
                  field_title: "Occupancy",
                  meta: {
                    hasLabel: true,
                    label: "%",
                  },
                },
              },
            },
          },
        },
      },
      spreadsheets: null,
    },
    expenses: {
      stepTitle: "Expenses",
      description: null,
      hasOptions: true,
      canSkip: true,
      tooltip: {},
      // 2 headers in excel spreadsheet
      options: {
        hmo: {
          optionTitle: "HMO",
          description: null,
          spreadsheets: {
            monthly_operating_costs: {
              spreadsheetTitle: "HMO",
              spreadsheet_type: "normal",
              fields: {
                letting_agent_fee: {
                  field_title: "Letting agent fee",
                },
                insurance: {
                  field_title: "Insurance",
                },
                gas_and_electric: {
                  field_title: "Gas and electric",
                },
                water: {
                  field_title: "Water",
                },
                council_tax: {
                  field_title: "Council Tax",
                },
                cleaner: {
                  field_title: "Cleaner",
                },
                gardener: {
                  field_title: "Gardener",
                },
                broadband: {
                  field_title: "Broadband",
                },
                service_charge: {
                  field_title: "Service Charge",
                },
                maintenance: {
                  field_title: "Maintenance",
                },
                voids: {
                  field_title: "Voids",
                },
                credit_card_fee: {
                  field_title: "Credit card fee",
                },
                software: {
                  field_title: "Software",
                },
                linen: {
                  field_title: "Linen",
                },
                mortgage_borrowing: {
                  field_title: "Mortgage/Borrowing",
                },
              },
            },
            results: {
              spreadsheetTitle: "Results",
              spreadsheet_type: "normal",
              fields: {},
            },
          },
        },
        serviced_acc: {
          optionTitle: "Serviced Acc",
          description: null,
          spreadsheets: {
            monthly_operating_costs: {
              spreadsheetTitle: "Monthly Operating Costs",
              spreadsheet_type: "normal",
              fields: {
                letting_agent_fee: {
                  field_title: "Letting agent fee",
                },
                insurance: {
                  field_title: "Insurance",
                },
                gas_and_electric: {
                  field_title: "Gas and electric",
                },
                water: {
                  field_title: "Water",
                },
                council_tax: {
                  field_title: "Council Tax",
                },
                gardener: {
                  field_title: "Gardener",
                },
                broadband: {
                  field_title: "Broadband",
                },
                service_charge: {
                  field_title: "Service Charge",
                },
                maintenance: {
                  field_title: "Maintenance",
                },
                voids: {
                  field_title: "Voids",
                },
                booking_fee: {
                  field_title: "Booking.com fee",
                },
                card_fees: {
                  field_title: "Card Fees",
                  meta: {
                    hasLabel: true,
                    label: "%",
                  },
                },
              },
            },
            costs_per_stay: {
              spreadsheetTitle: "Costs per Stay",
              spreadsheet_type: "normal",
              fields: {
                cleaning_per_change_over: {
                  field_title: "Cleaning per change over",
                },
                laundry_per_changeover_pp: {
                  field_title: "Laundry per changeover PP",
                },
                check_in_cost: {
                  field_title: "Check in cost",
                },
              },
            },
            results: {
              spreadsheetTitle: "Result",
              spreadsheet_type: "normal",
              fields: {},
            },
          },
        },
      },
      spreadsheets: null,
    },
    report: {
      stepTitle: "Report",
      description: null,
      hasOptions: false,
      tooltip: null,
      canSkip: true,
      options: null,
      spreadsheets: {},
    },
  },
};
