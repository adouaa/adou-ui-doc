import { useState, useEffect, useRef, ReactNode } from "react";
import React from "react";
import "./index.scss";

interface CollapseItemProps {
  name: any;
  wrapperClassName?: string;
  controlRightIcon?: string;
  controlClassName?: string;
  showBorder?: boolean;
  single?: boolean;
  hover?: boolean;
  title?: any;
  controlContentRight?: any;
  children?: any;
  showContent?: boolean; // 新增 showContent 属性
  onClick?: () => void; // 新增 onClick 属性
  _onItemClick?: (name: string) => void; // 新增 _onItemClick 属性
}

const CollapseItem = ({
  name,
  showContent = false,
  wrapperClassName,
  controlRightIcon,
  controlClassName,
  showBorder = true,
  single,
  hover,
  title,
  controlContentRight,
  children,
  onClick,
  _onItemClick,
}: CollapseItemProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(showContent);
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const contentRef = useRef<any>(null);

  const handleItemClick = () => {
    setIsOpen((pre) => !pre);
    if (onClick) {
      onClick(); // 调用传递的 onClick 函数
    }
    _onItemClick && _onItemClick(name);
  };

  const handleMouseEnter = () => {
    if (hover) {
      handleItemClick();
    }
    setIsEnter(true);
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  const calculateContentMaxHeight = () => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      contentRef.current.style.maxHeight = isOpen ? `${contentHeight}px` : "0";
    }
  };

  useEffect(() => {
    setIsOpen(showContent);
  }, [showContent]);

  useEffect(() => {
    calculateContentMaxHeight();
  }, [isOpen]);

  return (
    <div
      className={`collapse-wrapper ${wrapperClassName}`}
      style={{ ...(!showBorder ? { border: "none" } : {}) }}
    >
      <div
        className={`control ${controlClassName || ""}`}
        onClick={handleItemClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="control-left">{title || "点击后可以展开或者折叠"}</div>
        <div className="control-right">
          {controlContentRight ? (
            controlContentRight
          ) : (
            <i
              className={`control-arrow ${
                controlRightIcon || "fa-solid fa-angle-right"
              } ${isOpen ? "active" : ""} ${isEnter ? "enter" : ""}`}
            ></i>
          )}
        </div>
      </div>
      <div
        style={{
          maxHeight: "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
        className={`content mt-2`}
        ref={contentRef}
      >
        {children || "这是一段默认展开内容"}
      </div>
    </div>
  );
};

export default CollapseItem;
