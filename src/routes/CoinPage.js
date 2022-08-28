import React, { useState, useEffect } from "react";
import axios from "axios";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { FaTwitter, FaFacebook, FaReddit, FaGithub } from "react-icons/fa";
import DOMPurify from "dompurify";

function CoinPage() {
  const [coin, setCoin] = useState({});
  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&sparkline=true";

  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);

  return (
    <div className="rounded-div my-12 p-4">
      <header className="flex flex-row pt-12">
        <img src={coin.image?.large} className="w-20 mr-8" />
        <div>
          <h1 className="text-3xl font-bold ">{coin?.name} price</h1>
          <p>({coin.symbol?.toUpperCase()} / USD)</p>
        </div>
      </header>
      <main className="flex flex-col md:flex-row">
        <section className="flex flex-col w-full">
          <div className="flex flex-row justify-between">
            {coin.market_data?.current_price ? (
              <p>{coin.market_data?.current_price.usd.toLocaleString()}</p>
            ) : null}

            <p>7 day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine />
            </Sparklines>
          </div>
          <div className="flex">
            <div>
              <p>Market Cap</p>

              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.market_cap.usd.toLocaleString()}</p>
              ) : null}
            </div>

            <div>
              <p>Volume (24h)</p>
              {coin.market_data?.market_cap ? (
                <p>${coin.market_data.total_volume.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>

          <div className="flex">
            <div>
              <p>24h High</p>

              {coin.market_data?.high_24h ? (
                <p>${coin.market_data.high_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>

            <div>
              <p>24h Low</p>
              {coin.market_data?.low_24h ? (
                <p>${coin.market_data.low_24h.usd.toLocaleString()}</p>
              ) : null}
            </div>
          </div>
        </section>
        <section className="w-full">
          <h3>Market Stats</h3>

          <div className="grid grid-rows-3">
            <div className="flex justify-between">
              <div>
                <p>Market Rank</p>
                {coin.market_cap_rank}
              </div>
              <div>
                <p>Hashing Algorithm</p>
                {coin.hashing_algorithm ? (
                  <p>{coin.hashing_algorithm}</p>
                ) : null}
              </div>
              <div>
                <p>Trust Score</p>
                {coin.tickers ? <p>{coin.liquidity_score.toFixed(2)}</p> : null}
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p>Price Change(24h)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_24h.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p>Price Change(7d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_7d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p>Price Change(14d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_14d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <p>Price Change(30d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_30d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p>Price Change(60d)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_60d.toFixed(2)}%
                  </p>
                ) : null}
              </div>
              <div>
                <p>Price Change(1y)</p>
                {coin.market_data ? (
                  <p>
                    {coin.market_data.price_change_percentage_1y.toFixed(2)}%
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <div className="flex justify-between">
            <FaTwitter />
            <FaFacebook />
            <FaReddit />
            <FaGithub />
          </div>
        </section>
      </main>
      <footer>
        <h4 className="text-2xl font-bold py-4">About {coin.name}</h4>
        <p
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              coin.description ? coin.description.en : ""
            ),
          }}
        ></p>
      </footer>
    </div>
  );
}

export default CoinPage;
