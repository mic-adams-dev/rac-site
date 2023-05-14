import { Navbar } from "@/components/Navbar";
import "../globals.css";
import React from "react";

export const metadata = {
  title: "Weakest Link",
  description: "Marxist Journal connected to the RAC Discord Server",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
