import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;