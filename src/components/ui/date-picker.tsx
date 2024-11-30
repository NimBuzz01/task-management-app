"use client";

import * as React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function DatePicker({
  value,
  onChange,
  className,
  disabled,
}: {
  value: Date | undefined;
  onChange: (date: Date | undefined) => void;
  className?: string;
  disabled?: boolean;
}) {
  return (
    <Popover>
      <PopoverTrigger asChild className={disabled ? "pointer-events-none" : ""}>
        {value ? (
          <Button
            variant="outline"
            className={cn("!caption-c1 p-0 px-2", className)}
          >
            {format(value, "MMM d")}
          </Button>
        ) : (
          <Button
            variant={"outline"}
            className={cn(
              "border-dashed rounded-full text-custom-dark-300 border-custom-dark-100 p-3 h-max"
            )}
          >
            <CalendarIcon />
          </Button>
        )}
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={value}
          onSelect={onChange}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  );
}
