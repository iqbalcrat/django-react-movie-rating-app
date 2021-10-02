import React from "react";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function MovieList(props){

    const movieClicked = movie =>{

        props.movieClk(movie)

    }

    const editClicked = movie => evt =>{
        props.editClicked(movie)
    }

    return (

<div>
      { props.movies && props.movies.map( movie => {

        return (
        
        <div key={movie.id}>
            <h2 onClick={ evt => movieClicked(movie)}>{movie.title} &nbsp; <EditIcon color="primary" onclick={() =>{editClicked(movie)}}/>&nbsp; <DeleteIcon color="primary" /></h2>
            

        </div>
        )
 
      })}

      </div>

    )
}

export default MovieList