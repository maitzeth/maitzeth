import { createGlobalStyle, ThemeProvider } from "styled-components";
import { CustomThemeProvider, ThemeContext } from "../context/themeContext";
import { themeScheme } from "../config";

const GlobalStyle = createGlobalStyle`
  *, ::after, ::before {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    line-height: inherit;
    text-align: inherit;
    font-size: 16px;
    font-family: 'Montserrat', sans-serif;
    background-color:  ${(props) =>
      props.activeTheme === "dark"
        ? props.theme.colors.darkBackground
        : props.theme.colors.white};
    transition: all 100ms ease;
    text-rendering: optimizelegibility;
    -webkit-font-smoothing: antialiased;
  }

  a {
    color: ${(props) =>
      props.activeTheme === "dark"
        ? props.theme.colors.darkAccent
        : props.theme.colors.lightAccent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  #nprogress {
    .bar {
      background-color: ${(props) =>
        props.activeTheme === "dark"
          ? props.theme.colors.darkAccent
          : props.theme.colors.lightAccent}
    }

    .spinner-icon {
      border-top-color: ${(props) =>
        props.activeTheme === "dark"
          ? props.theme.colors.darkAccent
          : props.theme.colors.lightAccent};
      border-left-color: ${(props) =>
        props.activeTheme === "dark"
          ? props.theme.colors.darkAccent
          : props.theme.colors.lightAccent};
    }
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <CustomThemeProvider>
      <ThemeContext.Consumer>
        {(props) => (
          <ThemeProvider theme={themeScheme}>
            <GlobalStyle activeTheme={props.theme} />
            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </ThemeContext.Consumer>
    </CustomThemeProvider>
  );
}

export default MyApp;
