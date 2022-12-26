import "../styles/globals.css";

import type { AppProps } from "next/app";

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import defaultDarkTheme from "../styles/themes/dark/defaultDarkTheme";
import defaultLightTheme from "../styles/themes/light/defaultLightTheme";

import { store } from "../redux/store";
import { Provider } from "react-redux";

const lightTheme = defaultLightTheme;
const darkTheme = defaultDarkTheme;

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className,
        }}
      >
        <NextUIProvider>
          <Component {...pageProps} />
        </NextUIProvider>
      </NextThemesProvider>
    </Provider>
  );
}

export default App;
