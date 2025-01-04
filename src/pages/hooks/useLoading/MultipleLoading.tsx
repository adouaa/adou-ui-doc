import React from "react";
import useLoading from "@site/src/hooks/useLoading";
import Button from "@site/src/components/adou-button";

const MultipleLoading = () => {
  const { showLoading, hideLoading } = useLoading();
  const simulateMultipleRequests = () => {
    showLoading();
    setTimeout(() => {
      hideLoading();
      // 第一个请求完成
    }, 1000);
    showLoading();
    setTimeout(() => {
      hideLoading();
      // 第二个请求完成
    }, 2000);
  };
  return <Button onClick={simulateMultipleRequests}>模拟多个请求</Button>;
};

export default MultipleLoading;
