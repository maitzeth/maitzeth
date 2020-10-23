import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
import PropTypes from "prop-types";
import { Container } from "./styles/Grid";
import styled from "styled-components";

const Layout = ({
  children,
  title,
  fullHeight,
  topSpace,
  justifyCenter,
  alignItemsCenter,
}) => (
  <>
    <Header title={title} />
    <Navbar />
    <StyledContainer
      fullHeight={fullHeight}
      topSpace={topSpace}
      justifyCenter={justifyCenter}
      alignItemsCenter={alignItemsCenter}
    >
      {children}
    </StyledContainer>
    <Footer />
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  alignItemsCenter: PropTypes.bool,
};

const StyledContainer = styled(Container)`
  padding-top: ${(props) => (props.topSpace ? "3rem" : "0")};
`;

export default Layout;
