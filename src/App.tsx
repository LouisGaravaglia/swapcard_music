import React from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import logo from './logo.svg';
import './App.css';
import Navbar from "./Navbar";
import SearchResults from "./SearchTest";
import Home from "./Home";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com/"
})

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <Navbar /> */}
      {/* <SearchResults /> */}
      <Home />

</ApolloProvider>
  );
}

export default App;
