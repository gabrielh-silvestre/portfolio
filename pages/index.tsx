import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../src/components/Header';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gabriel Silvestre | Portfolio</title>
        <meta name="description" content="Portfolio of Gabriel Silvestre" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>hello world</main>
    </>
  );
};

export default Home;
