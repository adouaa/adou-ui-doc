import React from "react";
import Tooltip from "@site/src/components/web-elements/adou-tooltip";
import Button from "@site/src/components/adou-button";
const Wrap = () => {
  return (
    <Tooltip
      text="这是一段很长的提示文字，需要自动换行显示。这是一段很长的提示文字，需要自动换行显示。"
      wrap
      width="200px"
    >
      <span>长文本提示</span>
    </Tooltip>
  );
};
export default Wrap;
