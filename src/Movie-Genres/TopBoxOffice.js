//import "./styles.css";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook to create a parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Image component that includes the parallax effect
function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <img src={`/${id}.jpg`} alt={`Image ${id}`} />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

// Main component that renders a list of images with a progress bar
function TopBoxOffice() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [config, setConfig] = useState(null);

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
      {console.log(config)}
      {[1,2,3].map((movie, index) => (
        <Image movie={movie} key={index} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default TopBoxOffice;
