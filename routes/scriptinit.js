const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.post("/init", async (req, res) => {
  //   console.log(req.body);
  const userId = req.body.userID;
  const devId = req.body.devID;
  const clientID = req.body.clientID;
  const clientSecret = req.body.clientSecret;
  let appId = null;
  //   console.log(devId);
  const dev = await Developer.findOne({ _id: devId });
  //   console.log(dev.apps);
  dev.apps.map((app) => {
    if (app.appCreds.clientId === clientID) {
      appId = app._id;
      console.log("app:", app._id);
    }
  });
  console.log("appId", appId);
  res.json({
    appId: appId,
  });
});

module.exports = router;
