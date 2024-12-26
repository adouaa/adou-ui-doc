import React from "react";
import ListGroup from "@site/src/components/web-elements/adou-list-group";
import { data } from "./data";

interface DefaultFirstProps {}

const DefaultFirst = ({}: DefaultFirstProps) => {
  return (
    <div className="default-first-wrapper">
      <ListGroup defaultFirst data={data}></ListGroup>
    </div>
  );
};

export default DefaultFirst;
