import React from "react";
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeCard from "../components/RecipeCard";
import UserRecipe from "../components/UserRecipe";
<<<<<<< Updated upstream
import Footer from "../components/Footer/index";
=======
import Nav from "../components/Nav";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer/index";
import SavedRecipe from "../components/SavedRecipe";
>>>>>>> Stashed changes

function CookBook() {
  return (
    <>
        {/* <Nav /> */}
        <div className="container mb-5 mt-5">
            <h1 className="text-center">Personal Cookbook</h1>
            <br></br>
        
        <SearchBar/>
        <UserRecipe/>
        <SavedRecipe/>
        <Footer/>
        </div>
        
    </>
    );
}

export default CookBook;
