import "./App.css";
import React from "react";
import Header from "./components/header/Header";
import Logins from "./components/Logins/SignUp";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from "react-router-dom";

import StackOverFlow from "./components/StackOverFlow";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/signup" component={Logins} />
          <Route exact path="/" component={StackOverFlow} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
