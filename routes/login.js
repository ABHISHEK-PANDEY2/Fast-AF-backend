const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.post("/login", async (req, res) => {
  try {
    const username = req.body.email;
    const password = req.body.password;
    console.log(req.body);
    const dev = await Developer.findOne({ email: username });
    console.log(dev);
    const passCheck = await bcrypt.compare(password, dev.password);
    console.log(passCheck);
    if (passCheck) {
      const token = jwt.sign({ username: username }, "jwtsecret", {
        expiresIn: "10m",
      });
      res.json({
        auth: true,
        token: token,
        devId: dev._id,
      });
    } else {
      res.json({
        auth: false,
        token: null,
      });
    }
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
