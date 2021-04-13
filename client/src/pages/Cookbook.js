import React from "react";
import RecipeCard from "../components/RecipeCard";
import UserRecipe from "../components/UserRecipe";
import SearchBar from "../components/SearchBar"
import Nav from "../components/Nav";

function CookBook(){
    return( 
    <>
        <Nav
        />
        <UserRecipe
        />
    </>
    )
};

export default CookBook;