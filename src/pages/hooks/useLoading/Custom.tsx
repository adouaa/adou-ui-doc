import React from "react";
import useLoading from "@site/src/hooks/useLoading";
import Button from "@site/src/components/adou-button";

const Custom = () => {
  const { showLoading, hideLoading } = useLoading();
  const handleClick = () => {
    showLoading(
      <div className="spinner-grow text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>,
      "加载中，请耐心等待......"
    );
    setTimeout(hideLoading, 2000);
  };
  return <Button onClick={handleClick}>显示加载状态 2 秒</Button>;
};

export default Custom;
