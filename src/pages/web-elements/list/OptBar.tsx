import React from "react";
import List from "@site/src/components/web-elements/adou-list";
import { data } from "./data";
import Card from "@site/src/components/web-elements/adou-card";

interface OptBarProps {}

const OptBar = ({}: OptBarProps) => {
  const handleOptIconClick = (type: "add" | "edit" | "delete", item: any) => {
    alert(
      `点击了 ${type} 按钮，当前项【id】为${item.id}，【name】为${item.name}`
    );
  };

  return (
    <>
      <Card header="默认操作栏">
        <div className="opt-bar-wrapper p-2">
          <List
            onOptIconClick={handleOptIconClick}
            showOptIcons
            isTree
            data={data}
          ></List>
        </div>
      </Card>
      <hr />
      <Card header="自定义操作栏">
        <div className="opt-bar-wrapper p-2">
          <List
            onOptIconClick={handleOptIconClick}
            showOptIcons
            addIconClass="fa-solid fa-circle-plus text-success"
            editIconClass="fa-solid fa-pencil text-secondary"
            isTree
            data={data}
          ></List>
        </div>
      </Card>
    </>
  );
};

export default OptBar;
