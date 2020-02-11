import React from "react";
import { Card, Button } from 'react-bootstrap';
import Modal from './MovieModal';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ movie }) => {
    const [modalShow, setModalShow] = React.useState(false);
    const poster =
        !movie.poster_path ? DEFAULT_PLACEHOLDER_IMAGE : `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;
    return (
        <>
        <Card className="mov" onClick={()=>setModalShow(true)} 
            style={{ width: '18rem', margin: '2rem', backgroundColor: 'black', cursor:'pointer' }}>
            <Card.Img variant="top" src={poster} alt={`The movie titled: ${movie.title}`} />
            {/* <Card.Body>
                <Card.Title>{movie.title} {movie?.release_date ? movie.release_date.substring(0, 4) : ''}</Card.Title>
                <Card.Text>
                    {movie.tagline}
                 </Card.Text>
            </Card.Body> */}
        </Card>
        <Modal show={modalShow} mov={movie} onHide={() => setModalShow(false)}/>
        </>
    );
};


export default Movie;