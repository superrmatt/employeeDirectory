import React, { Component } from "react";
import {BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./utils/Home";
import Container from "./components/Container";
import Header from "./components/Header";

function App() {

    return (
      <Router>
        <div>
          <Header />
          <Container>
            <Route exact path ="/employee-directory" component={Home}/>
            <Home />
          </Container>
        </div>
      </Router>

    );
}

export default App;