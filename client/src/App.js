import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Feed from "./pages/Feed";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Video from "./pages/Video";
import Chat from "./pages/Chat";
import SearchResults from "./pages/SearchResults";


function App() {
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
            <Chat />
            </Route>
            <Route exact path="/search">
            <SearchResults />
            </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
