interface ImportantProps {
  important: boolean;
  setImportant: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Important: React.FC<ImportantProps> = ({
  important,
  setImportant,
}) => {
  return (
    <div className="inline-flex items-center ml-2">
      <label htmlFor="important">Marcar como importante: </label>
      <label className="inline-flex items-center cursor-pointer ml-2">
        <input
          type="checkbox"
          className="hidden peer"
          name="important"
          checked={important}
          onChange={() => setImportant(!important)}
        />

        <span className="w-5 h-5 border-2 border-UI-white-hover rounded-sm peer-checked:bg-UI-highligth-element peer-checked:border-UI-highligth-element flex items-center justify-center transition duration-200">
          <svg
            className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </span>
      </label>
    </div>
  );
};
