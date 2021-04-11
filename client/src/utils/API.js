import axios from "axios";

export default {
  // Gets all books
  searchRecipes: function(query){
    return axios({
    "method": "GET",
    "url": `https://recipe-puppy.p.rapidapi.com/?${query}`,  
    "headers": {
        "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"}
    })
    },
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  // Gets the book with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the book with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
  // Saves a book to the database
  saveRecipe: function(recipeData) {
    return axios.post("/api/recipe", recipeData);
  }
};
