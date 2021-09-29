import React, {useState} from 'react'
import './App.css';

function App() {

  const [movies, setMovie] = useState(['Interstellar', 'Titanic', 'Inception'])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie rater</h1>
        
      </header>
      <div className="layout">

      <div>
      { movies.map( movie => {

        return <h2>{movie}</h2>
      })}

      </div>
        <div>Movie details</div>

      </div>
        
    </div>
  );
}

export default App;
