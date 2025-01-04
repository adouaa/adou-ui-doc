// useLoading.ts
import { useState, useEffect } from "react";
import React from "react";
import { createRoot, Root } from "react-dom/client";
import "./loading.scss";

interface LoadingProps {
  icon?: React.ReactNode;
  text?: string;
}

const Loading = ({ icon, text }: LoadingProps) => {
  return (
    <div className="loading-overlay">
      {icon || <div className="loading-spinner"></div>}
      <span className=" ms-2">{text || "Loading..."}</span>
    </div>
  );
};

interface LoadingInstance {
  show: (icon?: React.ReactNode, text?: string) => void;
  hide: () => void;
}

let loadingCount = 0;
let loadingInstance: LoadingInstance | null = null;
let root: Root | null = null;

const createLoadingInstance = (): LoadingInstance => {
  // 创建容器
  const container = document.createElement("div");
  container.className = "loading-wrapper";
  document.body.appendChild(container);

  // 创建 root
  root = createRoot(container);

  // 渲染组件
  const render = (visible: boolean, icon?: React.ReactNode, text?: string) => {
    root?.render(visible ? <Loading icon={icon} text={text} /> : null);
  };

  return {
    show: (icon?: React.ReactNode, text?: string) => {
      render(true, icon, text);
    },
    hide: () => {
      render(false);
    },
  };
};

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // 确保只创建一个实例
    if (!loadingInstance) {
      loadingInstance = createLoadingInstance();
    }
  }, []);

  const showLoading = (icon?: React.ReactNode, text?: string) => {
    loadingCount++;
    setIsLoading(true);
    loadingInstance?.show(icon, text);
  };

  const hideLoading = () => {
    loadingCount--;
    if (loadingCount <= 0) {
      loadingCount = 0;
      setIsLoading(false);
      loadingInstance?.hide();
    }
  };

  return {
    loading: isLoading,
    showLoading,
    hideLoading,
  };
};

export default useLoading;
