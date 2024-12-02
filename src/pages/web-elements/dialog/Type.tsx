import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const TypeExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="type-wrapper">
      <Button onClick={() => setIsOpen(true)}>Tip对话框</Button>
      <Dialog
        type="tip"
        show={isOpen}
        onClose={() => setIsOpen(false)}
      ></Dialog>
    </div>
  );
};

export default TypeExample;
