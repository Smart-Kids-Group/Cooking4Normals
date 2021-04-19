import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";

const RecipeImport = () => {
  
  const handleInputChange = event => {}
  const handleSubmit = () => {}

  return(
    <Container>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To import a recipe from anywhere on the web, paste it here! </Form.Label>
          <Form.Control type="text" placeholder="Paste your link here" onChange={handleInputChange}/>
        </Form.Group>
        <Button variant="primary" type="submit" onSubmit={handleSubmit}>
          Submit
        </Button>
      </Form>
    </Container>
  
  )
}

export default RecipeImport;