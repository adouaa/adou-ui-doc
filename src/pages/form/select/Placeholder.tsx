import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
const PlaceholderExample = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  return (
    <div className="placeholder-select-wrapper">
      <Select mode="tags" placeholder="请选择你的选项~" options={options} />
    </div>
  );
};
export default PlaceholderExample;
