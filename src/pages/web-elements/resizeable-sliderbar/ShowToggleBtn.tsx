import Button from "@site/src/components/adou-button";
import ResizableSidebar from "@site/src/components/web-elements/adou-resizeable-sliderbar";
import React, { useRef } from "react";
const ShowToggleBtn = () => {
  const actRef = useRef<any>(null);

  return (
    <div className="show-toggle-btn" style={{ height: "400px" }}>
      <h6 className="text-info">不展示按钮：</h6>
      <ResizableSidebar showToggleBtn={false} initialHeight={"160px"}>
        <div className="p-3">
          <h5>侧边栏内容</h5>
          <p>不展示按钮</p>
        </div>
      </ResizableSidebar>

      <h6 className="text-info mt-2">
        收起状态不显示按钮：
        <Button onClick={() => actRef.current.toggleSidebar()}>toggle</Button>
      </h6>
      <ResizableSidebar
        actRef={actRef}
        showTggleBtnWhenNotExpanded={false}
        initialHeight={"160px"}
      >
        <div className="p-3">
          <h5>侧边栏内容</h5>
          <p>收起状态不显示按钮</p>
        </div>
      </ResizableSidebar>
    </div>
  );
};
export default ShowToggleBtn;
