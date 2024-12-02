import React, { useState } from "react";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import Button from "@site/src/components/adou-button";

const CustomFooterExample = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="custom-footer-wrapper">
      <Button onClick={() => setIsOpen(true)}>自定义页脚文字</Button>
      <Dialog
        cancelText="关闭的文字"
        confirmText="确定的文字"
        show={isOpen}
        onClose={() => setIsOpen(false)}
        title="基本对话框"
      >
        <p>这是一个自定义页脚按钮文字的对话框内容。</p>
      </Dialog>
    </div>
  );
};

export default CustomFooterExample;
