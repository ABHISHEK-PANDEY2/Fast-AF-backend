const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.post("/signup", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;
  console.log(req.body);
  bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
      console.log(err);
    } else {
      Developer.create({
        email: email,
        name: name,
        password: hash,
      });
    }
  });
  res.send();
});

module.exports = router;
