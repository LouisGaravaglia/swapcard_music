import React from "react";
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import ArtistDetails from "./ArtistDetails";
import SearchTest from "./SearchTest";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/"><Home /></Route>
      <Route exact path="/artist/:selectedArtist"><ArtistDetails /></Route>
      <Route exact path="/test"><SearchTest /></Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;