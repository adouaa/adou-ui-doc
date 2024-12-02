import { useState } from "react";
import React from "react";
import Checkbox from "@site/src/components/adou-new-form/adou-checkbox";

interface LabelWidthProps {}

const LabelWidth = ({}: LabelWidthProps) => {
  const [foods, setFoods] = useState<any[]>([
    { label: "苹果", value: "苹果" },
    { label: "香蕉", value: "香蕉" },
    { label: "橙子", value: "橙子" },
    { label: "西瓜", value: "西瓜" },
    { label: "葡萄", value: "葡萄" },
  ]);

  return (
    <div className="label-width-wrapper">
      <p>labelPosition 值为 top</p>
      <Checkbox
        labelPosition="top"
        labelColor="red"
        label="食物"
        options={foods}
      ></Checkbox>
      <hr />
      <p>labelColor 值为 skyblue；labelWidth 值为 100px</p>
      <Checkbox
        contentWidth={"80px"}
        labelWidth={"100px"}
        labelColor="skyblue"
        label="食物"
        options={foods}
      ></Checkbox>
    </div>
  );
};

export default LabelWidth;
