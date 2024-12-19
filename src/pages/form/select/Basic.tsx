import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
const BasicExample = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  return (
    <div className="basic-select-wrapper">
      <Select defaultValue={"2"} placeholder="请选择" options={options} />
    </div>
  );
};
export default BasicExample;
