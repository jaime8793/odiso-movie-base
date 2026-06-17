import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  return (
    <div className="bg-neutral-900">
      {/* Replaced inline styles and Bootstrap with Tailwind layout classes */}
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase tracking-widest text-neutral-500">
          Scroll down
        </span>
      </div>
      
      <HorizontalScrollCarousel />
      
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase tracking-widest text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://api.themoviedb.org/3/trending/all/week",
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
        console.error("Failed to fetch trending movies:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-neutral-900">
      {/* Sticky container handling the horizontal scroll frame */}
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        {config ? (
          <motion.div style={{ x }} className="flex gap-6 px-8">
            {config.results.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </motion.div>
        ) : (
          <div className="w-full text-center text-neutral-400 animate-pulse">
            Loading...
          </div>
        )}
      </div>
    </section>
  );
};

const Card = ({ movie }) => {
  return (
    <div className="group relative h-[500px] w-[330px] shrink-0 overflow-hidden rounded-2xl bg-neutral-800 shadow-2xl">
      {/* We keep the background image inline because the URL is dynamic, 
        but all positioning and sizing is handled by Tailwind. 
      */}
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.poster_path})`,
        }}
      />
      
      {/* Text overlay with Tailwind glassmorphism (bg-black/40 + backdrop-blur-md) */}
      <div className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6">
        <p className="w-[90%] rounded-xl bg-black/40 p-4 text-center text-lg font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-md">
          {movie.title || movie.name}
        </p>
      </div>
    </div>
  );
};

export default Trending;