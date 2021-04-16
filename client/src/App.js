import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import SearchResults from "./pages/SearchResults";
import CookBook from "./pages/Cookbook";
import Navbar from "./components/Navbar";
import {ProtectedRoute} from "./components/protectedRoute";


const App = () => {

  // const [token, setToken] = useState();

  // if(!token) {
  //   return <Login setToken={setToken} /> 
  // }

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <ProtectedRoute exact path="/feed" component={Feed}>
          </ProtectedRoute>
          <ProtectedRoute exact path="/profile" component={Profile}>
          </ProtectedRoute>
          <ProtectedRoute exact path="/video">
            <Video />
            </ProtectedRoute>
          <ProtectedRoute exact path="/search">
            <SearchResults />
          </ProtectedRoute>
          <ProtectedRoute exact path="/chat">
            <Chat />
          </ProtectedRoute>
            <ProtectedRoute exact path="/cookbook">
            <CookBook />
            </ProtectedRoute>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
