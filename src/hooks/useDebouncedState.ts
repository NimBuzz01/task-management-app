import { useEffect, useState } from "react";
import useDebounce from "@/hooks/useDebounce";

export const useDebouncedState = <T>(
  initialValue: T,
  updateFn: (value: T) => void,
  debounceDelay = 300
) => {
  const [value, setValue] = useState(initialValue);
  const debouncedUpdate = useDebounce(updateFn, debounceDelay);

  useEffect(() => {
    debouncedUpdate(value);
  }, [value, debouncedUpdate]);

  return [value, setValue] as const;
};
