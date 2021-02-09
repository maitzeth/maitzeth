import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";
import { getSpacingValue } from "../theme";

const Box = ({
  children,
  tag,
  display = "block",
  alignItems,
  justifyContent,
  flexDirection,
  marginBottom,
  marginTop,
  className,
}) => {
  return (
    <Wrapper
      as={tag}
      display={display}
      justifyContent={justifyContent}
      marginBottom={marginBottom}
      marginTop={marginTop}
      alignItems={alignItems}
      className={className}
      flexDirection={flexDirection}
    >
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  ${setDisplay}
  ${setJustifyContent}
  ${setAlignItems}
  ${getMarginBottom}
  ${getMarginTop}
  ${setFlexDirection}
`;

function setFlexDirection({ flexDirection }) {
  if (flexDirection) {
    return css`
      flex-direction: ${flexDirection};
    `;
  }
}

function setAlignItems({ alignItems }) {
  if (alignItems) {
    return css`
      align-items: ${alignItems};
    `;
  }
}

function setJustifyContent({ justifyContent }) {
  if (justifyContent) {
    return css`
      justify-content: ${justifyContent};
    `;
  }
}

function setDisplay({ display }) {
  if (display) {
    return css`
      display: ${display};
    `;
  }
}

function getMarginBottom({ marginBottom }) {
  if (marginBottom) {
    const value = getSpacingValue(marginBottom);

    return css`
      margin-bottom: ${value};
    `;
  }
}

function getMarginTop({ marginTop }) {
  if (marginTop) {
    const value = getSpacingValue(marginTop);

    return css`
      margin-top: ${value};
    `;
  }
}

Box.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  display: PropTypes.string,
  className: PropTypes.string,
};

export default Box;
