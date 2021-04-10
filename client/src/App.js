import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ChatEngine } from 'react-chat-engine';
import './App.css';
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import SearchResults from "./pages/SearchResults";

const App = () => {
  return(
    <ChatEngine 
        height="100vh"
        projectID="bbe806e8-81f3-4f62-92b4-957850212ca6"
        userName="PonderHavok"
        userSecret="1234"

    />
  )
}
// function App() {
//   return (
//     <Router>
//       <div>
//         <Nav />
//         <Switch>
//           <Route exact path={["/"]}>
//             <SearchResults />
//           </Route>
//           <Route exact path="/books/:id">
//             <Detail />
//           </Route>
//           <Route>
//             <NoMatch />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

export default App;
