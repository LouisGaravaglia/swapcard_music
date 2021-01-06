import React from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import './App.css';
import Routes from "./Routes";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com/"
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
