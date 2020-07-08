import React from "react";
import "./App.css";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import LoginContextProvider from "./Context/LoginContext";
import Navbar from "./Components/Navbar";
import Admin from "./Components/Admin";

axios.defaults.baseURL = "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <LoginContextProvider>
        {" "}
        <BrowserRouter>
          <Navbar />
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
        </BrowserRouter>
      </LoginContextProvider>
    </div>
  );
}

export default App;
