import Slider from "@site/src/components/web-elements/adou-slider";
import React from "react";

const Marks = () => {
  const marks = [
    { distance: "0%", label: "0°C" },
    { distance: "25%", label: "25°C" },
    { distance: "50%", label: "50°C" },
    { distance: "75%", label: "75°C" },
    { distance: "100%", label: "100°C" },
  ];
  return (
    <Slider
      marks={marks}
      min={0}
      max={100}
      onChange={(value, percent) => console.log(value, percent)}
    />
  );
};

export default Marks;
