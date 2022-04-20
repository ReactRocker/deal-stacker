const { TestModel } = require("../../models");
const jwt = require("jsonwebtoken");

class TestController {
  create = async (req, res, next) => {
    res.send("create");
  };

  update = async (req, res, next) => {
    res.send("update");
  };
  remove = async (req, res, next) => {
    res.send("remove");
  };
  sync = async (req, res, next) => {
    res.send("sync");
  };
}

module.exports = new TestController();
