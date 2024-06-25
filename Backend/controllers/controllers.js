const Stocks = require("../models/stocks");

// get all stocks
const getAllStocks = async (req, res) => {
  try {
    const stocks = await Stocks.find();
    console.log(stocks);
    res.json(stocks);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// add a new request to the watchlist
const addStockToWatchList = async (req, res) => {
  try {
    const {
      company,
      description,
      initial_price,
      price_2002,
      price_2007,
      symbol,
    } = req.body;

    const stock = new Stocks({
      company,
      description,
      initial_price,
      price_2002,
      price_2007,
      symbol,
    });

    await stock.save();
    res.status(200).json({ message: "Stock added to watchlist successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAllStocks,
  addStockToWatchList,
};
