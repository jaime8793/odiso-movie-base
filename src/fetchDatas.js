import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function FetchDatas({ category, genre, day }) {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fallbacks added just in case a prop is undefined
        const urlPath = `${category || ""}${genre || ""}${day || ""}`;
        
        const response = await axios.get(
          `https://api.themoviedb.org/3/${urlPath}`,
          {
            headers: {
              accept: "application/json",
              Authorization: `Bearer ${process.env.REACT_APP_TMDB_TOKEN}`, 
            },
            params: { language: "en-US", page: "1" },
          }
        );
        setConfig(response.data);
      } catch (error) {
        console.error("Failed to fetch dynamically:", error);
      }
    };

    fetchData();
  }, [category, genre, day]); // React will re-run the fetch if any of these props change!

  return (
    <div className="bg-neutral-900 p-8 min-h-screen">
      {config ? (
        /* Replaced Bootstrap with a responsive Tailwind Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {config.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="w-full text-center text-neutral-400 animate-pulse pt-20">
          Loading grid...
        </div>
      )}
    </div>
  );
}

// Extracted the Card to keep the code clean and manageable 
const MovieCard = ({ movie }) => {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
      className="flex flex-col h-full bg-neutral-800 rounded-xl overflow-hidden shadow-xl"
    >
      {/* Movie Poster */}
      <div 
        className="w-full h-72 bg-cover bg-center bg-neutral-700"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      />
      
      {/* Card Body */}
      <div className="flex flex-col flex-grow p-5">
        <h5 className="text-lg font-bold text-white mb-2 line-clamp-1">
          {movie.title || movie.name}
        </h5>
        
        <div className="text-sm font-semibold text-yellow-500 mb-3">
          ⭐ {movie.vote_average?.toFixed(1)}
        </div>
        
        {/* line-clamp-3 forces the text to truncate after 3 lines, keeping all cards the exact same height! */}
        <p className="text-sm text-neutral-400 line-clamp-3 mb-6 flex-grow">
          {movie.overview}
        </p>
        
        {/* Card Links pushed to the bottom */}
        <div className="mt-auto flex justify-between border-t border-neutral-700 pt-4">
          <button className="text-sm font-bold tracking-wide text-neutral-400 hover:text-white transition-colors">
            LIKE
          </button>
          <button className="text-sm font-bold tracking-wide text-neutral-400 hover:text-white transition-colors">
            CAST
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default FetchDatas;