import React from "react";
import {useParams} from "react-router-dom";

//ARTIST DETAILS COMPONENT
const ArtistDetails: React.FC  = () => {
  const {selectedArtist} = useParams<{ selectedArtist: string }>();
  const id : number = +selectedArtist;
  const results:any = JSON.parse(localStorage.getItem('results')!);
  const works:any = results[id].works.nodes;

  return (
    <>
      <div className="Artist-Details-Container">
        {!results && <p>Loading</p>}
        {results && <h1 className="Artist-Name">{results[id].name}</h1>}
        {works && results[id].works.nodes.map((item:any) => <p className="Artist-Tracks">{item.title}</p>)}
      </div>
    </>
  );
};


export default ArtistDetails