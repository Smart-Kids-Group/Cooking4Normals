import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Auth from "./pages/Authentication";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import SearchResults from "./pages/SearchResults";
import CookBook from "./pages/Cookbook";
import Navbar from "./components/Navbar";
import {ProtectedRoute} from "./utils/protectedRoute";
import { auth } from './utils/firebase';
import UserContext from "./utils/UserContext";
import RecipeContext from "./utils/RecipeContext";




const App = (props) => {

  const [recipes, setRecipes] = useState([]);
const [recipeData, setRecipeData] = useState({})
  
 const [userProfile, setUserProfile] = useState({
   email: "",
   password:"",
   screenName: "",
   fullName: "",
   imageURL: "",
   userId: ""
 }) 
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
       if (!user) props.history.push('/')
    })
 }, [])


  return (
    <UserContext.Provider value = {{userProfile, setUserProfile}} >
      <RecipeContext.Provider value = {{recipes, setRecipes, recipeData, setRecipeData}}>
    <Router>
      <div>

    <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign-up">
            <Auth />
          </Route>
          <ProtectedRoute exact path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/video" component={Video} />
          <ProtectedRoute exact path="/search" component={SearchResults} />
          <ProtectedRoute exact path="/chat" component={Chat} />
          <ProtectedRoute exact path="/cookbook" component={CookBook} />
        </Switch>
      </div>
    </Router>
    </RecipeContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
