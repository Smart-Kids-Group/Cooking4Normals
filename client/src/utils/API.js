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
  
  // Add User to Chat Engine
  createChatUser: function(email,password){
    return axios.request ({
      "method": "post",
      "url": "https://api.chatengine.io/users/",
      "headers": {
        "PRIVATE-KEY": "59100cef-4757-42cd-833f-eb357aaf89fc"
      },
      "data": {
        "username": email,
        "secret": password
      }
    })
  },

  saveUser: function(user) {
    return axios.post("/api/users/" + user);
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
