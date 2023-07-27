import React, { useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";
import classes from "./movie.module.css";
import StarIcon from "@mui/icons-material/Star";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";


export default function Movie() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const params = useParams();
  const [movie, setMovie] = useState(null);
  const [loading,setLoading] = useState(true);
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

  function getCurrentDimension(){
    console.log(window.innerWidth);
    return {
      	width: window.innerWidth,
    }
}

  const fetchCall = async () => {
    const response = await fetch(url, options);
    const data = await response.json();
    setMovie(data);
  };

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension())
    }
    window.addEventListener('resize', updateDimension);
    
    return(() => {
        window.removeEventListener('resize', updateDimension);
    })
  }, [screenSize])

  useEffect(() => {
    fetchCall();
    setTimeout(() => {
      setLoading(false);
    }
    , 2000);
  }, []);
  
  return (
    <div>
      <div className={classes.backdrop}>
        {loading?<SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton count={1} duration={2} width="100%" height="600px" />
        </SkeletonTheme>:
        <img
          className={classes.backdrop_img}
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.backdrop_path
          }`}
          alt={movie && movie.title}
        />
        }
      </div>
      <div className={classes.thumbnail}>
        {loading&&<SkeletonTheme color="#202020" highlightColor="#444">
          <Skeleton count={1} duration={2} width={screenSize>678?"300px":"200px"} height={screenSize>678?"600px":"300px"} />
        </SkeletonTheme>}
        {!loading&& 
        <img
          src={`https://image.tmdb.org/t/p/original/${
            movie && movie.poster_path
          }`}
          alt={movie && movie.poster_path}
        />}
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
              <div className={classes.thumbnail_status}>
                status:{movie && movie.status}
              </div>
              <div className={classes.thumbnail_language}>
                Language:
                {movie &&
                  movie.spoken_languages.map((lang, index) => {
                    return <span key={index}>{lang.name}&nbsp;|&nbsp;</span>;
                  })}
              </div>
              <div className={classes.genres}>
                {movie &&
                  movie.genres.map((genre, index) => {
                    return (
                      <span className={classes.genre} key={index}>
                        {genre.name}&nbsp;
                      </span>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.infoSection}>
        <div>
          
          <div className={classes.uls}>
            <ul className={classes.ul}>
              <li>Budget:{movie && movie.budget}</li>
              <li>Revenue:{movie && movie.revenue}</li>
              <li>Runtime:{movie && movie.runtime}</li>
              <li>Release Date:{movie && movie.release_date}</li>
              <li>Certification:{movie && movie.adult ? "A" : "U"}</li>
              <li>Popularity:{movie && movie.popularity}</li>
              <li>Tagline:{movie && movie.tagline}</li>
            </ul>
            {movie && movie.production_companies.length > 0 && (
              <div>
                <h2>Production Companies</h2>
                <ul className={classes.ul}>
                  {movie &&
                    movie.production_companies.map((company, index) => {
                      return (
                        <li
                          className={classes.production_companies}
                          key={index}
                        >
                          {company.logo_path && (
                            <img
                              className={classes.production_companies_img}
                              src={`https://image.tmdb.org/t/p/original/${company.logo_path}`}
                              alt={company.name}
                            />
                          )}
                        </li>
                      );
                    })}
                </ul>
              </div>
            )}
            <div>
              <h2>Production Countries</h2>
              <ul className={classes.ul}>
                {movie &&
                  movie.production_countries.map((country, index) => {
                    return (
                      <li className={classes.production_countries} key={index}>
                        {country.name}
                      </li>
                    );
                  })}
              </ul>
            </div>
          </div>
          
        </div>
        <div className={classes.linkButtons}>
            <Link
              target="_blank"
              to={`${movie && movie.homepage}`}
              className={classes.homePageButton}
            >
              Home Page
            </Link>
          <Link target="_blank" className={classes.imdbButton} to={`https://www.imdb.com/title/${movie&&movie.imdb_id}/`}>
              IMDb
            </Link>
          </div>
      </div>
    </div>
  );
}
