import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
import RecipeContext from "../../utils/RecipeContext";
import API from "../../utils/API"


const FullRecipe = () => {
  
const { recipeData, setRecipeData } = useContext(RecipeContext);

useEffect (() => {
  loadRecipes();
},[])

 function loadRecipes() {
   API.getRecipe(recipeData.name)
   .then (res => {
     setRecipeData(res.data)
     console.log(recipeData)
   })
   .catch((err) => console.log(err));
 }

    return (
        <Col md={12}>
            <Card className="mb-4 w-60 shadow-sm">
                <Row>   
                <Col md={3}>
                    {
                        (recipeData.image)
                        ? <Card.Text 
                            className="float-left"
                        ><Image 
                        src={recipeData.image}
                        alt={recipeData.name}
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
                        {recipeData.name}
                    </Card.Title>
                    <br />
                    {
                        (recipeData.description)
                        ? <Card.Text 
                            className="float-left"
                        > {recipeData.description}
                        </Card.Text>
                        : null
                    }
                    <ul>
                    {
                      (recipeData.ingredients)
                      ? recipeData.ingredients.map((ingredient) => <li>{ingredient}</li>)
                      : null
                    }
                    </ul>
                    { 
                      (recipeData.href)
                      ?
                    <a className="btn-primary float-right" rel="noreferrer noopener" target="_blank" href={recipeData.href}>Link to Recipe Source</a>
                    : null
                    }
                    <ol>
                    {
                      (recipeData.instructions)
                      ? recipeData.instructions.map(instruction => <li>{instruction}</li>)
                      : null
                    }
                    </ol>
                   
                    </Col>
                    </Row>
            </Card>
        </Col>
    );
}

export default FullRecipe;