import React, { useEffect, useState } from "react";
import axios from "axios";




function Test2() {

    const  [config,setConfig] = useState(null)
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
        <div className="main-first-screen bg-dark">
            {config.results.slice(0, 1).map((movie) => (
            <div className="main-screen-left bg-primary position-relative p-3 ">
                <div className="position-relative">
                <img
                    className="img-backdrop-left rounded "
                    style={{ width: 1041, height: 631 }}
                    src={`https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}`}
                    alt={movie.backdrop_url}
                />
                <img
                    className="img-poster-left rounded"
                    style={{ height: 409, width: 281 , position: "absolute", top: "358px", left: "163px", borderRadius: "9.47166px"}}
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt={movie.title}
                />
                </div>
                <div className="">
                <i className="play-trailer-left" alt="" />
                <p className="text-trailer-left">Hey {movie.title}</p>
                    </div>
                </div>
            ))}
                </div>

            )}
        </>
    )
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

}*/

