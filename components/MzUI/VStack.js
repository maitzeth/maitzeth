import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import styled, { css } from "styled-components";
import useDesignUtils from "../../hooks/useDesignUtils";

const VStack = ({ children, tag, space, marginBottom, marginTop, padding }) => {
  const { generateThemeProps } = useDesignUtils();
  const resolvedSpace = generateThemeProps("scale", space);

  return (
    <View
      tag={tag}
      display="block"
      resolvedSpace={resolvedSpace}
      marginBottom={marginBottom}
      marginTop={marginTop}
      padding={padding}
    >
      {children}
    </View>
  );
};

const View = styled(Box)`
  ${setChildrenSpace}
`;

function setChildrenSpace({ resolvedSpace }) {
  if (resolvedSpace) {
    return css`
      & > :not(style) ~ :not(style) {
        margin-block-start: ${resolvedSpace};
      }
    `;
  }
}

VStack.propTypes = {
  children: PropTypes.node.isRequired,
  space: PropTypes.string,
  alignItems: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  tag: PropTypes.string,
};

export default VStack;
