import React from "react";
import Collapse from "@site/src/components/web-elements/adou-collapseX";

interface ChildrenProps {}

const Children = ({}: ChildrenProps) => {
  return (
    <div className="header-wrapper">
      <Collapse header={"常见问题解答"}>
        <p style={{ color: "green" }}>这里是关于常见问题的详细解答内容。</p>
      </Collapse>
    </div>
  );
};

export default Children;
