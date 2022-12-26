import { useTheme as useNextTheme } from "next-themes";

import CustomizedNavbar from "../components/navbar/customized-navbar";
import DefaultContactModalwButton from "../components/modals/default-contact-modal-w-button";
import SideBarCard from "../components/cards/side-bar-card";

import { Text } from "@nextui-org/react";

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
      <CustomizedNavbar
        links={[
          // TODO: Replace this with a firebase docs connection/request to get the links
          { href: "/work", name: "Work" },
          { href: "/projects", name: "Projects" },
          { href: "/hobbies", name: "Hobbies" },
          { href: "/blog", name: "Blog" },
          { href: "/about", name: "About" },
        ]}
        buttons={[
          {
            componentID: "contact",
            component: <DefaultContactModalwButton />,
          },
        ]}
      />
      <SideBarCard
        body={[
          {
            componentID: "initial-paragraph",
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
