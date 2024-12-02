import React from "react";
import CollapseY from "@site/src/components/web-elements/adou-collapseY";
import CollapseItem from "@site/src/components/web-elements/adou-collapseY/collapseItem";

const BasicExample = () => {
  return (
    <div className="basic-wrapper">
      <CollapseY>
        <CollapseItem name={"1"}></CollapseItem>
      </CollapseY>
    </div>
  );
};

export default BasicExample;
