import React from "react";
import Checkbox from "@site/src/components/adou-new-form/adou-checkbox";

interface BasicProps {}

const Basic = ({}: BasicProps) => {
  return (
    <div className="basic-wrapper">
      <Checkbox
        label="食物"
        options={[
          { label: "Option 1", value: "1" },
          { label: "Option 2", value: "2" },
        ]}
      ></Checkbox>
    </div>
  );
};

export default Basic;
