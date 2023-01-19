import type { NextPage } from "next";
import Head from "next/head";

import React, { useEffect } from "react";

import MenuBar from "../components/ui/MenuBar";
import SearchBar from "../components/ui/SearchBar";
import ProfileSection from "../components/ui/ProfileSection";
import MenuSections from "../components/ui/MenuSections";

const menuSectionPayloadExample: any = {
  "professional": [
    "work",
    "projects",
    "research",
  ],
  "hobbies": [
    "blog",
    "photography",
    "sports",
  ],
  "tools": [
    "finance",
    "productivity",
    
  ]
}

const Home: NextPage = () => {
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
            <MenuSections payload={ menuSectionPayloadExample } />
          </div>
        </div>
      </MenuBar>
    </>
  );
};

export default Home;
