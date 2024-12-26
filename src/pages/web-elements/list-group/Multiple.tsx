import React, { useState } from "react";
import ListGroup from "@site/src/components/web-elements/adou-list-group";
import { data } from "./data";

interface MultipleProps {}

const Multiple = ({}: MultipleProps) => {
  const [selectedList, setSelectedList] = useState<any[]>([
    {
      value: "2",
    },
    { value: "4" },
    { value: "6" },
  ]);
  return (
    <div className="multiple-wrapper">
      <ListGroup multiple activeList={selectedList} data={data}></ListGroup>
    </div>
  );
};

export default Multiple;
