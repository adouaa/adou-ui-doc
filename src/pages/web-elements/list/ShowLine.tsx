import React from "react";
import List from "@site/src/components/web-elements/adou-list";
import { data } from "./data";

interface ShowLineProps {}

const ShowLine = ({}: ShowLineProps) => {
  return (
    <div className="show-line-wrapper p-2">
      <List showLine isTree data={data}></List>
    </div>
  );
};

export default ShowLine;
