const express = require("express");
const { DoSomething } = require("../controllers/whatever/DoSomething");

const router = express.Router();

router.post("/add", function (req, res) {
  DoSomething(req, res);
});
router.put("/update", function (req, res) {
  DoSomething(req, res);
});
router.get("/get", function (req, res) {
  DoSomething(req, res);
});
router.delete("/delete", function (req, res) {
  DoSomething(req, res);
});

module.exports = router;
