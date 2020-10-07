import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, withRouter } from "react-router-dom";
import homePage from "./components/homepage.js"
import aboutPage from "./components/aboutpage.js"
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {location} = this.props
    return <div className="App"><Switch>
      <Route path="/" exact component={homePage} />
      <Route path="/aboutPage" exact component={aboutPage}/>
      </Switch></div>;
  }
}

export default App;
