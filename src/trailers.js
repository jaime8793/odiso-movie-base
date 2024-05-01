import FetchDatas from "./fetchDatas";
import React, { useEffect, useState } from "react";
import axios from "axios";

function Trailers() {
  const [config, setConfig] = useState(null);
  //const [genre, setGenre] = useState('movie')
  //const [category, setCategory] = useState('popular')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/week",

          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzNhODk4YWYwNmVjZDFkMGNkODZmYTZjMzRjOWNkOSIsInN1YiI6IjY2MmI3YjNkNTAxY2YyMDExZmIzOTQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.70-yBmgUn18eoidsXYWZTtk3mK5ujNWzrycqBjlqPt8",
            },
            params: { language: "en-US", page: "1" },
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
    <>
      {" "}
      <div>
        {config && (
          <div class="movie-card-tile">
            <div className="card-container d-flex flex-wrap justify-content-between">
              {config.results.slice(0,3).map((movie, index) => (
                <div
                  key={index}
                  className="card mt-2 mb-3 mr-2"
                  style={{ width: "18rem" }}
                >
                  <img
                    className="card-img-top "
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
      <div class="trailer-page">
        <div class="img-holder-trailers">
          <div class="img-poster-trailer"> </div>
          <button class="play-trailer"> Play </button>
          <p>Inside Out 2 Make us Feel Every Emotion</p>
          <p>Watch the new "Inside Out" Trailer</p>
        </div>
        <div>
          <div>
            <p>Featured Videos</p>
            <button>Browse Trailers </button>
          </div>
          <div>
            <div class="img-small-holder"></div>
            <div>
              <p>Welcome to the apocalpyse!</p>
              <p>Watch the new "Fallout" Trailer</p>
            </div>
            <div>
              <p>3:18</p>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Trailers;
