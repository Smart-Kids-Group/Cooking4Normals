import React from "react";
import RecipeCard from "../components/RecipeCard";
import UserRecipe from "../components/UserRecipe";
import Nav from "../components/Nav";

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