import axios from "axios";

export default {
  // search for new recipes
  searchRecipes: function(query){
    return axios({
    "method": "GET",
    "url": `https://recipe-puppy.p.rapidapi.com/?${query}`,  
    "headers": {
        "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"}
    })
    },
    // gets all recipes from the DB
  getRecipes: function() {
    return axios.get("/api/recipes");
  },
  // Gets the recipe with the given id
  getRecipe: function(id) {
    return axios.get("/api/recipes/" + id);
  },
  // Deletes the recipe with the given id
  deleteRecipe: function(id) {
    return axios.delete("/api/recipes/" + id);
  },
// import Recipe into Cookbook
  importRecipeInfo: function(recipeURL){
    return axios.request ({
      "method": "POST",
      "url": "https://mycookbook-io1.p.rapidapi.com/recipes/rapidapi",
      "headers": {
        "content-type": "text/plain",
        "x-rapidapi-key": "5c31647492msh818660de1066881p1c2b68jsn1ca367121afe",
        "x-rapidapi-host": "mycookbook-io1.p.rapidapi.com"
      },
      "data": recipeURL
    })
  },
  // Saves a recipe to the database
  saveRecipe: function(recipe) {
    let recipeData = {
      name: recipe.name,
      description: recipe.description,
      ingredients: recipe["original-ingredients"],
      instructions: recipe["original-instructions"],
      href: recipe.url,
      image: recipe.images[0]
    };
    return axios.post("/api/recipes", recipeData);
  }
};
