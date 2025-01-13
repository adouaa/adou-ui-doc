import { useState } from "react";
import React from "react";
import Calendar from "@site/src/components/web-elements/adou-calendar";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface DataCalendarProps {}

const DataCalendar = ({}: DataCalendarProps) => {
  const [calendarData, setCalendarData] = useState<any[]>([
    { id: "2024-12-01", event: "会议" },
    { id: "2024-11-05", event: "项目截止" },
    { id: "2024-11-10", event: "生日派对555" },
  ]);

  return (
    <div className="data-calendar-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <Calendar data={calendarData}></Calendar>}
      </BrowserOnly>
    </div>
  );
};

export default DataCalendar;
