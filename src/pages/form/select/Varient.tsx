import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
const VarientExample = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" }
  ];
  return (
    <div className="varient-select-wrapper">
      <div className="outlined-select">
        <Select varient="outlined" placeholder="请选择" options={options} />
      </div>
      <div className="filled-select my-2">
        <Select varient="filled" placeholder="请选择" options={options} />
      </div>
      <div className="borderless-select">
        <Select varient="borderless" placeholder="请选择" options={options} />
      </div>
    </div>
  );
};
export default VarientExample;