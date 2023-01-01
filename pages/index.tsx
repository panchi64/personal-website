import { useTheme as useNextTheme } from "next-themes";

import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect } from "react";
import MenuBar from "../components/ui/MenuBar";

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
      <MenuBar>
        {/*<SearchBar />*/}
        {/*<ProfileSection />*/}
        {/*<Items />*/}
      </MenuBar>
    </>
  );
};

export default Home;
