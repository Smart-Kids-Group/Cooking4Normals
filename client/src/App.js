import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Feed from "./pages/Feed";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import SearchResults from "./pages/SearchResults";
import CookBook from "./pages/CookBook";
import Nav from "./components/Nav";


const App = () => {
  return (
    <Router>
      <div>
        <Nav/>
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
          <Route exact path="/search">
            <SearchResults />
          </Route>
          <Route exact path="/chat">
            <Chat />
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
