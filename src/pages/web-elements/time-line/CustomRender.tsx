import TimeLine, {
  TimeLineItem,
} from "@site/src/components/web-elements/adou-time-line";
import React from "react";
const events = [
  {
    date: "2024-01-11 23:47",
    id: 1,
    title: "bug修复",
    content: "修复了若干bug",
    isFinish: true,
  },
  {
    date: "2024-01-11 15:47",
    id: 1,
    title: "发布版本",
    content: "发布 v1.0.0 版本",
    isFinish: true,
    render: (data) => (
      <>
        <div className="custom-timeline-item pb-1">
          <div className="title d-flex align-items-center">
            <div className="text text-danger me-2">{data.title}</div>
            <div className={`fa-regular fa-thumbs-up text-danger`}></div>
          </div>
          <div className="content-text">{data.content}</div>
        </div>
      </>
    ),
  },
  // ... 其他事件
];
const CustomRender = () => {
  return (
    <TimeLine events={events}>
      {events.map((event) => (
        <TimeLineItem
          key={event.id}
          render={(data) => (
            <div className="custom-timeline-item pb-2">
              <div className={`dot ${data.type}`}></div>
              <div>{data.title}</div>
              <div>{data.content}</div>
            </div>
          )}
        />
      ))}
    </TimeLine>
  );
};
export default CustomRender;
