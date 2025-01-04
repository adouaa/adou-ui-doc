import React from "react";
import useLoading from "@site/src/hooks/useLoading";
import Button from "@site/src/components/adou-button";

const AsyncOperation = () => {
  const { showLoading, hideLoading } = useLoading();
  const handleAsyncOperation = async () => {
    showLoading();
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      // 模拟异步操作
    } finally {
      hideLoading();
    }
  };
  return <Button onClick={handleAsyncOperation}>执行异步操作</Button>;
};

export default AsyncOperation;
