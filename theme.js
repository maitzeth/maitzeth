import { css } from "styled-components";

export const mediaQuery = {
  tablet: `@media screen and (max-width: 740px)`,
};

export const getHeadingLevel = (size) => {
  // <"1" | "2" | "3">
  switch (size) {
    case "small": {
      return 1.75;
    }

    case "medium": {
      return 1.5;
    }

    case "large":
    default: {
      return 2.75;
    }
  }
};

export const getTextWeights = ({ weight }) => {
  // <"weak | normal | strong">
  switch (weight) {
    case "weak": {
      return css`
        font-weight: 400;
      `;
    }

    case "strong": {
      return css`
        font-weight: 800;
      `;
    }

    case "normal":
    default: {
      return css`
        font-weight: 500;
      `;
    }
  }
};

export const setTextTransform = ({ casing }) => {
  if (casing) {
    return css`
      text-transform: ${casing};
    `;
  }
};

export const setTextAlign = ({ align }) => {
  if (align) {
    return css`
      text-align: ${align};
    `;
  }
};

export const setTextColor = ({ theme, color }) => {
  switch (color) {
    case "black": {
      return css`
        color: ${theme.colors[color]};
      `;
    }

    case "accent": {
      return css`
        color: ${theme.colors[color]};
      `;
    }

    default: {
      return css`
        color: ${theme.colors.text};
      `;
    }
  }
};
