import React from "react";
import PropTypes from "prop-types";
import Box from "./Box";
import styled, { css } from "styled-components";
import useDesignUtils from "../../hooks/useDesignUtils";

const HStack = ({
  children,
  tag,
  alignItems,
  marginBottom,
  marginTop,
  padding,
  horizontalCenter,
  space,
}) => {
  const { generateThemeProps } = useDesignUtils();
  const spaceSizing = generateThemeProps("scale", space);

  return (
    <View
      tag={tag}
      display="flex"
      flexDirection="row"
      alignItems={alignItems}
      space={spaceSizing}
      marginBottom={marginBottom}
      marginTop={marginTop}
      padding={padding}
      justifyContent={horizontalCenter && "center"}
    >
      {children}
    </View>
  );
};

const View = styled(Box)`
  ${setCollapse}
`;

function setCollapse({ space }) {
  if (space) {
    return css`
      & > :not(style) ~ :not(style) {
        margin-inline-start: ${space};
      }
    `;
  }
}

HStack.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  alignItems: PropTypes.string,
  marginBottom: PropTypes.string,
  marginTop: PropTypes.string,
  padding: PropTypes.string,
  horizontalCenter: PropTypes.bool,
  space: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default HStack;
