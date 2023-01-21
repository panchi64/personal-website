import type { NextPage } from "next";
import Head from "next/head";

import React from "react";

import MenuBar from "../components/ui/MenuBar";
import SearchBar from "../components/ui/SearchBar";
import ProfileSection from "../components/ui/ProfileSection";
import MenuSections from "../components/ui/MenuSections";

const menuSectionPayloadExample: any = {
  sections: [
    {
      title: "professional",
      content: [
        {
          sectionName: "work",
          sectionIcon: "bi-briefcase",
        },
        {
          sectionName: "projects",
          sectionIcon: "bi-kanban",
        },
        {
          sectionName: "research",
          sectionIcon: "bi-laptop",
        },
      ],
    },
    {
      title: "hobbies",
      content: [
        {
          sectionName: "blog",
          sectionIcon: "bi-pencil-square",
        },
        {
          sectionName: "photography",
          sectionIcon: "bi-camera2",
        },
        {
          sectionName: "sports",
          sectionIcon: "bi-bicycle",
        },
      ],
    },
    {
      title: "tools",
      content: [
        {
          sectionName: "finance",
          sectionIcon: "bi-cash-stack",
        },
        {
          sectionName: "productivity",
          sectionIcon: "bi-diagram-3",
        },
      ],
    },
  ],
};

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

            {menuSectionPayloadExample.sections.map((section: any) => {
              return <MenuSections payload={section} key={section.title} />;
            })}

            <MenuSections payload={menuSectionPayloadExample} />
          </div>
        </div>
      </MenuBar>
    </>
  );
};

export default Home;
