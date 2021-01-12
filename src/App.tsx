import React, {useState} from "react";
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import './App.css';
import Routes from "./Routes";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const client = new ApolloClient({
  uri: "https://graphbrainz.herokuapp.com/"
  // uri: "https://spotify-api-graphql-console.herokuapp.com/"
})

function App() {
  const [expand, setExpand] = useState(false);

  return (
    <ApolloProvider client={client}>
      <Navbar expand={expand} setExpand={setExpand}/>
      <Routes />
      <Sidebar expand={expand}/>
    </ApolloProvider>
  );
};

export default App;
