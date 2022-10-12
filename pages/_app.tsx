import "../styles/globals.css";

import type { AppProps } from "next/app";

import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

import { store } from "../redux/store";
import { Provider } from "react-redux";

const lightTheme = createTheme({
  type: "light",
  theme: {},
});
const darkTheme = createTheme({
  type: "dark",
  theme: {},
});

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
