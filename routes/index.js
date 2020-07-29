let express = require("express");
let router = express.Router();
let _ = require("lodash");

const s = require("../services/user");

router.get("/", function (req, res) {
  console.log(s.generateNewUser());
  res.send("Hello world");
});

module.exports = router;
