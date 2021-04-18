import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import FullRecipe from "../FullRecipe";

function RecipeList(props){
  const [tabData, setTabData] = useState({
    eventKey: "#",
    recipe: {}
  })

  function handleClick(event) {
    const { name } = event.target;
      setTabData({ ...tabData, eventKey : `#${name}` })
  }
  
  return(
<Tab.Container id="recipeList" defaultActiveKey={tabData.eventKey}>
  <Row>
    <Col sm={4}>
      <ListGroup>
        
        {props.recipes.map(recipe => {
          setTabData({...tabData, recipe: recipe })
          return (
        <ListGroup.Item action href={`#${recipe.name}`} name={recipe.name} onClick={(event) => handleClick(event)}>
          {recipe.name}
        </ListGroup.Item>
        )})}
      </ListGroup>
    </Col>
    <Col sm={8}>
      <Tab.Content>
        <Tab.Pane eventKey={tabData.eventKey}>
        <FullRecipe recipe={tabData.recipe} />
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
  )
      }
      export default RecipeList;