const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.post("/init", async (req, res) => {
  console.log(req.body);
  const userId = req.body.userId;
  const devId = req.body.devId;
  const clientID = req.body.clientID;
  const clientSecret = req.body.clientSecret;
  let appId = null;
  const dev = await Developer.findOne({ _id: devId });
  dev.apps.map((app) => {
    if (app.appCreds.clientID === clientID) {
      appId = app.appId;
    }
  });
  res.json({
    appId: appId,
  });
});

module.exports = router;
