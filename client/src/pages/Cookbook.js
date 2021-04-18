import React, { useContext, useEffect } from "react";
import UserRecipe from "../components/UserRecipe";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import SavedRecipe from "../components/SavedRecipe";
import RecipeList from "../components/RecipelList"
import Container from "react-bootstrap/Container"
import API from "../utils/API";
import RecipeContext from "../utils/RecipeContext";

 function CookBook() {
  // const [showUserRecipe, setShowUserRecipe] = useState(false);
  // const [showSearchBar, setShowSearchBar] = useState(false);
  const { recipes, setRecipes } = useContext(RecipeContext)

 useEffect (() => {
   loadRecipes();
 },[])
 
  function loadRecipes() {
    API.getRecipes()
    .then (res => {
      setRecipes(res.data)
      console.log(recipes)
    })
    .catch((err) => console.log(err));
  }

  
return (
    <>
        <Container className="bg" absolute>
          <h1 className="text-center">Personal Cookbook</h1>
          <br></br>

          {/* <SearchBar />
          <UserRecipe /> */}
          <RecipeList data={recipes}/>
        </Container>
        <Footer />
    </>
  );
}

export default CookBook;
