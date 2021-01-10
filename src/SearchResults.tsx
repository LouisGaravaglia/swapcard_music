import React from "react";
import {Link} from "react-router-dom";

interface Props {
  results: []
  searchQuery: string
}

//HOME COMPONENT
const SearchResults: React.FC<Props>  = ({results, searchQuery}) => {

  return (
    <>
      <div className="Search-Results-Container">
          {results && results.map((node:any, index:number) => <Link to={`artist/${index}`}><p className="Search-Result">{node['name']}</p></Link>)}
      </div>
    </>
  )

}


export default SearchResults