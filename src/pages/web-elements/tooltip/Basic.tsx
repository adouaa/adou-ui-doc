import Tooltip from "@site/src/components/web-elements/adou-tooltip";
import React from "react";

const Basic = () => {
  return (
    <div>
      <Tooltip text="这是一个基本提示文字">
        <span>滑动鼠标到这里</span>
      </Tooltip>
    </div>
  );
};

export default Basic;