import Tooltip from "@site/src/components/web-elements/adou-tooltip";
import React from "react";

const Style = () => {
  return (
    <div>
      <Tooltip
        text="自定义背景色和字体颜色"
        tooltipBgc="#0055aa"
        tooltipFontColor="#ffffff"
      >
        <span>滑动鼠标到这里</span>
      </Tooltip>
    </div>
  );
};

export default Style;
