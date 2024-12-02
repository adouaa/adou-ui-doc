import React from "react";
import Input from "@site/src/components/adou-new-form/adou-Input";
const VarientExample = () => {
  return (
    <div className="varient-wrapper">
      <div className="outlined-input">
        <Input placeholder="请输入内容" />
      </div>
      <div className="filled-input my-2">
        <Input varient="filled" size="lg" placeholder="请输入内容" />
      </div>
      <div className="borderless-input">
        <Input varient="borderless" size="sm" placeholder="请输入内容" />
      </div>
    </div>
  );
};
export default VarientExample;
