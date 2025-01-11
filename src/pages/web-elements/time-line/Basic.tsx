import React from "react";
import TimeLine, {
  TimeLineItem,
} from "@site/src/components/web-elements/adou-time-line";

const events = [
  {
    id: 1,
    title: "事件1",
    date: "2024-01-01",
    isFinish: true,
    description: "这是事件1的描述",
  },
  { id: 2, title: "事件2", date: "2024-01-02" },
  { id: 3, title: "事件3", date: "2024-01-03" },
];

const Basic = () => {
  return (
    <TimeLine events={events}>
      {events.map((event) => (
        <TimeLineItem key={event.id} />
      ))}
    </TimeLine>
  );
};

export default Basic;
