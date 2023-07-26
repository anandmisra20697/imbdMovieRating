import React, { useEffect, useState } from "react";
import classes from "./popular.module.css";
import { Link } from "react-router-dom";
export default function Popular() {
  const fetch = require("node-fetch");
  const [popularMovies, setPopularMovies] = useState(null);

  const url = "https://api.themoviedb.org/3/movie/popular";
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdhZGE3ZGEwNTUwMzA1ZWJlNDkwOGQwMTE5MjA4ZSIsInN1YiI6IjY0YmY4OGQ4NmVlM2Q3MDBjN2ZhZWI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHQuASSrLyneq6icrZkIZI0XwXNz8ybf60GvnxWMNRg",
    },
  };
  const fecthCall = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log([data]);
    setPopularMovies([...data.results]);
  };

  useEffect(() => {
    fecthCall();
  }, []);

  return (
    <>
      <h2 className={classes.title}>Popular</h2>
    <div className={classes.PopularRow}>
      {popularMovies &&
        popularMovies.map((movie, index) => {
          return (
            <Link key={index}  to={`/movie/${movie.id}`}>
            <div className={classes.popularCol}>
              <img
                className="rounded p-0"
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            </Link>
          );
        })}
    </div>
    </>
  );
}
