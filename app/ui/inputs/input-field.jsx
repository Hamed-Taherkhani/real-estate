"use client";

import { twMerge } from "tailwind-merge";

export default function InputField({
  type,
  name,
  placeholder,
  onChange,
  defaultValue,
  value,
  required,
  className,
}) {
  return (
    <input
      type={type || "text"}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
      defaultValue={defaultValue}
      value={value}
      required={required}
      className={twMerge("block w-full px-4 py-3 rounded-md", className)}
    />
  );
}
