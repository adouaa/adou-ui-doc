import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const MaxHeightExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="max-height-wrapper">
      <Button onClick={() => setIsOpen(true)}>打开对话框</Button>
      <Dialog show={isOpen} onClose={() => setIsOpen(false)}>
        <h1>这是一段文本</h1>
        <h1>这是一段文本</h1>
        <h1>这是一段文本</h1>
        <h1>这是一段文本</h1>
        <h1>这是一段文本</h1>
        <h1>这是一段文本</h1>
        <h1>这是一段文本</h1>
        <h1>这是一段文本</h1>
      </Dialog>
    </div>
  );
};

export default MaxHeightExample;
