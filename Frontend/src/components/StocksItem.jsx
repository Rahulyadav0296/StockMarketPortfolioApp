import React from "react";

function StocksItem({ item, onClick }) {
  return (
    <>
      <p className="stock-company">{item.company}</p>
      <p className="stock-description">{item.description}</p>
      <p className="stock-price">
        Initial Price: <strong>${item.initial_price}</strong>
      </p>
      <p className="stock-price">
        Price in 2002: <strong>${item.price_2002}</strong>
      </p>
      <p className="stock-price">
        Price in 2007: <strong>${item.price_2007}</strong>
      </p>
      <p className="stock-symbol">Symbol: {item.symbol}</p>
    </>
  );
}

export default StocksItem;
