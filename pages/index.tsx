import type { NextPage } from 'next';
import Head from 'next/head';

import React from 'react';



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
