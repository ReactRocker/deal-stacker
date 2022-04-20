const { Schema } = require("mongoose");
const FieldSchema = require("./FieldSchema");

const SpreadsheetSchema2D = new Schema({
  spreadsheet_title: {
    type: String,
    required: [true, "Please provide spreadsheet title"],
  },
  canBeExpanded: {
    type: Boolean,
    default: false,
  },
  subSpreadsheets: {
    type: Schema.Types.Map,
    of: new Schema({
      title: {
        type: String,
        required: [true, "Please, provide title to the sub-spreadsheet"],
      },
      fields: {
        type: Schema.Types.Map,
        of: FieldSchema,
      },
    }),
  },
});

module.exports = SpreadsheetSchema2D;
