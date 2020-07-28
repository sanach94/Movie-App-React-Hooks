import React, { useState} from "react";
import { Modal, Button } from "react-bootstrap";
import Rating from "./Rating"
const AddModal = ({addMovie}) => {
  const [show , setShow]  = useState(false)
  const [add , setAdd]  = useState({})
  const handleShow = () => {
    setShow(!show)
  };
  const addNewMovie = () => {
    addMovie(add)
    handleShow()
  }
  const handleChange  = (e) => {
    setAdd({...add, [e.target.name]: e.target.value})
  }
    return (
      <div>
        <Button className="myButton" onClick={handleShow}>
        Add Movie
        </Button>
        <Modal show={show} onHide={handleShow}>
          <Modal.Header closeButton>
            <Modal.Title>Add Movie</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              <div className="">
                <label className="label">Title:</label>
                <input type="text" name="title" onChange={handleChange}/>
              </div>
              <div>
                <label className="label">Image:</label>
                <input type="text" name="image" onChange={handleChange}/>
              </div>
              <div>
                <label className="label">Rating:</label>
                <input type="text" name="rating"  onChange={handleChange}/>
              </div>
              <div>
                <label className="label">Year:</label>
                <input type="text" name="year"  onChange={handleChange}/>
              </div>  
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="myButton" onClick={handleShow}>
              Close
            </Button>
            <Button className="myButton" onClick={
               addNewMovie
                }>
              Add Movie
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

export default AddModal;