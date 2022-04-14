const express = require("express");
module.export = app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const dotenv = require("dotenv").config();
const ConnectDB = require("./config/ConnectDB");

//middleware
app.use(cors());
app.use(express.json());

// routes
const authRouter = require("./router/authRoute");
const courseRoute = require("./router/courseRoute");
const carRoute = require("./router/carRoute");
const findBasisBrandRoute = require("./router/findBasisBrandRoute");
const findDataBrandRoute = require("./router/findDataBrandRoute");

// use routes
app.use("/api/auth", authRouter);
app.use("/api/course", courseRoute);
app.use("/api/find", carRoute);
app.use("/api/find", findBasisBrandRoute);
app.use("/api/find", findDataBrandRoute);

app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
