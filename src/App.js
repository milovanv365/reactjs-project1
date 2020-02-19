import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/header'
import Home from './pages/home';
import Shop from './pages/shop'

function App() {
  return (
      <div>
          <Header>Header</Header>
          <Router>
              <div className="App">
                  <Switch>
                      <Route path="/home">
                          <Home />
                      </Route>
                      <Route path="/shop">
                          <Shop />
                      </Route>
                      <Route path="/">
                          <Home />
                      </Route>
                  </Switch>
              </div>
          </Router>
      </div>
  );
}

export default App;
