import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import First from '../components/Home';

export default function Home() {

  useEffect(() => {
    const scrollContainer = document.querySelector("main");

    scrollContainer.addEventListener("wheel", (e) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    });
  });

  return (
    <>
      <Head>
        <title>zeljkoDe.</title>
        <meta name="description" content="Frontend developer portfolio" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main>
        <First id='home' />
        <section id='about'> <h2>about</h2> </section>
        <section id='work'> <h2>work</h2> </section>
        <section id='hire-me'> <h2>hire me</h2> </section>
      </main>
    </>
  );
}
