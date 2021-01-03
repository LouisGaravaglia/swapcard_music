import React from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

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

const query = gql`
  {
     search {
      artists(query: "The Beatles") {
        nodes {
          name
        }
      }
    }
  }
`

const SearchResults: React.FC  = () => {
 const {data, loading, error} = useQuery<QueryData>(query);

 let results;

  if (data) {
    console.log("this is my data", data.search.artists.nodes);
    results = data.search.artists.nodes;
  }
 

 if (loading) return <p>Loading ...</p>;
 if (error) return <p>Error</p>;

 return (
   <>
   <p className="artistResults">Results:</p>
    <div>
      {results && results.map(artist => <p>{artist.name}</p>)}
    </div>
   </>
 )



}


// const SearchResults: React.FC <Props> = ({children}) => {
//   <Query query={}
//   >
//     {({loading, error, data}) => {
//       if (loading) return <p>Loading...</p>
//     }}

//   </Query>
// }

export default SearchResults