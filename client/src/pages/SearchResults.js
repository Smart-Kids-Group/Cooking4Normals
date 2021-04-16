import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"
import API from "../utils/API";
// import { Link } from "react-router-dom";

function SearchResults() {

  // Setting our component's initial state
  const [recipes, setRecipes] = useState([]);
  const [recipeSearch, setRecipeSearch] = useState({ 
    query: "q=pizza",
    nameSearch: "pizza",
    ingredientSearch: ""
  });
  

  
  useEffect(() => {
    loadRecipes()
  }, [])

 
  function loadRecipes() {
<<<<<<< Updated upstream
    API.searchRecipes(recipeSearch.query)
      .then(res => 
        {setRecipes(res.data.results);
=======
    API.searchRecipes(recipeSearch)
      .then(res => 
        {setRecipes(res.data);
>>>>>>> Stashed changes
        console.log(recipes)}
      )
      .catch(err => console.log(err));
  };
  

  
  function handleInputChange(event) {
    const { value, name } = event.target;
       setRecipeSearch({...recipeSearch, [name]: value})
};

  function handleSearchSubmit(event){
    event.preventDefault();
    let query="";
    if (recipeSearch.nameSearch && recipeSearch.ingredientSearch){
      query = `q=${recipeSearch.nameSearch}i=${recipeSearch.ingredientSearch}`;
    } else if (recipeSearch.ingredientSearch){
      query = `i=${recipeSearch.ingredientSearch}`;
    } else {
      query = `q=${recipeSearch.nameSearch}`;
    }
      setRecipeSearch({...recipeSearch, query: query})
      console.log(recipeSearch.query)
      loadRecipes(recipeSearch.query);
    };
  


function importRecipe(recipeURL) {
  if (recipeURL) {
    API.importRecipeInfo(recipeURL)
    .then (res => {
      let recipe = res.data[0];
      API.saveRecipe(recipe )
          .then(res => console.log(res, recipe))
          .catch(err => console.log(err));
  })
}}


  return(
 <>
    <SearchBar 
      handleInputChange={handleInputChange}
      handleSearchSubmit={handleSearchSubmit}
      />
<<<<<<< Updated upstream
    
    {recipes
            ? recipes.map((recipe, i) => (
              <RecipeCard 
                key={i}
                data={recipe}
                handleRecipeSubmit={importRecipe}
                />    
            ))
            : null}
=======
    <RecipeCard
      thumbnail={""}
      title={"Tasty Recipe"}
      ingredients={"Lots of good stuff"}
      href={"/NoMatch"} 
      handleRecipeSubmit={handleRecipeSubmit}
      />
>>>>>>> Stashed changes
      </>
  )

}

export default SearchResults;

