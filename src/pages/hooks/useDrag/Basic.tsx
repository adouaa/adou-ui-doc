import React, { useRef } from "react";
import useDrag from "@site/src/hooks/useDrag";
const Basic = () => {
  const elementRef = useRef(null);
  const triggerRef = useRef(null);
  const { position, handleMouseDown } = useDrag(elementRef, elementRef);
  return (
    <div
      ref={elementRef}
      onMouseDown={handleMouseDown}
      className="draggable-box p-2"
      style={{ width: "fit-content", background: "red" }}
    >
      {JSON.stringify(position)}
      <div ref={triggerRef} className="drag-handle">
        拖拽我
      </div>
    </div>
  );
};
export default Basic;
