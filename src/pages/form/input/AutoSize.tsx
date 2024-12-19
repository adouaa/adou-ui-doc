import React, { useState } from "react";
import TextArea from "@site/src/components/adou-new-form/adou-textarea";

const AutoSizeExample = () => {
  return (
    <div className="auto-size-wrapper">
      <TextArea
        autoSize={{ minRows: 2, maxRows: 4 }}
        defaultValue="这是一段文字"
      ></TextArea>
    </div>
  );
};
export default AutoSizeExample;
