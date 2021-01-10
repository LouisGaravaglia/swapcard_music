import React from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import './App.css';
import Routes from "./Routes";
import Navbar from "./Navbar";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com/"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Navbar />
      <Routes />
    </ApolloProvider>
  );
};

export default App;
