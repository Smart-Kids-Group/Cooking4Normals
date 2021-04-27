import React, { useState, useEffect, useContext } from "react";
import RecipeCard from "../components/RecipeCard";
import SearchBar from "../components/SearchBar";
import API from "../utils/API";
import Footer from "../components/Footer/index";
import UserContext from "../utils/UserContext";


function SearchResults() {
  // Setting our component's initial state
  const [recipes, setRecipes ] = useState([])
  const [recipeSearch, setRecipeSearch] = useState({
    query: "",
    nameSearch: "",
    ingredientSearch: "",
  });
  const { userProfile } = useContext(UserContext)

  useEffect(() => {
    loadRecipes(recipeSearch.query);
  }, [recipeSearch.query]);

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
        let recipe = {
          name: res.data[0].name,
          description: res.data[0].description,
          ingredients: res.data[0]["original-ingredients"],
          instructions: res.data[0]["original-instructions"],
          href: res.data[0].url,
          userName: userProfile.email
         };
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
          handleInputChange={e=>handleInputChange(e)}
          handleSearchSubmit={e =>handleSearchSubmit(e)}
          handleRandomSearch={() => handleRandomSearch}
        />

        {recipes
          ? recipes.map((recipe, i) => (
              <RecipeCard
                key={i}
                data={recipe}
                handleRecipeSubmit={recipeURL => importRecipe(recipeURL)}
              />
            ))
          : null}
        <Footer />
      </div>
    </>
  );
}

export default SearchResults;
