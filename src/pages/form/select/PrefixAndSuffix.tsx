import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
import BrowserOnly from "@docusaurus/BrowserOnly";
const PrefixAndSuffixExample = () => {
  const options = [
    { label: "www.baidu.com", value: "1baidu" },
    { label: "www.github.com", value: "github" },
    { label: "www.google.com", value: "google" },
  ];
  return (
    <div className="prefix-and-suffix-select-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          <Select
            prefix={"http://"}
            suffix={<i className="fa fa-search"></i>}
            placeholder="请选择"
            options={options}
          />
        )}
      </BrowserOnly>
    </div>
  );
};
export default PrefixAndSuffixExample;
