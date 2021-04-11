import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard"
import SearchBar from "../components/SearchBar"
// import SaveBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

function SearchResults() {

  // Setting our component's initial state
  const [recipes, setRecipes] = useState([])
  const [recipeSearch, setRecipeSearch] = useState({})

  // Load all books and store them with setBooks
  useEffect(() => {
    loadRecipes()
  }, [])

  // Loads all books and sets them to books
  function loadRecipes() {
    API.searchRecipes(recipeSearch)
      .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  };


  return(
 <>
    <SearchBar
      />
    <RecipeCard
      thumbnail={"https://placehold.it/300x300"}
      title={"Tasty Recipe"}
      ingredients={"Lots of good stuff"}
      href={"/NoMatch"} />
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