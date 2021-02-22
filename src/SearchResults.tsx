import React from "react";
import {Link} from "react-router-dom";

interface Props {
  results: {
    launchesPast: []
  }
  searchQuery: string
}

//HOME COMPONENT
const SearchResults: React.FC<Props>  = ({results, searchQuery}) => {
  console.log("results: ", results);
  
  //   launchesPast(find: {launch_year: $launch_year}, limit: 10) {
  //   mission_name
  //   links {
  //     article_link
  //     video_link
  //   }
  //   rocket {
  //     rocket_name
  //   }
  //   launch_year
  // }

  return (
    <>
      <div className="Search-Results-Container">
          {results && results.launchesPast.map((obj:any, index:number) => <Link to={`artist/${index}`}><p className="Search-Result">Launch Year: {obj.launch_year}, Mission Name: {obj.mission_name}, Rocket: {obj.rocket.rocket_name}</p></Link>)}
      </div>
    </>
  )

}


export default SearchResults