import React, { useContext } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import FullRecipe from "../FullRecipe";
import RecipeContext from "../../utils/RecipeContext";


function RecipeList(props){
  
  const { recipeData, setRecipeData } = useContext(RecipeContext)

  function handleClick(event) {
    const { name } = event.target;
      setRecipeData({...setRecipeData, name: name});
      console.log(recipeData);
  }

  return(
    <Container>
      <Row>
      <Col sm={4}>
    <ListGroup>
     {props.data
          ? props.data.map((recipe, i) => (
              <ListGroup.Item href={`#${recipe.name}`} 
              key= {i}
              name={recipe.name} 
              onClick={(event) => handleClick(event)}
              > {recipe.name}
              </ListGroup.Item>
            ))
          : null}
    </ListGroup>
    </Col>
    <Col sm={8}>
      <FullRecipe/>
    </Col>
    </Row>
    </Container>

  )
      }
      export default RecipeList;