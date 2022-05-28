const { Schema } = require("mongoose");
const SpreadsheetSchema = require("./SpreadsheetSchema");
const SpreadsheetSchema2D = require("./SpreadsheetSchema2D");
const TooltipSchema = require("./TooltipSchema");
const OptionSchema = require("./OptionSchema");

const StepSchema = new Schema({
  id: Number,
  slug: String,
  active: {
    type: Boolean,
    default: false,
  },
  compleated: {
    type: Boolean,
    default: false,
  },
  skipped: {
    type: Boolean,
    default: false,
  },
  stepTitle: {
    type: String,
    required: [true, "Please, provide step title"],
  },
  description: String,
  hasOptions: {
    type: Boolean,
    default: false,
  },
  canSkip: {
    type: Boolean,
    default: false,
  },
  tooltip: TooltipSchema,
  options: {
    type: Schema.Types.Map,
    of: OptionSchema,
  },
  spreadsheets: {
    type: Schema.Types.Map,
    of: SpreadsheetSchema,
  },
});

module.exports = StepSchema;
