import { useEffect, useRef, useState } from "react";

interface Option {
  label: string;
  value: string;
}

interface CustomDropdownProps {
  options: Option[];
  defaultValue?: Option;
  onChange?: (value: Option) => void;
}

export default function CustomDropdown({
  options,
  defaultValue,
  onChange,
}: CustomDropdownProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<Option | null>(
    defaultValue || options[0] || null
  );

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (option: Option) => {
    setSelected(option);
    setIsOpen(false);
    onChange?.(option);
  };

  return (
    <div ref={dropdownRef} className="relative w-full ">
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className=" flex w-full items-center justify-between rounded-2xl border border-[#424242] bg-transparent px-6 py-2 text-sm text-white focus:outline-none focus:ring-0 focus:ring-none"
      >
        <span className="pr-2">{selected?.label}</span>

        {/* Custom Arrow */}
        <svg
          className={`h-6 w-6 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute z-10 mt-0 right-0 max-h-60 w-[360px] overflow-auto rounded-2xl border border-[#424242] bg-[#00000099] shadow-md py-4">
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option)}
              className={`cursor-pointer px-4 py-4 border-b text-sm  ${
                selected?.value === option.value
                  ? "bg-[#242424] font-medium text-white"
                  : "text-white"
              }`}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
