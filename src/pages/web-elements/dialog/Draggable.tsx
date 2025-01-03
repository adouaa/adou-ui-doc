import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const DragExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="drag-wrapper">
      <Button onClick={() => setIsOpen(true)}>打开对话框</Button>
      <Dialog
        draggble
        show={isOpen}
        onClose={() => setIsOpen(false)}
        title="基本对话框"
      >
        <p>这是一个基本的对话框内容。</p>
      </Dialog>
    </div>
  );
};

export default DragExample;
