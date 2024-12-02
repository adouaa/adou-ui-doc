import React from "react";
import Collapse from "@site/src/components/web-elements/adou-collapseX";

interface FirstShowProps {}

const FirstShow = ({}: FirstShowProps) => {
  return (
    <div className="first-show-wrapper">
      <Collapse firstShow header={"常见问题解答"}>
        <p>这是第一段内容。</p>
        <p>这是第二段内容。</p>
      </Collapse>
    </div>
  );
};

export default FirstShow;
