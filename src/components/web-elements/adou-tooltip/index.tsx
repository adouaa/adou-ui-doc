import React, { useState, useRef, useEffect, ReactNode } from "react";
import "./index.scss"; // 引入样式文件
import ReactDOM from "react-dom";
import getAbsolutePosition from "@site/src/utils/getAbsolutePosition";

interface TooltipProps {
  left?: any;
  right?: any;
  top?: any;
  bottom?: any;
  wrap?: boolean;
  width?: any;
  arrowOffsetPercent?: number;
  wrapperFlex?: boolean;
  mustShow?: boolean; // 用来支持 Slider的鼠标不在 RunWay 上面的时候也会展示提示
  show?: boolean;
  text: ReactNode;
  position?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "left-top"
    | "left-bottom"
    | "right-bottom"
    | "right-top";
  children: React.ReactNode;
  tooltipBgc?: string;
  tooltipFontColor?: string;
  arrowBorderColor?: string;
  wrapperClassname?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  left,
  right,
  top,
  bottom,
  wrap = false,
  width,
  arrowOffsetPercent,
  wrapperFlex,
  mustShow,
  show = true,
  text,
  position = "top",
  children,
  tooltipBgc = "#333",
  tooltipFontColor,
  arrowBorderColor = "#333",
  wrapperClassname,
}) => {
  const [isShow, setIsShow] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(false); // 用来实现当鼠标进入提示区域可以让提示存在的效果
  const tooltipRef = useRef<HTMLDivElement>(null);
  // ！！！用来记录鼠标是否进入提示区域
  //       当鼠标离开内容区域的时候，去判断是否进入了提示区域，如果进入，则不隐藏提示文字
  const isEnterTooltipRef = useRef<boolean>(false);
  const enterTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [tooltipWidth, setTooltipWidth] = useState<number>(0);
  const [tooltipHeight, setTooltipHeight] = useState<number>(0);

  const contentRef = useRef<any>(null);
  const [tooltipContentPosition, setTooltipContentPosition] = useState<any>({});

  const handleMouseEnter = () => {
    // 进入的时候，如果存在定时器，也清除掉
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    enterTimeoutRef.current = setTimeout(() => {
      setIsShow(true);
      setTimeout(() => {
        setIsVisible(true);
      }, 50);
    }, 150); // 延迟100毫秒
  };

  const handleMouseLeave = () => {
    if (mustShow) return;
    if (enterTimeoutRef.current) {
      clearTimeout(enterTimeoutRef.current);
    }
    setTimeout(() => {
      if (!isEnterTooltipRef.current) {
        setIsVisible(false);
      }
    }, 200);
    setTimeout(() => {
      if (!isEnterTooltipRef.current) {
        setIsShow(false);
      }
    }, 300);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 阻止事件的冒泡
  };

  /**
   * 用来实现当鼠标进入提示区域可以让提示存在的效果
   */
  const handleMouseEnterTooltip = () => {
    isEnterTooltipRef.current = true;
    // 如果当前是显示状态才能设置isVisible为true，不然鼠标移到提示区域也会展示
    setIsVisible(true);
    setTimeout(() => {
      setIsShow(true);
    }, 400);
  };

  const handleMouseLeaveTooltip = () => {
    if (mustShow) return;
    isEnterTooltipRef.current = false;
    setTimeout(() => {
      setIsVisible(false);
    }, 200);
    setTimeout(() => {
      setIsShow(false);
    }, 300);
  };

  // 注意：定位完 tooltipContentPosition 和 contentRef 之后，内容是向两边撑开的
  // 所以需要计算一下 tooltipRef 的位置(- 是left，+ 是 right)
  const calcTooltipContentTopAndLeft = () => {
    const verticalTop =
      tooltipContentPosition.y - tooltipRef.current?.clientHeight! - 8 + "px";
    const verticalBottom =
      tooltipContentPosition.y + contentRef.current?.clientHeight! + 5 + "px";
    const horizontalLeft =
      tooltipContentPosition.x - tooltipRef.current?.clientWidth! + "px";
    const horizontalTop =
      tooltipContentPosition.y +
      contentRef.current?.clientHeight! / 2 -
      tooltipRef.current?.clientHeight! / 2 +
      "px";
    const content =
      tooltipContentPosition.x + contentRef.current?.clientWidth / 2 + "px";
    if (position === "top") {
      return {
        top: verticalTop,
        left: content,
      };
    } else if (position === "top-right") {
      return {
        top: verticalTop,
        left:
          tooltipContentPosition.x +
          contentRef.current?.clientWidth / 2 +
          tooltipRef.current?.clientWidth! / 2 +
          "px",
      };
    } else if (position === "top-left") {
      return {
        top: verticalTop,
        left:
          tooltipContentPosition.x +
          contentRef.current?.clientWidth / 2 -
          tooltipRef.current?.clientWidth! / 2 +
          "px",
      };
    } else if (position === "bottom") {
      return {
        top: verticalBottom,
        left: content,
      };
    } else if (position === "bottom-right") {
      return {
        top: verticalBottom,
        left:
          tooltipContentPosition.x +
          tooltipRef.current?.clientWidth! / 2 +
          contentRef.current?.clientWidth / 2 +
          "px",
      };
    } else if (position === "bottom-left") {
      return {
        top: verticalBottom,
        left:
          tooltipContentPosition.x +
          contentRef.current?.clientWidth / 2 -
          tooltipRef.current?.clientWidth! / 2 +
          "px",
      };
    } else if (position === "left") {
      return {
        top:
          tooltipContentPosition.y +
          contentRef.current?.clientHeight! / 2 +
          "px",
        left: horizontalLeft,
      };
    } else if (position === "left-top") {
      return {
        top: horizontalTop,
        left: horizontalLeft,
      };
    } else if (position === "left-bottom") {
      return {
        top:
          tooltipContentPosition.y +
          contentRef.current?.clientHeight! / 2 +
          tooltipRef.current?.clientHeight! / 2 +
          "px",
        left: horizontalLeft,
      };
    } else if (position === "right") {
      return {
        top:
          tooltipContentPosition.y +
          contentRef.current?.clientHeight! / 2 +
          "px",
        left:
          tooltipContentPosition.x + contentRef.current?.clientWidth! + "px",
      };
    } else if (position === "right-top") {
      return {
        top: horizontalTop,
        left:
          tooltipContentPosition.x + contentRef.current?.clientWidth! + "px",
      };
    } else if (position === "right-bottom") {
      return {
        top:
          tooltipContentPosition.y +
          contentRef.current?.clientHeight! / 2 +
          tooltipRef.current?.clientHeight! / 2 +
          "px",
        left:
          tooltipContentPosition.x + contentRef.current?.clientWidth! + "px",
      };
    }
  };

  const calcTooltipArrowTopAndLeft = () => {
    // top 和 bottom 的属性
    const commonArrowOfsset = "-8px";

    const horizontal = tooltipWidth * (arrowOffsetPercent || 0.2);
    const minHorizontal = contentRef.current?.clientWidth! / 4;
    const finalHorizontal =
      horizontal > minHorizontal ? minHorizontal : horizontal + "px";

    // left 和 right 的属性
    const vertival = tooltipHeight * (arrowOffsetPercent || 0.2);
    const minVertival = contentRef.current?.clientHeight! / 4;
    const finalVertival =
      vertival > minVertival ? minVertival : vertival + "px";

    if (position === "top") {
      return {
        bottom: commonArrowOfsset,
        left: "50%",
        borderColor: `${arrowBorderColor} transparent transparent transparent`,
      };
    } else if (position === "top-left") {
      return {
        bottom: commonArrowOfsset,
        right: right || finalHorizontal,
        borderColor: `${arrowBorderColor} transparent transparent transparent`,
      };
    } else if (position === "top-right") {
      return {
        bottom: commonArrowOfsset,
        left: left || finalHorizontal,
        borderColor: `${arrowBorderColor} transparent transparent transparent`,
      };
    } else if (position === "bottom") {
      return {
        top: commonArrowOfsset,
        left: "50%",
        borderColor: `transparent transparent ${arrowBorderColor} transparent`,
      };
    } else if (position === "bottom-right") {
      return {
        top: commonArrowOfsset,
        left: left || finalHorizontal,
        borderColor: `transparent transparent ${arrowBorderColor} transparent`,
      };
    } else if (position === "bottom-left") {
      return {
        top: commonArrowOfsset,
        right: right || finalHorizontal,
        borderColor: `transparent transparent ${arrowBorderColor} transparent`,
      };
    } else if (position === "left") {
      return {
        top: "50%",
        right: commonArrowOfsset,
        borderColor: `transparent transparent transparent ${arrowBorderColor}`,
      };
    } else if (position === "left-top") {
      return {
        bottom: bottom || finalVertival,
        right: commonArrowOfsset,
        borderColor: `transparent transparent transparent ${arrowBorderColor}`,
      };
    } else if (position === "left-bottom") {
      return {
        top: top || finalVertival,
        right: "-9px",
        borderColor: `transparent transparent transparent ${arrowBorderColor}`,
      };
    } else if (position === "right") {
      return {
        top: "50%",
        left: commonArrowOfsset,
        borderColor: `transparent ${arrowBorderColor} transparent transparent`,
      };
    } else if (position === "right-top") {
      return {
        bottom: bottom || finalVertival,
        left: commonArrowOfsset,
        borderColor: `transparent ${arrowBorderColor} transparent transparent`,
      };
    } else if (position === "right-bottom") {
      return {
        top: top || finalVertival,
        left: commonArrowOfsset,
        borderColor: `transparent ${arrowBorderColor} transparent transparent`,
      };
    }
  };

  useEffect(() => {
    if (mustShow) {
      handleMouseEnter();
    } else {
      handleMouseLeave();
    }
  }, [mustShow]);

  useEffect(() => {
    if (tooltipRef.current) {
      const tooltipElement = tooltipRef.current;
      setTooltipWidth(tooltipElement.offsetWidth);
      setTooltipHeight(tooltipElement.offsetHeight);
    }
    if (isShow) {
      const position = getAbsolutePosition(contentRef.current, 0, 0);
      setTooltipContentPosition(position);
    }
  }, [isShow, isVisible, children]); // 这边需要加上 children 的依赖，不然 外边内容变化或者位置更新的时候，tooltip 不会重新计算位置

  return (
    <div
      className={`adou-tooltip-wrapper ${wrapperClassname || ""}`}
      style={{ ...(wrapperFlex ? { flex: 1, display: "flex" } : {}) }}
    >
      <div
        ref={contentRef}
        className="adou-tooltip-content"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ ...(wrapperFlex ? { flex: 1 } : {}) }}
      >
        {children}
      </div>
      {/* text?.trim?.()?.length > 0 &&
              show &&
              isShow && */}
      {(typeof text === "string" ? text?.trim?.()?.length > 0 : text) &&
        show &&
        isShow &&
        ReactDOM.createPortal(
          <div
            ref={tooltipRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnterTooltip}
            onMouseLeave={handleMouseLeaveTooltip}
            className={`adou-tooltip ${
              isVisible ? "show-tool-tip" : ""
            } adou-tooltip-${position}`}
            style={{
              backgroundColor: tooltipBgc,
              color: tooltipFontColor,
              width,
              whiteSpace: wrap || width ? "normal" : "nowrap",
              position: "absolute",
              ...calcTooltipContentTopAndLeft(),
            }}
          >
            <div
              style={{ ...calcTooltipArrowTopAndLeft() }}
              className={`adou-tooltip-arrow adou-tooltip-arrow-${position}`}
            ></div>
            {text}
          </div>,
          document.body
        )}
    </div>
  );
};

export default Tooltip;
