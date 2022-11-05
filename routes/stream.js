const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
var axios = require("axios");

router.get("/authTest", async (req, res) => {
  //   console.log(req.body);
  const token = req.header("token");
  console.log(token);
  const [devId, appId, userId] = token.split("-");
  var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  var config = {
    method: "get",
    url: "http://localhost:8000/dev",
  };

  const rawres = await axios(config);
  const getCircularReplacer = () => {
    const seen = new WeakSet();
    return (key, value) => {
      if (typeof value === "object" && value !== null) {
        if (seen.has(value)) {
          return;
        }
        seen.add(value);
      }
      return value;
    };
  };
  const response = JSON.stringify(rawres, getCircularReplacer());
  const resp = JSON.parse(response);
  console.log(resp.data.apps);
  //   let dev = await Developer.findOne({ _id: devId });
  if (
    token ===
    "6365c8550dc29c88d19b88c4-6365db7d82516e33afaf1a3c-abhishekpandey3188@gmail.com"
  ) {
    res.json({
      auth: true,
    });
  }
});

module.exports = router;
