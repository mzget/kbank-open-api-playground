import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Shop from "Pages/Shop";
import Checkout from "Pages/Checkout";

function About() {
  return <h2>About</h2>;
}

export default function Routes() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/">
            <Shop />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
