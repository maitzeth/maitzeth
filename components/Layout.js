import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { Container } from "./styles/Grid";

const Layout = ({ children, title, fullHeight }) => (
  <>
    <Header title={title} />
    <Navbar />
    <Container fullHeight={fullHeight}>{children}</Container>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool,
};

export default Layout;
