import React, { useRef } from "react";
import TimeLineItem from "./adou-time-line-item";

import "./index.scss"; // 引入样式文件

interface TimeLineProps {
  events?: any;
  vertical?: boolean;
  children?: any;
}

export { TimeLineItem };

const TimeLine = ({ children, events, vertical = true }: TimeLineProps) => {
  const timeLineContentBoxRef = useRef<any>();

  const renderChildren = () => {
    let childrenArr = children;
    let enhancedChildren: any[] = [];
    if (!Array.isArray(children)) {
      childrenArr = [children];
    }
    events.map((event: any, index: number, self: any[]) => {
      childrenArr.forEach((chid: any, i: number) => {
        if (index === i) {
          const enhancedChild = React.cloneElement(chid, {
            data: event,
            vertical: vertical,
            isLasted: i === self.length - 1,
          });
          enhancedChildren.push(enhancedChild);
        }
      });
    });
    {
      /* events.map((event: any, index: number, self: any[]) => (
                <div ref={timeLineContentBoxRef} className='time-line-content-box' key={event.id}>
                    {render && render(event, timeLineWidth, timeLineHeight, index === self.length - 1)}
                </div>
            )) */
    }
    return enhancedChildren.map((item: any, index: number) => (
      <div className="time-line-item" key={index}>
        {item}
      </div>
    ));
  };

  return (
    <div className={`time-line-wrapper-${vertical ? "y" : "x"} pt-2`}>
      {renderChildren()}
    </div>
  );
};

export default TimeLine;
