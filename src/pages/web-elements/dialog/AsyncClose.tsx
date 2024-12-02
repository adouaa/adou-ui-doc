import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const BasicExample = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState<boolean>(false);

  const handleConfirm = () => {
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(false);
      setIsOpen(false);
    }, 2000);
  };

  return (
    <div className="basic-wrapper">
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        打开对话框
      </Button>
      <Dialog
        show={isOpen}
        confirmLoading={confirmLoading}
        onConfirm={handleConfirm}
        onClose={() => setIsOpen(false)}
        title="异步关闭对话框"
      >
        <p>这是一个异步关闭的对话框内容。</p>
      </Dialog>
    </div>
  );
};

export default BasicExample;
