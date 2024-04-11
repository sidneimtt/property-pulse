//rafce  TAB   to create a functional component
import "@/assets/styles/globals.css";

import React from "react";

export const metadata = {
  title: "Property Pulse | Find the Perfect Rental ",
  description: "Find your dream reantal Property",
  keywords: "Rental , find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
};

export default MainLayout;
