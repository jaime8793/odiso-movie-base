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

  return (
    <div>
      {config && (
        <div class="movie-card-tile">
          <div className="card-container d-flex flex-wrap justify-content-between">
            {config.results.map((movie, index) => (
              <div key={index} className="card" style={{ width: "18rem" }}>
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{movie.title}</h5>
                  <p>{movie.vote_average}</p>
                  <p className="card-text">{movie.overview}</p>
                  <div className="card-links">
                    <a href="#" className="card-link">
                      Card link
                    </a>
                    <a href="#" className="card-link">
                      Another link
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MovieTile;
