// express is a framework which provides lots of feature including
// middleware, authentication and and also nodejs writing all the logics insides it
const express = require("express");

// cor (Cross origin resource sharing) requires for connecting the server and client when running in different ports
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const errorControllers = require("./controllers/error");
const stockRouter = require("./routes/routes");

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ encoded: false }));

mongoose
  .connect("mongodb://localhost:27017/Stocks")
  .then((result) => {
    app.listen(3000, () => {
      console.log("Database Connected!");
    });
  })
  .catch((err) => {
    console.error(err);
  });

app.use("/api", stockRouter);
