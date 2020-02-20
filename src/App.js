import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assests/styles/style.scss';

import Header from './components/header'
import Home from './pages/home';
import Shop from './pages/shop';
import Cart from './pages/cart';

function App() {
  return (
      <Router>
          <Header>Header</Header>
          <Switch>
              <Route path="/home">
                  <Home />
              </Route>
              <Route path="/shop">
                  <Shop />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
      </Router>
  );
}

export default App;
