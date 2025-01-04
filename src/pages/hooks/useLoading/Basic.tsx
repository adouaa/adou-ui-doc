import React from "react";
import useLoading from "@site/src/hooks/useLoading";
import Button from "@site/src/components/adou-button";

const Basic = () => {
  const { showLoading, hideLoading } = useLoading();
  const handleClick = () => {
    showLoading();
    setTimeout(hideLoading, 2000);
  };
  return <Button onClick={handleClick}>显示加载状态 2 秒</Button>;
};

export default Basic;
