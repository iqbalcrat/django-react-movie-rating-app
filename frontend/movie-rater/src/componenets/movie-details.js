import React from "react";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';


function MovieDetails(props){

    
    return (

        <div>

            {props.movie ? (
                <div>
                    <h1>{props.movie && props.movie.title}</h1>
                    <p>{props.movie && props.movie.description}</p>
                    <Typography component="legend">Read only</Typography>
                    <Rating name="read-only" value={props.movie.avg_rating} readOnly />
                </div>
            ): <h1>Select a movie on the left pane</h1>}
            
      </div>

    )
}

export default MovieDetails