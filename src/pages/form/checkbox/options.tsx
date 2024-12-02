import { useState } from "react";
import React from "react";
import Checkbox from "@site/src/components/adou-new-form/adou-checkbox";

interface OptionsProps {}

const Options = ({}: OptionsProps) => {
  const [foods, setFoods] = useState<any[]>([
    { label: "苹果", value: "苹果" },
    { label: "香蕉", value: "香蕉" },
    { label: "橙子", value: "橙子" },
    { label: "西瓜", value: "西瓜" },
    { label: "葡萄", value: "葡萄" },
  ]);

  return (
    <div className="options-wrapper">
      <Checkbox label="食物" options={foods}></Checkbox>
    </div>
  );
};

export default Options;
