import { useEffect, useRef, useState } from "react";
import React from "react";

interface TimeLineItemProps {
  data?: any;
  vertical?: boolean;
  render?: any;
  isLasted?: boolean;
}

const TimeLineItem = ({
  data,
  render,
  vertical,
  isLasted,
}: TimeLineItemProps) => {
  const [timeLineWidth, setTimeLineWidth] = useState<number>(0);
  const [timeLineHeight, setTimeLineHeight] = useState<number>(0);

  const timeLineItemWrapperRef = useRef<any>();

  useEffect(() => {
    if (timeLineItemWrapperRef.current) {
      if (vertical) {
        setTimeLineHeight(
          timeLineItemWrapperRef.current.getBoundingClientRect().height - 14
        );
        setTimeLineWidth(2);
      } else {
        setTimeLineWidth(
          timeLineItemWrapperRef.current.getBoundingClientRect().width - 20
        );
        setTimeLineHeight(2);
      }
    }
  }, [timeLineItemWrapperRef, data, render]);

  return (
    <div ref={timeLineItemWrapperRef} className="time-line-item-wrapper">
      <div className={`content`}>
        <div className="icon d-flex justify-content-center align-items-center">
          <i
            className={`fs-5 fa-solid  ${
              data.isFinish
                ? data.checkedIcon || "fa-circle-check finished"
                : data.unCheckedIcon || "fa-solid fa-circle-xmark un-finish"
            }`}
          ></i>
        </div>
        {data.date && <div className="time-line-date">{data.date}</div>}
        {data.render ? (
          data.render(data)
        ) : render ? (
          render(data)
        ) : (
          <div className="time-line-content">
            <div>{data.title}</div>
            <div>{data.description}</div>
          </div>
        )}
        {!isLasted && (
          <div
            style={{ width: timeLineWidth, height: timeLineHeight }}
            className={`time-line-line ${
              data.isFinish ? "finished" : "un-finish"
            }`}
          ></div>
        )}{" "}
        {/* 连接线 */}
      </div>
    </div>
  );
};

export default TimeLineItem;
