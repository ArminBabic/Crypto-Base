import React from "react";
import { AiOutlineStar } from "react-icons/ai";
import { Sparklines, SparklinesLine } from "react-sparklines";

function CoinItem(props) {
  return (
    <tr className="h-[80px] border-b overflow-hidden">
      <td>
        <AiOutlineStar />
      </td>
      <td>{props.coin.market_cap_rank}</td>
      <td>
        <div className="flex items-center">
          <img
            className="w-7 mr-2 rounded-full"
            src={props.coin.image}
            alt={props.coin.id}
          />
          <p className="hidden sm:table-cell">{props.coin.name}</p>
        </div>
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
          <SparklinesLine color="lightBlue" />
        </Sparklines>
      </td>
    </tr>
  );
}

export default CoinItem;
