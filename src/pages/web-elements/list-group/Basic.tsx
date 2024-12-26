import React from "react";
import ListGroup from "@site/src/components/web-elements/adou-list-group";
import { data } from "./data";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  return (
    <div className="basic-wrapper">
      <ListGroup data={data}></ListGroup>
    </div>
  );
};

export default Basic;
