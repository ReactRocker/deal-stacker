const { Router } = require("express");
const {
  CalcController: {
    create,
    update,
    remove,
    fetch,
    pickStrategy,
    getStrategies,
  },
} = require("../controllers");
const { documentCheck, dataCheck, tokenCheck } = require("../middleware");

const router = new Router();

router.get("/get-strategies", getStrategies);
router.post("/pick", pickStrategy);
router.get("/fetch", fetch);
router.post("/create", create);
router.put("/update", tokenCheck, documentCheck, dataCheck, update);
router.delete("/remove", tokenCheck, remove);

module.exports = router;
