const express = require("express");
const adminControllers = require("../controllers/controllers");

const router = express.Router();

router.get("/stocks", adminControllers.getAllStocks);
router.post("/watchlist", adminControllers.addStockToWatchList);

module.exports = router;
