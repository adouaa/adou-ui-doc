import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Calendar from "@site/src/components/adou-calendar";

interface DateCalendarProps {}

const DateCalendar = ({}: DateCalendarProps) => {
  return (
    <div className="date-calendar-wrapper">
      <Calendar date={new Date("2023-11-05")}></Calendar>
    </div>
  );
};

export default DateCalendar;
