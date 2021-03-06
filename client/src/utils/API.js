import axios from "axios";


const privateToken = process.env.REACT_APP_PRIVATE_API_KEY;
const rapidToken = process.env.REACT_APP_RAPID_API_KEY

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

randomRecipes: function(pageID){
  return axios({
  "method": "GET",
  "url": `https://recipe-puppy.p.rapidapi.com/?p=${pageID}`,  
  "headers": {
      "x-rapidapi-key": rapidToken,
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com"},
})
},
    // gets all recipes from the DB
  getRecipes: function(email) {
    return axios.get("/api/recipes/"+ email);
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

        "x-rapidapi-key": rapidToken,

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

  createUser: function(user) {
    let userData = {
      fullName: user.fullName,
      screenName: user.screenName,
      imageURL: user.imageURL,
      email: user.email,
      password: user.password,
      profileDescription: user.profileDescription,
      friends: user.friends,
      userId: user.uid,
      favoriteCuisines: user.favoriteCuisines
    }
    return axios.post("/api/users/", { userData });
  },
  
  
  updateUser: function(user) {
    let userData = {
      fullName: user.fullName,
      screenName: user.screenName,
      imageURL: user.imageURL,
      email: user.email,
      password: user.password,
      profileDescription: user.profileDescription,
      friends: user.friends,
      userId: user.uid,
      favoriteCuisines: user.favoriteCuisines
    }
    return axios.post("/api/users/" + user.email, { userData });
  },

  getUser: function(id) {
    return axios.get("/api/users/" + id);
  },
  
  // Saves a recipe to the database
  saveRecipe: function(recipe) {
    return axios.post("/api/recipes", recipe);
  },
 
};
