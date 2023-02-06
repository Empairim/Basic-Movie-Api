import "./globals.css";
import { Montserrat } from "@next/font/google";
import Navbar from "./Navbar";

const montserrat = Montserrat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-monstserrat", //so it works in tailwind
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />

      <body className={`${montserrat.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
