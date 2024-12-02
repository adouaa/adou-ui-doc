import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import AdouCheckbox from "@site/src/components/adou-new-form/adou-checkbox";

interface DefaultValueProps {}

const DefaultValue = ({}: DefaultValueProps) => {
  const [foods, setFoods] = useState<any[]>([
    { label: "苹果", value: "苹果" },
    { label: "香蕉", value: "香蕉" },
    { label: "橙子", value: "橙子" },
    { label: "西瓜", value: "西瓜" },
    { label: "葡萄", value: "葡萄" },
  ]);

  const [defaultValue, setDefaultValue] = useState<any>(["香蕉", "橙子"]);

  return (
    <div className="default-value-wrapper">
      <AdouCheckbox label="食物" options={foods} defaultValue={defaultValue} />
    </div>
  );
};

export default DefaultValue;
