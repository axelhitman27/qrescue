import React from "react";
import QRescueNavbar from "./QRescueNavbar";
import QRescueFooter from "./QRescueFooter";
import ScrollToTopButton from "./ScrollToTopButton";


const PageLayout = ({ children }) => {
  return (
    <>
      <QRescueNavbar />
      <main className="flex-grow-1">{children}</main>
      <QRescueFooter />
      <ScrollToTopButton />
    </>
  );
};

export default PageLayout;
