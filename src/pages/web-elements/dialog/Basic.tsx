import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const BasicExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="basic-wrapper">
      <Button onClick={() => setIsOpen(true)}>Primary</Button>
      <Dialog show={isOpen} onClose={() => setIsOpen(false)}></Dialog>
    </div>
  );
};

export default BasicExample;
