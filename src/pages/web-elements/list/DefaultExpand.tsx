import React from "react";
import List from "@site/src/components/web-elements/adou-list";
import { data } from "./data";

interface DefaultExpandProps {}

const DefaultExpand = ({}: DefaultExpandProps) => {
  return (
    <div className="basic-wrapper p-2">
      <List
        defaltExpandNodes={["1", "1-1", "1-1-1", "3-1-1-2"]}
        isTree
        data={data}
      ></List>
    </div>
  );
};

export default DefaultExpand;
