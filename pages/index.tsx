import { useTheme as useNextTheme } from "next-themes";

import type { NextPage } from "next";
import Head from "next/head";
import { useEffect } from "react";

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  useEffect(() => {
    setTheme("dark");
  }, [setTheme]);

  return (
    <>
      <Head>
        <title>Welcome!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
    </>
  );
};

export default Home;
