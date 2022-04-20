const mongoose = require("mongoose");

mongoose.Promise = Promise;

mongoose.connect("mongodb://localhost:27017/dealstackerdb");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connections error:"));

module.exports = { db, mongoose };
