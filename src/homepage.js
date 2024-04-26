import React from "react";
import MoviePage from "./moviePage";

function Homepage() {
  return (
    <div>
      <div class="sliding comments text-align">
        <p>The best thing that happened to movies search history</p>
      </div>
          <div>
              <MoviePage/>
      </div>
    </div>
  );
}

export default Homepage;
