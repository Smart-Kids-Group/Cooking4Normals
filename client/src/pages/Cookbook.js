import React, { useContext, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Footer from "../components/Footer";
import RecipeList from "../components/RecipelList";
import API from "../utils/API";
import RecipeContext from "../utils/RecipeContext";
import UserContext from "../utils/UserContext";


function CookBook() {
  // const [showUserRecipe, setShowUserRecipe] = useState(false);
  // const [showSearchBar, setShowSearchBar] = useState(false);
  const { recipes, setRecipes } = useContext(RecipeContext);
  const { userProfile } = useContext(UserContext);

  useEffect(() => {
    loadRecipes(userProfile.email);
  }, []);

  function loadRecipes() {
    API.getRecipes(userProfile.email)
      .then((res) => {
        setRecipes(res.data);
        console.log(res)
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <Row className="bg absolute">
        <Col className="CB">
            

            <RecipeList data={recipes} />
          
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default CookBook;
