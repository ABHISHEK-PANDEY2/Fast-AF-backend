const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.get("/appList/:devId", async (req, res) => {
  //   console.log(req.body);
  const t = req.header("token");
  console.log(t);
  const devId = req.params.devId;
  const dev = await Developer.findOne({ _id: devId });
  //   console.log(dev.apps);
  res.json({
    apps: dev.apps,
  });
});

module.exports = router;
