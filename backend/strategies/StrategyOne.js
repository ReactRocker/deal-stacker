module.exports = {
  build_id: 1,
  build_title: "BTL/BTS/Split/HMO/SA",
  strategy_slug: "btl-bts-split-hmo-sa",
  steps: {
    purchasing: {
      stepTitle: "Purchasing",
      description: "Sales point about HQ JV",
      hasOptions: false,
      canSkip: false,
      tooltip: {},
      options: null,
      spreadsheets: {
        costs_that_funding_can_include: {
          spreadsheetTitle: "Costs that funding can include",
          spreadsheet_type: "normal",
          fields: {
            purchase_price: {
              field_title: "Purchase price",
            },
            current_value: {
              field_title: "Current Value",
            },
          },
        },
        costs_that_funding_cant_include: {
          spreadsheetTitle: "Costs that funding cant include",
          spreadsheet_type: "normal",
          fields: {
            sdlt: {
              field_title: "SDLT",
            },
            sourcing_agent_fee: {
              field_title: "Sourcing/Agent fee",
            },
            legals_1: {
              field_title: "Legals",
            },
            planning: {
              field_title: "Planning",
            },
            architect: {
              field_title: "Architect",
            },
            surveys: {
              field_title: "Surveys",
            },
            insurance: {
              field_title: "Insurance",
            },
            other: {
              field_title: "Other ",
            },
          },
        },
      },
    },
    works: {
      stepTitle: "Works",
      description: null,
      hasOptions: false,
      canSkip: true,
      tooltip: null,
      options: null,
      spreadsheets: {
        works_costs_that_can_be_included_in_funding: {
          spreadsheetTitle: "Works costs that can be included in funding",
          spreadsheet_type: "normal",
          fields: {
            total_build_cost: {
              field_title: "Total build cost",
            },
            contingency: {
              field_title: "Contingency",
            },
            demolition: {
              field_title: "Demolition",
            },
            warranty: {
              field_title: "Warranty",
            },
            landscaping: {
              field_title: "Landscaping",
            },
            utilities: {
              field_title: "Utilities",
            },
            project_management: {
              field_title: "Project Management",
            },
            site_manger: {
              field_title: "Site Manger",
            },
            qs: {
              field_title: "QS",
            },
          },
        },
        works_costs_that_are_separate_to_funding: {
          spreadsheetTitle: "Works costs that are separate to funding",
          spreadsheet_type: "normal",
          fields: {
            drawdowns: {
              field_title: "Drawdowns",
            },
            monitoring_surveyor_cost_per_survey: {
              field_title: "Monitoring surveyor cost per survey",
            },
            cil_s106: {
              field_title: "CIL/S106",
            },
            legals_2: {
              field_title: "Legals",
            },
            furniture: {
              field_title: "Furniture",
            },
            dressing: {
              field_title: "Dressing",
            },
            advertising: {
              field_title: "Advertising",
            },
          },
        },
      },
    },
    funding: {
      stepTitle: "Funding",
      description:
        "Some of the fields sould be prepopulated but allow the user to change, the user should be able to select one option for the report or one option plus investor funds.",
      hasOptions: true,
      canSkip: true,
      tooltip: {},
      options: {
        mortgage: {
          optionTitle: "Mortgage",
          description: null,
          spreadsheets: {
            mortgage: {
              spreadsheetTitle: "Mortgage",
              spreadsheet_type: "normal",
              fields: {
                purchase_price: {
                  field_title: "Purchase Price",
                },
                cash_injection: {
                  field_title: "Cash Injection",
                },
                // ltv: {
                //   field_title: "LTV",
                // },
                term: {
                  field_title: "Term",
                },
                interest_rate: {
                  field_title: "Interest Rate",
                },
                broker_fee_in: {
                  field_title: "Broker Fee In",
                },
                broker_fee_out: {
                  field_title: "Broker Fee Out",
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
        peer_to_peer: {
          optionTitle: "Peer to peer",
          description: null,
          spreadsheets: {
            peer_to_peer: {
              spreadsheetTitle: "Peer to Peer",
              spreadsheet_type: "normal",
              fields: {
                purchase_price: {
                  field_title: "Purchase Price",
                },
                cash_Injection: {
                  field_title: "Cash Injection",
                },
                // ltv_of_purchase: {
                //   field_title: "LTV of Purchase"
                // },
                works_costs: {
                  field_title: "Works Costs",
                },
                // ltv_of_works: {
                //   field_title: "LTV of Works"
                // },
                term: {
                  field_title: "Term",
                },
                interest_rate: {
                  field_title: "Interest Rate p.a.",
                },
                broker_fee_in: {
                  field_title: "Broker Fee In",
                },
                broker_fee_out: {
                  field_title: "Broker Fee Out",
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
        bridging_loan: {
          optionTitle: "Bridging Loan",
          description: null,
          spreadsheets: {
            bridging_loan: {
              spreadsheetTitle: "Bridging Loan",
              spreadsheet_type: "normal",
              fields: {
                purchase_price: {
                  field_title: "Purchase Price",
                },
                cash_injection: {
                  field_title: "Cash Injection",
                },
                works_costs: {
                  field_title: "Works Costs",
                },
                term: {
                  field_title: "Term",
                },
                interest_rate: {
                  field_title: "Interest Rate",
                },
                broker_fee_in: {
                  field_title: "Broker Fee In",
                },
                broker_fee_out: {
                  field_title: "Broker Fee Out",
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
        investor_funds: {
          optionTitle: "Investor Funds",
          description: null,
          spreadsheets: {
            investor_funds: {
              spreadsheetTitle: "Investor Funds",
              spreadsheet_type: "normal",
              // haven't formulas
              fields: {
                purchase_price: {
                  field_title: "Purchase Price",
                },
                cash_injection: {
                  field_title: "Cash Injection",
                },
                // ltv: {
                //   field_title: "LTV",
                // },
                works_costs: {
                  field_title: "Works Costs",
                },
                // ltv_of_works: {
                //   field_title: "LTV of Works",
                // },
                term: {
                  field_title: "Term",
                },
                interest_rate: {
                  field_title: "Interest Rate",
                },
                broker_fee_in: {
                  field_title: "Broker Fee In",
                },
                broker_fee_out: {
                  field_title: "Broker Fee Out",
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
    gdv: {
      stepTitle: "GDV",
      description: null,
      hasOptions: false,
      canSkip: false,
      tooltip: null,
      options: null,
      spreadsheets: {
        sales_values: {
          canBeExpanded: {
            flag: true,
            helperText: "Add Unit",
            expandType: "button",
          },
          spreadsheetTitle: "Sales Values",
          spreadsheet_type: "normal",
          fields: {
            unit_1: {
              field_title: "Unit 1",
            },
            unit_2: {
              field_title: "Unit 2",
            },
            unit_3: {
              field_title: "Unit 3",
            },
            unit_4: {
              field_title: "Unit 4",
            },
            unit_5: {
              field_title: "Unit 5",
            },
          },
        },
        selling_fees: {
          spreadsheetTitle: "Selling Fees",
          spreadsheet_type: "normal",
          fields: {
            agents_fee: {
              field_title: "Agents Fee",
            },
            solicitor_fee: {
              field_title: "Solicitor Fee",
            },
          },
        },
      },
    },
    rental_income: {
      stepTitle: "Rental Income",
      description: null,
      hasOptions: true,
      tooltip: null,
      canSkip: true,
      options: {
        single_rental: {
          optionTitle: "Single Rental",
          description: null,
          spreadsheets: {
            single_rental: {
              spreadsheetTitle: "Single Rental",
              spreadsheet_type: "normal",
              fields: {
                total_monthly_rental_income: {
                  field_title: "Total Monthly Rental Income",
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
              },
            },
            results: {
              spreadsheetTitle: "Results",
              spreadsheet_type: "normal",
              fields: {},
            },
          },
        },
        hmo: {
          optionTitle: "HMO",
          description: null,
          spreadsheets: {
            hmo: {
              spreadsheetTitle: "HMO",
              spreadsheet_type: "normal",
              fields: {
                total_monthly_rental_income: {
                  field_title: "Total Monthly Rental Income",
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
            serviced_acc: {
              spreadsheetTitle: "Serviced Acc",
              spreadsheet_type: "normal",
              fields: {
                total_monthly_rental_income: {
                  field_title: "Total Monthly Rental Income",
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
              },
            },
            results: {
              spreadsheetTitle: "Results",
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
