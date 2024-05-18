import React from "react";
import Popular from "./Movie-Genres/Popular";
import Trailers from "./trailers";
import Test from "./test";
import Test2 from "./test2";
import Trending from "./Movie-Genres/trending";

function Homepage() {
  return (
    <div>
      <Test2 />
      <Trending />
      <div class="second-header text-center">
        <p>The best thing that happened to movies search history</p>
      </div>
      <div>
        <Popular />
      </div>
    </div>
  );
}

export default Homepage;
