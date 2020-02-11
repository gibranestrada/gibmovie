import React from "react";
import { Card, Button } from 'react-bootstrap';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const handleClick = (e, mov) =>{
        console.log('e', e, 'mov', mov)
    }
    const poster =
        !movie.poster_path ? DEFAULT_PLACEHOLDER_IMAGE : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    return (
        // <div className="movie">
        //   <h2>{movie.Title}</h2>
        //   <div>
        //     <img
        //       width="200"
        //       alt={`The movie titled: ${movie.Title}`}
        //       src={poster}
        //     />
        //   </div>
        //   <p>({movie.Year})</p>
        // </div>
        <Card className="mov" onClick={(e)=>handleClick(e,movie)} bg="secondary" style={{ width: '18rem', margin: '2rem', height: '', color: 'white', cursor:'pointer' }}>
            <Card.Img style={{height: ''}} variant="top" src={poster} alt={`The movie titled: ${movie.title}`} />
            <Card.Body>
                <Card.Title>{movie.title} {movie?.release_date ? movie.release_date.substring(0, 4) : ''}</Card.Title>
                <Card.Text>
                    {movie.tagline}
                 </Card.Text>
                {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
        </Card>
    );
};


export default Movie;