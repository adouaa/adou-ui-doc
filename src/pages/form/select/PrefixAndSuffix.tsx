import React from "react";
import Select from "@site/src/components/adou-new-form/adou-select";
const PrefixAndSuffixExample = () => {
  const options = [
    { label: "www.baidu.com", value: "1baidu" },
    { label: "www.github.com", value: "github" },
    { label: "www.google.com", value: "google" },
  ];
  return (
    <div className="prefix-and-suffix-select-wrapper">
      <Select
        prefix={"http://"}
        suffix={<i className="fa fa-search"></i>}
        placeholder="请选择"
        options={options}
      />
    </div>
  );
};
export default PrefixAndSuffixExample;
