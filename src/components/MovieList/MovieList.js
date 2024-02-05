import React, { Fragment, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import classes from './movieList.module.css';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import Footer from '../Footer/Footer';
export default function MovieList() {
    const params = useParams();
    const [movie,setMovie] = useState(null);
    const [loading,setLoading] = useState(true);
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/movie/${params.type}`;
    const options ={
        method: "GET",
        headers: {
            accept: "application/json",
            Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdhZGE3ZGEwNTUwMzA1ZWJlNDkwOGQwMTE5MjA4ZSIsInN1YiI6IjY0YmY4OGQ4NmVlM2Q3MDBjN2ZhZWI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHQuASSrLyneq6icrZkIZI0XwXNz8ybf60GvnxWMNRg",
        }}
        const fecthCall = async () => {
            const response = await fetch(url, options);
            const data = await response.json();
            setMovie([...data.results]);

        }

        useEffect(() => {
          setLoading(true);
            fecthCall();
            setTimeout(() => {
                setLoading(false);
            }, 2000);
        }, [params.type])
        useEffect(() => {}, [movie])
  return (
    <Fragment>
      <div className={classes.PopularRow}>
      {movie &&
        movie.map((movie, index) => {
          return (
            loading ?
            <div key={index} className={classes.loading}>
              <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton count={1} duration={2} width={200} height={300} />
              </SkeletonTheme>
            </div>
            :
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
    <Footer/>
    </Fragment>
  )
}
