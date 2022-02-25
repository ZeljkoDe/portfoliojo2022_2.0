import Head from 'next/head';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Head>
        <title>zeljkoDe.</title>
        <meta name="description" content="Frontend developer portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <section id='home'></section>
        <section id='about'></section>
        <section id='work'></section>
        <section id='hire-me'></section>
      </main>
    </>
  );
}
