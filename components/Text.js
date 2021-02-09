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

const Text = ({
  children,
  tag,
  size = "normal",
  color,
  align,
  casing,
  weight,
}) => {
  return (
    <Typography
      as={tag}
      size={size}
      color={color}
      align={align}
      casing={casing}
      weight={weight}
    >
      {children}
    </Typography>
  );
};

const Typography = styled.p`
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
        font-size: ${theme.textFontSizes.desktop[size]};

        ${mediaQuery.tablet} {
          font-size: ${theme.textFontSizes.tablet[size]};
        }
      `;
    }

    case "large": {
      return css`
        font-size: ${theme.textFontSizes.desktop[size]};

        ${mediaQuery.tablet} {
          font-size: ${theme.textFontSizes.tablet[size]};
        }
      `;
    }

    default: {
      return css`
        font-size: ${theme.textFontSizes.desktop.normal};

        ${mediaQuery.tablet} {
          font-size: ${theme.textFontSizes.tablet.normal};
        }
      `;
    }
  }
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  tag: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  align: PropTypes.string,
  casing: PropTypes.string,
  weight: PropTypes.string,
};

export default Text;
