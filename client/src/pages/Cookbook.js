import React from "react";
import RecipeCard from "../components/RecipeCard";
import UserRecipe from "../components/UserRecipe";

function CookBook(){
    return( 
    <>
        <Nav />
        <SearchBar
        />
        <UserRecipe
        />
    </>
    )
};

export default CookBook;