import Slider from "@site/src/components/web-elements/adou-slider";
import React from "react";

const Step = () => {
  return (
    <Slider
      step={10}
      showStops
      min={0}
      max={100}
      onChange={(value, percent) => console.log(value, percent)}
    />
  );
};

export default Step;
