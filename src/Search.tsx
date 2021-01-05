import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

//QUERY TYPE TO PASS TO GRAPHQL
interface QueryData {
  search: {
    artists: {
      nodes: [
        obj: {
          name: string
        }
      ]
    }
  }
}

//SEARCH COMPONENT
const Search: React.FC  = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let results : any;

  let    query = gql`
    query Artist($episode: String!) {
      search {
        artists(query: $episode) {
          nodes {
            name
          }
        }
      }
    }
  `;

  //HANDLE SUBMIT FUNCTION FOR SEARCH BAR
  const handleSubmit = (searchVal: string) => {
    console.log("This is searchVal: ", searchVal);
    setSearchQuery(searchVal);
  };

  //PASSING THE QUERY TO GRAPHQL
  const {data, loading, error} = useQuery<QueryData>(query, {
    variables: { "episode": searchQuery },
  });

  if (data) {
    console.log("this is my data", data.search.artists.nodes);
    results = data.search.artists.nodes;
    console.log("this is artists name", results[0].name);
  };

  if (error && searchQuery !== "") {
    console.log(error);
    results = [{name:"There was an error making a request for that Artist."}];
  } else if (error && searchQuery === "") {
    results = [{name: ""}];
  };

  return (
    <>
    <SearchBar handleSubmit={handleSubmit} typedVal={searchQuery}/>
    <SearchResults results={results}/>
    </>
  );
};


export default Search