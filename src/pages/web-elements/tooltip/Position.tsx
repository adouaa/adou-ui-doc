import Tooltip from "@site/src/components/web-elements/adou-tooltip";
import React from "react";

interface PositionProps {}

const Position = ({}: PositionProps) => {
  return (
    <div className="position-wrapper">
      <Tooltip text="顶部提示" position="top">
        <div className="m-3">顶部</div>
      </Tooltip>
      <Tooltip text="底部提示" position="bottom">
        <div className="m-3 mb-5">底部</div>
      </Tooltip>
      <Tooltip text="左侧提示" position="left">
        <div className="m-3">左侧</div>
      </Tooltip>
      <Tooltip text="右侧提示" position="right">
        <div className="m-3">右侧</div>
      </Tooltip>
    </div>
  );
};

export default Position;
