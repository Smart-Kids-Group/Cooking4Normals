import axios from "axios";
const rapidToken = process.env.REACT_APP_RAPID_API_KEY
const privateToken = process.env.REACT_APP_PRIVATE_API_KEY

  export default {

  // search for new recipes
  searchRecipes: function(query){
    return axios({
    "method": "GET",
    "url": `https://recipe-puppy.p.rapidapi.com/?${query}`,  
    "headers": {
        "x-rapidapi-key": rapidToken,
        "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"},
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
        "x-rapidapi-key":rapidToken,
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
        "PRIVATE-KEY": privateToken
      },
      "data": {
        "username": email,
        "secret": password
      }
    })
  },

  saveUser: function(user) {
    let userData = {
      fullName: user.fullName,
      screenName: user.screenName,
      imageURL: user.imageURL
    }
    return axios.post("/api/users/" + user.email, { userData });
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
  },
 
};
