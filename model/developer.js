const mongoose = require("mongoose");
const appSchema = new mongoose.Schema({
  appname: {
    type: String,
  },
  appDes: String,
  appCreds: {
    clientId: String,
    clientSecret: String,
  },
  users: [],
  requests: [],
});
const devSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
  },

  apps: [
    {
      appname: {
        type: String,
      },
      appDes: String,
      appCreds: {
        clientId: String,
        clientSecret: String,
      },
      users: [],
      requests: [],
    },
  ],
});

const Developer = mongoose.model("Developer", devSchema);
module.exports = Developer;
