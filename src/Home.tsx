import React from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import SearchBar from "./SearchBar";


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




const Home: React.FC  = () => {




 let results;
 let    query = gql`
  {
     search {
      artists(query: "") {
        nodes {
          name
        }
      }
    }
  }
`

  

 const handleSubmit = (searchVal: string) => {
   query = gql`
  {
     search {
      artists(query: ${searchVal}) {
        nodes {
          name
        }
      }
    }
  }
`


 }

     const {data, loading, error} = useQuery<QueryData>(query);

    if (data) {
    console.log("this is my data", data.search.artists.nodes);
    results = data.search.artists.nodes;
    console.log("this is artists name", results[0].name);
    
  }
 

 if (loading) return <p>Loading ...</p>;
 if (error) {
   console.log(error);
   return <p>Error</p>

 }

 return (
   <>
   <SearchBar handleSubmit={handleSubmit}/>
    <div>
      {results && results.map(node => <p>{node.name}</p>)}
    </div>
   </>
 )

}


export default Home