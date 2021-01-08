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
      <div>
          {results && results.map((node:any, index:number) => <Link to={`artist/${index}`}><p>{node['name']}</p></Link>)}
      </div>
    </>
  )

}


export default SearchResults