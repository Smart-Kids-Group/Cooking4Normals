import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


const FullRecipe = (props) => {
 let i = props.indexNum
 console.log(props.data[i])
 const recipe = props.data[i];
  return (
  
    
  <Col md={12}>
    {props.data[i]?
      <Card className="mb-4 w-60 shadow-sm">
        <Row>
          <Col md={12} class="Impo">
            <Card.Title className="text-center">{recipe.name}</Card.Title>
            <br />
            {recipe.description ? (
              <Card.Text className="float-left">
                {" "}
                {recipe.description}
              </Card.Text>
            ) : null}
            <ul>
              {recipe.ingredients
                ? recipe.ingredients.map((ingredient, i) => (
                    <li key={i}>{ingredient}</li>
                  ))
                : null}
            </ul>
            {recipe.href ? (
              <a
                className="btn-primary float-right"
                rel="noreferrer noopener"
                target="_blank"
                href={recipe.href}
              >
                Link to Recipe Source
              </a>
            ) : null}
            <ol>
              {recipe.instructions.steps
                ? recipe.instructions.steps.map((instruction,i) => (
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
