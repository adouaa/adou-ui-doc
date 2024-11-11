import { useCallback, useRef } from "react";

const useThrottle = (fn: any, delay: number, dependency = []) => {
  const time = useRef<number>(0);
  // react中必须要用useCallback和useRef，不然状态改变就会一直变化
  return useCallback((...args: any) => {
    const now = Date.now();
    if (!time.current || now - time.current >= delay) {
      fn(...args);
      time.current = now;
    }
  }, dependency);
};

export default useThrottle;
