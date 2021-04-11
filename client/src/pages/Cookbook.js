import React from "react";
import RecipeCard from "../components/RecipeCard";
import UserRecipe from "../components/UserRecipe";
import SearchBar from "../components/SearchBar"

function CookBook(){
    return( 
    <>
        <SearchBar
        />
        <UserRecipe
        />
    </>
    )
};

export default CookBook;