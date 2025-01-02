import RandomArrange from "@site/src/components/web-elements/adou-random-arrange";
import React from "react";
const CustomAnimation = () => {
  return (
    <RandomArrange
      buttonText="慢速打乱"
      animationDuration={800}
      animationTiming="cubic-bezier(0.68, -0.55, 0.265, 1.55)"
      onShuffle={() => console.log("排序完成")}
    >
      <div className="p-3 bg-primary-subtle m-2 rounded">Item 1</div>
      <div className="p-3 bg-primary-subtle m-2 rounded">Item 2</div>
      <div className="p-3 bg-primary-subtle m-2 rounded">Item 3</div>
      <div className="p-3 bg-primary-subtle m-2 rounded">Item 4</div>
      <div className="p-3 bg-primary-subtle m-2 rounded">Item 5</div>
    </RandomArrange>
  );
};
export default CustomAnimation;
