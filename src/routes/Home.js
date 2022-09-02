import React from "react";
import CoinSearch from "../components/CoinSearch";

import Trending from "../components/Trending";

function Home(props) {
  return (
    <>
      <CoinSearch coins={props.coins} />
      <Trending />
    </>
  );
}

export default Home;
