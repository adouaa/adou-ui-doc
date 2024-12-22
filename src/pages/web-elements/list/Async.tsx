import React from "react";
import List from "@site/src/components/web-elements/adou-list";
import { data } from "./data";

interface AsyncProps {}

const Async = ({}: AsyncProps) => {
  const handleLoadNode = async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          {
            id: "11-1-1-2",
            name: "子节点11-1-1-2",
            children: [
              {
                id: "111-1-1-2",
                name: "曾孙节点111-1-1-2",
              },
            ],
          },
        ]);
      }, 1000);
    });
  };

  return (
    <div className="async-wrapper p-2">
      <List onLoadNode={handleLoadNode} isTree data={data}></List>
    </div>
  );
};

export default Async;
