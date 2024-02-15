"use client";

import { twMerge } from "tailwind-merge";

export default function Input({
  type,
  name,
  value,
  defaultValue,
  onChange,
  placeholder,
  required,
  className,
}) {
  return (
    <input
      type={type || "type"}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      className={twMerge(
        "block w-full p bg-gray-100 px-5 py-4 rounded-md",
        className
      )}
    />
  );
}
