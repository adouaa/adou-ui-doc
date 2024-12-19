import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
const OptionRenderExample = () => {
  const options = [
    {
      label: "Option 1",
      value: "1",
      render: (option: any) => (
        <div>
          <span>{option.label}123213213</span>
          <i className="fa fa-plus-circle ms-2"></i>
        </div>
      ),
    },
    {
      label: "Option 2",
      value: "2",
      render: (option: any) => (
        <div>
          <span>{option.label}</span>
          <i className="fa fa-trash ms-2 text-danger"></i>
        </div>
      ),
    },
    {
      label: "Option 3",
      value: "3",
    },
  ];
  return (
    <div className="multiple-select-wrapper">
      <Select placeholder="请选择" options={options} />
    </div>
  );
};
export default OptionRenderExample;
