import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Backpack from "./Backpack";
import Shoes from "./Shoes";
import Tshirts from "./Tshirts";
import Navbar from "./Navbar";
import Menu from "./Menu";
import Error from "./Error";

// scss style
import "../../../styles/css/dist/menu.min.css";
export default function MenuProject() {
  return (
    <main className="container">
      <div className="head">
        <h1>Our Menu</h1>
        <hr></hr>
      </div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Menu />
          </Route>
          <Route path="/shoes">
            <Shoes />
          </Route>
          <Route path="/backpack">
            <Backpack />
          </Route>
          <Route path="/Tshirt">
            <Tshirts />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </main>
  );
}
