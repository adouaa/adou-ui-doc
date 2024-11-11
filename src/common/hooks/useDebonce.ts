import { useCallback, useRef } from "react";

const useDebounce = (fn: any, delay: number, dependency = []) => {
  // react中必须要用useCallback和useRef，不然状态改变就会一直变化
  const timer = useRef<NodeJS.Timeout | null>(null);
  return useCallback((...args: any) => {
    if (timer.current) {
      clearTimeout(timer.current);
      timer.current = null;
    }
    timer.current = setTimeout(() => {
      fn(...args);
    }, delay);
  }, dependency);
};

export default useDebounce;
