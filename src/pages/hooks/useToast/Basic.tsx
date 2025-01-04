import React from "react";
import useToast from "@site/src/hooks/useToast";
import Button from "@site/src/components/adou-button";

const Basic = () => {
  const toast = useToast();
  const showToast = (type) => {
    toast.open({
      type,
      content: `这是一条${type}提示`,
    });
  };
  return (
    <div className="d-flex gap-2">
      <Button onClick={() => showToast("success")}>成功提示</Button>
      <Button onClick={() => showToast("warning")}>警告提示</Button>
      <Button onClick={() => showToast("error")}>错误提示</Button>
    </div>
  );
};

export default Basic;
