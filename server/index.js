const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const todosRoute = require("./routes/todos");
const path = require("path");

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use("/apis/todos", todosRoute);
// app.use(function (req, res, next) {
//   res.setHeader("Access-Control-Allow-Origin", "*"); //http://localhost:3000,
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT,PATCH, DELETE"
//   );
//   res.setHeader("Access-Control-Allow-Headers", "*");
//   res.setHeader("Access-Control-Allow-Credentials", "true");
//   next();
// });

mongoose
  .connect("mongodb://localhost:27017/tododb", { useNewUrlParser: true })
  .then(
    app.listen(7000, (err) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Server successfully started on port 7000");
      }
    })
  )
  .catch((err) => console.log(err));
