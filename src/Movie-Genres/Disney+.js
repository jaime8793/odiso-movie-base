//import "./styles.css";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook to create a parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Image component that includes the parallax effect and takes in the base URL and poster path
function Image({ movie, baseURL }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const posterPath = movie.poster_path; // Assuming each movie object has a poster_path
  const posterURL = `${baseURL}${posterPath}`;

  return (
    <section>
      <div ref={ref}>
        <img src={posterURL} alt={`Image ${movie.id}`} />
      </div>
      <motion.h2 style={{ y }}>{`#00${movie.id}`}</motion.h2>
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
  const [movies, setMovies] = useState([]);
  const [baseURL, setBaseURL] = useState("");

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

        // The API response should contain a base URL for images
        const configurationResponse = await axios.get(
          "https://api.themoviedb.org/3/configuration",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzNhODk4YWYwNmVjZDFkMGNkODZmYTZjMzRjOWNkOSIsInN1YiI6IjY2MmI3YjNkNTAxY2YyMDExZmIzOTQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.70-yBmgUn18eoidsXYWZTtk3mK5ujNWzrycqBjlqPt8",
            },
          }
        );

        setMovies(response.data.results);
        setBaseURL(configurationResponse.data.images.secure_base_url + "w500"); // Example of extracting the base URL and image size
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {console.log(movies)}
      {movies.map((movie, index) => (
        <Image movie={movie} key={index} baseURL={baseURL} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default TopBoxOffice;

/*//import "./styles.css";
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

/*
//import "./styles.css";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import axios from "axios";
import { useEffect, useState } from "react";

// Custom hook to create a parallax effect
function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// Image component that includes the parallax effect and takes in the base URL and poster path
function Image({ movie, baseURL }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const posterPath = movie.poster_path; // Assuming each movie object has a poster_path
  const posterURL = `${baseURL}${posterPath}`;

  return (
    <section>
      <div ref={ref}>
        <img src={posterURL} alt={`Image ${movie.id}`} />
      </div>
      <motion.h2 style={{ y }}>{`#00${movie.id}`}</motion.h2>
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
  const [movies, setMovies] = useState([]);
  const [baseURL, setBaseURL] = useState("");

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

        // The API response should contain a base URL for images
        const configurationResponse = await axios.get(
          "https://api.themoviedb.org/3/configuration",
          {
            headers: {
              accept: "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzNhODk4YWYwNmVjZDFkMGNkODZmYTZjMzRjOWNkOSIsInN1YiI6IjY2MmI3YjNkNTAxY2YyMDExZmIzOTQ1ZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.70-yBmgUn18eoidsXYWZTtk3mK5ujNWzrycqBjlqPt8",
            },
          }
        );

        setMovies(response.data.results);
        setBaseURL(configurationResponse.data.images.secure_base_url + "w500"); // Example of extracting the base URL and image size
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {console.log(movies)}
      {movies.map((movie, index) => (
        <Image movie={movie} key={index} baseURL={baseURL} />
      ))}
      <motion.div className="progress" style={{ scaleX }} />
    </>
  );
}

export default TopBoxOffice;*/