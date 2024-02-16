"use client";
import { useEffect, useState } from "react";

export default function Range({ name, step, onChange }) {
  step = step || 1;

  const [range, setRange] = useState({
    min: -Infinity,
    max: Infinity,
  });

  const handleMinChange = (e) => {
    const value = e.target.value;

    if (value <= 0) {
      return setRange((prev) => ({ ...prev, min: -Infinity }));
    }

    setRange((prev) => ({ ...prev, min: e.target.value }));
  };

  const handleMaxChange = (e) => {
    const value = e.target.value;

    if (value <= 0) {
      return setRange((prev) => ({ ...prev, max: Infinity }));
    }

    setRange((prev) => ({ ...prev, max: e.target.value }));
  };

  useEffect(() => {
    if (!onChange) return;

    onChange(range);
  }, [range]);

  return (
    <fieldset className="flex items-center">
      <input
        type="number"
        value={range.min}
        onChange={handleMinChange}
        step={step || 1}
        name={name}
        placeholder="Min"
        className="p-2 w-full bg-transparent border rounded-md"
      />
      <span className="block min-w-5 h-0.5 rounded-full mx-2 bg-gray-300" />
      <input
        type="number"
        value={range.max}
        onChange={handleMaxChange}
        step={step || 1}
        name={name}
        placeholder="Max"
        className="p-2 w-full bg-transparent border rounded-md"
      />
    </fieldset>
  );
}
