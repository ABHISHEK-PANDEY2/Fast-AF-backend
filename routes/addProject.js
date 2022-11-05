const express = require("express");
const router = express.Router();
const Developer = require("../model/developer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");

router.post("/newProject/:devId", async (req, res) => {
  console.log(req.body);
  const appName = req.body.appName;
  const appDes = req.body.appDescription;
  const devId = req.params.devId;
  console.log(devId);
  const clientId = Math.random().toString(36).substring(4);
  const clientSecret = Math.random().toString(36).substring(4);
  const update = await Developer.updateOne(
    { _id: devId },
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
  const dev = await Developer.findOne({ _id: devId });
  console.log(dev);
  res.json({
    appName: appName,
    devId: dev._id,
    appDes: appDes,
    appCreds: { clientId: clientId, clientSecret: clientSecret },
  });
});

module.exports = router;
