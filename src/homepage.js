import React from "react";
import moviePage from "./moviePage";

function Homepage() {
  return (
    <div>
      <div class="sliding comments text-align">
        <p>The best thing that happened to movies search history</p>
      </div>
          <div>
              <moviePage/>
      </div>
    </div>
  );
}

export default Homepage;
