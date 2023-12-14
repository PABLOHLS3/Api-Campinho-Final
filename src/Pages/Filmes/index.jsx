import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';

const Filmes = () => {

  const [movie, setMovie] = useState([])
  
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTMzZTFkM2QwNmNjYjk0MTY0MWM3MTE5Y2I1OTM1MSIsInN1YiI6IjY1NjUyZmFkNmY1M2UxMDEwMDE3OTk0ZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QZ8F9kFe5I_4lthM7Emuu3AV4u__p3yTUT0IhMcxGCU'
    }
  };

  useEffect(() => {

    const images = fetch('https://api.themoviedb.org/3/discover/movie', options)
    .then(response => response.json())
    .then(response => {
      console.log(response.results)
      setMovie(response.results)

    })
  }, [])
  
  return (
    <div className='dados'>
    <h4 className='title'>NOSSOS FILMES:</h4>
   <div className='filmes container-fluid'>
    {
      movie.map((r) => (
        <div className='dados-api'>
            <img src={`https://image.tmdb.org/t/p/w500/${r.poster_path}`} alt="" />
            <h1>{r.title}</h1>
            <p>{r.overview}</p>
            <p className='lançamento'>{`Lançamento: ${r.release_date}`}</p>
           
      </div> 
      ))
    }
   </div>
   </div>
  )
}

export default Filmes