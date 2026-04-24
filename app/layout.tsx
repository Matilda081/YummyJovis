import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";



export const metadata: Metadata = {
  title: "YummyJovis😋",
  description: "Savor the moment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en">
      <body className="bg-pink-50 text-gray-800">
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
