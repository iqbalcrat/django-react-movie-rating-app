import React, {useState, useEffect} from 'react'
import './App.css';

function App() {

  const [movies, setMovie] = useState([])


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

      <div>
      { movies.map( movie => {

        return <h2>{movie.title}</h2>
 
      })}

      </div>
        <div>Movie details</div>

      </div>
        
    </div>
  );
}

export default App;
