import React, { useState, useEffect } from "react";
import RecipeCard from "../components/RecipeCard"
// import SaveBtn from "../components/DeleteBtn";
// import Jumbotron from "../components/Jumbotron";
// import API from "../utils/API";
// import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";

function SearchResults() {

  return(
    <RecipeCard
      thumbnail={"https://placehold.it/300x300"}
      title={"Tasty Recipe"}
      ingredients={"Lots of good stuff"}
      href={"/NoMatch"} />
  )
}

export default SearchResults;