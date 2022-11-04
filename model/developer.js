const mongoose = require("mongoose");
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
});

const Developer = mongoose.model("Developer", devSchema);
module.exports = Developer;
