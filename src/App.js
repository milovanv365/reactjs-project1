import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './assets/styles/style.scss';

import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/Home';
import Cart from './pages/Cart';
import TouchStableInch from './pages/TouchStableInch';
import TouchStableSoftware from "./pages/TouchStableSoftware";
import TouchStableEquipment from "./pages/TouchStableEquipment";

function App() {
  return (
      <Router>
          <Header>Header</Header>
          <Switch>
              <Route path="/home">
                  <Home />
              </Route>
              <Route path="/touchstable/inches">
                  <TouchStableInch />
              </Route>
              <Route path="/touchstable/software">
                  <TouchStableSoftware />
              </Route>
              <Route path="/touchstable/equipment">
                  <TouchStableEquipment />
              </Route>
              <Route path="/cart">
                  <Cart />
              </Route>
              <Route path="/">
                  <Home />
              </Route>
          </Switch>
          <Footer>Footer</Footer>
      </Router>
  );
}

export default App;
