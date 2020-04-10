import React, {useEffect} from "react";
import { Card } from 'react-bootstrap';
import Modal from './MovieModal';
import lozad from 'lozad';

const DEFAULT_PLACEHOLDER_IMAGE =
    "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";


const Movie = ({ currentMovie, movie, selectedMovie, dispatch }) => {
    const [modalShow, setModalShow] = React.useState(false);
    useEffect(()=>{
        const observer = lozad();
        observer.observe();
        if(!modalShow){
            dispatch({
                type: 'RESET_CURRENT_MOVIE'
            })
        }
    },[modalShow])
    const poster =
        !movie.poster_path ? DEFAULT_PLACEHOLDER_IMAGE : `https://image.tmdb.org/t/p/w342/${movie.poster_path}`;
    return (
        <>
        <Card className="mov" onClick={()=>{setModalShow(true); selectedMovie(movie.id)}} 
            style={{ width: '20rem', margin: '2rem', backgroundColor: 'black', cursor:'pointer' }}>
            <Card.Img className="lozad" variant="top" data-src={poster} alt={`The movie title: ${movie.title}`} />
        </Card>
        <Modal show={modalShow} mov={currentMovie} onHide={() => setModalShow(false)}/>
        </>
    );
};


export default Movie;