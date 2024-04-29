import React from "react";
import MoviePage from "./moviePage";

function Homepage() {
  return (
    <div>
      <div class="container-jagged"></div>
      <div class="second-header">
        <p>The best thing that happened to movies search history</p>
      </div>
      <div class="container-jagged"></div>
      <div>
        <MoviePage />
      </div>
    </div>
  );
}

export default Homepage;
