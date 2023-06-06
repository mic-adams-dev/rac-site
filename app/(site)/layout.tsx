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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Mono&family=Source+Sans+Pro&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black">
        <Navbar />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
