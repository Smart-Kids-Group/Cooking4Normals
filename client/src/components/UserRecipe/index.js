import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import API from "../../utils/API";

function UserRecipe(props) {
  const [show, setShow] = useState(false);
  const [ recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    instructions: ""
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSave = () => {
    API.saveRecipe(recipe);
    setShow(false)
    }

  function handleNameChange(event) {
    const { value, name } = event.target;
    setRecipe({ ...recipe, [name]: value });
  } 

  function handleIngredientsChange(event) {
    const { value, name } = event.target;
    setRecipe({ ...recipe, [name]: value });
  }

  function handleInstructionsChange(event) {
    const { value, name } = event.target;
    setRecipe({ ...recipe, [name]: value });
  }



  return (
<>
    <Button variant="secondary" onClick={handleShow}>
   Create your own Recipe
  </Button>

    <Modal {...props} show={show} size="lg" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
       Enter your Recipe Information
      </Modal.Title>
    </Modal.Header>
    <Modal.Body className="show-grid">
      <Container>
        <Row>
          <Col>
          <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            </InputGroup.Prepend>
             <FormControl
               placeholder="Name"
               name="recipeName"
               onChange={handleNameChange}
                aria-label="name"
                aria-describedby="basic-addon1"
               />
             </InputGroup>
          </Col>
        </Row>
        <Row>
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Ingredients</InputGroup.Text>
            </InputGroup.Prepend>
             <FormControl
               placeholder="Please enter the ingredients"
               as="textarea"
               name="ingredients"
               onChange={handleIngredientsChange}
                aria-label="name"
                aria-describedby="basic-addon1"
               />
             </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Cooking Instructions</InputGroup.Text>
            </InputGroup.Prepend>
             <FormControl
               placeholder="Please enter the instructions for your recipe."
               as="textarea"
               name="instructions"
               onChange={handleInstructionsChange}
                aria-label="name"
                aria-describedby="basic-addon1"
               />
             </InputGroup>
        </Col>
        </Row>
      </Container>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
    </Modal.Footer>
  </Modal>
  </>
);
}
export default UserRecipe;