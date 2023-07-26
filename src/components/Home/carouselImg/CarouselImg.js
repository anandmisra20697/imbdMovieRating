import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import StarIcon from "@mui/icons-material/Star";
import classes from "./carouselImg.module.css";

export default function CarouselImg() {
  // const fetch = require("node-fetch");
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
    console.log([...data.results]);
    setPopularMovies([...data.results]);
  };

  // console.log(data)
  useEffect(() => {
    fecthCall();
  }, []);


  return (
    <section>
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        infiniteLoop={true}
        interval={2000}
        showStatus={false}
        showThumbs={false}
      >
        {popularMovies &&
          popularMovies.map((movie) => {
            return (
              <>
                <div key={movie.id}>
                  <img style={{ width: "100vw" ,height:"auto%",position:"center"}}
                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                    alt={movie.title}
                  />
                </div>
                <div className={classes.popularMovieDeails}>
                  <div className={classes.title}>{movie.original_title}</div>
                  <div className={classes.release_date}>
                    {movie.release_date}
                    <span className={classes.vote_average}>
                      &nbsp;{movie.vote_average} <StarIcon />
                    </span>
                  </div>
                  <div className={classes.length}>
                    {movie.overview}
                  </div>
                </div>
              </>
            );
          })}
        {/* <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/83b50bc7a3004f3a.jpg?q=20"
            alt="Nothing Phone 1"
          />
          <p>this is first page</p>
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/352e6f0f8034fab5.jpg?q=20"
            alt="Flight booking"
          />
        </div>
        <div>
          <img
            src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/4cd6690ef44564f3.jpg?q=20"
            alt="Flight booking 2"
          />
        </div> */}
      </Carousel>
    </section>
  );
}
