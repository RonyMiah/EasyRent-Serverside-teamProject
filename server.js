const express = require("express");
module.export = app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const fileUpload = require("express-fileupload");
require("dotenv").config();
const ConnectDB = require("./config/ConnectDB");

//middleware
app.use(cors());
app.use(express.json());
app.use(fileUpload());
app.use(express.urlencoded({ extended: true }));

// routes
const mainService = require("./router/mainServiceRoute");
const findcars = require("./router/searchedCarRoute");
const searchingdRoute = require("./router/searchedCarRoute");
const singleCar = require("./router/singleCarRoute");
const userDetail = require("./router/userDetailsRoute");
const addReviewRoute = require("./router/addReviewRouter");
const authRouter = require("./router/authRoute");
const userRoute = require("./router/userRouter");
const carRoute = require("./router/carRoute");
const newServiceRouter = require("./router/newServiceRouter");
const rentedRoute = require("./router/rentedcarRoute");
const findBasisBrandRoute = require("./router/findBasisBrandRoute");
const findDataBrandRoute = require("./router/findDataBrandRoute");
const findCarReviewRoute = require("./router/findCarReviewRoute");
const findSingleCarRentRoute = require("./router/findSingleCarRentRoute");
const sliderSingleBrandCarRoute = require("./router/sliderSingleBrandCarRoute");
const rentSinCarRouter = require("./router/rentSinCarRouter");
const allCourseRouter = require("./router/allCourseRouter");
const singleCourse = require("./router/singleCourseRoute");
const chatRoute = require("./router/chatRoute");
const newOrderRoute = require("./router/createOrder");
const userOrders = require("./router/getUserOrders");
const allOrders = require("./router/getAllOrders");
const serviceRoute = require("./router/serviceroute");
const blogRoute = require("./router/blogRoute");
const driverRoute = require("./router/driverRoute");

// use routes
app.use("/api", mainService);
app.use("/api", searchingdRoute);
app.use("/api", singleCar);
app.use("/api", userDetail);
app.use("/api", newServiceRouter);
app.use("/api", rentedRoute);
app.use("/api", blogRoute);
app.use("/api", addReviewRoute);
app.use("/api/auth", authRouter);
app.use("/api/users", userRoute);
app.use("/api/find", carRoute);
app.use("/api/find", findBasisBrandRoute);
app.use("/api/find", findDataBrandRoute);
app.use("/api", findcars);
app.use("/api", newOrderRoute);
app.use("/api", userOrders);
app.use("/api", allOrders);
app.use("/api/find", findCarReviewRoute);
app.use("/api/find", findSingleCarRentRoute);
app.use("/api/find", sliderSingleBrandCarRoute);
app.use("/api/find", rentSinCarRouter);
app.use("/api/find", allCourseRouter);
app.use("/api/find", singleCourse);
app.use("/auth", chatRoute);
app.use("/api", serviceRoute);
app.use("/api", driverRoute);

app.get("/", (req, res) => {
  res.send("hello database");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
