import React from 'react';
import { Modal, Button, Image } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
  const moreInfoClicked = () => {
    //props.onHide();
    //props.moreInfo(props.mov.id);
    window.location.href=`https://www.imdb.com/title/${props.mov[0].imdb_id}`
  }
  
  if(!props.mov.length)return(<></>);
  console.log(props.mov);
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="modal-movie m-100"
        style={{backgroundImage: `url(https://image.tmdb.org/t/p/w1280/${props.mov[0].backdrop_path})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
      >
        <Modal.Header closeButton style={{backgroundColor:'black', color:'white'}}>
          <Modal.Title className="text-center  w-100" id="contained-modal-title-vcenter" >
            {props.mov[0].title} - {props.mov[0].release_date.slice(0, 4)}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-white text-center" style={{backgroundColor: 'black', color: 'white'}}>
         <Image src={`https://image.tmdb.org/t/p/w185/${props.mov[0].poster_path}`} fluid/>
          <p>{props.mov[0].tagline}</p>
          <p>
            {props.mov[0].overview}
          </p>
        </Modal.Body>
        <Modal.Footer style={{backgroundColor: 'black', color: 'white'}}>
          <Button onClick={moreInfoClicked}>More Info</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;