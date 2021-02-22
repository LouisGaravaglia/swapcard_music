import React, {useState} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

//CUSTOM STYLE FOR THE MUI SLIDER
const MySlider = withStyles({
    root: {
    color: "#fff",
    height: 8
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -10,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "inherit"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 14px)",
    top: -22,
    "& *": {
      background: "transparent",
      color: "#000"
    }
  },
  track: {
    height: 8,
    borderRadius: 4
  },
  rail: {
    height: 4,
    borderRadius: 4,
    opacity: 0.5,
    backgroundColor: "#bfbfbf"
  }
})(Slider);

const YearSlider = ({handleSliderMouseMove}) => {
  const [sliderVal, setSliderVal] = useState(0);

////////////////////////////////////////////////////  HANDLE CHANGE FUNCTION  ////////////////////////////////////////////////////

  const handleChange = (event, newValue) => {
    setSliderVal(newValue);
    handleSliderMouseMove(newValue);
  };

////////////////////////////////////////////////////  RETURN  ////////////////////////////////////////////////////

  return (
    <div className="Danceability-Slider-Container-v2">
   <MySlider className="Danceability-Slider-Item-v2" color="" value={sliderVal} max={2021} min={2006} step={1} onChange={handleChange} aria-labelledby="continuous-slider" valueLabelDisplay="off" track={false}/>
  </div>
  );
};

export default YearSlider;