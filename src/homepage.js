import React from "react";
import MoviePage from "./moviePage";

function Homepage() {
  return (
    <div>
      <div class="container-jagged">
        <h1>Content Here</h1>
      </div>
      <div class="second-header">
        <p>The best thing that happened to movies search history</p>
      </div>
      <div>
        <MoviePage />
      </div>
    </div>
  );
}

export default Homepage;
