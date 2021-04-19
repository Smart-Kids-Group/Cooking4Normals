import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

const RecipeImport = () => {
  
  const [recipeURL, setRecipeURL] = useState("");

  const handleInputChange = event => {
    const { value } = event.target;
    setRecipeURL(value);

  }
  const handleSubmit = event => {
    event.preventDefault();
    if (recipeURL) {
      API.importRecipeInfo(recipeURL).then((res) => {
        let recipe = res.data[0];
        API.saveRecipe(recipe)
          .then((res) => console.log(res, recipe))
          .catch((err) => console.log(err));
      }); 
    }
  }

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