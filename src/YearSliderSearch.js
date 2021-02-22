import React, {useState, useCallback, memo} from 'react';
//COMPONENT IMPORTS
import YearSlider from "./YearSlider";
import Search from "./Search";
import Buttons from "./Buttons";

const YearSliderSearch = memo(() => {
  const [sliderVal, setSliderVal] = useState(2006);
  const [offsetVal, setOffsetVal] = useState(0);
  const [pageVal, setPageVal] = useState(1);

////////////////////////////////////////////////////  HANDLE SLIDER MOVE FUNCTIONS  ////////////////////////////////////////////////////

  const handleSliderMouseMove = async (val) => {
    setSliderVal(val);
    setPageVal(1);
    setOffsetVal(0);
    // let upperLimit = (val + 0.01).toFixed(2);
    // dispatch(getDanceabilityTracks(val, upperLimit));
  };

  const incrementOffset = useCallback(() => {
    setOffsetVal(val => val + 5);
    setPageVal(val => val + 1);
    console.log("offsetVal", offsetVal);
}, [setOffsetVal, setPageVal, offsetVal]);
  // const incrementOffset = () => {
  //   setOffsetVal(val => val + 5);
  //   setPageVal(val => val + 1);
  //   console.log("offsetVal", offsetVal);
  //  };

  const decrementOffset = useCallback(() => {
    if (offsetVal > 0) setOffsetVal(val => val - 5);
    if (offsetVal > 0) setPageVal(val => val - 1);
    console.log("offsetVal", offsetVal);
}, [setOffsetVal, setPageVal, offsetVal]);
 
  //  const decrementOffset = () => {
  //    if (offsetVal > 0) setOffsetVal(val => val - 5);
  //    if (offsetVal > 0) setPageVal(val => val - 1);
  //    console.log("offsetVal", offsetVal);
  //  };
 


////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (


          <div className="Browse-Danceability-v2">
            {/* <h1>{(sliderVal * 100).toFixed(0)}</h1> */}
            <h1>{sliderVal}</h1>
            <YearSlider handleSliderMouseMove={handleSliderMouseMove}/>
            <Search year={sliderVal} offsetVal={offsetVal}/>
            <Buttons incrementOffset={incrementOffset} decrementOffset={decrementOffset} />
            {/* {!tracks && <><div className="Danceability-No-Results-Container"><p className="Danceability-No-Results">KEEP SLIDING!</p></div><div className="Pagination-Slider-Placeholder-v2"></div></>} */}
            {/* {tracks && <Tracks results={tracks} typeOfResults={"danceability-results"} itemsPerPage={1} animateIn={false}/>} */}
            <p>Page: {pageVal}</p>
          </div>

  );
});

export default YearSliderSearch;