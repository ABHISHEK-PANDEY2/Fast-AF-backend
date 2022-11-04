require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const Developer = require("./model/developer");
const singupRouter = require("./routes/signup");
const loginRouter = require("./routes/login");
const serverInitRouter = require("./routes/scriptinit");
const newprojecteRouter = require("./routes/addProject");
require("./db/mongoose");

const app = express();
app.use(
  cors({
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
  })
);
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(singupRouter);
app.use(loginRouter);
app.use(serverInitRouter);
app.use(newprojecteRouter);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("listening on port " + port);
});
