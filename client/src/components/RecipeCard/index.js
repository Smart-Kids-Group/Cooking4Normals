import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button"

const RecipeCard = (props) => {

    return (
        <Col md={12}>
            <Card className="mb-4 w-60 shadow-sm" page={props.page}>
                <Row>   
                <Col md={3}>
                    {
                        (props.thumbnail)
                        ? <Card.Text 
                            className="float-left"
                        ><Image 
                        src={props.thumbnail}
                        alt="recipe title" 
                        />
                        </Card.Text>
                        : <Card.Text
                            className="float-left"
                        >
                            "https://placehold.it/150-x150"
                        </Card.Text>
                    }
                    </Col>
                    <Col md={9}>
                    <Card.Title 
                        className="text-center"
                    >
                        {props.title}
                    </Card.Title>
                    <br />
                    <Card.Text>
                        {props.ingreedients || "No ingredients listed."}
                    </Card.Text>
                    <a className="btn-primary float-right" rel="noreferrer noopener" target="_blank" href={props.href}></a>
                    <Button 
                                className="save-btn" 
                                size="sm" 
                                variant="outline-secondary" 
                                onClick={() => props.handleRecipeSubmit(props.data)}
                                >
                                    Save
                            </Button>
                    </Col>
                    </Row>
            </Card>
        </Col>
    );
}

export default RecipeCard;