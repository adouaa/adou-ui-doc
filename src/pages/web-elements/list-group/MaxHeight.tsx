import React from "react";
import ListGroup from "@site/src/components/web-elements/adou-list-group";
import { data } from "./data";

interface MaxHeightProps {}

const MaxHeight = ({}: MaxHeightProps) => {
  return (
    <div className="basic-wrapper">
      <ListGroup maxHeight={"300px"} data={data}></ListGroup>
    </div>
  );
};

export default MaxHeight;
