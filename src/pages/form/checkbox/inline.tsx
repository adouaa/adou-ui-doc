import { useState } from "react";
import React from "react";
import Checkbox from "@site/src/components/adou-new-form/adou-checkbox";

interface InlineProps {}

const Inline = ({}: InlineProps) => {
  const [options, setOptions] = useState<any[]>([
    { label: "苹果", value: "苹果" },
    { label: "香蕉", value: "香蕉" },
    { label: "橙子", value: "橙子" },
    { label: "西瓜", value: "西瓜" },
    { label: "葡萄", value: "葡萄" },
  ]);

  return (
    <div className="inline-wrapper">
      <Checkbox label="食物" inline={false} options={options} />
    </div>
  );
};

export default Inline;
