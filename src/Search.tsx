import React, {memo, useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
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

interface Props {
  year: number
  offsetVal: number
}

//SEARCH COMPONENT
const Search: React.FC<Props>  = memo(({year, offsetVal}) => {

  // const [searchQuery, setSearchQuery] = useState("");
  // const [offsetVal, setOffsetVal] = useState(0);
  // const [pageVal, setPageVal] = useState(1);

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
    launchesPast(find: {launch_year: $launch_year}, limit: 5, offset: ${offsetVal.toString()}) {
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
  // const handleSubmit = (searchVal: number) => {
  //   console.log("This is searchVal: ", searchVal.toString());
  //   // setSearchQuery(searchVal.toString());
  // };

  // useEffect(() => {
  //   console.log("set offset back to 0");
  //   setOffsetVal(0);
  //   setPageVal(1);
  // }, [year]);

  //PASSING THE QUERY TO GRAPHQL
  // const {data, loading, error} = useQuery<QueryData>(query, {
  //   variables: { "launch_year": searchQuery },
  // });



  

  
      const {data, loading, error} = useQuery<QueryData>(query, {
      variables: { "launch_year": year.toString() },
    });
  





      if (data) {
        console.log("this is my data", data.launchesPast);
        console.log("year is: ", year);
        
        if (!data.launchesPast.length) {
          results = {launchesPast: [{launch_year: "No results", mission_name: "No results", rocket: {rocket_name: "No results"}}]}
        } else {
          results = data;
        };
      } else if (error) {
        console.log("There was an error", error);
        console.log("year is: ", year);
        results = {launchesPast: [{launch_year: "There was an error", mission_name: "No results", rocket: {rocket_name: "No results"}}]}
      } else if (loading) {
        console.log("loading");
        console.log("year is: ", year);
        results = {launchesPast: [{launch_year: "Loading", mission_name: "No results", rocket: {rocket_name: "No results"}}]}
      };
      


  
  return (
    <>
    {/* <SearchBar handleSubmit={handleSubmit} typedVal={searchQuery}/> */}
    {results && <SearchResults results={results}/>}


    </>
  );
});


export default Search