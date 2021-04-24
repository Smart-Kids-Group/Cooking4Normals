import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import Footer from "../components/Footer/index";

function SearchResults() {
  // Setting our component's initial state
  const [recipes, setRecipes ] = useState([])
  const [recipeSearch, setRecipeSearch] = useState({
    query: "q=pizza",
    nameSearch: "",
    ingredientSearch: "",
  });

  useEffect(() => {
    handleRandomSearch();
  }, []);

  function loadRecipes() {
    API.searchRecipes(recipeSearch.query)
      .then((res) => {
        setRecipes(res.data.results);
      })
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { value, name } = event.target;
    setRecipeSearch({ ...recipeSearch, [name]: value });
  }

  function handleSearchSubmit(event) {
    event.preventDefault();
    let query = "";
    if (recipeSearch.nameSearch && recipeSearch.ingredientSearch) {
      query = `q=${recipeSearch.nameSearch}i=${recipeSearch.ingredientSearch}`;
    } else if (recipeSearch.ingredientSearch) {
      query = `i=${recipeSearch.ingredientSearch}`;
    } else {
      query = `q=${recipeSearch.nameSearch}`;
    }
    setRecipeSearch({ ...recipeSearch, query: query });
    console.log(recipeSearch.query);
    loadRecipes(recipeSearch.query);
  }

  function handleRandomSearch() {
    const pageID = Math.floor (Math.random() *100);
    API.randomRecipes(pageID).then(res => {
      setRecipes (res.data.results)
    })
    .catch((err) => console.log(err));
  }

  function importRecipe(recipeURL) {
    if (recipeURL) {
      API.importRecipeInfo(recipeURL).then((res) => {
        let recipe = res.data[0];
        API.saveRecipe(recipe)
          .then((res) => console.log(res, recipe))
          .catch((err) => console.log(err));
      });
    }
  }

  return (
    <>
      <div className="bg absolute">
        <SearchBar
          handleInputChange={handleInputChange}
          handleSearchSubmit={handleSearchSubmit}
          handleRandomSearch={handleRandomSearch}
        />

        {recipes
          ? recipes.map((recipe, i) => (
              <RecipeCard
                key={i}
                data={recipe}
                handleRecipeSubmit={importRecipe}
              />
            ))
          : null}
        <Footer />
      </div>
    </>
  );
}

export default SearchResults;
