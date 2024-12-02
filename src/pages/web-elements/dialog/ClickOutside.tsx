import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const ClickOutsideExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="click-outside-wrapper">
      <Button onClick={() => setIsOpen(true)}>打开对话框</Button>
      <Dialog
        show={isOpen}
        onClose={() => setIsOpen(false)}
        clickOutside
        title="点击外部关闭"
      >
        <p>点击对话框外部可以关闭此对话框。</p>
      </Dialog>
    </div>
  );
};

export default ClickOutsideExample;
