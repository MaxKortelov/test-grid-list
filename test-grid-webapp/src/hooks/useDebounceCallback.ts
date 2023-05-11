import { useCallback, useRef } from "react";

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useDebounceCallback(callback: (...args: any) => void, delay: number) {
  const timer = useRef<NodeJS.Timeout>();

  const debounceCallback = useCallback(
    // Allows calling function with any arguments
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    (...args) => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
      timer.current = setTimeout(() => {
        // Calling function with any arguments
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        callback(...args);
      }, delay);
    },
    [callback, delay]
  );

  return debounceCallback;
}
