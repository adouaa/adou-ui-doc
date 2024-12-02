import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const CanConfirmExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="can-confirm-wrapper">
      <Button size="md" onClick={() => setIsOpen(true)}>
        Primary
      </Button>
      <Dialog
        showCancel={false}
        canConfirm={false}
        show={isOpen}
        onClose={() => setIsOpen(false)}
      ></Dialog>
    </div>
  );
};

export default CanConfirmExample;
