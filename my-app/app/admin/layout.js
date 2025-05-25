import React from "react";

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased bg-gray-100">
        {children}
      </body>
    </html>
  );
}