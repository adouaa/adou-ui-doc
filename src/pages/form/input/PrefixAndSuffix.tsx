import React, { useState } from "react";
import Input from "@site/src/components/adou-new-form/adou-Input";

const PrefixAndSuffixExample = () => {
  return (
    <div className="basic-wrapper">
      <div className="common">
        <Input prefix={"￥"} placeholder="前缀和后缀" />
      </div>
      <div className="icon mt-2">
        <Input
          prefix={<i className="fa fa-user"></i>}
          suffix={<i className="fa fa-search"></i>}
          placeholder="前缀和后缀图标"
        />
      </div>
    </div>
  );
};
export default PrefixAndSuffixExample;
