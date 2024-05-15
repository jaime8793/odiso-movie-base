import React, { useEffect, useState } from "react";
import axios from "axios";

function Test() {
  const movie_title = "Fallout";
  const movie = {};
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
      {config && (
        <div className="main-first-screen">
          {config.results.slice(0, 1).map((movie) => (
            <div className="main-screen-left p-3 m-3 bg-dark position-relative">
              <div className="position-relative">
                <img
                  className="img-backdrop-left rounded  position-reltive"
                  style={{ width: 1041, height: 631 }}
                  src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                  alt={movie.backdrop_url}
                />
                <img
                  className="img-poster-left rounded postiton-absolute top-0 start-0"
                  style={{ height: 409, width: 281 }}
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
              </div>
              <div>
                <i className="play-trailer-left" alt="" />
                <p className="text-trailer-left">Hey {movie.title}</p>
              </div>
            </div>
          ))}
          <div className="main-screen-right flex">
            <div className="top-screen-right flex">
              <p className="top-screen-right-text">Featured Videos</p>
              <button className="top-screen-right-button"></button>
            </div>
            <div className="bottom-screen-right flex">
              <div className="bottom-screen-cards flex">
                <img
                  className="img-poster-right"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <p className="text-movie-bottom">{`Watch the new ${movie_title} trailer`}</p>

                  <div>
                    <p className="trailer-duration">3:18</p>
                    <i className="play-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-screen-right flex">
              <div className="bottom-screen-cards flex">
                <img
                  className="img-poster-right"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <p className="text-movie-bottom">{`Watch the new ${movie_title} trailer`}</p>

                  <div>
                    <p className="trailer-duration">3:18</p>
                    <i className="play-icon"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-screen-right flex">
              <div className="bottom-screen-cards flex">
                <img
                  className="img-poster-right"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                />
                <div>
                  <p className="text-movie-bottom">{`Watch the new ${movie_title} trailer`}</p>

                  <div>
                    <p className="trailer-duration">3:28</p>
                    <i className="play-icon"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Test;

 