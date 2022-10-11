import { useTheme as useNextTheme } from "next-themes";

import CustomizedNavbar from "../components/customized-navbar";

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
        links={[
          { href: "/work", name: "Work" },
          { href: "/projects", name: "Projects" },
          { href: "/blog", name: "Blog" },
          { href: "/contact", name: "Contact" },
        ]}
      />
    </>
  );
};

export default Home;
