import React, { useState, useEffect} from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import "./styles.css"
import AddMovieForm from './components/AddMovieForm'


export default function App(){
    const [movies, setMovies] = useState([])

    function getMovies(){
      axios.get("/movies")
      .then(res => setMovies(res.data))
      .catch(err => console.log("Err"))

    }

    function addMovie(newMovie){
      axios.post("/movies", newMovie )
      .then(res =>{
        setMovies(prevMovies => [...prevMovies, res.data])
      })
      .catch(err => console.log("error"))
    }
    useEffect(() => {
       getMovies()
    }, [])
    return(
        <div className='movie-container'>
          <AddMovieForm 
          addMovie={addMovie}/>
          {movies.map(movie => <Movie {...movie} key ={movie.title}/>) }

        </div>
    )
}
