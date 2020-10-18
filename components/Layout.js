import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import PropTypes from "prop-types";
import { Container } from "./styles/Grid";
import styled from "styled-components";

const Layout = ({ children, title, fullHeight, topSpace }) => (
  <>
    <Header title={title} />
    <Navbar />
    <StyledContainer fullHeight={fullHeight} topSpace={topSpace}>
      {children}
    </StyledContainer>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool,
};

const StyledContainer = styled(Container)`
  margin-top: ${(props) => (props.topSpace ? "3rem" : "0")};
`;

export default Layout;
