import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import SearchBar from "./SearchBar";

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

//HOME COMPONENT
const Home: React.FC  = () => {
  const [searchQuery, setSearchQuery] = useState("The Beatles");
  let results;
  // let results = {
  //   'data': {
  //     'search': {
  //       'artists': {
  //         'nodes': {
  //           'name': ''
  //         }
  //       }
  //     }
  //   }
  // };
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
  `
  //HANDLE SUBMIT FUNCTION FOR SEARCH BAR
  const handleSubmit = (searchVal: string) => {
    console.log("This is searchVal: ", searchVal);
    setSearchQuery(searchVal);
  }

  //PASSING THE QUERY TO GRAPHQL
  const {data, loading, error} = useQuery<QueryData>(query, {
    variables: { "episode": searchQuery },
  });

  if (data) {
    console.log("this is my data", data.search.artists.nodes);
    results = data.search.artists.nodes;
    console.log("this is artists name", results[0].name);
  };
 
  if (loading) return <p>Loading ...</p>;
  
  if (error) {
    console.log(error);
    return <p>Error</p>

  };

 
  let i = 0;

 return (
   <>
   <p>Hello</p>
   <SearchBar handleSubmit={handleSubmit} typedVal={searchQuery}/>
    <div>
      {results && results.map(node => <p className={`${i++}`}>{node.name}</p>)}
    </div>
   </>
 )

}


export default Home