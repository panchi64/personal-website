import { useTheme as useNextTheme } from "next-themes";

import CustomizedNavbar from "../components/customized-navbar";

import type { NextPage } from "next";
import Head from "next/head";
import { Button } from "@nextui-org/react";

const Home: NextPage = () => {
  const { setTheme } = useNextTheme();
  setTheme("dark");

  function showContactModal() {
    // TODO: Create a component to show as a modal when the button is pressed
    console.log("Contact Modal hass been pressed!");
  }

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
            component: (
              <Button auto flat color="gradient" onPress={showContactModal}>
                Contact
              </Button>
            ),
          },
        ]}
      />
    </>
  );
};

export default Home;
