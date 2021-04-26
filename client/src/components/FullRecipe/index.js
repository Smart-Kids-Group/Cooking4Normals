import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import "./style.css"


const FullRecipe = (props) => {
 let i = props.indexNum
 const recipe = props.data[i];
 const divStyle = {
  overflowY: "scroll",
  float: "left",
  height: "500px",
  position: "relative",
};

  return (
  
    
  <Col md={12}>
    {props.data[i]?
      <Card className="mb-4 w-60 shadow-sm">
        <Row>
          <Col md={12} className="Impo" style={divStyle}>
          {recipe.href ? (
              <a
                className="btn-primary float-right Linkbuut"
                rel="noreferrer noopener"
                target="_blank"
                href={recipe.href}
              >
                Link to Recipe Source
              </a>
            ) : null}
            <Card.Title className="text-center">{recipe.name}</Card.Title>
            <hr />
            {recipe.description ? (
              <Card.Text className="float-left">
                {" "}
                {recipe.description}
                <hr />
              </Card.Text>
            ) : null}            
            <ul>
              {recipe.ingredients
                ? recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))
                : null}
            </ul>
            <hr />
            <ol>
              {recipe.instructions[0].steps
                ? recipe.instructions[0].steps.map((instruction,i) => (
                    <li key={i}>{instruction}</li>
                  ))
                : null}
            </ol>
          </Col>
        </Row>
      </Card>
    :
    null }
    </Col>
  );
};

export default FullRecipe;
