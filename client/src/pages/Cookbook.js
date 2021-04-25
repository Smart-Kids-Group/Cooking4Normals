import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import UserRecipe from "../components/UserRecipe";
import Footer from "../components/Footer";
import RecipeList from "../components/RecipelList";
import Container from "react-bootstrap/Container";
import API from "../utils/API";
import RecipeContext from "../utils/RecipeContext";
import RecipeImport from "../components/RecipeImport";

function CookBook() {
  // const [showUserRecipe, setShowUserRecipe] = useState(false);
  // const [showSearchBar, setShowSearchBar] = useState(false);
  const { recipes, setRecipes } = useContext(RecipeContext);

  useEffect(() => {
    loadRecipes();
  }, []);

  function loadRecipes() {
    API.getRecipes()
      .then((res) => {
        setRecipes(res.data);
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Row className="bg absolute">
        <Col sm={3}>
          <UserRecipe />
          <hr/>
          <RecipeImport />
        </Col>
        <Col sm={8}>
          <Container className="CB">
            <h1 className="text-center">Personal Cookbook</h1>
            <br></br>

            <RecipeList data={recipes} />
          </Container>
          
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default CookBook;
