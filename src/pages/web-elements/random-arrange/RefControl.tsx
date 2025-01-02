import Button from "@site/src/components/adou-button";
import RandomArrange from "@site/src/components/web-elements/adou-random-arrange";
import React, { useRef } from "react";
const RefControl = () => {
  const arrangeRef = useRef<any>();
  const handleShuffle = () => {
    arrangeRef.current.shuffle();
  };
  return (
    <div>
      <Button type="warning" onClick={handleShuffle} externalClassName="mb-2">
        外部触发排序
      </Button>
      <RandomArrange actRef={arrangeRef} showButton={false}>
        <div className="p-3 bg-primary m-2 rounded">Item 1</div>
        <div className="p-3 bg-primary m-2 rounded">Item 2</div>
        <div className="p-3 bg-primary m-2 rounded">Item 3</div>
        <div className="p-3 bg-primary m-2 rounded">Item 4</div>
        <div className="p-3 bg-primary m-2 rounded">Item 5</div>
      </RandomArrange>
    </div>
  );
};
export default RefControl;
