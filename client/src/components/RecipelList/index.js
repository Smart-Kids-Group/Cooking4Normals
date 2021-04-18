import React, { useState } from "react";
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Tab from "react-bootstrap/Tab";
import FullRecipe from "../FullRecipe";

function RecipeList(props){
  console.log( props)
  
  const [tabData, setTabData] = useState({
    eventKey: "#",
    recipe: {}
  })

  function handleClick(event) {
    const { name } = event.target;
      setTabData({ ...tabData, eventKey : `#${name}` })
  }

  return(
    <Container>
      <Row>
      <Col sm={4}>
    <ListGroup>
     {props.data
          ? props.data.map((recipe) => (
              <ListGroup.Item
                
              > {recipe.name}
              </ListGroup.Item>
            ))
          : null}
    </ListGroup>
    </Col>
    </Row>
    </Container>

  )
      }
      export default RecipeList;