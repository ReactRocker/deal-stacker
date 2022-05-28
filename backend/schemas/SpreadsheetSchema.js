const { Schema } = require("mongoose");
const FieldSchema = require("./FieldSchema");

const SpreadsheetSchema = new Schema({
  spreadsheet_slug: String,
  spreadsheetTitle: {
    type: String,
    required: [true, "Please provide spreadsheet title"],
  },
  canBeExpanded: {
    type: new Schema({
      flag: {
        type: Boolean,
        default: false,
      },
      helperText: String,
      expandType: {
        type: String,
        enum: ["button", "fields"],
        default: "button",
      },
      fields: {
        type: Schema.Types.Map,
        of: FieldSchema,
      },
    }),
    default: {},
  },
  meta: new Schema({
    tip: String,
    haveTip: {
      type: Boolean,
      default: false,
    },
  }),
  twoD: {
    type: Boolean,
    default: false,
  },
  spreadsheet_type: {
    type: String,
    enum: ["normal", "sith_subs"],
    default: "normal",
  },
  fields: {
    type: Schema.Types.Map,
    of: FieldSchema,
    default: {},
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
        default: {},
      },
    }),
    default: {},
  },
});

module.exports = SpreadsheetSchema;
