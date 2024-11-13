import React, { useEffect, useImperativeHandle, useRef, useState } from "react";
import "./index.scss"; // 引入样式
import Select from "@site/src/components/adou-new-form/adou-select";
import { CalendarDay } from "@site/src/pages/web-elements/calendar/type";

interface CalendarProps {
  calendarRef?: any;
  cellHeight?: any;
  minCellHeight?: any;
  date?: Date;
  data?: CalendarDay[];
  wrapperWidth?: any;
  wrapperHeight?: any;
  contentHeight?: any;
  modalContent?: any;
  renderEventUIFn?: any;
  onDoubleClick?: (dayInfo: CalendarDay) => void;
}

// 属性为 数组 的话默认值不能为 [] ，否则会导致 useEffect 循环执行，会导致出现问题
const Calendar = ({
  minCellHeight = "50px",
  calendarRef,
  cellHeight,
  date,
  wrapperWidth = "500px",
  wrapperHeight = "500px",
  contentHeight = "500px",
  data,
  renderEventUIFn,
  onDoubleClick,
}: CalendarProps) => {
  // 标记是否是第一次展示日历
  const [isFirstShow, setIsFirstShow] = useState<boolean>(true);

  // 某天高亮
  const [activeId, setActiveId] = useState<string>();

  // 被双击的数据
  const [doubleClickedDayInfo, setDoubleClickedDayInfo] = useState<any>({});

  // 单击某天，让当前时间变为点击的天数，并且当前天数数字高亮
  const handleTdClick = (dayInfo: any) => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), dayInfo.day)
    );
    setActiveId(dayInfo.id);
  };

  const handleTdDoubleClick = (dayInfo: any) => {
    setDoubleClickedDayInfo(dayInfo);
    onDoubleClick && onDoubleClick(dayInfo);
    /**
       * setAllDays((preArr: any[]) =>
          preArr.map((item: any) => {
              if (item.id === dayInfo.id) {
                  item.event = formData.event;
              }
              return item;
          })
      );
       */
  };

  // 给 currentDate 一个默认值
  const [currentDate, setCurrentDate] = useState<any>(date || new Date());
  const [currentMonth, setCurrentMonth] = useState<any>();
  const [currentYear, setCurrentYear] = useState<any>();

  const getCurrentYear = (year?: number) => {
    if (!currentDate.getFullYear) return;
    let currentYear: any;
    if (year) {
      currentYear = year;
    } else {
      currentYear = currentDate.getFullYear();
    }
    setCurrentYear(currentYear);
  };

  const getCurrentMonth = (month?: number) => {
    if (!currentDate.getMonth) return;
    let currentMonth: any;
    if (month || month === 0) {
      // 因为月份列表是从0开始的，所以要加1
      currentMonth = month + 1;
    } else {
      currentMonth = currentDate.getMonth() + 1;
    }
    setCurrentMonth(currentMonth);
  };

  // 获取指定月份的第一天和最后一天
  const getCurrentMonthFirstAndLastDate = (currentDate: any) => {
    if (!currentDate.getFullYear) return;
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // 获取指定月份的第一天
    const firstDate = new Date(year, month, 1);
    // 获取指定月份的最后一天
    const lastDate = new Date(year, month + 1, 0);

    return { firstDate, lastDate };
  };

  // 获取上一个月的天数
  const getPreviousMonthDays = (date: any) => {
    if (date && date.getMonth) {
      const month = date.getMonth();
      const year = date.getFullYear();
      const preMonth = new Date(year, month, 0);
      // 上一个月的天数
      const lastMonthDays = preMonth.getDate();
      console.log("lastMonthDays: ", lastMonthDays);
      return lastMonthDays;
    }
  };

  // 获取下一个月的天数
  const getNextMonthDays = (date: any) => {
    if (!date.getMonth) return;
    const month = date.getMonth();
    const year = date.getFullYear();
    const nextMonth = new Date(year, month + 1, 1);
    // 下一个月的天数. new Date()的参数需要传入的值是正常月份的值，所以需要加1。而通过date.getMonth()获取到的月份值是从0开始，所以会少于1
    const nextMonthDays = new Date(
      nextMonth.getFullYear(),
      nextMonth.getMonth() + 1,
      0
    ).getDate();
    return nextMonthDays;
  };

  // 获取上一个月需要展示在该月份的日期号数
  const getShouldShowPreMonthDays = () => {
    // 因为 有可能某一个月的第一天是 周日(firstDay为0)，所以这边要特殊判断，如果是 null，代表还没有获取到数据，所以直接 return，而如果是 0，表明 已经获取到数据了，但是为 周日(0)，但还是要去获取上一个月的日期号数
    if (currentMonthInfo.firstDay === null) return;
    const data_ = Array.from(
      { length: currentMonthInfo.firstDay ? currentMonthInfo.firstDay - 1 : 6 },
      (_, i) => {
        const findId = `${currentYear}-${currentMonth - 1}-${
          prevMonthDays - i
        }`;
        const event = data?.find((item: any) => item.id === findId);

        return {
          id: `${currentYear}-${currentMonth - 1}-${prevMonthDays - i}`,
          event: event?.event,
          day: prevMonthDays - i,
          isCurrentMonth: false,
        };
      }
    ).reverse();
    setshouldShowPreMonthDays(data_);
  };

  // 获取这个月需要展示在该月份的日期号数
  const getCurrentMonthDays = () => {
    if (!currentMonthInfo || !currentMonthInfo.lastDate?.getDate) return [];
    const length = currentMonthInfo.lastDate.getDate();
    console.log("length: ", length);
    const data_ = Array.from({ length }, (_, i) => {
      // 日期都用 字符串来展示，day也是
      const index =
        (i + 1).toString().length === 1 ? "0" + (i + 1) : String(i + 1);
      const findId = `${currentYear}-${currentMonth}-${index}`;
      const event = data?.find((item: any) => item.id === findId);

      return {
        id: `${currentYear}-${currentMonth}-${index}`,
        day: index, // 日期都用 字符串来展示，day也是
        event: event?.event,
        isCurrentMonth: true,
      };
    });
    setCurrentMonthDays(data_);
  };

  // 获取下一个月需要展示在该月份的日期号数
  const getShouldShowNextMonthDays = () => {
    if (!currentMonthInfo.lastDay) return [];

    const data_ = Array.from(
      { length: 7 - currentMonthInfo.lastDay },
      (_, i) => {
        const index = (i + 1).toString().length === 1 ? "0" + (i + 1) : i + 1;
        const findId = `${currentYear}-${currentMonth + 1}-${index}`;
        const event = data?.find((item: any) => item.id === findId);
        return {
          id: `${currentYear}-${currentMonth + 1}-${index}`,
          day: index,
          event: event?.event,
          isCurrentMonth: false,
        };
      }
    );
    setShouldShowNextMonthDays(data_);
  };

  // 函数将数字数组分组，每组 7 个
  const chunkAllDays = (array: any, size: any) => {
    const result: any = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  /**
   * 获取这个月的第一天和最后一天(date)
   */
  const [currentMonthInfo, setcurrentMonthInfo] = useState<any>({
    firstDate: null, // 这个月的第一天(date)
    lastDate: null, // 这个月的最后一天(date)
    firstDay: null, // 这个月的第一天是星期几(day)
    lastDay: null, // 这个月的最后一天是星期几(day)
  });
  // 这个月的第一天(date)
  const [currentMonthFirstDate, setCurrentMonthFirstDate] = useState<any>();
  // 这个月的最后一天(date)
  const [currentMonthLastDate, setCurrentMonthLastDate] = useState<any>();

  // 这个月第一天是星期几(day)
  const [currentMonthFirstDay, setCurrentMonthFirstDay] = useState<any>();
  // 这个月最后一天是星期几(day)
  const [currentMonthLastDay, setCurrentMonthLastDay] = useState<any>();

  // 上一个月的天数
  const [prevMonthDays, setPrevMonthDays] = useState<any>();
  // 下一个月的天数（好像没用）
  const [nextMonthDays, setNextMonthDays] = useState<any>();

  /**
   * 获取当前日历应该展示的所有日期
   */
  // 获取上一个月需要展示在该月份的日期号数
  const [shouldShowPreMonthDays, setshouldShowPreMonthDays] = useState<any>([]);
  // 下一个月需要展示在该月份的日期号数
  const [shouldShowNextMonthDays, setShouldShowNextMonthDays] = useState<any>(
    []
  );

  // 这月需要展示在该月份的日期号数
  const [currentMonthDays, setCurrentMonthDays] = useState<any>([]);
  // 当前日历应该展示的所有日期
  const [allDays, setAllDays] = useState<any[]>([]);

  // 分组后的最终展示的数据(七天一组，一个日历共展示 35天)
  const [finalShowData, setfinalShowData] = useState<any>([]);

  // const allDays = [...shouldShowPreMonthDays, ...currentMonthDays, ...shouldShowNextMonthDays];
  // 示例日期和时间段，使用对象形式并添加唯一标识符
  const [days, setDays] = useState<any[]>([
    { id: 1, name: "Mon" },
    { id: 2, name: "Tue" },
    { id: 3, name: "Wed" },
    { id: 4, name: "Thu" },
    { id: 5, name: "Fri" },
    { id: 6, name: "Sat" },
    { id: 7, name: "Sun" },
    /* { id: 1, name: '周一' },
      { id: 2, name: '周二' },
      { id: 3, name: '周三' },
      { id: 4, name: '周四' },
      { id: 5, name: '周五' },
      { id: 6, name: '周六' },
      { id: 7, name: '周日' }, */
  ]);

  const [timeSlots, setTimeSlots] = useState<any[]>([
    { id: 1, time: "08:00 AM" },
    { id: 2, time: "09:00 AM" },
    { id: 3, time: "10:00 AM" },
    { id: 4, time: "11:00 AM" },
    { id: 5, time: "12:00 PM" },
    { id: 6, time: "01:00 PM" },
    { id: 7, time: "02:00 PM" },
    { id: 8, time: "03:00 PM" },
    { id: 9, time: "04:00 PM" },
    { id: 10, time: "05:00 PM" },
  ]);

  // 获取当前月份的所有日期
  // const monthDays = Array.from({ length: currentMonthLastDate.getDate() }, (_, i) => i + 1);

  /**
   * 展示在头部左上角的日期
   */
  const [weekDayNames, setWddkDayNames] = useState<string[]>([
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六",
  ]);
  const [dayOfWeek, setDayOfWeek] = useState<any>(currentDate.getDay()); // 0 (星期天) 到 6 (星期六)
  const [displayDay, setdisplayDay] = useState<number>(0); // 将星期天转换为 7
  const [topLeftDay, setTopLeftDay] = useState<any>("");

  const getTopLeftDay = (currentDate: any) => {
    const displayDay = currentDate.getDay();
    setTopLeftDay(weekDayNames[displayDay]);
    setdisplayDay(displayDay);
  };

  /**
   * 展示在头部的月份
   */
  const [monthNames, setMonthNames] = useState<string[]>([
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ]);
  const [displayMonth, setdisplayMonth] = useState<number>(0); // 将星期天转换为 7
  const [topMLeftMonth, settopMLeftMonth] = useState<string>("");

  // TODO: 不能用currentDate来获取月份
  const getTopLeftMonth = (currentDate: any) => {
    const disPlayMonth = currentDate.getMonth();
    settopMLeftMonth(monthNames[disPlayMonth]);
  };

  /**
   * 日历操作区域
   */
  // 目前少一个月才是好操作的
  const [months, setMonths] = useState<any[]>([
    { label: "January", value: 0 },
    { label: "February", value: 1 },
    { label: "March", value: 2 },
    { label: "April", value: 3 },
    { label: "May", value: 4 },
    { label: "June", value: 5 },
    { label: "July", value: 6 },
    { label: "August", value: 7 },
    { label: "September", value: 8 },
    { label: "October", value: 9 },
    { label: "November", value: 10 },
    { label: "December", value: 11 },
  ]);
  // 目前少一个月才是好操作的
  const [years, setYears] = useState<any[]>([]);
  const generateYears = () => {
    // 创建一个空数组来存储结果
    const yearsList: any[] = [];
    // 生成当前年份以及前后5年的年份
    for (let i = -5; i <= 5; i++) {
      yearsList.push({ label: currentYear + i, value: currentYear + i });
    }

    setYears(yearsList);
  };

  // 选择月份
  const handleCurrentMonthChange = (month: any) => {
    getCurrentMonth(month.value);
    // 月份从0开始，少一个月直接赋值就是正确的
    setCurrentDate(
      new Date(currentDate.getFullYear(), month.value, currentDate.getDate())
    );
  };

  // 选择年份
  const handleCurrentYearChange = (year: any) => {
    getCurrentYear(year.value);

    setCurrentDate(
      new Date(year.value, currentDate.getMonth(), currentDate.getDate())
    );
  };

  // 获取上 / 下 一个月的日期
  const getPreviousMonthDate = (date: any = currentDate, step: number = -1) => {
    let currentData = new Date(date);
    console.log("🚀 ~ getPreviousMonthDate ~ currentData:", currentData);
    // 创建一个新的 Date 对象，避免修改原始日期
    const prevMonthDate = new Date(
      currentData.getFullYear(),
      currentData.getMonth() + step,
      currentData.getDate()
    );

    // 处理日期溢出问题，例如 2024-03-31 -> 2024-02-29
    // 通过设置到下一个月的1号，然后回退一天来处理
    if (
      prevMonthDate.getMonth() !==
      (currentData.getMonth() + step + 12) % 12
    ) {
      prevMonthDate.setDate(0);
    }
    console.log("prevMonthDate: ", prevMonthDate);
    setCurrentDate(prevMonthDate);
  };

  // 回到今天
  const goToday = () => {
    setCurrentDate(new Date());
  };

  /**
   * 让表格内容区域可以滚动
   */
  const calendarContainerRef = useRef<any>();
  const calendarHeaderRef = useRef<any>();
  const [calendarTableMaxHeight, setCalendarTableMaxHeight] =
    useState<number>(0);
  // 计算表格内容区域的最大高度
  const handleCalendarTableMaxHeight = () => {
    if (calendarContainerRef.current && calendarHeaderRef.current) {
      const calendarContainerHeight =
        calendarContainerRef.current.clientHeight - 8;
      const calendarHeaderHeight = calendarHeaderRef.current.clientHeight;
      const height =
        parseInt(contentHeight) > calendarContainerHeight - calendarHeaderHeight
          ? calendarContainerHeight - calendarHeaderHeight
          : !contentHeight
          ? calendarContainerHeight - calendarHeaderHeight
          : contentHeight;

      setCalendarTableMaxHeight(height);
    }
  };

  /**
   * 当前日期改变的时候，生成 当前月份的信息，并且同时获取 上一个月的天数(下一个月的天数没用上)
   */
  const generateCurrentMonthInfo = (currentDate?: any) => {
    const { firstDate, lastDate }: any =
      getCurrentMonthFirstAndLastDate(currentDate);
    setcurrentMonthInfo((preData: any) => ({
      ...preData,
      firstDate: firstDate,
      lastDate: lastDate,
      firstDay: firstDate.getDay(),
      lastDay: lastDate.getDay(),
    }));
    setPrevMonthDays(getPreviousMonthDays(firstDate));
  };

  useImperativeHandle(calendarRef, () => ({}));

  useEffect(() => {
    getCurrentYear();
    getCurrentMonth();
  }, []);

  useEffect(() => {
    // 当前日期改变的时候，生成 当前月份的信息，并且同时获取 上一个月的天数(下一个月的天数没用上)
    generateCurrentMonthInfo(currentDate);
    getTopLeftDay(currentDate);
    getTopLeftMonth(currentDate);
    getCurrentYear();
    getCurrentMonth();
  }, [currentDate]);

  // 获取这个月的第一天和最后一天(date)

  useEffect(() => {
    getShouldShowPreMonthDays();
    getShouldShowNextMonthDays();
    getCurrentMonthDays();
    generateYears();
    setActiveId(
      `${currentYear}-${currentMonth}-${
        currentDate.getDate().toString().length === 1
          ? "0" + currentDate.getDate()
          : currentDate.getDate()
      }`
    );
  }, [currentMonth, currentYear, currentMonthInfo, prevMonthDays]);

  useEffect(() => {
    setAllDays([
      ...shouldShowPreMonthDays,
      ...currentMonthDays,
      ...shouldShowNextMonthDays,
    ]);
  }, [shouldShowPreMonthDays, currentMonthDays, shouldShowNextMonthDays]);

  useEffect(() => {
    setfinalShowData(chunkAllDays(allDays, 7));
    handleCalendarTableMaxHeight();
  }, [allDays]);

  useEffect(() => {
    if (data && data.length && isFirstShow) {
      setCurrentDate(new Date(data[0].id));
      setIsFirstShow(false);
    } else {
      // 记得在非第一次展示日历的时候 重新获取当前日历的内容，不然新增或者修改后不会更新日历
      getCurrentMonthDays();
    }
  }, [data, date]);

  return (
    <div
      className="calendar-container"
      ref={calendarContainerRef}
      style={{ height: wrapperHeight, width: wrapperWidth }}
    >
      <div className="calendar-header" ref={calendarHeaderRef}>
        <div className="current-date-info">
          <div className="left me-3">
            {/* 今天的日期以及星期 */}
            <div className="day-box">
              <div className="day">{topLeftDay}</div>
            </div>
            <div className="date-box">
              <div className="date">
                <div className="num">{currentDate.getDate()}</div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="month me-1">{topMLeftMonth}</div>
            <div className="year">{currentDate.getFullYear()}</div>
          </div>
        </div>
        <div className="calendar-option">
          {/* 默认值不能使用 currentMonth，因为会存在列表是从0开始，第一次选择框展示的月份会多一个月 */}
          <div className="left">
            <div className="month-select">
              <Select
                isFormItem={false}
                showLabel={false}
                // rounded
                placeholder="January"
                defaultValue={currentDate.getMonth()}
                onChange={handleCurrentMonthChange}
                // minWidth={'120px'}
                width={"120px"}
                // optionContentMaxHeight={'300px'}
                options={months}
              ></Select>
            </div>
            <div className="year-select ms-2 me-2">
              <Select
                showLabel={false}
                defaultValue={currentDate.getFullYear()}
                onChange={handleCurrentYearChange}
                width={"80px"}
                options={years}
              ></Select>
            </div>
          </div>
          <div className="right">
            <div onClick={goToday} className="today-btn">
              今天
            </div>
          </div>
        </div>
      </div>
      <div
        className="calendar-content mt-2"
        style={{ maxHeight: calendarTableMaxHeight }}
      >
        <table className="calendar-table" style={{ height: "100%" }}>
          <thead style={{ position: "sticky", top: 0, zIndex: 1 }}>
            <tr>
              {/* <th>Time</th> */}
              {days.map((day) => (
                <th key={day.id}>{day.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {finalShowData.map((week: any, weekIndex: number) => (
              <tr key={weekIndex}>
                {week.map((dayInfo: any, dayIndex: number) => (
                  <td
                    onDoubleClick={() => handleTdDoubleClick(dayInfo)}
                    onClick={() => handleTdClick(dayInfo)}
                    key={dayInfo.id}
                    className={`calendar-cell`}
                  >
                    <div
                      className={`calendar-cell-content-box`}
                      style={{ height: cellHeight, minHeight: minCellHeight }}
                    >
                      <span
                        className={`calendar-cell-content-day ${
                          !dayInfo.isCurrentMonth ? "gray" : ""
                        }  ${activeId == dayInfo.id ? "active" : ""}`}
                      >
                        {dayInfo.day}
                      </span>
                      <div className="calendar-cell-content-event">
                        {renderEventUIFn
                          ? renderEventUIFn(dayInfo)
                          : dayInfo.event}
                      </div>
                    </div>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div
        onClick={() => getPreviousMonthDate(currentDate, -1)}
        className="month-btn pre-month-btn"
      >
        <i className="fa-solid fa-angle-left "></i>
      </div>
      <div
        onClick={() => getPreviousMonthDate(currentDate, 1)}
        className="month-btn next-month-btn"
      >
        <i className="fa-solid fa-angle-right "></i>
      </div>
    </div>
  );
};

export default Calendar;
