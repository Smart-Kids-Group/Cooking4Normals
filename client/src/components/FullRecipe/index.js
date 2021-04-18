import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";


const FullRecipe = (props) => {
  console.log(props)
    return (
        <Col md={12}>
            {/* <Card className="mb-4 w-60 shadow-sm">
                <Row>   
                <Col md={3}>
                    {
                        (props.recipe.image)
                        ? <Card.Text 
                            className="float-left"
                        ><Image 
                        src={props.recipe.image}
                        alt={props.recipe.name}
                        />
                        </Card.Text>
                        : <Card.Text
                            className="float-left"
                        ><Image 
                        src="https://via.placeholder.com/150"
                        alt="placeholder" 
                        />
                        </Card.Text>
                    }
                    </Col>
                    <Col md={9}>
                    <Card.Title 
                        className="text-center"
                    >
                        {props.recipe.name}
                    </Card.Title>
                    <br />
                    {
                        (props.recipe.description)
                        ? <Card.Text 
                            className="float-left"
                        > {props.recipe.description}
                        </Card.Text>
                        : null
                    }
                    <ul>
                    {
                      (props.recipe.ingredients)
                      ? props.recipe.ingredients.map((ingredient) => <li>{ingredient}</li>)
                      : null
                    }
                    </ul>
                    { 
                      (props.recipe.href)
                      ?
                    <a className="btn-primary float-right" rel="noreferrer noopener" target="_blank" href={props.href}>Link to Recipe Source</a>
                    : null
                    }
                    <ol>
                    {
                      (props.recipe.instructions)
                      ? props.recipe.instructions.map(instruction => <li>{instruction}</li>)
                      : null
                    }
                    </ol>
                   
                    </Col>
                    </Row>
            </Card> */}
        </Col>
    );
}

export default FullRecipe;