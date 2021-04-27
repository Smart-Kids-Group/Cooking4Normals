import React, { useState, useContext } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form"
import Button from "react-bootstrap/Button";
import API from "../../utils/API";
import "./style.css";
import UserContext from "../../utils/UserContext";

const RecipeImport = () => {
  
  const [recipeURL, setRecipeURL] = useState("");
  const { userProfile } = useContext(UserContext);
  
  const handleInputChange = event => {
    const { value } = event.target;
    setRecipeURL(value);

  }
  const handleSubmit = event => {
    event.preventDefault();
    if (recipeURL) {
      API.importRecipeInfo(recipeURL).then(res => {
        let recipe = {
              name: res.data[0].name,
              description: res.data[0].description,
              ingredients: res.data[0]["original-ingredients"],
              instructions: res.data[0]["original-instructions"],
              href: res.data[0].url,
              userName: userProfile.email
             };
        API.saveRecipe(recipe)
          .then((res) => console.log(res, recipe))
          .catch((err) => console.log(err));
      })}
    }
    
  

  return(
    <Container>
      <Form className="Sub">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>To import a recipe from anywhere on the web, paste it here! </Form.Label>
          <Form.Control type="text" placeholder="Paste your link here" onChange={e =>handleInputChange(e)}/>
        </Form.Group>
        <Button variant="primary" onClick={(e)=>handleSubmit(e)}>
         Import
        </Button>
      </Form>
    </Container>
  
  )
}

export default RecipeImport;