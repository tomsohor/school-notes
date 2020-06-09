import React from "react";
import Welcome from "./component/Welcome";
import SignUp from "./component/SingUp";
import Login from "./component/Login";
import "./App.css";
import { Route } from "react-router-dom";
import Hello from "./component/hello";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Welcome} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/hello" component={Hello} />
    </div>
  );
}

export default App;
