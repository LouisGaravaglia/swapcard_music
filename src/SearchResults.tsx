import React, {useState} from "react";
import {useQuery} from "@apollo/react-hooks";
import gql from "graphql-tag";
import SearchBar from "./SearchBar";

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