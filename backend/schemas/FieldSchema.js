const { model, Schema } = require("mongoose");
const { fieldValueTypeCheck } = require("../utils");

// TODO: Make general-purpose field Schema
const FieldSchema = new Schema({
  slug: String,
  field_title: {
    type: String,
    required: [true, "Please provide field name"],
  },
  meta: new Schema({
    valueType: { type: String, default: "number" },
    hasLabel: { type: Boolean, default: false },
    label: { type: String },
    hasTooltip: { type: Boolean, default: false },
    toolTip: { type: String },
  }),
  value: {
    type: Number,
  },
});

module.exports = FieldSchema;
