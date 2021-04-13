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
    API.searchRecipes(recipeSearch.query)
      .then(res => 
        {setRecipes(res.data);
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
  

function handleRecipeSubmit(recipe) {
  if (recipe.title) {
      API.saveRecipe(
          {
              title: recipe.title,
              description: recipe.description,
              ingredients: recipe.ingredients,
              image: recipe.image,
              href: recipe.href
          }
      )
          .then(res => console.log(res))
          .catch(err => console.log(err));
  }
}
  return(
 <>
    <SearchBar 
      handleInputChange={handleInputChange}
      handleSearchSubmit={handleSearchSubmit}
      />
    <RecipeCard
      thumbnail={""}
      title={"Tasty Recipe"}
      ingredients={"Lots of good stuff"}
      href={"/NoMatch"} 
      handleRecipeSubmit={handleRecipeSubmit}
      />
      </>
  )

}

export default SearchResults;

{/* <div class='card' style='width: 600px;'>
   <div class = 'card-divider'>
   <a id='card-title-${i}' href= '#'></a>
   </div>
   <img src='./assets/cook.jpg' id='thumb-${i}' style='height: 75px; width:75px; float: left;'>
     <div class='card-section' style='float: right;'><a class = 'button save' id='${i}'>Save to Cookbook</a
     ><p id='ing-${i}'></p>
     </div>
     </div>` */}