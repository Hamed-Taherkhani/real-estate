import { roboto } from "./ui/fonts";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-100`}>{children}</body>
    </html>
  );
}
