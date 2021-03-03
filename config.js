import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import { BREAKPOINTS } from "@mollycule/lattice";

const FONT_SIZE = 16;
const BRAND = "André Iván";

const { API_URL } = process.env;

const themeTransition = "all 100ms ease-in";

const pluck = (field) => (obj) => obj[field];

const fontSize = (px) => {
  const value = (px / FONT_SIZE) * 1;
  return `${value}rem`;
};

const mediaQuerySizes = {
  tablet: "740",
};

const navigation = [
  {
    title: "Home",
    to: "/",
  },
  {
    title: "About me",
    to: "/about",
  },
  {
    title: "Playground",
    to: "/playground",
  },
];

const fontSizes = {
  small: fontSize(14),
  text: fontSize(18),
  heading: fontSize(22),
  xHeading: fontSize(42),
};

const sizes = {
  xsmall: "0.25rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  xlarge: "2rem",
  none: "none",
  auto: "auto",
};

const media = {
  mobile: 768,
};

const weight = {
  weak: "400",
  strong: "600",
  xstrong: "800",
};

const lightTheme = {
  colors: {
    background: "#fff",
    text: "#777",
    accent: "#e74c3c",
    black: "#000",
    white: "#fff",
    postItem: "#fff",
    footer: "#80808008",
    thinBorders: "#e9e6e6",
  },
  fontSizes,
  breakpoints: BREAKPOINTS,
  scale: sizes,
  media,
  weight,
};

const darkTheme = {
  colors: {
    background: "#070919",
    text: "#a4a7c1",
    accent: "#27ae60",
    black: "#a4a7c1",
    white: "#fff",
    postItem: "#0d1131",
    footer: "#0d1131",
    thinBorders: "#a4a7c1",
  },
  fontSizes,
  breakpoints: BREAKPOINTS,
  scale: sizes,
  media,
  weight,
};

const GlobalStyle = createGlobalStyle`
  ${normalize}

  *, *::after, *::before {
    box-sizing: border-box;
  }
  

  body {
    margin: 0;
    line-height: inherit;
    text-align: inherit;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    background-color:  ${({ theme }) => theme.colors.background};
    transition: ${themeTransition};
    text-rendering: optimizelegibility;
  }

  button {
    padding: 0;
    margin: 0;
    border: 0;
    background: none;
    cursor: pointer;
  }

  a {
    color: ${({ theme }) => theme.colors.accent};
    text-decoration: underline;
  }

  #nprogress {
    .bar {
      background-color: ${({ theme }) => theme.colors.accent}
    }

    .spinner-icon {
      border-top-color: ${({ theme }) => theme.colors.accent};
      border-left-color: ${({ theme }) => theme.colors.accent};
    }
  }

  pre {
    line-height:1.2em;
    border-radius: 5px; 
    background-color: #f6f6f6;
    padding: 12px;
    background-size: 2.4em 2.4em;
    background-origin: content-box; 
    text-align: justify;
    font-family: 'Share Tech Mono', monospace;
    font-size: ${fontSize(12)};
    overflow: auto;
    color: ${({ theme }) => theme.colors.codeColor};
  }

  h1, h2, h3, h4, h5, h6, p {
    margin: 0;
  }

  .post-wrapper {
    p, h1, h2, h3, h4, h5, h6 {
      color: ${({ theme }) => theme.colors.text};
    }
  }

`;

export {
  navigation,
  BRAND,
  fontSize,
  mediaQuerySizes,
  lightTheme,
  darkTheme,
  themeTransition,
  API_URL,
  GlobalStyle,
  pluck,
};
