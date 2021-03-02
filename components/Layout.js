import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";

const Layout = ({ children, title }) => (
  <>
    <Header title={title} />
    {/* <Navbar /> */}
    {children}
    {/* <Footer /> */}
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  alignItemsCenter: PropTypes.bool,
};

export default Layout;
