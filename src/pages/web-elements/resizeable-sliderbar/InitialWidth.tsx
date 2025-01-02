import ResizableSidebar from "@site/src/components/web-elements/adou-resizeable-sliderbar";
import React from "react";
const InitialWidth = () => {
  return (
    <div className="initial-width" style={{ height: "200px" }}>
      <ResizableSidebar initialWidth="300px">
        <div className="p-3">
          <h5>侧边栏内容</h5>
          <p>首次渲染时展开</p>
        </div>
      </ResizableSidebar>
    </div>
  );
};
export default InitialWidth;
