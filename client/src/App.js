import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";

import Navbar from "./components/layout/Navbar";
import Index from "./components/index/Index";
import Add from "./components/add/AddListing";
import SingleListing from "./components/singleListing/SingleListing";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Index} />
            <Route exact path="/add" component={Add} />
            <Route exact path="/listings/:id" component={SingleListing} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
