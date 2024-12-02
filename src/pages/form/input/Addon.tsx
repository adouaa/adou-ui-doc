import React, { useState } from "react";
import Input from "@site/src/components/adou-new-form/adou-Input";

const AddonExample = () => {
  return (
    <div className="addon-wrapper">
      <Input
        addonBefore="http://"
        addonAfter={<span style={{ cursor: "pointer" }}>.com</span>}
        placeholder="请输入内容"
      />
      <Input
        wrapperClassName="mt-2"
        addonBefore={<i className="fa fa-user"></i>}
        placeholder="请输入内容"
      />
    </div>
  );
};
export default AddonExample;
