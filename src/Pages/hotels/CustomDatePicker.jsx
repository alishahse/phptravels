import { useState, useRef, useEffect } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const CustomDatePicker = ({ label, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // outside click close
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative lg:col-span-2">
      
      <div
        onClick={() => setOpen(!open)}
        className="flex flex-col justify-center gap-1 p-3 border border-gray-200 rounded-md h-[18.75] cursor-pointer "
      >
        <label className="text-[11px] font-bold text-gray-400 tracking-wide">
          {label}
        </label>

        <p className="text-[13px] font-bold text-gray-900">
          {value ? value.toLocaleDateString() : "Select date"}
        </p>
      </div>

      {/* CALENDAR DROPDOWN */}
      {open && (
        <div className="absolute left-0 top-full mt-2 z-50 bg-white shadow-xl rounded-sm p-1">
          <DayPicker
            mode="single"
            selected={value}
            onSelect={(date) => {
              onChange(date);
              setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CustomDatePicker;
