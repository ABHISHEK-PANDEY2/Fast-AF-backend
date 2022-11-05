const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.get("/authTest", async (req, res) => {
  //   console.log(req.body);
  const token = req.header("token");
  console.log(token);
  const [devId, appId, userId] = token.split("-");
  let dev = await Developer.findOne({ _id: devId });
  dev.apps.map((app) => {
    if (app._id === appId) {
      app.users.includes(userId);
      res.json({
        auth: true,
      });
    } else {
      res.json({
        auth: false,
      });
    }
  });
});

module.exports = router;
