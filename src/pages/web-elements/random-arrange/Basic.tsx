import RandomArrange from "@site/src/components/web-elements/adou-random-arrange";
import React from "react";
const Basic = () => {
  return (
    <RandomArrange>
      <div className="p-3 bg-info m-2 rounded">Item 1</div>
      <div className="p-3 bg-info m-2 rounded">Item 2</div>
      <div className="p-3 bg-info m-2 rounded">Item 3</div>
      <div className="p-3 bg-info m-2 rounded">Item 4</div>
      <div className="p-3 bg-info m-2 rounded">Item 5</div>
    </RandomArrange>
  );
};
export default Basic;
