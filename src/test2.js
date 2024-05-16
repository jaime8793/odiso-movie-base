import React, { useEffect, useState } from "react";
import axios from "axios";
import { ColorExtractor } from "react-color-extractor";




function Test2() {
    
    function getColors() {
      const [imgColors, setImgColors] = useState();

      return (
        <div>
          <ColorExtractor getColors={(colors) => setImgColors(colors)}>
            <img src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`} />
          </ColorExtractor>
        </div>
      );
    }
    getColors()

    const [config, setConfig] = useState(null);
     const movie_title = "Fallout";
     const movie = {};
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
          <div className="main-first-screen d-inline-flex">
            {config.results.slice(0, 1).map((movie) => (
              <div
                className="main-screen-left bg-primary position-relative p-5 "
                style={{ width: 1150, height: 800 }}
                >
                    
                <img
                  className="img-backdrop-left rounded "
                  style={{ width: 1041, height: 631 }}
                  src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                  alt={movie.backdrop_url}
                />
                <img
                  className="img-poster-left rounded  z-3"
                  style={{
                    height: 409,
                    width: 281,
                    position: "absolute",
                    top: "358px",
                    left: "163px",
                    borderRadius: "9.47166px",
                  }}
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt={movie.title}
                />

                <div
                  className="position-absolute text-white"
                  style={{ left: "574px", top: "600px" }}
                >
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



    
export default Test2;

/*
.img-backdrop2-left{
  

position: absolute;
left: 8.16%;
right: 31.6%;
top: 2.08%;
bottom: 32.33%;


}
 
.img-poster2-left{
  


position: absolute;
width: 281px;
height: 409px;
left: 163px;
top: 358px;
border-radius: 9.47166px;

}
.main-first2-screen{
  /* Rectangle 8 

position: absolute;
left: 0%;
right: 0%;
top: 0%;
bottom: 0%;

background: rgba(158, 139, 248, 0.3);
filter: blur(250px);

/* Frame 126 */

/* Auto layout
display: flex;
flex-direction: row;
align-items: center;
padding: 0px;
gap: 23px;

position: absolute;
width: 584px;
left: 474px;
top: 64.86%;
bottom: 20.27%;


}*/

