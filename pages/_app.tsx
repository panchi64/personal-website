import "../styles/globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

import type { AppProps } from "next/app";

import { store } from "../redux/store";
import { Provider } from "react-redux";
import MenuLayout from "../components/layouts/MenuLayout";

function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <MenuLayout>
        <Component {...pageProps} />
      </MenuLayout>
    </Provider>
  );
}

export default App;
