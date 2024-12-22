import React from "react";
import List from "@site/src/components/web-elements/adou-list";
import { data } from "./data";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  return (
    <div className="basic-wrapper p-2">
      <List isTree data={data}></List>
    </div>
  );
};

export default Basic;
