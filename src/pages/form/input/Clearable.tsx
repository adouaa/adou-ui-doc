import React, { useState } from "react";
import Input from "@site/src/components/adou-new-form/adou-Input";

const ClearableExample = () => {
  return (
    <div className="clearable-wrapper">
      <Input clearable placeholder="请输入内容" />
    </div>
  );
};
export default ClearableExample;
