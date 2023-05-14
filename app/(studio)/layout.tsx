import "../globals.css";
import React from "react";

export const metadata = {
  title: "Studio",
  description: "Sanity Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <main>{children}</main>
      </body>
    </html>
  );
}
