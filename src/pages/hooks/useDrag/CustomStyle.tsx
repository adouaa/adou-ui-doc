import React, { useRef } from "react";
import useDrag from "@site/src/hooks/useDrag";
const CustomStyle = () => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);
  const { position, handleMouseDown } = useDrag(
    triggerRef,
    elementRef,
    false,
    false
  );
  return (
    <div className="wrapper">
      <div
        className="position-relative"
        ref={elementRef}
        style={{
          top: position.y + "px",
          left: position.x + "px",
          transition: "transform 0.1s",
          cursor: "move",
          zIndex: 999,
        }}
      >
        {JSON.stringify(position)}
        <div ref={triggerRef} onMouseDown={handleMouseDown}>
          自定义样式的拖拽元素
        </div>
      </div>
    </div>
  );
};
export default CustomStyle;
