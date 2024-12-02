import React from "react";
import Input from "@site/src/components/adou-new-form/adou-Input";
const SizeExample = () => {
  return (
    <div className="size-wrapper">
      <div className="sm-input">
        <Input size="sm" placeholder="请输入内容" />
      </div>
      <div className="default-input my-2">
        <Input placeholder="请输入内容" />
      </div>
      <div className="lg-input">
        <Input size="lg" placeholder="请输入内容" />
      </div>
    </div>
  );
};
export default SizeExample;
