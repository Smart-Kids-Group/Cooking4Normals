import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Auth from "./pages/Authentication";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import SearchResults from "./pages/SearchResults";
import CookBook from "./pages/Cookbook";
import Navbar from "./components/Navbar";
import {ProtectedRoute} from "./components/protectedRoute";
import { auth } from './utils/firebase';


const App = (props) => {
  
  useEffect(() => {
    auth.onAuthStateChanged(user => {
       if (!user) props.history.push('/')
    })
 }, [])

  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/auth">
            <Auth />
          </Route>
          <ProtectedRoute exact path="/feed" component={Feed} />
          <ProtectedRoute exact path="/profile" component={Profile} />
          <ProtectedRoute exact path="/video" component={Video} />
          <ProtectedRoute exact path="/search" component={SearchResults} />
          <ProtectedRoute exact path="/chat" component={Chat} />
          <ProtectedRoute exact path="/cookbook" component={CookBook} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
