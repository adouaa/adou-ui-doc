import React from "react";
import ListGroup from "@site/src/components/web-elements/adou-list-group";
import { data } from "./data";

interface SplitProps {}

const Split = ({}: SplitProps) => {
  return (
    <div className="split-wrapper">
      <h5 className="mb-2">方式一: 通过 listPerColumn 属性</h5>
      <ListGroup lineBreak listPerColumn={3} data={data}></ListGroup>
      <h5 className="my-2">方式二: 通过 columnMaxHeight 属性</h5>
      <ListGroup lineBreak columnMaxHeight={260} data={data}></ListGroup>
      <h5 className="my-2">方式三: 通过设置 父容器的高度，itemHeight = 60</h5>
      <div style={{ height: "260px" }}>
        <ListGroup lineBreak itemHeight={60} data={data}></ListGroup>
      </div>
    </div>
  );
};

export default Split;
