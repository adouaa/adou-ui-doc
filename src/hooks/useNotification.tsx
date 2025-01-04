import { useState, useEffect } from "react";
import { createRoot, Root } from "react-dom/client";
import React from "react";
import "./notification.scss";

interface NotificationProps {
  id?: number;
  title?: any;
  message?: any;
  type?: "success" | "danger" | "warning" | "info";
  appearing?: boolean;
  disappearing?: boolean;
  duration?: number;
  remainTime?: number;
  customTitleIcon?: React.ReactNode;
}

interface NotificationInstance {
  open: (message: Omit<NotificationProps, "id" | "appearing">) => void;
}

let notificationInstance: NotificationInstance | null = null;
let root: Root | null = null;
let notificationIdRef = 0;
let notifications: NotificationProps[] = [];
let timersMap = new Map<number, NodeJS.Timeout>();
let intervalsMap = new Map<number, NodeJS.Timeout>();

const NotificationContainer = () => {
  const [notificationList, setNotificationList] = useState<NotificationProps[]>(
    []
  );

  useEffect(() => {
    setNotificationList(notifications);
  }, [notifications]); // useEffect 可以监听到 非state的变量 notifications 的变化

  const close = (id?: number) => {
    notifications = notifications.map((item) => {
      if (id !== undefined && item.id === id) {
        return { ...item, disappearing: true };
      }
      return item;
    });
    setNotificationList([...notifications]);

    setTimeout(() => {
      notifications = notifications.filter((item) => item.id !== id);
      setNotificationList([...notifications]);

      // 清理定时器
      const timer = timersMap.get(id!);
      const interval = intervalsMap.get(id!);
      if (timer) {
        clearTimeout(timer);
        timersMap.delete(id!);
      }
      if (interval) {
        clearInterval(interval);
        intervalsMap.delete(id!);
      }
    }, 300);
  };

  const handleMouseEnter = (item: NotificationProps) => {
    // 暂停定时器
    const timer = timersMap.get(item.id!);
    const interval = intervalsMap.get(item.id!);
    if (timer) {
      clearTimeout(timer);
    }
    if (interval) {
      clearInterval(interval);
    }
  };

  const handleMouseLeave = (item: NotificationProps) => {
    // 重新设置定时器
    const timer = setTimeout(() => {
      close(item.id);
    }, item.remainTime);
    timersMap.set(item.id!, timer);

    const interval = setInterval(() => {
      const notification = notifications.find((n) => n.id === item.id);
      if (notification) {
        notification.remainTime! -= 100;
        setNotificationList([...notifications]);
      }
    }, 100);
    intervalsMap.set(item.id!, interval);
  };
  const generateTitleIcon = (item: NotificationProps) => {
    switch (item.type) {
      case "success":
        return <i className="text-success fa-regular fa-circle-check"></i>;
      case "warning":
        return <i className="text-warning fa-solid fa-circle-exclamation"></i>;
      case "info":
        return <i className="text-info fa-solid fa-circle-info"></i>;
      case "danger":
        return <i className="text-danger fa-solid fa-circle-exclamation"></i>;
      default:
        break;
    }
  };

  return (
    <div className="adou-notification-container">
      {notificationList.map((item: NotificationProps) => (
        <div
          onMouseEnter={() => handleMouseEnter(item)}
          onMouseLeave={() => handleMouseLeave(item)}
          key={item.id}
          className={`adou-notification ${
            item.appearing ? "adou-notification-appearing" : ""
          } ${item.disappearing ? "adou-notification-disappearing" : ""}`}
        >
          <div className="adou-notification-header">
            <div className="adou-notification-header-title">
              <div className="adou-notification-header-title-icon">
                {item.customTitleIcon
                  ? item.customTitleIcon
                  : generateTitleIcon(item)}
              </div>
              <span
                className={`text-${item.title} adou-notification-header-title-text`}
              >
                {item.title}
              </span>
            </div>
            <div
              className="adou-notification-header-close"
              onClick={() => close(item.id)}
            >
              <i className="fa-solid fa-xmark"></i>
            </div>
          </div>
          <div className={`adou-notification-content text-${item.type}`}>
            {item.message}
          </div>
        </div>
      ))}
    </div>
  );
};

const createNotificationInstance = (): NotificationInstance => {
  // 创建容器
  const container = document.createElement("div");
  document.body.appendChild(container);

  // 创建 root
  root = createRoot(container);
  root.render(<NotificationContainer />);

  return {
    open: (message: Omit<NotificationProps, "id" | "appearing">) => {
      const id = ++notificationIdRef;
      const data: NotificationProps = {
        id,
        duration: 3000,
        type: "info",
        ...message,
      };
      data.remainTime = data.duration;

      notifications.push(data);
      root?.render(<NotificationContainer />);

      // 设置appearing状态
      setTimeout(() => {
        const notification = notifications.find((n) => n.id === id);
        if (notification) {
          notification.appearing = true;
          root?.render(<NotificationContainer />);
        }
      }, 50);

      // 设置自动关闭定时器
      const timer = setTimeout(() => {
        const index = notifications.findIndex((n) => n.id === id);
        if (index !== -1) {
          notifications[index].disappearing = true;
          root?.render(<NotificationContainer />);

          setTimeout(() => {
            notifications = notifications.filter((n) => n.id !== id);
            root?.render(<NotificationContainer />);
          }, 300);
        }
      }, message.duration || 3000);
      timersMap.set(id, timer);

      // 设置倒计时定时器
      const interval = setInterval(() => {
        const notification = notifications.find((n) => n.id === id);
        if (notification) {
          notification.remainTime! -= 100;
          root?.render(<NotificationContainer />);
        }
      }, 100);
      intervalsMap.set(id, interval);
    },
  };
};

const useNotification = () => {
  useEffect(() => {
    if (!notificationInstance) {
      notificationInstance = createNotificationInstance();
    }
  }, []);

  return {
    open: (message: Omit<NotificationProps, "id" | "appearing">) => {
      notificationInstance?.open(message);
    },
  };
};

export default useNotification;
