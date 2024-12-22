import React from "react";
import CollapseY from "@site/src/components/web-elements/adou-collapseY";
import CollapseItem from "@site/src/components/web-elements/adou-collapseY/collapseItem";
import Button from "@site/src/components/adou-button";

const ControlContentExample = () => {
  return (
    <div className="control-content-wrapper">
      <CollapseY>
        <CollapseItem
          title={"第一个的title"}
          controlContentRight={<Button type="warning">点击展开 / 折叠</Button>}
          name={"Item 1"}
        >
          文本一
        </CollapseItem>
        <CollapseItem controlRightIcon="fa fa-plus" name={"Item 2"}>
          文本二
        </CollapseItem>
        <CollapseItem name={"Item 3"}>文本三</CollapseItem>
      </CollapseY>
    </div>
  );
};

export default ControlContentExample;