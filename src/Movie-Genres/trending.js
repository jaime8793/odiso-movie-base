import { motion, useTransform, useScroll } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import axios from "axios";
import React from "react";

const Trending = () => {
  return (
    <div className="bg-dark">
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "12rem" }}
      >
        <span className="font-weight-bold text-uppercase text-secondary">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "12rem" }}
      >
        <span className="font-weight-bold text-uppercase text-secondary">
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
    <section
      ref={targetRef}
      className="position-relative bg-dark"
      style={{ height: "300vh" }}
    >
      <div
        className="position-sticky"
        style={{
          top: 0,
          height: "vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {config ? (
          <motion.div style={{ x }} className="d-flex gap-3">
            {config.results.map((movie, index) => (
              <Card movie={movie} key={index} />
            ))}
          </motion.div>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </section>
  );
};

const Card = ({ movie }) => {
  return (
    <div
      className="position-relative bg-light overflow-hidden"
      style={{ height: "550px", width: "450px" }}
    >
      <div
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.poster_path})`,
          backgroundSize: "cover",
          //objectFit: "contain",
          backgroundPosition: "center",
        }}
        className="position-absolute w-100 h-100 "
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      ></div>
      <div className="position-absolute w-100 h-100 d-flex align-items-center justify-content-center">
        <p
          className="bg-gradient p-3 text-uppercase text-white font-weight-bold"
          style={{
            background:
              "linear-gradient(to bottom right, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0))",
            backdropFilter: "blur(10px)",
            fontSize: "2.5rem",
          }}
        >
          {movie.title || movie.name}
        </p>
      </div>
    </div>
  );
};

export default Trending;

/*const cards = [
  {
    url: "/imgs/abstract/1.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",
    id: 7,
  },
];
*/