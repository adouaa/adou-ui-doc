import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Calendar from "@site/src/components/adou-calendar";

interface DataCalendarProps {}

const DataCalendar = ({}: DataCalendarProps) => {
  const [calendarData, setCalendarData] = useState<any[]>([
    { id: "2024-12-01", event: "会议" },
    { id: "2024-11-05", event: "项目截止" },
    { id: "2024-11-10", event: "生日派对555" },
  ]);

  return (
    <div className="data-calendar-wrapper">
      <Calendar data={calendarData}></Calendar>
    </div>
  );
};

export default DataCalendar;
