import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Main from "./Main";
import Home from "./Home";
import Contact from "./Contact";
import './css/bootstrap.css';
import './css/style.css';

//import logoNew from './images/fly-header-logo.svg';
// import './App.css';


/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
*/

class App extends Component {
  render() {
    return (
      <div className="App">

      <HashRouter>
<div> {/* This div is very important and has to be inside a hashrouter without a className */}
      <div className="mainMenu">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/Home">About</NavLink></li>
          <li><NavLink to="/Contact">Contact</NavLink></li>
        </ul>
      </div>

      <div className="secondContainer">
          <Route exact path="/" component={Main}/>
          <Route path="/Home" component={Home}/>
          <Route path="/Contact" component={Contact}/>
      </div>
</div>
      </HashRouter>




      </div>

    );
  }
}

export default App;
