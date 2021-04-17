import React from "react";
import RecipeCard from "../components/RecipeCard";
import UserRecipe from "../components/UserRecipe";
import Footer from "../components/Footer/index";

function CookBook() {
  return (
    <>
      <div className="bg">
        <UserRecipe />
        <Footer />
      </div>
    </>
  );
}

export default CookBook;
