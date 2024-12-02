import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const MaximizeExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="maximize-wrapper">
      <Button onClick={() => setIsOpen(true)}>打开最大对话框</Button>
      <Dialog
        show={isOpen}
        onClose={() => setIsOpen(false)}
        max
        title="最大化对话框"
      >
        <p>这是一个最大化显示的对话框。</p>
      </Dialog>
    </div>
  );
};

export default MaximizeExample;
