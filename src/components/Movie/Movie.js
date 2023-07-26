import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import classes from "./movie.module.css";
import StarIcon from "@mui/icons-material/Star";

export default function Movie() {
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const fetch = require("node-fetch");

  const url = `https://api.themoviedb.org/3/movie/${params.id}?api_key=2a7ada7da0550305ebe4908d0119208e`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdhZGE3ZGEwNTUwMzA1ZWJlNDkwOGQwMTE5MjA4ZSIsInN1YiI6IjY0YmY4OGQ4NmVlM2Q3MDBjN2ZhZWI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHQuASSrLyneq6icrZkIZI0XwXNz8ybf60GvnxWMNRg",
    },
  };
  const fetchCall = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    setMovie(data);
  };

  useEffect(() => {
    fetchCall();
    console.log(movie);
  }, []);
  return (
    <div>
      <div className={classes.backdrop}>
        <img
          className={classes.backdrop_img}
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.backdrop_path
          }`}
          alt={movie && movie.title}
        />
      </div>
      <div className={classes.thumbnail}>
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.poster_path
          }`}
          alt={movie && movie.poster_path}
        />
        <div className={classes.thumbnail_intro}>
          <div>
            <h1 className={classes.thumbnail_title}>{movie && movie.title}</h1>
            {/* <div >{movie && movie.vote_average}</div> */}
            <div className={classes.thumbnail_overview}>
              <span>overview:-</span>
              {movie && movie.overview}
            </div>
            <div className={classes.thumbnail_rating}>
              Rating:{movie && Math.round(movie.vote_average)}
              <StarIcon />
            </div>
            <div className={classes.thumbnail_status_and_language}>
              <div className={classes.thumbnail_status}>status:{movie && movie.status}</div>
              <div className={classes.thumbnail_language}>
                Language:
                {movie &&
                  movie.spoken_languages.map((lang, index) => {
                    return <span key={index}>{lang.name}&nbsp;|&nbsp;</span>;
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {movie && movie.map((movie,index)=>{

      })} */}
    </div>
  );
}
