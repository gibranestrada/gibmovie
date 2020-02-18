import React, {useState} from 'react';
import { Modal, Button, Image, Col, Spinner } from 'react-bootstrap';

const MyVerticallyCenteredModal = (props) => {
  const [buttonLoading, setButtonLoading] = useState(false);
  const closeButton = () => {
    props.onHide();
  }
  const moreInfoClicked = () => {
    setButtonLoading(true);
    //props.onHide();
    // props.dispatch({
    //   type: "SEARCH_MOVIES_REQUEST"
    // })
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
        <Modal.Footer className="text-center" style={{backgroundColor: 'black', color: 'white'}}>
        <Col className="modal-button">
          <Button size="lg" onClick={closeButton}>Close</Button>
          <Button size="lg" onClick={moreInfoClicked}>
          {buttonLoading ? <Spinner
            as="span"
            animation="border"
            size="sm"
            role="status"
            aria-hidden="true"
          /> : ''}
           More Info</Button>
        </Col>
        </Modal.Footer>
      </Modal>
    );
  }
  export default MyVerticallyCenteredModal;