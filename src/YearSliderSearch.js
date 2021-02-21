import React,  {useState} from 'react';
//COMPONENT IMPORTS
import YearSlider from "./YearSlider";
import Search from "./Search"

function YearSliderSearch() {
  const [sliderVal, setSliderVal] = useState(2006);

////////////////////////////////////////////////////  HANDLE SLIDER MOVE FUNCTIONS  ////////////////////////////////////////////////////

  const handleSliderMouseMove = async (val) => {
    setSliderVal(val);
    // let upperLimit = (val + 0.01).toFixed(2);
    // dispatch(getDanceabilityTracks(val, upperLimit));
  };

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (


          <div className="Browse-Danceability-v2">
            {/* <h1>{(sliderVal * 100).toFixed(0)}</h1> */}
            <h1>{sliderVal}</h1>
            <YearSlider handleSliderMouseMove={handleSliderMouseMove}/>
            <Search year={sliderVal}/>
            {/* {!tracks && <><div className="Danceability-No-Results-Container"><p className="Danceability-No-Results">KEEP SLIDING!</p></div><div className="Pagination-Slider-Placeholder-v2"></div></>} */}
            {/* {tracks && <Tracks results={tracks} typeOfResults={"danceability-results"} itemsPerPage={1} animateIn={false}/>} */}
          </div>

  );
};

export default YearSliderSearch;