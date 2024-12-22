import { useState, useEffect, useRef, memo } from "react";
import React from "react";
import IconArrowRight from "./assets/svg/icon_arrow_right";
import IconArrowLeft from "./assets/svg/icon_arrow_left";
import "./index.scss";

const HorizonScrollView = memo(({ children }: any) => {
  const [showRightBtn, setShowRightBtn] = useState(false);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [posIndex, setPosIndex] = useState(0);
  const scrollContentRef: any = useRef(null);
  const totalDistanceRef = useRef(0);

  const handleScrollBtnClick = (isRight: boolean) => {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1;
    const newEl = scrollContentRef.current.children[newIndex];
    const newElOffsetLeft = newEl.offsetLeft - 1;
    scrollContentRef.current.style.transform = `translateX(${-newElOffsetLeft}px)`;
    setPosIndex(newIndex);
    setShowRightBtn(totalDistanceRef.current > newElOffsetLeft);
    setShowLeftBtn(newElOffsetLeft > 0);
  };

  useEffect(() => {
    const scrollWidth = scrollContentRef.current.scrollWidth;
    const clientWidth = scrollContentRef.current.clientWidth;
    const totalDistance = scrollWidth - clientWidth;
    totalDistanceRef.current = totalDistance;
    if (totalDistance > 0) {
      setShowRightBtn(true);
    }
  }, [children]);

  return (
    <div className="horizon-scroll-view-wrapper">
      {showLeftBtn && (
        <div
          className="horizon-scroll-view-btn left hover-scale"
          onClick={() => handleScrollBtnClick(false)}
        >
          <IconArrowLeft />
        </div>
      )}
      {showRightBtn && (
        <div
          className="horizon-scroll-view-btn right hover-scale"
          onClick={() => handleScrollBtnClick(true)}
        >
          <IconArrowRight />
        </div>
      )}
      <div className="scroll-wrapper">
        <div className="scroll-content" ref={scrollContentRef}>
          {children}
        </div>
      </div>
    </div>
  );
});

export default HorizonScrollView;
