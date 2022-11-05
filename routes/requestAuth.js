const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.get("/requestAuth", async (req, res) => {
  //   console.log(req.body);
  const token = req.header("token");
  console.log("request");
  console.log(token);
  let bool = false;
  const [devId, appId, userId] = token.split("-");
  console.log(devId, appId);
  let dev = await Developer.findOne({ _id: devId });
  dev.apps.map((app) => {
    if (app._id.toString() === appId) {
      console.log(app._id.toString());
      bool = true;
      console.log(app);
    }
  });
  if (bool) {
    console.log(token);
    const update = await Developer.updateOne(
      { _id: devId },
      { $push: { "apps$[reqArray]": { requests: token } } },
      { arrayFilters: [{ "reqArray._id": appId }] }
    );
    console.log(update);
  }
});

module.exports = router;
