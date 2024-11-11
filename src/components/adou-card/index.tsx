import { ReactNode, useState } from "react";
import React from "react";
import "./index.scss";

interface CardProps {
  header?: ReactNode; // 可选头部内容
  headerAlign?: "start" | "center" | "end";
  footer?: ReactNode; // 可选底部内容
  footerAlign?: "start" | "center" | "end";
  children: ReactNode; // 卡片主体内容
  externalClassName?: string; // 外部扩展类名
  hoverUp?: boolean;
}

const Card = ({
  hoverUp,
  header,
  headerAlign = "start",
  footer,
  footerAlign = "start",
  children,
  externalClassName = "",
}: CardProps) => {
  const [isEnter, setIsEnter] = useState<boolean>(false);
  const handleMouseEnter = () => {
    if (hoverUp) {
      setIsEnter(true);
    }
  };

  const handleMouseLeave = () => {
    setIsEnter(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card-wrapper ${externalClassName} ${
        isEnter ? "hover-up" : ""
      }`}
    >
      {header && (
        <div className={`card-header p-2 text-${headerAlign}`}>{header}</div>
      )}
      <div className="card-content p-3">{children}</div>
      {footer && (
        <div className={`card-footer p-2 text-${footerAlign}`}>{footer}</div>
      )}
    </div>
  );
};

export default Card;
