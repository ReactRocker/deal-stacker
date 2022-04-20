const { Schema } = require("mongoose");

const TooltipSchema = new Schema({
  text: String,
  enable: {
    type: Boolean,
    default: false,
  },
});

module.exports = TooltipSchema;
