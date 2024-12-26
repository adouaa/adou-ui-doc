import React from "react";
import ListGroup from "@site/src/components/web-elements/adou-list-group";
import { data } from "./data";

interface ActiveOnClickProps {}

const ActiveOnClick = ({}: ActiveOnClickProps) => {
  return (
    <div className="active-on-click-wrapper">
      <ListGroup activeOnClick={false} data={data}></ListGroup>
    </div>
  );
};

export default ActiveOnClick;
