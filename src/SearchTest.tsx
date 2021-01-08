import React from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";

interface QueryData {
  search: {
    artists: {
      nodes: [
        obj: {
          name: string
          works: {
            nodes: [
              obj: {
                title: string
              }
            ]
          }
        }
      ]
    }
  }
}

const query = gql`
  {
     search {
      artists(query: "Tame Impala") {
        nodes {
          name
          works {
            nodes {
              title
            }
          }
        }
      }
    }
  }
`

const SearchTest: React.FC  = () => {
 const {data, loading, error} = useQuery<QueryData>(query);

 let results;

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
   <p className="artistResults">Results:</p>
    <div>
      {results && <p>{results[0].name}</p>}
      {results && <div>{results[0].works.nodes.map(item => <p>{item.title}</p>)}</div>}
    </div>
   </>
 )

}


export default SearchTest


// import React from "react";
// import {useQuery} from "@apollo/react-hooks";
// import gql from "graphql-tag";

// interface QueryData {
//   search: {
//     artists: {
//       nodes: [
//         obj: {
//           name: string
//           discogs: {
//             images: [
//               obj: {
//                 url: string
//               }
//             ]
//           }
//           works: {
//             nodes: [
//               obj: {
//                 title: string
//               }
//             ]
//           }
//         }
//       ]
//     }
//   }
// }

// const query = gql`
//   {
//      search {
//       artists(query: "Tame Impala") {
//         nodes {
//           name
//           discogs {
//             images {
//               url
//             }
//           }
//           works {
//             nodes {
//               title
//             }
//           }
//         }
//       }
//     }
//   }
// `

// const SearchTest: React.FC  = () => {
//  const {data, loading, error} = useQuery<QueryData>(query);

//  let results;

//   if (data) {
//     console.log("this is my data", data.search.artists.nodes);
//     results = data.search.artists.nodes;
//     console.log("this is artists name", results[0].name);
    
//   }
 

//  if (loading) return <p>Loading ...</p>;
//  if (error) {
//    console.log(error);
//    return <p>Error</p>

//  }

//  return (
//    <>
//    <p className="artistResults">Results:</p>
//     <div>
//       {results && <img src={results[0].discogs.images[0].url}/>}
//       {results && <p>{results[0].name}</p>}
//       {results && <div>{results[0].works.nodes.map(item => <p>{item.title}</p>)}</div>}
//     </div>
//    </>
//  )

// }


// export default SearchTest