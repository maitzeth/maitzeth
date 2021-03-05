import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { Container } from "./MzUI";

const Layout = ({ children, title, verticalCentered }) => (
  <>
    <Header title={title} />
    <Navbar />
    <Container tag="main" verticalCentered={verticalCentered}>
      {children}
    </Container>
    {/* <Footer /> */}
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  alignItemsCenter: PropTypes.bool,
  verticalCentered: PropTypes.bool,
};

export default Layout;
