import React from "react";
import PropTypes from "prop-types";
import Box from "../Box";
import styled, { css } from "styled-components";
import { getSpacingValue } from "../../theme";

const HStack = ({ children, space, alignItems, marginBottom, marginTop }) => {
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
    >
      {children}
    </StyledBox>
  );
};

const StyledBox = styled(Box)`
  ${setChildrenSpace}
`;

function setChildrenSpace({ space }) {
  if (space) {
    return css`
      & > * {
        margin-right: ${space} !important;

        &:last-child {
          margin-right: 0;
        }
      }
    `;
  }
}

HStack.propTypes = {};

export default HStack;
