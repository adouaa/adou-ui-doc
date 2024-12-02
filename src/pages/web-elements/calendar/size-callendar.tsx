import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Calendar from "@site/src/components/web-elements/adou-calendar";

interface SizeCalendarProps {}

const SizeCalendar = ({}: SizeCalendarProps) => {
  return (
    <div className="size-calendar-wrapper">
      <Calendar
        wrapperWidth={"800px"}
        wrapperHeight={"800px"}
        cellHeight={"80px"}
      ></Calendar>
    </div>
  );
};

export default SizeCalendar;
