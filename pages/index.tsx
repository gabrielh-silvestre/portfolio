import type { NextPage } from 'next';
import Head from 'next/head';
import { About } from '../src/components/About';

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
      <main className="bg-gray-400 h-screen max-h-screen">
        <About />
      </main>
    </>
  );
};

export default Home;
