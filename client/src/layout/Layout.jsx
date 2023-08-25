import React from "react";
import Navbar from "../features/navbar/Navbar";
import Footer from "../features/footer/Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div>{children}</div>

      <Footer />
    </div>
  );
};

export default Layout;
