import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
import BrowserOnly from "@docusaurus/BrowserOnly";
const SizeExample = () => {
  const options = [
    { label: "Option 1", value: "1" },
    { label: "Option 2", value: "2" },
    { label: "Option 3", value: "3" },
  ];
  return (
    <div className="size-select-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          <>
            <div className="sm-select">
              <Select size="sm" placeholder="请选择" options={options} />
            </div>
            <div className="default-select my-2">
              <Select placeholder="请选择" options={options} />
            </div>
            <div className="lg-select">
              <Select size="lg" placeholder="请选择" options={options} />
            </div>
          </>
        )}
      </BrowserOnly>
    </div>
  );
};
export default SizeExample;
