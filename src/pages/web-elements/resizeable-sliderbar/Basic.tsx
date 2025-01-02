import ResizableSidebar from "@site/src/components/web-elements/adou-resizeable-sliderbar";
import React from "react";
const Basic = () => {
  return (
    <div className="basic" style={{ height: "200px" }}>
      <ResizableSidebar>
        <div className="p-3">
          <h5>侧边栏内容</h5>
          <p>这是一个可以调整大小的侧边栏</p>
        </div>
      </ResizableSidebar>
    </div>
  );
};
export default Basic;
