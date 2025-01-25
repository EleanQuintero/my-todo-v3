"use client"

import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DateInputProps {
    todoDate: Date 
    setTodoDate: React.Dispatch<React.SetStateAction<Date>>;
  }
  
 
export const DatePickerDemo: React.FC<DateInputProps> = ({
    todoDate,
    setTodoDate,
}) => {
 
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !todoDate && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {todoDate ? format(todoDate, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
        <Calendar
          mode="single"
          selected={todoDate}
          onSelect={(day) => day && setTodoDate(day)}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}
