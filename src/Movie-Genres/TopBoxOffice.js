import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function TopBoxOffice() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/week",
          {
            headers: {
              accept: "application/json",
              // Swapped back to the environment variable!
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`,
            },
            params: { language: "en-US", page: "1" },
          }
        );
        // Slicing the array to only show the Top 10 for the Box Office chart
        setMovies(response.data.results.slice(0, 10));
      } catch (error) {
        console.error("Error fetching box office data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-neutral-900 py-16 px-4 sm:px-8">
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-10 text-3xl font-bold uppercase tracking-widest text-white">
          Top Box Office
        </h2>
        
        <div className="flex flex-col gap-5">
          {movies.length > 0 ? (
            movies.map((movie, index) => (
              <BoxOfficeRow key={movie.id} movie={movie} rank={index + 1} />
            ))
          ) : (
            <div className="text-center text-neutral-400 animate-pulse">
              Loading charts...
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const BoxOfficeRow = ({ movie, rank }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group flex cursor-pointer items-center gap-6 rounded-xl bg-neutral-800 p-4 shadow-lg transition-colors hover:bg-neutral-700"
    >
      {/* Big Number Rank */}
      <div className="flex h-16 w-12 shrink-0 items-center justify-center rounded-lg bg-black/40 text-3xl font-black text-neutral-600 transition-colors group-hover:text-white">
        {rank}
      </div>

      {/* Movie Poster Thumbnail */}
      <div 
        className="h-28 w-20 shrink-0 rounded-md bg-cover bg-center shadow-md"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w200${movie.poster_path})`,
        }}
      />

      {/* Movie Details */}
      <div className="flex flex-col justify-center">
        <h3 className="text-xl font-bold text-white line-clamp-1">
          {movie.title || movie.name}
        </h3>
        
        <div className="mt-2 flex items-center gap-3 text-sm font-medium text-neutral-400">
          <span className="flex items-center gap-1 rounded bg-black/30 px-2 py-1">
            ⭐ {movie.vote_average?.toFixed(1)}
          </span>
          <span>•</span>
          <span className="uppercase tracking-wide">{movie.media_type}</span>
          <span>•</span>
          <span>
            {/* Some TMDB items use release_date, TV shows use first_air_date */}
            {(movie.release_date || movie.first_air_date)?.substring(0, 4)}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default TopBoxOffice;