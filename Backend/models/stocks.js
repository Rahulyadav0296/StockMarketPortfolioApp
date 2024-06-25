const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stockSchema = new Schema({
  company: String,
  description: String,
  initial_price: Number,
  price_2002: Number,
  price_2007: Number,
  symbol: String,
});

// Create a Model for user database means hows a database will look
module.exports = mongoose.model("Users", stockSchema);
