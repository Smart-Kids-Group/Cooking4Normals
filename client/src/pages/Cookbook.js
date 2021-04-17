import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import RecipeCard from "../components/RecipeCard";
import UserRecipe from "../components/UserRecipe";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer/index";
import SavedRecipe from "../components/SavedRecipe";

function CookBook() {
  return (
    <>
      <div className="bg" absolute>
        <div className="container">
          <h1 className="text-center">Personal Cookbook</h1>
          <br></br>

          <SearchBar />
          <UserRecipe />
          <SavedRecipe />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default CookBook;
