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
    <div
      className="wrapper"
      style={{ backgroundColor: "red", width: "300px", padding: "15px 0" }}
    >
      <div
        className="position-relative"
        ref={elementRef}
        style={{
          top:
            position.y <= -15
              ? "-15px"
              : position.y >= 15
              ? "15px"
              : position.y + "px",
          left:
            position.x <= 0
              ? 0
              : position.x >= 200
              ? "200px"
              : position.x + "px",
          transition: "transform 0.1s",
          cursor: "move",
          zIndex: 999,
        }}
      >
        <div
          className="ps-2"
          ref={triggerRef}
          onMouseDown={handleMouseDown}
          style={{ backgroundColor: "skyblue", width: "100px" }}
        >
          拖拽元素
        </div>
      </div>
    </div>
  );
};

export default CustomStyle;
