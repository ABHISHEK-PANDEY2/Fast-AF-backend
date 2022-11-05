const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const axios = require("axios");

router.get("/mobileAuthTest/:token", async (req, res) => {
  //   console.log(req.body);
  const token = req.params.token;
  console.log(token);
  const [devId, appId, userId] = token.split("-");
  axios("http://localhost:8000/dev", {
    method: "POST",
    Headers: {
      "Content-Type": "plain/text",
    },
    data: {
      id: 2,
    },
  });
  //   let dev = await Developer.findOne({ _id: devId });
  //   dev.apps.map((app) => {
  //     if (app._id === appId) {
  //       if (app.requests.includes(token)) {
  //         Developer.updateOne({ $push: { apps: { users: token } } });
  //       }
  //     }
  //   });
});

module.exports = router;
