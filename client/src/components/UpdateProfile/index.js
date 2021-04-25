import React, { useState, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import API from "../../utils/API";
import UserContext from "../../utils/UserContext";

function EditProfile(props) {
  const [show, setShow] = useState(false);
  const { userProfile, setUserProfile } = useContext(UserContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleSave = () => {
    API.updateUser(userProfile);
    setShow(false)
    }

  function handleInputChange(event) {
    const { value, name } = event.target;
    setUserProfile({ ...userProfile, [name]: value });
  } 





  return (
<>
    <Button variant="primary" onClick={handleShow}>
   Update your Profile Information
  </Button>

    <Modal {...props} show={show} size="lg" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
       Update Your Profile
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
               placeholder="Enter First and Last Name"
               name="fullName"
               onChange={e => handleInputChange(e)}
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
                <InputGroup.Text id="basic-addon1">ScreenName</InputGroup.Text>
            </InputGroup.Prepend>
             <FormControl
               placeholder="Choose a screen name."
               name="screenName"
               onChange={e => handleInputChange(e)}
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
                <InputGroup.Text id="basic-addon1">About Me</InputGroup.Text>
            </InputGroup.Prepend>
             <FormControl
               placeholder="Tell us something about yourself."
               as="textarea"
               name="profileDescription"
               onChange={e => handleInputChange(e)}
                aria-label="profileDescription"
                aria-describedby="basic-addon1"
               />
             </InputGroup>
        </Col>
        </Row>
        <Row>
        <Col>
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Favorite Cuisines</InputGroup.Text>
            </InputGroup.Prepend>
             <FormControl
               placeholder="What are your favorite kinds of food?"
               as="textarea"
               name="favoriteCuisines"
               onChange={e => handleInputChange(e)}
                aria-label="favoriteCuisines"
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
export default EditProfile;