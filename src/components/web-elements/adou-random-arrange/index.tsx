import { useRef, Children, cloneElement, useImperativeHandle } from "react";
import React from "react";
import "./index.scss";
import Button from "../../adou-button";
import useThrottle from "@site/src/common/hooks/useThrottle";

interface RandomArrangeProps {
  actRef?: any;
  children?: React.ReactNode;
  buttonText?: string;
  onShuffle?: () => void;
  className?: string;
  buttonClassName?: string;
  showButton?: boolean;
  animationDuration?: number;
  animationTiming?: string;
}

const RandomArrange = ({
  actRef,
  children,
  buttonText = "随机排序",
  onShuffle,
  className = "",
  buttonClassName = "",
  showButton = true,
  animationDuration = 300,
  animationTiming = "ease-in-out",
}: RandomArrangeProps) => {
  const itemRefs = useRef<Map<number, HTMLElement>>(new Map());
  const itemListRef = useRef<HTMLDivElement>(null);

  const getElemBoundingClientRect = (elem: HTMLElement) => {
    return elem.getBoundingClientRect();
  };

  const recordPositions = () => {
    const positions = new Map();
    itemRefs.current.forEach((elem, index) => {
      positions.set(index, getElemBoundingClientRect(elem));
    });
    return positions;
  };

  const shuffleArray = (array: number[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleShuffle = useThrottle(() => {
    if (!itemListRef.current) return;

    const oldPositions = recordPositions();
    const childrenCount = Children.count(children);
    const indexes = shuffleArray([...Array(childrenCount)].map((_, i) => i));

    indexes.forEach((newIndex) => {
      const elem = itemRefs.current.get(newIndex);
      if (elem) {
        itemListRef.current!.appendChild(elem);
      }
    });

    requestAnimationFrame(() => {
      itemRefs.current.forEach((elem, index) => {
        const oldPos = oldPositions.get(index);
        const newPos = getElemBoundingClientRect(elem);

        const dx = oldPos.left - newPos.left;
        const dy = oldPos.top - newPos.top;

        elem.style.transform = `translate(${dx}px, ${dy}px)`;

        requestAnimationFrame(() => {
          elem.style.transition = `transform ${animationDuration}ms ${animationTiming}`;
          elem.style.transform = "";

          elem.addEventListener(
            "transitionend",
            () => {
              elem.style.transition = "";
            },
            { once: true }
          );
        });
      });
    });

    onShuffle?.();
  }, animationDuration);

  // 简化后的包装子元素逻辑

  const wrappedChildren = Children.map(children, (child: any, index) => {
    const enhancedChild = cloneElement(child, {
      key: index,

      className: `random-arrange-item ${child.props.className || ""}`,
    });
    return (
      <div
        className="random-arrange-item-wrapper"
        ref={(element: HTMLElement | null) => {
          // 处理原始组件的 ref

          if (typeof child.ref === "function") {
            child.ref(element);
          } else if (child.ref) {
            (child.ref as any).current = element;
          }

          // 存储到我们的 ref map 中

          if (element) {
            itemRefs.current.set(index, element);
          }
        }}
      >
        {enhancedChild}
      </div>
    );
  });

  useImperativeHandle(actRef, () => ({
    shuffle: handleShuffle,
  }));

  return (
    <div className={`random-arrange-wrapper ${className}`}>
      {showButton && (
        <div className="contrl-btn mb-2">
          <Button externalClassName={buttonClassName} onClick={handleShuffle}>
            {buttonText}
          </Button>
        </div>
      )}
      <div ref={itemListRef} className="random-arrange-list">
        {wrappedChildren}
      </div>
    </div>
  );
};

export default RandomArrange;
