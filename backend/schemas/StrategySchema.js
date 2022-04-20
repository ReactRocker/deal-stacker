const { Schema } = require("mongoose");
const StepSchema = require("./StepSchema");

const StrategySchema = new Schema({
  build_id: Number,
  strategy_slug: String,
  build_title: {
    type: String,
    enum: [
      "BTL/BTS/Split/HMO/SA",
      "Rent to rent HMO/SA",
      "Commercial conversion",
    ],
    required: [true, "Please provide title of a strategy build"],
  },
  steps: {
    type: Schema.Types.Map,
    of: StepSchema,
  },
});

module.exports = StrategySchema;
