const { Schema } = require("mongoose");
const SpreadsheetSchema = require("./SpreadsheetSchema");

const OptionSchema = new Schema({
  option_title: {
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
