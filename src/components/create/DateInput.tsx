interface DateInputProps {
  checkDate: boolean;
  setCheckDate: React.Dispatch<React.SetStateAction<boolean>>;
  todoDate: string;
  setTodoDate: React.Dispatch<React.SetStateAction<string>>;
}

export const DateInput: React.FC<DateInputProps> = ({
  checkDate,
  todoDate,
  setTodoDate,
  setCheckDate,
}) => {
  return (
    <div className="inline-flex items-center ml-2">
      <label htmlFor="setDate">Agendar fecha del ToDo </label>
      <label className="inline-flex items-center cursor-pointer ml-2">
        <input
          type="checkbox"
          className="hidden peer"
          name="setDate"
          checked={checkDate}
          onChange={() => setCheckDate(!checkDate)}
        />
        <span className="w-5 h-5 border-2 border-UI-white-hover rounded-sm peer-checked:bg-UI-highligth-element peer-checked:border-UI-white-hover flex items-center justify-center transition duration-200">
          <svg
            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </label>

      <input
        className={`inline-flex items-center ml-2 mt-2 ${checkDate ? "block" : "hidden"}`}
        type="date"
        name="date"
        value={todoDate}
        onChange={(e) => setTodoDate(e.target.value)}
      />
    </div>
  );
};
