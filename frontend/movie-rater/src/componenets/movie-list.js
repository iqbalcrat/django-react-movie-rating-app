import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function MovieList(props){

    const movieClicked = movie =>{

        props.movieClk(movie)

    }

    const editClicked = movie => {
        props.editClicked(movie)
    }

    return (

<div>
      { props.movies && props.movies.map( movie => {

        return (
        
        <div key={movie.id}>
            <h2 onClick={ evt => movieClicked(movie)}>{movie.title} &nbsp; </h2>
            <EditIcon color="primary" onClick={ evt => editClicked(movie)}/>
            <DeleteIcon color="primary" />
            

        </div>
        )
 
      })}

      </div>

    )
}

export default MovieList