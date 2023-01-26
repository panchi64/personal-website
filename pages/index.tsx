import type { NextPage } from 'next';
import Head from 'next/head';

import React from 'react';

import MenuBar from '../components/ui/menu/MenuBar';
import SearchBar from '../components/ui/SearchBar';
import ProfileSection from '../components/ui/ProfileSection';
import MenuSections from '../components/ui/menu/MenuSections';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Welcome!</title>
        <link
          rel='shortcut icon'
          href='/favicon.ico'
        />
        <meta
          name='viewport'
          content='initial-scale=1.0, width=device-width'
        />
      </Head>
    </>
  );
};

export default Home;
