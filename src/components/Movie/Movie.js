import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Movie() {
    const params = useParams();
    const [movie,setMovie] = useState(null);
    const fetch = require('node-fetch');

    const url = `https://api.themoviedb.org/3/find/${params.id}?external_source=imdb_id`;
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTdhZGE3ZGEwNTUwMzA1ZWJlNDkwOGQwMTE5MjA4ZSIsInN1YiI6IjY0YmY4OGQ4NmVlM2Q3MDBjN2ZhZWI3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RHQuASSrLyneq6icrZkIZI0XwXNz8ybf60GvnxWMNRg'
      }
    };
    const fetchCall = async () => {
        const response =await fetch(url, options);
        const data =await response.json();
        setMovie(data);
    }

    useEffect(()=>{
        fetchCall();
        console.log(movie);
    },[])
  return (
    <div>
      This is movie page
    </div>
  )
}
