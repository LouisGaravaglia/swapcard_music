import React from "react";

interface Props {
  results: []
}

//HOME COMPONENT
const SearchResults: React.FC<Props>  = ({results}) => {

  let i = 0;

  return (
    <>
      <div>
        {results && results.map(node => <p className={`${i++}`}>{node['name']}</p>)}
      </div>
    </>
  )

}


export default SearchResults