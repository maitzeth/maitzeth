import { createGlobalStyle, ThemeProvider } from "styled-components";
import { CustomThemeProvider, ThemeContext } from "../context/themeContext";
import { themeScheme, fontSize } from "../config";
import { SWRConfig } from "swr";

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

  .card-shadow {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
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
    color: #2f3337;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: (resource, init) =>
          fetch(resource, init).then((res) => res.json()),
      }}
    >
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
    </SWRConfig>
  );
}

export default MyApp;
