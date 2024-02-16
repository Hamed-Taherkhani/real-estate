"use client";

import { useEffect, useState } from "react";

export default function RowSelectBox({ items, name, defaultValue, onChange }) {
  const [selected, setSelected] = useState(defaultValue);
  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    if (!onChange) return;

    onChange(selected);
  }, [selected]);

  return (
    <fieldset className="flex border rounded-md overflow-hidden">
      {items.map(({ title, value }, index) => (
        <label key={index} className="w-full cursor-pointer">
          <input
            type="radio"
            value={value}
            name={name}
            hidden
            checked={selected == value}
            onChange={handleChange}
            className="peer"
          />
          <span
            className={`block w-full text-center p-2 transition duration-500 peer-checked:bg-black peer-checked:text-gray-50 border-r ${
              index === items.length - 1 ? "border-none" : ""
            }`}
          >
            {title}
          </span>
        </label>
      ))}
    </fieldset>
  );
}
