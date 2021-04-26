import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import FullRecipe from "../FullRecipe";
import "./style.css";

function RecipeList(props) {
  const [recipeKey, setRecipeKey] = useState(0);
  const divStyle = {
    overflowY: "scroll",
    float: "left",
    height: "500px",
    position: "relative",
  };

  function handleClick(event) {
    const { key } = event.target.dataset;
    setRecipeKey(key);
  }

  return (
    <Container>
      <Row>
        <Col sm={2}>
          <ListGroup style={divStyle}>
            {props.data
              ? props.data.map((recipe, i) => (
                  <ListGroup.Item
                    href={`#${recipe.name}`}
                    key={i}
                    data-key={i}
                    data-name={recipe.name}
                    onClick={(event) => handleClick(event)}
                  >
                    {" "}
                    {recipe.name}
                    <hr />
                  </ListGroup.Item>
                ))
              : null}
          </ListGroup>
        </Col>
        <Col sm={10} className="dots">
          <FullRecipe {...props} indexNum={recipeKey} style={divStyle}/>
        </Col>
      </Row>
    </Container>
  );
}
export default RecipeList;
