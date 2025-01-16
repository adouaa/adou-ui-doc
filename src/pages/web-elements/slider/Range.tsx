import Slider from "@site/src/components/web-elements/adou-slider";
import React from "react";

const Range = () => {
  return (
    <Slider
      range
      min={0}
      max={100}
      onChange={(value, percent) => console.log(value, percent)}
    />
  );
};

export default Range;
