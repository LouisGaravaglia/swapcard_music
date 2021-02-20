import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";

//QUERY TYPE TO PASS TO GRAPHQL
// interface QueryData {
//   search: {
//     artists: {
//       nodes: [
//         obj: {
//           name: string
//            works: {
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
// };

// interface QueryData {
//   launchesPast: {
//     launch_date_local: string
//     launch_year: string
//   }
// };

// interface QueryData {
//   launchesPast: {
//     mission_name: string
//     links: {
//       article_link: string
//       video_link: string
//     }
//     rocket: {
//       rocket_name: string
//     }
//     launch_year: string
//   }
// };

interface QueryData {
  launchesPast: [
    {
    mission_name: string
    links: {
      article_link: string
      video_link: string
    }
    rocket: {
      rocket_name: string
    }
    launch_year: string
    }
  ]
};

// interface QueryData {
//   launchesPast {
//     mission_name: string
//     links {
//       article_link: string
//       video_link: string
//     }
//     rocket {
//       rocket_name: string
//     }
//     launch_year: string
//   }
//   payload(id: "") {
//     id: string
//   }
// }


//SEARCH COMPONENT
const Search: React.FC  = () => {
  const [searchQuery, setSearchQuery] = useState("");
  let results : any;

  // let query = gql`
  //   query Artist($artist: String!) {
  //     search {
  //       artists(query: $artist) {
  //         nodes {
  //           name
  //           works {
  //             nodes {
  //               title
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `;

let query = gql`
query MyLaunches($launch_year: String!) {
  launchesPast(find: {launch_year: $launch_year}, limit: 10) {
    mission_name
    links {
      article_link
      video_link
    }
    rocket {
      rocket_name
    }
    launch_year
  }
}
`
//     let query = gql`
// {
//   launchesPast(limit: 10) {
//     launch_date_local
//     launch_year
//   }
// }
// `;

  //HANDLE SUBMIT FUNCTION FOR SEARCH BAR
  const handleSubmit = (searchVal: string) => {
    console.log("This is searchVal: ", searchVal.toString());
    setSearchQuery(searchVal.toString());
  };

  //PASSING THE QUERY TO GRAPHQL
  // const {data, loading, error} = useQuery<QueryData>(query, {
  //   variables: { "launch_year": searchQuery },
  // });

  
  const {data, loading, error} = useQuery<QueryData>(query, {
    variables: { "launch_year": searchQuery },
  });


  // const {data, loading, error} = useQuery<QueryData>(query);

  if (data) {
    console.log("this is my data", data.launchesPast);
    if (!data.launchesPast.length) {
results = {launchesPast: [{launch_year: "No results", mission_name: "No results", rocket: {rocket_name: "No results"}}]}
    } else {
    results = data;
    }

  };

  if (error && searchQuery !== "") {
    console.log("There was an error", error);
results = {launchesPast: [{launch_year: "There was an error", mission_name: "No results", rocket: {rocket_name: "No results"}}]}
  } else if (error && searchQuery === "") {
    console.log("There was an error / search field empty", error);
results = {launchesPast: [{launch_year: "Empty", mission_name: "No results", rocket: {rocket_name: "No results"}}]}
  };

  return (
    <>
    <SearchBar handleSubmit={handleSubmit} typedVal={searchQuery}/>
    {results && <SearchResults results={results} searchQuery={searchQuery}/>}
    </>
  );
};


export default Search