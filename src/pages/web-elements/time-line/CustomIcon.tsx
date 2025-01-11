import React from "react";
import TimeLine, {
  TimeLineItem,
} from "@site/src/components/web-elements/adou-time-line";

const events = [
  {
    id: 1,
    title: "Event 1",
    description: "Description for event 1",
    date: "2023-01-01",
    isFinish: true,
  },
  {
    id: 2,
    title: "Event 2",
    description: "Description for event 2",
    date: "2023-02-01",
    unCheckedIcon: "fa-solid fa-xmark text-danger",
  },
  {
    id: 3,
    title: "Event 3",
    description: "Description for event 3",
    date: "2023-03-01",
  },
];

const CustomIcon = () => {
  return (
    <TimeLine events={events}>
      {events.map((event) => (
        <TimeLineItem key={event.id} />
      ))}
    </TimeLine>
  );
};
export default CustomIcon;
