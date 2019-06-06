import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./css/home.css";

import { Toolbar } from "./components/Toolbar";

import { CharacterContainer } from "./pages/Character";
import { CharactersContainer } from "./pages/Characters";
import { Home } from "./pages/Home";
import { NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="app">
        <Toolbar>
          <NavLink exact activeClassName="active" to="/">
            Главная
          </NavLink>
          <NavLink activeClassName="active" to="/characters">
            Персонажи
          </NavLink>
        </Toolbar>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/characters" component={CharactersContainer} />
          <Route exact path="/characters/:id" component={CharacterContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
