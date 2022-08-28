import React, { useState, useEffect } from "react";
import axios from "axios";

function Trending() {
  const [trendingCoins, setTrendingCoins] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      console.log(response.data.coins);
      setTrendingCoins(response.data.coins);
    });
  }, [url]);

  return (
    <section className="rounded-div my-4 py-8 text-primary">
      <h1 className="text-2xl font-bold my-6">Trending Coins</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {trendingCoins.map((coin, index) => {
          return (
            <div
              key={index}
              className="rounded-div flex justify-between   p-4  hover:scale-105 ease-in duration-200"
            >
              <figure className="flex flex-row ">
                <img className="rounded-full" src={coin.item.small} alt="/" />
                <div className="px-4">
                  <p className="font-bold">{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </figure>

              <figure className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579"
                  alt="/"
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </figure>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Trending;
