import { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import Calendar from "@site/src/components/web-elements/adou-calendar";
import AdouInput from "@site/src/components/adou-new-form/adou-Input";
import Dialog from "@site/src/components/web-elements/adou-dialog";
import BrowserOnly from "@docusaurus/BrowserOnly";

interface DoubleClickCalendarProps {}

const DoubleClickCalendar = ({}: DoubleClickCalendarProps) => {
  /**
   * 双击展示弹窗逻辑
   */
  const [dayInfo, setDayInfo] = useState<any>({});
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [eventName, setEventName] = useState<string>("");

  // 示例数据--注意：日期必须是 两位数 05  01  10  15
  const [calendarData, setCalendarData] = useState<any[]>([
    { id: "2024-12-01", event: "会议" },
    { id: "2024-11-05", event: "项目截止" },
    { id: "2024-11-10", event: "生日派对555" },
  ]);

  const handleCloseModal = () => {
    setModalShow(false);
  };
  const handleCofirmModal = () => {
    const findDay = calendarData.find((item: any) => item.id === dayInfo.id);
    if (findDay?.id) {
      setCalendarData((preData: any) =>
        preData.map((item: any) => {
          if (item.id === findDay.id) {
            item.event = eventName;
          }
          return item;
        })
      );
    } else {
      setCalendarData((preData: any) => [
        ...preData,
        { id: dayInfo.id, event: eventName },
      ]);
    }

    handleCloseModal();
  };
  const handleDoubleClick = (dayInfo: any) => {
    setDayInfo(dayInfo);
    setModalShow(true);
  };

  const handleEventChange = (value: any) => {
    setEventName(value);
  };

  return (
    <div className="data-calendar-wrapper">
      <BrowserOnly fallback={<div>Loading...</div>}>
        {() => (
          <>
            <Calendar
              data={calendarData}
              onDoubleClick={handleDoubleClick}
            ></Calendar>

            <Dialog
              show={modalShow}
              onCancel={handleCloseModal}
              onClose={handleCloseModal}
              onConfirm={handleCofirmModal}
            >
              {
                <>
                  <AdouInput
                    defaultValue={dayInfo.event}
                    label="事件名称"
                    name="event"
                    onChange={handleEventChange}
                  ></AdouInput>
                </>
              }
            </Dialog>
          </>
        )}
      </BrowserOnly>
    </div>
  );
};

export default DoubleClickCalendar;
