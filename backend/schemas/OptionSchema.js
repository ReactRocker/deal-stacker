const { Schema } = require("mongoose");
const SpreadsheetSchema = require("./SpreadsheetSchema");

const OptionSchema = new Schema({
  optionSlug: String,
  optionTitle: {
    type: String,
    required: [true, "Please provide option title"],
  },
  description: {
    type: String,
  },
  spreadsheets: {
    type: Schema.Types.Map,
    of: SpreadsheetSchema,
  },
});

module.exports = OptionSchema;
