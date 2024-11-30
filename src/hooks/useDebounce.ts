import { useCallback, useRef } from "react";
import debounce from "lodash.debounce";

/**
 * Custom hook for debouncing a function.
 *
 * @param callback - The function to debounce.
 * @param delay - The debounce delay in milliseconds.
 * @returns The debounced function.
 */
const useDebounce = <T extends (...args: any[]) => any>(
  callback: T,
  delay: number
) => {
  const callbackRef = useRef(callback);

  // Update the callback reference if it changes
  callbackRef.current = callback;

  // Return a memoized debounced function
  return useCallback(
    debounce((...args: Parameters<T>) => {
      callbackRef.current(...args);
    }, delay),
    [delay]
  );
};

export default useDebounce;
