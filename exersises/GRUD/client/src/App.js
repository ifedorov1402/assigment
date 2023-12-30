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

    function deleteMovie(movieId) {
      axios.delete(`/movies/${movieId}`)
      .then(res =>{
        setMovies(prevMovies => prevMovies.filter(movie =>movie._id!==movieId))
      })
      .catch(err => console.log("Err"))
    }

    function editMovie(updates,  movieId){
      axios.put(`/movies/${movieId}`, updates)
      .then(res => {
        setMovies(prevMovies =>prevMovies.map(movie => movie._id !== movieId ? movie : res.data))
      })
      .catch(err => console.log("Error"))
    }
    function handleFilter(e){
      if(e.target.value === "reset"){
        getMovies()
      } else {
      axios.get(`/movies/search/genre?genre=${e.target.value}`)
      .then(res => setMovies(res.data))
      .catch(err => console.log(err))
      }
    }



    useEffect(() => {
       getMovies()
    }, [])
    return(
        <div className='movie-container'>
          <AddMovieForm 
          submit={addMovie}
          btnText="Add Movie"/>

          <h4>Filter By Genre</h4>
          <select onChange={handleFilter} className='filter-form'>
            <option value="reset">Selectn</option>
            <option value="action">Action</option>
            <option value="fantasy">Fantasy</option>
            <option value="horror">Horror</option>
          </select>
          {
          movies.map(movie => 
          <Movie 
          {...movie} 
          key ={movie.title}
          deleteMovie={deleteMovie}
          editMovie={editMovie}
          />) }
          
        </div>
    )
}
