import { useTheme as useNextTheme } from "next-themes";

import type { NextPage } from "next";
import Head from "next/head";

import React, { useEffect } from "react";

import MenuBar from "../components/ui/MenuBar";
import SearchBar from "../components/ui/SearchBar";
import ProfileSection from "../components/ui/ProfileSection";

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
        {/* TODO: Figure out how to align the menu items in the center of the menu bar area */}
        <div className="flex justify-center">
          <div className="max-w-xs ">
            <SearchBar />
            <ProfileSection title="francisco casiano" subtitle="about" />
            {/*<Items />*/}
          </div>
        </div>
      </MenuBar>
    </>
  );
};

export default Home;
