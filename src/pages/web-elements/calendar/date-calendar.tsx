import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Calendar from "@site/src/components/web-elements/adou-calendar";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface DateCalendarProps {}

const DateCalendar = ({}: DateCalendarProps) => {
  return (
    <div className="date-calendar-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => <Calendar date={new Date("2023-11-05")}></Calendar>}
      </BrowserOnly>
    </div>
  );
};

export default DateCalendar;
