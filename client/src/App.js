import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Profile from "./pages/Profile"
import Video from "./pages/Video"
import SearchResults from "./pages/SearchResults";
import CookBook from "./pages/CookBook";

const App = () => {
  return (
    <Router>
      <div>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/feed">
            <Feed />
            </Route>
          <Route exact path="/profile">
           <Profile />
           </Route>
           <Route exact path="/video">
            <Video />
            </Route>
            <Route exact path="/Chat">
             <ChatEngine 
        height="100vh"
        projectID="bbe806e8-81f3-4f62-92b4-957850212ca6"
        userName="PonderHavok"
        userSecret="1234"

    />
            </Route>
            <Route exact path="/search">
            <SearchResults />
            </Route>
            <Route exact path="/cookbook">
            <CookBook />
            </Route>
        </Switch>
      </div>
    </Router>
  );
  };
export default App;
