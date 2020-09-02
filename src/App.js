import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import PropertyList from "./PropertyList";
import EditProperty from "./EditProperty";
import SpaceLaunchList from "./SpaceXList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={SpaceLaunchList} exact />
        <Route path="/edit/:id" component ={EditProperty} exact/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
