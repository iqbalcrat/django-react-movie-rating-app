import React from "react";
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';



function MovieDetails(props){

    const [value, setValue] = React.useState(0);

    const updateRating = newValue =>  {

        if (newValue == null){
            console.log("dusra select kar bsdk")
        }
        else{
        setValue(0);

            fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/rate_movie/`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token 947924344ef25d12f37adfe31b8c98bc5deab39d"
              },
              body: JSON.stringify({stars: newValue})
            })
            .then(() => getDetails())
            .then(error => console.log(error))
            
        }
    }

    //This func is for updating parent
    const getDetails = () =>  {



            fetch(`http://127.0.0.1:8000/api/movies/${props.movie.id}/`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': "Token 947924344ef25d12f37adfe31b8c98bc5deab39d"
              },
            })
            .then(resp => resp.json())
            .then(resp => props.updateMovie(resp))
            .then(error => console.log(error))
        }
    
    return (

        <div>

            {props.movie ? (
                <div>
                    <h1>{props.movie && props.movie.title}</h1>
                    <p>{props.movie && props.movie.description}</p>
                    <Typography component="legend">Average rating({props.movie.no_of_ratings} users)</Typography>
                    
                    <Rating name="read-only" value={props.movie.avg_rating} readOnly /> 

                    <div className="rate-movie">

                        
                        <Typography component="legend">Rate now</Typography>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                            setValue(newValue);
                            updateRating(newValue)
                            }}
                        />
                    
                    </div>

                </div>

                

            ): <h1>Select a movie on the left pane</h1>}
            


      </div>

    )
}

export default MovieDetails