import {} from "@/components/ui/calendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { DatePickerDemo } from "@/components/ui/Datepicker";

interface DateInputProps {
  checkDate: boolean;
  setCheckDate: React.Dispatch<React.SetStateAction<boolean>>;
  todoDate: Date;
  setTodoDate: React.Dispatch<React.SetStateAction<Date>>;
}

export const DateInput: React.FC<DateInputProps> = ({
  todoDate,
  setTodoDate,
}) => {
  return (
    <div className="inline-flex items-center ml-2">
      <Dialog>
        <DialogTrigger>Programar un toDo</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Elige una fecha</DialogTitle>
            <DialogDescription>
              Tu toDo sera programado para la fecha que eligas! asi podras planificarlo con antelación
            </DialogDescription>
          </DialogHeader>
          <DatePickerDemo todoDate={todoDate} setTodoDate={setTodoDate} />
        </DialogContent>
      </Dialog>
    </div>
  );
};
