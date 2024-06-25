import React from "react";
import "./WatchList.css";
function WatchList({ watchList }) {
  return (
    <div className="watchlist">
      <h2>My WatchList</h2>
      <ul>
        {watchList.map((stock) => (
          <li key={stock.id}>
            {stock.company} ({stock.symbol} -{" "}
            <span>${stock.initial_price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WatchList;
