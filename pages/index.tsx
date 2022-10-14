import { useTheme as useNextTheme } from "next-themes";

import CustomizedNavbar from "../components/navbar/customized-navbar";
import DefaultContactModalwButton from "../components/modals/default-contact-modal-w-button";
import SideBarCard from "../components/cards/side-bar-card";

import { Card, Text } from "@nextui-org/react";

import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  setTheme("dark");

  return (
    <>
      <Head>
        <title>Welcome!</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CustomizedNavbar
        brand="Panchi"
        links={[
          // TODO: Replace this with a firebase docs connection/request to get the links
          { href: "/work", name: "Work" },
          { href: "/projects", name: "Projects" },
          { href: "/blog", name: "Blog" },
        ]}
        buttons={[
          {
            id: "contact",
            component: <DefaultContactModalwButton />,
          },
        ]}
      />
      <SideBarCard
        body={[
          {
            id: "initial-paragraph",
            component: (
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
                pariatur ducimus at ad ut consequatur. Minus consectetur sed
                modi iure rerum sit, laborum, doloribus officiis sunt ipsam
                magni, in id ut atque unde? Amet officia quidem pariatur eaque
                iure odio? Tempora deserunt praesentium animi libero, ipsum
                molestias nulla dicta voluptatum error commodi quam ea
                reprehenderit odio ipsam nihil maiores dolorum sint accusantium
                quo soluta illum asperiores officia id dolorem? Sit molestiae
                aliquid error. Harum deleniti sapiente a, officiis, aperiam
                similique tenetur, cumque aliquid natus culpa dolor voluptate
                illo recusandae dolorum quae tempora optio nesciunt. Aperiam
                modi quisquam unde accusantium minima!
              </Text>
            ),
          },
        ]}
      />
    </>
  );
};

export default Home;
