import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

import {
  mediaQuery,
  setTextAlign,
  setTextTransform,
  setTextColor,
  getTextWeights,
} from "../theme";

const Heading = ({
  children,
  tag,
  size = "normal",
  color,
  align,
  casing,
  weight,
}) => {
  return (
    <Text
      as={tag}
      size={size}
      color={color}
      align={align}
      casing={casing}
      weight={weight}
    >
      {children}
    </Text>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  casing: PropTypes.string,
  weight: PropTypes.string,
};

const Text = styled.h1`
  ${setFontSize}
  ${setTextColor}
  ${setTextAlign}
  ${setTextTransform}
  ${getTextWeights}
`;

function setFontSize({ theme, size }) {
  switch (size) {
    case "small": {
      return css`
        font-size: ${theme.titlesFontSizes.desktop[size]};

        ${mediaQuery.tablet} {
          font-size: ${theme.titlesFontSizes.tablet[size]};
        }
      `;
    }

    case "large": {
      return css`
        font-size: ${theme.titlesFontSizes.desktop[size]};

        ${mediaQuery.tablet} {
          font-size: ${theme.titlesFontSizes.tablet[size]};
        }
      `;
    }

    default: {
      return css`
        font-size: ${theme.titlesFontSizes.desktop.normal};

        ${mediaQuery.tablet} {
          font-size: ${theme.titlesFontSizes.tablet.normal};
        }
      `;
    }
  }
}

export default Heading;
