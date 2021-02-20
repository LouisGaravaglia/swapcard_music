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
  

  return (
    <>
      <div className="Search-Results-Container">
          {results && results.launchesPast.map((obj:any, index:number) => <Link to={`artist/${index}`}><p className="Search-Result">{obj.launch_year}</p></Link>)}
      </div>
    </>
  )

}


export default SearchResults