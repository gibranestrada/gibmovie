import React from "react";
import { Card } from 'react-bootstrap';
import Modal from './MovieModal';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ currentMovie, movie, selectedMovie }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const poster =
        !movie.poster_path ? DEFAULT_PLACEHOLDER_IMAGE : `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
 
    return (
        <>
        <Card className="mov" onClick={()=>{setModalShow(true); selectedMovie(movie.id)}} 
            style={{ width: '20rem', margin: '2rem', backgroundColor: 'black', cursor:'pointer' }}>
            <Card.Img variant="top" src={poster} alt={`The movie titled: ${movie.title}`} />
        </Card>
        <Modal show={modalShow} mov={currentMovie} onHide={() => setModalShow(false)}/>
        </>
    );
};


export default Movie;