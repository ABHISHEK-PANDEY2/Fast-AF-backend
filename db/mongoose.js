require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://abhishek:Opabhishek%40123@cluster0.bx3mckm.mongodb.net/fast-af`,
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("Mongoose Connection");
  }
);
