import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

function CoinItem(props) {
  const [savedCoin, setSavedCoin] = useState(false);
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`);

  const saveCoinHandler = async () => {
    if (user?.email) {
      setSavedCoin(true);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: props.coin.id,
          name: props.coin.name,
          image: props.coin.image,
          rank: props.coin.market_cap_rank,
          symbol: props.coin.symbol,
        }),
      });
    } else {
      alert("Please sign in to save coin to your watch list!");
    }
  };

  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td onClick={saveCoinHandler}>
        {savedCoin ? <AiFillStar /> : <AiOutlineStar />}
      </td>
      <td>{props.coin.market_cap_rank}</td>
      <td>
        <Link to={`/coin/${props.coin.id}`}>
          <div className="flex items-center">
            <img
              className="w-7 mr-2 rounded-full"
              src={props.coin.image}
              alt={props.coin.id}
            />
            <p className="hidden sm:table-cell">{props.coin.name}</p>
          </div>
        </Link>
      </td>
      <td>{props.coin.symbol.toUpperCase()}</td>
      <td>${props.coin.current_price.toLocaleString()}</td>
      <td>
        {props.coin.price_change_percentage_24h > 0 ? (
          <p className="text-green-600">
            {props.coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        ) : (
          <p className="text-red-600">
            {props.coin.price_change_percentage_24h.toFixed(2)}%
          </p>
        )}
      </td>
      <td className="w-[180px] hidden md:table-cell">
        ${props.coin.total_volume.toLocaleString()}
      </td>
      <td className="w-[180px] hidden sm:table-cell">
        ${props.coin.market_cap.toLocaleString()}
      </td>

      <td>
        <Sparklines data={props.coin.sparkline_in_7d.price}>
          <SparklinesLine color="teal" />
        </Sparklines>
      </td>
    </tr>
  );
}

export default CoinItem;
