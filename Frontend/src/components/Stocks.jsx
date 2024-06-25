import React, { Suspense, lazy } from "react";
import "./Stocks.css";

// apply lazy laoding for load only important details on demand
const StocksItem = lazy(() => import("./StocksItem"));

function Stocks(props) {
  const addToWatchList = (stock) => {
    fetch("http://localhost:3000/api/watchlist", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(stock),
    })
      .then((res) => res.json()) // Parse JSON response
      .then((data) => {
        // Check for specific success criteria
        if (data.message === "Stock added to watchlist successfully") {
          console.log(stock);
          props.setWatchList((prevWatchList) => [...prevWatchList, stock]);
        } else {
          console.error("Failed to add to watchlist:", data.message);
        }
      })
      .catch((error) => console.error("Error adding to watchlist:", error));
  };
  return (
    <>
      <div className="stocks-container">
        {props.error ? (
          <p>Error: {props.error}</p>
        ) : (
          <ul className="stocks-list">
            <Suspense fallback={<div>Loading stocks...</div>}>
              {props.stocks.map((item) => (
                <li key={item.id} className="stock-item">
                  <StocksItem item={item} />
                  <button
                    onClick={() => {
                      addToWatchList(item);
                    }}
                  >
                    Add To WatchList
                  </button>
                </li>
              ))}
            </Suspense>
          </ul>
        )}
      </div>
    </>
  );
}

export default Stocks;
