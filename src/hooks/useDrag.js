import { useState, useEffect, useRef } from "react";

const useDrag = (
  triggerRef,
  elementRef,
  isDialog = false,
  autoStyle = true,
  initialPosition = { x: 0, y: 0 }
) => {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [position, setPosition] = useState(initialPosition);
  const elementFirstPositionRef = useRef(null);

  const handleMouseMove = (e) => {
    // 处于拖动状态
    if (isDragging) {
      if (!isDialog) {
        console.log("e.clientX: ", e.clientX);
        console.log("dragOffset.x: ", dragOffset.x);
        console.log("window.scrollX: ", window.scrollX);
        console.log(
          "elementFirstPositionRef.current?.left: ",
          elementFirstPositionRef.current?.left
        );
        // 如果不是弹窗，要减去元素一开始在浏览器中的位置(因为顶部和左部都会有别的元素占着)

        // 解读：拿当前的鼠标位置(e.clientX) 减去鼠标最开始点击下的位置 与 元素最左边到浏览器距离的差值(dragOffset.x，点击之后就不变了)，再减去元素一开始在浏览器中的位置(elementFirstPositionRef.current?.left，不变)，再加上浏览器滚动的距离(window.scrollX)，得到差值的就是元素拖拽移动的距离
        // Y轴也一样
        setPosition({
          x:
            e.clientX -
            dragOffset.x -
            elementFirstPositionRef.current?.left +
            window.scrollX,
          // 还要 加上浏览器滚动的距离
          y:
            e.clientY -
            dragOffset.y -
            elementFirstPositionRef.current?.top +
            window.scrollY,
        });
      } else {
        // 如果是弹窗，则不用减
        setPosition({
          x: e.clientX - dragOffset.x,
          y: e.clientY - dragOffset.y,
        });
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // 绑定事件
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  // 如果需要自动设置样式的话，在这边处理，处理的是 triggerRef触发元素
  useEffect(() => {
    if (autoStyle && elementRef.current) {
      elementRef.current.style.position = "relative";
      elementRef.current.style.top = position.y + "px";
      elementRef.current.style.left = position.x + "px";
      elementRef.current.style.cursor = "move";
    }
  }, [position]);

  const handleMouseDown = (e) => {
    // 点击的时候获取当前元素距离浏览器的位置，获取的是 要拖拽的整体元素
    const dialogRect = elementRef.current.getBoundingClientRect();
    setIsDragging(true);
    // 因为弹窗一开始有 left和top，所以要减去 当前元素位置的left 和 top
    // 而其他元素在哪就是在哪，不需要减，所以要判断是弹窗还是普通元素哦 ---- 这两句注释没用了
    setDragOffset({
      // 减去当前元素距离浏览器的位置
      x: e.clientX - dialogRect.left, // 鼠标最开始点击下的位置 与 元素最左边到浏览器距离的差值，点击之后就不变了
      y: e.clientY - dialogRect.top,
    });
  };

  useEffect(() => {
    // 如果元素的定位是 relative的话，需要再元素挂载完之后，去记录一开始距离浏览器的位置
    if (elementRef.current) {
      elementFirstPositionRef.current =
        elementRef.current.getBoundingClientRect();
    }
  }, [elementRef]);

  return {
    position,
    handleMouseDown,
  };
};

export default useDrag;
