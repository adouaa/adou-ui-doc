import TimeLine, {
  TimeLineItem,
} from "@site/src/components/web-elements/adou-time-line";
import React from "react";

const events = [
  { id: 1, title: "步骤1", isFinish: true, date: "2022-01-01 12:00:00" },
  { id: 2, title: "步骤2", isFinish: true, date: "2022-01-01 12:00:00" },
  { id: 3, title: "步骤3", date: "2022-01-01 12:00:00" },
];
const Horizontal = () => {
  return (
    <TimeLine events={events} vertical={false}>
      {events.map((event) => (
        <TimeLineItem key={event.id} />
      ))}
    </TimeLine>
  );
};

export default Horizontal;
