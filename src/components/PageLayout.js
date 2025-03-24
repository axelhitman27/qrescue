import React from "react";
import QRescueNavbar from "./QRescueNavbar";
import QRescueFooter from "./QRescueFooter";

const PageLayout = ({ children }) => {
  return (
    <>
      <QRescueNavbar />
      <main className="flex-grow-1">{children}</main>
      <QRescueFooter />
    </>
  );
};

export default PageLayout;
