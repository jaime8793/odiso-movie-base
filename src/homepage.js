import React from "react";
import Popular from "./Movie-Genres/Popular";

function Homepage() {
  return (
    <div>
      <div class="container-jagged"></div>
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
