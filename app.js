const express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const cors = require("cors"); // add at the top
var indexRouter = require("./routes/index");


const app = express();

app.use(cors()); // add after 'app' is created
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// We will use client
// app.use(express.static(path.join(__dirname, "public")));

app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message, code: err.code });
  });

  
app.use("/api", indexRouter);

module.exports = app;
