// useToast.tsx
import React, { useState, useEffect } from "react";
import { createRoot, Root } from "react-dom/client";
import "./toast.scss";

export interface ToastProps {
  type: "success" | "error" | "warning";
  content: string;
  id: number;
  appearing?: boolean;
  disappearing?: boolean;
  duration?: number;
  remainingTime?: number;
  width?: any;
}

let toastInstance: {
  open: (message: Omit<ToastProps, "id" | "appearing">) => void;
} | null = null;
let root: Root | null = null;
let toastId = 0;
let toasts: ToastProps[] = [];
let timersMap = new Map<number, NodeJS.Timeout>();
let intervalsMap = new Map<number, NodeJS.Timeout>();

const ToastContainer = () => {
  const [toastList, setToastList] = useState<ToastProps[]>([]);

  useEffect(() => {
    setToastList(toasts);
  }, [toasts]);

  const handleMouseEnter = (id: number) => {
    const timer = timersMap.get(id);
    const interval = intervalsMap.get(id);
    if (timer) clearTimeout(timer);
    if (interval) clearInterval(interval);
  };

  const handleMouseLeave = (id: number) => {
    const toast = toasts.find((t) => t.id === id);
    if (!toast) return;

    const remainingTime = toast.remainingTime;

    const timer = setTimeout(() => {
      toasts = toasts.map((t) =>
        t.id === id ? { ...t, disappearing: true } : t
      );
      setToastList([...toasts]);

      setTimeout(() => {
        toasts = toasts.filter((t) => t.id !== id);
        setToastList([...toasts]);
      }, 500);
    }, remainingTime);
    timersMap.set(id, timer);

    const interval = setInterval(() => {
      const toastIndex = toasts.findIndex((t) => t.id === id);
      if (toastIndex !== -1 && toasts[toastIndex].remainingTime) {
        toasts[toastIndex].remainingTime! -= 100;
        setToastList([...toasts]);
      }
    }, 100);
    intervalsMap.set(id, interval);
  };

  const handleClose = (toast: ToastProps) => {
    const timer = timersMap.get(toast.id);
    const interval = intervalsMap.get(toast.id);
    if (timer) clearTimeout(timer);
    if (interval) clearInterval(interval);

    toasts = toasts.map((t) =>
      t.id === toast.id ? { ...t, disappearing: true } : t
    );
    setToastList([...toasts]);

    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== toast.id);
      setToastList([...toasts]);
    }, 500);
  };

  return (
    <div className="adou-toast-container">
      {toastList.map((toast) => (
        <div
          style={{ width: toast.width }}
          key={toast.id}
          className={`adou-toast adou-toast-${toast.type} ${
            toast.appearing ? "appearing" : ""
          } ${toast.disappearing ? "disappearing" : ""}`}
          onMouseEnter={() => handleMouseEnter(toast.id)}
          onMouseLeave={() => handleMouseLeave(toast.id)}
        >
          <div className="adou-toast-content">
            {toast.content}
            <button
              className="adou-toast-close"
              onClick={() => handleClose(toast)}
            >
              &times;
            </button>
          </div>
          <div
            className="adou-toast-timer"
            style={{
              width: `${(toast.remainingTime || 0) / (toast.duration! / 100)}%`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

const createToastInstance = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  root = createRoot(container);
  root.render(<ToastContainer />);

  return {
    open: (message: Omit<ToastProps, "id" | "appearing" | "remainingTime">) => {
      const id = toastId++;
      const newToast: ToastProps = {
        id,
        duration: 3000,
        remainingTime: 3000,
        ...message,
      };
      newToast.remainingTime = newToast.duration;

      toasts.push(newToast);
      root?.render(<ToastContainer />);

      setTimeout(() => {
        const index = toasts.findIndex((t) => t.id === id);
        if (index !== -1) {
          toasts[index].appearing = true;
          root?.render(<ToastContainer />);
        }
      }, 10);

      const timer = setTimeout(() => {
        toasts = toasts.map((t) =>
          t.id === id ? { ...t, disappearing: true } : t
        );
        root?.render(<ToastContainer />);

        setTimeout(() => {
          toasts = toasts.filter((t) => t.id !== id);
          root?.render(<ToastContainer />);
        }, 500);
      }, newToast.remainingTime);
      timersMap.set(id, timer);

      const interval = setInterval(() => {
        const toastIndex = toasts.findIndex((t) => t.id === id);
        if (toastIndex !== -1 && toasts[toastIndex].remainingTime) {
          toasts[toastIndex].remainingTime! -= 100;
          root?.render(<ToastContainer />);
        }
      }, 100);
      intervalsMap.set(id, interval);
    },
  };
};

const useToast = () => {
  useEffect(() => {
    if (!toastInstance) {
      toastInstance = createToastInstance();
    }
  }, []);

  return {
    open: (message: Omit<ToastProps, "id" | "appearing" | "remainingTime">) => {
      toastInstance?.open(message);
    },
  };
};

export default useToast;
