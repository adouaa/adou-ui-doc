import React, { useRef } from "react";
import useDrag from "@site/src/hooks/useDrag";
const Dialog = () => {
  const dialogRef = useRef(null);
  const headerRef = useRef(null);
  const { position, handleMouseDown } = useDrag(headerRef, dialogRef, true);
  return (
    <div
      ref={dialogRef}
      className="dialog"
      style={{
        position: "absolute",
        left: position.x,
        top: position.y,
      }}
    >
      <div
        ref={headerRef}
        onMouseDown={handleMouseDown}
        className="dialog-header"
      >
        可拖拽的对话框
      </div>
      <div className="dialog-content">对话框内容</div>
    </div>
  );
};
export default Dialog;
