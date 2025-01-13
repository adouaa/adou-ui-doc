import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
import BrowserOnly from "@docusaurus/BrowserOnly";
const ClearableExample = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  return (
    <div className="clearable-select-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <Select clearable placeholder="请选择" options={options} />}
      </BrowserOnly>
    </div>
  );
};
export default ClearableExample;
