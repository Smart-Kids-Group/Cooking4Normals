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
                        (props.data.thumbnail)
                        ? <Card.Text 
                            className="float-left"
                        ><Image 
                        src={props.data.thumbnail}
                        alt="recipe title" 
                        />
                        </Card.Text>
                        : <Card.Text
                            className="float-left"
                        >
                            "https://placehold.it/150"
                        </Card.Text>
                    }
                    </Col>
                    <Col md={9}>
                    <Card.Title 
                        className="text-center"
                    >
                        {props.data.title}
                    </Card.Title>
                    <br />
                    {
                        (props.data.description)
                        ? <Card.Text 
                            className="float-left"
                        > {props.data.description}
                        </Card.Text>
                        : null
                    }

                    <Card.Text>
                        {props.data.ingredients || "No ingredients listed."}
                    </Card.Text>
                    <a className="btn-primary float-right" rel="noreferrer noopener" target="_blank" href={props.data.href}></a>
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