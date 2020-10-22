import { createGlobalStyle, ThemeProvider } from "styled-components";
import { CustomThemeProvider, ThemeContext } from "../context/themeContext";
import { lightTheme, darkTheme, fontSize, themeTransition } from "../config";
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
    background-color:  ${(props) => props.theme.colors.background};
    transition: ${themeTransition};
    text-rendering: optimizelegibility;
  }

  a {
    color: ${(props) => props.theme.colors.accent};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  #nprogress {
    .bar {
      background-color: ${(props) => props.theme.colors.accent}
    }

    .spinner-icon {
      border-top-color: ${(props) => props.theme.colors.accent};
      border-left-color: ${(props) => props.theme.colors.accent};
    }
  }

  .card-shadow-lg {
    box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
  }

  .card-shadow-md {
    box-shadow: 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -1px rgba(0,0,0,.06);
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
    color: ${(props) => props.theme.colors.codeColor};
  }

  .post-wrapper {
    p, h1, h2, h3, h4, h5, h6 {
      color: ${(props) => props.theme.colors.text};
    }
  }

  .w-100 {
    width: 100%;
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
            <ThemeProvider
              theme={props.theme === "dark" ? darkTheme : lightTheme}
            >
              <GlobalStyle />
              <Component {...pageProps} />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </CustomThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
