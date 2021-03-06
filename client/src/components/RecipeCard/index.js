import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "./RecipeCard.css";

const RecipeCard = (props) => {
  const mystyle = {
    color: "black",
    backgroundColor: "rgba(250, 235, 215, 0.60)",
    padding: "10px",
    fontFamily: "Arial",
  };

  const savestyle = {
    color: "black",
    backgroundColor: "white 0.80)",
    fontFamily: "Arial",
    fontSize: "17px"
  };

  return (
    <Col md={8}>
      <Card style={mystyle} className="mb-4 w-60 shadow-sm cardplace" page={props.page}>
        <Row>
          <Col md={12}>
            <Card.Title className="text-center">{props.data.title}</Card.Title>
            <br />
            {props.data.description ? (
              <Card.Text className="float-left">
                {" "}
                {props.data.description}
              </Card.Text>
            ) : null}

            <Card.Text>
              {props.data.ingredients || "No ingredients listed."}
            </Card.Text>
            <a
              className="btn-outline-secondary float-right Link-butt"
              rel="noreferrer noopener"
              target="_blank"
              href={props.data.href}
       
            >
              Link to Recipe
            </a>
            <Button
              className="save-btn Save-butt"
              size="sm"
              variant="outline-secondary"
              onClick={() => props.handleRecipeSubmit(props.data.href)}
              style={savestyle}
            >
              Save Recipe
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default RecipeCard;
