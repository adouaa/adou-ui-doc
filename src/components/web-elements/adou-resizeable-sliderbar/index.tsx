import React, { useRef, useState, useEffect, useImperativeHandle } from "react";
import "./index.scss"; // 自定义样式

interface ResizableSidebarProps {
  wrapperClsassName?: string;
  wrapperStyle?: React.CSSProperties;
  showTggleBtnWhenNotExpanded?: boolean;
  actRef?: any;
  showToggleBtn?: boolean;
  toggleBtnStyle?: React.CSSProperties;
  toggleBtnClassName?: string;
  contentOverflow?: boolean;
  contentFlex?: boolean;
  initialWidth?: string;
  initialHeight?: any;
  minDragWidth?: number;
  minWidth?: number;
  maxWidth?: string;
  children?: any;
  onToggle?: (isExpanded: boolean) => void;
}

const ResizableSidebar = ({
  wrapperClsassName,
  wrapperStyle,
  showTggleBtnWhenNotExpanded = true,
  actRef,
  showToggleBtn = true,
  toggleBtnStyle,
  toggleBtnClassName,
  contentOverflow = true,
  contentFlex = false,
  initialWidth = "0px",
  initialHeight = "100%",
  minWidth = 50,
  maxWidth = "300px",
  children,
  onToggle,
}: ResizableSidebarProps) => {
  const sidebarRef = useRef<any>(null);
  const [isResizing, setIsResizing] = useState(false);
  const [currentSidebarWidth, setCurrentSidebarWidth] = useState<any>("0"); // 最新宽度
  const [initialSideBarWidth, setInitialSideBarWidth] = useState<number>(0); // 记录初始宽度
  const [initialSiderBarHeight, setInitialSiderBarHeight] =
    useState<any>(initialHeight);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isShowToggleBtnWhenNotExpanded, setIsShowToggleBtnWhenNotExpanded] =
    useState<boolean>(showTggleBtnWhenNotExpanded);
  const resizeableContainerRef = useRef<any>();
  const siderBarRef = useRef<any>();
  const toggleBtnRef = useRef<any>(null);

  useEffect(() => {
    const handleMouseMove = (event: any) => {
      if (!isResizing) return;

      setCurrentSidebarWidth(
        event.clientX - sidebarRef.current.getBoundingClientRect().left
      );
    };

    const handleMouseUp = () => {
      setIsResizing(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isResizing]);

  const toggleSidebar = () => {
    setCurrentSidebarWidth(
      parseFloat(currentSidebarWidth) > minWidth
        ? minWidth + "px"
        : parseFloat(initialWidth)
        ? initialWidth
        : maxWidth
    ); // 假设展开宽度为300
    onToggle && onToggle(!isExpanded);
    setIsExpanded((prev: boolean) => !prev);
    setTimeout(() => {
      // setIsShowToggleBtnWhenNotExpanded(!isShowToggleBtnWhenNotExpanded); 不能直接这样写，会出现状态错乱
      // 如果在收起时 不需要显示 toggleBtn，才执行下面的逻辑
      if (!showTggleBtnWhenNotExpanded) {
        setIsShowToggleBtnWhenNotExpanded((prev: boolean) => !prev);
      }
    }, 100);
  };

  const handleSliderBarMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
  };

  const handleDragStart = () => {
    // [_initialSideBarWidth, setInitialSideBarWidth]好像目前没用。。
    const _initialSideBarWidth = resizeableContainerRef.current.offsetWidth;
    setInitialSideBarWidth(_initialSideBarWidth);
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();

    const rect = resizeableContainerRef.current.getBoundingClientRect();
    const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
    if (calcWidth > parseFloat(maxWidth)) {
      setCurrentSidebarWidth(maxWidth);
    } else {
      setCurrentSidebarWidth(calcWidth + "px");
    }
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const rect = resizeableContainerRef.current.getBoundingClientRect();
    const calcWidth = e.clientX - rect.left; // 计算当前鼠标的位置和元素距离浏览器左边位置的差来做新宽度
    e.preventDefault();
    if (calcWidth > parseFloat(maxWidth)) {
      setCurrentSidebarWidth(maxWidth);
    } else {
      setCurrentSidebarWidth(calcWidth + "px");
    }
    setIsDragging(false);
    console.log("currentSidebarWidth: ", currentSidebarWidth);
    if (parseFloat(currentSidebarWidth) > minWidth) {
      setIsShowToggleBtnWhenNotExpanded(true);
      setIsExpanded(true); // 拖拽结束，如果宽度大于最小宽度，则认为展开
    } else {
      setIsShowToggleBtnWhenNotExpanded(false);
      setIsExpanded(false); // 拖拽结束，如果宽度小于最小宽度，则认为收起
    }
  };

  const getContentWidth = () => {
    const content = resizeableContainerRef.current.querySelector(".content");
    return content.offsetWidth;
  };

  useEffect(() => {
    if (parseFloat(initialWidth)) {
      setIsExpanded(true);
    }
  }, [initialWidth]);

  useEffect(() => {
    // 延迟执行，因为父元素的内容可能是异步去获取的
    setTimeout(() => {
      setInitialSiderBarHeight(
        resizeableContainerRef.current?.parentElement?.offsetHeight
      );
    }, 1200);
  }, [resizeableContainerRef.current]);

  // 为第一次出现添加动画效果
  useEffect(() => {
    setTimeout(() => {
      setCurrentSidebarWidth(
        parseFloat(initialWidth)
          ? parseFloat(initialWidth!) > parseFloat(maxWidth)
            ? maxWidth
            : initialWidth
          : 0
      );
    }, 100);
  }, []);

  useImperativeHandle(
    actRef,
    () => ({
      getExpandStatus: () => {
        return isExpanded;
      },
      toggleSidebar,
    }),
    [isExpanded]
  );

  return (
    <>
      <div
        ref={resizeableContainerRef}
        className={`pb-1 resizable-sidebar pe-1 ${
          isDragging ? "draging" : ""
        } ${wrapperClsassName ? wrapperClsassName : ""}`}
        style={{
          width: `${currentSidebarWidth}`,
          height: initialHeight || initialSiderBarHeight + "px" || 0,
          paddingLeft: "5px",
          // overflow: currentSidebarWidth === maxWidth ? "auto" : "hidden",
          ...wrapperStyle,
        }}
      >
        <div
          className="content"
          style={{
            display: contentFlex ? "flex" : "",
            overflow: contentOverflow ? "auto" : "",
          }}
        >
          {children}
        </div>
        <div
          ref={siderBarRef}
          draggable={true}
          style={{ opacity: 0, right: isDragging ? "-5px" : "-2px" }}
          className={`resize-handle-bar`}
          onMouseUp={handleDragEnd}
          onMouseDown={handleSliderBarMouseDown}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        ></div>
        {showToggleBtn ? (
          (
            isExpanded
              ? initialHeight > 0 || initialSiderBarHeight > 0 // 如果是展开的情况下，要判断宽度
              : isShowToggleBtnWhenNotExpanded
          ) ? (
            // 非展开的情况下(即收起状态)，判断是否要显示 toggle 按钮
            <div
              ref={toggleBtnRef}
              className={`toggle-btn ${toggleBtnClassName}`}
              onClick={toggleSidebar}
              style={{
                ...toggleBtnStyle,
                /* ...(toggleBtnPosition?.right
                ? {
                    right: isExpanded ? toggleBtnPosition.right : "12px",
                    top: toggleBtnPosition.top,
                  }
                : {}), */
              }}
            >
              <i
                className={`fa-solid text-white ${
                  parseFloat(currentSidebarWidth) <= minWidth
                    ? "fa-angles-right"
                    : "fa-angles-left"
                }`}
              ></i>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default ResizableSidebar;
