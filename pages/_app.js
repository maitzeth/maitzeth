import { ThemeProvider } from "styled-components";
import { CustomThemeProvider, ThemeContext } from "../context/themeContext";
import { lightTheme, darkTheme, GlobalStyle } from "../config";
import { SWRConfig } from "swr";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  const SWROptions = {
    fetcher: async (resource) => {
      const res = await fetch(resource);

      if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        error.info = await res.json();
        error.status = res.status;
        throw error;
      }

      return res.json();
    },
    revalidateOnFocus: false,
    onError: (err) => {
      toast.error(err?.info.message);
    },
  };

  return (
    <SWRConfig value={SWROptions}>
      <CustomThemeProvider>
        <ThemeContext.Consumer>
          {({ theme }) => (
            <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
              <GlobalStyle />
              <Component {...pageProps} />
              <ToastContainer
                position="bottom-right"
                autoClose={4000}
                pauseOnHover
              />
            </ThemeProvider>
          )}
        </ThemeContext.Consumer>
      </CustomThemeProvider>
    </SWRConfig>
  );
}

export default MyApp;
