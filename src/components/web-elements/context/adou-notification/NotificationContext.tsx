import { useState, useRef, createContext } from 'react';
import React from 'react';
import './index.scss';

interface NotificationProps {
    id?: number;
    title?: any;
    message?: any;
    type?: 'success' | 'danger' | 'warning' | 'info';
    appearing?: boolean;
    disappearing?: boolean;
    duration?: number;
    remainTime?: number;
    customTitleIcon?: React.ReactNode;
}

interface NotificationProvider {
    children: React.ReactNode;
}

export const NotificationContext = createContext<
    | {
          open: (message: Omit<NotificationProps, 'id' | 'appearing'>) => void;
      }
    | undefined
>(undefined);
const NotificationProvider = ({ children }: NotificationProvider) => {
    const [notifications, setNotifications] = useState<NotificationProps[]>([]);

    const notificationIdRef = useRef<number>(0);

    const timerRef = useRef<NodeJS.Timeout>();
    const countdownIntervalRef = useRef<NodeJS.Timeout>();
    const timersRef = useRef<any[]>([]);
    const countdownIntervalsRef = useRef<any[]>([]);

    const open = (message: Omit<NotificationProps, 'id' | 'appearing'>) => {
        const data: NotificationProps = {
            id: ++notificationIdRef.current,
            duration: 3000,
            remainTime: 3000,
            type: 'info',
            ...message,
        };
        setNotifications([...notifications, data]);
        setTimeout(() => {
            setNotifications((preData: any) =>
                preData.map((item: NotificationProps) => {
                    if (item.id === notificationIdRef.current) {
                        item.appearing = true;
                    }
                    return item;
                })
            );
        }, 50);

        timerRef.current = setTimeout(() => {
            close(data.id);
        }, message.duration || 3000);

        timersRef.current.push({ id: data.id, current: timerRef.current });

        countdownIntervalRef.current = setInterval(() => {
            setNotifications((preData: any) =>
                preData.map((item: NotificationProps) => {
                    if (item.id === data.id) {
                        item.remainTime! -= 100;
                    }
                    return item;
                })
            );
        }, 100);

        countdownIntervalsRef.current!.push({ id: data.id, current: countdownIntervalRef.current });
    };

    const close = (id?: number) => {
        setNotifications((preData: any) =>
            preData.map((item: NotificationProps) => {
                if (id !== undefined && item.id === id) {
                    item.disappearing = true;
                }
                return item;
            })
        );

        setTimeout(() => {
            setNotifications((preData: any) => preData.filter((item: NotificationProps) => item.id !== id));
        }, 300);
    };

    const handleMouseEnter = (item: NotificationProps) => {
        // 1. 先找到原来的定时器和计时器
        const timerRef = timersRef.current.find((timer: any) => timer.id === item.id);
        const countdownIntervalRef = countdownIntervalsRef.current.find((interval: any) => interval.id === item.id);

        // 2. 暂停定时器和计时器
        clearTimeout(timerRef.current);
        clearInterval(countdownIntervalRef.current);
    };

    // 注意：鼠标移出的时候要先找到鼠标移出的是定时器和计时器，然后清除掉对应的定时器和计时器，再恢复定时器和计时器
    const handleMouseLeave = (item: NotificationProps) => {
        // 1. 先找到鼠标移出时的定时器和计时器
        const timerRef = timersRef.current.find((timer: any) => timer.id === item.id);
        const countdownIntervalRef = countdownIntervalsRef.current.find((interval: any) => interval.id === item.id);

        // 2. 再清除对应的定时器和计时器(如果dsq和计时器有值的话)
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
        if (countdownIntervalRef.current) {
            clearInterval(countdownIntervalRef.current);
        }

        // 3. 恢复定时器和计时器找到item对应的Notification
        const notification = notifications.find((notification: NotificationProps) => notification.id === item.id);
        timerRef.current = setTimeout(() => {
            close(item.id);
        }, notification?.remainTime);

        countdownIntervalRef.current = setInterval(() => {
            setNotifications((preData: any) =>
                preData.map((item: NotificationProps) => {
                    if (item.id === notification?.id) {
                        item.remainTime! -= 100;
                    }
                    return item;
                })
            );
        }, 100);
    };

    const generateTitleIcon = (item: NotificationProps) => {
        switch (item.type) {
            case 'success':
                return <i className="text-success fa-regular fa-circle-check"></i>;
            case 'warning':
                return <i className="text-warning fa-solid fa-circle-exclamation"></i>;
            case 'info':
                return <i className="text-info fa-solid fa-circle-info"></i>;
            case 'danger':
                return <i className="text-danger fa-regular fa-circle-xmark"></i>;
            default:
                break;
        }
    };

    return (
        <NotificationContext.Provider value={{ open }}>
            {children}
            <div className="adou-notification-container">
                {notifications.map((item: NotificationProps, index: number) => (
                    <div
                        onMouseEnter={() => handleMouseEnter(item)}
                        onMouseLeave={() => handleMouseLeave(item)}
                        key={item.id}
                        className={`adou-notification ${item.appearing ? 'adou-notification-appearing' : ''} ${item.disappearing ? 'adou-notification-disappearing' : ''}`}
                    >
                        <div className="adou-notification-header">
                            <div className="adou-notification-header-title">
                                <div className="adou-notification-header-title-icon">{item.customTitleIcon ? item.customTitleIcon : generateTitleIcon(item)}</div>
                                <span className={`text-${item.title} adou-notification-header-title-text`}>{item.title}</span>
                            </div>
                            <div className="adou-notification-header-close" onClick={() => close(item.id)}>
                                <i className="fa-solid fa-xmark"></i>
                            </div>
                        </div>
                        <div className={`adou-notification-content text-${item.type}`}>{item.message}</div>
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    );
};

export default NotificationProvider;
