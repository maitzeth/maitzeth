import { css } from "styled-components";

export const mediaQuery = {
  mobile: `@media screen and (max-width: 768px)`,
  desktop: `@media screen and (min-width: 768px)`,
};

export const getSpacingValue = (size) => {
  // <"small" | "normal" | "large", "xlarge">
  switch (size) {
    case "small": {
      return "0.5rem";
    }

    case "normal": {
      return "1rem";
    }

    case "large": {
      return "1.5rem";
    }

    case "xlarge": {
      return "2rem";
    }

    default: {
      return null;
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
