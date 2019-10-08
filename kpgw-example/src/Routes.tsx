import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Shop from 'Pages/Shop'
import Checkout from 'Pages/Checkout'


function About() {
    return <h2>About</h2>;
  }
  
export default function Routes() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/checkout">Checkout</Link>
              </li>
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
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