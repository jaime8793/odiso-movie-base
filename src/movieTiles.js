//import React, { useEffect, useState } from "react";
//import axios from "axios";

import React, { useEffect, useState } from "react";
import axios from "axios";

function MovieTile() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzNhODk4YWYwNmVjZDFkMGNkODZmYTZjMzRjOWNkOSIsInN1YiI6IjY2MmI3YjNkNTAxY2YyMDExZmIzOTQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.70-yBmgUn18eoidsXYWZTtk3mK5ujNWzrycqBjlqPt8",
            },
          }
        );
        setConfig(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
    
    //const stringfiedjson = JSON.stringify(config, null, 2);

  return (
    <div>
      {config && (
        <div>
          <h2>Configuration</h2>
          <pre>
            {config.results.map((movie, index) => {
              return (
                <div key={index}>
                  <p>{movie.title}</p>
                  <p>{movie.vote_average}</p>
                  <p>{movie.overview}</p>
                </div>
              );
            })}
          </pre>
        </div>
      )}
    </div>
  );
}

export default MovieTile;

    
    /*return (<>
        {config.results((movie,index) => {
            return (
              <div key={index}>
                <p>{movie.title}</p>
                <p>{movie.vote_average}</p>
                <p>{movie.overview}</p>
              </div>
            );
         })}
    </>);
}

export default MovieTile;*/
