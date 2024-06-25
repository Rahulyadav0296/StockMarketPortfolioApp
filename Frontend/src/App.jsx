// src/App.js
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Stocks from "./components/Stocks";
import WatchList from "./components/WatchList";

function App() {
  const [stocks, setStocks] = useState([]);
  const [error, setError] = useState(null);
  const [watchList, setWatchList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/stocks")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setStocks(data);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} errorElement={<errorElement />}>
          <Route
            path="/stocks"
            element={
              <Stocks
                error={error}
                stocks={stocks}
                setWatchList={setWatchList}
              />
            }
          />
          <Route
            path="/watchlist"
            element={<WatchList watchList={watchList} />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
