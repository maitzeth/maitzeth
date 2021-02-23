import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import useDesignUtils from "../hooks/useDesignUtils";

const Box = ({ maxWidth, width, maxHeight, height, display, ...viewProps }) => {
  const { generateResponsiveProps } = useDesignUtils();

  const finalStyles = generateResponsiveProps({
    width,
    maxWidth,
    display,
  });

  return <View {...viewProps} finalStyles={finalStyles} />;
};

const View = styled.div(({ finalStyles }) => finalStyles);

Box.prototype = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
};

export default Box;
