const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.post("/newProject", async (req, res) => {
  console.log(req.body);
  const appName = req.body.appName;
  const appDes = req.body.appDescription;
  const clientId = Math.floor(Math.random() * 100000);
  const clientSecret = Math.floor(Math.random() * 100000);
  const update = await Developer.updateOne(
    { _id: "6365260b5d302960bf8a9e0c" },
    {
      $push: {
        apps: {
          appname: appName,
          appDes: appDes,
          appCreds: {
            clientId: clientId,
            clientSecret: clientSecret,
          },
        },
      },
    }
  );
  console.log(update);
  const dev = await Developer.findOne({ _id: "6365260b5d302960bf8a9e0c" });
  res.json({
    appName: appName,
    devId: dev._id,
    appDes: appDes,
    appCreds: { clientId: clientId, clientSecret: clientSecret },
  });
});

module.exports = router;
