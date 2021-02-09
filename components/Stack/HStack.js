import React from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import styled, { css } from "styled-components";
import { getSpacingValue, mediaQuery } from "../../theme";

const HStack = ({
  children,
  space,
  alignItems,
  marginBottom,
  marginTop,
  collapseOn,
}) => {
  // Create space between each childrens ignoring the last child space
  const spaceSize = getSpacingValue(space);

  return (
    <StyledBox
      display="flex"
      flexDirection="row"
      alignItems={alignItems}
      space={spaceSize}
      marginBottom={marginBottom}
      marginTop={marginTop}
      collapseOn={collapseOn}
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  ${setChildrenSpace}
  ${setCollapse}
`;

function setCollapse({ collapseOn }) {
  if (collapseOn) {
    if (collapseOn === "tablet") {
      return css`
        ${mediaQuery.tablet} {
          flex-direction: column !important;
        }
      `;
    }

    if (collapseOn === "desktop") {
      return css`
        flex-direction: column !important;
      `;
    }
  }
}

function setChildrenSpace({ space }) {
  if (space) {
    return css`
      & > * {
        margin-right: ${space};

        &:last-child {
          margin-right: 0;
        }
      }
    `;
  }
}

HStack.propTypes = {};

export default HStack;
