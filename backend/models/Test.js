const { Schema, model } = require("mongoose");

const TestSchema = new Schema({
  name: String,
  field1: Number,
  field2: Number,
});

const TestModel = model("Tests", TestSchema)

module.exports = TestModel;
