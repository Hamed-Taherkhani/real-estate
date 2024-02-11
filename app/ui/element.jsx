import { createElement } from "react";

export default function Element({ name, className, children }) {
  return createElement(name || "div", { className }, children);
}
