import React from "react";
import List from "@site/src/components/web-elements/adou-list";
import { data } from "./data";

interface ActiveProps {}

const Active = ({}: ActiveProps) => {
  return (
    <div className="active-wrapper p-2">
      <List activeId={"3-1-1-2"} isTree data={data}></List>
    </div>
  );
};

export default Active;
