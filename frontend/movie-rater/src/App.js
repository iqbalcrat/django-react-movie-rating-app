import React, {useState, useEffect} from 'react'
import './App.css';
import MovieList from './componenets/movie-list';
import MovieDetails from './componenets/movie-details';
import MovieForm from './componenets/movie-form';

function App() {

  const [movies, setMovie] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [editedMovie, setEditMovie] = useState(null)

  const movieClicked = movie =>{

    setSelectedMovie(movie)

  }

  const editClicked = movie =>{

    setEditMovie(movie)

  }

  const loadMovie = movie =>{
    setSelectedMovie(movie)
  }
  //Fetching the movie list and dumping it into movies variable above
  useEffect(() => {

    fetch('http://127.0.0.1:8000/api/movies', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Token 947924344ef25d12f37adfe31b8c98bc5deab39d"
      }
    })
    .then(resp => resp.json())
    .then(resp => setMovie(resp))
    .then(error => console.log(error))

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
        
      </header>
      <div className="layout">

        <MovieList movies={movies} movieClk={movieClicked} editClicked={editClicked}/>
        <MovieDetails movie={selectedMovie} updateMovie={loadMovie}/>
        <MovieForm movie={editedMovie}/>

      </div>
        
    </div>
  );
}

export default App;
